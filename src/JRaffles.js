process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x2e02b8 = require('fs'), _0x4a6aec = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x362247(_0x192577) {
    const _0xc5319d = _0x2e02b8['createWriteStream'](_0x192577, { 'flags': 'a' }), _0x46b9fb = console['log'];
    console['log'] = function () {
        const _0x112c3e = Array['prototype']['slice']['call'](arguments), _0x4e15fd = _0x112c3e['join']('\x20') + '\x0a';
        _0xc5319d['write'](_0x4e15fd), _0x46b9fb['apply'](console, _0x112c3e);
    };
}
_0x362247('../logs/log\x20' + _0x4a6aec);
var _0x388a52 = require('tough-cookie'), _0x35c1c1 = require('node-imap'), _0x332a7e = require('util')['inspect'];
const _0x2b928 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x1d5d33 } = require('discord.js');
var _0x1973bc = require('exe');
const { execFile: _0x5ed4f1 } = require('child_process'), _0x324aa5 = require('puppeteer-extra'), _0x1a3f3e = require('puppeteer-extra-plugin-recaptcha'), _0x412339 = require('puppeteer-extra-plugin-stealth'), _0x58e018 = require('chalk'), _0x5988ee = require('node-bash-title'), _0x5d8515 = require('axios'), _0x1df262 = require('papaparse');
var _0x21ffa4 = require('random-name');
const _0x217687 = require('request');
var _0x2a5d0b = require('prompt');
const _0x522c94 = _0x217687['jar']();
var _0x3b7f5f = {};
const _0x2d8809 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x3aa967 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x339e82 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x584e34 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x21930e = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x15f228 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x172030 = 'https://discord.com/api/webhooks/', _0x1cb3d1 = '' + _0x172030 + _0x339e82, _0x5bc60c = '' + _0x172030 + _0x584e34, _0x46d75e = '' + _0x172030 + _0x2d8809, _0x54e464 = '' + _0x172030 + _0x3aa967, _0x18008b = '' + _0x172030 + _0x21930e, _0x5a929f = '' + _0x172030 + _0x15f228;
const _0x28f9f0 = JSON['parse'](_0x2e02b8['readFileSync']('../package.json', 'utf-8')), _0x413f08 = _0x28f9f0['version'];
var _0x511ad6, _0x12a1cb, _0x3705ad, _0x89ed73, _0x2390d4, _0x1feed5, _0x1dc6d4, _0x399366;
const _0x1c914e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5f0ad4 = ![];
const _0x457fde = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0xa8a0b8 = '0123456789';
var _0x3e3ae9 = _0x457fde['split']('');
const _0x190ce9 = require('auto-git-update'), { PageEmittedEvents: _0x1b8e71 } = require('puppeteer'), { getRandomValues: _0x918d6f } = require('crypto'), { resolve: _0x2a2dcb } = require('path'), { Console: _0x2406c5 } = require('console'), _0x211510 = {
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
}, _0x5034e5 = new _0x190ce9(_0x211510);
async function _0x4004c8() {
    _0x2390d4 = _0x2e02b8['readdirSync']('../proxies'), _0x89ed73 = _0x2e02b8['readdirSync']('../tasks'), !_0x2e02b8['existsSync']('../accounts/fenom.csv') && _0x2e02b8['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x2e02b8['existsSync']('../accounts/bstn.csv') && _0x2e02b8['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x2e02b8['existsSync']('../accounts/eql.csv') && _0x2e02b8['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x2e02b8['existsSync']('../failed-tasks.csv') && _0x2e02b8['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x2e02b8['existsSync']('../successful-tasks.csv') && _0x2e02b8['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x3b7f5f = JSON['parse'](_0x2e02b8['readFileSync']('../settings.json', 'utf-8')), !_0x3b7f5f['delay'] && (_0x3b7f5f['delay'] = 0x3c, _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['masterMail'] && (_0x3b7f5f['masterMail'] = 'yourmail@gmail.com', _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['masterPassword'] && (_0x3b7f5f['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['captchaKey'] && (_0x3b7f5f['captchaKey'] = '', _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['useRandomProxy'] && (_0x3b7f5f['useRandomProxy'] = !![], _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['shuffleTasks'] && (_0x3b7f5f['shuffleTasks'] = ![], _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), !_0x3b7f5f['webhook'] && (_0x3b7f5f['webhook'] = '', _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), _0x3b7f5f['delay'] <= 0x1388 && (_0x3b7f5f['delay'] = _0x3b7f5f['delay'] * 0x3e8), _0x3b7f5f['AfewDelay'] && (delete _0x3b7f5f['AfewDelay'], _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), _0x3b7f5f['MahaDelay'] && (delete _0x3b7f5f['MahaDelay'], _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), _0x3b7f5f['footshopDelay'] && (delete _0x3b7f5f['footshopDelay'], _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f, null, 0x2))), _0x3b7f5f['MahaDelay'] = _0x3b7f5f['delay'], _0x172030 = _0x3b7f5f['webhook'], _0x1feed5 = _0x3b7f5f['licenseKey'];
}
let _0x47eb52, _0x1c42d8 = [], _0x109515;
const _0x3e202b = _0x1e143c => new Promise(_0x40f8e2 => setTimeout(_0x40f8e2, _0x1e143c));
function _0x4a97d2(_0x3e6572, _0x1ad007) {
    return Math['floor'](Math['random']() * (_0x1ad007 - _0x3e6572 + 0x1) + _0x3e6572);
}
function _0x42c230(_0x46ea76) {
    let _0x263b67 = _0x46ea76['length'], _0x16588b;
    while (_0x263b67 != 0x0) {
        _0x16588b = Math['floor'](Math['random']() * _0x263b67), _0x263b67--, [_0x46ea76[_0x263b67], _0x46ea76[_0x16588b]] = [
            _0x46ea76[_0x16588b],
            _0x46ea76[_0x263b67]
        ];
    }
    return _0x46ea76;
}
async function _0x34f540(_0x55d5c6) {
    return _0x5d8515['get']('https://api.hyper.co/v4/licenses/' + _0x55d5c6, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1c914e } })['then'](_0x5854a6 => _0x5854a6['data'])['catch'](() => null);
}
;
async function _0x2f4d44(_0x1b3b3d) {
    console['clear']();
    if (_0x1b3b3d == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x4311f8 = await _0x2a5d0b['get']('License');
        if (_0x4311f8['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x3e202b(0xbb8), _0x2f4d44(_0x1b3b3d);
        _0x1b3b3d = _0x4311f8['License'], _0x3b7f5f['licenseKey'] = _0x1b3b3d, _0x1feed5 = _0x1b3b3d, _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f));
    }
    console['log']('Checking\x20license\x20' + _0x1feed5 + '...'), await _0x3e202b(0x320);
    const _0x9e0dc3 = await _0x34f540(_0x1b3b3d);
    _0x1dc6d4 = JSON['stringify'](_0x9e0dc3['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x399366 = JSON['stringify'](_0x9e0dc3['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x9e0dc3)
        return console['log']('License\x20not\x20found');
    if (!_0x9e0dc3['user'])
        return console['log']('License\x20not\x20bound');
    return _0x9e0dc3['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5f0ad4 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5f0ad4 = ![]);
}
async function _0x19a1e() {
    var _0x41850c = await _0x2a5d0b['get']('Module');
    return console['clear'](), _0x41850c['Module'];
}
;
async function _0x2cc643() {
    var _0x2e6601 = await _0x2a5d0b['get']('Setting');
    return console['clear'](), _0x2e6601['Setting'];
}
async function _0x251094() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x232215 = 0x0; _0x232215 < _0x89ed73['length']; _0x232215++) {
        console['log']('\x20(' + _0x232215 + ')\x20' + _0x89ed73[_0x232215]);
    }
    console['log']('');
    var _0xd9ff78 = await _0x2a5d0b['get']('Task');
    if (_0xd9ff78['Task'] > _0x89ed73['length'] - 0x1 || isNaN(_0xd9ff78['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3e202b(0x3e8), _0x251094();
    var _0x93818d = _0x2e02b8['readFileSync']('../tasks/' + _0x89ed73[_0xd9ff78['Task']], 'utf-8');
    return _0x3705ad = _0x1df262['parse'](_0x93818d, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x58e018['blue'](_0x89ed73[_0xd9ff78['Task']])), _0x511ad6 = _0x89ed73[_0xd9ff78['Task']], _0x3705ad;
}
async function _0x265fea() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x402beb = 0x0; _0x402beb < _0x2390d4['length']; _0x402beb++) {
        console['log']('\x20(' + _0x402beb + ')\x20' + _0x2390d4[_0x402beb]);
    }
    console['log']('');
    var _0x30d753 = await _0x2a5d0b['get']('Proxies');
    if (_0x30d753['Proxies'] > _0x2390d4['length'] - 0x1 || isNaN(_0x30d753['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3e202b(0x3e8), _0x265fea();
    var _0x8ec2f1 = _0x2e02b8['readFileSync']('../proxies/' + _0x2390d4[_0x30d753['Proxies']], 'utf-8')['split']('\x0a');
    let _0x18caf4 = _0x8ec2f1['map']((_0x47512d, _0x25871f) => {
        sanatizeProxy = _0x47512d['replace']('\x0d', '');
        if (_0x8ec2f1[_0x25871f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x12a1cb = _0x2390d4[_0x30d753['Proxies']], console['clear'](), _0x18caf4;
}
async function _0x5c534c() {
    var _0xafb524 = await _0x2a5d0b['get']('Value');
    return console['clear'](), _0xafb524['Value'];
}
async function _0x57ade6(_0xba9eee) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3c9068 = 0x0; _0x3c9068 < _0xba9eee['length']; _0x3c9068++) {
        console['log']('\x20(' + _0x3c9068 + ')\x20[' + _0xba9eee[_0x3c9068]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x356bea = await _0x2a5d0b['get']('Module');
    return _0x356bea['Module'];
}
async function _0x27c067() {
    var _0x4fa281 = await _0x2a5d0b['get']('Password');
    return console['clear'](), _0x4fa281['Password'];
}
;
async function _0x28a58c() {
    var _0x164296 = await _0x2a5d0b['get']('Links');
    return _0x164296['Links'];
}
;
async function _0x1f16fb() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x16fc8d = 0x0; _0x16fc8d < _0x1c42d8['length']; _0x16fc8d++) {
        console['log']('\x20(' + _0x16fc8d + ')\x20' + _0x1c42d8[_0x16fc8d]);
    }
    ;
    console['log']();
    let _0x286b76 = await _0x2a5d0b['get']('Product');
    return console['clear'](), _0x286b76['Product'];
}
;
function _0x1f9e06() {
    var _0x53db08 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x53db08;
}
;
function _0x2046e1() {
    var _0x6f70a = new Date(Date['now']())['toLocaleString']();
    return _0x6f70a['replace'](',', '');
}
async function _0x19ed1d(_0xb6879f, _0x5897fe) {
    let _0x48cfaf = { 'headers': { 'content-type': 'application/json' } };
    if (_0x413f08 != 'devkey') {
        await _0x5d8515['post'](_0xb6879f, _0x5897fe, _0x48cfaf);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3ec8c2(_0x3980aa, _0x4522d9, _0x1ad68d, _0x4f47e4, _0x47d65b) {
    if (!_0x4f47e4 && _0x1ad68d == 'dev') {
        var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x4522d9['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x4522d9['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x3980aa['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x3b7f5f['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1dc6d4,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x3980aa['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x3980aa['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x413f08,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x546f0c['data'];
    } else {
        if (_0x4f47e4 && _0x1ad68d == 'dev') {
            var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1dc6d4,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x4522d9['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x3980aa['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x3b7f5f['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x47d65b,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x3980aa['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x3980aa['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x413f08,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x546f0c['data'];
        } else {
            if (_0x1ad68d == 'pub') {
                var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x4522d9['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x3980aa['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x3b7f5f['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x3980aa['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x413f08,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x546f0c['data'];
            } else {
                if (_0x1ad68d == 'acc' && !_0x4f47e4) {
                    var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1dc6d4,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x4522d9['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x3b7f5f['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x413f08,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x546f0c['data'];
                } else {
                    if (_0x1ad68d == 'acc' && _0x4f47e4) {
                        var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1dc6d4,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x47d65b,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x4522d9['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x3b7f5f['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x413f08,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x546f0c['data'];
                    } else {
                        if (_0x1ad68d == 'open') {
                            var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x399366)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1dc6d4,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x413f08,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x546f0c['data'];
                        } else {
                            if (!_0x4f47e4 && _0x1ad68d == 'ver') {
                                var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1dc6d4,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x4522d9['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x3b7f5f['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x413f08,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x546f0c['data'];
                            } else {
                                if (_0x4f47e4 && _0x1ad68d == 'ver') {
                                    var _0x546f0c = new _0x1d5d33()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x4522d9['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1dc6d4,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x47d65b,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x4522d9['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x3b7f5f['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x413f08,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x546f0c['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x36594b(_0x39f6fe, _0x300219) {
    var _0x48e5b8 = _0x39f6fe[_0x300219]['Address1']['split'](''), _0x30a671 = _0x39f6fe[_0x300219]['Address2']['split'](''), _0x176636 = _0x39f6fe[_0x300219]['Email']['split']('@');
    for (var _0x5055d9 = 0x0; _0x5055d9 < _0x48e5b8['length']; _0x5055d9++) {
        if (_0x48e5b8[_0x5055d9] == 'X') {
            var _0x30c47d = Math['round'](Math['random']() * (_0x457fde['length'] - 0x1));
            _0x48e5b8[_0x5055d9] = _0x3e3ae9[_0x30c47d];
        }
    }
    ;
    for (var _0x5055d9 = 0x0; _0x5055d9 < _0x30a671['length']; _0x5055d9++) {
        if (_0x30a671[_0x5055d9] == 'X') {
            var _0x30c47d = Math['round'](Math['random']() * (_0x457fde['length'] - 0x1));
            _0x30a671[_0x5055d9] = _0x3e3ae9[_0x30c47d];
        }
    }
    ;
    _0x39f6fe[_0x300219]['FirstName'] == 'RANDOM' && (_0x39f6fe[_0x300219]['FirstName'] = _0x21ffa4['first']());
    _0x39f6fe[_0x300219]['LastName'] == 'RANDOM' && (_0x39f6fe[_0x300219]['LastName'] = _0x21ffa4['last']());
    _0x176636[0x0] == 'RANDOM' ? _0x176636[0x0] = '' + _0x21ffa4['first']() + _0x21ffa4['last']() + _0x4a97d2(0x1, 0x270f) + '@' : _0x176636[0x0] = _0x176636[0x0] + '@';
    _0x39f6fe[_0x300219]['Email'] = _0x176636['join'](''), _0x39f6fe[_0x300219]['Address1'] = _0x48e5b8['join'](''), _0x39f6fe[_0x300219]['Address2'] = _0x30a671['join']('');
    _0x39f6fe[_0x300219]['Phone'] == 'RANDOM' && (_0x39f6fe[_0x300219]['Phone'] = '0' + _0x4a97d2(0x5f5e100, 0x3b9ac9ff));
    if (_0x39f6fe[_0x300219]['Follower'] == 'RANDOM') {
        var _0x1b0d82 = _0x4a97d2(0x1, 0x270f);
        _0x39f6fe[_0x300219]['Follower'] = '' + _0x21ffa4['first']() + _0x21ffa4['last']() + _0x1b0d82 + '\x20';
    }
    _0x39f6fe[_0x300219]['HouseNumber'] == 'RANDOM' && (_0x39f6fe[_0x300219]['HouseNumber'] = _0x4a97d2(0x1, 0xc8));
    if (_0x39f6fe[_0x300219]['Address1'] == 'RANDOM') {
        var _0x325562 = Math['round'](Math['random']() * (_0x457fde['length'] - 0x1)), _0x8ca461 = _0x3e3ae9[_0x325562];
        _0x39f6fe[_0x300219]['Address1'] = _0x21ffa4['last']() + 'straat', _0x39f6fe[_0x300219]['Zip'] == '' && (_0x39f6fe[_0x300219]['Postcode'] = _0x4a97d2(0x3e8, 0x270f) + '\x20' + _0x8ca461 + _0x8ca461, _0x39f6fe[_0x300219]['Zip'] = _0x39f6fe[_0x300219]['Postcode']), _0x39f6fe[_0x300219]['HouseNumber'] = '' + _0x4a97d2(0x1, 0xc8);
    }
    return;
}
;
async function _0xd9afb0(_0x4ec970, _0x55ff65) {
    _0x2e02b8['appendFileSync']('../failed-tasks.csv', _0x2046e1() + ',' + _0x55ff65['store'] + ',' + _0x55ff65['name'] + ',' + _0x4ec970['Url'] + ',' + _0x4ec970['Size'] + ',' + _0x4ec970['Follower'] + ',' + _0x4ec970['FirstName'] + ',' + _0x4ec970['LastName'] + ',' + _0x4ec970['Address1'] + ',' + _0x4ec970['Address2'] + ',' + _0x4ec970['HouseNumber'] + ',' + _0x4ec970['Zip'] + ',' + _0x4ec970['City'] + ',' + _0x4ec970['State'] + ',' + _0x4ec970['Country'] + ',' + _0x4ec970['Phone'] + ',' + _0x4ec970['Email'] + ',' + _0x4ec970['Password'] + ',' + _0x4ec970['PaymentMethod'] + ',' + _0x4ec970['CardType'] + ',' + _0x4ec970['NameOnCard'] + ',' + _0x4ec970['CardNumber'] + ',' + _0x4ec970['ExpiryDate'] + ',' + _0x4ec970['CVV'] + ',' + _0x4ec970['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4fe9b8(_0x200b95, _0x7a3925) {
    _0x2e02b8['appendFileSync']('../successful-tasks.csv', _0x2046e1() + ',' + _0x7a3925['store'] + ',' + _0x7a3925['name'] + ',' + _0x200b95['Url'] + ',' + _0x200b95['Size'] + ',' + _0x200b95['Follower'] + ',' + _0x200b95['FirstName'] + ',' + _0x200b95['LastName'] + ',' + _0x200b95['Address1'] + ',' + _0x200b95['Address2'] + ',' + _0x200b95['HouseNumber'] + ',' + _0x200b95['Zip'] + ',' + _0x200b95['City'] + ',' + _0x200b95['State'] + ',' + _0x200b95['Country'] + ',' + _0x200b95['Phone'] + ',' + _0x200b95['Email'] + ',' + _0x200b95['Password'] + ',' + _0x200b95['PaymentMethod'] + ',' + _0x200b95['CardType'] + ',' + _0x200b95['NameOnCard'] + ',' + _0x200b95['CardNumber'] + ',' + _0x200b95['ExpiryDate'] + ',' + _0x200b95['CVV'] + ',' + _0x200b95['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3a1207() {
    let _0x4dbfe9 = proxyFile['split']('\x0a'), _0x22ea2e = _0x4dbfe9['map']((_0xee73f3, _0x233ba2) => {
        sanatizeProxy = _0xee73f3['replace']('\x0d', '');
        if (_0x4dbfe9[_0x233ba2 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x22ea2e;
}
;
async function _0x5dd475(_0x469bb8) {
    var _0x3637cb = _0x469bb8[0x1]['split'](':');
    const _0x141f0c = await _0x324aa5['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x3637cb[0x0] + ':' + _0x3637cb[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x308d83 = await _0x141f0c['newPage']();
        await _0x308d83['authenticate']({
            'username': '' + _0x3637cb[0x2],
            'password': '' + _0x3637cb[0x3]
        }), console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x308d83['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x308d83['setRequestInterception'](!![]), _0x308d83['on']('request', _0x470202 => {
            _0x470202['resourceType']() === 'image' || _0x470202['resourceType']() === 'font' || _0x470202['resourceType']() === 'media' ? _0x470202['abort']() : _0x470202['continue']();
        }), await _0x308d83['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x308d83['waitForTimeout'](0xbb8), await _0x308d83['waitForSelector']('.product-card');
        const _0x1248ef = await _0x308d83['$$eval']('a.product-card', _0x22c376 => {
            return _0x22c376['map'](_0x119a63 => _0x119a63['href']);
        });
        return _0x1c42d8 = _0x1248ef;
    } catch (_0x168a69) {
        console['log']('\x20' + _0x168a69);
    } finally {
        _0x141f0c['close'](), console['clear']();
    }
}
;
async function _0x53d86b(_0x5444eb, _0x2df57) {
    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3b7f5f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1e1eb9 = 0x0; _0x1e1eb9 < bouncewear['length']; _0x1e1eb9++) {
        await _0x36594b(bouncewear, _0x1e1eb9);
        if (bouncewear[_0x1e1eb9]['Email'] == '' || bouncewear[_0x1e1eb9]['Password'] == '' || bouncewear[_0x1e1eb9]['FirstName'] == '' || bouncewear[_0x1e1eb9]['LastName'] == '') {
            console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3b7f5f['useRandomProxy'] = ![])
            var _0x5bdf7b = _0x3a1207()[_0x1e1eb9]['split'](':');
        else
            var _0x5c02ec = Math['round'](Math['random']() * (_0x3a1207()['length'] - 0x1)), _0x5bdf7b = _0x3a1207()[_0x5c02ec]['split'](':');
        const _0x3d2882 = await _0x324aa5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5bdf7b[0x0] + ':' + _0x5bdf7b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x36165f = await _0x3d2882['newPage']();
            await _0x36165f['authenticate']({
                'username': '' + _0x5bdf7b[0x2],
                'password': '' + _0x5bdf7b[0x3]
            }), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36165f['setRequestInterception'](!![]), _0x36165f['on']('request', _0x2e496f => {
                _0x2e496f['resourceType']() === 'image' || _0x2e496f['resourceType']() === 'font' || _0x2e496f['resourceType']() === 'media' ? _0x2e496f['abort']() : _0x2e496f['continue']();
            }), await _0x36165f['goto'](_0x5444eb), await _0x3e202b(0xbb8), await _0x36165f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x36165f['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1e1eb9]['FirstName']), await _0x3e202b(0x226), await _0x36165f['type']('#RegisterForm-LastName', '' + bouncewear[_0x1e1eb9]['LastName']), await _0x3e202b(0x226), await _0x36165f['type']('#RegisterForm-email', '' + bouncewear[_0x1e1eb9]['Email']), await _0x3e202b(0x226), await _0x36165f['type']('#RegisterForm-password', '' + bouncewear[_0x1e1eb9]['Password']), await _0x3e202b(0x226), await _0x36165f['click']('#marketing'), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Submitting..'), await _0x36165f['$eval']('#RegisterForm', _0x4e1b2e => _0x4e1b2e['submit']()), await _0x3e202b(0x1f40), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x36165f['solveRecaptchas'](), await _0x36165f['click']('.shopify-challenge__button.btn');
            async function _0x31944d() {
                for (var _0x5e92c0 = 0x0; _0x5e92c0 < 0x4; _0x5e92c0++) {
                    try {
                        console['log']('try'), await _0x36165f['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20' + _0x58e018['red']('Catpcha\x20failed,\x20retrying..')), await _0x36165f['solveRecaptchas'](), await _0x36165f['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x31944d(), console['log'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3e202b(0x1f4);
            try {
                await _0x36165f['waitForSelector']('.featured-title'), await _0x3e202b(0x1f4), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1e1eb9]['Email'] + '\x20Generated!')), _0x2e02b8['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1e1eb9]['Email'] + ',' + bouncewear[_0x1e1eb9]['Password']), console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x2df57['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1e1eb9]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x30dcbc) {
                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x30dcbc));
            }
        } catch (_0x52a94d) {
            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x1e1eb9 + 0x1) + '\x20:\x20' + _0x52a94d));
        } finally {
            _0x3d2882 && _0x3d2882['close'](), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
        }
    }
}
async function _0x19f89e(_0x2e2aba, _0x6f11b9, _0x3956e1) {
    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3b7f5f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3822f5 = 0x0; _0x3822f5 < _0x6f11b9['length']; _0x3822f5++) {
        _0x5988ee(_0x2e2aba['name'] + '\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20/\x20' + _0x6f11b9['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
        var _0x321873 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1dc6d4
                },
                {
                    'name': 'Product',
                    'value': '' + _0x6f11b9[_0x3822f5]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x6f11b9[_0x3822f5]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3b7f5f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3b7f5f['version']
                }
            ]
        }];
        const _0x311fa2 = { 'embeds': _0x321873 };
        await _0x36594b(_0x6f11b9, _0x3822f5);
        if (_0x6f11b9[_0x3822f5]['Email'] == '' || _0x6f11b9[_0x3822f5]['Password'] == '' || _0x6f11b9[_0x3822f5]['FirstName'] == '' || _0x6f11b9[_0x3822f5]['LastName'] == '') {
            console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x6f11b9[_0x3822f5]['Password'] == '' || _0x6f11b9[_0x3822f5]['Password'] == undefined) && (_0x6f11b9[_0x3822f5]['Password'] = 'ErehsaWonRaj1!');
        if (_0x3b7f5f['useRandomProxy'] = ![])
            var _0x2c52f4 = _0x3956e1[_0x3822f5]['split'](':');
        else
            var _0x1b3a63 = Math['round'](Math['random']() * (_0x3956e1['length'] - 0x1)), _0x2c52f4 = _0x3956e1[_0x1b3a63]['split'](':');
        const _0x5cca2c = await _0x324aa5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2c52f4[0x0] + ':' + _0x2c52f4[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x23265c = await _0x5cca2c['newPage']();
            await _0x23265c['authenticate']({
                'username': '' + _0x2c52f4[0x2],
                'password': '' + _0x2c52f4[0x3]
            }), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23265c['setRequestInterception'](!![]), _0x23265c['on']('request', _0x3cadca => {
                _0x3cadca['resourceType']() === 'image' || _0x3cadca['resourceType']() === 'font' || _0x3cadca['resourceType']() === 'media' ? _0x3cadca['abort']() : _0x3cadca['continue']();
            }), await _0x23265c['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x23265c['goto']('' + _0x6f11b9[_0x3822f5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x23265c['waitForSelector']('#btnPdpAtb'), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x6f11b9[_0x3822f5]['Size']);
            const _0x3fb5c1 = await _0x23265c['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x137a60 => {
                return _0x137a60['map'](_0x5b2002 => _0x5b2002['innerText']);
            }), _0x13e62e = await _0x23265c['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x568e84 = ![];
            if (_0x6f11b9[_0x3822f5]['Size'] == 'RANDOM') {
                var _0x57c906 = Math['round'](Math['random']() * (_0x13e62e['length'] - 0x1));
                await _0x13e62e[_0x57c906]['click']();
            } else
                for (var _0xe5e088 = 0x0; _0xe5e088 < _0x3fb5c1['length']; _0xe5e088++) {
                    if (_0x3fb5c1[_0xe5e088] != _0x6f11b9[_0x3822f5]['Size'])
                        continue;
                    try {
                        await _0x13e62e[_0xe5e088]['click']();
                    } catch {
                        console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x568e84 = !![];
                    }
                }
            if (_0x568e84)
                continue;
            await _0x3e202b(0x578), await _0x23265c['click']('#btnPdpAtb'), await _0x23265c['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x3e202b(0x3e8), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x23265c['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x23265c['waitForSelector']('#email'), await _0x23265c['type']('#email', _0x6f11b9[_0x3822f5]['Email']), await _0x3e202b(0x226), await _0x23265c['click']('#guest-submit'), await _0x3e202b(0x1b58), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x23265c['waitForSelector']('#firstname'), await _0x23265c['type']('#firstname', _0x6f11b9[_0x3822f5]['FirstName'], 0x1f4), await _0x3e202b(0x190), await _0x23265c['waitForSelector']('#surname'), await _0x23265c['type']('#surname', _0x6f11b9[_0x3822f5]['LastName'], 0x1f4), await _0x3e202b(0x190), await _0x23265c['waitForSelector']('#mobile'), await _0x23265c['type']('#mobile', _0x6f11b9[_0x3822f5]['Phone'], 0x1f4), await _0x3e202b(0x190), await _0x23265c['click']('#enterManualDiv'), await _0x3e202b(0x5dc), await _0x23265c['waitForSelector']('#address1'), await _0x23265c['type']('#address1', _0x6f11b9[_0x3822f5]['Address1'] + '\x20' + _0x6f11b9[_0x3822f5]['HouseNumber'], 0x226), await _0x3e202b(0x384), await _0x23265c['waitForSelector']('#address2'), await _0x23265c['type']('#address2', '' + _0x6f11b9[_0x3822f5]['Address2'], 0x226), await _0x3e202b(0x320);
            const _0x2ee784 = await _0x23265c['$$eval']('#countryselect_view3\x20>\x20option', _0x30e216 => {
                return _0x30e216['map'](_0x531965 => _0x531965['value']);
            });
            var _0x52ae50;
            for (var _0x115ffb = 0x0; _0x115ffb < _0x2ee784['length']; _0x115ffb++) {
                if (_0x2ee784[_0x115ffb]['startsWith']('' + _0x6f11b9[_0x3822f5]['Country'])) {
                    _0x52ae50 = _0x2ee784[_0x115ffb];
                    break;
                }
                continue;
            }
            await _0x23265c['select']('#countryselect_view3', '' + _0x52ae50), await _0x23265c['waitForSelector']('#address4'), await _0x23265c['type']('#address4', '' + _0x6f11b9[_0x3822f5]['City'], 0x1f4), await _0x3e202b(0x384), await _0x23265c['waitForSelector']('#postcode'), await _0x23265c['type']('#postcode', '' + _0x6f11b9[_0x3822f5]['Zip'], 0x1f4), await _0x3e202b(0x4b0);
            const _0x3d14d1 = await _0x23265c['url']();
            console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x934b41 = _0x3d14d1['split']('?')[0x1], _0x1ec445 = await _0x23265c['$']('#co_address_submit');
            await _0x1ec445['evaluate'](_0x5a264a => _0x5a264a['click']()), await _0x3e202b(0x1388), await _0x23265c['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x934b41), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x23265c['waitForSelector']('#paymentbuttons'), await _0x3e202b(0x1388), await _0x23265c['click']('#paymentbuttons\x20>\x20div'), await _0x3e202b(0x1c2), await _0x23265c['waitForSelector']('#card-number'), await _0x23265c['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x34aef6 = await _0x23265c['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x4488e6 = await _0x34aef6['contentFrame']();
            await _0x4488e6['waitForSelector']('.InputContainer'), await _0x4488e6['click']('.InputContainer\x20>\x20input'), await _0x3e202b(0x578), await _0x23265c['type']('#card-number', '' + _0x6f11b9[_0x3822f5]['CreditNumber']), await _0x3e202b(0xfa), await _0x23265c['type']('#card-expiry', '' + _0x6f11b9[_0x3822f5]['ExpiryDate']), await _0x3e202b(0xfa), await _0x23265c['type']('#card-cvc', '' + _0x6f11b9[_0x3822f5]['CVV']), await _0x3e202b(0x7d0), await _0x23265c['click']('#card-button'), console['log'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x23265c['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x19ed1d(_0x46d75e, _0x311fa2);
            } catch {
                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x203DS\x20Failed')), _0x321873[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x321873[0x0]['description'] = '3DS\x20Failed', await _0x19ed1d(_0x54e464, _0x311fa2);
            }
        } catch (_0x499022) {
            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2e2aba['name'] + ']\x20Task\x20' + (_0x3822f5 + 0x1) + '\x20:\x20' + _0x499022)), _0x321873[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x321873[0x0]['description'] = '' + _0x499022, await _0x19ed1d(_0x54e464, _0x311fa2);
        } finally {
            _0x5cca2c && _0x5cca2c['close']();
            if (_0x3822f5 + 0x1 == _0x6f11b9['length']) {
                console['log'](_0x58e018['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x3e202b(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x3b7f5f['AfewDelay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['AfewDelay']);
        }
    }
}
async function _0x15c3cd(_0x4916b1, _0x5bafcf, _0x18f1ac, _0x3ea712, _0x59d7de) {
    var _0xc3e2bf, _0x17597f = {}, _0x23ea2b = [], _0x3d237f = {}, _0x41a4df = [
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
    !_0x3ea712 && (_0x3ea712 = {});
    if (_0x5bafcf != 'ver') {
        _0x5988ee(_0x18f1ac['name'] + '\x20Task\x20' + (_0x4916b1 + 0x1) + '\x20/\x20' + _0x3ea712['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb), await _0x36594b(_0x3ea712, _0x4916b1), _0x23ea2b = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1dc6d4
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3ea712[_0x4916b1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3b7f5f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x413f08
                }
            ]
        }], _0x3d237f = { 'embeds': _0x23ea2b }, _0x17597f = _0x18f1ac['data'];
        _0x5bafcf == 'exp' ? _0x17597f['data']['attributes']['email'] = '' + _0x3ea712[_0x4916b1]['FirstName'] + _0x3ea712[_0x4916b1]['LastName'] + _0x3b7f5f['catchall'] : _0x17597f['data']['attributes']['email'] = '' + _0x3ea712[_0x4916b1]['Email'];
        if (_0x3ea712[_0x4916b1]['Size'] == 'RANDOM') {
        }
        _0x17597f['data']['attributes']['properties']['$first_name'] = '' + _0x3ea712[_0x4916b1]['FirstName'], _0x17597f['data']['attributes']['properties']['$last_name'] = '' + _0x3ea712[_0x4916b1]['LastName'], _0x17597f['data']['attributes']['properties']['$address1'] = _0x3ea712[_0x4916b1]['Address1'] + '\x20' + _0x3ea712[_0x4916b1]['Address2'] + '\x20' + _0x3ea712[_0x4916b1]['HouseNumber'], _0x17597f['data']['attributes']['properties']['$zip'] = '' + _0x3ea712[_0x4916b1]['Zip'], _0x17597f['data']['attributes']['properties']['$city'] = '' + _0x3ea712[_0x4916b1]['City'], _0x17597f['data']['attributes']['properties']['$country'] = '' + _0x3ea712[_0x4916b1]['Country'], _0x17597f['data']['attributes']['properties']['Size'] = '' + _0x3ea712[_0x4916b1]['Size'], _0x17597f['data']['attributes']['properties']['$phone_number'] = '' + _0x3ea712[_0x4916b1]['Phone'], _0x17597f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3ea712[_0x4916b1]['Follower'];
    }
    if (_0x3b7f5f['useRandomProxy'] = ![])
        var _0x2c124f = _0x59d7de[_0x4916b1]['split'](':');
    else
        var _0x205fa8 = Math['round'](Math['random']() * (_0x59d7de['length'] - 0x1)), _0x2c124f = _0x59d7de[_0x205fa8]['split'](':');
    var _0x40ab34 = {
        'jar': _0x522c94,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x18f1ac['url'],
        'headers': _0x18f1ac['headers'],
        'body': JSON['stringify'](_0x17597f),
        'proxy': 'http://' + _0x2c124f[0x2] + ':' + _0x2c124f[0x3] + '@' + _0x2c124f[0x0] + ':' + _0x2c124f[0x1]
    };
    return _0x5bafcf != 'ver' && (_0x40ab34['url'] = _0x18f1ac['url'], _0x40ab34['headers'] = _0x18f1ac['headers']), _0x5bafcf == 'ver' && (_0x40ab34['method'] = 'GET'), new Promise(function (_0xd20850, _0xfadc4e) {
        callback = async (_0x476b16, _0x205e49, _0x1a8b54) => {
            if (!_0x476b16 && _0x205e49['statusCode'] == 0xca || !_0x476b16 && _0x205e49['statusCode'] == 0xc8) {
                if (_0x5bafcf != 'ver') {
                    var _0x59f80a = await _0x3ec8c2(_0x3ea712[_0x4916b1], _0x18f1ac, 'dev', ![]), _0x3a96ad = await _0x3ec8c2(_0x3ea712[_0x4916b1], _0x18f1ac, 'pub', ![]);
                    const _0x18de0f = {
                        'succesDEVMSG': { 'embeds': [_0x59f80a] },
                        'succesPUBMSG': { 'embeds': [_0x3a96ad] }
                    };
                    if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                        try {
                            await _0x19ed1d(_0x3b7f5f['webhook'], _0x18de0f['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x18de0f['succesDEVMSG']), await _0x3e202b(0xc8);
                    try {
                        await _0x19ed1d(_0x18008b, _0x18de0f['succesPUBMSG']);
                    } catch {
                    }
                    _0x4fe9b8(_0x3ea712[_0x4916b1], _0x18f1ac);
                }
                _0xd20850(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x18f1ac['name'] + ']\x20Task\x20' + (_0x4916b1 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x5bafcf != 'ver') {
                    var _0x28c01a = '' + _0x476b16, _0x1107ec = await _0x3ec8c2(_0x3ea712[_0x4916b1], _0x18f1ac, 'dev', !![], _0x28c01a), _0x471283 = {};
                    _0x471283['errorDEV'] = { 'embeds': [_0x1107ec] }, _0xd9afb0(_0x3ea712[_0x4916b1], _0x18f1ac), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x471283['errorDEV']), await _0x19ed1d(_0x54e464, _0x471283['errorDEV']);
                }
                _0xfadc4e(console['log'](_0x1f9e06() + '\x20[' + _0x18f1ac['name'] + ']\x20Task\x20' + (_0x4916b1 + 0x1) + ':\x20' + _0x476b16));
            }
        };
        try {
            _0x5bafcf != 'ver' && console['log'](_0x1f9e06() + '\x20[' + _0x18f1ac['name'] + ']\x20Task\x20' + (_0x4916b1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x17597f['data']['attributes']['email']), _0x217687(_0x40ab34, callback);
        } catch (_0x4b2ab5) {
            console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x4916b1 + 0x1) + ':\x20' + _0x4b2ab5);
        }
    });
}
;
async function _0x17343d(_0xaa46f4, _0x589860) {
    if (_0x279b5e != 'yes')
        var _0x279b5e = '', _0x54aa0e = 0x0;
    var _0x249c3b = [];
    async function _0x269baa() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x325aff = await _0x2a5d0b['get']('Quantity')['Quantity'], _0x48b919 = new _0x35c1c1({
            'user': _0x3b7f5f['masterMail'],
            'password': _0x3b7f5f['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x2d4959(_0x1046dd) {
            _0x48b919['openBox']('INBOX', ![], _0x1046dd);
        }
        _0x48b919['once']('ready', function () {
            _0x2d4959(function (_0x15b5ad, _0xc1149e) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x15b5ad)
                    throw _0x15b5ad;
                _0x48b919['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x4dfcc4, _0x1e5f34) {
                    if (!_0x1e5f34 || !_0x1e5f34['length'])
                        console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4['name'] + ']\x20No\x20mails\x20found'), _0x48b919['end']();
                    else {
                        var _0x529676 = _0x48b919['seq']['fetch'](_0x1e5f34, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x529676['on']('message', function (_0x516346, _0x5b162e) {
                            var _0x2f5f98 = '(#' + _0x5b162e + ')\x20';
                            _0x516346['on']('body', function (_0x43871a, _0x2da74b) {
                                _0x2b928(_0x43871a, (_0x4be1b7, _0x36623c) => {
                                    if (_0x36623c['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x36623c['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x36623c['text']['split']('[')[0x2];
                                        var _0x5c941c = mes['split'](']')[0x0];
                                        _0x249c3b['push'](_0x5c941c);
                                    }
                                });
                            }), _0x516346['once']('end', function () {
                            });
                        }), _0x529676['once']('error', function (_0x15935f) {
                            console['log']('Fetch\x20error:\x20' + _0x15935f);
                        }), _0x529676['once']('end', function () {
                            _0x48b919['end']();
                        });
                    }
                });
            });
        }), _0x48b919['once']('error', function (_0x56082) {
            console['log'](_0x58e018['red'](_0x56082['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x48b919['once']('end', async function () {
        }), _0x48b919['connect']();
    }
    try {
        _0x269baa(), await _0x3e202b(0xfa0), console['log']('Found\x20' + _0x249c3b['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3e202b(0xfa0);
    }
    var _0x5e7632;
    _0x5988ee('' + _0xaa46f4);
    var _0x4fe58d = _0x589860[0x0]['split'](':'), _0x900bcc;
    try {
        _0x900bcc = await _0x324aa5['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4fe58d[0x0] + ':' + _0x4fe58d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x900bcc = await _0x324aa5['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4fe58d[0x0] + ':' + _0x4fe58d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Getting\x20Session');
        const _0x2c0897 = await _0x900bcc['newPage']();
        await _0x2c0897['authenticate']({
            'username': '' + _0x4fe58d[0x2],
            'password': '' + _0x4fe58d[0x3]
        }), await _0x2c0897['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x2c0897, await _0x2c0897['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x2c0897['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Successfully\x20logged\x20in'), await _0x3e202b(0x2710);
        } catch (_0x250c0e) {
            throw new Error('Login\x20session\x20expired\x20' + _0x250c0e);
        }
        for (var _0x268ae6 = 0x0; _0x268ae6 < _0x249c3b['length']; _0x268ae6++) {
            console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5988ee(_0xaa46f4 + '\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20/\x20' + _0x249c3b['length']);
            const _0x4af4bf = await _0x900bcc['newPage']();
            await _0x4af4bf['goto']('' + _0x249c3b[_0x268ae6], { 'waitUntil': 'networkidle2' }), await _0x3e202b(0xbb8);
            try {
                const _0xc0b1f8 = await _0x4af4bf['$']('#challenge-heading');
                _0xc0b1f8 && (console['log'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20:\x20' + _0x58e018['yellow']('2FA\x20Required')), await _0x4af4bf['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x3e202b(0x9c40), await _0x4af4bf['waitForSelector']('#payment-submit-btn'), await _0x4af4bf['$eval']('#payment-submit-btn', _0x3377d9 => _0x3377d9['click']()), await _0x4af4bf['click']('#payment-submit-btn');
                try {
                    await _0x4af4bf['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x3e202b(0x5dc), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x200c50) {
                    _0x279b5e = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x200c50['message']);
                } finally {
                    if (_0x279b5e == 'yes' && _0x54aa0e != 0x2) {
                        console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0xaa46f4['name'] + ']\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x54aa0e + '\x20/\x205)')), _0x268ae6 = _0x268ae6 - 0x1, _0x54aa0e = _0x54aa0e + 0x1;
                        continue;
                    }
                    _0x279b5e == 'yes' && _0x54aa0e >= 0x2 && (_0xd9afb0(csv[_0x268ae6], _0xaa46f4), _0x279b5e = 'no', _0x54aa0e = 0x0), await _0x4af4bf['close'](), await _0x3e202b(0x4650);
                }
            } catch (_0x12a759) {
                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0xaa46f4 + ']\x20Task\x20' + (_0x268ae6 + 0x1) + '\x20:\x20' + _0x12a759));
            }
        }
    } catch (_0x48b01b) {
        console['log'](_0x58e018['red']('' + _0x48b01b));
    } finally {
        await _0x900bcc['close']();
    }
}
const _0x55651c = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x144ff1, _0x1e7ce3, _0x106935) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf3fa94 = 0x0; _0xf3fa94 < _0x1e7ce3['length']; _0xf3fa94++) {
                        if (_0x4f1767 != 'yes')
                            var _0x4f1767 = '', _0x4fbd86 = 0x0;
                        var _0x32e453;
                        try {
                            await _0x36594b(_0x1e7ce3, _0xf3fa94);
                        } catch {
                            _0x4f1767 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5988ee(_0x144ff1['name'] + '\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20/\x20' + _0x1e7ce3['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        var _0x3af6f7 = [
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
                        ], _0x23d217 = Math['round'](Math['random']() * (_0x3af6f7['length'] - 0x1));
                        _0x1e7ce3[_0xf3fa94]['Size'] == 'RANDOM' && (_0x1e7ce3[_0xf3fa94]['Size'] = _0x3af6f7[_0x23d217]);
                        var _0x3a1c27 = Math['round'](Math['random']() * (_0x106935['length'] - 0x1)), _0x340ade = _0x106935[_0x3a1c27]['split'](':'), _0x2588ca;
                        try {
                            _0x2588ca = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x340ade[0x0] + ':' + _0x340ade[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2588ca = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x340ade[0x0] + ':' + _0x340ade[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x3ef05f = await _0x2588ca['newPage']();
                            await _0x3ef05f['authenticate']({
                                'username': '' + _0x340ade[0x2],
                                'password': '' + _0x340ade[0x3]
                            }), await _0x3ef05f['setRequestInterception'](!![]), _0x3ef05f['on']('request', _0x397f69 => {
                                _0x397f69['resourceType']() === 'image' || _0x397f69['resourceType']() === 'font' || _0x397f69['resourceType']() === 'media' ? _0x397f69['abort']() : _0x397f69['continue']();
                            }), await _0x3ef05f['goto'](_0x1e7ce3[_0xf3fa94]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x3ef05f['waitForSelector']('#accept-all-gdpr'), await _0x3ef05f['click']('#accept-all-gdpr'), await _0x3ef05f['waitForSelector']('#raffles-product'), await _0x3e202b(0x3e8), await _0x3ef05f['$eval']('#raffles-product', _0x25fdf5 => _0x25fdf5['click']()), await _0x3e202b(0x1388), await _0x3ef05f['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x570762 = await _0x3ef05f['$']('.fancybox-inner\x20>\x20iframe'), _0x5cea03 = await _0x570762['contentFrame']();
                            console['log'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x5cea03['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x3e202b(0x1f4), await _0x5cea03['type']('input[name=\x22sm-form-email\x22]', _0x1e7ce3[_0xf3fa94]['Email']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-name\x22]', _0x1e7ce3[_0xf3fa94]['FirstName'] + '\x20' + _0x1e7ce3[_0xf3fa94]['LastName']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-street\x22]', _0x1e7ce3[_0xf3fa94]['Address1'] + '\x20' + _0x1e7ce3[_0xf3fa94]['HouseNumber'] + '\x20' + _0x1e7ce3[_0xf3fa94]['Address2']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-city\x22]', _0x1e7ce3[_0xf3fa94]['City']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-province\x22]', _0x1e7ce3[_0xf3fa94]['State']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-zip\x22]', _0x1e7ce3[_0xf3fa94]['Zip']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-country\x22]', _0x1e7ce3[_0xf3fa94]['Country']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-form-phone\x22]', _0x1e7ce3[_0xf3fa94]['Phone']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x1e7ce3[_0xf3fa94]['Follower']), await _0x3e202b(0xc8), await _0x5cea03['type']('input[name=\x22sm-cst.size\x22]', _0x1e7ce3[_0xf3fa94]['Size']), await _0x3e202b(0x1f4), await _0x5cea03['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x3e202b(0x1f4), await _0x5cea03['click']('.icheckbox_simple-custom'), await _0x3e202b(0x1f4), console['log'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5cea03['$eval']('form', _0x4ca592 => _0x4ca592['submit']()), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4f1767 = '';
                            var _0x2a0366 = await _0x3ec8c2(_0x1e7ce3[_0xf3fa94], _0x144ff1, 'dev', ![]), _0x15b559 = await _0x3ec8c2(_0x1e7ce3[_0xf3fa94], _0x144ff1, 'pub', ![]);
                            const _0x5adf78 = {
                                'succesDEVMSG': { 'embeds': [_0x2a0366] },
                                'succesPUBMSG': { 'embeds': [_0x15b559] }
                            };
                            try {
                                _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x5adf78['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x5adf78['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x18008b, _0x5adf78['succesPUBMSG']);
                            } catch (_0x3849fd) {
                                console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3849fd));
                            }
                        } catch (_0x4361de) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20' + _0x4361de)), _0x32e453 = '' + _0x4361de;
                            var _0xeb2ac = await _0x3ec8c2(_0x1e7ce3[_0xf3fa94], _0x144ff1, 'dev', !![], _0x32e453), _0x2a0366 = await _0x3ec8c2(_0x1e7ce3[_0xf3fa94], _0x144ff1, 'dev', ![]), _0x15b559 = await _0x3ec8c2(_0x1e7ce3[_0xf3fa94], _0x144ff1, 'pub', ![]);
                            const _0x1588d2 = {
                                'succesDEVMSG': { 'embeds': [_0x2a0366] },
                                'succesPUBMSG': { 'embeds': [_0x15b559] }
                            };
                            _0x1588d2['errorDEV'] = { 'embeds': [_0xeb2ac] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x1588d2['errorDEV']), await _0x19ed1d(_0x54e464, _0x1588d2['errorDEV']), _0x4361de != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4f1767 = 'yes');
                        } finally {
                            _0x2588ca['close']();
                            if (_0x4f1767 == 'yes' && _0x4fbd86 != 0x5 && _0x32e453 != 'Size\x20Not\x20Found') {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Task\x20' + (_0xf3fa94 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4fbd86 + '\x20/\x205)\x20')), _0xf3fa94 = _0xf3fa94 - 0x1, _0x4fbd86 = _0x4fbd86 + 0x1;
                                continue;
                            }
                            _0x4f1767 == 'yes' && _0x4fbd86 >= 0x5 && (_0xd9afb0(_0x1e7ce3[_0xf3fa94], _0x144ff1), _0x4f1767 = 'no', _0x4fbd86 = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x144ff1['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x43dc23, _0x1bfd87) {
                    var _0x12540a = [];
                    async function _0x2d43df() {
                        var _0x18a584 = new _0x35c1c1({
                            'user': _0x3b7f5f['masterMail'],
                            'password': _0x3b7f5f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x40d039(_0x2966a7) {
                            _0x18a584['openBox']('INBOX', ![], _0x2966a7);
                        }
                        _0x18a584['once']('ready', function () {
                            _0x40d039(function (_0x67f941, _0x5e782d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x67f941)
                                    throw _0x67f941;
                                _0x18a584['seq']['search'](['UNSEEN'], function (_0x4a8c1f, _0x46931d) {
                                    if (!_0x46931d || !_0x46931d['length'])
                                        console['log'](_0x1f9e06() + '\x20[' + _0x43dc23['name'] + ']\x20No\x20mails\x20found'), _0x18a584['end']();
                                    else {
                                        var _0x57bdcc = _0x18a584['seq']['fetch'](_0x46931d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x57bdcc['on']('message', function (_0x37645f, _0x3b00f0) {
                                            var _0x159c38 = '(#' + _0x3b00f0 + ')\x20';
                                            _0x37645f['on']('body', function (_0x51e10c, _0x42b4d1) {
                                                _0x2b928(_0x51e10c, (_0xbf8cd, _0x5f2ac3) => {
                                                    if (_0x5f2ac3['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x13e62a = _0x5f2ac3['html']['split']('\x0a');
                                                        for (var _0xa69803 = 0x0; _0xa69803 < _0x13e62a['length']; _0xa69803++) {
                                                            if (_0x13e62a[_0xa69803]['includes']('salesmanago') && _0x13e62a[_0xa69803]['includes']('<td') && _0x13e62a[_0xa69803]['includes']('href')) {
                                                                var _0x40b910 = _0x13e62a[_0xa69803]['split']('href=\x22'), _0x2e0dc1 = _0x40b910[0x1]['split']('\x22')[0x0];
                                                                _0x12540a['push'](_0x2e0dc1);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x37645f['once']('end', function () {
                                            });
                                        }), _0x57bdcc['once']('error', function (_0x228089) {
                                            console['log']('Fetch\x20error:\x20' + _0x228089);
                                        }), _0x57bdcc['once']('end', function () {
                                            _0x18a584['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x18a584['once']('error', function (_0x2e2fc9) {
                            console['log'](_0x58e018['red'](_0x2e2fc9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x18a584['once']('end', async function () {
                        }), _0x18a584['connect']();
                    }
                    async function _0x13d6a2(_0x3f0e4f, _0x2a2caa, _0x59a524) {
                        for (var _0x1303d1 = 0x0; _0x1303d1 < _0x2a2caa['length']; _0x1303d1++) {
                            async function _0x32bb18(_0x21c3d6, _0xb98e6, _0x472b1c, _0x58d975, _0x4f9bf5) {
                                var _0x1f9b37, _0x347a3a = {}, _0x5c630a = [], _0x414ddf = {}, _0x544591 = [
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
                                ], _0x4fb0c2 = Math['round'](Math['random']() * (_0x544591['length'] - 0x1));
                                _0x58d975[_0x21c3d6]['Size'] == 'RANDOM' && (_0x58d975[_0x21c3d6]['Size'] = _0x544591[_0x4fb0c2]);
                                !_0x58d975 && (_0x58d975 = {});
                                if (_0x3b7f5f['useRandomProxy'] = ![])
                                    var _0x1d0987 = _0x4f9bf5[_0x21c3d6]['split'](':');
                                else
                                    var _0x3a739e = Math['round'](Math['random']() * (_0x4f9bf5['length'] - 0x1)), _0x1d0987 = _0x4f9bf5[_0x3a739e]['split'](':');
                                var _0xeda840 = {
                                    'jar': _0x522c94,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x472b1c['url'],
                                    'headers': _0x472b1c['headers'],
                                    'body': JSON['stringify'](_0x347a3a),
                                    'proxy': 'http://' + _0x1d0987[0x2] + ':' + _0x1d0987[0x3] + '@' + _0x1d0987[0x0] + ':' + _0x1d0987[0x1]
                                };
                                return _0xb98e6 != 'ver' && (_0xeda840['url'] = _0x472b1c['url'], _0xeda840['headers'] = _0x472b1c['headers']), _0xb98e6 == 'ver' && (_0xeda840['method'] = 'GET', _0xeda840['url'] = _0x58d975[_0x21c3d6]), new Promise(function (_0x447b29, _0x832ed5) {
                                    callback = async (_0x32f41c, _0x55fda5, _0x92654) => {
                                        if (!_0x32f41c && _0x55fda5['statusCode'] == 0xca || !_0x32f41c && _0x55fda5['statusCode'] == 0xc8) {
                                            if (_0xb98e6 != 'ver') {
                                                var _0x36b82f = await _0x3ec8c2(_0x58d975[_0x21c3d6], _0x472b1c, 'dev', ![]), _0x5da3ce = await _0x3ec8c2(_0x58d975[_0x21c3d6], _0x472b1c, 'pub', ![]);
                                                const _0x14be42 = {
                                                    'succesDEVMSG': { 'embeds': [_0x36b82f] },
                                                    'succesPUBMSG': { 'embeds': [_0x5da3ce] }
                                                };
                                                if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                                    try {
                                                        await _0x19ed1d(_0x3b7f5f['webhook'], _0x14be42['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x14be42['succesDEVMSG']), await _0x3e202b(0xc8);
                                                try {
                                                    await _0x19ed1d(_0x18008b, _0x14be42['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4fe9b8(_0x58d975[_0x21c3d6], _0x472b1c);
                                            }
                                            _0x447b29(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x472b1c['name'] + ']\x20Task\x20' + (_0x21c3d6 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xb98e6 != 'ver') {
                                                var _0x4fc4cf = '' + _0x32f41c, _0x212b05 = await _0x3ec8c2(_0x58d975[_0x21c3d6], _0x472b1c, 'dev', !![], _0x4fc4cf), _0x27dfb3 = {};
                                                _0x27dfb3['errorDEV'] = { 'embeds': [_0x212b05] }, _0xd9afb0(_0x58d975[_0x21c3d6], _0x472b1c), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x27dfb3['errorDEV']), await _0x19ed1d(_0x54e464, _0x27dfb3['errorDEV']);
                                            }
                                            _0x832ed5(console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x472b1c['name'] + ']\x20Task\x20' + (_0x21c3d6 + 0x1) + ':\x20' + _0x32f41c)));
                                        }
                                    };
                                    try {
                                        _0xb98e6 != 'ver' ? console['log'](_0x1f9e06() + '\x20[' + _0x472b1c['name'] + ']\x20Task\x20' + (_0x21c3d6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x347a3a['data']['attributes']['email']) : console['log'](_0x1f9e06() + '\x20[' + _0x472b1c['name'] + ']\x20Task\x20' + (_0x21c3d6 + 0x1) + ':\x20Fetching\x20Response'), _0x217687(_0xeda840, callback);
                                    } catch (_0x3ba4ab) {
                                        console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x21c3d6 + 0x1) + ':\x20' + _0x3ba4ab);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x32bb18(_0x1303d1, 'ver', _0x3f0e4f, _0x2a2caa, _0x59a524), console['log'](_0x1f9e06() + '\x20[' + _0x3f0e4f['name'] + ']\x20Sleeping\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                            } catch (_0xe5194f) {
                            }
                        }
                    }
                    try {
                        _0x2d43df(), await _0x3e202b(0xfa0), console['log']('Found\x20' + _0x12540a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x13d6a2(_0x43dc23, _0x12540a, _0x1bfd87);
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
            'function': async function (_0x44e003, _0x26e783, _0x16e578) {
                for (var _0x2eb5a6 = 0x0; _0x2eb5a6 < _0x26e783['length']; _0x2eb5a6++) {
                    _0x3b7f5f['AfewDelay'] = _0x3b7f5f['delay'];
                    var _0x30cda5;
                    if (_0x6eff13 != 'yes')
                        var _0x6eff13 = '', _0x368270 = 0x0;
                    var _0x4aac65 = _0x26e783[_0x2eb5a6]['Url'];
                    _0x5988ee(_0x44e003['name'] + '\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20/\x20' + _0x26e783['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                    try {
                        await _0x36594b(_0x26e783, _0x2eb5a6);
                    } catch {
                        _0x6eff13 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4b3c26(_0x16daf5) {
                        const _0x39816b = _0x2e02b8['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2ef486 = _0x1df262['parse'](_0x39816b, { 'header': !![] })['data'];
                        let _0x10569e = ![];
                        for (var _0xf575e4 of _0x2ef486) {
                            if (_0xf575e4['Url'] == _0x16daf5['Url'] && _0xf575e4['Email'] == _0x16daf5['Email']) {
                                _0x10569e = !![];
                                break;
                            }
                        }
                        return _0x10569e;
                    }
                    if (await _0x4b3c26(_0x26e783[_0x2eb5a6]) == !![]) {
                        console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1a8dfd = await _0x3ec8c2(_0x26e783[_0x2eb5a6], _0x44e003, 'dev', ![]), _0x512217 = await _0x3ec8c2(_0x26e783[_0x2eb5a6], _0x44e003, 'pub', ![]);
                    const _0x11d51e = {
                        'succesDEVMSG': { 'embeds': [_0x1a8dfd] },
                        'succesPUBMSG': { 'embeds': [_0x512217] }
                    };
                    if (_0x26e783[_0x2eb5a6]['Email'] == '' || _0x26e783[_0x2eb5a6]['FirstName'] == '' || _0x26e783[_0x2eb5a6]['LastName'] == '' || _0x26e783[_0x2eb5a6]['Country'] == '' || _0x26e783[_0x2eb5a6]['Size'] == '' || _0x26e783[_0x2eb5a6]['Address1'] == '' || _0x26e783[_0x2eb5a6]['Zip'] == '') {
                        console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3b7f5f['useRandomProxy'] = ![])
                        var _0x59290c = _0x16e578[_0x2eb5a6]['split'](':');
                    else
                        var _0x495306 = Math['round'](Math['random']() * (_0x16e578['length'] - 0x1)), _0x59290c = _0x16e578[_0x495306]['split'](':');
                    var _0x22dd69;
                    try {
                        _0x22dd69 = await _0x324aa5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x59290c[0x0] + ':' + _0x59290c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x22dd69 = await _0x324aa5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x59290c[0x0] + ':' + _0x59290c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x1a048e = JSON['parse'](_0x2e02b8['readFileSync']('sizes.json', 'utf-8')), _0x4aac65 = _0x26e783[_0x2eb5a6]['Url'], _0x567e56 = _0x26e783[_0x2eb5a6]['Size'], _0x200986;
                        async function _0x293be9() {
                            var _0x406772 = new _0x388a52['CookieJar']();
                            console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x188561;
                            let _0x483471 = {
                                'method': 'GET',
                                'cookieJar': _0x406772,
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
                                'proxy': 'http://' + _0x59290c[0x2] + ':' + _0x59290c[0x3] + '@' + _0x59290c[0x0] + ':' + _0x59290c[0x1]
                            }, _0x14b5f0 = _0x4aac65['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x231862 = _0x14b5f0 + '.json', _0x1a39cb = await _0x5d8515(_0x231862);
                            console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x4a737f = _0x1a39cb['data']['product']['variants'];
                            if (_0x567e56 != 'RANDOM') {
                                if (_0x4a737f[0x1]['option1']['includes']('W')) {
                                    const _0x50438b = _0x1a048e['women']['find'](_0x15cded => _0x15cded['EUsize'] === _0x567e56);
                                    _0x50438b && (_0x567e56 = _0x50438b['size']);
                                } else {
                                    if (_0x4a737f[0x1]['option1']['includes']('Y')) {
                                        const _0x509279 = _0x1a048e['GS']['find'](_0x395302 => _0x395302['EUsize'] === _0x567e56);
                                        _0x509279 && (_0x567e56 = _0x509279['size']);
                                    } else {
                                        const _0x1d29fd = _0x1a048e['men']['find'](_0x4d1738 => _0x4d1738['EUsize'] === _0x567e56);
                                        _0x1d29fd && (_0x567e56 = _0x1d29fd['size']);
                                    }
                                }
                                for (var _0xa5cbc7 of _0x4a737f) {
                                    _0xa5cbc7['option1'] == _0x567e56 && (_0x188561 = _0xa5cbc7['id']);
                                }
                            } else {
                                var _0x5c2f80 = Math['round'](Math['random']() * (_0x4a737f['length'] - 0x1));
                                _0x188561 = _0x4a737f[_0x5c2f80]['id'];
                            }
                            console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x5d8515('https://raffles.afew-store.com/cart/' + _0x188561 + ':1'), _0x200986 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x293be9();
                        } catch (_0x5a4263) {
                            if (_0x5a4263['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error');
                        }
                        const _0x16eaa7 = await _0x22dd69['newPage']();
                        await _0x16eaa7['setDefaultNavigationTimeout'](0x1d4c0), await _0x16eaa7['authenticate']({
                            'username': '' + _0x59290c[0x2],
                            'password': '' + _0x59290c[0x3]
                        }), await _0x16eaa7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x16eaa7['setRequestInterception'](!![]), _0x16eaa7['on']('request', _0x428942 => {
                            _0x428942['resourceType']() === 'image' || _0x428942['resourceType']() === 'font' || _0x428942['resourceType']() === 'media' ? _0x428942['abort']() : _0x428942['continue']();
                        });
                        try {
                            await _0x16eaa7['goto'](_0x200986, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x16eaa7['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x16eaa7['type']('#checkout_email', '' + _0x26e783[_0x2eb5a6]['Email']), await _0x3e202b(0x320), await _0x16eaa7['select']('#checkout_shipping_address_country', '' + _0x26e783[_0x2eb5a6]['Country']), await _0x16eaa7['waitForTimeout'](0x258), await _0x16eaa7['type']('#checkout_shipping_address_first_name', '' + _0x26e783[_0x2eb5a6]['FirstName']), await _0x16eaa7['waitForTimeout'](0x320), await _0x16eaa7['type']('#checkout_shipping_address_last_name', '' + _0x26e783[_0x2eb5a6]['LastName']), await _0x16eaa7['waitForTimeout'](0x2bc), await _0x16eaa7['type']('#checkout_shipping_address_address1', _0x26e783[_0x2eb5a6]['Address1'] + '\x20' + _0x26e783[_0x2eb5a6]['HouseNumber']), await _0x16eaa7['waitForTimeout'](0x2bc), await _0x16eaa7['type']('#checkout_shipping_address_address2', '' + _0x26e783[_0x2eb5a6]['Address2']), await _0x16eaa7['waitForTimeout'](0x2bc);
                        _0x26e783[_0x2eb5a6]['Postcode'] == undefined ? await _0x16eaa7['type']('#checkout_shipping_address_zip', '' + _0x26e783[_0x2eb5a6]['Zip']) : await _0x16eaa7['type']('#checkout_shipping_address_zip', '' + _0x26e783[_0x2eb5a6]['Postcode']);
                        await _0x16eaa7['waitForTimeout'](0x2bc), await _0x16eaa7['type']('#checkout_shipping_address_city', '' + _0x26e783[_0x2eb5a6]['City']), await _0x16eaa7['waitForTimeout'](0x2bc), console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x16eaa7['evaluate'](() => {
                            const _0x1cc360 = document['querySelector']('#continue_button');
                            for (var _0x472907 = 0x0; _0x472907 < 0x5; _0x472907++) {
                                if (_0x1cc360) {
                                    _0x1cc360['click'](), _0x1cc360['click']();
                                    break;
                                } else
                                    _0x3e202b(0xfa0);
                            }
                        }), await _0x16eaa7['waitForTimeout'](0x9c4);
                        try {
                            await _0x16eaa7['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x16eaa7['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x16eaa7['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x1442f6 => _0x1442f6['submit']()), await _0x16eaa7['waitForTimeout'](0x7d0), console['log'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x16eaa7['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3e202b(0x3e8), await _0x16eaa7['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3d26a3 => _0x3d26a3['submit']()), await _0x3e202b(0x3e8);
                        try {
                            await _0x16eaa7['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x16eaa7['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x35f823 => _0x35f823['submit']());
                        try {
                            await _0x16eaa7['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x6eff13 = 'no', _0x4fe9b8(_0x26e783[_0x2eb5a6], _0x44e003), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                try {
                                    await _0x19ed1d(_0x3b7f5f['webhook'], _0x11d51e['succesDEVMSG']);
                                } catch {
                                }
                            await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x11d51e['succesDEVMSG']), await _0x3e202b(0xc8);
                            try {
                                await _0x19ed1d(_0x18008b, _0x11d51e['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x1a9677) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x337853) {
                        _0x337853['message']['includes']('selector') && (_0x337853 = 'Connection\x20Error');
                        console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20' + _0x337853)), _0x30cda5 = '' + _0x337853;
                        var _0x763ab1 = await _0x3ec8c2(_0x26e783[_0x2eb5a6], _0x44e003, 'dev', !![], _0x30cda5);
                        _0x11d51e['errorDEV'] = { 'embeds': [_0x763ab1] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x11d51e['errorDEV']), await _0x19ed1d(_0x54e464, _0x11d51e['errorDEV']), _0x6eff13 = 'yes';
                    } finally {
                        _0x22dd69 && _0x22dd69['close']();
                        if (_0x6eff13 == 'yes' && _0x368270 != 0x5 && _0x30cda5 != 'Size\x20Not\x20Found') {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x44e003['name'] + ']\x20Task\x20' + (_0x2eb5a6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x368270 + '\x20/\x205)')), _0x2eb5a6 = _0x2eb5a6 - 0x1, _0x368270 = _0x368270 + 0x1;
                            continue;
                        }
                        _0x6eff13 == 'yes' && _0x368270 >= 0x5 && (_0xd9afb0(_0x26e783[_0x2eb5a6], _0x44e003), _0x6eff13 = 'no', _0x368270 = 0x0);
                        if (_0x2eb5a6 + 0x1 == _0x26e783['length']) {
                            await _0x3e202b(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x3b7f5f['AfewDelay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['AfewDelay']);
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
                'function': async function (_0x1c96a2, _0x529838, _0x5b30c6) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x50f198 = 0x0; _0x50f198 < _0x529838['length']; _0x50f198++) {
                        if (_0x348b0d != 'yes')
                            var _0x348b0d = '', _0x16bd27 = 0x0;
                        var _0x3f2c91;
                        try {
                            await _0x36594b(_0x529838, _0x50f198);
                        } catch {
                            _0x348b0d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5988ee(_0x1c96a2['name'] + '\x20Task\x20' + (_0x50f198 + 0x1) + '\x20/\x20' + _0x529838['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        var _0x24f77c = await _0x3ec8c2(_0x529838[_0x50f198], _0x1c96a2, 'acc', ![]);
                        const _0x18c1c6 = { 'succesDEVMSG': { 'embeds': [_0x24f77c] } }, _0x530296 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x1de035 = Math['round'](Math['random']() * (_0x5b30c6['length'] - 0x1)), _0x13d470 = _0x5b30c6[_0x1de035]['split'](':'), _0x4cf563;
                        try {
                            _0x4cf563 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13d470[0x0] + ':' + _0x13d470[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4cf563 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13d470[0x0] + ':' + _0x13d470[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2194ea = await _0x4cf563['newPage']();
                            await _0x2194ea['authenticate']({
                                'username': '' + _0x13d470[0x2],
                                'password': '' + _0x13d470[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2194ea['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2194ea['setRequestInterception'](!![]), _0x2194ea['on']('request', _0x12e3a0 => {
                                _0x12e3a0['resourceType']() === 'image' ? _0x12e3a0['abort']() : _0x12e3a0['continue']();
                            });
                            try {
                                await _0x2194ea['goto']('' + _0x530296), await _0x2194ea['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x2194ea['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3e202b(0x7d0), console['log'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3e202b(0x190), await _0x2194ea['waitForSelector']('#firstname'), await _0x2194ea['type']('#firstname', _0x529838[_0x50f198]['FirstName'], { 'delay': 0xf0 }), await _0x3e202b(0x190), await _0x2194ea['type']('#lastname', _0x529838[_0x50f198]['LastName'], { 'delay': 0xe6 }), await _0x3e202b(0x190), await _0x2194ea['type']('#email_address', _0x529838[_0x50f198]['Email'], { 'delay': 0x122 }), await _0x3e202b(0x190), await _0x2194ea['type']('#password', _0x529838[_0x50f198]['Password'], { 'delay': 0x82 }), await _0x3e202b(0x1f4), await _0x2194ea['type']('#password-confirmation', _0x529838[_0x50f198]['Password'], { 'delay': 0x7c }), console['log'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3e202b(0x2bc), await _0x2194ea['$eval']('#form-validate', _0xba3673 => _0xba3673['submit']()), await _0x3e202b(0x1388);
                            const _0x71c2b9 = await _0x2194ea['$']('#email_address-error');
                            if (_0x71c2b9)
                                throw new Error('Invalid\x20Email');
                            const _0x103912 = await _0x2194ea['$']('#password-error');
                            if (_0x103912)
                                throw new Error('Invalid\x20Password');
                            await _0x2194ea['waitForSelector']('div.mesg-success'), _0x348b0d = 'no', console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Account\x20' + _0x529838[_0x50f198]['Email'] + '\x20Generated')), _0x2e02b8['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x529838[_0x50f198]['Email'] + ',' + _0x529838[_0x50f198]['Password']);
                            try {
                                _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x18c1c6['succesDEVMSG']);
                            } catch {
                            }
                            await _0x19ed1d(_0x5bc60c, _0x18c1c6['succesDEVMSG']), console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x27de67) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20' + _0x27de67)), _0x3f2c91 = '' + _0x27de67;
                            var _0x4ac990 = await _0x3ec8c2(_0x529838[_0x50f198], _0x1c96a2, 'acc', !![], _0x3f2c91);
                            _0x18c1c6['errorDEV'] = { 'embeds': [_0x4ac990] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x18c1c6['errorDEV']), await _0x19ed1d(_0x54e464, _0x18c1c6['errorDEV']), _0x348b0d = 'yes';
                        } finally {
                            _0x4cf563['close']();
                            if (_0x348b0d == 'yes' && _0x16bd27 != 0x5) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Task\x20' + (_0x50f198 + 0x1) + '\x20:\x20Retrying\x20(' + _0x16bd27 + '\x20/\x205)')), _0x50f198 = _0x50f198 - 0x1, _0x16bd27 = _0x16bd27 + 0x1;
                                continue;
                            }
                            _0x348b0d == 'yes' && _0x16bd27 >= 0x5 && (_0xd9afb0(_0x529838[_0x50f198], _0x1c96a2), _0x348b0d = 'no', _0x16bd27 = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x1c96a2['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3e07f3, _0x5d53e8) {
                    var _0x4aafdd = ![], _0x1dcf74 = [];
                    async function _0x112df4() {
                        var _0x54459e = new _0x35c1c1({
                            'user': _0x3b7f5f['masterMail'],
                            'password': _0x3b7f5f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x305e38(_0x44f3a3) {
                            _0x54459e['openBox']('INBOX', ![], _0x44f3a3);
                        }
                        _0x54459e['once']('ready', function () {
                            _0x305e38(function (_0x2276bb, _0x4b52e6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2276bb)
                                    throw _0x2276bb;
                                _0x54459e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x4364ff, _0x248c72) {
                                    if (!_0x248c72 || !_0x248c72['length'])
                                        console['log'](_0x1f9e06() + '\x20[' + _0x3e07f3['name'] + ']\x20No\x20mails\x20found'), _0x54459e['end']();
                                    else {
                                        var _0x4a65de = _0x54459e['seq']['fetch'](_0x248c72, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4a65de['on']('message', function (_0x23a7d6, _0x49e98f) {
                                            var _0x421bfc = '(#' + _0x49e98f + ')\x20';
                                            _0x23a7d6['on']('body', function (_0x4c2d28, _0x243600) {
                                                _0x2b928(_0x4c2d28, (_0x2cf7da, _0x3ed34f) => {
                                                    var _0xbbc398 = _0x3ed34f['text']['split']('[')[0x2], _0x520138 = _0xbbc398['split'](']')[0x0];
                                                    _0x1dcf74['push'](_0x520138);
                                                });
                                            }), _0x23a7d6['once']('end', function () {
                                            });
                                        }), _0x4a65de['once']('error', function (_0x36426b) {
                                            console['log']('Fetch\x20error:\x20' + _0x36426b), _0x4aafdd = !![];
                                        }), _0x4a65de['once']('end', function () {
                                            _0x54459e['end'](), _0x4aafdd = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x54459e['once']('error', function (_0x2b074e) {
                            console['log'](_0x58e018['red'](_0x2b074e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4aafdd = !![];
                        }), _0x54459e['once']('end', async function () {
                            _0x4aafdd = !![];
                        }), _0x54459e['connect']();
                    }
                    async function _0x139eca(_0x26b394, _0x1311aa, _0x225a57) {
                        _0x324aa5['use'](_0x412339());
                        for (var _0x33c213 = 0x0; _0x33c213 < _0x1311aa['length']; _0x33c213++) {
                            if (_0x35cb20 != 'yes')
                                var _0x35cb20 = '', _0x48dbdb = 0x0;
                            var _0x100ade = Math['round'](Math['random']() * (_0x225a57['length'] - 0x1)), _0x10851a = _0x225a57[_0x100ade]['split'](':'), _0x3b3791;
                            try {
                                _0x3b3791 = await _0x324aa5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x10851a[0x0] + ':' + _0x10851a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3b3791 = await _0x324aa5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x10851a[0x0] + ':' + _0x10851a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x274363 = await _0x3b3791['newPage']();
                                await _0x274363['authenticate']({
                                    'username': '' + _0x10851a[0x2],
                                    'password': '' + _0x10851a[0x3]
                                }), console['log'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x274363['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x274363['setRequestInterception'](!![]), _0x274363['on']('request', _0x4b4ed5 => {
                                    _0x4b4ed5['resourceType']() === 'image' || _0x4b4ed5['resourceType']() === 'font' || _0x4b4ed5['resourceType']() === 'media' ? _0x4b4ed5['abort']() : _0x4b4ed5['continue']();
                                }), console['log'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x274363['goto'](_0x1311aa[_0x33c213]);
                                } catch {
                                    _0x35cb20 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x274363['waitForTimeout'](0xbb8);
                                try {
                                    await _0x274363['waitForSelector']('.account-nav'), _0x35cb20 = 'no', console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x444f6f = await _0x3ec8c2(null, _0x26b394, 'ver', ![]);
                                    const _0x1270fd = { 'succesDEVMSG': { 'embeds': [_0x444f6f] } };
                                    await _0x19ed1d(_0x5a929f, _0x1270fd['succesDEVMSG']);
                                } catch {
                                    _0x35cb20 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x4ee244) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20' + _0x4ee244));
                                var _0x4af25c = _0x4ee244, _0x236625 = await _0x3ec8c2(null, _0x26b394, 'ver', !![], _0x4af25c);
                                const _0x5c671d = { 'errorDEVMSG': { 'embeds': [_0x236625] } };
                                _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x5c671d['errorDEVMSG']), await _0x19ed1d(_0x54e464, _0x5c671d['errorDEVMSG']);
                            } finally {
                                _0x3b3791['close']();
                                if (_0x35cb20 == 'yes' && _0x48dbdb != 0x5) {
                                    console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Task\x20' + (_0x33c213 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48dbdb + '\x20/\x205)')), _0x33c213 = _0x33c213 - 0x1, _0x48dbdb = _0x48dbdb + 0x1;
                                    continue;
                                }
                                _0x35cb20 == 'yes' && _0x48dbdb >= 0x5 && (_0x35cb20 = 'no', _0x48dbdb = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x26b394['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                            }
                        }
                    }
                    try {
                        _0x112df4();
                        while (!_0x4aafdd) {
                            await _0x3e202b(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1dcf74['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3e202b(0x7d0);
                    }
                    await _0x139eca(_0x3e07f3, _0x1dcf74, _0x5d53e8);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x32ca92, _0x2772a4, _0x5b9c59) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x579070 = 0x0; _0x579070 < _0x2772a4['length']; _0x579070++) {
                        var _0x65a94a;
                        try {
                            await _0x36594b(_0x2772a4, _0x579070);
                        } catch {
                            _0xa90f95 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3e7242(_0x12b590) {
                            const _0x4ef1c7 = _0x2e02b8['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2fae8a = _0x1df262['parse'](_0x4ef1c7, { 'header': !![] })['data'];
                            let _0x2090df = ![];
                            for (var _0x26c3da of _0x2fae8a) {
                                if (_0x26c3da['Url'] == _0x12b590['Url'] && _0x26c3da['Email'] == _0x12b590['Email']) {
                                    _0x2090df = !![];
                                    break;
                                }
                            }
                            return _0x2090df;
                        }
                        if (await _0x3e7242(_0x2772a4[_0x579070]) == !![]) {
                            console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0xa90f95 != 'yes')
                            var _0xa90f95 = '', _0x14e670 = 0x0;
                        _0x5988ee(_0x32ca92['name'] + '\x20Task\x20' + (_0x579070 + 0x1) + '\x20/\x20' + _0x2772a4['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        var _0x5d3547 = Math['round'](Math['random']() * (_0x5b9c59['length'] - 0x1)), _0x2ec664 = _0x5b9c59[_0x5d3547]['split'](':'), _0x21eb8b;
                        try {
                            _0x21eb8b = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2ec664[0x0] + ':' + _0x2ec664[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21eb8b = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2ec664[0x0] + ':' + _0x2ec664[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x11e0bf = await _0x21eb8b['newPage'](), _0x2d5146 = await _0x11e0bf['target']()['createCDPSession'](), { windowId: _0x5b5b5c } = await _0x2d5146['send']('Browser.getWindowForTarget');
                            await _0x11e0bf['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x3ab410 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x11e0bf['authenticate']({
                                'username': '' + _0x2ec664[0x2],
                                'password': '' + _0x2ec664[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x11e0bf['goto']('' + _0x2772a4[_0x579070]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x11e0bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x2d5146['send']('Browser.setWindowBounds', {
                                'windowId': _0x5b5b5c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3e202b(0x1388), await _0x11e0bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x11e0bf['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3e202b(0x1f4), console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Logging\x20in'), await _0x11e0bf['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x15251d => _0x15251d['click']()), await _0x11e0bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x11e0bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3e202b(0x7d0), await _0x11e0bf['waitForSelector']('#email-login'), await _0x11e0bf['type']('#email-login', '' + _0x2772a4[_0x579070]['Email']), await _0x3e202b(0xdac), await _0x11e0bf['waitForSelector']('#password'), await _0x11e0bf['type']('#password', '' + _0x2772a4[_0x579070]['Password'], { 'delay': 0xe6 }), await _0x3e202b(0x157c);
                            try {
                                await _0x11e0bf['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xc5e941 => _0xc5e941['click']());
                            } catch {
                            }
                            try {
                                await _0x11e0bf['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x46e5c9) {
                            }
                            await _0x3e202b(0x3e8);
                            const _0x92bef8 = await _0x11e0bf['$']('.enteredDraw_container__2KmQ_');
                            if (_0x92bef8)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2772a4[_0x579070]['Size']);
                            try {
                                if (_0x2772a4[_0x579070]['Size'] != 'RANDOM') {
                                    var _0x41b543 = _0x2772a4[_0x579070]['Size']['replace']('.', ',');
                                    const _0x3b17d2 = await _0x11e0bf['$x']('//div[contains(text(),\x20' + _0x41b543 + ')]');
                                    await _0x3b17d2[0x0]['click']();
                                } else {
                                    const _0x51d07c = await _0x11e0bf['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x144053 = Math['round'](Math['random']() * (_0x51d07c['length'] - 0x1));
                                    await _0x51d07c[_0x144053]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x3e202b(0x1f4);
                            const _0x4e436d = await _0x11e0bf['$']('.addressList_addressItem__LE2PB');
                            if (_0x4e436d && _0x2772a4[_0x579070]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x11e0bf['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x3e202b(0x5dc), await _0x11e0bf['waitForSelector']('#firstname'), await _0x11e0bf['type']('#firstname', '' + _0x2772a4[_0x579070]['FirstName']), await _0x3e202b(0x1f4), await _0x11e0bf['waitForSelector']('#firstname'), await _0x11e0bf['type']('#lastname', '' + _0x2772a4[_0x579070]['LastName']), await _0x3e202b(0x1f4), await _0x11e0bf['waitForSelector']('#firstname'), await _0x11e0bf['type']('#street', '' + _0x2772a4[_0x579070]['Address1']), await _0x3e202b(0x1f4), await _0x11e0bf['waitForSelector']('#firstname'), await _0x11e0bf['type']('#houseNumber', _0x2772a4[_0x579070]['HouseNumber'] + '\x20' + _0x2772a4[_0x579070]['Address2']), await _0x3e202b(0x1f4), await _0x11e0bf['waitForSelector']('#firstname'), await _0x11e0bf['select']('#country_code', '' + _0x2772a4[_0x579070]['Country']), await _0x3e202b(0x1f4), await _0x11e0bf['type']('#postcode', '' + _0x2772a4[_0x579070]['Zip']), await _0x3e202b(0x1f4), await _0x11e0bf['type']('#city', '' + _0x2772a4[_0x579070]['City']), await _0x3e202b(0x1f4), await _0x11e0bf['type']('#telephone', '' + _0x2772a4[_0x579070]['Phone']), await _0x3e202b(0x1f4), await _0x11e0bf['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x3e202b(0x9c4);
                            try {
                                await _0x11e0bf['type']('#instagram_name', '' + _0x2772a4[_0x579070]['Follower']), await _0x11e0bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3e202b(0x5dc);
                            try {
                                await _0x11e0bf['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x3e202b(0x5dc), await _0x11e0bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x439ebf => _0x439ebf['click']()), await _0x3e202b(0x1388);
                            try {
                                await _0x11e0bf['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x11e0bf['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2772a4[_0x579070]['Size'] != 'RANDOM') {
                                    var _0x41b543 = _0x2772a4[_0x579070]['Size']['replace']('.', ',');
                                    const _0xb30384 = await _0x11e0bf['$x']('//div[contains(text(),\x20' + _0x41b543 + ')]');
                                    await _0xb30384[0x0]['click']();
                                } else {
                                    const _0x445679 = await _0x11e0bf['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x144053 = Math['round'](Math['random']() * (_0x445679['length'] - 0x1));
                                    await _0x445679[_0x144053]['click']();
                                }
                                await _0x3e202b(0x5dc);
                                try {
                                    await _0x11e0bf['hover']('#instagram_name'), await _0x11e0bf['type']('#instagram_name', '' + _0x2772a4[_0x579070]['Follower']), await _0x11e0bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Retrying\x20(' + _0x14e670 + '\x20/\x205)'), await _0x11e0bf['hover']('.checkBox_boxHolder__wLGVe'), await _0x3e202b(0x5dc), await _0x11e0bf['click']('.checkBox_boxHolder__wLGVe'), await _0x3e202b(0x157c), await _0x11e0bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2f1edd => _0x2f1edd['click']()), await _0x3e202b(0x1388), await _0x11e0bf['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0xa90f95 = 'no', _0x4fe9b8(_0x2772a4[_0x579070], _0x32ca92), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4921d0 = await _0x3ec8c2(_0x2772a4[_0x579070], _0x32ca92, 'dev', ![]), _0x39e92c = await _0x3ec8c2(_0x2772a4[_0x579070], _0x32ca92, 'pub', ![]);
                            const _0x35dbae = {
                                'succesDEVMSG': { 'embeds': [_0x4921d0] },
                                'succesPUBMSG': { 'embeds': [_0x39e92c] }
                            };
                            try {
                                _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x35dbae['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x35dbae['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x18008b, _0x35dbae['succesPUBMSG']);
                            } catch (_0x5dee71) {
                                console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5dee71));
                            }
                        } catch (_0xa6b416) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20' + _0xa6b416)), _0xa90f95 = 'yes', _0x65a94a = '' + _0xa6b416;
                            var _0x32f12d = await _0x3ec8c2(_0x2772a4[_0x579070], _0x32ca92, 'dev', !![], _0x65a94a), _0x4921d0 = await _0x3ec8c2(_0x2772a4[_0x579070], _0x32ca92, 'dev', ![]), _0x39e92c = await _0x3ec8c2(_0x2772a4[_0x579070], _0x32ca92, 'pub', ![]);
                            const _0x204185 = {
                                'succesDEVMSG': { 'embeds': [_0x4921d0] },
                                'succesPUBMSG': { 'embeds': [_0x39e92c] }
                            };
                            _0x204185['errorDEV'] = { 'embeds': [_0x32f12d] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x204185['errorDEV']), await _0x19ed1d(_0x54e464, _0x204185['errorDEV']);
                        } finally {
                            _0x21eb8b['close']();
                            if (_0xa90f95 == 'yes' && _0x14e670 != 0x5) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Task\x20' + (_0x579070 + 0x1) + '\x20:\x20Retrying\x20(' + _0x14e670 + '\x20/\x205)')), _0x579070 = _0x579070 - 0x1, _0x14e670 = _0x14e670 + 0x1;
                                continue;
                            }
                            _0xa90f95 == 'yes' && _0x14e670 >= 0x5 && (_0xd9afb0(_0x2772a4[_0x579070], _0x32ca92), _0xa90f95 = 'no', _0x14e670 = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x32ca92['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'FENOM',
        'modules': [
            {
                'name': 'FENOM\x20Account\x20Generator',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function (_0x2a160e, _0xf8cae, _0x4c1a9f) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5abd7e = 0x0; _0x5abd7e < _0xf8cae['length']; _0x5abd7e++) {
                        if (_0x2759fb != 'yes')
                            var _0x2759fb = '', _0x1994bf = 0x0;
                        var _0x585ba7;
                        try {
                            await _0x36594b(_0xf8cae, _0x5abd7e);
                        } catch {
                            _0x2759fb = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5988ee(_0x2a160e['name'] + '\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20/\x20' + _0xf8cae['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        var _0x34a5a0 = await _0x3ec8c2(_0xf8cae[_0x5abd7e], _0x2a160e, 'acc', ![]);
                        const _0x2937d2 = { 'succesDEVMSG': { 'embeds': [_0x34a5a0] } }, _0xc81596 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1e41d3 = Math['round'](Math['random']() * (_0x4c1a9f['length'] - 0x1)), _0x45e6e3 = _0x4c1a9f[_0x1e41d3]['split'](':'), _0x4a4157;
                        try {
                            _0x4a4157 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x45e6e3[0x0] + ':' + _0x45e6e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4a4157 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x45e6e3[0x0] + ':' + _0x45e6e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x56ea65 = await _0x4a4157['newPage']();
                            await _0x56ea65['setViewport']({
                                'width': 0x500 + _0x4a97d2(0x1, 0x32),
                                'height': 0x2d9 + _0x4a97d2(0x1, 0x32)
                            });
                            const _0x1c3b0f = await _0x56ea65['target']()['createCDPSession'](), { windowId: _0xc16fcd } = await _0x1c3b0f['send']('Browser.getWindowForTarget');
                            await _0x56ea65['authenticate']({
                                'username': '' + _0x45e6e3[0x2],
                                'password': '' + _0x45e6e3[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56ea65['goto']('' + _0xc81596, { 'waitUntil': 'networkidle2' }), await _0x3e202b(0x1388), console['log'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x542405 = await _0x56ea65['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x542405 && await _0x542405['click']();
                            } catch {
                            }
                            await _0x1c3b0f['send']('Browser.setWindowBounds', {
                                'windowId': _0xc16fcd,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x56ea65['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x3e202b(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x56ea65['type']('input[name=\x22firstname\x22]', '' + _0xf8cae[_0x5abd7e]['FirstName']), await _0x3e202b(0x1f4), await _0x56ea65['type']('input[name=\x22lastname\x22]', '' + _0xf8cae[_0x5abd7e]['LastName']), await _0x3e202b(0x1f4), await _0x56ea65['type']('input[name=\x22email\x22]', '' + _0xf8cae[_0x5abd7e]['Email']), await _0x3e202b(0x1f4), await _0x56ea65['type']('input[name=\x22password\x22]', '' + _0xf8cae[_0x5abd7e]['Password']), await _0x3e202b(0x258), await _0x56ea65['$eval']('input[name=\x22psgdpr\x22]', _0x3b3eac => _0x3b3eac['click']()), await _0x3e202b(0x1f4), console['log'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x56ea65['$eval']('#customer-form', _0x4cf897 => _0x4cf897['submit']());
                            try {
                                try {
                                    await _0x56ea65['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x2759fb = 'no', console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Account\x20' + _0xf8cae[_0x5abd7e]['Email'] + '\x20Generated')), _0x2e02b8['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0xf8cae[_0x5abd7e]['Email'] + ',' + _0xf8cae[_0x5abd7e]['Password']);
                                try {
                                    _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x2937d2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19ed1d(_0x5bc60c, _0x2937d2['succesDEVMSG']);
                            } catch (_0x5e6e92) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x4b6199) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20' + _0x4b6199)), _0x585ba7 = '' + _0x4b6199;
                            var _0x437aef = await _0x3ec8c2(_0xf8cae[_0x5abd7e], _0x2a160e, 'acc', !![], _0x585ba7);
                            _0x2937d2['errorDEV'] = { 'embeds': [_0x437aef] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x2937d2['errorDEV']), await _0x19ed1d(_0x54e464, _0x2937d2['errorDEV']), _0x2759fb = 'yes';
                        } finally {
                            _0x4a4157['close']();
                            if (_0x2759fb == 'yes' && _0x1994bf != 0x5 && _0x585ba7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Task\x20' + (_0x5abd7e + 0x1) + '\x20:\x20Retrying\x20(' + _0x1994bf + '\x20/\x205)')), _0x5abd7e = _0x5abd7e - 0x1, _0x1994bf = _0x1994bf + 0x1;
                                continue;
                            }
                            _0x2759fb == 'yes' && _0x1994bf >= 0x5 && (_0xd9afb0(_0xf8cae[_0x5abd7e], _0x2a160e), _0x2759fb = 'no', _0x1994bf = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x2a160e['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4ff651(_0x5205f4, _0x295f1d, _0x764852) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xfe05d9 = 0x0; _0xfe05d9 < _0x295f1d['length']; _0xfe05d9++) {
                        if (_0x5f3e64 != 'yes')
                            var _0x5f3e64 = '', _0x3edbb4 = 0x0;
                        var _0x58b88d;
                        try {
                            await _0x36594b(_0x295f1d, _0xfe05d9);
                        } catch {
                            _0x5f3e64 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5988ee(_0x5205f4['name'] + '\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20/\x20' + _0x295f1d['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        const _0x33665e = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x34cc7d = Math['round'](Math['random']() * (_0x764852['length'] - 0x1)), _0x1151cb = _0x764852[_0x34cc7d]['split'](':'), _0x2fa2e9;
                        try {
                            _0x2fa2e9 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1151cb[0x0] + ':' + _0x1151cb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2fa2e9 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1151cb[0x0] + ':' + _0x1151cb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a8fe4 = await _0x2fa2e9['newPage'](), _0x1bf3ba = await _0x3a8fe4['target']()['createCDPSession'](), { windowId: _0xc16cf4 } = await _0x1bf3ba['send']('Browser.getWindowForTarget');
                            await _0x3a8fe4['authenticate']({
                                'username': '' + _0x1151cb[0x2],
                                'password': '' + _0x1151cb[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a8fe4['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x3e202b(0xbb8), await _0x1bf3ba['send']('Browser.setWindowBounds', {
                                'windowId': _0xc16cf4,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3e202b(0x1f40);
                            try {
                                await _0x3a8fe4['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x3e202b(0x1388), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3a8fe4['type']('input[name=\x22email\x22]', '' + _0x295f1d[_0xfe05d9]['Email']), await _0x3e202b(0x1f4), await _0x3a8fe4['type']('input[name=\x22password\x22]', '' + _0x295f1d[_0xfe05d9]['Password']), await _0x3e202b(0x258), await _0x3a8fe4['$eval']('#login-form', _0x495b44 => _0x495b44['submit']()), await _0x3a8fe4['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x3e202b(0x1f4), await _0x3a8fe4['goto']('' + _0x295f1d[_0xfe05d9]['Url']), await _0x3a8fe4['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x295f1d[_0xfe05d9]['Size']);
                            if (_0x295f1d[_0xfe05d9]['Size'] != 'RANDOM') {
                                var _0x37a855 = '\x20' + _0x295f1d[_0xfe05d9]['Size'] + '\x20';
                                const _0x2d78c1 = await _0x3a8fe4['$x']('//span[contains(text(),\x20' + _0x37a855 + ')]');
                                await _0x2d78c1[0x0]['click']();
                            } else {
                                const _0xacf7a6 = await _0x3a8fe4['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x197bfe = Math['round'](Math['random']() * (_0xacf7a6['length'] - 0x1));
                                await _0xacf7a6[_0x197bfe]['click']();
                            }
                            await _0x3e202b(0x258), await _0x3a8fe4['click']('#cookieChoiceDismiss'), await _0x3e202b(0x3e8), await _0x3a8fe4['type']('#instagram-account', '' + _0x295f1d[_0xfe05d9]['Follower']), await _0x3e202b(0x28a), await _0x3a8fe4['click']('#book-btn'), await _0x3e202b(0xbb8);
                            try {
                                await _0x3a8fe4['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x3e202b(0x1f4), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20' + _0x58e018['cyan']('Solving\x20Captcha')), await _0x3a8fe4['solveRecaptchas'](), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3e202b(0x7d0), await _0x3a8fe4['$eval']('#book-btn-for-sure', _0x169f38 => _0x169f38['click']()), await _0x3e202b(0x12c), await _0x3a8fe4['click']('#book-btn-for-sure'), await _0x3e202b(0xdac);
                            const _0xb06379 = await _0x3a8fe4['$eval']('.reservation-popup\x20>\x20.title', _0x52fb76 => {
                                return _0x52fb76['innerHTML'];
                            });
                            if (_0xb06379) {
                                _0x5f3e64 = 'no', _0x4fe9b8(_0x295f1d[_0xfe05d9], _0x5205f4), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x24de14 = await _0x3ec8c2(_0x295f1d[_0xfe05d9], _0x5205f4, 'dev', ![]), _0x6f2279 = await _0x3ec8c2(_0x295f1d[_0xfe05d9], _0x5205f4, 'pub', ![]);
                                const _0x359708 = {
                                    'succesDEVMSG': { 'embeds': [_0x24de14] },
                                    'succesPUBMSG': { 'embeds': [_0x6f2279] }
                                };
                                try {
                                    _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x359708['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x359708['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x18008b, _0x359708['succesPUBMSG']);
                                } catch (_0x1d8b74) {
                                    console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1d8b74));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x56fc13) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20' + _0x56fc13)), _0x58b88d = '' + _0x56fc13;
                            var _0x9dd077 = await _0x3ec8c2(_0x295f1d[_0xfe05d9], _0x5205f4, 'dev', !![], _0x58b88d), _0x24de14 = await _0x3ec8c2(_0x295f1d[_0xfe05d9], _0x5205f4, 'dev', ![]), _0x6f2279 = await _0x3ec8c2(_0x295f1d[_0xfe05d9], _0x5205f4, 'pub', ![]);
                            const _0x1c4634 = {
                                'succesDEVMSG': { 'embeds': [_0x24de14] },
                                'succesPUBMSG': { 'embeds': [_0x6f2279] }
                            };
                            _0x1c4634['errorDEV'] = { 'embeds': [_0x9dd077] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x1c4634['errorDEV']), await _0x19ed1d(_0x54e464, _0x1c4634['errorDEV']), _0x56fc13 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5f3e64 = 'yes');
                        } finally {
                            _0x2fa2e9['close']();
                            if (_0x5f3e64 == 'yes' && _0x3edbb4 != 0x5 && _0x58b88d != 'Size\x20Not\x20Found') {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Task\x20' + (_0xfe05d9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3edbb4 + '\x20/\x205)')), _0xfe05d9 = _0xfe05d9 - 0x1, _0x3edbb4 = _0x3edbb4 + 0x1;
                                continue;
                            }
                            _0x5f3e64 == 'yes' && _0x3edbb4 >= 0x5 && (_0xd9afb0(_0x295f1d[_0xfe05d9], _0x5205f4), _0x5f3e64 = 'no', _0x3edbb4 = 0x0), console['log'](_0x1f9e06() + '\x20[' + _0x5205f4['name'] + ']\x20Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
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
            'function': async function (_0x43c2bf, _0x358ece, _0x399f0b) {
                _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x3b7f5f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x43859d = 0x0; _0x43859d < _0x358ece['length']; _0x43859d++) {
                    var _0x3ad3d7;
                    if (_0x2b6100 != 'yes')
                        var _0x2b6100 = '', _0x83bbab = 0x0;
                    var _0x57b1c0 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1dc6d4
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x358ece[_0x43859d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x358ece[_0x43859d]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x3b7f5f['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x413f08
                            }
                        ]
                    }], _0x27120b = await _0x3ec8c2(_0x358ece[_0x43859d], _0x43c2bf, 'dev', ![]), _0x315185 = await _0x3ec8c2(_0x358ece[_0x43859d], _0x43c2bf, 'pub', ![]);
                    const _0x55e8cc = {
                        'succesDEVMSG': { 'embeds': [_0x27120b] },
                        'succesPUBMSG': { 'embeds': [_0x315185] }
                    }, _0x5ed34c = { 'embeds': _0x57b1c0 };
                    try {
                        await _0x36594b(_0x358ece, _0x43859d);
                    } catch {
                        _0x2b6100 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x358ece[_0x43859d]['Email'] == '' || _0x358ece[_0x43859d]['FirstName'] == '' || _0x358ece[_0x43859d]['LastName'] == '' || _0x358ece[_0x43859d]['Country'] == '' || _0x358ece[_0x43859d]['Size'] == '' || _0x358ece[_0x43859d]['Address1'] == '' || _0x358ece[_0x43859d]['Zip'] == '') {
                        console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x358ece[_0x43859d]['Email'] == '' || _0x358ece[_0x43859d]['FirstName'] == '' || _0x358ece[_0x43859d]['LastName'] == '' || _0x358ece[_0x43859d]['Country'] == '' || _0x358ece[_0x43859d]['Size'] == '' || _0x358ece[_0x43859d]['Address1'] == '' || _0x358ece[_0x43859d]['Zip'] == '' || _0x358ece[_0x43859d]['Phone'] == '') {
                        console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5f4a28 = '' + _0x358ece[_0x43859d]['Url'];
                    if (_0x3b7f5f['useRandomProxy'] = ![])
                        var _0x42f034 = _0x399f0b[_0x43859d]['split'](':');
                    else
                        var _0x31378c = Math['round'](Math['random']() * (_0x399f0b['length'] - 0x1)), _0x42f034 = _0x399f0b[_0x31378c]['split'](':');
                    var _0x24cfcd;
                    try {
                        _0x24cfcd = await _0x324aa5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42f034[0x0] + ':' + _0x42f034[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x24cfcd = await _0x324aa5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42f034[0x0] + ':' + _0x42f034[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x3f504c = await _0x24cfcd['newPage']();
                        await _0x3f504c['authenticate']({
                            'username': '' + _0x42f034[0x2],
                            'password': '' + _0x42f034[0x3]
                        }), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f504c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3f504c['setRequestInterception'](!![]), _0x3f504c['on']('request', _0x986425 => {
                            _0x986425['resourceType']() === 'image' || _0x986425['resourceType']() === 'font' || _0x986425['resourceType']() === 'media' ? _0x986425['abort']() : _0x986425['continue']();
                        });
                        try {
                            await _0x3f504c['goto'](_0x5f4a28), await _0x3e202b(0xbb8), await _0x3f504c['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3f504c['click']('.control__JhutY'), await _0x3e202b(0x1f4);
                        if (_0x358ece[_0x43859d]['Size'] != 'RANDOM')
                            try {
                                const _0x200234 = await _0x3f504c['$x']('//div[contains(text(),\x20\x27' + _0x358ece[_0x43859d]['Size'] + '\x27)]');
                                await _0x200234[0x0]['click']();
                            } catch {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0xfc8ed4 = await _0x3f504c['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2ec315 = Math['round'](Math['random']() * (_0xfc8ed4['length'] - 0x1));
                            await _0xfc8ed4[_0x2ec315]['click']();
                        }
                        await _0x3e202b(0x4b0);
                        const _0xcb1306 = await _0x3f504c['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xcb1306[0x0]['click'](), await _0x3f504c['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3f504c['type']('input[name=\x22email\x22]', '' + _0x358ece[_0x43859d]['Email']), await _0x3e202b(0x640), await _0x3f504c['type']('input[name=\x22phone\x22]', '' + _0x358ece[_0x43859d]['Phone']), await _0x3e202b(0x4b0), await _0x3f504c['click']('button.btn.continue-button__1RtsS'), await _0x3e202b(0x4b0);
                        try {
                            await _0x3f504c['type']('input[name=\x22firstName\x22]', '' + _0x358ece[_0x43859d]['FirstName']), await _0x3e202b(0x258);
                        } catch {
                            const _0x46b7f9 = await _0x3f504c['$$eval']('.invalid-feedback\x20>\x20div', _0x12fa04 => {
                                return _0x12fa04['map'](_0x259d4d => _0x259d4d['innerText']);
                            });
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20' + _0x46b7f9));
                            continue;
                        }
                        await _0x3f504c['type']('input[name=\x22lastName\x22]', '' + _0x358ece[_0x43859d]['LastName']), await _0x3e202b(0xc8), await _0x3f504c['type']('input[name=\x22instagramUsername\x22]', '' + _0x358ece[_0x43859d]['Follower']), await _0x3e202b(0x4b0), await _0x3f504c['click']('button.btn.continue-button__1RtsS'), await _0x3e202b(0x3e8), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3f504c['select']('select[name=\x22country\x22]', '' + _0x358ece[_0x43859d]['Country']), await _0x3e202b(0x2bc), await _0x3f504c['type']('input[name=\x22streetName\x22]', '' + _0x358ece[_0x43859d]['Address1']), await _0x3e202b(0x258), await _0x3f504c['type']('input[name=\x22houseNumber\x22]', _0x358ece[_0x43859d]['HouseNumber'] + '\x20' + _0x358ece[_0x43859d]['Address2']), await _0x3e202b(0xc8), await _0x3f504c['type']('input[name=\x22postalCode\x22]', '' + _0x358ece[_0x43859d]['Zip']), await _0x3e202b(0x1f4), await _0x3f504c['type']('input[name=\x22city\x22]', '' + _0x358ece[_0x43859d]['City']), await _0x3e202b(0x4b0), await _0x3f504c['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x3e202b(0x4b0), await _0x3f504c['click']('button.btn.continue-button__1RtsS'), await _0x3e202b(0x4b0), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3f504c['solveRecaptchas'](), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x3e202b(0xbb8), await _0x3f504c['click']('button.btn.continue-button__1RtsS'), await _0x3e202b(0x1388), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3f504c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3f504c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3e202b(0x4b0), await _0x3f504c['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x358ece[_0x43859d]['CardNumber']), await _0x3e202b(0x320), await _0x3f504c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3f504c['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x358ece[_0x43859d]['ExpiryDate']), await _0x3e202b(0x4b0), await _0x3f504c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3f504c['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x358ece[_0x43859d]['CVV']), await _0x3e202b(0x226), await _0x3f504c['type']('input[name=\x22holderName\x22]', '' + _0x358ece[_0x43859d]['NameOnCard']), await _0x3e202b(0x226), await _0x3f504c['click']('button.adyen-checkout__button'), console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x3f504c['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x3e202b(0xbb8);
                        } catch (_0x1c8c07) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x203DS\x20Failed')), _0x3ad3d7 = '3DS\x20Error\x20' + _0x1c8c07;
                            var _0x4c02a2 = await _0x3ec8c2(_0x358ece[_0x43859d], _0x43c2bf, 'dev', !![], _0x3ad3d7);
                            _0x55e8cc['errorDEV'] = { 'embeds': [_0x4c02a2] };
                            _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x55e8cc['errorDEV']);
                            await _0x19ed1d(_0x54e464, _0x55e8cc['errorDEV']);
                            continue;
                        }
                        _0x4fe9b8(_0x358ece[_0x43859d], _0x43c2bf), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                            try {
                                await _0x19ed1d(_0x3b7f5f['webhook'], _0x55e8cc['succesDEVMSG']);
                            } catch {
                            }
                        await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x55e8cc['succesDEVMSG']), await _0x3e202b(0xc8);
                        try {
                            await _0x19ed1d(_0x18008b, _0x55e8cc['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x48d53c) {
                        console['log'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20' + _0x48d53c), _0x3ad3d7 = '' + _0x48d53c;
                        var _0x4c02a2 = await _0x3ec8c2(_0x358ece[_0x43859d], _0x43c2bf, 'dev', !![], _0x3ad3d7);
                        _0x55e8cc['errorDEV'] = { 'embeds': [_0x4c02a2] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x55e8cc['errorDEV']), await _0x19ed1d(_0x54e464, _0x55e8cc['errorDEV']), _0x2b6100 = 'yes';
                    } finally {
                        _0x24cfcd['close']();
                        if (_0x2b6100 == 'yes' && _0x83bbab != 0x5) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x43c2bf['name'] + ']\x20Task\x20' + (_0x43859d + 0x1) + '\x20:\x20Retrying\x20(' + _0x83bbab + '\x20/\x205)')), _0x43859d = _0x43859d - 0x1, _0x83bbab = _0x83bbab + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x3b7f5f['footshopDelay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['footshopDelay']);
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
            'function': async function (_0x375dae, _0x47e68e, _0x6147cd) {
                var _0x4f05c1 = ![], _0x8b216d = ![];
                if (_0x3b7f5f['captchaKey'] == '' || _0x3b7f5f['captchaKey'] == undefined)
                    return console['log'](_0x58e018['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x3b7f5f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xf392c8 = 0x0; _0xf392c8 < _0x47e68e['length']; _0xf392c8++) {
                    if (_0xaa1735 != 'yes')
                        var _0xaa1735 = '', _0x27cd29 = 0x0;
                    var _0x56a1a3, _0x2b516d = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x47e68e[_0xf392c8]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x47e68e[_0xf392c8]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1dc6d4
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x3b7f5f['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x413f08
                            }
                        ]
                    }];
                    const _0x3124f5 = { 'embeds': _0x2b516d };
                    _0x5988ee(_0x375dae['name'] + '\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20/\x20' + _0x47e68e['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                    try {
                        await _0x36594b(_0x47e68e, _0xf392c8);
                    } catch {
                        _0xaa1735 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x1bdc3c = await _0x3ec8c2(_0x47e68e[_0xf392c8], _0x375dae, 'dev', ![]), _0x37f188 = await _0x3ec8c2(_0x47e68e[_0xf392c8], _0x375dae, 'pub', ![]);
                    const _0x83b9eb = {
                        'succesDEVMSG': { 'embeds': [_0x1bdc3c] },
                        'succesPUBMSG': { 'embeds': [_0x37f188] }
                    };
                    if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                        try {
                            await _0x19ed1d(_0x3b7f5f['webhook'], _0x83b9eb['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x83b9eb['succesDEVMSG']), await _0x3e202b(0xc8);
                    try {
                        await _0x19ed1d(_0x18008b, _0x83b9eb['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x47e68e[_0xf392c8]['Email'] == '' || _0x47e68e[_0xf392c8]['Url'] == '' || _0x47e68e[_0xf392c8]['FirstName'] == '' || _0x47e68e[_0xf392c8]['LastName'] == '') {
                        console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3b7f5f['useRandomProxy'] = ![])
                        var _0xa5c8f = _0x6147cd[_0xf392c8]['split'](':');
                    else
                        var _0x3e476a = Math['round'](Math['random']() * (_0x6147cd['length'] - 0x1)), _0xa5c8f = _0x6147cd[_0x3e476a]['split'](':');
                    const _0xb5f9f6 = await _0x324aa5['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0xa5c8f[0x0] + ':' + _0xa5c8f[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x4218ce = await _0xb5f9f6['newPage']();
                        await _0x4218ce['authenticate']({
                            'username': '' + _0xa5c8f[0x2],
                            'password': '' + _0xa5c8f[0x3]
                        }), console['log'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4218ce['setRequestInterception'](!![]), _0x4218ce['on']('request', _0xf5056a => {
                            _0xf5056a['resourceType']() === 'image' || _0xf5056a['resourceType']() === 'font' || _0xf5056a['resourceType']() === 'media' ? _0xf5056a['abort']() : _0xf5056a['continue']();
                        });
                        try {
                            await _0x4218ce['goto']('' + _0x47e68e[_0xf392c8]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x4218ce['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4218ce['type']('#comp_firstname', '' + _0x47e68e[_0xf392c8]['FirstName']), await _0x4218ce['waitForSelector']('#comp_lastname'), await _0x4218ce['type']('#comp_lastname', '' + _0x47e68e[_0xf392c8]['LastName']), await _0x4218ce['waitForSelector']('#comp_email'), await _0x4218ce['type']('#comp_email', '' + _0x47e68e[_0xf392c8]['Email']), await _0x4218ce['waitForSelector']('#comp_paypalemail'), await _0x4218ce['type']('#comp_paypalemail', '' + _0x47e68e[_0xf392c8]['Email']), await _0x4218ce['waitForSelector']('#comp_mobile_end'), await _0x4218ce['type']('#comp_mobile_end', '' + _0x47e68e[_0xf392c8]['Phone']), await _0x4218ce['waitForSelector']('#comp_dob'), await _0x4218ce['type']('#comp_dob', '08/09/1992'), console['log'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x47e68e[_0xf392c8]['Size'] == 'RANDOM') {
                            const _0x1d76f8 = await _0x4218ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x873c8b => {
                                return _0x873c8b['map'](_0x36ea4f => _0x36ea4f['value']);
                            });
                            var _0x55d2b3 = Math['round'](Math['random']() * (_0x1d76f8['length'] - 0x2));
                            await _0x4218ce['select']('#shoesize', _0x1d76f8[_0x55d2b3 + 0x1]), await _0x3e202b(0x3e8);
                        } else {
                            const _0x3ca8e6 = await _0x4218ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xa1693c => {
                                return _0xa1693c['map'](_0x22cba0 => _0x22cba0['innerText']);
                            }), _0x384ade = await _0x4218ce['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5ed2e1 => {
                                return _0x5ed2e1['map'](_0x252c07 => _0x252c07['value']);
                            });
                            var _0x1af04b = _0x47e68e[_0xf392c8]['Size'];
                            for (var _0x1763a1 = 0x1; _0x1763a1 < _0x384ade['length']; _0x1763a1++) {
                                var _0x5ca8c2 = _0x3ca8e6[_0x1763a1]['split']('\x20')[0x0];
                                if (_0x5ca8c2 == _0x1af04b) {
                                    await _0x4218ce['select']('#shoesize', _0x384ade[_0x1763a1]);
                                    break;
                                } else {
                                    if (_0x1763a1 + 0x1 == _0x384ade['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4218ce['waitForSelector']('#comp_address1'), await _0x4218ce['type']('#comp_address1', _0x47e68e[_0xf392c8]['Address1'] + '\x20' + _0x47e68e[_0xf392c8]['HouseNumber']), await _0x4218ce['waitForSelector']('#comp_address2'), await _0x4218ce['type']('#comp_address2', '' + _0x47e68e[_0xf392c8]['Address2']), await _0x4218ce['waitForSelector']('#comp_address2'), await _0x4218ce['type']('#comp_address3', '' + _0x47e68e[_0xf392c8]['City']), await _0x4218ce['waitForSelector']('#comp_postcode'), await _0x4218ce['type']('#comp_postcode', '' + _0x47e68e[_0xf392c8]['Zip']), console['log'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3e202b(0x4b0), await _0x4218ce['click']('label#emailhold'), await _0x3e202b(0x5dc), await _0x4218ce['click']('#preauth_tandc_email\x20>\x20label'), await _0x3e202b(0x5dc), await _0x4218ce['click']('#submit');
                        try {
                            await _0x4218ce['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20' + _0x58e018['blue']('Awaiting\x20Paypal\x20Payment')), _0xb5f9f6['on']('targetcreated', async _0x207e22 => {
                            if (_0x207e22['type']() === 'page') {
                                const _0x2590d1 = await _0x207e22['page']();
                                async function _0x5311b9() {
                                    try {
                                        await _0x4218ce['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x8b216d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5b61ca() {
                                    try {
                                        await _0x4218ce['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4f05c1 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5b61ca(), _0x5311b9(), await _0x3e202b(0x493e0);
                            }
                        });
                        async function _0x20d8e0() {
                            for (let _0x314fbf = 0x0; _0x314fbf < 0x12c; _0x314fbf++) {
                                if (_0x4f05c1 == !![]) {
                                    _0xaa1735 = 'no', _0x4fe9b8(_0x47e68e[_0xf392c8], _0x375dae), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                        try {
                                            await _0x19ed1d(_0x3b7f5f['webhook'], _0x83b9eb['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x83b9eb['succesDEVMSG']), await _0x3e202b(0xc8);
                                    try {
                                        await _0x19ed1d(_0x18008b, _0x83b9eb['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x8b216d)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x3e202b(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x3e202b(0xbb8), await _0x4218ce['click']('.zoid-outlet'), await _0x3e202b(0x7d0), await _0x20d8e0();
                    } catch (_0x3e270d) {
                        console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20' + _0x3e270d)), _0x56a1a3 = '' + _0x3e270d;
                        var _0x33e67a = await _0x3ec8c2(_0x47e68e[_0xf392c8], _0x375dae, 'dev', !![], _0x56a1a3);
                        _0x83b9eb['errorDEV'] = { 'embeds': [_0x33e67a] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x83b9eb['errorDEV']), await _0x19ed1d(_0x54e464, _0x83b9eb['errorDEV']);
                    } finally {
                        _0xb5f9f6 && _0xb5f9f6['close']();
                        if (_0xaa1735 == 'yes' && _0x27cd29 != 0x5 && _0x56a1a3 != 'Size\x20Not\x20Found') {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x375dae['name'] + ']\x20Task\x20' + (_0xf392c8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x27cd29 + '\x20/\x205)')), _0xf392c8 = _0xf392c8 - 0x1, _0x27cd29 = _0x27cd29 + 0x1;
                            continue;
                        }
                        _0xaa1735 == 'yes' && _0x27cd29 >= 0x5 && (_0xd9afb0(afew[_0xf392c8], _0x375dae), _0xaa1735 = 'no', _0x27cd29 = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
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
                'function': async function (_0x367729, _0x2ae405, _0xd5b271) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2b1214 = 0x0; _0x2b1214 < _0x2ae405['length']; _0x2b1214++) {
                        const _0xfca7d3 = 'https://www.kickz.com/login';
                        if (_0x1ac6ae != 'yes')
                            var _0x1ac6ae = '', _0x4d8582 = 0x0;
                        _0x5988ee(_0x367729['name'] + '\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20/\x20' + _0x2ae405['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        try {
                            await _0x36594b(_0x2ae405, _0x2b1214);
                        } catch {
                            _0x1ac6ae = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1ae73a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1dc6d4
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x3b7f5f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x413f08
                                }
                            ]
                        }];
                        const _0x51ad19 = { 'embeds': _0x1ae73a };
                        var _0x160a23 = await _0x3ec8c2(_0x2ae405[_0x2b1214], _0x367729, 'acc', ![]);
                        const _0x9f6947 = { 'succesDEVMSG': { 'embeds': [_0x160a23] } };
                        if (_0x2ae405[_0x2b1214]['Email'] == '' || _0x2ae405[_0x2b1214]['FirstName'] == '' || _0x2ae405[_0x2b1214]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2ae405[_0x2b1214]['Password'] == '' && (_0x2ae405[_0x2b1214]['Password'] = 'JRaffles23!');
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x1296ad = _0xd5b271[_0x2b1214]['split'](':');
                        else
                            var _0x1477eb = Math['round'](Math['random']() * (_0xd5b271['length'] - 0x1)), _0x1296ad = _0xd5b271[_0x1477eb]['split'](':');
                        var _0x5545fc;
                        try {
                            _0x5545fc = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1296ad[0x0] + ':' + _0x1296ad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5545fc = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1296ad[0x0] + ':' + _0x1296ad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xf236f2 = await _0x5545fc['newPage']();
                            await _0xf236f2['authenticate']({
                                'username': '' + _0x1296ad[0x2],
                                'password': '' + _0x1296ad[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf236f2['setRequestInterception'](!![]), _0xf236f2['on']('request', _0xe6f072 => {
                                _0xe6f072['resourceType']() === 'image' || _0xe6f072['resourceType']() === 'font' || _0xe6f072['resourceType']() === 'media' ? _0xe6f072['abort']() : _0xe6f072['continue']();
                            }), await _0xf236f2['goto'](_0xfca7d3), await _0x3e202b(0xbb8), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xf236f2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xf236f2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xf236f2['waitForSelector']('#button-register'), await _0x3e202b(0x7d0), await _0xf236f2['evaluate'](() => {
                                const _0x246b37 = document['querySelector']('#button-register');
                                _0x246b37['click']();
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3e202b(0x1388), await _0xf236f2['waitForSelector']('#customer_salutation'), await _0xf236f2['select']('#customer_salutation', 'mr'), await _0x3e202b(0x7d0), await _0xf236f2['waitForSelector']('#customer_firstname'), await _0xf236f2['type']('#customer_firstname', '' + _0x2ae405[_0x2b1214]['FirstName']), await _0x3e202b(0x352), await _0xf236f2['waitForSelector']('#customer_lastname'), await _0xf236f2['type']('#customer_lastname', '' + _0x2ae405[_0x2b1214]['LastName']), await _0x3e202b(0x352), await _0xf236f2['type']('#email-input', '' + _0x2ae405[_0x2b1214]['Email']), await _0x3e202b(0x352), await _0xf236f2['type']('#email-confirm-input', '' + _0x2ae405[_0x2b1214]['Email']), await _0x3e202b(0x352), await _0xf236f2['type']('#register-password', '' + _0x2ae405[_0x2b1214]['Password']), await _0x3e202b(0x352), await _0xf236f2['type']('#password-confirm', '' + _0x2ae405[_0x2b1214]['Password']), await _0x3e202b(0x352), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xf236f2['click']('#consent'), await _0x3e202b(0x1f4);
                            const _0x22208e = await _0xf236f2['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x22208e) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0xf236f2['click']('#buttonRegister');
                            try {
                                await _0xf236f2['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2ae405[_0x2b1214]['Email']), await _0x3e202b(0x4b0);
                            async function _0x3bec0b() {
                                var _0x5bb0d2, _0x5e939c = ![];
                                for (var _0x5b6ba8 = 0x0; _0x5b6ba8 < 0x18; _0x5b6ba8++) {
                                    async function _0x2c600a() {
                                        var _0x4f78fd = new _0x35c1c1({
                                            'user': _0x3b7f5f['masterMail'],
                                            'password': _0x3b7f5f['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x33a391(_0x2df706) {
                                            _0x4f78fd['openBox']('INBOX', ![], _0x2df706);
                                        }
                                        _0x4f78fd['once']('ready', function () {
                                            console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x33a391(function (_0x55ede6, _0x716a1) {
                                                console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x55ede6)
                                                    throw _0x55ede6;
                                                _0x4f78fd['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x3464c9, _0x187042) {
                                                    if (!_0x187042 || !_0x187042['length'])
                                                        console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4f78fd['end']();
                                                    else {
                                                        var _0x5eb3af = _0x4f78fd['seq']['fetch'](_0x187042, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5eb3af['on']('message', function (_0x5ea8a4, _0x426141) {
                                                            var _0x4ca5f2 = '(#' + _0x426141 + ')\x20';
                                                            _0x5ea8a4['on']('body', function (_0x3af2c6, _0x3f8f7d) {
                                                                _0x2b928(_0x3af2c6, (_0x433c23, _0x83dee3) => {
                                                                    if (_0x83dee3['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x300aa1 = _0x83dee3['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x408479 = _0x300aa1[0x1]['split']('<')[0x0];
                                                                        _0x5bb0d2 = _0x408479;
                                                                    }
                                                                });
                                                            }), _0x5ea8a4['once']('end', function () {
                                                            });
                                                        }), _0x5eb3af['once']('error', function (_0xaa50e2) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5eb3af['once']('end', function () {
                                                            _0x4f78fd['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4f78fd['once']('error', function (_0x53977b) {
                                            console['log'](_0x58e018['red'](_0x53977b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5e939c = !![];
                                        }), _0x4f78fd['once']('end', async function () {
                                        }), _0x4f78fd['connect']();
                                    }
                                    _0x2c600a(), await _0x3e202b(0x1388);
                                    if (_0x5bb0d2)
                                        return _0x5bb0d2;
                                    if (_0x5e939c)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5b6ba8 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3bec0b(), _0x3e202b(0x320), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Verifying..'), await _0xf236f2['type']('#verificationCode', code), await _0x3e202b(0x1f4), await _0xf236f2['click']('#buttonVerify'), await _0x3e202b(0x190), await _0xf236f2['click']('#buttonVerify'), await _0x3e202b(0x3e8);
                            try {
                                await _0xf236f2['waitForSelector']('div.b-user_greeting'), _0x1ac6ae = 'no', console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Account\x20' + _0x2ae405[_0x2b1214]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x2e02b8['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2ae405[_0x2b1214]['Email'] + ',' + _0x2ae405[_0x2b1214]['Password'] + ','), console['log'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Account\x20' + _0x2ae405[_0x2b1214]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x9f6947['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19ed1d(_0x5bc60c, _0x9f6947['succesDEVMSG']);
                            } catch {
                                _0x1ac6ae = 'no', console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x2ca3f3) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20' + _0x2ca3f3)), _0x1ae73a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1ae73a[0x0]['description'] = '' + _0x2ca3f3, await _0x19ed1d(_0x54e464, _0x51ad19), _0x1ac6ae = 'yes';
                        } finally {
                            _0x5545fc && _0x5545fc['close']();
                            if (_0x1ac6ae == 'yes' && _0x4d8582 != 0x5) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x367729['name'] + ']\x20Task\x20' + (_0x2b1214 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4d8582 + '\x20/\x205)')), _0x2b1214 = _0x2b1214 - 0x1, _0x4d8582 = _0x4d8582 + 0x1;
                                continue;
                            }
                            _0x1ac6ae == 'yes' && _0x4d8582 >= 0x5 && (_0xd9afb0(_0x2ae405[_0x2b1214], _0x367729), _0x1ac6ae = 'no', _0x4d8582 = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x118d54, _0x3d8005, _0x39797f) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a1e4c = 0x0; _0x4a1e4c < _0x3d8005['length']; _0x4a1e4c++) {
                        var _0x3df6d7;
                        if (_0x4a06cd != 'yes')
                            var _0x4a06cd = '', _0x2d2020 = 0x0;
                        _0x5988ee(_0x118d54['name'] + '\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20/\x20' + _0x3d8005['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        var _0x4bbbbb = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1dc6d4
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x3d8005[_0x4a1e4c]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x3d8005[_0x4a1e4c]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x3b7f5f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x413f08
                                }
                            ]
                        }], _0x79925b = await _0x3ec8c2(_0x3d8005[_0x4a1e4c], _0x118d54, 'dev', ![]), _0x44ef78 = await _0x3ec8c2(_0x3d8005[_0x4a1e4c], _0x118d54, 'pub', ![]);
                        const _0xa93f9b = {
                            'succesDEVMSG': { 'embeds': [_0x79925b] },
                            'succesPUBMSG': { 'embeds': [_0x44ef78] }
                        };
                        try {
                            await _0x36594b(_0x3d8005, _0x4a1e4c);
                        } catch {
                            _0x4a06cd = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3d8005[_0x4a1e4c]['Email'] == '' || _0x3d8005[_0x4a1e4c]['Password'] == '' || _0x3d8005[_0x4a1e4c]['FirstName'] == '' || _0x3d8005[_0x4a1e4c]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x5d56cf = _0x39797f[_0x4a1e4c]['split'](':');
                        else
                            var _0x13da9f = Math['round'](Math['random']() * (_0x39797f['length'] - 0x1)), _0x5d56cf = _0x39797f[_0x13da9f]['split'](':');
                        var _0x34c925;
                        try {
                            _0x34c925 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d56cf[0x0] + ':' + _0x5d56cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x34c925 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d56cf[0x0] + ':' + _0x5d56cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2007bb = await _0x34c925['newPage']();
                            await _0x2007bb['authenticate']({
                                'username': '' + _0x5d56cf[0x2],
                                'password': '' + _0x5d56cf[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2007bb['setRequestInterception'](!![]), _0x2007bb['on']('request', _0x2dc56b => {
                                _0x2dc56b['resourceType']() === 'image' || _0x2dc56b['resourceType']() === 'font' || _0x2dc56b['resourceType']() === 'media' ? _0x2dc56b['abort']() : _0x2dc56b['continue']();
                            }), await _0x2007bb['goto']('' + _0x3d8005[_0x4a1e4c]['Url'], { 'waitUntil': 'networkidle2' }), await _0x3e202b(0x12c);
                            try {
                                await _0x2007bb['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x2007bb['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Logging\x20in'), await _0x2007bb['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2007bb['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2007bb['waitForSelector']('#username'), await _0x2007bb['type']('#username', _0x3d8005[_0x4a1e4c]['Email']), await _0x2007bb['waitForSelector']('#password'), await _0x2007bb['type']('#password', _0x3d8005[_0x4a1e4c]['Password']), await _0x3e202b(0x190), await _0x2007bb['click']('#buttonSubmit'), await _0x2007bb['waitForSelector']('div.b-user_greeting'), console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Getting\x20Product'), await _0x3e202b(0x1f4), await _0x2007bb['goto']('' + _0x3d8005[_0x4a1e4c]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3d8005[_0x4a1e4c]['Size']);
                            let _0x5b62f0 = _0x3d8005[_0x4a1e4c]['Size']['replace']('.5', '\x201/2');
                            await _0x2007bb['click']('button[title=\x22' + _0x5b62f0 + '\x22]'), await _0x3e202b(0x1f4);
                            try {
                                await _0x2007bb['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x3e202b(0x12c), console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2007bb['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_firstName', _0x3d8005[_0x4a1e4c]['FirstName']), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_lastName', _0x3d8005[_0x4a1e4c]['LastName']), await _0x3e202b(0x12c), await _0x2007bb['select']('#dwfrm_raffle_addressFields_country', _0x3d8005[_0x4a1e4c]['Country']), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_city', _0x3d8005[_0x4a1e4c]['City']), await _0x3e202b(0x12c);
                            _0x3d8005[_0x4a1e4c]['Postcode'] == undefined && (_0x3d8005[_0x4a1e4c]['Postcode'] = _0x3d8005[_0x4a1e4c]['Zip']);
                            await _0x2007bb['type']('#dwfrm_raffle_addressFields_postalCode', _0x3d8005[_0x4a1e4c]['Postcode']), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_address1', _0x3d8005[_0x4a1e4c]['Address1']), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_address2', _0x3d8005[_0x4a1e4c]['HouseNumber']), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3d8005[_0x4a1e4c]['Address2']), await _0x3e202b(0x12c), await _0x2007bb['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x3e202b(0x12c), await _0x2007bb['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3d8005[_0x4a1e4c]['Follower']), await _0x3e202b(0x1f4), await _0x2007bb['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x3e202b(0x1f4), console['log'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20' + _0x58e018['blue']('Awaiting\x20Paypal\x20Payment')), await _0x2007bb['click']('.b-paypal_button');
                            try {
                                await _0x2007bb['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x4a06cd = 'no', _0x4fe9b8(_0x3d8005[_0x4a1e4c], _0x118d54), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0xa93f9b['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0xa93f9b['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x18008b, _0xa93f9b['succesPUBMSG']);
                            } catch (_0x2d716c) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2d716c)), _0x3df6d7 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2d716c;
                                var _0x1a6b7b = await _0x3ec8c2(_0x3d8005[_0x4a1e4c], _0x118d54, 'dev', !![], _0x3df6d7);
                                _0xa93f9b['errorDEV'] = { 'embeds': [_0x1a6b7b] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0xa93f9b['errorDEV']), await _0x19ed1d(_0x54e464, _0xa93f9b['errorDEV']);
                            }
                        } catch (_0x40b248) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20' + _0x40b248)), _0x3df6d7 = '' + _0x40b248;
                            var _0x1a6b7b = await _0x3ec8c2(_0x3d8005[_0x4a1e4c], _0x118d54, 'dev', !![], _0x3df6d7);
                            _0xa93f9b['errorDEV'] = { 'embeds': [_0x1a6b7b] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0xa93f9b['errorDEV']), await _0x19ed1d(_0x54e464, _0xa93f9b['errorDEV']), _0x4a06cd = 'yes';
                        } finally {
                            _0x34c925 && _0x34c925['close']();
                            if (_0x4a06cd == 'yes' && _0x2d2020 != 0x5) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x118d54['name'] + ']\x20Task\x20' + (_0x4a1e4c + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d2020 + '\x20/\x205)')), _0x4a1e4c = _0x4a1e4c - 0x1, _0x2d2020 = _0x2d2020 + 0x1;
                                continue;
                            }
                            _0x4a06cd == 'yes' && _0x2d2020 >= 0x5 && (_0xd9afb0(_0x3d8005[_0x4a1e4c], _0x118d54), _0x4a06cd = 'no', _0x2d2020 = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['AfewDelay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['AfewDelay']);
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
                },
                'function': async function (_0x872776, _0x533ffa, _0x14df80) {
                    for (var _0x1afb78 = 0x0; _0x1afb78 < _0x533ffa['length']; _0x1afb78++) {
                        try {
                            await _0x36594b(_0x533ffa, _0x1afb78);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x26e627(_0x41c070, _0x5645f6, _0x1c8127, _0x51776a, _0x291615) {
                            var _0x22501e, _0x2e7275 = {}, _0x53e040 = [], _0x4a1591 = {}, _0x283201 = [
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
                            ], _0xc6a8b0 = Math['round'](Math['random']() * (_0x283201['length'] - 0x1));
                            !_0x51776a && (_0x51776a = {});
                            if (_0x5645f6 != 'ver') {
                                _0x5988ee(_0x1c8127['name'] + '\x20Task\x20' + (_0x41c070 + 0x1) + '\x20/\x20' + _0x51776a['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb), await _0x36594b(_0x51776a, _0x41c070), _0x2e7275 = _0x1c8127['data'], _0x2e7275['data']['attributes']['email'] = '' + _0x51776a[_0x41c070]['Email'];
                                if (_0x51776a[_0x41c070]['Size'] == 'RANDOM') {
                                }
                                _0x2e7275['data']['attributes']['properties']['$first_name'] = '' + _0x51776a[_0x41c070]['FirstName'], _0x2e7275['data']['attributes']['properties']['$last_name'] = '' + _0x51776a[_0x41c070]['LastName'], _0x2e7275['data']['attributes']['properties']['$address1'] = _0x51776a[_0x41c070]['Address1'] + '\x20' + _0x51776a[_0x41c070]['Address2'] + '\x20' + _0x51776a[_0x41c070]['HouseNumber'], _0x2e7275['data']['attributes']['properties']['$zip'] = '' + _0x51776a[_0x41c070]['Zip'], _0x2e7275['data']['attributes']['properties']['$city'] = '' + _0x51776a[_0x41c070]['City'], _0x2e7275['data']['attributes']['properties']['$country'] = '' + _0x51776a[_0x41c070]['Country'], _0x51776a[_0x41c070]['Size'] == 'RANDOM' ? _0x2e7275['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x283201[_0xc6a8b0] : _0x2e7275['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x51776a[_0x41c070]['Size'], _0x2e7275['data']['attributes']['properties']['$phone_number'] = '' + _0x51776a[_0x41c070]['Phone'], _0x2e7275['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x51776a[_0x41c070]['Follower'];
                            }
                            if (_0x3b7f5f['useRandomProxy'] = ![])
                                var _0x417ee9 = _0x291615[_0x41c070]['split'](':');
                            else
                                var _0x5dceee = Math['round'](Math['random']() * (_0x291615['length'] - 0x1)), _0x417ee9 = _0x291615[_0x5dceee]['split'](':');
                            var _0x573077 = {
                                'jar': _0x522c94,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1c8127['url'],
                                'headers': _0x1c8127['headers'],
                                'body': JSON['stringify'](_0x2e7275),
                                'proxy': 'http://' + _0x417ee9[0x2] + ':' + _0x417ee9[0x3] + '@' + _0x417ee9[0x0] + ':' + _0x417ee9[0x1]
                            };
                            return _0x5645f6 != 'ver' && (_0x573077['url'] = _0x1c8127['url'], _0x573077['headers'] = _0x1c8127['headers']), _0x5645f6 == 'ver' && (_0x573077['method'] = 'GET'), new Promise(function (_0x36bd72, _0x457f7d) {
                                callback = async (_0xe76827, _0x31fb35, _0x4131b9) => {
                                    if (!_0xe76827 && _0x31fb35['statusCode'] == 0xca || !_0xe76827 && _0x31fb35['statusCode'] == 0xc8) {
                                        if (_0x5645f6 != 'ver') {
                                            var _0x1881bc = await _0x3ec8c2(_0x51776a[_0x41c070], _0x1c8127, 'dev', ![]), _0x5a56b4 = await _0x3ec8c2(_0x51776a[_0x41c070], _0x1c8127, 'pub', ![]);
                                            const _0xed3168 = {
                                                'succesDEVMSG': { 'embeds': [_0x1881bc] },
                                                'succesPUBMSG': { 'embeds': [_0x5a56b4] }
                                            };
                                            if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                                try {
                                                    await _0x19ed1d(_0x3b7f5f['webhook'], _0xed3168['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0xed3168['succesDEVMSG']), await _0x3e202b(0xc8);
                                            try {
                                                await _0x19ed1d(_0x18008b, _0xed3168['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4fe9b8(_0x51776a[_0x41c070], _0x1c8127);
                                        }
                                        _0x36bd72(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x1c8127['name'] + ']\x20Task\x20' + (_0x41c070 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5645f6 != 'ver') {
                                            var _0xfcb62e = '' + _0xe76827, _0x8ee238 = await _0x3ec8c2(_0x51776a[_0x41c070], _0x1c8127, 'dev', !![], _0xfcb62e), _0x229447 = {};
                                            _0x229447['errorDEV'] = { 'embeds': [_0x8ee238] }, _0xd9afb0(_0x51776a[_0x41c070], _0x1c8127), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x229447['errorDEV']), await _0x19ed1d(_0x54e464, _0x229447['errorDEV']);
                                        }
                                        _0x457f7d(console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x1c8127['name'] + ']\x20Task\x20' + (_0x41c070 + 0x1) + ':\x20' + _0xe76827)));
                                    }
                                };
                                try {
                                    _0x5645f6 != 'ver' && console['log'](_0x1f9e06() + '\x20[' + _0x1c8127['name'] + ']\x20Task\x20' + (_0x41c070 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e7275['data']['attributes']['email']), _0x217687(_0x573077, callback);
                                } catch (_0x19db51) {
                                    console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x41c070 + 0x1) + ':\x20' + _0x19db51);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x26e627(_0x1afb78, 'nor', _0x872776, _0x533ffa, _0x14df80), console['log'](_0x1f9e06() + '\x20[' + _0x872776['name'] + ']\x20Sleeping\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        } catch (_0x41d706) {
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
                'function': async function (_0x4e8b7a, _0x16de01, _0x574de2) {
                    var _0x3a7e7d = [], _0x212145 = ![];
                    async function _0x4c84bc() {
                        var _0x235c09 = new _0x35c1c1({
                            'user': _0x3b7f5f['masterMail'],
                            'password': _0x3b7f5f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4e4bb6(_0x35b97d) {
                            _0x235c09['openBox']('INBOX', ![], _0x35b97d);
                        }
                        _0x235c09['once']('ready', function () {
                            _0x4e4bb6(function (_0x536d43, _0x309864) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x536d43)
                                    throw _0x536d43;
                                _0x235c09['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x501d20, _0x1d69ca) {
                                    if (!_0x1d69ca || !_0x1d69ca['length'])
                                        console['log'](_0x1f9e06() + '\x20[' + _0x4e8b7a['name'] + ']\x20No\x20mails\x20found'), _0x235c09['end']();
                                    else {
                                        var _0x25e89b = _0x235c09['seq']['fetch'](_0x1d69ca, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x25e89b['on']('message', function (_0x12e162, _0x68f0a0) {
                                            var _0x4b5730 = '(#' + _0x68f0a0 + ')\x20';
                                            _0x12e162['on']('body', function (_0x31e028, _0x48772f) {
                                                _0x2b928(_0x31e028, (_0x19a271, _0x34cb08) => {
                                                    var _0x332163 = _0x34cb08['text']['split']('(')[0x1], _0x4d5b3e = _0x332163['split'](')')[0x0];
                                                    _0x3a7e7d['push'](_0x4d5b3e);
                                                });
                                            }), _0x12e162['once']('end', function () {
                                            });
                                        }), _0x25e89b['once']('error', function (_0x55227d) {
                                            console['log']('Fetch\x20error:\x20' + _0x55227d), _0x212145 = !![];
                                        }), _0x25e89b['once']('end', function () {
                                            _0x235c09['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x235c09['once']('error', function (_0x3e14bf) {
                            console['log'](_0x58e018['red'](_0x3e14bf['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x212145 = !![];
                        }), _0x235c09['once']('end', async function () {
                            _0x212145 = !![];
                        }), _0x235c09['connect']();
                    }
                    async function _0x1999f8(_0x54c9cb, _0x142266, _0x5b5ab7) {
                        for (var _0x2d3649 = 0x0; _0x2d3649 < _0x142266['length']; _0x2d3649++) {
                            async function _0x4c536b(_0x8faac0, _0x348cff, _0x4929b7, _0xf262ff, _0x572c98) {
                                var _0x1cece4, _0x29b4c5 = {}, _0xc390e5 = [], _0x30e98b = {}, _0x392af8 = [
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
                                ], _0xba4e9d = Math['round'](Math['random']() * (_0x392af8['length'] - 0x1));
                                _0xf262ff[_0x8faac0]['Size'] == 'RANDOM' && (_0xf262ff[_0x8faac0]['Size'] = _0x392af8[_0xba4e9d]);
                                !_0xf262ff && (_0xf262ff = {});
                                if (_0x3b7f5f['useRandomProxy'] = ![])
                                    var _0x5b7f3d = _0x572c98[_0x8faac0]['split'](':');
                                else
                                    var _0x61e0f8 = Math['round'](Math['random']() * (_0x572c98['length'] - 0x1)), _0x5b7f3d = _0x572c98[_0x61e0f8]['split'](':');
                                var _0x3486ca = {
                                    'jar': _0x522c94,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4929b7['url'],
                                    'headers': _0x4929b7['headers'],
                                    'body': JSON['stringify'](_0x29b4c5),
                                    'proxy': 'http://' + _0x5b7f3d[0x2] + ':' + _0x5b7f3d[0x3] + '@' + _0x5b7f3d[0x0] + ':' + _0x5b7f3d[0x1]
                                };
                                return _0x348cff != 'ver' && (_0x3486ca['url'] = _0x4929b7['url'], _0x3486ca['headers'] = _0x4929b7['headers']), _0x348cff == 'ver' && (_0x3486ca['method'] = 'GET', _0x3486ca['url'] = _0xf262ff[_0x8faac0]), new Promise(function (_0x5a5443, _0x4db50e) {
                                    callback = async (_0x28b29b, _0x54862c, _0x48d89e) => {
                                        if (!_0x28b29b && _0x54862c['statusCode'] == 0xca || !_0x28b29b && _0x54862c['statusCode'] == 0xc8) {
                                            if (_0x348cff != 'ver') {
                                                var _0x217061 = await _0x3ec8c2(_0xf262ff[_0x8faac0], _0x4929b7, 'dev', ![]), _0x3a3d68 = await _0x3ec8c2(_0xf262ff[_0x8faac0], _0x4929b7, 'pub', ![]);
                                                const _0x21fff0 = {
                                                    'succesDEVMSG': { 'embeds': [_0x217061] },
                                                    'succesPUBMSG': { 'embeds': [_0x3a3d68] }
                                                };
                                                if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                                    try {
                                                        await _0x19ed1d(_0x3b7f5f['webhook'], _0x21fff0['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x21fff0['succesDEVMSG']), await _0x3e202b(0xc8);
                                                try {
                                                    await _0x19ed1d(_0x18008b, _0x21fff0['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4fe9b8(_0xf262ff[_0x8faac0], _0x4929b7);
                                            }
                                            _0x5a5443(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x4929b7['name'] + ']\x20Task\x20' + (_0x8faac0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x348cff != 'ver') {
                                                var _0x2f3986 = '' + _0x28b29b, _0x343878 = await _0x3ec8c2(_0xf262ff[_0x8faac0], _0x4929b7, 'dev', !![], _0x2f3986), _0x55f2b9 = {};
                                                _0x55f2b9['errorDEV'] = { 'embeds': [_0x343878] }, _0xd9afb0(_0xf262ff[_0x8faac0], _0x4929b7), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x55f2b9['errorDEV']), await _0x19ed1d(_0x54e464, _0x55f2b9['errorDEV']);
                                            }
                                            _0x4db50e(console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x4929b7['name'] + ']\x20Task\x20' + (_0x8faac0 + 0x1) + ':\x20' + _0x28b29b)));
                                        }
                                    };
                                    try {
                                        _0x348cff != 'ver' ? console['log'](_0x1f9e06() + '\x20[' + _0x4929b7['name'] + ']\x20Task\x20' + (_0x8faac0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x29b4c5['data']['attributes']['email']) : console['log'](_0x1f9e06() + '\x20[' + _0x4929b7['name'] + ']\x20Task\x20' + (_0x8faac0 + 0x1) + ':\x20Fetching\x20Response'), _0x217687(_0x3486ca, callback);
                                    } catch (_0x14f1e5) {
                                        console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x8faac0 + 0x1) + ':\x20' + _0x14f1e5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4c536b(_0x2d3649, 'ver', _0x54c9cb, _0x142266, _0x5b5ab7), console['log'](_0x1f9e06() + '\x20[' + _0x54c9cb['name'] + ']\x20Sleeping\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                            } catch (_0x19786e) {
                            }
                        }
                    }
                    try {
                        _0x4c84bc();
                        while (!_0x212145) {
                            await _0x3e202b(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3a7e7d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3e202b(0x9c4);
                    }
                    await _0x1999f8(_0x4e8b7a, _0x3a7e7d, _0x574de2);
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
                            'list_id': 'YAQ4Ja',
                            'custom_source': 'DN3707-100',
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
                                '$consent_form_id': 'TntaQ5',
                                '$consent_form_version': 0x81b1d1,
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
                },
                'function': async function (_0x3d9bde, _0x29dbb0, _0x2373e1) {
                    for (var _0x4672cd = 0x0; _0x4672cd < _0x29dbb0['length']; _0x4672cd++) {
                        try {
                            await _0x36594b(_0x29dbb0, _0x4672cd);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x38c67a(_0x370138, _0x9beb1a, _0xca9f6b, _0x29a936, _0x470e7d) {
                            var _0x2c5edc, _0x13b116 = {}, _0x2e5040 = [], _0x294abd = {}, _0x4e813a = [
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
                            ], _0x76202 = Math['round'](Math['random']() * (_0x4e813a['length'] - 0x1));
                            !_0x29a936 && (_0x29a936 = {});
                            if (_0x9beb1a != 'ver') {
                                _0x5988ee(_0xca9f6b['name'] + '\x20Task\x20' + (_0x370138 + 0x1) + '\x20/\x20' + _0x29a936['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb), _0x2e5040 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1dc6d4
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x29a936[_0x370138]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x3b7f5f['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x413f08
                                        }
                                    ]
                                }], _0x294abd = { 'embeds': _0x2e5040 }, _0x13b116 = _0xca9f6b['data'], _0x13b116['data']['attributes']['email'] = '' + _0x29a936[_0x370138]['Email'];
                                if (_0x29a936[_0x370138]['Size'] == 'RANDOM') {
                                }
                                _0x13b116['data']['attributes']['properties']['$first_name'] = '' + _0x29a936[_0x370138]['FirstName'], _0x13b116['data']['attributes']['properties']['$last_name'] = '' + _0x29a936[_0x370138]['LastName'], _0x13b116['data']['attributes']['properties']['$address1'] = _0x29a936[_0x370138]['Address1'] + '\x20' + _0x29a936[_0x370138]['Address2'] + '\x20' + _0x29a936[_0x370138]['HouseNumber'], _0x13b116['data']['attributes']['properties']['$zip'] = '' + _0x29a936[_0x370138]['Zip'], _0x13b116['data']['attributes']['properties']['$city'] = '' + _0x29a936[_0x370138]['City'], _0x13b116['data']['attributes']['properties']['$country'] = '' + _0x29a936[_0x370138]['Country'], _0x29a936[_0x370138]['Size'] == 'RANDOM' ? _0x13b116['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4e813a[_0x76202] : _0x13b116['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x29a936[_0x370138]['Size'], _0x13b116['data']['attributes']['properties']['$phone_number'] = '' + _0x29a936[_0x370138]['Phone'], _0x13b116['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x29a936[_0x370138]['Follower'];
                            }
                            if (_0x3b7f5f['useRandomProxy'] = ![])
                                var _0x492a3e = _0x470e7d[_0x370138]['split'](':');
                            else
                                var _0x58e4e3 = Math['round'](Math['random']() * (_0x470e7d['length'] - 0x1)), _0x492a3e = _0x470e7d[_0x58e4e3]['split'](':');
                            var _0x53c227 = {
                                'jar': _0x522c94,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0xca9f6b['url'],
                                'headers': _0xca9f6b['headers'],
                                'body': JSON['stringify'](_0x13b116),
                                'proxy': 'http://' + _0x492a3e[0x2] + ':' + _0x492a3e[0x3] + '@' + _0x492a3e[0x0] + ':' + _0x492a3e[0x1]
                            };
                            return _0x9beb1a != 'ver' && (_0x53c227['url'] = _0xca9f6b['url'], _0x53c227['headers'] = _0xca9f6b['headers']), _0x9beb1a == 'ver' && (_0x53c227['method'] = 'GET'), new Promise(function (_0x1b8688, _0x56f2ab) {
                                callback = async (_0x22f1ee, _0x1969d2, _0xaf7604) => {
                                    if (!_0x22f1ee && _0x1969d2['statusCode'] == 0xca || !_0x22f1ee && _0x1969d2['statusCode'] == 0xc8) {
                                        if (_0x9beb1a != 'ver') {
                                            var _0x32e523 = await _0x3ec8c2(_0x29a936[_0x370138], _0xca9f6b, 'dev', ![]), _0x134dc4 = await _0x3ec8c2(_0x29a936[_0x370138], _0xca9f6b, 'pub', ![]);
                                            const _0x2ead15 = {
                                                'succesDEVMSG': { 'embeds': [_0x32e523] },
                                                'succesPUBMSG': { 'embeds': [_0x134dc4] }
                                            };
                                            if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                                try {
                                                    await _0x19ed1d(_0x3b7f5f['webhook'], _0x2ead15['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x2ead15['succesDEVMSG']), await _0x3e202b(0xc8);
                                            try {
                                                await _0x19ed1d(_0x18008b, _0x2ead15['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4fe9b8(_0x29a936[_0x370138], _0xca9f6b);
                                        }
                                        _0x1b8688(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0xca9f6b['name'] + ']\x20Task\x20' + (_0x370138 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x9beb1a != 'ver') {
                                            var _0x33f2aa = '' + _0x22f1ee, _0x42d267 = await _0x3ec8c2(_0x29a936[_0x370138], _0xca9f6b, 'dev', !![], _0x33f2aa), _0x5942d0 = {};
                                            _0x5942d0['errorDEV'] = { 'embeds': [_0x42d267] }, _0xd9afb0(_0x29a936[_0x370138], _0xca9f6b), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x5942d0['errorDEV']), await _0x19ed1d(_0x54e464, _0x5942d0['errorDEV']);
                                        }
                                        _0x56f2ab(console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0xca9f6b['name'] + ']\x20Task\x20' + (_0x370138 + 0x1) + ':\x20' + _0x22f1ee)));
                                    }
                                };
                                try {
                                    _0x9beb1a != 'ver' && console['log'](_0x1f9e06() + '\x20[' + _0xca9f6b['name'] + ']\x20Task\x20' + (_0x370138 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x13b116['data']['attributes']['email']), _0x217687(_0x53c227, callback);
                                } catch (_0x1700f8) {
                                    console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x370138 + 0x1) + ':\x20' + _0x1700f8);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x38c67a(_0x4672cd, 'nor', _0x3d9bde, _0x29dbb0, _0x2373e1), console['log'](_0x1f9e06() + '\x20[' + _0x3d9bde['name'] + ']\x20Sleeping\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        } catch (_0x16b3e5) {
                        }
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
                'function': async function (_0x18b0ed, _0x667619, _0x125f7c) {
                    var _0x667619 = [], _0x3a73ad = ![];
                    async function _0x256f9a() {
                        var _0x568f4e = new _0x35c1c1({
                            'user': _0x3b7f5f['masterMail'],
                            'password': _0x3b7f5f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x25764a(_0x7a7cd4) {
                            _0x568f4e['openBox']('INBOX', ![], _0x7a7cd4);
                        }
                        _0x568f4e['once']('ready', function () {
                            _0x25764a(function (_0x1b4bb0, _0x16f395) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1b4bb0)
                                    throw _0x1b4bb0;
                                _0x568f4e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x24b5d0, _0x2a051e) {
                                    if (!_0x2a051e || !_0x2a051e['length'])
                                        console['log'](_0x1f9e06() + '\x20[' + _0x18b0ed['name'] + ']\x20No\x20mails\x20found'), _0x568f4e['end']();
                                    else {
                                        var _0x4e53e2 = _0x568f4e['seq']['fetch'](_0x2a051e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4e53e2['on']('message', function (_0x4fa18f, _0x2c1049) {
                                            var _0x3ec2e7 = '(#' + _0x2c1049 + ')\x20';
                                            _0x4fa18f['on']('body', function (_0x1ed2b9, _0x56aa45) {
                                                _0x2b928(_0x1ed2b9, (_0x31df56, _0x6b9058) => {
                                                    var _0x123b7a = _0x6b9058['text']['split']('(')[0x1], _0x55698f = _0x123b7a['split'](')')[0x0];
                                                    _0x667619['push'](_0x55698f);
                                                });
                                            }), _0x4fa18f['once']('end', function () {
                                            });
                                        }), _0x4e53e2['once']('error', function (_0x1c232a) {
                                            console['log']('Fetch\x20error:\x20' + _0x1c232a), _0x3a73ad = !![];
                                        }), _0x4e53e2['once']('end', function () {
                                            _0x568f4e['end'](), _0x3a73ad = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x568f4e['once']('error', function (_0x4ac319) {
                            console['log'](_0x4ac319), _0x3a73ad = !![];
                        }), _0x568f4e['once']('end', async function () {
                            _0x3a73ad = !![];
                        }), _0x568f4e['connect']();
                    }
                    async function _0x43b74b(_0x21f73c, _0x285397, _0x58f415) {
                        for (var _0x5ca130 = 0x0; _0x5ca130 < _0x285397['length']; _0x5ca130++) {
                            async function _0x6070d9(_0x7e32d3, _0x2ad369, _0x30e581, _0x68d87a, _0x29352b) {
                                var _0x25a347, _0x214b4c = {}, _0x41dd42 = [], _0x5e9503 = {}, _0x421486 = [
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
                                ], _0x9416e7 = Math['round'](Math['random']() * (_0x421486['length'] - 0x1));
                                _0x68d87a[_0x7e32d3]['Size'] == 'RANDOM' && (_0x68d87a[_0x7e32d3]['Size'] = _0x421486[_0x9416e7]);
                                !_0x68d87a && (_0x68d87a = {});
                                if (_0x3b7f5f['useRandomProxy'] = ![])
                                    var _0x4a3a6f = _0x29352b[_0x7e32d3]['split'](':');
                                else
                                    var _0xe9db74 = Math['round'](Math['random']() * (_0x29352b['length'] - 0x1)), _0x4a3a6f = _0x29352b[_0xe9db74]['split'](':');
                                var _0x292ad8 = {
                                    'jar': _0x522c94,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x30e581['url'],
                                    'headers': _0x30e581['headers'],
                                    'body': JSON['stringify'](_0x214b4c),
                                    'proxy': 'http://' + _0x4a3a6f[0x2] + ':' + _0x4a3a6f[0x3] + '@' + _0x4a3a6f[0x0] + ':' + _0x4a3a6f[0x1]
                                };
                                return _0x2ad369 != 'ver' && (_0x292ad8['url'] = _0x30e581['url'], _0x292ad8['headers'] = _0x30e581['headers']), _0x2ad369 == 'ver' && (_0x292ad8['method'] = 'GET', _0x292ad8['url'] = _0x68d87a[_0x7e32d3]), new Promise(function (_0x1bb07d, _0x2b73dd) {
                                    callback = async (_0x481c85, _0x50c57e, _0x10bae1) => {
                                        if (!_0x481c85 && _0x50c57e['statusCode'] == 0xca || !_0x481c85 && _0x50c57e['statusCode'] == 0xc8) {
                                            if (_0x2ad369 != 'ver') {
                                                var _0x354d43 = await _0x3ec8c2(_0x68d87a[_0x7e32d3], _0x30e581, 'dev', ![]), _0x3a2dbf = await _0x3ec8c2(_0x68d87a[_0x7e32d3], _0x30e581, 'pub', ![]);
                                                const _0x5e1098 = {
                                                    'succesDEVMSG': { 'embeds': [_0x354d43] },
                                                    'succesPUBMSG': { 'embeds': [_0x3a2dbf] }
                                                };
                                                if (_0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '')
                                                    try {
                                                        await _0x19ed1d(_0x3b7f5f['webhook'], _0x5e1098['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x5e1098['succesDEVMSG']), await _0x3e202b(0xc8);
                                                try {
                                                    await _0x19ed1d(_0x18008b, _0x5e1098['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4fe9b8(_0x68d87a[_0x7e32d3], _0x30e581);
                                            }
                                            _0x1bb07d(console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x30e581['name'] + ']\x20Task\x20' + (_0x7e32d3 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2ad369 != 'ver') {
                                                var _0x81a3f9 = '' + _0x481c85, _0x2bf505 = await _0x3ec8c2(_0x68d87a[_0x7e32d3], _0x30e581, 'dev', !![], _0x81a3f9), _0x231da6 = {};
                                                _0x231da6['errorDEV'] = { 'embeds': [_0x2bf505] }, _0xd9afb0(_0x68d87a[_0x7e32d3], _0x30e581), _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x231da6['errorDEV']), await _0x19ed1d(_0x54e464, _0x231da6['errorDEV']);
                                            }
                                            _0x2b73dd(console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x30e581['name'] + ']\x20Task\x20' + (_0x7e32d3 + 0x1) + ':\x20' + _0x481c85)));
                                        }
                                    };
                                    try {
                                        _0x2ad369 != 'ver' ? console['log'](_0x1f9e06() + '\x20[' + _0x30e581['name'] + ']\x20Task\x20' + (_0x7e32d3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x214b4c['data']['attributes']['email']) : console['log'](_0x1f9e06() + '\x20[' + _0x30e581['name'] + ']\x20Task\x20' + (_0x7e32d3 + 0x1) + ':\x20Fetching\x20Response'), _0x217687(_0x292ad8, callback);
                                    } catch (_0x2264e0) {
                                        console['log'](_0x1f9e06() + '\x20Task\x20' + (_0x7e32d3 + 0x1) + ':\x20' + _0x2264e0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x6070d9(_0x5ca130, 'ver', _0x21f73c, _0x285397, _0x58f415), console['log'](_0x1f9e06() + '\x20[' + _0x21f73c['name'] + ']\x20Sleeping\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                            } catch (_0x3f92d9) {
                            }
                        }
                    }
                    try {
                        _0x256f9a();
                        while (!_0x3a73ad) {
                            await _0x3e202b(0xfa0);
                        }
                        console['log']('Found\x20' + _0x667619['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x43b74b(_0x18b0ed, _0x667619, _0x125f7c);
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
                'function': async function (_0x31b90f, _0x28e278, _0x24d148) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x39b1ab = 0x0; _0x39b1ab < _0x28e278['length']; _0x39b1ab++) {
                        var _0x523d0b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1dc6d4
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x3b7f5f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x413f08
                                }
                            ]
                        }];
                        const _0x42202e = { 'embeds': _0x523d0b };
                        _0x5988ee(_0x31b90f['name'] + '\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20/\x20' + _0x28e278['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        try {
                            await _0x36594b(_0x28e278, _0x39b1ab);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2c02ab = await _0x3ec8c2(_0x28e278[_0x39b1ab], _0x31b90f, 'acc', ![]);
                        const _0x3090ef = { 'succesDEVMSG': { 'embeds': [_0x2c02ab] } };
                        if (_0x28e278[_0x39b1ab]['Email'] == '' || _0x28e278[_0x39b1ab]['FirstName'] == '' || _0x28e278[_0x39b1ab]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3e202b(0x7d0);
                            continue;
                        }
                        (_0x28e278[_0x39b1ab]['Password'] == '' || _0x28e278[_0x39b1ab] == undefined) && _0x28e278[_0x39b1ab]['Password'] == 'JRaffles23!';
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x57aeb2 = _0x24d148[_0x39b1ab]['split'](':');
                        else
                            var _0x4019ae = Math['round'](Math['random']() * (_0x24d148['length'] - 0x1)), _0x57aeb2 = _0x24d148[_0x4019ae]['split'](':');
                        const _0x30ecfb = await _0x324aa5['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x57aeb2[0x0] + ':' + _0x57aeb2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xaac562 = await _0x30ecfb['newPage']();
                            await _0xaac562['authenticate']({
                                'username': '' + _0x57aeb2[0x2],
                                'password': '' + _0x57aeb2[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x31b90f['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Getting\x20Session'), await _0xaac562['setRequestInterception'](!![]), _0xaac562['on']('request', _0x2d12dc => {
                                _0x2d12dc['resourceType']() === 'image' || _0x2d12dc['resourceType']() === 'font' || _0x2d12dc['resourceType']() === 'media' ? _0x2d12dc['abort']() : _0x2d12dc['continue']();
                            }), await _0xaac562['goto']('https://patta.nl/account/register'), await _0x3e202b(0xbb8), await _0xaac562['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1f9e06() + '\x20[' + _0x31b90f['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Filling\x20information'), await _0xaac562['type']('#RegisterForm-FirstName', '' + _0x28e278[_0x39b1ab]['FirstName']), await _0x3e202b(0x226), await _0xaac562['type']('#RegisterForm-LastName', '' + _0x28e278[_0x39b1ab]['LastName']), await _0x3e202b(0x226), await _0xaac562['type']('#RegisterForm-email', '' + _0x28e278[_0x39b1ab]['Email']), await _0x3e202b(0x226), await _0xaac562['type']('#RegisterForm-password', '' + _0x28e278[_0x39b1ab]['Password']), await _0x3e202b(0x226), console['log'](_0x1f9e06() + '\x20[' + _0x31b90f['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Submitting..'), await _0xaac562['$eval']('#RegisterForm', _0x23ba7c => _0x23ba7c['submit']()), await _0x3e202b(0x1f40);
                            try {
                                await _0xaac562['waitForSelector']('.home-page-grid__collection'), await _0x3e202b(0x1f4), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x31b90f['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Account\x20' + _0x28e278[_0x39b1ab]['Email'] + '\x20Generated!')), _0x2e02b8['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x28e278[_0x39b1ab]['Email'] + ',' + _0x28e278[_0x39b1ab]['Password']), console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x31b90f['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Account\x20' + _0x28e278[_0x39b1ab]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x3090ef['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19ed1d(_0x5bc60c, _0x3090ef['succesDEVMSG']);
                            } catch (_0x57533a) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x57533a));
                            }
                        } catch (_0x45ce5f) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x39b1ab + 0x1) + '\x20:\x20' + _0x45ce5f));
                        } finally {
                            _0x30ecfb && _0x30ecfb['close'](), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x2bc709, _0x6adf41, _0x155ab4) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8af4f3 = 0x0; _0x8af4f3 < _0x6adf41['length']; _0x8af4f3++) {
                        var _0x49def7;
                        if (_0x3f19f3 != 'yes')
                            var _0x3f19f3 = '', _0x64170d = 0x0;
                        _0x5988ee(_0x2bc709['name'] + '\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20/\x20' + _0x6adf41['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        try {
                            await _0x36594b(_0x6adf41, _0x8af4f3);
                        } catch {
                            _0x3f19f3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x6adf41[_0x8af4f3]['Email'] == '' || _0x6adf41[_0x8af4f3]['Password'] == '' || _0x6adf41[_0x8af4f3]['FirstName'] == '' || _0x6adf41[_0x8af4f3]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x39b786 = _0x155ab4[_0x8af4f3]['split'](':');
                        else
                            var _0x3d48f0 = Math['round'](Math['random']() * (_0x155ab4['length'] - 0x1)), _0x39b786 = _0x155ab4[_0x3d48f0]['split'](':');
                        const _0x15b821 = await _0x324aa5['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x39b786[0x0] + ':' + _0x39b786[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1f0795 = await _0x15b821['newPage']();
                            await _0x1f0795['authenticate']({
                                'username': '' + _0x39b786[0x2],
                                'password': '' + _0x39b786[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f0795['setRequestInterception'](!![]), _0x1f0795['on']('request', _0x470ce9 => {
                                _0x470ce9['resourceType']() === 'image' || _0x470ce9['resourceType']() === 'font' || _0x470ce9['resourceType']() === 'media' ? _0x470ce9['abort']() : _0x470ce9['continue']();
                            }), await _0x1f0795['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1f0795['waitForSelector']('#CustomerEmail'), console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1f0795['type']('#CustomerEmail', '' + _0x6adf41[_0x8af4f3]['Email']), await _0x3e202b(0x12c), await _0x1f0795['type']('#CustomerPassword', '' + _0x6adf41[_0x8af4f3]['Password']), await _0x3e202b(0x226), await _0x1f0795['$eval']('#customer_login', _0x4d213e => _0x4d213e['submit']());
                            try {
                                await _0x1f0795['waitForSelector']('#orders'), await _0x3e202b(0x4b0);
                            } catch {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1f0795['goto']('' + _0x6adf41[_0x8af4f3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3e202b(0xbb8), console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1f0795['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1f0795['type']('#email', '' + _0x6adf41[_0x8af4f3]['Email']), await _0x3e202b(0x384), await _0x1f0795['type']('#first_name', '' + _0x6adf41[_0x8af4f3]['FirstName']), await _0x3e202b(0x514), await _0x1f0795['type']('#last_name', '' + _0x6adf41[_0x8af4f3]['LastName']), await _0x3e202b(0x514), await _0x1f0795['type']('#street_address', _0x6adf41[_0x8af4f3]['Address1'] + '\x20' + _0x6adf41[_0x8af4f3]['HouseNumber'] + '\x20' + _0x6adf41[_0x8af4f3]['Address2']), await _0x3e202b(0x2bc);
                            _0x6adf41[_0x8af4f3]['Postcode'] == undefined && (_0x6adf41[_0x8af4f3]['Postcode'] = _0x6adf41[_0x8af4f3]['Zip']);
                            await _0x1f0795['type']('#zip_code', '' + _0x6adf41[_0x8af4f3]['Postcode']), await _0x3e202b(0x320), await _0x1f0795['type']('#city', '' + _0x6adf41[_0x8af4f3]['City']), await _0x3e202b(0x320), await _0x1f0795['type']('#bday', '01/01/1994'), await _0x3e202b(0x320), await _0x1f0795['type']('#instagram', '' + _0x6adf41[_0x8af4f3]['Follower']), await _0x3e202b(0x352);
                            if (_0x6adf41[_0x8af4f3]['Size'] == 'RANDOM') {
                                const _0x695a3 = await _0x1f0795['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x29b32e => {
                                    return _0x29b32e['map'](_0x2ef8eb => _0x2ef8eb['textContent']);
                                });
                                var _0x4cfd3a = Math['round'](Math['random']() * (_0x695a3['length'] - 0x1));
                                console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x695a3[_0x4cfd3a]), await _0x1f0795['click']('label[data-eu-size=\x22' + _0x695a3[_0x4cfd3a] + '\x22]');
                            } else {
                                console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x6adf41[_0x8af4f3]['Size']);
                                try {
                                    await _0x1f0795['click']('label[data-eu-size=\x22' + _0x6adf41[_0x8af4f3]['Size'] + '\x22]');
                                } catch {
                                    await _0x1f0795['click']('label[data-eu-size=\x22' + _0x6adf41[_0x8af4f3]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x3e202b(0xbb8), await _0x1f0795['$$eval']('.raffle__checkbox-label', _0x190f0a => _0x190f0a['forEach'](_0x13d16c => _0x13d16c['click']())), await _0x3e202b(0x7d0), console['log'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1f0795['click']('#raffle__form-submit'), await _0x3e202b(0x1388);
                            try {
                                await _0x1f0795['waitForSelector']('#raffle__confirmation-message-container'), _0x3f19f3 = 'no', _0x4fe9b8(_0x6adf41[_0x8af4f3], _0x2bc709), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x34746f) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x34746f));
                            }
                        } catch (_0x2b412b) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20' + _0x2b412b)), _0x3f19f3 = 'yes';
                        } finally {
                            _0x15b821 && _0x15b821['close']();
                            if (_0x3f19f3 == 'yes' && _0x64170d != 0x5 && _0x49def7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x2bc709['name'] + ']\x20Task\x20' + (_0x8af4f3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x64170d + '\x20/\x205)')), _0x8af4f3 = _0x8af4f3 - 0x1, _0x64170d = _0x64170d + 0x1;
                                continue;
                            }
                            _0x3f19f3 == 'yes' && _0x64170d >= 0x5 && (_0xd9afb0(_0x6adf41[_0x8af4f3], _0x2bc709), _0x3f19f3 = 'no', _0x64170d = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
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
                'function': async function (_0x3f26e4, _0x5cd87e, _0x5ae446) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x42b037 = 0x0; _0x42b037 < _0x5cd87e['length']; _0x42b037++) {
                        if (_0x2ef092 != 'yes')
                            var _0x2ef092 = '', _0x420984 = 0x0;
                        var _0x1c52fd = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1dc6d4
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x3b7f5f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x413f08
                                }
                            ]
                        }];
                        const _0x402849 = { 'embeds': _0x1c52fd };
                        _0x5988ee(_0x3f26e4['name'] + '\x20Task\x20' + (_0x42b037 + 0x1) + '\x20/\x20' + _0x5cd87e['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        try {
                            await _0x36594b(_0x5cd87e, _0x42b037);
                        } catch {
                            _0x2ef092 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3ef69e = await _0x3ec8c2(_0x5cd87e[_0x42b037], _0x3f26e4, 'acc', ![]);
                        const _0x1856cf = { 'succesDEVMSG': { 'embeds': [_0x3ef69e] } };
                        if (_0x5cd87e[_0x42b037]['Email'] == '' || _0x5cd87e[_0x42b037]['FirstName'] == '' || _0x5cd87e[_0x42b037]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3e202b(0x7d0);
                            continue;
                        }
                        (_0x5cd87e[_0x42b037]['Password'] == '' || _0x5cd87e[_0x42b037] == undefined) && _0x5cd87e[_0x42b037]['Password'] == 'JRaffles23!';
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x1f88d2 = _0x5ae446[_0x42b037]['split'](':');
                        else
                            var _0x5412ff = Math['round'](Math['random']() * (_0x5ae446['length'] - 0x1)), _0x1f88d2 = _0x5ae446[_0x5412ff]['split'](':');
                        var _0x3840f8;
                        try {
                            _0x3840f8 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f88d2[0x0] + ':' + _0x1f88d2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3840f8 = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f88d2[0x0] + ':' + _0x1f88d2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x302c47 = await _0x3840f8['newPage']();
                            await _0x302c47['authenticate']({
                                'username': '' + _0x1f88d2[0x2],
                                'password': '' + _0x1f88d2[0x3]
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x302c47['setRequestInterception'](!![]), _0x302c47['on']('request', _0x8aded7 => {
                                _0x8aded7['resourceType']() === 'image' || _0x8aded7['resourceType']() === 'font' || _0x8aded7['resourceType']() === 'media' ? _0x8aded7['abort']() : _0x8aded7['continue']();
                            }), await _0x302c47['goto']('https://drop.slamjam.com/account/register'), await _0x3e202b(0xbb8), await _0x302c47['waitForSelector']('#FirstName'), await _0x302c47['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x302c47['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3e202b(0x4b0), await _0x302c47['type']('#FirstName', '' + _0x5cd87e[_0x42b037]['FirstName']), await _0x3e202b(0x226), await _0x302c47['type']('#LastName', '' + _0x5cd87e[_0x42b037]['LastName']), await _0x3e202b(0x226), await _0x302c47['type']('#Email', '' + _0x5cd87e[_0x42b037]['Email']), await _0x3e202b(0x2ee), await _0x302c47['type']('#ConfirmEmail', '' + _0x5cd87e[_0x42b037]['Email']), await _0x3e202b(0x2ee), await _0x302c47['type']('#CreatePassword', '' + _0x5cd87e[_0x42b037]['Password']), await _0x3e202b(0x2ee), await _0x302c47['type']('#CreateConfirmPassword', '' + _0x5cd87e[_0x42b037]['Password']), await _0x3e202b(0x226), console['log'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Submitting..'), await _0x302c47['$eval']('#create_customer', _0x3c288a => _0x3c288a['submit']()), await _0x3e202b(0x1388), console['log'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20' + _0x58e018['cyan']('Solving\x20Captcha')), await _0x302c47['solveRecaptchas'](), console['log'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x302c47['$eval']('.shopify-challenge__container\x20>\x20form', _0x559e27 => _0x559e27['submit']());
                            try {
                                await _0x302c47['waitForSelector']('.product-card__image'), await _0x3e202b(0x1f4), _0x2ef092 = 'no', console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Account\x20' + _0x5cd87e[_0x42b037]['Email'] + '\x20Generated!')), _0x2e02b8['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5cd87e[_0x42b037]['Email'] + ',' + _0x5cd87e[_0x42b037]['Password']), console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Account\x20' + _0x5cd87e[_0x42b037]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x1856cf['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19ed1d(_0x5bc60c, _0x1856cf['succesDEVMSG']);
                            } catch (_0x3ffe05) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ffe05));
                            }
                        } catch (_0x37ffbb) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20' + _0x37ffbb));
                        } finally {
                            _0x3840f8 && _0x3840f8['close']();
                            if (_0x2ef092 == 'yes' && _0x420984 != 0x5) {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x3f26e4['name'] + ']\x20Task\x20' + (_0x42b037 + 0x1) + '\x20:\x20Retrying\x20(' + _0x420984 + '\x20/\x205)')), _0x42b037 = _0x42b037 - 0x1, _0x420984 = _0x420984 + 0x1;
                                continue;
                            }
                            _0x2ef092 == 'yes' && _0x420984 >= 0x5 && (_0xd9afb0(_0x5cd87e[_0x42b037], _0x3f26e4), _0x2ef092 = 'no', _0x420984 = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x24b8f5, _0x3ee7d8, _0x55b7f7) {
                    _0x324aa5['use'](_0x412339()), _0x324aa5['use'](_0x1a3f3e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x3b7f5f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x35e790 = 0x0; _0x35e790 < _0x3ee7d8['length']; _0x35e790++) {
                        var _0x3c5a5b;
                        if (_0x116557 != 'yes')
                            var _0x116557 = '', _0xc69a7e = 0x0;
                        _0x5988ee(_0x24b8f5['name'] + '\x20Task\x20' + (_0x35e790 + 0x1) + '\x20/\x20' + _0x3ee7d8['length'] + '\x20||\x20File:\x20' + _0x511ad6 + '\x20Proxies:\x20' + _0x12a1cb);
                        try {
                            await _0x36594b(_0x3ee7d8, _0x35e790);
                        } catch {
                            _0x116557 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3ee7d8[_0x35e790]['Email'] == '' || _0x3ee7d8[_0x35e790]['Password'] == '' || _0x3ee7d8[_0x35e790]['FirstName'] == '' || _0x3ee7d8[_0x35e790]['LastName'] == '') {
                            console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x3b7f5f['useRandomProxy'] = ![])
                            var _0x4ad352 = _0x55b7f7[_0x35e790]['split'](':');
                        else
                            var _0x28d08d = Math['round'](Math['random']() * (_0x55b7f7['length'] - 0x1)), _0x4ad352 = _0x55b7f7[_0x28d08d]['split'](':');
                        var _0x4d6b7b;
                        try {
                            _0x4d6b7b = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4ad352[0x0] + ':' + _0x4ad352[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4d6b7b = await _0x324aa5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4ad352[0x0] + ':' + _0x4ad352[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x28c1f5 = await _0x4d6b7b['newPage']();
                            await _0x28c1f5['authenticate']({
                                'username': '' + _0x4ad352[0x2],
                                'password': '' + _0x4ad352[0x3]
                            }), await _0x28c1f5['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28c1f5['setRequestInterception'](!![]), _0x28c1f5['on']('request', _0x1104b5 => {
                                _0x1104b5['resourceType']() === 'image' || _0x1104b5['resourceType']() === 'font' || _0x1104b5['resourceType']() === 'media' ? _0x1104b5['abort']() : _0x1104b5['continue']();
                            }), await _0x28c1f5['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x28c1f5['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x28c1f5['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3e202b(0x258), await _0x28c1f5['waitForSelector']('#CustomerEmail'), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x28c1f5['type']('#CustomerEmail', '' + _0x3ee7d8[_0x35e790]['Email']), await _0x3e202b(0x12c), await _0x28c1f5['type']('#CustomerPassword', '' + _0x3ee7d8[_0x35e790]['Password']), await _0x3e202b(0x226), await _0x28c1f5['$eval']('#customer_login', _0x290560 => _0x290560['submit']()), await _0x3e202b(0x7d0), await _0x28c1f5['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20' + _0x58e018['cyan']('Solving\x20Captcha')), await _0x28c1f5['solveRecaptchas'](), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x28c1f5['$eval']('.shopify-challenge__container\x20>\x20form', _0x4e0869 => _0x4e0869['submit']());
                            try {
                                await _0x28c1f5['waitForSelector']('.nav-account'), await _0x3e202b(0x4b0);
                            } catch {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x28c1f5['goto']('' + _0x3ee7d8[_0x35e790]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3e202b(0xbb8), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x28c1f5['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x28c1f5['click']('.product-select-variant-wrapper'), await _0x3e202b(0x320), await _0x28c1f5['click']('li.product-select-variant__value[data-size=\x22' + _0x3ee7d8[_0x35e790]['Size'] + '\x22]'), await _0x3e202b(0x384), await _0x28c1f5['$eval']('#AddToCartForm-product-template-raffle', _0x3516bd => _0x3516bd['submit']()), await _0x28c1f5['waitForSelector']('.cart-order-summary__content'), await _0x3e202b(0x514), await _0x28c1f5['goto']('https://drop.slamjam.com/checkout'), await _0x3e202b(0x514), await _0x28c1f5['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x28c1f5['select']('#checkout_shipping_address_country', '' + _0x3ee7d8[_0x35e790]['Country']), await _0x3e202b(0x200), await _0x28c1f5['waitForSelector']('#checkout_shipping_address_first_name'), await _0x28c1f5['type']('#checkout_shipping_address_first_name', '' + _0x3ee7d8[_0x35e790]['FirstName']), await _0x3e202b(0x237), await _0x28c1f5['type']('#checkout_shipping_address_last_name', '' + _0x3ee7d8[_0x35e790]['LastName']), await _0x3e202b(0x1e0), await _0x28c1f5['type']('#checkout_shipping_address_address1', _0x3ee7d8[_0x35e790]['Address1'] + '\x20' + _0x3ee7d8[_0x35e790]['HouseNumber']), await _0x3e202b(0x514), await _0x28c1f5['type']('#checkout_shipping_address_address2', '' + _0x3ee7d8[_0x35e790]['Address2']), await _0x3e202b(0x514);
                            _0x3ee7d8[_0x35e790]['Postcode'] == undefined && (_0x3ee7d8[_0x35e790]['Postcode'] = _0x3ee7d8[_0x35e790]['Zip']);
                            await _0x28c1f5['type']('#checkout_shipping_address_zip', '' + _0x3ee7d8[_0x35e790]['Postcode']), await _0x3e202b(0x2bc), await _0x28c1f5['type']('#checkout_shipping_address_city', '' + _0x3ee7d8[_0x35e790]['City']), await _0x3e202b(0x320), await _0x28c1f5['type']('#checkout_shipping_address_phone', '' + _0x3ee7d8[_0x35e790]['Phone']), await _0x3e202b(0x320), await _0x28c1f5['click']('#continue_button'), await _0x3e202b(0xbb8), await _0x28c1f5['waitForSelector']('.summary-title'), await _0x3e202b(0x320), await _0x28c1f5['click']('#continue_button'), await _0x3e202b(0x320), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x28c1f5['waitForSelector']('#checkout_credit_card_vault'), await _0x3e202b(0x3e8);
                            var _0x4a0332 = await _0x28c1f5['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2544b4 = await _0x4a0332['contentFrame']();
                            await _0x2544b4['click']('#number'), await _0x3e202b(0x3e8), await _0x2544b4['type']('#number', '' + _0x3ee7d8[_0x35e790]['CardNumber'], { 'delay': 0x78 }), _0x4a0332 = await _0x28c1f5['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2544b4 = await _0x4a0332['contentFrame'](), await _0x3e202b(0x1c2), await _0x2544b4['click']('#name'), await _0x3e202b(0x1f4), await _0x2544b4['type']('#name', '' + _0x3ee7d8[_0x35e790]['NameOnCard'], { 'delay': 0x78 }), _0x4a0332 = await _0x28c1f5['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2544b4 = await _0x4a0332['contentFrame'](), await _0x3e202b(0x1c2), await _0x2544b4['click']('#expiry'), await _0x3e202b(0x1f4), await _0x2544b4['type']('#expiry', '' + _0x3ee7d8[_0x35e790]['ExpiryDate'], { 'delay': 0x78 }), _0x4a0332 = await _0x28c1f5['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2544b4 = await _0x4a0332['contentFrame'](), await _0x3e202b(0x1c2), await _0x2544b4['click']('#verification_value'), await _0x3e202b(0x1f4), await _0x2544b4['type']('#verification_value', '' + _0x3ee7d8[_0x35e790]['CVV'], { 'delay': 0x78 }), await _0x28c1f5['$eval']('#accepts-flag-raffle', _0x17faee => _0x17faee['click']()), await _0x3e202b(0x7d0), console['log'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x28c1f5['$eval']('#continue_button', _0x1c26d6 => _0x1c26d6['click']()), await _0x3e202b(0x1b58), await _0x28c1f5['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x28c1f5['$eval']('.edit_checkout.animate-floating-labels', _0x94b9df => _0x94b9df['submit']()), await _0x3e202b(0x7d0);
                            try {
                                await _0x28c1f5['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x116557 = 'no', _0x4fe9b8(_0x3ee7d8[_0x35e790], _0x24b8f5), console['log'](_0x58e018['green'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x12be9f) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x12be9f['message']);
                            }
                            var _0x46261a = await _0x3ec8c2(_0x3ee7d8[_0x35e790], _0x24b8f5, 'dev', ![]), _0x15af26 = await _0x3ec8c2(_0x3ee7d8[_0x35e790], _0x24b8f5, 'pub', ![]);
                            const _0x55d744 = {
                                'succesDEVMSG': { 'embeds': [_0x46261a] },
                                'succesPUBMSG': { 'embeds': [_0x15af26] }
                            };
                            try {
                                _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], _0x55d744['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x46d75e, _0x55d744['succesDEVMSG']), await _0x3e202b(0xc8), await _0x19ed1d(_0x18008b, _0x55d744['succesPUBMSG']);
                            } catch (_0x26c834) {
                                console['log'](_0x58e018['yellow'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x26c834));
                            }
                        } catch (_0x31be9a) {
                            console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x55651c[taskModule]['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20' + _0x31be9a)), _0x3c5a5b = '' + _0x31be9a;
                            var _0x1e3434 = await _0x3ec8c2(kickz[_0x35e790], _0x24b8f5, 'dev', !![], _0x3c5a5b);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1e3434] }, _0x3b7f5f['webhook'] != undefined && _0x3b7f5f['webhook'] != '' && await _0x19ed1d(_0x3b7f5f['webhook'], EMBEDS['errorDEV']), await _0x19ed1d(_0x54e464, EMBEDS['errorDEV']), _0x116557 = 'yes';
                        } finally {
                            _0x4d6b7b && _0x4d6b7b['close']();
                            if (_0x116557 == 'yes' && _0xc69a7e != 0x5 && _0x3c5a5b != 'Size\x20Not\x20Found') {
                                console['log'](_0x58e018['red'](_0x1f9e06() + '\x20[' + _0x24b8f5['name'] + ']\x20Task\x20' + (_0x35e790 + 0x1) + '\x20:\x20Retrying\x20(' + _0xc69a7e + '\x20/\x205)')), _0x35e790 = _0x35e790 - 0x1, _0xc69a7e = _0xc69a7e + 0x1;
                                continue;
                            }
                            _0x116557 == 'yes' && _0xc69a7e >= 0x5 && (_0xd9afb0(_0x3ee7d8[_0x35e790], _0x24b8f5), _0x116557 = 'no', _0xc69a7e = 0x0), console['log']('Waiting\x20for\x20' + _0x3b7f5f['delay'] + '\x20ms'), await _0x3e202b(_0x3b7f5f['delay']);
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
                'function': async function (_0x16336d) {
                    var _0x2a9616 = await _0x265fea(), _0x196d53 = _0x2e02b8['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x63c7db = _0x1df262['parse'](_0x196d53, { 'header': !![] })['data'];
                    for (var _0x2a1675 = 0x0; _0x2a1675 < _0x63c7db['length']; _0x2a1675++) {
                        var _0x2fd0c9 = _0x63c7db[_0x2a1675]['Store'], _0x354fb1 = _0x63c7db[_0x2a1675]['Mode'];
                        for (var _0x5080ca of _0x55651c) {
                            const _0x4f8970 = _0x5080ca['name']['includes'](_0x2fd0c9);
                            if (!_0x4f8970)
                                continue;
                            for (mode of _0x5080ca['modules']) {
                                if (mode['name'] == _0x354fb1) {
                                    console['log']('Running\x20' + _0x58e018['cyan'](mode['name'])), await mode['function'](mode, [_0x63c7db[_0x2a1675]], _0x2a9616);
                                    var _0x213b1e = _0x196d53['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x2e02b8['writeFileSync']('../failed-tasks.csv', _0x213b1e);
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
                    var _0x35b28c = await _0x2a5d0b['get']('Answer');
                    if (_0x35b28c['Answer']['toLowerCase']() == 'y') {
                        _0x2e02b8['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x3e202b(0x3e8);
                        return;
                    }
                    if (_0x35b28c['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x3e202b(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x3e202b(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x19e4c0(_0x10c741) {
    var _0x29aa83 = await _0x265fea(), _0x4cae98 = _0x2e02b8['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4060bf = _0x1df262['parse'](_0x4cae98, { 'header': !![] })['data'];
    for (var _0x51ba3c = 0x0; _0x51ba3c < _0x4060bf['length']; _0x51ba3c++) {
        var _0x1b3fce = _0x4060bf[_0x51ba3c]['Store'], _0xb07b5d = _0x4060bf[_0x51ba3c]['Mode'];
        for (var _0x150c38 of _0x55651c) {
            const _0x10c1d1 = _0x150c38['name']['includes'](_0x1b3fce);
            if (_0x10c1d1)
                for (mode of _0x55651c[_0x150c38]['modules']) {
                    const _0x3be4cf = mode['name']['includes'](_0xb07b5d);
                    _0x3be4cf && (_0x10c741 = mode['name'], await mode['function'](_0x10c741, _0x4060bf[_0x51ba3c], _0x29aa83));
                }
        }
    }
}
async function _0x5a7148() {
    await _0x4004c8(), console['clear']();
    if (_0x413f08 != 'devkey') {
        let _0x14f3ff = await _0x5034e5['autoUpdate']();
        if (_0x14f3ff === 'yes')
            return _0x1973bc('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1feed5 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x3e202b(0x2710);
        ;
    }
    await _0x2f4d44(_0x1feed5);
    if (_0x5f0ad4 === ![])
        return console['log']('Closing\x20Browser'), await _0x3e202b(0xbb8);
    else
        try {
            var _0x2c4b98 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1dc6d4
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x413f08
                    }
                ]
            }];
            const _0x35a299 = { 'embeds': _0x2c4b98 };
            var _0x14bc4a = await _0x3ec8c2(null, null, 'open', ![]);
            const _0x54ad80 = { 'openDEVMSG': { 'embeds': [_0x14bc4a] } };
            await _0x19ed1d(_0x1cb3d1, _0x54ad80['openDEVMSG']);
            async function _0x25bf02() {
                _0x5988ee('JRaffles\x20' + _0x413f08), console['clear'](), console['log']('Welcome\x20to\x20' + _0x58e018['cyan']('JRaffles();') + '\x20' + _0x413f08), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x47ce3d = 0x0; _0x47ce3d < _0x55651c['length'] - 0x4; _0x47ce3d++) {
                    if (_0x47ce3d >= 0xa) {
                        console['log']('\x20(' + _0x47ce3d + ')\x20[' + _0x55651c[_0x47ce3d]['name'] + ']');
                        continue;
                    }
                    if (_0x55651c[_0x47ce3d]['name'] === 'Reload\x20Settings' || _0x55651c[_0x47ce3d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x47ce3d + ')\x20\x20[' + _0x55651c[_0x47ce3d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x55651c['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x55651c['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x55651c['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x55651c['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x19a1e();
                if (taskModule > _0x55651c['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x3e202b(0x3e8), _0x25bf02();
                if (_0x55651c[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0xc0bc40 = await _0x265fea(), _0xba1f82 = await _0x251094();
                        _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0xba1f82), await _0x376df7['function'](_0x376df7, _0xba1f82, _0xc0bc40);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0xc0bc40 = await _0x265fea(), _0xba1f82 = await _0x251094();
                            _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0xba1f82), await _0x376df7['function'](_0x376df7, _0xba1f82, _0xc0bc40);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0xc0bc40 = await _0x265fea();
                                await _0x376df7['function'](_0x376df7, _0xc0bc40);
                            }
                        }
                    }
                    return _0x25bf02();
                }
                if (_0x55651c[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                        var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0xc0bc40 = await _0x265fea(), _0x4aff63 = await _0x251094();
                            _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x4aff63), await _0x376df7['function'](_0x376df7, _0x4aff63, _0xc0bc40);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xc0bc40 = await _0x265fea(), _0x4aff63 = await _0x251094();
                                _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x4aff63), await _0x376df7['function'](_0x376df7, _0x4aff63, _0xc0bc40);
                            }
                        }
                    } catch (_0x7c4101) {
                        console['log'](_0x7c4101), await _0x3e202b(0xfa0);
                    }
                    return _0x25bf02();
                }
                if (_0x55651c[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0xc0bc40 = await _0x265fea();
                        return await _0x376df7['function'](_0x376df7, _0xc0bc40), _0x25bf02();
                    }
                    var _0xc0bc40 = await _0x265fea(), _0x6c0a1b = await _0x251094();
                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x6c0a1b), await _0x376df7['function'](_0x376df7, _0x6c0a1b, _0xc0bc40), _0x25bf02();
                }
                if (_0x55651c[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xc0bc40 = await _0x265fea(), _0x6c0a1b = await _0x251094();
                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x6c0a1b), await _0x376df7['function'](_0x376df7, _0x6c0a1b, _0xc0bc40), _0x25bf02();
                }
                if (_0x55651c[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xc0bc40 = await _0x265fea(), _0x6c0a1b = await _0x251094();
                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x6c0a1b), await _0x376df7['function'](_0x376df7, _0x6c0a1b, _0xc0bc40), _0x25bf02();
                } else {
                    if (_0x55651c[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                        var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0xc0bc40 = await _0x265fea(), _0x17a4ba = await _0x251094();
                            return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x17a4ba), await _0x376df7['function'](_0x376df7, _0x17a4ba, _0xc0bc40), _0x25bf02();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0xc0bc40 = await _0x265fea();
                                return await _0x376df7['function'](_0x376df7, null, _0xc0bc40), _0x25bf02();
                            }
                        }
                        ;
                    } else {
                        if (_0x55651c[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                            var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction], _0xc0bc40 = await _0x265fea(), _0x270815 = await _0x251094();
                            return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x270815), await _0x376df7['function'](_0x376df7, _0x270815, _0xc0bc40), await _0x3e202b(0x1388), _0x25bf02();
                        } else {
                            if (_0x55651c[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xc0bc40 = await _0x265fea(), _0x17a4ba = await _0x251094();
                                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x17a4ba), await _0x376df7['function'](_0x376df7, _0x17a4ba, _0xc0bc40), _0x25bf02();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0xc0bc40 = await _0x265fea();
                                        return await _0x376df7['function'](_0x376df7, null, _0xc0bc40), _0x25bf02();
                                    }
                                }
                                ;
                            } else {
                                if (_0x55651c[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x53d86b('https://bouncewear.com/nl/account/register', _0x376df7);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x55651c[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                        var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0xc0bc40 = await _0x265fea(), _0x5ea615 = await _0x251094();
                                            return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x5ea615), await _0x376df7['function'](_0x376df7, _0x5ea615, _0xc0bc40), _0x25bf02();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0xc0bc40 = await _0x265fea(), _0x5ea615 = await _0x251094();
                                                return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x5ea615), await _0x376df7['function'](_0x376df7, _0x5ea615, _0xc0bc40), _0x25bf02();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x55651c[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                            var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0xc0bc40 = await _0x265fea(), _0x3e872c = await _0x251094();
                                                return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x3e872c), await _0x376df7['function'](_0x376df7, _0x3e872c, _0xc0bc40), _0x25bf02();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0xc0bc40 = await _0x265fea(), _0x3e872c = await _0x251094();
                                                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x3e872c), await _0x376df7['function'](_0x376df7, _0x3e872c, _0xc0bc40), _0x25bf02();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x55651c[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                                var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0xc0bc40 = await _0x265fea(), _0x1dd1ab = await _0x251094();
                                                    return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x1dd1ab), await _0x376df7['function'](_0x376df7, _0x1dd1ab, _0xc0bc40), _0x25bf02();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0xc0bc40 = await _0x265fea(), _0x1dd1ab = await _0x251094();
                                                        return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x1dd1ab), await _0x376df7['function'](_0x376df7, _0x1dd1ab, _0xc0bc40), _0x25bf02();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x55651c[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                                    var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0xc0bc40 = await _0x265fea(), _0x1bab35 = await _0x251094();
                                                        return _0x3b7f5f['shuffleTasks'] && await _0x42c230(_0x1bab35), await _0x376df7['function'](_0x376df7, _0x1bab35, _0xc0bc40), _0x25bf02();
                                                    }
                                                } else {
                                                    if (_0x55651c[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x3e202b(0x3e8), _0x25bf02();
                                                    else {
                                                        if (_0x55651c[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3e6da3 = _0x55651c[taskModule]['name'], _0xc0bc40 = await _0x265fea();
                                                            return await _0x17343d(_0x3e6da3, _0xc0bc40), _0x25bf02();
                                                        } else {
                                                            if (_0x55651c[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x57ade6(_0x55651c[taskModule]['modules']);
                                                                var _0x376df7 = _0x55651c[taskModule]['modules'][taskFunction];
                                                                return await _0x376df7['function'](_0x376df7), _0x25bf02();
                                                            } else {
                                                                if (_0x55651c[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x5e9350 = 0x0;
                                                                    for (const _0x597b9d in _0x3b7f5f) {
                                                                        console['log']('(' + _0x5e9350 + ')\x20' + _0x597b9d + '\x20:\x20' + _0x3b7f5f[_0x597b9d]), _0x5e9350++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5e9350 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x315f27 = await _0x2cc643();
                                                                    if (_0x315f27 == _0x5e9350)
                                                                        return _0x25bf02();
                                                                    console['clear'];
                                                                    var _0x43db3f = 0x0;
                                                                    for (var _0x11ea38 in _0x3b7f5f) {
                                                                        if (_0x315f27 == _0x43db3f) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x11ea38 + '\x20:'), _0x3b7f5f[_0x11ea38] = await _0x5c534c(), _0x2e02b8['writeFileSync']('../settings.json', JSON['stringify'](_0x3b7f5f));
                                                                            break;
                                                                        } else
                                                                            _0x43db3f++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x3e202b(0xbb8), _0x25bf02();
                                                                } else {
                                                                    if (_0x55651c[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x4004c8(), _0x25bf02();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x55651c[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x5b68a9 = await _0x27c067();
                                                                            _0x5b68a9 == 'ModuleVoorDeBoys' ? (await _0x5dd475(), await _0x1f16fb(), await afewFunction(_0x1c42d8[_0x109515], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x3e202b(0xbb8));
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
            try {
                await _0x25bf02();
            } catch (_0x556eb6) {
                return console['log'](_0x556eb6), _0x25bf02();
            }
        } catch (_0x27198b) {
            return console['log'](_0x27198b), await _0x3e202b(0x3a98);
        }
}
;
_0x5988ee('JRaffles\x20' + _0x413f08), _0x4004c8();
try {
    _0x5a7148();
} catch (_0x3accec) {
    var _0x21f54b = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1dc6d4
            },
            {
                'name': 'Version',
                'value': '' + _0x413f08
            },
            {
                'name': 'Error',
                'value': '' + _0x3accec
            }
        ]
    }];
    const _0x304e56 = { 'embeds': _0x21f54b };
    _0x19ed1d(_0x54e464, _0x304e56);
}