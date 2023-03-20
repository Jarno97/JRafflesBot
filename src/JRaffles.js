process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x46e118 = require('fs'), _0x56265b = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3827dc(_0x4fcd1b) {
    const _0x1a7a45 = _0x46e118['createWriteStream'](_0x4fcd1b, { 'flags': 'a' }), _0xe96f15 = console['log'];
    console['log'] = function () {
        const _0x5f0092 = Array['prototype']['slice']['call'](arguments), _0x457734 = _0x5f0092['join']('\x20') + '\x0a';
        _0x1a7a45['write'](_0x457734), _0xe96f15['apply'](console, _0x5f0092);
    };
}
_0x3827dc('../logs/log\x20' + _0x56265b);
var _0x194db0 = require('tough-cookie'), _0x9cc471 = require('node-imap'), _0x38284c = require('util')['inspect'];
const _0x535dc1 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x435f8b } = require('discord.js');
var _0x31fc85 = require('exe');
const { execFile: _0x443e0f } = require('child_process'), _0x206049 = require('puppeteer-extra'), _0x948ff8 = require('puppeteer-extra-plugin-recaptcha'), _0x4a0e3c = require('puppeteer-extra-plugin-stealth'), _0x37c850 = require('chalk'), _0x230bf5 = require('node-bash-title'), _0x5e5254 = require('axios'), _0x27034d = require('papaparse');
var _0x3bdd65 = require('random-name');
const _0x808e24 = require('request');
var _0x32d837 = require('prompt');
const _0x39ed9e = _0x808e24['jar']();
var _0x56452b = {};
const _0x5319d4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xfbb238 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x33cad7 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2d8b55 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x508086 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3e7656 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x36ee0c = 'https://discord.com/api/webhooks/', _0xaea6a3 = '' + _0x36ee0c + _0x33cad7, _0x17b64 = '' + _0x36ee0c + _0x2d8b55, _0x230f5d = '' + _0x36ee0c + _0x5319d4, _0x1a5beb = '' + _0x36ee0c + _0xfbb238, _0x460ce8 = '' + _0x36ee0c + _0x508086, _0x259bff = '' + _0x36ee0c + _0x3e7656;
const _0x4acd29 = JSON['parse'](_0x46e118['readFileSync']('../package.json', 'utf-8')), _0x519edc = _0x4acd29['version'];
var _0x4e4258, _0x5e9453, _0x500b17, _0x30274c, _0x2cb598, _0x57ebb9, _0x54cb3f, _0x549691;
const _0x3cd03b = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4b1efd = ![];
const _0x4975fc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x51edfa = '0123456789';
var _0x555bbf = _0x4975fc['split']('');
const _0x51ff9d = require('auto-git-update'), { PageEmittedEvents: _0x2c7395 } = require('puppeteer'), { getRandomValues: _0x36fcd9 } = require('crypto'), { resolve: _0x3915a6 } = require('path'), { Console: _0x1ad3a5 } = require('console'), _0x13b82a = {
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
}, _0x3f0a94 = new _0x51ff9d(_0x13b82a);
async function _0x39f8a5() {
    _0x2cb598 = _0x46e118['readdirSync']('../proxies'), _0x30274c = _0x46e118['readdirSync']('../tasks'), !_0x46e118['existsSync']('../accounts/fenom.csv') && _0x46e118['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x46e118['existsSync']('../accounts/bstn.csv') && _0x46e118['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x46e118['existsSync']('../accounts/eql.csv') && _0x46e118['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x46e118['existsSync']('../failed-tasks.csv') && _0x46e118['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x46e118['existsSync']('../successful-tasks.csv') && _0x46e118['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x56452b = JSON['parse'](_0x46e118['readFileSync']('../settings.json', 'utf-8')), !_0x56452b['delay'] && (_0x56452b['delay'] = 0x3c, _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['masterMail'] && (_0x56452b['masterMail'] = 'yourmail@gmail.com', _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['masterPassword'] && (_0x56452b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['captchaKey'] && (_0x56452b['captchaKey'] = '', _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['useRandomProxy'] && (_0x56452b['useRandomProxy'] = !![], _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['shuffleTasks'] && (_0x56452b['shuffleTasks'] = ![], _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), !_0x56452b['webhook'] && (_0x56452b['webhook'] = '', _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), _0x56452b['delay'] <= 0x1388 && (_0x56452b['delay'] = _0x56452b['delay'] * 0x3e8), _0x56452b['AfewDelay'] && (delete _0x56452b['AfewDelay'], _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), _0x56452b['MahaDelay'] && (delete _0x56452b['MahaDelay'], _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), _0x56452b['footshopDelay'] && (delete _0x56452b['footshopDelay'], _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b, null, 0x2))), _0x56452b['MahaDelay'] = _0x56452b['delay'], _0x36ee0c = _0x56452b['webhook'], _0x57ebb9 = _0x56452b['licenseKey'];
}
let _0x2154de, _0x106cf1 = [], _0x5110d9;
const _0x37e661 = _0x159b01 => new Promise(_0x477cfb => setTimeout(_0x477cfb, _0x159b01));
function _0x105207(_0xea8f18, _0x3eb683) {
    return Math['floor'](Math['random']() * (_0x3eb683 - _0xea8f18 + 0x1) + _0xea8f18);
}
function _0x3306a7(_0x2433ee) {
    let _0xe347b0 = _0x2433ee['length'], _0x1e36a6;
    while (_0xe347b0 != 0x0) {
        _0x1e36a6 = Math['floor'](Math['random']() * _0xe347b0), _0xe347b0--, [_0x2433ee[_0xe347b0], _0x2433ee[_0x1e36a6]] = [
            _0x2433ee[_0x1e36a6],
            _0x2433ee[_0xe347b0]
        ];
    }
    return _0x2433ee;
}
async function _0x24b374(_0x5a25bb) {
    return _0x5e5254['get']('https://api.hyper.co/v4/licenses/' + _0x5a25bb, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3cd03b } })['then'](_0x1064c8 => _0x1064c8['data'])['catch'](() => null);
}
;
async function _0xf5a794(_0x37a433) {
    console['clear']();
    if (_0x37a433 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x517c51 = await _0x32d837['get']('License');
        if (_0x517c51['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x37e661(0xbb8), _0xf5a794(_0x37a433);
        _0x37a433 = _0x517c51['License'], _0x56452b['licenseKey'] = _0x37a433, _0x57ebb9 = _0x37a433, _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b));
    }
    console['log']('Checking\x20license\x20' + _0x57ebb9 + '...'), await _0x37e661(0x320);
    const _0x33834b = await _0x24b374(_0x37a433);
    _0x54cb3f = JSON['stringify'](_0x33834b['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x549691 = JSON['stringify'](_0x33834b['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x33834b)
        return console['log']('License\x20not\x20found');
    if (!_0x33834b['user'])
        return console['log']('License\x20not\x20bound');
    return _0x33834b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4b1efd = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4b1efd = ![]);
}
async function _0x5e5a93() {
    var _0x2247c7 = await _0x32d837['get']('Module');
    return console['clear'](), _0x2247c7['Module'];
}
;
async function _0x38332b() {
    var _0x3312a1 = await _0x32d837['get']('Setting');
    return console['clear'](), _0x3312a1['Setting'];
}
async function _0x2e5ba3() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x3ecba7 = 0x0; _0x3ecba7 < _0x30274c['length']; _0x3ecba7++) {
        console['log']('\x20(' + _0x3ecba7 + ')\x20' + _0x30274c[_0x3ecba7]);
    }
    console['log']('');
    var _0x341533 = await _0x32d837['get']('Task');
    if (_0x341533['Task'] > _0x30274c['length'] - 0x1 || isNaN(_0x341533['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x37e661(0x3e8), _0x2e5ba3();
    var _0x20907a = _0x46e118['readFileSync']('../tasks/' + _0x30274c[_0x341533['Task']], 'utf-8');
    return _0x500b17 = _0x27034d['parse'](_0x20907a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x37c850['blue'](_0x30274c[_0x341533['Task']])), _0x4e4258 = _0x30274c[_0x341533['Task']], _0x500b17;
}
async function _0x19840f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2639de = 0x0; _0x2639de < _0x2cb598['length']; _0x2639de++) {
        console['log']('\x20(' + _0x2639de + ')\x20' + _0x2cb598[_0x2639de]);
    }
    console['log']('');
    var _0x2d0d4b = await _0x32d837['get']('Proxies');
    if (_0x2d0d4b['Proxies'] > _0x2cb598['length'] - 0x1 || isNaN(_0x2d0d4b['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x37e661(0x3e8), _0x19840f();
    var _0x35f568 = _0x46e118['readFileSync']('../proxies/' + _0x2cb598[_0x2d0d4b['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2aef8a = _0x35f568['map']((_0x16768d, _0x92a7b7) => {
        sanatizeProxy = _0x16768d['replace']('\x0d', '');
        if (_0x35f568[_0x92a7b7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5e9453 = _0x2cb598[_0x2d0d4b['Proxies']], console['clear'](), _0x2aef8a;
}
async function _0x2e648c() {
    var _0x322424 = await _0x32d837['get']('Value');
    return console['clear'](), _0x322424['Value'];
}
async function _0x17234e(_0x1ccaa0) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x45db74 = 0x0; _0x45db74 < _0x1ccaa0['length']; _0x45db74++) {
        console['log']('\x20(' + _0x45db74 + ')\x20[' + _0x1ccaa0[_0x45db74]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xdb707f = await _0x32d837['get']('Module');
    return _0xdb707f['Module'];
}
async function _0x2a15f9() {
    var _0x6a7d88 = await _0x32d837['get']('Password');
    return console['clear'](), _0x6a7d88['Password'];
}
;
async function _0x13f524() {
    var _0x3258f8 = await _0x32d837['get']('Links');
    return _0x3258f8['Links'];
}
;
async function _0xfb859a() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2fd98c = 0x0; _0x2fd98c < _0x106cf1['length']; _0x2fd98c++) {
        console['log']('\x20(' + _0x2fd98c + ')\x20' + _0x106cf1[_0x2fd98c]);
    }
    ;
    console['log']();
    let _0x11e67b = await _0x32d837['get']('Product');
    return console['clear'](), _0x11e67b['Product'];
}
;
function _0x3071a0() {
    var _0x38ca6e = new Date(Date['now']())['toLocaleTimeString']();
    return _0x38ca6e;
}
;
function _0x363a4e() {
    var _0x5583d6 = new Date(Date['now']())['toLocaleString']();
    return _0x5583d6['replace'](',', '');
}
async function _0xb69523(_0x39898e, _0xfa2208) {
    let _0x4581c8 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x519edc != 'devkey') {
        await _0x5e5254['post'](_0x39898e, _0xfa2208, _0x4581c8);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xb7405e(_0x57e692, _0x468b50, _0x25e1b7, _0x844393, _0x465b93) {
    if (!_0x844393 && _0x25e1b7 == 'dev') {
        var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x468b50['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x468b50['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x57e692['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x56452b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x54cb3f,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x57e692['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x57e692['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x519edc,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x47618e['data'];
    } else {
        if (_0x844393 && _0x25e1b7 == 'dev') {
            var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x468b50['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x54cb3f,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x468b50['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x57e692['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x56452b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x465b93,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x57e692['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x57e692['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x519edc,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x47618e['data'];
        } else {
            if (_0x25e1b7 == 'pub') {
                var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x468b50['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x468b50['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x57e692['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x56452b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x57e692['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x519edc,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x47618e['data'];
            } else {
                if (_0x25e1b7 == 'acc' && !_0x844393) {
                    var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x468b50['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x54cb3f,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x468b50['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x56452b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x519edc,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x47618e['data'];
                } else {
                    if (_0x25e1b7 == 'acc' && _0x844393) {
                        var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x468b50['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x54cb3f,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x465b93,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x468b50['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x56452b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x519edc,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x47618e['data'];
                    } else {
                        if (_0x25e1b7 == 'open') {
                            var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x549691)['addFields']({
                                'name': 'User',
                                'value': '' + _0x54cb3f,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x519edc,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x47618e['data'];
                        } else {
                            if (!_0x844393 && _0x25e1b7 == 'ver') {
                                var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x468b50['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x54cb3f,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x468b50['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x56452b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x519edc,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x47618e['data'];
                            } else {
                                if (_0x844393 && _0x25e1b7 == 'ver') {
                                    var _0x47618e = new _0x435f8b()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x468b50['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x54cb3f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x465b93,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x468b50['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x56452b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x519edc,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x47618e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0xbf3e86(_0x247c84, _0x4a5dc6) {
    var _0x510e91 = _0x247c84[_0x4a5dc6]['Address1']['split'](''), _0x2e2e19 = _0x247c84[_0x4a5dc6]['Address2']['split'](''), _0x395b10 = _0x247c84[_0x4a5dc6]['Email']['split']('@');
    for (var _0x5d353d = 0x0; _0x5d353d < _0x510e91['length']; _0x5d353d++) {
        if (_0x510e91[_0x5d353d] == 'X') {
            var _0x31a3d0 = Math['round'](Math['random']() * (_0x4975fc['length'] - 0x1));
            _0x510e91[_0x5d353d] = _0x555bbf[_0x31a3d0];
        }
    }
    ;
    for (var _0x5d353d = 0x0; _0x5d353d < _0x2e2e19['length']; _0x5d353d++) {
        if (_0x2e2e19[_0x5d353d] == 'X') {
            var _0x31a3d0 = Math['round'](Math['random']() * (_0x4975fc['length'] - 0x1));
            _0x2e2e19[_0x5d353d] = _0x555bbf[_0x31a3d0];
        }
    }
    ;
    _0x247c84[_0x4a5dc6]['FirstName'] == 'RANDOM' && (_0x247c84[_0x4a5dc6]['FirstName'] = _0x3bdd65['first']());
    _0x247c84[_0x4a5dc6]['LastName'] == 'RANDOM' && (_0x247c84[_0x4a5dc6]['LastName'] = _0x3bdd65['last']());
    _0x395b10[0x0] == 'RANDOM' ? _0x395b10[0x0] = '' + _0x3bdd65['first']() + _0x3bdd65['last']() + _0x105207(0x1, 0x270f) + '@' : _0x395b10[0x0] = _0x395b10[0x0] + '@';
    _0x247c84[_0x4a5dc6]['Email'] = _0x395b10['join'](''), _0x247c84[_0x4a5dc6]['Address1'] = _0x510e91['join'](''), _0x247c84[_0x4a5dc6]['Address2'] = _0x2e2e19['join']('');
    _0x247c84[_0x4a5dc6]['Phone'] == 'RANDOM' && (_0x247c84[_0x4a5dc6]['Phone'] = '0' + _0x105207(0x5f5e100, 0x3b9ac9ff));
    if (_0x247c84[_0x4a5dc6]['Follower'] == 'RANDOM') {
        var _0x3b8ec1 = _0x105207(0x1, 0x270f);
        _0x247c84[_0x4a5dc6]['Follower'] = '' + _0x3bdd65['first']() + _0x3bdd65['last']() + _0x3b8ec1 + '\x20';
    }
    _0x247c84[_0x4a5dc6]['HouseNumber'] == 'RANDOM' && (_0x247c84[_0x4a5dc6]['HouseNumber'] = _0x105207(0x1, 0xc8));
    if (_0x247c84[_0x4a5dc6]['Address1'] == 'RANDOM') {
        var _0x498590 = Math['round'](Math['random']() * (_0x4975fc['length'] - 0x1)), _0x37109 = _0x555bbf[_0x498590];
        _0x247c84[_0x4a5dc6]['Address1'] = _0x3bdd65['last']() + 'straat', _0x247c84[_0x4a5dc6]['Zip'] == '' && (_0x247c84[_0x4a5dc6]['Postcode'] = _0x105207(0x3e8, 0x270f) + '\x20' + _0x37109 + _0x37109, _0x247c84[_0x4a5dc6]['Zip'] = _0x247c84[_0x4a5dc6]['Postcode']), _0x247c84[_0x4a5dc6]['HouseNumber'] = '' + _0x105207(0x1, 0xc8);
    }
    return;
}
;
async function _0x48023a(_0x542d1a, _0x16c1b2) {
    _0x46e118['appendFileSync']('../failed-tasks.csv', _0x363a4e() + ',' + _0x16c1b2['store'] + ',' + _0x16c1b2['name'] + ',' + _0x542d1a['Url'] + ',' + _0x542d1a['Size'] + ',' + _0x542d1a['Follower'] + ',' + _0x542d1a['FirstName'] + ',' + _0x542d1a['LastName'] + ',' + _0x542d1a['Address1'] + ',' + _0x542d1a['Address2'] + ',' + _0x542d1a['HouseNumber'] + ',' + _0x542d1a['Zip'] + ',' + _0x542d1a['City'] + ',' + _0x542d1a['State'] + ',' + _0x542d1a['Country'] + ',' + _0x542d1a['Phone'] + ',' + _0x542d1a['Email'] + ',' + _0x542d1a['Password'] + ',' + _0x542d1a['PaymentMethod'] + ',' + _0x542d1a['CardType'] + ',' + _0x542d1a['NameOnCard'] + ',' + _0x542d1a['CardNumber'] + ',' + _0x542d1a['ExpiryDate'] + ',' + _0x542d1a['CVV'] + ',' + _0x542d1a['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3324c5(_0x691f17, _0xdd763e) {
    _0x46e118['appendFileSync']('../successful-tasks.csv', _0x363a4e() + ',' + _0xdd763e['store'] + ',' + _0xdd763e['name'] + ',' + _0x691f17['Url'] + ',' + _0x691f17['Size'] + ',' + _0x691f17['Follower'] + ',' + _0x691f17['FirstName'] + ',' + _0x691f17['LastName'] + ',' + _0x691f17['Address1'] + ',' + _0x691f17['Address2'] + ',' + _0x691f17['HouseNumber'] + ',' + _0x691f17['Zip'] + ',' + _0x691f17['City'] + ',' + _0x691f17['State'] + ',' + _0x691f17['Country'] + ',' + _0x691f17['Phone'] + ',' + _0x691f17['Email'] + ',' + _0x691f17['Password'] + ',' + _0x691f17['PaymentMethod'] + ',' + _0x691f17['CardType'] + ',' + _0x691f17['NameOnCard'] + ',' + _0x691f17['CardNumber'] + ',' + _0x691f17['ExpiryDate'] + ',' + _0x691f17['CVV'] + ',' + _0x691f17['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3cb5f4() {
    let _0xaea6a7 = proxyFile['split']('\x0a'), _0x4b508d = _0xaea6a7['map']((_0x38964e, _0x6a0b7) => {
        sanatizeProxy = _0x38964e['replace']('\x0d', '');
        if (_0xaea6a7[_0x6a0b7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4b508d;
}
;
async function _0x2cc713(_0x51eea5) {
    var _0x5269dc = _0x51eea5[0x1]['split'](':');
    const _0x4695ea = await _0x206049['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5269dc[0x0] + ':' + _0x5269dc[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x3da330 = await _0x4695ea['newPage']();
        await _0x3da330['authenticate']({
            'username': '' + _0x5269dc[0x2],
            'password': '' + _0x5269dc[0x3]
        }), console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3da330['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3da330['setRequestInterception'](!![]), _0x3da330['on']('request', _0x40fbda => {
            _0x40fbda['resourceType']() === 'image' || _0x40fbda['resourceType']() === 'font' || _0x40fbda['resourceType']() === 'media' ? _0x40fbda['abort']() : _0x40fbda['continue']();
        }), await _0x3da330['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3da330['waitForTimeout'](0xbb8), await _0x3da330['waitForSelector']('.product-card');
        const _0x47cb32 = await _0x3da330['$$eval']('a.product-card', _0x12d079 => {
            return _0x12d079['map'](_0x44049b => _0x44049b['href']);
        });
        return _0x106cf1 = _0x47cb32;
    } catch (_0x5e802b) {
        console['log']('\x20' + _0x5e802b);
    } finally {
        _0x4695ea['close'](), console['clear']();
    }
}
;
async function _0x2f7329(_0xa616c4, _0x32b7aa) {
    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x56452b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x34400f = 0x0; _0x34400f < bouncewear['length']; _0x34400f++) {
        await _0xbf3e86(bouncewear, _0x34400f);
        if (bouncewear[_0x34400f]['Email'] == '' || bouncewear[_0x34400f]['Password'] == '' || bouncewear[_0x34400f]['FirstName'] == '' || bouncewear[_0x34400f]['LastName'] == '') {
            console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x56452b['useRandomProxy'] = ![])
            var _0x1bda30 = _0x3cb5f4()[_0x34400f]['split'](':');
        else
            var _0x2eaa54 = Math['round'](Math['random']() * (_0x3cb5f4()['length'] - 0x1)), _0x1bda30 = _0x3cb5f4()[_0x2eaa54]['split'](':');
        const _0x3e2236 = await _0x206049['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1bda30[0x0] + ':' + _0x1bda30[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x394814 = await _0x3e2236['newPage']();
            await _0x394814['authenticate']({
                'username': '' + _0x1bda30[0x2],
                'password': '' + _0x1bda30[0x3]
            }), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x394814['setRequestInterception'](!![]), _0x394814['on']('request', _0x44eb37 => {
                _0x44eb37['resourceType']() === 'image' || _0x44eb37['resourceType']() === 'font' || _0x44eb37['resourceType']() === 'media' ? _0x44eb37['abort']() : _0x44eb37['continue']();
            }), await _0x394814['goto'](_0xa616c4), await _0x37e661(0xbb8), await _0x394814['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Filling\x20information'), await _0x394814['type']('#RegisterForm-FirstName', '' + bouncewear[_0x34400f]['FirstName']), await _0x37e661(0x226), await _0x394814['type']('#RegisterForm-LastName', '' + bouncewear[_0x34400f]['LastName']), await _0x37e661(0x226), await _0x394814['type']('#RegisterForm-email', '' + bouncewear[_0x34400f]['Email']), await _0x37e661(0x226), await _0x394814['type']('#RegisterForm-password', '' + bouncewear[_0x34400f]['Password']), await _0x37e661(0x226), await _0x394814['click']('#marketing'), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Submitting..'), await _0x394814['$eval']('#RegisterForm', _0x4fe77f => _0x4fe77f['submit']()), await _0x37e661(0x1f40), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x394814['solveRecaptchas'](), await _0x394814['click']('.shopify-challenge__button.btn');
            async function _0x3b2db4() {
                for (var _0x5b19c5 = 0x0; _0x5b19c5 < 0x4; _0x5b19c5++) {
                    try {
                        console['log']('try'), await _0x394814['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20' + _0x37c850['red']('Catpcha\x20failed,\x20retrying..')), await _0x394814['solveRecaptchas'](), await _0x394814['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x3b2db4(), console['log'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x37e661(0x1f4);
            try {
                await _0x394814['waitForSelector']('.featured-title'), await _0x37e661(0x1f4), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x34400f]['Email'] + '\x20Generated!')), _0x46e118['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x34400f]['Email'] + ',' + bouncewear[_0x34400f]['Password']), console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x32b7aa['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x34400f]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x5a404d) {
                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5a404d));
            }
        } catch (_0x14336d) {
            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x34400f + 0x1) + '\x20:\x20' + _0x14336d));
        } finally {
            _0x3e2236 && _0x3e2236['close'](), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
        }
    }
}
async function _0x5f5615(_0x61691b, _0x51308f, _0x107a1e) {
    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x56452b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5d0849 = 0x0; _0x5d0849 < _0x51308f['length']; _0x5d0849++) {
        _0x230bf5(_0x61691b['name'] + '\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20/\x20' + _0x51308f['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
        var _0x3b5b23 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54cb3f
                },
                {
                    'name': 'Product',
                    'value': '' + _0x51308f[_0x5d0849]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x51308f[_0x5d0849]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x56452b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x56452b['version']
                }
            ]
        }];
        const _0x2b1b31 = { 'embeds': _0x3b5b23 };
        await _0xbf3e86(_0x51308f, _0x5d0849);
        if (_0x51308f[_0x5d0849]['Email'] == '' || _0x51308f[_0x5d0849]['Password'] == '' || _0x51308f[_0x5d0849]['FirstName'] == '' || _0x51308f[_0x5d0849]['LastName'] == '') {
            console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x51308f[_0x5d0849]['Password'] == '' || _0x51308f[_0x5d0849]['Password'] == undefined) && (_0x51308f[_0x5d0849]['Password'] = 'ErehsaWonRaj1!');
        if (_0x56452b['useRandomProxy'] = ![])
            var _0x1e336e = _0x107a1e[_0x5d0849]['split'](':');
        else
            var _0x109188 = Math['round'](Math['random']() * (_0x107a1e['length'] - 0x1)), _0x1e336e = _0x107a1e[_0x109188]['split'](':');
        const _0x4d0d3a = await _0x206049['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1e336e[0x0] + ':' + _0x1e336e[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x13eb3d = await _0x4d0d3a['newPage']();
            await _0x13eb3d['authenticate']({
                'username': '' + _0x1e336e[0x2],
                'password': '' + _0x1e336e[0x3]
            }), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13eb3d['setRequestInterception'](!![]), _0x13eb3d['on']('request', _0x3e68cd => {
                _0x3e68cd['resourceType']() === 'image' || _0x3e68cd['resourceType']() === 'font' || _0x3e68cd['resourceType']() === 'media' ? _0x3e68cd['abort']() : _0x3e68cd['continue']();
            }), await _0x13eb3d['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x13eb3d['goto']('' + _0x51308f[_0x5d0849]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x13eb3d['waitForSelector']('#btnPdpAtb'), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x51308f[_0x5d0849]['Size']);
            const _0x405410 = await _0x13eb3d['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x48458d => {
                return _0x48458d['map'](_0x376196 => _0x376196['innerText']);
            }), _0x4b9e17 = await _0x13eb3d['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x1ae066 = ![];
            if (_0x51308f[_0x5d0849]['Size'] == 'RANDOM') {
                var _0x13702e = Math['round'](Math['random']() * (_0x4b9e17['length'] - 0x1));
                await _0x4b9e17[_0x13702e]['click']();
            } else
                for (var _0x1b6572 = 0x0; _0x1b6572 < _0x405410['length']; _0x1b6572++) {
                    if (_0x405410[_0x1b6572] != _0x51308f[_0x5d0849]['Size'])
                        continue;
                    try {
                        await _0x4b9e17[_0x1b6572]['click']();
                    } catch {
                        console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x1ae066 = !![];
                    }
                }
            if (_0x1ae066)
                continue;
            await _0x37e661(0x578), await _0x13eb3d['click']('#btnPdpAtb'), await _0x13eb3d['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x37e661(0x3e8), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x13eb3d['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x13eb3d['waitForSelector']('#email'), await _0x13eb3d['type']('#email', _0x51308f[_0x5d0849]['Email']), await _0x37e661(0x226), await _0x13eb3d['click']('#guest-submit'), await _0x37e661(0x1b58), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x13eb3d['waitForSelector']('#firstname'), await _0x13eb3d['type']('#firstname', _0x51308f[_0x5d0849]['FirstName'], 0x1f4), await _0x37e661(0x190), await _0x13eb3d['waitForSelector']('#surname'), await _0x13eb3d['type']('#surname', _0x51308f[_0x5d0849]['LastName'], 0x1f4), await _0x37e661(0x190), await _0x13eb3d['waitForSelector']('#mobile'), await _0x13eb3d['type']('#mobile', _0x51308f[_0x5d0849]['Phone'], 0x1f4), await _0x37e661(0x190), await _0x13eb3d['click']('#enterManualDiv'), await _0x37e661(0x5dc), await _0x13eb3d['waitForSelector']('#address1'), await _0x13eb3d['type']('#address1', _0x51308f[_0x5d0849]['Address1'] + '\x20' + _0x51308f[_0x5d0849]['HouseNumber'], 0x226), await _0x37e661(0x384), await _0x13eb3d['waitForSelector']('#address2'), await _0x13eb3d['type']('#address2', '' + _0x51308f[_0x5d0849]['Address2'], 0x226), await _0x37e661(0x320);
            const _0x4e7d14 = await _0x13eb3d['$$eval']('#countryselect_view3\x20>\x20option', _0x357f1e => {
                return _0x357f1e['map'](_0x4340b9 => _0x4340b9['value']);
            });
            var _0x394537;
            for (var _0x583152 = 0x0; _0x583152 < _0x4e7d14['length']; _0x583152++) {
                if (_0x4e7d14[_0x583152]['startsWith']('' + _0x51308f[_0x5d0849]['Country'])) {
                    _0x394537 = _0x4e7d14[_0x583152];
                    break;
                }
                continue;
            }
            await _0x13eb3d['select']('#countryselect_view3', '' + _0x394537), await _0x13eb3d['waitForSelector']('#address4'), await _0x13eb3d['type']('#address4', '' + _0x51308f[_0x5d0849]['City'], 0x1f4), await _0x37e661(0x384), await _0x13eb3d['waitForSelector']('#postcode'), await _0x13eb3d['type']('#postcode', '' + _0x51308f[_0x5d0849]['Zip'], 0x1f4), await _0x37e661(0x4b0);
            const _0x31c9fa = await _0x13eb3d['url']();
            console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x368415 = _0x31c9fa['split']('?')[0x1], _0x53c378 = await _0x13eb3d['$']('#co_address_submit');
            await _0x53c378['evaluate'](_0x19e47a => _0x19e47a['click']()), await _0x37e661(0x1388), await _0x13eb3d['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x368415), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x13eb3d['waitForSelector']('#paymentbuttons'), await _0x37e661(0x1388), await _0x13eb3d['click']('#paymentbuttons\x20>\x20div'), await _0x37e661(0x1c2), await _0x13eb3d['waitForSelector']('#card-number'), await _0x13eb3d['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x1e4351 = await _0x13eb3d['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x505a48 = await _0x1e4351['contentFrame']();
            await _0x505a48['waitForSelector']('.InputContainer'), await _0x505a48['click']('.InputContainer\x20>\x20input'), await _0x37e661(0x578), await _0x13eb3d['type']('#card-number', '' + _0x51308f[_0x5d0849]['CreditNumber']), await _0x37e661(0xfa), await _0x13eb3d['type']('#card-expiry', '' + _0x51308f[_0x5d0849]['ExpiryDate']), await _0x37e661(0xfa), await _0x13eb3d['type']('#card-cvc', '' + _0x51308f[_0x5d0849]['CVV']), await _0x37e661(0x7d0), await _0x13eb3d['click']('#card-button'), console['log'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x13eb3d['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xb69523(_0x230f5d, _0x2b1b31);
            } catch {
                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3b5b23[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3b5b23[0x0]['description'] = '3DS\x20Failed', await _0xb69523(_0x1a5beb, _0x2b1b31);
            }
        } catch (_0x54bdb1) {
            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x61691b['name'] + ']\x20Task\x20' + (_0x5d0849 + 0x1) + '\x20:\x20' + _0x54bdb1)), _0x3b5b23[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3b5b23[0x0]['description'] = '' + _0x54bdb1, await _0xb69523(_0x1a5beb, _0x2b1b31);
        } finally {
            _0x4d0d3a && _0x4d0d3a['close']();
            if (_0x5d0849 + 0x1 == _0x51308f['length']) {
                console['log'](_0x37c850['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x37e661(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x56452b['AfewDelay'] + '\x20ms'), await _0x37e661(_0x56452b['AfewDelay']);
        }
    }
}
async function _0x3d9720(_0x5c3492, _0x398a97, _0x3c9734, _0x1da63, _0x363067) {
    var _0x573c25, _0x175096 = {}, _0x2a0570 = [], _0x2ccea3 = {}, _0x46ac50 = [
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
    !_0x1da63 && (_0x1da63 = {});
    if (_0x398a97 != 'ver') {
        _0x230bf5(_0x3c9734['name'] + '\x20Task\x20' + (_0x5c3492 + 0x1) + '\x20/\x20' + _0x1da63['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453), await _0xbf3e86(_0x1da63, _0x5c3492), _0x2a0570 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54cb3f
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1da63[_0x5c3492]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x56452b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x519edc
                }
            ]
        }], _0x2ccea3 = { 'embeds': _0x2a0570 }, _0x175096 = _0x3c9734['data'];
        _0x398a97 == 'exp' ? _0x175096['data']['attributes']['email'] = '' + _0x1da63[_0x5c3492]['FirstName'] + _0x1da63[_0x5c3492]['LastName'] + _0x56452b['catchall'] : _0x175096['data']['attributes']['email'] = '' + _0x1da63[_0x5c3492]['Email'];
        if (_0x1da63[_0x5c3492]['Size'] == 'RANDOM') {
        }
        _0x175096['data']['attributes']['properties']['$first_name'] = '' + _0x1da63[_0x5c3492]['FirstName'], _0x175096['data']['attributes']['properties']['$last_name'] = '' + _0x1da63[_0x5c3492]['LastName'], _0x175096['data']['attributes']['properties']['$address1'] = _0x1da63[_0x5c3492]['Address1'] + '\x20' + _0x1da63[_0x5c3492]['Address2'] + '\x20' + _0x1da63[_0x5c3492]['HouseNumber'], _0x175096['data']['attributes']['properties']['$zip'] = '' + _0x1da63[_0x5c3492]['Zip'], _0x175096['data']['attributes']['properties']['$city'] = '' + _0x1da63[_0x5c3492]['City'], _0x175096['data']['attributes']['properties']['$country'] = '' + _0x1da63[_0x5c3492]['Country'], _0x175096['data']['attributes']['properties']['Size'] = '' + _0x1da63[_0x5c3492]['Size'], _0x175096['data']['attributes']['properties']['$phone_number'] = '' + _0x1da63[_0x5c3492]['Phone'], _0x175096['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1da63[_0x5c3492]['Follower'];
    }
    if (_0x56452b['useRandomProxy'] = ![])
        var _0x220b10 = _0x363067[_0x5c3492]['split'](':');
    else
        var _0x4a3aa0 = Math['round'](Math['random']() * (_0x363067['length'] - 0x1)), _0x220b10 = _0x363067[_0x4a3aa0]['split'](':');
    var _0x24c5d5 = {
        'jar': _0x39ed9e,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3c9734['url'],
        'headers': _0x3c9734['headers'],
        'body': JSON['stringify'](_0x175096),
        'proxy': 'http://' + _0x220b10[0x2] + ':' + _0x220b10[0x3] + '@' + _0x220b10[0x0] + ':' + _0x220b10[0x1]
    };
    return _0x398a97 != 'ver' && (_0x24c5d5['url'] = _0x3c9734['url'], _0x24c5d5['headers'] = _0x3c9734['headers']), _0x398a97 == 'ver' && (_0x24c5d5['method'] = 'GET'), new Promise(function (_0x5774ef, _0x1aa2be) {
        callback = async (_0x506709, _0x5cc783, _0x38f73f) => {
            if (!_0x506709 && _0x5cc783['statusCode'] == 0xca || !_0x506709 && _0x5cc783['statusCode'] == 0xc8) {
                if (_0x398a97 != 'ver') {
                    var _0x470c63 = await _0xb7405e(_0x1da63[_0x5c3492], _0x3c9734, 'dev', ![]), _0x24b9bc = await _0xb7405e(_0x1da63[_0x5c3492], _0x3c9734, 'pub', ![]);
                    const _0x513e67 = {
                        'succesDEVMSG': { 'embeds': [_0x470c63] },
                        'succesPUBMSG': { 'embeds': [_0x24b9bc] }
                    };
                    if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                        try {
                            await _0xb69523(_0x56452b['webhook'], _0x513e67['succesDEVMSG']);
                        } catch {
                        }
                    await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x513e67['succesDEVMSG']), await _0x37e661(0xc8);
                    try {
                        await _0xb69523(_0x460ce8, _0x513e67['succesPUBMSG']);
                    } catch {
                    }
                    _0x3324c5(_0x1da63[_0x5c3492], _0x3c9734);
                }
                _0x5774ef(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x3c9734['name'] + ']\x20Task\x20' + (_0x5c3492 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x398a97 != 'ver') {
                    var _0x5847d3 = '' + _0x506709, _0x1ee70d = await _0xb7405e(_0x1da63[_0x5c3492], _0x3c9734, 'dev', !![], _0x5847d3), _0x20085e = {};
                    _0x20085e['errorDEV'] = { 'embeds': [_0x1ee70d] }, _0x48023a(_0x1da63[_0x5c3492], _0x3c9734), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x20085e['errorDEV']), await _0xb69523(_0x1a5beb, _0x20085e['errorDEV']);
                }
                _0x1aa2be(console['log'](_0x3071a0() + '\x20[' + _0x3c9734['name'] + ']\x20Task\x20' + (_0x5c3492 + 0x1) + ':\x20' + _0x506709));
            }
        };
        try {
            _0x398a97 != 'ver' && console['log'](_0x3071a0() + '\x20[' + _0x3c9734['name'] + ']\x20Task\x20' + (_0x5c3492 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x175096['data']['attributes']['email']), _0x808e24(_0x24c5d5, callback);
        } catch (_0x13a37c) {
            console['log'](_0x3071a0() + '\x20Task\x20' + (_0x5c3492 + 0x1) + ':\x20' + _0x13a37c);
        }
    });
}
;
async function _0x4bdeb1(_0xfcd5, _0x17600c) {
    if (_0x23c386 != 'yes')
        var _0x23c386 = '', _0x3cf2ee = 0x0;
    var _0x2b7f2c = [];
    async function _0x5d354e() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x35e4b9 = await _0x32d837['get']('Quantity')['Quantity'], _0x38d055 = new _0x9cc471({
            'user': _0x56452b['masterMail'],
            'password': _0x56452b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x353dc6(_0x5cd357) {
            _0x38d055['openBox']('INBOX', ![], _0x5cd357);
        }
        _0x38d055['once']('ready', function () {
            _0x353dc6(function (_0x38c47c, _0x2e6299) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x38c47c)
                    throw _0x38c47c;
                _0x38d055['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x1882ec, _0x3652b5) {
                    if (!_0x3652b5 || !_0x3652b5['length'])
                        console['log'](_0x3071a0() + '\x20[' + _0xfcd5['name'] + ']\x20No\x20mails\x20found'), _0x38d055['end']();
                    else {
                        var _0x53a99b = _0x38d055['seq']['fetch'](_0x3652b5, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x53a99b['on']('message', function (_0x5bc0e7, _0x1f1f23) {
                            var _0x4f94c9 = '(#' + _0x1f1f23 + ')\x20';
                            _0x5bc0e7['on']('body', function (_0x100e6f, _0x251f61) {
                                _0x535dc1(_0x100e6f, (_0x3d20e8, _0x100c45) => {
                                    if (_0x100c45['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x100c45['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x100c45['text']['split']('[')[0x2];
                                        var _0x2c2700 = mes['split'](']')[0x0];
                                        _0x2b7f2c['push'](_0x2c2700);
                                    }
                                });
                            }), _0x5bc0e7['once']('end', function () {
                            });
                        }), _0x53a99b['once']('error', function (_0x3dacee) {
                            console['log']('Fetch\x20error:\x20' + _0x3dacee);
                        }), _0x53a99b['once']('end', function () {
                            _0x38d055['end']();
                        });
                    }
                });
            });
        }), _0x38d055['once']('error', function (_0x9dcadf) {
            console['log'](_0x37c850['red'](_0x9dcadf['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x38d055['once']('end', async function () {
        }), _0x38d055['connect']();
    }
    try {
        _0x5d354e(), await _0x37e661(0xfa0), console['log']('Found\x20' + _0x2b7f2c['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37e661(0xfa0);
    }
    var _0x1331d4;
    _0x230bf5('' + _0xfcd5);
    var _0x2e8cef = _0x17600c[0x0]['split'](':'), _0x4f2776;
    try {
        _0x4f2776 = await _0x206049['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2e8cef[0x0] + ':' + _0x2e8cef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4f2776 = await _0x206049['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2e8cef[0x0] + ':' + _0x2e8cef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Getting\x20Session');
        const _0x37fc67 = await _0x4f2776['newPage']();
        await _0x37fc67['authenticate']({
            'username': '' + _0x2e8cef[0x2],
            'password': '' + _0x2e8cef[0x3]
        }), await _0x37fc67['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x37fc67, await _0x37fc67['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x37fc67['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Successfully\x20logged\x20in'), await _0x37e661(0x2710);
        } catch (_0x96dc63) {
            throw new Error('Login\x20session\x20expired\x20' + _0x96dc63);
        }
        for (var _0x19e0fd = 0x0; _0x19e0fd < _0x2b7f2c['length']; _0x19e0fd++) {
            console['log'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20:\x20Starting\x20Verification'), _0x230bf5(_0xfcd5 + '\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20/\x20' + _0x2b7f2c['length']);
            const _0x274aba = await _0x4f2776['newPage']();
            await _0x274aba['goto']('' + _0x2b7f2c[_0x19e0fd], { 'waitUntil': 'networkidle2' }), await _0x37e661(0xbb8);
            try {
                const _0x38db26 = await _0x274aba['$']('#challenge-heading');
                _0x38db26 && (console['log'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20:\x20' + _0x37c850['yellow']('2FA\x20Required')), await _0x274aba['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x37e661(0x9c40), await _0x274aba['waitForSelector']('#payment-submit-btn'), await _0x274aba['$eval']('#payment-submit-btn', _0x3fa33c => _0x3fa33c['click']()), await _0x274aba['click']('#payment-submit-btn');
                try {
                    await _0x274aba['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x37e661(0x5dc), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x165391) {
                    _0x23c386 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x165391['message']);
                } finally {
                    if (_0x23c386 == 'yes' && _0x3cf2ee != 0x2) {
                        console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0xfcd5['name'] + ']\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20:\x20Retrying\x20(' + _0x3cf2ee + '\x20/\x205)')), _0x19e0fd = _0x19e0fd - 0x1, _0x3cf2ee = _0x3cf2ee + 0x1;
                        continue;
                    }
                    _0x23c386 == 'yes' && _0x3cf2ee >= 0x2 && (_0x48023a(csv[_0x19e0fd], _0xfcd5), _0x23c386 = 'no', _0x3cf2ee = 0x0), await _0x274aba['close'](), await _0x37e661(0x4650);
                }
            } catch (_0xe3e21e) {
                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0xfcd5 + ']\x20Task\x20' + (_0x19e0fd + 0x1) + '\x20:\x20' + _0xe3e21e));
            }
        }
    } catch (_0x91cead) {
        console['log'](_0x37c850['red']('' + _0x91cead));
    } finally {
        await _0x4f2776['close']();
    }
}
const _0x113f2d = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x40e95f, _0x2dc95a, _0x1e7752) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1ee856 = 0x0; _0x1ee856 < _0x2dc95a['length']; _0x1ee856++) {
                        if (_0x454484 != 'yes')
                            var _0x454484 = '', _0x3557f8 = 0x0;
                        var _0x5076d3;
                        try {
                            await _0xbf3e86(_0x2dc95a, _0x1ee856);
                        } catch {
                            _0x454484 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x230bf5(_0x40e95f['name'] + '\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20/\x20' + _0x2dc95a['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        var _0x87c4af = [
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
                        ], _0x10da68 = Math['round'](Math['random']() * (_0x87c4af['length'] - 0x1));
                        _0x2dc95a[_0x1ee856]['Size'] == 'RANDOM' && (_0x2dc95a[_0x1ee856]['Size'] = _0x87c4af[_0x10da68]);
                        var _0x552894 = Math['round'](Math['random']() * (_0x1e7752['length'] - 0x1)), _0x59e7ec = _0x1e7752[_0x552894]['split'](':'), _0x407453;
                        try {
                            _0x407453 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59e7ec[0x0] + ':' + _0x59e7ec[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x407453 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59e7ec[0x0] + ':' + _0x59e7ec[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x5e39af = await _0x407453['newPage']();
                            await _0x5e39af['authenticate']({
                                'username': '' + _0x59e7ec[0x2],
                                'password': '' + _0x59e7ec[0x3]
                            }), await _0x5e39af['setRequestInterception'](!![]), _0x5e39af['on']('request', _0x42e45c => {
                                _0x42e45c['resourceType']() === 'image' || _0x42e45c['resourceType']() === 'font' || _0x42e45c['resourceType']() === 'media' ? _0x42e45c['abort']() : _0x42e45c['continue']();
                            }), await _0x5e39af['goto'](_0x2dc95a[_0x1ee856]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x5e39af['waitForSelector']('#accept-all-gdpr'), await _0x5e39af['click']('#accept-all-gdpr'), await _0x5e39af['waitForSelector']('#raffles-product'), await _0x37e661(0x3e8), await _0x5e39af['$eval']('#raffles-product', _0x1d758f => _0x1d758f['click']()), await _0x37e661(0x1388), await _0x5e39af['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x91897a = await _0x5e39af['$']('.fancybox-inner\x20>\x20iframe'), _0x9f1f2e = await _0x91897a['contentFrame']();
                            console['log'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x9f1f2e['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x37e661(0x1f4), await _0x9f1f2e['type']('input[name=\x22sm-form-email\x22]', _0x2dc95a[_0x1ee856]['Email']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-name\x22]', _0x2dc95a[_0x1ee856]['FirstName'] + '\x20' + _0x2dc95a[_0x1ee856]['LastName']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-street\x22]', _0x2dc95a[_0x1ee856]['Address1'] + '\x20' + _0x2dc95a[_0x1ee856]['HouseNumber'] + '\x20' + _0x2dc95a[_0x1ee856]['Address2']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-city\x22]', _0x2dc95a[_0x1ee856]['City']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-province\x22]', _0x2dc95a[_0x1ee856]['State']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-zip\x22]', _0x2dc95a[_0x1ee856]['Zip']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-country\x22]', _0x2dc95a[_0x1ee856]['Country']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-form-phone\x22]', _0x2dc95a[_0x1ee856]['Phone']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x2dc95a[_0x1ee856]['Follower']), await _0x37e661(0xc8), await _0x9f1f2e['type']('input[name=\x22sm-cst.size\x22]', _0x2dc95a[_0x1ee856]['Size']), await _0x37e661(0x1f4), await _0x9f1f2e['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x37e661(0x1f4), await _0x9f1f2e['click']('.icheckbox_simple-custom'), await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x9f1f2e['$eval']('form', _0x5b8c0a => _0x5b8c0a['submit']()), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x454484 = '';
                            var _0x1cab7a = await _0xb7405e(_0x2dc95a[_0x1ee856], _0x40e95f, 'dev', ![]), _0x4a7e0f = await _0xb7405e(_0x2dc95a[_0x1ee856], _0x40e95f, 'pub', ![]);
                            const _0x358c79 = {
                                'succesDEVMSG': { 'embeds': [_0x1cab7a] },
                                'succesPUBMSG': { 'embeds': [_0x4a7e0f] }
                            };
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x358c79['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x358c79['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x358c79['succesPUBMSG']);
                            } catch (_0x357c3e) {
                                console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x357c3e));
                            }
                        } catch (_0x22a86c) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20' + _0x22a86c)), _0x5076d3 = '' + _0x22a86c;
                            var _0x4a1edb = await _0xb7405e(_0x2dc95a[_0x1ee856], _0x40e95f, 'dev', !![], _0x5076d3), _0x1cab7a = await _0xb7405e(_0x2dc95a[_0x1ee856], _0x40e95f, 'dev', ![]), _0x4a7e0f = await _0xb7405e(_0x2dc95a[_0x1ee856], _0x40e95f, 'pub', ![]);
                            const _0x52a6c8 = {
                                'succesDEVMSG': { 'embeds': [_0x1cab7a] },
                                'succesPUBMSG': { 'embeds': [_0x4a7e0f] }
                            };
                            _0x52a6c8['errorDEV'] = { 'embeds': [_0x4a1edb] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x52a6c8['errorDEV']), await _0xb69523(_0x1a5beb, _0x52a6c8['errorDEV']), _0x22a86c != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x454484 = 'yes');
                        } finally {
                            _0x407453['close']();
                            if (_0x454484 == 'yes' && _0x3557f8 != 0x5 && _0x5076d3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Task\x20' + (_0x1ee856 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3557f8 + '\x20/\x205)\x20')), _0x1ee856 = _0x1ee856 - 0x1, _0x3557f8 = _0x3557f8 + 0x1;
                                continue;
                            }
                            _0x454484 == 'yes' && _0x3557f8 >= 0x5 && (_0x48023a(_0x2dc95a[_0x1ee856], _0x40e95f), _0x454484 = 'no', _0x3557f8 = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x40e95f['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x39ff26, _0x2741fe) {
                    var _0xe43a57 = [];
                    async function _0xd60eb9() {
                        var _0x45bc3d = new _0x9cc471({
                            'user': _0x56452b['masterMail'],
                            'password': _0x56452b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3d4535(_0x735fde) {
                            _0x45bc3d['openBox']('INBOX', ![], _0x735fde);
                        }
                        _0x45bc3d['once']('ready', function () {
                            _0x3d4535(function (_0x468fc4, _0x51c96b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x468fc4)
                                    throw _0x468fc4;
                                _0x45bc3d['seq']['search'](['UNSEEN'], function (_0x2a1947, _0x593d35) {
                                    if (!_0x593d35 || !_0x593d35['length'])
                                        console['log'](_0x3071a0() + '\x20[' + _0x39ff26['name'] + ']\x20No\x20mails\x20found'), _0x45bc3d['end']();
                                    else {
                                        var _0x1b9b77 = _0x45bc3d['seq']['fetch'](_0x593d35, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1b9b77['on']('message', function (_0x2afd13, _0x59d665) {
                                            var _0x2d6496 = '(#' + _0x59d665 + ')\x20';
                                            _0x2afd13['on']('body', function (_0xa4285, _0x37883d) {
                                                _0x535dc1(_0xa4285, (_0x5885ac, _0x20048b) => {
                                                    if (_0x20048b['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3c6ace = _0x20048b['html']['split']('\x0a');
                                                        for (var _0x48a77e = 0x0; _0x48a77e < _0x3c6ace['length']; _0x48a77e++) {
                                                            if (_0x3c6ace[_0x48a77e]['includes']('salesmanago') && _0x3c6ace[_0x48a77e]['includes']('<td') && _0x3c6ace[_0x48a77e]['includes']('href')) {
                                                                var _0x19b46b = _0x3c6ace[_0x48a77e]['split']('href=\x22'), _0x3f40de = _0x19b46b[0x1]['split']('\x22')[0x0];
                                                                _0xe43a57['push'](_0x3f40de);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x2afd13['once']('end', function () {
                                            });
                                        }), _0x1b9b77['once']('error', function (_0x6b7d3c) {
                                            console['log']('Fetch\x20error:\x20' + _0x6b7d3c);
                                        }), _0x1b9b77['once']('end', function () {
                                            _0x45bc3d['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x45bc3d['once']('error', function (_0x40cbd5) {
                            console['log'](_0x37c850['red'](_0x40cbd5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x45bc3d['once']('end', async function () {
                        }), _0x45bc3d['connect']();
                    }
                    async function _0x2fbe6b(_0x545c5b, _0x43cc19, _0x16ca7a) {
                        for (var _0x232445 = 0x0; _0x232445 < _0x43cc19['length']; _0x232445++) {
                            async function _0x2feff9(_0x212907, _0x458484, _0x45e71e, _0x4e4144, _0x2bbb68) {
                                var _0x57f091, _0x291fb1 = {}, _0x513b8d = [], _0x48d252 = {}, _0x37ac78 = [
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
                                ], _0x153156 = Math['round'](Math['random']() * (_0x37ac78['length'] - 0x1));
                                _0x4e4144[_0x212907]['Size'] == 'RANDOM' && (_0x4e4144[_0x212907]['Size'] = _0x37ac78[_0x153156]);
                                !_0x4e4144 && (_0x4e4144 = {});
                                if (_0x56452b['useRandomProxy'] = ![])
                                    var _0x420a66 = _0x2bbb68[_0x212907]['split'](':');
                                else
                                    var _0x41fbab = Math['round'](Math['random']() * (_0x2bbb68['length'] - 0x1)), _0x420a66 = _0x2bbb68[_0x41fbab]['split'](':');
                                var _0x309993 = {
                                    'jar': _0x39ed9e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x45e71e['url'],
                                    'headers': _0x45e71e['headers'],
                                    'body': JSON['stringify'](_0x291fb1),
                                    'proxy': 'http://' + _0x420a66[0x2] + ':' + _0x420a66[0x3] + '@' + _0x420a66[0x0] + ':' + _0x420a66[0x1]
                                };
                                return _0x458484 != 'ver' && (_0x309993['url'] = _0x45e71e['url'], _0x309993['headers'] = _0x45e71e['headers']), _0x458484 == 'ver' && (_0x309993['method'] = 'GET', _0x309993['url'] = _0x4e4144[_0x212907]), new Promise(function (_0x54a7d5, _0x82194a) {
                                    callback = async (_0x2a2b3a, _0x59625d, _0x1b39fc) => {
                                        if (!_0x2a2b3a && _0x59625d['statusCode'] == 0xca || !_0x2a2b3a && _0x59625d['statusCode'] == 0xc8) {
                                            if (_0x458484 != 'ver') {
                                                var _0x41c5cf = await _0xb7405e(_0x4e4144[_0x212907], _0x45e71e, 'dev', ![]), _0x5be4e3 = await _0xb7405e(_0x4e4144[_0x212907], _0x45e71e, 'pub', ![]);
                                                const _0x1be1d1 = {
                                                    'succesDEVMSG': { 'embeds': [_0x41c5cf] },
                                                    'succesPUBMSG': { 'embeds': [_0x5be4e3] }
                                                };
                                                if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                                    try {
                                                        await _0xb69523(_0x56452b['webhook'], _0x1be1d1['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x1be1d1['succesDEVMSG']), await _0x37e661(0xc8);
                                                try {
                                                    await _0xb69523(_0x460ce8, _0x1be1d1['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3324c5(_0x4e4144[_0x212907], _0x45e71e);
                                            }
                                            _0x54a7d5(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x45e71e['name'] + ']\x20Task\x20' + (_0x212907 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x458484 != 'ver') {
                                                var _0x429641 = '' + _0x2a2b3a, _0x15f1a0 = await _0xb7405e(_0x4e4144[_0x212907], _0x45e71e, 'dev', !![], _0x429641), _0x1ab917 = {};
                                                _0x1ab917['errorDEV'] = { 'embeds': [_0x15f1a0] }, _0x48023a(_0x4e4144[_0x212907], _0x45e71e), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x1ab917['errorDEV']), await _0xb69523(_0x1a5beb, _0x1ab917['errorDEV']);
                                            }
                                            _0x82194a(console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x45e71e['name'] + ']\x20Task\x20' + (_0x212907 + 0x1) + ':\x20' + _0x2a2b3a)));
                                        }
                                    };
                                    try {
                                        _0x458484 != 'ver' ? console['log'](_0x3071a0() + '\x20[' + _0x45e71e['name'] + ']\x20Task\x20' + (_0x212907 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x291fb1['data']['attributes']['email']) : console['log'](_0x3071a0() + '\x20[' + _0x45e71e['name'] + ']\x20Task\x20' + (_0x212907 + 0x1) + ':\x20Fetching\x20Response'), _0x808e24(_0x309993, callback);
                                    } catch (_0xd49361) {
                                        console['log'](_0x3071a0() + '\x20Task\x20' + (_0x212907 + 0x1) + ':\x20' + _0xd49361);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2feff9(_0x232445, 'ver', _0x545c5b, _0x43cc19, _0x16ca7a), console['log'](_0x3071a0() + '\x20[' + _0x545c5b['name'] + ']\x20Sleeping\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                            } catch (_0x3f4763) {
                            }
                        }
                    }
                    try {
                        _0xd60eb9(), await _0x37e661(0xfa0), console['log']('Found\x20' + _0xe43a57['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2fbe6b(_0x39ff26, _0xe43a57, _0x2741fe);
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
            'function': async function (_0x195002, _0x297a5a, _0x29c362) {
                for (var _0x5288c6 = 0x0; _0x5288c6 < _0x297a5a['length']; _0x5288c6++) {
                    _0x56452b['AfewDelay'] = _0x56452b['delay'];
                    var _0x26a234;
                    if (_0x284195 != 'yes')
                        var _0x284195 = '', _0xbe42a = 0x0;
                    var _0x14eb0c = _0x297a5a[_0x5288c6]['Url'];
                    _0x230bf5(_0x195002['name'] + '\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20/\x20' + _0x297a5a['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                    try {
                        await _0xbf3e86(_0x297a5a, _0x5288c6);
                    } catch {
                        _0x284195 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4026f4(_0x5153ef) {
                        const _0x17b125 = _0x46e118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x139a59 = _0x27034d['parse'](_0x17b125, { 'header': !![] })['data'];
                        let _0x170fcc = ![];
                        for (var _0x2caaa2 of _0x139a59) {
                            if (_0x2caaa2['Url'] == _0x5153ef['Url'] && _0x2caaa2['Email'] == _0x5153ef['Email']) {
                                _0x170fcc = !![];
                                break;
                            }
                        }
                        return _0x170fcc;
                    }
                    if (await _0x4026f4(_0x297a5a[_0x5288c6]) == !![]) {
                        console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x387af0 = await _0xb7405e(_0x297a5a[_0x5288c6], _0x195002, 'dev', ![]), _0x6d494f = await _0xb7405e(_0x297a5a[_0x5288c6], _0x195002, 'pub', ![]);
                    const _0x3a339b = {
                        'succesDEVMSG': { 'embeds': [_0x387af0] },
                        'succesPUBMSG': { 'embeds': [_0x6d494f] }
                    };
                    if (_0x297a5a[_0x5288c6]['Email'] == '' || _0x297a5a[_0x5288c6]['FirstName'] == '' || _0x297a5a[_0x5288c6]['LastName'] == '' || _0x297a5a[_0x5288c6]['Country'] == '' || _0x297a5a[_0x5288c6]['Size'] == '' || _0x297a5a[_0x5288c6]['Address1'] == '' || _0x297a5a[_0x5288c6]['Zip'] == '') {
                        console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x56452b['useRandomProxy'] = ![])
                        var _0x458627 = _0x29c362[_0x5288c6]['split'](':');
                    else
                        var _0x1a591d = Math['round'](Math['random']() * (_0x29c362['length'] - 0x1)), _0x458627 = _0x29c362[_0x1a591d]['split'](':');
                    var _0x362962;
                    try {
                        _0x362962 = await _0x206049['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x458627[0x0] + ':' + _0x458627[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x362962 = await _0x206049['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x458627[0x0] + ':' + _0x458627[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x49f531 = JSON['parse'](_0x46e118['readFileSync']('sizes.json', 'utf-8')), _0x14eb0c = _0x297a5a[_0x5288c6]['Url'], _0x3ec457 = _0x297a5a[_0x5288c6]['Size'], _0xfa20e8;
                        async function _0x5da700() {
                            var _0x3e9080 = new _0x194db0['CookieJar']();
                            console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5583e5;
                            let _0x5d9635 = {
                                'method': 'GET',
                                'cookieJar': _0x3e9080,
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
                                'proxy': 'http://' + _0x458627[0x2] + ':' + _0x458627[0x3] + '@' + _0x458627[0x0] + ':' + _0x458627[0x1]
                            }, _0xf28833 = _0x14eb0c['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x37774b = _0xf28833 + '.json', _0x140ab5 = await _0x5e5254(_0x37774b);
                            console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x5b0acb = _0x140ab5['data']['product']['variants'];
                            if (_0x3ec457 != 'RANDOM') {
                                if (_0x5b0acb[0x1]['option1']['includes']('W')) {
                                    const _0x44f9b4 = _0x49f531['women']['find'](_0x16f1f7 => _0x16f1f7['EUsize'] === _0x3ec457);
                                    _0x44f9b4 && (_0x3ec457 = _0x44f9b4['size']);
                                } else {
                                    if (_0x5b0acb[0x1]['option1']['includes']('Y')) {
                                        const _0x5944fb = _0x49f531['GS']['find'](_0x2bb902 => _0x2bb902['EUsize'] === _0x3ec457);
                                        _0x5944fb && (_0x3ec457 = _0x5944fb['size']);
                                    } else {
                                        const _0xa4d4ac = _0x49f531['men']['find'](_0x4c9a59 => _0x4c9a59['EUsize'] === _0x3ec457);
                                        _0xa4d4ac && (_0x3ec457 = _0xa4d4ac['size']);
                                    }
                                }
                                for (var _0x14dc70 of _0x5b0acb) {
                                    _0x14dc70['option1'] == _0x3ec457 && (_0x5583e5 = _0x14dc70['id']);
                                }
                            } else {
                                var _0x50f644 = Math['round'](Math['random']() * (_0x5b0acb['length'] - 0x1));
                                _0x5583e5 = _0x5b0acb[_0x50f644]['id'];
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x5e5254('https://raffles.afew-store.com/cart/' + _0x5583e5 + ':1'), _0xfa20e8 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5da700();
                        } catch (_0x396f03) {
                            if (_0x396f03['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x396f03);
                        }
                        const _0x203998 = await _0x362962['newPage']();
                        await _0x203998['setDefaultNavigationTimeout'](0x1d4c0), await _0x203998['authenticate']({
                            'username': '' + _0x458627[0x2],
                            'password': '' + _0x458627[0x3]
                        }), await _0x203998['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x203998['setRequestInterception'](!![]), _0x203998['on']('request', _0xeffe => {
                            _0xeffe['resourceType']() === 'image' || _0xeffe['resourceType']() === 'font' || _0xeffe['resourceType']() === 'media' ? _0xeffe['abort']() : _0xeffe['continue']();
                        });
                        try {
                            await _0x203998['goto'](_0xfa20e8, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x203998['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x203998['type']('#checkout_email', '' + _0x297a5a[_0x5288c6]['Email']), await _0x37e661(0x320), await _0x203998['type']('#checkout_attributes_instagram', '' + _0x297a5a[_0x5288c6]['Follower']), await _0x37e661(0x320), await _0x203998['select']('#checkout_shipping_address_country', '' + _0x297a5a[_0x5288c6]['Country']), await _0x203998['waitForTimeout'](0x258), await _0x203998['type']('#checkout_shipping_address_first_name', '' + _0x297a5a[_0x5288c6]['FirstName']), await _0x203998['waitForTimeout'](0x320), await _0x203998['type']('#checkout_shipping_address_last_name', '' + _0x297a5a[_0x5288c6]['LastName']), await _0x203998['waitForTimeout'](0x2bc), await _0x203998['type']('#checkout_shipping_address_address1', _0x297a5a[_0x5288c6]['Address1'] + '\x20' + _0x297a5a[_0x5288c6]['HouseNumber']), await _0x203998['waitForTimeout'](0x2bc), await _0x203998['type']('#checkout_shipping_address_address2', '' + _0x297a5a[_0x5288c6]['Address2']), await _0x203998['waitForTimeout'](0x2bc), await _0x203998['type']('#checkout_shipping_address_zip', '' + _0x297a5a[_0x5288c6]['Zip']), await _0x203998['waitForTimeout'](0x2bc), await _0x203998['type']('#checkout_shipping_address_city', '' + _0x297a5a[_0x5288c6]['City']), await _0x203998['waitForTimeout'](0x2bc);
                        if (_0x297a5a[_0x5288c6]['State'] != '')
                            try {
                                const _0x3fbfa1 = JSON['parse'](_0x46e118['readFileSync']('States.json', 'utf8'));
                                await _0x37e661(0x1f4);
                                if (_0x297a5a[_0x5288c6]['State']['length'] > 0x2)
                                    for (let _0x13efca of _0x3fbfa1) {
                                        if (_0x13efca['Province'] == _0x297a5a[_0x5288c6]['State']) {
                                            await _0x203998['select']('#checkout_shipping_address_province', _0x13efca['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x203998['select']('#checkout_shipping_address_province', _0x297a5a[_0x5288c6]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x37e661(0x190), _0x203998['evaluate'](() => {
                            const _0x5b066f = document['querySelector']('#continue_button');
                            for (var _0x41558a = 0x0; _0x41558a < 0x5; _0x41558a++) {
                                if (_0x5b066f) {
                                    _0x5b066f['click'](), _0x5b066f['click']();
                                    break;
                                } else
                                    _0x37e661(0xfa0);
                            }
                        }), await _0x203998['waitForTimeout'](0x9c4);
                        try {
                            await _0x203998['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x203998['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x37b4b2 => _0x37b4b2['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x203998['waitForTimeout'](0x7d0), console['log'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x203998['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x37e661(0x3e8), await _0x203998['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3ff604 => _0x3ff604['submit']()), await _0x37e661(0x3e8);
                        try {
                            await _0x203998['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x203998['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0xa8701 => _0xa8701['submit']());
                        try {
                            await _0x203998['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x284195 = 'no', _0x3324c5(_0x297a5a[_0x5288c6], _0x195002), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                try {
                                    await _0xb69523(_0x56452b['webhook'], _0x3a339b['succesDEVMSG']);
                                } catch {
                                }
                            await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x3a339b['succesDEVMSG']), await _0x37e661(0xc8);
                            try {
                                await _0xb69523(_0x460ce8, _0x3a339b['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x316d68) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x4bfd04) {
                        _0x4bfd04['message']['includes']('selector') && (_0x4bfd04 = 'Connection\x20Error');
                        console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20' + _0x4bfd04)), _0x26a234 = '' + _0x4bfd04;
                        var _0xc0c147 = await _0xb7405e(_0x297a5a[_0x5288c6], _0x195002, 'dev', !![], _0x26a234);
                        _0x3a339b['errorDEV'] = { 'embeds': [_0xc0c147] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3a339b['errorDEV']), await _0xb69523(_0x1a5beb, _0x3a339b['errorDEV']), _0x284195 = 'yes';
                    } finally {
                        _0x362962 && _0x362962['close']();
                        if (_0x284195 == 'yes' && _0xbe42a != 0x5 && _0x26a234 != 'Size\x20Not\x20Found') {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x195002['name'] + ']\x20Task\x20' + (_0x5288c6 + 0x1) + '\x20:\x20Retrying\x20(' + _0xbe42a + '\x20/\x205)')), _0x5288c6 = _0x5288c6 - 0x1, _0xbe42a = _0xbe42a + 0x1;
                            continue;
                        }
                        _0x284195 == 'yes' && _0xbe42a >= 0x5 && (_0x48023a(_0x297a5a[_0x5288c6], _0x195002), _0x284195 = 'no', _0xbe42a = 0x0);
                        if (_0x5288c6 + 0x1 == _0x297a5a['length']) {
                            await _0x37e661(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x56452b['AfewDelay'] + '\x20ms'), await _0x37e661(_0x56452b['AfewDelay']);
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
                'function': async function (_0x5ad241, _0xaa108d, _0x329959) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2b77f2 = 0x0; _0x2b77f2 < _0xaa108d['length']; _0x2b77f2++) {
                        if (_0x1c5866 != 'yes')
                            var _0x1c5866 = '', _0x22179f = 0x0;
                        var _0x3a8d3e;
                        try {
                            await _0xbf3e86(_0xaa108d, _0x2b77f2);
                        } catch {
                            _0x1c5866 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x230bf5(_0x5ad241['name'] + '\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20/\x20' + _0xaa108d['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        var _0x1aa9cf = await _0xb7405e(_0xaa108d[_0x2b77f2], _0x5ad241, 'acc', ![]);
                        const _0xdd13f3 = { 'succesDEVMSG': { 'embeds': [_0x1aa9cf] } }, _0x452e97 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x1823d1 = Math['round'](Math['random']() * (_0x329959['length'] - 0x1)), _0x45f30f = _0x329959[_0x1823d1]['split'](':'), _0x576977;
                        try {
                            _0x576977 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x45f30f[0x0] + ':' + _0x45f30f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x576977 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x45f30f[0x0] + ':' + _0x45f30f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4413e7 = await _0x576977['newPage']();
                            await _0x4413e7['authenticate']({
                                'username': '' + _0x45f30f[0x2],
                                'password': '' + _0x45f30f[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4413e7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4413e7['setRequestInterception'](!![]), _0x4413e7['on']('request', _0x580983 => {
                                _0x580983['resourceType']() === 'image' ? _0x580983['abort']() : _0x580983['continue']();
                            });
                            try {
                                await _0x4413e7['goto']('' + _0x452e97), await _0x4413e7['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x1c5866 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x4413e7['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x37e661(0x7d0), console['log'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x37e661(0x190), await _0x4413e7['waitForSelector']('#firstname'), await _0x4413e7['type']('#firstname', _0xaa108d[_0x2b77f2]['FirstName'], { 'delay': 0xf0 }), await _0x37e661(0x190), await _0x4413e7['type']('#lastname', _0xaa108d[_0x2b77f2]['LastName'], { 'delay': 0xe6 }), await _0x37e661(0x190), await _0x4413e7['type']('#email_address', _0xaa108d[_0x2b77f2]['Email'], { 'delay': 0x122 }), await _0x37e661(0x190), await _0x4413e7['type']('#password', _0xaa108d[_0x2b77f2]['Password'], { 'delay': 0x82 }), await _0x37e661(0x1f4), await _0x4413e7['type']('#password-confirmation', _0xaa108d[_0x2b77f2]['Password'], { 'delay': 0x7c }), console['log'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x37e661(0x2bc), await _0x4413e7['$eval']('#form-validate', _0x229188 => _0x229188['submit']()), await _0x37e661(0x1388);
                            const _0x4b85cb = await _0x4413e7['$']('#email_address-error');
                            if (_0x4b85cb)
                                throw new Error('Invalid\x20Email');
                            const _0x1f2b09 = await _0x4413e7['$']('#password-error');
                            if (_0x1f2b09)
                                throw new Error('Invalid\x20Password');
                            await _0x4413e7['waitForSelector']('div.mesg-success'), _0x1c5866 = 'no', console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Account\x20' + _0xaa108d[_0x2b77f2]['Email'] + '\x20Generated')), _0x46e118['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0xaa108d[_0x2b77f2]['Email'] + ',' + _0xaa108d[_0x2b77f2]['Password']);
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0xdd13f3['succesDEVMSG']);
                            } catch {
                            }
                            await _0xb69523(_0x17b64, _0xdd13f3['succesDEVMSG']), console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0xc26819) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20' + _0xc26819)), _0x3a8d3e = '' + _0xc26819;
                            var _0x3d8961 = await _0xb7405e(_0xaa108d[_0x2b77f2], _0x5ad241, 'acc', !![], _0x3a8d3e);
                            _0xdd13f3['errorDEV'] = { 'embeds': [_0x3d8961] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0xdd13f3['errorDEV']), await _0xb69523(_0x1a5beb, _0xdd13f3['errorDEV']), _0x1c5866 = 'yes';
                        } finally {
                            if (_0x576977)
                                _0x576977['close']();
                            if (_0x1c5866 == 'yes' && _0x22179f != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Task\x20' + (_0x2b77f2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x22179f + '\x20/\x205)')), _0x2b77f2 = _0x2b77f2 - 0x1, _0x22179f = _0x22179f + 0x1;
                                continue;
                            }
                            _0x1c5866 == 'yes' && _0x22179f >= 0x5 && (_0x48023a(_0xaa108d[_0x2b77f2], _0x5ad241), _0x1c5866 = 'no', _0x22179f = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x5ad241['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x589e7a, _0x3fb548) {
                    var _0x3ceef5 = ![], _0x5f5710 = [];
                    async function _0x3b6472() {
                        var _0x2707bd = new _0x9cc471({
                            'user': _0x56452b['masterMail'],
                            'password': _0x56452b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x42c960(_0x1bd11a) {
                            _0x2707bd['openBox']('INBOX', ![], _0x1bd11a);
                        }
                        _0x2707bd['once']('ready', function () {
                            _0x42c960(function (_0x162c9a, _0x3e4f4a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x162c9a)
                                    throw _0x162c9a;
                                _0x2707bd['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x45c015, _0x52fce6) {
                                    if (!_0x52fce6 || !_0x52fce6['length'])
                                        console['log'](_0x3071a0() + '\x20[' + _0x589e7a['name'] + ']\x20No\x20mails\x20found'), _0x2707bd['end']();
                                    else {
                                        var _0x3b225f = _0x2707bd['seq']['fetch'](_0x52fce6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3b225f['on']('message', function (_0x337420, _0x3efc7d) {
                                            var _0x19505d = '(#' + _0x3efc7d + ')\x20';
                                            _0x337420['on']('body', function (_0xe7d22f, _0x31aabf) {
                                                _0x535dc1(_0xe7d22f, (_0x3c8b30, _0x25c036) => {
                                                    var _0x4bca7a = _0x25c036['text']['split']('[')[0x2], _0x57230c = _0x4bca7a['split'](']')[0x0];
                                                    _0x5f5710['push'](_0x57230c);
                                                });
                                            }), _0x337420['once']('end', function () {
                                            });
                                        }), _0x3b225f['once']('error', function (_0x3bf738) {
                                            console['log']('Fetch\x20error:\x20' + _0x3bf738), _0x3ceef5 = !![];
                                        }), _0x3b225f['once']('end', function () {
                                            _0x2707bd['end'](), _0x3ceef5 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2707bd['once']('error', function (_0xbcf770) {
                            console['log'](_0x37c850['red'](_0xbcf770['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3ceef5 = !![];
                        }), _0x2707bd['once']('end', async function () {
                            _0x3ceef5 = !![];
                        }), _0x2707bd['connect']();
                    }
                    async function _0x99d822(_0x49510b, _0x2ac601, _0x5d0b0f) {
                        _0x206049['use'](_0x4a0e3c());
                        for (var _0x551877 = 0x0; _0x551877 < _0x2ac601['length']; _0x551877++) {
                            if (_0x3fadeb != 'yes')
                                var _0x3fadeb = '', _0xd3f3b2 = 0x0;
                            var _0xe5b3c3 = Math['round'](Math['random']() * (_0x5d0b0f['length'] - 0x1)), _0x303d96 = _0x5d0b0f[_0xe5b3c3]['split'](':'), _0x3cdbd3;
                            try {
                                _0x3cdbd3 = await _0x206049['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x303d96[0x0] + ':' + _0x303d96[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3cdbd3 = await _0x206049['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x303d96[0x0] + ':' + _0x303d96[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3f8db9 = await _0x3cdbd3['newPage']();
                                await _0x3f8db9['authenticate']({
                                    'username': '' + _0x303d96[0x2],
                                    'password': '' + _0x303d96[0x3]
                                }), console['log'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3f8db9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3f8db9['setRequestInterception'](!![]), _0x3f8db9['on']('request', _0x48a601 => {
                                    _0x48a601['resourceType']() === 'image' || _0x48a601['resourceType']() === 'font' || _0x48a601['resourceType']() === 'media' ? _0x48a601['abort']() : _0x48a601['continue']();
                                }), console['log'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x3f8db9['goto'](_0x2ac601[_0x551877]);
                                } catch {
                                    _0x3fadeb = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3f8db9['waitForTimeout'](0xbb8);
                                try {
                                    await _0x3f8db9['waitForSelector']('.account-nav'), _0x3fadeb = 'no', console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x49cfb1 = await _0xb7405e(null, _0x49510b, 'ver', ![]);
                                    const _0x57bb83 = { 'succesDEVMSG': { 'embeds': [_0x49cfb1] } };
                                    await _0xb69523(_0x259bff, _0x57bb83['succesDEVMSG']);
                                } catch {
                                    _0x3fadeb = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x557034) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20' + _0x557034));
                                var _0x1e73c0 = _0x557034, _0x4d022c = await _0xb7405e(null, _0x49510b, 'ver', !![], _0x1e73c0);
                                const _0x53b9ac = { 'errorDEVMSG': { 'embeds': [_0x4d022c] } };
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x53b9ac['errorDEVMSG']), await _0xb69523(_0x1a5beb, _0x53b9ac['errorDEVMSG']);
                            } finally {
                                _0x3cdbd3['close']();
                                if (_0x3fadeb == 'yes' && _0xd3f3b2 != 0x5) {
                                    console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Task\x20' + (_0x551877 + 0x1) + '\x20:\x20Retrying\x20(' + _0xd3f3b2 + '\x20/\x205)')), _0x551877 = _0x551877 - 0x1, _0xd3f3b2 = _0xd3f3b2 + 0x1;
                                    continue;
                                }
                                _0x3fadeb == 'yes' && _0xd3f3b2 >= 0x5 && (_0x3fadeb = 'no', _0xd3f3b2 = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x49510b['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                            }
                        }
                    }
                    try {
                        _0x3b6472();
                        while (!_0x3ceef5) {
                            await _0x37e661(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5f5710['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37e661(0x7d0);
                    }
                    await _0x99d822(_0x589e7a, _0x5f5710, _0x3fb548);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1a6e8e, _0x1311ca, _0x20815c) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4e7828 = 0x0; _0x4e7828 < _0x1311ca['length']; _0x4e7828++) {
                        var _0x3712bb;
                        try {
                            await _0xbf3e86(_0x1311ca, _0x4e7828);
                        } catch {
                            _0x427cf8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x41123c(_0xf0905e) {
                            const _0x2cff84 = _0x46e118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3775af = _0x27034d['parse'](_0x2cff84, { 'header': !![] })['data'];
                            let _0x47eab9 = ![];
                            for (var _0x6fc72a of _0x3775af) {
                                if (_0x6fc72a['Url'] == _0xf0905e['Url'] && _0x6fc72a['Email'] == _0xf0905e['Email']) {
                                    _0x47eab9 = !![];
                                    break;
                                }
                            }
                            return _0x47eab9;
                        }
                        if (await _0x41123c(_0x1311ca[_0x4e7828]) == !![]) {
                            console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x427cf8 != 'yes')
                            var _0x427cf8 = '', _0x25efac = 0x0;
                        _0x230bf5(_0x1a6e8e['name'] + '\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20/\x20' + _0x1311ca['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        var _0x22dd36 = Math['round'](Math['random']() * (_0x20815c['length'] - 0x1)), _0x3501c5 = _0x20815c[_0x22dd36]['split'](':'), _0x4fd283;
                        try {
                            _0x4fd283 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3501c5[0x0] + ':' + _0x3501c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4fd283 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3501c5[0x0] + ':' + _0x3501c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x28d372 = await _0x4fd283['newPage'](), _0x33a217 = await _0x28d372['target']()['createCDPSession'](), { windowId: _0x26de70 } = await _0x33a217['send']('Browser.getWindowForTarget');
                            await _0x28d372['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0xd84342 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x28d372['authenticate']({
                                'username': '' + _0x3501c5[0x2],
                                'password': '' + _0x3501c5[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28d372['goto']('' + _0x1311ca[_0x4e7828]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x28d372['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x33a217['send']('Browser.setWindowBounds', {
                                'windowId': _0x26de70,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x37e661(0x1388), await _0x28d372['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x28d372['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Logging\x20in'), await _0x28d372['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x997669 => _0x997669['click']()), await _0x28d372['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x28d372['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x37e661(0x7d0), await _0x28d372['waitForSelector']('#email-login'), await _0x28d372['type']('#email-login', '' + _0x1311ca[_0x4e7828]['Email']), await _0x37e661(0xdac), await _0x28d372['waitForSelector']('#password'), await _0x28d372['type']('#password', '' + _0x1311ca[_0x4e7828]['Password'], { 'delay': 0xe6 }), await _0x37e661(0x157c);
                            try {
                                await _0x28d372['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x5c0518 => _0x5c0518['click']());
                            } catch {
                            }
                            try {
                                await _0x28d372['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x43befd) {
                            }
                            await _0x37e661(0x3e8);
                            const _0x59a87d = await _0x28d372['$']('.enteredDraw_container__2KmQ_');
                            if (_0x59a87d)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1311ca[_0x4e7828]['Size']);
                            try {
                                if (_0x1311ca[_0x4e7828]['Size'] != 'RANDOM') {
                                    var _0x4ede18 = _0x1311ca[_0x4e7828]['Size']['replace']('.', ',');
                                    const _0x33d384 = await _0x28d372['$x']('//div[contains(text(),\x20' + _0x4ede18 + ')]');
                                    await _0x33d384[0x0]['click']();
                                } else {
                                    const _0x597789 = await _0x28d372['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x46d040 = Math['round'](Math['random']() * (_0x597789['length'] - 0x1));
                                    await _0x597789[_0x46d040]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x37e661(0x1f4);
                            const _0x28b519 = await _0x28d372['$']('.addressList_addressItem__LE2PB');
                            if (_0x28b519 && _0x1311ca[_0x4e7828]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x28d372['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x37e661(0x5dc), await _0x28d372['waitForSelector']('#firstname'), await _0x28d372['type']('#firstname', '' + _0x1311ca[_0x4e7828]['FirstName']), await _0x37e661(0x1f4), await _0x28d372['waitForSelector']('#firstname'), await _0x28d372['type']('#lastname', '' + _0x1311ca[_0x4e7828]['LastName']), await _0x37e661(0x1f4), await _0x28d372['waitForSelector']('#firstname'), await _0x28d372['type']('#street', '' + _0x1311ca[_0x4e7828]['Address1']), await _0x37e661(0x1f4), await _0x28d372['waitForSelector']('#firstname'), await _0x28d372['type']('#houseNumber', _0x1311ca[_0x4e7828]['HouseNumber'] + '\x20' + _0x1311ca[_0x4e7828]['Address2']), await _0x37e661(0x1f4), await _0x28d372['waitForSelector']('#firstname'), await _0x28d372['select']('#country_code', '' + _0x1311ca[_0x4e7828]['Country']), await _0x37e661(0x1f4), await _0x28d372['type']('#postcode', '' + _0x1311ca[_0x4e7828]['Zip']), await _0x37e661(0x1f4), await _0x28d372['type']('#city', '' + _0x1311ca[_0x4e7828]['City']), await _0x37e661(0x1f4), await _0x28d372['type']('#telephone', '' + _0x1311ca[_0x4e7828]['Phone']), await _0x37e661(0x1f4), await _0x28d372['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x37e661(0x9c4);
                            try {
                                await _0x28d372['type']('#instagram_name', '' + _0x1311ca[_0x4e7828]['Follower']), await _0x28d372['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x37e661(0x5dc);
                            try {
                                await _0x28d372['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x37e661(0x5dc), await _0x28d372['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x58ac52 => _0x58ac52['click']()), await _0x37e661(0x1388);
                            try {
                                await _0x28d372['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x28d372['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1311ca[_0x4e7828]['Size'] != 'RANDOM') {
                                    var _0x4ede18 = _0x1311ca[_0x4e7828]['Size']['replace']('.', ',');
                                    const _0x26652a = await _0x28d372['$x']('//div[contains(text(),\x20' + _0x4ede18 + ')]');
                                    await _0x26652a[0x0]['click']();
                                } else {
                                    const _0x3b63cf = await _0x28d372['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x46d040 = Math['round'](Math['random']() * (_0x3b63cf['length'] - 0x1));
                                    await _0x3b63cf[_0x46d040]['click']();
                                }
                                await _0x37e661(0x5dc);
                                try {
                                    await _0x28d372['hover']('#instagram_name'), await _0x28d372['type']('#instagram_name', '' + _0x1311ca[_0x4e7828]['Follower']), await _0x28d372['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Retrying\x20(' + _0x25efac + '\x20/\x205)');
                                try {
                                    await _0x28d372['hover']('.checkBox_boxHolder__wLGVe'), await _0x37e661(0x5dc), await _0x28d372['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x37e661(0x157c), await _0x28d372['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1b300f => _0x1b300f['click']()), await _0x37e661(0x1388), await _0x28d372['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x427cf8 = 'no', _0x3324c5(_0x1311ca[_0x4e7828], _0x1a6e8e), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x2b06de = await _0xb7405e(_0x1311ca[_0x4e7828], _0x1a6e8e, 'dev', ![]), _0x34816b = await _0xb7405e(_0x1311ca[_0x4e7828], _0x1a6e8e, 'pub', ![]);
                            const _0x8c38d6 = {
                                'succesDEVMSG': { 'embeds': [_0x2b06de] },
                                'succesPUBMSG': { 'embeds': [_0x34816b] }
                            };
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x8c38d6['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x8c38d6['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x8c38d6['succesPUBMSG']);
                            } catch (_0x4a8669) {
                                console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4a8669));
                            }
                        } catch (_0x38afc1) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20' + _0x38afc1)), _0x427cf8 = 'yes', _0x3712bb = '' + _0x38afc1;
                            var _0x3675ef = await _0xb7405e(_0x1311ca[_0x4e7828], _0x1a6e8e, 'dev', !![], _0x3712bb), _0x2b06de = await _0xb7405e(_0x1311ca[_0x4e7828], _0x1a6e8e, 'dev', ![]), _0x34816b = await _0xb7405e(_0x1311ca[_0x4e7828], _0x1a6e8e, 'pub', ![]);
                            const _0x4d134a = {
                                'succesDEVMSG': { 'embeds': [_0x2b06de] },
                                'succesPUBMSG': { 'embeds': [_0x34816b] }
                            };
                            _0x4d134a['errorDEV'] = { 'embeds': [_0x3675ef] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x4d134a['errorDEV']), await _0xb69523(_0x1a5beb, _0x4d134a['errorDEV']);
                        } finally {
                            _0x4fd283['close']();
                            if (_0x427cf8 == 'yes' && _0x25efac != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Task\x20' + (_0x4e7828 + 0x1) + '\x20:\x20Retrying\x20(' + _0x25efac + '\x20/\x205)')), _0x4e7828 = _0x4e7828 - 0x1, _0x25efac = _0x25efac + 0x1;
                                continue;
                            }
                            _0x427cf8 == 'yes' && _0x25efac >= 0x5 && (_0x48023a(_0x1311ca[_0x4e7828], _0x1a6e8e), _0x427cf8 = 'no', _0x25efac = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x1a6e8e['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
            'function': async function (_0x3db17b, _0x4e02da, _0xad3bb7) {
                _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x56452b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1f5099 = 0x0; _0x1f5099 < _0x4e02da['length']; _0x1f5099++) {
                    var _0x2ebaac;
                    _0x230bf5(_0x3db17b['name'] + '\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20/\x20' + _0x4e02da['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                    try {
                        await _0xbf3e86(_0x4e02da, _0x1f5099);
                    } catch {
                        _0x53c465 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x49237c(_0x3c7781) {
                        const _0x1736f1 = _0x46e118['readFileSync']('../successful-tasks.csv', 'utf8'), _0x29e7f3 = _0x27034d['parse'](_0x1736f1, { 'header': !![] })['data'];
                        let _0x440f18 = ![];
                        for (var _0x5b3ed1 of _0x29e7f3) {
                            if (_0x5b3ed1['Url'] == _0x3c7781['Url'] && _0x5b3ed1['Email'] == _0x3c7781['Email']) {
                                _0x440f18 = !![];
                                break;
                            }
                        }
                        return _0x440f18;
                    }
                    if (await _0x49237c(_0x4e02da[_0x1f5099]) == !![]) {
                        console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2cdbee = ![];
                    const _0x1bc36e = _0x46e118['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x36af08 = _0x27034d['parse'](_0x1bc36e, { 'header': !![] })['data'];
                    for (var _0x409d12 of _0x36af08) {
                        _0x409d12['Email'] == _0x4e02da[_0x1f5099]['Email'] && (_0x2cdbee = !![]);
                    }
                    if (_0x2cdbee == ![]) {
                        var _0x28a1ab;
                        if (_0x4e02da[_0x1f5099]['Url']['endsWith']('/')) {
                            _0x28a1ab = _0x4e02da[_0x1f5099]['Url'] + 'register';
                            if (_0x53c465 != 'yes')
                                var _0x53c465 = '', _0xdafd42 = 0x0;
                        } else {
                            _0x28a1ab = _0x4e02da[_0x1f5099]['Url'] + '/register';
                            if (_0x53c465 != 'yes')
                                var _0x53c465 = '', _0xdafd42 = 0x0;
                        }
                        if (_0x4e02da[_0x1f5099]['Email'] == '' || _0x4e02da[_0x1f5099]['FirstName'] == '' || _0x4e02da[_0x1f5099]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4e02da[_0x1f5099]['Password'] == '' && (_0x4e02da[_0x1f5099]['Password'] = 'JRaffles23!');
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x1f9d11 = _0xad3bb7[_0x1f5099]['split'](':');
                        else
                            var _0x35878c = Math['round'](Math['random']() * (_0xad3bb7['length'] - 0x1)), _0x1f9d11 = _0xad3bb7[_0x35878c]['split'](':');
                        var _0x505fd2;
                        try {
                            _0x505fd2 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f9d11[0x0] + ':' + _0x1f9d11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x505fd2 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f9d11[0x0] + ':' + _0x1f9d11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x40db7c = await _0x505fd2['newPage']();
                            await _0x40db7c['authenticate']({
                                'username': '' + _0x1f9d11[0x2],
                                'password': '' + _0x1f9d11[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40db7c['setRequestInterception'](!![]), _0x40db7c['on']('request', _0x229dac => {
                                _0x229dac['resourceType']() === 'image' || _0x229dac['resourceType']() === 'font' || _0x229dac['resourceType']() === 'media' ? _0x229dac['abort']() : _0x229dac['continue']();
                            });
                            try {
                                await _0x40db7c['goto'](_0x28a1ab);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x37e661(0x3e8), await _0x40db7c['waitForSelector']('#email'), await _0x40db7c['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x37e661(0x3e8);
                            try {
                                await _0x40db7c['click']('li[data-value=\x22EU\x20' + _0x4e02da[_0x1f5099]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x4e02da[_0x1f5099]['Size']);
                            }
                            await _0x37e661(0x6a4), await _0x40db7c['type']('#email', '' + _0x4e02da[_0x1f5099]['Email']), await _0x37e661(0x352), await _0x40db7c['waitForSelector']('#password'), await _0x40db7c['type']('#password', '' + _0x4e02da[_0x1f5099]['Password']), await _0x37e661(0x352), await _0x40db7c['type']('#phone', '' + _0x4e02da[_0x1f5099]['Phone']), await _0x37e661(0x352), await _0x40db7c['type']('#firstName', '' + _0x4e02da[_0x1f5099]['FirstName']), await _0x37e661(0x352), await _0x40db7c['type']('#lastName', '' + _0x4e02da[_0x1f5099]['LastName']), await _0x37e661(0x352);
                            _0x4e02da[_0x1f5099]['Url']['includes']('footlocker.de') ? await _0x40db7c['type']('#birthdate', _0x105207(0x1, 0x1c) + '.' + _0x105207(0x1, 0xc) + '.' + _0x105207(0x7c6, 0x7d3)) : await _0x40db7c['type']('#birthdate', _0x105207(0x1, 0x1c) + '-' + _0x105207(0x1, 0xc) + '-' + _0x105207(0x7c6, 0x7d3));
                            await _0x37e661(0x352), await _0x40db7c['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x40db7c['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x37e661(0x1f4), await _0x40db7c['click']('#stateAutocomplete'), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x37e661(0x1f4);
                            try {
                                const _0x566586 = await _0x40db7c['$x']('//li[text()=\x22' + _0x4e02da[_0x1f5099]['State'] + '\x22]');
                                await _0x566586[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x37e661(0x3e8), await _0x37e661(0x1f4), await _0x40db7c['type']('#address1', _0x4e02da[_0x1f5099]['Address1'] + '\x20' + _0x4e02da[_0x1f5099]['HouseNumber']), await _0x37e661(0x1f4), await _0x40db7c['type']('#address2', '' + _0x4e02da[_0x1f5099]['Address2']), await _0x37e661(0x1f4), await _0x40db7c['type']('#city', '' + _0x4e02da[_0x1f5099]['City']), await _0x37e661(0x1f4), await _0x40db7c['type']('#postcode', '' + _0x4e02da[_0x1f5099]['Zip']), await _0x37e661(0x3e8), await _0x40db7c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x37e661(0x3e8), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x40db7c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x37e661(0x7d0), await _0x40db7c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37e661(0x12c), await _0x40db7c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37e661(0x4b0), await _0x40db7c['keyboard']['type']('' + _0x4e02da[_0x1f5099]['CardNumber']), await _0x37e661(0x320), await _0x40db7c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x40db7c['keyboard']['type']('' + _0x4e02da[_0x1f5099]['ExpiryDate']), await _0x37e661(0x4b0), await _0x40db7c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x40db7c['keyboard']['type']('' + _0x4e02da[_0x1f5099]['CVV']), await _0x37e661(0x226), await _0x40db7c['type']('input[name=\x22postalCode\x22]', '' + _0x4e02da[_0x1f5099]['Zip']), await _0x37e661(0x226), await _0x40db7c['click']('#paymentConsent'), await _0x37e661(0x226), await _0x40db7c['click']('#termsConsent'), await _0x37e661(0x2bc), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x40db7c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x37e661(0x2710);
                            try {
                                await _0x40db7c['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x37e661(0xbb8), await _0x40db7c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1580ca => _0x1580ca['click']()), await _0x40db7c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x51a773 => _0x51a773['click']());
                            } catch {
                            }
                            try {
                                await _0x40db7c['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x5008b0 = await _0x40db7c['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x5008b0) {
                                    _0x46e118['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4e02da[_0x1f5099]['Email'] + ',' + _0x4e02da[_0x1f5099]['Password'] + ',' + _0x4e02da[_0x1f5099]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x1fa5e4() {
                                var _0x1134ce, _0x7e474f = ![];
                                for (var _0x5e5779 = 0x0; _0x5e5779 < 0x18; _0x5e5779++) {
                                    async function _0x16866a() {
                                        var _0x182832 = new _0x9cc471({
                                            'user': _0x56452b['masterMail'],
                                            'password': _0x56452b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x30360e(_0x1ef1e6) {
                                            _0x182832['openBox']('INBOX', ![], _0x1ef1e6);
                                        }
                                        _0x182832['once']('ready', function () {
                                            console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x30360e(function (_0x3102b0, _0x862f95) {
                                                console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3102b0)
                                                    throw _0x3102b0;
                                                _0x182832['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x506bed, _0x3276f1) {
                                                    if (!_0x3276f1 || !_0x3276f1['length'])
                                                        console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x182832['end']();
                                                    else {
                                                        var _0x2c1503 = _0x182832['seq']['fetch'](_0x3276f1, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2c1503['on']('message', function (_0xd89fcc, _0x526d6a) {
                                                            var _0xa07933 = '(#' + _0x526d6a + ')\x20';
                                                            _0xd89fcc['on']('body', function (_0x254e37, _0x38897f) {
                                                                _0x535dc1(_0x254e37, (_0x29df35, _0x393137) => {
                                                                    if (_0x393137['subject']['includes']('code')) {
                                                                        const _0x3e10ea = _0x393137['text']['split']('\x0a\x0a')[0x3], _0x4c02cc = _0x3e10ea['split']('\x0a')[0x1];
                                                                        _0x1134ce = _0x4c02cc;
                                                                    }
                                                                });
                                                            }), _0xd89fcc['once']('end', function () {
                                                            });
                                                        }), _0x2c1503['once']('error', function (_0x3473f1) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2c1503['once']('end', function () {
                                                            _0x182832['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x182832['once']('error', function (_0x1e412e) {
                                            console['log'](_0x37c850['red'](_0x1e412e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x7e474f = !![];
                                        }), _0x182832['once']('end', async function () {
                                        }), _0x182832['connect']();
                                    }
                                    _0x16866a(), await _0x37e661(0x1388);
                                    if (_0x1134ce)
                                        return _0x1134ce;
                                    if (_0x7e474f)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5e5779 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1fa5e4(), await _0x37e661(0x1f4), await _0x40db7c['type']('#code', '' + code), await _0x37e661(0x3e8), await _0x40db7c['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x14cfe1 => _0x14cfe1['click']()), await _0x40db7c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x40db7c['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x4e02da[_0x1f5099]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x46e118['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4e02da[_0x1f5099]['Email'] + ',' + _0x4e02da[_0x1f5099]['Password'] + ',' + _0x4e02da[_0x1f5099]['Phone']), _0x53c465 = 'no', _0x3324c5(_0x4e02da[_0x1f5099], _0x3db17b);
                            var _0x302755 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', ![]), _0x420230 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'pub', ![]);
                            const _0x964cb5 = {
                                'succesDEVMSG': { 'embeds': [_0x302755] },
                                'succesPUBMSG': { 'embeds': [_0x420230] }
                            };
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x964cb5['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x964cb5['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x964cb5['succesPUBMSG']);
                            } catch (_0x3e7210) {
                                console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3e7210));
                            }
                        } catch (_0xfd4057) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20' + _0xfd4057)), _0x2ebaac = '' + _0xfd4057;
                            var _0x34cea6 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', !![], _0x2ebaac), _0x302755 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', ![]), _0x420230 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'pub', ![]);
                            const _0x3daa90 = {
                                'succesDEVMSG': { 'embeds': [_0x302755] },
                                'succesPUBMSG': { 'embeds': [_0x420230] }
                            };
                            _0x3daa90['errorDEV'] = { 'embeds': [_0x34cea6] };
                            _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3daa90['errorDEV']);
                            await _0xb69523(_0x1a5beb, _0x3daa90['errorDEV']);
                            if (!_0x53c465 == 'no')
                                _0x53c465 = 'yes';
                        } finally {
                            _0x505fd2 && _0x505fd2['close']();
                            if (_0x53c465 == 'yes' && _0xdafd42 != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Retrying\x20(' + _0xdafd42 + '\x20/\x205)')), _0x1f5099 = _0x1f5099 - 0x1, _0xdafd42 = _0xdafd42 + 0x1;
                                continue;
                            }
                            _0x53c465 == 'yes' && _0xdafd42 >= 0x5 && (_0x48023a(_0x4e02da[_0x1f5099], _0x3db17b), _0x53c465 = 'no', _0xdafd42 = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    } else {
                        const _0x53cca8 = '' + _0x4e02da[_0x1f5099]['Url'];
                        if (_0x53c465 != 'yes')
                            var _0x53c465 = '', _0xdafd42 = 0x0;
                        if (_0x4e02da[_0x1f5099]['Email'] == '' || _0x4e02da[_0x1f5099]['FirstName'] == '' || _0x4e02da[_0x1f5099]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4e02da[_0x1f5099]['Password'] == '' && (_0x4e02da[_0x1f5099]['Password'] = 'JRaffles23!');
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x1f9d11 = _0xad3bb7[_0x1f5099]['split'](':');
                        else
                            var _0x35878c = Math['round'](Math['random']() * (_0xad3bb7['length'] - 0x1)), _0x1f9d11 = _0xad3bb7[_0x35878c]['split'](':');
                        var _0x505fd2;
                        try {
                            _0x505fd2 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f9d11[0x0] + ':' + _0x1f9d11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x505fd2 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f9d11[0x0] + ':' + _0x1f9d11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x297ca7 = await _0x505fd2['newPage']();
                            await _0x297ca7['authenticate']({
                                'username': '' + _0x1f9d11[0x2],
                                'password': '' + _0x1f9d11[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x297ca7['setRequestInterception'](!![]), _0x297ca7['on']('request', _0x2fa187 => {
                                _0x2fa187['resourceType']() === 'image' || _0x2fa187['resourceType']() === 'font' || _0x2fa187['resourceType']() === 'media' ? _0x2fa187['abort']() : _0x2fa187['continue']();
                            }), await _0x297ca7['goto'](_0x53cca8), await _0x297ca7['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x297ca7['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x37e661(0x7d0), await _0x297ca7['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x297ca7['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x37e661(0x3e8), await _0x297ca7['waitForSelector']('#email'), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x297ca7['type']('#email', '' + _0x4e02da[_0x1f5099]['Email']), await _0x37e661(0x352), await _0x297ca7['waitForSelector']('#password'), await _0x297ca7['type']('#password', '' + _0x4e02da[_0x1f5099]['Password']), await _0x37e661(0x352), await _0x297ca7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x37e661(0x3e8);
                            try {
                                await _0x297ca7['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x3324c5(_0x4e02da[_0x1f5099], _0x3db17b), _0x53c465 = 'no';
                                continue;
                            }
                            await _0x297ca7['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x37e661(0x3e8), await _0x297ca7['click']('li[data-value=\x22EU\x20' + _0x4e02da[_0x1f5099]['Size'] + '\x22]'), await _0x37e661(0x1f4), await _0x297ca7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x297ca7['focus']('#postcode'), await _0x297ca7['keyboard']['down']('Control'), await _0x297ca7['keyboard']['press']('A'), await _0x297ca7['keyboard']['up']('Control'), await _0x297ca7['keyboard']['press']('Backspace'), await _0x297ca7['keyboard']['type'](_0x4e02da[_0x1f5099]['Zip']), await _0x37e661(0x60e), await _0x297ca7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x37e661(0x3e8), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x297ca7['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x297ca7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x297ca7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37e661(0x4b0), await _0x297ca7['keyboard']['type']('' + _0x4e02da[_0x1f5099]['CardNumber']), await _0x37e661(0x320), await _0x297ca7['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x297ca7['keyboard']['type']('' + _0x4e02da[_0x1f5099]['ExpiryDate']), await _0x37e661(0x4b0), await _0x297ca7['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x297ca7['keyboard']['type']('' + _0x4e02da[_0x1f5099]['CVV']), await _0x37e661(0x226), await _0x297ca7['type']('input[name=\x22postalCode\x22]', '' + _0x4e02da[_0x1f5099]['Zip']), await _0x37e661(0x226), await _0x297ca7['click']('#paymentConsent'), await _0x37e661(0x226), await _0x297ca7['click']('#termsConsent'), await _0x37e661(0x2bc), console['log'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x297ca7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x37e661(0x2710);
                            try {
                                await _0x297ca7['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x37e661(0xbb8), await _0x297ca7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x19a824 => _0x19a824['click']()), await _0x297ca7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x14a758 => _0x14a758['click']());
                            } catch {
                            }
                            try {
                                await _0x297ca7['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x3324c5(_0x4e02da[_0x1f5099], _0x3db17b);
                            var _0x302755 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', ![]), _0x420230 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'pub', ![]);
                            const _0x26ebfd = {
                                'succesDEVMSG': { 'embeds': [_0x302755] },
                                'succesPUBMSG': { 'embeds': [_0x420230] }
                            };
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x26ebfd['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x26ebfd['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x26ebfd['succesPUBMSG']);
                            } catch (_0x4a3979) {
                                console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4a3979));
                            }
                            _0x53c465 = 'no';
                        } catch (_0x1de01e) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20' + _0x1de01e)), _0x2ebaac = '' + _0x1de01e;
                            var _0x34cea6 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', !![], _0x2ebaac), _0x302755 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'dev', ![]), _0x420230 = await _0xb7405e(_0x4e02da[_0x1f5099], _0x3db17b, 'pub', ![]);
                            const _0x21dfbf = {
                                'succesDEVMSG': { 'embeds': [_0x302755] },
                                'succesPUBMSG': { 'embeds': [_0x420230] }
                            };
                            _0x21dfbf['errorDEV'] = { 'embeds': [_0x34cea6] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x21dfbf['errorDEV']), await _0xb69523(_0x1a5beb, _0x21dfbf['errorDEV']), _0x53c465 = 'yes';
                        } finally {
                            _0x505fd2 && _0x505fd2['close']();
                            if (_0x53c465 == 'yes' && _0xdafd42 != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3db17b['name'] + ']\x20Task\x20' + (_0x1f5099 + 0x1) + '\x20:\x20Retrying\x20(' + _0xdafd42 + '\x20/\x205)')), _0x1f5099 = _0x1f5099 - 0x1, _0xdafd42 = _0xdafd42 + 0x1;
                                continue;
                            }
                            _0x53c465 == 'yes' && _0xdafd42 >= 0x5 && (_0x48023a(_0x4e02da[_0x1f5099], _0x3db17b), _0x53c465 = 'no', _0xdafd42 = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
                'function': async function (_0x457ba1, _0x5900ab, _0x8848c1) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x100e27 = 0x0; _0x100e27 < _0x5900ab['length']; _0x100e27++) {
                        if (_0x1611e2 != 'yes')
                            var _0x1611e2 = '', _0x3722e7 = 0x0;
                        var _0x13b1be;
                        try {
                            await _0xbf3e86(_0x5900ab, _0x100e27);
                        } catch {
                            _0x1611e2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x230bf5(_0x457ba1['name'] + '\x20Task\x20' + (_0x100e27 + 0x1) + '\x20/\x20' + _0x5900ab['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        var _0xf0102b = await _0xb7405e(_0x5900ab[_0x100e27], _0x457ba1, 'acc', ![]);
                        const _0x3c987b = { 'succesDEVMSG': { 'embeds': [_0xf0102b] } }, _0x10d449 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2607ea = Math['round'](Math['random']() * (_0x8848c1['length'] - 0x1)), _0xf159a4 = _0x8848c1[_0x2607ea]['split'](':'), _0x4e4dbe;
                        try {
                            _0x4e4dbe = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf159a4[0x0] + ':' + _0xf159a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4e4dbe = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf159a4[0x0] + ':' + _0xf159a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbb7fee = await _0x4e4dbe['newPage']();
                            await _0xbb7fee['setViewport']({
                                'width': 0x500 + _0x105207(0x1, 0x32),
                                'height': 0x2d9 + _0x105207(0x1, 0x32)
                            });
                            const _0x4d61ce = await _0xbb7fee['target']()['createCDPSession'](), { windowId: _0x1b5a3e } = await _0x4d61ce['send']('Browser.getWindowForTarget');
                            await _0xbb7fee['authenticate']({
                                'username': '' + _0xf159a4[0x2],
                                'password': '' + _0xf159a4[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbb7fee['goto']('' + _0x10d449, { 'waitUntil': 'networkidle2' }), await _0x37e661(0x1388), console['log'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x5a4e6d = await _0xbb7fee['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x5a4e6d && await _0x5a4e6d['click']();
                            } catch {
                            }
                            await _0x4d61ce['send']('Browser.setWindowBounds', {
                                'windowId': _0x1b5a3e,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0xbb7fee['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x37e661(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xbb7fee['type']('input[name=\x22firstname\x22]', '' + _0x5900ab[_0x100e27]['FirstName']), await _0x37e661(0x1f4), await _0xbb7fee['type']('input[name=\x22lastname\x22]', '' + _0x5900ab[_0x100e27]['LastName']), await _0x37e661(0x1f4), await _0xbb7fee['type']('input[name=\x22email\x22]', '' + _0x5900ab[_0x100e27]['Email']), await _0x37e661(0x1f4), await _0xbb7fee['type']('input[name=\x22password\x22]', '' + _0x5900ab[_0x100e27]['Password']), await _0x37e661(0x258), await _0xbb7fee['$eval']('input[name=\x22psgdpr\x22]', _0xa1a506 => _0xa1a506['click']()), await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xbb7fee['$eval']('#customer-form', _0x307c67 => _0x307c67['submit']());
                            try {
                                try {
                                    await _0xbb7fee['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x1611e2 = 'no', console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Account\x20' + _0x5900ab[_0x100e27]['Email'] + '\x20Generated')), _0x46e118['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5900ab[_0x100e27]['Email'] + ',' + _0x5900ab[_0x100e27]['Password']);
                                try {
                                    _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3c987b['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb69523(_0x17b64, _0x3c987b['succesDEVMSG']);
                            } catch (_0x1b94ad) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x3f39e9) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20' + _0x3f39e9)), _0x13b1be = '' + _0x3f39e9;
                            var _0x45ce41 = await _0xb7405e(_0x5900ab[_0x100e27], _0x457ba1, 'acc', !![], _0x13b1be);
                            _0x3c987b['errorDEV'] = { 'embeds': [_0x45ce41] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3c987b['errorDEV']), await _0xb69523(_0x1a5beb, _0x3c987b['errorDEV']), _0x1611e2 = 'yes';
                        } finally {
                            _0x4e4dbe['close']();
                            if (_0x1611e2 == 'yes' && _0x3722e7 != 0x5 && _0x13b1be != 'Size\x20Not\x20Found') {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Task\x20' + (_0x100e27 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3722e7 + '\x20/\x205)')), _0x100e27 = _0x100e27 - 0x1, _0x3722e7 = _0x3722e7 + 0x1;
                                continue;
                            }
                            _0x1611e2 == 'yes' && _0x3722e7 >= 0x5 && (_0x48023a(_0x5900ab[_0x100e27], _0x457ba1), _0x1611e2 = 'no', _0x3722e7 = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x457ba1['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x35186c(_0x41fd70, _0x5d3c81, _0x4f8afb) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb71db6 = 0x0; _0xb71db6 < _0x5d3c81['length']; _0xb71db6++) {
                        if (_0x13c142 != 'yes')
                            var _0x13c142 = '', _0x1e34db = 0x0;
                        var _0x4a303f;
                        try {
                            await _0xbf3e86(_0x5d3c81, _0xb71db6);
                        } catch {
                            _0x13c142 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x230bf5(_0x41fd70['name'] + '\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20/\x20' + _0x5d3c81['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        const _0x54af46 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x25045f = Math['round'](Math['random']() * (_0x4f8afb['length'] - 0x1)), _0x1fe9a9 = _0x4f8afb[_0x25045f]['split'](':'), _0x2954c4;
                        try {
                            _0x2954c4 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1fe9a9[0x0] + ':' + _0x1fe9a9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2954c4 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1fe9a9[0x0] + ':' + _0x1fe9a9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xf2a0aa = await _0x2954c4['newPage'](), _0x33b0f7 = await _0xf2a0aa['target']()['createCDPSession'](), { windowId: _0x16d68e } = await _0x33b0f7['send']('Browser.getWindowForTarget');
                            await _0xf2a0aa['authenticate']({
                                'username': '' + _0x1fe9a9[0x2],
                                'password': '' + _0x1fe9a9[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf2a0aa['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x37e661(0xbb8), await _0x33b0f7['send']('Browser.setWindowBounds', {
                                'windowId': _0x16d68e,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x37e661(0x1f40);
                            try {
                                await _0xf2a0aa['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x37e661(0x1388), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Logging\x20in'), await _0xf2a0aa['type']('input[name=\x22email\x22]', '' + _0x5d3c81[_0xb71db6]['Email']), await _0x37e661(0x1f4), await _0xf2a0aa['type']('input[name=\x22password\x22]', '' + _0x5d3c81[_0xb71db6]['Password']), await _0x37e661(0x258), await _0xf2a0aa['$eval']('#login-form', _0x4a349d => _0x4a349d['submit']()), await _0xf2a0aa['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x37e661(0x1f4), await _0xf2a0aa['goto']('' + _0x5d3c81[_0xb71db6]['Url']), await _0xf2a0aa['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5d3c81[_0xb71db6]['Size']);
                            if (_0x5d3c81[_0xb71db6]['Size'] != 'RANDOM') {
                                var _0x54ba00 = '\x20' + _0x5d3c81[_0xb71db6]['Size'] + '\x20';
                                const _0x5b4dfc = await _0xf2a0aa['$x']('//span[contains(text(),\x20' + _0x54ba00 + ')]');
                                await _0x5b4dfc[0x0]['click']();
                            } else {
                                const _0xbfafd4 = await _0xf2a0aa['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1e24bf = Math['round'](Math['random']() * (_0xbfafd4['length'] - 0x1));
                                await _0xbfafd4[_0x1e24bf]['click']();
                            }
                            await _0x37e661(0x258), await _0xf2a0aa['click']('#cookieChoiceDismiss'), await _0x37e661(0x3e8), await _0xf2a0aa['type']('#instagram-account', '' + _0x5d3c81[_0xb71db6]['Follower']), await _0x37e661(0x28a), await _0xf2a0aa['click']('#book-btn'), await _0x37e661(0xbb8);
                            try {
                                await _0xf2a0aa['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20' + _0x37c850['cyan']('Solving\x20Captcha')), await _0xf2a0aa['solveRecaptchas'](), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x37e661(0x7d0), await _0xf2a0aa['$eval']('#book-btn-for-sure', _0x51f032 => _0x51f032['click']()), await _0x37e661(0x12c), await _0xf2a0aa['click']('#book-btn-for-sure'), await _0x37e661(0xdac);
                            const _0x44edfe = await _0xf2a0aa['$eval']('.reservation-popup\x20>\x20.title', _0x21ca16 => {
                                return _0x21ca16['innerHTML'];
                            });
                            if (_0x44edfe) {
                                _0x13c142 = 'no', _0x3324c5(_0x5d3c81[_0xb71db6], _0x41fd70), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x6516e1 = await _0xb7405e(_0x5d3c81[_0xb71db6], _0x41fd70, 'dev', ![]), _0x1f1936 = await _0xb7405e(_0x5d3c81[_0xb71db6], _0x41fd70, 'pub', ![]);
                                const _0x293fca = {
                                    'succesDEVMSG': { 'embeds': [_0x6516e1] },
                                    'succesPUBMSG': { 'embeds': [_0x1f1936] }
                                };
                                try {
                                    _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x293fca['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x293fca['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x293fca['succesPUBMSG']);
                                } catch (_0x1c9bbb) {
                                    console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1c9bbb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x2b801f) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20' + _0x2b801f)), _0x4a303f = '' + _0x2b801f;
                            var _0x4049a4 = await _0xb7405e(_0x5d3c81[_0xb71db6], _0x41fd70, 'dev', !![], _0x4a303f), _0x6516e1 = await _0xb7405e(_0x5d3c81[_0xb71db6], _0x41fd70, 'dev', ![]), _0x1f1936 = await _0xb7405e(_0x5d3c81[_0xb71db6], _0x41fd70, 'pub', ![]);
                            const _0x20b024 = {
                                'succesDEVMSG': { 'embeds': [_0x6516e1] },
                                'succesPUBMSG': { 'embeds': [_0x1f1936] }
                            };
                            _0x20b024['errorDEV'] = { 'embeds': [_0x4049a4] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x20b024['errorDEV']), await _0xb69523(_0x1a5beb, _0x20b024['errorDEV']), _0x2b801f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x13c142 = 'yes');
                        } finally {
                            _0x2954c4['close']();
                            if (_0x13c142 == 'yes' && _0x1e34db != 0x5 && _0x4a303f != 'Size\x20Not\x20Found') {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Task\x20' + (_0xb71db6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1e34db + '\x20/\x205)')), _0xb71db6 = _0xb71db6 - 0x1, _0x1e34db = _0x1e34db + 0x1;
                                continue;
                            }
                            _0x13c142 == 'yes' && _0x1e34db >= 0x5 && (_0x48023a(_0x5d3c81[_0xb71db6], _0x41fd70), _0x13c142 = 'no', _0x1e34db = 0x0), console['log'](_0x3071a0() + '\x20[' + _0x41fd70['name'] + ']\x20Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
            'function': async function (_0x55de98, _0x282cdc, _0x4e02b6) {
                _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x56452b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x72618e = 0x0; _0x72618e < _0x282cdc['length']; _0x72618e++) {
                    var _0x48e73f;
                    if (_0x2c568b != 'yes')
                        var _0x2c568b = '', _0x288555 = 0x0;
                    var _0x20659f = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x54cb3f
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x282cdc[_0x72618e]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x282cdc[_0x72618e]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x56452b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x519edc
                            }
                        ]
                    }], _0x48439a = await _0xb7405e(_0x282cdc[_0x72618e], _0x55de98, 'dev', ![]), _0x22e5e8 = await _0xb7405e(_0x282cdc[_0x72618e], _0x55de98, 'pub', ![]);
                    const _0x2ecce1 = {
                        'succesDEVMSG': { 'embeds': [_0x48439a] },
                        'succesPUBMSG': { 'embeds': [_0x22e5e8] }
                    }, _0x1f92f = { 'embeds': _0x20659f };
                    try {
                        await _0xbf3e86(_0x282cdc, _0x72618e);
                    } catch {
                        _0x2c568b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x282cdc[_0x72618e]['Email'] == '' || _0x282cdc[_0x72618e]['FirstName'] == '' || _0x282cdc[_0x72618e]['LastName'] == '' || _0x282cdc[_0x72618e]['Country'] == '' || _0x282cdc[_0x72618e]['Size'] == '' || _0x282cdc[_0x72618e]['Address1'] == '' || _0x282cdc[_0x72618e]['Zip'] == '') {
                        console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x282cdc[_0x72618e]['Email'] == '' || _0x282cdc[_0x72618e]['FirstName'] == '' || _0x282cdc[_0x72618e]['LastName'] == '' || _0x282cdc[_0x72618e]['Country'] == '' || _0x282cdc[_0x72618e]['Size'] == '' || _0x282cdc[_0x72618e]['Address1'] == '' || _0x282cdc[_0x72618e]['Zip'] == '' || _0x282cdc[_0x72618e]['Phone'] == '') {
                        console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x115da8 = '' + _0x282cdc[_0x72618e]['Url'];
                    if (_0x56452b['useRandomProxy'] = ![])
                        var _0x4d0d06 = _0x4e02b6[_0x72618e]['split'](':');
                    else
                        var _0x19cffd = Math['round'](Math['random']() * (_0x4e02b6['length'] - 0x1)), _0x4d0d06 = _0x4e02b6[_0x19cffd]['split'](':');
                    var _0xe36530;
                    try {
                        _0xe36530 = await _0x206049['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4d0d06[0x0] + ':' + _0x4d0d06[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xe36530 = await _0x206049['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4d0d06[0x0] + ':' + _0x4d0d06[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x26217b = await _0xe36530['newPage']();
                        await _0x26217b['authenticate']({
                            'username': '' + _0x4d0d06[0x2],
                            'password': '' + _0x4d0d06[0x3]
                        }), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26217b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x26217b['setRequestInterception'](!![]), _0x26217b['on']('request', _0x47f928 => {
                            _0x47f928['resourceType']() === 'image' || _0x47f928['resourceType']() === 'font' || _0x47f928['resourceType']() === 'media' ? _0x47f928['abort']() : _0x47f928['continue']();
                        });
                        try {
                            await _0x26217b['goto'](_0x115da8), await _0x37e661(0xbb8), await _0x26217b['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x26217b['click']('.control__JhutY'), await _0x37e661(0x1f4);
                        if (_0x282cdc[_0x72618e]['Size'] != 'RANDOM')
                            try {
                                const _0x659a3e = await _0x26217b['$x']('//div[contains(text(),\x20\x27' + _0x282cdc[_0x72618e]['Size'] + '\x27)]');
                                await _0x659a3e[0x0]['click']();
                            } catch {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x38fea8 = await _0x26217b['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x1f9fb1 = Math['round'](Math['random']() * (_0x38fea8['length'] - 0x1));
                            await _0x38fea8[_0x1f9fb1]['click']();
                        }
                        await _0x37e661(0x4b0);
                        const _0x54feed = await _0x26217b['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x54feed[0x0]['click'](), await _0x26217b['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x26217b['type']('input[name=\x22email\x22]', '' + _0x282cdc[_0x72618e]['Email']), await _0x37e661(0x640), await _0x26217b['type']('input[name=\x22phone\x22]', '' + _0x282cdc[_0x72618e]['Phone']), await _0x37e661(0x4b0), await _0x26217b['click']('button.btn.continue-button__1RtsS'), await _0x37e661(0x4b0);
                        try {
                            await _0x26217b['type']('input[name=\x22firstName\x22]', '' + _0x282cdc[_0x72618e]['FirstName']), await _0x37e661(0x258);
                        } catch {
                            const _0x112ae3 = await _0x26217b['$$eval']('.invalid-feedback\x20>\x20div', _0x2d4ae9 => {
                                return _0x2d4ae9['map'](_0x2f8426 => _0x2f8426['innerText']);
                            });
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20' + _0x112ae3));
                            continue;
                        }
                        await _0x26217b['type']('input[name=\x22lastName\x22]', '' + _0x282cdc[_0x72618e]['LastName']), await _0x37e661(0xc8), await _0x26217b['type']('input[name=\x22instagramUsername\x22]', '' + _0x282cdc[_0x72618e]['Follower']), await _0x37e661(0x4b0), await _0x26217b['click']('button.btn.continue-button__1RtsS'), await _0x37e661(0x3e8), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x26217b['select']('select[name=\x22country\x22]', '' + _0x282cdc[_0x72618e]['Country']), await _0x37e661(0x2bc), await _0x26217b['type']('input[name=\x22streetName\x22]', '' + _0x282cdc[_0x72618e]['Address1']), await _0x37e661(0x258), await _0x26217b['type']('input[name=\x22houseNumber\x22]', _0x282cdc[_0x72618e]['HouseNumber'] + '\x20' + _0x282cdc[_0x72618e]['Address2']), await _0x37e661(0xc8), await _0x26217b['type']('input[name=\x22postalCode\x22]', '' + _0x282cdc[_0x72618e]['Zip']), await _0x37e661(0x1f4), await _0x26217b['type']('input[name=\x22city\x22]', '' + _0x282cdc[_0x72618e]['City']), await _0x37e661(0x4b0), await _0x26217b['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x37e661(0x4b0), await _0x26217b['click']('button.btn.continue-button__1RtsS'), await _0x37e661(0x4b0), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x26217b['solveRecaptchas'](), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x37e661(0xbb8), await _0x26217b['click']('button.btn.continue-button__1RtsS'), await _0x37e661(0x1388), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x26217b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x26217b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37e661(0x4b0), await _0x26217b['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x282cdc[_0x72618e]['CardNumber']), await _0x37e661(0x320), await _0x26217b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x26217b['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x282cdc[_0x72618e]['ExpiryDate']), await _0x37e661(0x4b0), await _0x26217b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x26217b['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x282cdc[_0x72618e]['CVV']), await _0x37e661(0x226), await _0x26217b['type']('input[name=\x22holderName\x22]', '' + _0x282cdc[_0x72618e]['NameOnCard']), await _0x37e661(0x226), await _0x26217b['click']('button.adyen-checkout__button'), console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x26217b['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x37e661(0xbb8);
                        } catch (_0x25a404) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x203DS\x20Failed')), _0x48e73f = '3DS\x20Error\x20' + _0x25a404;
                            var _0x220f40 = await _0xb7405e(_0x282cdc[_0x72618e], _0x55de98, 'dev', !![], _0x48e73f);
                            _0x2ecce1['errorDEV'] = { 'embeds': [_0x220f40] };
                            _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x2ecce1['errorDEV']);
                            await _0xb69523(_0x1a5beb, _0x2ecce1['errorDEV']);
                            continue;
                        }
                        _0x3324c5(_0x282cdc[_0x72618e], _0x55de98), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                            try {
                                await _0xb69523(_0x56452b['webhook'], _0x2ecce1['succesDEVMSG']);
                            } catch {
                            }
                        await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x2ecce1['succesDEVMSG']), await _0x37e661(0xc8);
                        try {
                            await _0xb69523(_0x460ce8, _0x2ecce1['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x16b566) {
                        console['log'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20' + _0x16b566), _0x48e73f = '' + _0x16b566;
                        var _0x220f40 = await _0xb7405e(_0x282cdc[_0x72618e], _0x55de98, 'dev', !![], _0x48e73f);
                        _0x2ecce1['errorDEV'] = { 'embeds': [_0x220f40] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x2ecce1['errorDEV']), await _0xb69523(_0x1a5beb, _0x2ecce1['errorDEV']), _0x2c568b = 'yes';
                    } finally {
                        _0xe36530['close']();
                        if (_0x2c568b == 'yes' && _0x288555 != 0x5) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x55de98['name'] + ']\x20Task\x20' + (_0x72618e + 0x1) + '\x20:\x20Retrying\x20(' + _0x288555 + '\x20/\x205)')), _0x72618e = _0x72618e - 0x1, _0x288555 = _0x288555 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x56452b['footshopDelay'] + '\x20ms'), await _0x37e661(_0x56452b['footshopDelay']);
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
            'function': async function (_0x47668d, _0x22e8bd, _0x357b87) {
                var _0x542245 = ![], _0x4eb3b2 = ![];
                if (_0x56452b['captchaKey'] == '' || _0x56452b['captchaKey'] == undefined)
                    return console['log'](_0x37c850['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x56452b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5450c5 = 0x0; _0x5450c5 < _0x22e8bd['length']; _0x5450c5++) {
                    if (_0x4870b3 != 'yes')
                        var _0x4870b3 = '', _0x529418 = 0x0;
                    var _0x50691d, _0x5c32b0 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x22e8bd[_0x5450c5]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x22e8bd[_0x5450c5]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x54cb3f
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x56452b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x519edc
                            }
                        ]
                    }];
                    const _0x3bb70c = { 'embeds': _0x5c32b0 };
                    _0x230bf5(_0x47668d['name'] + '\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20/\x20' + _0x22e8bd['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                    try {
                        await _0xbf3e86(_0x22e8bd, _0x5450c5);
                    } catch {
                        _0x4870b3 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2d12a1 = await _0xb7405e(_0x22e8bd[_0x5450c5], _0x47668d, 'dev', ![]), _0x383870 = await _0xb7405e(_0x22e8bd[_0x5450c5], _0x47668d, 'pub', ![]);
                    const _0x44f855 = {
                        'succesDEVMSG': { 'embeds': [_0x2d12a1] },
                        'succesPUBMSG': { 'embeds': [_0x383870] }
                    };
                    if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                        try {
                            await _0xb69523(_0x56452b['webhook'], _0x44f855['succesDEVMSG']);
                        } catch {
                        }
                    await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x44f855['succesDEVMSG']), await _0x37e661(0xc8);
                    try {
                        await _0xb69523(_0x460ce8, _0x44f855['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x22e8bd[_0x5450c5]['Email'] == '' || _0x22e8bd[_0x5450c5]['Url'] == '' || _0x22e8bd[_0x5450c5]['FirstName'] == '' || _0x22e8bd[_0x5450c5]['LastName'] == '') {
                        console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x56452b['useRandomProxy'] = ![])
                        var _0x43b3b7 = _0x357b87[_0x5450c5]['split'](':');
                    else
                        var _0x3cb076 = Math['round'](Math['random']() * (_0x357b87['length'] - 0x1)), _0x43b3b7 = _0x357b87[_0x3cb076]['split'](':');
                    const _0x254582 = await _0x206049['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x43b3b7[0x0] + ':' + _0x43b3b7[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x56792b = await _0x254582['newPage']();
                        await _0x56792b['authenticate']({
                            'username': '' + _0x43b3b7[0x2],
                            'password': '' + _0x43b3b7[0x3]
                        }), console['log'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56792b['setRequestInterception'](!![]), _0x56792b['on']('request', _0x1e3b2a => {
                            _0x1e3b2a['resourceType']() === 'image' || _0x1e3b2a['resourceType']() === 'font' || _0x1e3b2a['resourceType']() === 'media' ? _0x1e3b2a['abort']() : _0x1e3b2a['continue']();
                        });
                        try {
                            await _0x56792b['goto']('' + _0x22e8bd[_0x5450c5]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x56792b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x56792b['type']('#comp_firstname', '' + _0x22e8bd[_0x5450c5]['FirstName']), await _0x56792b['waitForSelector']('#comp_lastname'), await _0x56792b['type']('#comp_lastname', '' + _0x22e8bd[_0x5450c5]['LastName']), await _0x56792b['waitForSelector']('#comp_email'), await _0x56792b['type']('#comp_email', '' + _0x22e8bd[_0x5450c5]['Email']), await _0x56792b['waitForSelector']('#comp_paypalemail'), await _0x56792b['type']('#comp_paypalemail', '' + _0x22e8bd[_0x5450c5]['Email']), await _0x56792b['waitForSelector']('#comp_mobile_end'), await _0x56792b['type']('#comp_mobile_end', '' + _0x22e8bd[_0x5450c5]['Phone']), await _0x56792b['waitForSelector']('#comp_dob'), await _0x56792b['type']('#comp_dob', '08/09/1992'), console['log'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x22e8bd[_0x5450c5]['Size'] == 'RANDOM') {
                            const _0x2ec38a = await _0x56792b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1ea526 => {
                                return _0x1ea526['map'](_0x49117a => _0x49117a['value']);
                            });
                            var _0x35bfc5 = Math['round'](Math['random']() * (_0x2ec38a['length'] - 0x2));
                            await _0x56792b['select']('#shoesize', _0x2ec38a[_0x35bfc5 + 0x1]), await _0x37e661(0x3e8);
                        } else {
                            const _0x544020 = await _0x56792b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x573d8e => {
                                return _0x573d8e['map'](_0x35135e => _0x35135e['innerText']);
                            }), _0x425286 = await _0x56792b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x45d585 => {
                                return _0x45d585['map'](_0x312600 => _0x312600['value']);
                            });
                            var _0x4c1f46 = _0x22e8bd[_0x5450c5]['Size'];
                            for (var _0x44ac68 = 0x1; _0x44ac68 < _0x425286['length']; _0x44ac68++) {
                                var _0x16d04a = _0x544020[_0x44ac68]['split']('\x20')[0x0];
                                if (_0x16d04a == _0x4c1f46) {
                                    await _0x56792b['select']('#shoesize', _0x425286[_0x44ac68]);
                                    break;
                                } else {
                                    if (_0x44ac68 + 0x1 == _0x425286['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x56792b['waitForSelector']('#comp_address1'), await _0x56792b['type']('#comp_address1', _0x22e8bd[_0x5450c5]['Address1'] + '\x20' + _0x22e8bd[_0x5450c5]['HouseNumber']), await _0x56792b['waitForSelector']('#comp_address2'), await _0x56792b['type']('#comp_address2', '' + _0x22e8bd[_0x5450c5]['Address2']), await _0x56792b['waitForSelector']('#comp_address2'), await _0x56792b['type']('#comp_address3', '' + _0x22e8bd[_0x5450c5]['City']), await _0x56792b['waitForSelector']('#comp_postcode'), await _0x56792b['type']('#comp_postcode', '' + _0x22e8bd[_0x5450c5]['Zip']), console['log'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x37e661(0x4b0), await _0x56792b['click']('label#emailhold'), await _0x37e661(0x5dc), await _0x56792b['click']('#preauth_tandc_email\x20>\x20label'), await _0x37e661(0x5dc), await _0x56792b['click']('#submit');
                        try {
                            await _0x56792b['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20' + _0x37c850['blue']('Awaiting\x20Paypal\x20Payment')), _0x254582['on']('targetcreated', async _0x5b6e09 => {
                            if (_0x5b6e09['type']() === 'page') {
                                const _0x1dc926 = await _0x5b6e09['page']();
                                async function _0x25323b() {
                                    try {
                                        await _0x56792b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4eb3b2 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x54764a() {
                                    try {
                                        await _0x56792b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x542245 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x54764a(), _0x25323b(), await _0x37e661(0x493e0);
                            }
                        });
                        async function _0x478cec() {
                            for (let _0x34ba09 = 0x0; _0x34ba09 < 0x12c; _0x34ba09++) {
                                if (_0x542245 == !![]) {
                                    _0x4870b3 = 'no', _0x3324c5(_0x22e8bd[_0x5450c5], _0x47668d), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                        try {
                                            await _0xb69523(_0x56452b['webhook'], _0x44f855['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x44f855['succesDEVMSG']), await _0x37e661(0xc8);
                                    try {
                                        await _0xb69523(_0x460ce8, _0x44f855['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x4eb3b2)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x37e661(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x37e661(0xbb8), await _0x56792b['click']('.zoid-outlet'), await _0x37e661(0x7d0), await _0x478cec();
                    } catch (_0x12cc3d) {
                        console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20' + _0x12cc3d)), _0x50691d = '' + _0x12cc3d;
                        var _0x4490ea = await _0xb7405e(_0x22e8bd[_0x5450c5], _0x47668d, 'dev', !![], _0x50691d);
                        _0x44f855['errorDEV'] = { 'embeds': [_0x4490ea] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x44f855['errorDEV']), await _0xb69523(_0x1a5beb, _0x44f855['errorDEV']);
                    } finally {
                        _0x254582 && _0x254582['close']();
                        if (_0x4870b3 == 'yes' && _0x529418 != 0x5 && _0x50691d != 'Size\x20Not\x20Found') {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x47668d['name'] + ']\x20Task\x20' + (_0x5450c5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x529418 + '\x20/\x205)')), _0x5450c5 = _0x5450c5 - 0x1, _0x529418 = _0x529418 + 0x1;
                            continue;
                        }
                        _0x4870b3 == 'yes' && _0x529418 >= 0x5 && (_0x48023a(afew[_0x5450c5], _0x47668d), _0x4870b3 = 'no', _0x529418 = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
                'function': async function (_0x5ea744, _0x3cdd24, _0x3d78f5) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1adca7 = 0x0; _0x1adca7 < _0x3cdd24['length']; _0x1adca7++) {
                        const _0x9a554a = 'https://www.kickz.com/login';
                        if (_0x473f63 != 'yes')
                            var _0x473f63 = '', _0x2680a5 = 0x0;
                        _0x230bf5(_0x5ea744['name'] + '\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20/\x20' + _0x3cdd24['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        try {
                            await _0xbf3e86(_0x3cdd24, _0x1adca7);
                        } catch {
                            _0x473f63 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x55f7ce = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54cb3f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x56452b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x519edc
                                }
                            ]
                        }];
                        const _0x680aae = { 'embeds': _0x55f7ce };
                        var _0x263960 = await _0xb7405e(_0x3cdd24[_0x1adca7], _0x5ea744, 'acc', ![]);
                        const _0x4cd1ec = { 'succesDEVMSG': { 'embeds': [_0x263960] } };
                        if (_0x3cdd24[_0x1adca7]['Email'] == '' || _0x3cdd24[_0x1adca7]['FirstName'] == '' || _0x3cdd24[_0x1adca7]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3cdd24[_0x1adca7]['Password'] == '' && (_0x3cdd24[_0x1adca7]['Password'] = 'JRaffles23!');
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x2f799f = _0x3d78f5[_0x1adca7]['split'](':');
                        else
                            var _0x20f0d2 = Math['round'](Math['random']() * (_0x3d78f5['length'] - 0x1)), _0x2f799f = _0x3d78f5[_0x20f0d2]['split'](':');
                        var _0x27c4cf;
                        try {
                            _0x27c4cf = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f799f[0x0] + ':' + _0x2f799f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27c4cf = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f799f[0x0] + ':' + _0x2f799f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x538116 = await _0x27c4cf['newPage']();
                            await _0x538116['authenticate']({
                                'username': '' + _0x2f799f[0x2],
                                'password': '' + _0x2f799f[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x538116['setRequestInterception'](!![]), _0x538116['on']('request', _0x4510d8 => {
                                _0x4510d8['resourceType']() === 'image' || _0x4510d8['resourceType']() === 'font' || _0x4510d8['resourceType']() === 'media' ? _0x4510d8['abort']() : _0x4510d8['continue']();
                            }), await _0x538116['goto'](_0x9a554a), await _0x37e661(0xbb8), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x538116['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x538116['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x538116['waitForSelector']('#button-register'), await _0x37e661(0x7d0), await _0x538116['evaluate'](() => {
                                const _0x50ed9c = document['querySelector']('#button-register');
                                _0x50ed9c['click']();
                            }), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x37e661(0x1388), await _0x538116['waitForSelector']('#customer_salutation'), await _0x538116['select']('#customer_salutation', 'mr'), await _0x37e661(0x7d0), await _0x538116['waitForSelector']('#customer_firstname'), await _0x538116['type']('#customer_firstname', '' + _0x3cdd24[_0x1adca7]['FirstName']), await _0x37e661(0x352), await _0x538116['waitForSelector']('#customer_lastname'), await _0x538116['type']('#customer_lastname', '' + _0x3cdd24[_0x1adca7]['LastName']), await _0x37e661(0x352), await _0x538116['type']('#email-input', '' + _0x3cdd24[_0x1adca7]['Email']), await _0x37e661(0x352), await _0x538116['type']('#email-confirm-input', '' + _0x3cdd24[_0x1adca7]['Email']), await _0x37e661(0x352), await _0x538116['type']('#register-password', '' + _0x3cdd24[_0x1adca7]['Password']), await _0x37e661(0x352), await _0x538116['type']('#password-confirm', '' + _0x3cdd24[_0x1adca7]['Password']), await _0x37e661(0x352), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x538116['click']('#consent'), await _0x37e661(0x1f4);
                            const _0x1bddd2 = await _0x538116['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1bddd2) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x538116['click']('#buttonRegister');
                            try {
                                await _0x538116['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3cdd24[_0x1adca7]['Email']), await _0x37e661(0x4b0);
                            async function _0x598f7a() {
                                var _0x39e486, _0x50e4ad = ![];
                                for (var _0x152ffb = 0x0; _0x152ffb < 0x18; _0x152ffb++) {
                                    async function _0x2ef6f4() {
                                        var _0xe98cee = new _0x9cc471({
                                            'user': _0x56452b['masterMail'],
                                            'password': _0x56452b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x67cb83(_0x2b30f9) {
                                            _0xe98cee['openBox']('INBOX', ![], _0x2b30f9);
                                        }
                                        _0xe98cee['once']('ready', function () {
                                            console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x67cb83(function (_0x492fc0, _0x5c7185) {
                                                console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x492fc0)
                                                    throw _0x492fc0;
                                                _0xe98cee['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x17597a, _0x23bdee) {
                                                    if (!_0x23bdee || !_0x23bdee['length'])
                                                        console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0xe98cee['end']();
                                                    else {
                                                        var _0x1db292 = _0xe98cee['seq']['fetch'](_0x23bdee, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1db292['on']('message', function (_0x524a72, _0xfabef0) {
                                                            var _0x489281 = '(#' + _0xfabef0 + ')\x20';
                                                            _0x524a72['on']('body', function (_0x428572, _0x40a76b) {
                                                                _0x535dc1(_0x428572, (_0x27894f, _0x335769) => {
                                                                    if (_0x335769['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x38831c = _0x335769['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x4b7fc5 = _0x38831c[0x1]['split']('<')[0x0];
                                                                        _0x39e486 = _0x4b7fc5;
                                                                    }
                                                                });
                                                            }), _0x524a72['once']('end', function () {
                                                            });
                                                        }), _0x1db292['once']('error', function (_0x283cd1) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1db292['once']('end', function () {
                                                            _0xe98cee['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0xe98cee['once']('error', function (_0x2ff244) {
                                            console['log'](_0x37c850['red'](_0x2ff244['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x50e4ad = !![];
                                        }), _0xe98cee['once']('end', async function () {
                                        }), _0xe98cee['connect']();
                                    }
                                    _0x2ef6f4(), await _0x37e661(0x1388);
                                    if (_0x39e486)
                                        return _0x39e486;
                                    if (_0x50e4ad)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x152ffb == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x598f7a(), _0x37e661(0x320), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Verifying..'), await _0x538116['type']('#verificationCode', code), await _0x37e661(0x1f4), await _0x538116['click']('#buttonVerify'), await _0x37e661(0x190), await _0x538116['click']('#buttonVerify'), await _0x37e661(0x3e8);
                            try {
                                await _0x538116['waitForSelector']('div.b-user_greeting'), _0x473f63 = 'no', console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Account\x20' + _0x3cdd24[_0x1adca7]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x46e118['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3cdd24[_0x1adca7]['Email'] + ',' + _0x3cdd24[_0x1adca7]['Password'] + ','), console['log'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Account\x20' + _0x3cdd24[_0x1adca7]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x4cd1ec['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb69523(_0x17b64, _0x4cd1ec['succesDEVMSG']);
                            } catch {
                                _0x473f63 = 'no', console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x41b2d7) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20' + _0x41b2d7)), _0x55f7ce[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x55f7ce[0x0]['description'] = '' + _0x41b2d7, await _0xb69523(_0x1a5beb, _0x680aae), _0x473f63 = 'yes';
                        } finally {
                            _0x27c4cf && _0x27c4cf['close']();
                            if (_0x473f63 == 'yes' && _0x2680a5 != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x5ea744['name'] + ']\x20Task\x20' + (_0x1adca7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2680a5 + '\x20/\x205)')), _0x1adca7 = _0x1adca7 - 0x1, _0x2680a5 = _0x2680a5 + 0x1;
                                continue;
                            }
                            _0x473f63 == 'yes' && _0x2680a5 >= 0x5 && (_0x48023a(_0x3cdd24[_0x1adca7], _0x5ea744), _0x473f63 = 'no', _0x2680a5 = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0xf022a4, _0xf35cf8, _0x529d0f) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x32bcf2 = 0x0; _0x32bcf2 < _0xf35cf8['length']; _0x32bcf2++) {
                        var _0x377af6;
                        if (_0x243f94 != 'yes')
                            var _0x243f94 = '', _0x14a35b = 0x0;
                        _0x230bf5(_0xf022a4['name'] + '\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20/\x20' + _0xf35cf8['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        var _0x5a70de = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54cb3f
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0xf35cf8[_0x32bcf2]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0xf35cf8[_0x32bcf2]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x56452b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x519edc
                                }
                            ]
                        }], _0x2bdc2a = await _0xb7405e(_0xf35cf8[_0x32bcf2], _0xf022a4, 'dev', ![]), _0x22d060 = await _0xb7405e(_0xf35cf8[_0x32bcf2], _0xf022a4, 'pub', ![]);
                        const _0x3ae52a = {
                            'succesDEVMSG': { 'embeds': [_0x2bdc2a] },
                            'succesPUBMSG': { 'embeds': [_0x22d060] }
                        };
                        try {
                            await _0xbf3e86(_0xf35cf8, _0x32bcf2);
                        } catch {
                            _0x243f94 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0xf35cf8[_0x32bcf2]['Email'] == '' || _0xf35cf8[_0x32bcf2]['Password'] == '' || _0xf35cf8[_0x32bcf2]['FirstName'] == '' || _0xf35cf8[_0x32bcf2]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x28bf21 = _0x529d0f[_0x32bcf2]['split'](':');
                        else
                            var _0x3a71c8 = Math['round'](Math['random']() * (_0x529d0f['length'] - 0x1)), _0x28bf21 = _0x529d0f[_0x3a71c8]['split'](':');
                        var _0x30d6e5;
                        try {
                            _0x30d6e5 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28bf21[0x0] + ':' + _0x28bf21[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x30d6e5 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28bf21[0x0] + ':' + _0x28bf21[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x22ea0a = await _0x30d6e5['newPage']();
                            await _0x22ea0a['authenticate']({
                                'username': '' + _0x28bf21[0x2],
                                'password': '' + _0x28bf21[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x22ea0a['setRequestInterception'](!![]), _0x22ea0a['on']('request', _0xb26378 => {
                                _0xb26378['resourceType']() === 'image' || _0xb26378['resourceType']() === 'font' || _0xb26378['resourceType']() === 'media' ? _0xb26378['abort']() : _0xb26378['continue']();
                            }), await _0x22ea0a['goto']('' + _0xf35cf8[_0x32bcf2]['Url'], { 'waitUntil': 'networkidle2' }), await _0x37e661(0x12c);
                            try {
                                await _0x22ea0a['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x22ea0a['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x22ea0a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x22ea0a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x22ea0a['waitForSelector']('#username'), await _0x22ea0a['type']('#username', _0xf35cf8[_0x32bcf2]['Email']), await _0x22ea0a['waitForSelector']('#password'), await _0x22ea0a['type']('#password', _0xf35cf8[_0x32bcf2]['Password']), await _0x37e661(0x190), await _0x22ea0a['click']('#buttonSubmit'), await _0x22ea0a['waitForSelector']('div.b-user_greeting'), console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x37e661(0x1f4), await _0x22ea0a['goto']('' + _0xf35cf8[_0x32bcf2]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xf35cf8[_0x32bcf2]['Size']);
                            let _0x1a868a = _0xf35cf8[_0x32bcf2]['Size']['replace']('.5', '\x201/2');
                            await _0x22ea0a['click']('button[title=\x22' + _0x1a868a + '\x22]'), await _0x37e661(0x1f4);
                            try {
                                await _0x22ea0a['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x37e661(0x12c), console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x22ea0a['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_firstName', _0xf35cf8[_0x32bcf2]['FirstName']), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_lastName', _0xf35cf8[_0x32bcf2]['LastName']), await _0x37e661(0x12c), await _0x22ea0a['select']('#dwfrm_raffle_addressFields_country', _0xf35cf8[_0x32bcf2]['Country']), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_city', _0xf35cf8[_0x32bcf2]['City']), await _0x37e661(0x12c);
                            _0xf35cf8[_0x32bcf2]['Postcode'] == undefined && (_0xf35cf8[_0x32bcf2]['Postcode'] = _0xf35cf8[_0x32bcf2]['Zip']);
                            await _0x22ea0a['type']('#dwfrm_raffle_addressFields_postalCode', _0xf35cf8[_0x32bcf2]['Postcode']), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_address1', _0xf35cf8[_0x32bcf2]['Address1']), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_address2', _0xf35cf8[_0x32bcf2]['HouseNumber']), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xf35cf8[_0x32bcf2]['Address2']), await _0x37e661(0x12c), await _0x22ea0a['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x37e661(0x12c), await _0x22ea0a['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xf35cf8[_0x32bcf2]['Follower']), await _0x37e661(0x1f4), await _0x22ea0a['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x37e661(0x1f4), console['log'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20' + _0x37c850['blue']('Awaiting\x20Paypal\x20Payment')), await _0x22ea0a['click']('.b-paypal_button');
                            try {
                                await _0x22ea0a['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x243f94 = 'no', _0x3324c5(_0xf35cf8[_0x32bcf2], _0xf022a4), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3ae52a['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x3ae52a['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x3ae52a['succesPUBMSG']);
                            } catch (_0x4db5fa) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4db5fa)), _0x377af6 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4db5fa;
                                var _0x4b86b9 = await _0xb7405e(_0xf35cf8[_0x32bcf2], _0xf022a4, 'dev', !![], _0x377af6);
                                _0x3ae52a['errorDEV'] = { 'embeds': [_0x4b86b9] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3ae52a['errorDEV']), await _0xb69523(_0x1a5beb, _0x3ae52a['errorDEV']);
                            }
                        } catch (_0x12c344) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20' + _0x12c344)), _0x377af6 = '' + _0x12c344;
                            var _0x4b86b9 = await _0xb7405e(_0xf35cf8[_0x32bcf2], _0xf022a4, 'dev', !![], _0x377af6);
                            _0x3ae52a['errorDEV'] = { 'embeds': [_0x4b86b9] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3ae52a['errorDEV']), await _0xb69523(_0x1a5beb, _0x3ae52a['errorDEV']), _0x243f94 = 'yes';
                        } finally {
                            _0x30d6e5 && _0x30d6e5['close']();
                            if (_0x243f94 == 'yes' && _0x14a35b != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0xf022a4['name'] + ']\x20Task\x20' + (_0x32bcf2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x14a35b + '\x20/\x205)')), _0x32bcf2 = _0x32bcf2 - 0x1, _0x14a35b = _0x14a35b + 0x1;
                                continue;
                            }
                            _0x243f94 == 'yes' && _0x14a35b >= 0x5 && (_0x48023a(_0xf35cf8[_0x32bcf2], _0xf022a4), _0x243f94 = 'no', _0x14a35b = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['AfewDelay'] + '\x20ms'), await _0x37e661(_0x56452b['AfewDelay']);
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
                'function': async function (_0x1d2a12, _0x3a34ca, _0x3e11a3) {
                    for (var _0x4a9820 = 0x0; _0x4a9820 < _0x3a34ca['length']; _0x4a9820++) {
                        try {
                            await _0xbf3e86(_0x3a34ca, _0x4a9820);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x387f4d(_0x3756ee, _0x53ed27, _0x986f62, _0x4e96f5, _0x473106) {
                            var _0x15bce1, _0x441442 = {}, _0x36ae28 = [], _0x41daf1 = {}, _0x280ee9 = [
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
                            ], _0x37b20b = Math['round'](Math['random']() * (_0x280ee9['length'] - 0x1));
                            !_0x4e96f5 && (_0x4e96f5 = {});
                            if (_0x53ed27 != 'ver') {
                                _0x230bf5(_0x986f62['name'] + '\x20Task\x20' + (_0x3756ee + 0x1) + '\x20/\x20' + _0x4e96f5['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453), await _0xbf3e86(_0x4e96f5, _0x3756ee), _0x441442 = _0x986f62['data'], _0x441442['data']['attributes']['email'] = '' + _0x4e96f5[_0x3756ee]['Email'];
                                if (_0x4e96f5[_0x3756ee]['Size'] == 'RANDOM') {
                                }
                                _0x441442['data']['attributes']['properties']['$first_name'] = '' + _0x4e96f5[_0x3756ee]['FirstName'], _0x441442['data']['attributes']['properties']['$last_name'] = '' + _0x4e96f5[_0x3756ee]['LastName'], _0x441442['data']['attributes']['properties']['$address1'] = _0x4e96f5[_0x3756ee]['Address1'] + '\x20' + _0x4e96f5[_0x3756ee]['Address2'] + '\x20' + _0x4e96f5[_0x3756ee]['HouseNumber'], _0x441442['data']['attributes']['properties']['$zip'] = '' + _0x4e96f5[_0x3756ee]['Zip'], _0x441442['data']['attributes']['properties']['$city'] = '' + _0x4e96f5[_0x3756ee]['City'], _0x441442['data']['attributes']['properties']['$country'] = '' + _0x4e96f5[_0x3756ee]['Country'], _0x4e96f5[_0x3756ee]['Size'] == 'RANDOM' ? _0x441442['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x280ee9[_0x37b20b] : _0x441442['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4e96f5[_0x3756ee]['Size'], _0x441442['data']['attributes']['properties']['$phone_number'] = '' + _0x4e96f5[_0x3756ee]['Phone'], _0x441442['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4e96f5[_0x3756ee]['Follower'];
                            }
                            if (_0x56452b['useRandomProxy'] = ![])
                                var _0x5e4687 = _0x473106[_0x3756ee]['split'](':');
                            else
                                var _0x1227a9 = Math['round'](Math['random']() * (_0x473106['length'] - 0x1)), _0x5e4687 = _0x473106[_0x1227a9]['split'](':');
                            var _0x2322cd = {
                                'jar': _0x39ed9e,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x986f62['url'],
                                'headers': _0x986f62['headers'],
                                'body': JSON['stringify'](_0x441442),
                                'proxy': 'http://' + _0x5e4687[0x2] + ':' + _0x5e4687[0x3] + '@' + _0x5e4687[0x0] + ':' + _0x5e4687[0x1]
                            };
                            return _0x53ed27 != 'ver' && (_0x2322cd['url'] = _0x986f62['url'], _0x2322cd['headers'] = _0x986f62['headers']), _0x53ed27 == 'ver' && (_0x2322cd['method'] = 'GET'), new Promise(function (_0xc48e17, _0x18978f) {
                                callback = async (_0x97c5d0, _0x333238, _0x576f3e) => {
                                    if (!_0x97c5d0 && _0x333238['statusCode'] == 0xca || !_0x97c5d0 && _0x333238['statusCode'] == 0xc8) {
                                        if (_0x53ed27 != 'ver') {
                                            var _0xa5bff7 = await _0xb7405e(_0x4e96f5[_0x3756ee], _0x986f62, 'dev', ![]), _0x5b76ce = await _0xb7405e(_0x4e96f5[_0x3756ee], _0x986f62, 'pub', ![]);
                                            const _0x377065 = {
                                                'succesDEVMSG': { 'embeds': [_0xa5bff7] },
                                                'succesPUBMSG': { 'embeds': [_0x5b76ce] }
                                            };
                                            if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                                try {
                                                    await _0xb69523(_0x56452b['webhook'], _0x377065['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x377065['succesDEVMSG']), await _0x37e661(0xc8);
                                            try {
                                                await _0xb69523(_0x460ce8, _0x377065['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3324c5(_0x4e96f5[_0x3756ee], _0x986f62);
                                        }
                                        _0xc48e17(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x986f62['name'] + ']\x20Task\x20' + (_0x3756ee + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x53ed27 != 'ver') {
                                            var _0x28881f = '' + _0x97c5d0, _0x3b9a12 = await _0xb7405e(_0x4e96f5[_0x3756ee], _0x986f62, 'dev', !![], _0x28881f), _0x209355 = {};
                                            _0x209355['errorDEV'] = { 'embeds': [_0x3b9a12] }, _0x48023a(_0x4e96f5[_0x3756ee], _0x986f62), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x209355['errorDEV']), await _0xb69523(_0x1a5beb, _0x209355['errorDEV']);
                                        }
                                        _0x18978f(console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x986f62['name'] + ']\x20Task\x20' + (_0x3756ee + 0x1) + ':\x20' + _0x97c5d0)));
                                    }
                                };
                                try {
                                    _0x53ed27 != 'ver' && console['log'](_0x3071a0() + '\x20[' + _0x986f62['name'] + ']\x20Task\x20' + (_0x3756ee + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x441442['data']['attributes']['email']), _0x808e24(_0x2322cd, callback);
                                } catch (_0xfbac1c) {
                                    console['log'](_0x3071a0() + '\x20Task\x20' + (_0x3756ee + 0x1) + ':\x20' + _0xfbac1c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x387f4d(_0x4a9820, 'nor', _0x1d2a12, _0x3a34ca, _0x3e11a3), console['log'](_0x3071a0() + '\x20[' + _0x1d2a12['name'] + ']\x20Sleeping\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        } catch (_0x58d32a) {
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
                'function': async function (_0x1b79c0, _0x202b77, _0x2ad40b) {
                    var _0x333741 = [], _0x389963 = ![];
                    async function _0x2d0211() {
                        var _0x1a6eaf = new _0x9cc471({
                            'user': _0x56452b['masterMail'],
                            'password': _0x56452b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x329584(_0x5ee619) {
                            _0x1a6eaf['openBox']('INBOX', ![], _0x5ee619);
                        }
                        _0x1a6eaf['once']('ready', function () {
                            _0x329584(function (_0x811426, _0x1a8ed5) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x811426)
                                    throw _0x811426;
                                _0x1a6eaf['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x23a470, _0xbbe441) {
                                    if (!_0xbbe441 || !_0xbbe441['length'])
                                        console['log'](_0x3071a0() + '\x20[' + _0x1b79c0['name'] + ']\x20No\x20mails\x20found'), _0x1a6eaf['end']();
                                    else {
                                        var _0x54c244 = _0x1a6eaf['seq']['fetch'](_0xbbe441, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x54c244['on']('message', function (_0x274975, _0x4d63e1) {
                                            var _0x23ba92 = '(#' + _0x4d63e1 + ')\x20';
                                            _0x274975['on']('body', function (_0x203f9a, _0x14c4a4) {
                                                _0x535dc1(_0x203f9a, (_0x32b0aa, _0x2e42bd) => {
                                                    var _0x16b100 = _0x2e42bd['text']['split']('(')[0x1], _0x1a7566 = _0x16b100['split'](')')[0x0];
                                                    _0x333741['push'](_0x1a7566);
                                                });
                                            }), _0x274975['once']('end', function () {
                                            });
                                        }), _0x54c244['once']('error', function (_0x4727bb) {
                                            console['log']('Fetch\x20error:\x20' + _0x4727bb), _0x389963 = !![];
                                        }), _0x54c244['once']('end', function () {
                                            _0x1a6eaf['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1a6eaf['once']('error', function (_0x35fd89) {
                            console['log'](_0x37c850['red'](_0x35fd89['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x389963 = !![];
                        }), _0x1a6eaf['once']('end', async function () {
                            _0x389963 = !![];
                        }), _0x1a6eaf['connect']();
                    }
                    async function _0x5a0d87(_0x52dcdb, _0x15230c, _0x510f1e) {
                        for (var _0x33dabc = 0x0; _0x33dabc < _0x15230c['length']; _0x33dabc++) {
                            async function _0x272676(_0x473625, _0x2071c8, _0x386536, _0x5a4a18, _0x2bdf65) {
                                var _0x2f41a9, _0x1d9f0b = {}, _0x55ec12 = [], _0x6d1fbb = {}, _0x1c45e3 = [
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
                                ], _0x36f703 = Math['round'](Math['random']() * (_0x1c45e3['length'] - 0x1));
                                _0x5a4a18[_0x473625]['Size'] == 'RANDOM' && (_0x5a4a18[_0x473625]['Size'] = _0x1c45e3[_0x36f703]);
                                !_0x5a4a18 && (_0x5a4a18 = {});
                                if (_0x56452b['useRandomProxy'] = ![])
                                    var _0x4129ea = _0x2bdf65[_0x473625]['split'](':');
                                else
                                    var _0xfa72 = Math['round'](Math['random']() * (_0x2bdf65['length'] - 0x1)), _0x4129ea = _0x2bdf65[_0xfa72]['split'](':');
                                var _0x3d56c6 = {
                                    'jar': _0x39ed9e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x386536['url'],
                                    'headers': _0x386536['headers'],
                                    'body': JSON['stringify'](_0x1d9f0b),
                                    'proxy': 'http://' + _0x4129ea[0x2] + ':' + _0x4129ea[0x3] + '@' + _0x4129ea[0x0] + ':' + _0x4129ea[0x1]
                                };
                                return _0x2071c8 != 'ver' && (_0x3d56c6['url'] = _0x386536['url'], _0x3d56c6['headers'] = _0x386536['headers']), _0x2071c8 == 'ver' && (_0x3d56c6['method'] = 'GET', _0x3d56c6['url'] = _0x5a4a18[_0x473625]), new Promise(function (_0x3544b3, _0x2c98ad) {
                                    callback = async (_0x2f055c, _0x356bb6, _0x1289c5) => {
                                        if (!_0x2f055c && _0x356bb6['statusCode'] == 0xca || !_0x2f055c && _0x356bb6['statusCode'] == 0xc8) {
                                            if (_0x2071c8 != 'ver') {
                                                var _0x3d6b28 = await _0xb7405e(_0x5a4a18[_0x473625], _0x386536, 'dev', ![]), _0x6c7fb2 = await _0xb7405e(_0x5a4a18[_0x473625], _0x386536, 'pub', ![]);
                                                const _0x14de21 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3d6b28] },
                                                    'succesPUBMSG': { 'embeds': [_0x6c7fb2] }
                                                };
                                                if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                                    try {
                                                        await _0xb69523(_0x56452b['webhook'], _0x14de21['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x14de21['succesDEVMSG']), await _0x37e661(0xc8);
                                                try {
                                                    await _0xb69523(_0x460ce8, _0x14de21['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3324c5(_0x5a4a18[_0x473625], _0x386536);
                                            }
                                            _0x3544b3(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x386536['name'] + ']\x20Task\x20' + (_0x473625 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2071c8 != 'ver') {
                                                var _0x199a48 = '' + _0x2f055c, _0x1aea01 = await _0xb7405e(_0x5a4a18[_0x473625], _0x386536, 'dev', !![], _0x199a48), _0x44c1c2 = {};
                                                _0x44c1c2['errorDEV'] = { 'embeds': [_0x1aea01] }, _0x48023a(_0x5a4a18[_0x473625], _0x386536), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x44c1c2['errorDEV']), await _0xb69523(_0x1a5beb, _0x44c1c2['errorDEV']);
                                            }
                                            _0x2c98ad(console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x386536['name'] + ']\x20Task\x20' + (_0x473625 + 0x1) + ':\x20' + _0x2f055c)));
                                        }
                                    };
                                    try {
                                        _0x2071c8 != 'ver' ? console['log'](_0x3071a0() + '\x20[' + _0x386536['name'] + ']\x20Task\x20' + (_0x473625 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1d9f0b['data']['attributes']['email']) : console['log'](_0x3071a0() + '\x20[' + _0x386536['name'] + ']\x20Task\x20' + (_0x473625 + 0x1) + ':\x20Fetching\x20Response'), _0x808e24(_0x3d56c6, callback);
                                    } catch (_0x28cf5c) {
                                        console['log'](_0x3071a0() + '\x20Task\x20' + (_0x473625 + 0x1) + ':\x20' + _0x28cf5c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x272676(_0x33dabc, 'ver', _0x52dcdb, _0x15230c, _0x510f1e), console['log'](_0x3071a0() + '\x20[' + _0x52dcdb['name'] + ']\x20Sleeping\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                            } catch (_0x2a6b01) {
                            }
                        }
                    }
                    try {
                        _0x2d0211();
                        while (!_0x389963) {
                            await _0x37e661(0xbb8);
                        }
                        console['log']('Found\x20' + _0x333741['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37e661(0x9c4);
                    }
                    await _0x5a0d87(_0x1b79c0, _0x333741, _0x2ad40b);
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
                            'list_id': 'R8PmER',
                            'custom_source': 'DR5415-103',
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
                                '$consent_form_id': 'R6z7uT',
                                '$consent_form_version': 0x833bbb,
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
                'function': async function (_0x59c42f, _0x3f706e, _0x5790e4) {
                    for (var _0xf33c1e = 0x0; _0xf33c1e < _0x3f706e['length']; _0xf33c1e++) {
                        try {
                            await _0xbf3e86(_0x3f706e, _0xf33c1e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x32ade1(_0x5299de, _0x5499b6, _0x4a0a48, _0x1308e4, _0x443010) {
                            var _0x134fdd, _0x2e80fd = {}, _0x4935af = [], _0x38c6fb = {}, _0x862418 = [
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
                            ], _0x32097d = Math['round'](Math['random']() * (_0x862418['length'] - 0x1));
                            !_0x1308e4 && (_0x1308e4 = {});
                            if (_0x5499b6 != 'ver') {
                                _0x230bf5(_0x4a0a48['name'] + '\x20Task\x20' + (_0x5299de + 0x1) + '\x20/\x20' + _0x1308e4['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453), _0x4935af = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x54cb3f
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x1308e4[_0x5299de]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x56452b['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x519edc
                                        }
                                    ]
                                }], _0x38c6fb = { 'embeds': _0x4935af }, _0x2e80fd = _0x4a0a48['data'], _0x2e80fd['data']['attributes']['email'] = '' + _0x1308e4[_0x5299de]['Email'];
                                if (_0x1308e4[_0x5299de]['Size'] == 'RANDOM') {
                                }
                                _0x2e80fd['data']['attributes']['properties']['$first_name'] = '' + _0x1308e4[_0x5299de]['FirstName'], _0x2e80fd['data']['attributes']['properties']['$last_name'] = '' + _0x1308e4[_0x5299de]['LastName'], _0x2e80fd['data']['attributes']['properties']['$address1'] = _0x1308e4[_0x5299de]['Address1'] + '\x20' + _0x1308e4[_0x5299de]['Address2'] + '\x20' + _0x1308e4[_0x5299de]['HouseNumber'], _0x2e80fd['data']['attributes']['properties']['$zip'] = '' + _0x1308e4[_0x5299de]['Zip'], _0x2e80fd['data']['attributes']['properties']['$city'] = '' + _0x1308e4[_0x5299de]['City'], _0x2e80fd['data']['attributes']['properties']['$country'] = '' + _0x1308e4[_0x5299de]['Country'], _0x1308e4[_0x5299de]['Size'] == 'RANDOM' ? _0x2e80fd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x862418[_0x32097d] : _0x2e80fd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1308e4[_0x5299de]['Size'], _0x2e80fd['data']['attributes']['properties']['$phone_number'] = '' + _0x1308e4[_0x5299de]['Phone'], _0x2e80fd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1308e4[_0x5299de]['Follower'];
                            }
                            if (_0x56452b['useRandomProxy'] = ![])
                                var _0x21f8e6 = _0x443010[_0x5299de]['split'](':');
                            else
                                var _0x4da96a = Math['round'](Math['random']() * (_0x443010['length'] - 0x1)), _0x21f8e6 = _0x443010[_0x4da96a]['split'](':');
                            var _0x570dc0 = {
                                'jar': _0x39ed9e,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4a0a48['url'],
                                'headers': _0x4a0a48['headers'],
                                'body': JSON['stringify'](_0x2e80fd),
                                'proxy': 'http://' + _0x21f8e6[0x2] + ':' + _0x21f8e6[0x3] + '@' + _0x21f8e6[0x0] + ':' + _0x21f8e6[0x1]
                            };
                            return _0x5499b6 != 'ver' && (_0x570dc0['url'] = _0x4a0a48['url'], _0x570dc0['headers'] = _0x4a0a48['headers']), _0x5499b6 == 'ver' && (_0x570dc0['method'] = 'GET'), new Promise(function (_0x3a705f, _0x49cd22) {
                                callback = async (_0x301770, _0x3973ce, _0x502847) => {
                                    if (!_0x301770 && _0x3973ce['statusCode'] == 0xca || !_0x301770 && _0x3973ce['statusCode'] == 0xc8) {
                                        if (_0x5499b6 != 'ver') {
                                            var _0x4f021e = await _0xb7405e(_0x1308e4[_0x5299de], _0x4a0a48, 'dev', ![]), _0x28ba56 = await _0xb7405e(_0x1308e4[_0x5299de], _0x4a0a48, 'pub', ![]);
                                            const _0x25cded = {
                                                'succesDEVMSG': { 'embeds': [_0x4f021e] },
                                                'succesPUBMSG': { 'embeds': [_0x28ba56] }
                                            };
                                            if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                                try {
                                                    await _0xb69523(_0x56452b['webhook'], _0x25cded['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x25cded['succesDEVMSG']), await _0x37e661(0xc8);
                                            try {
                                                await _0xb69523(_0x460ce8, _0x25cded['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3324c5(_0x1308e4[_0x5299de], _0x4a0a48);
                                        }
                                        _0x3a705f(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x4a0a48['name'] + ']\x20Task\x20' + (_0x5299de + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5499b6 != 'ver') {
                                            var _0x22963a = '' + _0x301770, _0x4d71c = await _0xb7405e(_0x1308e4[_0x5299de], _0x4a0a48, 'dev', !![], _0x22963a), _0x593eee = {};
                                            _0x593eee['errorDEV'] = { 'embeds': [_0x4d71c] }, _0x48023a(_0x1308e4[_0x5299de], _0x4a0a48), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x593eee['errorDEV']), await _0xb69523(_0x1a5beb, _0x593eee['errorDEV']);
                                        }
                                        _0x49cd22(console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x4a0a48['name'] + ']\x20Task\x20' + (_0x5299de + 0x1) + ':\x20' + _0x301770)));
                                    }
                                };
                                try {
                                    _0x5499b6 != 'ver' && console['log'](_0x3071a0() + '\x20[' + _0x4a0a48['name'] + ']\x20Task\x20' + (_0x5299de + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e80fd['data']['attributes']['email']), _0x808e24(_0x570dc0, callback);
                                } catch (_0x1a3b84) {
                                    console['log'](_0x3071a0() + '\x20Task\x20' + (_0x5299de + 0x1) + ':\x20' + _0x1a3b84);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x32ade1(_0xf33c1e, 'nor', _0x59c42f, _0x3f706e, _0x5790e4), console['log'](_0x3071a0() + '\x20[' + _0x59c42f['name'] + ']\x20Sleeping\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        } catch (_0x5c3f65) {
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
                'function': async function (_0x7f6626, _0x3371e0, _0x2c13de) {
                    var _0x3371e0 = [], _0x3e8612 = ![];
                    async function _0x588486() {
                        var _0xa2f51c = new _0x9cc471({
                            'user': _0x56452b['masterMail'],
                            'password': _0x56452b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4f86fe(_0x4e05c9) {
                            _0xa2f51c['openBox']('INBOX', ![], _0x4e05c9);
                        }
                        _0xa2f51c['once']('ready', function () {
                            _0x4f86fe(function (_0x1955d4, _0xb33014) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1955d4)
                                    throw _0x1955d4;
                                _0xa2f51c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x4cf480, _0x393231) {
                                    if (!_0x393231 || !_0x393231['length'])
                                        console['log'](_0x3071a0() + '\x20[' + _0x7f6626['name'] + ']\x20No\x20mails\x20found'), _0xa2f51c['end']();
                                    else {
                                        var _0x3830b7 = _0xa2f51c['seq']['fetch'](_0x393231, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3830b7['on']('message', function (_0x1bf67b, _0x16dade) {
                                            var _0x1bf293 = '(#' + _0x16dade + ')\x20';
                                            _0x1bf67b['on']('body', function (_0x15ae16, _0x99f61c) {
                                                _0x535dc1(_0x15ae16, (_0x5206bc, _0xfb4d2b) => {
                                                    var _0x130de9 = _0xfb4d2b['text']['split']('(')[0x1], _0x4ae9b2 = _0x130de9['split'](')')[0x0];
                                                    _0x3371e0['push'](_0x4ae9b2);
                                                });
                                            }), _0x1bf67b['once']('end', function () {
                                            });
                                        }), _0x3830b7['once']('error', function (_0xf61c11) {
                                            console['log']('Fetch\x20error:\x20' + _0xf61c11), _0x3e8612 = !![];
                                        }), _0x3830b7['once']('end', function () {
                                            _0xa2f51c['end'](), _0x3e8612 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xa2f51c['once']('error', function (_0x15d791) {
                            console['log'](_0x15d791), _0x3e8612 = !![];
                        }), _0xa2f51c['once']('end', async function () {
                            _0x3e8612 = !![];
                        }), _0xa2f51c['connect']();
                    }
                    async function _0x2e39e0(_0x106b90, _0x51dc78, _0x5558a5) {
                        for (var _0x36938b = 0x0; _0x36938b < _0x51dc78['length']; _0x36938b++) {
                            async function _0x51fad5(_0x134897, _0x45db3d, _0x2ead59, _0x4f80fa, _0x865fa9) {
                                var _0xba1322, _0x356e7b = {}, _0x38d4f9 = [], _0x2e5348 = {}, _0x539cca = [
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
                                ], _0x218654 = Math['round'](Math['random']() * (_0x539cca['length'] - 0x1));
                                _0x4f80fa[_0x134897]['Size'] == 'RANDOM' && (_0x4f80fa[_0x134897]['Size'] = _0x539cca[_0x218654]);
                                !_0x4f80fa && (_0x4f80fa = {});
                                if (_0x56452b['useRandomProxy'] = ![])
                                    var _0x2ac444 = _0x865fa9[_0x134897]['split'](':');
                                else
                                    var _0x2ab1fd = Math['round'](Math['random']() * (_0x865fa9['length'] - 0x1)), _0x2ac444 = _0x865fa9[_0x2ab1fd]['split'](':');
                                var _0x217646 = {
                                    'jar': _0x39ed9e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2ead59['url'],
                                    'headers': _0x2ead59['headers'],
                                    'body': JSON['stringify'](_0x356e7b),
                                    'proxy': 'http://' + _0x2ac444[0x2] + ':' + _0x2ac444[0x3] + '@' + _0x2ac444[0x0] + ':' + _0x2ac444[0x1]
                                };
                                return _0x45db3d != 'ver' && (_0x217646['url'] = _0x2ead59['url'], _0x217646['headers'] = _0x2ead59['headers']), _0x45db3d == 'ver' && (_0x217646['method'] = 'GET', _0x217646['url'] = _0x4f80fa[_0x134897]), new Promise(function (_0xddaac4, _0x250d41) {
                                    callback = async (_0x145e04, _0x274a29, _0x2656f5) => {
                                        if (!_0x145e04 && _0x274a29['statusCode'] == 0xca || !_0x145e04 && _0x274a29['statusCode'] == 0xc8) {
                                            if (_0x45db3d != 'ver') {
                                                var _0x3260e3 = await _0xb7405e(_0x4f80fa[_0x134897], _0x2ead59, 'dev', ![]), _0x5a1b47 = await _0xb7405e(_0x4f80fa[_0x134897], _0x2ead59, 'pub', ![]);
                                                const _0xb68753 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3260e3] },
                                                    'succesPUBMSG': { 'embeds': [_0x5a1b47] }
                                                };
                                                if (_0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '')
                                                    try {
                                                        await _0xb69523(_0x56452b['webhook'], _0xb68753['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0xb68753['succesDEVMSG']), await _0x37e661(0xc8);
                                                try {
                                                    await _0xb69523(_0x460ce8, _0xb68753['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3324c5(_0x4f80fa[_0x134897], _0x2ead59);
                                            }
                                            _0xddaac4(console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x2ead59['name'] + ']\x20Task\x20' + (_0x134897 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x45db3d != 'ver') {
                                                var _0x5170df = '' + _0x145e04, _0x163163 = await _0xb7405e(_0x4f80fa[_0x134897], _0x2ead59, 'dev', !![], _0x5170df), _0x2f6e1a = {};
                                                _0x2f6e1a['errorDEV'] = { 'embeds': [_0x163163] }, _0x48023a(_0x4f80fa[_0x134897], _0x2ead59), _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x2f6e1a['errorDEV']), await _0xb69523(_0x1a5beb, _0x2f6e1a['errorDEV']);
                                            }
                                            _0x250d41(console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x2ead59['name'] + ']\x20Task\x20' + (_0x134897 + 0x1) + ':\x20' + _0x145e04)));
                                        }
                                    };
                                    try {
                                        _0x45db3d != 'ver' ? console['log'](_0x3071a0() + '\x20[' + _0x2ead59['name'] + ']\x20Task\x20' + (_0x134897 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x356e7b['data']['attributes']['email']) : console['log'](_0x3071a0() + '\x20[' + _0x2ead59['name'] + ']\x20Task\x20' + (_0x134897 + 0x1) + ':\x20Fetching\x20Response'), _0x808e24(_0x217646, callback);
                                    } catch (_0x326238) {
                                        console['log'](_0x3071a0() + '\x20Task\x20' + (_0x134897 + 0x1) + ':\x20' + _0x326238);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x51fad5(_0x36938b, 'ver', _0x106b90, _0x51dc78, _0x5558a5), console['log'](_0x3071a0() + '\x20[' + _0x106b90['name'] + ']\x20Sleeping\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                            } catch (_0x558662) {
                            }
                        }
                    }
                    try {
                        _0x588486();
                        while (!_0x3e8612) {
                            await _0x37e661(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3371e0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2e39e0(_0x7f6626, _0x3371e0, _0x2c13de);
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
                'function': async function (_0xb6f0cb, _0x1ca843, _0x49c51a) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x7becbd = 0x0; _0x7becbd < _0x1ca843['length']; _0x7becbd++) {
                        var _0x5b691b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54cb3f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x56452b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x519edc
                                }
                            ]
                        }];
                        const _0x1b619f = { 'embeds': _0x5b691b };
                        _0x230bf5(_0xb6f0cb['name'] + '\x20Task\x20' + (_0x7becbd + 0x1) + '\x20/\x20' + _0x1ca843['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        try {
                            await _0xbf3e86(_0x1ca843, _0x7becbd);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x705925 = await _0xb7405e(_0x1ca843[_0x7becbd], _0xb6f0cb, 'acc', ![]);
                        const _0x3d77b4 = { 'succesDEVMSG': { 'embeds': [_0x705925] } };
                        if (_0x1ca843[_0x7becbd]['Email'] == '' || _0x1ca843[_0x7becbd]['FirstName'] == '' || _0x1ca843[_0x7becbd]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x37e661(0x7d0);
                            continue;
                        }
                        (_0x1ca843[_0x7becbd]['Password'] == '' || _0x1ca843[_0x7becbd] == undefined) && _0x1ca843[_0x7becbd]['Password'] == 'JRaffles23!';
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x5d0158 = _0x49c51a[_0x7becbd]['split'](':');
                        else
                            var _0x3c400a = Math['round'](Math['random']() * (_0x49c51a['length'] - 0x1)), _0x5d0158 = _0x49c51a[_0x3c400a]['split'](':');
                        const _0x2c9417 = await _0x206049['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5d0158[0x0] + ':' + _0x5d0158[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x28dd54 = await _0x2c9417['newPage']();
                            await _0x28dd54['authenticate']({
                                'username': '' + _0x5d0158[0x2],
                                'password': '' + _0x5d0158[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0xb6f0cb['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28dd54['setRequestInterception'](!![]), _0x28dd54['on']('request', _0x138949 => {
                                _0x138949['resourceType']() === 'image' || _0x138949['resourceType']() === 'font' || _0x138949['resourceType']() === 'media' ? _0x138949['abort']() : _0x138949['continue']();
                            }), await _0x28dd54['goto']('https://patta.nl/account/register'), await _0x37e661(0xbb8), await _0x28dd54['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3071a0() + '\x20[' + _0xb6f0cb['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Filling\x20information'), await _0x28dd54['type']('#RegisterForm-FirstName', '' + _0x1ca843[_0x7becbd]['FirstName']), await _0x37e661(0x226), await _0x28dd54['type']('#RegisterForm-LastName', '' + _0x1ca843[_0x7becbd]['LastName']), await _0x37e661(0x226), await _0x28dd54['type']('#RegisterForm-email', '' + _0x1ca843[_0x7becbd]['Email']), await _0x37e661(0x226), await _0x28dd54['type']('#RegisterForm-password', '' + _0x1ca843[_0x7becbd]['Password']), await _0x37e661(0x226), console['log'](_0x3071a0() + '\x20[' + _0xb6f0cb['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Submitting..'), await _0x28dd54['$eval']('#RegisterForm', _0x3e185d => _0x3e185d['submit']()), await _0x37e661(0x1f40);
                            try {
                                await _0x28dd54['waitForSelector']('.home-page-grid__collection'), await _0x37e661(0x1f4), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0xb6f0cb['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Account\x20' + _0x1ca843[_0x7becbd]['Email'] + '\x20Generated!')), _0x46e118['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1ca843[_0x7becbd]['Email'] + ',' + _0x1ca843[_0x7becbd]['Password']), console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0xb6f0cb['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Account\x20' + _0x1ca843[_0x7becbd]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x3d77b4['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb69523(_0x17b64, _0x3d77b4['succesDEVMSG']);
                            } catch (_0x30cce4) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x30cce4));
                            }
                        } catch (_0x3662e0) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x7becbd + 0x1) + '\x20:\x20' + _0x3662e0));
                        } finally {
                            _0x2c9417 && _0x2c9417['close'](), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x1ae498, _0x1bd851, _0x4431d6) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x119aaf = 0x0; _0x119aaf < _0x1bd851['length']; _0x119aaf++) {
                        var _0x127e0f;
                        if (_0x547b19 != 'yes')
                            var _0x547b19 = '', _0x363439 = 0x0;
                        _0x230bf5(_0x1ae498['name'] + '\x20Task\x20' + (_0x119aaf + 0x1) + '\x20/\x20' + _0x1bd851['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        try {
                            await _0xbf3e86(_0x1bd851, _0x119aaf);
                        } catch {
                            _0x547b19 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1bd851[_0x119aaf]['Email'] == '' || _0x1bd851[_0x119aaf]['Password'] == '' || _0x1bd851[_0x119aaf]['FirstName'] == '' || _0x1bd851[_0x119aaf]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x34949f = _0x4431d6[_0x119aaf]['split'](':');
                        else
                            var _0x37ae8c = Math['round'](Math['random']() * (_0x4431d6['length'] - 0x1)), _0x34949f = _0x4431d6[_0x37ae8c]['split'](':');
                        const _0x2a97fe = await _0x206049['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x34949f[0x0] + ':' + _0x34949f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x261027 = await _0x2a97fe['newPage']();
                            await _0x261027['authenticate']({
                                'username': '' + _0x34949f[0x2],
                                'password': '' + _0x34949f[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x261027['setRequestInterception'](!![]), _0x261027['on']('request', _0x540e83 => {
                                _0x540e83['resourceType']() === 'image' || _0x540e83['resourceType']() === 'font' || _0x540e83['resourceType']() === 'media' ? _0x540e83['abort']() : _0x540e83['continue']();
                            }), await _0x261027['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x261027['waitForSelector']('#CustomerEmail'), console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Logging\x20in..'), await _0x261027['type']('#CustomerEmail', '' + _0x1bd851[_0x119aaf]['Email']), await _0x37e661(0x12c), await _0x261027['type']('#CustomerPassword', '' + _0x1bd851[_0x119aaf]['Password']), await _0x37e661(0x226), await _0x261027['$eval']('#customer_login', _0x15542e => _0x15542e['submit']());
                            try {
                                await _0x261027['waitForSelector']('#orders'), await _0x37e661(0x4b0);
                            } catch {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x261027['goto']('' + _0x1bd851[_0x119aaf]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x37e661(0xbb8), console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x261027['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x261027['type']('#email', '' + _0x1bd851[_0x119aaf]['Email']), await _0x37e661(0x384), await _0x261027['type']('#first_name', '' + _0x1bd851[_0x119aaf]['FirstName']), await _0x37e661(0x514), await _0x261027['type']('#last_name', '' + _0x1bd851[_0x119aaf]['LastName']), await _0x37e661(0x514), await _0x261027['type']('#street_address', _0x1bd851[_0x119aaf]['Address1'] + '\x20' + _0x1bd851[_0x119aaf]['HouseNumber'] + '\x20' + _0x1bd851[_0x119aaf]['Address2']), await _0x37e661(0x2bc);
                            _0x1bd851[_0x119aaf]['Postcode'] == undefined && (_0x1bd851[_0x119aaf]['Postcode'] = _0x1bd851[_0x119aaf]['Zip']);
                            await _0x261027['type']('#zip_code', '' + _0x1bd851[_0x119aaf]['Postcode']), await _0x37e661(0x320), await _0x261027['type']('#city', '' + _0x1bd851[_0x119aaf]['City']), await _0x37e661(0x320), await _0x261027['type']('#bday', '01/01/1994'), await _0x37e661(0x320), await _0x261027['type']('#instagram', '' + _0x1bd851[_0x119aaf]['Follower']), await _0x37e661(0x352);
                            if (_0x1bd851[_0x119aaf]['Size'] == 'RANDOM') {
                                const _0x2a1b94 = await _0x261027['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2082a3 => {
                                    return _0x2082a3['map'](_0x455856 => _0x455856['textContent']);
                                });
                                var _0x1a1645 = Math['round'](Math['random']() * (_0x2a1b94['length'] - 0x1));
                                console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2a1b94[_0x1a1645]), await _0x261027['click']('label[data-eu-size=\x22' + _0x2a1b94[_0x1a1645] + '\x22]');
                            } else {
                                console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1bd851[_0x119aaf]['Size']);
                                try {
                                    await _0x261027['click']('label[data-eu-size=\x22' + _0x1bd851[_0x119aaf]['Size'] + '\x22]');
                                } catch {
                                    await _0x261027['click']('label[data-eu-size=\x22' + _0x1bd851[_0x119aaf]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x37e661(0xbb8), await _0x261027['$$eval']('.raffle__checkbox-label', _0x5ebfa7 => _0x5ebfa7['forEach'](_0x32221b => _0x32221b['click']())), await _0x37e661(0x7d0), console['log'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x261027['click']('#raffle__form-submit'), await _0x37e661(0x1388);
                            try {
                                await _0x261027['waitForSelector']('#raffle__confirmation-message-container'), _0x547b19 = 'no', _0x3324c5(_0x1bd851[_0x119aaf], _0x1ae498), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x158e95) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x158e95));
                            }
                        } catch (_0x2270c4) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20' + _0x2270c4)), _0x547b19 = 'yes';
                        } finally {
                            _0x2a97fe && _0x2a97fe['close']();
                            if (_0x547b19 == 'yes' && _0x363439 != 0x5 && _0x127e0f != 'Size\x20Not\x20Found') {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x1ae498['name'] + ']\x20Task\x20' + (_0x119aaf + 0x1) + '\x20:\x20Retrying\x20(' + _0x363439 + '\x20/\x205)')), _0x119aaf = _0x119aaf - 0x1, _0x363439 = _0x363439 + 0x1;
                                continue;
                            }
                            _0x547b19 == 'yes' && _0x363439 >= 0x5 && (_0x48023a(_0x1bd851[_0x119aaf], _0x1ae498), _0x547b19 = 'no', _0x363439 = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
                'function': async function (_0x14e0bc, _0x26677f, _0x19628e) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a4606 = 0x0; _0x3a4606 < _0x26677f['length']; _0x3a4606++) {
                        if (_0x462efc != 'yes')
                            var _0x462efc = '', _0x2601cc = 0x0;
                        var _0x25b71e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x54cb3f
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x56452b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x519edc
                                }
                            ]
                        }];
                        const _0xaa545e = { 'embeds': _0x25b71e };
                        _0x230bf5(_0x14e0bc['name'] + '\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20/\x20' + _0x26677f['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        try {
                            await _0xbf3e86(_0x26677f, _0x3a4606);
                        } catch {
                            _0x462efc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2b752a = await _0xb7405e(_0x26677f[_0x3a4606], _0x14e0bc, 'acc', ![]);
                        const _0x5bd8a8 = { 'succesDEVMSG': { 'embeds': [_0x2b752a] } };
                        if (_0x26677f[_0x3a4606]['Email'] == '' || _0x26677f[_0x3a4606]['FirstName'] == '' || _0x26677f[_0x3a4606]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x37e661(0x7d0);
                            continue;
                        }
                        (_0x26677f[_0x3a4606]['Password'] == '' || _0x26677f[_0x3a4606] == undefined) && _0x26677f[_0x3a4606]['Password'] == 'JRaffles23!';
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x1e7d29 = _0x19628e[_0x3a4606]['split'](':');
                        else
                            var _0x4fc8c3 = Math['round'](Math['random']() * (_0x19628e['length'] - 0x1)), _0x1e7d29 = _0x19628e[_0x4fc8c3]['split'](':');
                        var _0x3e0c51;
                        try {
                            _0x3e0c51 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e7d29[0x0] + ':' + _0x1e7d29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3e0c51 = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e7d29[0x0] + ':' + _0x1e7d29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4db395 = await _0x3e0c51['newPage']();
                            await _0x4db395['authenticate']({
                                'username': '' + _0x1e7d29[0x2],
                                'password': '' + _0x1e7d29[0x3]
                            }), console['log'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4db395['setRequestInterception'](!![]), _0x4db395['on']('request', _0x3b9dea => {
                                _0x3b9dea['resourceType']() === 'image' || _0x3b9dea['resourceType']() === 'font' || _0x3b9dea['resourceType']() === 'media' ? _0x3b9dea['abort']() : _0x3b9dea['continue']();
                            }), await _0x4db395['goto']('https://drop.slamjam.com/account/register'), await _0x37e661(0xbb8), await _0x4db395['waitForSelector']('#FirstName'), await _0x4db395['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4db395['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Filling\x20information'), await _0x37e661(0x4b0), await _0x4db395['type']('#FirstName', '' + _0x26677f[_0x3a4606]['FirstName']), await _0x37e661(0x226), await _0x4db395['type']('#LastName', '' + _0x26677f[_0x3a4606]['LastName']), await _0x37e661(0x226), await _0x4db395['type']('#Email', '' + _0x26677f[_0x3a4606]['Email']), await _0x37e661(0x2ee), await _0x4db395['type']('#ConfirmEmail', '' + _0x26677f[_0x3a4606]['Email']), await _0x37e661(0x2ee), await _0x4db395['type']('#CreatePassword', '' + _0x26677f[_0x3a4606]['Password']), await _0x37e661(0x2ee), await _0x4db395['type']('#CreateConfirmPassword', '' + _0x26677f[_0x3a4606]['Password']), await _0x37e661(0x226), console['log'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Submitting..'), await _0x4db395['$eval']('#create_customer', _0x2b1437 => _0x2b1437['submit']()), await _0x37e661(0x1388), console['log'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20' + _0x37c850['cyan']('Solving\x20Captcha')), await _0x4db395['solveRecaptchas'](), console['log'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4db395['$eval']('.shopify-challenge__container\x20>\x20form', _0x5c360d => _0x5c360d['submit']());
                            try {
                                await _0x4db395['waitForSelector']('.product-card__image'), await _0x37e661(0x1f4), _0x462efc = 'no', console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Account\x20' + _0x26677f[_0x3a4606]['Email'] + '\x20Generated!')), _0x46e118['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x26677f[_0x3a4606]['Email'] + ',' + _0x26677f[_0x3a4606]['Password']), console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Account\x20' + _0x26677f[_0x3a4606]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x5bd8a8['succesDEVMSG']);
                                } catch {
                                }
                                await _0xb69523(_0x17b64, _0x5bd8a8['succesDEVMSG']);
                            } catch (_0x329764) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x329764));
                            }
                        } catch (_0x27d103) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20' + _0x27d103));
                        } finally {
                            _0x3e0c51 && _0x3e0c51['close']();
                            if (_0x462efc == 'yes' && _0x2601cc != 0x5) {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x14e0bc['name'] + ']\x20Task\x20' + (_0x3a4606 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2601cc + '\x20/\x205)')), _0x3a4606 = _0x3a4606 - 0x1, _0x2601cc = _0x2601cc + 0x1;
                                continue;
                            }
                            _0x462efc == 'yes' && _0x2601cc >= 0x5 && (_0x48023a(_0x26677f[_0x3a4606], _0x14e0bc), _0x462efc = 'no', _0x2601cc = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3bab78, _0x3c7cd6, _0x4539dd) {
                    _0x206049['use'](_0x4a0e3c()), _0x206049['use'](_0x948ff8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x56452b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4b7193 = 0x0; _0x4b7193 < _0x3c7cd6['length']; _0x4b7193++) {
                        var _0x2abaa7;
                        if (_0x4cd29e != 'yes')
                            var _0x4cd29e = '', _0x2fd2ed = 0x0;
                        _0x230bf5(_0x3bab78['name'] + '\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20/\x20' + _0x3c7cd6['length'] + '\x20||\x20File:\x20' + _0x4e4258 + '\x20Proxies:\x20' + _0x5e9453);
                        try {
                            await _0xbf3e86(_0x3c7cd6, _0x4b7193);
                        } catch {
                            _0x4cd29e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3c7cd6[_0x4b7193]['Email'] == '' || _0x3c7cd6[_0x4b7193]['Password'] == '' || _0x3c7cd6[_0x4b7193]['FirstName'] == '' || _0x3c7cd6[_0x4b7193]['LastName'] == '') {
                            console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x56452b['useRandomProxy'] = ![])
                            var _0x21e967 = _0x4539dd[_0x4b7193]['split'](':');
                        else
                            var _0x3aea66 = Math['round'](Math['random']() * (_0x4539dd['length'] - 0x1)), _0x21e967 = _0x4539dd[_0x3aea66]['split'](':');
                        var _0x46b76e;
                        try {
                            _0x46b76e = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x21e967[0x0] + ':' + _0x21e967[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x46b76e = await _0x206049['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x21e967[0x0] + ':' + _0x21e967[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x736ddf = await _0x46b76e['newPage']();
                            await _0x736ddf['authenticate']({
                                'username': '' + _0x21e967[0x2],
                                'password': '' + _0x21e967[0x3]
                            }), await _0x736ddf['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x736ddf['setRequestInterception'](!![]), _0x736ddf['on']('request', _0x38a0e8 => {
                                _0x38a0e8['resourceType']() === 'image' || _0x38a0e8['resourceType']() === 'font' || _0x38a0e8['resourceType']() === 'media' ? _0x38a0e8['abort']() : _0x38a0e8['continue']();
                            }), await _0x736ddf['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x736ddf['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x736ddf['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x37e661(0x258), await _0x736ddf['waitForSelector']('#CustomerEmail'), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x736ddf['type']('#CustomerEmail', '' + _0x3c7cd6[_0x4b7193]['Email']), await _0x37e661(0x12c), await _0x736ddf['type']('#CustomerPassword', '' + _0x3c7cd6[_0x4b7193]['Password']), await _0x37e661(0x226), await _0x736ddf['$eval']('#customer_login', _0x5abc78 => _0x5abc78['submit']()), await _0x37e661(0x7d0), await _0x736ddf['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20' + _0x37c850['cyan']('Solving\x20Captcha')), await _0x736ddf['solveRecaptchas'](), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x736ddf['$eval']('.shopify-challenge__container\x20>\x20form', _0x18f1cb => _0x18f1cb['submit']());
                            try {
                                await _0x736ddf['waitForSelector']('.nav-account'), await _0x37e661(0x4b0);
                            } catch {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x736ddf['goto']('' + _0x3c7cd6[_0x4b7193]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x37e661(0xbb8), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x736ddf['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x736ddf['click']('.product-select-variant-wrapper'), await _0x37e661(0x320), await _0x736ddf['click']('li.product-select-variant__value[data-size=\x22' + _0x3c7cd6[_0x4b7193]['Size'] + '\x22]'), await _0x37e661(0x384), await _0x736ddf['$eval']('#AddToCartForm-product-template-raffle', _0x668605 => _0x668605['submit']()), await _0x736ddf['waitForSelector']('.cart-order-summary__content'), await _0x37e661(0x514), await _0x736ddf['goto']('https://drop.slamjam.com/checkout'), await _0x37e661(0x514), await _0x736ddf['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x736ddf['select']('#checkout_shipping_address_country', '' + _0x3c7cd6[_0x4b7193]['Country']), await _0x37e661(0x200), await _0x736ddf['waitForSelector']('#checkout_shipping_address_first_name'), await _0x736ddf['type']('#checkout_shipping_address_first_name', '' + _0x3c7cd6[_0x4b7193]['FirstName']), await _0x37e661(0x237), await _0x736ddf['type']('#checkout_shipping_address_last_name', '' + _0x3c7cd6[_0x4b7193]['LastName']), await _0x37e661(0x1e0), await _0x736ddf['type']('#checkout_shipping_address_address1', _0x3c7cd6[_0x4b7193]['Address1'] + '\x20' + _0x3c7cd6[_0x4b7193]['HouseNumber']), await _0x37e661(0x514), await _0x736ddf['type']('#checkout_shipping_address_address2', '' + _0x3c7cd6[_0x4b7193]['Address2']), await _0x37e661(0x514);
                            _0x3c7cd6[_0x4b7193]['Postcode'] == undefined && (_0x3c7cd6[_0x4b7193]['Postcode'] = _0x3c7cd6[_0x4b7193]['Zip']);
                            await _0x736ddf['type']('#checkout_shipping_address_zip', '' + _0x3c7cd6[_0x4b7193]['Postcode']), await _0x37e661(0x2bc), await _0x736ddf['type']('#checkout_shipping_address_city', '' + _0x3c7cd6[_0x4b7193]['City']), await _0x37e661(0x320), await _0x736ddf['type']('#checkout_shipping_address_phone', '' + _0x3c7cd6[_0x4b7193]['Phone']), await _0x37e661(0x320), await _0x736ddf['click']('#continue_button'), await _0x37e661(0xbb8), await _0x736ddf['waitForSelector']('.summary-title'), await _0x37e661(0x320), await _0x736ddf['click']('#continue_button'), await _0x37e661(0x320), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x736ddf['waitForSelector']('#checkout_credit_card_vault'), await _0x37e661(0x3e8);
                            var _0xf102dd = await _0x736ddf['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2d0376 = await _0xf102dd['contentFrame']();
                            await _0x2d0376['click']('#number'), await _0x37e661(0x3e8), await _0x2d0376['type']('#number', '' + _0x3c7cd6[_0x4b7193]['CardNumber'], { 'delay': 0x78 }), _0xf102dd = await _0x736ddf['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2d0376 = await _0xf102dd['contentFrame'](), await _0x37e661(0x1c2), await _0x2d0376['click']('#name'), await _0x37e661(0x1f4), await _0x2d0376['type']('#name', '' + _0x3c7cd6[_0x4b7193]['NameOnCard'], { 'delay': 0x78 }), _0xf102dd = await _0x736ddf['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2d0376 = await _0xf102dd['contentFrame'](), await _0x37e661(0x1c2), await _0x2d0376['click']('#expiry'), await _0x37e661(0x1f4), await _0x2d0376['type']('#expiry', '' + _0x3c7cd6[_0x4b7193]['ExpiryDate'], { 'delay': 0x78 }), _0xf102dd = await _0x736ddf['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2d0376 = await _0xf102dd['contentFrame'](), await _0x37e661(0x1c2), await _0x2d0376['click']('#verification_value'), await _0x37e661(0x1f4), await _0x2d0376['type']('#verification_value', '' + _0x3c7cd6[_0x4b7193]['CVV'], { 'delay': 0x78 }), await _0x736ddf['$eval']('#accepts-flag-raffle', _0x708109 => _0x708109['click']()), await _0x37e661(0x7d0), console['log'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x736ddf['$eval']('#continue_button', _0x8391ee => _0x8391ee['click']()), await _0x37e661(0x1b58), await _0x736ddf['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x736ddf['$eval']('.edit_checkout.animate-floating-labels', _0x557aae => _0x557aae['submit']()), await _0x37e661(0x7d0);
                            try {
                                await _0x736ddf['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4cd29e = 'no', _0x3324c5(_0x3c7cd6[_0x4b7193], _0x3bab78), console['log'](_0x37c850['green'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1b5951) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1b5951['message']);
                            }
                            var _0x1b50b2 = await _0xb7405e(_0x3c7cd6[_0x4b7193], _0x3bab78, 'dev', ![]), _0x586b32 = await _0xb7405e(_0x3c7cd6[_0x4b7193], _0x3bab78, 'pub', ![]);
                            const _0x28bf58 = {
                                'succesDEVMSG': { 'embeds': [_0x1b50b2] },
                                'succesPUBMSG': { 'embeds': [_0x586b32] }
                            };
                            try {
                                _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], _0x28bf58['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x230f5d, _0x28bf58['succesDEVMSG']), await _0x37e661(0xc8), await _0xb69523(_0x460ce8, _0x28bf58['succesPUBMSG']);
                            } catch (_0x1a7913) {
                                console['log'](_0x37c850['yellow'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1a7913));
                            }
                        } catch (_0x3d6d37) {
                            console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x113f2d[taskModule]['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20' + _0x3d6d37)), _0x2abaa7 = '' + _0x3d6d37;
                            var _0x5705cd = await _0xb7405e(kickz[_0x4b7193], _0x3bab78, 'dev', !![], _0x2abaa7);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5705cd] }, _0x56452b['webhook'] != undefined && _0x56452b['webhook'] != '' && await _0xb69523(_0x56452b['webhook'], EMBEDS['errorDEV']), await _0xb69523(_0x1a5beb, EMBEDS['errorDEV']), _0x4cd29e = 'yes';
                        } finally {
                            _0x46b76e && _0x46b76e['close']();
                            if (_0x4cd29e == 'yes' && _0x2fd2ed != 0x5 && _0x2abaa7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x37c850['red'](_0x3071a0() + '\x20[' + _0x3bab78['name'] + ']\x20Task\x20' + (_0x4b7193 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fd2ed + '\x20/\x205)')), _0x4b7193 = _0x4b7193 - 0x1, _0x2fd2ed = _0x2fd2ed + 0x1;
                                continue;
                            }
                            _0x4cd29e == 'yes' && _0x2fd2ed >= 0x5 && (_0x48023a(_0x3c7cd6[_0x4b7193], _0x3bab78), _0x4cd29e = 'no', _0x2fd2ed = 0x0), console['log']('Waiting\x20for\x20' + _0x56452b['delay'] + '\x20ms'), await _0x37e661(_0x56452b['delay']);
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
                'function': async function (_0x239653) {
                    var _0x5c1213 = await _0x19840f(), _0xd3f1e6 = _0x46e118['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4d8196 = _0x27034d['parse'](_0xd3f1e6, { 'header': !![] })['data'];
                    for (var _0x4fdeaf = 0x0; _0x4fdeaf < _0x4d8196['length']; _0x4fdeaf++) {
                        var _0xace144 = _0x4d8196[_0x4fdeaf]['Store'], _0x38179b = _0x4d8196[_0x4fdeaf]['Mode'];
                        for (var _0x226598 of _0x113f2d) {
                            const _0x416bb9 = _0x226598['name']['includes'](_0xace144);
                            if (!_0x416bb9)
                                continue;
                            for (mode of _0x226598['modules']) {
                                if (mode['name'] == _0x38179b) {
                                    console['log']('Running\x20' + _0x37c850['cyan'](mode['name'])), await mode['function'](mode, [_0x4d8196[_0x4fdeaf]], _0x5c1213);
                                    var _0x42e694 = _0xd3f1e6['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x46e118['writeFileSync']('../failed-tasks.csv', _0x42e694);
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
                    var _0x766fa7 = await _0x32d837['get']('Answer');
                    if (_0x766fa7['Answer']['toLowerCase']() == 'y') {
                        _0x46e118['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x37e661(0x3e8);
                        return;
                    }
                    if (_0x766fa7['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x37e661(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x37e661(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0xc75883(_0x1799d1) {
    var _0x59646d = await _0x19840f(), _0x12901b = _0x46e118['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x8e1e4d = _0x27034d['parse'](_0x12901b, { 'header': !![] })['data'];
    for (var _0x2a48e1 = 0x0; _0x2a48e1 < _0x8e1e4d['length']; _0x2a48e1++) {
        var _0x15d07e = _0x8e1e4d[_0x2a48e1]['Store'], _0x45c2a7 = _0x8e1e4d[_0x2a48e1]['Mode'];
        for (var _0x4e4d11 of _0x113f2d) {
            const _0x60da82 = _0x4e4d11['name']['includes'](_0x15d07e);
            if (_0x60da82)
                for (mode of _0x113f2d[_0x4e4d11]['modules']) {
                    const _0x3a38ca = mode['name']['includes'](_0x45c2a7);
                    _0x3a38ca && (_0x1799d1 = mode['name'], await mode['function'](_0x1799d1, _0x8e1e4d[_0x2a48e1], _0x59646d));
                }
        }
    }
}
async function _0x3c404b() {
    await _0x39f8a5(), console['clear']();
    if (_0x519edc != 'devkey') {
        let _0x36bc7c = await _0x3f0a94['autoUpdate']();
        if (_0x36bc7c === 'yes')
            return _0x31fc85('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x57ebb9 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x37e661(0x2710);
        ;
    }
    await _0xf5a794(_0x57ebb9);
    if (_0x4b1efd === ![])
        return console['log']('Closing\x20Browser'), await _0x37e661(0xbb8);
    else
        try {
            var _0x251929 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x54cb3f
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x519edc
                    }
                ]
            }];
            const _0x2c56bd = { 'embeds': _0x251929 };
            var _0x5c71f2 = await _0xb7405e(null, null, 'open', ![]);
            const _0x18fcb6 = { 'openDEVMSG': { 'embeds': [_0x5c71f2] } };
            await _0xb69523(_0xaea6a3, _0x18fcb6['openDEVMSG']);
            async function _0x3eaed7() {
                _0x230bf5('JRaffles\x20' + _0x519edc), console['clear'](), console['log']('Welcome\x20to\x20' + _0x37c850['cyan']('JRaffles();') + '\x20' + _0x519edc), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0xfc22a3 = 0x0; _0xfc22a3 < _0x113f2d['length'] - 0x4; _0xfc22a3++) {
                    if (_0xfc22a3 >= 0xa) {
                        console['log']('\x20(' + _0xfc22a3 + ')\x20[' + _0x113f2d[_0xfc22a3]['name'] + ']');
                        continue;
                    }
                    if (_0x113f2d[_0xfc22a3]['name'] === 'Reload\x20Settings' || _0x113f2d[_0xfc22a3]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0xfc22a3 + ')\x20\x20[' + _0x113f2d[_0xfc22a3]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x113f2d['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x113f2d['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x113f2d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x113f2d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5e5a93();
                if (taskModule > _0x113f2d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x37e661(0x3e8), _0x3eaed7();
                if (_0x113f2d[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x2) {
                            var _0x556db4 = await _0x19840f(), _0x193aec = await _0x2e5ba3();
                            _0x56452b['shuffleTasks'] && await _0x3306a7(_0x193aec), await _0x5b8a8f['function'](_0x5b8a8f, _0x193aec, _0x556db4);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x556db4 = await _0x19840f(), _0x193aec = await _0x2e5ba3();
                                _0x56452b['shuffleTasks'] && await _0x3306a7(_0x193aec), await _0x5b8a8f['function'](_0x5b8a8f, _0x193aec, _0x556db4);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x556db4 = await _0x19840f();
                                    await _0x5b8a8f['function'](_0x5b8a8f, _0x556db4);
                                }
                            }
                        }
                    } catch (_0x5b81fa) {
                        console['log'](_0x5b81fa), await _0x37e661(0x7d0);
                    }
                    return _0x3eaed7();
                }
                if (_0x113f2d[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                        var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x556db4 = await _0x19840f(), _0x5b48a1 = await _0x2e5ba3();
                            _0x56452b['shuffleTasks'] && await _0x3306a7(_0x5b48a1), await _0x5b8a8f['function'](_0x5b8a8f, _0x5b48a1, _0x556db4);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x556db4 = await _0x19840f(), _0x5b48a1 = await _0x2e5ba3();
                                _0x56452b['shuffleTasks'] && await _0x3306a7(_0x5b48a1), await _0x5b8a8f['function'](_0x5b8a8f, _0x5b48a1, _0x556db4);
                            }
                        }
                    } catch (_0x5b4c56) {
                        console['log'](_0x5b4c56), await _0x37e661(0xfa0);
                    }
                    return _0x3eaed7();
                }
                if (_0x113f2d[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x556db4 = await _0x19840f();
                        return await _0x5b8a8f['function'](_0x5b8a8f, _0x556db4), _0x3eaed7();
                    }
                    var _0x556db4 = await _0x19840f(), _0x3520b7 = await _0x2e5ba3();
                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3520b7), await _0x5b8a8f['function'](_0x5b8a8f, _0x3520b7, _0x556db4), _0x3eaed7();
                }
                if (_0x113f2d[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x556db4 = await _0x19840f(), _0x3520b7 = await _0x2e5ba3();
                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3520b7), await _0x5b8a8f['function'](_0x5b8a8f, _0x3520b7, _0x556db4), _0x3eaed7();
                }
                if (_0x113f2d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x556db4 = await _0x19840f(), _0x3520b7 = await _0x2e5ba3();
                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3520b7), await _0x5b8a8f['function'](_0x5b8a8f, _0x3520b7, _0x556db4), _0x3eaed7();
                }
                if (_0x113f2d[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x556db4 = await _0x19840f(), _0x3520b7 = await _0x2e5ba3();
                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3520b7), await _0x5b8a8f['function'](_0x5b8a8f, _0x3520b7, _0x556db4), _0x3eaed7();
                } else {
                    if (_0x113f2d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                        var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x556db4 = await _0x19840f(), _0x104ffa = await _0x2e5ba3();
                            return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x104ffa), await _0x5b8a8f['function'](_0x5b8a8f, _0x104ffa, _0x556db4), _0x3eaed7();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x556db4 = await _0x19840f();
                                return await _0x5b8a8f['function'](_0x5b8a8f, null, _0x556db4), _0x3eaed7();
                            }
                        }
                        ;
                    } else {
                        if (_0x113f2d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                            var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction], _0x556db4 = await _0x19840f(), _0x35b1e4 = await _0x2e5ba3();
                            return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x35b1e4), await _0x5b8a8f['function'](_0x5b8a8f, _0x35b1e4, _0x556db4), await _0x37e661(0x1388), _0x3eaed7();
                        } else {
                            if (_0x113f2d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x556db4 = await _0x19840f(), _0x104ffa = await _0x2e5ba3();
                                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x104ffa), await _0x5b8a8f['function'](_0x5b8a8f, _0x104ffa, _0x556db4), _0x3eaed7();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x556db4 = await _0x19840f();
                                        return await _0x5b8a8f['function'](_0x5b8a8f, null, _0x556db4), _0x3eaed7();
                                    }
                                }
                                ;
                            } else {
                                if (_0x113f2d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x2f7329('https://bouncewear.com/nl/account/register', _0x5b8a8f);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x113f2d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                        var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x556db4 = await _0x19840f(), _0x3965a9 = await _0x2e5ba3();
                                            return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3965a9), await _0x5b8a8f['function'](_0x5b8a8f, _0x3965a9, _0x556db4), _0x3eaed7();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x556db4 = await _0x19840f(), _0x3965a9 = await _0x2e5ba3();
                                                return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x3965a9), await _0x5b8a8f['function'](_0x5b8a8f, _0x3965a9, _0x556db4), _0x3eaed7();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x113f2d[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                            var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x556db4 = await _0x19840f(), _0x334de1 = await _0x2e5ba3();
                                                return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x334de1), await _0x5b8a8f['function'](_0x5b8a8f, _0x334de1, _0x556db4), _0x3eaed7();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x556db4 = await _0x19840f(), _0x334de1 = await _0x2e5ba3();
                                                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x334de1), await _0x5b8a8f['function'](_0x5b8a8f, _0x334de1, _0x556db4), _0x3eaed7();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x113f2d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                                var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x556db4 = await _0x19840f(), _0x346b72 = await _0x2e5ba3();
                                                    return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x346b72), await _0x5b8a8f['function'](_0x5b8a8f, _0x346b72, _0x556db4), _0x3eaed7();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x556db4 = await _0x19840f(), _0x346b72 = await _0x2e5ba3();
                                                        return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x346b72), await _0x5b8a8f['function'](_0x5b8a8f, _0x346b72, _0x556db4), _0x3eaed7();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x113f2d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                                    var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x556db4 = await _0x19840f(), _0x5b4a9f = await _0x2e5ba3();
                                                        return _0x56452b['shuffleTasks'] && await _0x3306a7(_0x5b4a9f), await _0x5b8a8f['function'](_0x5b8a8f, _0x5b4a9f, _0x556db4), _0x3eaed7();
                                                    }
                                                } else {
                                                    if (_0x113f2d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x37e661(0x3e8), _0x3eaed7();
                                                    else {
                                                        if (_0x113f2d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4a1802 = _0x113f2d[taskModule]['name'], _0x556db4 = await _0x19840f();
                                                            return await _0x4bdeb1(_0x4a1802, _0x556db4), _0x3eaed7();
                                                        } else {
                                                            if (_0x113f2d[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x17234e(_0x113f2d[taskModule]['modules']);
                                                                var _0x5b8a8f = _0x113f2d[taskModule]['modules'][taskFunction];
                                                                return await _0x5b8a8f['function'](_0x5b8a8f), _0x3eaed7();
                                                            } else {
                                                                if (_0x113f2d[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x60c6d4 = 0x0;
                                                                    for (const _0x3e08a1 in _0x56452b) {
                                                                        console['log']('(' + _0x60c6d4 + ')\x20' + _0x3e08a1 + '\x20:\x20' + _0x56452b[_0x3e08a1]), _0x60c6d4++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x60c6d4 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x58e7cc = await _0x38332b();
                                                                    if (_0x58e7cc == _0x60c6d4)
                                                                        return _0x3eaed7();
                                                                    console['clear'];
                                                                    var _0x3e19be = 0x0;
                                                                    for (var _0x4e104f in _0x56452b) {
                                                                        if (_0x58e7cc == _0x3e19be) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4e104f + '\x20:'), _0x56452b[_0x4e104f] = await _0x2e648c(), _0x46e118['writeFileSync']('../settings.json', JSON['stringify'](_0x56452b));
                                                                            break;
                                                                        } else
                                                                            _0x3e19be++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x37e661(0xbb8), _0x3eaed7();
                                                                } else {
                                                                    if (_0x113f2d[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x39f8a5(), _0x3eaed7();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x113f2d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x31e0d6 = await _0x2a15f9();
                                                                            _0x31e0d6 == 'ModuleVoorDeBoys' ? (await _0x2cc713(), await _0xfb859a(), await afewFunction(_0x106cf1[_0x5110d9], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x37e661(0xbb8));
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
                await _0x3eaed7();
            } catch (_0x563fd3) {
                return console['log'](_0x563fd3), _0x3eaed7();
            }
        } catch (_0x3c9086) {
            return console['log'](_0x3c9086), await _0x37e661(0x3a98);
        }
}
;
_0x230bf5('JRaffles\x20' + _0x519edc), _0x39f8a5();
try {
    _0x3c404b();
} catch (_0x4c8ade) {
    var _0x35330d = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x54cb3f
            },
            {
                'name': 'Version',
                'value': '' + _0x519edc
            },
            {
                'name': 'Error',
                'value': '' + _0x4c8ade
            }
        ]
    }];
    const _0x252851 = { 'embeds': _0x35330d };
    _0xb69523(_0x1a5beb, _0x252851);
}